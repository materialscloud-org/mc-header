const svgS = `
<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 89 72">
  <defs>
    <path id="r_0" fill="none" d="M334.5 550.23c0-4 3.228-7.2207 7.2086-7.2207 3.980 0 7.207 3.233 7.207 7.2207"/>
    <path id="r_1" fill="none" d="M334.5 550.4c-3 0-5.36 2.46-5.36 5.5s2.4 5.5 5.36 5.5M348.9 550.4c2.96 0 5.36 2.46 5.36 5.5s-2.4 5.5-5.36 5.5M334.5 561.4h14.47"/>
  </defs>
  <g transform="matrix(3.19 0 0 3.19 -1044.4 -1729.5)" stroke="#d21f15" stroke-width="1.2">
    <use xlink:href="#r_0"/>
    <use xlink:href="#r_1"/>
    <path fill="none" d="m335.14 550.19 3.282 5.4764 3.282 5.4764 3.282-5.4764 3.282-5.4764h-6.5641z"/>
    <circle cx="348.4" cy="550" r="1.4" fill="#fff"/>
    <circle cx="335" cy="550" r="1.4" fill="#fff"/>
    <circle cx="341.7" cy="561.5" r="1.4" fill="#fff"/>
  </g>
</svg>
`;

const cssS = `
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
  min-width: 58px;
  font-size: 0;
  padding: 7px 15px 5px 22px;
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
.mc-header .mc-drop-menu {
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
.mc-header .mc-drop-menu a {
  display: block;
  color: #455860;
  font-weight: 300;
  padding: 10px 14px;
  font-size: 16px;
  line-height: 10px;
  text-decoration: none;
}
.mc-header .mc-drop-menu a:hover {
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
  justify-content: start;
  align-items: center;
}
.mc-header ul.mc-breadcrumb li {
  color: #303f9f;
  display: inline;
  line-height: 1;
  margin-right: 46px;
  position: relative;
}
.mc-header ul.mc-breadcrumb li a {
  text-decoration: none;
}
.mc-header ul.mc-breadcrumb li a[href]:hover {
  text-decoration: underline;
}

.mc-header .mc-breadcrumb li a::after {
  content: " ";
  display: block;
  border-top: 50px solid transparent;
  border-bottom: 50px solid transparent;
  border-left: 30px solid #f5f5f5;
  position: absolute;
  top: 50%;
  margin-top: -50px;
  z-index: 2;
  right: 0;
  transform: translate(30px, 0);
}
.mc-header .mc-breadcrumb li a::before {
  content: " ";
  display: block;
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
(() => {
  document.addEventListener("DOMContentLoaded", () => {
    const headerHTML = `
    <header class="mc-header">
      <nav class="mc-nav">
        <a class="mc-navbrand" href="https://www.materialscloud.org/home">
          ${svgS}
        </a>
        <a class="mc-navlink" href="https://www.materialscloud.org/learn">LEARN</a>
        <a class="mc-navlink" href="https://www.materialscloud.org/work">WORK</a>
        <a class="mc-navlink" href="https://www.materialscloud.org/discover">DISCOVER</a>
        <a class="mc-navlink" href="https://www.materialscloud.org/explore">EXPLORE</a>
        <a class="mc-navlink" href="https://www.materialscloud.org/archive">ARCHIVE</a>
        <div class="mc-more-dropdown" style="margin-left: auto; position: relative;">
          <a class="mc-navlink" href="#" id="mc-more-link">More ▾</a>
          <div class="mc-drop-menu" id="mc-drop-menu" style="display: none;">
            <a class="mc-drop-link" href="https://www.materialscloud.org/policies">Policies</a>
            <a class="mc-drop-link" href="https://www.materialscloud.org/dmp">Data Management Plan</a>
            <a class="mc-drop-link" href="https://www.materialscloud.org/termssummary">Terms of Use</a>
            <a class="mc-drop-link" href="https://www.materialscloud.org/infrastructure">Infrastructure</a>
            <a class="mc-drop-link" href="https://www.materialscloud.org/team">Team & Contact</a>
            <a class="mc-drop-link" href="https://www.materialscloud.org/home#partners">Partners</a>
            <a class="mc-drop-link" href="https://www.materialscloud.org/explore/connect">Connect your REST API</a>
          </div>
        </div>
      </nav>
      <div class="mc-header-separator"></div>
      <nav aria-label="breadcrumb">
        <ul class="mc-breadcrumb" id="breadcrumb-list"></ul>
      </nav>
    </header>`;

    // Insert header
    document.body.insertAdjacentHTML("afterbegin", headerHTML);

    // Load headerCSS
    const style = document.createElement("style");
    style.textContent = cssS;
    document.head.appendChild(style);

    const bcC = document.querySelector("nav[aria-label='breadcrumb']");
    if (
      typeof breadcrumbsPath !== "undefined" &&
      Array.isArray(breadcrumbsPath) &&
      breadcrumbsPath.length > 0
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
    } else if (bcC) {
      // Remove breadcrumbs if no data
      bcC.remove();
    }

    // Mark nav item active based on first breadcrumb
    const first = document
      .querySelector("#breadcrumb-list li a")
      ?.textContent.trim()
      .toUpperCase();
    if (first) {
      document.querySelectorAll(".mc-navlink").forEach((link) => {
        if (link.textContent.trim().toUpperCase() === first)
          link.classList.add("active");
      });
    }

    const moreLink = document.getElementById("mc-more-link");
    const dropdownMenu = document.getElementById("mc-drop-menu");
    if (moreLink && dropdownMenu) {
      moreLink.addEventListener("click", (e) => {
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
})();
