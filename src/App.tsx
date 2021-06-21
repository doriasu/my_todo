import { FC, useState } from 'react';
import { Provider } from 'react-redux';
import store from './store';
import CardBoard from './components/CardBoard';
import Header from './components/Header';
import FormWrapper from './components/FormWrapper';
const App: FC = () => {
  const [exist, setExist]= useState<boolean>(false);
  const chExist = ()=>{
    setExist(exist=>{return(!exist)});
  }
  return (
    <>
      <Provider store={store}>
        <div className="flex flex-col items-center">
          <Header />
          <FormWrapper exist={exist} />
          <CardBoard />
          <button onClick={chExist}>ADD TODO</button>
        </div>
      </Provider>
    </>
  )
}
export default App;