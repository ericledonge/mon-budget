<template>
  <section class="section">
    <stepper />
    <transition appear name="slide-fade" mode="out-in">
      <div :key="$route.fullPath">
        <slot />
      </div>
    </transition>
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

<style lang="scss" scoped>
.slide-fade-enter {
  transform: translateX(20px);
  opacity: 0;
}

.slide-fade-enter-active,
.slide-fade-leave-active {
  transition: all 0.8s ease;
}

.slide-fade-leave-to {
  transform: translateX(-20px);
  opacity: 0;
}
</style>
