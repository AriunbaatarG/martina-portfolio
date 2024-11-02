"use client";
import Image from "next/image";
import { Analytics } from "@vercel/analytics/react";
import Header from "../components/Header";
import Masonry from "react-masonry-css"; // Import Masonry
import { EditorialPhotographyURLS } from "../images";

export default function EditorialPhotography() {
  // Define responsive breakpoints for the number of columns
  const breakpointColumnsObj = {
    default: 3, // 4 columns by default
    1300: 3,
    1100: 2, // 3 columns at screen width > 1100px
    700: 1, // 2 columns at screen width > 700px
    500: 1, // 1 column at screen width < 500px
  };

  // Array of image URLs

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-10 pt-[110px]">
      <Header />

      {/* Masonry layout */}
      <Masonry
        breakpointCols={breakpointColumnsObj}
        className="my-masonry-grid"
        columnClassName="my-masonry-grid_column"
      >
        <Analytics />

        {/* Dynamically render images from the array */}
        {EditorialPhotographyURLS.map((url, index) => (
          <Image
            key={index}
            className="object-contain m-2"
            src={url}
            alt={`Image ${index + 1}`}
            width={500}
            height={200}
            priority
          />
        ))}
      </Masonry>
    </main>
  );
}
