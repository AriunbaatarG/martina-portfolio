"use client";
import Image from "next/image";
import { Analytics } from "@vercel/analytics/react";
import Header from "../components/Header";
import Masonry from "react-masonry-css"; // Import Masonry
import { EventPhotographyURLS } from "../images";

export default function EventPhotography() {
  // Define responsive breakpoints for the number of columns
  const breakpointColumnsObj = {
    default: 3, // 4 columns by default
    1300: 3,
    1100: 2, // 3 columns at screen width > 1100px
    700: 1, // 2 columns at screen width > 700px
    500: 1, // 1 column at screen width < 500px
  };

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-10 pt-[150px]">
      <Header />

      {Object.entries(EventPhotographyURLS).map(
        ([title, urls], sectionIndex) => (
          <section key={sectionIndex} className="mb-12 w-full">
            {/* Enhanced Section Title */}
            <div className="text-center relative mb-8">
              <h2 className="text-3xl font-extrabold text-gray-500 dark:text-blue-800 uppercase tracking-wide mb-4">
                {title}
              </h2>
              <div className="flex justify-center">
                <div className="h-1 w-16 bg-blue-500 rounded-md"></div>
              </div>
            </div>

            {/* Masonry Layout */}
            <Masonry
              breakpointCols={breakpointColumnsObj}
              className="my-masonry-grid"
              columnClassName="my-masonry-grid_column"
            >
              <Analytics />
              {urls.map((url, index) => (
                <Image
                  key={index}
                  className="object-contain m-2 rounded-lg shadow-lg  transition-transform duration-300"
                  src={url}
                  alt={`Image ${index + 1}`}
                  width={500}
                  height={200}
                  priority
                />
              ))}
            </Masonry>
          </section>
        )
      )}
    </main>
  );
}
