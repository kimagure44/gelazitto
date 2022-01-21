<template>
  <div>
    <Navbar imgRoute="/admin">
      <button class="btn-logout" @click="logout()">Salir</button>
    </Navbar>
    <DrawZitto />
    <v-main>
      <v-progress-circular v-if="loading" indeterminate color="primary" />
      <router-view v-else></router-view>
    </v-main>
  </div>
</template>

<script>
// import img from "../../assets/gelazito.png";
// import DrawZitto from "../../components/DrawZitto.vue";
// import Navbar from "../../components/navbar.vue";

// Añadimos el alias en el fichero babel.config.js y ahora podemos usar el alias en nuestro componente
import img from "@/assets/gelazito.png";
// import DrawZitto from "@/components/DrawZitto.vue";
// import Navbar from "@/components/Navbar.vue";

export default {
  // components: { DrawZitto, Navbar },
  name: "AdminDashboardView",
  data: () => ({
    loading: false,
    // "img: img", es lo mismo que "img", si tienen el mismo nombre
    img,
  }),
  methods: {
    logout() {
      this.$store.dispatch("logout");
      this.$router.push("/");
    },
  },
};
</script>

<style scoped>
.btn-logout {
  color: white;
  font-family: "Zilla Slab";
  font-size: 1.5em;
}
/*HEADER */
header {
  z-index: 999999 !important;
}
/* MAIN */
main {
  height: 100vh;
  padding-left: 4em !important;
  padding-top: 4em !important;
}
</style>
