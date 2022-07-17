import React, { ReactNode, useEffect, useRef } from "react";
import { IonContent, IonModal } from "@ionic/react";

interface ModalProps {
  children: ReactNode;
  isOpen: boolean;
  onClose: () => void;
}

export type SheetModalProps = ModalProps;

export const SheetModal = ({ children, isOpen, onClose }: SheetModalProps) => (
  <IonModal
    isOpen={isOpen}
    canDismiss={true}
    onWillDismiss={onClose}
    breakpoints={[0.1, 0.5, 1]}
    initialBreakpoint={0.5}
  >
    <IonContent>{children}</IonContent>
  </IonModal>
);

export type PersistentSheetModalState = "Min" | "Half" | "Full";

export type PersistentSheetModalProps = Omit<ModalProps, "isOpen" | "onClose"> & {
  state: PersistentSheetModalState;
  onChange: (newState: PersistentSheetModalState) => void;
};

export const PersistentSheetModal = ({ children, state, onChange }: PersistentSheetModalProps) => {
  const modalRef = useRef<HTMLIonModalElement | null>(null);

  useEffect(() => {
    modalRef.current?.setCurrentBreakpoint(toBreakpointMap[state]);
  }, [state]);

  return (
    <IonModal
      ref={modalRef}
      isOpen
      canDismiss={false}
      showBackdrop={false}
      breakpoints={Object.values(toBreakpointMap)}
      initialBreakpoint={toBreakpointMap.Min}
      onIonBreakpointDidChange={async event => {
        const breakpoint = (await event.target.getCurrentBreakpoint()) ?? toBreakpointMap.Min;
        onChange(fromBreakpointMap[breakpoint]);
      }}
    >
      <IonContent>{children}</IonContent>
    </IonModal>
  );
};

const toBreakpointMap: Record<PersistentSheetModalState, number> = {
  Min: 0.1,
  Half: 0.5,
  Full: 1,
};

const fromBreakpointMap: Record<number, PersistentSheetModalState> = {
  0.1: "Min",
  0.5: "Half",
  1: "Full",
};

export type CardModalProps = ModalProps;

export const CardModal = ({ children, isOpen, onClose }: CardModalProps) => (
  <IonModal isOpen={isOpen} canDismiss={true} onWillDismiss={onClose}>
    <IonContent>{children}</IonContent>
  </IonModal>
);
