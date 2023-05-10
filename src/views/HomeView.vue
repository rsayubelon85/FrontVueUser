<template>
  <div class="row">
    <div class="col-lg-8 offset-lg-2">
      <div class="table-responsive">
        <table class="table table-bordered table-hover">
          <thead><tr><th>#</th><th>Nombre</th><th>Apellidos</th><th>Edad</th><th>Sexo</th><th>Correo</th><th>Acciones</th></tr></thead>
          <tbody class="table-group-divider" id="usuarios">
            <tr v-for="user, i in users" :key="user.id">
              <td>{{ (i+1) }}</td>
              <td>{{ user.name }}</td>
              <td>{{ user.last_name }}</td>
              <td>{{ user.age }}</td>
              <td>{{ user.sex }}</td>
              <td>{{ user.email }}</td>
              <td>
                <router-link :to="{path:'edituser/'+user.id}" class="btn btn-warning">
                  <i class="fa-solid fa-edit"></i>
                </router-link>
                <button class="btn btn-danger" v-on:click="eliminar(user.id,user.name)">
                  <i class="fa-solid fa-trash"></i>
                </button>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </div>
</template>
<script>
  import axios from 'axios';
  import { confirmar, mostrar_alerta } from '../funciones';
  export default {
    data() {
      return { users:null}
    },
    mounted() {
      this.getUsers();
    },
    methods: {
      getUsers(){
        axios.get('http://127.0.0.1:8000/api/users').then( 
          response => (
            this.users = response.data
          )
        );
      },
      eliminar(id,name){
        confirmar(id,name);
      }
    },
  }

  export function enviarSolicitud(metodo,parametros,url,mensaje){
    axios({method:metodo,url:url,data:parametros}).then(function(respuesta){
      var status = respuesta.data[0]['status'];
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
</script>
