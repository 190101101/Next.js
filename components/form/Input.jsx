
const Input = (props) => {
  const {type, errorMessage, touched, placeholder, ...inputs} = props;
  console.log(errorMessage);

  return (
    <div className="w-full">
        <label className="relative block cursor-text w-full">
            <input 
              type={type} 
              {...inputs} 
              className={` 
                h-14 w-full border outline-none p-4 peer
                ${type !== 'datetime-local' && 'p-2'} 
                ${touched && errorMessage ? 'border-danger' : 'border-primary'} 
              `} required
            />
            {type !== 'datetime-local' &&
              <span className="absolute top-0 left-0 px-4 text-sm flex items-center h-full transition-all peer-focus:h-7 peer-focus:text-xs peer-valid:h-7 peer-valid:text-xs">{placeholder}</span>
            }
        </label>
        {touched && <span className="text-xs text-danger">{errorMessage}</span>}
    </div>
  )
}

export default Input