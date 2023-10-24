import React from "react";
import { Modal } from "../Modal";
import { Button } from "../Button";

export default function LoginModal({ openStatus }: { openStatus: React.SetStateAction<boolean> }) {
  return (
    <Modal $open={openStatus}>
      <h2>Connect with a secret key</h2>
      <p>Enter your secret key to connect to your account.</p>
      <form>
        <input id="secret-key" type="text" />
        <Button type="submit">Connect</Button>
      </form>
    </Modal>
  );
}
