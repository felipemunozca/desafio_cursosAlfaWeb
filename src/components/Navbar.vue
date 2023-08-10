<template>
    <div>
        <v-app-bar color="purple darken-3" dense dark>

            <v-app-bar-nav-icon></v-app-bar-nav-icon>

            <v-toolbar-title>Cursos AlfaWeb</v-toolbar-title>

            <v-spacer></v-spacer>

            <div v-for="ruta in rutas" :key="ruta.nombre" @click="redireccionar(ruta.nombre)">
                <v-btn class="transparent mx-1" elevation="0">
                    <v-icon>{{ ruta.icono }}</v-icon>
                </v-btn>

                <!-- <v-btn class="transparent mx-1" elevation="0">
                    <v-icon>mdi-home</v-icon>
                </v-btn>
                <v-btn color="transparent mx-1" elevation="0">
                    <v-icon>mdi-wrench</v-icon>
                </v-btn> -->
            </div>

        </v-app-bar>
    </div>
</template>

<script>
export default {
    name: 'navbar-comp',
    // props: {},
    data: function(){
        return {
            rutas: [
                {
                    icono: 'mdi-home',
                    nombre: 'home',
                },
                {
                    icono: 'mdi-wrench',
                    nombre: 'admin',
                },
                // {
                //     icono: 'mdi-information',
                //     nombre: 'about',
                // },
            ],
        }
    },
    computed: {
        rutaActual() {
            return this.$route.name;
        },
    },
    methods: {
        redireccionar(nombreRuta) {
            if (this.rutaActual == nombreRuta) {
                return; //retorna vació, no hace nada.
            } else {
                this.$router.push({name: nombreRuta});
            }
        }
    }
    // watch: {},
    // components: {},
    // mixins: [],
    // filters: {},
    // -- Lifecycle Methods
    // -- End Lifecycle Methods
}
</script>

<style scoped>

</style>