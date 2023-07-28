import React from 'react';
import ReactDOM from 'react-dom/client';
import {App} from './App';
import reportWebVitals from './reportWebVitals';
import {createServer} from 'miragejs';

createServer({
  routes(){
    this.namespace = 'api';
    this.get('transactions', () => {
      return [
        {
          id: 1,
          title: "transactions 1",
          amount: 400,
          type:"deposit",
          category:"food",
          createAt:new Date()
        },
        {
          id: 2,
          title: "transactions 2",
          amount: 700,
          type:"withdraw",
          category:"food",
          createAt:new Date()
        },{
          id: 3,
          title: "transactions 3",
          amount: 12000,
          type:"deposit",
          category:"developer",
          createAt:new Date()
        }
      ]
    })
  }
})

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

reportWebVitals();
