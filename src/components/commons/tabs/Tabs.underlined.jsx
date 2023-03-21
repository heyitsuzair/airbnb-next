import React, { useState } from "react";
import { TextLg } from "../index";

const TabsUnderlined = ({ tabs }) => {
  // State for active tab
  const [activeTab, setActiveTab] = useState(0);
  return (
    <div>
      <div className="flex items-center justify-center gap-2">
        {tabs.map((tab, i) => {
          return (
            <button onClick={() => setActiveTab(i)}>
              <TextLg
                text={tab.text}
                color="text-gray-900"
                classes={`pb-2 border-b-2 ${
                  activeTab === i ? " border-black" : "border-white"
                }`}
              />
            </button>
          );
        })}
      </div>
      <div className="mt-5">{tabs[activeTab].component}</div>
    </div>
  );
};

export default TabsUnderlined;
