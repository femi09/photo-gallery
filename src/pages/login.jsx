import React, { Component } from "react";
import {
  unsplashAuthApi,
  client_Id,
  redirect_uri,
  response_type,
  scope,
} from "../config.json";

class Login extends Component {
  state = {
    visible: false,
  };

  OpenModal = () => {
    this.setState({ visible: true });
  };

  closeModal = () => {
    this.setState({ visible: false });
  };

  render() {
    const { visible } = this.state;
    return (
      <React.Fragment>
        <div className="mx-auto px-4 mt-8">
          <button
            style={{ transition: "all .15s ease" }}
            onClick={this.OpenModal}
            className="bg-teal-500 hover:bg-teal-800 text-white py-2 px-4 rounded outline-none focus:outline-none"
          >
            Login
          </button>
        </div>

        {visible ? (
          <>
            <div className="relative max-w-xl w-auto my-6 mx-auto inset-0 z-50 flex-col items-center rounded">
              <div>
                <div className="flex items-start text-white bg-teal-500 justify-between p-5 border-b border-solid border-gray-300 rounded-t">
                  <h1 className="font-semibold text-xl">Spectrum</h1>
                  <button
                    onClick={this.closeModal}
                    className="p-1 ml-auto bg-transparent border-0 opacity-5 float-right leading-none font-bold font-semibold outline-none focus:outline-none"
                  >
                    <span className="bg-transparent text-white opacity-5 h-6 w-6 text-2xl block">
                      ×
                    </span>
                  </button>
                </div>
                <div className="flex items-center bg-gray-200 py-8">
                  <a
                    href={`${unsplashAuthApi}?client_id=${client_Id}&redirect_uri=${redirect_uri}&response_type=${response_type}&scope=${scope}`}
                    className="mx-auto bg-teal-500 hover:bg-teal-800 text-white px-6 py-3 font-bold border-b-4 border-yellow-200 hover:border-b-500 rounded outline-none focus:outline-none"
                  >
                    Login With Unsplash
                  </a>
                </div>
              </div>
            </div>
            <div className="opacity-50 fixed inset-0 z-40 bg-black"></div>
          </>
        ) : null}
      </React.Fragment>
    );
  }
}

export default Login;
