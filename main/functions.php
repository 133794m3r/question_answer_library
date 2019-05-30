<?PHP
if (basename($_SERVER['PHP_SELF']) == basename(__FILE__)) {
    if (ob_get_contents()) ob_clean(); // ob_get_contents() even works without active output buffering
    header('Location: /');
	session_write_close();
    fastcgi_finish_request();
}
/**
 * Unique Token Generator
 *
 * @param {string} $vars The string of data to be appeneded to make it more unique.
 *
 * @return {string}    It is a b64 encoded string representing the token.
 */
function unique_token($vars){
	$r=session_id().rand().microtime();
	$token=base64_encode(hash('sha256',$r.$vars,raw));
	return $token;
}
/**
 * Get All data from the database.
 * This function will get all of the data from a table so that it can nthen be returned
 * to another process mainly used in the development of new questions/editing them.
 *
 * @param {string} $db_name       The database to be selected.
 * @param {string} $tables_to_get It is the tables to be retrieved sent a string.
 *
 * @return {Array}	The data returned is an array representing all of the rows.
 */
function get_all_data($db_name,$tables_to_get){
	$tables_split=explode(',',$tables_to_get);
	$total_tables=count($tables_split);
	$conn=mysqli_connect($db_host,$db_user,$db_pass)
		or  fastcgi_finish_request();
	mysqli_select_db($conn,$db_name);
	mysqli_options($conn,MYSQLI_OPT_INT_AND_FLOAT_NATIVE,TRUE);
	$tables_results=array();
	for($i=0;$i<$total_tables;++$i){
		$query=sprintf('SELECT * FROM %s','');
		$res=mysqli_query($conn,$query);
		$rows=mysqli_fetch_all($res,MYSQLI_ASSOC);
		$tables[$i]=$rows;
		mysqli_free_result($res);
	}

}

?>
