<template>
  <v-app>
    <navbar-comp></navbar-comp>
    <v-main>
      <router-view/>
    </v-main>
  </v-app>
</template>

<script>
import Navbar from '@/components/Navbar.vue';

export default {
  name: 'App',

  data: () => ({
    //
  }),
  components: {
    'navbar-comp': Navbar,
  },
};
</script>