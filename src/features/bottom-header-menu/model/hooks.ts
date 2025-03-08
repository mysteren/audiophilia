import { useEffect, useState } from "react";

import { getHeaderSettingsData } from "@/entities/site-settings";
import { LinkItemData } from "@/entities/site-settings/types";

export function useData() {
  const [items, setItems] = useState<LinkItemData[]>([]);
  useEffect(() => {
    async function fetchData() {
      const { headMenu2 } = await getHeaderSettingsData();
      setItems(headMenu2);
    }
    fetchData();
  }, []);

  return {items};
}
