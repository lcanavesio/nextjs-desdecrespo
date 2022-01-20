import { Box, Grid, Paper, Tab, Tabs, Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import FitnessCenterIcon from "@material-ui/icons/FitnessCenter";
import ImportantDevicesIcon from "@material-ui/icons/ImportantDevices";
import SportsBasketballIcon from "@material-ui/icons/SportsBasketball";
import { Skeleton } from "@material-ui/lab";
import React, { useEffect } from "react";
import {
  useGetPostsTabFourPostsLazyQuery,
  useGetPostsTabFourPostsQuery
} from "../../graphql/types";
import FeaturedPost from "./FeaturedPost";

interface TabPanelProps {
  children?: React.ReactNode;
  dir?: string;
  index: any;
  value: any;
}

function TabPanel(props: TabPanelProps) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`full-width-tabpanel-${index}`}
      aria-labelledby={`full-width-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box p={3}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

const useStyles = makeStyles((theme) => ({
  root: {
    marginTop: 20,
    marginLeft: 10,
    marginRight: 10,
  },
  card: {
    paddingLeft: 10,
    paddingRight: 10,
    paddingBottom: 10,
  },
  tabContainer: {
    background: "#fc4a00",
  },
  tab: {
    color: "white",
  },
  indicator: {
    backgroundColor: "Black",
  },
  tabSelected: {
    backgroundColor: "#3a3a3a",
  },
}));

const TabFourPosts = () => {
  const classes = useStyles();

  const [value, setValue] = React.useState(0);

  const {
    loading: loadingSport,
    error: errorSport,
    data: sportData,
  } = useGetPostsTabFourPostsQuery({
    variables: { categoryName: "Deportes" },
  });

  const sportPosts = sportData?.posts?.edges?.map((edge) => edge.node) || [];
  const mensajeError = "No se logro recuperar datos";
  const [
    runHealthQuery,
    { loading: loadingHealth, error: errorHealth, data: healthData },
  ] = useGetPostsTabFourPostsLazyQuery({
    variables: { categoryName: "Salud" },
  });

  const healthPosts = healthData?.posts?.edges?.map((edge) => edge.node) || [];

  const [
    runTechQuery,
    { loading: loadingTechnology, error: errorTech, data: technologyData },
  ] = useGetPostsTabFourPostsLazyQuery({
    variables: { categoryName: "Tecnología" },
  });

  const technologyPosts =
    technologyData?.posts?.edges?.map((edge) => edge.node) || [];

  const handleChange = (event: React.ChangeEvent<{}>, newValue: number) => {
    setValue(newValue);
  };

  useEffect(() => {
    if (value === 1) {
      runHealthQuery();
    }
    if (value === 2) {
      runTechQuery();
    }
  }, [value]);

  const showSkeleton = (rows) => {
    const skeletons = [];

    for (let i = 0; i < rows; i++) {
      skeletons.push(
        <div style={{ minWidth: "50%" }}>
          <Skeleton
            variant="rect"
            animation="wave"
            style={{
              minWidth: "47%",
              minHeight: 290,
              marginLeft: 10,
              marginRight: 10,
            }}
          />
          <Skeleton
            variant="text"
            animation="wave"
            style={{
              minWidth: 300,
              minHeight: 50,
              marginLeft: 10,
              marginRight: 10,
              marginBottom: 10,
            }}
          />
        </div>
      );
    }
    return skeletons;
  };

  return (
    <div key="tabfourpost">
      <Paper square className={classes.root}>
        <Tabs
          value={value}
          onChange={handleChange}
          variant="fullWidth"
          indicatorColor="secondary"
          aria-label="icon label tabs example"
          className={classes.tabContainer}
          classes={{
            indicator: classes.indicator,
          }}
        >
          <Tab
            icon={<SportsBasketballIcon />}
            label="Deportes"
            className={classes.tab}
            classes={{ selected: classes.tabSelected }}
          />
          <Tab
            icon={<FitnessCenterIcon />}
            label="Salud"
            className={classes.tab}
            classes={{ selected: classes.tabSelected }}
          />
          <Tab
            icon={<ImportantDevicesIcon />}
            label="Tecnología"
            className={classes.tab}
            classes={{ selected: classes.tabSelected }}
          />
        </Tabs>

        <TabPanel value={value} index={0}>
          <Grid container lg={12}>
            {errorSport && <p>{mensajeError}</p>}
            {!loadingSport && sportPosts
              ? sportPosts.map((post) => (
                  <Grid container lg={6} className={classes.card}>
                    <FeaturedPost
                      key={`sport-featured-post-${post.id}`}
                      post={post}
                    />
                  </Grid>
                ))
              : showSkeleton(4)}
          </Grid>
        </TabPanel>
        <TabPanel value={value} index={1}>
          <Grid container lg={12}>
            {errorHealth && <p>{mensajeError}</p>}
            {!loadingHealth && healthPosts
              ? healthPosts.map((post) => (
                  <Grid container lg={6} className={classes.card}>
                    <FeaturedPost
                      key={`healthPosts-featured-post-${post.id}`}
                      post={post}
                    />
                  </Grid>
                ))
              : showSkeleton(4)}
          </Grid>
        </TabPanel>
        <TabPanel value={value} index={2}>
          <Grid container lg={12}>
            {errorTech && <p>{mensajeError}</p>}
            {!loadingTechnology && technologyPosts
              ? technologyPosts.map((post) => (
                  <Grid container lg={6} className={classes.card}>
                    <FeaturedPost
                      key={`tech-featured-post-${post.id}`}
                      post={post}
                    />
                  </Grid>
                ))
              : showSkeleton(4)}
          </Grid>
        </TabPanel>
      </Paper>
    </div>
  );
};
export default TabFourPosts;
