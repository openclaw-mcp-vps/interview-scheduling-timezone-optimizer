import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Interview Scheduling Timezone Optimizer",
  description: "Find optimal interview times across global timezones. Reduce scheduling back-and-forth for HR teams and recruiters."
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <script defer src="https://umami.microtool.dev/script.js" data-website-id="89d1ccc9-c94a-43e3-b934-cb14e4edf532"></script>
      </head>
      <body className="bg-[#0d1117] text-[#c9d1d9] min-h-screen">{children}</body>
    </html>
  );
}
