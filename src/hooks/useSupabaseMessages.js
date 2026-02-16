
import { useState } from 'react';
import { supabase } from '@/config/supabaseConfig';

export const useSupabaseMessages = () => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  // Helper to check configuration
  const checkConfig = () => {
    if (!supabase) {
      // Quiet fail if not configured, or log warning
      return false;
    }
    return true;
  };

  // Fetch all messages for admin
  const fetchMessages = async () => {
    if (!checkConfig()) return [];
    
    setLoading(true);
    setError(null);
    try {
      const { data, error } = await supabase
        .from('messages')
        .select('*')
        .order('created_at', { ascending: false });

      if (error) throw error;
      return data;
    } catch (err) {
      console.error('Error fetching messages:', err);
      setError(err.message);
      return [];
    } finally {
      setLoading(false);
    }
  };

  // Save a new message (used by Contact Form)
  const saveMessage = async (messageData) => {
    if (!checkConfig()) {
      return { success: false, error: 'Database not configured' };
    }

    setLoading(true);
    setError(null);

    try {
      // Ensure data structure matches table
      const payload = {
        name: messageData.name,
        email: messageData.email,
        phone: messageData.phone,
        message: messageData.message,
        project_type: messageData.projectType,
        status: messageData.status || 'pending',
        read: false,
        created_at: new Date().toISOString()
      };

      const { data, error } = await supabase
        .from('messages')
        .insert([payload])
        .select()
        .single();

      if (error) throw error;
      return { success: true, data };
    } catch (err) {
      console.error('Error saving message to Supabase:', err);
      setError(err.message);
      return { success: false, error: err.message };
    } finally {
      setLoading(false);
    }
  };

  // Update message status
  const updateMessageStatus = async (id, status) => {
    if (!checkConfig()) return { success: false };

    setLoading(true);
    try {
      const { data, error } = await supabase
        .from('messages')
        .update({ status })
        .eq('id', id)
        .select();

      if (error) throw error;
      return { success: true, data };
    } catch (err) {
      console.error('Error updating status:', err);
      setError(err.message);
      return { success: false, error: err.message };
    } finally {
      setLoading(false);
    }
  };

  // Mark message as read/unread
  const toggleReadStatus = async (id, currentReadState) => {
    if (!checkConfig()) return { success: false };

    setLoading(true);
    try {
      const { error } = await supabase
        .from('messages')
        .update({ read: !currentReadState })
        .eq('id', id);

      if (error) throw error;
      return { success: true };
    } catch (err) {
      console.error('Error toggling read status:', err);
      return { success: false, error: err.message };
    } finally {
      setLoading(false);
    }
  };

  return {
    loading,
    error,
    fetchMessages,
    saveMessage,
    updateMessageStatus,
    toggleReadStatus
  };
};
