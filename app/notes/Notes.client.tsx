"use client";

import { useQuery } from "@tanstack/react-query";
import { getNotes } from "@/lib/api";
import NoteList from "@/components/NoteList/NoteList";
import css from "./NotesPage.module.css";

const NotesClient = () => {
  const { data, isLoading, error } = useQuery({
    queryKey: ["notes"],
    queryFn: getNotes,
    refetchOnMount: false,
  });

  if (isLoading) return <p>Loading, please wait...</p>;
  if (error) return <p>Could not fetch the list of notes. {error.message}</p>;

  return (
    <section className={css.section}>
      <h1 className={css.title}>Notes List</h1>
     {data?.notes && data.notes.length > 0 && <NoteList notes={data.notes} />}
    </section>
  );
};

export default NotesClient;