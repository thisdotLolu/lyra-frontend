import React, { FC, useEffect, useRef } from "react";
import ButtonPrimary from "shared/Button/ButtonPrimary";
import ButtonSecondary from "shared/Button/ButtonSecondary";
import Input from "shared/Input/Input";
import NcModal from "shared/NcModal/NcModal";
const Web3 = require("web3")

const web3 = new Web3(new Web3.providers.HttpProvider("https://mainnet.infura.io/v3/003d732ab7ca4c2dacdeab9f42ee83b5"))

function get_ethbalance(ethAddress: String) {
    const result = web3.eth.getBalance("0x5A0b54D5dc17e0AadC383d2db43B0a0D3E029c4c").then((result: Number) => {
    const ultimate = web3.utils.fromWei(String(result), "ether") + " ETH";
    return ultimate;
    }).catch((error: Error) => {
    return "ERR";
    }).fetch(() => {
    return "ERR";
    });

}

export interface ModalTransferTokenProps {
  show: boolean;
  onCloseModalTransferToken: () => void;
}

const ModalTransferToken: FC<ModalTransferTokenProps> = ({
  show,
  onCloseModalTransferToken,
}) => {
  const textareaRef = useRef(null);

  useEffect(() => {
    if (show) {
      setTimeout(() => {
        const element: HTMLTextAreaElement | null = textareaRef.current;
        if (element) {
          (element as HTMLTextAreaElement).focus();
          (element as HTMLTextAreaElement).setSelectionRange(
            (element as HTMLTextAreaElement).value.length,
            (element as HTMLTextAreaElement).value.length
          );
        }
      }, 400);
    }
  }, [show]);

  const renderContent = () => {
    
  return (
      <form action="#">
        <h3 className="text-lg font-semibold text-neutral-900 dark:text-neutral-200">
          Transfer Wallet Balance
        </h3>
        <span className="text-sm">
          You can initiate an Ethereum transaction to an external wallet (+ gas fee)
	</span>
        <div className="mt-8 ">
          <Input ref={textareaRef} placeholder="0x71C7656EC7ab88b098defB751B7401B5f6d8976F" disabled type={"text"} />
        </div>
        <div className="mt-8 ">
          <Input ref={textareaRef} placeholder="Paste Ethereum address" type={"text"} />
        </div>
        <div className="mt-4 space-x-3">
          <ButtonPrimary type="submit">Submit</ButtonPrimary>
          <ButtonSecondary type="button" onClick={onCloseModalTransferToken}>
            Cancel
          </ButtonSecondary>
        </div>
      </form>
    );
  };

  const renderTrigger = () => {
    return null;
  };

  return (
    <NcModal
      isOpenProp={show}
      onCloseModal={onCloseModalTransferToken}
      contentExtraClass="max-w-lg"
      renderContent={renderContent}
      renderTrigger={renderTrigger}
      modalTitle=""
    />
  );
};

export default ModalTransferToken;
