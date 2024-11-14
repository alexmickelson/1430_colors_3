export function Pricing() {
  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center py-10 px-4">
      <div className="featureHero">
        <h1 className="pricingHeader">Pricing Tiers</h1>
        <div className="cardContainer">
          {/* Card 1 */}
          <div className="card">
            <h2 className="text-2xl font-semibold mb-6">Basic</h2>
            <p className="text-4xl font-bold mb-6">$10</p>
            <ul className="mb-8">
              <li className="text-bodyText">Feature 1</li>
              <li className="text-bodyText">Feature 2</li>
              <li className="text-bodyText">Feature 3</li>
            </ul>
            <button className="btn">Select</button>
          </div>

          {/* Card 2 */}
          <div className="card">
            <h2 className="text-2xl font-semibold mb-6">Pro</h2>
            <p className="text-4xl font-bold mb-6">$30</p>
            <ul className="mb-8">
              <li className="text-bodyText">Feature 1</li>
              <li className="text-bodyText">Feature 2</li>
              <li className="text-bodyText">Feature 3</li>
            </ul>
            <button className="btn">Select</button>
          </div>

          {/* Card 3 */}
          <div className="card">
            <h2 className="text-2xl font-semibold mb-6">Enterprise</h2>
            <p className="text-4xl font-bold mb-6">$50</p>
            <ul className="mb-8">
              <li className="text-bodyText">Feature 1</li>
              <li className="text-bodyText">Feature 2</li>
              <li className="text-bodyText">Feature 3</li>
            </ul>
            <button className="btn">Select</button>
          </div>
        </div>
      </div>
    </div>
  );
}
