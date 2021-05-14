import React from 'react';
import ReactDOM from 'react-dom';
import { createServer, Model } from 'miragejs';
import { App } from './App';

createServer({
  models: {
    transaction: Model
  },

  seeds(server) {
    server.db.loadData({
      transactions: [
        {
          id: 1,
          title: 'Desenvolvimento de website',
          type: 'deposit',
          amount: 3500,
          category: 'Desenvolvimento',
          createdAt: new Date('2021-01-12 09:00:00')
        },
        {
          id: 2,
          title: 'Anúncios para empresa',
          type: 'withdraw',
          amount: 500,
          category: 'Marketing',
          createdAt: new Date('2021-01-20 09:00:00')
        },
        {
          id: 3,
          title: 'Pagamento GitHub',
          type: 'withdraw',
          amount: 120,
          category: 'Gestão',
          createdAt: new Date('2021-01-21 09:00:00')
        },
      ]
    })
  },

  routes() {
    this.namespace = 'api';

    this.get('/transactions', () => {
      return this.schema.all('transaction');
    })

    this.post('/transactions', (schema, request) => {
      const data = JSON.parse(request.requestBody);
      return schema.create('transaction', {
        ...data,
        createdAt: new Date()
      });
    })
  }
})

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);
