<template>
    <v-row>
        <v-col>
            <v-simple-table>
                <template v-slot:default>
                    <thead>
                        <tr>
                            <th class="text-left">
                                Curso
                            </th>
                            <th class="text-left">
                                Cupos
                            </th>
                            <th class="text-left">
                                Inscritos
                            </th>
                            <th class="text-left">
                                Duración
                            </th>
                            <th class="text-left">
                                Costo
                            </th>
                            <th class="text-left">
                                Terminado
                            </th>
                            <th class="text-left">
                                Fecha
                            </th>
                            <th class="text-left">
                                Acciones
                            </th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr v-for="curso in cursos" :key="curso.id">
                            <td>{{ curso.nombre }}</td>
                            <td>{{ curso.cupos }}</td>
                            <td>{{ curso.inscritos }}</td>
                            <td>{{ curso.duracion }}</td>
                            <td>
                                <!-- <p class="d-flex justify-center rounded green accent-3 white--text mt-4">$ {{ curso.costo.toLocaleString('es-CL') }}</p> -->
                                <v-chip class="green accent-3 white--text">$ {{ curso.costo.toLocaleString('es-CL') }}</v-chip>
                            </td>
                            <td v-if="curso.completado == true">
                                <!-- <p class="d-flex justify-center rounded light-blue accent-1 white--text mt-4">Sí</p> -->
                                <v-chip class="light-blue accent-1 white--text">Sí</v-chip>
                            </td>
                            <td v-else>
                                <!-- <p class="d-flex justify-center rounded grey lighten-1 white--text mt-4">No</p> -->
                                <v-chip class="grey lighten-1 white--text">No</v-chip>
                            </td>
                            <td>
                                <!-- <p class="d-flex justify-center rounded green accent-3 white--text mt-4">$ {{ curso.fecha_registro }}</p> -->
                                <v-chip class="green accent-3 white--text">{{ curso.fecha_registro }}</v-chip>
                            </td>


                            <!--  
                                Queda pendiente averiguar como solucionar el problema que se produce al levantar un dialog para 
                                    preguntar si se quiere eliminar el curso, y al levantar dos veces el dialog, se produce un error 
                                    en cadena que consume toda la memoria del navegador.
                                Error: 
                                Uncaught      VDialog.ts:239
                            -->

                            <!-- <v-dialog v-model="dialogDelete" max-width="500px">
                                <v-card>
                                    <v-card-text class="text-h5 black--text pt-4">
                                        ¿Esta seguro que desea eliminar el curso?
                                    </v-card-text>
                                    <v-card-actions>
                                        <v-spacer></v-spacer>
                                        <v-btn color="error" class="me-5" @click="dialogDelete = false">
                                            Cancelar
                                        </v-btn>
                                        <v-btn color="success" @click="eliminarCurso(curso.id)">
                                            Aceptar
                                        </v-btn>
                                        <v-spacer></v-spacer>
                                    </v-card-actions>
                                </v-card>
                            </v-dialog> -->

                            <td>
                                <div class="d-flex justify-space-around">
                                    <v-btn elevation="0" icon class="mx-1">
                                        <v-icon @click="editarCurso(curso.id)" color="yellow darken-3">mdi-pencil</v-icon>
                                    </v-btn>
                                    <v-btn elevation="0" icon>
                                        <!-- <v-icon @click="abrirModalEliminar(curso.id)" color="red darken-2" >mdi-delete</v-icon> -->
                                        <v-icon @click="eliminarCurso(curso.id)" color="red darken-2" >mdi-delete</v-icon>
                                    </v-btn>
                                </div>
                            </td>
                        </tr>
                    </tbody>
                    
                </template>
            </v-simple-table>
        </v-col>
        
    </v-row>

</template>

<script>

export default {
    name: 'tabla-cursos-comp',
    props: {
        cursos: {
            type: Array,
            required: true,
        }
    },
    data: function(){
        return {
            dialog: false,
            // dialogDelete: false,
            // deleteId: null,
        }
    },
    // computed: {},
    methods: {
        // abrirModalEliminar(id) {
        //     this.dialogDelete = true;
        //     this.deleteId = id;
            
        // },
        // cerrarModalEliminar() {
        //     this.dialogDelete = false;
        // },

        eliminarCurso(id){
            console.log(id);
            this.$emit('eliminarCurso', id);
        },
        editarCurso(id) {
            //console.log(id);
            alert('Editar el curso con el id: ' + id);
            this.$emit('editarCurso', id);
            // console.log(this.cursos.nombre);
        }
    },
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