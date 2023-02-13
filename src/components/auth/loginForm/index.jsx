import {
    Button,
    Field,
    Control,
    Label,
    Input,
    Column,
    Help,
} from "rbx";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import UserService from "../../../services/users";
export default function LoginForm() {

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");;
    const [error, setError] = useState(false);
    let redirect = useNavigate();

    UserService.logout();

    const handleSubmit = async (evt) => {
        evt.preventDefault();
        try {
            await UserService.login({
                email: email,
                password: password,
            });
            redirect("/notes");
        } catch (error) {
            console.log(error);
            setError(true);
        }
    }

    return (
        <>
            <Column.Group centered>
                <form onSubmit={handleSubmit}>
                    <Column size={12}>
                        <Field>
                            <Label size="small">Email:</Label>
                            <Control>
                                <Input
                                    type="email"
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                    required
                                    name="email"
                                />
                            </Control>
                        </Field>

                        <Field>
                            <Label size="small">Password:</Label>

                            <Control>
                                <Input
                                    type="password"
                                    value={password}
                                    onChange={(e) => setPassword(e.target.value)}
                                    required
                                    name="password"
                                />
                            </Control>
                        </Field>

                        <Field>
                            <Control>
                                <Column.Group breakpoint="mobile">
                                    <Column>
                                        <Link
                                            to="/register"
                                            className="button is-white has-text-custom-purple"
                                        >
                                            Register
                                        </Link>
                                    </Column>

                                    <Column>
                                        <Button color="custom-purple" outlined>
                                            Login
                                        </Button>
                                    </Column>
                                </Column.Group>
                            </Control>
                        </Field>
                        {error && <Help color="danger">Email or Password invalid</Help>}
                    </Column>
                </form>
            </Column.Group>
        </>
    );
    }


