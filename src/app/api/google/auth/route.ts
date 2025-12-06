import { google } from "googleapis";
import { NextResponse } from "next/server";

export async function GET() {
    const redirectUri = process.env.REDIRECT_URI!;
    const clientId = process.env.CLIENT_ID!;
    const clientSecret = process.env.CLIENT_SECRET!;

    const oauth2Client = new google.auth.OAuth2(clientId, clientSecret, redirectUri);

    const scopes = [
        "https://mail.google.com/",
        "https://www.googleapis.com/auth/userinfo.email",
        "https://www.googleapis.com/auth/userinfo.profile",
    ];

    const url = oauth2Client.generateAuthUrl({
        access_type: "offline",   // important: forces refresh token
        prompt: "consent",        // always ask again to return refresh_token
        scope: scopes,
    });

    return NextResponse.redirect(url);
}
