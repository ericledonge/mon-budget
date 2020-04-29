export const FAKE_BASIC_INFO_ANSWERS = {
  name: 'Toto',
  maritalStatus: 'Marié(e)',
  hasKids: true,
  numberOfKids: 1
};

export const FAKE_REVENUES_ANSWERS = [
  { name: 'net-salaries', user: 2000, partner: 1000, comments: null },
  {
    name: 'rental-revenues',
    user: 200,
    partner: 0,
    comments: 'Comment on rental revenues.'
  },
  { name: 'public-benefits', user: 0, partner: 100, comments: null },
  { name: 'private-benefits', user: 100, partner: 0, comments: null },
  {
    name: 'child-benefits',
    user: 0,
    partner: 200,
    comments: 'Comment on child benefits.'
  },
  { name: 'bonuses', user: 100, partner: 200, comments: null },
  {
    name: 'investment-income',
    user: 100,
    partner: 200,
    comments: 'Comment on investment income.'
  },
  { name: 'other-revenues', user: 200, partner: 0, comments: null }
];

export const FAKE_STEPS = [
  { label: 'Step 1 - label', content: 'Step 1 - content', displayed: true },
  { label: 'Step 2 - label', content: 'Step 2 - content', displayed: true },
  { label: 'Step 3 - label', content: 'Step 3 - content', displayed: true }
];
