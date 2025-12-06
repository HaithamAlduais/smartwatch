import { User, Bell, CreditCard, HelpCircle } from "lucide-react";

interface SettingsScreenProps {
  onBack: () => void;
  onHelp?: () => void;
  onProfile?: () => void;
  onNotifications?: () => void;
}

const SettingsScreen = ({ onBack, onHelp, onProfile, onNotifications }: SettingsScreenProps) => {
  const settings = [
    { icon: User, label: "Profile", color: "text-primary", action: onProfile },
    { icon: Bell, label: "Notifications", color: "text-warning", action: onNotifications },
    { icon: CreditCard, label: "Payment", color: "text-success", action: undefined },
    { icon: HelpCircle, label: "Help", color: "text-info", action: onHelp },
  ];

  return (
    <div className="flex flex-col h-full w-full animate-scale-in gap-3">
      {/* Title */}
      <h2 className="wear-title text-center">Settings</h2>

      {/* Settings list chips - 48dp touch targets */}
      <div className="flex flex-col gap-2 flex-1 wear-scroll">
        {settings.map((item, index) => (
          <button
            key={item.label}
            onClick={item.action}
            className="wear-list-chip animate-fade-in-up"
            style={{ animationDelay: `${index * 0.05}s` }}
            aria-label={item.label}
          >
            <div className="w-10 h-10 rounded-full bg-secondary flex items-center justify-center shrink-0">
              <item.icon className={`w-5 h-5 ${item.color}`} />
            </div>
            <span className="wear-body font-medium">{item.label}</span>
          </button>
        ))}
      </div>

      {/* Version & close */}
      <div className="flex flex-col items-center gap-2">
        <span className="wear-caption">SmartRide v1.0.0</span>
        <button onClick={onBack} className="wear-chip-secondary">
          Done
        </button>
      </div>
    </div>
  );
};

export default SettingsScreen;
