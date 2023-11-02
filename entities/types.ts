export interface BlogProps {
  id: string;
  title: string;
  author: string;
  description: string;
  content: string;
  headerImage: string;
  images: string[];
  categories: string[];
  created: string;
  updated: string;
  collectionId: string;
}


export interface CategoryCardProps {
  title: string;
  id: string;
  blogs?: string[];
  collectionId?: string;
  collectionName?: string;
  created?: string;
  updated?: string;
}

export interface Image {
  id: string;
  
}