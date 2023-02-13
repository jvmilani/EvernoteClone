import React, { Fragment, useEffect, useState } from 'react';
import { Column } from "rbx";
import "../../styles/notes.scss";
import { push as Menu } from 'react-burger-menu'
import ListNotes from "../notes/list";
import NoteService from '../../services/notes';
import Editor from './editor';
import Search from './search';


function Notes(props) {

  const [notes, setNotes] = useState([]);
  const [current_note, setCurrentNote] = useState({ title: "", body: "", id: "" });

  useEffect(() => {
    fetchNotes();
  }, []);

  async function fetchNotes() {
    const response = await NoteService.index();
    if (response.data.length >= 1) {
      setNotes(response.data.reverse())
      setCurrentNote(response.data[0])
    } else {
      setNotes([]);
    }
  }

  async function createNote() {
    await NoteService.create();
    fetchNotes();
  }

  async function deleteNote(note) {
    await NoteService.delete(note._id);
    fetchNotes();
  }
  async function updateNote(oldNote, params) {
    const updatedNote = await NoteService.update(oldNote._id, params);
    const index = notes.indexOf(oldNote);
    const newNotes = notes;
    newNotes[index] = updatedNote.data;
    setNotes(newNotes);
    setCurrentNote(updatedNote.data)
  }


  const searchNotes = async (query) => {
    const response = await NoteService.search(query);
    setNotes(response.data)
  }

  const selectNote = (id) => {
    const note = notes.find((note) => {
      return note._id === id;
    })
    setCurrentNote(note);
  }

  return (
    <>
      <Column.Group className="notes" id="notes">
        <Menu
          pageWrapId={"notes-editor"}
          isOpen={props.isOpen}
          onStateChange={(state) => props.setIsOpen(state.isOpen)}
          disableAutoFocus
          outerContainerId={"notes"}
          customBurgerIcon={false}
          customCrossIcon={false}
        >
          <Column.Group>
            <Column size={10} offset={1}>
            <Search searchNotes={searchNotes} fetchNotes={fetchNotes} />
            </Column>
          </Column.Group>
          <ListNotes
            notes={notes}
            selectNote={selectNote}
            current_note={current_note}
            createNote={createNote}
            deleteNote={deleteNote} />
        </Menu>


        <Column size={12} className="notes-editor" id="notes-editor">
          <Editor note={current_note}
            updateNote={updateNote} />
        </Column>
      </Column.Group>
    </>
  )
}

export default Notes;