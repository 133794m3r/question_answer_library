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

function filter_items_list() {
    var input='';
    var i=0;
    var all_items_length=0;
    var txt='';
    var score=0;
    input = document.getElementById('question_query').value.toUpperCase();
    //filter = input.value.toUpperCase();
    all_items= document.querySelectorAll('#questions_data span');
    all_items_length=all_items.length;
  for (i = 0; i < all_items_length; i++) {
    txt = all_items[i].innerText.toUpperCase();
    score=txt.score(input);
    if(score > 0){
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
}