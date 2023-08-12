<template>
    <v-row>
        <v-col cols="12">
            <v-data-table :headers="headers" :items="cursos" hide-default-footer class="elevation-1 pt-0" style="border: 1px solid lightgray;">

                <template v-slot:top>
                        <v-dialog v-model="dialogEdit" max-width="500px">
                            <v-card>
                                <v-card-title>
                                    <span class="text-h5">Editar Curso</span>
                                </v-card-title>

                                <v-card-text>
                                    <v-container>
                                        <v-row>
                                            <v-col cols="12">
                                                <v-text-field v-model="editedItem.nombre" label="Nombre"></v-text-field>
                                                <v-text-field v-model="editedItem.img" label="URL de la imagen"></v-text-field>
                                                <v-text-field v-model="editedItem.cupos" label="Cupos del curso" type="number"></v-text-field>
                                                <v-text-field v-model="editedItem.inscritos" label="Inscritos del curso" type="number"></v-text-field>
                                                <v-text-field v-model="editedItem.duracion" label="Duración del curso"></v-text-field>
                                                <v-text-field v-model="editedItem.fecha_registro" label="Fecha de registro" type="date"></v-text-field>
                                                <v-text-field v-model="editedItem.costo" label="Costo del curso" type="number"></v-text-field>
                                                <v-text-field v-model="editedItem.completado" label="Terminado"></v-text-field>
                                                <v-text-field v-model="editedItem.descripcion" label="Descripción del curso"></v-text-field>
                                            </v-col>
                                        </v-row>
                                    </v-container>
                                </v-card-text>
                                <v-card-actions class="pb-5">
                                    <v-spacer></v-spacer>
                                    <v-btn @click="editarCurso(editedId)" color="success" class="mr-4">
                                        Editar
                                    </v-btn>
                                    <v-btn @click="cerrarModalEditar" color="error"> 
                                        Cerrar
                                    </v-btn>
                                </v-card-actions>
                            </v-card>
                        </v-dialog>

                        <v-dialog v-model="dialogDelete" max-width="500px">
                            <v-card>
                                <v-card-text class="text-h5 black--text pt-4">
                                    ¿Esta seguro que desea eliminar el curso?
                                </v-card-text>
                                <v-card-actions>
                                    <v-spacer></v-spacer>
                                    <v-btn color="error" class="me-5" @click="cerrarModalEliminar">
                                        Cancelar
                                    </v-btn>
                                    <v-btn color="success" @click="eliminarCurso(deleteId)">
                                        Aceptar
                                    </v-btn>
                                    <v-spacer></v-spacer>
                                </v-card-actions>
                            </v-card>
                        </v-dialog>
                </template>

                <template v-slot:[`item.costo`]="{ item }">
                    <v-chip class="green accent-3 white--text">$ {{ item.costo.toLocaleString('es-CL') }}</v-chip>
                </template>

                <template v-slot:[`item.completado`]="{ item }">
                    <!-- <v-chip :color="getColor(item.completado)" dark>
                        {{ item.completado }}
                    </v-chip> -->
                    <v-chip v-if="item.completado == true" class="light-blue accent-1 white--text">Sí</v-chip>
                    <v-chip v-else class="grey lighten-1 white--text">No</v-chip>
                </template>

                <template v-slot:[`item.fecha_registro`]="{ item }">
                    <v-chip class="green accent-3 white--text">{{ item.fecha_registro }}</v-chip>
                </template>

                <template v-slot:[`item.actions`]="{ item }">
                    <div class="d-flex">
                        <v-btn elevation="0" icon class="mx-1">
                            <v-icon @click="abrirModalEditar(item)" color="yellow darken-3">mdi-pencil</v-icon>
                        </v-btn>
                        <v-btn elevation="0" icon>
                            <v-icon @click="abrirModalEliminar(item.id)" color="red darken-2" >mdi-delete</v-icon>
                        </v-btn>
                    </div>
                    
                </template>

            </v-data-table>
        </v-col>
    </v-row>
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
            headers: [
                {
                    text: 'Curso',
                    align: 'start',
                    sortable: false,
                    value: 'nombre',
                },
                { text: 'Cupos', value: 'cupos', sortable: false, },
                { text: 'Inscritos', value: 'inscritos', sortable: false, },
                { text: 'Duración', value: 'duracion', sortable: false, },
                { text: 'Costo', value: 'costo', sortable: false, },
                { text: 'Terminado', value: 'completado', sortable: false, },
                { text: 'Fecha', value: 'fecha_registro', sortable: false, },
                { text: 'Acciones', value: 'actions', sortable: false },
            ],

            dialogDelete: false,
            deleteId: null,

            dialogEdit: false,
            editedId: null,
            editedIndex: -1,
            editedItem: {
                nombre: '',
                img: '',
                cupos: 0,
                inscritos: 0,
                duracion: '',
                fecha: '',
                costo: 0,
                completado: '',
                descripcion: '',
            },
        }
    },
    // computed: {},
    methods: {
        abrirModalEliminar(item) {
            this.dialogDelete = true;
            this.deleteId = item;
        },
        cerrarModalEliminar() {
            this.dialogDelete = false;
        },

        abrirModalEditar(item) {
            this.editedIndex = this.cursos.indexOf(item);
            this.editedItem = Object.assign({}, item);
            this.dialogEdit = true;
            this.editedId = item.id;
        },
        cerrarModalEditar() {
            this.dialogEdit = false;
        },

        eliminarCurso(id){
            this.$emit('eliminarCurso', id);
            console.log(id);
            this.cerrarModalEliminar();
        },
        editarCurso(id) {
            if (parseInt(this.editedItem.inscritos) > parseInt(this.editedItem.cupos)) {
                return alert('La cantidad de inscritos no puede superior a la cantidad de cupos del curso.')
            }

            // let editCurso = {
            //     id: 
            //     nombre: this.nombre,
            //     img: this.img,
            //     cupos: 0,
            //     inscritos: 0,
            //     duracion: '',
            //     fecha: '',
            //     costo: 0,
            //     completado: '',
            //     descripcion: this.des,
            // };

            console.log(id);
            // this.$emit('editarCurso', id, this.editedItem);
            this.cerrarModalEditar();
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