// Reusable header component.
// Logo and User button

// import Image from "next/image";

// export default function Header() {
//   return (
//     <header className="fixed top-0 left-0 w-full bg-[#c8ba9f] text-white py-4 px-6 shadow-md z-20">
//       <div className="container mx-auto flex items-center justify-center">
//         <Image
//           src="/pantry_pro_logo.png"
//           alt="PantryPro Logo"
//           width={600}
//           height={50}
//           priority
//         />
//       </div>
//     </header>
//   );
// }

import Image from "next/image";

export default function Header() {
  return (
    <>
      {/* Header */}
      <header className="fixed top-0 left-0 w-full bg-[#c8ba9f] text-white py-4 px-6 shadow-md z-20">
        <div className="container mx-auto flex items-center justify-center">
          <Image
            src="/pantry_pro_logo.png"
            alt="PantryPro Logo"
            width={400}
            height={50}
            priority
          />
        </div>
      </header>

      {/* Buffer Space */}
      <div className="h-12"></div>
    </>
  );
}
