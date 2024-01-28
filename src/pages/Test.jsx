import { useEffect } from "react";

import { getShop } from "../services/apiShops";

function Test() {
  useEffect(() => {
    getShop().then((data) => console.log(data));
  }, []);

  return <div>Test page</div>;
}

export default Test;
