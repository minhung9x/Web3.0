var module1 = require('./module1');

var fileInput = process.argv[2];

if(module1){
    module1.readFile(fileInput,function (err,data) {
        console.log(data);
    })
}