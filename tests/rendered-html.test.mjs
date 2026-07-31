import assert from "node:assert/strict";
import { readFile } from "node:fs/promises";
import test from "node:test";

test("o build estático contém o portfólio final", async () => {
  const html = await readFile(new URL("../out/index.html", import.meta.url), "utf8");
  assert.match(html, /Sistemas complexos/);
  assert.match(html, /Sistemas personalizados para necessidades reais/);
  assert.match(html, /og-custom\.png/);
  assert.match(html, /100% SYNTHETIC DATA/);
  assert.doesNotMatch(html, /codex-preview|Your site is taking shape|react-loading-skeleton/);
});
