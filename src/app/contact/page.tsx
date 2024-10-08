"use client";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faInstagram,
  faTiktok,
  faYoutube,
} from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons"; // For email icon
import Header from "../components/Header";

export default function Contact() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <Header />

      <div className="mt-24">
        <p className="font-mono text-lg text-center">
          If you have any questions, wish to discuss potential commissions, or
          simply want to engage in a conversation, don&apos;t hesitate to get in
          touch with me directly. Feel free to reach out via Instagram or drop
          me an email—I&apos;m always open to connecting and discussing any
          photography-related matters or just having a friendly chat.
        </p>
      </div>

      <div className="flex items-center justify-center border-b-4 border-black">
        <p className="font-mono font-bold text-lg">martinaiden39@gmail.com</p>
      </div>

      <div className="grid grid-flow-cols grid-cols-4 gap-4">
        <Link
          href="https://www.instagram.com/idenlessly/"
          passHref
          legacyBehavior
        >
          <a className="text-gray-700 hover:text-gray-500 dark:text-white hover:cursor-pointer">
            <FontAwesomeIcon icon={faInstagram} size="2x" />
          </a>
        </Link>
        <Link
          href="https://www.tiktok.com/@idenlesssly?_t=8hWLZt3W79i&_r=1"
          passHref
          legacyBehavior
        >
          <a className="text-gray-700 hover:text-gray-500 dark:text-white hover:cursor-pointer">
            <FontAwesomeIcon icon={faTiktok} size="2x" />
          </a>
        </Link>
        <Link
          href="https://www.youtube.com/@martinaidendemaj902/featured"
          passHref
          legacyBehavior
        >
          <a className="text-gray-700 hover:text-gray-500 dark:text-white hover:cursor-pointer">
            <FontAwesomeIcon icon={faYoutube} size="2x" />
          </a>
        </Link>
        <Link href="mailto:martinaiden39@gmail.com" passHref legacyBehavior>
          <a className="text-gray-700 hover:text-gray-500 dark:text-white hover:cursor-pointer">
            <FontAwesomeIcon icon={faEnvelope} size="2x" />
          </a>
        </Link>
      </div>
    </main>
  );
}
