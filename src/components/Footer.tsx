const Footer = () => {
  return (
    <footer className="bg-primary mt-auto">
      <div className="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="text-white mb-4 md:mb-0">
            © {new Date().getFullYear()} CurrencyConverter. All rights reserved.
          </div>
          <div className="flex space-x-6">
            <a href="#" className="text-white hover:text-gray-200">Privacy Policy</a>
            <a href="#" className="text-white hover:text-gray-200">Terms of Service</a>
            <a href="#" className="text-white hover:text-gray-200">Contact</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;