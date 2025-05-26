import { Link } from "react-router";
import PrincipalImage from "../assets/images/principal.jpg"

const PrincipalSection = () => {
  return (
    <section className="py-12 bg-[#f0f4f8]">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center gap-8 max-w-4xl mx-auto">
          <div 
            className="flex-none w-[250px] h-[280px] bg-gray-200 rounded-lg overflow-hidden shadow-md bg-cover bg-center border-3 border-primary"
            style={{ backgroundImage: `url(${PrincipalImage})` }}
          ></div>
          
          <div className="flex-1">
            <h2 className="text-primary text-2xl mb-1 font-title font-semibold">From the Principal's Desk</h2>
            <h3 className="text-secondary text-lg mb-4 font-medium">Prof. (Dr.) Subhransu Sekhar Dash</h3>
            <p className="mb-4 text-gray-600 leading-7">
              Welcome to Government College of Engineering Kalahandi, a premier institution dedicated to engineering excellence and innovation. 
              Established with a vision to provide quality technical education, our college has emerged as a center of academic excellence in the region.
            </p>
            <p className="mb-4 text-gray-600 leading-7">
              At GCEK, we strive to create a dynamic learning environment that fosters critical thinking, problem-solving abilities, 
              and technical skills among our students. Our dedicated faculty members are committed to providing mentorship 
              and guidance to help students achieve their full potential.
            </p>
            <Link 
              to="/principal-message" 
              className="text-primary font-medium inline-flex items-center gap-2 transition-all duration-300 hover:text-accent"
            >
              Read Full Message <i className="fas fa-arrow-right"></i>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PrincipalSection;
