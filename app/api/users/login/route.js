import dbConnect from "../../../../libs/mongodb";
import User from "../../../../models/user";
import { NextResponse } from "next/server";
import bcrypt from 'bcryptjs';

export async function POST(request, res) {
    const { method } = request;

    await dbConnect();

    if (method === 'POST') {
        try {
            const { email, password } = req.body;
            const user = await User.findOne({ email: email.toLowerCase() });

            if (!user) {
                return NextResponse.json({ message: 'User not found' }, { status: 404 });
              }

              const isMatch = await bcrypt.compare(password, user.password);

              if (!isMatch) {
                return NextResponse.json({ message: 'Invalid credentials' }, { status: 401 });
              }
          
              // Implement session or token logic here (e.g., JWT)
              return NextResponse.json({ message: 'Login successful', user }, { status: 200 });
            } catch (error) {
              return NextResponse.json({ message: 'Server error', error }, { status: 500 });
            }
          }
        }