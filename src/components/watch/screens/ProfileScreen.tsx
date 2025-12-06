import { ChevronLeft, User, CreditCard, MapPin, Smartphone } from "lucide-react";

interface ProfileScreenProps {
  onBack: () => void;
}

const ProfileScreen = ({ onBack }: ProfileScreenProps) => {
  const userInfo = {
    name: "Mohammed A.",
    email: "m.alyousef@ksu.edu.sa",
    phone: "+966 5X XXX XXXX",
  };

  const paymentMethods = [
    { id: "card", label: "Visa •••• 4532", isDefault: true },
    { id: "cash", label: "Cash", isDefault: false },
  ];

  const savedAddresses = [
    { id: "home", label: "Home", address: "Al Malqa District" },
    { id: "work", label: "Work", address: "CCIS Building, KSU" },
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
        <span className="text-sm font-semibold text-foreground flex-1 text-center pr-8">Profile</span>
      </div>

      {/* Profile content */}
      <div className="flex flex-col gap-2 w-full px-3 flex-1 overflow-y-auto">
        {/* User info card */}
        <div className="flex items-center gap-3 p-2.5 rounded-xl bg-secondary/40">
          <div className="w-10 h-10 rounded-full bg-primary/20 flex items-center justify-center shrink-0">
            <User className="w-5 h-5 text-primary" />
          </div>
          <div className="flex flex-col items-start flex-1 min-w-0">
            <span className="text-xs font-semibold text-foreground">{userInfo.name}</span>
            <span className="text-[10px] text-muted-foreground truncate">{userInfo.email}</span>
          </div>
        </div>

        {/* Payment methods */}
        <div className="mt-1">
          <p className="text-[9px] text-muted-foreground uppercase tracking-wider mb-1.5 flex items-center gap-1">
            <CreditCard className="w-3 h-3" /> Payment
          </p>
          {paymentMethods.map((method) => (
            <div
              key={method.id}
              className="flex items-center justify-between w-full p-2 rounded-lg bg-secondary/30 mb-1"
            >
              <span className="text-[10px] text-foreground">{method.label}</span>
              {method.isDefault && (
                <span className="text-[8px] text-primary bg-primary/20 px-1.5 py-0.5 rounded-full">Default</span>
              )}
            </div>
          ))}
        </div>

        {/* Saved addresses */}
        <div className="mt-1">
          <p className="text-[9px] text-muted-foreground uppercase tracking-wider mb-1.5 flex items-center gap-1">
            <MapPin className="w-3 h-3" /> Addresses
          </p>
          {savedAddresses.map((addr) => (
            <div
              key={addr.id}
              className="flex items-center gap-2 w-full p-2 rounded-lg bg-secondary/30 mb-1"
            >
              <span className="text-[10px] font-medium text-foreground">{addr.label}:</span>
              <span className="text-[10px] text-muted-foreground truncate">{addr.address}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Sync status */}
      <div className="pb-3 flex items-center gap-1.5">
        <Smartphone className="w-3 h-3 text-success" />
        <span className="text-[9px] text-muted-foreground">Synced with phone</span>
      </div>
    </div>
  );
};

export default ProfileScreen;

