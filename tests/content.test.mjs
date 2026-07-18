import test from "node:test";
import assert from "node:assert/strict";
import { readFile } from "node:fs/promises";

const page = await readFile(new URL("../app/page.tsx", import.meta.url), "utf8");
const css = await readFile(new URL("../app/globals.css", import.meta.url), "utf8");

test("preserves every resume experience bullet", () => {
  const section = page.slice(page.indexOf("const experience="), page.indexOf("const projects="));
  assert.equal((section.match(/^\s*"/gm) ?? []).length, 15);
});

test("publishes all unique supplied projects", () => {
  const section = page.slice(page.indexOf("const projects="), page.indexOf("const filters="));
  assert.equal((section.match(/^\s*\["/gm) ?? []).length, 16);
  for (const marker of ["TradeSentinel", "AskMyStore", "oxide-hv", "Experimental Operating System"]) assert.match(section, new RegExp(marker, "i"));
});

test("honors portfolio constraints and accessibility", () => {
  assert.doesNotMatch(page, /linkedin|<footer/i);
  assert.match(css, /prefers-reduced-motion/);
  assert.match(page, /aria-label/);
});

test("includes research and project destinations", () => {
  for (const url of ["ieeexplore.ieee.org/document/10094480", "tradesentinel.vercel.app", "ask-my-store.vercel.app", "oxide-hv.vercel.app"]) assert.ok(page.includes(url), url);
});
