<?PHP

include '../main/functions.php';
include '../main/config.php';
$db_name='learning_system_practice_tests';
if (isset($_POST)){
	if($_POST['data']=true){
		echo json_encode(get_all_data($db_name,$_POST['tables']));
	}
	else{
		echo json_encode('false');
	}
}
else{
echo json_encode('no post');
}
