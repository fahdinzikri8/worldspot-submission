const sharp = require('sharp');
const fs = require('fs');
const path = require('path');
 
const target = path.resolve(__dirname, 'src/public/images/heros');
const destination = path.resolve(__dirname, 'dist/images');
 
if (!fs.existsSync(destination)) {
  fs.mkdirSync(destination);
}
 
fs.readdirSync(target)
    .forEach(image => {
        sharp(`${target}/${image}`)
        .resize(1600, 650, {
          fit: 'cover',
        })
        .toFile(path.resolve(
            __dirname,
            `${destination}/${image.split('.').slice(0, -1).join('.')}-super-large.jpg`),
        );
        sharp(`${target}/${image}`)
          .resize(1200, 490, {
            fit: 'cover',
          })
          .toFile(path.resolve(
              __dirname,
              `${destination}/${image.split('.').slice(0, -1).join('.')}-large.jpg`),
          );
 
        sharp(`${target}/${image}`)
          .resize(958, 380, {
            fit: 'cover',
          })
          .toFile(path.resolve(
              __dirname,
              `${destination}/${image.split('.').slice(0, -1).join('.')}-medium-large.jpg`),
          );

        sharp(`${target}/${image}`)
          .resize(720, 350, {
            fit: 'cover',
          })
          .toFile(path.resolve(
              __dirname,
              `${destination}/${image.split('.').slice(0, -1).join('.')}-medium.jpg`),
          );

        sharp(`${target}/${image}`)
          .resize(570, 280, {
            fit: 'cover',
          })
          .toFile(path.resolve(
              __dirname,
              `${destination}/${image.split('.').slice(0, -1).join('.')}-medium-small.jpg`),
          );

        sharp(`${target}/${image}`)
          .resize(390, 200, {
            fit: 'cover',
          })
          .toFile(path.resolve(
              __dirname,
              `${destination}/${image.split('.').slice(0, -1).join('.')}-small.jpg`),
          );
    });