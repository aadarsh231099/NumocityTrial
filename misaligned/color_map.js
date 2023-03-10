function print_color_map() {
  const majorColors = ['White', 'Red', 'Black', 'Yellow', 'Violet'];
  const minorColors = ['Blue', 'Orange', 'Green', 'Brown', 'Slate'];
  const map = [];
  let maxIndexLength = 0;
  let maxMajorLength = 0;
  for (let i = 0; i < majorColors.length; i++) {
    for (let j = 0; j < minorColors.length; j++) {
      const index = i * 5 + (j + 1);
      maxIndexLength = Math.max(maxIndexLength, index.toString().length);
      maxMajorLength = Math.max(maxMajorLength, majorColors[i].length);
    }
  }
  for (let k = 0; k < majorColors.length; k++) {
    for (let l = 0; l < minorColors.length; l++) {
      const index = k * 5 + (l + 1);
      const indexString = index.toString().padEnd(maxIndexLength, ' ');
      const majorString = majorColors[k].padEnd(maxMajorLength, ' ');
      map.push(`${indexString} | ${majorString} | ${minorColors[l]}`);
    }
  }
  return map;
}

module.exports=print_color_map;
