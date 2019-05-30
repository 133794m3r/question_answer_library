"use strict";

function data_to_modify() {
    var val=document.getElementById('data_type_to_modify').value;
    var all_nodes=select_all('.shown');
    var all_nodes_len=all_nodes.length;
    var i=0;
    for(i=0;i<all_nodes_len;i++){
        all_nodes[i].className='hidden';
    }
    val=parseInt(val);
    select_by_id('data_inputs_area').innerHTML='<br /><button id="submit_data">Submit</button>';
    switch(val){
        case -1:
            break;
        case 0:
            select_by_id('subject_type').className='shown';
            break;
        case 1:
            select_by_id('subject_type').className='shown';
            select_by_id('chapter_number').className='show';
            break;
        case 2:
            select_by_id('subject_type').className='shown';
            select_by_id('unit_number').className='shown';
            select_by_id('data_inputs_area').insertAdjacentHTML('afterbegin',"<br />Chapter Start:<input type='text' id='chst' class='unit_ch' />&emsp;&emsp;Chapter End:<input type='text' id='chend' class='unit_ch'/><br />");
            break;
        case 3:
            select_by_id('subject_type').className='shown';
            select_by_id('course_id').className='shown';
            break;
    }
    return 0;
}

function change_subject(){
    
    return 0;
}

function change_chapter(){

    return 0;
}

function change_course(){

    return 0;
}

function change_unit(){
    var val=document.getElementById('unit_number').value;
    if(val===-1 || val===-127){
        return 1;
    }

    return 0;
}
function submit_it(){
    var data_type=select_by_id('data_type_to_modify').value;
    var all_nodes=select_all('.shown');
    if(date_type===-1){
        return 1;
    }
}
function get_all_data(){
    var location='localhost/dev_broker.php?data=true&tables=courses,chapters,units,subjects';
    var returned_data = ajax(location,'GET','');

}
