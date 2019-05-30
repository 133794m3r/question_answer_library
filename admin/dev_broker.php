<?PHP
if (basename($_SERVER['PHP_SELF']) == basename(__FILE__)) {
    if (ob_get_contents()) ob_clean(); // ob_get_contents() even works without active output buffering
    header('Location: /');
	session_write_close();
    fastcgi_finish_request();
}
include '../main/functions.php';

if(!isset($_SESSION)){
	session_start();
}
function crsf_tokens($username){
	 return unique_token($username);
}

if(isset($_GET)){
	if($_GET['crsf'] == 'new'){
		if(isset($_SESSION['username'])){
			$username=$_SESSION['username'];
		}
		else{
			$username='initial_crsft_user';
		}
		$_SESSION['crsf']=crsf_tokens($username);
		echo $_SESSION['crsf'];
	}
	else if($_GET['data']=true){
		echo get_all_data($db_name,$_GET['tables_list']);
	}
	else{
		echo json_encode('');
	}
}
else if (isset($_POST)){

}
