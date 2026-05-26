import "dotenv/config";
import connectDB from "./configs/db.js";
import Blog from "./models/Blog.js";

async function deleteTestBlog() {
  try {
    await connectDB();

    const result = await Blog.deleteOne({ title: "jhh" });

    if (result.deletedCount > 0) {
      console.log("Test blog deleted successfully");
    } else {
      console.log("Test blog not found");
    }

    process.exit(0);
  } catch (error) {
    console.error("Error:", error);
    process.exit(1);
  }
}

deleteTestBlog();
