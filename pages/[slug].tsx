import { useRouter } from "next/router";
import { useEffect } from "react";

const PostRootPage = (props: any) => {
  const router = useRouter();

  useEffect(() => {
    router.push(`/post/[slug]`, `/post/${router.query.slug}`);
  }, [router.query]);
  return null;
};
export default PostRootPage;
