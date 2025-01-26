import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "ShelfLife",
  description: "Track your fridge and pantry items with ease",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} ShelfLife`}
      >
        {children}
      </body>
    </html>
  );
}



// import './globals.css';

// export const metadata = {
//   title: 'ShelfLife',
//   description: 'Track your pantry and fridge items',
// };

// export default function RootLayout({ children }) {
//   return (
//     <html lang="en">
//       <body>
//         <header>
//           <h1>ShelfLife</h1>
//         </header>
//         {children}
//       </body>
//     </html>
//   );
// }
