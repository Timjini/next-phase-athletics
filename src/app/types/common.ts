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

export interface NavigationProps {
  logoPath: string;
  logoAlt?: string;
  links?: Array<{ href: string; label: string }>;
}

export interface VideoModalProps {
  URL: string;
}