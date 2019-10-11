var fs=require("fs");
var uuidv4 = require('uuid/v4');
var path=require("path");
var ids=require("short-id");

var source_name="_";
var dir="tropa_2019";
var num_files=16;
for( i =1; i<=num_files;i++){
    var fn=ids.generate();
    console.log(fn);
    src_fn=path.join(dir,source_name+".html");
    dst_fn=path.join(dir,"f"+fn+".html");
    console.log(src_fn,">",dst_fn);
    fs.copyFile(src_fn,dst_fn,(err)=>{
        if(err){
            throw err;
        }
        console.log("success", dst_fn);
    });
}