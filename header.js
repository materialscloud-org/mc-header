// header.js
document.addEventListener("DOMContentLoaded", () => {
  const headerHTML = `
  <header class="mc-header">
  <nav class="mc-nav">
    <ul>
      <li>
        <a class="mc-navbrand" href="https://www.materialscloud.org/home">
          <img src="https://www.materialscloud.org/work/images/mcloud_logo.png" height="50" />
        </a>
      </li>
      <li>
        <a class="mc-navlink" href="https://www.materialscloud.org/learn"
          >LEARN</a
        >
      </li>
      <li>
        <a class="mc-navlink" href="https://www.materialscloud.org/work"
          >WORK</a
        >
      </li>
      <li>
        <a class="mc-navlink" href="https://www.materialscloud.org/discover"
          >DISCOVER</a
        >
      </li>
      <li>
        <a class="mc-navlink" href="https://www.materialscloud.org/explore"
          >EXPLORE</a
        >
      </li>
      <li>
        <a class="mc-navlink" href="https://www.materialscloud.org/archive"
          >ARCHIVE</a
        >
      </li>
      <li class="mc-more-dropdown" style="margin-left:auto; position:relative;">
        <a class="mc-navlink" href="#" id="mc-more-link">More ▾</a>
        <ul class="mc-dropdown-menu" id="mc-dropdown-menu" style="display:none; position:absolute; right:0; top:80%; background:#fff; box-shadow:0 2px 8px rgba(0,0,0,0.08); min-width:140px; padding:0; margin:0; border-radius:4px; z-index:100;">
          <li><a class="mc-dropdown-link" href="https://www.materialscloud.org/policies">Policies</a></li>
          <li><a class="mc-dropdown-link" href="https://www.materialscloud.org/dmp">Data Management Plan</a></li>
          <li><a class="mc-dropdown-link" href="https://www.materialscloud.org/termssummary">Terms of Use</a></li>
          <li><a class="mc-dropdown-link" href="https://www.materialscloud.org/infrastructure">Infrastructure</a></li>
          <li><a class="mc-dropdown-link" href="https://www.materialscloud.org/team">Team & Contact</a></li>
          <li><a class="mc-dropdown-link" href="https://www.materialscloud.org/home#partners">Partners</a></li>
          <li><a class="mc-dropdown-link" href="https://www.materialscloud.org/explore/connect">Connect your REST API</a></li>
        </ul>
      </li>
    </ul>
  </nav>
  <div class="mc-header-separator"></div>
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

  // DROPDOWN: Toggle More menu
  const moreLink = document.getElementById("mc-more-link");
  const dropdownMenu = document.getElementById("mc-dropdown-menu");
  if (moreLink && dropdownMenu) {
    moreLink.addEventListener("click", (e) => {
      console.log("More link clicked");
      e.preventDefault();
      dropdownMenu.style.display =
        dropdownMenu.style.display === "block" ? "none" : "block";
    });
    // Hide dropdown when clicking outside
    document.addEventListener("click", (e) => {
      if (!moreLink.contains(e.target) && !dropdownMenu.contains(e.target)) {
        dropdownMenu.style.display = "none";
      }
    });
  }
});
