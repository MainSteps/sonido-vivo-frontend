import { execFileSync } from "node:child_process";
import { readFileSync } from "node:fs";
import { extname } from "node:path";

const failures = [];
const branch = process.env.BRANCH_NAME || "main";
const allowedBranch = /^(main|(feat|fix|docs|test|chore|argos)\/[a-z0-9][a-z0-9._-]*)$/;

if (!allowedBranch.test(branch)) {
  failures.push(`La rama '${branch}' no cumple la convención del proyecto.`);
}

const files = execFileSync("git", ["ls-files", "-z"], { encoding: "utf8" })
  .split("\0")
  .filter(Boolean);

const sensitiveNames = new Set([
  "id_rsa",
  "id_ed25519",
  "credentials.json",
  "service-account.json",
]);
const sensitiveExtensions = new Set([".pem", ".key", ".p12", ".pfx"]);

for (const file of files) {
  const normalized = file.replaceAll("\\", "/");
  const base = normalized.split("/").at(-1).toLowerCase();
  const extension = extname(base);

  if (
    (base === ".env" || (base.startsWith(".env.") && base !== ".env.example")) ||
    sensitiveNames.has(base) ||
    sensitiveExtensions.has(extension)
  ) {
    failures.push(`Archivo sensible rastreado: ${file}`);
  }

  const content = readFileSync(file, "utf8");
  if (/^(<{7}|={7}|>{7})( |$)/m.test(content)) {
    failures.push(`Marcador de conflicto sin resolver: ${file}`);
  }

  if (extension === ".js" || extension === ".mjs") {
    try {
      execFileSync(process.execPath, ["--check", file], { stdio: "pipe" });
    } catch {
      failures.push(`JavaScript con error de sintaxis: ${file}`);
    }
  }

  if (extension === ".html") {
    const lower = content.toLowerCase();
    for (const required of ["<!doctype html", "<html", "<head", "<body"]) {
      if (!lower.includes(required)) {
        failures.push(`${file} no contiene ${required}>.`);
      }
    }
  }
}

if (failures.length > 0) {
  console.error("Comprobaciones fallidas:\n");
  for (const failure of failures) console.error(`- ${failure}`);
  process.exit(1);
}

console.log(`Comprobaciones superadas para '${branch}' en ${files.length} archivos.`);
