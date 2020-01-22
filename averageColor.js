function colorToDecimalComponents(color) {
  return color.toLowerCase().match(/.{1,2}/g).map(component => parseInt(component, 16));
}

function averageToHex(a, b) {
  return Math.ceil((a + b) / 2).toString(16).toUpperCase().padStart(2, '0');
}

function averageColor(colorA, colorB) {
  const [ra, ga, ba] = colorToDecimalComponents(colorA);
  const [rb, gb, bb] = colorToDecimalComponents(colorB);
  return `${averageToHex(ra, rb)}${averageToHex(ga, gb)}${averageToHex(ba, bb)}`;
}

module.exports.averageColor = averageColor;
