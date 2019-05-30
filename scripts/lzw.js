/*
* Misc Javascript Functions
* Copyright (c) Macarthur Inbody 2019-2019
* https://github.com/133794m3r/hashpass
* AGPLv3
* @version 0.1
*/

//lzw functions are super early days not yet fully implmented.
function lzw_compress(uncompressed_data,type){
    "use strict";
    var i=0,j=0,dictionary_size=94,dictionary=[],character='',word_character='',word='',result=[];
    var uncompressed_length=uncompressed_data.length;
    var out_str_bin_pre='';
    var out_str_bin_pre='';
    if(!type||type==0){
        dictionary_size=94;
        out_str_bin_pre='0';
        for(i=0; i<=dictionary_size; ++i){
            dictionary[String.fromCharCode(i+32)]=i;
        }
    }
    else{
        dictionary_size=255;
        for(i=0; i<=dictionary_size; ++i){
            dictionary[String.fromCharCode(i)]=i;
        }
    }
    for(i=0; i<uncompressed_length;++i){
        character=uncompressed_data.charAt(i);
        word_character=word+character;
     if(dictionary[word_character]){
            word=word_character;
        }
        else{            
            result[j]=dictionary[word];
            dictionary[word_character]=++dictionary_size;
            word=character;
            ++j;
        }
    }
    if(word!==''){
            result[j++]=dictionary[word];
    }
    var bits=int_to_bits(dictionary_size-1);
    var result_string='';
    var bin=int_bin(bits-7);
    var bin_len=bin.length;
    var bits_len=4-bin_len;
    var bin_pad='0000000000000000';
    var tmp='';
    var dict_len=bits;
    tmp=int_bin(bits).length;
    out_str_bin_pre=out_str_bin_pre+bin_pad.substr(0,(8-tmp))+int_bin(bits);
    bin=type+substr(bin_pad,0,bits_len)+bin;
    for(i=0;i<j;++i){
        bin_len=int_to_bits(result[i]);
        bits_len=dict_len-bin_len;
        tmp=int_bin(result[i]);
        tmp=substr(bin_pad,0,bits_len)+tmp;
        bin+=tmp;
    }
    bin_len=Math.ceil(bin.length/8);
    var out_str=String.fromCharCode(bin_int(out_str_bin_pre))+'';
    for(i=0;i<=bin_len;++i){
        out_str+=String.fromCharCode(bin_int(substr(bin,i*8,8)));
    }
    console.log(out_str.length);
    return out_str;
}

function lzw_decompress(compressed_data){
    var i=0;
    var j=0;
    var dictionary=new Array();
    var character='';
    var word_character='';
    var word='';
    var result='';
    var compressed_length=compressed_data.length-1;
    var dictionary_size=256;
    var bin_str_len=0;
    var bin_str='';
    var tmp_str='';
    var tmp;
    var bin_pad='0000000000000000000';
    var compressed_arr=new Array();
    var bits=8;
    tmp=int_bin(compressed_data.charCodeAt(0));
    //var type=substr(bin_str,0,1);
    type=parseInt(tmp.substr(0,1));
    bits=parseInt(tmp.substr(1));
    if(type==1){
        dictionary_size=256;
    }
    else{
        dictionary_size=94;
    }
    compressed_data=compressed_data.substr(1);
    bin_str_len=Math.ceil(compressed_length/bits);
    for(i=0;i<compressed_length;i++){
        bin_str+=int_bin(compressed_data.charCodeAt(i));
    }
    console.log(bin_str_len);
    console.log(bits);

    for(i=0;i<bin_str_len;++i){
        compressed_arr[i]=bin_int(bin_str.substr(i*bits,bits));
        console.log(bin_str.substr(i*bits,bits));
    }
    compressed_length=i;
    console.log(JSON.stringify(compressed_arr));
    for(i=0; i<dictionary_size; ++i){
        dictionary[String.fromCharCode(i)]=i;
    }

    word=String.fromCharCode(compressed_arr[0]);
    result=word;
    for (i = 1; i < compressed_length; i += 1) {
        k = compressed_arr[i];
        if (dictionary[k]) {
            entry = dictionary[k];
        } else {
        if (k === dictionary_size) {
           entry = w + w.charAt(0);
        } else {
           return null;
        }
    }
 
    result += entry;
 
    // Add w+entry[0] to the dictionary.
    dictionary[dictSize++] = w + entry.charAt(0);
 
    w = entry;
    }
    return result;
}
