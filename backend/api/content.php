<?php

// 1. Incluir el archivo de conexión a la base de datos MySQL
require_once __DIR__ . '/../database.php'; // Nos da la variable $pdo

// 2. Establecer las cabeceras de la respuesta
header("Access-Control-Allow-Origin: *");
header("Content-Type: application/json; charset=UTF-8");

// 3. Obtener el idioma de la URL
$lang = isset($_GET['lang']) ? $_GET['lang'] . '' : 'es';

try {
    // 4. Preparar la consulta SQL para obtener todos los textos del idioma correcto
    $sql = "SELECT * FROM content_translations WHERE language = ?";

    // 5. Ejecutar la consulta de forma segura
    $stmt = $pdo->prepare($sql);
    $stmt->execute([$lang]);

    // 6. Obtener el resultado
    $content = $stmt->fetch(PDO::FETCH_ASSOC);

    // 7. Comprobar si se encontró el contenido y enviar la respuesta
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