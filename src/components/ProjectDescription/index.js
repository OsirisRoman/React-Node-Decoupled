import React from "react";

import "./ProjectDescription.css";

const ProjectDescription = () => {
  return (
    <>
      <h1 className="text-centered">Blog Posting Node-ReactJS App 🎉.</h1>
      <p className="card__content text-centered">
        A blog posting web app with several features as Login, routes, form
        protection, file management, error handling, etc.
      </p>
      <div className="landing">
        <article className="card info">
          <h1 className="card__header">Note</h1>
          <p className="m-auto">
            Given that the frontend and backend were deployed on different host
            providers. It will be required to wait for establishing the
            connection between these two only the first time you try to login or
            signup.
          </p>
        </article>
        <article className="card info">
          <h1 className="card__header">Credentials</h1>
          <div>
            <p>
              You can generate your own credentials with a fake email and
              password through the Signup form or use the testing credential.
            </p>
          </div>
          <div>
            <p className="card__content">
              <b>Email:</b> example@gmail.com
            </p>
            <p className="card__content">
              <b>Password:</b> 123456
            </p>
          </div>
        </article>
      </div>
    </>
  );
};

export default ProjectDescription;
