<?PHP
if (basename($_SERVER['PHP_SELF']) == basename(__FILE__)) {
    if (ob_get_contents()) ob_clean(); // ob_get_contents() even works without active output buffering
    header('Location: /');
	session_write_close();
    fastcgi_finish_request();
}
$db_user='133794m3r';
$db_pass='snoppy';
$db_host='localhost';
?>
