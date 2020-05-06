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
  { label: 'Step 1 - label', content: 'Step 1 - content', displayed: true },
  { label: 'Step 2 - label', content: 'Step 2 - content', displayed: true },
  { label: 'Step 3 - label', content: 'Step 3 - content', displayed: true }
];
