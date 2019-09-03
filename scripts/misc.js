/*
* Awesome Password Generator aka HashPass
* Copyright (c) Macarthur Inbody 2011-2019
* https://github.com/133794m3r/hashpass
* AGPLv3
*/
"use strict"

function permute(arr) {
  var N = arr.length;
  var directions = [
  ];
  var indices = [
  ];
  directions.push(0);
  indices.push(0);
  for (var i = 1; i < N; i += 1) {
    directions.push( - 1);
    indices.push(i);
  }
  function swap(i, j) {
    var tmp = indices[i];
    indices[i] = indices[j];
    indices[j] = tmp;
    tmp = directions[i];
    directions[i] = directions[j];
    directions[j] = tmp;
  }
  function result() {
    var res = [
    ];
    for (var i = 0; i < N; i += 1) {
      res.push(arr[indices[i]]);
    }
    return res;
  }
  var makeresult = typeof arr !== 'string' ? result : function () {
    return result().join('');
  };

    var i,
    max_index,
    move_to;
    for (i = 0; i < N; i += 1) {
      if (directions[i] !== 0) {
        max_index = i;
        break;
      }
    }
    if (max_index === undefined) {
      return undefined;
    }
    for (i = max_index + 1; i < N; i += 1) {
      if (directions[i] !== 0 && indices[i] > indices[max_index]) {
        max_index = i;
      }
    }
    move_to = max_index + directions[max_index];
    swap(max_index, move_to);
    if (move_to === 0 || move_to === N - 1 || indices[move_to + directions[move_to]] > indices[move_to]) {
      directions[move_to] = 0;
    }
    for (i = 0; i < N; i += 1) {
      if (indices[i] > indices[move_to]) {
        if (i < move_to) {
          directions[i] = 1;
        } else {
          directions[i] = - 1;
        }
      }
    }
    return make_result();

}
/**
 * This function will select the data by it's id.
 *
 * @param   {string} function it's the element id to get
 *
 * @returns {DOMObject} The DOMNode representing the element requested.
 */
function select_by_id(element_id){
var element=document.getElementById(element_id);
return element;
}
function select_all(identifier){
    return document.querySelectorAll(identifier);
}
/**
 * Ajax wrapper function.
 *
 * @param   {string}    location        the location url to send the request to.
 * @param   {string}    method_type     the method type. E.g GET, POST, PUT.
 * @param   {string}    data            the data to be sent. It is sent as a string JSON/Msgpack/b64 encoded.
 *
 * @return  {string}    response        the data returned is a string representation of the data structures.
 */

function ajax(location,method_type,data){
    var ajax=new XMLHttpRequest();
    var crsf_token='';
    /*
    ajax.open('GET','dev_broker?crsf=new',false);
    ajax.setRequestHeader('X-Requested-With','XMLHttpRequest');
    ajax.send();
    crsf_token=ajax.response;
    if(method_type ===('GET' || 'PUT' || 'POST')){
        return 1;
    }
    */
    ajax = new XMLHttpRequest();
    ajax.open(method_type,location,false);
    ajax.setRequestHeader('Content-type', 'application/x-www-form-urlencoded');

    ajax.setRequestHeader('X-Requested-With','XMLHttpRequest');
    ajax.setRequestHeader('X-Crsf','crsf_token');
    ajax.send(data);
    var response=JSON.parse(ajax.response);
    return response;

}
function ceil(num){
    return Math.ceil(num);
}
function substr(str,start,end){
    return str.substring(start,end);
}

function bin_int(bits){
    return parseInt(bits,2);
}
function int_bin(ints){
    return ints.toString(2);
}
function int_to_bits(ints){
    var bin=ints.toString(2);
    var bits=bin.length;
    return bits;
}

function work_func_calc(base_string,iterations,collision_bits){
    "use strict";
    //Alphabet used.
    alphabet="!#$%&()*+,-./0123456789:;<=>?@ABCDEFGHIJKLMNOPQRSTUVWXYZ[\]^_`abcdefghijklmnopqrstuvwxyz{|}~";
    base_string=sha256_fast(base_string);
    extra_string=alphabet.substr(Math.floor((Math.random()*91)),1);
    result_string='';
    i=0;
    
    for(i=0; i<iterations;i++){
        result_string=bcrypt_one_iter(base_string+extra_string,base_string.slice(0,16));
        extra_string+=alphabet.substr(Math.floor((Math.random()*91)),1);
        result_string=sha256_fast(result_string);
    }
    
    
    
    return extra_string;
}
function work_func_fast(password,salt,iterations,output_len){
"use strict";
    password = sha256_fast(password);
    salt = sha256_fast(salt);
    password=sha256(bcrypt_one_iter(password,salt.slice(0,16)));
    var password_len = 32;
    var salt_len = 32;
    var i = 0; 
    var inner_len = 100;
    var inner = new Uint8Array(inner_len);
    var outer_key =  new Uint8Array(64);
    var output_string = new Uint8Array(output_len);
    var tmp_arr = new Uint8Array(96);
    var tmp = new Uint8Array(32);
    var j = 0;
    var i_4 = inner_len-4;
    inner.fill(0x36);
    for(i=0; i< 32; i++){
        inner[i] = inner[i] ^ password[i];
    }
    inner.set(salt,64);
    inner.fill(0,i_4);
    outer_key.fill(0x5c);
    for(i=0; i < 32; i++){
        outer_key[i] = outer_key[i] ^ password[i];
    }
    while(output_len >= 32){
        for(i=inner_len-1; i >=i_4; i--){
            inner[i]++;

    }
    }
    
}
function init_toggle_hidden(){
    var selectors=document.querySelectorAll('show');
    var selectors_len=selectors.length;
    var i=0;
    console.log('b');
    for(i=0;i<selectors_len;++i){
        selector[i].onclick=toggle_hidden;
    }
}
function toggle_hidden(){
    var elem=this.parentNode.children;
    console.log('a');
     elem=Array.from(elem);
     var class_name=elem[1].className;
     if(elem!==2){
        return 1;
     }

     if(class_name==='hidden'){
      elem[1].className='show';
     }

     else{
       elem[1].className='hidden';
     }
    return 0;
}
function $(selector){
    return document.querySelectorAll(selector);
}
async function sleep (ms){
    return new Promise(resolve=>window.setTimeOut(resolve,ms));
}
