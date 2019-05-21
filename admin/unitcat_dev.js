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
            select_by_id('chapter_number').className='show';
            select_by_id('unit_number').className='show';
            break;
        case 3:
            select_by_id('subject_type').className='shown';
            select_by_id('course_id').className='show';
            break;
    }
    return 0;
}

