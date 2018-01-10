import constants from 'app/constants';

const consumptionQs = [
  {
    no: 1,
    question: 'Who is your current supplier?',
    answers: [
      'SP',
      'Retailer',
    ],
    additional_options: [],
    required: true,
    required_question: null,
  },
  {
    no: 2,
    question: 'Who is your retailer?',
    answers: [],
    additional_options: [],
    required: true,
    required_question: {
      no: 1,
      answer: 'Retailer',
    },
  },
  {
    no: 3,
    question: 'How soon can you switch?',
    answers: [
      '< 3 Months',
      '3 to 6 Months',
      '> 06 Months',
    ],
    additional_options: [],
    required: true,
    required_question: null,
  },
  {
    no: 4,
    question: 'What is your average monthly usage?',
    answers: [],
    additional_options: [
      'S$',
      'KWh',
    ],
    required: false,
    required_question: null,
  },
  {
    no: 5,
    question: 'Preferred Contact Method',
    answers: constants.PREFERED_CONTACT_METHODS,
    additional_options: [],
    required: false,
    required_question: null,
  }
];

export default consumptionQs;
