import Image from 'next/image';
import Link from 'next/link';
import { getRandomImage } from './utils/imageUtils';

export default function Home() {
  const topImage = getRandomImage('topimages');
  const bottomImage = getRandomImage('bottomimages');

  return (
    <main className="relative flex min-h-screen flex-col items-center justify-center p-24">
      <div className="relative w-full max-w-lg">
        <Image
          src={topImage}
          alt="Top half of anonymous East Asian male's face."
          width={200}
          height={400}
          className="w-full h-auto"
        />
      </div>
      <div className="relative w-full max-w-lg mt-0">
        <Image
          src={bottomImage}
          alt="Bottom half of anonymous East Asian male's face."
          width={200}
          height={400}
          className="w-full h-auto"
        />
      </div>
      <Link 
        href="/"
        className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-black bg-opacity-50 text-white px-4 py-2 rounded-full hover:bg-opacity-75 transition-all duration-300">
        Load new face
      </Link>
    </main>
  );
}