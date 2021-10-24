import { Link } from "react-router-dom";
import { BsBagCheckFill } from "react-icons/bs";

import "./style.scss";

const CheckoutSuccess = () => {
  return (
    <main id="checkout-complete">
      <div>
        <BsBagCheckFill size={50} />
        <h1>Order confirmed!</h1>
        <p>Thank you for checking out this demo project!</p>
        <div>
          <a
            href="https://github.com/ricky-ho/Omomo-Clone"
            target="_blank"
            rel="noopener noreferrer"
          >
            View Project Repo
          </a>
          <Link to="/menu">Continue shopping</Link>
        </div>
      </div>
    </main>
  );
};

export default CheckoutSuccess;
