# Solvior design tokens

Reference for designers and developers. All tokens are exposed as CSS variables in `:root` (see `src/app/assets/sass/utilities/_root.scss`).

---

## Colors

Use in CSS: `var(--tj-color-{group}-{name})`

| Token | Variable | Value |
|-------|----------|--------|
| **Common** | | |
| White | `--tj-color-common-white` | `#f7f7f7` |
| White 2 | `--tj-color-common-white-2` | `#a9b0b8` |
| Black | `--tj-color-common-black` | `#000000` |
| Black 2 | `--tj-color-common-black-2` | `#676e7a` |
| Black 3 | `--tj-color-common-black-3` | `#969ca5` |
| **Heading** | | |
| Primary | `--tj-color-heading-primary` | `#051229` |
| **Text** | | |
| Body | `--tj-color-text-body` | `#364052` |
| Body 2 | `--tj-color-text-body-2` | `#7e8590` |
| **Theme** | | |
| Primary | `--tj-color-theme-primary` | `#0075ff` |
| Dark | `--tj-color-theme-dark` | `#051229` |
| Bg | `--tj-color-theme-bg` | `#e1e8f0` |
| Bg 2 | `--tj-color-theme-bg-2` | `#dfecfd` |
| **Border** | | |
| 1 | `--tj-color-border-1` | `#27354d` |
| 2 | `--tj-color-border-2` | `#ced7e0` |
| 3 | `--tj-color-border-3` | `#d7d8db` |
| **Red** | | |
| 1 | `--tj-color-red-1` | `#ff0000` |

---

## Typography

### Font families

| Use | Variable | Source |
|-----|----------|--------|
| Body | `var(--tj-ff-body)` | Lato (Google Font) |
| Heading | `var(--tj-ff-heading)` | Libre Franklin (Google Font) |

Defined in `src/app/layout.js` via Next.js font loader.

### Font weights

| Token | Variable | Value |
|-------|----------|--------|
| Normal | `--tj-fw-normal` | normal |
| Thin | `--tj-fw-thin` | 100 |
| Extra light | `--tj-fw-elight` | 200 |
| Light | `--tj-fw-light` | 300 |
| Regular | `--tj-fw-regular` | 400 |
| Medium | `--tj-fw-medium` | 500 |
| Semi bold | `--tj-fw-sbold` | 600 |
| Bold | `--tj-fw-bold` | 700 |
| Extra bold | `--tj-fw-ebold` | 800 |
| Black | `--tj-fw-black` | 900 |

### Font sizes

| Token | Variable | Value |
|-------|----------|--------|
| Body / P | `--tj-fs-body` / `--tj-fs-p` | 16px |
| H1 | `--tj-fs-h1` | 72px |
| H2 | `--tj-fs-h2` | 48px |
| H3 | `--tj-fs-h3` | 32px |
| H4 | `--tj-fs-h4` | 24px |
| H5 | `--tj-fs-h5` | 20px |
| H6 | `--tj-fs-h6` | 18px |

Responsive scaling for headings is defined in `src/app/assets/sass/components/_theme.scss` (e.g. h1 steps down at xl, lg, md, sm, xs).

---

## Spacing

| Class | Value | Notes |
|-------|--------|--------|
| `.section-space` | 120px 0 (lg: 100px, md/sm/xs: 80px) | Vertical section padding |
| `.section-bottom-space` | Same as above, bottom only | |
| `.rg-30` to `.rg-80` | 30px–80px | Row gap |
| `.mt-30` / `.mb-30` | 30px | Margin top/bottom |
| `.mt-40` / `.mb-40` | 40px | |
| `.mt-50` / `.mb-50` | 50px | |
| `.mt-60` / `.mb-60` | 60px | |

---

## Breakpoints

| Name | Query |
|------|--------|
| xxxxl | min-width: 1800px |
| xxxl | 1600px–1799px |
| xxl | 1400px–1599px |
| xl | 1200px–1399px |
| lg | 992px–1199px |
| md | 768px–991px |
| sm | 576px–767px |
| xs | max-width: 575px |
| xxs | max-width: 390px |

Defined in `src/app/assets/sass/utilities/_breakpoints.scss` as SASS variables (`$xl`, `$lg`, etc.).

---

## Where to change tokens

- **Colors:** `src/app/assets/sass/utilities/_colors.scss`
- **Typography (scale/weights):** `src/app/assets/sass/utilities/_typography.scss`
- **Font loading (family):** `src/app/layout.js`
- **Breakpoints:** `src/app/assets/sass/utilities/_breakpoints.scss`
- **CSS variables output:** `src/app/assets/sass/utilities/_root.scss`

Live style guide: run `npm run dev` and open **/design**.
