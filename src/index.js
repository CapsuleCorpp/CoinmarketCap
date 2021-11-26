import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import AppBar from './Component/AppBar/appBar';
import { configureStore  } from '@reduxjs/toolkit'
import { fetchUserById } from './redux/test';
import { Provider } from 'react-redux'
import { reducer } from './redux/test';
export const store = configureStore({
  reducer: {
   reducer
  },
})
ReactDOM.render(
    <Provider store={store}>
      <AppBar />
    </Provider>

  ,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
