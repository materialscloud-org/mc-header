# mc-header

A lightweight header for Materials Cloud, that can be invoked through script insertion.

This project has been deployed as a github page:
[GH Page](https://materialscloud-org.github.io/mc-header/exampleUse.html)

For local/offline use the script can be invoked inside plain html with:

```JS
<script src="header.js" defer></script>
```

The script can also be delivered via jsdelivr CDN:

```JS
<script src="https://cdn.jsdelivr.net/gh/materialscloud-org/mc-header@v0.1.0/header.js" defer></script>
```

By default no breadcrumbs are rendered, however they can be passed to the script by defining a `breadcrumbsPath` within html.

```JS
<script>
  var breadcrumbsPath = [
    { name: "Work", link: "https://www.materialscloud.org/work/menu" },
    {
      name: "Tools",
      link: "https://www.materialscloud.org/work/tools/options",
    },
    {
      name: "EXAMPLE NAME",
      link: null,
    },
  ];
  </script>
```
