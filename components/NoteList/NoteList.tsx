import Link from "next/link";
import type { Note } from "@/types/note";
import css from "./NoteList.module.css";

type Props = {
  notes: Note[];
};

const NoteList = ({ notes }: Props) => {
  return (
    <ul className={css.list}>
      {notes.map((note) => (
        <li key={note.id} className={css.item}>
          <h2 className={css.title}>{note.title}</h2>
          <p className={css.tag}>{note.tag}</p>
          <p className={css.content}>{note.content}</p>
          <div className={css.actions}>
            <Link href={`/notes/${note.id}`} className={css.link}>
              View details
            </Link>
          </div>
        </li>
      ))}
    </ul>
  );
};

export default NoteList;