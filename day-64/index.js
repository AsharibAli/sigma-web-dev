// Create a interface name generator by combining list of objective,
//  and shop name and another word, Use functions, strings, please don't use arrays.

// Adjectives Names:
// Crazy
// Amazing
// Fire

// Shop Names:
// Engine
// Foods
// Garments

// Another Word:
// Bros
// Limited
// Hub
function generateInterfaceName() {
  const adjectives = ["Crazy", "Amazing", "Fire"];
  const shopNames = ["Engine", "Foods", "Garments"];
  const anotherWords = ["Bros", "Limited", "Hub"];

  const randomAdjective =
    adjectives[Math.floor(Math.random() * adjectives.length)];
  const randomShopName =
    shopNames[Math.floor(Math.random() * shopNames.length)];
  const randomAnotherWord =
    anotherWords[Math.floor(Math.random() * anotherWords.length)];

  return randomAdjective + randomShopName + randomAnotherWord;
}

console.log(generateInterfaceName());
