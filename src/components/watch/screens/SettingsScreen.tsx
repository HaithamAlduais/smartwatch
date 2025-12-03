import { ChevronLeft, User, Bell, Phone, Shield, HelpCircle, CreditCard } from "lucide-react";

interface SettingsScreenProps {
  onBack: () => void;
  onHelp?: () => void;
  onProfile?: () => void;
  onNotifications?: () => void;
}

// Heuristic 3: User control and freedom - Back button
// Heuristic 4: Consistency - Standard settings layout
// Heuristic 6: Recognition - Clear icons and labels

const SettingsScreen = ({ onBack, onHelp, onProfile, onNotifications }: SettingsScreenProps) => {
  const settings = [
    { icon: User, label: "Profile", color: "text-primary", action: onProfile },
    { icon: Bell, label: "Notifications", color: "text-warning", action: onNotifications },
    { icon: CreditCard, label: "Payment", color: "text-success", action: undefined },
    { icon: Phone, label: "Emergency", color: "text-destructive", action: undefined },
    { icon: Shield, label: "Safety", color: "text-info", action: undefined },
  ];

  return (
    <div className="flex flex-col items-center h-full w-full animate-scale-in">
      {/* Header with back button */}
      <div className="flex items-center justify-between w-full px-2 pt-2 pb-2">
        <button 
          onClick={onBack}
          className="w-8 h-8 rounded-full bg-secondary/50 flex items-center justify-center"
          aria-label="Go back"
        >
          <ChevronLeft className="w-5 h-5 text-foreground" />
        </button>
        <span className="text-sm font-semibold text-foreground">Settings</span>
        <button 
          onClick={onHelp}
          className="w-8 h-8 rounded-full bg-secondary/50 flex items-center justify-center"
          aria-label="Help"
        >
          <HelpCircle className="w-4 h-4 text-muted-foreground" />
        </button>
      </div>

      {/* Settings list */}
      <div className="flex flex-col gap-1.5 w-full px-3 overflow-y-auto flex-1">
        {settings.map((item, index) => (
          <button
            key={item.label}
            onClick={item.action}
            className="flex items-center gap-3 w-full px-3 py-2 rounded-xl bg-secondary/40 hover:bg-secondary/60 transition-all"
            style={{ animationDelay: `${index * 0.05}s` }}
            aria-label={`Open ${item.label} settings`}
          >
            <div className="w-8 h-8 rounded-full bg-secondary flex items-center justify-center">
              <item.icon className={`w-4 h-4 ${item.color}`} />
            </div>
            <span className="text-xs font-medium text-foreground">{item.label}</span>
          </button>
        ))}
      </div>

      {/* Version info - Heuristic 1: System status */}
      <div className="pb-3">
        <span className="text-[9px] text-muted-foreground">SmartRide v1.0.0</span>
      </div>
    </div>
  );
};

export default SettingsScreen;
