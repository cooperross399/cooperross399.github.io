// Cloudflare Web Analytics for maverickhightower.com and the NHL, EPL and CBB sites.
// The site tag below is public (Cloudflare puts it in every visitor's page). It lives
// here, in the hub, so the lab repositories keep their strict no-32-hex-string scan.
(function () {
  var s = document.createElement("script");
  s.defer = true;
  s.src = "https://static.cloudflareinsights.com/beacon.min.js";
  s.setAttribute("data-cf-beacon", '{"token": "79292da933cb47e39e5d5f6253d683f2"}');
  document.head.appendChild(s);
})();
