<template>
  <section class="section">
    <stepper />
    <div class="columns is-centered">
      <div class="column is-half">
        <div class="answer" data-test="name">
          {{ $t('summary.your-name') + username }}
        </div>

        <div class="answer" data-test="marital-status">
          {{
            $t('summary.your-marital-status') +
              ($t(`analyze.${maritalStatus}`) || '')
          }}
        </div>

        <div class="answer" v-if="hasKids" data-test="number-kids">
          {{ $t('summary.your-kids') }} {{ numberOfKids }}
        </div>

        <div class="answer" data-test="total-monthly-household-revenues">
          {{ $t('summary.total-monthly-household-revenues') }}
          {{ getTotalMonthlyHouseholdRevenues }}
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import { mapGetters, mapActions } from 'vuex';
import Stepper from '@/components/Stepper.vue';

export default {
  name: 'Summary',
  components: {
    Stepper
  },
  computed: {
    ...mapGetters([
      'username',
      'maritalStatus',
      'hasKids',
      'numberOfKids',
      'getTotalMonthlyHouseholdRevenues'
    ])
  },
  methods: {
    ...mapActions(['setCurrentStep'])
  },
  created() {
    this.setCurrentStep(2);
  }
};
</script>

<style lang="scss" scoped></style>
