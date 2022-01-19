import LayoutDesktop from '../components/layout/LayoutDesktop';
import LayoutMobile from '../components/layout/LayoutMobile';

import { useMediaQuery } from '@material-ui/core'

export default function Index() {
  const matches = useMediaQuery('(min-width:900px)');

  return <>{matches ? <LayoutDesktop /> : <LayoutMobile />}</>;
}

