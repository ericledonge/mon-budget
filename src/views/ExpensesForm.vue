<template>
  <span>
    <form-header
      :title="`monthly-expenses-${currentStepItem}`"
      data-test="title"
    />

    <div
      class="columns is-centered is-mobile"
      :data-test="`${currentStepItem}-item`"
      v-for="(subItem, index) in currentStepSubItems"
      :key="subItem.name"
    >
      <div
        class="column is-3-desktop is-one-third-mobile"
        :data-test="subItem.name"
      >
        {{ $t(`expenses.${currentStepItem}.${subItem.name}`) }}
      </div>
      <div class="column is-1-desktop">
        <money-input v-model="answers[index].user" />
      </div>
      <div class="column is-1-desktop">
        <money-input v-model="answers[index].partner" />
      </div>
      <div class="column is-2-desktop">
        <b-input v-model="answers[index].comments" size="is-small" />
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
  name: 'ExpensesForm',
  created() {
    this.setActiveStep(this.currentRoute);
  },
  watch: {
    $route(to, from) {
      this.setActiveStep(this.currentRoute);
    }
  },
  computed: {
    ...mapGetters(['getActiveStep', 'getNextStepLink']),
    currentRoute() {
      return this.$route.params.item;
    },
    currentStepItem() {
      return this.getActiveStep.item;
    },
    currentStepSubItems() {
      return this.$store.getters[this.getActiveStep.subItemsGetter];
    },
    currentStepAction() {
      return this.getActiveStep.updateAction;
    },
    nextStepLink() {
      return this.getNextStepLink;
    },
    answers: {
      get() {
        return cloneDeep(this.currentStepSubItems);
      },
      set() {}
    }
  },
  methods: {
    ...mapActions(['setActiveStep']),
    submit() {
      this.$store.dispatch(this.currentStepAction, this.answers);
      this.$router.push(this.nextStepLink);
    }
  }
};
</script>
