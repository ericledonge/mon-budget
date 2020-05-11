export const FAKE_BASIC_INFO_ANSWERS = {
  name: 'Toto',
  maritalStatus: 'Marié(e)',
  hasKids: true,
  numberOfKids: 1
};

export const FAKE_ANSWERS = [
  { name: 'question1', user: 100, partner: 0, comments: null },
  { name: 'question2', user: 0, partner: 100, comments: null },
  { name: 'question3', user: 100, partner: 100, comments: null }
];

export function FAKE_AMOUNT_ANSWERS() {
  return FAKE_ANSWERS.reduce(function(acc, item) {
    return acc + item.user + item.partner;
  }, 0);
}

export const FAKE_STEPS = [
  {
    id: 2,
    active: false,
    item: 'housing',
    label: 'commons.housing',
    icon: 'home',
    subItemsGetter: 'getExpensesHousingItems',
    updateAction: 'addExpensesHousing',
    link: '/expenses/housing'
  },
  {
    id: 3,
    active: true,
    item: 'transport',
    label: 'commons.transport',
    icon: 'bus',
    subItemsGetter: 'getExpensesTransportItems',
    updateAction: 'addExpensesTransport',
    link: '/expenses/transport'
  },
  {
    id: 4,
    active: false,
    item: 'insurance',
    label: 'commons.insurance',
    icon: 'car-crash',
    subItemsGetter: 'getExpensesInsuranceItems',
    updateAction: 'addExpensesInsurance',
    link: '/expenses/insurance'
  }
];
