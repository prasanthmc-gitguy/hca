(function () {
  "use strict";

  document.addEventListener("DOMContentLoaded", function () {
    var yearEls = document.querySelectorAll(".hca-current-year");
    yearEls.forEach(function (el) {
      el.textContent = new Date().getFullYear();
    });

    // Collapse mobile navbar after a link is clicked
    var navLinks = document.querySelectorAll(".hca-navbar .nav-link:not(.dropdown-toggle)");
    var navCollapseEl = document.getElementById("hcaNavbarContent");
    navLinks.forEach(function (link) {
      link.addEventListener("click", function () {
        if (navCollapseEl && navCollapseEl.classList.contains("show") && window.bootstrap) {
          var instance = window.bootstrap.Collapse.getInstance(navCollapseEl);
          if (instance) instance.hide();
        }
      });
    });
  });
})();
