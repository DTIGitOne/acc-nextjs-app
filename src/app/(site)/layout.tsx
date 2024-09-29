import HeaderMenu from "@/components/menu/HeaderMenu";
import { Metadata } from "next";

export const metadata: Metadata = {
    title: "Main",
  };
  
  export default function RootLayout({
    children,
  }: Readonly<{
    children: React.ReactNode;
  }>) {
    return (
      <>
       <HeaderMenu />
       {children}
      </>
    );
  }
  