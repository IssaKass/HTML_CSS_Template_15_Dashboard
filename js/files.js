const filesContainer = document.querySelector(".files");

const Files = [
  {
    name: "my-file",
    extension: "pdf",
    author: "Elzero",
    uploadDate: new Date("2023-01-15"),
    size: "5.5MB",
  },
  {
    name: "my-file",
    extension: "avi",
    author: "Admin",
    uploadDate: new Date("2023-01-12"),
    size: "6.8MB",
  },
  {
    name: "my-file",
    extension: "eps",
    author: "Uploader",
    uploadDate: new Date("2023-01-14"),
    size: "2.7MB",
  },
  {
    name: "my-file",
    extension: "psd",
    author: "IssaKass",
    uploadDate: new Date("2023-01-16"),
    size: "15.1MB",
  },
  {
    name: "my-file",
    extension: "dll",
    author: "Coder",
    uploadDate: new Date("2023-01-09"),
    size: "2.2MB",
  },
  {
    name: "my-file",
    extension: "png",
    author: "Designer",
    uploadDate: new Date("2023-01-09"),
    size: "210KB",
  },
];

const fileLayout = (file) => `
	<i class="fa-solid fa-download fa-fw clr-brand-muted download"></i>
	<div class="file-data">
		<img src="imgs/${file.extension}.svg" 
				alt="${file.extension} icon" class="file-img"/>
		<h4 class="file-name">${file.name}.${file.extension}</h4>
	</div>
	<p class="file-author">${file.author}</p>
	<div class="file-info clr-brand-muted">
		<span class="file-upload-date">${file.uploadDate.toLocaleDateString()}</span>
		<span class="file-size">${file.size}</span>
	</div>
`;

Files.forEach((file) => {
  item = document.createElement("div");
  item.classList.add("file", "widget");
  item.innerHTML = fileLayout(file);
  filesContainer.appendChild(item);
});
