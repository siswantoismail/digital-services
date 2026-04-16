import { ArrowRight } from "lucide-react";

const offers = [
  {
    id: 1,
    title: "50% Off TV Kabel",
    tag: "NEW USER",
    bg: "from-purple-500 to-indigo-700",
  },
  {
    id: 2,
    title: "Diskon Pulsa 30%",
    tag: "HOT",
    bg: "from-blue-500 to-cyan-600",
  },
  {
    id: 3,
    title: "Cashback PLN 20%",
    tag: "PROMO",
    bg: "from-pink-500 to-red-500",
  },
];

export default function SpecialOffers() {
  return (
    <section className="mt-6">
      {/* Header */}
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-lg font-semibold">Special Offers</h2>
        <button className="flex items-center gap-1 text-sm text-blue-500">
          See All <ArrowRight size={16} />
        </button>
      </div>

      {/* Scroll Container */}
      <div className="flex gap-4 overflow-x-auto scrollbar-hide">
        {offers.map((offer) => (
          <div
            key={offer.id}
            className={`min-w-[260px] h-[140px] rounded-2xl p-4 text-white bg-gradient-to-br ${offer.bg} flex flex-col justify-end relative`}
          >
            {/* Tag */}
            <span className="absolute top-3 left-3 bg-white/30 text-[10px] px-3 py-1 rounded-full backdrop-blur">
              {offer.tag}
            </span>

            {/* Content */}
            <h3 className="text-sm font-semibold">{offer.title}</h3>
          </div>
        ))}
      </div>
    </section>
  );
}
