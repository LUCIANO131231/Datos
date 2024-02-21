<?php









$ruc=$_POST["ruc"];


if(strlen($ruc)<11 || strlen($ruc)>11)
{
    $consulta=1;
}
else{
    
    $consulta=file_get_contents('https://api.apis.net.pe/v1/ruc?numero='.$ruc.'');
}








echo $consulta;




























/*

$ruc=$_POST["ruc"];


if(strlen($ruc)<11 || strlen($ruc)>11)
{
    $consulta=1;
}
else{
    
    $consulta=file_get_contents('https://api.apis.net.pe/v1/ruc?numero='.$ruc.'');
}








echo $consulta;







// Datos
$token = 'apis-token-1301.adsa-82CS1YrzRXRCe';
$ruc = $_POST["ruc"];

// Iniciar llamada a API
$curl = curl_init();

// Buscar dni
$array = curl_setopt_array($curl, array(
  CURLOPT_URL => 'https://api.apis.net.pe/v1/ruc?numero=' . $dni,
  CURLOPT_SSL_VERIFYPEER=> 0,
  CURLOPT_RETURNTRANSFER => true,
  CURLOPT_ENCODING => '',
  CURLOPT_MAXREDIRS => 2,
  CURLOPT_TIMEOUT => 0,
  CURLOPT_FOLLOWLOCATION => true,
  CURLOPT_HTTP_VERSION => CURL_HTTP_VERSION_1_1,
  CURLOPT_CUSTOMREQUEST => 'GET',
  CURLOPT_HTTPHEADER => array(
    'Referer: https://apis.net.pe/consulta-ruc-api',
    'Authorization: Bearer ' . $token
  ),
));

$response = curl_exec($curl);




if(curl_errno($curl))
  
{  
    echo 'Error del scraper: ' . curl_error($curl);   
    exit; 

} 


curl_close($curl);
// Datos listos para usar
//$persona = json_decode($response);


$verifica='';

if(strlen($dni)<8 || strlen($dni)>8)
{
    $verifica=1;
}

else{
  
        $verifica=$response;
    
   
}
echo $verifica;
*/
?>

 