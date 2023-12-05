const saludo = Vue.createApp({
  data() {
    return {
      message: "Hola mundo!",
    };
  },
});

saludo.mount("#app1");

const textInitial = Vue.createApp({
  data() {
    return {
      Text: "Hola mundo",
    };
  },
});
textInitial.mount("#app2");

const conta = Vue.createApp({
  data() {
    return {
      count1: 0,
      message: " contador = 0",
    };
  },
  methods: {
    cont(number) {
      this.count1 += number;
      if (this.count1 == 0) {
        this.message = " contador en 0 suma o resta con los botones";
      } else if (number == +1) {
        this.message = " contador sumando : 1 suma total = " + this.count1;
      } else if (number == -1) {
        this.message = " contador restando : -1 resta total = " + this.count1;
      }
    },
  },
});

conta.mount("#contador1");

// Nuevo componente ListaFrutas
const ListaFrutas = {
  props: ["frutas"],
  template: `
      <div>
        <ul>
          <li v-for="fruta in frutas" :key="fruta.nombre">
            <img :src="fruta.imagen" alt="fruta.nombre" width="70px" height="70px">
            {{ fruta.nombre }}
          </li>
        </ul>
      </div>
    `,
};

const app14 = Vue.createApp({
  data() {
    return {
      frutas: [
        {
          nombre: "Manzana",
          imagen:
            "data:image/jpeg;base64,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",
        },
        {
          nombre: "Banana",
          imagen:
            "https://media.istockphoto.com/id/120492078/es/foto/tipo-banana.jpg?s=612x612&w=0&k=20&c=LCXu4PizZHCgQvPLFTSzcLzPLOxOCUq-22dN6BtbZh8=",
        },
        {
          nombre: "Fresa",
          imagen:
            "https://www.palmolive.com.mx/content/dam/cp-sites/personal-care/palmolive-latam/latam/tips/frutas-que-le-daran-mas-brillo-y-suavidad/fresas-beneficas-piel.jpg",
        },
        // Agrega más frutas según sea necesario
      ],
    };
  },
  components: {
    "lista-frutas": ListaFrutas,
  },
});

app14.mount("#app14");

// Nuevo componente ListaFrutas
const ListaFrutas2 = {
  props: ["frutas"],
  template: `
      <div>
        <ul>
          <li v-for="fruta in frutas" :key="fruta.nombre">
            <button @click="eliminarFruta(fruta)">Eliminar</button>
            <img :src="fruta.imagen" alt="fruta.nombre" width="70px" height="70px">
            {{ fruta.nombre }}
          </li>
        </ul>
      </div>
    `,
  methods: {
    eliminarFruta(fruta) {
      this.$emit("eliminar-fruta", fruta);
    },
  },
};

const app = Vue.createApp({
  data() {
    return {
      frutas: [
        {
          nombre: "Manzana",
          imagen:
            "data:image/jpeg;base64,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",
        },
        {
          nombre: "Banana",
          imagen:
            "https://media.istockphoto.com/id/120492078/es/foto/tipo-banana.jpg?s=612x612&w=0&k=20&c=LCXu4PizZHCgQvPLFTSzcLzPLOxOCUq-22dN6BtbZh8=",
        },
        {
          nombre: "Fresa",
          imagen:
            "https://www.palmolive.com.mx/content/dam/cp-sites/personal-care/palmolive-latam/latam/tips/frutas-que-le-daran-mas-brillo-y-suavidad/fresas-beneficas-piel.jpg",
        },
      ],
    };
  },
  components: {
    "lista-frutas": ListaFrutas2,
  },
  methods: {
    eliminarFruta(fruta) {
      // Eliminamos  la fruta del array
      const index = this.frutas.indexOf(fruta);
      if (index !== -1) {
        this.frutas.splice(index, 1);
      }
    },
  },
});

app.mount("#app");
