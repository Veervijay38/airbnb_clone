import Modal from "./components/modals/Modal";
import Navbar from "./components/navbar/NavBar";
import "./globals.css";
import { Nunito } from "next/font/google";

import RegisterModal from "@/app/components/modals/RegisterModal";
import RentModal from '@/app/components/modals/RentModal';
import ToasterProvider from "./providers/ToasterProvider";
import LoginModal from "./components/modals/LoginModal";
import getCurrentUser from "./actions/getCurrentUser";

export const metadata = {
  title: "Aribnb",
  description: "AirBnb Clone webapp",
};

const font = Nunito({
  subsets: ["latin"],
});

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const currentUser = await getCurrentUser();

  return (
    <html lang="en">
      <body className={font.className}>
        {/* <Modal isOpen title="Hello  World" actionLabel="Submit" /> */}

        <ToasterProvider />
        <RegisterModal />
        <LoginModal />
        <RentModal />
        <Navbar currentUser={currentUser} />
        {children}
      </body>
    </html>
  );
}
