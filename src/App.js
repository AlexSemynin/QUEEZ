import React from 'react';
import './App.module.css';
import Quiz from './containers/Quiz/Quiz';
import Layout from './hightLoaderComponents/Layout/Layout';

class App extends React.Component {
  render(){
    return (
      <Layout>
        <Quiz/>
      </Layout>
    );
  }
}

export default App;
