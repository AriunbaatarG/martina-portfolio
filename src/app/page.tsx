"use client";
import Image from "next/image";
import { useEffect, useState, useRef, MutableRefObject } from "react";
import { Analytics } from "@vercel/analytics/react";
import Header from "./components/Header";
import Masonry from "react-masonry-css";
import { imageUrls } from "./images";

export default function Home() {
  // Define visibleImages as an object with number keys and boolean values
  const [visibleImages, setVisibleImages] = useState<Record<number, boolean>>(
    {}
  );

  // Correctly type the ref to be a ref object of HTMLImageElement array
  const imageRefs = useRef<(HTMLImageElement | null)[]>([]);

  // Define responsive breakpoints for the number of columns
  const breakpointColumnsObj = {
    default: 4,
    1300: 3,
    1100: 2,
    700: 1,
    500: 1,
  };

  // Create IntersectionObserver to lazy load and trigger animations
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          const targetElement = entry.target as HTMLElement;
          const index = targetElement.dataset.index;

          if (entry.isIntersecting && index !== undefined) {
            setVisibleImages((prev) => ({
              ...prev,
              [Number(index)]: true,
            }));
            observer.unobserve(entry.target); // Stop observing once the image is visible
          }
        });
      },
      { threshold: 0.1 } // Trigger when 10% of the image is visible
    );

    imageRefs.current.forEach((image) => {
      if (image) {
        observer.observe(image);
      }
    });

    return () => {
      if (imageRefs.current) {
        imageRefs.current.forEach((image) => {
          if (image) observer.unobserve(image);
        });
      }
    };
  }, []);

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <Header />

      {/* Masonry layout */}
      <Masonry
        breakpointCols={breakpointColumnsObj}
        className="my-masonry-grid"
        columnClassName="my-masonry-grid_column"
      >
        <Analytics />

        {/* Dynamically render images from the array */}
        {imageUrls.map((url, index) => (
          <Image
            key={index}
            ref={(el) => {
              imageRefs.current[index] = el;
            }}
            className={`object-contain m-2 image-slide-up ${
              visibleImages[index] ? "slide-up-visible" : ""
            }`}
            data-index={index}
            src={url}
            alt={`Image ${index + 1}`}
            width={400}
            height={200}
            priority
          />
        ))}
      </Masonry>
    </main>
  );
}
