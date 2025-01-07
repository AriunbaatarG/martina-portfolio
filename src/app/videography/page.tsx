"use client";
import Header from "../components/Header";

const Videography = () => {
  return (
    <>
      <Header /> {/* Include the Header component */}
      <div className="min-h-screen p-10 bg-gradient-to-b from-gray-100 dark:from-gray-900 to-gray-50 dark:to-gray-800 text-gray-800 dark:text-gray-100 font-roc-grotesk pt-[150px]">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* YouTube Video 1 */}
          <div className="aspect-w-16 aspect-h-9">
            <iframe
              src="https://www.youtube.com/embed/OOuFLqJ80Ts"
              title="YouTube Video 1"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              className="w-full h-[400px] rounded-lg shadow-lg"
            ></iframe>
          </div>

          {/* YouTube Video 2 */}
          <div className="aspect-w-16 aspect-h-9">
            <iframe
              src="https://www.youtube.com/embed/F3uzYyp79Ms"
              title="YouTube Video 2"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              className="w-full h-[400px]  rounded-lg shadow-lg"
            ></iframe>
          </div>

          {/* YouTube Video 3 */}
          <div className="aspect-w-16 aspect-h-9">
            <iframe
              src="https://www.youtube.com/embed/_g8EqhtudT4"
              title="YouTube Video 3"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              className="w-full h-[400px] rounded-lg shadow-lg"
            ></iframe>
          </div>

          {/* YouTube Video 4 */}
          <div className="aspect-w-16 aspect-h-9">
            <iframe
              src="https://www.youtube.com/embed/ld_V8nN-bGU"
              title="YouTube Video 4"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              className="w-full h-[400px] rounded-lg shadow-lg"
            ></iframe>
          </div>
        </div>
      </div>
    </>
  );
};

export default Videography;
