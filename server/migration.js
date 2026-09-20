import "dotenv/config";
import connectDB from "./configs/db.js";
import Blog from "./models/Blog.js";

async function fixImageUrls() {
  try {
    await connectDB();

    // Find all blogs with old format image URLs
    const blogs = await Blog.find({
      image: { $regex: "tr:" },
    });

    console.log(`Found ${blogs.length} blogs with old image URL format`);

    for (let blog of blogs) {
      // Convert from path-based to query-based transformations
      // Old format: https://ik.imagekit.io/minarhossain/tr:q-auto:f-webp:w-1280/blogs/3db_TcqrT11pV.PNG
      // New format: https://ik.imagekit.io/minarhossain/blogs/3db_TcqrT11pV.PNG

      const newUrl = blog.image
        .replace(/\/tr:[^/]*/, "") // Remove the tr: transformation part
        .split("?")[0]; // Remove any query params

      console.log(`Old: ${blog.image}`);
      console.log(`New: ${newUrl}`);

      blog.image = newUrl;
      await blog.save();
    }

    console.log("Migration completed!");
    process.exit(0);
  } catch (error) {
    console.error("Migration error:", error);
    process.exit(1);
  }
}

fixImageUrls();

// aaaaaaaaaaaaaa
