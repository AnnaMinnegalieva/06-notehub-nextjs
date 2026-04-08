export type Note = {
  id: string;
  title: string;
  content: string;
  tag: string;
  userId: string;
  createdAt: string;
  updatedAt: string;
};

export type NoteListResponse = {
  notes: Note[];
  total: number;
};