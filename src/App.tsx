import {FC} from 'react';
import { Provider } from 'react-redux';
import store from './store';
import CardBoard from './components/CardBoard';
const App:FC=()=>{
  return(
    <>
      <Provider store={store}>
        HELLO
        <CardBoard />
      </Provider>
    </>
  )
}
export default App;