
import CountryList from './Country-list'
import {Provider} from 'react-redux'
import {createStore} from 'redux'

const initialState = {
  countryList: []
}

function reducer (state, action) {
  console.log(action)
  switch (action.type) {
  case 'SET_COUNTRY_LIST': {
    return{...state, countryList: action.payload}
  }  
  default: {
    return state
  }
  }
}

//recibe 3 parametros
const store = createStore(reducer, initialState) 

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <CountryList></CountryList>
      </div>
    </Provider>
  );
}

export default App;
