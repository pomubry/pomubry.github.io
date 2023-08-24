import ContactForm from "./ContactForm";
import ContactLogo from "./ContactLogo";

const index = () => {
  return (
    <section>
      <p className="my-10 text-lg">
        If you have any queries, feel free to send a message below.
      </p>
      <div className="flex items-center justify-center gap-20">
        <ContactLogo />
        <ContactForm />
      </div>
    </section>
  );
};
export default index;
