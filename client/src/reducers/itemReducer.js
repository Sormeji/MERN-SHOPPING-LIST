import { v4 as uuid } from 'uuid';

const initialState = {
  items: [   // ✅ use "items" plural
    { id: uuid(), name: 'Eggs' },
    { id: uuid(), name: 'Milk' },
    { id: uuid(), name: 'Steak' },
    { id: uuid(), name: 'Water' }
  ]
};

export default function (state = initialState, action) {
  switch (action.type) {
    case 'GET_ITEMS':
      return {
        ...state
      };
    default:
      return state;
  }
}
