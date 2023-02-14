import React from "react";
import { Link } from "react-router-dom";

const HomePage = () => {
  return (
    <div className="container bg-secondary mt-5 p-5">
      <div className="card bg-dark text-white m-5 border border-white border-4">
        <div className="card-body">
          <div className="mx-auto  text-center">
            <div className="fs-1 text-center">Grootan's Frontend Task</div>
            <div className="w-100  text-center ">
              <Link className="btn bg-white text-dark px-4 py-2" to="/register">
                <b>Register</b>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
