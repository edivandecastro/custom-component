<template>
  <div class="hello">
    <div class="m-1">
      Input usando o v-model com valor no data: "{{ messageData }}"
      <BaseInput type="text" required placeholder="usando o v-model" v-model="messageData" />
    </div>

    <div class="m-1">
      Input usando o v-model com valor na Store: "{{ message }}"
      <BaseInput type="text" required placeholder="usando o v-model" v-model="message" />
    </div>

    <div class="m-1">
      Input usando o dispatch com valor na store: "{{ messageStore }}"
      <BaseInput
        type="text"
        required
        :value="messageStore"
        placeholder="usando o dispatch do VUEX"
        :dispatch="setMessage"
      />
    </div>

    <form>
      Formulário: {{ userData }}
      <div class="m-1">
        <BaseInput type="text" required placeholder="Name" v-model="userData.name" />
      </div>
      <div class="m-1">
        <BaseInput type="email" required placeholder="E-mail" v-model="userData.email" />
      </div>
      <div class="m-1">
        <BaseInput type="password" required placeholder="Password" v-model="userData.password" />
      </div>
      <input type="submit" value="Enviar" />
    </form>
  </div>
</template>

<script>
import { mapState, mapActions } from "vuex";
import BaseInput from "../components/BaseInput.vue";

export default {
  name: "ExampleVModel",

  components: {
    BaseInput,
  },

  data() {
    return {
      messageData: "Mensagem no Data",
      userData: {},
    };
  },

  created() {
    this.userData = { ...this.user };
  },

  computed: {
    // Quando usa-se o input com dispatch e os valores da store, é necessário mapear esses valores que serão
    // passados para o value do input como segue abaixo:
    ...mapState({
      messageStore: (state) => {
        return state.message;
      },
      user: (state) => {
        return state.user;
      },
    }),
    // Quando usa-se o input com v-model e os valores da store, é necessário associar esses valores com os
    // dados computados como segue abaixo:
    message: {
      get() {
        return this.$store.state.message;
      },
      set(value) {
        this.$store.dispatch("setMessage", value);
      },
    },
  },

  // Quando usa-se o input com dispatch e os valores da store, é necessário mapear a action que será passada
  // para o dispatch como segue abaixo:
  methods: {
    ...mapActions(["setMessage"]),
  },
};
</script>

<style scoped>
.m-1 {
  margin: 1em;
}
</style>
