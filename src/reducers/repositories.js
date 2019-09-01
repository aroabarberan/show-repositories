
export default (state = [], action) => {
  switch (action.type) {
    case 'SHOW_REPOSITORIES':
      return [...state];

    case 'ADD_REPOSITORIES':
      return [...state, ...action.payload.map(repository => ({ ...repository }))];

    default:
      return state;
  }
}