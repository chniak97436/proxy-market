const PDFDocument = require('pdfkit');
const fs = require('fs');

const doc = new PDFDocument();

doc.pipe(fs.createWriteStream('cgu.pdf'));

doc.fontSize(16).text('Conditions Générales d\'Utilisation', { align: 'center' });
doc.moveDown();

doc.fontSize(12).text('1. Acceptation des CGU');
doc.text('En accédant à ce site, vous acceptez les présentes Conditions Générales d\'Utilisation.');
doc.moveDown();

doc.text('2. Utilisation du site');
doc.text('Ce site est destiné à un usage personnel et non commercial. Vous vous engagez à l\'utiliser de manière responsable.');
doc.moveDown();

doc.text('3. Responsabilités');
doc.text('Le propriétaire du site n\'est pas responsable des dommages directs ou indirects liés à l\'utilisation du site.');
doc.moveDown();

doc.text('4. Propriété intellectuelle');
doc.text('Tous les contenus du site sont la propriété de Nicolas Urbaniak, sauf mention contraire. Concernant les images, l\'utilisateur est responsable de vérifier les droits d\'usage avant toute utilisation.');
doc.moveDown();

doc.text('5. Protection des données');
doc.text('Les données personnelles collectées sont utilisées uniquement pour le fonctionnement du site et ne sont pas partagées.');
doc.moveDown();

doc.text('6. Modification des CGU');
doc.text('Les CGU peuvent être modifiées à tout moment sans préavis.');
doc.moveDown();

doc.text('7. Loi applicable');
doc.text('Ces CGU sont régies par le droit français.');

doc.end();
