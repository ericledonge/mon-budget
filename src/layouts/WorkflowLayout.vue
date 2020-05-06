<template>
  <section class="section">
    <stepper />
    <slot />
  </section>
</template>

<script>
import Stepper from '@/components/Stepper.vue';

export default {
  name: 'WorkflowLayout',
  components: {
    Stepper
  }
};
</script>
