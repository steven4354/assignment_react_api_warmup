import React, {Component} from "react";

//custom components and small elements
import UserList from "./UserList";
import JumbotronInstance from "./elements/JumbotronFluid";
import UserForm from "./UserForm";

//node modules
import serialize from "form-serialize"; //this ones for the form

class App extends Component {
  constructor() {
    super();
    this.state = {
      users: [],
      isFetching: false
    };
  }

  componentDidMount() {
    this.setState({isFetching: true});
    fetch("https://reqres.in/api/users?delay=3")
      .then(response => response.json())
      .then(json => {
        this.setState({
          users: json.data,
          isFetching: false
        });
      });
  }

  // New add user action
  onAddUser = e => {
    e.preventDefault();
    const form = e.target;
    const body = serialize(form, {hash: true});
    console.log(form);
    console.log(body);

    // Create headers to set the content type to json
    const headers = new Headers();
    headers.append("Content-Type", "application/json");

    // Set options, and stringify the body to JSON
    const options = {
      headers,
      method: "POST",
      body: JSON.stringify(body)
    };

    // Before performing the fetch, set isFetching to true
    this.setState({isFetching: true});

    fetch("https://reqres.in/api/users?delay=3", options)
      .then(response => {
        // If response not okay, throw an error
        if (!response.ok) {
          throw new Error(`${response.status} ${response.statusText}`);
        }

        // Otherwise, extract the response into json
        return response.json();
      })
      .then(json => {
        // Update the user list and isFetching.
        // Reset the form in a callback after state is set.
        this.setState(
          {
            isFetching: false,
            users: [...this.state.users, json]
          },
          () => {
            form.reset();
          }
        );
      })
      .catch(error => {
        // Set error in state & log to console
        console.log(error);
        this.setState({
          isFetching: false,
          error
        });
      });
  };

  onDelete = e => {
    e.preventDefault();
    const headers = new Headers();
    headers.append("Content-Type", "application/json");

    const options = {
      headers,
      method: "delete"
    };

    fetch(`https://reqres.in/api/users/${e.target.value}`, options).then(
      response => {
        // If response not okay, throw an error
        if (!response.ok) {
          throw new Error(`${response.status} ${response.statusText}`);
        }

        console.log(response);
        // Otherwise, extract the response into json
        return response;
      }
    );
  };

  render() {
    const {users, isFetching} = this.state;
    return (
      <div className="App">
        <JumbotronInstance />

        <UserList
          users={users}
          isFetching={isFetching}
          onClick={this.onDelete}
        />

        <br />
        <UserForm onSubmit={this.onAddUser} />
      </div>
    );
  }
}

// add this back
// <JumbotronFluid
//   heading="User CRUD"
//   lead="Using an API for User CRUD operations"
// />

export default App;
