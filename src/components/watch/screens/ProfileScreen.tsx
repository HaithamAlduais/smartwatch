import { User, CreditCard, MapPin, Star, Smartphone } from "lucide-react";

interface ProfileScreenProps {
  onBack: () => void;
}

const ProfileScreen = ({ onBack }: ProfileScreenProps) => {
  const userInfo = {
    name: "Mohammed A.",
    rating: 4.9,
    totalRides: 47
  };

  return (
    <div className="flex flex-col h-full w-full animate-scale-in gap-3">
      {/* Profile header */}
      <div className="flex flex-col items-center gap-2">
        <div className="w-16 h-16 rounded-full bg-primary/20 flex items-center justify-center">
          <User className="w-8 h-8 text-primary" />
        </div>
        <div className="text-center">
          <h2 className="wear-title">{userInfo.name}</h2>
          <div className="flex items-center justify-center gap-1 mt-1">
            <Star className="w-4 h-4 text-warning fill-warning" />
            <span className="wear-body">{userInfo.rating}</span>
            <span className="wear-caption ml-1">• {userInfo.totalRides} rides</span>
          </div>
        </div>
      </div>

      {/* Info cards - scrollable */}
      <div className="flex flex-col gap-2 flex-1 wear-scroll">
        {/* Payment */}
        <div className="wear-card">
          <div className="flex items-center gap-2 mb-2">
            <CreditCard className="w-4 h-4 text-success" />
            <span className="wear-label">Payment</span>
          </div>
          <p className="wear-body">Visa •••• 4532</p>
        </div>

        {/* Address */}
        <div className="wear-card">
          <div className="flex items-center gap-2 mb-2">
            <MapPin className="w-4 h-4 text-primary" />
            <span className="wear-label">Home</span>
          </div>
          <p className="wear-body">Al Malqa District</p>
        </div>
      </div>

      {/* Sync status & done */}
      <div className="flex flex-col items-center gap-2">
        <div className="flex items-center gap-1.5">
          <Smartphone className="w-4 h-4 text-success" />
          <span className="wear-caption">Synced with phone</span>
        </div>
        <button onClick={onBack} className="wear-chip-secondary">
          Done
        </button>
      </div>
    </div>
  );
};

export default ProfileScreen;
