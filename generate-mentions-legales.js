const PDFDocument = require('pdfkit');
const fs = require('fs');

const doc = new PDFDocument();

doc.pipe(fs.createWriteStream('mentions-legales.pdf'));

doc.fontSize(16).text('Mentions Légales', { align: 'center' });
doc.moveDown();

doc.fontSize(12).text('Éditeur du site :');
doc.text('Nicolas Urbaniak');
doc.text('Adresse : 690A chemin dubuisson 97436 st leu');
doc.text('Téléphone : 0692474669');
doc.text('Email : urbaniak.n78@gmail.com');
doc.moveDown();

doc.text('Directeur de publication :');
doc.text('Nicolas Urbaniak');
doc.moveDown();

doc.text('Hébergement :');
doc.text('IONOS SE');
doc.text('Elgendorfer Str. 57, 56410 Montabaur, Allemagne');
doc.text('Ou');
doc.text('Vercel Inc.');
doc.text('340 S Lemon Ave #4133, Walnut, CA 91789, États-Unis');
doc.moveDown();

doc.text('Ce site est réalisé à titre personnel et non commercial.');
doc.text('Aucune entreprise n\'est associée à ce projet.');

doc.end();
