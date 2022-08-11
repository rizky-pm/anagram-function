const anagram = (arr) => {
  let result;
  let object = {};

  for (let i = 0; i < arr.length; i++) {
    let key = arr[i].toLowerCase().split('').sort().join('');

    if (!object[key]) {
      object[key] = [arr[i]];
    } else {
      object[key].push(arr[i]);
    }
  }

  result = Object.values(object);
  return result;
};

console.log(anagram(['kita', 'atik', 'tika', 'aku', 'kia', 'makan', 'kua']));
