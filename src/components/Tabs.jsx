import { useState } from "react";

const tabs = [
    { title: "Tab 1", content: "Content for Tab 1" },
    { title: "Tab 2", content: "Content for Tab 2" },
    { title: "Tab 3", content: "Content for Tab 3" },
];
export const Tabs = () => {
    const [activeTab, setActiveTab] = useState(0);

    return (
        <div>
            <div className="tab-buttons">
                {tabs.map((tab, index) => (
                    <button
                        key={index}
                        onClick={() => setActiveTab(index)}
                        className={index === activeTab ? "active" : ""}
                    >
                        {tab.title}
                    </button>
                ))}
            </div>
            <div className="tab-content">{tabs[activeTab].content}</div>
        </div>
    );
};
