import type { NextApiRequest, NextApiResponse } from 'next';
import { NextResponse } from 'next/server';
import { connectDb } from "../../../app/helper/db";
import { User } from "../../models/user";
connectDb();
console.log('call api');

export function GET() {
  const users = [
    {
      name: 'test1',
      username: 'abc@gmail.com',
      password: '123'
    }
  ];
  return NextResponse.json(users);
}

export function POST() {
  const uuser = new User({
    name: "kundan",
    email: "kundan@gmail.com",
    password: "ddfdfs"
  });
  uuser.save();
  console.log("user is created");
}