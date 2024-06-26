import Navbar from "@/components/navbar";
import Sidebar from "@/components/sidebar";

export default function Layout({ children }) {
  return (
    <div className="bg-[#130B2B] flex h-screen flex-col md:flex-row md:overflow-hidden">
      <div className="w-full flex-none md:w-64">
        <Navbar />
        <Sidebar />
      </div>
      <div className="flex-grow p-6 md:overflow-y-auto md:p-12">{children}</div>
    </div>
  );
}
