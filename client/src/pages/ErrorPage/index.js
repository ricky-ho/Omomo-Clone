import { Link } from "react-router-dom";

import "./style.scss";

const ErrorPage = () => {
  return (
    <main className="page-not-found">
      <img
        src={`${process.env.PUBLIC_URL}/page-not-found.svg`}
        alt="Page not found"
        className="not-found-img"
      />
      <h1>Page not found</h1>
      <p>The page you are looking for does not exist or has been moved.</p>
      <Link to="/" className="link link-black">
        GO BACK HOME
      </Link>
    </main>
  );
};

export default ErrorPage;
