import React, { ReactNode } from "react";
import { IonContent, IonModal } from "@ionic/react";

export interface ModalProps {
  children: ReactNode;
  open: boolean;
  onClose: () => void;
}

export const SheetModal = ({ children, open, onClose }: ModalProps) => (
  <IonModal isOpen={open} onDidDismiss={onClose} canDismiss={true} breakpoints={[0.1, 0.5, 1]} initialBreakpoint={0.5}>
    <IonContent>{children}</IonContent>
  </IonModal>
);

export const CardModal = ({ children, open, onClose }: ModalProps) => (
  <IonModal isOpen={open} onDidDismiss={onClose} canDismiss={true}>
    <IonContent>{children}</IonContent>
  </IonModal>
);
