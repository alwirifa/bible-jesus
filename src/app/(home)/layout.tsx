import Footer from "@/components/footer";
import Header from "@/components/header";

type Props = {
  children: React.ReactNode;
};

const DashboardLayout = ({ children }: Props) => {
  return (
    <div className="h-full relative">
      <Header />
      <main className="px-3 lg:px-14">{children}</main>
      <Footer />
    </div>
  );
};

export default DashboardLayout;
