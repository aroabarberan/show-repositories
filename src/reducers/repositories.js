

export default (state = [], action) => {
  switch (action.type) {
    case 'SHOW_REPOSITORIES':
      return [...state];

    case 'ADD_REPOSITORY':
      return [...state, action.payload];

    default:
      return state;
  }
}