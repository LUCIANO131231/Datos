<?php
// Obtener el número de RUC por dDNI y el token
$numeroRUC = $_POST['ruc'];
//$numeroRUC = "10722693600";
$token = "cGVydWRldnMucHJvZHVjdGlvbi5maXRjb2RlcnMuNjVkYzA0YmUxZTRjZmUyNGY0ZjZjODJj";

// Construir la URL de la solicitud
$url = "https://api.perudevs.com/api/v1/ruc?document=" . $numeroRUC . "&key=" . $token;
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
        echo json_encode(array('error' => 'RUC no encontrado'));
    }
}
curl_close($curl);

/*$persona = json_decode($response);
var_dump($persona);*/
?>