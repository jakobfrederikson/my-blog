import Layout from '../components/layout';
import Container from '../components/container';
import Intro from '../components/intro';
import HeroPost from '../components/hero-post';
import MorePosts from '../components/more-posts';
import Navbar from '../components/navbar';
import Post from '../interfaces/post';
import Head from 'next/head';

import { getAllPosts } from '../lib/api';

type Props = {
    allPosts: Post[]
}

export default function Index({ allPosts }: Props) {
    const heroPost = allPosts[0];
    const morePosts = allPosts.slice(1);

    return (
        <>
            <Layout>
                <Navbar />
                <Head>
                    <title>{`JakobDev's Blog`}</title>
                </Head>
                <Container>
                <Intro />
                    {heroPost && (
                        <HeroPost
                            title={heroPost.title}
                            coverImage={heroPost.coverImage}
                            date={heroPost.date}
                            slug={heroPost.slug}
                            excerpt={heroPost.excerpt}
                        />
                    )}
                    {morePosts.length > 0 && <MorePosts posts={morePosts} />}
                </Container>
            </Layout>
        </>
    );
}

export const getStaticProps = async () => {
    const allPosts = getAllPosts([
      'title',
      'date',
      'slug',
      'coverImage',
      'excerpt',
    ])
  
    return {
      props: { allPosts },
    }
  }