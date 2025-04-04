import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import { ColorSchemeScript, createTheme, MantineProvider } from "@mantine/core";
import { ReduxProvider } from "@/store/provider";
import ApplicationLayout from "@/components/ApplicationLayout";
import "@mantine/core/styles.css";
import classes from "./active.module.css";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "Task Tracker",
  description: "Track your task",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const theme = createTheme({
    autoContrast: true,
    activeClassName: classes.active,
  });
  return (
    <html lang="en">
      <head>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />

        <ColorSchemeScript />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased `}
      >
        <ReduxProvider>
          <MantineProvider theme={theme}>
            <ApplicationLayout>{children}</ApplicationLayout>
          </MantineProvider>
        </ReduxProvider>
      </body>
    </html>
  );
}
