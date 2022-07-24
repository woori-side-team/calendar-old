import React, { ReactNode, useEffect, useRef } from "react";
import { IonContent, IonModal } from "@ionic/react";

export interface SheetModalProps {
  children: ReactNode;
  isOpen: boolean;
  onClose: () => void;
}

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

// breakpoint = min -> MinHeight.
// breakpoint = max -> MaxHeight.
// min < breakpoint < max -> MiddleHeight.
export type PersistentSheetModalState = "MinHeight" | "MiddleHeight" | "MaxHeight";

export interface PersistentSheetModalProps {
  children: ReactNode;
  breakpoints?: Array<number>;
  state: PersistentSheetModalState;
  onChange?: (newState: PersistentSheetModalState) => void;
}

export const PersistentSheetModal = ({
  children,
  breakpoints = [0.1, 0.5, 1],
  state,
  onChange,
}: PersistentSheetModalProps) => {
  if (breakpoints.length < 2) {
    throw new Error("You should define at least 2 breakpoints");
  }

  const modalRef = useRef<HTMLIonModalElement | null>(null);

  const minBreakpoint = breakpoints[0];
  const maxBreakpoint = breakpoints[breakpoints.length - 1];

  useEffect(() => {
    if (state === "MinHeight") {
      modalRef.current?.setCurrentBreakpoint(minBreakpoint);
    } else if (state === "MaxHeight") {
      modalRef.current?.setCurrentBreakpoint(maxBreakpoint);
    } else {
      // Do nothing.
    }
  }, [state, minBreakpoint, maxBreakpoint]);

  return (
    <IonModal
      ref={modalRef}
      isOpen
      canDismiss={false}
      breakpoints={breakpoints}
      initialBreakpoint={minBreakpoint}
      backdropBreakpoint={minBreakpoint}
      onIonBreakpointDidChange={async event => {
        const breakpoint = (await event.target.getCurrentBreakpoint()) ?? minBreakpoint;

        if (typeof onChange !== "undefined") {
          if (breakpoint === minBreakpoint) {
            onChange("MinHeight");
          } else if (breakpoint === maxBreakpoint) {
            onChange("MaxHeight");
          } else {
            onChange("MiddleHeight");
          }
        }
      }}
    >
      <IonContent>{children}</IonContent>
    </IonModal>
  );
};

export interface CardModalProps {
  children: ReactNode;
  isOpen: boolean;
  onClose: () => void;
}

export const CardModal = ({ children, isOpen, onClose }: CardModalProps) => (
  <IonModal isOpen={isOpen} canDismiss={true} onWillDismiss={onClose}>
    <IonContent>{children}</IonContent>
  </IonModal>
);
