import PageTitle from "../../components/PageTitle/PageTitle";
import Review from "../../Shared/Review/Review";
import Services from "../../Shared/Services/Services";
import Value from "../../Shared/Value/Value";

const ServicesPage = () => {
  return (
    <div className="">
      <PageTitle title={"services"} />
      <div className="container mx-auto px-5 lg:px-0">
        <Services />
        <Value />
        <Review />
        <div className="text-white">
            
        </div>
      </div>
    </div>
  );
};

export default ServicesPage;
