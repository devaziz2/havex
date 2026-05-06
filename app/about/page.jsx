import Header from "@/components/common/Header";
import Footer from "@/components/sections/landing/Footer";

export const metadata = {
  title: "About Us | HAVEX",
  description: "Learn more about HAVEX and our mission.",
};

export default function AboutPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-1 flex items-center justify-center px-6 py-24">
        <div className="text-center max-w-2xl">
          <h1 className="text-4xl md:text-5xl font-bold text-cyan-500 mb-6">
            About Us
          </h1>
          <p className="text-gray-600 text-lg leading-relaxed">
            HAVEX is a modern technology company dedicated to delivering
            innovative digital solutions for businesses worldwide. We specialize
            in VoIP services, DevOps solutions, web development, mobile app
            development, and communication systems that improve efficiency and
            connectivity.
          </p>
        </div>
      </main>
      <Footer />
    </div>
  );
}
