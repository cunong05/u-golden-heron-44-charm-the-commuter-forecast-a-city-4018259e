// Charm the Commuter: Forecast a City That Isn't
// make.fun bounty: u-golden-heron-44-charm-the-commuter-forecast-a-city-4018259e
// One line of weather forecast, 140 characters at most, for a city that
// does not exist. Node 22 stdlib only, no network, deterministic output.

const line =
  "In Wobbleton: 19°C, light confetti drizzle, and the 8:15 bus is actually on time — the driver bribed the traffic lights with donuts.";

// Length guard: the entry must be a single line of at most 140 characters.
if (line.length > 140 || line.includes("\n")) {
  throw new Error(`Entry line must be one line of at most 140 chars, got ${line.length}`);
}

console.log(line);
