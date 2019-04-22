/*
* HTML5 Practice Question System
* Copyright (c) 133794m3r aka Macarthur Inbody 2019-2019
* https://github.com/133794m3r/html5test
* Licensed GNU AGPLv3 or Later
* version 0.0.1
*/

function check_answer(answer){
    var correct_answer=select_by_id('correct_answer_test').value;
    if(answer === correct_answer){
        alert('correct');
    }
    else{
        alert('wrong');
    }
    return 0;
}
