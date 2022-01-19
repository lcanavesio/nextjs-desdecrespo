import React from 'react';
import {Title, Link, Meta} from 'react-head';

const SEO2 = () => (
  <>
    <Title>Hello world!</Title>
    <Meta property="og:type" content="article" />

    <Meta name="og:title" content="When Great Minds Don’t Think Alike" />
    <Meta name="og:description" content="Lorem ipsum dolor sit amet." />

    <Meta name="og:image" content="http://static01.nyt.com/images/2015/02/19/arts/international/19iht-btnumbers19A/19iht-btnumbers19A-facebookJumbo-v2.jpg" />

    <Link rel="canonical" />
  </>
);
export default SEO2;

{
  /* <meta
property="og:url"
content="http://www.nytimes.com/2015/02/19/arts/international/when-great-minds-dont-think-alike.html"
/>
<meta property="og:type" content="article" />
<meta
property="og:title"
content="When Great Minds Don’t Think Alike"
/>
<meta
property="og:description"
content="How much does culture influence creative thinking?"
/>
<meta
property="og:image"
content="http://static01.nyt.com/images/2015/02/19/arts/international/19iht-btnumbers19A/19iht-btnumbers19A-facebookJumbo-v2.jpg"
/> */
}
