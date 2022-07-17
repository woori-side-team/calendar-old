import React, { ComponentProps, ElementType, ReactNode } from "react";
import { IonRippleEffect } from "@ionic/react";

export const Ripple = <Target extends ElementType>({
  Component,
  children,
  ...others
}: { Component: Target; children?: ReactNode } & ComponentProps<Target>) => (
  <Component {...others} className="ion-activatable">
    {children}
    <IonRippleEffect />
  </Component>
);
