import Image from 'next/image';
import { getRandomImages } from './utils/imageUtils';

export const revalidate = 0;

export default function Home() {
  const images = getRandomImages('images/eyes', 100); // Changed to 75 images for 5x15 grid

  return (
    <main className="flex min-h-screen items-center justify-center p-4 sm:p-8">
      <div className="grid grid-cols-10 sm:grid-cols-10 gap-1 sm:gap-1 w-full max-w-screen-lg">
        {images.map((src, index) => (
          <div 
            key={index} 
            className="aspect-square relative overflow-hidden opacity-0 animate-fade-in"
            style={{ animationDelay: `${index * 20}ms` }}
          >
            <Image
              unoptimized
              src={src}
              alt={`Random image ${index + 1}`}
              fill
              sizes="(max-width: 640px) 20vw, 10vw"
              className="object-cover"
            />
          </div>
        ))}
      </div>
    </main>
  );
}