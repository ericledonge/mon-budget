<template>
  <b-steps
    v-model="getCurrentStep"
    :has-navigation="false"
    :animated="true"
    :rounded="true"
  >
    <template v-for="(step, index) in getAllSteps">
      <b-step-item
        :key="index"
        :label="$t(step.label)"
        :icon="step.icon"
        data-test="step"
      >
      </b-step-item>
    </template>
  </b-steps>
</template>

<script>
import { mapGetters } from 'vuex';

export default {
  name: 'Stepper',
  computed: {
    ...mapGetters(['getAllSteps', 'getCurrentStep'])
  },
  props: ['icon']
};
</script>
