/*
* HTML5 Practice Question System
* Copyright (c) 133794m3r aka Macarthur Inbody 2019-2019
* https://github.com/133794m3r/html5test
* Licensed GNU AGPLv3 or Later
* version 0.0.1
*/
/**
 * Filter Items List
 *
 * Filters inputs from the query string.
 * @param none
 * @return none
 *
 */

function filter_items_list(query_id,data_id) {
    var input='';
    var i=0;
    var all_items_length=0;
    var txt='';
    var relevancy=0;
    input = document.getElementById(query_id).value.toUpperCase();
    all_items= document.querySelectorAll(data_id);
    all_items_length=all_items.length;

  for (i = 0; i < all_items_length; i++) {
    txt = all_items[i].innerText.toUpperCase();
    relevancy=score(txt,input);
    if(relevancy > 0){
      all_items[i].style.display = "";
    }
    else {
      all_items [i].style.display = "none";
    }
  }
  return 0;
}

function filter_category() {
    //code
    return 0;
}
function filter_chapters() {
    //code
    return 0;
}
function change_category() {
    //code
    return 0;
}
function question_chapter() {
    //code
    return 0;
}
function question_subject(){
    //code
    return 0;
}
function populate_options(selector,array,field_name,add_new){
    var elements=$(selector);
    var elements_len=elements.length;
    var array_len=array.length;
    var html_string='';
    for(i=0;i<array_len;++i){
        html_string+="<option value='"+i+"'>"+array[i][field_name]+"</option>";
    }
    if(typeof add_new !== undefined){
        html_string+="<option value='"+(-1)+">Add new "+add_new+"</option>";
    }
    for(i=0;i<elements_len;++i){
        elements[i].insertAdjacentHTML('beforeend',html_string);
    }
    return 0;
}
function get_all_data(){
    var url='dev_broker.php'
    var all_data=new Array();
    var tables='data=true&tables=answers,chapters,courses,questions,rationales,subjects,units';
    all_data=ajax(url,'POST',tables);
    var answers=all_data['answers'];
    var chapters=all_data['chapters'];
    var questions=all_data['questions'];
    var courses=all_data['courses'];
    var rationales=all_data['rationales'];
    var subjects=all_data['subjects'];
    var units=all_data['units'];
    populate_options('.subjects',subjects,'course_material_name');
    //populate_options('question_chapters',chapters,'material_name','chapter');
    console.log(all_data);
    
    return 0;
}
