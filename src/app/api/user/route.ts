import type { NextApiRequest, NextApiResponse } from 'next';
import { NextResponse } from 'next/server';
import { connectDb } from "../../../app/helper/db";
import { User } from "../../models/user";
connectDb();
console.log('call api');

export async function GET(req: Request) {
  let users = [];
  try{
    users = await User.find();
  }catch(error){
    console.log(error);
  }
  return NextResponse.json(users);

}

export async function POST(req: Request) {

  const { name, email, password } = await req.json();

  const user = new User({
    name,
    email,
    password
  });
  try {
    const createdUser = await user.save();
    const response = NextResponse.json(user, {
      status: 200
    });
    console.log("user is created", response);
    return response;
  } catch (err) {
    console.log(err);
    return NextResponse.json({
      message: "Failed to create user!!",
      status: false
    })
  }

}