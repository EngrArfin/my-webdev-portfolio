const ClientMessageView = () => {
  const messages = [
    {
      id: 1,
      name: "Arfin",
      email: "arfin@example.com",
      subject: "Order Inquiry",
      description: "I need help with my order.",
    },
    {
      id: 2,
      name: "Suvo Rasher Mehedi",
      email: "suvo@example.com",
      subject: "Product Issue",
      description: "The product is defective.",
    },
    {
      id: 3,
      name: "Mark Lee",
      email: "mark@example.com",
      subject: "Delivery Status",
      description: "When will my package arrive?",
    },
    {
      id: 4,
      name: "Sara White",
      email: "sara@example.com",
      subject: "Refund Request",
      description: "I would like a refund for my purchase.",
    },
  ];

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold mb-6">Client Messages</h1>
      <div className="overflow-x-auto bg-white shadow-md rounded-lg">
        <table className="min-w-full table-auto">
          <thead>
            <tr>
              <th className="px-4 py-2 text-left border-b">Name</th>
              <th className="px-4 py-2 text-left border-b">Email</th>
              <th className="px-4 py-2 text-left border-b">Subject</th>
              <th className="px-4 py-2 text-left border-b">Message</th>
            </tr>
          </thead>
          <tbody>
            {messages.length === 0 ? (
              <tr>
                <td colSpan={4} className="px-4 py-2 text-center text-gray-500">
                  No messages available
                </td>
              </tr>
            ) : (
              messages.map((message) => (
                <tr key={message.id}>
                  <td className="px-4 py-2 border-b">{message.name}</td>
                  <td className="px-4 py-2 border-b">{message.email}</td>
                  <td className="px-4 py-2 border-b">{message.subject}</td>
                  <td className="px-4 py-2 border-b">{message.description}</td>
                </tr>
              ))
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ClientMessageView;
