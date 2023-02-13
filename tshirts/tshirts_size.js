function size(cms) {
  if (cms<0) {
    return 'Enter positive value';
  } else if (cms <= 38) {
    return 'S';
  } else if (cms > 38 && cms <= 42) {
    return 'M';
  } else if (cms > 42 && cms < 51) {
    return 'L';
  } else {
    return 'Value out of size limits';
  }
}


module.exports= size;
