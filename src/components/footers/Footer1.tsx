
const Footer1 = () => {
  const sections = [
    { title: 'Product', links: ['Features', 'Security', 'Team', 'Enterprise'] },
    { title: 'Platform', links: ['Developer', 'API', 'Partners', 'Integrations'] },
    { title: 'Company', links: ['About', 'Careers', 'Blog', 'Press'] },
    { title: 'Resources', links: ['Docs', 'Community', 'Contact', 'Status'] },
  ];

  return (
    <footer className="bg-white border-t border-gray-100 mt-20">
      <div className="max-w-7xl mx-auto px-6 py-16 grid grid-cols-2 md:grid-cols-4 gap-12 text-sm">
        {sections.map(section => (
          <div key={section.title}>
            <h3 className="font-semibold text-gray-950 mb-5">{section.title}</h3>
            <ul className="space-y-3.5 text-gray-600">
              {section.links.map(link => (
                <li key={link}><a href="#" className="hover:text-blue-600 transition">{link}</a></li>
              ))}
            </ul>
          </div>
        ))}
      </div>
      <div className="max-w-7xl mx-auto px-6 py-8 border-t border-gray-100 text-center text-gray-500 text-xs">
        © 2024 Design.Co Inc. All rights reserved. Creative solutions for modern problems.
      </div>
    </footer>
  );
};

export default Footer1;