function *upper(items) {
    for (const i of items) {
        if (typeof i === 'number') {
            yield null;
        } else {
            yield i.toUpperCase();
        }
    }
}

var bad_items = ['a', 'B', 1, 'c'];
    
for (var item of upper(bad_items)) {
    console.log(item);
}

