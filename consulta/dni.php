<?php
// Obtener el número de DNI y el token
$numeroDNI = $_POST['dni'];
$token = "cGVydWRldnMucHJvZHVjdGlvbi5maXRjb2RlcnMuNjVkODMwMGMxZTRjZmUyNGY0ZjZjODI3"; // Reemplazar con tu clave de API válida

// Construir la URL de la solicitud
$url = "https://api.perudevs.com/api/v1/dni/complete?document=" . $numeroDNI . "&key=" . $token;

// Inicializar cURL
$curl = curl_init();

curl_setopt($curl, CURLOPT_URL, $url);
curl_setopt($curl, CURLOPT_RETURNTRANSFER, true);

// Realizar la solicitud cURL
$response = curl_exec($curl);

// Verificar si hubo algún error en la solicitud
if($response === false) {
    echo json_encode(array('error' => 'Error al realizar la solicitud: ' . curl_error($curl)));
} else {
    $data = json_decode($response, true);
    if ($data['estado'] === true) {
        echo json_encode($data['resultado']);
    } else {
        echo json_encode(array('error' => 'DNI no encontrado'));
    }
}
curl_close($curl);

/*$persona = json_decode($response);
var_dump($persona);*/
?>
