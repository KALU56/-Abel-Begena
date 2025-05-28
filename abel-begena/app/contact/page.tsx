import Head from 'next/head';
import ContactForm from '../../components/ContactForm';

export default function Contact() {
  return (
    <>
      <Head>
        <title>Contact Us - Abel Begena</title>
        <meta name="description" content="Get in touch with Abel Begena for training or instrument inquiries." />
      </Head>
      <div className="py-12 px-4 max-w-4xl mx-auto">
        <h1 className="text-3xl font-bold mb-6 text-center">Contact Us</h1>
        <p className="mb-8 text-center">
          Have questions about our training programs or instruments? Reach out to us!
        </p>
        <ContactForm />
      </div>
    </>
  );
}