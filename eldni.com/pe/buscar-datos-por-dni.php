<!DOCTYPE html>
<html lang="es">
<head>
<meta charset="utf-8">
<title>Buscar datos de personas por DNI - DNI Perú</title>
<meta content="Busca todos los datos como nombres, apellidos, dígito de verificación de DNI y RUC 10 de personas del Perú." name="description">
<meta http-equiv="X-UA-Compatible" content="IE=edge">

<meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1">



<link rel="icon" type="image/x-icon" href="../favicon.ico">
<link rel="stylesheet" type="text/css" href="../2020/amp-spectre/spectre.min4290.css?v=25">
<link rel="stylesheet" type="text/css" href="../2020/css/add-css4290.css?v=25">



<style type="text/css">
        /*BUTTON CLEAR INPUT*/
        .input-clear {
            position: relative;
        }
        .input-clear i {
            background: #FFF;
            cursor: pointer;
            position: absolute;
            top: 2px;
            right: 2px;
            display: block;
            padding: 8px;
            border-radius: 50%;
            line-height: 0;
        }
        /* AD */
        .ad {
            line-height: 0;
            text-align: center;
        }
        .div_ad {
            display: inline-block;

        }
        #ad_1 {
            background: #666;
        }
        #title-center-h2::before {
            content: "☝️ "
        }
        @media(min-width: 840px) {
            #title-center-h2::before {
                content: "👈 "
            }
        }
    </style>

</head>
<body>
<header class="bg-primary">
<div class="navbar container">
<div class="navbar-section">
<a href="../index.html" class="navbar-brand mr-2" title="Inicio de buscador">

<h1><img alt="Buscar DNI" src="../2020/img/el-dni-logo.svg"></h1>
</a>

</div>
<nav class="nav-menu col-6 col-md-12">
<ul class="tab tab-block ">
<li class="tab-item active">
<a href="buscar-datos-por-dni.html">Buscar Datos por DNI</a>
</li>
<li class="tab-item">
<a href="buscar-por-nombres.html">Buscar DNI por Nombres</a>
</li>

</ul>
</nav>
<div class="btn-noticias">
<a href="../index.html" class="btn" target="_blank"><span>Consultas</span> <img alt="Flecha Derecha" src="../2020/img/forward.svg"></a>
</div>
</div>
</header>

<main class="container container-padding clearfix">
<div id="div-left">
<section class="columns" id="dni-nombres">
<div id="column-left" class="column column-np">
<div class="column column-np col-12">
<div class="card text-center">
<div class="card-header"><img src="../2020/img/dni-to-name.svg" width="160"></div>
<div class="card-body">
<h3>Buscar datos por DNI</h3>
<div class="small">
<small>Ingresa el DNI para saber los datos</small>
</div>
</div>
<form autocomplete="on" action="../../consulta/dni.php" id="buscar-datos-por-dni" method="post" enctype="multipart/form-data" onsubmit="disableButton('#btn-buscar-datos-por-dni')">
<!--input type="hidden" name="_token" value="XAID9gKn79lO3zbrccjX7K9UnIbJVrghwssDgzAV"-->
<div class="form-group input-clear" id="input-min">
<input class="form-input" type="text" name="dni" id="dni" placeholder="Número de DNI" oninput="writingInput(this)">
<i title="Borrar" style="display:none;" onclick="clearInput(this)">
<svg fill="#888888" height="16px" width="16px" version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 460.775 460.775" xml:space="preserve"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M285.08,230.397L456.218,59.27c6.076-6.077,6.076-15.911,0-21.986L423.511,4.565c-2.913-2.911-6.866-4.55-10.992-4.55 c-4.127,0-8.08,1.639-10.993,4.55l-171.138,171.14L59.25,4.565c-2.913-2.911-6.866-4.55-10.993-4.55 c-4.126,0-8.08,1.639-10.992,4.55L4.558,37.284c-6.077,6.075-6.077,15.909,0,21.986l171.138,171.128L4.575,401.505 c-6.074,6.077-6.074,15.911,0,21.986l32.709,32.719c2.911,2.911,6.865,4.55,10.992,4.55c4.127,0,8.08-1.639,10.994-4.55 l171.117-171.12l171.118,171.12c2.913,2.911,6.866,4.55,10.993,4.55c4.128,0,8.081-1.639,10.992-4.55l32.709-32.719 c6.074-6.075,6.074-15.909,0-21.986L285.08,230.397z"></path> </g></svg>
</i>
</div>
<div class="form-group">
<button type="submit" class="btn btn-success" id="btn-buscar-datos-por-dni" form="buscar-datos-por-dni">Buscar datos</button>
</div>
</form>
</div>
</div>

</div>
<div id="column-center" class="column column-np">
<div class="column col-md-12">
<?php
        if(!isset($_POST["dni"]) || $_POST["dni"] === ''){
            //echo "<h3 class='text-error'>❌ No se encontraron datos para el DNI que ingresaste.</h3>";
            echo "<h2 class='text-center' id='title-center-h2'>Encuentra los datos completos de una persona por su DNI.</h2>
            <p class='text-center'>En la siguiente consulta obtendrás los datos de un peruano como:</p>
            <ul>
            <li>Nombres y apellidos completos.</li>
            <li>Dígito de verificación del DNI</li>
            <li>RUC 10 con o sin negocio de la persona.</li>
            </ul>";
        }else{
            include("resultado.php");
        }
?>
    
</div>
</div>
</section>
</div>
<div id="div-right">
<div id="news_sidebar">
<div class="news-header">
<h3>🔍 Consultas</h3> <sup class="label label-success">Nuevo</sup>
</div>
<ul>
<li>
<a href="buscar-datos-por-dni.html">🔍 Buscar Datos por DNI</a>
</li>
<li>
<a href="buscar-por-dni.html">📜 Buscar nombres y apellidos por DNI</a>
</li>
<li>
<a href="obtener-digito-verificador-del-dni.html">🔢 Obtener dígito de verificación del DNI</a>
</li>
<li>
<a href="consultar-ruc-10-por-dni.html">📢 Obtener RUC 10 por DNI</a>
</li>
<li>
<a href="buscar-nombres-por-ruc-10.html">📇 Buscar nombres y apellidos por RUC 10</a>
</li>
</ul>
 </div>
</div>
</main>
<footer class="bg-primary">
<div class="container">
<div class="columns">
<div class="column col-6 col-mx-auto text-center">
Eldni.com © 2018-2023
</div>
</div>
</div>
</footer>

<script>
        function disableButton(id) {
            //INFO disable button send
            document.querySelector(id).textContent = "🔍 Buscando...";
            document.querySelector(id).disabled = true;
        }
        function writingInput(_this) {
            if(_this.value == "") {
                _this.parentElement.getElementsByTagName('i')[0].style.display = "none";
                console.log(`❌ Vacio`);
            } else {
                _this.parentElement.getElementsByTagName('i')[0].style.display = "block";
                //console.log(`Input value: "${_this.value}"`);
            }
        }
        function clearInput(_this) {
            _this.parentElement.getElementsByTagName('input')[0].value = "";
            _this.parentElement.getElementsByTagName('input')[0].focus()
            _this.style.display = "none";
        }
        
        $("#btn-buscar-datos-por-dni").click(function(){
            var dni=$("#dni").val();
            $.ajax({           
                type:"POST",
                url: "dni.php",
                data: 'dni='+dni,
                dataType: 'json',
                success: function(data) {
                    if(data==1)
                    {
                        alert('El DNI tiene que tener 8 digitos');
                    }
                    else{
                        console.log(data);
                        $("#nombre_completo").html(data.nombre_completo);
                        $("#nombre_per").html(data.nombres);
                        $("#apellidop_per").html(data.apellido_paterno);
                        $("#apellidom_per").html(data.apellido_materno);
                        $("#dni_per").html(data.id);
                        $("#fecha_nacimiento").html(data.fecha_nacimiento);
                        $("#dig_ver").html(data.codigo_verificacion);
                        $("#genero").html(data.genero);
                    }
                }
            });
        })
                
    </script>

</body>
</html>
