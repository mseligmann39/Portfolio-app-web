<?php

// 1. Incluir el archivo de conexión a la base de datos MySQL
require_once __DIR__ . '/../database.php';

// 2. Manejar la petición pre-vuelo (preflight) de CORS
if ($_SERVER['REQUEST_METHOD'] === 'OPTIONS') {
    header("Access-Control-Allow-Origin: *");
    header("Access-Control-Allow-Methods: GET, OPTIONS");
    header("Access-Control-Allow-Headers: Content-Type, Authorization");
    http_response_code(204);
    exit;
}

// 3. Establecer las cabeceras de la respuesta para la petición real
header("Access-Control-Allow-Origin: *");
header("Content-Type: application/json; charset=UTF-8");

// 4. Obtener el idioma de la URL
$lang = isset($_GET['lang']) ? $_GET['lang'] . '' : 'es';

try {
    // 5. Preparar la consulta SQL para obtener todos los textos del idioma correcto
    $sql = "SELECT * FROM content_translations WHERE language = ?";

    // 5. Ejecutar la consulta de forma segura
    $stmt = $pdo->prepare($sql);
    $stmt->execute([$lang]);

    // 7. Obtener el resultado
    $content = $stmt->fetch(PDO::FETCH_ASSOC);

    // 8. Comprobar si se encontró el contenido y enviar la respuesta
    if ($content) {
        // No necesitamos el 'id' ni 'language' en la respuesta final
        unset($content['id']);
        unset($content['language']);

        echo json_encode($content);
    } else {
        http_response_code(404);
        echo json_encode(['message' => 'Contenido no encontrado para el idioma especificado.']);
    }

} catch (Exception $e) {
    http_response_code(500);
    echo json_encode(['message' => 'Error al consultar el contenido: ' . $e->getMessage()]);
}

?>