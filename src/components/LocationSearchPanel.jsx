import React from "react";

const LocationSearchPanel = ({
  setPanelopen,
  setVehiclepanel,
  suggestions = [],
}) => {
  return (
    <div>
      {Array.isArray(suggestions) && suggestions.length > 0 ? (
        suggestions.map((location, index) => (
          <div
            key={index}
            onClick={() => {
              setVehiclepanel(true);
              setPanelopen(false);
            }}
            className="flex items-center justify-start border-gray-50 active:border-black my-2 gap-4 border-2 p-3 rounded-xl"
          >
            <h2 className="bg-[#eee] font-bold h-8 w-12 rounded-full flex items-center justify-center">
              <i className="ri-map-pin-fill"></i>
            </h2>
            <h4 className="text-medium font-medium">{location.display_name}</h4>
          </div>
        ))
      ) : (
        <p className="text-gray-500 text-center">No suggestions available</p>
      )}
    </div>
  );
};

export default LocationSearchPanel;
