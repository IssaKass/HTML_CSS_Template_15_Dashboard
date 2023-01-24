const units = ["bytes", "KB", "MB", "GB", "TB", "PB", "EB", "ZB", "YB"];

function niceBytes(x) {
  let l = 0,
    n = parseInt(x, 10) || 0;

  while (n >= 1024 && ++l) {
    n = n / 1024;
  }

  return n.toFixed(n < 10 && l > 0 ? 1 : 0) + " " + units[l];
}

const LatestUploads = [
  {
    title: "my-file.pdf",
    desc: "Elzero",
    imgFile: "imgs/pdf.png",
    alt: "PDF icon",
    size: 3040870,
  },
  {
    title: "My-Video-File.avi",
    desc: "Admin",
    imgFile: "imgs/avi.png",
    alt: "AVI icon",
    size: 5138022,
  },
  {
    title: "My-Psd-File.pdf",
    desc: "Osama",
    imgFile: "imgs/psd.png",
    alt: "PSD icon",
    size: 4718592,
  },
  {
    title: "My-Zip-File.pdf",
    desc: "User",
    imgFile: "imgs/zip.png",
    alt: "ZIP icon",
    size: 9332326,
  },
  {
    title: "My-DLL-File.pdf",
    desc: "Admin",
    imgFile: "imgs/dll.png",
    alt: "DLL icon",
    size: 5138022,
  },
  {
    title: "My-Eps-File.pdf",
    desc: "Designer",
    imgFile: "imgs/eps.png",
    alt: "EPS icon",
    size: 9332326,
  },
];

const uploadLayout = (upload) => `
  <img src="${upload.imgFile}" alt="${upload.alt}" class="upload-img" />
  <div class="upload-data">
    <h4 class="upload-title clr-text2">${upload.title}</h4>
    <p class="upload-desc clr-brand-muted">${upload.desc}</p>
  </div>
  <span class="main-btn-ghost clr-text2">${niceBytes(upload.size)}</span>
`;

// fill latest uploads
LatestUploads.forEach((upload) => {
  const item = document.createElement("div");
  item.classList.add("upload");
  item.innerHTML = uploadLayout(upload);
  document.querySelector(".latest-uploads .uploads-list").appendChild(item);
});
