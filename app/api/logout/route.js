import { NextResponse } from "next/server";
import LoginUser from "@/app/models/Login";
import { connectDb } from "@/app/db/connectDb";
import jwt from "jsonwebtoken";
import { cookies } from "next/headers";

export async function DELETE(request) {
    try {
        const data = await request.json()
        connectDb()
        const cookieStore = await cookies()
        const token = cookieStore.get("token")
        const gotToken = jwt.verify(token.value, process.env.JWT_SECRET)
        await LoginUser.findOneAndDelete({email: gotToken.email})
        cookieStore.delete("token")
        return NextResponse.json({data: "User logged out successfully!", success: true})
    } catch (error) {
        console.log(error)
        return NextResponse.json({data: "Error while logging out user", success: false, error: error})
    }
}