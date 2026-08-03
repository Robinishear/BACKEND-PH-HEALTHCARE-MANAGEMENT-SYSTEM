import { envVars } from "../../config/env";

export class EmbeddingService {
  private apikey: string;
  private apiUrl: string = "https://openrouter.ai/api/v1";
  private embeddingModel: string;

  constructor() {
    this.apikey = envVars.RAG.OPENROUTE_API_KEY || "";
    this.embeddingModel =
      envVars.RAG.OPENROUTE_EMBEDDING_MODEL ||
      "nvidia/llama-nemotron-embed-vl-1b-v2:free";

    if (!this.apikey) {
      throw new Error(
        "OPENROUTE_API_KEY is not set in the environment variables.",
      );
    }
  }

  async generateEmbedding(text: string) {
    try {
      const response = await fetch(`${this.apiUrl}/embeddings`, {
        method: "POST",
        headers: {
          Authorization: `Bearer ${this.apikey}`,
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          model: this.embeddingModel,
          input: text,
        }),
      });

      if (!response.ok) {
        throw new Error(`Error generating embedding: ${response.status}`);
      }

      const data = await response.json();

      if (!data.data || data.data.length === 0) {
        throw new Error("Invalid response structure from embedding API.");
      }

      return data.data[0].embedding;
    } catch (error) {
      console.error("Error generating embedding:", error);
      throw error;
    }
  }
}
