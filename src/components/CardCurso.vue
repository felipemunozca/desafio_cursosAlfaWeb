<template>
    <v-container>
        <v-row justify="space-around">
            <v-card width="350">

                <v-img height="350px" :src="curso.img">
                    <!-- <v-app-bar flat color="rgba(0, 0, 0, 0)" ></v-app-bar> -->
                </v-img>

                <v-card-text>
                    <div class="font-weight-bold title black--text">
                        {{ curso.nombre }}
                    </div>
                    <div class="font-weight-bold ml-8 mt-3 mb-2">
                        Información
                    </div>

                    <v-timeline align-top dense>
                        <v-timeline-item small color="purple">
                            <div>
                                <div class="font-weight-normal">
                                    Costo: <strong>$ {{ curso.costo.toLocaleString('es-CL') }}</strong>
                                </div>
                                <div>
                                    Duración: {{ curso.duracion }}
                                </div>
                            </div>
                        </v-timeline-item>

                        <v-timeline-item small color="green">
                            <div>
                                <div class="font-weight-normal">
                                    Cupos: <strong>{{ curso.cupos }}</strong>
                                </div>
                                <div>
                                    Completado: {{ curso.completado }}
                                </div>
                            </div>
                        </v-timeline-item>

                        <v-timeline-item small color="purple">
                            <div>
                                <div class="font-weight-normal">
                                    Fecha de registro: {{ curso.fecha_registro }}
                                </div>
                            </div>
                        </v-timeline-item>

                        <v-timeline-item small color="green">
                            <div>
                                <div class="font-weight-normal">
                                    Descripción: 
                                </div>
                                <div>
                                    {{ curso.descripcion }}
                                </div>
                            </div>
                        </v-timeline-item>
                    </v-timeline>
                </v-card-text>

            </v-card>
        </v-row>
    </v-container>
</template>

<script>
export default {
    name: 'card-curso-comp',
    props: {
        curso: {
            type: Object,
            required: true,
        }
    },
    data: function(){
        return {

        }
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