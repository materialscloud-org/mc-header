// header.js
document.addEventListener("DOMContentLoaded", () => {
  const headerHTML = `
      <header class="mc-header">
        <nav class="mc-nav">
          <ul>
            <li>
              <a class="mc-navbrand" href="https://www.materialscloud.org/home">
                <img src="https://materialscloud.org/header/mcloud_logo.png" height="50" />
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

  document.body.insertAdjacentHTML("afterbegin", headerHTML);

  // NAVBAR HIGHLIGHTING
  document.addEventListener("DOMContentLoaded", () => {
    const breadcrumbs = document.querySelectorAll("#breadcrumb-list li a");
    if (breadcrumbs.length === 0) return;

    const firstBreadcrumbLink = breadcrumbs[0].href;
    document.querySelectorAll(".mc-navlink").forEach((link) => {
      if (link.href === firstBreadcrumbLink) {
        link.classList.add("active");
      }
    });
  });

  // NAVBAR HIGHLIGHTING: use first breadcrumb's name to mark active nav item
  const breadcrumbs = document.querySelectorAll("#breadcrumb-list li a");
  if (breadcrumbs.length > 0) {
    const firstBreadcrumbName = breadcrumbs[0].textContent.trim().toLowerCase();
    document.querySelectorAll(".mc-navlink").forEach((link) => {
      if (link.textContent.trim().toLowerCase() === firstBreadcrumbName) {
        link.classList.add("active");
      }
    });
  }
});
