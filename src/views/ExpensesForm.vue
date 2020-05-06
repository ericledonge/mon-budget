<template>
  <span>
    <form-header :title="`monthly-expenses-${topic}`" />

    <div
      class="columns is-centered is-mobile"
      :data-test="`${topic}-item`"
      v-for="(question, index) in questions"
      :key="question.name"
    >
      <div
        class="column is-3-desktop is-one-third-mobile"
        :data-test="question.name"
      >
        {{ $t(`expenses.${topic}.${question.name}`) }}
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
import { mapActions } from 'vuex';
import cloneDeep from 'lodash.clonedeep';

export default {
  name: 'ExpensesForm',
  props: {
    topic: {
      type: String,
      required: true
    },
    dataItems: {
      type: String,
      required: true
    },
    action: {
      type: String,
      required: true
    },
    url: {
      type: String,
      required: true
    }
  },
  computed: {
    items: {
      get() {
        return cloneDeep(this.questions);
      },
      set() {}
    },
    questions() {
      return this.$store.getters[`${this.dataItems}`];
    }
  },
  methods: {
    ...mapActions(['incrementStep']),
    submit() {
      this.$store.dispatch(`${this.action}`, this.items);
      this.items = null;
      this.incrementStep();
      this.$router.push(this.url);
    }
  }
};
</script>
