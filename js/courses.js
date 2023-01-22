const coursesContainer = document.querySelector(".courses");

const Courses = [
  {
    img: "imgs/course-01.jpg",
    name: "Mastering web design",
    description:
      "Master The Art Of Web Designing And Mocking, Prototyping And Creating Web Design Architecture",
    students: 950,
    price: 165,
  },
  {
    img: "imgs/course-03.jpg",
    name: "Data Structure & Algorithms",
    description:
      "Master The Art Of Data Strcuture And Famous Algorithms Like Sorting, Dividing And Conquering",
    students: 1100,
    price: 210,
  },
  {
    img: "imgs/course-03.jpg",
    name: "Responsive web design",
    description:
      "Mastering Responsive Web Design And Media Queries And Know Everything About Breakpoints",
    students: 650,
    price: 90,
  },
  {
    img: "imgs/course-04.jpg",
    name: "Mastering python",
    description:
      "Mastering Python To Prepare For Data Science And AI And Automating Things in Your Life",
    students: 950,
    price: 250,
  },
  {
    img: "imgs/course-05.jpg",
    name: "PHP Examples",
    description:
      "PHP Tutorials And Examples And Practice On Web Application And Connecting With Databases",
    students: 850,
    price: 150,
  },
  {
    img: "imgs/course-02.jpg",
    name: "Data Structure & Algorithms",
    description:
      "Master The Art Of Data Strcuture And Famous Algorithms Like Sorting, Dividing And Conquering",
    students: 1150,
    price: 210,
  },
  {
    img: "imgs/course-04.jpg",
    name: "Mastering web design",
    description:
      "Mastering Responsive Web Design And Media Queries And Know Everything About Breakpoints",
    students: 650,
    price: 90,
  },
  {
    img: "imgs/course-01.jpg",
    name: "Responsive web design",
    description:
      "Master The Art Of Web Designing And Mocking, Prototyping And Creating Web Design Archticture",
    students: 850,
    price: 145,
  },
  {
    img: "imgs/course-03.jpg",
    name: "PHP examples",
    description:
      "PHP Tutorials And Examples And Practice On Web Application And Connecting With Databases",
    students: 850,
    price: 150,
  },
  {
    img: "imgs/course-05.jpg",
    name: "Mastering python",
    description:
      "Mastering Python To Prepare For Data Science And AI And Automating Things in Your Life",
    students: 950,
    price: 250,
  },
];

const courseLayout = (course) => `
    <img src="${course.img}" alt="" class = "course-img"/>
    <div class="course-data">
        <h4 class="course-name">${course.name}</h4>
        <p class="course-desc">${course.description}</p>
    </div>
    <span class="main-btn bg-brand">Course info</span>
    <div class="course-info clr-brand-muted">
    <div>
      <i class="fa-regular fa-user fa-fw icon"></i>
      <span class="students">${course.students}</span>
    </div>
    <div>
      <i class="fa-regular fa-dollar-sign fa-fw icon"></i>
      <span class="price">${course.price}</span>
    </div>
`;

function displayCourses() {
  coursesContainer.innerHTML = "";
  Courses.forEach((course) => {
    item = document.createElement("div");
    item.classList.add("course", "widget");
    item.innerHTML = courseLayout(course);
    coursesContainer.appendChild(item);
  });
}
displayCourses();

function sortCourses() {
  switch (document.getElementById("filterCourses").value) {
    case "PriceLowToHigh":
      Courses.sort((a, b) => a.price - b.price);
      break;
    case "PriceHighToLow":
      Courses.sort((a, b) => b.price - a.price);
      break;
    case "Popularity":
      Courses.sort((a, b) => b.students - a.students);
      break;
  }
  displayCourses();
}

function searchCourses() {
  let input, filter, courses, courseName;
  input = document.getElementById("searchCourse");
  filter = input.value.toUpperCase();
  courses = document.querySelectorAll(".courses .course");
  courses.forEach((course) => {
    courseName = course.getElementsByClassName("course-name")[0].textContent;
    if (courseName.toUpperCase().indexOf(filter) > -1) {
      course.style.display = "";
    } else {
      course.style.display = "none";
    }
  });
}