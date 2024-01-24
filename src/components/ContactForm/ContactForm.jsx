import image from "../../assets/Images/About-Us-Image-8.jpg";
import SectionTitle from "../SectionTitle/SectionTitle";
import Subtitle from "../SubTitle/Subtitle";

const ContactForm = () => {
  return (
    <div className="container mx-auto px-5 lg:px-0 py-10">
      <div className="flex justify-center ">
        <img src={image} alt="" />
        <div className="lg:ml-10 ml-0 text-white space-y-7">
          <Subtitle text={"question form"} />
          <SectionTitle title={"form to fire your"} secondTitle={"questions"} />
          <p className="font-light ">
            Engage with GearGrasp through our Question Form—a dynamic platform
            designed for you to ignite inquiries, share curiosities, and spark
            conversations. Fire away your questions, and let the journey of
            exploration begin!
          </p>
          <div>
            <form action="#" className="space-y-8">
              <div>
                <input
                  type="text"
                  className="shadow-sm bg-transparent border border-gray-300 text-white   focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 placeholder-white dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light"
                  placeholder="Your Name"
                  required
                />
              </div>
              <div>
                <input
                  type="email"
                  className="block p-3 w-full  text-white bg-transparent  border border-gray-300 shadow-sm focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 placeholder-white dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light"
                  placeholder="Email"
                  required
                />
              </div>
              <div className="sm:col-span-2">
                <textarea
                  id="message"
                  rows={7}
                  className="block p-2.5 w-full  text-white bg-transparent  shadow-sm border border-gray-300 focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 placeholder-white dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                  placeholder="Write Your Quenstions In Details"
                  defaultValue={""}
                />
              </div>
              <button
                type="submit"
                className="py-3 px-5 bg-transparent border-2 uppercase border-blue-700 font-medium text-center text-white  bg-primary-700 sm:w-fit hover:bg-primary-800 focus:ring-4 focus:outline-none focus:ring-primary-300 dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800"
              >
                submit question
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactForm;
