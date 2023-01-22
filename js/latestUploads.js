const LatestUploads = [
  {
    title: "my-file.pdf",
    desc: "Elzero",
    imgFile: "imgs/pdf.svg",
    alt: "PDF icon",
    size: "2.9mb",
  },
  {
    title: "My-Video-File.avi",
    desc: "Admin",
    imgFile: "imgs/avi.svg",
    alt: "AVI icon",
    size: "4.9mb",
  },
  {
    title: "My-Psd-File.pdf",
    desc: "Osama",
    imgFile: "imgs/psd.svg",
    alt: "PSD icon",
    size: "4.5mb",
  },
  {
    title: "My-Zip-File.pdf",
    desc: "User",
    imgFile: "imgs/zip.svg",
    alt: "ZIP icon",
    size: "8.9mb",
  },
  {
    title: "My-DLL-File.pdf",
    desc: "Admin",
    imgFile: "imgs/dll.svg",
    alt: "DLL icon",
    size: "4.9mb",
  },
  {
    title: "My-Eps-File.pdf",
    desc: "Designer",
    imgFile: "imgs/eps.svg",
    alt: "EPS icon",
    size: "8.9mb",
  },
];

const uploadLayout = (upload) => `
  <img src="${upload.imgFile}" alt="${upload.alt}" class="upload-img" />
  <div class="upload-data">
    <h4 class="upload-title clr-text2">${upload.title}</h4>
    <p class="upload-desc clr-brand-muted">${upload.desc}</p>
  </div>
  <span class="main-btn-ghost clr-text2">${upload.size}</span>
`;

// fill latest uploads
LatestUploads.forEach((upload) => {
  const item = document.createElement("div");
  item.classList.add("upload");
  item.innerHTML = uploadLayout(upload);
  document.querySelector(".latest-uploads .uploads-list").appendChild(item);
});
