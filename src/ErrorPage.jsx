import React from "react";
import { useRouteError } from "react-router-dom";

export default function ErrorPage() {
  const error = useRouteError();
  console.error(error);

  return (
    <div id="error__page">
      <div className="error__page-title">
        <h1>{error.data}</h1>
      </div>
      <h2 className="error__page-status">{error.status}</h2>
      <p className="error__page-message">
        {error.statusText }: {error.error.message}
      </p>
    </div>
  );
}
