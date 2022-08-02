interface CharsResponse {
  data: {
    results: Array<CharsResponseItem>;
  };
}

export interface CharsResponseItem {
  id: number;
  name: string;
  description?: string;
  thumbnail: {
    path: string;
    extension: string;
  };
  urls: Array<
    | {
        type: 'detail';
        url: string;
      }
    | {
        type: 'comiclink';
        url: string;
      }
  >;

  wiki: string;
  comics: {
    items: Array<{
      resourceURI: string;
      name: string;
    }>;
  };
}

export interface ApiResponse {
  getCharsList: CharsResponse;
}
