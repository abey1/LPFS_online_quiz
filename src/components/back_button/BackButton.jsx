import { useNavigate } from "react-router-dom";
const BackButton = () => {
  const navigate = useNavigate();
  const handleBack = () => {
    navigate(-1);
  };
  return (
    <div className="w-50 md:w-100 lg:w-150 py-4">
      <button className=" p-4 ">
        <span
          onClick={handleBack}
          className="text-2xl hover:cursor-pointer hover:text-blue-500 transition-all duration-200 ease-in-out"
        >
          &larr; Back
        </span>
      </button>
    </div>
  );
};

export default BackButton;
