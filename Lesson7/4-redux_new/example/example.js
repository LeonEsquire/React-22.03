import {createStore} from 'redux';

const reducer = (state=0, action) => {
	if (action.type === 'INC') {
		return state + 1;
	} else if (action.type === "DEC") {
		return state - 1;
	}
	return state;
}

const store = createStore(reducer);

store.subscribe(() => {
  console.log('store изменился', store.getState())
})

store.dispatch({type: "INC"})
store.dispatch({type: "INC"})
store.dispatch({type: "INC"})
store.dispatch({type: "DEC"})
store.dispatch({type: "DEC"})
store.dispatch({type: "DEC"})


/////////



import {applyMiddleware, createStore} from 'redux';

const reducer = (state={}, action) => {
	return state;
}

const middleware = applyMiddleware();
const store = createStore(reducer, middleware);


store.dispatch({type: "FOO"})



/////

import { combineReducers, createStore } from 'redux';

const initialState = {
  name: 'Lev',
  age: 27
}

const userReducer = (state=initialState, action) => {
  switch (action.type) {
    case "CHANGE_NAME":
      return {...state, name: action.data};
    case "CHANGE_AGE":
      return {...state, age: action.data};
  }
  return state;
}

const tweetsReducer = (state=[], action) => {
  return state;
}

const reducers = combineReducers({
  user: userReducer,
  tweets: tweetsReducer
});

const store = createStore(reducers);

store.subscribe(() => {
  console.log('store изменился', store.getState());
})

store.dispatch({type: "CHANGE_NAME", data: 'Alice'});
store.dispatch({type: "CHANGE_AGE", data: 35});



///////

import {applyMiddleware, createStore} from 'redux';

const reducer = (state=0, action) => {
	if (action.type === 'INC') {
		return state + 1;
	} else if (action.type === "DEC") {
		return state - 1;
	} else if (action.type === "E") {
    throw new Error();
  }
	return state;
}

const logger = (store) => (next) => (action) => {
  console.log('сработал action', action);
  next(action)
}

const error = (store) => (next) => (action) => {
  try {
    next(action)
  } catch (e) {
    console.log("AAAAAAA!!!!!");
  }
}


const middleware = applyMiddleware(logger, error)

const store = createStore(reducer, middleware);

store.subscribe(() => {
  console.log('store изменился', store.getState())
})

store.dispatch({type: "INC"})
store.dispatch({type: "INC"})
store.dispatch({type: "INC"})
store.dispatch({type: "DEC"})
store.dispatch({type: "DEC"})
store.dispatch({type: "DEC"})
store.dispatch({type: "E"})