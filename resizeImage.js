const sharp = require('sharp');

// Ruta de la imagen de entrada y salida
const inputImagePath = 'public/palmar.png';
const outputImagePath = 'public/palmar_resized.png';

// Redimensiona la imagen a 300x300 píxeles
sharp(inputImagePath)
  .resize(300, 300)
  .toFile(outputImagePath, (err, info) => {
    if (err) {
      console.error(err);
    } else {
      console.log('Imagen redimensionada con éxito:', info);
    }
  });
