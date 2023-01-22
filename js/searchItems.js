const SearchItems = [
  {
    keyword: "JavaScript",
    searchCount: 180,
  },
  {
    keyword: "Programming",
    searchCount: 220,
  },
  {
    keyword: "PHP",
    searchCount: 160,
  },
  {
    keyword: "Code",
    searchCount: 220,
  },
  {
    keyword: "Logic",
    searchCount: 95,
  },
  {
    keyword: "Design",
    searchCount: 145,
  },
];

const searchItemLayout = (item) => `
    <td class="keyword">${item.keyword}</td>
    <td><span class="search-count main-btn-ghost">${item.searchCount}</span></td>
`;

// sort search items in desneding order
SearchItems.sort((a, b) => b.searchCount - a.searchCount);

// fill top search items in table
SearchItems.forEach((item) => {
  const tr = document.createElement("tr");
  tr.innerHTML = searchItemLayout(item);
  document.querySelector(".search-items table tbody").appendChild(tr);
});
