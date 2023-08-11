<template>
    <v-data-table :headers="headers" :items="cursos" sort-by="" class="elevation-1">
        <template v-slot:top>
            <v-toolbar flat>

            <v-spacer></v-spacer>

                <v-dialog v-model="dialogDelete" max-width="500px">
                    <v-card>
                        <v-card-text class="text-h5 black--text pt-4">
                            ¿Esta seguro de querer borrar el producto?
                        </v-card-text>
                        <v-card-actions>
                            <v-spacer></v-spacer>
                            <v-btn color="blue darken-1" text @click="cerrarModalEliminar">
                                Cancelar
                            </v-btn>
                            <v-btn color="blue darken-1" text @click="eliminarCurso">
                                Aceptar
                            </v-btn>
                            <v-spacer></v-spacer>
                        </v-card-actions>
                    </v-card>
                </v-dialog>

            </v-toolbar>
        </template>

        <template v-slot:[`item.actions`]="{ item }">
            <v-icon color="yellow darken-3">mdi-pencil</v-icon>
            <v-icon @click="abrirModalEliminar(item.id)" color="red darken-2" >mdi-delete</v-icon>
        </template>

    </v-data-table>
</template>

<script>
export default {
    name: 'data-table-cursos-comp',
    props: {
        cursos: {
            type: Array,
            required: true,
        }
    },
    data: function(){
        return {
            dialogDelete: false,
            headers: [
                {
                    text: 'Curso',
                    align: 'start',
                    sortable: false,
                    value: 'nombre',
                },
                { text: 'Cupos', value: 'cupos' },
                { text: 'Inscritos', value: 'inscritos' },
                { text: 'Duración', value: 'duracion', class: 'green--text' },
                { text: 'Costo', value: 'costo'.toLocaleString("es-CL") },
                { text: 'Terminado', value: 'completado' },
                { text: 'Fecha', value: 'fecha_registro' },
                { text: 'Acciones', value: 'actions', sortable: false },
            ],
            deleteId: null,
        }
    },
    // computed: {},
    methods: {
        abrirModalEliminar(item) {
            this.dialogDelete = true;
            //console.log(item)
            console.log(item);
            this.deleteId = item;
            console.log(this.deleteId);
            
        },
        cerrarModalEliminar() {
            this.dialogDelete = false;
        },

        eliminarCurso(id){
            //this.$emit('eliminarCurso', id);
            //this.cerrarModalEliminar();
            console.log(id)
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