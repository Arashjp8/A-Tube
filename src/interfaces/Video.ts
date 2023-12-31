interface Snippet {
  publishedAt: string;
  channelId: string;
  title: string;
  description: string;
  thumbnails: {
    default: {
      url: string;
      width: number;
      height: number;
    };
    high: {
      url: string;
      width: number;
      height: number;
    };
    medium: {
      url: string;
      width: number;
      height: number;
    };
  };
  channelTitle: string;
  tags: string[];
  categoryId: string;
  liveBroadcastContent: string;
}

interface ContentDetails {
  duration: string;
  caption: string;
  licensedContent: boolean;
  projection: string;
}

interface Statistics {
  viewCount: string;
  likeCount: string;
  favoriteCount: string;
  commentCount: string;
}

export interface VideoProps {
  kind: string;
  id: {
    kind: string;
    videoId: string;
  };
  snippet: Snippet;
  contentDetails: ContentDetails;
  statistics: Statistics;
}
