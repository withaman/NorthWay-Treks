import { Poppins } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import WhatsappIcon from "@/components/WhatsappIcon";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

export const metadata = {
    title: "NorthWay Treks",
    description: "Trekking Adventures in the Himalayas",

    icons: {
        icon: "/favicon.ico",
        shortcut: "/favicon.ico",
        apple: "/apple-icon.png",
    },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <meta name="google-site-verification" content="CFgPcDeB0LnZhcSla31x0oXQ5RtQlqec1ABnzeoh_Cw" />
        <link
  rel="stylesheet"
  href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.0/css/all.min.css"
/>

<link
  href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined"
  rel="stylesheet"
/>

      </head>
      <body
        className={`${poppins.className} antialiased`}
      >
        <Navbar />
        {children}
        <WhatsappIcon />
        <Footer />
      </body>
    </html>
  );
}
