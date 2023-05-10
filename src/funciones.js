import Swal  from "sweetalert2";
import axios from "axios";

export function mostrar_alerta(mensaje,icono,foco=''){
    if (foco != '') {
        document.getElementById(foco).focus();
    }
    Swal.fire({
        title:mensaje,
        icon:icono,
        customClass:{confirmButton: 'btn btn-primary',popup:'animated zoomIn'},
        buttonsStyling:false
    });
}

export function confirmar(id,name){
    var url = 'http://127.0.0.1:8000/api/users/'+id;
    const swalWithBootstrapButtons = Swal.mixin({
        customClass:{confirmButton:'btn btn-success me-3',cancelButton:'btn btn-danger'}
        ,buttonsStyling:false
    });
    swalWithBootstrapButtons.fire({
        title:'Seguro que desea eliminar al usuario '+name,
        text:'Se perderá la información del usuario',
        icon:'question',
        showCancelButton: true,
        confirmButtonText:'<i class="fa-solid fa-check"></i> Si, eliminar',
        cancelButtonText:'<i class="fa-solid fa-ban"></i> Cancelar'}).then((result) => {
            if(result.isConfirmed){
                enviarSolicitud('DELETE',{id:id},url,'Producto eliminado'); 
            }else{
                mostrar_alerta('Operación cancelada.','info')
            }
        });
    
}

export function enviarSolicitud(metodo,parametros,url,mensaje){
    axios({method:metodo,url:url,data:parametros}).then(function(respuesta){
      
      var status = respuesta.data['status'];

      if (status === 'success') {
        mostrar_alerta(mensaje,status);
        window.setTimeout(function() {
          window.location.href = '/';
        },1000);
      }
      else{
        var listado = '';
        var errores = respuesta.data[1]['errors'];
        Object.keys(errores).forEach(
          key => listado += errores[key][0]+'.'
        )
        mostrar_alerta(listado,'error');
      }
    }).catch(function(error){
      mostrar_alerta('Error en la solicitud','error');
    });
  }