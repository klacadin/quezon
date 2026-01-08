import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Badge } from '@/components/ui/badge';
import { Trash2, Edit, Plus, Save, X, Calendar } from 'lucide-react';
import { useEvents } from '@/hooks/useEvents';
import { supabase } from '@/integrations/supabase/client';
import { toast } from '@/hooks/use-toast';

interface EventForm {
  title: string;
  description: string;
  event_date: string;
  end_date: string;
  location: string;
  featured_image_url: string;
  category: string;
  organizer: string;
  registration_required: boolean;
  max_participants: number | null;
  status: string;
}

export function EventsManager() {
  const { events, loading } = useEvents();
  const [isCreating, setIsCreating] = useState(false);
  const [editingId, setEditingId] = useState<string | null>(null);
  const [form, setForm] = useState<EventForm>({
    title: '',
    description: '',
    event_date: '',
    end_date: '',
    location: '',
    featured_image_url: '',
    category: '',
    organizer: '',
    registration_required: false,
    max_participants: null,
    status: 'upcoming'
  });

  const resetForm = () => {
    setForm({
      title: '',
      description: '',
      event_date: '',
      end_date: '',
      location: '',
      featured_image_url: '',
      category: '',
      organizer: '',
      registration_required: false,
      max_participants: null,
      status: 'upcoming'
    });
  };

  const handleCreate = async () => {
    if (!form.title || !form.description || !form.event_date) {
      toast({
        title: "Error",
        description: "Title, description, and event date are required",
        variant: "destructive"
      });
      return;
    }

    const { error } = await supabase
      .from('events')
      .insert(form);

    if (error) {
      toast({
        title: "Error",
        description: "Failed to create event",
        variant: "destructive"
      });
    } else {
      toast({
        title: "Success",
        description: "Event created successfully"
      });
      setIsCreating(false);
      resetForm();
      window.location.reload();
    }
  };

  const handleUpdate = async (id: string) => {
    const { error } = await supabase
      .from('events')
      .update(form)
      .eq('id', id);

    if (error) {
      toast({
        title: "Error",
        description: "Failed to update event",
        variant: "destructive"
      });
    } else {
      toast({
        title: "Success",
        description: "Event updated successfully"
      });
      setEditingId(null);
      resetForm();
      window.location.reload();
    }
  };

  const handleDelete = async (id: string) => {
    if (!confirm('Are you sure you want to delete this event?')) return;

    const { error } = await supabase
      .from('events')
      .delete()
      .eq('id', id);

    if (error) {
      toast({
        title: "Error",
        description: "Failed to delete event",
        variant: "destructive"
      });
    } else {
      toast({
        title: "Success",
        description: "Event deleted successfully"
      });
      window.location.reload();
    }
  };

  const startEdit = (event: any) => {
    setForm({
      title: event.title,
      description: event.description,
      event_date: event.event_date ? new Date(event.event_date).toISOString().slice(0, 16) : '',
      end_date: event.end_date ? new Date(event.end_date).toISOString().slice(0, 16) : '',
      location: event.location || '',
      featured_image_url: event.featured_image_url || '',
      category: event.category || '',
      organizer: event.organizer || '',
      registration_required: event.registration_required,
      max_participants: event.max_participants,
      status: event.status
    });
    setEditingId(event.id);
  };

  if (loading) {
    return <div>Loading events...</div>;
  }

  return (
    <div className="space-y-6">
      {/* Create New Event */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center justify-between">
            <span>Events</span>
            <Button onClick={() => setIsCreating(true)} disabled={isCreating}>
              <Plus className="h-4 w-4 mr-2" />
              New Event
            </Button>
          </CardTitle>
        </CardHeader>
        {isCreating && (
          <CardContent className="space-y-4">
            <div className="grid gap-4">
              <div>
                <Label htmlFor="title">Title</Label>
                <Input
                  id="title"
                  value={form.title}
                  onChange={(e) => setForm({ ...form, title: e.target.value })}
                  placeholder="Enter event title"
                />
              </div>
              <div>
                <Label htmlFor="description">Description</Label>
                <Textarea
                  id="description"
                  value={form.description}
                  onChange={(e) => setForm({ ...form, description: e.target.value })}
                  placeholder="Event description"
                  rows={4}
                />
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <Label htmlFor="event_date">Start Date & Time</Label>
                  <Input
                    id="event_date"
                    type="datetime-local"
                    value={form.event_date}
                    onChange={(e) => setForm({ ...form, event_date: e.target.value })}
                  />
                </div>
                <div>
                  <Label htmlFor="end_date">End Date & Time (Optional)</Label>
                  <Input
                    id="end_date"
                    type="datetime-local"
                    value={form.end_date}
                    onChange={(e) => setForm({ ...form, end_date: e.target.value })}
                  />
                </div>
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <Label htmlFor="location">Location</Label>
                  <Input
                    id="location"
                    value={form.location}
                    onChange={(e) => setForm({ ...form, location: e.target.value })}
                    placeholder="Event location"
                  />
                </div>
                <div>
                  <Label htmlFor="organizer">Organizer</Label>
                  <Input
                    id="organizer"
                    value={form.organizer}
                    onChange={(e) => setForm({ ...form, organizer: e.target.value })}
                    placeholder="Event organizer"
                  />
                </div>
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <Label htmlFor="category">Category</Label>
                  <Input
                    id="category"
                    value={form.category}
                    onChange={(e) => setForm({ ...form, category: e.target.value })}
                    placeholder="e.g., Community, Government"
                  />
                </div>
                <div>
                  <Label htmlFor="status">Status</Label>
                  <Select value={form.status} onValueChange={(value) => setForm({ ...form, status: value })}>
                    <SelectTrigger>
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="upcoming">Upcoming</SelectItem>
                      <SelectItem value="ongoing">Ongoing</SelectItem>
                      <SelectItem value="completed">Completed</SelectItem>
                      <SelectItem value="cancelled">Cancelled</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>
            </div>
            <div className="flex space-x-2">
              <Button onClick={handleCreate}>
                <Save className="h-4 w-4 mr-2" />
                Create Event
              </Button>
              <Button variant="outline" onClick={() => { setIsCreating(false); resetForm(); }}>
                <X className="h-4 w-4 mr-2" />
                Cancel
              </Button>
            </div>
          </CardContent>
        )}
      </Card>

      {/* Events List */}
      <div className="space-y-4">
        {events.map((event) => (
          <Card key={event.id}>
            <CardHeader>
              <div className="flex items-center justify-between">
                <div>
                  <CardTitle className="text-lg flex items-center space-x-2">
                    <Calendar className="h-5 w-5" />
                    <span>{event.title}</span>
                  </CardTitle>
                  <CardDescription>
                    {event.category && <Badge variant="secondary">{event.category}</Badge>}
                    <Badge variant={event.status === 'upcoming' ? 'default' : 'outline'} className="ml-2">
                      {event.status}
                    </Badge>
                    {event.location && <span className="ml-2">📍 {event.location}</span>}
                  </CardDescription>
                </div>
                <div className="flex space-x-2">
                  <Button variant="outline" size="sm" onClick={() => startEdit(event)}>
                    <Edit className="h-4 w-4" />
                  </Button>
                  <Button variant="destructive" size="sm" onClick={() => handleDelete(event.id)}>
                    <Trash2 className="h-4 w-4" />
                  </Button>
                </div>
              </div>
            </CardHeader>
            {editingId === event.id && (
              <CardContent className="space-y-4">
                <div className="grid gap-4">
                  <div>
                    <Label htmlFor={`title-${event.id}`}>Title</Label>
                    <Input
                      id={`title-${event.id}`}
                      value={form.title}
                      onChange={(e) => setForm({ ...form, title: e.target.value })}
                    />
                  </div>
                  <div>
                    <Label htmlFor={`description-${event.id}`}>Description</Label>
                    <Textarea
                      id={`description-${event.id}`}
                      value={form.description}
                      onChange={(e) => setForm({ ...form, description: e.target.value })}
                      rows={4}
                    />
                  </div>
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <Label htmlFor={`event_date-${event.id}`}>Start Date & Time</Label>
                      <Input
                        id={`event_date-${event.id}`}
                        type="datetime-local"
                        value={form.event_date}
                        onChange={(e) => setForm({ ...form, event_date: e.target.value })}
                      />
                    </div>
                    <div>
                      <Label htmlFor={`location-${event.id}`}>Location</Label>
                      <Input
                        id={`location-${event.id}`}
                        value={form.location}
                        onChange={(e) => setForm({ ...form, location: e.target.value })}
                      />
                    </div>
                  </div>
                </div>
                <div className="flex space-x-2">
                  <Button onClick={() => handleUpdate(event.id)}>
                    <Save className="h-4 w-4 mr-2" />
                    Update
                  </Button>
                  <Button variant="outline" onClick={() => { setEditingId(null); resetForm(); }}>
                    <X className="h-4 w-4 mr-2" />
                    Cancel
                  </Button>
                </div>
              </CardContent>
            )}
          </Card>
        ))}
      </div>
    </div>
  );
}