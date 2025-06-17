import { useLocation, useNavigate, Routes, Route } from "react-router-dom";
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

import { Container, Header, TabList, TabItem, Icon } from "./AppStyled";

import {
  FiGrid,
  FiPhone,
  FiMail,
  FiSettings,
  FiShoppingCart,
} from "react-icons/fi";

const tabs = [
  { icon: <CustomIconAdministration /> },
  { name: "Dashboard", icon: <FiGrid />, path: "/dashboard" },
  { name: "Banking", icon: <FiShoppingCart />, path: "/banking" },
  { name: "Telefonie", icon: <FiPhone />, path: "/telefonie" },
  { name: "Accounting", icon: <CustomIconAk />, path: "/accounting" },
  { name: "Verkauf", icon: <Verk />, path: "/verkauf" },
  { name: "Statistik", icon: <Statistic />, path: "/statistik" },
  { name: "Post Office", icon: <FiMail />, path: "/post" },
  { name: "Administration", icon: <FiSettings />, path: "/admin" },
  { name: "Help", icon: <CustomIconHelp />, path: "/help" },
  { name: "Warenbestand", icon: <CustomIconWaren />, path: "/warenbestand" },
  { name: "Auswahllisten", icon: <CustomIconAswah />, path: "/auswahllisten" },
  { name: "Einkauf", icon: <CustomIconEin />, path: "/einkauf" },
  { name: "Rechnungen", icon: <CustomIconRechn />, path: "/rechnungen" },
];

function App() {
  const navigate = useNavigate();
  const location = useLocation();

  const activeTab = tabs.find((tab) => location.pathname === tab.path)?.name;

  return (
    <Container>
      <Header>
        <TabList>
          {tabs.map((tab) => (
            <TabItem
              key={tab.name}
              className={activeTab === tab.name ? "active" : ""}
              onClick={() => navigate(tab.path)}
            >
              <Icon>{tab.icon}</Icon>
              {tab.name}
            </TabItem>
          ))}
        </TabList>
      </Header>

      <Routes>
        {tabs.map((tab) => (
          <Route key={tab.path} path={tab.path} element={null} />
        ))}
        <Route
          path="*"
          element={<div style={{ padding: "20px" }}>Not found</div>}
        />
      </Routes>
    </Container>
  );
}

export default App;
