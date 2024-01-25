/* eslint-disable react/no-unescaped-entities */
import PageTitle from "../../components/PageTitle/PageTitle";
import SectionTitle from "../../components/SectionTitle/SectionTitle";
import Subtitle from "../../components/SubTitle/Subtitle";
import { MdPhoneInTalk } from "react-icons/md";
import { TbMailOpenedFilled } from "react-icons/tb";
import { FaMapLocationDot } from "react-icons/fa6";
import Faqs from "../../components/Accordion/Accordion";

const ContactPage = () => {
  return (
    <div className="">
      <PageTitle title={"Contact"} />
      <div className="container mx-auto py-10 px-5 lg:px-0">
        <div className="flex flex-col lg:flex-row gap-x-20 ">
          {/* form */}
          <div className="lg:w-1/2 w-full">
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
                  className="shadow-sm bg-transparent border border-gray-300 text-white   focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 placeholder-white dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light"
                  placeholder="Email"
                  required
                />
              </div>
              <div>
                <input
                  type="text"
                  className="block p-3 w-full  text-white bg-transparent  border border-gray-300 shadow-sm focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 placeholder-white dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light"
                  placeholder="Subject"
                  required
                />
              </div>
              <div className="sm:col-span-2">
                <textarea
                  id="message"
                  rows={7}
                  className="block p-2.5 w-full  text-white bg-transparent  shadow-sm border border-gray-300 focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 placeholder-white dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                  placeholder="Write Your Message..."
                  defaultValue={""}
                />
              </div>
              <div className="">
                <button
                  type="submit"
                  className="py-3  px-5 bg-transparent border-2 uppercase border-blue-700 font-medium text-center text-white  bg-primary-700 sm:w-fit hover:bg-primary-800 focus:ring-4 focus:outline-none focus:ring-primary-300 dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800 flex "
                >
                  submit message
                </button>
              </div>
            </form>
          </div>
          {/* Content */}
          <div className="lg:w-1/2 w-full space-y-7 flex flex-col  justify-center items-center lg:items-start mt-10 lg:mt-0">
            <Subtitle text={"contact"} />
            <SectionTitle title={"Get in "} secondTitle={"touch"} />
            <p className="text-white text-center lg:text-left">
              Connect with GearGrasp. Your questions matter. Get in touch today!
            </p>
            <div className="space-y-10">
              {/* Contact Details */}
              <div className="flex flex-col lg:flex-row items-center gap-x-5">
                <MdPhoneInTalk className="text-blue-800 text-5xl" />
                <div className="text-white space-y-1 text-center lg:text-left">
                  <h3 className="uppercase text-xl font-bold">Phone</h3>
                  <p>01613500345</p>
                </div>
              </div>
              {/* Contact Details */}
              <div className="flex  flex-col lg:flex-row items-center gap-x-5">
                <TbMailOpenedFilled className="text-blue-800 text-5xl" />
                <div className="text-white space-y-1 text-center lg:text-left">
                  <h3 className="uppercase text-xl font-bold">Email</h3>
                  <p>01613500345</p>
                </div>
              </div>
              {/* Contact Details */}
              <div className="flex flex-col lg:flex-row items-center gap-x-5">
                <FaMapLocationDot className="text-blue-800 text-5xl" />
                <div className="text-white space-y-1  text-center lg:text-left">
                  <h3 className="uppercase text-xl font-bold">Adress garage</h3>
                  <p>Mohammadpur , Dhaka</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="py-20">
          <Faqs />
        </div>
      </div>
    </div>
  );
};

export default ContactPage;
