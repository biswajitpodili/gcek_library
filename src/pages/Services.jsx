import React from "react";
import { motion } from "framer-motion";
import { BookIcon, Laptop, School } from "lucide-react";

const Services = () => {
  const services = [
    {
      id: 1,
      title: "Circulation Services",
      icon: <BookIcon />,
      description:
        "Borrow, return, and renew books. Our circulation desk is open during all library hours.",
      features: [
        "Book borrowing for 14 days (students) / 30 days (faculty)",
        "Online renewal system",
        "Reservation of books",
        "Overdue notifications",
      ],
    },

    {
      id: 2,
      title: "Digital Library",
      icon: <Laptop />,
      description:
        "Access electronic resources, e-books, e-journals, and digital databases.",
      features: [
        "Access to 50,000+ e-books",
        "Online journals and research papers",
        "Remote access to digital resources",
        "Institutional repository",
      ],
    },

    {
      id: 3,
      title: "Reading & Study Spaces",
      icon: <School />,
      description:
        "Quiet individual study areas, group study rooms, and comfortable reading spaces.",
      features: [
        "Individual carrels for focused study",
        "Group study rooms with AV equipment",
        "Reading lounges with comfortable seating",
        "24x7 study hall during exams",
      ],
    },
  ];

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.5 },
    },
  };

return (
    <div className="bg-gray-50 min-h-screen py-12">
        {/* Hero Section */}
        <h1 className="text-3xl md:text-4xl font-bold mb-12 text-center text-primary">
            Library Services & Resources
        </h1>

        {/* Services Grid */}
        <div className="container mx-auto px-4 mb-20">
            <motion.div
                className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10"
                variants={containerVariants}
                initial="hidden"
                animate="visible"
            >
                {services.map((service) => (
                    <motion.div
                        key={service.id}
                        variants={itemVariants}
                        className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1"
                    >
                        <div className="bg-gradient-to-r from-primary to-primary-dark p-8 text-white">
                            <div className="flex items-center gap-5 mb-4">
                                <div className="text-2xl bg-white/20 p-3 rounded-full">{service.icon}</div>
                                <h3 className="text-2xl font-bold">{service.title}</h3>
                            </div>
                            <p className="text-white/90 leading-relaxed">{service.description}</p>
                        </div>
                        <div className="p-8">
                            <h4 className="text-lg font-semibold mb-4 text-gray-800">
                                What we offer:
                            </h4>
                            <ul className="space-y-3">
                                {service.features.map((feature, index) => (
                                    <li key={index} className="flex items-start">
                                        <span className="text-accent mr-2 mt-1">●</span>
                                        <span className="text-gray-700">{feature}</span>
                                    </li>
                                ))}
                            </ul>
                            <div className="mt-8">
                                <a
                                    href={`/service/${service.id}`}
                                    className="inline-flex items-center px-4 py-2 rounded-md bg-primary/10 text-primary hover:bg-primary hover:text-white transition-all duration-300 font-medium"
                                >
                                    Learn more <span className="ml-2">→</span>
                                </a>
                            </div>
                        </div>
                    </motion.div>
                ))}
            </motion.div>
        </div>

        {/* Library Hours Section */}
        <div className="container mx-auto px-4 py-16 bg-white rounded-2xl shadow-md max-w-5xl">
            <div className="text-center mb-12">
                <h2 className="text-3xl font-bold text-primary mb-4">
                    Library Hours
                </h2>
                <p className="text-gray-600 max-w-2xl mx-auto">
                    Our services are available during the following hours. Special hours
                    may apply during exams and holidays.
                </p>
            </div>

            <div className="max-w-4xl mx-auto overflow-hidden">
                <div className="p-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                        <div className="bg-gray-50 p-6 rounded-xl">
                            <h3 className="text-xl font-semibold mb-5 text-primary border-b pb-2">
                                Regular Hours
                            </h3>
                            <ul className="space-y-4">
                                <li className="flex justify-between">
                                    <span className="font-medium">Monday - Friday</span>
                                    <span className="bg-primary/10 px-3 py-1 rounded-full text-primary">8:30 AM - 9:00 PM</span>
                                </li>
                                <li className="flex justify-between">
                                    <span className="font-medium">Saturday</span>
                                    <span className="bg-primary/10 px-3 py-1 rounded-full text-primary">9:00 AM - 5:00 PM</span>
                                </li>
                                <li className="flex justify-between">
                                    <span className="font-medium">Sunday</span>
                                    <span className="bg-gray-200 px-3 py-1 rounded-full text-gray-600">Closed</span>
                                </li>
                            </ul>
                        </div>
                        <div className="bg-gray-50 p-6 rounded-xl">
                            <h3 className="text-xl font-semibold mb-5 text-primary border-b pb-2">
                                Special Hours
                            </h3>
                            <ul className="space-y-4">
                                <li className="flex justify-between">
                                    <span className="font-medium">Exam Period</span>
                                    <span className="bg-accent/10 px-3 py-1 rounded-full text-accent">8:00 AM - 11:00 PM</span>
                                </li>
                                <li className="flex justify-between">
                                    <span className="font-medium">Holiday Eve</span>
                                    <span className="bg-primary/10 px-3 py-1 rounded-full text-primary">8:30 AM - 4:00 PM</span>
                                </li>
                                <li className="flex justify-between">
                                    <span className="font-medium">Vacation Period</span>
                                    <span className="bg-primary/10 px-3 py-1 rounded-full text-primary">9:00 AM - 4:00 PM</span>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
);
};

export default Services;
