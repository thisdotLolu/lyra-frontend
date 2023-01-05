import React, { FC, useState } from "react";
import ButtonPrimary, { ButtonPrimaryProps } from "shared/Button/ButtonPrimary";
import ButtonSecondary from "shared/Button/ButtonSecondary";

export interface FundButtonProps extends ButtonPrimaryProps {
}

const FundButton: FC<FundButtonProps> = ({
  className = "relative z-10",
  sizeClass = "px-4 py-1.5 min-w-[84px]",
  fontSize = "text-sm font-medium",
}) => {

  const [isFunding, setIsFunding] = useState(false);

  return ( 
    <ButtonPrimary
      className={className}
      sizeClass={sizeClass}
      fontSize={fontSize}
      onClick={() => setIsFunding(true)}
    >
      Fund
    </ButtonPrimary>
 
  )
};

export default FundButton;
