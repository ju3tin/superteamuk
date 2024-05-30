import connectMongoDB from "../../../../libs/mongodb";
import User from "../../../../models/user";
import { NextResponse } from "next/server";
import bcrypt from 'bcryptjs';

export async function POST(request) {
    try{
  const saltRounds = 10;
  const { email, password, username } = await request.json();
  const hashedPassword = await bcrypt.hash(password, saltRounds);
  await connectMongoDB();
  await User.create({ email, password: hashedPassword, username });
  return NextResponse.json({ message: "User Created" }, { status: 201 });
}catch (error) {
    if (error.code === 11000) {
      return NextResponse.json({ error: "Email or username already exists" }, { status: 409 });
    } else {
      return NextResponse.json({ error: error.message }, { status: 500 });
    }
  }
}