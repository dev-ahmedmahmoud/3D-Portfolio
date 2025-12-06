import { google } from "googleapis";
import { NextResponse } from "next/server";

export async function GET(req: Request) {
    const url = new URL(req.url);
    const code = url.searchParams.get("code");

    if (!code) {
        return NextResponse.json({ error: "Missing ?code parameter" }, { status: 400 });
    }

    const oauth2Client = new google.auth.OAuth2(
        process.env.CLIENT_ID!,
        process.env.CLIENT_SECRET!,
        process.env.REDIRECT_URI!
    );

    try {
        const { tokens } = await oauth2Client.getToken(code);

        return NextResponse.json(
            {
                message:
                    "Copy the refresh_token below and paste it into your .env as REFRESH_TOKEN. Then restart your server.",
                tokens,
            },
            { status: 200 }
        );
    } catch (err) {
        console.error("Error exchanging code:", err);
        return NextResponse.json(
            { error: "Failed to exchange code", details: String(err) },
            { status: 500 }
        );
    }
}
