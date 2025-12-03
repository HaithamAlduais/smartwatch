import { ReactNode } from "react";

interface WatchFrameProps {
  children: ReactNode;
}

const WatchFrame = ({ children }: WatchFrameProps) => {
  return (
    <div className="watch-frame w-[320px] h-[320px] flex items-center justify-center">
      <div className="watch-screen w-full h-full flex items-center justify-center">
        <div className="relative w-full h-full flex flex-col items-center justify-center p-6">
          {children}
        </div>
      </div>
    </div>
  );
};

export default WatchFrame;
