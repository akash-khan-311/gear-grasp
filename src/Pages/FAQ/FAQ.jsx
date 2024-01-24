import Faqs from "../../components/Accordion/Accordion";
import ContactForm from "../../components/ContactForm/ContactForm";
import PageTitle from "../../components/PageTitle/PageTitle";

const FAQ = () => {
  return (
    <>
      <PageTitle title={"faq"} />
      <div>
        <ContactForm />
      </div>
      <div className="container mx-auto px-5 lg:px-0 py-10">
        <Faqs />
      </div>
    </>
  );
};

export default FAQ;
