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
                                    <v-form ref="form" v-model="valid" lazy-validation>

                                        <v-text-field 
                                            v-model="nombre" 
                                            :rules="nameRules" 
                                            label="Nombre" required>
                                        </v-text-field>
                                        <v-text-field 
                                            v-model="img" 
                                            :rules="imgRules" 
                                            label="URL de la imagen">
                                        </v-text-field>
                                        <v-text-field 
                                            v-model="cupos" 
                                            :rules="quotaRules" 
                                            type="number" 
                                            label="Cupos del curso">
                                        </v-text-field>
                                        <v-text-field 
                                            v-model="inscritos" 
                                            :rules="inscribedRules" 
                                            type="number" 
                                            label="Inscritos en el curso">
                                        </v-text-field>
                                        <v-text-field 
                                            v-model="duracion" 
                                            :rules="durationRules" 
                                            label="Duración del curso">
                                        </v-text-field>
                                        <v-text-field 
                                            v-model="fecha" 
                                            :rules="dateRules"
                                            type="date" 
                                            label="Fecha de registro">
                                        </v-text-field>
                                        <v-text-field 
                                            v-model="costo" 
                                            :rules="costRules"
                                            type="number" 
                                            label="Costo del curso">
                                        </v-text-field>
                                        <v-textarea 
                                            v-model="descripcion" 
                                            :rules="descriptionRules"
                                            label="Descripción del curso">
                                        </v-textarea>

                                    </v-form>
                                </v-col>
                            </v-row>
                        </v-container>
                    </v-card-text>
                    <v-card-actions class="d-flex align-content-start pb-6" > <!--  align-start -->
                        <v-spacer></v-spacer>
                        <v-btn :disabled="!valid" color="success" @click="validarFormulario" class="mr-4">
                            Agregar
                        </v-btn>
                        <v-btn color="warning" @click="reiniciarFormulario" class="mr-4">
                            Limpiar Formulario
                        </v-btn>
                        <v-btn color="error" @click="dialog = false">
                            Cancelar
                        </v-btn>
                    </v-card-actions>
                </v-card>
            </v-dialog>
        </v-row>

        <table-cursos-comp :cursos="cursos" @eliminarCurso="eliminarCurso" />
        
        <v-divider class="display-2 my-5"></v-divider>

        <alertas-administrador-comp/>

    </v-container>
</template>

<script>
import { mapState, mapGetters, mapActions } from 'vuex';
import TableCurso from '@/components/TableCursos.vue';
import AlertasAdministrador from '@/components/AlertasAdministrador.vue';

export default {
    name: 'admin-view',
    // props: {},
    data: function(){
        return {
            // para cerrar el componente dialog del formulario de nuevo curso.
            dialog: false,

            // variables para v-model de cada input.
            nombre: '',
            img: '',
            cupos: '',
            inscritos: '',
            duracion: '',
            fecha: '',
            costo: '',
            //completado: false,
            descripcion: '',

            // validación de cada input.
            valid: true,
            nameRules: [
                v => !!v || 'El nombre del curso es requerido',
            ],
            imgRules: [
                v => !!v || 'La imagen de portada es requerida',
            ],
            quotaRules: [
                v => !!v || 'La cantidad de cupos es requerida',
            ],
            inscribedRules: [
                v => !!v || 'La cantidad de inscritos es requerida',
            ],
            durationRules: [
                v => !!v || 'La duración del curso es requerida',
            ],
            dateRules: [
                v => !!v || 'La fecha es requerida',
            ],
            costRules: [
                v => !!v || 'El costo del curso es requerido',
            ],
            descriptionRules: [
                v => !!v || 'La descripción es requerida',
            ],
        }
    },
    computed: {
        ...mapState(['cursos']),
        ...mapGetters(['totalCursos', 'totalAlumnosPermitidos', 'totalAlumnosInscritos', 'totalCursosTerminados', 'totalCursosActivos']),

        totalCuposRestantes() {
            return this.totalAlumnosPermitidos - this.totalAlumnosInscritos;
        },
    },
    methods: {
        ...mapActions(['agregarCurso', 'eliminarCurso']),
        
        validarFormulario () {
            if (this.$refs.form.validate() == false) {
                console.log('validadno')
                return
            } else {
                this.registrarNuevoCurso();
            }

        },
        reiniciarFormulario () {
            this.$refs.form.reset()
        },


        registrarNuevoCurso() {

            let newCurso = {
                id: Math.floor(Math.random() * 1000),
                nombre: this.nombre,
                img: this.img,
                costo: parseInt(this.costo),
                duracion: this.duracion,
                cupos: parseInt(this.cupos),
                inscritos: parseInt(this.inscritos),
                completado: false,
                fecha_registro: this.fecha,
                descripcion: this.descripcion,
            }
            console.log(newCurso);
            this.agregarCurso(newCurso);
            this.reiniciarFormulario();

        },
        limpiarFormulario() {
            this.nombre = '';
            this.img = '';
            this.costo = '';
            this.duracion = '';
            this.cupos = '';
            this.inscritos = '';
            this.fecha = '';
            this.descripcion = '';
        },
    },
    // watch: {},
    components: {
        'table-cursos-comp': TableCurso,
        'alertas-administrador-comp': AlertasAdministrador,
    },
    // mixins: [],
    // filters: {},
    // -- Lifecycle Methods
    // -- End Lifecycle Methods
}
</script>

<style scoped>
    
</style>