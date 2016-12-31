export default function courseReducer(state = [], action){
  switch(action.type){
    case 'CREATE_COURSE':
      return [...state,
        Object.assign({}, action.course)
      ]; //returns brand new state copy of action passed in

      default:
      return state;
  }
}
