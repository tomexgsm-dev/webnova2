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
