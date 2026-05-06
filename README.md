# PDFx – Merge PDFs

A Node.js web application to merge multiple PDF files instantly.

## Features
- Merge multiple PDFs
- Fast processing
- Secure uploads
- No watermark
- Modern UI

## Tech Stack
- Node.js
- Express.js
- HTML
- CSS
- JavaScript

## Run Locally

npm install
node server.js

Open:
http://localhost:4000

## Deploy Live

This app is best deployed on a Node.js host like Render or Railway.

Before deploying, make sure your server uses:

process.env.PORT || 4000

### Render

1. Push this project to GitHub.
2. Go to Render and create a new `Web Service`.
3. Connect your GitHub repository.
4. Use these settings:
   - Build Command: `npm install`
   - Start Command: `npm start`
5. Deploy the service.

Render will give you a live URL like:
`https://your-app-name.onrender.com`

### Important Note

This app stores uploaded files and merged PDFs on the server filesystem. On many free/cloud platforms, storage can be temporary, so files may be removed after restart or redeploy. That is fine for basic PDF merging, but if you want permanent file storage, use a cloud storage service later.
