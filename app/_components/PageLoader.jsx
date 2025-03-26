export default function PageLoader() {
  return (
    <div className="w-full  h-screen absolute -z-2 flex justify-center items-center flex-col gap-2">
      <div className="rounded-full animate-spin h-10 w-10 border-b-1 border-t-1 border-white"></div>
      <span>Loading...</span>
    </div>
  );
}
