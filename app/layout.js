import { announcements } from "@constants/Announcements";
import AnnouncementBar from "@components/AnnouncementBar";
import Header from "@components/Header";
import Provider from "@components/Provider";
import "@styles/globals.css";

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
      <body>
        <Provider>
          <AnnouncementBar announcements={announcements} />
          <Header />
          {children}
        </Provider>
      </body>
    </html>
  );
}
