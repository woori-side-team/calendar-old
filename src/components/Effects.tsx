import React, { ComponentProps, ElementType, ReactNode } from "react";
import { IonRippleEffect } from "@ionic/react";
import { ClassNames } from "@emotion/react";

export const Ripple = <Target extends ElementType>({
  Component,
  children,
  ...others
}: { Component: Target; children?: ReactNode } & ComponentProps<Target>) => (
  <ClassNames>
    {({ css, cx }) => (
      <Component
        {...others}
        className={cx(
          css`
            position: relative;
          `,
          "ion-activatable"
        )}
      >
        {children}
        <IonRippleEffect />
      </Component>
    )}
  </ClassNames>
);
