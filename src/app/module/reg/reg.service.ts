import { EmbeddingService } from "./embedding.service";
import { IndexingService } from "./indexing.service";

export class REGService {
  private embeddingService: EmbeddingService;
  // private llmService: LLMService;
  private indexingService: IndexingService;

  constructor() {
    this.embeddingService = new EmbeddingService();
    // this.llmService = new LLMService();
    this.indexingService = new IndexingService();
  }
  async ingestDoctorsData() {
    return this.indexingService.indexDoctorsData();
  }

  
  async generateAnswer(
    query: string,
    limit: number = 5,
    sourceType?: string,
    asJson: boolean = false,
  ) {
    try {
      const relevantDocs = await this.retrieveRelevantDocuments(
        query,
        limit,
        sourceType,
      );
    } catch (error) {
      console.log(error);
    }
  }
}
