<div class="text-center">
    <h2>✔️ <u>Resultados</u></h2>
    <p style='margin: 0 0 0.4rem; font-size:14px;'>Los nombres son <b id="nombrecompleto">""</b> del DNI <b id="dni_per"></b> y su dígito verifivador es <mark id="dig_ver"></mark>.</p>
    </div>
    <table class="table table-striped table-scroll">
    <thead>
    <tr>
    <th>DNI</th>
    <th>Nombres</th>
    <th>Apellido Paterno</th>
    <th>Apellido Materno</th>
    </tr>
    </thead>
    <tbody>
    <tr>
    <td id="dni_per"></td>
    <td id="nombre_per"></td>
    <td id="apellidop_per"></td>
    <td id="apellidom_per"></td>
    </tr>
    </tbody>
    </table>
    <table class="table table-striped table-scroll">
    <thead>
    <tr>
    <th>Dígito verificador</th>
    <th>RUC 10 *</th>
    </tr>
    </thead>
    <tbody>
    <tr>
    <td id="dig_ver"><mark></mark></td>
    <td >10<p id="dni_per"></p><p id="dig_ver"></p></td>
    </tr>
    </tbody>
    </table>
    <div id="div-copy" class="column col-md-12" style="padding-top: .7rem;">
    <div class="news-header">
    <h3>📋 Copiar datos:</h3>
    </div>
    <div class="form-group">
    <h6>Nombres y apellidos</h6>
    <input type="text" id="nombrecompleto" value="JHOSNY JHOY CALDERON SOBRADO" readonly="">
    <button onclick="copyText('nombrecompleto')" class="button_copy" id="button_nombrecompleto">📋Copiar</button>
    </div>
    <hr>
    <div class="form-group">
    <h6>Nombres</h6>
    <div>
    <input type="text" id="nombre_per" readonly="">
    <button onclick="copyText('nombre_per')" class="button_copy" id="button_nombre_per">📋Copiar</button>
    </div>
    </div>
    <div class="form-group">
    <h6>Apellido Paterno</h6>
    <input type="text" id="apellidop_per" readonly="">
    <button onclick="copyText('apellidop_per')" class="button_copy" id="button_apellidop_per">📋Copiar</button>
    </div>
    <div class="form-group">
    <h6>Apellido Materno</h6>
    <input type="text" id="apellidom_per"  readonly="">
    <button onclick="copyText('apellidom_per')" class="button_copy" id="button_apellidom_per">📋Copiar</button>
    </div>
    <hr>
    <div class="form-group">
    <h6>DNI y Dígito verificador</h6>
    <input type="text" id="dig_ver" readonly="">
    <button onclick="copyText('dig_ver')" class="button_copy" id="button_dig_ver">📋Copiar</button>
    </div>
    <div class="form-group">
    <h6>RUC 10</h6>
    <input type="text" id="ruc10"  readonly="">
    <button onclick="copyText('ruc10')" class="button_copy" id="button_ruc10">📋Copiar</button>
    </div>
    <br>
    <p>💡 Quizá te interese: <a href="https://eldni.rec.la/pe/buscar-por-nombres"><b>Encontrar DNI por los nombres de la persona ↗.</b></a></p>
    </div>
    
    <script>
        function copyText(id) {
            var copyText = document.getElementById(id);
            copyText.select();
            copyText.setSelectionRange(0, 99999);
            navigator.clipboard.writeText(copyText.value);

            document.getElementById('button_' + id).textContent = '✅Copiado';
            setTimeout(function() {
                document.getElementById('button_' + id).textContent = '📋Copiar';
            }, 2000);
        }
    </script>
    <style>
        @media (min-width: 720px) {
            #completos {
                width: 50%;
            }
        }
    </style>