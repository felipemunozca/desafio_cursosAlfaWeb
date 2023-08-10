<template>
    <div>
        <v-app-bar color="purple darken-3" dense dark>

            <v-app-bar-nav-icon></v-app-bar-nav-icon>

            <v-toolbar-title>Cursos AlfaWeb</v-toolbar-title>

            <v-spacer></v-spacer>

            <div class="me-4">
                <!-- <v-btn icon>
                    <v-icon>mdi-home</v-icon>
                </v-btn>

                <v-btn icon>
                    <v-icon>mdi-wrench</v-icon>
                </v-btn> -->

                <v-btn class="transparent mx-1" elevation="0">
                    <v-icon>mdi-home</v-icon>
                </v-btn>
                <v-btn color="transparent mx-1" elevation="0">
                    <v-icon>mdi-wrench</v-icon>
                </v-btn>
            </div>

        </v-app-bar>
    </div>
</template>

<script>
export default {
    name: 'navbar-comp',
    // props: {},
    data: function(){
        return {}
    },
    // computed: {},
    // methods: {}
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