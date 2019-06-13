<?php
if (basename($_SERVER['PHP_SELF']) == basename(__FILE__)) {
    if (ob_get_contents()) ob_clean(); // ob_get_contents() even works without active output buffering
    header('Location: /');
	session_write_close();
    fastcgi_finish_request();
}
include '../main/functions.php';
include '../main/config.php';

?>
