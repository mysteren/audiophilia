import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

export function useShowCatalog() {
  const [showCatalog, setShowCatalog] = useState(false);

  const pathname = usePathname();

  const showCatalogHandler = (value: boolean) => {
    setShowCatalog(value);
  };

  useEffect(() => {
    setShowCatalog(false);
  }, [pathname]);

  return { showCatalog, showCatalogHandler };
}
