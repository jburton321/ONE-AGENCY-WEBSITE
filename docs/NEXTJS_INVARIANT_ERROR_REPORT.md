# Next.js Runtime InvariantError – Report

## Error

```
Invariant: Expected workUnitAsyncStorage to have a store. This is a bug in Next.js.
Runtime InvariantError
```

- **Next.js version:** 15.5.3 (outdated)
- **Stack:** `work-unit-async-storage.external.ts` → `throwInvariantForMissingStore` → `createServerParamsForServerSegment` → `create-component-tree` → app render

---

## Cause

1. **Known 15.5.x bug**  
   In 15.5.x, `workUnitAsyncStorage` can be missing during RSC (React Server Components) render in some environments (e.g. Webcontainers like Stackblitz/Bolt, or with Turbopack). The runtime expects an async local storage “store” to exist and throws when it doesn’t.

2. **Your setup**  
   - `next dev --turbopack` and `next build --turbopack` are used.  
   - This bug has been reported with **Turbopack** and with **Webcontainers**.  
   - The call stack points at server params / component tree creation, which is where that store is required.

3. **`useSearchParams()`**  
   - Used in `BlogMain.js`, `ShopMain.js`, and checkout components.  
   - In Next 15, components using `useSearchParams()` should be wrapped in `<Suspense>` so the tree can render correctly and avoid odd RSC/async storage behavior.  
   - Missing Suspense can contribute to rendering paths that trigger this invariant.

---

## Recommended fixes (in order)

### 1. Upgrade Next.js (recommended)

You’re on **15.5.3**. Newer 15.5.x patches include fixes and security updates.

```bash
npm install next@latest
# or stay on 15.5.x:
npm install next@15.5.12
```

Then run `npm run dev` again. If the error persists, try (2) or (3).

### 2. Run without Turbopack

If the issue only appears with Turbopack, disable it:

- **package.json**  
  - Change `"dev": "next dev --turbopack"` to `"dev": "next dev"`.  
  - Change `"build": "next build --turbopack"` to `"build": "next build"`.

Then:

```bash
npm run dev
```

If the error goes away, the bug is likely in the Turbopack + 15.5.x combination; upgrading Next (1) may fix it so you can re-enable Turbopack later.

### 3. Wrap `useSearchParams()` usage in Suspense (done in this repo)

On the **blogs** page, `BlogMain` (which uses `useSearchParams()`) is now wrapped in `<Suspense>` so the route doesn’t rely on an uninitialized search params store during RSC. Same pattern can be applied to any other page that renders a component using `useSearchParams()` (e.g. shop, checkout).

### 4. If you’re in a Webcontainer (Stackblitz / Bolt.new)

This invariant is known in **Webcontainers**. Options:

- **Downgrade** to Next **15.4.1** for that environment, or  
- **Upgrade** to the latest 15.5.x and retry; Webcontainers often need to sync with newer Next releases.

---

## Summary

| Item | Status |
|------|--------|
| **Error** | `Expected workUnitAsyncStorage to have a store` (Next.js bug) |
| **Likely cause** | Next 15.5.3 + Turbopack (and/or Webcontainer) |
| **First step** | Upgrade to latest Next 15.5.x (e.g. 15.5.12) |
| **If it persists** | Run without Turbopack (`next dev` / `next build`) |
| **Code change** | Blogs page now wraps `BlogMain` in `<Suspense>` |

If you share whether you’re on local Node or a Webcontainer, the report can be narrowed further (e.g. “try without Turbopack first” vs “upgrade and/or downgrade to 15.4.1”).
