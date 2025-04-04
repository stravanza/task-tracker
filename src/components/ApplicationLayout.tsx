import { ReactNode } from "react";
import RightDrawer from "./RightDrawer";

interface ChildrenWrapperProps {
  children: ReactNode;
}

const ApplicationLayout = ({ children }: ChildrenWrapperProps) => {
  return (
    <div className="min-h-screen flex flex-col">
      <RightDrawer />
      {children}
    </div>
  );
};

export default ApplicationLayout;
