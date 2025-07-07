// pages/contact.tsx or /Contact.tsx
import Banner from "../components/contact/Banner";
import Contacts from "../components/contact/Contacts";
import Form from "../components/contact/Form";
import Cta from "../components/reuseable/Cta";

const Contact = () => {
  return (
    <>
      <div className="bg-[#151515] px-4 sm:px-6 md:px-[5%]">
        <div className="sm:pt-56 pt-28 pb-8">
          <Banner />
        </div>

        {/* Responsive Flex */}
        <div className="w-full flex flex-col lg:flex-row gap-16 lg:gap-10 py-14">
          <Form />
          <Contacts />
        </div>
      </div>

      <Cta
        title="Want Something Like This? Let's Create It."
        buttonText="Let's Talk"
        onClick={() => console.log("CTA button clicked!")}
      />
    </>
  );
};

export default Contact;
