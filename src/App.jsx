import { useLocation, useNavigate, Routes, Route } from "react-router-dom";
import { useState, useEffect } from "react";
import { nanoid } from "nanoid";
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
} from "./components/Icons";

import { Container, Header, TabList, TabItem, Icon, Logo } from "./AppStyled";

import {
  FiGrid,
  FiPhone,
  FiMail,
  FiSettings,
  FiShoppingCart,
} from "react-icons/fi";

const tabs = [
  { name: "Dashboard", icon: <FiGrid />, path: "/dashboard", order: 0 },
  { name: "Banking", icon: <FiShoppingCart />, path: "/banking", order: 1 },
  { name: "Telefonie", icon: <FiPhone />, path: "/telefonie", order: 2 },
  { name: "Accounting", icon: <CustomIconAk />, path: "/accounting", order: 3 },
  { name: "Verkauf", icon: <Verk />, path: "/verkauf", order: 4 },
  { name: "Statistik", icon: <Statistic />, path: "/statistik", order: 5 },
  { name: "Post Office", icon: <FiMail />, path: "/post", order: 6 },
  { name: "Administration", icon: <FiSettings />, path: "/admin", order: 7 },
  { name: "Help", icon: <CustomIconHelp />, path: "/help", order: 8 },
  {
    name: "Warenbestand",
    icon: <CustomIconWaren />,
    path: "/warenbestand",
    order: 9,
  },
  {
    name: "Auswahllisten",
    icon: <CustomIconAswah />,
    path: "/auswahllisten",
    order: 10,
  },
  { name: "Einkauf", icon: <CustomIconEin />, path: "/einkauf", order: 11 },
  {
    name: "Rechnungen",
    icon: <CustomIconRechn />,
    path: "/rechnungen",
    order: 12,
  },
].map((tab) => ({
  ...tab,
  id: tab.name,
}));

function App() {
  const [tabList, setTabList] = useState(tabs);
  const [currentTab, setCurrentTab] = useState(null);

  useEffect(() => {
    const storedTabs = localStorage.getItem("tabs");
    if (storedTabs) {
      setTabList(JSON.parse(storedTabs));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("tabs", JSON.stringify(tabList));
  }, [tabList]);

  const navigate = useNavigate();
  const location = useLocation();
  const activeTab = tabList.find((tab) => location.pathname === tab.path)?.name;

  function dragStartHandler(event, tab) {
    setCurrentTab(tab);
  }
  function dragLeaveHandler(event) {}
  function dragEndHandler(event) {}
  function dragOverHandler(event) {
    event.preventDefault();
  }
  function dropHandler(event, tab) {
    event.preventDefault();
    setTabList(
      tabList.map((t) => {
        if (t.id === tab.id) {
          return { ...t, order: currentTab.order };
        }
        if (t.id === currentTab.id) {
          return { ...t, order: tab.order };
        }
        return t;
      })
    );
  }

  const sortTabs = (a, b) => {
    if (a.order > b.order) {
      return 1;
    } else {
      return -1;
    }
  };

  return (
    <Container>
      <Header>
        <TabList>
          <Logo>
            <CustomIconAdministration />
          </Logo>
          {tabList.sort(sortTabs).map((tab) => (
            <TabItem
              key={tab.name}
              className={activeTab === tab.name ? "active" : ""}
              onClick={() => navigate(tab.path)}
              draggable={true}
              onDragStart={(event) => dragStartHandler(event, tab)}
              onDragLeave={(event) => dragLeaveHandler(event, tab)}
              onDragEnd={(event) => dragEndHandler(event, tab)}
              onDragOver={(event) => dragOverHandler(event, tab)}
              onDrop={(event) => dropHandler(event, tab)}
            >
              <Icon>{tab.icon}</Icon>
              {tab.name}
            </TabItem>
          ))}
        </TabList>
      </Header>
      <Routes>
        {tabList.map((tab) => (
          <Route key={tab.name} path={tab.path} element={null}></Route>
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
