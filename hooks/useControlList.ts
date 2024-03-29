import { useState, useMemo } from "react";

export const useControlList = (endIndex: number, list: any[]) => {
  const [open, setOpen] = useState<boolean>(false);
  const slicedlist = useMemo(
    () => (open ? list : list.slice(0, endIndex)),
    [open]
  );
  const handleClickMore = () => setOpen(!open);

  return {
    open,
    handleClickMore,
    slicedlist,
  };
};
