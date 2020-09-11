import React from "react";

const Form = (props) => {
  return (
    <div className="container text-center">
      <div>{props.error ? error() : null}</div>
      <form onSubmit={props.loadweather}>
        <div className="row ml-5">
          <div className="col-md-3 offset-md-2">
            <input
              className="form-control"
              type="text"
              name="city"
              autoComplete="off"
              style={{
                border: 0,
                borderBottom: "2px solid black",
                borderTop: "2px solid black",
                backgroundColor: "transparent",
                boxShadow: "none !important",
              }}
              placeholder="City Name"
            />
          </div>
          <div className="col-md-3">
            <input
              className="form-control"
              type="text"
              name="country"
              autoComplete="off"
              style={{
                border: 0,
                borderBottom: "2px solid black",
                borderTop: "2px solid black",
                backgroundColor: "transparent",
                boxShadow: "none !important",
              }}
              placeholder="Country Name"
            />
          </div>
          <div className="col-md-3 mt-md-0 text-md-left">
            <button className="btn btn-warning">Get Weather</button>
          </div>
        </div>
      </form>
    </div>
  );
};

function error() {
  return (
    <div className="alert alert-danger mx-5" role="alert">
      Please Enter city and country
    </div>
  );
}

export default Form;
