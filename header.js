// header.js
document.addEventListener("DOMContentLoaded", () => {
  const headerHTML = `
      <header class="mc-header">
        <nav class="mc-nav">
          <ul>
            <li>
              <a class="mc-navbrand" href="https://www.materialscloud.org/home">
                <img src="mcloud_logo.png" height="50" verticle />
              </a>
            </li>
            <li><a class="mc-navlink" href="https://www.materialscloud.org/learn">LEARN</a></li>
            <li><a class="mc-navlink" href="https://www.materialscloud.org/work">WORK</a></li>
            <li><a class="mc-navlink" href="https://www.materialscloud.org/discover">DISCOVER</a></li>
            <li><a class="mc-navlink" href="https://www.materialscloud.org/explore">EXPLORE</a></li>
            <li><a class="mc-navlink" href="https://www.materialscloud.org/archive">ARCHIVE</a></li>
          </ul>
        </nav>
        <nav aria-label="breadcrumb">
          <ul class="mc-breadcrumb" id="breadcrumb-list"></ul>
        </nav>
      </header>
    `;

  // Insert the header
  document.body.insertAdjacentHTML("afterbegin", headerHTML);

  // Populate breadcrumbs only if breadcrumbsPath exists and is an array
  if (
    typeof breadcrumbsPath !== "undefined" &&
    Array.isArray(breadcrumbsPath)
  ) {
    const list = document.getElementById("breadcrumb-list");
    breadcrumbsPath.forEach((item) => {
      const li = document.createElement("li");
      if (item.link) {
        const a = document.createElement("a");
        a.href = item.link;
        a.textContent = item.name;
        li.appendChild(a);
      } else {
        li.textContent = item.name;
      }
      list.appendChild(li);
    });
  }

  // NAVBAR HIGHLIGHTING: use first breadcrumb's name to mark active nav item
  const breadcrumbs = document.querySelectorAll("#breadcrumb-list li a");
  console.log("Breadcrumbs found:", breadcrumbs);
  if (breadcrumbs.length > 0) {
    const firstBreadcrumbName = breadcrumbs[0].textContent.trim().toLowerCase();
    console.log("First breadcrumb name:", firstBreadcrumbName);
    document.querySelectorAll(".mc-navlink").forEach((link) => {
      const navText = link.textContent.trim().toLowerCase();
      if (navText === firstBreadcrumbName) {
        link.classList.add("active");
        console.log("Added active class to:", link);
      }
    });
  }
});
