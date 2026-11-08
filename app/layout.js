import "./globals.css";

export const metadata = {
  title: "Akash Patial | Full Stack Developer (MERN) & Software Engineer",
  description:
    "Portfolio of Akash Patial, Full Stack MERN Developer and B.Tech CSE student (Class of 2027). Experienced in building scalable web platforms with React.js, Next.js, Node.js, Express, and MongoDB.",
  keywords: [
    "Akash Patial",
    "Full Stack Developer",
    "MERN Stack Developer",
    "React.js",
    "Next.js",
    "Node.js",
    "MongoDB",
    "Express.js",
    "Web Developer Mohali",
    "Solitaire Infosys Intern",
    "Rayat Bahra University",
  ],
  authors: [{ name: "Akash Patial", url: "https://github.com/chakshu45" }],
  creator: "Akash Patial",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://chakshu45.github.io",
    title: "Akash Patial | Full Stack Developer (MERN)",
    description:
      "Explore the software engineering projects, internship experience, and technical skills of Akash Patial.",
    siteName: "Akash Patial Portfolio",
  },
  twitter: {
    card: "summary_large_image",
    title: "Akash Patial | Full Stack Developer (MERN)",
    description:
      "Explore the software engineering projects, internship experience, and technical skills of Akash Patial.",
  },
  icons: {
    icon: "/favicon.svg",
    shortcut: "/favicon.svg",
    apple: "/favicon.svg",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="dark scroll-smooth" suppressHydrationWarning>
      <head>
        <link rel="icon" href="/favicon.svg" type="image/svg+xml" />
        <script
          dangerouslySetInnerHTML={{
            __html: `
              (function() {
                try {
                  const storedTheme = localStorage.getItem('portfolio-theme');
                  const supportDarkMode = window.matchMedia('(prefers-color-scheme: dark)').matches;
                  if (storedTheme === 'dark' || (!storedTheme && true)) {
                    document.documentElement.classList.add('dark');
                  } else {
                    document.documentElement.classList.remove('dark');
                  }
                } catch (e) {}
              })();
            `,
          }}
        />
      </head>
      <body className="antialiased min-h-screen selection:bg-teal-500 selection:text-white">
        {children}
      </body>
    </html>
  );
}
