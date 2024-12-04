import Dashboard from "@/components/Admin/Dashboard/Dashboard";
import NavBar from "@/components/Admin/Shared/NavBar";

const adminLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div>
      <NavBar />
      <div className="w-full min-h-screen ">
        <div className="flex ">
          <div className="w-[10%] "></div>
          <Dashboard />
          <div className="w-[80%] bg-base-200 rounded-box ml-2">{children}</div>
          <div className="w-[10%]"></div>
        </div>
      </div>
    </div>
  );
};

export default adminLayout;
