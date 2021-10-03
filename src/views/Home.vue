<template>
  <div>
    <BaseInput type="text" class="m-10" />

    <router-link to="/example-input-vmodel-vuex">Exemplo de Input com v-model e vuex</router-link>

    <router-view></router-view>
  </div>
</template>

<script>
import BaseInput from "../components/BaseInput.vue";

export default {
  name: "Home",

  components: {
    BaseInput,
  },
};
</script>
