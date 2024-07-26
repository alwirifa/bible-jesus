import type { Metadata } from "next";
import { Inter, } from "next/font/google";
import "./globals.css";

import { Poppins, DM_Sans,Scheherazade_New  } from "next/font/google";
import { Suspense } from "react";

const poppins_init = Poppins({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700'],
  variable: '--font-poppins'
})

const dm_sans_init = DM_Sans({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700'],
  variable: '--font-dm_sans'
})

const scheherazade_new_init = Scheherazade_New({
  subsets: ['latin'],
  weight: [ '400', '500', '600', '700'],
  variable: '--font-sceheherazade_new'
})



const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Maison De Ophelia",
  description: "Maison De Ophelia",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <Suspense>

      <body className={`${poppins_init.variable} ${scheherazade_new_init.variable} ${dm_sans_init.variable}`}>{children}</body>
      </Suspense>
    </html>
  );
}
