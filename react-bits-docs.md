# React Bits Documentation

This document contains information about the React Bits component library, retrieved via MCP Context7.

## Overview

React Bits is an open-source collection of high-quality, animated, interactive, and fully customizable React components for building stunning, memorable user interfaces.

### Component Variants

React Bits components are available in four variants to cater to different project needs:
- JS + CSS
- JS + Tailwind CSS
- TS + CSS
- TS + Tailwind CSS

## Contribution

Contributions are welcome. You can check the [Open Issues](https://github.com/DavidHDev/react-bits/issues) to see how you can help or submit ideas using the [Feature Request template](https://github.com/DavidHDev/react-bits/issues/new?template=2-feature-request.yml).

Please review the [Contribution Guide](https://github.com/DavidHDev/react-bits/blob/main/CONTRIBUTING.md) and follow the project standards.

## License

The React Bits project is licensed under the [MIT + Commons Clause license](https://github.com/davidhdev/react-bits/blob/main/LICENSE.md).

## Technical Details

### WebPage Schema Markup

The following JSON-LD script provides schema markup for a webpage, detailing its name, URL, description, author, and publisher information. This helps search engines understand the content and context of the page.

```html
<script type="application/ld+json">
{
  "@context": "https://schema.org",
  "@type": "WebPage",
  "name": "React Bits",
  "url": "https://reactbits.dev",
  "description": "An open source collection of high quality, animated, interactive & fully customizable React components for building stunning, memorable user interfaces.",
  "image": "https://reactbits.dev/og-pic.jpg",
  "author": {
    "@type": "Person",
    "name": "David Haz"
  },
  "publisher": {
    "@type": "Person",
    "name": "David Haz",
    "logo": {
      "@type": "ImageObject",
      "url": "https://davidhaz.com"
    }
  }
}
</script>
```

### Google Analytics Initialization

This snippet initializes Google Analytics (gtag.js) for a web page. It ensures the `dataLayer` is available and then configures the analytics with a specific measurement ID.

```javascript
window.dataLayer = window.dataLayer || [];
function gtag() {
  dataLayer.push(arguments);
}
gtag('js', new Date());
gtag('config', 'G-1GF5NXTV27');
```
