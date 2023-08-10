<template>
    <v-container class="error-container">
        <v-row justify="center" align="center" class="error-message">
            <div class="text-center">
                <h1 class="display-2 font-weight-bold my-5">
                    Pagina no encontrada
                </h1>
                <h4 class="display-1 my-5">
                    La página que buscas no existe. Favor de volver a Home.
                </h4>
                <v-btn @click="redireccionar" class="mt-3" color="primary" elevation="5">
                    Volver a Home
                </v-btn>
            </div>
        </v-row>
    </v-container>
</template>

<script>
export default {
    name: 'not-found-view',
    // props: {},
    data: function(){
        return {}
    },
    // computed: {},
    methods: {
        redireccionar() {
            this.$router.push('/');
        },
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