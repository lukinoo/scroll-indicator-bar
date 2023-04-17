const sectionArr = [
  "section-one",
  "section-two",
  "section-three",
  "section-four",
];

const createSections = (arr) => {
  for (let i = 0; i < arr.length; i++) {
    const section = document.createElement("section");
    section.setAttribute("id", arr[i]);
    section.classList.add("section", arr[i]);

    // section title
    const title = document.createElement("h2");
    title.classList.add("title");
    title.innerHTML = `${i + 1}. ${arr[i]}`;

    section.appendChild(title);

    document.body.appendChild(section);
  }
};

createSections(sectionArr);

// function which creates indicator a tags
const createPageIndicator = () => {
  const sections = document.querySelectorAll(".section");
  const pageIndicator = document.createElement("div");
  pageIndicator.classList.add("page-indicator");

  for (let i = 0; i < sections.length; i++) {
    // section ids
    const sectionId = sections[i].id;

    // creating in
    const indicator = document.createElement("a");
    indicator.classList.add("indicator");
    indicator.setAttribute("href", `#${sectionId}`);

    // appending indicator in pageIndicator
    pageIndicator.appendChild(indicator);

    pageIndicator.childNodes[0].classList.add("active");
  }

  // appending page indicator in body
  document.body.appendChild(pageIndicator);
};

createPageIndicator();

const isSectionActive = (top, height) => {
  if (window.pageYOffset >= top && window.pageYOffset < top + height)
    return true;

  return false;
};

const handleSectionScroll = () => {
  const indicators = document.querySelectorAll(".indicator");
  const sections = document.querySelectorAll(".section");

  sections.forEach((section, index) => {
    let top = section.offsetTop;
    let height = section.offsetHeight;

    if (isSectionActive(top, height)) {
      indicators[index].classList.add("active");
    } else {
      indicators[index].classList.remove("active");
    }
  });
};

const handleScroll = () => handleSectionScroll();

// events
document.addEventListener("scroll", handleScroll);
