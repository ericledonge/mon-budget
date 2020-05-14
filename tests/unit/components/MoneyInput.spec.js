import { shallowMount, mount, createLocalVue } from '@vue/test-utils';
import MoneyInput from '@/components/MoneyInput.vue';

let wrapper;
let value;

const wrapperFactory = component => {
  wrapper = new shallowMount(component, {
    stubs: ['b-field', 'b-input']
  });
  return wrapper;
};

describe('MoneyInput', () => {
  it('should render.', () => {
    wrapper = wrapperFactory(MoneyInput);
    expect(wrapper.exists()).toBe(true);
  });

  describe('When the MoneyInput is render for the first time', () => {
    it('should render a 0 in it.', () => {
      wrapper = wrapperFactory(MoneyInput);
      value = wrapper.find('b-input-stub').attributes('value');
      expect(value).toEqual('0');
    });
  });

  describe('When the Money Input is blurred with a NaN', () => {
    it('should render a 0 in it.', () => {
      wrapper = mount(MoneyInput);
      wrapper.setData({ innerValue: NaN });
      wrapper.find('b-input').trigger('blur');
      expect(wrapper.vm.innerValue).toEqual(0);
    });
  });
});
