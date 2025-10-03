import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';

export interface BlogPost {
  slug: string;
  title: string;
  excerpt: string;
  content: string;
  publishedAt: string;
  updatedAt?: string;
  image?: string;
  tags: string[];
  author: string;
  readTime: number;
  featured: boolean;
}

const BLOG_DIRECTORY = path.join(process.cwd(), 'content/blog');

// Ensure blog directory exists
if (!fs.existsSync(BLOG_DIRECTORY)) {
  fs.mkdirSync(BLOG_DIRECTORY, { recursive: true });
}

export async function getAllBlogPosts(): Promise<BlogPost[]> {
  try {
    const files = fs.readdirSync(BLOG_DIRECTORY);
    const posts = files
      .filter((file) => file.endsWith('.md'))
      .map((file) => {
        const slug = file.replace('.md', '');
        const fullPath = path.join(BLOG_DIRECTORY, file);
        const fileContents = fs.readFileSync(fullPath, 'utf8');
        const { data, content } = matter(fileContents);

        return {
          slug,
          title: data.title || 'Untitled',
          excerpt: data.excerpt || '',
          content,
          publishedAt: data.publishedAt || new Date().toISOString(),
          updatedAt: data.updatedAt,
          image: data.image,
          tags: data.tags || [],
          author: data.author || 'Solar Señorita',
          readTime: data.readTime || calculateReadTime(content),
          featured: data.featured || false,
        } as BlogPost;
      })
      .sort((a, b) => new Date(b.publishedAt).getTime() - new Date(a.publishedAt).getTime());

    return posts;
  } catch (error) {
    console.error('Error loading blog posts:', error);
    return [];
  }
}

export async function getBlogPost(slug: string): Promise<BlogPost | null> {
  try {
    const fullPath = path.join(BLOG_DIRECTORY, `${slug}.md`);
    
    if (!fs.existsSync(fullPath)) {
      return null;
    }

    const fileContents = fs.readFileSync(fullPath, 'utf8');
    const { data, content } = matter(fileContents);

    return {
      slug,
      title: data.title || 'Untitled',
      excerpt: data.excerpt || '',
      content,
      publishedAt: data.publishedAt || new Date().toISOString(),
      updatedAt: data.updatedAt,
      image: data.image,
      tags: data.tags || [],
      author: data.author || 'Solar Señorita',
      readTime: data.readTime || calculateReadTime(content),
      featured: data.featured || false,
    };
  } catch (error) {
    console.error(`Error loading blog post ${slug}:`, error);
    return null;
  }
}

export async function getAllBlogSlugs(): Promise<string[]> {
  try {
    const files = fs.readdirSync(BLOG_DIRECTORY);
    return files
      .filter((file) => file.endsWith('.md'))
      .map((file) => file.replace('.md', ''));
  } catch (error) {
    console.error('Error loading blog slugs:', error);
    return [];
  }
}

export async function getFeaturedPosts(): Promise<BlogPost[]> {
  const allPosts = await getAllBlogPosts();
  return allPosts.filter(post => post.featured).slice(0, 3);
}

export async function getRecentPosts(limit: number = 5): Promise<BlogPost[]> {
  const allPosts = await getAllBlogPosts();
  return allPosts.slice(0, limit);
}

function calculateReadTime(content: string): number {
  const wordsPerMinute = 200;
  const words = content.split(' ').length;
  return Math.ceil(words / wordsPerMinute);
}

// Blog topic templates for automated generation
export const BLOG_TOPICS = [
  {
    title: "Massachusetts Solar Incentives Update",
    category: "incentives",
    keywords: ["massachusetts solar incentives", "SMART program", "solar tax credits"],
    template: "incentives-update"
  },
  {
    title: "Winter Solar Performance in Massachusetts",
    category: "seasonal",
    keywords: ["winter solar", "snow solar panels", "massachusetts weather"],
    template: "seasonal-tips"
  },
  {
    title: "Solar Success Stories from {CITY}",
    category: "case-study",
    keywords: ["solar installation {city}", "customer success", "solar savings"],
    template: "success-story"
  },
  {
    title: "Solar Panel Maintenance Tips for Massachusetts Homeowners",
    category: "maintenance",
    keywords: ["solar panel maintenance", "massachusetts solar care", "solar cleaning"],
    template: "maintenance-guide"
  },
  {
    title: "Understanding Net Metering in Massachusetts",
    category: "education",
    keywords: ["net metering massachusetts", "solar credits", "utility bills"],
    template: "educational"
  }
];

export const MASSACHUSETTS_CITIES = [
  "Boston", "Worcester", "Springfield", "Lowell", "Cambridge", 
  "Newton", "Framingham", "Quincy", "Brockton", "Lynn",
  "Somerville", "Lawrence", "New Bedford", "Fall River", 
  "Malden", "Medford", "Peabody", "Revere", "Waltham", "Taunton"
];