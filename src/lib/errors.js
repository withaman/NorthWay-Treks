export class SessionExpiredError extends Error {
  constructor(message = "Session Expired") {
    super(message);
    this.name = "SessionExpiredError";
  }
}