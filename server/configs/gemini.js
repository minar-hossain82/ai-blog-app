import OpenAI from "openai";

const apiKey = process.env.OPENROUTER_API_KEY?.trim();

if (!apiKey) {
  throw new Error("OPENROUTER_API_KEY is not set in server/.env");
}

const client = new OpenAI({
  baseURL: "https://openrouter.ai/api/v1",
  apiKey,
});

async function main(prompt, retries = 3, delay = 1000) {
  for (let attempt = 0; attempt < retries; attempt++) {
    try {
      console.log(`Attempt ${attempt + 1}: Calling OpenRouter model`);

      const completion = await client.chat.completions.create({
        model: "openrouter/free",
        messages: [
          {
            role: "user",
            content: prompt,
          },
        ],
      });

      console.log("✓ AI generation successful");

      return completion.choices[0].message.content || "";
    } catch (error) {
      console.error(`Attempt ${attempt + 1} failed:`, {
        message: error.message,
        status: error.status,
        details: error,
      });

      if (error.status === 429 && attempt < retries - 1) {
        const waitTime = delay * Math.pow(2, attempt);

        console.log(`Rate limited. Retrying in ${waitTime}ms...`);

        await new Promise((resolve) => setTimeout(resolve, waitTime));

        continue;
      }

      throw error;
    }
  }
}

export default main;
