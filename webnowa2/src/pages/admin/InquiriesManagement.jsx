
import React, { useEffect, useState } from 'react';
import { Mail, Trash2, Search, CheckCircle, Circle, RefreshCw, Loader2 } from 'lucide-react';
import { useToast } from '@/components/ui/use-toast';
import { Button } from '@/components/ui/button';
import { useSupabaseMessages } from '@/hooks/useSupabaseMessages';

const InquiriesManagement = () => {
  const { fetchMessages, toggleReadStatus, loading: hookLoading } = useSupabaseMessages();
  const [inquiries, setInquiries] = useState([]);
  const [filter, setFilter] = useState('all'); // all, unread
  const [searchTerm, setSearchTerm] = useState('');
  const { toast } = useToast();

  const loadMessages = async () => {
    const data = await fetchMessages();
    setInquiries(data);
  };

  useEffect(() => {
    loadMessages();
  }, []);

  const handleToggleRead = async (id, currentReadStatus) => {
    const result = await toggleReadStatus(id, currentReadStatus);
    if (result.success) {
      setInquiries(inquiries.map(inq => 
        inq.id === id ? { ...inq, read: !inq.read } : inq
      ));
    } else {
      toast({ 
        variant: "destructive", 
        description: "Failed to update status." 
      });
    }
  };

  const handleDelete = (id) => {
    if (window.confirm('This functionality requires Supabase delete policy. Delete locally?')) {
      setInquiries(inquiries.filter(i => i.id !== id));
      toast({ description: "Removed from view." });
    }
  };

  const filteredInquiries = inquiries.filter(inq => {
    const matchesSearch = (inq.name || '').toLowerCase().includes(searchTerm.toLowerCase()) || 
                          (inq.email || '').toLowerCase().includes(searchTerm.toLowerCase());
    const matchesFilter = filter === 'all' ? true : !inq.read;
    return matchesSearch && matchesFilter;
  });

  return (
    <div className="space-y-6">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
        <div>
          <h1 className="text-3xl font-bold text-white font-sora">Inquiries</h1>
          <p className="text-slate-400 mt-1">Manage customer messages and leads</p>
        </div>
        <div className="flex gap-2 items-center">
          <Button
            variant="ghost"
            onClick={loadMessages}
            disabled={hookLoading}
            className="text-slate-400 hover:text-white"
          >
            <RefreshCw size={20} className={hookLoading ? 'animate-spin' : ''} />
          </Button>
          <Button 
            variant={filter === 'all' ? 'default' : 'outline'}
            onClick={() => setFilter('all')}
            className={filter === 'all' ? 'bg-blue-600' : 'border-slate-700 text-slate-300'}
          >
            All
          </Button>
          <Button 
            variant={filter === 'unread' ? 'default' : 'outline'}
            onClick={() => setFilter('unread')}
            className={filter === 'unread' ? 'bg-blue-600' : 'border-slate-700 text-slate-300'}
          >
            Unread
          </Button>
        </div>
      </div>

      <div className="bg-slate-900 border border-slate-800 rounded-xl overflow-hidden shadow-xl">
        <div className="p-4 border-b border-slate-800 flex gap-4">
          <div className="relative flex-1 max-w-md">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-500 w-4 h-4" />
            <input 
              type="text"
              placeholder="Search by name or email..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full bg-slate-950 border border-slate-700 rounded-lg pl-10 pr-4 py-2 text-sm text-white focus:border-blue-500 focus:outline-none"
            />
          </div>
        </div>

        <div className="divide-y divide-slate-800">
          {hookLoading && inquiries.length === 0 ? (
             <div className="p-12 text-center text-slate-500">
               <Loader2 className="w-8 h-8 mx-auto animate-spin mb-2" />
               <p>Loading messages...</p>
             </div>
          ) : filteredInquiries.length > 0 ? (
            filteredInquiries.map((inquiry) => (
              <div 
                key={inquiry.id} 
                className={`p-6 hover:bg-slate-800/50 transition-colors flex flex-col md:flex-row gap-4 justify-between items-start md:items-center ${!inquiry.read ? 'bg-blue-900/10' : ''}`}
              >
                <div className="flex-1 min-w-0">
                  <div className="flex items-center gap-2 mb-1">
                    <h3 className={`font-medium text-white truncate ${!inquiry.read ? 'font-bold' : ''}`}>
                      {inquiry.name}
                    </h3>
                    {!inquiry.read && (
                      <span className="inline-flex items-center px-2 py-0.5 rounded text-xs font-medium bg-blue-500 text-white">
                        New
                      </span>
                    )}
                    {inquiry.project_type && (
                      <span className="inline-flex items-center px-2 py-0.5 rounded text-xs font-medium bg-slate-700 text-slate-300">
                        {inquiry.project_type}
                      </span>
                    )}
                     <span className={`inline-flex items-center px-2 py-0.5 rounded text-xs font-medium border ${inquiry.status === 'sent' ? 'border-green-800 text-green-400' : 'border-yellow-800 text-yellow-400'}`}>
                        {inquiry.status || 'pending'}
                      </span>
                  </div>
                  <p className="text-sm text-slate-400 mb-2">{inquiry.email}</p>
                  <p className="text-slate-300 text-sm line-clamp-2">{inquiry.message}</p>
                </div>
                
                <div className="flex items-center gap-4 text-sm text-slate-500 whitespace-nowrap">
                  <span>{new Date(inquiry.created_at).toLocaleDateString()}</span>
                  <div className="flex items-center gap-2">
                    <button 
                      onClick={() => handleToggleRead(inquiry.id, inquiry.read)}
                      className="p-2 hover:bg-slate-700 rounded-full transition-colors tooltip"
                      title={inquiry.read ? "Mark as unread" : "Mark as read"}
                    >
                      {inquiry.read ? <Circle size={18} /> : <CheckCircle size={18} className="text-blue-500" />}
                    </button>
                    <button 
                      onClick={() => handleDelete(inquiry.id)}
                      className="p-2 hover:bg-red-900/30 hover:text-red-400 rounded-full transition-colors"
                      title="Delete"
                    >
                      <Trash2 size={18} />
                    </button>
                  </div>
                </div>
              </div>
            ))
          ) : (
            <div className="p-12 text-center text-slate-500">
              <Mail className="w-12 h-12 mx-auto mb-4 opacity-20" />
              <p>No inquiries found.</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default InquiriesManagement;
