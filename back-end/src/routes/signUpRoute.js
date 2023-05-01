import { getDbConnection } from "../db";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
export const signUpRoute = {
  path: "/api/signup",
  method: "post",
  handler: async (req, res) => {
    const { email, password } = req.body;

    // Get a connection to the authentication database by name.
    const db = getDbConnection("react-auth-db");

    // Check sign up email against the existing emails.
    const user = await db.collection("users").findOne({ email });

    // Respond with conflicting resource status code.
    if (user) {
      res.sendStatus(409);
    }

    // Encrypt the password with bcrypt using 12 iterations.
    const passwordHash = await bcrypt.hash(password, 12);

    // New user to insert into the database.
    const startingInfo = {
      hairColor: "",
      favoriteFood: "",
      bio: "",
    };

    // Insert statement for the user, with provided schema.
    const result = await db.collection("users").insertOne({
      email,
      password,
      info: startingInfo,
      isVerified: false,
    });
    const { insertedId } = result; // default identifier

    // Generate a JSON Web Token to send back to the client for use.
    jwt.sign(
      {
        id: insertedId,
        email,
        info: startingInfo,
        isVerified: false,
      },
      // JSON Web Token Secret generated using dotenv.
      process.env.JWT_SECRET,
      {
        expiresIn: "2d",
      },
      (err, token) => {
        if (err) {
          return res.status(500).send(err);
        }
        res.status(200).json({ token });
      }
    );

    // JWT Secret used to sign the token it creates
  },
};
