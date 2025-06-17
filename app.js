const fs = require('fs');
const csv = require('csv-parser');

const results = [];

fs.createReadStream('archetype_plot_combinations.csv')
  .pipe(csv())
  .on('data', (data) => results.push(data))
  .on('end', () => {
    // Shuffle the results
    const shuffled = results.sort(() => 0.5 - Math.random());

    // Pick 3 random combinations
    const selected = shuffled.slice(0, 3);

    console.log("\n🎭 RANDOM STORY COMBINATIONS:\n");
    selected.forEach((item, index) => {
      console.log(`${index + 1}. ${item["Start Archetype"]} → ${item["Plot Type"]} ← ${item["Opposing Archetype"]}`);
    });
    console.log();
  });
