
import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import ScrollToTop from '@/components/ScrollToTop';
import HomePage from '@/pages/HomePage';
import ServicesPage from '@/pages/ServicesPage';
import PricingCalculatorPage from '@/pages/PricingCalculatorPage';
import AdvancedPricingPage from '@/pages/AdvancedPricingPage';
import WebsitesPage from '@/pages/WebsitesPage';
import OnlineStoresPage from '@/pages/OnlineStoresPage';
import WebApplicationsPage from '@/pages/WebApplicationsPage';
import SEOOptimizationPage from '@/pages/SEOOptimizationPage';
import PortfolioPage from '@/pages/PortfolioPage';
import PricingPage from '@/pages/PricingPage';
import TestimonialsPage from '@/pages/TestimonialsPage';
import ContactPage from '@/pages/ContactPage';
import SuccessPage from '@/pages/SuccessPage';
import { Toaster } from "@/components/ui/toaster";
import { AuthProvider } from '@/context/AuthContext';
import AnimatedBackground from '@/components/AnimatedBackground';

// Admin Imports
import AdminLoginPage from '@/pages/admin/AdminLoginPage';
import AdminDashboard from '@/pages/admin/AdminDashboard';
import ServicesManagement from '@/pages/admin/ServicesManagement';
import InquiriesManagement from '@/pages/admin/InquiriesManagement';
import SettingsPage from '@/pages/admin/SettingsPage';
import AdminLayout from '@/components/admin/AdminLayout';
import ProtectedRoute from '@/components/admin/ProtectedRoute';

function App() {
  return (
    <AuthProvider>
      <div className="relative min-h-screen flex flex-col text-slate-50 font-sans selection:bg-blue-500 selection:text-white">
        
        {/* Global Fixed Background Layer */}
        <div className="fixed inset-0 -z-50">
          <AnimatedBackground />
          {/* Global overlay for readability */}
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
            
            {/* Legacy/Calculator Route */}
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
