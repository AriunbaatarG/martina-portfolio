"use client";
import Image from "next/image";
import { useEffect, useState, useRef } from "react";
import { Analytics } from "@vercel/analytics/react";
import Header from "./components/Header";
import Masonry from "react-masonry-css";
import { imageUrls } from "./images";
import Head from "next/head";

export default function Home() {
  // Define visibleImages as an object with number keys and boolean values
  const [visibleImages, setVisibleImages] = useState<Record<number, boolean>>(
    {}
  );

  // Correctly type the ref to be a ref object of HTMLImageElement array
  const imageRefs = useRef<(HTMLImageElement | null)[]>([]);

  // Define responsive breakpoints for the number of columns
  const breakpointColumnsObj = {
    default: 3,
    1300: 3,
    1100: 2,
    700: 1,
    500: 1,
  };

  useEffect(() => {
    const currentImageRefs = [...imageRefs.current]; // Copy imageRefs.current to a local variable

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

    currentImageRefs.forEach((image) => {
      if (image) {
        observer.observe(image);
      }
    });

    return () => {
      currentImageRefs.forEach((image) => {
        if (image) observer.unobserve(image);
      });
    };
  }, []);

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-10 pt-[110px]">
      <Header />
      <Head>
        <link rel="icon" href="/favicon.ico" sizes="any" />;
      </Head>
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
            className={`object-contain m-2 image-slide-up`}
            data-visible={visibleImages[index] ? "true" : "false"}
            data-index={index}
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
