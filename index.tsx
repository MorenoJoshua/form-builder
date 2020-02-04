import React, { Component } from "react";
import { render } from "react-dom";
import CustomForm from "./components/form";
import { submitForm } from "./firebase";
import "bootstrap/dist/css/bootstrap.min.css";
import { formConfig } from "./form";
import {Mapa} from './image';

interface AppProps {}
interface AppState {
  status: "pre" | "post" | "submitting";
}

class App extends Component<AppProps, AppState> {
  constructor(props) {
    super(props);
    this.state = {
      status: "post"
    };
  }

  render() {
    return (
      <React.Fragment>
        <div className="jumbotron jumbotron-fluid text-center">
          <div className="display-4">Solicitud de arrendamiento</div>
        </div>
        <div className="container">
          {this.state.status === "pre" && (
            <CustomForm
              fields={formConfig}
              handleSubmit={e => {
                e.preventDefault();
                const formData = new FormData(e.target);
                submitForm(Object.fromEntries(formData.entries()))
                  .then(() => this.setState({ status: "post" }))
                  .catch(() => alert("Hubo un error"));
              }}
            />
          )}
          {this.state.status === "post" && (
            <>
              <div className="display-4 text-success">
                Tu solicitud ha sido enviada
              </div>
              <div>Nos pondremos en contacto contigo lo antes posible</div>
              <div>Ubicacion de casa: <a href="https://goo.gl/maps/fhV2i1iWHZd4jnn97"><Mapa/>(Click para ver en Google Maps)</a></div>
              <button
                className="btn btn-warning mt-3"
                onClick={() => window.close()}
              >
                Cerrar
              </button>
            </>
          )}
        </div>
      </React.Fragment>
    );
  }
}

render(<App />, document.getElementById("root"));
