var fs = require('fs');

function askFoo() {
    return new Promise((fulfill, reject) => {
        fulfill('foo');    
    });
}

function run(generator) {
    const it = generator(go);

    function go(res) {
        if (res.done) return res.value;
        
        return res.value.then((val) => {
            return go(it.next(val));
        }).catch((err) => {
            return go(it.throw(err));
        });
    }

    go(it.next());
}

run(function *() {
    try {
        var foo = yield askFoo();
        console.log(foo);
    } catch(e) {
        console.log(e);
    }
});
