import { DotLoader } from "react-spinner-overlay";

const Spinner = () => {
  return (
    <div className="w-full h-full flex justify-center items-center">
      <DotLoader size={20} />
    </div>
  )
}

export default Spinner