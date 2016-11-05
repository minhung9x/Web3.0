/**
 * Created by hungm on 11/5/2016.
 */

var fileUtils = require('./Utils');
var fileInputs = process.argv;

var files=[];

for(var i=2;i< fileInputs.length-1;i++){
    files.push(fileInputs[i]);
}

var fileOutput = fileInputs[fileInputs.length-1];
if(fileInputs){
    fileUtils.readMultiFile(files,function (err, data) {
       console.log(data);
        fileUtils.writeFile(JSON.stringify(data),fileOutput);
    })
}
