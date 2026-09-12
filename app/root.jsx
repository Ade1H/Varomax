import {
  Links,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
} from "react-router";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import "./i18n.js"; // Initialize i18next configuration

// Global SEO fallback meta tags
export function meta() {
  return [
    { title: "Varomax - E-Commerce Platform" },
    { name: "description", content: "Your trusted multi-language reseller platform." },
    { property: "og:site_name", content: "Varomax" },
    { property: "og:type", content: "website" },
  ];
}

export default function App() {
  return (
    <html lang="en" dir="ltr">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <Meta />
        <Links />
      </head>
      <body>
        <Navbar />
        <Outlet />
        <Footer />
        <ScrollRestoration />
        <Scripts />
      </body>
    </html>
  );
}