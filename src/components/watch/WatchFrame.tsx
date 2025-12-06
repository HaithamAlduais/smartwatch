import { ReactNode } from "react";

interface WatchFrameProps {
  children: ReactNode;
}

const WatchFrame = ({ children }: WatchFrameProps) => {
  return (
    <div className="watch-frame w-[320px] h-[320px] relative">
      <div className="watch-screen">
        {/* Circular safe area with proper padding for round displays */}
        <div className="w-full h-full flex flex-col items-center justify-center px-4 py-5 wear-scroll">
          {children}
        </div>
      </div>
    </div>
  );
};

export default WatchFrame;
