import { Column, Section, Title, Container, Card, Button } from "rbx";
import "../../../styles/users.scss";
import HeaderLogged from "../../../components/header_logged";
import UsersEditForm from "../../../components/auth/editForm";
import UsersEditFormPassword from "../../../components/auth/editPass";
import UsersDelete from "../../../components/auth/deleteUser";


export default function UserEdit(){
  return <>
    <HeaderLogged />
    <Section size="medium" className="users">
      <Container>
        <Column.Group centered className="users-edit">
          <Column size={4}>
            <Title size={5} className="has-text-grey has-text-left">
              Informações Pessoais
              </Title>
                <Card>
                  <Card.Content>
                    <UsersEditForm/>
                  </Card.Content>
                </Card>
              </Column>
            </Column.Group>

            <Column.Group centered className="users-edit">
              <Column size={4}>
                <Title size={5} className="has-text-grey has-text-left">
                  Password
                </Title>
                <Card>
                  <Card.Content>
                    <UsersEditFormPassword/>
                  </Card.Content>
                </Card>
              </Column>
            </Column.Group>
            <Column.Group centered>
              <Column size={4} className="has-text-right">
                <UsersDelete/>
              </Column>
            </Column.Group>
          </Container>
        </Section>
  </>
  };
