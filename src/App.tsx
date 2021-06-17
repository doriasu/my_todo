import {FC} from 'react';
import { Provider } from 'react-redux';
import store from './store';
import Card from './components/Card';
const App:FC=()=>{
  return(
    <>
      <Provider store={store}>
        HELLO
        <Card />
      </Provider>
    </>
  )
}
export default App;