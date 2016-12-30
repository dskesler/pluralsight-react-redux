export default function courseReducer(state = [], action){
  switch(action.type){
    case 'CREATE_COURSE':
      return [...state,
      Object.assgin({}, action.course)
      ];

      default:
      return state;
  }
}
