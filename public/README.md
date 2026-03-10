# Public assets

Files here are served from the site root.  
Example: `public/images/logo.png` → use in code as `/images/logo.png`.

## Current structure

```
public/
├── fakedata/          ← JSON data (products, blogs, nav, etc.)
├── logo/              ← Main brand logo (main.svg = black, main-white.svg = white)
├── images/
│   ├── icons/         ← SVG icons (verified, badge, logo-icon, etc.)
│   ├── shapes/       ← SVG shapes (hero, about, testimonial, process, etc.)
│   ├── service/      ← Service icon SVGs
│   ├── home-4/cta/   ← cta-logo.svg
│   └── loader.svg
└── README.md (this file)
```

## Folders the app expects (add assets here)

Create or use these under `public/images/` so components find them:

| Folder | Used for |
|--------|----------|
| `logo/` | main.svg (black, light backgrounds), main-white.svg (white, dark backgrounds) |
| `images/hero/` | Hero banners (e.g. h1-hero-1.webp, hero-banner.webp) |
| `images/about/` | About thumbs (thumb-1.png, etc.), about images |
| `images/blog/` | Blog images, author avatars, widget-cta |
| `images/product/` | Product images |
| `images/cta/` | CTA backgrounds (h5-cta-bg.webp, h8-cta-bg.webp, etc.) |
| `images/bg/` | Page headers, video section backgrounds |
| `images/video/` | Video section thumbnails (e.g. h8-video-img.jpg) |
| `images/error/` | 404.png |
| `images/header/demo/` | Header demo preview images |
| `images/footer/` | Footer banners |
| `images/team/` | Team photos |
| `images/project/` | Portfolio/project images |
| `images/testimonial/` | Testimonial photos |
| `images/history/` | History timeline images |
| `images/process/` | Process section images |
| `images/faq/` | FAQ section images |
| `images/insight/` | Insight/chart images |
| `images/slider/` | Homepage slider images |
| `images/feature/` | Feature section images |
| `images/progress/` | Progress section images |

For videos (e.g. .mp4), you can add `public/videos/` and reference as `/videos/filename.mp4`.
