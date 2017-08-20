var fs = require('fs');

function run(generator) {
    const it = generator(go);

    function go(err, res) {
        if (err) it.throw(err);
        it.next(res);
    }

    go();
}

run(function *(done) {
    let firstFile;
    try {
        var dirFiles = yield fs.readdir('NoNoNoNo', done);
        firstFile = dirFiles[0];
    } catch (e) {
        firstFile = null;
    }
    console.log(firstFile);
});

