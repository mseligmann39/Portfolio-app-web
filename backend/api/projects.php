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
$lang = isset($_GET['lang']) ? $_GET['lang'] : 'es';

try {
    // 5. Preparar la consulta SQL para unir las tablas de proyectos
    $sql = "
        SELECT 
            pb.id,
            pb.emoji,
            pb.technologies,
            pb.repository_url,
            pb.demo_url,
            pb.image_url,
            pt.title,
            pt.description,
            pt.status,
            pt.category
        FROM 
            projects_base pb
        JOIN 
            projects_translations pt ON pb.id = pt.project_id
        WHERE 
            pt.language = ?
    ";

    // 6. Ejecutar la consulta de forma segura
    $stmt = $pdo->prepare($sql);
    $stmt->execute([$lang]);

    // 7. Obtener todos los resultados
    $projects = $stmt->fetchAll(PDO::FETCH_ASSOC);
    
    // 7. Post-procesamiento: decodificar el JSON de 'technologies'
    foreach ($projects as &$project) {
        if (isset($project['technologies'])) {
            $project['technologies'] = json_decode($project['technologies']);
        }
    }

    // 9. Enviar la respuesta final en formato JSON
    echo json_encode($projects);

} catch (Exception $e) {
    http_response_code(500);
    echo json_encode(['message' => 'Error al consultar los proyectos: ' . $e->getMessage()]);
}

?>