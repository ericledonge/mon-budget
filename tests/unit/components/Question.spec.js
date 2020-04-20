import { shallowMount } from '@vue/test-utils';
import Question from '@/components/Question.vue';

const title = 'the title';

describe('Question', () => {
  const wrapper = shallowMount(Question, {
    propsData: {
      title
    },
    stubs: ['b-field']
  });

  it('should render.', () => {
    expect(wrapper.exists()).toBe(true);
  });

  it('should render the title', () => {
    expect(wrapper.html()).toContain(title);
  });
});
