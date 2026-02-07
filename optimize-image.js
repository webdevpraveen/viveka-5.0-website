const sharp = require('sharp');
const path = require('path');
const fs = require('fs');

const inputPath = path.join(__dirname, 'public', 'Divyanshi.jpeg');
const outputPath = path.join(__dirname, 'public', 'Divyanshi.webp');

async function optimize() {
  try {
    if (!fs.existsSync(inputPath)) {
      console.error('Input file not found:', inputPath);
      process.exit(1);
    }

    console.log('Optimizing image...');
    await sharp(inputPath)
      .resize({ width: 800, withoutEnlargement: true }) // Resize to reasonable max width
      .webp({ quality: 80 }) // Convert to WebP with good quality
      .toFile(outputPath);
    
    console.log('Image optimized successfully:', outputPath);
  } catch (error) {
    console.error('Error optimizing image:', error);
    process.exit(1);
  }
}

optimize();
