import {FC} from 'react';
import { Provider } from 'react-redux';
import store from './store';
import CardBoard from './components/CardBoard';
import Form from './components/Form'
const App:FC=()=>{
  return(
    <>
      <Provider store={store}>
        HELLO
        <CardBoard />
        <Form />
      </Provider>
    </>
  )
}
export default App;