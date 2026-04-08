export type NoteTag = "Todo" | "Work" | "Personal" | "Meeting" | "Shopping";

export type Note = {
  id: number;
  title: string;
  content: string;
  tag: NoteTag;
  userId: string;
  createdAt: string;
  updatedAt: string;
};

export type NoteListResponse = {
  notes: Note[];
  totalPages: number;
};