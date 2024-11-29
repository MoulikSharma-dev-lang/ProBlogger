import { NextResponse } from "next/server";
import LoginUser from "@/app/models/Login";
import { connectDb } from "@/app/db/connectDb";
import jwt from "jsonwebtoken";
import { cookies } from "next/headers";

export async function PUT(request) {
    try {
        const cookieStore = await cookies()
        const data = await request.json()
        connectDb()
        const oldToken = jwt.verify(cookieStore.get("token").value, process.env.JWT_SECRET)
        await LoginUser.findOneAndUpdate({email: oldToken.email}, data, {new: true})
        const token = jwt.sign({username: data.username, email: data.email}, process.env.JWT_SECRET)
        cookieStore.set("token", token, {
            httpOnly: true,
            sameSite: "strict",
            maxAge: 60 * 60 * 24 * 7,
            path: "/",
            secure: process.env.NODE_ENV === "production" ? true : false
        })
        return NextResponse.json({data: "User profile has been updated!", success: true})
    } catch (error) {
        console.log(error)
        return NextResponse.json({data: "Error while updating user profile", success: false, error: error})
    }
}