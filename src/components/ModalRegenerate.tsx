import React, { FC, useEffect, useRef } from "react";
import ButtonPrimary from "shared/Button/ButtonPrimary";
import ButtonSecondary from "shared/Button/ButtonSecondary";
import Input from "shared/Input/Input";
import NcModal from "shared/NcModal/NcModal";

export interface ModalRegenerateProps {
  show: boolean;
  onCloseModalRegenerate: () => void;
}

const ModalRegenerate: FC<ModalRegenerateProps> = ({ show, onCloseModalRegenerate }) => {
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
          Regenerate Wallet 
        </h3>
        <span className="text-sm">Are you sure you want to destroy the wallet and generate a new one?</span>
        <div className="mt-4 space-x-3">
          <ButtonPrimary type="submit">Destroy & Regenerate</ButtonPrimary>
          <ButtonSecondary type="button" onClick={onCloseModalRegenerate}>
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
      onCloseModal={onCloseModalRegenerate}
      contentExtraClass="max-w-lg"
      renderContent={renderContent}
      renderTrigger={renderTrigger}
      modalTitle=""
    />
  );
};

export default ModalRegenerate;
