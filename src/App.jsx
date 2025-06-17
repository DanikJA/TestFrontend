import { useState } from "react";
import {
  Container,
  Header,
  TabList,
  TabItem,
  Icon,
  OverflowMenu,
  OverflowButton,
} from "./AppStyled";

import {
  FiGrid,
  FiPhone,
  FiMail,
  FiBarChart2,
  FiSettings,
  FiShoppingCart,
} from "react-icons/fi";

function App() {
  const [activeTab, setActiveTab] = useState("Dashboard");

  const tabs = [
    { name: "Dashboard", icon: <FiGrid /> },
    { name: "Banking", icon: <FiShoppingCart /> },
    { name: "Telefonie", icon: <FiPhone /> },
    { name: "Accounting", icon: <FiBarChart2 /> },
    { name: "Verkauf", icon: <FiBarChart2 /> },
    { name: "Statistik", icon: <FiBarChart2 /> },
    { name: "Post Office", icon: <FiMail /> },
    { name: "Administration", icon: <FiSettings /> },
    { name: "Help", icon: <FiSettings /> },
    { name: "Warenbestand", icon: <FiSettings /> },
    { name: "Auswahllisten", icon: <FiSettings /> },
    { name: "Einkauf", icon: <FiSettings /> },
    { name: "Rechnungen", icon: <FiSettings /> },
  ];

  const visibleTabs = tabs.slice(0, 9);
  const overflowTabs = tabs.slice(9);

  return (
    <Container>
      <Header>
        <TabList>
          {visibleTabs.map((tab) => (
            <TabItem
              key={tab.name}
              className={activeTab === tab.name ? "active" : ""}
              onClick={() => setActiveTab(tab.name)}
            >
              <Icon>{tab.icon}</Icon>
              {tab.name}
            </TabItem>
          ))}
          <OverflowMenu>
            <OverflowButton>⋯</OverflowButton>
            <div className="dropdown">
              {overflowTabs.map((tab) => (
                <div
                  key={tab.name}
                  className="dropdown-item"
                  onClick={() => setActiveTab(tab.name)}
                >
                  <Icon>{tab.icon}</Icon>
                  {tab.name}
                </div>
              ))}
            </div>
          </OverflowMenu>
        </TabList>
      </Header>
    </Container>
  );
}

export default App;
