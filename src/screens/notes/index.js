import React, { useState } from "react";
import HeaderLogged from "../../components/header_logged";
import { Column } from "rbx";
import "../../styles/notes.scss";
import Notes from "../../components/notes";


export default function NotesScreen() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
        <HeaderLogged setIsOpen={setIsOpen} />
        <Notes isOpen={isOpen} setIsOpen={setIsOpen} /> 
    </>
  );
}
