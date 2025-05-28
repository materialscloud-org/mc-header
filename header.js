import { logoBase64 } from "./logo.js";

const cssText = `
body {
  margin: 0;
}

.mc-header {
  background: #fff;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.04);
  margin: 0;
  margin-top: 0 !important;
}

.mc-header-separator {
  width: 100%;
  height: 16px;
  background: rgb(240, 246, 249);
  margin: 0;
  border: none;
}

.mc-header .mc-nav {
  background-color: #fff;
  overflow: visible;
  border-bottom: 3px solid #dee6e6;
  z-index: 10;
  font-family: sans-serif;
  font-weight: 400;
  font-size: 16px;
  box-sizing: border-box;
  line-height: 16px;
}

.mc-header .mc-nav .mc-navbrand {
  float: left;
  display: block;
  text-align: center;
  font-size: 0px;
  padding: 7px 15px 5px 20px;
}

.mc-header .mc-nav ul {
  list-style: none;
  display: flex;
  margin: 0;
  padding: 0;
  text-align: center;
}

.mc-header .mc-nav .mc-navlink {
  float: left;
  display: block;
  color: #455860;
  font-size: 16px;
  line-height: 32px;
  font-weight: 700;
  text-align: center;
  text-decoration: none;
  padding: 14px 15px;
}

.mc-header .mc-nav .mc-navlink:hover {
  color: #8fa5af;
}

.mc-header .mc-nav .mc-navlink.active {
  background-color: #fbfcfc;
  color: #cc1b30;
  pointer-events: none;
  cursor: default;
}

.mc-header .mc-nav .mc-navlink.active:hover {
  color: #cc1b30;
}

.mc-header .mc-more-dropdown {
  position: relative;
  z-index: 200;
}

.mc-header .mc-dropdown-menu {
  display: none;
  position: absolute;
  right: 0;
  background-color: #ffffff;
  min-width: 220px;
  border-radius: 6px;
  border: 2px solid #dee6e6;
  z-index: 100;
  padding: 5px 0px;
  margin-top: -8px;
}

.mc-header .mc-dropdown-menu li a {
  min-width: 220px;
  float: none;
  color: #455860;
  font-weight: 300;
  padding: 10px 14px;
  text-decoration: none;
  display: block;
  text-align: left;
  font-size: 16px;
  line-height: 10px;
  z-index: 100;
}

.mc-header .mc-dropdown-menu li a:hover {
  background-color: #fbfcfc;
}

.mc-header ul.mc-breadcrumb {
  padding: 7px 10px 7px 20px;
  list-style: none;
  background-color: #f5f5f5;
  border-radius: 2px;
  border: 1px solid #d6d6d6;
  font-size: 16px;
  font-weight: 300;
  font-family: sans-serif;
  text-align: left;
  margin: 10px 15px 30px 15px;
  overflow: hidden;
  display: flex;
  flex-direction: row;

  justify-content: start;
  align-items: center;
}

.mc-header ul.mc-breadcrumb li {
  display: inline;
  line-height: 1;
  margin-right: 46px;
  position: relative;
}

.mc-header ul.mc-breadcrumb li a {
  color: #303f9f;
  text-decoration: none;
}

.mc-header ul.mc-breadcrumb li a[href]:hover {
  text-decoration: underline;
}

.mc-header ul.mc-breadcrumb li a:not([href]):hover {
  color: #303f9f;
}

.mc-header .mc-breadcrumb li a::after {
  content: " ";
  display: block;
  width: 0;
  height: 0;
  border-top: 50px solid transparent;
  border-bottom: 50px solid transparent;
  border-left: 30px solid #f5f5f5;
  position: absolute;
  top: 50%;
  margin-top: -50px;
  z-index: 2;
  right: 0;
  z-index: 2;
  transform: translate(30px, 0);
}

.mc-header .mc-breadcrumb li a::before {
  content: " ";
  display: block;
  width: 0;
  height: 0;
  border-top: 50px solid transparent;
  border-bottom: 50px solid transparent;
  border-left: 30px solid #d6d6d6;
  position: absolute;
  top: 50%;
  margin-top: -50px;
  margin-left: 2px;
  right: 0;
  z-index: 1;
  transform: translate(32px, 0);
}

.mc-header .mc-breadcrumb li:last-child a {
  background: transparent !important;
  color: #303f9f;
}
.mc-header .mc-breadcrumb li:last-child a::after,
.mc-header .mc-breadcrumb li:last-child a::before {
  border: 0;
  display: none;
}

`;

// header.js
document.addEventListener("DOMContentLoaded", () => {
  const headerHTML = `
  <header class="mc-header">
  <nav class="mc-nav">
    <ul>
      <li>
        <a class="mc-navbrand" href="https://www.materialscloud.org/home">
          <img src="${logoBase64}" height="50" />
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

  // Insert header
  document.body.insertAdjacentHTML("afterbegin", headerHTML);

  // Load headerCSS
  const style = document.createElement("style");
  style.textContent = cssText;
  document.head.appendChild(style);

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
