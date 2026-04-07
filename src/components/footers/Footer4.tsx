

const Footer4 = () => {
  return (
    <footer className="bg-gray-950 text-gray-300 mt-20">
      <div className="max-w-7xl mx-auto px-6 py-20 grid md:grid-cols-4 gap-12">
        <div className="md:col-span-1 space-y-4">
            <span className="text-3xl font-extrabold text-white">VORTEX</span>
            <p className="text-gray-400 text-sm leading-relaxed">Defining the future of digital architecture and strategic consultation.</p>
        </div>
        <div className="md:col-span-3 grid grid-cols-2 lg:grid-cols-3 gap-8">
            <div>
                <h5 className="font-semibold text-white mb-4 uppercase text-xs tracking-wider">Expertise</h5>
                <ul className="space-y-3 text-sm">
                    <li>Cloud Strategy</li>
                    <li>AI Integration</li>
                    <li>Legacy Modernization</li>
                </ul>
            </div>
            <div>
                <h5 className="font-semibold text-white mb-4 uppercase text-xs tracking-wider">Contact</h5>
                <ul className="space-y-3 text-sm">
                    <li>london@vortex.io</li>
                    <li>+44 20 7123 4567</li>
                    <li>123 Tech Lane, EC1</li>
                </ul>
            </div>
            <div>
                <h5 className="font-semibold text-white mb-4 uppercase text-xs tracking-wider">Legal</h5>
                <ul className="space-y-3 text-sm">
                    <li>Compliance</li>
                    <li>Terms of Engagement</li>
                </ul>
            </div>
        </div>
      </div>
      <div className="border-t border-gray-800 py-6 px-6 text-center text-gray-600 text-xs">
        Vortex Consulting LLC, Registered in England and Wales.
      </div>
    </footer>
  );
};

export default Footer4;