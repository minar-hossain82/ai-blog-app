import "dotenv/config";
import connectDB from "./configs/db.js";
import Blog from "./models/Blog.js";

const sampleBlogs = [
  {
    title: "A detailed step by step guide to manage your lifestyle",
    subTitle: "A Simple Step-by-Step Guide to Managing Your Lifestyle",
    description:
      "<p>Track your habits, focus on health, set clear goals and celebrate small wins.</p>",
    category: "Lifestyle",
    image: "blog_pic_1",
    isPublished: true,
  },
  {
    title: "How to create an effective startup roadmap or ideas",
    subTitle: "Creating an effective startup roadmap",
    description:
      "<p>Identify the problem, define your vision, and set milestones with MVP-first planning.</p>",
    category: "Startup",
    image: "blog_pic_2",
    isPublished: true,
  },
  {
    title: "Learning new technology to boost your career in software",
    subTitle: "Learning New Tech to Boost Your Software Career",
    description:
      "<p>Stay relevant, build projects, and join communities to accelerate career growth.</p>",
    category: "Technology",
    image: "blog_pic_3",
    isPublished: true,
  },
  {
    title: "Tips for getting the most out of apps and software",
    subTitle: "Tips for Getting the Most Out of Apps and Software",
    description:
      "<p>Use shortcuts, integrations, updates, and sync across devices for productivity.</p>",
    category: "Technology",
    image: "blog_pic_4",
    isPublished: true,
  },
  {
    title: "Enhancing your skills and capturing memorable moments",
    subTitle: "Enhancing Your Skills and Capturing Memorable Moments",
    description:
      "<p>Balance skill growth with mindful memory capture for personal development.</p>",
    category: "Lifestyle",
    image: "blog_pic_5",
    isPublished: true,
  },
  {
    title: "Maximizing returns by minimizing resources in your startup",
    subTitle: "Maximizing Returns by Minimizing Resources in Your Startup",
    description:
      "<p>Focus on core value, low overhead, and smart automation to scale without overspending.</p>",
    category: "Startup",
    image: "blog_pic_6",
    isPublished: true,
  },
  {
    title: "Taxes on Luxury Houses",
    subTitle: "What Do They Mean for the Market?",
    description:
      "<p>Understand property tax impacts, fairness debates, and market effects of luxury taxation.</p>",
    category: "Finance",
    image: "blog_pic_7",
    isPublished: true,
  },
  {
    title: "The New Way of Study",
    subTitle: "The New Way of Study: Ditching the Old",
    description:
      "<p>Use active learning, personalization, focus, and collaboration for modern study habits.</p>",
    category: "Finance",
    image: "blog_pic_8",
    isPublished: true,
  },
  {
    title: "Importance of Tourism",
    subTitle: "Why Tourism Matters More Than You Think",
    description:
      "<p>Tourism drives economies, preserves culture, and enables sustainable growth.</p>",
    category: "Lifestyle",
    image: "blog_pic_9",
    isPublished: true,
  },
  {
    title: "AI best practices in healthcare",
    subTitle: "Navigating the Future Responsibly",
    description:
      "<p>Prioritize patient safety, fairness, privacy, and transparency when applying AI in health.</p>",
    category: "Lifestyle",
    image: "blog_pic_10",
    isPublished: true,
  },
];

async function restoreBlogs() {
  try {
    await connectDB();

    // Remove existing test blog entries and existing sample titles to avoid duplicates
    await Blog.deleteMany({ title: { $in: sampleBlogs.map((b) => b.title) } });

    const created = await Blog.insertMany(sampleBlogs);
    console.log(`Inserted ${created.length} blogs`);

    process.exit(0);
  } catch (error) {
    console.error("Error restoring blogs:", error);
    process.exit(1);
  }
}

restoreBlogs();
