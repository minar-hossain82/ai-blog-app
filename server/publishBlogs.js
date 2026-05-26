import "dotenv/config";
import connectDB from "./configs/db.js";
import Blog from "./models/Blog.js";

async function publishBlogs() {
  try {
    await connectDB();

    const result = await Blog.updateMany(
      { isPublished: false },
      { isPublished: true },
    );

    console.log(`Updated ${result.modifiedCount} blogs to published`);

    process.exit(0);
  } catch (error) {
    console.error("Error:", error);
    process.exit(1);
  }
}

publishBlogs();
