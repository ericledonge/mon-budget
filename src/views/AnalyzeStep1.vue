<template>
  <section class="section">
    <stepper />

    <div class="columns is-centered">
      <div class="column is-one-third">
        <question :title="$t('analyze.what-is-your-name')">
          <b-input v-model="name" data-test="name" required />
        </question>

        <question :title="$t('analyze.what-is-your-marital-status')">
          <b-select
            :placeholder="$t('analyze.select-your-marital-status')"
            v-model="maritalStatus"
            data-test="marital-status"
            required
          >
            <option
              v-for="option in options"
              :key="option.label"
              :value="option.value"
            >
              {{ option.label }}
            </option>
          </b-select>
        </question>

        <question :title="$t('analyze.do-you-have-kids')" data-test="has-kids">
          <div class="block">
            <b-radio v-model="hasKids" name="name" :native-value="true">
              {{ $t('analyze.yes') }}
            </b-radio>
            <b-radio v-model="hasKids" name="name" :native-value="false">
              {{ $t('analyze.no') }}
            </b-radio>
          </div>
        </question>

        <question
          v-if="hasKids"
          :title="$t('analyze.how-many-do-you-have-kids')"
          data-test="number-kids"
        >
          <b-numberinput
            v-model="numberOfKids"
            min="1"
            controls-position="compact"
            controls-rounded
            size="is-small"
            icon-pack="fas"
            data-test="has-kids"
            required
          ></b-numberinput>
        </question>

        <div class="question" align="right">
          <router-link
            to="/analyze/step-2"
            tag="button"
            class="button"
            :disabled="$v.$invalid"
            data-test="button-next"
            @click.native="submitBasicInfo"
          >
            {{ $t('analyze.next') }}
          </router-link>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import { required } from 'vuelidate/lib/validators';
import { mapActions } from 'vuex';
import Question from '@/components/Question.vue';
import Stepper from '@/components/Stepper.vue';

export default {
  name: 'Analyze',
  components: {
    Question,
    Stepper
  },
  data() {
    return {
      name: null,
      maritalStatus: null,
      hasKids: false,
      numberOfKids: 0,
      options: [
        { label: this.$t('analyze.single'), value: 'single' },
        { label: this.$t('analyze.married'), value: 'married' },
        { label: this.$t('analyze.divorced'), value: 'divorced' },
        { label: this.$t('analyze.widowed'), value: 'widowed' }
      ]
    };
  },
  validations: {
    name: {
      required
    },
    maritalStatus: {
      required
    }
  },
  methods: {
    ...mapActions(['addBasicInfo', 'setCurrentStep']),
    submitBasicInfo() {
      this.$v.$touch();
      if (!this.$v.$invalid) {
        this.addBasicInfo({
          name: this.name,
          maritalStatus: this.maritalStatus,
          hasKids: this.hasKids,
          numberOfKids: this.numberOfKids
        });
      }
    }
  },
  created() {
    this.setCurrentStep(0);
  }
};
</script>
