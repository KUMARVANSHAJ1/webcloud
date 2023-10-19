// Simulated uploaded files data
const uploadedFiles = [
    { name: "file1.pdf", size: "2 MB" },
    { name: "file2.jpg", size: "1.5 MB" },
    { name: "file3.docx", size: "3 MB" },
];

// Function to display uploaded files
function displayUploadedFiles() {
    const fileList = document.getElementById("file-list");
    fileList.innerHTML = "";

    uploadedFiles.forEach((file) => {
        const listItem = document.createElement("li");
        listItem.innerHTML = `
            <span>${file.name}</span>
            <span>${file.size}</span>
            <button class="download">Download</button>
        `;
        fileList.appendChild(listItem);
    });
}

// Add an event listener for file upload
const fileUploadForm = document.getElementById("file-upload-form");
fileUploadForm.addEventListener("submit", function (e) {
    e.preventDefault();
    const fileInput = document.getElementById("file-upload");
    const uploadedFile = {
        name: fileInput.files[0].name,
        size: (fileInput.files[0].size / 1024 / 1024).toFixed(2) + " MB",
    };
    uploadedFiles.push(uploadedFile);
    displayUploadedFiles();
});

// Display initially uploaded files
displayUploadedFiles();