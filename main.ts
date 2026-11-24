import { mkdirSync, writeFileSync } from "node:fs";

// Entry: one sentence (153 chars) pitching a friend who has never coded on
// letting an AI agent on make.fun build their first app idea.
// Angle: problem-first — open on the small daily irritation the friend
// already complains about; the app removes that irritation.
// Deterministic: no input, no randomness, no time — same bytes every run.
const LINE =
  "That little thing that bugs you every day: let an AI agent on make.fun build a first version of the fix, and try it free to see if the annoyance is gone.";

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", LINE, "utf8");
