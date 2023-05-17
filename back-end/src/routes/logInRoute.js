import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import { getDbConnection } from "../db";

export const logInRoute = {
  path: "/api/login",
  method: "post",
  handler: async (req, res) => {
    const { email, password } = req.body;

    const db = getDbConnection("react-auth-db");
    const user = await db.collection("users").findOne({ email });

    if (!user) return res.sendStatus(401);

    const { _id: id, isVerified, passwordHash, info } = user;

    const isCorrect = await bcrypt.compare(password, passwordHash, (err, result) => {
      if (err) {
        console.error(err);
        return;
      }
      return result;
    });

    if (isCorrect) {
      jwt.sign(
        process.env.JWT_SECRET,
        { id, isVerified, email, info },
        { expiresIn: "2d" },
        (err, token) => {
          if (err) {
            res.status(500).json(err);
          }
          res.status(200).json({ token });
        }
      );
    } else {
      res.sendStatus(401);
    }
  },
};