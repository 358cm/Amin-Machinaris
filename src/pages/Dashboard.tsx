import React from 'react';
import { useTranslation } from 'react-i18next';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import {
  Home,
  Package,
  Wrench,
  Mail,
  FileText,
  BarChart3,
  ArrowRight,
  BookOpen,
} from 'lucide-react';

interface HubItem {
  id: string;
  titleKey: string;
  descriptionKey: string;
  icon: React.ElementType;
  path: string;
  color: string;
  badge?: string;
}

function Dashboard() {
  const { t } = useTranslation();
  const navigate = useNavigate();

  const hubItems: HubItem[] = [
    {
      id: 'home',
      titleKey: 'dashboard.sections.home',
      descriptionKey: 'dashboard.sections.homeDesc',
      icon: Home,
      path: '/',
      color: 'from-blue-500 to-blue-600',
    },
    {
      id: 'products',
      titleKey: 'dashboard.sections.products',
      descriptionKey: 'dashboard.sections.productsDesc',
      icon: Package,
      path: '/products',
      color: 'from-emerald-500 to-emerald-600',
    },
    {
      id: 'services',
      titleKey: 'dashboard.sections.services',
      descriptionKey: 'dashboard.sections.servicesDesc',
      icon: Wrench,
      path: '/services',
      color: 'from-orange-500 to-orange-600',
    },
    {
      id: 'invoicing',
      titleKey: 'dashboard.sections.invoicing',
      descriptionKey: 'dashboard.sections.invoicingDesc',
      icon: FileText,
      path: '/invoicing',
      color: 'from-purple-500 to-purple-600',
      badge: 'Pro',
    },
    {
      id: 'invoice-demo',
      titleKey: 'dashboard.sections.invoiceDemo',
      descriptionKey: 'dashboard.sections.invoiceDemoDesc',
      icon: BarChart3,
      path: '/invoice-demo',
      color: 'from-pink-500 to-pink-600',
    },
    {
      id: 'about',
      titleKey: 'dashboard.sections.about',
      descriptionKey: 'dashboard.sections.aboutDesc',
      icon: BookOpen,
      path: '/about',
      color: 'from-cyan-500 to-cyan-600',
    },
    {
      id: 'contact',
      titleKey: 'dashboard.sections.contact',
      descriptionKey: 'dashboard.sections.contactDesc',
      icon: Mail,
      path: '/contact',
      color: 'from-red-500 to-red-600',
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, ease: 'easeOut' },
    },
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100">
      {/* Header Section */}
      <div className="relative overflow-hidden bg-gradient-to-r from-slate-900 to-slate-800 text-white py-16">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 left-0 w-96 h-96 bg-blue-500 rounded-full mix-blend-multiply filter blur-3xl" />
          <div className="absolute -bottom-8 right-0 w-96 h-96 bg-cyan-500 rounded-full mix-blend-multiply filter blur-3xl" />
        </div>
        <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center"
          >
            <h1 className="text-4xl sm:text-5xl font-bold mb-4">
              {t('dashboard.title')}
            </h1>
            <p className="text-xl text-slate-300 max-w-2xl mx-auto">
              {t('dashboard.subtitle')}
            </p>
          </motion.div>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Quick Stats */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.6 }}
          className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16"
        >
          <div className="bg-white rounded-lg shadow-md p-6 border-l-4 border-blue-500">
            <p className="text-slate-600 text-sm font-medium mb-2">
              {t('dashboard.stats.sections')}
            </p>
            <p className="text-4xl font-bold text-slate-900">7</p>
          </div>
          <div className="bg-white rounded-lg shadow-md p-6 border-l-4 border-emerald-500">
            <p className="text-slate-600 text-sm font-medium mb-2">
              {t('dashboard.stats.features')}
            </p>
            <p className="text-4xl font-bold text-slate-900">5+</p>
          </div>
          <div className="bg-white rounded-lg shadow-md p-6 border-l-4 border-purple-500">
            <p className="text-slate-600 text-sm font-medium mb-2">
              {t('dashboard.stats.languages')}
            </p>
            <p className="text-4xl font-bold text-slate-900">2</p>
          </div>
        </motion.div>

        {/* Hub Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {hubItems.map((item) => {
            const Icon = item.icon;
            return (
              <motion.div
                key={item.id}
                variants={itemVariants}
                whileHover={{ y: -4, transition: { duration: 0.2 } }}
                onClick={() => navigate(item.path)}
                className="cursor-pointer group"
              >
                <div className="bg-white rounded-lg shadow-md hover:shadow-xl transition-all duration-300 overflow-hidden h-full">
                  {/* Color Bar */}
                  <div
                    className={`h-1 bg-gradient-to-r ${item.color} group-hover:h-2 transition-all duration-300`}
                  />

                  {/* Content */}
                  <div className="p-6">
                    <div className="flex items-start justify-between mb-4">
                      <div
                        className={`p-3 rounded-lg bg-gradient-to-br ${item.color} text-white group-hover:scale-110 transition-transform duration-300`}
                      >
                        <Icon size={24} />
                      </div>
                      {item.badge && (
                        <span className="px-3 py-1 bg-purple-100 text-purple-700 text-xs font-semibold rounded-full">
                          {item.badge}
                        </span>
                      )}
                    </div>

                    <h3 className="text-lg font-bold text-slate-900 mb-2">
                      {t(item.titleKey)}
                    </h3>
                    <p className="text-sm text-slate-600 mb-4">
                      {t(item.descriptionKey)}
                    </p>

                    {/* Footer */}
                    <div className="flex items-center text-sm font-medium text-slate-700 group-hover:text-blue-600 transition-colors duration-300">
                      {t('dashboard.action.explore')}
                      <ArrowRight
                        size={16}
                        className="ml-2 group-hover:translate-x-1 transition-transform duration-300"
                      />
                    </div>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </motion.div>

        {/* Footer Info */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8, duration: 0.6 }}
          className="mt-16 text-center"
        >
          <p className="text-slate-600 max-w-2xl mx-auto">
            {t('dashboard.footer')}
          </p>
        </motion.div>
      </div>
    </div>
  );
}

export default Dashboard;
