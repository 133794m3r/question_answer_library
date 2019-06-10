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
function get_all_data(){
    var url='/devbroker.php?data=true&tables=';
    var all_data=new Array();
    var tables='answers,chapters,courses,questions,rationales,subjects,units';
    url=url+tables;
    all_data=ajax(url,'GET',null);
}
