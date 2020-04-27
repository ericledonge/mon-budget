<template>
  <b-field>
    <b-input
      v-model="innerValue"
      type="number"
      min="0"
      icon="dollar-sign"
      size="is-small"
      @focus="resetFieldOnFocus"
      @blur="resetFieldOnBlur"
    >
    </b-input>
  </b-field>
</template>

<script>
export default {
  name: 'MoneyInput',
  props: {
    value: {
      type: Number
    }
  },
  data() {
    return {
      innerValue: 0
    };
  },
  watch: {
    // Handles internal model changes.
    innerValue(newVal) {
      this.$emit('input', parseFloat(newVal));
    },
    // Handles external model changes.
    value(newVal) {
      this.innerValue = newVal;
    }
  },
  created() {
    if (this.value) {
      this.innerValue = this.value;
    }
  },
  methods: {
    resetFieldOnFocus() {
      if (this.innerValue === 0) {
        this.innerValue = '';
      }
    },
    resetFieldOnBlur() {
      if (isNaN(this.innerValue)) {
        this.innerValue = 0;
      }
    }
  }
};
</script>
