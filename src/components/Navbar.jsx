import { motion } from "framer-motion";
import { Home, Briefcase, BarChart2, Settings } from "lucide-react";

const navItems = [
  { id: 1, label: "Home", icon: <Home /> },
  { id: 2, label: "Services", icon: <Briefcase /> },
  { id: 3, label: "Activity", icon: <BarChart2 /> },
  { id: 4, label: "Settings", icon: <Settings /> },
];
export default function Navbar() {
  return (
    <nav className="fixed bottom-0 left-0 right-0 bg-white shadow-t rounded-t-2xl p-3 flex justify-around items-center">
      {navItems.map((item) => (
        <button
          key={item.id}
          className="flex flex-col items-center gap-1 text-sm text-gray-700 hover:text-blue-500 transition-colors cursor-pointer"
        >
          <span>{item.icon}</span>
          {item.label}
        </button>
      ))}
    </nav>
  );
}
