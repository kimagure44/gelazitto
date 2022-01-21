<template>
  <v-container>
    <section class="carrito-container">
      <!-- Importante dejar la mínima lógica en la vista -->
      <EmptyCarrito v-if="!hasProducts" text="¡No armaste tu pedido aún!" />
      <div v-else>
        <!-- Importante dejar la mínima lógica en la vista -->
        <CarritoTableView :data="getCarrito" />
        <div class="carrito-action-container">
          <!-- Sería interesante usar i18n, ya que nos permite multiples idiomas y tener un sistema global de los literales-->
          <ButtonZitto @actionToExecute="emptyCarrito">Vaciar</ButtonZitto>
          <LinkZitto text="Comprar" :route="`/buy`" type="button" />
        </div>
      </div>
    </section>
  </v-container>
</template>

<script>
// import CarritoTableView from "../../components/Carrito/CarritoTableView.vue";
// import EmptyCarrito from "../../components/NotFound.vue";
// import ButtonZitto from "../../components/ButtonZitto.vue";
// import LinkZitto from "../../components/LinkZitto.vue";
import { mapGetters } from "vuex";
export default {
  name: "CarritoComponent",
  /*
	components: {
    EmptyCarrito,
    ButtonZitto,
    LinkZitto,
    CarritoTableView,
  },
	*/
  computed: {
    // Mejor trabajar con mapGetters y dejar que el store haga el mapeo.
    ...mapGetters({
      getCarrito: "getCarrito",
      numberOfProducts: "numberOfProducts",
    }),
    hasProducts() {
      return this.numberOfProducts > 0;
    },
  },
  methods: {
    emptyCarrito() {
      this.$store.dispatch("emptyCarrito");
    },
  },
};
</script>

<style scoped>
.carrito-container {
  display: flex;
  justify-content: center;
  margin: 2em;
}

.carrito-action-container {
  display: flex;
  justify-content: center;
  gap: 0.5em;
  margin-top: 1em;
}
</style>
