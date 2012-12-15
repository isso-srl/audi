<?php
/*
 * @Autor: Pablo Garcia guaman
 * @Email: garcia_guaman_pablo@hotmail.com
 */

require_once __DIR__ . '/lib/activerecord/ActiveRecord.php';
// initialize ActiveRecord
ActiveRecord\Config::initialize(function($cfg)
{
    $cfg->set_model_directory(__DIR__ . '/models');
    $cfg->set_connections(array('development' => 'pgsql://postgres:postgres@localhost/audi;'));
   //ActiveRecord\DateTime::$DEFAULT_FORMAT = 'short';
    //$cfg->set_date_format( "Y-m-d H:i:s" );
   

	// you can change the default connection with the below
    //$cfg->set_default_connection('production');
});
?>
