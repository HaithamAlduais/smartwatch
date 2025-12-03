import { ChevronLeft, HelpCircle, MessageCircle, FileText, Headphones } from "lucide-react";

interface HelpScreenProps {
  onBack: () => void;
}

// Heuristic 10: Help and documentation
// Heuristic 6: Recognition rather than recall

const HelpScreen = ({ onBack }: HelpScreenProps) => {
  const helpItems = [
    { icon: MessageCircle, label: "Chat Support", desc: "Get instant help" },
    { icon: FileText, label: "FAQ", desc: "Common questions" },
    { icon: Headphones, label: "Call Support", desc: "Talk to us" },
  ];

  return (
    <div className="flex flex-col items-center h-full w-full animate-scale-in">
      {/* Header */}
      <div className="flex items-center w-full px-2 pt-2 pb-3">
        <button 
          onClick={onBack}
          className="w-8 h-8 rounded-full bg-secondary/50 flex items-center justify-center"
          aria-label="Go back"
        >
          <ChevronLeft className="w-5 h-5 text-foreground" />
        </button>
        <span className="text-sm font-semibold text-foreground flex-1 text-center pr-8">Help</span>
      </div>

      {/* Help icon */}
      <div className="w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center mb-3">
        <HelpCircle className="w-6 h-6 text-primary" />
      </div>

      {/* Help options */}
      <div className="flex flex-col gap-2 w-full px-4 flex-1">
        {helpItems.map((item, index) => (
          <button
            key={item.label}
            className="flex items-center gap-3 w-full p-2.5 rounded-xl bg-secondary/40 hover:bg-secondary/60 transition-all animate-fade-in-up"
            style={{ animationDelay: `${index * 0.1}s` }}
          >
            <div className="w-8 h-8 rounded-full bg-secondary flex items-center justify-center shrink-0">
              <item.icon className="w-4 h-4 text-primary" />
            </div>
            <div className="flex flex-col items-start">
              <span className="text-xs font-medium text-foreground">{item.label}</span>
              <span className="text-[9px] text-muted-foreground">{item.desc}</span>
            </div>
          </button>
        ))}
      </div>

      {/* Quick tip - Heuristic 10 */}
      <div className="pb-3 px-4 text-center">
        <p className="text-[9px] text-muted-foreground">
          Swipe up during ride for quick help
        </p>
      </div>
    </div>
  );
};

export default HelpScreen;
