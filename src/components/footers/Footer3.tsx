

const Footer3 = () => {
  return (
    <footer className="bg-white px-6 py-6 border-t border-gray-100">
      <div className="max-w-7xl mx-auto flex flex-col sm:flex-row justify-between items-center gap-4 text-sm text-gray-600">
        <div className="flex items-center gap-3">
            <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>
            <span>All systems operational</span>
        </div>
        <p>© 2024 Acme Corp.</p>
        <div className="flex gap-6">
          <a href="#" className="hover:text-gray-900">Terms</a>
          <a href="#" className="hover:text-gray-900">Privacy</a>
          <a href="#" className="hover:text-gray-900">Cookies</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer3;