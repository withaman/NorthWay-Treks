import { google } from "googleapis";

export async function GET(req) {
    try {
        const url = new URL(req.url);
        const code = url.searchParams.get("code");

        if (!code) {
            return Response.json(
                {
                    error: "No authorization code received from Google",
                },
                { status: 400 }
            );
        }

        const oauth2Client = new google.auth.OAuth2(
            process.env.GOOGLE_CLIENT_ID,
            process.env.GOOGLE_CLIENT_SECRET,
            process.env.GOOGLE_REDIRECT_URI
        );

        const { tokens } = await oauth2Client.getToken(code);

        console.log("REFRESH TOKEN:", tokens.refresh_token);

        return Response.json({
            success: true,
            refresh_token: tokens.refresh_token,
        });
    } catch (error) {
        return Response.json(
            {
                error: error.message,
            },
            { status: 500 }
        );
    }
}