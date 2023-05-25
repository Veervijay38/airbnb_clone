import Modal from "./components/modals/Modal";
import Navbar from "./components/navbar/NavBar";
import "./globals.css";
import { Nunito } from "next/font/google";

import RegisterModal from "@/app/components/modals/RegisterModal";
import ToasterProvider from "./providers/ToasterProvider";

export const metadata = {
  title: "Aribnb",
  description: "AirBnb Clone webapp",
};

const font = Nunito({
  subsets: ["latin"],
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={font.className}>
        {/* <Modal isOpen title="Hello  World" actionLabel="Submit" /> */}
        <RegisterModal />
        <ToasterProvider />
        <Navbar />
        {children}
      </body>
    </html>
  );
}
