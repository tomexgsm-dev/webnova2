import React, { useState, useEffect } from 'react';
import { Save, Loader2, Globe, Mail, Phone, MapPin } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useToast } from '@/components/ui/use-toast';

const SettingsPage = () => {
  const [settings, setSettings] = useState({
    company_email: '',
    company_phone: '',
    company_address: '',
    website_tagline: ''
  });
  const [loading, setLoading] = useState(false);
  const { toast } = useToast();

  useEffect(() => {
    // Load settings from localStorage
    const storedSettings = localStorage.getItem('site_settings');
    if (storedSettings) {
      setSettings(JSON.parse(storedSettings));
    } else {
      // Default values
      setSettings({
        company_email: 'Tomasz.Szymanski@webnovaapp.com',
        company_phone: '+48 669 582 886',
        company_address: 'Warszawa, Polska',
        website_tagline: 'Tworzę technologię, która buduje biznes'
      });
    }
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setSettings(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);

    // Simulate save delay
    setTimeout(() => {
      localStorage.setItem('site_settings', JSON.stringify(settings));
      setLoading(false);
      toast({
        title: "Settings Saved",
        description: "Your changes have been successfully saved.",
        className: "bg-green-50 border-green-200 text-green-900"
      });
    }, 800);
  };

  return (
    <div className="max-w-4xl mx-auto space-y-8">
      <div>
        <h1 className="text-3xl font-bold text-white font-sora">Settings</h1>
        <p className="text-slate-400 mt-1">Manage global website configuration</p>
      </div>

      <div className="bg-slate-900 border border-slate-800 rounded-2xl p-8 shadow-xl">
        <form onSubmit={handleSubmit} className="space-y-8">
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="space-y-4">
              <h3 className="text-lg font-semibold text-white flex items-center gap-2">
                <Mail className="w-5 h-5 text-blue-500" />
                Contact Information
              </h3>
              
              <div className="space-y-2">
                <label className="text-sm font-medium text-slate-300">Company Email</label>
                <input
                  type="email"
                  name="company_email"
                  value={settings.company_email}
                  onChange={handleChange}
                  className="w-full bg-slate-950 border border-slate-700 rounded-lg p-3 text-white focus:border-blue-500 focus:outline-none"
                />
              </div>

              <div className="space-y-2">
                <label className="text-sm font-medium text-slate-300">Phone Number</label>
                <input
                  type="text"
                  name="company_phone"
                  value={settings.company_phone}
                  onChange={handleChange}
                  className="w-full bg-slate-950 border border-slate-700 rounded-lg p-3 text-white focus:border-blue-500 focus:outline-none"
                />
              </div>

               <div className="space-y-2">
                <label className="text-sm font-medium text-slate-300">Address</label>
                <div className="relative">
                   <MapPin className="absolute left-3 top-3 text-slate-500 w-5 h-5" />
                  <textarea
                    name="company_address"
                    rows={3}
                    value={settings.company_address}
                    onChange={handleChange}
                    className="w-full bg-slate-950 border border-slate-700 rounded-lg pl-10 p-3 text-white focus:border-blue-500 focus:outline-none resize-none"
                  />
                </div>
              </div>
            </div>

            <div className="space-y-4">
              <h3 className="text-lg font-semibold text-white flex items-center gap-2">
                <Globe className="w-5 h-5 text-purple-500" />
                General Settings
              </h3>
              
              <div className="space-y-2">
                <label className="text-sm font-medium text-slate-300">Website Tagline</label>
                <textarea
                  name="website_tagline"
                  rows={4}
                  value={settings.website_tagline}
                  onChange={handleChange}
                  className="w-full bg-slate-950 border border-slate-700 rounded-lg p-3 text-white focus:border-blue-500 focus:outline-none"
                  placeholder="Main tagline displayed on hero section"
                />
                <p className="text-xs text-slate-500">This text appears on the homepage hero section.</p>
              </div>
            </div>
          </div>

          <div className="pt-6 border-t border-slate-800 flex justify-end">
            <Button 
              type="submit" 
              disabled={loading}
              className="bg-blue-600 hover:bg-blue-700 text-white min-w-[150px]"
            >
              {loading ? <Loader2 className="w-5 h-5 animate-spin mr-2" /> : <Save className="w-5 h-5 mr-2" />}
              Save Changes
            </Button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default SettingsPage;