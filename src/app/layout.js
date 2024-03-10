import { Inter } from "next/font/google";
import "./globals.css";
import Nav from "./components/navigation/Nav";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Luxury Limo ",
  description:
    "Luxury Limo Here",
  openGraph: {
    icon: "https://images.unsplash.com/photo-1485291571150-772bcfc10da5?q=80&w=1856&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    images:
      "https://images.unsplash.com/photo-1485291571150-772bcfc10da5?q=80&w=1856&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    // url: "https://colossal-mindand-cake.vercel.app/",
  },
  twitter: {
    card: "summary_large_image",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Nav/>
        {children}
        </body>
    </html>
  );
}
