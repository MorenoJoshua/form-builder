import React, { Component } from 'react';
import { render } from 'react-dom';
import CustomForm from './components/form';

import 'bootstrap/dist/css/bootstrap.min.css';
import { formConfig } from './form';

interface AppProps { }
interface AppState {
  name: string;
}

class App extends Component<AppProps, AppState> {
  constructor(props) {
    super(props);
    this.state = {
      name: 'React'
    };
  }

  render() {
    return (
      <React.Fragment>
        <div className="jumbotron jumbotron-fluid text-center">
          <div className="display-4">Form Demo abc</div>
        </div>
        <div className="container">
          <CustomForm fields={formConfig} handleSubmit={e => console.log(e)} />
        </div>
      </React.Fragment>
    );
  }
}

render(<App />, document.getElementById('root'));
