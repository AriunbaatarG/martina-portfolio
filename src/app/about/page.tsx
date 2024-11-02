"use client";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faInstagram,
  faTiktok,
  faYoutube,
} from "@fortawesome/free-brands-svg-icons";
import Image from "next/image";
import Header from "../components/Header";
import { selfie } from "../images";

export default function AboutMe() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-24 bg-gray-50 dark:bg-gray-900">
      <Header />

      <div className="flex flex-col md:flex-row items-center justify-center mt-12 mb-8 space-y-8 md:space-y-0 md:space-x-12">
        <div className="w-full md:w-1/3 flex justify-center">
          <Image
            src={selfie}
            alt="Profile picture"
            className="rounded-xl shadow-lg"
            width={250}
            height={350}
          />
        </div>

        <div className="w-full md:w-1/2 text-center md:text-left">
          <h1 className="text-2xl font-bold text-gray-800 dark:text-white">
            Hi,
          </h1>
          <p className="text-gray-600 dark:text-gray-300 text-base leading-relaxed mt-4">
            I&apos;m an Albanian photographer based in Germany, but I&apos;m
            available worldwide.
          </p>
          <p className="text-gray-600 dark:text-gray-300 text-base leading-relaxed mt-4">
            My photography journey began with local event shoots, where I fell
            in love with the vibrant energy of dance performances and talent
            shows. Now, I am passionate about the concert photography scene, as
            I enjoy capturing the electric atmosphere and the energy that
            artists bring to the stage.
          </p>
          <p className="text-gray-600 dark:text-gray-300 text-base leading-relaxed mt-4">
            I have extensive experience shooting concerts, outdoor festivals,
            Meet & Greet photos, behind-the-scenes frames, portraits, and
            creating reels for social media platforms. Some of the artists I
            have photographed include GEMINI, Bang Yongguk, BamBam, I.M, B.I,
            and more.
          </p>
          <p className="text-gray-600 dark:text-gray-300 text-base leading-relaxed mt-4">
            You can find me on{" "}
            <Link href="https://www.instagram.com/idenlessly/" legacyBehavior>
              <a className="text-blue-500 hover:underline">Instagram</a>
            </Link>
            ,{" "}
            <Link
              href="https://www.tiktok.com/@idenlesssly?_t=8hWLZt3W79i&_r=1"
              legacyBehavior
            >
              <a className="text-blue-500 hover:underline">TikTok</a>
            </Link>
            , and{" "}
            <Link
              href="https://www.youtube.com/@martinaidendemaj902/featured"
              legacyBehavior
            >
              <a className="text-blue-500 hover:underline">YouTube</a>
            </Link>
            .
          </p>
          <p className="text-gray-600 dark:text-gray-300 text-base leading-relaxed mt-4">
            P.S. I also have a soft spot for landscape photography. I love
            capturing the mundane peacefulness of any scenery when I travel.
          </p>

          <div className="flex space-x-6 justify-center md:justify-start mt-6">
            <Link href="https://www.instagram.com/idenlessly/" legacyBehavior>
              <a className="text-gray-700 hover:text-gray-500 dark:text-white">
                <FontAwesomeIcon icon={faInstagram} size="2x" />
              </a>
            </Link>
            <Link
              href="https://www.tiktok.com/@idenlesssly?_t=8hWLZt3W79i&_r=1"
              legacyBehavior
            >
              <a className="text-gray-700 hover:text-gray-500 dark:text-white">
                <FontAwesomeIcon icon={faTiktok} size="2x" />
              </a>
            </Link>
            <Link
              href="https://www.youtube.com/@martinaidendemaj902/featured"
              legacyBehavior
            >
              <a className="text-gray-700 hover:text-gray-500 dark:text-white">
                <FontAwesomeIcon icon={faYoutube} size="2x" />
              </a>
            </Link>
          </div>
        </div>
      </div>
    </main>
  );
}
