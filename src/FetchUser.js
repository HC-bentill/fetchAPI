import React from "react";

export default class FetchUser extends React.Component {
  state = {
    person: null,
    loading: true,
  };

  async componentDidMount() {
    const url = "https://api.randomuser.me/"; //put the (url)endpoint of the api in a variable
    const response = await fetch(url); //fetch the data from the api
    const data = await response.json(); // convert the datareceived into JSON file(array of objects)
    this.setState({
      person: data.results[0],
      loading: false,
    });
  }

  render() {
    //another approach
    // if (this.state.loading) {
    //   <div>
    //     <h1>Loading....</h1>
    //   </div>
    // }

    // if (!this.state.person) {
    //   <div>
    //     <h1>Didnt get a person</h1>
    //   </div>
    // }

    return (
      <div>
        {this.state.loading || !this.state.person ? (
          <div>
            <h1>Loading....</h1>
          </div>
        ) : (
          <div>
            <div>
              <h2>{this.state.person.name.title}</h2>
              <h2>{this.state.person.name.first}</h2>
              <h2>{this.state.person.name.last}</h2>
              <img src={this.state.person.picture.large} alt="upp" />

              <h1>Welcome {this.state.person.login.username} </h1>
            </div>
          </div>
        )}
      </div>
    );
  }
}
