export default ({ dispatch }) => next => action => {
  // Check to see if the action has a promise on its payload property
  // if it does, then wait for it to resolve
  // if it doesnt, then wait for the next middleware
  if (!action.payload || !action.payload.then) {  // is this a promise?
    return next(action);
  }

  action.payload.then(function(response) {
    const newAction = { ...action, payload: response };
    dispatch(newAction);
  });
};

// export default function({ dispatch }) {
//   return function(next) {
//     return function(action) {
//
//     }
//   }
// }
