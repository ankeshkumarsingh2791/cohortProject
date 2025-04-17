
const TextArea = ({title, required,name,value,onChange}) => {
    return (
      <div className='w-full '>
          <label
    htmlFor={title}
    className="relative block rounded-md border border-gray-200 shadow-xs focus-within:border-blue-600 focus-within:ring-1 focus-within:ring-blue-600"
  >
    <textarea
     
      id={title}
      className="peer py-1 px-2 w-full border-none outline-1 rounded-md resize-none bg-transparent placeholder-transparent focus:border-transparent focus:ring-0 focus:outline-hidden"
      placeholder={title}
      name={name}
      value={value}
      onChange={onChange}
      required={required}
    />
  
    <span
      className="pointer-events-none absolute start-2.5 top-0 -translate-y-1/2 bg-white p-0.5 text-xs text-gray-700 transition-all peer-placeholder-shown:top-1/2 peer-placeholder-shown:text-sm peer-focus:top-0 peer-focus:text-xs"
    >
      {title}
    </span>
  </label>
      </div>
    )
  }
  
  export default TextArea