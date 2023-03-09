import React, { useState } from "react";
import "./EmailItem.scss";
import { NewsLetter } from "../../../../Api";
import { useAuth } from "../../../../hooks";
import { Button, Icon, Confirm } from "semantic-ui-react";

const newsletterCotroller = new NewsLetter();
export const EmailItem = (props) => {
  const { email, onReload } = props;
  const [showConfirm, setShowConfirm] = useState(false);
  const { accessToken } = useAuth();

  const onOpenCloseConfirm = () => setShowConfirm((prevState) => !prevState);

  const onDelete = async () => {
    try {
      await newsletterCotroller.deleteEmail(accessToken, email._id);
      onReload();
      onOpenCloseConfirm();
    } catch (error) {
      console.error();
    }
  };
  return (
    <>
      <div className="email-item">
        <div className="email-item__info">
          <span>{email.email}</span>
        </div>

        <div>
          <Button icon color="red" onClick={onOpenCloseConfirm}>
            <Icon name="trash"></Icon>
          </Button>
        </div>
      </div>

      <Confirm open={showConfirm} onCancel={onOpenCloseConfirm} onConfirm={onDelete} content={`Eliminar ${email.email}`} size="mini" />
    </>
  );
};
