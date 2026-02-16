import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Plus, Pencil, Trash2, Search, Briefcase } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useToast } from '@/components/ui/use-toast';
import ServiceForm from '@/components/admin/ServiceForm';

// Initial dummy data to populate if empty
const INITIAL_SERVICES = [
  { id: 1, name: 'Landing Page Standard', category: 'Web Development', price: 1500, description: 'One page website with contact form' },
  { id: 2, name: 'E-commerce Basic', category: 'E-commerce', price: 3500, description: 'Online store up to 50 products' },
  { id: 3, name: 'Custom Web App', category: 'Applications', price: 8000, description: 'React based application with dashboard' }
];

const ServicesManagement = () => {
  const [services, setServices] = useState([]);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [editingService, setEditingService] = useState(null);
  const [searchTerm, setSearchTerm] = useState('');
  const { toast } = useToast();

  useEffect(() => {
    const storedServices = localStorage.getItem('services');
    if (storedServices) {
      setServices(JSON.parse(storedServices));
    } else {
      localStorage.setItem('services', JSON.stringify(INITIAL_SERVICES));
      setServices(INITIAL_SERVICES);
    }
  }, []);

  const handleSaveService = (serviceData) => {
    let updatedServices;

    if (editingService) {
      updatedServices = services.map(s => s.id === serviceData.id ? serviceData : s);
      toast({ title: "Service Updated", description: `${serviceData.name} has been updated.` });
    } else {
      updatedServices = [...services, serviceData];
      toast({ title: "Service Created", description: `${serviceData.name} has been added.` });
    }

    setServices(updatedServices);
    localStorage.setItem('services', JSON.stringify(updatedServices));
    setEditingService(null);
    setIsModalOpen(false);
  };

  const handleDelete = (id) => {
    if (window.confirm('Are you sure you want to delete this service?')) {
      const updatedServices = services.filter(s => s.id !== id);
      setServices(updatedServices);
      localStorage.setItem('services', JSON.stringify(updatedServices));
      toast({ variant: "destructive", title: "Service Deleted", description: "The service has been removed." });
    }
  };

  const openEditModal = (service) => {
    setEditingService(service);
    setIsModalOpen(true);
  };

  const openCreateModal = () => {
    setEditingService(null);
    setIsModalOpen(true);
  };

  const filteredServices = services.filter(s =>
    s.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    s.category.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="space-y-6">

      {/* Header */}
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
        <div>
          <h1 className="text-3xl font-bold text-white font-sora">Services Management</h1>
          <p className="text-slate-400 mt-1">Manage your service offerings and pricing</p>
        </div>

        <Button onClick={openCreateModal} className="bg-blue-600 hover:bg-blue-700 text-white">
          <Plus className="w-4 h-4 mr-2" /> Add New Service
        </Button>
      </div>

      {/* Table */}
      <div className="bg-slate-900 border border-slate-800 rounded-xl overflow-hidden shadow-xl">

        {/* Search */}
        <div className="p-4 border-b border-slate-800 flex gap-4">
          <div className="relative flex-1 max-w-md">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-500 w-4 h-4" />
            <input
              type="text"
              placeholder="Search services..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full bg-slate-950 border border-slate-700 rounded-lg pl-10 pr-4 py-2 text-sm text-white focus:border-blue-500 focus:outline-none"
            />
          </div>
        </div>

        {/* Services List */}
        <div className="overflow-x-auto">
          <table className="w-full text-left text-sm">
            <thead className="bg-slate-950 text-slate-400 uppercase text-xs font-semibold">
              <tr>
                <th className="px-6 py-4">Service Name</th>
                <th className="px-6 py-4">Category</th>
                <th className="px-6 py-4">Price</th>
                <th className="px-6 py-4 text-right">Actions</th>
              </tr>
            </thead>

            <tbody className="divide-y divide-slate-800">
              {filteredServices.length > 0 ? (
                filteredServices.map((service) => (
                  <tr key={service.id} className="hover:bg-slate-800/50 transition-colors">
                    <td className="px-6 py-4 font-medium text-white">{service.name}</td>

                    <td className="px-6 py-4">
                      <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-blue-900/50 text-blue-300 border border-blue-800">
                        {service.category}
                      </span>
                    </td>

                    <td className="px-6 py-4 text-slate-300">
                      {Number(service.price).toLocaleString()} PLN
                    </td>

                    <td className="px-6 py-4 text-right space-x-2">
                      <button
                        onClick={() => openEditModal(service)}
                        className="p-2 text-slate-400 hover:text-blue-400 hover:bg-blue-900/20 rounded-lg transition-colors"
                      >
                        <Pencil size={16} />
                      </button>

                      <button
                        onClick={() => handleDelete(service.id)}
                        className="p-2 text-slate-400 hover:text-red-400 hover:bg-red-900/20 rounded-lg transition-colors"
                      >
                        <Trash2 size={16} />
                      </button>
                    </td>
                  </tr>
                ))
              ) : (
                <tr>
                  <td colSpan="4" className="px-6 py-12 text-center text-slate-500">
                    <div className="flex flex-col items-center gap-2">
                      <Briefcase className="w-10 h-10 opacity-20" />
                      <p>No services found matching your search.</p>
                    </div>
                  </td>
                </tr>
              )}
            </tbody>

          </table>
        </div>
      </div>

      {/* Modal */}
      {isModalOpen && (
        <ServiceForm
          service={editingService}
          onClose={() => setIsModalOpen(false)}
          onSave={handleSaveService}
        />
      )}
    </div>
  );
};

export default ServicesManagement;
