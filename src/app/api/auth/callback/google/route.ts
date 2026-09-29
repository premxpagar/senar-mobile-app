import { NextRequest, NextResponse } from "next/server";

export async function GET(request: NextRequest) {
  const { searchParams } = new URL(request.url);
  const code = searchParams.get("code");
  const error = searchParams.get("error");

  if (error || !code) {
    return NextResponse.redirect(new URL("/login?error=google_denied", request.url));
  }

  const clientId = process.env.GOOGLE_CLIENT_ID || process.env.NEXT_PUBLIC_GOOGLE_CLIENT_ID;
  const clientSecret = process.env.GOOGLE_CLIENT_SECRET;
  const redirectUri = "http://localhost:3000/api/auth/callback/google";

  try {
    // 1. Exchange authorization code for Google access token
    const tokenRes = await fetch("https://oauth2.googleapis.com/token", {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: new URLSearchParams({
        code,
        client_id: clientId || "",
        client_secret: clientSecret || "",
        redirect_uri: redirectUri,
        grant_type: "authorization_code",
      }),
    });

    const tokenData = await tokenRes.json();
    if (!tokenData.access_token) {
      console.error("Token error:", tokenData);
      return NextResponse.redirect(new URL("/login?error=token_failed", request.url));
    }

    // 2. Fetch authenticated user profile from Google
    const userRes = await fetch("https://www.googleapis.com/oauth2/v2/userinfo", {
      headers: { Authorization: `Bearer ${tokenData.access_token}` },
    });
    const profile = await userRes.json();

    const workerSession = {
      workerId: "EMP-" + (profile.id ? profile.id.slice(-6) : "GOOG01"),
      name: profile.name || "Google Worker",
      email: profile.email || "",
      avatar: profile.picture || "",
      role: "worker",
      language: "en",
      authProvider: "google",
    };

    // 3. Save to sessionStorage and navigate into the app
    const html = `<!DOCTYPE html>
<html>
  <head>
    <meta charset="utf-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <title>Signing in with Google...</title>
  </head>
  <body style="background:#080810;color:white;display:flex;align-items:center;justify-content:center;height:100vh;margin:0;font-family:system-ui,-apple-system,sans-serif;">
    <div style="text-align:center;padding:24px;">
      <div style="width:48px;height:48px;border:3px solid rgba(245,158,11,0.2);border-top-color:#F59E0B;border-radius:50%;animation:spin 0.8s linear infinite;margin:0 auto 16px;"></div>
      <p style="font-size:16px;font-weight:600;margin:0 0 6px;">Welcome, ${profile.name || "Worker"}!</p>
      <p style="color:rgba(255,255,255,0.4);font-size:12px;margin:0;">Connecting to SENAR Industrial Safety...</p>
    </div>
    <style>@keyframes spin{to{transform:rotate(360deg)}}</style>
    <script>
      sessionStorage.setItem('senar_user', JSON.stringify(${JSON.stringify(workerSession)}));
      setTimeout(function() {
        window.location.href = '/home';
      }, 500);
    </script>
  </body>
</html>`;

    return new NextResponse(html, {
      headers: { "Content-Type": "text/html" },
    });
  } catch (err) {
    console.error("Google Auth error:", err);
    return NextResponse.redirect(new URL("/login?error=auth_failed", request.url));
  }
}
