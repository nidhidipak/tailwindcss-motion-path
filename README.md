# Tailwind CSS Motion Plugin

A powerful, lightweight Tailwind CSS v4 plugin that brings full support for the CSS Motion Path module along with built-in animation utilities.

## 🚀 Installation

Install the plugin via npm:

```bash
npm install tailwindcss-motion
```

## Setup (Tailwind v4)

Add the plugin directly to your CSS file using the `@plugin` directive:

```css
@import "tailwindcss";

@plugin "tailwindcss-motion";
```

## Available Utilities

### Motion Path Classes

- **`offset-path`**: e.g., `offset-path-none`, `offset-path-[circle()]`, `offset-path-[path('M0,0_L100,100')]`, `offset-path-[xywh(0_0_100%_100%_round_20px)]`
- **`offset-distance`**: `0`, `25`, `50`, `75`, `100`, or arbitrary `[37%]`
- **`offset-rotate`**: `auto`, `reverse`, `0`, `45`, `90`, or arbitrary `[135deg]`
- **`offset-anchor`**: `center`, `top`, `left`, `right`, or arbitrary `[20px_40px]`
- **`offset-position`**: `auto`, `center`, or arbitrary `[10px_20px]`

### Animation Helpers

Users who don't want to write custom keyframes can use our pre-built animation classes. These will smoothly animate the `offset-distance` from `0%` to `100%`:

**Standard Motions**
- `animate-motion`: Linear infinite animation (4s)
- `animate-motion-loop`: Ease-in-out infinite animation (4s)
- `animate-motion-reverse`: Linear infinite reverse animation (4s)
- `animate-motion-alternate`: Linear alternating back and forth (4s)
- `animate-motion-alternate-reverse`: Linear alternating reverse (4s)

**Speed Presets**
- `animate-motion-slow`: Slow linear animation (8s)
- `animate-motion-fast`: Fast linear animation (2s)

**Timing Functions**
- `animate-motion-linear`: Linear timing (4s)
- `animate-motion-ease`: Ease timing (4s)
- `animate-motion-ease-in`: Ease-in timing (4s)
- `animate-motion-ease-out`: Ease-out timing (4s)
- `animate-motion-ease-in-out`: Ease-in-out timing (4s)

**Special Easing**
- `animate-motion-bounce`: Bouncy infinite animation (4s)
- `animate-motion-elastic`: Elastic spring-like infinite animation (4s)
- `animate-motion-ping`: Fast pulse-like motion (1s)

**Repetition**
- `animate-motion-once`: Play the motion animation once
- `animate-motion-infinite`: Infinite motion animation

### Control Utilities

Want fine-grained control over duration, delay, or repeat behavior? We provide custom utilities so you don't have to rely on standard animation classes:

**Duration (`motion-duration-*`)**
- `motion-duration-1` (1s)
- `motion-duration-2` (2s)
- `motion-duration-4` (4s)
- `motion-duration-8` (8s)
- Arbitrary: `motion-duration-[10s]`

**Delay (`motion-delay-*`)**
- `motion-delay-100` (100ms)
- `motion-delay-300` (300ms)
- `motion-delay-500` (500ms)
- Arbitrary: `motion-delay-[2s]`

**Repeat (`motion-repeat-*`)**
- `motion-repeat-1` (1 time)
- `motion-repeat-2` (2 times)
- `motion-repeat-infinite` (infinite loops)
- Arbitrary: `motion-repeat-[5]`

#### Example:
```html
<div class="animate-motion-bounce motion-duration-2 motion-delay-100"></div>
<div class="animate-motion-circle motion-repeat-infinite"></div>
```

## 🎨 Creative Demos

You can use standard Tailwind classes along with `tailwindcss-motion` to create beautiful SVG path animations. Here are a few examples:

### 1. Circle Loader 🟢
```html
<div class="offset-path-[circle(80px_at_50%_50%)] animate-motion"></div>
```

### 2. Rectangle (xywh) 🟦
```html
<div class="offset-path-[xywh(0_0_100%_100%_round_20px)] animate-motion-alternate"></div>
```

### 3. Infinity Loop ♾️
```html
<div class="offset-path-[path('M_100,100_C_40,40_40,160_100,100_C_160,40_160,160_100,100_Z')] animate-motion"></div>
```

### 4. Heart Animation ❤️
```html
<div class="offset-path-[path('M_100,60_C_100,20_40,20_40,60_C_40,100_100,160_100,160_C_100,160_160,100_160,60_C_160,20_100,20_100,60_Z')] animate-motion-alternate"></div>
```

### 5. Car Driving on Road 🚗
```html
<div class="offset-path-[path('M_20,180_C_60,60_140,60_180,180')] offset-rotate-auto animate-motion-alternate">🚗</div>
```

### 6. Rocket Launch 🚀
```html
<div class="offset-path-[path('M_20,180_Q_100,100_180,20')] offset-rotate-auto animate-motion-reverse">🚀</div>
```

---

## 🛠️ For Developers: Contributing

1. Install dependencies: `npm install`
2. Build the plugin: `npm run build`
3. Run the Playground Watcher:
```bash
cd playground
npx @tailwindcss/cli -i input.css -o output.css --watch
```
4. Open `playground/index.html` to see the live demos!