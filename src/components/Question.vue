<template>
  <div class="question">
    <b-field :label="title">
      <slot></slot>
    </b-field>
  </div>
</template>

<script>
export default {
  name: 'Question',
  props: {
    title: {
      type: String,
      required: true,
      default: () => ''
    }
  }
};
</script>

<style lang="scss" scoped></style>
