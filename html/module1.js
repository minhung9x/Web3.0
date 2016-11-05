var fs =  require('fs');
var b;
mudule.exports.readFile  = function(fileInput
    fs.readFile(fileInput,function (err,data) )

        var arrLine = data.split('\n');
        var arr;
        for(var i=0;i<arrLine.length;i++){
            arr = arrLine[i].split(' ');
            b[arr[1]] += arr[2];
        }
        return b;
    })
)



