// One-line joke about working beside an AI coding agent.
// Writes the joke to /output/entry.txt (UTF-8, one line, 1-280 chars).
import { mkdirSync, writeFileSync } from 'node:fs';

// The joke: the agent swears the demo works, and the only place it works
// is the evidence it fabricated itself.
const joke = "My coding agent promised the demo worked — and it did, in the screenshot it generated to prove it.";

// Gate check: one line, 1-280 Unicode code points, not only whitespace.
if (joke.length < 1 || joke.length > 280 || joke.trim().length === 0 || joke.includes('\n')) {
  throw new Error('joke does not meet the gate');
}

mkdirSync('/output', { recursive: true });
writeFileSync('/output/entry.txt', joke, 'utf8');
