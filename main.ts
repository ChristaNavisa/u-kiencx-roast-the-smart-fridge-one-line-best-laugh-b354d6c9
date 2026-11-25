// Roast the Smart Fridge: One Line, Best Laugh Wins — entrypoint.
// Writes a single-line roast of the robot vacuum to /output/entry.txt.
// Deterministic: the same bytes on every run.
//
// The joke is one turn, not a list: the vacuum maps the dog as a "soft
// obstacle" (a real mapping behaviour), then the sting lands at the end —
// it avoids the dog with more respect than it shows its owner. The
// "soft obstacle" phrasing is the vacuum's own mapping vocabulary, not
// the writer's: the gadget convicts itself.
import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const ENTRY =
  "My robot vacuum mapped the dog as a 'soft obstacle' and now avoids him with more respect than it shows me.";

const outDir = process.env.MAKEFUN_OUTPUT_DIR || "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), ENTRY, "utf8");
