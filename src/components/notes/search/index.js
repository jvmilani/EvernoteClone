import React, { useState } from 'react';
import { Input, Column } from "rbx";

export default function Search(props) {
    const [query, setQuery] = useState("")

    const handleKeyDown = (e) => {
        if (e.key === 'Enter') {
            props.searchNotes(query)
        }
    }

    return (
        <Column.Group className="is-vcentered" breakpoint="mobile">
            <Column size="9" offset={1}>
                <Input type="text"
                    name={query}
                    value={query}
                    placeholder="Search note..."
                    onChange={(e) => setQuery(e.target.value)}
                    onKeyDown={handleKeyDown} />
            </Column>
        </Column.Group>
    )
}
