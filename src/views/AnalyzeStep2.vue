<template>
  <section class="section">
    <div class="columns is-centered is-mobile" data-test="title">
      <h1 class="title">{{ $t('revenues.second-step-revenues') }}</h1>
    </div>
    <div class="columns is-centered is-mobile" data-test="headers">
      <div class="column" align="center">{{ $t('commons.revenues') }}</div>
      <div class="column" align="center">{{ $t('commons.you') }}</div>
      <div class="column" align="center">{{ $t('commons.partner') }}</div>
      <div class="column" align="center">{{ $t('commons.comments') }}</div>
    </div>
    <div
      class="columns is-centered is-mobile"
      data-test="revenues-item"
      v-for="(revenuesItem, index) in getRevenuesItems"
      :key="revenuesItem.name"
    >
      <div class="column" :data-test="revenuesItem.name">
        {{ $t(`revenues.${revenuesItem.name}`) }}
      </div>
      <div class="column">
        <money-input v-model="items[index].user" />
      </div>
      <div class="column">
        <money-input v-model="items[index].partner" />
      </div>
      <div class="column">
        <b-input v-model="items[index].comments" size="is-small" />
      </div>
    </div>
    <div class="question" align="right">
      <router-link
        to="/summary"
        tag="button"
        class="button"
        data-test="button-next"
        @click.native="submitRevenuesAnswers"
      >
        {{ $t('analyze.next') }}
      </router-link>
    </div>
  </section>
</template>

<script>
import MoneyInput from '@/components/MoneyInput.vue';
import { mapGetters, mapActions } from 'vuex';
import cloneDeep from 'lodash.clonedeep';

export default {
  name: 'AnalyzeStep2',
  components: {
    MoneyInput
  },
  data() {
    return {
      items: null
    };
  },
  computed: {
    ...mapGetters(['getRevenuesItems'])
  },
  methods: {
    ...mapActions(['addRevenuesAnswers']),
    submitRevenuesAnswers() {
      this.addRevenuesAnswers(this.items);
    }
  },
  created() {
    this.items = cloneDeep(this.getRevenuesItems);
  }
};
</script>

<style lang="scss" scoped></style>
