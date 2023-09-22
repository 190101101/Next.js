
const Input = () => {
  return (
    <div className="w-full">
        <label className="relative block cursor-text w-full">
            <input type="text" className="h-14 w-full border border-primary outline-none px-4 peer p-2" required/>
            <span className="absolute top-0 left-0 px-4 text-sm flex items-center h-full transition-all peer-focus:h-7 peer-focus:text-xs peer-valid:h-7 peer-valid:text-xs">Email</span>
        </label>
    </div>
  )
}

export default Input