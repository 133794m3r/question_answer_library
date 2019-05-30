<?PHP
if(!isset($_SESSION)){
	session_start();
}
if(isset($_GET)){
	if($_GET['crsf'] == 'new'){
		unique_token('username');
	}
	else{
		return json_encode('');
	}
}
else if (isset($_POST)){

}
