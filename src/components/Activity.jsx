export default function Activity() {
  const activities = [
    {
      id: 1,
      name: "Alice Johnson",
      action: "Sent $200.00",
      amount: "+ $200.00",
    },
    {
      id: 2,
      name: "Bob Smith",
      action: "Received $150.00",
      amount: "+ $150.00",
    },
    {
      id: 3,
      name: "Charlie Davis",
      action: "Sent $50.00",
      amount: "- $50.00",
    },
  ];

  return (
    <div className="mt-6">
      <h2 className="text-lg font-semibold mb-4 ">Recent Activity</h2>
      {activities.map((activity) => (
        <div
          className="flex flex-col gap-4 mb-3 p-2 rounded-xl shadow-sm hover:shadow-md transition-shadow"
          key={activity.id}
        >
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-full bg-gray-300 flex items-center justify-center text-sm font-bold text-gray-700">
              {" "}
              {activity.name.charAt(0)}
            </div>
            <div>
              <p className="font-semibold">{activity.name}</p>
              <p className="text-sm text-gray-500">{activity.action}</p>
            </div>
            <p className="ml-auto text-sm text-green-500">{activity.amount}</p>
          </div>
        </div>
      ))}
    </div>
  );
}
