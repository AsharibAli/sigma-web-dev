function createCard(title, cName, views, monthsOld, duration, thumbnail) {
  const container = document.querySelector(".container");
  const card = document.createElement("div");
  card.className = "card";

  // Function to format views
  function formatViews(viewCount) {
    if (viewCount >= 1000) {
      return (viewCount / 1000).toFixed(1) + "K";
    }
    return viewCount.toString();
  }

  card.innerHTML = `
      <div class="thumbnail">
        <img src="${thumbnail}" alt="Thumbnail">
        <span class="duration">${duration}</span>
      </div>
      <div class="content">
        <h3 class="title">${title}</h3>
      
        <p class="meta-data channel-name">${cName} • ${formatViews(
    views
  )} views • ${monthsOld} months ago</p>
      </div>
    `;

  container.appendChild(card);
}

// Sample call
createCard(
  "Installing VS Code & How Websites Work | Sigma Web Development Course - Tutorial #1",
  "CodeWithHarry",
  799000, // This will be formatted as "799K"
  2,
  "31:20",
  "https://i.ytimg.com/vi/tVzUXW6siu0/hqdefault.jpg?sqp=-oaymwEbCKgBEF5IVfKriqkDDggBFQAAiEIYAXABwAEG&rs=AOn4CLB0alxLSXCSEPITzWr-XXUiv1oglQ"
);

createCard(
  "Installing VS Code & How Websites Work | Sigma Web Development Course - Tutorial #1",
  "CodeWithHarry",
  799000, // This will be formatted as "799K"
  2,
  "31:20",
  "https://i.ytimg.com/vi/tVzUXW6siu0/hqdefault.jpg?sqp=-oaymwEbCKgBEF5IVfKriqkDDggBFQAAiEIYAXABwAEG&rs=AOn4CLB0alxLSXCSEPITzWr-XXUiv1oglQ"
);

createCard(
  "Installing VS Code & How Websites Work | Sigma Web Development Course - Tutorial #1",
  "CodeWithHarry",
  799000, // This will be formatted as "799K"
  2,
  "31:20",
  "https://i.ytimg.com/vi/tVzUXW6siu0/hqdefault.jpg?sqp=-oaymwEbCKgBEF5IVfKriqkDDggBFQAAiEIYAXABwAEG&rs=AOn4CLB0alxLSXCSEPITzWr-XXUiv1oglQ"
);

createCard(
  "Installing VS Code & How Websites Work | Sigma Web Development Course - Tutorial #1",
  "CodeWithHarry",
  799000, // This will be formatted as "799K"
  2,
  "31:20",
  "https://i.ytimg.com/vi/tVzUXW6siu0/hqdefault.jpg?sqp=-oaymwEbCKgBEF5IVfKriqkDDggBFQAAiEIYAXABwAEG&rs=AOn4CLB0alxLSXCSEPITzWr-XXUiv1oglQ"
);

createCard(
  "Installing VS Code & How Websites Work | Sigma Web Development Course - Tutorial #1",
  "CodeWithHarry",
  799000, // This will be formatted as "799K"
  2,
  "31:20",
  "https://i.ytimg.com/vi/tVzUXW6siu0/hqdefault.jpg?sqp=-oaymwEbCKgBEF5IVfKriqkDDggBFQAAiEIYAXABwAEG&rs=AOn4CLB0alxLSXCSEPITzWr-XXUiv1oglQ"
);

createCard(
  "Installing VS Code & How Websites Work | Sigma Web Development Course - Tutorial #1",
  "CodeWithHarry",
  799000, // This will be formatted as "799K"
  2,
  "31:20",
  "https://i.ytimg.com/vi/tVzUXW6siu0/hqdefault.jpg?sqp=-oaymwEbCKgBEF5IVfKriqkDDggBFQAAiEIYAXABwAEG&rs=AOn4CLB0alxLSXCSEPITzWr-XXUiv1oglQ"
);

createCard(
  "Installing VS Code & How Websites Work | Sigma Web Development Course - Tutorial #1",
  "CodeWithHarry",
  799000, // This will be formatted as "799K"
  2,
  "31:20",
  "https://i.ytimg.com/vi/tVzUXW6siu0/hqdefault.jpg?sqp=-oaymwEbCKgBEF5IVfKriqkDDggBFQAAiEIYAXABwAEG&rs=AOn4CLB0alxLSXCSEPITzWr-XXUiv1oglQ"
);

createCard(
  "Installing VS Code & How Websites Work | Sigma Web Development Course - Tutorial #1",
  "CodeWithHarry",
  799000, // This will be formatted as "799K"
  2,
  "31:20",
  "https://i.ytimg.com/vi/tVzUXW6siu0/hqdefault.jpg?sqp=-oaymwEbCKgBEF5IVfKriqkDDggBFQAAiEIYAXABwAEG&rs=AOn4CLB0alxLSXCSEPITzWr-XXUiv1oglQ"
);

createCard(
  "Installing VS Code & How Websites Work | Sigma Web Development Course - Tutorial #1",
  "CodeWithHarry",
  799000, // This will be formatted as "799K"
  2,
  "31:20",
  "https://i.ytimg.com/vi/tVzUXW6siu0/hqdefault.jpg?sqp=-oaymwEbCKgBEF5IVfKriqkDDggBFQAAiEIYAXABwAEG&rs=AOn4CLB0alxLSXCSEPITzWr-XXUiv1oglQ"
);

createCard(
  "Installing VS Code & How Websites Work | Sigma Web Development Course - Tutorial #1",
  "CodeWithHarry",
  799000, // This will be formatted as "799K"
  2,
  "31:20",
  "https://i.ytimg.com/vi/tVzUXW6siu0/hqdefault.jpg?sqp=-oaymwEbCKgBEF5IVfKriqkDDggBFQAAiEIYAXABwAEG&rs=AOn4CLB0alxLSXCSEPITzWr-XXUiv1oglQ"
);

createCard(
  "Installing VS Code & How Websites Work | Sigma Web Development Course - Tutorial #1",
  "CodeWithHarry",
  799000, // This will be formatted as "799K"
  2,
  "31:20",
  "https://i.ytimg.com/vi/tVzUXW6siu0/hqdefault.jpg?sqp=-oaymwEbCKgBEF5IVfKriqkDDggBFQAAiEIYAXABwAEG&rs=AOn4CLB0alxLSXCSEPITzWr-XXUiv1oglQ"
);

createCard(
  "Installing VS Code & How Websites Work | Sigma Web Development Course - Tutorial #1",
  "CodeWithHarry",
  799000, // This will be formatted as "799K"
  2,
  "31:20",
  "https://i.ytimg.com/vi/tVzUXW6siu0/hqdefault.jpg?sqp=-oaymwEbCKgBEF5IVfKriqkDDggBFQAAiEIYAXABwAEG&rs=AOn4CLB0alxLSXCSEPITzWr-XXUiv1oglQ"
);

createCard(
  "Installing VS Code & How Websites Work | Sigma Web Development Course - Tutorial #1",
  "CodeWithHarry",
  799000, // This will be formatted as "799K"
  2,
  "31:20",
  "https://i.ytimg.com/vi/tVzUXW6siu0/hqdefault.jpg?sqp=-oaymwEbCKgBEF5IVfKriqkDDggBFQAAiEIYAXABwAEG&rs=AOn4CLB0alxLSXCSEPITzWr-XXUiv1oglQ"
);

createCard(
  "Installing VS Code & How Websites Work | Sigma Web Development Course - Tutorial #1",
  "CodeWithHarry",
  799000, // This will be formatted as "799K"
  2,
  "31:20",
  "https://i.ytimg.com/vi/tVzUXW6siu0/hqdefault.jpg?sqp=-oaymwEbCKgBEF5IVfKriqkDDggBFQAAiEIYAXABwAEG&rs=AOn4CLB0alxLSXCSEPITzWr-XXUiv1oglQ"
);

createCard(
  "Installing VS Code & How Websites Work | Sigma Web Development Course - Tutorial #1",
  "CodeWithHarry",
  799000, // This will be formatted as "799K"
  2,
  "31:20",
  "https://i.ytimg.com/vi/tVzUXW6siu0/hqdefault.jpg?sqp=-oaymwEbCKgBEF5IVfKriqkDDggBFQAAiEIYAXABwAEG&rs=AOn4CLB0alxLSXCSEPITzWr-XXUiv1oglQ"
);

createCard(
  "Installing VS Code & How Websites Work | Sigma Web Development Course - Tutorial #1",
  "CodeWithHarry",
  799000, // This will be formatted as "799K"
  2,
  "31:20",
  "https://i.ytimg.com/vi/tVzUXW6siu0/hqdefault.jpg?sqp=-oaymwEbCKgBEF5IVfKriqkDDggBFQAAiEIYAXABwAEG&rs=AOn4CLB0alxLSXCSEPITzWr-XXUiv1oglQ"
);

createCard(
  "Installing VS Code & How Websites Work | Sigma Web Development Course - Tutorial #1",
  "CodeWithHarry",
  799000, // This will be formatted as "799K"
  2,
  "31:20",
  "https://i.ytimg.com/vi/tVzUXW6siu0/hqdefault.jpg?sqp=-oaymwEbCKgBEF5IVfKriqkDDggBFQAAiEIYAXABwAEG&rs=AOn4CLB0alxLSXCSEPITzWr-XXUiv1oglQ"
);

createCard(
  "Installing VS Code & How Websites Work | Sigma Web Development Course - Tutorial #1",
  "CodeWithHarry",
  799000, // This will be formatted as "799K"
  2,
  "31:20",
  "https://i.ytimg.com/vi/tVzUXW6siu0/hqdefault.jpg?sqp=-oaymwEbCKgBEF5IVfKriqkDDggBFQAAiEIYAXABwAEG&rs=AOn4CLB0alxLSXCSEPITzWr-XXUiv1oglQ"
);

createCard(
  "Installing VS Code & How Websites Work | Sigma Web Development Course - Tutorial #1",
  "CodeWithHarry",
  799000, // This will be formatted as "799K"
  2,
  "31:20",
  "https://i.ytimg.com/vi/tVzUXW6siu0/hqdefault.jpg?sqp=-oaymwEbCKgBEF5IVfKriqkDDggBFQAAiEIYAXABwAEG&rs=AOn4CLB0alxLSXCSEPITzWr-XXUiv1oglQ"
);

createCard(
  "Installing VS Code & How Websites Work | Sigma Web Development Course - Tutorial #1",
  "CodeWithHarry",
  799000, // This will be formatted as "799K"
  2,
  "31:20",
  "https://i.ytimg.com/vi/tVzUXW6siu0/hqdefault.jpg?sqp=-oaymwEbCKgBEF5IVfKriqkDDggBFQAAiEIYAXABwAEG&rs=AOn4CLB0alxLSXCSEPITzWr-XXUiv1oglQ"
);

createCard(
  "Installing VS Code & How Websites Work | Sigma Web Development Course - Tutorial #1",
  "CodeWithHarry",
  799000, // This will be formatted as "799K"
  2,
  "31:20",
  "https://i.ytimg.com/vi/tVzUXW6siu0/hqdefault.jpg?sqp=-oaymwEbCKgBEF5IVfKriqkDDggBFQAAiEIYAXABwAEG&rs=AOn4CLB0alxLSXCSEPITzWr-XXUiv1oglQ"
);

createCard(
  "Installing VS Code & How Websites Work | Sigma Web Development Course - Tutorial #1",
  "CodeWithHarry",
  799000, // This will be formatted as "799K"
  2,
  "31:20",
  "https://i.ytimg.com/vi/tVzUXW6siu0/hqdefault.jpg?sqp=-oaymwEbCKgBEF5IVfKriqkDDggBFQAAiEIYAXABwAEG&rs=AOn4CLB0alxLSXCSEPITzWr-XXUiv1oglQ"
);

createCard(
  "Installing VS Code & How Websites Work | Sigma Web Development Course - Tutorial #1",
  "CodeWithHarry",
  799000, // This will be formatted as "799K"
  2,
  "31:20",
  "https://i.ytimg.com/vi/tVzUXW6siu0/hqdefault.jpg?sqp=-oaymwEbCKgBEF5IVfKriqkDDggBFQAAiEIYAXABwAEG&rs=AOn4CLB0alxLSXCSEPITzWr-XXUiv1oglQ"
);

createCard(
  "Installing VS Code & How Websites Work | Sigma Web Development Course - Tutorial #1",
  "CodeWithHarry",
  799000, // This will be formatted as "799K"
  2,
  "31:20",
  "https://i.ytimg.com/vi/tVzUXW6siu0/hqdefault.jpg?sqp=-oaymwEbCKgBEF5IVfKriqkDDggBFQAAiEIYAXABwAEG&rs=AOn4CLB0alxLSXCSEPITzWr-XXUiv1oglQ"
);

createCard(
  "Installing VS Code & How Websites Work | Sigma Web Development Course - Tutorial #1",
  "CodeWithHarry",
  799000, // This will be formatted as "799K"
  2,
  "31:20",
  "https://i.ytimg.com/vi/tVzUXW6siu0/hqdefault.jpg?sqp=-oaymwEbCKgBEF5IVfKriqkDDggBFQAAiEIYAXABwAEG&rs=AOn4CLB0alxLSXCSEPITzWr-XXUiv1oglQ"
);

createCard(
  "Installing VS Code & How Websites Work | Sigma Web Development Course - Tutorial #1",
  "CodeWithHarry",
  799000, // This will be formatted as "799K"
  2,
  "31:20",
  "https://i.ytimg.com/vi/tVzUXW6siu0/hqdefault.jpg?sqp=-oaymwEbCKgBEF5IVfKriqkDDggBFQAAiEIYAXABwAEG&rs=AOn4CLB0alxLSXCSEPITzWr-XXUiv1oglQ"
);
createCard(
  "Installing VS Code & How Websites Work | Sigma Web Development Course - Tutorial #1",
  "CodeWithHarry",
  799000, // This will be formatted as "799K"
  2,
  "31:20",
  "https://i.ytimg.com/vi/tVzUXW6siu0/hqdefault.jpg?sqp=-oaymwEbCKgBEF5IVfKriqkDDggBFQAAiEIYAXABwAEG&rs=AOn4CLB0alxLSXCSEPITzWr-XXUiv1oglQ"
);

createCard(
  "Installing VS Code & How Websites Work | Sigma Web Development Course - Tutorial #1",
  "CodeWithHarry",
  799000, // This will be formatted as "799K"
  2,
  "31:20",
  "https://i.ytimg.com/vi/tVzUXW6siu0/hqdefault.jpg?sqp=-oaymwEbCKgBEF5IVfKriqkDDggBFQAAiEIYAXABwAEG&rs=AOn4CLB0alxLSXCSEPITzWr-XXUiv1oglQ"
);
createCard(
  "Installing VS Code & How Websites Work | Sigma Web Development Course - Tutorial #1",
  "CodeWithHarry",
  799000, // This will be formatted as "799K"
  2,
  "31:20",
  "https://i.ytimg.com/vi/tVzUXW6siu0/hqdefault.jpg?sqp=-oaymwEbCKgBEF5IVfKriqkDDggBFQAAiEIYAXABwAEG&rs=AOn4CLB0alxLSXCSEPITzWr-XXUiv1oglQ"
);

createCard(
  "Installing VS Code & How Websites Work | Sigma Web Development Course - Tutorial #1",
  "CodeWithHarry",
  799000, // This will be formatted as "799K"
  2,
  "31:20",
  "https://i.ytimg.com/vi/tVzUXW6siu0/hqdefault.jpg?sqp=-oaymwEbCKgBEF5IVfKriqkDDggBFQAAiEIYAXABwAEG&rs=AOn4CLB0alxLSXCSEPITzWr-XXUiv1oglQ"
);

createCard(
  "Installing VS Code & How Websites Work | Sigma Web Development Course - Tutorial #1",
  "CodeWithHarry",
  799000, // This will be formatted as "799K"
  2,
  "31:20",
  "https://i.ytimg.com/vi/tVzUXW6siu0/hqdefault.jpg?sqp=-oaymwEbCKgBEF5IVfKriqkDDggBFQAAiEIYAXABwAEG&rs=AOn4CLB0alxLSXCSEPITzWr-XXUiv1oglQ"
);

createCard(
  "Installing VS Code & How Websites Work | Sigma Web Development Course - Tutorial #1",
  "CodeWithHarry",
  799000, // This will be formatted as "799K"
  2,
  "31:20",
  "https://i.ytimg.com/vi/tVzUXW6siu0/hqdefault.jpg?sqp=-oaymwEbCKgBEF5IVfKriqkDDggBFQAAiEIYAXABwAEG&rs=AOn4CLB0alxLSXCSEPITzWr-XXUiv1oglQ"
);

createCard(
  "Installing VS Code & How Websites Work | Sigma Web Development Course - Tutorial #1",
  "CodeWithHarry",
  799000, // This will be formatted as "799K"
  2,
  "31:20",
  "https://i.ytimg.com/vi/tVzUXW6siu0/hqdefault.jpg?sqp=-oaymwEbCKgBEF5IVfKriqkDDggBFQAAiEIYAXABwAEG&rs=AOn4CLB0alxLSXCSEPITzWr-XXUiv1oglQ"
);

createCard(
  "Installing VS Code & How Websites Work | Sigma Web Development Course - Tutorial #1",
  "CodeWithHarry",
  799000, // This will be formatted as "799K"
  2,
  "31:20",
  "https://i.ytimg.com/vi/tVzUXW6siu0/hqdefault.jpg?sqp=-oaymwEbCKgBEF5IVfKriqkDDggBFQAAiEIYAXABwAEG&rs=AOn4CLB0alxLSXCSEPITzWr-XXUiv1oglQ"
);

createCard(
  "Installing VS Code & How Websites Work | Sigma Web Development Course - Tutorial #1",
  "CodeWithHarry",
  799000, // This will be formatted as "799K"
  2,
  "31:20",
  "https://i.ytimg.com/vi/tVzUXW6siu0/hqdefault.jpg?sqp=-oaymwEbCKgBEF5IVfKriqkDDggBFQAAiEIYAXABwAEG&rs=AOn4CLB0alxLSXCSEPITzWr-XXUiv1oglQ"
);

createCard(
  "Installing VS Code & How Websites Work | Sigma Web Development Course - Tutorial #1",
  "CodeWithHarry",
  799000, // This will be formatted as "799K"
  2,
  "31:20",
  "https://i.ytimg.com/vi/tVzUXW6siu0/hqdefault.jpg?sqp=-oaymwEbCKgBEF5IVfKriqkDDggBFQAAiEIYAXABwAEG&rs=AOn4CLB0alxLSXCSEPITzWr-XXUiv1oglQ"
);

createCard(
  "Installing VS Code & How Websites Work | Sigma Web Development Course - Tutorial #1",
  "CodeWithHarry",
  799000, // This will be formatted as "799K"
  2,
  "31:20",
  "https://i.ytimg.com/vi/tVzUXW6siu0/hqdefault.jpg?sqp=-oaymwEbCKgBEF5IVfKriqkDDggBFQAAiEIYAXABwAEG&rs=AOn4CLB0alxLSXCSEPITzWr-XXUiv1oglQ"
);

createCard(
  "Installing VS Code & How Websites Work | Sigma Web Development Course - Tutorial #1",
  "CodeWithHarry",
  799000, // This will be formatted as "799K"
  2,
  "31:20",
  "https://i.ytimg.com/vi/tVzUXW6siu0/hqdefault.jpg?sqp=-oaymwEbCKgBEF5IVfKriqkDDggBFQAAiEIYAXABwAEG&rs=AOn4CLB0alxLSXCSEPITzWr-XXUiv1oglQ"
);
