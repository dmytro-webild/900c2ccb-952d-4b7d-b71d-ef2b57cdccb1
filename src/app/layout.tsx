import type { Metadata } from "next";
import { Halant } from "next/font/google";
import { Inter } from "next/font/google";
import "./globals.css";
import "@/lib/gsap-setup";
import { ServiceWrapper } from "@/components/ServiceWrapper";
import Tag from "@/tag/Tag";
import { getVisualEditScript } from "@/utils/visual-edit-script";
import { Source_Sans_3 } from "next/font/google";



export const metadata: Metadata = {
  title: 'Olive & Thyme Restaurant | Experience Fine Dining',
  description: 'Indulge in an exquisite culinary journey at Olive & Thyme, where fresh, seasonal ingredients meet innovative cuisine in a warm and inviting atmosphere. Reserve your table today!',
  openGraph: {
    "title": "Olive & Thyme Restaurant | Experience Fine Dining",
    "description": "Indulge in an exquisite culinary journey at Olive & Thyme, where fresh, seasonal ingredients meet innovative cuisine in a warm and inviting atmosphere. Reserve your table today!",
    "url": "https://www.olivetandthyme.com",
    "siteName": "Olive & Thyme",
    "images": [
      {
        "url": "http://img.b2bpic.net/free-photo/male-chef-kitchen-cooking_23-2148934670.jpg",
        "alt": "Elegant dining room at Olive & Thyme"
      }
    ],
    "type": "website"
  },
  twitter: {
    "card": "summary_large_image",
    "title": "Olive & Thyme Restaurant | Experience Fine Dining",
    "description": "Indulge in an exquisite culinary journey at Olive & Thyme, where fresh, seasonal ingredients meet innovative cuisine in a warm and inviting atmosphere. Reserve your table today!",
    "images": [
      "http://img.b2bpic.net/free-photo/male-chef-kitchen-cooking_23-2148934670.jpg"
    ]
  },
  robots: {
    "index": true,
    "follow": true
  },
};

const sourceSans3 = Source_Sans_3({
  variable: "--font-source-sans-3",
  subsets: ["latin"],
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <ServiceWrapper>
        <body className={`${sourceSans3.variable} antialiased`}>
          <Tag />
          {children}
          <script
              dangerouslySetInnerHTML={{
                  __html: `${getVisualEditScript()}`
              }}
          />
        </body>
      </ServiceWrapper>
    </html>
  );
}
