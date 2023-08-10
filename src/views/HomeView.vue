<template>
  <!-- <v-container>
    <h1 class="display-1 text-center my-4">Lista de Cursos</h1>
    <v-row>
      <v-col cols="12" md="4" lg="4">

        <card-curso-comp></card-curso-comp>
        <card-curso-comp></card-curso-comp>

      </v-col>
    </v-row>
  </v-container> -->

  <div>
    <v-container>
      <v-row>
        <v-col cols="12" md="4" lg="4" v-for="curso in cursos" :key="curso.id">
          <card-curso-comp :curso="curso"></card-curso-comp>
          <!-- <card-curso-comp></card-curso-comp> -->
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script>
import CardCurso from '@/components/CardCurso.vue';
import { mapState } from 'vuex';

export default {
  name: 'Home-view',
  // props: {},
  data: function(){
    return {}
  },
  computed: {
    ...mapState(['cursos']),
  },
  // methods: {}
  // watch: {},
  components: {
    'card-curso-comp': CardCurso,
  },
  // mixins: [],
  // filters: {},
  // -- Lifecycle Methods
  // -- End Lifecycle Methods
}
</script>

<style scoped>
  
</style>