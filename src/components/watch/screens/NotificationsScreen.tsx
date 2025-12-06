import { Bell, Car, CheckCircle, XCircle, Clock } from "lucide-react";

interface NotificationsScreenProps {
  onBack: () => void;
}

const NotificationsScreen = ({ onBack }: NotificationsScreenProps) => {
  const notifications = [
    { 
      id: 1, 
      title: "Driver Arrived", 
      message: "Ahmed K. is waiting",
      time: "Just now",
      icon: Car,
      color: "text-success",
      bgColor: "bg-success/20"
    },
    { 
      id: 2, 
      title: "Approaching", 
      message: "2 min away",
      time: "2 min ago",
      icon: Clock,
      color: "text-primary",
      bgColor: "bg-primary/20"
    },
    { 
      id: 3, 
      title: "Confirmed", 
      message: "Ride accepted",
      time: "5 min ago",
      icon: CheckCircle,
      color: "text-info",
      bgColor: "bg-info/20"
    },
  ];

  return (
    <div className="flex flex-col h-full w-full animate-scale-in gap-3">
      {/* Header */}
      <div className="flex items-center justify-center gap-2">
        <Bell className="w-5 h-5 text-primary" />
        <h2 className="wear-title">Notifications</h2>
      </div>

      {/* Notification cards - Wear OS style */}
      <div className="flex flex-col gap-2 flex-1 wear-scroll">
        {notifications.map((notif, index) => (
          <div
            key={notif.id}
            className="wear-card-notification animate-fade-in-up"
            style={{ animationDelay: `${index * 0.06}s` }}
          >
            <div className={`w-10 h-10 rounded-full ${notif.bgColor} flex items-center justify-center shrink-0`}>
              <notif.icon className={`w-5 h-5 ${notif.color}`} />
            </div>
            <div className="flex flex-col flex-1 min-w-0">
              <span className="wear-body font-medium">{notif.title}</span>
              <span className="wear-caption">{notif.message}</span>
              <span className="wear-caption text-muted-foreground/60 mt-0.5">{notif.time}</span>
            </div>
          </div>
        ))}
      </div>

      {/* Done chip */}
      <button 
        onClick={onBack}
        className="wear-chip-secondary"
      >
        Done
      </button>
    </div>
  );
};

export default NotificationsScreen;
