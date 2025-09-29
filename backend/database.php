<?php
// database.php

// 1. Cargar la configuración con las credenciales de MySQL
require_once __DIR__ . '/config.php';

// Variable global para la conexión
$pdo = null;

try {
    // 2. Crear una nueva conexión PDO
    $pdo = new PDO(
        "mysql:host=" . DB_HOST . ";dbname=" . DB_NAME . ";charset=utf8mb4",
        DB_USER,
        DB_PASS
    );

    // 3. Configurar PDO para que nos informe de errores
    $pdo->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);

} catch (PDOException $e) {
    // 4. Si la conexión falla, detener todo y mostrar un error claro
    header('Content-Type: application/json');
    http_response_code(500);
    // No mostramos el error detallado en producción por seguridad
    echo json_encode(['error' => 'Error de conexión a la base de datos.']);
    exit();
}
?>