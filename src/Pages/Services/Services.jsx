import PageTitle from "../../components/PageTitle/PageTitle";
import Review from "../../Shared/Review/Review";
import Services from "../../Shared/Services/Services";
import Value from "../../Shared/Value/Value";

const ServicesPage = () => {
  return (
    <div className="">
      <PageTitle title={"services"} />
      <div className="">
        <Services />
        <Value />
        <Review />
      </div>
    </div>
  );
};

export default ServicesPage;
