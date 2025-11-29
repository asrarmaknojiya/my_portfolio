import type { Metadata } from 'next'
import { GeistSans } from 'geist/font/sans'
import { GeistMono } from 'geist/font/mono'
import './globals.css'

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
    <html lang="en">
      <head>
        <style>{`
html {
  font-family: ${GeistSans.style.fontFamily};
  --font-sans: ${GeistSans.variable};
  --font-mono: ${GeistMono.variable};
}
        `}</style>
        <meta name="google-site-verification" content="t1KTM_KgajzM11fgv4NGU_MS-t1Ho7OwnICDWzFcqmQ" />
        <title>Asrar Maknojiya — Full Stack Developer</title>
        <meta name="title" content="Asrar Maknojiya — Full Stack Developer" />
        <meta name="description" content="I craft modern web apps with React, Node.js, Express, MySQL, and more. Full-stack developer building high-performance digital experiences." />

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
      <body>{children}</body>
    </html>
  )
}
