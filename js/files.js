const units = ["bytes", "KB", "MB", "GB", "TB", "PB", "EB", "ZB", "YB"];

function niceBytes(x) {
  let l = 0,
    n = parseInt(x, 10) || 0;

  while (n >= 1024 && ++l) {
    n = n / 1024;
  }

  return n.toFixed(n < 10 && l > 0 ? 1 : 0) + " " + units[l];
}

const filesContainer = document.querySelector(".files");

const Files = [
  {
    name: "my-file",
    extension: "pdf",
    author: "Elzero",
    uploadDate: new Date("2023-01-15"),
    size: 5767168,
  },
  {
    name: "my-file",
    extension: "avi",
    author: "Admin",
    uploadDate: new Date("2023-01-12"),
    size: 7130112,
  },
  {
    name: "my-file",
    extension: "eps",
    author: "Uploader",
    uploadDate: new Date("2023-01-14"),
    size: 2725888,
  },
  {
    name: "my-file",
    extension: "psd",
    author: "IssaKass",
    uploadDate: new Date("2023-01-16"),
    size: 15833088,
  },
  {
    name: "my-file",
    extension: "dll",
    author: "Coder",
    uploadDate: new Date("2023-01-09"),
    size: 2614272,
  },
  {
    name: "my-file",
    extension: "png",
    author: "Designer",
    uploadDate: new Date("2023-01-09"),
    size: 215040,
  },
  {
    name: "my-file",
    extension: "zip",
    author: "Coder",
    uploadDate: new Date("2022-12-15"),
    size: 572522496,
  },
  {
    name: "my-file",
    extension: "jpg",
    author: "Coder",
    uploadDate: new Date("2023-01-01"),
    size: 2306867,
  },
  {
    name: "my-file",
    extension: "png",
    author: "Designer",
    uploadDate: new Date("2022-12-28"),
    size: 1363148,
  },
  {
    name: "my-file",
    extension: "avi",
    author: "Admin",
    uploadDate: new Date("2022-12-31"),
    size: 10066329,
  },
  {
    name: "my-file",
    extension: "psd",
    author: "Designer",
    uploadDate: new Date("2023-01-13"),
    size: 18664652,
  },
  {
    name: "my-file",
    extension: "eps",
    author: "Designer",
    uploadDate: new Date("2022-12-12"),
    size: 3145728,
  },
  {
    name: "my-file",
    extension: "zip",
    author: "Coder",
    uploadDate: new Date("2022-12-03"),
    size: 1288490188,
  },
  {
    name: "my-file",
    extension: "pdf",
    author: "User",
    uploadDate: new Date("2022-11-16"),
    size: 14050918,
  },
  {
    name: "my-file",
    extension: "psd",
    author: "IssaKass",
    uploadDate: new Date("2022-11-05"),
    size: 21390950,
  },
  {
    name: "my-file",
    extension: "png",
    author: "IssaKass",
    uploadDate: new Date("2023-01-06"),
    size: 806912,
  },
  {
    name: "my-file",
    extension: "avi",
    author: "Admin",
    uploadDate: new Date("2023-01-02"),
    size: 32925286,
  },
  {
    name: "my-file",
    extension: "dll",
    author: "Coder",
    uploadDate: new Date("2023-01-05"),
    size: 12582912,
  },
];

const fileLayout = (file) => `
	<i class="fa-solid fa-download fa-fw clr-brand-muted download"></i>
	<div class="file-data">
		<img src="imgs/${file.extension}.png" 
				alt="${file.extension} icon" class="file-img"/>
		<h4 class="file-name">${file.name}.${file.extension}</h4>
	</div>
	<p class="file-author">${file.author}</p>
	<div class="file-info clr-brand-muted">
		<span class="file-upload-date">${file.uploadDate.toLocaleDateString()}</span>
		<span class="file-size">${niceBytes(file.size)}</span>
	</div>
`;

Files.forEach((file) => {
  let item = document.createElement("div");
  item.classList.add("file", "widget");
  item.innerHTML = fileLayout(file);
  filesContainer.appendChild(item);
});

function getFilesCount(types) {
  let count = 0;
  types.forEach((type) => {
    count += Files.filter((file) => file.extension === type).length;
  });
  return count;
}

function getAllFilesCount() {
  return Files.length;
}

function getFilesSizes(types) {
  let totalSize = 0;
  types.forEach((type) => {
    var arr = Files.filter((file) => file.extension === type);
    arr.forEach((e) => (totalSize += e.size));
  });
  return totalSize;
}

function getFilesAllSizes() {
  let totalSize = 0;
  Files.forEach((file) => {
    totalSize += file.size;
  });
  return totalSize;
}

let stats = document.querySelectorAll(".files-stats .stats .stat");

const FilesStats = [
  {
    types: [],
    icon: "fa-solid fa-file",
    name: "All Files",
    color: "brand",
  },
  {
    types: ["pdf"],
    icon: "fa-regular fa-file-pdf",
    name: "PDF Files",
    color: "info",
  },
  {
    types: ["png", "jpg"],
    icon: "fa-regular fa-images",
    name: "Images",
    color: "success",
  },
  {
    types: ["dll"],
    icon: "fa-solid fa-gear",
    name: "DLL Files",
    color: "warning",
  },
  {
    types: ["avi"],
    icon: "fa-solid fa-file-video",
    name: "AVI Files",
    color: "danger",
  },
];

const filesStatLayout = (stat) => `
  <i class="${stat.icon} clr-${stat.color} bg-${stat.color} icon"></i>
  <div class="data">
    <h5 class="name">${stat.name}</h5>
    <span class="count clr-brand-muted">${getFilesCount(
      stat.types
    )} Files</span>
  </div>
  <span class="total-size clr-brand-muted">${niceBytes(
    getFilesSizes(stat.types)
  )}</span>
`;

FilesStats.forEach((stat) => {
  var item = document.createElement("div");
  item.classList.add("stat");
  item.innerHTML = filesStatLayout(stat);

  if (stat.name === "All Files") {
    item.querySelector(".count").textContent = `${getAllFilesCount()} Files`;
    item.querySelector(".total-size").textContent = niceBytes(
      getFilesAllSizes()
    );
  }

  document.querySelector(".files-stats .stats").appendChild(item);
});
