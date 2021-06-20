import { FC } from 'react';
import { Provider } from 'react-redux';
import store from './store';
import CardBoard from './components/CardBoard';
import Form from './components/Form'
import Header from './components/Header';
const App: FC = () => {
  return (
    <>
      <Provider store={store}>
        <div className="flex flex-col items-center">
          <Header />
          <CardBoard />
          <Form />
        </div>
      </Provider>
    </>
  )
}
export default App;