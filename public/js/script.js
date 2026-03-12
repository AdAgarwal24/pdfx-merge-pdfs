document.addEventListener("DOMContentLoaded", function () {

  const fileInput = document.getElementById("fileInput");
  const fileList = document.getElementById("fileList");
  const uploadText = document.getElementById("uploadText");

  if (!fileInput) return; // safety check

  fileInput.addEventListener("change", function () {
    fileList.innerHTML = "";

    if (this.files.length > 0) {
      uploadText.textContent = `${this.files.length} file(s) selected`;

      Array.from(this.files).forEach(file => {
        const div = document.createElement("div");
        div.classList.add("file-item");
        div.textContent = "📄 " + file.name;
        fileList.appendChild(div);
      });
    } else {
      uploadText.textContent = "Drag & Drop PDFs or Click to Upload";
    }
  });

});