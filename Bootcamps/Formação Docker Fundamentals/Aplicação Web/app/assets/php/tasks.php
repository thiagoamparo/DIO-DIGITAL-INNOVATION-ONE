<?php

// Adiciona tarefas novas ao banco de dados.
function addTask($conn) {

    // Verifica se os parâmetros necessários foram definidos.
    if (isset($_POST['taskID']) && isset($_POST['taskName']) && isset($_POST['taskControl'])) {

        // Query para inserir registros na tabela 'List'.
        $sql = "INSERT INTO List (ID, Name, Control) VALUES (?, ?, ?)";

        // Prepara a query para inserir os registros na tabela 'List'.
        $stmt = $conn->prepare($sql);        

        // Verifica se a query foi preparada com sucesso.
        if ($stmt) {

            // Query preparada com sucesso.

            // Vincula os parâmetros da declaração preparada aos valores fornecidos na preparação da query.         
            $stmt->bind_param("iss", $_POST['taskID'], $_POST['taskName'], $_POST['taskControl']);

            // Verifica se a query não foi executada com sucesso.
            if (!$stmt->execute()) {
                
                // Query não foi executada com sucesso.

                // Retorna JSON de error.
                echo json_encode(array(
                    "success" => false,
                    "message" => "Falha ao adicionar registro no banco de dados.",
                    "data" => $conn->error
                ));

                // Encerra a execução e exibe a mensagem de erro.
                die("Erro ao executar a declaração: " . $conn->error);

            // Verifica se a query foi executada com sucesso.
            } else {

                // Query foi executada com sucesso.

                // Retorna JSON de confirmação.
                echo json_encode(array(
                    "success" => true,
                    "message" => "Registro adicionado com sucesso no banco de dados.",
                    "data" => json_decode(getTask($conn, $_POST['taskID']))
                ));
                
            }

        // Verifica se a query não foi preparada com sucesso.
        } else {

            // Query não foi preparada com sucesso.

            // Encerra a execução e exibe a mensagem de erro.
            die("Erro ao preparar a declaração: " . $conn->error);
        }
    }
}

// Atualiza tarefas do banco de dados.
function updateTask($conn) {

    // Verifica se os parâmetros necessários foram definidos.
    if (isset($_POST['taskID']) && isset($_POST['taskControl'])) {

        // Armazena o registro antes da alteração.
        $data = json_decode(getTask($conn, $_POST['taskID']));

        // Query para atualizar registros na tabela 'List'.
        $sql = "UPDATE List SET Control = ? WHERE ID = ?";       

        // Prepara a query para atualizar os registros na tabela 'List'.
        $stmt = $conn->prepare($sql);

        // Verifica se a query foi preparada com sucesso.
        if ($stmt) {

            // Query preparada com sucesso.

            // Vincula os parâmetros da declaração preparada aos valores fornecidos na preparação da query.         
            $stmt->bind_param("si", $_POST['taskControl'], $_POST['taskID']);

            // Verifica se a query não foi executada com sucesso.
            if (!$stmt->execute()) {
                
                // Query não foi executada com sucesso.

                // Retorna JSON de error.
                echo json_encode(array(
                    "success" => false,
                    "message" => "Falha ao atualizar registro no banco de dados.",
                    "data" => $conn->error
                ));

                // Encerra a execução e exibe a mensagem de erro.
                die("Erro ao executar a declaração: " . $conn->error);

            // Verifica se a query foi executada com sucesso.
            } else {

                // Query foi executada com sucesso.

                // Retorna JSON de confirmação.
                echo json_encode(array(
                    "success" => true,
                    "message" => "Registro atualizado com sucesso no banco de dados.",
                    "data" => $data
                ));

            }

        // Verifica se a query não foi preparada com sucesso.
        } else {

            // Query não foi preparada com sucesso.

            // Encerra a execução e exibe a mensagem de erro.
            die("Erro ao preparar a declaração: " . $conn->error);
        }
    }
}

// Remove tarefas do banco de dados.
function removeTask($conn) {

    // Verifica se os parâmetros necessários foram definidos.
    if (isset($_POST['taskID'])) {

        // Armazena o registro antes da alteração.
        $data = json_decode(getTask($conn, $_POST['taskID']));

        // Query para remover registros na tabela 'List'.
        $sql = "DELETE FROM List WHERE ID = ?";

        // Prepara a query para remover os registros na tabela 'List'.
        $stmt = $conn->prepare($sql);

        // Verifica se a query foi preparada com sucesso.
        if ($stmt) {

            // Query preparada com sucesso.

            // Vincula os parâmetros da declaração preparada aos valores fornecidos na preparação da query.         
            $stmt->bind_param("i", $_POST['taskID']);

            // Verifica se a query não foi executada com sucesso.
            if (!$stmt->execute()) {
                
                // Query não foi executada com sucesso.
                                
                // Retorna JSON de error.
                echo json_encode(array(
                    "success" => false,
                    "message" => "Falha ao remover registro do banco de dados.",
                    "data" => $conn->error
                ));

                // Encerra a execução e exibe a mensagem de erro.
                die("Erro ao executar a declaração: " . $conn->error);

            // Verifica se a query foi executada com sucesso.
            } else {

                // Query foi executada com sucesso.
                
                // Retorna JSON de confirmação.
                echo json_encode(array(
                    "success" => true,
                    "message" => "Registro removido com sucesso do banco de dados.",
                    "data" => $data
                ));
            }

        // Verifica se a query não foi preparada com sucesso.
        } else {

            // Query não foi preparada com sucesso.

            // Encerra a execução e exibe a mensagem de erro.
            die("Erro ao preparar a declaração: " . $conn->error);
        }
    }
}

// Retorna uma tarefa especifica do banco de dados.
function getTask($conn, $id) {

    // Query para selecionar registros especifico na tabela 'List' com base no ID fornecido.
    $sql = "SELECT * FROM List WHERE ID = " . $id;

    // Prepara a query para selecionar todos registros na tabela 'List'.
    $stmt = $conn->prepare($sql);

    // Verifica se a query foi preparada com sucesso.
    if ($stmt) {

        // Query preparada com sucesso.

        // Verifica se a query foi executada com sucesso.
        if ($stmt->execute()) {

            // Armazena o resultado da execução da query.
            $result = $stmt->get_result();

            // Verifica se há registro na tabela 'List'.
            if ($result->num_rows > 0) {

                // Armazena o registro encontrado.
                $register = $result->fetch_assoc();

                // Retorna o registro encontrado.
                return json_encode($register);
            
            // Verifica se não há registro na tabela 'List'.
            } else {

                // Retorna um Array vazio.
                return null;
            }

        // Verifica se a query não foi executada com sucesso.
        } else {
            
            // Query não foi executada com sucesso.

            // Encerra a execução e exibe a mensagem de erro.
            die("Erro ao executar a declaração: " . $conn->error);
        }

    // Verifica se a query não foi preparada com sucesso.
    } else {

        // Query não foi preparada com sucesso.

        // Encerra a execução e exibe a mensagem de erro.
        die("Erro ao preparar a declaração: " . $conn->error);
    }
}

// Retorna todas as tarefas do banco de dados.
function loadTasks($conn) {

    // Query para selecionar todos os registros na tabela 'List'.
    $sql = "SELECT * FROM List";

    // Prepara a query para selecionar todos registros na tabela 'List'.
    $stmt = $conn->prepare($sql);

    
    // Verifica se a query foi preparada com sucesso.
    if ($stmt) {

        // Query preparada com sucesso.

        // Verifica se a query foi executada com sucesso.
        if ($stmt->execute()) {

            // Armazena o resultado da execução da query.
            $result = $stmt->get_result();

            // Verifica se há registro na tabela 'List'.
            if ($result->num_rows > 0) {

                // Define um Array para armazenar os registros encontrados.
                $registers = array();

                // Intera sobre cada registro do banco de dados.
                while ($row = $result->fetch_assoc()) {

                    // Armazena os registros no Array de registros.
                    $registers[] = $row;
                }

                // Retorna os registros encontrados no formato JSON.
                echo json_encode($registers);
            
            // Verifica se não há registro na tabela 'List'.
            } else {

                // Retorna um Array vazio no formato JSON.
                echo json_encode(array());
            }

        // Verifica se a query não foi executada com sucesso.
        } else {
            
            // Query não foi executada com sucesso.

            // Encerra a execução e exibe a mensagem de erro.
            die("Erro ao executar a declaração: " . $conn->error);
        }

    // Verifica se a query não foi preparada com sucesso.
    } else {

        // Query não foi preparada com sucesso.

        // Encerra a execução e exibe a mensagem de erro.
        die("Erro ao preparar a declaração: " . $conn->error);
    }
}

?>
