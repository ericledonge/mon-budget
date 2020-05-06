<template>
  <div class="columns is-centered is-mobile" data-test="headers">
    <div class="column is-3-desktop is-one-third-mobile bold" align="center">
      {{ $t(`commons.${title}`) }}
    </div>
    <div class="column is-1-desktop bold" align="center">
      {{ $t('commons.you') }}
    </div>
    <div class="column is-1-desktop bold" align="center">
      {{ $t('commons.partner') }}
    </div>
    <div class="column is-2-desktop bold" align="center">
      {{ $t('commons.comments') }}
    </div>
  </div>
</template>

<script>
export default {
  name: 'FormHeader',
  props: {
    title: {
      type: String,
      required: true
    }
  }
};
</script>

<style scoped>
.bold {
  font-weight: bold;
}
</style>
