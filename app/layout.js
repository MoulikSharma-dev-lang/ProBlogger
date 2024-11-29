import localFont from "next/font/local";
import "./globals.css";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata = {
  title: "ProBlogger - Your very own blog platform",
  description: "ProBlogger is a leading resource for bloggers, offering expert tips, strategies, and tools to help you grow, monetize, and succeed in the world of blogging. Explore guides, tutorials, and job opportunities today!",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} font-sans`}
      >
        <Navbar />
        <div className="min-h-[90vh]">
        {children}
        </div>
        <Footer />
      </body>
    </html>
  );
}
