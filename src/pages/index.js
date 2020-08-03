import React from 'react';
import clsx from 'clsx';
import Layout from '@theme/Layout';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import useBaseUrl from '@docusaurus/useBaseUrl';
import styles from './styles.module.css';

function Home() {
  const context = useDocusaurusContext();
  const {siteConfig = {}} = context;
  const imgUrlDevs = useBaseUrl('img/devs.svg');
  return (
    <Layout
      title={`Olá do ${siteConfig.title}`}
      description="Description will go into a meta tag in <head />">
      <header className={clsx('hero hero--primary', styles.heroBanner)}>
        <div className="container">
          <h1 className="h1-primary">{siteConfig.title}</h1>
          <p className="subh1-primary">{siteConfig.tagline}</p>
          <div className={styles.buttons}>
            <Link
              className={clsx(
                'button button--outline button--secondary button--lg',
                styles.getStarted,
              )}
              to={useBaseUrl('docs/')}>
              Documentação
            </Link>
          </div>
        </div>
      </header>
      <main>
        <div className="devs-img">
          <img src={imgUrlDevs} alt={'devs'} />
        </div>
      </main>
    </Layout>
  );
}

export default Home;
