<template>
    <v-row>
        <v-col cols="12">
            <v-alert v-for="(dato, index) in datosAlertas" :key="index" dense outlined :color="dato.color">
                <v-icon :color="dato.color">{{dato.icono}}</v-icon>
                {{dato.mensaje}}
            </v-alert>

            <!-- <v-alert dense outlined color="purple">
                <v-icon color="purple">mdi-account-multiple</v-icon> 
                Cantidad total de alumnos permitidos: <strong>{{ totalAlumnosPermitidos }}</strong> alumnos.
            </v-alert>

            <v-alert dense outlined color="blue">
                <v-icon color="blue">mdi-account-check</v-icon> 
                Cantidad total de alumnos inscritos: <strong>{{ totalAlumnosInscritos }}</strong> alumnos.
            </v-alert>

            <v-alert dense outlined color="red">
                <v-icon color="red">mdi-account-plus</v-icon> 
                Cantidad total de cupos restantes: <strong>{{ totalCuposRestantes }}</strong> alumnos.
            </v-alert>

            <v-alert dense outlined color="pink">
                <v-icon color="pink">mdi-cancel</v-icon> 
                Cantidad de cursos terminados: <strong>{{ totalCursosTerminados }}</strong> cursos.
            </v-alert>

            <v-alert dense outlined color="lime darken-3">
                <v-icon color="lime darken-3">mdi-bell-ring</v-icon> 
                Cantidad total de cursos activos: <strong>{{ totalCursosActivos }}</strong> cursos.
            </v-alert>

            <v-alert dense outlined color="orange">
                <v-icon color="orange">mdi-bell-ring</v-icon> 
                Cantidad total de cursos: <>{{ totalCursos }}</strong> cursos.
            </v-alert> -->
        </v-col>
    </v-row>
</template>

<script>
import {mapGetters} from 'vuex';

export default {
    name: 'alertas-admin-comp',
    // props: {},
    data: function(){
        return {}
    },
    computed: {
        ...mapGetters(['totalCursos', 'totalAlumnosPermitidos', 'totalAlumnosInscritos', 'totalCursosTerminados', 'totalCursosActivos']),

        totalCuposRestantes() {
            return this.totalAlumnosPermitidos - this.totalAlumnosInscritos;
        },
        datosAlertas() {
            return [
                {
                    color: 'purple',
                    icono: 'mdi-account-multiple',
                    mensaje: `Cantidad total de alumnos permitidos: ${this.totalAlumnosPermitidos} alumnos.`,
                },
                {
                    color: 'blue',
                    icono: 'mdi-account-check',
                    mensaje: `Cantidad total de alumnos inscritos: ${this.totalAlumnosInscritos} alumnos.`,
                },
                {
                    color: 'red',
                    icono: 'mdi-account-plus',
                    mensaje: `Cantidad total de cupos restantes: ${this.totalCuposRestantes} alumnos.`,
                },
                {
                    color: 'pink',
                    icono: 'mdi-cancel',
                    mensaje: `Cantidad de cursos terminados: ${this.totalCursosTerminados} cursos.`,
                },
                {
                    color: 'lime darken-3',
                    icono: 'mdi-bell-ring',
                    mensaje: `Cantidad total de cursos activos: ${this.totalCursosActivos} cursos.`,
                },
                {
                    color: 'orange',
                    icono: 'mdi-bell-ring',
                    mensaje: `Cantidad total de cursos: ${this.totalCursos} cursos.`,
                },
            ]}
    },
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