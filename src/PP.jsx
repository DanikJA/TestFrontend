import { useState } from "react";
import "./AppStyled.jsx";
import { Tab, Tabs, TabPanel, TabList } from "react-tabs";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="Container">
      <div>
        <Tabs>
          <TabList>
            <Tab>Dashboard</Tab>
            <Tab>Banking</Tab>
            <Tab>Telefonie</Tab>
            <Tab>Accounting</Tab>
            <Tab>Administration</Tab>
            <Tab>Help</Tab>
            <Tab>Warenbestand</Tab>
            <Tab>Auswahllisten</Tab>
            <Tab>Einkauf</Tab>
            <Tab>Rechn</Tab>
          </TabList>

          <TabPanel>
            <h2>Content for tab 1</h2>
            <p>Some content for the first tab</p>
          </TabPanel>
          <TabPanel>
            <h2>Content for tab 2</h2>
            <p>Some content for the first tab</p>
          </TabPanel>
          <TabPanel>
            <h2>Content for tab 3</h2>
            <p>Some content for the first tab</p>
          </TabPanel>
        </Tabs>
      </div>
    </div>
  );
}

export default App;
