import fs from 'fs';
import path from 'path';
const basePath = process.env.basePath || '';

export function getRandomImages(baseFolder: string, count: number): string[] {
  const imageDir = path.join(process.cwd(), 'public', baseFolder);
  let allImages: string[] = [];

  // Read all subdirectories
  const subdirs = fs.readdirSync(imageDir).filter(item => 
    fs.statSync(path.join(imageDir, item)).isDirectory()
  );

  // Collect images from each subdirectory
  subdirs.forEach(subdir => {
    const subdirPath = path.join(imageDir, subdir);
    const images = fs.readdirSync(subdirPath)
      .filter(file => /\.(jpg|jpeg|png|gif)$/i.test(file))
      .map(file => `${basePath}/${baseFolder}/${subdir}/${file}`);
    allImages = allImages.concat(images);
  });

  // Shuffle and select random images
  const shuffled = allImages.sort(() => 0.5 - Math.random());
  return shuffled.slice(0, count);
}