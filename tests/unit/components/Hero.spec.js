import { shallowMount } from '@vue/test-utils';
import Hero from '@/components/Hero.vue';

const title = 'My title';
const subtitle = 'My subtitle';
const textButton = 'My textButton';
const linkButton = 'My linkButton';

describe('Hero', () => {
  const wrapper = shallowMount(Hero, {
    propsData: {
      title,
      subtitle,
      textButton,
      linkButton
    },
    stubs: ['router-link']
  });

  it('should render the title', () => {
    expect(wrapper.find('.title').text()).toContain(title);
  });

  it('should render the subtitle', () => {
    expect(wrapper.find('.subtitle').text()).toContain(subtitle);
  });

  it('should render the button', () => {
    const button = wrapper.find('.button');
    expect(button.html()).toContain(textButton);
    expect(button.html()).toContain(linkButton);
  });
});
