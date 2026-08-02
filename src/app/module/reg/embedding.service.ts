import { envVars } from "../../config/env";

export class EmbeddingService {
  private apikey: string;
  private apiUrl: string = "https://openrouter.ai/api/v1";
  private embeddingModel: string;

  constructor (){
    this.apikey = envVars.RAG.OPENROUTE_API_KEY || "";
    this.embeddingModel =
      envVars.RAG.OPENROUTE_EMBEDDING_MODEL ||
      "nvidia/llama-nemotron-embed-vl-1b-v2:free";

      if (!this.apikey) {
        throw new Error(
          "OPENROUTE_API_KEY is not set in the environment variables."
        );
      }
  }
}
