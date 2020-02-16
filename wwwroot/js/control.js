$(function(){
	$('#nuevo-producto').on('click',function(){
		$('#formulario')[0].reset();
		$('#pro').val('Registro');
		$('#edi').hide();
		$('#reg').show();
		$('#registra-producto').modal({
			show:true,
			backdrop:'static'
		});
	});
});
function agregaRegistroProducto(){
	var url = 'agrega_producto.php';
	$.ajax({
		type:'POST',
		url:url,
		data:$('#formulario').serialize(),
		success: function(registro){
			if ($('#pro').val() == 'Registro'){
				$('#formulario')[0].reset();
				$('#mensaje').addClass('bien').html('Registro completado con exito').show(200).delay(2500).hide(200);
				$('#agrega-registros').html(registro);
				return false;
			}else{
				$('#mensaje').addClass('bien').html('Edicion completada con exito').show(200).delay(2500).hide(200);
				$('#agrega-registros').html(registro);
				return false;
			}
		}
	});
	return false;
}

function editarCuenta(id){
	$('#formulario')[0].reset();
	var url = 'editar-cuenta.php';
	$.ajax({
		type:'POST',
		url:url,
		data:'id='+id,
		success: function(valores){
			var datos = eval(valores);
			$('#reg').hide();
			$('#edi').show();
			$('#pro').val('Edicion');
			$('#id-prod').val(id);
			$('#codigo_producto').val(datos[0]);
			$('#descripcion').val(datos[1]);
			$('#precio_costo').val(datos[2]); 
			$('#categoria').val(datos[3]);
			$('#tipo').val(datos[4]);
			$('#registra-producto').modal({
				show:true,
				backdrop:'static'
			});
			return false;
		}
	});
	return false;
}
