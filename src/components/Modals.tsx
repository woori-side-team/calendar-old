import React, { ReactNode } from "react";
import { IonContent, IonModal } from "@ionic/react";

export interface ModalProps {
  children: ReactNode;
  isOpen: boolean;
  onClose: () => void;
}

export const SheetModal = ({ children, isOpen, onClose }: ModalProps) => (
  <IonModal
    isOpen={isOpen}
    onDidDismiss={onClose}
    canDismiss={true}
    breakpoints={[0.1, 0.5, 1]}
    initialBreakpoint={0.5}
  >
    <IonContent>{children}</IonContent>
  </IonModal>
);

export const CardModal = ({ children, isOpen, onClose }: ModalProps) => (
  <IonModal isOpen={isOpen} onWillDismiss={onClose} canDismiss={true}>
    <IonContent>{children}</IonContent>
  </IonModal>
);
