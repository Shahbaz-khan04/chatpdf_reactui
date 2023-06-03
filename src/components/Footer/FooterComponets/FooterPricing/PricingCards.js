import React from "react";

function PricingCards() {
  return (
    <div className="flex my-5 gap-x-4 pricingCardHeight font-medium">
      {/* Card 1 */}
      <div className="border py-4 w-1/2 border-gray-200 bg-white rounded-lg shadow-md">
        <div className="flex items-center pb-4 px-6  border-b border-gray-200">
          <h1 className="text-lg ">Free</h1>
          <span className="ml-auto text-gray-400 pr-2">current</span>
        </div>
        <h2 className="text-2xl py-5 px-6">
          $0<span className="text-gray-500">/mo</span>
        </h2>
        <ul className="list-disc list-inside">
          <li className="px-6">
            120 pages<span className="text-gray-500">/PDF</span>
          </li>
          <li className="px-6">
            10 MB<span className="text-gray-500">/PDF</span>
          </li>
          <li className="px-6">
            3 PDFs<span className="text-gray-500">/day</span>
          </li>
          <li className="px-6">
            50 questions<span className="text-gray-500">/day</span>
          </li>
        </ul>
      </div>

      {/* Card 2 */}
      <div className="border py-6 w-1/2 border-gray-200 bg-white rounded-lg shadow-md">
        <h1 className="text-lg pb-4 px-6 border-b border-gray-200">Plus</h1>
        <h2 className="text-2xl py-5 px-6">
          $5<span className="text-gray-500">/mo</span>
        </h2>
        <ul className="list-disc list-inside">
          <li className="px-6">
            2000 pages<span className="text-gray-500">/PDF</span>
          </li>
          <li className="px-6">
            32 MB<span className="text-gray-500">/PDF</span>
          </li>
          <li className="px-6">
            50 PDFs<span className="text-gray-500">/day</span>
          </li>
          <li className="px-6">
            1000 questions<span className="text-gray-500">/day</span>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default PricingCards;
