import { Request, Response, NextFunction } from "express";
import jwt from "jsonwebtoken";

interface DecodedToken {
  id: string;
  email?: string;
  role?: string;
 
}
declare module "express-serve-static-core" {
  interface Request {
    user?: DecodedToken;
  }
}
const authenticate = (req: Request, res: Response, next: NextFunction) => {
  try {
    const token = req.cookies.token;
console.log(token);

    if (!token) {
      return res.status(401).json({ message: "Please login" });
    }
    const verifyToken = jwt.verify(
      token,
      process.env.SECRET as string
    ) as DecodedToken;
    req.user = verifyToken; 
    next();
  } catch (error) {
    return res.status(401).json({ message: "Invalid or expired token" });
  }
};
export default authenticate;
