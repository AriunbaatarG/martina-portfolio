import Image from 'next/image'
import Link from 'next/link'
export default function landscapepage() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div className="z-10 max-w-5xl w-full items-center justify-between font-mono font-semibold text-xl lg:flex mb-10">
        <Link href= "/" passHref legacyBehavior> 
          <p className="fixed left-0 top-0 flex w-full justify-center border-b border-gray-300 bg-gradient-to-b from-zinc-200 pb-6 pt-8 backdrop-blur-2xl dark:border-neutral-800 dark:bg-zinc-800/30 dark:from-inherit lg:dark:bg-zinc-800/30">
            Martinaiden Demaj Portfolio&nbsp;
          </p>
        </Link>
      </div>
      <div className="mb-8 grid text-center lg:max-w-5xl lg:w-full lg:mb-0 lg:grid-cols-3 lg:text-left lg:mb-8">
      <Link href= "/event_photography" passHref legacyBehavior> 
          <a
            className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
          >
            <h2 className={`mb-3 text-xl font-semibold`}>
              Event Photography{' '}
              <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
                -&gt;
              </span>
            </h2>
          </a>
        </Link>
        <Link href= "/editorial" passHref legacyBehavior> 
          <a
            className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
          >
            <h2 className={`mb-3 text-xl font-semibold`}>
              Editorial Photography{' '}
              <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
                -&gt;
              </span>
            </h2>
          </a>
        </Link>
        <Link href= "/landscape" passHref legacyBehavior> 
          <a
            className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
          >
            <h2 className={`mb-3 text-xl font-semibold`}>
              Landscape Photography{' '}
              <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
                -&gt;
              </span>
            </h2>
          </a>
        </Link>
      </div>
      <div className="grid grid-flow-cols lg:grid-cols-3">
        <Image
          className="object-contain m-2"
          src="/Landscape/Bremen Freimarkt/bf1.JPG"
          alt="Martina main"
          width={400}
          height={200}
          priority
        />
        <Image
          className="object-fill m-2"
          src="/Landscape/Bremen Freimarkt/bf2.JPG"
          alt="Martina main"
          width={400}
          height={200}
          priority
        />
        <Image
          className="object-fill m-2"
          src="/Landscape/Bremen Freimarkt/bf3.JPG"
          alt="Martina main"
          width={400}
          height={200}
          priority
        />
        <Image
          className="object-fill m-2"
          src="/Landscape/Bremen Freimarkt/bf4.JPG"
          alt="Martina main"
          width={400}
          height={200}
          priority
        />
        <Image
          className="object-fill m-2"
          src="/Landscape/Bremen Freimarkt/bf5.JPG"
          alt="Martina main"
          width={400}
          height={200}
          priority
        />
        <Image
          className="object-fill m-2 grid-col-2"
          src="/Landscape/Bremen Freimarkt/bf6.JPG"
          alt="Martina main"
          width={400}
          height={200}
          priority
        />
        <Image
          className="object-fill m-2"
          src="/Landscape/London/lon1.JPG"
          alt="Martina main"
          width={400}
          height={200}
          priority
        />
        <Image
          className="object-fill m-2"
          src="/Landscape/London/lon2.JPG"
          alt="Martina main"
          width={400}
          height={200}
          priority
        />
        <Image
          className="object-fill m-2"
          src="/Landscape/London/lon3.JPG"
          alt="Martina main"
          width={400}
          height={200}
          priority
        />
        <Image
          className="object-fill m-2"
          src="/Landscape/London/lon4.JPG"
          alt="Martina main"
          width={400}
          height={200}
          priority
        />
        <Image
          className="object-fill m-2 grid-col-2"
          src="/Landscape/London/lon5.jpg"
          alt="Martina main"
          width={400}
          height={200}
          priority
        />
        <Image
          className="object-fill m-2 grid-col-2"
          src="/Landscape/Vlora/v1.JPG"
          alt="Martina main"
          width={400}
          height={200}
          priority
        />
        <Image
          className="object-fill m-2 grid-col-2"
          src="/Landscape/Schaffhausen/sh3.JPG"
          alt="Martina main"
          width={400}
          height={200}
          priority
        />
        <Image
          className="object-fill m-2 grid-col-2"
          src="/Landscape/Vlora/v7.JPG"
          alt="Martina main"
          width={400}
          height={200}
          priority
        />
        <Image
          className="object-fill m-2 grid-col-2"
          src="/Landscape/Schaffhausen/sh1.JPG"
          alt="Martina main"
          width={400}
          height={200}
          priority
        />
        <Image
          className="object-fill m-2 grid-col-2"
          src="/Landscape/Vlora/v2.JPG"
          alt="Martina main"
          width={400}
          height={200}
          priority
        />
        <Image
          className="object-fill m-2 grid-col-2"
          src="/Landscape/Vlora/v3.JPG"
          alt="Martina main"
          width={400}
          height={200}
          priority
        />
        <Image
          className="object-fill m-2 grid-col-2"
          src="/Landscape/Vlora/v5.JPG"
          alt="Martina main"
          width={400}
          height={200}
          priority
        />
        <Image
          className="object-fill m-2 grid-col-2"
          src="/Landscape/Vlora/v6.JPG"
          alt="Martina main"
          width={400}
          height={200}
          priority
        />
        <Image
          className="object-fill m-2 grid-col-2"
          src="/Landscape/budva/b1.JPG"
          alt="Martina main"
          width={400}
          height={200}
          priority
        />
        <Image
          className="object-fill m-2 grid-col-2"
          src="/Landscape/budva/b2.JPG"
          alt="Martina main"
          width={400}
          height={200}
          priority
        />
        <Image
          className="object-fill m-2 grid-col-2"
          src="/Landscape/budva/b5.JPG"
          alt="Martina main"
          width={400}
          height={200}
          priority
        />
        <Image
          className="object-fill m-2 grid-col-2"
          src="/Landscape/budva/b4.jpg"
          alt="Martina main"
          width={400}
          height={200}
          priority
        />
        <Image
          className="object-fill m-2 grid-col-2"
          src="/Landscape/budva/b3.jpg"
          alt="Martina main"
          width={400}
          height={200}
          priority
        />
        <Image
          className="object-fill m-2 grid-col-2"
          src="/Landscape/Schaffhausen/sh2.JPG"
          alt="Martina main"
          width={400}
          height={200}
          priority
        />
      </div>
      <div className=" bottom-0 left-0 mt-8 flex w-full items-end justify-center dark:from-black dark:via-black text-lg"> 
        <Link href= "/contact" passHref legacyBehavior> 
          <a
            className="pointer-events-none flex place-items-center gap-2 p-8 pointer-events-auto lg:p-0 font-mono font-semibold text-xl"
          >
            Contact
          </a>
        </Link> 
      </div>
    </main>
  )
}
