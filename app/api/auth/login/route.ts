import { NextResponse } from "next/server";
import jwt from "jsonwebtoken";

const JWT_SECRET = process.env.JWT_SECRET!;
const ACCESS_EXPIRES = "15m";
const REFRESH_EXPIRES = "7d";

export async function POST(req: Request) {
  const { email, password } = await req.json();

  if (
    email !== process.env.ADMIN_EMAIL ||
    password !== process.env.ADMIN_PASSWORD
  ) {
    return NextResponse.json(
      { error: "Invalid credentials" },
      { status: 401 }
    );
  }

  const accessToken = jwt.sign(
    { role: "admin" },
    JWT_SECRET,
    { expiresIn: ACCESS_EXPIRES }
  );

  const refreshToken = jwt.sign(
    { role: "admin" },
    JWT_SECRET,
    { expiresIn: REFRESH_EXPIRES }
  );

  const res = NextResponse.json({ success: true });

  res.cookies.set("access_token", accessToken, {
    httpOnly: true,
    sameSite: "strict",
    path: "/"
  });

  res.cookies.set("refresh_token", refreshToken, {
    httpOnly: true,
    sameSite: "strict",
    path: "/"
  });

  return res;
}
