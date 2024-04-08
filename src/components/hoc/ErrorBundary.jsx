import { Error } from "../common/error/Error";
import { ErrorBoundary } from "../core/error-boundary/ErrorBoundary";

const ErrorBoundaryHoc = (props) => {
  const { children, errorMessage } = props;
  return (
    <ErrorBoundary fallback={<Error message={errorMessage} />}>
      {children}
    </ErrorBoundary>
  );
};
export default ErrorBoundaryHoc;
