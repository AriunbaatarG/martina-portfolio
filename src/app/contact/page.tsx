import Image from 'next/image'
import Link from 'next/link'
export default function contact() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
        <div className="z-10 max-w-5xl w-full items-center justify-between font-mono font-semibold text-xl lg:flex mb-10">
            <Link href= "/" passHref legacyBehavior> 
                <p className="fixed left-0 top-0 flex w-full justify-center border-b border-gray-300 bg-gradient-to-b from-zinc-200 pb-6 pt-8 backdrop-blur-2xl dark:border-neutral-800 dark:bg-zinc-800/30 dark:from-inherit lg:dark:bg-zinc-800/30">
                    Martinaiden Demaj Portfolio&nbsp;
                </p>
            </Link>
        </div>
        <div className="flex items-center justify-center mb-8">
            <p className="font-mono font-semibold text-xl">Contact</p>
        </div>
            <p className="font-mono text-lg text-center mb-8">
                If you have any questions, wish to discuss potential commissions, or simply want to engage in a conversation, don&apos;t hesitate to get in touch with me directly. Feel free to reach out via Instagram or drop me an email—I&apos;m always open to connecting and discussing any photography-related matters or just having a friendly chat.
            </p>
        <div className="flex items-center justify-center border-b-4 border-black mb-8">
            <p className="font-mono font-bold text-lg">martinaiden39@gmail.com</p>
        </div>

        <div className="grid grid-flow-cols grid-cols-4">
            <Link href= "https://www.instagram.com/idenlessly/" passHref legacyBehavior> 
                <Image
                  className="object-fill m-2 grid-col-2 hover:bg-gray-100 dark:bg-white hover:cursor-pointer"
                  src="/social_icons/insta.png"
                  alt="insta"
                  width={50}
                  height={50}
                  priority
              />
            </Link>
            <Link href= "https://www.tiktok.com/@idenlesssly?_t=8hWLZt3W79i&_r=1" passHref legacyBehavior> 
                <Image
                  className="object-fill m-2 grid-col-2 hover:bg-gray-100 dark:bg-white hover:cursor-pointer"
                  src="/social_icons/tiktok.png"
                  alt="insta"
                  width={50}
                  height={50}
                  priority
                />
            </Link>
            <Link href= "https://www.youtube.com/@martinaidendemaj902/featured" passHref legacyBehavior> 
            <Image
                className="object-fill m-2 grid-col-2 hover:bg-gray-100 dark:bg-white hover:cursor-pointer"
                src="/social_icons/youtube.png"
                alt="insta"
                width={50}
                height={50}
                priority
            />
            </Link>
            <Link href= "mailto:martinaiden39@gmail.com" passHref legacyBehavior> 
            <Image
                className="object-fill m-2 grid-col-2 hover:bg-gray-100 dark:bg-white hover:cursor-pointer"
                src="/social_icons/mail.png"
                alt="insta"
                width={50}
                height={50}
                priority
            />
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

    </main>
  )
}
