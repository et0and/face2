import Image from 'next/image';
import { getRandomImages } from './utils/imageUtils';

export const revalidate = 0;

export default function Home() {
  const images = getRandomImages('images/eyes', 100); 

  return (
    <main className="flex min-h-screen items-center justify-center p-8">
      <div className="grid grid-cols-10 gap-1">
        {images.map((src, index) => (
          <div 
            key={index} 
            className="w-16 h-16 relative overflow-hidden opacity-0 animate-fade-in"
            style={{ animationDelay: `${index * 20}ms` }}
          >
            <Image
              src={src}
              alt={`Random image ${index + 1}`}
              layout="fill"
              objectFit="cover"
              className="p-0"
            />
          </div>
        ))}
      </div>
    </main>
  );
}