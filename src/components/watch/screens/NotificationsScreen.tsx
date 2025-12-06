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
    <div className="flex flex-col items-center h-full w-full animate-scale-in">
      {/* Header */}
      <div className="flex items-center w-full px-2 pt-2 pb-2">
        <button 
          onClick={onBack}
          className="w-8 h-8 rounded-full bg-secondary/50 flex items-center justify-center"
          aria-label="Go back"
        >
          <ChevronLeft className="w-5 h-5 text-foreground" />
        </button>
        <span className="text-sm font-semibold text-foreground flex-1 text-center">Notifications</span>
        <div className="w-8 h-8 rounded-full bg-primary/20 flex items-center justify-center">
          <Bell className="w-4 h-4 text-primary" />
        </div>
      </div>

      {/* Notifications list */}
      <div className="flex flex-col gap-1.5 w-full px-3 flex-1 overflow-y-auto">
        {notifications.map((notif, index) => (
          <div
            key={notif.id}
            className="flex items-start gap-2 w-full p-2 rounded-xl bg-secondary/30 animate-fade-in-up"
            style={{ animationDelay: `${index * 0.05}s` }}
          >
            <div className={`w-8 h-8 rounded-full ${notif.bgColor} flex items-center justify-center shrink-0 mt-0.5`}>
              <notif.icon className={`w-4 h-4 ${notif.color}`} />
            </div>
            <div className="flex flex-col items-start flex-1 min-w-0">
              <span className="text-[11px] font-medium text-foreground">{notif.title}</span>
              <span className="text-[9px] text-muted-foreground">{notif.message}</span>
              <span className="text-[8px] text-muted-foreground/60 mt-0.5">{notif.time}</span>
            </div>
          </div>
        ))}
      </div>

      {/* Clear all hint */}
      <div className="pb-3">
        <button className="text-[9px] text-muted-foreground underline">
          Clear all
        </button>
      </div>
    </div>
  );
};

export default NotificationsScreen;

