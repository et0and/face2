import fs from 'fs';
import path from 'path';

export function getRandomImage(folder: string): string {
  const imageDir = path.join(process.cwd(), 'public', folder);
  const images = fs.readdirSync(imageDir);
  const randomIndex = Math.floor(Math.random() * images.length);
  return `/${folder}/${images[randomIndex]}`;
}