import Image from 'next/image'
import Link from 'next/link'

export default function event_photography() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div className="z-10 max-w-5xl w-full items-center justify-between font-mono text-sm lg:flex mb-10">
        <p className="fixed left-0 top-0 flex w-full justify-center border-b border-gray-300 bg-gradient-to-b from-zinc-200 pb-6 pt-8 backdrop-blur-2xl dark:border-neutral-800 dark:bg-zinc-800/30 dark:from-inherit lg:static lg:w-auto  lg:rounded-xl lg:border lg:bg-gray-200 lg:p-4 lg:dark:bg-zinc-800/30">
          Martinaiden Demaj Portfolio&nbsp;
        </p>
        <div className="fixed bottom-0 left-0 flex h-48 w-full items-end justify-center bg-gradient-to-t from-white via-white dark:from-black dark:via-black lg:static lg:h-auto lg:w-auto lg:bg-none"> 
          <a
            className="pointer-events-none flex place-items-center gap-2 p-8 lg:pointer-events-auto lg:p-0"
            href="https://www.instagram.com/idenlesssly/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Contact
          </a>
        </div>
      </div>
      <div className="mb-8 grid text-center lg:max-w-5xl lg:w-full lg:mb-0 lg:grid-cols-3 lg:text-left">
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
            <p className={`m-0 max-w-[30ch] text-sm opacity-50`}>
              Landscape Digital Photography
            </p>
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
            <p className={`m-0 max-w-[30ch] text-sm opacity-50`}>
              Editorial Photography
            </p>
          </a>
        </Link>

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
            <p className={`m-0 max-w-[30ch] text-sm opacity-50`}>
              Event Digital Photography
            </p>
          </a>
        </Link>
      </div>
      <div className="grid grid-flow-cols lg:grid-cols-3">
        <Image
          className="object-contain m-2"
          src="/Event Photography/Balet Show/balet1.jpeg"
          alt="Martina main"
          width={400}
          height={200}
          priority
        />
        <Image
          className="object-fill m-2"
          src="/Event Photography/Balet Show/balet2.jpeg"
          alt="Martina main"
          width={400}
          height={200}
          priority
        />
        <Image
          className="object-fill m-2"
          src="/Event Photography/Balet Show/balet3.jpeg"
          alt="Martina main"
          width={400}
          height={200}
          priority
        />
        <Image
          className="object-fill m-2"
          src="/Event Photography/Balet Show/balet4.jpeg"
          alt="Martina main"
          width={400}
          height={200}
          priority
        />
        <Image
          className="object-fill m-2"
          src="/Event Photography/Balet Show/balet5.jpeg"
          alt="Martina main"
          width={400}
          height={200}
          priority
        />
        <Image
          className="object-fill m-2"
          src="/Event Photography/Dancestoned 2023/ds1.JPG"
          alt="Martina main"
          width={400}
          height={200}
          priority
        />
        <Image
          className="object-fill m-2"
          src="/Event Photography/Dancestoned 2023/ds2.JPG"
          alt="Martina main"
          width={400}
          height={200}
          priority
        />
        <Image
          className="object-fill m-2"
          src="/Event Photography/Dancestoned 2023/ds3.JPG"
          alt="Martina main"
          width={400}
          height={200}
          priority
        />
        <Image
          className="object-fill m-2"
          src="/Event Photography/Dancestoned 2023/ds4.JPG"
          alt="Martina main"
          width={400}
          height={200}
          priority
        />
        <Image
          className="object-fill m-2 grid-col-2"
          src="/Event Photography/Dancestoned 2023/ds5.JPG"
          alt="Martina main"
          width={400}
          height={200}
          priority
        />
        <Image
          className="object-fill m-2 grid-col-2"
          src="/Event Photography/Dancestoned 2023/ds6.JPG"
          alt="Martina main"
          width={400}
          height={200}
          priority
        />
        <Image
          className="object-fill m-2 grid-col-2"
          src="/Event Photography/Dancestoned 2023/ds7.JPG"
          alt="Martina main"
          width={400}
          height={200}
          priority
        />
      </div>


      
    </main>
  )
}