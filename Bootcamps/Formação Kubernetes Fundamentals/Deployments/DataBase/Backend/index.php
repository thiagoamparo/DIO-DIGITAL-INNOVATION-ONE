<?

header("Access-Control-Allow-Origin: *");
include 'connection.php';

$id =  rand(1, 999);
$name = $_POST["Name"];
$message = $_POST["Message"];

$query = "INSERT INTO messages(id, name, message) VALUES ('$id', '$name', '$message')";

if ($link->query($query) === TRUE) {

  echo "Registro adicionado com sucesso no banco de dados.";

} else {

  echo "Falha ao adicionar registro no banco de dados: " . $link->error;

}

?>