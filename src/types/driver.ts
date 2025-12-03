export interface DriverInfo {
  id: string;
  name: string;
  rating: number;
  carModel: string;
  carColor: string;
  plateNumber: string;
  photoUrl?: string;
}

export interface TripInfo {
  id: string;
  pickup: string;
  destination: string;
  carType: "economy" | "comfort" | "premium";
  estimatedFare: string;
  distance: string;
  duration: number; // in minutes
  driver: DriverInfo;
}

// Mock driver data for prototype
export const mockDriver: DriverInfo = {
  id: "driver-001",
  name: "Ahmed K.",
  rating: 4.8,
  carModel: "Toyota Camry",
  carColor: "White",
  plateNumber: "ABC 1234",
};

// Mock trip data for prototype
export const mockTrip: TripInfo = {
  id: "trip-001",
  pickup: "King Saud University",
  destination: "CCIS Building",
  carType: "economy",
  estimatedFare: "15 SAR",
  distance: "3.2 km",
  duration: 12,
  driver: mockDriver,
};

