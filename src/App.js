import React, { Component } from "react";
import './App.css';
import {CardList} from "./components/card-list/card-list.component";
import { SearchBox } from "./components/search-box/search-box.component";

class App extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            monsters: [],
            searchField:''
        };
    }

    componentDidMount() {
        fetch("https://jsonplaceholder.typicode.com/users")
            .then(response => response.json())
            .then(users => this.setState({monsters: users}));
    };

    onSearchChange = event =>
    {
        this.setState({searchField: event.target.value});
    };

    render() {
        const {monsters, searchField} = this.state;
        const filterMonsters = monsters.filter(monster =>
        monster.name.toLowerCase().includes(searchField.toLowerCase())
        );
        return (
                <div className="App">
                    <h1>Monster List</h1>
                    <SearchBox placeholder='search'
                        handleChange={this.onSearchChange}
                    />

                    <CardList monsters={filterMonsters }/>
                </div>
        );
    }
}

export default App;
