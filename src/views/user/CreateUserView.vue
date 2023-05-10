<template>
    <div class="row mt-3">
        <div class="col-md-6 offset-md-3">
            <div class="card">
                <div class="card-header bg-dark text-white text-center">Crear Usuario</div>
                <div class="card-body">
                    <form>
                        <div class="input-group mb-3">
                            <span class="input-group-text"><i class="fa-solid fa-user"></i></span>
                            <input type="text" id="name" class="form-control" maxlength="50" placeholder="Nombre" required>
                        </div>
                        <div class="input-group mb-3">
                            <span class="input-group-text"><i class="fa-solid fa-user"></i></span>
                            <input type="text" id="last_name" class="form-control" maxlength="50" placeholder="Apellidos" required>
                        </div>
                        <div class="input-group mb-3">
                            <span class="input-group-text"><i class="fa-solid fa-user"></i></span>
                            <input type="text" id="age" class="form-control" maxlength="50" placeholder="Edad" required>
                        </div>
                        <div class="input-group mb-3">
                            <span class="input-group-text"><i class="fa-solid fa-user"></i></span>
                            <input type="text" id="sex" class="form-control" maxlength="50" placeholder="Sexo(M/F)" required>
                        </div>
                        <div class="input-group mb-3">
                            <span class="input-group-text"><i class="fa-solid fa-user"></i></span>
                            <input type="email" id="email" class="form-control" maxlength="50" placeholder="Correo" required>
                        </div>
                        <div class="input-group mb-3">
                            <span class="input-group-text"><i class="fa-solid fa-user"></i></span>
                            <input type="password" id="password" class="form-control" maxlength="50" placeholder="Contraseña" required>
                        </div>
                        <div class="input-group mb-3">
                            <span class="input-group-text"><i class="fa-solid fa-user"></i></span>
                            <input type="password" id="password_confirmation" class="form-control" maxlength="50" placeholder="Confirmación de Contraseña" required>
                        </div>
                        <div class="input-group mb-6">
                            <button class="btn btn-warning"><i class="fa-solid fa-arrow-left"></i> Cancelar</button>
                            <button class="btn btn-success"><i class="fa-solid fa-floppy-disk"></i> Guardar</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
import { mostrar_alerta,enviarSolicitud } from '../../funciones'

export default defineComponent({
    data() {
       return{
            name:'',last_name:'',age:'',sex:'',email:'',password:'',password_confirmation:'',url:'http://127.0.0.1:8000/api/users'
       } 
    }
    ,methods: {
        save(){

        }
    },
})
</script>
