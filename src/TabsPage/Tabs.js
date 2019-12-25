import React from 'react';
import { NavLink, Route, withRouter } from 'react-router-dom';
import PropTypes from 'prop-types';

const Tabs = ({ tabs, match }) => (
  <section className="section section_tabs">
    <ul className="tabs__ul">
      {
        tabs.map(
          (tab, index) => (
            <li
              key={tab.id}
              className="tabs__tab-item"
            >
              <NavLink
                to={`${match.path}/${tabs[index].id}`}
                className="tabs__tab"
                activeClassName="tabs__tab_active"
              >
                {tabs[index].title}
              </NavLink>
            </li>
          )
        )}
    </ul>

    <Route
      path="/tabs/:tabId"
      /* eslint-disable-next-line no-shadow */
      render={({ match }) => {
        const currentTabId = match.params.tabId;

        return (
          <div className="tabs__content">
            {currentTabId !== undefined
              && tabs.find(
                tab => tab.id === currentTabId
              ).content
            }
          </div>
        );
      }}
    />
  </section>
);

Tabs.propTypes = {
  tabs: PropTypes.arrayOf(
    PropTypes.object,
  ).isRequired,
  match: PropTypes.shape({
    path: PropTypes.string,
  }).isRequired,
};

export default withRouter(Tabs);
