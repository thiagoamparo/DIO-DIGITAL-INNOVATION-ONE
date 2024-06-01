<?php

include 'tasks.php';

// Define os dados para a conexão com o banco de dados.
$servername = "database";
$username = "admin";
$password = "admin";
$dbname = "Tasks";

// Realiza a conexão com o banco de dados.
$conn = new mysqli($servername, $username, $password, $dbname);

// Verifica se houve erro na conexão.
if ($conn->connect_error) {

    // Ocorrencia de erros detectada.

    // Encerra a execução e exibe a mensagem de erro.
    die("Falha ao conectar-se ao banco de dados: " . $conn->connect_error);

// Verifica se não houve erro na conexão.
} else {

    // Sem ocorrencia de erros detectada.

    // Query para verificar se a tabela 'List' existe.
    $table_list = "SHOW TABLES LIKE 'List'";

    // Prepara a query para verificar a existência da tabela 'List'.
    $stmt = $conn->prepare($table_list);

    // Verifica se a query foi preparada com sucesso.
    if ($stmt) {

        // Query preparada com sucesso.

        // Executa a query preparada.
        $stmt->execute();
        
        // Armazena o resultado da execução da query.
        $result = $stmt->get_result();
        
        // Verifica se a tabela 'List' não existe
        if ($result->num_rows == 0) {

            // Tabela 'List' não existe.

            // Query para criar a tabela 'List'.
            $table_list = "CREATE TABLE List (ID INT PRIMARY KEY, Name VARCHAR(255), Control TINYINT(1) DEFAULT 0)";

            // Prepara a query para criar a tabela 'List'.
            $stmt = $conn->prepare($table_list);

            // Verifica se a query foi preparada com sucesso.
            if ($stmt) {

                // Query preparada com sucesso.

                // Verifica se a query não foi executada com sucesso.
                if (!$stmt->execute()) {
                    
                    // Query não foi executada com sucesso.

                    // Encerra a execução e exibe a mensagem de erro.
                    die("Erro ao executar a declaração: " . $conn->error);
                }
            
            // Verifica se a query não foi preparada com sucesso.
            } else {

                // Query não foi preparada com sucesso.

                // Encerra a execução e exibe a mensagem de erro.
                die("Falha ao executar comando: " . $conn->error);
            }
        } else {

            // Analisa e valida a requsição AJAX.
            if ($_SERVER["REQUEST_METHOD"] == "POST" && isset($_POST['action'])) {

                // Com base na requisição verifica a ação a ser executada.
                switch ($_POST['action']) {
            
                    // Caso a ação da requisição seja 'add'.
                    case 'add':
                        
                        // Chama a função addTask().
                        addTask($conn);
                        break;

                    // Caso a ação da requisição seja 'update'.
                    case 'update':

                        // Chama a função updateTask().
                        updateTask($conn);
                        break;

                    // Caso a ação da requisição seja 'remove'.
                    case 'remove':

                        // Chama a função removeTask().
                        removeTask($conn);
                        break;

                    // Caso a ação da requisição seja 'get'.
                    case 'get':

                        // Chama a função loadTasks().
                        loadTasks($conn);
                        break;

                    // Caso a ação da requisição seja invalida.
                    default:

                        // Encerra a execução e exibe a mensagem de erro.
                        die("Erro ao preparar a declaração: " . $conn->error);            
                }
            }

        }

    // Verifica se a query não foi preparada com sucesso.
    } else {

        // Query não foi preparada com sucesso.

        // Encerra a execução e exibe a mensagem de erro.
        die("Falha ao executar comando: " . $conn->error);
    }
}

// Encerra a conexão com o banco de dados.
$conn->close();

?>
