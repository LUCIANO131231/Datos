    <!DOCTYPE html>
<html lang="es">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    <script src="js/jquery.min.js"></script>
</head>
<body>

<a href="ruc.php">Consulta RUC</a>
<br>
<br>
<br>
<br>

<input type="text" id="dni" autocomplete="off" name="dni">

    <button id="prueba">Consultar</button>

  
<br>
<br>


  <div >Nombres: <label id="nombre"> </label></div>

   <div >Apellido P.: <label id="apellidop">  </label ></div>

   <div> Apellido M.: <label  id="apellidom"> </label > </div>





<script>

$("#prueba").click(function(){

  var dni=$("#dni").val();


$.ajax({           
    type:"POST",
    url: "consulta-dni-ajax.php",
    data: 'dni='+dni,
    dataType: 'json',
    success: function(data) {
  
  
        if(data==1)
        {
            alert('El DNI tiene que tener 8 digitos');
        }
       
    
        else{
            console.log(data);
            $("#nombre").html(data.nombres);
            $("#apellidop").html(data.apellidoPaterno);
            $("#apellidom").html(data.apellidoMaterno);
          

         
        }
 

    }
});

})

</script>
</body>
</html>
   