<template>
  <section class="section">
    <div class="columns is-centered">
      <div class="column is-half">
        <h1 class="title">{{ $t('summary.title') }}</h1>

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

        <div class="answer" v-else data-test="without-kid">
          {{ $t('summary.without-kid') }}
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
import { mapGetters } from 'vuex';

export default {
  name: 'Summary',
  computed: {
    ...mapGetters([
      'username',
      'maritalStatus',
      'hasKids',
      'numberOfKids',
      'getTotalMonthlyHouseholdRevenues'
    ])
  }
};
</script>

<style lang="scss" scoped></style>
