import { motion } from "framer-motion";

import {
  Smartphone,
  BarChart3,
  Zap,
  ShieldCheck,
  Droplets,
  Gamepad2,
  Monitor,
  ReceiptText,
} from "lucide-react";

const services = [
  { id: "1", name: "Pulsa", icon: Smartphone },
  { id: "2", name: "Data", icon: BarChart3 },
  { id: "3", name: "PLN", icon: Zap },
  { id: "4", name: "BPJS", icon: ShieldCheck },
  { id: "5", name: "PDAM", icon: Droplets },
  { id: "6", name: "Games", icon: Gamepad2 },
  { id: "7", name: "TV Kabel", icon: Monitor },
  { id: "8", name: "Angsuran", icon: ReceiptText },
];

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.05,
    },
  },
};

const item = {
  hidden: { opacity: 0, scale: 0.8 },
  show: { opacity: 1, scale: 1 },
};

export default function ServiceGrid() {
  return (
    <motion.section
      variants={container}
      initial="hidden"
      animate="show"
      className="px-6 mt-8"
    >
      <div className="grid grid-cols-4 gap-y-8 gap-x-4">
        {services.map((service) => (
          <motion.div
            key={service.id}
            variants={item}
            className="flex flex-col items-center gap-2 group cursor-pointer"
          >
            <div className="w-14 h-14 rounded-2xl bg-secondary-container bg-blue-100 flex items-center justify-center text-primary transition-all group-hover:scale-110 group-hover:bg-primary group-hover:text-white active:scale-90">
              <service.icon size={24} />
            </div>
            <span className="font-medium text-[11px] text-on-surface">
              {service.name}
            </span>
          </motion.div>
        ))}
      </div>
    </motion.section>
  );
}
