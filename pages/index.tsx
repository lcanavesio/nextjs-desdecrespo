import { useMediaQuery } from "@material-ui/core";
import LayoutDesktop from "../components/layout/LayoutDesktop";
import LayoutMobile from "../components/layout/LayoutMobile";
import Meta from "../components/meta";

export default function Index() {
  const matches = useMediaQuery("(min-width:900px)");

  return (
    <>
      <Meta />
      {matches ? <LayoutDesktop /> : <LayoutMobile />}
    </>
  );
}