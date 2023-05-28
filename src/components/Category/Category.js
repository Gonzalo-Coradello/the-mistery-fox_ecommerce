const Category = ({ title, icon, slug, handleClick }) => {
  return (
    <div
      className='category relative cursor-pointer hover:scale-105 transition-all duration-500'
      onClick={() => handleClick(slug)}
    >
      <div className='h-[122px] w-[90px] rounded-md bg-[#D9D9D9]/10 grid justify-center items-center'>
        {icon}
      </div>
      <h4 className='font-medium text-sm max-w-[90px] mx-auto leading-tight mt-2'>
        {title}
      </h4>
    </div>
  )
}

export default Category
