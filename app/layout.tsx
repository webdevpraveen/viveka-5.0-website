import { Analytics } from "@vercel/analytics/react";

// ... previous imports

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark" suppressHydrationWarning>
      <body
        suppressHydrationWarning
        className={clsx(
          inter.variable,
          spaceGrotesk.variable,
          "bg-background text-foreground antialiased overflow-x-hidden selection:bg-neon-cyan/30 selection:text-neon-cyan"
        )}
      >
        <GlobalBackground />
        <SmoothScroll>{children}</SmoothScroll>
        <Analytics />
      </body>
    </html>
  );
}
