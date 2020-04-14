<template>
  <section class="hero is-primary is-bold is-fullheight">
    <div class="hero-body">
      <div class="container">
        <h1 class="title">
          {{ title }}
        </h1>
        <h2 class="subtitle" v-if="subtitle">
          {{ subtitle }}
        </h2>
        <router-link :to="linkButton" tag="button" class="button">
          {{ textButton }}
        </router-link>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'Hero',
  props: {
    title: {
      type: String,
      required: true
    },
    subtitle: {
      type: String
    },
    textButton: {
      type: String,
      required: true
    },
    linkButton: {
      type: String,
      required: true
    }
  }
};
</script>

<style lang="scss" scoped>
.container {
  text-align: center;
}
</style>
