const Error = () => {
  return (
    <>
      <div className="w-80 flex flex-col justify-center items-center gap-8 text-white text-lg text-center my-20 bg-zinc-950 bg-opacity-60 rounded-lg p-5 relative z-1">
        <img src="/error.svg" alt="error" className="w-2/6" />
        <p>Sorry. No Data Found</p>
      </div>
    </>
  )
}

export default Error