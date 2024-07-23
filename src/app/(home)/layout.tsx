import Footer from "@/components/footer";
import Header from "@/components/header";

type Props = {
  children: React.ReactNode;
};

const DashboardLayout = ({ children }: Props) => {
  return (
    <div className="relative">
      {/* <Header /> */}
      <main className=" bg-primary">{children}</main>
      {/* <Footer /> */}
    </div>
  );
};

export default DashboardLayout;
