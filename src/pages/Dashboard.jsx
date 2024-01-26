import { Button } from "antd";

import "../styles/dashboard.css";

function Dashboard() {
  return (
    // return one element or react fragment (convention)
    <>
      <h1 className="title-h1">Dashboard page</h1>
      <Button type="primary">Test</Button>
      <h2>h2</h2>
    </>
  );
}

export default Dashboard;
