import { VscLoading } from "react-icons/vsc";

import "./style.scss";

const Loader = () => {
  return (
    <div id="loading-icon">
      <VscLoading size={75} />
      <span role="status" aria-label="Loading menu..."></span>
    </div>
  );
};

export default Loader;
