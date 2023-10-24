import { useState } from "react";
import { Button } from "../../components/Button";
import { HomeContainer } from "../../components/HomeContainer";
import LoginModal from "../../components/LoginModal";
import CreateKeyModal from "../../components/CreateKeyModal";

export default function Home() {
  const [openLoginModal, setOpenLoginModal] = useState(false);
  const [openCreateKeyModal, setCreateKeyModal] = useState(false);

  return (
    <HomeContainer>
      <LoginModal openStatus={openLoginModal}/>
      <CreateKeyModal openStatus={openCreateKeyModal}/>
      <Button onClick={() => setOpenLoginModal(prev => !prev)}>Connect with a secret key</Button>
      <Button onClick={() => setCreateKeyModal(prev => !prev)}>Generate key pair for a new account</Button>
    </HomeContainer>
  )
}
