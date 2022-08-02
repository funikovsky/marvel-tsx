interface CharsResponse {
  data: {
    results: Array<CharsResponseItem>;
  };
}

interface CharsUrlDetail {
  type: 'detail';
  url: string;
}

interface CharsUrlComicLink {
  type: 'comiclink';
  url: string;
}

export interface CharsComicsItem {
  items: Array<{
    resourceURI: string;
    name: string;
  }>;
}

type CharUrlItem = CharsUrlDetail | CharsUrlComicLink;
interface CharsThumbnail {
  path: string;
  extension: string;
}

export interface CharsResponseItem {
  id: number;
  name: string;
  description?: string;
  thumbnail: CharsThumbnail;
  urls: Array<CharUrlItem>;
  wiki: string;
  comics: CharsComicsItem;
}

export interface ApiResponse {
  getCharsList: CharsResponse;
}
