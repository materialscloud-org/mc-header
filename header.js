const mc_logo_svg = `
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 52 41">
  <path id="p0" d="M 39.023 35.283 L 31.058 35.283 C 29.4 35.176 28.886 33.992 29.564 32.712 L 37.851 19.016 C 38.011 18.745 38.253 18.676 38.718 18.73 L 38.718 18.727 L 38.725 18.727 C 40.225 18.932 41.399 18.05 41.995 17.316 C 42.371 16.79 42.995 16.911 43.252 17.018 C 46.504 18.604 48.65 21.925 48.65 25.656 C 48.65 30.963 44.331 35.282 39.023 35.282 M 28.227 30.548 C 27.614 31.561 26.935 32.572 25.989 32.572 C 25.043 32.572 24.384 31.561 23.772 30.549 L 16.658 18.794 C 15.682 17.183 16.714 16.029 17.928 16.029 L 34.073 16.029 C 35.273 16.029 36.293 17.156 35.372 18.741 L 28.227 30.548 Z M 26.001 38.04 C 25.102 38.04 24.376 37.313 24.376 36.416 C 24.376 35.518 25.102 34.791 26.001 34.791 C 26.897 34.791 27.623 35.518 27.623 36.416 C 27.623 37.313 26.897 38.04 26.001 38.04 M 20.682 35.283 L 12.974 35.283 C 7.665 35.283 3.348 30.965 3.348 25.656 C 3.348 21.932 5.486 18.616 8.734 17.026 C 8.981 16.922 9.573 16.797 9.95 17.26 C 10.545 18.024 11.238 18.556 12.432 18.7 C 12.875 18.754 13.259 18.73 13.259 18.73 C 13.875 18.658 14.13 18.996 14.234 19.161 L 22.252 32.412 C 23.218 33.86 22.675 35.283 20.682 35.283 M 12.991 13.265 C 13.889 13.265 14.616 13.993 14.616 14.889 C 14.616 15.787 13.887 16.515 12.991 16.515 C 12.092 16.515 11.366 15.787 11.366 14.89 C 11.366 13.992 12.092 13.265 12.991 13.265 M 14.918 10.554 C 16.675 6.084 21.061 3.007 25.989 3.007 C 30.917 3.007 35.301 6.084 37.059 10.554 C 37.364 11.433 36.784 11.769 36.784 11.769 C 35.948 12.323 35.674 12.957 35.584 13.167 L 35.581 13.167 C 35.497 13.349 35.344 13.764 34.872 13.764 L 17.116 13.764 C 16.651 13.764 16.529 13.483 16.411 13.171 C 16.376 13.082 16.179 12.415 15.182 11.753 C 14.925 11.584 14.655 11.317 14.918 10.553 M 39.003 13.265 C 39.9 13.265 40.629 13.992 40.629 14.888 C 40.629 15.786 39.9 16.514 39.003 16.514 C 38.106 16.514 37.379 15.786 37.379 14.889 C 37.379 13.991 38.106 13.264 39.003 13.264 M 43.466 14.635 C 43.455 14.631 43.442 14.623 43.427 14.618 C 42.985 14.457 42.8 14.114 42.635 13.618 C 42.263 12.505 41.416 11.695 40.354 11.297 C 39.782 11.067 39.454 10.524 39.392 10.332 L 39.391 10.335 C 37.462 4.689 32.076 0.741 25.989 0.741 C 19.902 0.741 14.514 4.687 12.587 10.336 L 12.587 10.334 C 12.521 10.532 12.179 11.102 11.575 11.318 C 10.526 11.729 9.752 12.397 9.337 13.666 C 9.177 14.158 9.017 14.457 8.552 14.628 C 8.538 14.635 8.524 14.639 8.512 14.646 C 4.07 16.44 1.086 20.765 1.086 25.657 C 1.086 32.214 6.418 37.549 12.974 37.549 L 21.064 37.549 C 22.232 37.549 22.387 37.861 22.779 38.519 C 23.404 39.571 24.647 40.259 25.991 40.259 C 27.449 40.259 28.724 39.439 29.373 38.235 C 29.591 37.892 29.929 37.55 30.913 37.55 L 39.024 37.55 C 45.58 37.55 50.914 32.215 50.914 25.658 C 50.914 20.756 47.92 16.425 43.466 14.638" style="fill: rgb(210, 31, 21); stroke-width: 0.43px;"></path>
</svg>`;

const mc_header_css = `
body {
  margin: 0;
}
  
.mc-header-separator {
  width: 100%;
  height: 16px;
  background-color: aliceblue;

}
.mc-header .mc-nav {
  background-color: #fff;
  display: flex;
  align-items: center;
  border-bottom: 3px solid #dee6e6;
  font-family: "Open Sans", sans-serif ;
  font-weight: 400;
  font-size: 16px;
  box-sizing: border-box;
  height: 65px;
  position: relative;
}
.mc-header .mc-navbrand {
  min-width: 58px;
  padding: 7px 15px 5px 22px;
}
.mc-header .mc-navbrand svg {
  width: 58px;
  display: block;
}
.mc-nav .mc-navlink {
  display: inline-block;
  padding: 14px 15px;
  font-weight: 700;
  color: #455860;
  text-decoration: none;
  text-align: center;
}
.mc-header .mc-navlink:hover {
  color: #8fa5af;
}
.mc-nav .mc-navlink.active {
  color: #cc1b30;
}
.mc-header .mc-more-dropdown {
  position: relative;
  z-index: 200;
}
.mc-header .mc-drop-menu {
  position: absolute;
  right: 10px;
  background-color: #fff;
  min-width: 220px;
  border-radius: 6px;
  border: 2px solid #dee6e6;
  z-index: 100;
  padding: 5px 0;
}
.mc-header .mc-drop-menu a {
  display: block;
  color:rgb(30, 30, 30);
  padding: 10px 14px;
  font-size: 16px;
  line-height: 10px;
  text-decoration: none;
}
.mc-header .mc-drop-menu a:hover {
  background-color: #fbfcfc;
    color:#8fa5af;

}
.mc-header ul.mc-breadcrumb {
  padding: 7px 10px 7px 20px;
  background-color: #f5f5f5;
  color: #3e70bb;
  border: 1px solid #d6d6d6;
  font-family: "Open Sans", sans-serif ;
  margin: 0px 20px;
  overflow: hidden;
  display: flex;
  align-items: center;
}
.mc-header ul.mc-breadcrumb li {
  color: #3e70bb;
  display: inline;
  line-height: 1;
  font-size: 16px;
  margin-right: 46px;
  position: relative;
}
.mc-header ul.mc-breadcrumb li a {
  text-decoration: none;
  color: #3e70bb;
}
.mc-header ul.mc-breadcrumb li a:visited {
  color:#3e70bb;
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

.mc-header .mc-breadcrumb li:last-child a::after,
.mc-header .mc-breadcrumb li:last-child a::before {
  border: 0;
  display: none;
}
/* --- Hamburger menu  --- */
/* Hide checkbox */
.nav-toggle {
  display: none;
}
/* Hamburger icon - hidden by default */
.hamburger {
  display: none;
  font-size: 30px;
  padding: 0 15px;
  cursor: pointer;
  user-select: none;
}
/* Container wrapping nav links */
.mc-nav-links-wrapper {
  background: #fff;
  display: flex;
  align-items: center;
  width: 100%;
  top: 65px; /* below header */
}

/* Responsive styling */
@media (max-width: 768px) {
  .hamburger {
    display: block;
    margin-left: auto;
  }
  .mc-nav-links-wrapper {
    display: none;
    flex-direction: column;
    position: absolute;
    z-index: 999;
  }
  /* Show nav links when checkbox is checked */
  .nav-toggle:checked + .hamburger + .mc-nav-links-wrapper {
    display: flex;
  }
  .mc-navlink {
    width: 100%;
    padding: 12px 20px;
    box-sizing: border-box;
    border-bottom: 1px solid #eee;
  }
  .mc-more-dropdown {
    margin-left: 0 !important;
    width: 100%;
  }
  .mc-header .mc-drop-menu {
    position: inherit;
    right: 0;
  }
}
`;

// header.js
(() => {
  document.addEventListener("DOMContentLoaded", () => {
    const headerHTML = `
    <header class="mc-header">
      <nav class="mc-nav">
        <a class="mc-navbrand" href="https://www.materialscloud.org/home">
          ${mc_logo_svg}
        </a>
    
        <input type="checkbox" id="nav-toggle" class="nav-toggle" />
        <label for="nav-toggle" class="hamburger">&#9776;</label>
    
        <div class="mc-nav-links-wrapper">
          <a class="mc-navlink" href="https://www.materialscloud.org/learn">LEARN</a>
          <a class="mc-navlink" href="https://www.materialscloud.org/work">WORK</a>
          <a class="mc-navlink" href="https://www.materialscloud.org/discover">DISCOVER</a>
          <a class="mc-navlink" href="https://www.materialscloud.org/explore">EXPLORE</a>
          <a class="mc-navlink" href="https://www.materialscloud.org/archive">ARCHIVE</a>
          <div class="mc-more-dropdown" style="margin-left: auto; position: relative;">
            <a class="mc-navlink" href="#" id="mc-more-link">More <svg
              xmlns="http://www.w3.org/2000/svg"
              width="18"
              height="18"
              viewBox="4 2 18 20"
              fill="currentColor"
              style="vertical-align: middle;"
            >
              <path d="M12 15l-7-7h14z"></path>
            </svg></a>
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
        </div>
      </nav>
      <div class="mc-header-separator"></div>
        <ul class="mc-breadcrumb" id="breadcrumb-list"></ul>
      <div class="mc-header-separator"></div>

    </header>`;

    // Insert header
    document.body.insertAdjacentHTML("afterbegin", headerHTML);

    // Load headerCSS
    const style = document.createElement("style");
    style.textContent = mc_header_css;
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
    const navToggle = document.getElementById("nav-toggle");
    const navLinksWrapper = document.querySelector(".mc-nav-links-wrapper");
    const hamburger = document.querySelector(".hamburger");

    document.addEventListener("click", (e) => {
      const isMenuOpen = navToggle.checked;

      const isClickInsideMenu =
        navLinksWrapper.contains(e.target) ||
        hamburger.contains(e.target) ||
        e.target === navToggle;

      if (isMenuOpen && !isClickInsideMenu) {
        navToggle.checked = false;
      }
    });
  });

window.updateBreadcrumbs = function (breadcrumbsPath) {
  const list = document.getElementById("breadcrumb-list");
  if (!list) return;

  // Clear existing breadcrumbs
  list.innerHTML = "";

  // Populate new breadcrumbs
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

  // Update active nav link based on first breadcrumb
  const first = breadcrumbsPath[0]?.name?.toUpperCase();
  if (first) {
    document.querySelectorAll(".mc-navlink").forEach((link) => {
      link.classList.toggle(
        "active",
        link.textContent.trim().toUpperCase() === first
      );
    });
  }
};
})();
