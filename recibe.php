<?php
// recibe.php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $apellido = htmlspecialchars($_POST['apellido']);
    $nombre = htmlspecialchars($_POST['nombre']);
    $email = htmlspecialchars($_POST['email']);
    $sistema = htmlspecialchars($_POST['sistema']);
    $experiencia = isset($_POST['experiencia']) ? 'Sí' : 'No';
    $preferencia = htmlspecialchars($_POST['preferencia']);
    $comentario = htmlspecialchars($_POST['comentario']);

    echo "<h2>Datos recibidos</h2>";
    echo "<p><strong>Nombre:</strong> $nombre $apellido</p>";
    echo "<p><strong>Email:</strong> $email</p>";
    echo "<p><strong>Sistema Operativo Favorito:</strong> $sistema</p>";
    echo "<p><strong>Experiencia en Programación Web:</strong> $experiencia</p>";
    echo "<p><strong>Preferencia:</strong> $preferencia</p>";
    echo "<p><strong>Comentario:</strong> $comentario</p>";
} else {
    echo "<p>No se recibieron datos.</p>";
}
?>