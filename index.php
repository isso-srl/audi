<?php session_start(); ?>
<html>
<head>
    <title>::::ERP::::</title> 
    <meta http-equiv="Content-Type" content="text/html; charset=utf-8" >
    <link rel="stylesheet" type="text/css" href="lib/ext/resources/css/ext-all.css">

    <script type="text/javascript" src="lib/ext/ext-all-dev.js"></script>
    <script type="text/javascript" src="lib/ext/ext-lang-es.js"></script>
    <script type="text/javascript" src="lib/ux/notification/notification.js"></script>
    <script type="text/javascript" src="lib/ux/CheckColumn/CheckColumn.js"></script>
    <script type="text/javascript" src="https://maps.googleapis.com/maps/api/js?v=3&sensor=false"></script>
    <script type="text/javascript" src="lib/ux/GMapPanel.js"></script>
    <script type="text/javascript" src="lib/ux/HeaderFilters.js"></script>
	
	<!-- CSS -->
	<link rel="stylesheet" type="text/css" href="resources/css/erp.css">
	<link rel="stylesheet" type="text/css" href="lib/ux/notification/notification.css">
	<link rel="stylesheet" type="text/css" href="lib/ux/CheckColumn/CheckHeader.css">
	
    <script type="text/javascript" src="app.js"></script>
     <script language="Javascript">
        //document.oncontextmenu = function(){return false}
     </script>
</head>
    <body>
     <div id="loading-mask" style=""></div>
    <div id="loading">
        <div class="loading-indicator">
            <img src="resources/images/loading.gif" width="60" height="60" style="margin-right:8px;float:left;vertical-align:top;"/>
            ERP INFINITY
            <br /><span id="loading-msg">Cargando...</span>
        </div>
    </div>
</body>
</html>
