import { ApolloClient, ApolloProvider } from "@apollo/client";
import { makeStyles, useMediaQuery } from "@material-ui/core";
import dynamic from "next/dynamic";
import React, { memo, useEffect, useState } from "react";
import clientApollo from "../../lib/apolloClient";
import { Constants } from "../../utils/constants";
import Footer from "./Footer";
import Header from "./Header";
import HeaderMobile from "./HeaderMobile";
import NavigatorMobile from "./NavigatorMobile";

const useStyles = makeStyles((theme) => ({
  content: {
    maxWidth: 1287,
    minHeight: 600,
    display: "block",
    marginLeft: "auto",
    marginRight: "auto",
  },
}));
const drawerWidth = 200;

type Layout = {
  children: React.ReactNode;
};
const Layout = (props: Layout) => {
  const { children } = props;
  const classes = useStyles();
  const [mobileOpen, setMobileOpen] = useState(false);

  const [client, setClient] = useState<ApolloClient<any>>();
  const matches = useMediaQuery("(min-width:1032px)");

  useEffect(() => {
    const c = clientApollo();
    setClient(c);
  }, []);

  if (!client) {
    return <div />;
  }

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  return (
    <>
      {client && (
        <ApolloProvider client={client}>
          {matches ? (
            <>
              <Header sections={Constants.CATEGORIES} />
              <div className={classes.content}>
                <main>{children}</main>
              </div>
            </>
          ) : (
            <>
              <NavigatorMobile
                PaperProps={{ style: { width: drawerWidth } }}
                variant="temporary"
                open={mobileOpen}
                onClose={handleDrawerToggle}
                onCloseDialog={() => setMobileOpen(false)}
              />
              <HeaderMobile onDrawerToggle={handleDrawerToggle} />
              <div className={classes.content}>
                <main>{children}</main>
              </div>
            
            </>
          )}
        </ApolloProvider>
      )}
      <Footer title="Desde Crespo" description="Diario Digital" /> 
    </>
  );
};

export default memo(Layout);
