import {
  createContext,
  Component,
  isValidElement,
  createElement,
  useContext,
  useState,
  useMemo,
  forwardRef,
} from "react";

const ErrorBoundaryContext = createContext(null);

const initialState = {
  didCatch: false,
  error: null,
};

class ErrorBoundary extends Component {
  constructor(props) {
    super(props);
    this.resetErrorBoundary = this.resetErrorBoundary.bind(this);
    this.state = initialState;
  }

  static getDerivedStateFromError(error) {
    return {
      didCatch: true,
      error,
    };
  }

  resetErrorBoundary(...args) {
    const { error } = this.state;
    if (error !== null) {
      const { onReset } = this.props;
      onReset?.({
        args,
        reason: "imperative-api",
      });
      this.setState(initialState);
    }
  }

  componentDidCatch(error, info) {
    const { onError } = this.props;
    onError?.(error, { componentStack: info.componentStack });
  }

  componentDidUpdate(prevProps, prevState) {
    const { didCatch } = this.state;
    const { resetKeys } = this.props;

    if (
      didCatch &&
      prevState.error !== null &&
      hasArrayChanged(prevProps.resetKeys, resetKeys)
    ) {
      const { onReset } = this.props;
      onReset?.({
        //@ts-ignore
        next: resetKeys,
        prev: prevProps.resetKeys,
        reason: "keys",
      });
      this.setState(initialState);
    }
  }

  render() {
    const { children, fallbackRender, FallbackComponent, fallback } =
      this.props;
    const { didCatch, error } = this.state;
    let childToRender = children;

    if (didCatch) {
      const props = {
        error,
        resetErrorBoundary: this.resetErrorBoundary,
      };

      if (isValidElement(fallback)) {
        childToRender = fallback;
      } else if (typeof fallbackRender === "function") {
        childToRender = fallbackRender(props);
      } else if (FallbackComponent) {
        childToRender = createElement(FallbackComponent, props);
      } else {
        console.error(
          "react-error-boundary requires either a fallback, fallbackRender, or FallbackComponent prop"
        );
        throw error;
      }
    }

    return createElement(
      ErrorBoundaryContext.Provider,
      {
        value: {
          didCatch,
          error,
          resetErrorBoundary: this.resetErrorBoundary,
        },
      },
      childToRender
    );
  }
}

function hasArrayChanged(a = [], b = []) {
  return (
    a.length !== b.length || a.some((item, index) => !Object.is(item, b[index]))
  );
}

function assertErrorBoundaryContext(value) {
  if (
    value == null ||
    typeof value.didCatch !== "boolean" ||
    typeof value.resetErrorBoundary !== "function"
  ) {
    throw new Error("ErrorBoundaryContext not found");
  }
  return true;
}

function useErrorBoundary() {
  const context = useContext(ErrorBoundaryContext);
  assertErrorBoundaryContext(context);

  const [state, setState] = useState({
    error: null,
    hasError: false,
  });

  const memoized = useMemo(
    () => ({
      resetErrorBoundary: () => {
        context?.resetErrorBoundary();
        setState({
          error: null,
          hasError: false,
        });
      },
      showBoundary: (error) =>
        setState({
          error,
          hasError: true,
        }),
    }),
    [context]
  );

  if (state.hasError) {
    throw state.error;
  }

  //@ts-ignore
  return memoized;
}

function withErrorBoundary(component, errorBoundaryProps) {
  const Wrapped = forwardRef((props, ref) =>
    createElement(
      ErrorBoundary,
      errorBoundaryProps,
      createElement(component, {
        ...props,
        ref,
      })
    )
  );

  // Format for display in DevTools
  const name = component.displayName || component.name || "Unknown";
  Wrapped.displayName = "withErrorBoundary(".concat(name, ")");
  return Wrapped;
}

export {
  ErrorBoundary,
  ErrorBoundaryContext,
  useErrorBoundary,
  withErrorBoundary,
};
