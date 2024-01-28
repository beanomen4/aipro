import { Button } from "antd";

import { useMoveBack } from "../../hooks/useMoveBack";
import "./PageNotFound.scss";

function PageNotFound() {
  const moveBack = useMoveBack();

  return (
    <div className="not-found">
      <h1>Looking for something? 🔍</h1>
      <p>We could not find the page that you are looking for!</p>
      <Button type="primary" onClick={moveBack}>
        &larr; Head back
      </Button>
    </div>
  );
}

export default PageNotFound;
