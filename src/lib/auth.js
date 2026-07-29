import jwt from "jsonwebtoken";

const SECRET = process.env.JWT_SECRET;

export const createToken = (admin) => {
  return jwt.sign(
    {
      id: admin._id,
      email: admin.email,
    },
    SECRET,
    {
      expiresIn: "7d",
    }
  );
};

export const verifyToken = (token) => {
  return jwt.verify(token, SECRET);
};