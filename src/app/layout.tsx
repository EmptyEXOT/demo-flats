import {Inter} from 'next/font/google'
import {Navbar} from "@/widgets/Navbar";
import './styles.css'
const inter = Inter({subsets: ['latin']})

export default function RootLayout({
                                       children,
                                   }: {
    children: React.ReactNode
}) {
    return (
        <html lang="en">
        <body className={inter.className}>
        <Navbar></Navbar>
        {children}
        </body>
        </html>
    )
}
