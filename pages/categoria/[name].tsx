import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import CategoryComponent from "../../components/categoria/category";
import Layout from "../../components/layout/Layout";

const CategoriaPage = () => {
  const router = useRouter();
  const [categoryName, setCategoryName] = useState(null);

  useEffect(() => {
    setCategoryName(router.query.name);
  }, [router.query]);

if (!categoryName) {
  return null;
}

  return (
    <Layout>
      <CategoryComponent categoryName={categoryName} />;
    </Layout>
  );
};
export default CategoriaPage;
