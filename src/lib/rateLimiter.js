const MAX_ATTEMPTS = 5;
const BLOCK_TIME = 15 * 60 * 1000;

// Persist the map across module reloads in development
const loginAttempts =
  globalThis.__loginAttempts ||
  (globalThis.__loginAttempts = new Map());

export function checkRateLimit(key) {
  const now = Date.now();

  const record = loginAttempts.get(key);

  if (!record) {
    loginAttempts.set(key, {
      attempts: 0,
      blockUntil: 0,
    });

    return { allowed: true };
  }

  if (record.blockUntil > now) {
    return {
      allowed: false,
      remaining: Math.ceil((record.blockUntil - now) / 1000),
    };
  }

  if (record.blockUntil <= now) {
    record.attempts = 0;
    record.blockUntil = 0;
  }

  return { allowed: true };
}

export function recordFailedAttempt(key) {
  let record = loginAttempts.get(key);

  if (!record) {
    record = {
      attempts: 0,
      blockUntil: 0,
    };
  }

  record.attempts++;

  if (record.attempts >= MAX_ATTEMPTS) {
    record.blockUntil = Date.now() + BLOCK_TIME;
  }

  loginAttempts.set(key, record);

  console.log("Key:", key, "Attempts:", record.attempts);
}

export function clearAttempts(key) {
  loginAttempts.delete(key);
}