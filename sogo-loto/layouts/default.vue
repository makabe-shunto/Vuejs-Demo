<template>
  <v-app dark>
    <v-app-bar
      fixed
      app
    >
      <v-card-title>
        <h1 class="display-1">SOGO-LOTO</h1>
      </v-card-title>
    </v-app-bar>
    <v-main>
      <v-container>
        <Nuxt />
      </v-container>
    </v-main>
    <v-footer
      app
    >
      <span>&copy; {{ new Date().getFullYear() }}</span>
    </v-footer>
  </v-app>
</template>
