import React, { FC, useState } from "react";
import ButtonPrimary, { ButtonPrimaryProps } from "shared/Button/ButtonPrimary";
import ButtonSecondary from "shared/Button/ButtonSecondary";

export interface WithdrawButtonProps extends ButtonPrimaryProps {
  isVerified?: boolean; // i really like this syntax. 
}

const WithdrawButton: FC<WithdrawButtonProps> = ({
  className = "relative z-10",
  sizeClass = "px-4 py-1.5 min-w-[84px]",
  fontSize = "text-sm font-medium",
}) => {

  const [isVerified, setIsVerifying] = useState(false);
  const [isWithdrawing, setIsWithdrawing] = useState(false);

  return isVerified ? ( 
    <ButtonPrimary
      className={className}
      sizeClass={sizeClass}
      fontSize={fontSize}
      onClick={() => setIsWithdrawing(true)}
    >
      Withdraw
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
