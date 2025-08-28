type ImageBeforeAfter = string | { data?: { url?: string } };

export interface ProjectType {
  title: string;
  description: string;
  image_before_after?: ImageBeforeAfter;
  id: string;
  data: string;
}
