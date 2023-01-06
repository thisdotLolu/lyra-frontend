import React, { FC, useState } from "react";
import ButtonPrimary, { ButtonPrimaryProps } from "shared/Button/ButtonPrimary";
import ButtonSecondary from "shared/Button/ButtonSecondary";
import ModalTransferToken from "./ModalTransferToken";

export interface WithdrawButtonProps extends ButtonPrimaryProps {
  isVerified?: boolean; // i really like this syntax. 
  isWalletConnected?: boolean;
}

const WithdrawButton: FC<WithdrawButtonProps> = ({
  className = "relative z-10",
  sizeClass = "px-4 py-1.5 min-w-[84px]",
  fontSize = "text-sm font-medium",
}) => {

  const [isVerified, setIsVerifying] = useState(false);
  const [isWithdrawing, setIsWithdrawing] = useState(false);
  const [isTransfering, setIsTransfering] = useState(false);

  const openModalTransferToken = () => setIsTransfering(true);
  const closeModalTransferToken = () => setIsTransfering(false);

  return isVerified ? ( 
    <ButtonPrimary
      className={className}
      sizeClass={sizeClass}
      fontSize={fontSize}
      onClick={() => openModalTransferToken()}
    >
      Withdraw
    <ModalTransferToken
      show={isTransfering}
      onCloseModalTransferToken={closeModalTransferToken}
    />  
  </ButtonPrimary>
  ) : (
    <ButtonPrimary
      className={className}
      sizeClass={sizeClass}
      fontSize={fontSize}
      onClick={() => setIsVerifying(true)}
    >
      Verify 
    </ButtonPrimary>
  )
};

export default WithdrawButton;
