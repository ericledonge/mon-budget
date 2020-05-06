<template>
  <span>
    <div
      class="columns is-centered is-mobile"
      v-for="element in elements"
      :key="element.label"
    >
      <div class="column is-3-desktop">
        {{ element.label }}
      </div>
      <div class="column is-1-desktop" align="right" :data-test="element.test">
        {{ element.value }}
      </div>
    </div>
  </span>
</template>

<script>
import { mapGetters, mapActions } from 'vuex';

export default {
  name: 'Summary',
  computed: {
    ...mapGetters([
      'getRevenuesSum',
      'getExpensesHousingSum',
      'getExpensesTransportSum',
      'getExpensesInsuranceSum',
      'getExpensesFoodSum',
      'getExpensesLeisureSum',
      'getExpensesEducationSum',
      'getExpensesHealthSum',
      'getExpensesVariousSum'
    ]),
    elements() {
      return [
        {
          label: this.$t('commons.monthly-revenues'),
          value: this.getRevenuesSum,
          test: 'revenues'
        },
        {
          label: this.$t('commons.monthly-expenses-housing'),
          value: this.getExpensesHousingSum,
          test: 'housing-expenses'
        },
        {
          label: this.$t('commons.monthly-expenses-transport'),
          value: this.getExpensesTransportSum,
          test: 'transport-expenses'
        },
        {
          label: this.$t('commons.monthly-expenses-insurance'),
          value: this.getExpensesInsuranceSum,
          test: 'insurance-expenses'
        },
        {
          label: this.$t('commons.monthly-expenses-food'),
          value: this.getExpensesFoodSum,
          test: 'food-expenses'
        },
        {
          label: this.$t('commons.monthly-expenses-leisure'),
          value: this.getExpensesLeisureSum,
          test: 'leisure-expenses'
        },
        {
          label: this.$t('commons.monthly-expenses-education'),
          value: this.getExpensesEducationSum,
          test: 'education-expenses'
        },
        {
          label: this.$t('commons.monthly-expenses-health'),
          value: this.getExpensesHealthSum,
          test: 'health-expenses'
        },
        {
          label: this.$t('commons.monthly-expenses-various'),
          value: this.getExpensesVariousSum,
          test: 'various-expenses'
        }
      ];
    }
  }
};
</script>
