let items = [
    { id: 1, letter: "a" },
    { id: 2, letter: "b" },
    { id: 3, letter: "c" },
    { id: 4, letter: "d" },
];

console.log(items);

function removeItem(idToRemove) {
    const filteredItems = items.filter((item) => item.id !== idToRemove);

    // function filterItems(item) {
    //     if (item.id !== idToRemove) {
    //         return true;
    //     }
    // }

    items = filteredItems;
}

removeItem(1);

console.log(items);