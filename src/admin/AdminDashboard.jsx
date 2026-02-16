import React from 'react';
import { motion } from 'framer-motion';
import { Users, Briefcase, MessageSquare, ArrowUpRight, Clock } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useAuth } from '@/context/AuthContext';

const AdminDashboard = () => {
  const { user } = useAuth();

  // Mock statistics - in real app would verify localStorage counts
  const stats = [
    { label: 'Total Inquiries', value: '12', change: '+2 today', icon: MessageSquare, color: 'text-blue-400', bg: 'bg-blue-900/20' },
    { label: 'Active Services', value: '8', change: 'Updated', icon: Briefcase, color: 'text-purple-400', bg: 'bg-purple-900/20' },
    { label: 'Pending Quotes', value: '3', change: 'Urgent', icon: Clock, color: 'text-amber-400', bg: 'bg-amber-900/20' },
  ];

  return (
    <div className="space-y-8">

      {/* Welcome Header */}
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="bg-gradient-to-r from-blue-900/40 to-purple-900/40 border border-white/10 rounded-2xl p-8 backdrop-blur-md"
      >
        <h1 className="text-3xl md:text-4xl font-bold text-white font-sora mb-2">
          Welcome back, {user?.name || "Admin"}!
        </h1>
        <p className="text-slate-300">
          Here is what's happening with your projects today.
        </p>
      </motion.div>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {stats.map((stat, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
            className="bg-slate-900 border border-slate-800 p-6 rounded-xl hover:border-slate-700 transition-colors"
          >
            <div className="flex items-start justify-between mb-4">
              <div className={`p-3 rounded-lg ${stat.bg}`}>
                <stat.icon className={`w-6 h-6 ${stat.color}`} />
              </div>
              <span className="text-xs font-medium px-2 py-1 rounded-full bg-slate-800 text-slate-300">
                {stat.change}
              </span>
            </div>
            <h3 className="text-2xl font-bold text-white mb-1">{stat.value}</h3>
            <p className="text-slate-400 text-sm">{stat.label}</p>
          </motion.div>
        ))}
      </div>

      {/* Quick Actions */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">

        {/* Recent Activity */}
        <div className="bg-slate-900 border border-slate-800 rounded-xl p-6">
          <h3 className="text-lg font-bold text-white mb-4">Recent Activity</h3>
          <div className="space-y-4">
            {[1, 2, 3].map((_, i) => (
              <div key={i} className="flex items-center gap-4 p-3 rounded-lg hover:bg-slate-800/50 transition-colors">
                <div className="w-2 h-2 rounded-full bg-blue-500" />
                <div className="flex-1">
                  <p className="text-sm text-slate-300">
                    New inquiry received from <span className="text-white font-medium">TechCorp Ltd.</span>
                  </p>
                  <p className="text-xs text-slate-500">2 hours ago</p>
                </div>
              </div>
            ))}
          </div>
          <Link to="/admin/inquiries" className="block mt-4 text-center text-sm text-blue-400 hover:text-blue-300">
            View all activity
          </Link>
        </div>

        {/* Quick Links */}
        <div className="bg-slate-900 border border-slate-800 rounded-xl p-6">
          <h3 className="text-lg font-bold text-white mb-4">Quick Links</h3>
          <div className="grid grid-cols-2 gap-4">

            <Link to="/admin/services" className="p-4 bg-slate-950 rounded-xl border border-slate-800 hover:border-blue-500/50 transition-colors group">
              <Briefcase className="w-6 h-6 text-purple-400 mb-2 group-hover:scale-110 transition-transform" />
              <p className="font-medium text-white">Manage Services</p>
            </Link>

            <Link to="/admin/inquiries" className="p-4 bg-slate-950 rounded-xl border border-slate-800 hover:border-blue-500/50 transition-colors group">
              <MessageSquare className="w-6 h-6 text-blue-400 mb-2 group-hover:scale-110 transition-transform" />
              <p className="font-medium text-white">Check Inbox</p>
            </Link>

            <Link to="/admin/settings" className="p-4 bg-slate-950 rounded-xl border border-slate-800 hover:border-blue-500/50 transition-colors group">
              <ArrowUpRight className="w-6 h-6 text-green-400 mb-2 group-hover:scale-110 transition-transform" />
              <p className="font-medium text-white">Update Site Info</p>
            </Link>

            <a href="/" target="_blank" className="p-4 bg-slate-950 rounded-xl border border-slate-800 hover:border-blue-500/50 transition-colors group">
              <Users className="w-6 h-6 text-amber-400 mb-2 group-hover:scale-110 transition-transform" />
              <p className="font-medium text-white">View Live Site</p>
            </a>

          </div>
        </div>

      </div>
    </div>
  );
};

export default AdminDashboard;
