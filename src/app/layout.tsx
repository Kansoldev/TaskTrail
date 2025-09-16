import type { Metadata } from "next";
import "../globals.css";

export const metadata: Metadata = {
  title: "TaskTrail",
  description:
    "A to-do list history tracker that tracks your todos and stores your todos in history",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
