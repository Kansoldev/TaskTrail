import type { Metadata } from "next";
import { Baloo_Chettan_2 } from "next/font/google";
import Header from "@/components/Header";
import "../globals.css";

export const metadata: Metadata = {
  title: "TaskTrail",
  description:
    "A to-do list history tracker that tracks your todos and stores your todos in history",
};

const balloChettan = Baloo_Chettan_2({
  subsets: ["latin"],
  display: "swap",
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={balloChettan.className}>
      <body>
        <Header />
        {children}
      </body>
    </html>
  );
}
