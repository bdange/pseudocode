var items = ["Adolf", "Albert", "Alice", "Arnold"];

function itemSearch(item) {
  for (var i = 0; i < items.length; i++) {
    if (items[i] === item) {
      console.log("Found " + item + " at index " + i);
    }
  }
}

console.log(itemSearch("Arnold"));
