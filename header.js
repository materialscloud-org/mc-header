import { logoBase64 } from "./logo.js";

const cssText = `
body {
  margin: 0;
}

.mc-header {
  background: #fff;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.04);
  margin: 0;
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
  display: flex;
  align-items: center;
  border-bottom: 3px solid #dee6e6;
  font-family: sans-serif;
  font-weight: 400;
  font-size: 16px;
  box-sizing: border-box;
  height: 65px; 
  line-height: 65px;
}

.mc-header .mc-navbrand {
  font-size: 0;
  padding: 7px 15px 5px 0;
  float: left;
  line-height: 0;
}

.mc-nav .mc-navlink {
  display: inline-block;
  padding: 14px 15px;
  font-size: 16px;
  font-weight: 700;
  line-height: 32px;
  height: 60px;
  box-sizing: border-box;
  text-align: center;
  color: #455860;
  text-decoration: none;
}

.mc-header .mc-navlink:hover {
  color: #8fa5af;
}

.mc-nav .mc-navlink.active {
  color: #cc1b30;
  pointer-events: none;
  cursor: default;
}

.mc-header .mc-more-dropdown {
  position: relative;
  z-index: 200;
}

.mc-header .mc-dropdown-menu {
  display: none;
  position: absolute;
  right: 0;
  background-color: #fff;
  min-width: 220px;
  border-radius: 6px;
  border: 2px solid #dee6e6;
  z-index: 100;
  padding: 5px 0;
  margin-top: -8px;
}

.mc-header .mc-dropdown-menu a {
  display: block;
  color: #455860;
  font-weight: 300;
  padding: 10px 14px;
  font-size: 16px;
  line-height: 10px;
  text-decoration: none;
}

.mc-header .mc-dropdown-menu a:hover {
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
    <a class="mc-navbrand" href="https://www.materialscloud.org/home">
      <img src="${logoBase64}" height="50" />
    </a>

    <a class="mc-navlink" href="https://www.materialscloud.org/learn">LEARN</a>
    <a class="mc-navlink" href="https://www.materialscloud.org/work">WORK</a>
    <a class="mc-navlink" href="https://www.materialscloud.org/discover">DISCOVER</a>
    <a class="mc-navlink" href="https://www.materialscloud.org/explore">EXPLORE</a>
    <a class="mc-navlink" href="https://www.materialscloud.org/archive">ARCHIVE</a>

    <div class="mc-more-dropdown" style="margin-left: auto; position: relative;">
      <a class="mc-navlink" href="#" id="mc-more-link">More ▾</a>
      <div class="mc-dropdown-menu" id="mc-dropdown-menu" style="display: none;">
        <a class="mc-dropdown-link" href="https://www.materialscloud.org/policies">Policies</a>
        <a class="mc-dropdown-link" href="https://www.materialscloud.org/dmp">Data Management Plan</a>
        <a class="mc-dropdown-link" href="https://www.materialscloud.org/termssummary">Terms of Use</a>
        <a class="mc-dropdown-link" href="https://www.materialscloud.org/infrastructure">Infrastructure</a>
        <a class="mc-dropdown-link" href="https://www.materialscloud.org/team">Team & Contact</a>
        <a class="mc-dropdown-link" href="https://www.materialscloud.org/home#partners">Partners</a>
        <a class="mc-dropdown-link" href="https://www.materialscloud.org/explore/connect">Connect your REST API</a>
      </div>
    </div>
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

  const moreLink = document.getElementById("mc-more-link");
  const dropdownMenu = document.getElementById("mc-dropdown-menu");
  if (moreLink && dropdownMenu) {
    moreLink.addEventListener("click", (e) => {
      console.log("More link clicked");
      e.preventDefault();
      dropdownMenu.style.display =
        dropdownMenu.style.display === "block" ? "none" : "block";
    });

    document.addEventListener("click", (e) => {
      if (!moreLink.contains(e.target) && !dropdownMenu.contains(e.target)) {
        dropdownMenu.style.display = "none";
      }
    });
  }
});
