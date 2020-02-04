import React, { Component } from "react";
import { render } from "react-dom";
import CustomForm from "./components/form";

import "bootstrap/dist/css/bootstrap.min.css";
import { formConfig } from "./form";

interface AppProps {}
interface AppState {
  name: string;
}

class App extends Component<AppProps, AppState> {
  constructor(props) {
    super(props);
    this.state = {
      name: "React"
    };
  }

  render() {
    return (
      <React.Fragment>
        <div className="jumbotron jumbotron-fluid text-center">
          <div className="display-4">Solicitud de arrendamiento</div>
        </div>
        <div className="container">
          <CustomForm
            fields={formConfig}
            handleSubmit={e => {
              // e.preserve();
              e.preventDefault();
              const form: HTMLFormElement = e.target;

              const formData = new FormData(form);
              // // Display the key/value pairs
              for (var pair of formData.entries()) {
                console.log(pair[0] + ", " + pair[1]);
              }
                console.log(Object.fromEntries(formData.entries()));
            }}
          />
        </div>
      </React.Fragment>
    );
  }
}

render(<App />, document.getElementById("root"));
