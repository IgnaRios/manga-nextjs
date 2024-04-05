import { NextResponse } from 'next/server';
import { connectDB } from '@/libs/mongodb';
import User from '@/models/user';
import bcrypt from 'bcryptjs';

export async function POST(request) {
  const { username, email, password } = await request.json();

  if (!password || password.length < 6)
    return NextResponse.json(
      {
        message: 'Password is required and must have at least 6 characters',
      },
      {
        status: 400,
      }
    );

  try {
    await connectDB();
    const userFoundbyMail = await User.findOne({ email });
    const userFoundbyUser = await User.findOne({ username });

    if (userFoundbyMail || userFoundbyUser)
      return NextResponse.json(
        { message: 'This User already exists, try another' },
        { status: 409 }
      );

    const passwordHashed = bcrypt.hash(password, 12);

    const user = new User({
      username,
      email,
      passwordHashed,
    });

    const savedUser = await user.save();

    return NextResponse.json({ savedUser });
  } catch (error) {
    console.log(error);
    if (error instanceof Error) {
      return NextResponse.json(
        {
          message: error.message,
        },
        {
          status: 400,
        }
      );
    }
  }
}
