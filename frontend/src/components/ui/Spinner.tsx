const Spinner = () => {
  return (
    <div className="flex items-center justify-center h-screen-90">
      <div className="relative h-20 w-20">
        <div className="absolute top-0 left-0 right-0 bottom-0 border-4 border-primary-200 rounded-full"></div>
        <div className="absolute top-0 left-0 right-0 bottom-0 border-4 border-t-accent-600 rounded-full animate-spin"></div>
      </div>
    </div>
  );
};

export default Spinner;