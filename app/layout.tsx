import type { Metadata } from 'next'
import { Inter, Plus_Jakarta_Sans, JetBrains_Mono } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'], variable: '--font-sans' })
const jakarta = Plus_Jakarta_Sans({ subsets: ['latin'], variable: '--font-heading' })
const mono = JetBrains_Mono({ subsets: ['latin'], variable: '--font-mono' })

export const metadata: Metadata = {
  title: 'Asrar Maknojiya || Full Stack Developer',
  description: 'Created with v0',
  generator: 'v0.dev',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className={`${inter.variable} ${jakarta.variable} ${mono.variable}`}>
      <head>
        <meta name="google-site-verification" content="t1KTM_KgajzM11fgv4NGU_MS-t1Ho7OwnICDWzFcqmQ" />
        <title>Asrar Maknojiya — Full Stack Developer</title>
        <meta name="title" content="Asrar Maknojiya — Full Stack Developer" />
        <meta name="description" content="I craft modern web apps with React, Node.js, Express, MySQL, and more. Full-stack developer building high-performance digital experiences." />
        <link rel="icon" type="image/jpg+xml" href="/icon.jpg" />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://asrarmaknojiya.vercel.app/" />
        <meta property="og:title" content="Asrar Maknojiya — Full Stack Developer" />
        <meta property="og:description" content="Full-stack developer building smooth, scalable, and secure web applications." />
        <meta
          name="keywords"
          content="Asrar Maknojiya, Full Stack Developer, Web Developer, React Developer, Node.js Developer, Express.js, MySQL, JavaScript Developer, MERN Developer, API Developer, Frontend Developer, Backend Developer"
        />


        <link rel="canonical" href="https://asrarmaknojiya.vercel.app/" />
      </head>
      <body className="font-sans antialiased">{children}</body>
    </html>
  )
}
