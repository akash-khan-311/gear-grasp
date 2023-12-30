/* eslint-disable react/prop-types */
import img from '../../assets//Images/subt.png'

const Subtitle = ({text}) => {
  return (
    <div className='flex items-center w-full h-full'>
        <img src={img}  className='w-10 h-full ' alt="" />
      <span className="text-lg md:text-xl uppercase text-white">{text}</span>
    </div>
  )
}

export default Subtitle
