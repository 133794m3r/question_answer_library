function encode_question(input_data){
    var data_array={};
    data_array['question']=input_data.q.value;
    data_array['correct_answer']=input_data.correct_choice.value;
    data_array['answers']=[input_data.a_0.value,input_data.a_1.value,input_data.a_2.value,input_data.a_3.value];
    var encoded_data=msgpack.encode(data_array);

    return 0;
}