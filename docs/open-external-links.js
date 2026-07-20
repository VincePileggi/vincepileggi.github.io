document.addEventListener("DOMContentLoaded", function () {
  const links = document.querySelectorAll("a[href]");

  links.forEach(function (link) {
    const href = link.getAttribute("href");

    if (
      href &&
      (href.startsWith("http://") || href.startsWith("https://")) &&
      !href.includes(window.location.hostname)
    ) {
      link.setAttribute("target", "_blank");
      link.setAttribute("rel", "noopener noreferrer");
    }
  });
});