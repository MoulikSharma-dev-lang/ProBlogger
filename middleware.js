import { cookies } from "next/headers";
import { NextResponse } from "next/server";

export async function middleware(request){
    const cookieStore = await cookies()
    const token = cookieStore.get("token")

    if (request.nextUrl.pathname.endsWith("/dashboard") || request.nextUrl.pathname.endsWith("/createpost") || request.nextUrl.pathname.endsWith("/posts")) {
        if (!token){
            return NextResponse.redirect(`${process.env.NEXT_PUBLIC_HOST}/login`)
        }
    }
    else if (request.nextUrl.pathname.endsWith("/login")) {
        if (token){
            return NextResponse.redirect(`${process.env.NEXT_PUBLIC_HOST}/dashboard`)
        }
    }
}