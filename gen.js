var fs=require("fs");
var uuidv4 = require('uuid/v4');
var path=require("path");
var ids=require("short-id");
var moment=require("moment");
var createCsvWriter = require('csv-writer').createObjectCsvWriter;

var dir="tropa_2019";

var csvWriter=createCsvWriter({
    path:dir+".csv",
    fieldDelimiter:";",
    header:[
        {id:"id",title:"#"},
        {id:"link",title:"Link"}
    ]
});

var source_name="_";

var num_files=16;
var site_prefix="https://rozhnovo.github.io/tropa_2019/";
var textHtml="text.html";
var image="image.jpg";
var result=[];

for( i =0; i<num_files;i++){
    var id=ids.generate();
    var fileDir=path.join("f"+id);
    fs.mkdirSync(fileDir);

    src_fn=path.join(dir,source_name+".html");
    var fn=path.join(dir,fileDir,"index.html");
    dst_fn=fn;
    console.log(src_fn,">",dst_fn);
    fs.copyFileSync(src_fn,dst_fn);
    fs.copyFileSync(path.join(dir,textHtml),path.join(dir,fileDir,textHtml));
    fs.copyFileSync(path.join(dir,image),path.join(dir,fileDir,image));
    result.push({id:i+1,link:site_prefix+fileDir.replace("\\","/")});

}
csvWriter
    .writeRecords(result)
    .then(()=>console.log("ok"));