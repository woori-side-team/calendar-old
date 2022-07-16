import React from "react";

import { ModalProps, SheetModal } from "components/Modals";

const UpcomingSheet = ({ open, onClose }: Pick<ModalProps, "open" | "onClose">) => (
  <SheetModal open={open} onClose={onClose}>
    다가오는 일정
  </SheetModal>
);

export default UpcomingSheet;
