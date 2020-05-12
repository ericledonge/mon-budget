<template>
  <b-steps
    v-model="activeStep"
    :has-navigation="false"
    :animated="true"
    :rounded="true"
    size="is-small"
    @input="changeStep"
  >
    <template v-for="(step, index) in getAllSteps">
      <b-step-item
        :key="index"
        :label="$t(step.label)"
        :icon="step.icon"
        :clickable="isClickable(index)"
        data-test="step"
      >
      </b-step-item>
    </template>
  </b-steps>
</template>

<script>
import { mapGetters, mapActions } from 'vuex';

export default {
  name: 'Stepper',
  methods: {
    ...mapActions(['setActiveStep']),
    changeStep(index) {
      const clickedStep = this.getStepById(index);
      this.setActiveStep(clickedStep.item);
      this.$router.push(clickedStep.link);
    },
    isClickable(index) {
      return index < this.getActiveStep.id;
    }
  },
  computed: {
    ...mapGetters([
      'getAllSteps',
      'getActiveStep',
      'getStepById',
      'getNextStepLink'
    ]),
    activeStep: {
      get() {
        return this.getActiveStep.id;
      },
      set() {}
    }
  },
  props: ['icon']
};
</script>
