<?php

// 1. Incluir el archivo de conexión a la base de datos MySQL
require_once __DIR__ . '/../database.php'; // Ahora nos da la variable $pdo

// 2. Establecer las cabeceras de la respuesta
header("Access-Control-Allow-Origin: *");
header("Content-Type: application/json; charset=UTF-8");

// 3. Obtener el idioma de la URL
$lang = isset($_GET['lang']) ? $_GET['lang'] : 'es';

try {
    // 4. Preparar la consulta SQL
    // Esta consulta une las dos tablas para obtener todos los datos en una sola petición.
    $sql = "
        SELECT 
            pb.name, 
            pb.contactEmail, 
            pb.contactGitHub, 
            pb.contactLinkedIn,
            pt.subtitle, 
            pt.aboutText
        FROM 
            profile_base pb
        JOIN 
            profile_translations pt ON pb.id = pt.profile_id
        WHERE 
            pt.language = ? AND pb.id = 1
    ";

    // 5. Ejecutar la consulta de forma segura
    $stmt = $pdo->prepare($sql);
    $stmt->execute([$lang]);

    // 6. Obtener el resultado
    $profile = $stmt->fetch(PDO::FETCH_ASSOC);

    // 7. Comprobar si se encontró el perfil y enviar la respuesta
    if ($profile) {
        // Como la consulta ya nos da los campos correctos, solo la codificamos.
        echo json_encode($profile);
    } else {
        http_response_code(404);
        echo json_encode(['message' => 'Perfil no encontrado para el idioma especificado.']);
    }

} catch (Exception $e) {
    http_response_code(500);
    echo json_encode(['message' => 'Error al consultar el perfil: ' . $e->getMessage()]);
}

?>