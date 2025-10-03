import { Metadata } from 'next';
import { notFound } from 'next/navigation';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import BlogPost from '@/components/BlogPost';
import StructuredData from '@/components/StructuredData';
import { getBlogPost, getAllBlogSlugs } from '@/lib/blog';

interface BlogPostPageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  const slugs = await getAllBlogSlugs();
  return slugs.map((slug) => ({
    slug: slug,
  }));
}

export async function generateMetadata({ params }: BlogPostPageProps): Promise<Metadata> {
  const { slug } = await params;
  const post = await getBlogPost(slug);
  
  if (!post) {
    return {};
  }

  return {
    title: `${post.title} | Solar Señorita Blog`,
    description: post.excerpt,
    keywords: post.tags,
    openGraph: {
      title: post.title,
      description: post.excerpt,
      url: `https://solarsenorita.com/blog/${slug}`,
      siteName: 'Solar Señorita',
      images: [
        {
          url: post.image || '/og-image.jpg',
          width: 1200,
          height: 630,
          alt: post.title,
        },
      ],
      locale: 'en_US',
      type: 'article',
      publishedTime: post.publishedAt,
      authors: ['Solar Señorita'],
    },
    alternates: {
      canonical: `https://solarsenorita.com/blog/${slug}`,
    },
  };
}

export default async function BlogPostPage({ params }: BlogPostPageProps) {
  const { slug } = await params;
  const post = await getBlogPost(slug);

  if (!post) {
    notFound();
  }

  return (
    <>
      <StructuredData />
      <Header />
      <main>
        <BlogPost post={post} />
      </main>
      <Footer />
    </>
  );
}