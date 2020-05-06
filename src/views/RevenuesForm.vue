<template>
  <span>
    <form-header title="monthly-revenues" />

    <div
      class="columns is-centered is-mobile"
      data-test="revenues-item"
      v-for="(revenuesItem, index) in getRevenuesItems"
      :key="revenuesItem.name"
    >
      <div
        class="column is-3-desktop is-one-third-mobile"
        :data-test="revenuesItem.name"
      >
        {{ $t(`revenues.${revenuesItem.name}`) }}
      </div>
      <div class="column is-1-desktop">
        <money-input v-model="items[index].user" />
      </div>
      <div class="column is-1-desktop">
        <money-input v-model="items[index].partner" />
      </div>
      <div class="column is-2-desktop">
        <b-input v-model="items[index].comments" size="is-small" />
      </div>
    </div>

    <div class="columns is-centered is-mobile">
      <div class="column is-7-desktop" align="right">
        <b-button
          class="button is-primary"
          @click.native="submit"
          data-test="button-next"
        >
          {{ $t('commons.next') }}
        </b-button>
      </div>
    </div>
  </span>
</template>

<script>
import { mapGetters, mapActions } from 'vuex';
import cloneDeep from 'lodash.clonedeep';

export default {
  name: 'RevenuesForm',
  data() {
    return {
      items: null
    };
  },
  computed: {
    ...mapGetters(['getRevenuesItems'])
  },
  methods: {
    ...mapActions(['addRevenues', 'incrementStep']),
    submit() {
      this.addRevenues(this.items);
      this.incrementStep();
      this.$router.push('/expenses/housing');
    }
  },
  created() {
    this.items = cloneDeep(this.getRevenuesItems);
  }
};
</script>
