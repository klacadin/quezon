import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { FileText, Calendar, Download, MessageSquare } from 'lucide-react';
import { useNews } from '@/hooks/useNews';
import { useEvents } from '@/hooks/useEvents';
import { useDocuments } from '@/hooks/useDocuments';

export function DashboardStats() {
  const { news } = useNews();
  const { events } = useEvents();
  const { documents } = useDocuments();

  const stats = [
    {
      title: "Total News Articles",
      value: news.length,
      icon: FileText,
      description: "Published articles"
    },
    {
      title: "Upcoming Events",
      value: events.length,
      icon: Calendar,
      description: "Scheduled events"
    },
    {
      title: "Documents",
      value: documents.length,
      icon: Download,
      description: "Available downloads"
    },
    {
      title: "Contact Messages",
      value: "View all",
      icon: MessageSquare,
      description: "Pending responses"
    }
  ];

  return (
    <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
      {stats.map((stat, index) => (
        <Card key={index}>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">
              {stat.title}
            </CardTitle>
            <stat.icon className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{stat.value}</div>
            <p className="text-xs text-muted-foreground">
              {stat.description}
            </p>
          </CardContent>
        </Card>
      ))}
    </div>
  );
}