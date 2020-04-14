<template>
  <hero
    title="Mon Budget"
    subtitle="Calculer facilement votre budget en quelques clics!"
    textButton="Démarrer votre analyse"
    linkButton="/analyze"
  />
</template>

<script>
import Hero from '@/components/Hero.vue';

export default {
  name: 'Home',
  components: {
    Hero
  }
};
</script>
