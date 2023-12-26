function createCard(title, cName, views, monthsOld, duration, thumbnail) {
  let viewsN;
  if (views < 100) {
    viewsN = views / 1000;
  } else if (views > 1000000) {
    viewsN = views / 1000000 + "M";
  } else {
    viewsN = views / 1000 + "K";
  }

  let html = ` <div class="card">
  <div class="image">
    <img
      src="${thumbnail}"
      alt="image yt"
    />
    <div class="capsule">${duration}</div>

  </div>
  <div class="text">
    <h1>${title}</h1>
    <p>${cName} . ${viewsN} views . ${monthsOld} 2 months ago</p>
  </div>
</div>`;
  document.querySelector(".container").innerHTML =
    document.querySelector(".container").innerHTML + html;
}

createCard(
  "Installing VS Code & How Websites Work | Sigma Web Development Course - Tutorial #1",
  "CodeWithHarry",
  799000, // This will be formatted as "799K"
  2,
  "31:20",
  "https://i.ytimg.com/vi/tVzUXW6siu0/hqdefault.jpg?sqp=-oaymwEbCKgBEF5IVfKriqkDDggBFQAAiEIYAXABwAEG&rs=AOn4CLB0alxLSXCSEPITzWr-XXUiv1oglQ"
);
