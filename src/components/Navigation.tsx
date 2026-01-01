import { Link, useLocation } from 'react-router-dom';
import { motion } from 'framer-motion';

const Navigation = () => {
  const location = useLocation();

  const isActive = (path: string) => {
    return location.pathname === path;
  };

  return (
    <motion.nav
      initial={{ x: -100, opacity: 0 }}
      animate={{ x: 0, opacity: 1 }}
      transition={{ duration: 0.6 }}
      className="fixed left-0 top-0 bottom-0 w-64 z-50 backdrop-blur-xl"
      style={{
        background: 'rgba(255, 255, 255, 0.95)',
        borderRight: '1px solid rgba(0, 0, 0, 0.1)',
        boxShadow: '2px 0 10px rgba(0, 0, 0, 0.1)'
      }}
    >
      <div className="p-6">
        <motion.div
          whileHover={{ scale: 1.05 }}
          className="mb-8"
        >
            <Link to="/" className="text-2xl font-bold text-gray-900 block">
              Taram Engineering
            </Link>
        </motion.div>
        <div className="space-y-2">
          {[
            { path: '/', label: 'Home' },
            { path: '/about', label: 'About' },
            { path: '/products', label: 'Products' },
            { path: '/facilities', label: 'Facilities' },
            { path: '/customers', label: 'Customers' },
            { path: '/contact', label: 'Contact' }
          ].map((item, index) => (
            <motion.div
              key={item.path}
              initial={{ x: -20, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ x: 5 }}
            >
              <Link
                to={item.path}
                  className={`block px-4 py-3 rounded-lg text-sm font-medium transition-all ${
                    isActive(item.path)
                      ? 'text-blue-600 bg-blue-50'
                      : 'text-gray-700 hover:text-blue-600 hover:bg-gray-50'
                  }`}
              >
                {item.label}
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.nav>
  );
};

export default Navigation;
