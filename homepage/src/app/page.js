import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div className="p-10 dark:bg-black">
      <div className="flex items-center justify-center mb-8">
        <Image
          width={100}
          height={100}
          src="/Icon.png"
          alt="github"
        />
        <p className="font-mono dark:text-white text-5xl font-medium text-black ml-4">OwlByTech</p>
      </div>
      <div className="min-h-screen flex flex-col items-center justify-center">
        <p className="font-mono dark:text-white text-5xl font-medium text-black">
          The best software company!
        </p>
        <p className="font-mono dark:text-gray-500 text-gray-600 text-5xl font-medium text-black">
          Page In Development
        </p>
        <br />
        <Link href="https://github.com/OwlbyTech/owlbytech">
          <div className="flex justify-center">
            <Image
              width={100}
              height={100}
              src="/github.svg"
              alt="github"
            />
          </div>
        </Link>
      </div>
    </div>
  );
}
