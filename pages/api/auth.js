import { dbConnect } from "../../lib/dbconnect";
import { passwordHash } from "../../lib/auth";

async function Handler(req, res) {
  const data = req.body;
  const { email, password } = data;

  if (
    !email ||
    !email.includes("@") ||
    !password ||
    password.trim().length < 8
  ) {
    res.status(422).json({
      message: "Invalid input - Password must contain minimum 8 character",
    });
    return;
  }

  const client = await dbConnect();

  const db = client.db();

  const hashedPassword = passwordHash(password);

  db.collection("users").insertOne({
    email: email,
    password: hashedPassword,
  });

  res.status(201).json({ message: "User created!" });
}

export default Handler;
