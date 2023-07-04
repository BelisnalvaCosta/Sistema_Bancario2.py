<?php
session_start();
include_once("conexão.php");

$nome = filter_input(INPUT_POST, 'nome', FILTER_SANITIZE_STRING);
$numero = filter_input(INPUT_POST, 'numero', FILTER_SANITIZE_STRING);
$cpf/cnpj = filter_input(INPUT_POST, 'cpf/cnpj', FILTER_SANITIZE_STRING);
$email = filter_input(INPUT_POST, 'email', FILTER_SANITIZE_EMAIL);

//echo "Nome: $nome <br>";
//echo "Numero_conta: $numero_conta <br>";
//echo "cpf/cnpj: $cpf/cnpj <br>";
//echo "E-mail: $email <br>";

$result_cliente = "INSERT INTO clientes (nome, numero, cpf/cnpj, email, created) VALUES ('nome', 'numero_conta', 'cpf/cnpj', 'email', NOW())";
$resultado_cliente = postgres_query($conn, $result_cliente);

if(postgres_isert_id($conn)) {
	$_SESSION['msg'] = "<p style='color:green;'>Cliente cadastrado com sucesso</p>";
	header("Location: index.php");
}else {
	$_SESSION['msg'] = "<p style='color:red;'>Cliente não foi cadastrado no sistema, CADASTRE-O!</p>";
}