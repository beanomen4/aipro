import { Button } from "antd";

function ErrorFallback({ error, resetErrorBoundary }) {
  return (
    <>
      <h1>Something went wrong 😕</h1>
      <p>{error.message}</p>
      <Button type="primary" onClick={resetErrorBoundary}>Try again</Button>
    </>
  );
}

export default ErrorFallback;
