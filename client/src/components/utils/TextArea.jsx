
const TextArea = ({title, required,name,value,onChange}) => {
    return (
      <div className='w-full '>
          <label
    htmlFor={title}
    className="relative block rounded-md"
    
  >
    {title}
    </label>
    <textarea
     
      id={title}
      className="peer py-1 px-2 w-full border-b-2 resize-none bg-transparent  outline-none "
      
      name={name}
      value={value}
      onChange={onChange}
      required={required}
    />
  
   
      </div>
    )
  }
  
  export default TextArea