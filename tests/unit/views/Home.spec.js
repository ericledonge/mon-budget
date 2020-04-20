import { shallowMount } from '@vue/test-utils';
import Home from '@/components/Hero.vue';

let wrapper;

const title = 'My title';
const subtitle = 'My subtitle';
const textButton = 'My textButton';
const linkButton = 'My linkButton';

const wrapperFactory = () => {
  return shallowMount(Home, {
    propsData: {
      title,
      subtitle,
      textButton,
      linkButton
    },
    mocks: {
      $t: () => {}
    },
    stubs: ['hero', 'router-link']
  });
};

describe('Home', () => {
  beforeAll(() => {
    wrapper = wrapperFactory();
  });

  it('should render ', () => {
    expect(wrapper.exists()).toBe(true);
  });
});
