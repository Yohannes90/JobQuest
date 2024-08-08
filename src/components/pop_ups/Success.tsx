interface SuccessProps{
    msg:string;
}

const Success:React.FC<SuccessProps> = ({msg}) => {
  return (
    <div className="fixed flex justify-center  w-full z-50 right-1/2 translate-x-1/2 top-32 backdrop-blur-sm p-5 rounded-md">
      <div role="alert" className="alert alert-success bg-green-500 z-50 sm:w-1/2 top-32 ">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="h-6 w-6 shrink-0 stroke-current"
        fill="none"
        viewBox="0 0 24 24"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
        />
      </svg>
      <span>{msg}</span>
    </div>
    </div>
  );
};

export default Success;
