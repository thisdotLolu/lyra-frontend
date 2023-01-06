import React, { FC, useState } from "react";
import NcDropDown, { NcDropDownItem } from "shared/NcDropDown/NcDropDown";
import ModalDelete from "./ModalDelete";
import ModalEdit from "./ModalEdit";
import ModalRegenerate from "./ModalRegenerate";
import ModalWithdraw from "./ModalWithdraw";
import ModalFund from "./ModalFund";
import ModalReportItem from "./ModalReportItem";
import ModalTransferToken from "./ModalTransferToken";

export interface WalletMoreDropdownProps {
  containerClassName?: string;
  iconClass?: string;
  dropdownPositon?: "up" | "down";
  actions?: { id: string; name: string; icon?: string; href?: string }[];
}

const actionsDefault: WalletMoreDropdownProps["actions"] = [
  { id: "edit", name: "Change price", icon: "las la-dollar-sign" },
  { id: "transferToken", name: "Transfer token", icon: "las la-sync" },
  { id: "regenerate", name: "Regenerate Wallet", icon: "las la-flag" },
  { id: "fund", name: "Fund Wallet", icon: "las la-hippo" },
  { id: "withdraw", name: "Withdraw Wallet", icon: "las la-hippo" },
  { id: "delete", name: "Delete item", icon: "las la-trash-alt" },
];

const WalletMoreDropdown: FC<WalletMoreDropdownProps> = ({
  containerClassName = "py-1.5 px-3 flex rounded-lg hover:bg-neutral-100 dark:hover:bg-neutral-800 cursor-pointer",
  iconClass = "w-4 h-4 sm:h-5 sm:w-5",
  dropdownPositon = "down",
  actions = actionsDefault,
}) => {
  const [isEditting, setIsEditting] = useState(false);
  const [isReporting, setIsReporting] = useState(false);
  const [isRegenerating, setIsRegenerating] = useState(false);
  const [isWithdrawing, setIsWithdrawing] = useState(false);
  const [isFunding, setIsFunding] = useState(false);
  const [isDeleting, setIsDeleting] = useState(false);
  const [isTransfering, setIsTransfering] = useState(false);

  const openModalEdit = () => setIsEditting(true);
  const closeModalEdit = () => setIsEditting(false);
 
  const openModalWithdraw = () => setIsWithdrawing(true);
  const closeModalWithdraw = () => setIsWithdrawing(false);  
 
  const openModalFund = () => setIsFunding(true);
  const closeModalFund = () => setIsFunding(false);

  const openModalReport = () => setIsReporting(true);
  const closeModalReport = () => setIsReporting(false);
  
  const openModalRegenerate = () => setIsRegenerating(true);
  const closeModalRegenerate = () => setIsRegenerating(false);

  const openModalDelete = () => setIsDeleting(true);
  const closeModalDelete = () => setIsDeleting(false);

  const openModalTransferToken = () => setIsTransfering(true);
  const closeModalTransferToken = () => setIsTransfering(false);

  const hanldeClickDropDown = (item: NcDropDownItem) => {
    if (item.href) {
      return;
    }

    if (item.id === "edit") {
      return openModalEdit();
    }
    if (item.id === "regenerate") {
      return openModalRegenerate();
    }
    if (item.id === "delete") {
      return openModalDelete();
    }
    if (item.id === "fund") {
      return openModalFund();
    }
    if (item.id === "withdraw") {
      return openModalTransferToken();
    }
    if (item.id === "transferToken") {
      return openModalTransferToken();
    }
    return;
  };

  const renderMenu = () => {
    return (
      <NcDropDown
        className={` ${containerClassName} `}
        iconClass={iconClass}
        data={actions}
        panelMenusClass={
          dropdownPositon === "up"
            ? "origin-bottom-right bottom-0 "
            : "origin-top-right !w-44 sm:!w-52"
        }
        onClick={hanldeClickDropDown}
      />
    );
  };

  return (
    <div className="">
      {renderMenu()}
      <ModalReportItem
        show={isReporting}
        onCloseModalReportItem={closeModalReport}
      />
      <ModalEdit show={isEditting} onCloseModalEdit={closeModalEdit} />
      <ModalFund show={isFunding} onCloseModalFund={closeModalFund} />
      <ModalRegenerate show={isRegenerating} onCloseModalRegenerate={closeModalRegenerate} />
	<ModalWithdraw show={isWithdrawing} onCloseModalWithdraw={closeModalWithdraw} />

      <ModalDelete show={isDeleting} onCloseModalDelete={closeModalDelete} />
      <ModalTransferToken
        show={isTransfering}
        onCloseModalTransferToken={closeModalTransferToken}
      />
    </div>
  );
};

export default WalletMoreDropdown;
