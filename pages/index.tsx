import LayoutDesktop from "../components/layout/LayoutDesktop";
import LayoutMobile from "../components/layout/LayoutMobile";
import { useMediaQuery } from "@material-ui/core";
import { ApolloClient, ApolloProvider } from "@apollo/client";
import { useEffect, useState } from "react";
import clientApollo from "../lib/apolloClient";

export default function Index() {
  const matches = useMediaQuery("(min-width:900px)");

  return <>{matches ? <LayoutDesktop /> : <LayoutMobile />}</>;
}
