# Preview, test & verify

Run these in the project root (terminal).

## 1. Install dependencies

```bash
npm install
```

## 2. Run tests

```bash
npm test
```

Runs Jest: design page smoke tests and any other `*.test.js` / `*.test.tsx` in `src/`.

## 3. Verify build

```bash
npm run build
```

Confirms the app compiles with no errors.

## 4. Preview (dev server)

```bash
npm run dev
```

Then open:

- **App:** [http://localhost:3000](http://localhost:3000)
- **Design system:** [http://localhost:3000/design](http://localhost:3000/design)

---

**Quick full verify:**

```bash
npm install && npm test && npm run build && npm run dev
```

After `Ready` appears, open http://localhost:3000/design in your browser.
