import { DotLoader } from "react-spinner-overlay";

const Spinner = () => {
  return (
    <div className="w-full h-full flex justify-center items-center">
      <DotLoader 
        size={20}
        color="rgba(9, 9, 11, 0.6)"
      />
    </div>
  )
}

export default Spinner