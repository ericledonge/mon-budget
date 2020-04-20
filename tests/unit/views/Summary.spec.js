import { shallowMount, createLocalVue } from '@vue/test-utils';
import Vuex from 'vuex';
import Summary from '@/views/Summary.vue';

const localVue = createLocalVue();
localVue.use(Vuex);

let wrapper;
let store;

let withKidsStore = {
  modules: {
    BasicInfo: {
      getters: {
        username: jest.fn().mockReturnValue('Toto'),
        maritalStatus: jest.fn().mockReturnValue('Divorced'),
        hasKids: jest.fn().mockReturnValue(true),
        numberOfKids: jest.fn().mockReturnValue(2)
      }
    }
  }
};

let withoutKidStore = {
  modules: {
    BasicInfo: {
      getters: {
        username: jest.fn().mockReturnValue('Toto'),
        maritalStatus: jest.fn().mockReturnValue('Divorced'),
        hasKids: jest.fn().mockReturnValue(false),
        numberOfKids: jest.fn().mockReturnValue(0)
      }
    }
  }
};

const wrapperFactory = (component, storeOptions) => {
  store = new Vuex.Store({ ...storeOptions });
  wrapper = new shallowMount(component, {
    localVue,
    store,
    mocks: {
      $t: () => {}
    }
  });
  return wrapper;
};

describe('Summary', () => {
  beforeEach(() => {
    wrapper = wrapperFactory(Summary, withKidsStore);
  });

  it('should render ', () => {
    expect(wrapper.exists()).toBe(true);
  });

  it('should render the name', () => {
    expect(wrapper.find('[data-test="name"]').text()).toContain('Toto');
  });

  describe("When the visitors tells us he doesn't have kids", () => {
    beforeEach(() => {
      wrapper = wrapperFactory(Summary, withoutKidStore);
    });
    it('should render the without kids div', () => {
      expect(wrapper.find('[data-test="without-kid"]').exists()).toBe(true);
      expect(wrapper.find('[data-test="number-kids"]').exists()).toBe(false);
    });
  });

  describe('When the visitors tells us he has kids', () => {
    beforeEach(() => {
      wrapper = wrapperFactory(Summary, withKidsStore);
    });
    it('should render the with kids div', () => {
      expect(wrapper.find('[data-test="without-kid"]').exists()).toBe(false);
      expect(wrapper.find('[data-test="number-kids"]').exists()).toBe(true);
      expect(wrapper.find('[data-test="number-kids"]').text()).toContain('2');
    });
  });
});
