import { ReactNode } from "react";

interface WatchFrameProps {
  children: ReactNode;
}

const WatchFrame = ({ children }: WatchFrameProps) => {
  return (
    <div className="watch-frame w-[320px] h-[320px] relative">
      <div className="watch-screen absolute inset-3 rounded-full overflow-hidden">
        <div className="w-full h-full flex flex-col items-center justify-center p-6">
          {children}
        </div>
      </div>
    </div>
  );
};

export default WatchFrame;
