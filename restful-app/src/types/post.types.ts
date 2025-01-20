type Role = "Admin" | "Editor" | "Author";

export interface PostTypes {
  id: number;
  title: string;
  description: string;
  author: string;
  role: Role;
  isPublished: boolean;
}
