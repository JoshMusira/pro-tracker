import '@radix-ui/themes/styles.css';
import './theme-config.css'
import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import NavBar from './NavBar'
import { Theme, ThemePanel } from '@radix-ui/themes';

const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-inter',
});

export const metadata: Metadata = {
  title: 'Pro Task App',
  description: 'A project that trackers your progress',
}


export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.variable}>
        <Theme appearance="light" accentColor="brown" radius="full">
          <NavBar />
          <main>{children}</main>
          {/* <ThemePanel /> */}
        </Theme>

      </body>
    </html>
  )
}
