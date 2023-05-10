<template>
  <nav class="navbar navbar-expand-lg navbar-dark bg-success">
    <div class="container-fluid">
      <a class="navbar-brand" href="#">Usuarios</a>
      <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>

      <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <ul class="navbar-nav mr-auto mb-2 mv-lg-0">
          <li class="nav-item">
            <router-link to="/" lass="nav-link active" aria-current="page" href="#">Mostrar</router-link>
          </li>
          <li class="nav-item">
            <router-link to="/create" class="nav-link" href="#">Crear</router-link>
          </li>
        </ul>
      </div>
    </div>
  </nav>
  <div class="container-fluid mt-3">
    <router-view/>
  </div>
</template>
