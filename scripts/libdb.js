function db_create_object(dbname,dbversion,objname,index) {
    db = await open_db(dbname,dbversion, {
        upgrade(db){
        const store = db.createObjectStore(objname,{
            keyPath: 'id'});
    }
    });
    return 0;
}

function db_add_objects(dbname,objname,data,data_len){
    const db = await open_db(dbname,dbversion);
    var tx = db.transaction(objname, 'readwrite');
    {
    for(i=0;i<data_len;i++){
       await status=tx.store.add(objname,data);
    }
    await tx.done;
    }
    return 0;
}
function db_read_objects(dbname,objname,data_to_get){
    var output={};
    var i=0;
    data_to_get = data_to_get.sort();
    var data_to_get_len=data_to_get.length;    
    const db = await open_db(dbname,dbversion);
    const tx = db.transaction(objname,'read');
    const index= tx.store.index('id');
    let cursor = await tx.store.openCursor();


    while(cursor){
        output.push(cursor.value);
        cursor = await cursor.continue(data_to_get[i++])
    }
    await tx.done;
    return output;
}

function db_upgrade_objects(dbname,objname,indexes_to_upgrade,upgrade_data){
    data_to_get = data_to_get.sort();
    var i=0;
    var indexes_len=indexes_to_upgrade.length;
    const db = await open_db(dbname, dbversion);
    const tx = db.transaction(objname,'readwrite');
    const index = tx.store.index('id');
    let cursor = await tx.store.openCursor();

    while (cursor){
        await cursor.update(upgrade_data[i],indexes_to_upgrade[i]);
        await cursor.continue(indexes_to_upgrade[++i])
    }

    await tx.done;
    return 0;
}
