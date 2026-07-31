import assert from "node:assert/strict";
import { readFile } from "node:fs/promises";
import test from "node:test";

test("o build estático contém o portfólio final", async () => {
  const html = await readFile(new URL("../out/index.html", import.meta.url), "utf8");
  assert.match(html, /Sistemas personalizados/);
  assert.match(html, /para necessidades reais/);
  assert.match(html, /Sistemas personalizados para necessidades reais/);
  assert.match(html, /og-custom\.png/);
  assert.match(html, /Manifesto visual/);
  assert.match(html, /100% SYNTHETIC DATA/);
  assert.doesNotMatch(html, /codex-preview|Your site is taking shape|react-loading-skeleton/);
});

test("a página de engenharia apresenta stack e somente código sintético", async () => {
  const html = await readFile(new URL("../out/engenharia/index.html", import.meta.url), "utf8");
  assert.match(html, /Stack completa/);
  assert.match(html, /PostgreSQL/);
  assert.match(html, /FastAPI/);
  assert.match(html, /React Query/);
  assert.match(html, /100% autoral e sintético/);
  assert.match(html, /documents\.read/);
  assert.doesNotMatch(html, /192\.168\.|testehub|hub\.exatta|Zion-Netic-SaaS/);
});
