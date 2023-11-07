import "~/styles/main.css";

import { GeistSans } from "geist/font";

export const metadata = {
  title: "Streeq",
};

export default function Layout({ children }) {
  return (
    <html lang="en" className={GeistSans.variable}>
      <body>{children}</body>
    </html>
  );
}
