import React from 'react';
import Tabs from './Tabs';

const TabsPage = () => {
  const tabs = [
    {
      id: 'tab-1', title: 'Tab 1', content: 'Some text 1',
    },
    {
      id: 'tab-2', title: 'Tab 2', content: 'Some text 2',
    },
    {
      id: 'tab-3', title: 'Tab 3', content: 'Some text 3',
    },
  ];

  return (
    <>
      <h2 className="page-heading">Tabs</h2>
      <Tabs
        tabs={tabs}
      />
    </>
  );
};

export default TabsPage;
