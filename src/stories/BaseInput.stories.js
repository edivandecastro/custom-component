import BaseInput from "../components/BaseInput.vue";

export default {
  title: "Components/BaseInput",
  component: BaseInput,
  argTypes: {
    backgroundColor: { control: "color" },
    type: {
      control: { type: "select", options: [
        "text",
        "password",
        "date",
        "datetime-local",
        "email",
        "number",
        "search",
        "tel",
        "url",
      ]}
    },
  },
};

const Template = (args, { argTypes }) => ({
  props: Object.keys(argTypes),
  components: { BaseInput },
  template: '<BaseInput v-bind="$props" />',
});

export const Primary = Template.bind({});
Primary.args = {
  primary: true,
  type: 'text',
};
