import { Laptop, LibraryBig, NotebookText } from "lucide-react";

const ServicesSection = () => {
  return (
    <section className="flex flex-col items-center justify-center py-16 bg-white gap-16">
      <div className="flex justify-center items-center flex-col max-w-3xl text-center px-4">
        <h1 className="text-4xl tracking-wide font-bold text-primary">
          Services
        </h1>
        <p className="text-lg text-gray-600 mt-4">
          A wide range of services to help you achieve your goals.
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 px-8 md:px-40">
        <div className="flex flex-col items-center justify-center py-8 px-8 gap-4 bg-primary/10 rounded-md">
          <LibraryBig size={40} color="#0e3958" />
          <h3 className="text-xl font-bold font-title">16000+ Books</h3>
          <p className="text-center">
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
          </p>
        </div>
        <div className="flex flex-col items-center justify-center py-8 px-8 gap-4 bg-primary/10 rounded-md">
          <Laptop size={40} color="#0e3958" />
          <h3 className="text-xl font-bold">Online Catalogs</h3>
          <p className="text-center">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. asdf
            dsfasdf asdf adf
          </p>
        </div>
        <div className="flex flex-col items-center justify-center py-8 px-8 gap-4 bg-primary/10 rounded-md">
          <NotebookText size={40} color="#0e3958" />
          <h3 className="text-xl font-bold">Journals Papers</h3>
          <p className="text-center">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. asdf
            dsfasdf asdf adf
          </p>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
