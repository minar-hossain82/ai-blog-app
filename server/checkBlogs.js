import "dotenv/config";
import connectDB from "./configs/db.js";
import Blog from "./models/Blog.js";

async function checkBlogs() {
  try {
    await connectDB();

    const allBlogs = await Blog.find({});
    console.log(`Total blogs in database: ${allBlogs.length}`);

    allBlogs.forEach((blog) => {
      console.log(
        `- ${blog.title} | Published: ${blog.isPublished} | Image: ${blog.image}`,
      );
    });

    process.exit(0);
  } catch (error) {
    console.error("Error:", error);
    process.exit(1);
  }
}

checkBlogs();
