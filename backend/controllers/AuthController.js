import "dotenv/config";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import User from "../models/UserModel.js";

export const signUp = async (req, res) => {
  try {
    const { fullname, email, password } = req.body;

    const existingUser = await User.findOne({
      where: {
        email: email,
      },
    });

    if (existingUser) {
      return res
        .status(400)
        .json({ message: "User with this email already exists" });
    }

    const hashPw = await bcrypt.hash(password, 10);
    const newUser = await User.create({
      fullname,
      email,
      password: hashPw,
    });

    return res
      .status(201)
      .json({ message: "Account created successfully", user: newUser });
  } catch (error) {
    console.error("Error registering user:", error);
    return res.status(500).json({ message: "Internal Server Error" });
  }
};

export const signIn = async (req, res) => {
  try {
    const { email, password } = req.body;
    const user = await User.findOne({ where: { email } });

    if (!user) {
      return res.status(401).json({ message: "Invalid email or password" });
    }

    const passwordMatch = await bcrypt.compare(password, user.password);
    if (!passwordMatch)
      return res.status(401).json({ message: "Invalid email or password" });

    const accessToken = jwt.sign(
      { userId: user.id, fullname: user.fullname, email: user.email },
      process.env.ACCESS_TOKEN_SECRET,
      {
        expiresIn: "1h",
      }
    );
    res.cookie("accessToken", accessToken, {
      maxAge: 24 * 60 * 60 * 1000, // 1 hari
    });
    return res.status(200).json({ message: "Login successful" });
  } catch (error) {
    return res.status(500).json({ message: `Internal Error: ${error}` });
  }
};

export const signOut = async (req, res) => {
  res.clearCookie("accessToken");

  return res.sendStatus(200);
};
