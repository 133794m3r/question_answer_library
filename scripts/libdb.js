function db_create_object(dbname,dbversion,objname,index) {
    var db_req=indexedDB.open(dbname,dbversion);
    var i=0;
    var db={};
    db_req.onerror=function(event){
        console.log('error: '+event);
    };
    db_req.onsuccess=function(event){
        db=db_req.result;
    };
    db.createObjectStore(objname,{keypath:index});
}
function db_add_objects(dbname,objname,data,data_len){
     var db_obj=dbname.transaction([objname],"readwrite");
     var i=0;
     var db_res={};
     for (i=0;i<data_len;++i) {
        db_res=db_obj.add(data[i]);
     }
    db_req.onerror=function(event){
        console.log('error: '+event);
    };
    db_req.onsuccess=function(event){
        console.log('success');
    };
}
function db_read_objects(dbname,objname,data_to_get){
    var output={};

    return 0;
}
