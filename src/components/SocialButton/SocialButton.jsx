import { FaFacebook,FaTwitter,FaInstagram ,FaYoutube   } from "react-icons/fa";

const SocialButton = () => {
  return (
    <div >
      <div className="flex items-center gap-x-5">
        {/* Facebook */}
        <div className="border border-blue-900 p-3 rounded-full cursor-pointer">
            <a href="https://www.facebook.com/iyaRahmanirRahim" className="text-white text-2xl hover:text-blue-700 " rel="noreferrer" target="_blank">
                <FaFacebook/>
            </a>
        </div>
        {/* Twitter */}
        <div className="border border-blue-900 p-3 rounded-full cursor-pointer">
            <a href="https://twitter.com/AkashKhan334" className="text-white text-2xl hover:text-blue-700 " rel="noreferrer" target="_blank">
                <FaTwitter/>
            </a>
        </div>
        {/* Instagram */}
        <div className="border border-blue-900 p-3 rounded-full cursor-pointer">
            <a href="https://www.facebook.com/iyaRahmanirRahim" className="text-white text-2xl hover:text-blue-700 " rel="noreferrer" target="_blank">
                <FaInstagram/>
            </a>
        </div>
        {/* YouTube */}
        <div className="border border-blue-900 p-3 rounded-full cursor-pointer">
            <a href="https://www.youtube.com/@user-iy3vf6gy3m/videos" className="text-white text-2xl hover:text-blue-700 " rel="noreferrer" target="_blank">
                <FaYoutube/>
            </a>
        </div>
      </div>
    </div>
  )
}

export default SocialButton
