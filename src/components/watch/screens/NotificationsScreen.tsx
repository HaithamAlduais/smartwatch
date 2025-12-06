import { ChevronLeft, Bell, Car, CheckCircle, XCircle, Clock } from "lucide-react";

interface NotificationsScreenProps {
  onBack: () => void;
}

const NotificationsScreen = ({ onBack }: NotificationsScreenProps) => {
  const notifications = [
    { 
      id: 1, 
      type: "arrived",
      title: "Driver Arrived", 
      message: "Ahmed K. is waiting outside",
      time: "Just now",
      icon: Car,
      color: "text-success",
      bgColor: "bg-success/20"
    },
    { 
      id: 2, 
      type: "approaching",
      title: "Driver Approaching", 
      message: "2 minutes away",
      time: "2 min ago",
      icon: Clock,
      color: "text-primary",
      bgColor: "bg-primary/20"
    },
    { 
      id: 3, 
      type: "accepted",
      title: "Ride Confirmed", 
      message: "Ahmed K. accepted your ride",
      time: "5 min ago",
      icon: CheckCircle,
      color: "text-info",
      bgColor: "bg-info/20"
    },
    { 
      id: 4, 
      type: "cancelled",
      title: "Ride Cancelled", 
      message: "Previous driver cancelled",
      time: "10 min ago",
      icon: XCircle,
      color: "text-destructive",
      bgColor: "bg-destructive/20"
    },
  ];

  return (
    <div className="flex flex-col h-full w-full animate-scale-in px-4 py-4 gap-3 overflow-y-auto">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-2">
          <div className="w-9 h-9 rounded-full bg-primary/20 flex items-center justify-center">
            <Bell className="w-4 h-4 text-primary" />
          </div>
          <span className="text-base font-semibold text-foreground">Notifications</span>
        </div>
        <button onClick={onBack} className="text-sm text-primary font-medium">Done</button>
      </div>

      <div className="flex flex-col gap-2">
        {notifications.map((notif, index) => (
          <div
            key={notif.id}
            className="watch-card items-start animate-fade-in-up"
            style={{ animationDelay: `${index * 0.05}s` }}
          >
            <div className={`w-9 h-9 rounded-2xl ${notif.bgColor} flex items-center justify-center shrink-0`}>
              <notif.icon className={`w-4 h-4 ${notif.color}`} />
            </div>
            <div className="flex flex-col items-start flex-1 min-w-0">
              <span className="text-sm font-medium text-foreground">{notif.title}</span>
              <span className="text-[12px] text-muted-foreground">{notif.message}</span>
              <span className="text-[11px] text-muted-foreground/70">{notif.time}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default NotificationsScreen;

