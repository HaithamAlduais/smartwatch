import { ChevronLeft, Car, Crown, Sparkles } from "lucide-react";

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
    <div className="flex flex-col h-full w-full animate-scale-in px-4 py-4 gap-3 overflow-y-auto">
      <div className="text-left">
        <p className="text-xs text-muted-foreground">Choose car type</p>
        <h2 className="text-lg font-semibold text-foreground">Select Ride</h2>
      </div>

      <div className="flex flex-col gap-2 flex-1">
        {carTypes.map((type, index) => (
          <button
            key={type.id}
            onClick={() => onSelectCarType(type.id)}
            className="watch-card animate-fade-in-up"
            style={{ animationDelay: `${index * 0.06}s` }}
            aria-label={`Select ${type.label} ride for ${type.price}`}
          >
            <div className={`w-12 h-12 rounded-2xl ${type.bgColor} flex items-center justify-center shrink-0`}>
              <type.icon className={`w-6 h-6 ${type.color}`} />
            </div>
            <div className="flex flex-col items-start flex-1 min-w-0">
              <span className="text-sm font-semibold text-foreground">{type.label}</span>
              <span className="text-[11px] text-muted-foreground">{type.eta} away</span>
            </div>
            <div className="text-right">
              <span className="text-sm font-bold text-primary">{type.price}</span>
            </div>
          </button>
        ))}
      </div>

      <button onClick={onBack} className="watch-ghost">Close</button>
    </div>
  );
};

export default CarTypeScreen;

