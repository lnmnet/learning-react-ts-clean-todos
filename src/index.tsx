import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom'
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { ApolloClient, ApolloProvider, createHttpLink, InMemoryCache } from '@apollo/client';
import { RecoilRoot } from 'recoil';

export const link = createHttpLink({
  uri: 'http://localhost:4000'
})

const client = new ApolloClient({
  cache: new InMemoryCache(),
  link
})

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <BrowserRouter>
    <ApolloProvider client={client}>
      <RecoilRoot>
        <React.StrictMode>
          <App />
        </React.StrictMode>
      </RecoilRoot>
    </ApolloProvider>
  </BrowserRouter>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
