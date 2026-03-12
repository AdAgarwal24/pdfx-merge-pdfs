const PDFMerger = require('pdf-merger-js').default;
const fs = require('fs');
const path = require('path');

const mergePDFs = async (files, customName) => {
  const merger = new PDFMerger();

  // Add all uploaded files
  for (let file of files) {
    await merger.add(file.path);
  }

  const finalName = customName || new Date().getTime();

  const outputDir = path.join(__dirname, 'public', 'merged');

  if (!fs.existsSync(outputDir)) {
    fs.mkdirSync(outputDir, { recursive: true });
  }

  await merger.save(path.join(outputDir, `${finalName}.pdf`));

  return finalName;
};

module.exports = { mergePDFs };