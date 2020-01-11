// @flow strict
import React from 'react';
import Sidebar from '../components/Sidebar';
import Layout from '../components/Layout';
import Page from '../components/Page';
import { useSiteMetadata } from '../hooks';

const NotFoundTemplate = () => {
  const { title, subtitle } = useSiteMetadata();

  return (
    <Layout title={`Not Found - ${title}`} description={subtitle}>
      <Sidebar />
      <Page title="it's just a 404">
        <div class="error">
          {/* <image alt="feelings" class="error__image" src="/media/crying_unicorn.gif" /> */}
          <img fluid={"../../static/media/crying_unicorn.gif"} alt="" />
          <p>
            What you’re looking for may have been misplaced in your Long Short Term Memory.
        </p>
        </div>
      </Page>
    </Layout>
  );
};

export default NotFoundTemplate;
