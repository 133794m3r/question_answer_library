<?PHP
function unique_token($vars){
	$r=session_id().rand().microtime();
	$token=hash('sha256',$r.$vars);
	return $token;
}

?>
