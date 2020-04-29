<template>
  <section class="section">
    <stepper />

    <div class="columns is-centered is-mobile is-half" data-test="headers">
      <div class="column is-one-third" align="center">
        {{ $t('commons.revenues') }}
      </div>
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
      <div class="column is-one-third" :data-test="revenuesItem.name">
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
import Stepper from '@/components/Stepper.vue';
import { mapGetters, mapActions } from 'vuex';
import cloneDeep from 'lodash.clonedeep';

export default {
  name: 'AnalyzeStep2',
  components: {
    MoneyInput,
    Stepper
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
    ...mapActions(['addRevenuesAnswers', 'setCurrentStep']),
    submitRevenuesAnswers() {
      this.addRevenuesAnswers(this.items);
    }
  },
  created() {
    this.items = cloneDeep(this.getRevenuesItems);
    this.setCurrentStep(1);
  }
};
</script>

<style lang="scss" scoped></style>
