# Tailwind CSS Motion Path Plugin

A powerful, lightweight Tailwind CSS v4 plugin that brings full support for the CSS Motion Path module (`offset-path`) along with built-in animation utilities.

## 🚀 Installation & Setup

Install the plugin via npm:

```bash
npm install tailwindcss-motion-path
```

Add the plugin directly to your CSS file using the `@plugin` directive:

```css
@import "tailwindcss";
@plugin "tailwindcss-motion-path";
```

## 🛠️ Usage

### Motion Path Classes

Easily define paths and how elements position themselves along them:

- **`offset-path`**: e.g., `offset-path-none`, `offset-path-[circle()]`, `offset-path-[path('M0,0_L100,100')]`
- **`offset-distance`**: `0`, `25`, `50`, `75`, `100`, or arbitrary `[37%]`
- **`offset-rotate`**: `auto`, `reverse`, `0`, `45`, `90`, or arbitrary `[135deg]`
- **`offset-anchor`**: `center`, `top`, `left`, `right`, or arbitrary `[20px_40px]`
- **`offset-position`**: `auto`, `center`, or arbitrary `[10px_20px]`

> **⚠️ Note:** Currently, `offset-position` and CSS animations (like `animate-motion`) do not work well together. Using both on the same element may result in the `offset-position` being ignored.

### Animation Helpers

Use pre-built animation classes to smoothly animate the `offset-distance` from `0%` to `100%`:

- **Standard:** `animate-motion`, `animate-motion-reverse`, `animate-motion-alternate`, `animate-motion-loop`
- **Speed:** `animate-motion-fast` (2s), `animate-motion-slow` (8s)
- **Easing:** `animate-motion-linear`, `animate-motion-ease`, `animate-motion-bounce`, `animate-motion-ping`
- **Shapes:** `animate-motion-orbit`, `animate-motion-circle`, `animate-motion-figure8`

### Control Utilities

Want fine-grained control? We provide custom utilities so you don't have to write custom CSS:

- **Duration (`motion-duration-*`)**: `1`, `2`, `4`, `8`, or arbitrary `[10s]`
- **Delay (`motion-delay-*`)**: `100`, `300`, `500`, or arbitrary `[2s]`
- **Repeat (`motion-repeat-*`)**: `1`, `2`, `infinite`, or arbitrary `[5]`

#### Example:
```html
<div class="offset-path-[circle()] animate-motion-bounce motion-duration-2 motion-delay-100"></div>
<div class="offset-path-[path('M_0,0_L_100,100')] animate-motion-fast motion-repeat-infinite"></div>
```

## 🎨 Demo

[Check out the live demo here!](#)
