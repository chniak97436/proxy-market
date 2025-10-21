const PDFDocument = require('pdfkit');
const fs = require('fs');

const doc = new PDFDocument();

doc.pipe(fs.createWriteStream('plan-du-site.pdf'));

doc.fontSize(16).text('Plan du Site', { align: 'center' });
doc.moveDown();

doc.fontSize(12).text('Voici la structure principale du site :');
doc.moveDown();

doc.text('1. Accueil');
doc.text('   - URL : /');
doc.text('   - Description : Page d\'accueil du site.');
doc.moveDown();

doc.text('2. Social');
doc.text('   - URL : /social');
doc.text('   - Description : Page dédiée aux contenus sociaux.');
doc.moveDown();

doc.text('3. Pizza');
doc.text('   - URL : /pizza');
doc.text('   - Description : Page présentant les pizzas disponibles.');
doc.moveDown();

doc.text('Note : Ce plan peut être mis à jour en fonction des évolutions du site.');

doc.end();
