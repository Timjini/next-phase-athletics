export interface MainButtonProps {
    title: string;
    onClick: () => void;
  }
export type InstagramPost = {
  id: string;
  imageUrl: string;
  caption: string;
  likes: number;
  comments: number;
  timestamp: string;
  isVideo?: boolean;
};