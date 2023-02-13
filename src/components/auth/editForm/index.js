import React, { Fragment, useState, useEffect } from 'react';
import { Button, Field, Control, Input, Column, Help, Label } from "rbx";
import UserService from '../../../services/users';

function UsersEditForm() {
    const [email, setEmail] = useState("");
    const [name, setName] = useState("");
    const [id, setId] = useState("");
    const [status, setStatus] = useState(null);

    const initializeUser = async () => {
        setName(localStorage.getItem('user'));
        setEmail(localStorage.getItem('email'));
        setId(localStorage.getItem('id'));
    }

    useEffect(() => {
        initializeUser()
    }, [])

    const handleSubmit = async (evt) => {
        evt.preventDefault();
        try {
            await UserService.update({ email: email, name: name, id: id });
            setStatus("success")
        } catch (err) {
            setStatus("error")
        }
    }

    return (
        <>
            <form onSubmit={handleSubmit}>
                <Field>
                    <Control>
                        <Label className="has-text-grey">Full Name</Label>
                        <Input
                            type="name"
                            value={name || ""}
                            onChange={e => {setName(e.target.value); console.log(name)}}
                            required
                            name="name"
                        />
                    </Control>
                </Field>
                <Field>
                    <Control>
                        <Label className="has-text-grey">Email</Label>
                        <Input
                            type="email"
                            value={email || ""}
                            onChange={e => setEmail(e.target.value)}
                            required
                            name="email"
                        />
                    </Control>
                </Field>

                <Field>
                    <Control>
                        <Column.Group>
                            <Column className="has-text-right">
                                <Button color="custom-purple" outlined>Update</Button>
                            </Column>
                        </Column.Group>
                    </Control>
                </Field>
                {status == "error" &&
                    <Help color="danger">Problem in update</Help>
                }
                {status == "success" &&
                    <Help color="primary">Updated with success</Help>
                }
            </form>
        </>
    )


}

export default UsersEditForm;