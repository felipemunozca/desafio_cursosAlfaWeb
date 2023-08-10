<template>
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
                <!-- <tr> -->
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
                    <td>
                        <div class="d-flex justify-space-around">
                            <v-btn elevation="0" icon class="mx-1">
                                <v-icon color="yellow darken-3">mdi-pencil</v-icon>
                            </v-btn>
                            <v-btn elevation="0" icon>
                                <v-icon color="red darken-2">mdi-delete</v-icon>
                            </v-btn>
                        </div>
                    </td>
                </tr>
            </tbody>
        </template>
    </v-simple-table>
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