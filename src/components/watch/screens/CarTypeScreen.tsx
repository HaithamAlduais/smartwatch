import { Car, Crown, Sparkles } from "lucide-react";

interface CarTypeScreenProps {
  onBack: () => void;
  onSelectCarType: (type: string) => void;
}

const CarTypeScreen = ({ onBack, onSelectCarType }: CarTypeScreenProps) => {
  const carTypes = [
    { 
      id: "economy", 
      label: "Economy", 
      price: "~15 SAR", 
      eta: "3 min",
      icon: Car,
      color: "text-primary",
      bgColor: "bg-primary/20"
    },
    { 
      id: "comfort", 
      label: "Comfort", 
      price: "~22 SAR", 
      eta: "5 min",
      icon: Sparkles,
      color: "text-info",
      bgColor: "bg-info/20"
    },
    { 
      id: "premium", 
      label: "Premium", 
      price: "~35 SAR", 
      eta: "7 min",
      icon: Crown,
      color: "text-warning",
      bgColor: "bg-warning/20"
    },
  ];

  return (
    <div className="flex flex-col h-full w-full animate-scale-in gap-3">
      {/* Title */}
      <div className="text-center">
        <h2 className="wear-title">Select Ride</h2>
        <p className="wear-caption mt-1">Choose your car type</p>
      </div>

      {/* Car type list chips - 48dp touch targets */}
      <div className="flex flex-col gap-2 flex-1 wear-scroll">
        {carTypes.map((type, index) => (
          <button
            key={type.id}
            onClick={() => onSelectCarType(type.id)}
            className="wear-list-chip animate-fade-in-up"
            style={{ animationDelay: `${index * 0.08}s` }}
            aria-label={`Select ${type.label} for ${type.price}`}
          >
            <div className={`w-10 h-10 rounded-full ${type.bgColor} flex items-center justify-center shrink-0`}>
              <type.icon className={`w-5 h-5 ${type.color}`} />
            </div>
            <div className="flex flex-col items-start flex-1 min-w-0">
              <span className="wear-body font-semibold">{type.label}</span>
              <span className="wear-caption">{type.eta} away</span>
            </div>
            <span className="wear-body font-bold text-primary">{type.price}</span>
          </button>
        ))}
      </div>

      {/* Close chip */}
      <button 
        onClick={onBack}
        className="wear-chip-secondary"
      >
        Cancel
      </button>
    </div>
  );
};

export default CarTypeScreen;
