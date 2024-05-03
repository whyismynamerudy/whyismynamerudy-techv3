import "@styles/globals.css";
import { IBM_Plex_Mono, Poppins } from "next/font/google";
import GoogleAnalytics from '@/components/GoogleAnalytics';

const ibm_plex_mono = IBM_Plex_Mono({
  weight: ["100", "200", "400", "700"],
  subsets: ["latin"],
});

const poppins = Poppins({
  weight: ["100", "200", "400", "700", "900"],
  subsets: ["latin"],
});

export const metadata = {
  title: "Rudy's Portfolio",
  description: "Rudy's Personal Portfolio Site",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <GoogleAnalytics />
      <body className={ibm_plex_mono.className}>
        <div id="root">{children}</div>
      </body>
    </html>
  );
}
