import { Inter } from "next/font/google";
import { announcements } from "@constants/Announcements";
import AnnouncementBar from "@components/AnnouncementBar";
import Header from "@components/Header";
import Provider from "@components/Provider";
import "./globals.css";
import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Truly Fresh Atta",
  description: "Say good bye to packaged atta",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <meta name="viewport" content="initial-scale=1, width=device-width" />
      </head>
      <body className={inter.className}>
        <Provider>
          <AnnouncementBar announcements={announcements} />
          <Header />
          {children}
        </Provider>
      </body>
    </html>
  );
}
