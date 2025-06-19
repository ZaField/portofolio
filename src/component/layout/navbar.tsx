import { useEffect, useState } from "react";

const sections = ["home", "about", "skill", "contact"];

const Navbar = () => {
  const [activeSection, setActiveSection] = useState("home");

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      {
        threshold: 0.5, // adjust for when a section becomes active
      }
    );

    sections.forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <nav className="fixed top-0 left-0 w-full z-50 flex justify-between items-center px-15 py-8 backdrop-blur-sm bg-transparent text-white text-2xl">
        <div className="text-2xl font-bold">Zaky Hafiedz</div>
        <ul className="flex space-x-6">
            {sections.map((section) => (
            <li key={section}>
                <a
                href={`#${section}`}
                className={`transition-all duration-200 ${
                    activeSection === section ? "font-bold" : "font-normal"
                } hover:underline`}
                >
                {section.charAt(0).toUpperCase() + section.slice(1)}
                </a>
            </li>
            ))}
        </ul>
    </nav>
    );
};

export default Navbar;
