import React from "react";
import { Modal } from "../Modal";
import { Button } from "../Button";

export default function CreateKeyModal({ openStatus }: { openStatus: React.SetStateAction<boolean> }) {
  return (
    <Modal $open={openStatus}>
      <h2>Your new key pair</h2>
      <form>
        <input id="secret-key" type="text" disabled />
        <input id="secret-key" type="text" disabled />
        <Button type="submit">Continue</Button>
      </form>
    </Modal>
  );
}