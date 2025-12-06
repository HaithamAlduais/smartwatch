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
        <span className="text-sm font-semibold text-foreground flex-1 text-center pr-8">Select Ride</span>
      </div>

      {/* Car type options */}
      <div className="flex flex-col gap-2 w-full px-3 flex-1 overflow-y-auto">
        {carTypes.map((type, index) => (
          <button
            key={type.id}
            onClick={() => onSelectCarType(type.id)}
            className="flex items-center gap-3 w-full p-2.5 rounded-xl bg-secondary/40 hover:bg-secondary/60 transition-all animate-fade-in-up"
            style={{ animationDelay: `${index * 0.1}s` }}
            aria-label={`Select ${type.label} ride for ${type.price}`}
          >
            <div className={`w-10 h-10 rounded-full ${type.bgColor} flex items-center justify-center shrink-0`}>
              <type.icon className={`w-5 h-5 ${type.color}`} />
            </div>
            <div className="flex flex-col items-start flex-1 min-w-0">
              <span className="text-xs font-semibold text-foreground">{type.label}</span>
              <span className="text-[10px] text-muted-foreground">{type.eta} away</span>
            </div>
            <div className="text-right">
              <span className="text-xs font-bold text-primary">{type.price}</span>
            </div>
          </button>
        ))}
      </div>

      {/* Hint */}
      <div className="pb-3 pt-2">
        <span className="text-[9px] text-muted-foreground">Prices are estimates</span>
      </div>
    </div>
  );
};

export default CarTypeScreen;

