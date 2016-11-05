/**
 * Created by hungm on 11/5/2016.
 */
var fs = require('fs');

module.exports.readFile = function (file, done) {
    fs.readFile(file,function (err, logData) {
        if(err){
            done(err);
        }
        var txt = logData.toString();
        var arr =[];

        var lines = txt.split('\n');

        lines.forEach(function (line) {
            var str = line.split(' ');
            var char = str[1];
            var count = parseInt(str[2]);

            if(!arr[char]) {
                arr[char] = 0;
            }

            arr[char] += count;

        });
        done(null,arr);

    })
}



module.exports.writeFile = function (data, fileOutput) {

    fs.writeFile(fileOutput,data);
}
 module.exports.readMultiFile = function (files,done) {
     var len = files.length;
     var arr ={};
     var str;
     files.forEach(function (file,i) {
         fs.readFile(file,function (err, logData) {
             if(err){
                 done(err);
             }
             var txt = logData.toString();
             var lines = txt.split('\n');
             lines.forEach(function (line) {
                 var str = line.split(' ');
                 var char = str[1];
                 var count = parseInt(str[2]);

                 if(!arr[char]) {
                     arr[char] = 0;
                 }
                 arr[char] += count;
             });

             if(i==len-1) {
                 done(null,arr);
             }

         })
     })

 }