var fs=require("fs");
var uuidv4 = require('uuid/v4');
var path=require("path");

var source_name="index";
var dir="tropa_2019";
var num_files=16;
for( i =0; i<num_files;i++){
    var fn=uuidv4();
    console.log(fn);
    src_fn=path.join(dir,source_name+".html");
    dst_fn=path.join(dir,""+i+"_"+fn+".html");
    console.log(src_fn,">",dst_fn);
    fs.copyFile(src_fn,dst_fn,(err)=>{
        if(err){
            throw err;
        }
        console.log("success", dst_fn);
    });
}