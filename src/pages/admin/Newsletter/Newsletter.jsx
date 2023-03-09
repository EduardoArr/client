import React from "react";
import { Tab } from "semantic-ui-react";
import { ListEmail } from "../../../components/admin/Newsletter/ListEmail/ListEmail";

export const Newsletter = () => {
  const panes = [
    {
      render: () => (
        <Tab.Pane attached={false}>
          <ListEmail />
        </Tab.Pane>
      ),
    },
  ];
  return (
    <div className="newsletter-page">
      <Tab menu={{ secondary: true }} panes={panes} />{" "}
    </div>
  );
};
