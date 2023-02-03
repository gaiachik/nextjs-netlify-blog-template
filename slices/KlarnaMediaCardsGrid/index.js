import React from 'react'

const KlarnaMediaCardsGrid = ({ slice }) => {
  return (
    <div className="grid grid-cols-3 gap-6">
      {slice.items.map((item, index) => (
        <div key={index} className="relative p-6">
          <img className="w-full" src={item.imagecard.url} alt={item.imagecard.alt} />
          {item.tag && (
            <div className="absolute top-0 left-0 bg-gray-200 px-2 py-1 rounded-full text-xs font-medium">
              {item.tag}
            </div>
          )}
          <div className="mt-2 text-center text-xl font-medium">{item.captiontitle}</div>
        </div>
      ))}
    </div>
  );
};

export default KlarnaMediaCardsGrid;