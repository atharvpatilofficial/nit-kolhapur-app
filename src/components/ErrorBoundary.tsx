import React, { Component, ErrorInfo, ReactNode } from 'react';

interface Props {
  children: ReactNode;
}

interface State {
  hasError: boolean;
  error: Error | null;
}

export class ErrorBoundary extends Component<Props, State> {
  public override state: State = {
    hasError: false,
    error: null
  };

  public static getDerivedStateFromError(error: Error): State {
    return { hasError: true, error };
  }

  public override componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    console.error('Uncaught error in NIT Kolhapur website:', error, errorInfo);
  }

  public override render() {
    if (this.state.hasError) {
      return (
        <div className="min-h-screen flex items-center justify-center bg-slate-900 text-white p-6">
          <div className="max-w-md w-full bg-slate-800 border border-slate-700 rounded-2xl p-6 text-center space-y-4 shadow-2xl">
            <div className="w-12 h-12 bg-yellow-400 text-slate-950 font-black rounded-full flex items-center justify-center mx-auto text-xl">
              !
            </div>
            <h2 className="text-xl font-bold">New Institute of Technology, Kolhapur</h2>
            <p className="text-sm text-slate-300">
              An unexpected display issue occurred. Please click below to reload the portal.
            </p>
            {this.state.error && (
              <pre className="text-left text-xs bg-slate-950 p-3 rounded-lg overflow-x-auto text-yellow-300 border border-slate-800">
                {this.state.error.message}
              </pre>
            )}
            <button
              onClick={() => window.location.reload()}
              className="px-5 py-2.5 bg-yellow-400 hover:bg-yellow-300 text-blue-950 font-bold rounded-xl text-sm transition cursor-pointer"
            >
              Reload Page
            </button>
          </div>
        </div>
      );
    }

    return this.props.children;
  }
}
