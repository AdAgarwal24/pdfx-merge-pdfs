const express = require('express');
const path = require('path');
const multer = require('multer');
const { mergePDFs } = require('./merge');

const app = express();
const upload = multer({ dest: 'uploads/' });
const port = process.env.PORT || 4000;

// Serve static files
app.use('/static', express.static('public'));

// Home route
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'templates/index.html'));
});

// Merge route
app.post('/merge', upload.array('pdfs'), async (req, res, next) => {
  try {

    if (!req.files || req.files.length < 2) {
      return res.send("Please upload at least 2 PDF files.");
    }

    let customName =
      req.body.filename && req.body.filename.trim() !== ''
        ? req.body.filename.trim().replace(/[^a-zA-Z0-9_-]/g, '')
        : null;

    let fileName = await mergePDFs(req.files, customName);

    res.redirect(`/static/merged/${fileName}.pdf`);

  } catch (error) {
    next(error);
  }
});

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
