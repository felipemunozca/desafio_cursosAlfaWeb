<template>
    <v-container>
        <h1 class="display-1 text-center my-4">Administración</h1>
        <v-row justify="center" class="mt-10 mb-4">
            <v-dialog v-model="dialog" persistent max-width="600px">
                <template v-slot:activator="{ on, attrs }">
                    <v-btn color="primary" dark v-bind="attrs" v-on="on">
                        Agregar curso
                    </v-btn>
                </template>
                <v-card>
                    <v-card-title>
                        <span class="text-h5">Nuevo curso</span>
                    </v-card-title>
                    <v-card-text>
                        <v-container>
                            <v-row>
                                <v-col cols="12">
                                    <v-text-field label="Nombre"></v-text-field>
                                    <v-text-field label="URL de la imagen"></v-text-field>
                                    <v-text-field type="number" label="Cupos del curso"></v-text-field>
                                    <v-text-field type="number" label="Inscritos en el curso"></v-text-field>
                                    <v-text-field label="Duración del curso"></v-text-field>
                                    <v-text-field type="date" label="Fecha de registro"></v-text-field>
                                    <v-text-field type="number" label="Costo del curso"></v-text-field>
                                    <v-textarea label="Descripción del curso"></v-textarea>
                                </v-col>
                                <!-- <v-col cols="12">
                                    <v-text-field label="Nombre"></v-text-field>
                                </v-col>
                                <v-col cols="12">
                                    <v-text-field label="URL de la imagen"></v-text-field>
                                </v-col>
                                <v-col cols="12">
                                    <v-text-field type="number" label="Cupos del curso"></v-text-field>
                                </v-col>
                                <v-col cols="12">
                                    <v-text-field type="number" label="Inscritos en el curso"></v-text-field>
                                </v-col>
                                <v-col cols="12">
                                    <v-text-field label="Duración del curso"></v-text-field>
                                </v-col>
                                <v-col cols="12">
                                    <v-text-field type="date" label="Fecha de registro"></v-text-field>
                                </v-col>
                                <v-col cols="12">
                                    <v-text-field type="number" label="Costo del curso"></v-text-field>
                                </v-col>
                                <v-col cols="12">
                                    <v-textarea label="Descripción del curso"></v-textarea>
                                </v-col> -->
                            </v-row>
                        </v-container>
                    </v-card-text>
                    <v-card-actions class="d-flex align-content-start" > <!--  align-start -->
                        <v-spacer></v-spacer>
                        <v-btn color="success" > <!-- @click="dialog = false" -->
                            Agregar
                        </v-btn>
                        <v-btn color="error" @click="dialog = false">
                            Cancelar
                        </v-btn>
                    </v-card-actions>
                </v-card>
            </v-dialog>
        </v-row>

        <v-row>
            <v-col>
            <!-- <v-col v-for="curso in cursos" :key="curso.id"> -->
                <table-cursos-comp :cursos="cursos"/>
            </v-col>
        </v-row>
        
        <v-divider class="display-2 my-10"></v-divider>

        <v-row>
            <v-col cols="12">
                <v-alert dense outlined color="purple">
                    <v-icon color="purple">mdi-account-multiple</v-icon> Cantidad total de alumnos permitidos:
                </v-alert>

                <v-alert dense outlined color="blue">
                    <v-icon color="blue">mdi-account-check</v-icon> Cantidad total de alumnos inscritos:
                </v-alert>

                <v-alert dense outlined color="red">
                    <v-icon color="red">mdi-account-plus</v-icon> Cantidad total de cupos restantes:
                </v-alert>

                <v-alert dense outlined color="pink">
                    <v-icon color="pink">mdi-cancel</v-icon> Cantidad de cursos terminados:
                </v-alert>

                <v-alert dense outlined color="lime darken-3">
                    <v-icon color="lime darken-3">mdi-bell-ring</v-icon> Cantidad total de cursos activos:
                </v-alert>

                <v-alert dense outlined color="orange">
                    <v-icon color="orange">mdi-bell-ring</v-icon> Cantidad total de cursos:
                </v-alert>
            </v-col>
        </v-row>
    </v-container>
</template>

<script>
import { mapState } from 'vuex';
import TableCurso from '@/components/TableCursos.vue';

export default {
    name: 'admin-view',
    // props: {},
    data: function(){
        return {
            dialog: false, // para cerrar el componente dialog.
        }
    },
    computed: {
        ...mapState(['cursos']),
    },
    // methods: {}
    // watch: {},
    components: {
        'table-cursos-comp': TableCurso,
    },
    // mixins: [],
    // filters: {},
    // -- Lifecycle Methods
    // -- End Lifecycle Methods
}
</script>

<style scoped>
    
</style>