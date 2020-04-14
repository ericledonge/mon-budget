<template>
  <hero
    :title="$t('homepage.title')"
    :subtitle="$t('homepage.subtitle')"
    :textButton="$t('homepage.textButton')"
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
