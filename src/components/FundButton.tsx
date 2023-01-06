import React, { FC, useState } from "react";
import ButtonPrimary, { ButtonPrimaryProps } from "shared/Button/ButtonPrimary";
import ButtonSecondary from "shared/Button/ButtonSecondary";
import ModalFund from "./ModalFund";

export interface FundButtonProps extends ButtonPrimaryProps {}

const FundButton: FC<FundButtonProps> = ({
  className = "relative z-10",
  sizeClass = "px-4 py-1.5 min-w-[84px]",
  fontSize = "text-sm font-medium",
}) => {

  const [isFunding, setIsFunding] = useState(false);

  const openModalFund = () => setIsFunding(true);
  const closeModalFund = () => setIsFunding(false);

  return ( 
    <ButtonPrimary
      className={className}
      sizeClass={sizeClass}
      fontSize={fontSize}
      onClick={() => openModalFund()}
    >
      Fund
    
    <ModalFund
      show={isFunding}
      onCloseModalFund={closeModalFund}
    />
  </ButtonPrimary>
 
  )
};

export default FundButton;
