import "./globals.css";
import '@/styles/variables.css';
import Head from "next/head";

export const metadata = {
  title: "Junior Barber",
  description: "Junior Barber - Barbearia moderna com cortes masculinos, barba, sobrancelha e mais. Agende seu horário online com praticidade e estilo.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="pt-br">
      <Head>
        <link rel="shortcut icon" href="favicon.ico" type="image/x-icon" />
      </Head>
      <body>
        {children}
      </body>
    </html>
  );
}
