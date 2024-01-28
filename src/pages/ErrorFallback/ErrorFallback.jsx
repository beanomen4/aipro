import { Button } from "antd";
import "./ErrorFallback.scss";

function ErrorFallback({ error, resetErrorBoundary }) {
  return (
    <div className="error-fallback">
      <h1>Something went wrong 😕</h1>
      <p>{error.message}</p>
      <Button type="primary" onClick={resetErrorBoundary}>
        Try again
      </Button>
    </div>
  );
}

export default ErrorFallback;
