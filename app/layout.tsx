import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Webhook Payload Diff Monitor — Detect Breaking Changes Instantly",
  description: "Monitor webhook payload changes across deployments. Capture payloads, detect schema changes, and get alerted when breaking changes occur in third-party integrations."
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <script defer src="https://umami.microtool.dev/script.js" data-website-id="b10a3b03-09a6-4efd-a676-9ad34c93af78"></script>
      </head>
      <body className="bg-[#0d1117] text-[#c9d1d9] min-h-screen">{children}</body>
    </html>
  );
}
