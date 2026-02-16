import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import ScrollToTop from '@/components/ScrollToTop';

// Public pages
import HomePage from '@/HomePage';
import ServicesPage from '@/ServicesPage';
import PricingCalculatorPage from '@/PricingCalculatorPage';
import AdvancedPricingPage from '@/AdvancedPricingPage';
import WebsitesPage from '@/WebsitesPage';
import OnlineStoresPage from '@/OnlineStoresPage';
import WebApplicationsPage from '@/WebApplicationsPage';
import SEOOptimizationPage from '@/SEOOptimizationPage';
import PortfolioPage from '@/PortfolioPage';
import PricingPage from '@/PricingPage';
import TestimonialsPage from '@/TestimonialsPage';
import ContactPage from '@/ContactPage';
import SuccessPage from '@/SuccessPage';

// UI
import { Toaster } from "@/components/ui/toaster";
import AnimatedBackground from '@/components/AnimatedBackground';

// Context
import { AuthProvider } from '@/context/AuthContext';

// Admin pages
import AdminLoginPage from '@/admin/AdminLoginPage';
import AdminDashboard from '@/admin/AdminDashboard';
import ServicesManagement from '@/admin/ServicesManagement';
import InquiriesManagement from '@/admin/InquiriesManagement';
import SettingsPage from '@/admin/SettingsPage';

// Admin components
import AdminLayout from '@/components/admin/AdminLayout';
import ProtectedRoute from '@/components/admin/ProtectedRoute';

function App() {
  return (
    <AuthProvider>
      <div className="relative min-h-screen flex flex-col text-slate-50 font-sans selection:bg-blue-500 selection:text-white">

        {/* Global Background */}
        <div className="fixed inset-0 -z-50">
          <AnimatedBackground />
          <div className="absolute inset-0 bg-black/50 pointer-events-none" />
        </div>

        <Router>
          <ScrollToTop />
          <Routes>

            {/* Public Routes */}
            <Route path="/" element={<HomePage />} />
            <Route path="/websites" element={<WebsitesPage />} />
            <Route path="/online-stores" element={<OnlineStoresPage />} />
            <Route path="/web-applications" element={<WebApplicationsPage />} />
            <Route path="/seo-optimization" element={<SEOOptimizationPage />} />
            <Route path="/services" element={<ServicesPage />} />
            <Route path="/pricing" element={<PricingPage />} />
            <Route path="/advanced-pricing" element={<AdvancedPricingPage />} />
            <Route path="/portfolio" element={<PortfolioPage />} />
            <Route path="/testimonials" element={<TestimonialsPage />} />
            <Route path="/contact" element={<ContactPage />} />
            <Route path="/success" element={<SuccessPage />} />

            {/* Legacy/Calculator */}
            <Route path="/pricing-calculator" element={<PricingCalculatorPage />} />

            {/* Admin Login */}
            <Route path="/admin/login" element={<AdminLoginPage />} />

            {/* Protected Admin Routes */}
            <Route path="/admin" element={<ProtectedRoute />}>
              <Route element={<AdminLayout />}>
                <Route index element={<Navigate to="/admin/dashboard" replace />} />
                <Route path="dashboard" element={<AdminDashboard />} />
                <Route path="services" element={<ServicesManagement />} />
                <Route path="inquiries" element={<InquiriesManagement />} />
                <Route path="settings" element={<SettingsPage />} />
              </Route>
            </Route>

          </Routes>

          <Toaster />
        </Router>
      </div>
    </AuthProvider>
  );
}

export default App;

