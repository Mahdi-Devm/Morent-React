function LoadingPage() {
  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="flex items-center justify-center space-x-2">
        <div className="w-12 h-12 border-4 border-t-transparent border-blue-500 border-solid rounded-full animate-spin"></div>
        <span className="text-xl font-semibold text-gray-700">loading...</span>
      </div>
    </div>
  );
}

export default LoadingPage;
