<html>
 <head>
  <title>My Web App PHP 1.0</title>
 </head>
 <body>
    <h1>My Web App PHP 1.0</h1>
 <?php 

 echo gethostname();
 echo "<br>";
 echo $_SERVER["REMOTE_ADDR"];
 echo "<br>";
 echo date('Y-m-d H:i:s');
 
 ?>
 </body>
</html>