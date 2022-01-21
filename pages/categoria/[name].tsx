import { useRouter } from "next/router";
import React from "react";
import CategoryComponent from "../../components/categoria/category";
import Layout from "../../components/layout/Layout";

const CategoriaPage = () => {
  const router = useRouter();
  const categoryName = router.query.name as string;

  return (
    <Layout>
      <CategoryComponent categoryName={categoryName} />;
    </Layout>
  );
};
export default CategoriaPage;
