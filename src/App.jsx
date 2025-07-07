import { useLocation, useNavigate, Routes, Route } from "react-router-dom";
import { useState, useEffect } from "react";
import { iconMap, tabs } from "./components/Tabs";
import { CustomIconAdministration } from "./components/Icons";
import {
  Container,
  Header,
  TabList,
  TabItem,
  Icon,
  Logo,
  PinButton,
} from "./AppStyled";

function App() {
  const [tabList, setTabList] = useState(() => {
    const storedTabs = localStorage.getItem("tabs");
    return storedTabs ? JSON.parse(storedTabs) : tabs;
  });
  const [currentTab, setCurrentTab] = useState(null);

  useEffect(() => {
    localStorage.setItem("tabs", JSON.stringify(tabList));
  }, [tabList]);

  const navigate = useNavigate();
  const location = useLocation();
  const activeTab = tabList.find((tab) => location.pathname === tab.path)?.name;

  function dragStartHandler(event, tab) {
    setCurrentTab(tab);
  }
  // function dragLeaveHandler(event) {}
  // function dragEndHandler(event) {}
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
    if (a.pinned && !b.pinned) return -1;
    if (!a.pinned && b.pinned) return 1;
    return a.order - b.order;
  };

  function togglePin(id) {
    setTabList((prev) =>
      prev.map((tab) => (tab.id === id ? { ...tab, pinned: !tab.pinned } : tab))
    );
  }

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
              // onDragLeave={(event) => dragLeaveHandler(event, tab)}
              // onDragEnd={(event) => dragEndHandler(event, tab)}
              onDragOver={(event) => dragOverHandler(event, tab)}
              onDrop={(event) => dropHandler(event, tab)}
            >
              <Icon>{iconMap[tab.icon]}</Icon>
              {tab.name}
              <PinButton
                onClick={(e) => {
                  e.stopPropagation();
                  togglePin(tab.id);
                }}
              >
                {tab.pinned ? "📌" : "📍"}
              </PinButton>
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
