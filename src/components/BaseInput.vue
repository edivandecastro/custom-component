<template>
  <div>
    <input
      v-bind="$attrs"
      :type="type"
      :value="value"
      @input="emitEventInput($event)"
      class="border p-4 outline-none focus:bg-dark-goldenrod-100"
      :class="[heightInput]"
    />
  </div>
</template>

<script>
export default {
  name: "BaseInput",

  props: {
    value: {
      type: String,
    },
    height: {
      type: Number,
      default: 32,
    },
    type: {
      type: String,
      required: true,
      validator: function (value) {
        return (
          ["text", "password", "date", "datetime-local", "email", "number", "search", "tel", "url"].indexOf(
            value
          ) !== -1
        );
      },
    },
    dispatch: {
      type: Function,
    },
  },

  computed: {
    heightInput() {
      const num = this.height * 0.25;
      return `h-${num}`;
    },
  },

  methods: {
    emitEventInput(event) {
      if (this.dispatch) {
        this.dispatch(event.target.value);
      }
      this.$emit("input", event.target.value);
    },
  },
};
</script>
