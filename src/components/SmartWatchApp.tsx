import { useState, useEffect } from "react";
import WatchFrame from "./watch/WatchFrame";
import RequestRideScreen from "./watch/screens/RequestRideScreen";
import CarTypeScreen from "./watch/screens/CarTypeScreen";
import DestinationScreen from "./watch/screens/DestinationScreen";
import DriverMatchingScreen from "./watch/screens/DriverMatchingScreen";
import TrackingScreen from "./watch/screens/TrackingScreen";
import ArrivingScreen from "./watch/screens/ArrivingScreen";
import RideInProgressScreen from "./watch/screens/RideInProgressScreen";
import CancelConfirmScreen from "./watch/screens/CancelConfirmScreen";
import RideCompletedScreen from "./watch/screens/RideCompletedScreen";
import SettingsScreen from "./watch/screens/SettingsScreen";
import HistoryScreen from "./watch/screens/HistoryScreen";
import NoDriversScreen from "./watch/screens/NoDriversScreen";
import HelpScreen from "./watch/screens/HelpScreen";
import ProfileScreen from "./watch/screens/ProfileScreen";
import NotificationsScreen from "./watch/screens/NotificationsScreen";
import DriverCallingScreen from "./watch/screens/DriverCallingScreen";
import { toast } from "@/hooks/use-toast";
import { mockDriver, DriverInfo } from "@/types/driver";

type Screen = 
  | "request" 
  | "carType"
  | "destination"
  | "matching" 
  | "tracking" 
  | "arriving" 
  | "inProgress" 
  | "cancelConfirm" 
  | "completed" 
  | "settings" 
  | "history" 
  | "noDrivers" 
  | "help" 
  | "profile"
  | "notifications"
  | "driverCalling";

const SmartWatchApp = () => {
  const [currentScreen, setCurrentScreen] = useState<Screen>("request");
  const [matchingProgress, setMatchingProgress] = useState(0);
  const [trackingProgress, setTrackingProgress] = useState(0);
  const [eta, setEta] = useState(5);
  const [rideProgress, setRideProgress] = useState(0);
  const [remainingTime, setRemainingTime] = useState(12);
  const [previousScreen, setPreviousScreen] = useState<Screen>("request");

  // Trip state
  const [pickup, setPickup] = useState("King Saud University"); // current location
  const [destination, setDestination] = useState("CCIS Building");
  const [driver] = useState<DriverInfo>(mockDriver);

  // Driver matching simulation
  useEffect(() => {
    if (currentScreen === "matching") {
      setMatchingProgress(0);
      const interval = setInterval(() => {
        setMatchingProgress((prev) => {
          if (prev >= 100) { 
            clearInterval(interval); 
            setTimeout(() => {
              toast({ title: "Driver found!", description: `${driver.name} is on the way` });
              setCurrentScreen("tracking");
            }, 500); 
            return 100; 
          }
          return prev + 5;
        });
      }, 150);
      return () => clearInterval(interval);
    }
  }, [currentScreen, driver.name]);

  // Driver tracking simulation
  useEffect(() => {
    if (currentScreen === "tracking") {
      setTrackingProgress(0); 
      setEta(5);
      const interval = setInterval(() => {
        setTrackingProgress((prev) => {
          if (prev >= 100) { 
            clearInterval(interval); 
            toast({ title: "Driver arrived!", description: "Your driver is waiting outside" });
            setTimeout(() => setCurrentScreen("arriving"), 500); 
            return 100; 
          }
          return prev + 2;
        });
        setEta((prev) => Math.max(1, prev - 0.1));
      }, 200);
      return () => clearInterval(interval);
    }
  }, [currentScreen]);

  // Ride in progress simulation
  useEffect(() => {
    if (currentScreen === "inProgress") {
      setRideProgress(0); 
      setRemainingTime(12);
      const interval = setInterval(() => {
        setRideProgress((prev) => {
          if (prev >= 100) { 
            clearInterval(interval); 
            setTimeout(() => setCurrentScreen("completed"), 500); 
            return 100; 
          }
          return prev + 1;
        });
        setRemainingTime((prev) => Math.max(0, prev - 0.12));
      }, 100);
      return () => clearInterval(interval);
    }
  }, [currentScreen]);

  // Handlers
  const handleRequestRide = () => setCurrentScreen("carType");
  const handleSelectCarType = (type: string) => {
    setCurrentScreen("matching");
    toast({ title: "Finding driver...", description: `Looking for nearest ${type} driver` });
  };
  const handleSelectDestination = (dest: string) => {
    setDestination(dest);
    setCurrentScreen("request");
    toast({ title: "Destination set", description: dest });
  };
  const handleCancel = () => { setPreviousScreen(currentScreen); setCurrentScreen("cancelConfirm"); };
  const handleConfirmCancel = () => { setCurrentScreen("request"); toast({ title: "Ride cancelled", description: "Your ride has been cancelled" }); };
  const handleBack = () => setCurrentScreen(previousScreen);
  const handleBackToRequest = () => setCurrentScreen("request");
  const handleShare = () => toast({ title: "Trip shared", description: "Your trip details have been shared" });
  const handleNewRide = () => setCurrentScreen("request");
  const handleContactDriver = () => setCurrentScreen("driverCalling");
  const handleAcceptCall = () => { toast({ title: "Call connected", description: "Redirecting to phone..." }); setCurrentScreen("tracking"); };
  const handleDeclineCall = () => { toast({ title: "Call declined" }); setCurrentScreen("tracking"); };
  const getDistanceText = () => `${Math.round(Math.max(50, 500 * (1 - trackingProgress / 100)))}m away`;

  const renderScreen = () => {
    switch (currentScreen) {
      case "request": 
        return (
          <RequestRideScreen 
            onRequestRide={handleRequestRide} 
            onSettings={() => setCurrentScreen("settings")} 
            onHistory={() => setCurrentScreen("history")}
            onEditDestination={() => setCurrentScreen("destination")}
            pickup={pickup}
            destination={destination}
          />
        );
      case "carType":
        return (
          <CarTypeScreen 
            onBack={handleBackToRequest}
            onSelectCarType={handleSelectCarType}
          />
        );
      case "destination":
        return (
          <DestinationScreen 
            onBack={handleBackToRequest}
            onSelectDestination={handleSelectDestination}
          />
        );
      case "matching": 
        return <DriverMatchingScreen onCancel={handleCancel} onMatched={() => setCurrentScreen("tracking")} progress={matchingProgress} />;
      case "tracking": 
        return (
          <TrackingScreen 
            eta={Math.ceil(eta)} 
            distance={getDistanceText()} 
            onCancel={handleCancel} 
            onContactDriver={handleContactDriver}
            progress={trackingProgress}
            driver={driver}
          />
        );
      case "arriving": 
        return <ArrivingScreen onContinue={() => setCurrentScreen("inProgress")} />;
      case "inProgress": 
        return <RideInProgressScreen remainingTime={Math.ceil(remainingTime)} progress={rideProgress} destination={destination} onShare={handleShare} />;
      case "cancelConfirm": 
        return <CancelConfirmScreen onConfirm={handleConfirmCancel} onBack={handleBack} />;
      case "completed": 
        return <RideCompletedScreen onNewRide={handleNewRide} />;
      case "settings": 
        return (
          <SettingsScreen 
            onBack={handleBackToRequest} 
            onHelp={() => setCurrentScreen("help")}
            onProfile={() => setCurrentScreen("profile")}
            onNotifications={() => setCurrentScreen("notifications")}
          />
        );
      case "history": 
        return <HistoryScreen onBack={handleBackToRequest} />;
      case "noDrivers": 
        return <NoDriversScreen onRetry={handleRequestRide} />;
      case "help": 
        return <HelpScreen onBack={() => setCurrentScreen("settings")} />;
      case "profile":
        return <ProfileScreen onBack={() => setCurrentScreen("settings")} />;
      case "notifications":
        return <NotificationsScreen onBack={() => setCurrentScreen("settings")} />;
      case "driverCalling":
        return <DriverCallingScreen driverName={driver.name} onAccept={handleAcceptCall} onDecline={handleDeclineCall} />;
      default: 
        return <RequestRideScreen onRequestRide={handleRequestRide} />;
    }
  };

  const screenLabels: Record<Screen, string> = { 
    request: "Home", 
    carType: "Car Type",
    destination: "Destination",
    matching: "Matching", 
    tracking: "Tracking", 
    arriving: "Arriving", 
    inProgress: "In Ride", 
    cancelConfirm: "Cancel", 
    completed: "Done", 
    settings: "Settings", 
    history: "History", 
    noDrivers: "No Drivers", 
    help: "Help", 
    profile: "Profile",
    notifications: "Alerts",
    driverCalling: "Calling"
  };
  
  const mainScreens: Screen[] = ["request", "carType", "destination", "matching", "tracking", "arriving", "inProgress", "completed"];
  const utilityScreens: Screen[] = ["settings", "profile", "notifications", "history"];

  return (
    <div className="min-h-screen bg-background flex flex-col items-center justify-center p-4">
      <div className="text-center mb-6">
        <h1 className="text-2xl font-bold text-foreground mb-1">SmartRide Watch</h1>
        <p className="text-sm text-muted-foreground">WearOS Prototype • HCI Project (SWE 482)</p>
      </div>
      
      <WatchFrame>{renderScreen()}</WatchFrame>
      
      <div className="mt-6 flex flex-col items-center gap-3 max-w-xl">
        <p className="text-[10px] text-muted-foreground uppercase tracking-wider">Main Flow</p>
        <div className="flex flex-wrap justify-center gap-1.5">
          {mainScreens.map((screen) => (
            <button 
              key={screen} 
              onClick={() => setCurrentScreen(screen)} 
              className={`px-2.5 py-1 rounded-full text-[11px] font-medium transition-all ${currentScreen === screen ? "bg-primary text-primary-foreground" : "bg-secondary text-secondary-foreground hover:bg-secondary/80"}`}
            >
              {screenLabels[screen]}
            </button>
          ))}
        </div>
        <p className="text-[10px] text-muted-foreground uppercase tracking-wider mt-2">Utility Screens</p>
        <div className="flex flex-wrap justify-center gap-1.5">
          {utilityScreens.map((screen) => (
            <button 
              key={screen} 
              onClick={() => setCurrentScreen(screen)} 
              className={`px-2.5 py-1 rounded-full text-[11px] font-medium transition-all ${currentScreen === screen ? "bg-primary text-primary-foreground" : "bg-secondary text-secondary-foreground hover:bg-secondary/80"}`}
            >
              {screenLabels[screen]}
            </button>
          ))}
        </div>
      </div>
      
      <div className="mt-4 text-center">
        <p className="text-xs text-muted-foreground max-w-md">
          Navigate through {Object.keys(screenLabels).length} screens in the ride flow
        </p>
        <p className="text-[10px] text-muted-foreground mt-1">
          Flow: Request → Car Type → Matching → Tracking → Arriving → In Progress → Completed
        </p>
      </div>
    </div>
  );
};

export default SmartWatchApp;
