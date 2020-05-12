<template>
  <span>
    <div class="columns is-centered is-mobile">
      <div class="column is-3-desktop">
        <question :title="$t('basic-info.what-is-your-name')">
          <b-input v-model="name" data-test="name" required />
        </question>

        <question :title="$t('basic-info.what-is-your-marital-status')">
          <b-select
            :placeholder="$t('basic-info.select-your-marital-status')"
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

        <question
          :title="$t('basic-info.do-you-have-kids')"
          data-test="has-kids"
        >
          <div class="block">
            <b-radio v-model="hasKids" name="name" :native-value="true">
              {{ $t('commons.yes') }}
            </b-radio>
            <b-radio v-model="hasKids" name="name" :native-value="false">
              {{ $t('commons.no') }}
            </b-radio>
          </div>
        </question>

        <question
          v-if="hasKids"
          :title="$t('basic-info.how-many-do-you-have-kids')"
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
      </div>
    </div>

    <div class="columns is-centered is-mobile">
      <div class="column is-3-desktop" align="right">
        <b-button
          class="button is-primary"
          @click.native="submit"
          :disabled="$v.$invalid"
          data-test="button-next"
        >
          {{ $t('commons.next') }}
        </b-button>
      </div>
    </div>
  </span>
</template>

<script>
import { required } from 'vuelidate/lib/validators';
import { mapActions, mapGetters } from 'vuex';
import Question from '@/components/Question.vue';

export default {
  name: 'BasicInfoForm',
  components: {
    Question
  },
  created() {
    this.setActiveStep('basic-info');
    this.name = this.basicInfo.name;
    this.maritalStatus = this.basicInfo.maritalStatus;
    this.hasKids = this.basicInfo.hasKids;
    this.numberOfKids = this.basicInfo.numberOfKids;
  },
  data() {
    return {
      name: null,
      maritalStatus: null,
      hasKids: false,
      numberOfKids: 0,
      options: [
        { label: this.$t('basic-info.single'), value: 'single' },
        { label: this.$t('basic-info.married'), value: 'married' },
        { label: this.$t('basic-info.divorced'), value: 'divorced' },
        { label: this.$t('basic-info.widowed'), value: 'widowed' }
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
    ...mapActions(['addBasicInfo', 'setActiveStep']),
    submit() {
      this.$v.$touch();
      if (!this.$v.$invalid) {
        this.addBasicInfo({
          name: this.name,
          maritalStatus: this.maritalStatus,
          hasKids: this.hasKids,
          numberOfKids: this.numberOfKids
        });
        this.$router.push('/revenues');
      }
    }
  },
  computed: {
    ...mapGetters(['basicInfo'])
  }
};
</script>
