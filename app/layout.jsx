import "./globals.css";
import { Poppins } from "next/font/google";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-poppins",
});

export const metadata = {
  title: "HAVEX",
  description:
    "HAVEX is a modern technology company dedicated to delivering innovative digital solutions for businesses worldwide. We specialize in VoIP services, DevOps solutions, web development, mobile app development, and communication systems that improve efficiency and connectivity.",
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      className={`${poppins.variable} ${poppins.className} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
