import ContactForm from "@/components/ui/contact-form";

const Contact = () => {
  return (
    <section className="mt-[var(--header-y)] py-2">
      <h1 className="mt-10 md:mb-12 mb-6 md:text-5xl text-center text-3xl font-bold">Contact</h1>
      <ContactForm />
    </section>
  );
};

export default Contact;
