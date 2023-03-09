import React from "react";
import "./Info.scss";
import { Button } from "semantic-ui-react";
import { map } from "lodash";
import { Icon } from "../../../../assets";
import { socialData } from "../../../../utils";

export const Info = () => {
  return (
    <div className="footer-info">
      <Icon.LogoWhite className="logo" />
      <p>Me gusta el footbol</p>
      {map(socialData, (social) => (
        <Button key={social.type} as="a" target="_blank" href={social.link} color={social.type} icon={social.type}></Button>
      ))}
    </div>
  );
};
