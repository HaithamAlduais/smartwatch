import { ChevronLeft, Calendar, Clock, Check } from "lucide-react";
import { useState } from "react";

interface ScheduleScreenProps {
  onBack: () => void;
  onSchedule: (time: string) => void;
}

// Heuristic 7: Flexibility and efficiency - Schedule for later
// Heuristic 4: Consistency - Standard time picker pattern

const ScheduleScreen = ({ onBack, onSchedule }: ScheduleScreenProps) => {
  const [selectedTime, setSelectedTime] = useState<string | null>(null);

  const timeOptions = [
    { label: "In 30 min", value: "30min" },
    { label: "In 1 hour", value: "1h" },
    { label: "In 2 hours", value: "2h" },
    { label: "Tomorrow 9AM", value: "tomorrow" },
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
        <span className="text-sm font-semibold text-foreground flex-1 text-center pr-8">Schedule</span>
      </div>

      {/* Icon */}
      <div className="w-10 h-10 rounded-full bg-primary/20 flex items-center justify-center mb-2">
        <Calendar className="w-5 h-5 text-primary" />
      </div>

      <p className="text-[10px] text-muted-foreground mb-3">Pick up time</p>

      {/* Time options */}
      <div className="flex flex-col gap-1.5 w-full px-4 flex-1 overflow-y-auto">
        {timeOptions.map((option) => (
          <button
            key={option.value}
            onClick={() => setSelectedTime(option.value)}
            className={`flex items-center justify-between w-full px-3 py-2 rounded-xl transition-all ${
              selectedTime === option.value 
                ? "bg-primary/20 border border-primary/50" 
                : "bg-secondary/40 hover:bg-secondary/60"
            }`}
          >
            <div className="flex items-center gap-2">
              <Clock className="w-3.5 h-3.5 text-muted-foreground" />
              <span className="text-xs font-medium text-foreground">{option.label}</span>
            </div>
            {selectedTime === option.value && (
              <Check className="w-4 h-4 text-primary" />
            )}
          </button>
        ))}
      </div>

      {/* Confirm button */}
      <div className="pb-3 pt-2">
        <button 
          onClick={() => selectedTime && onSchedule(selectedTime)}
          disabled={!selectedTime}
          className="watch-btn-primary px-6 py-2 text-xs disabled:opacity-50"
        >
          Confirm Schedule
        </button>
      </div>
    </div>
  );
};

export default ScheduleScreen;
