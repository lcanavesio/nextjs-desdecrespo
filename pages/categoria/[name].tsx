import { Grid, makeStyles } from "@material-ui/core";
import RightColumn from "components/layout/RightColumn";
import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import CategoryComponent from "../../components/categoria/category";
import Layout from "../../components/layout/Layout";

const useStyles = makeStyles((theme) => ({
  container: {
    paddingTop: 10,
  },
  rightColumn: {
    padingLeft: 5,
  },
}));

const CategoriaPage = () => {
  const router = useRouter();
  const [categoryName, setCategoryName] = useState(null);
  const classes = useStyles();

  useEffect(() => {
    setCategoryName(router.query.name);
  }, [router.query]);

  if (!categoryName) {
    return null;
  }

  return (
    <Layout>
      <Grid container className={classes.container}>
        <Grid lg={9}>
          <Grid container lg={12}>
            <CategoryComponent categoryName={categoryName} />;
          </Grid>
        </Grid>
        <Grid lg={3} className={classes.rightColumn}>
            <RightColumn />
          </Grid>
      </Grid>
    </Layout>
  );
};
export default CategoriaPage;
