import Button from "./Button";

function ErrorFallback({ error, resetErrorBoundary }) {
  return (
    <>
      <h1>Something went wrong 😕</h1>
      <p>{error.message}</p>
      <Button onClick={resetErrorBoundary}>Try again</Button>
    </>
  );
}

export default ErrorFallback;
