
export function Pricing() {
  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center py-10 px-4">
      <div className="bg-white rounded-lg shadow-lg p-8 w-full max-w-5xl">
        <h1 className="text-2xl font-bold text-center mb-8">Pricing Tiers</h1>
        <div className="flex flex-col md:flex-row justify-between space-y-6 md:space-y-0 md:space-x-6">
          {/* Card 1 */}
          <div className="bg-gray-50 border border-gray-200 rounded-lg p-6 flex-1 text-center shadow-sm">
            <h2 className="text-xl font-semibold mb-4">Basic</h2>
            <p className="text-3xl font-bold mb-4">$10</p>
            <ul className="mb-6">
              <li className="text-gray-600">Feature 1</li>
              <li className="text-gray-600">Feature 2</li>
              <li className="text-gray-600">Feature 3</li>
            </ul>
            <button className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600">
              Select
            </button>
          </div>

          {/* Card 2 */}
          <div className="bg-gray-50 border border-gray-200 rounded-lg p-6 flex-1 text-center shadow-sm">
            <h2 className="text-xl font-semibold mb-4">Pro</h2>
            <p className="text-3xl font-bold mb-4">$30</p>
            <ul className="mb-6">
              <li className="text-gray-600">Feature 1</li>
              <li className="text-gray-600">Feature 2</li>
              <li className="text-gray-600">Feature 3</li>
            </ul>
            <button className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600">
              Select
            </button>
          </div>

          {/* Card 3 */}
          <div className="bg-gray-50 border border-gray-200 rounded-lg p-6 flex-1 text-center shadow-sm">
            <h2 className="text-xl font-semibold mb-4">Enterprise</h2>
            <p className="text-3xl font-bold mb-4">$50</p>
            <ul className="mb-6">
              <li className="text-gray-600">Feature 1</li>
              <li className="text-gray-600">Feature 2</li>
              <li className="text-gray-600">Feature 3</li>
            </ul>
            <button className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600">
              Select
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

