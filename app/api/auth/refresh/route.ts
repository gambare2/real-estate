import { NextResponse } from "next/server";
import jwt from "jsonwebtoken";

const JWT_SECRET = process.env.JWT_SECRET!;

export async function POST(req: Request) {
  const refreshToken =
    req.headers.get("cookie")?.match(/refresh_token=([^;]+)/)?.[1];

  if (!refreshToken) {
    return NextResponse.json(
      { error: "No refresh token" },
      { status: 401 }
    );
  }

  try {
    jwt.verify(refreshToken, JWT_SECRET);

    const newAccessToken = jwt.sign(
      { role: "admin" },
      JWT_SECRET,
      { expiresIn: "15m" }
    );

    const res = NextResponse.json({ success: true });

    res.cookies.set("access_token", newAccessToken, {
      httpOnly: true,
      sameSite: "strict",
      path: "/"
    });

    return res;
  } catch {
    return NextResponse.json(
      { error: "Invalid refresh token" },
      { status: 401 }
    );
  }
}
