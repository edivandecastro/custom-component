<template>
  <div class="base-input">
    <input v-bind="$attrs" :type="type" :value="value" @input="emitEventInput($event)" />
  </div>
</template>

<script>
export default {
  name: "BaseInput",

  props: {
    value: {
      type: String,
    },
    type: {
      type: String,
      required: true,
      validator: function (value) {
        return [
          "text",
          "password",
          "date",
          "datetime-local",
          "email",
          "number",
          "search",
          "tel",
          "url",
        ].indexOf(value) !== -1
      }
    },
    dispatch: {
      type: Function,
    }
  },

  methods: {
    emitEventInput(event) {
      if (this.dispatch) {
        this.dispatch(event.target.value);
      }
      this.$emit("input", event.target.value);
    }
  }
}
</script>
