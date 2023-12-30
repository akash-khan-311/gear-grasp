/* eslint-disable react/prop-types */
import './MyBtn.css'

const MyBtn = ({label}) => {
  return (
    <div>
      <button className="button">
        <p className='uppercase'>{label}</p>
      </button>
    </div>
  );
};

export default MyBtn;
