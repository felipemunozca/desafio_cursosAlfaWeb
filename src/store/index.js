import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    cursos: [
      {
        id: 1,
        img: "https://i.blogs.es/545cf8/es6-logo/450_1000.png",
        nombre: "JavaScript Avanzado",
        costo: 30000,
        duracion: "2 meses",
        cupos: 20,
        inscritos: 10,
        completado: false,
        fecha_registro: "06/03/2022",
        descripcion: "Curso con las nuevas actualizaciones de JavaScript.",
      },
      {
        id: 2,
        img: "https://lineadecodigo.com/wp-content/uploads/2014/04/css.png",
        nombre: "CSS para principiantes",
        costo: 10000,
        duracion: "1 mes",
        cupos: 35,
        inscritos: 23,
        completado: false,
        fecha_registro: "05/03/2022",
        descripcion: "Aprendiendo estilos con CSS desde el nivel más básico.",
      },
      {
        id: 3,
        img: "https://w7.pngwing.com/pngs/199/348/png-transparent-javascript-programmer-programming-language-computer-programming-node-js-angle-text-rectangle-thumbnail.png",
        nombre: "JavaScript Básico de 0 a 100",
        costo: 20000,
        duracion: "2 meses",
        cupos: 25,
        inscritos: 0,
        completado: true,
        fecha_registro: "05/03/2022",
        descripcion: "Programando para la web con JavaScript.",
      },
      {
        id: 4,
        img: "https://www.w3.org/html/logo/downloads/HTML5_Logo_512.png",
        nombre: "HTML Básico",
        costo: 10000,
        duracion: "1 mes",
        cupos: 35,
        inscritos: 0,
        completado: true,
        fecha_registro: "31/01/2022",
        descripcion: "Aprende HTML 5 y crea tus primeras páginas web paso a paso con decenas de ejercicios.",
      },
      {
        id: 5,
        img: "https://logosandtypes.com/wp-content/uploads/2020/08/vue.svg",
        nombre: "Vue JS de 0 a 100",
        costo: 85500,
        duracion: "5 meses",
        cupos: 35,
        inscritos: 35,
        completado: false,
        fecha_registro: "06/03/2022",
        descripcion: "Aprende desde cero como usar VueJS, cómo usarlo en aplicaciones pequeñas y ver lo que ofrece el framework.",
      },
      {
        id: 6,
        img: "https://miro.medium.com/max/512/1*9U1toerFxB8aiFRreLxEUQ.png",
        nombre: "Estilos con SASS",
        costo: 45000,
        duracion: "1 mes",
        cupos: 40,
        inscritos: 35,
        completado: false,
        fecha_registro: "06/03/2022",
        descripcion: "Con SASS aprenderás a escribir mejor código de CSS con todas las funciones necesarias.",
      }
    ]
  },
  getters: {
    totalCursos: function(state) {
      return state.cursos.length;
    },
    totalAlumnosPermitidos: function(state) {
      return state.cursos.reduce((total, cursos) => {
        // console.log(total)
        return total + cursos.cupos;
      }, 0);
    },
    totalAlumnosInscritos: function(state) {
      return state.cursos.reduce((total, cursos) => {
        // console.log(total)
        return total + cursos.inscritos;
      }, 0);
    },
    totalCursosTerminados: function(state) {
      let terminados = state.cursos.filter(buscar => buscar.completado === true);
      // console.log(terminados.length)
      return terminados.length;
    },
    totalCursosActivos: function(state) {
      let activos = state.cursos.filter(buscar => buscar.completado === false);
      return activos.length;
    }
  },
  mutations: {
    AGREGAR_CURSO: (state, nuevoCurso) => {
      state.cursos.push(nuevoCurso);
    },
    EDITAR_CURSO: (state, idCurso, nuevoCurso) => {
      let antiguoCurso = state.cursos.findIndex(curso => curso.id == idCurso);
      console.log(antiguoCurso)
      state.cursos.splice(antiguoCurso, 1, nuevoCurso)
    },
    ELIMINAR_CURSO: (state, idCurso) => {
      let index = state.cursos.findIndex(curso => curso.id == idCurso);
      state.cursos.splice(index, 1);
    },
  },
  actions: {
    agregarCurso({commit}, nuevoCurso){
      commit('AGREGAR_CURSO', nuevoCurso);
    },
    editarCurso({commit}, idCurso, antiguoCurso){
      commit('EDITAR_CURSO', idCurso, antiguoCurso);
    },
    eliminarCurso({commit}, idCurso){
      commit('ELIMINAR_CURSO', idCurso);
    }
  },
  modules: {
  }
})
