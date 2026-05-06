import Header from "@/components/common/Header";
import Footer from "@/components/sections/landing/Footer";

export const metadata = {
  title: "Contact Us | HAVEX",
  description: "Get in touch with the HAVEX team.",
};

export default function ContactPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-1 flex items-center justify-center px-6 py-24">
        <div className="text-center max-w-2xl">
          <h1 className="text-4xl md:text-5xl font-bold text-cyan-500 mb-6">
            Contact Us
          </h1>
          <p className="text-gray-600 text-lg leading-relaxed">
            Have a question or want to work with us? Reach out to the HAVEX team
            and we&apos;ll get back to you as soon as possible.
          </p>
        </div>
      </main>
      <Footer />
    </div>
  );
}
