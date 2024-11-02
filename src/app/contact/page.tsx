"use client";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faInstagram,
  faTiktok,
  faYoutube,
} from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import Header from "../components/Header";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import emailjs from "emailjs-com";

// Validation schema using Yup
const validationSchema = Yup.object({
  firstName: Yup.string().required("First name is required"),
  lastName: Yup.string().required("Last name is required"),
  email: Yup.string()
    .email("Invalid email address")
    .required("Email is required"),
  subject: Yup.string().required("Subject is required"),
  message: Yup.string().required("Message is required"),
});

export default function Contact() {
  const sendEmail = async (values: any, actions: any) => {
    try {
      await emailjs.send(
        process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID as string,
        process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID as string,
        {
          firstName: values.firstName,
          lastName: values.lastName,
          email: values.email,
          subject: values.subject,
          message: values.message,
        },
        process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY as string
      );
      alert("Email sent successfully!");
      actions.resetForm();
    } catch (error) {
      console.error("Failed to send email:", error);
      alert("Failed to send email. Please try again.");
    } finally {
      actions.setSubmitting(false);
    }
  };

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-6 md:p-24 bg-gray-50 dark:bg-gray-900">
      <Header />

      <div className="mt-8 mb-4 md:mt-12 md:mb-8">
        <p className="text-center text-gray-600 dark:text-gray-300 text-sm">
          Get in touch for questions, commissions, or just to say hello.
        </p>
      </div>

      {/* Contact Form */}
      <Formik
        initialValues={{
          firstName: "",
          lastName: "",
          email: "",
          subject: "",
          message: "",
        }}
        validationSchema={validationSchema}
        onSubmit={sendEmail}
      >
        {({ isSubmitting }) => (
          <Form className="w-full max-w-lg mx-auto space-y-4 md:space-y-6 p-4 md:p-8 bg-white dark:bg-zinc-800 shadow-lg rounded-xl">
            <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
              <div>
                <label
                  htmlFor="firstName"
                  className="block text-sm font-semibold text-gray-600 dark:text-gray-300"
                >
                  First Name
                </label>
                <Field
                  name="firstName"
                  placeholder="John"
                  className="w-full p-2 md:p-3 mt-1 border rounded-md bg-gray-50 dark:bg-gray-700 dark:text-white"
                />
                <ErrorMessage
                  name="firstName"
                  component="div"
                  className="text-red-500 text-xs mt-1"
                />
              </div>

              <div>
                <label
                  htmlFor="lastName"
                  className="block text-sm font-semibold text-gray-600 dark:text-gray-300"
                >
                  Last Name
                </label>
                <Field
                  name="lastName"
                  placeholder="Doe"
                  className="w-full p-2 md:p-3 mt-1 border rounded-md bg-gray-50 dark:bg-gray-700 dark:text-white"
                />
                <ErrorMessage
                  name="lastName"
                  component="div"
                  className="text-red-500 text-xs mt-1"
                />
              </div>
            </div>

            <div>
              <label
                htmlFor="email"
                className="block text-sm font-semibold text-gray-600 dark:text-gray-300"
              >
                Email
              </label>
              <Field
                name="email"
                type="email"
                placeholder="john.doe@example.com"
                className="w-full p-2 md:p-3 mt-1 border rounded-md bg-gray-50 dark:bg-gray-700 dark:text-white"
              />
              <ErrorMessage
                name="email"
                component="div"
                className="text-red-500 text-xs mt-1"
              />
            </div>

            <div>
              <label
                htmlFor="subject"
                className="block text-sm font-semibold text-gray-600 dark:text-gray-300"
              >
                Subject
              </label>
              <Field
                name="subject"
                placeholder="Inquiry about services"
                className="w-full p-2 md:p-3 mt-1 border rounded-md bg-gray-50 dark:bg-gray-700 dark:text-white"
              />
              <ErrorMessage
                name="subject"
                component="div"
                className="text-red-500 text-xs mt-1"
              />
            </div>

            <div>
              <label
                htmlFor="message"
                className="block text-sm font-semibold text-gray-600 dark:text-gray-300"
              >
                Message
              </label>
              <Field
                name="message"
                as="textarea"
                rows="4"
                placeholder="Type your message here..."
                className="w-full p-2 md:p-3 mt-1 border rounded-md bg-gray-50 dark:bg-gray-700 dark:text-white"
              />
              <ErrorMessage
                name="message"
                component="div"
                className="text-red-500 text-xs mt-1"
              />
            </div>

            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full py-2 md:py-3 font-semibold text-white bg-blue-600 rounded-md hover:bg-blue-700 transition disabled:opacity-50"
            >
              {isSubmitting ? "Sending..." : "Send Message"}
            </button>
          </Form>
        )}
      </Formik>

      {/* Social Links */}
      <div className="mt-8 md:mt-12 text-center">
        <div className="grid grid-cols-4 gap-4">
          <Link href="https://www.instagram.com/idenlessly/">
            <FontAwesomeIcon
              icon={faInstagram}
              size="2x"
              className="text-gray-700 hover:text-gray-500 dark:text-white hover:cursor-pointer"
            />
          </Link>
          <Link href="https://www.tiktok.com/@idenlesssly?_t=8hWLZt3W79i&_r=1">
            <FontAwesomeIcon
              icon={faTiktok}
              size="2x"
              className="text-gray-700 hover:text-gray-500 dark:text-white hover:cursor-pointer"
            />
          </Link>
          <Link href="https://www.youtube.com/@martinaidendemaj902/featured">
            <FontAwesomeIcon
              icon={faYoutube}
              size="2x"
              className="text-gray-700 hover:text-gray-500 dark:text-white hover:cursor-pointer"
            />
          </Link>
          <Link href="mailto:martinaiden39@gmail.com">
            <FontAwesomeIcon
              icon={faEnvelope}
              size="2x"
              className="text-gray-700 hover:text-gray-500 dark:text-white hover:cursor-pointer"
            />
          </Link>
        </div>
      </div>
    </main>
  );
}
