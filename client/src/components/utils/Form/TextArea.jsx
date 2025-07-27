const TextArea = ({ label, ...props }) => {
    return (
      <div className="flex flex-col space-y-2">
        <label className="text-white text-sm font-medium">{label}</label>
        <textarea
          {...props}
          rows={5}
          className="w-full px-4 py-3 bg-transparent border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#A685E2] focus:border-[#A685E2] transition duration-200"
        ></textarea>
      </div>
    );
  };
  
  export default TextArea;
  