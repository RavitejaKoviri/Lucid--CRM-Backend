import React, { useState } from 'react';
import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';

function FormTemplates() {
  const [key, setKey] = useState('home');

  return (
    <>
    
    <Tabs
      id="controlled-tab-example"
      activeKey={key}
      onSelect={(k) => setKey(k)}
      className="mb-3"
    >
      <Tab eventKey="home" title="Hello">
        <div>Hello</div>
      </Tab>
      <Tab eventKey="profile" title="Profile">
        <div>Harsha</div>
      </Tab>
      <Tab eventKey="contact" title="Contact">
        <div>Balaji</div>
      </Tab>
    </Tabs>
    </>
  );
}

export default FormTemplates