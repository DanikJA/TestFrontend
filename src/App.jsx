import { useState } from "react";
import {
  CustomIconAdministration,
  CustomIconHelp,
  CustomIconWaren,
  CustomIconAswah,
  CustomIconEin,
  CustomIconRechn,
  CustomIconAk,
  Verk,
  Statistic,
} from "./components/DropdownTabs";

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
    { icon: <CustomIconAdministration /> },
    { name: "Dashboard", icon: <FiGrid /> },
    { name: "Banking", icon: <FiShoppingCart /> },
    { name: "Telefonie", icon: <FiPhone /> },
    { name: "Accounting", icon: <CustomIconAk /> },
    { name: "Verkauf", icon: <Verk /> },
    { name: "Statistik", icon: <Statistic /> },
    { name: "Post Office", icon: <FiMail /> },
    { name: "Administration", icon: <FiSettings /> },
    { name: "Help", icon: <CustomIconHelp /> },
    { name: "Warenbestand", icon: <CustomIconWaren /> },
    { name: "Auswahllisten", icon: <CustomIconAswah /> },
    { name: "Einkauf", icon: <CustomIconEin /> },
    { name: "Rechnungen", icon: <CustomIconRechn /> },
  ];

  const visibleTabs = tabs.slice();
  const overflowTabs = tabs.slice();

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
        </TabList>
      </Header>
    </Container>
  );
}

export default App;
