import { NextResponse } from "next/server";

export function middleware(req) {
  const ua = (req.headers.get("user-agent") || "").toLowerCase();

  // TikTok bot detection
  if (ua.includes("tiktok") || ua.includes("byte")) {
    return new NextResponse(
      `<!DOCTYPE html>
      <html>
        <head>
          <title>m4m4.me</title>
          <meta name="description" content="Explore fun and safe games on m4m4.me.">
        </head>
        <body>
          <h1>Welcome to m4m4.me</h1>
          <p>This is a safe preview page.</p>
        </body>
      </html>`,
      {
        headers: { "content-type": "text/html;charset=UTF-8" },
      }
    );
  }

  // Real users → redirect
  return NextResponse.redirect("https://m4m4.me", 302);
}
