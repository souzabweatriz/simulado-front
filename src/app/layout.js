import "./globals.css";
import {Roboto} from 'next/font/google'

export const metadata = {
    title: "My Exam Mockup",
    description: "Projeto pra mostrar tudo que eu sei",
};

const roboto = Roboto({
    subsets: ['latin'],
    weight: ['400', '700'],
    display: 'swap',
});

export default function RootLayout({ children }) {
    return (
        <html lang="pt-BR" className={roboto.className}>
            <body>{children}</body>
            <head>
            <link rel="icon" href="/icons/favicon.ico" />
            </head>
        </html>
    );
}
