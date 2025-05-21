import { Metadata } from "next"
import "./globals.css";
import Wave from "react-wavify";
import {Onda} from "@/ui/wave";



export const metadata: Metadata = {
 title: 'Portifolio',
 description: 'teste de portifolio react',
 openGraph: {
    title: "Porno furry",
   description: "Sexo gay selvagem nervoso em 4k muitos pixeis graficos",
    images: ['https://www.reddit.com/r/AmongUs/comments/iuz74r/big_amongus/']  
 }
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`antialiased`}
      >
        <Onda></Onda>

        {children}
      </body>
    </html>
  );
}
