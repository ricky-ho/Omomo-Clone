import { Link } from "react-router-dom";

import "./style.scss";

const NotFoundPage = () => {
  return (
    <main id="page-not-found">
      <img
        src={`${process.env.PUBLIC_URL}/page-not-found.svg`}
        alt="Page not found"
      />
      <h1>Page not found</h1>
      <p>The page you are looking for does not exist or has been moved.</p>
      <Link to="/">BACK HOME</Link>
    </main>
  );
};

export default NotFoundPage;
