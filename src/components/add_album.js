import React from 'react';

export default class AddAlbum extends React.Component {

    constructor(props) {
        super(props);
        this.state = {title: ""};
    }

    addAlbum(e) {
        e.preventDefault();
        let title = this.refs.titleField.value;
        let year = this.refs.yearField.value;
        let id = (new Date).getTime();
        this.props.handleAddAlbum({title, year, id});

    }

    render() {
        return (
            <form onSubmit={this.addAlbum.bind(this)}>
                <input type="text"
                       name="title"
                       ref="titleField"
                       placeholder="Type album title" />
                <input type="number"
                       ref="yearField"
                       placeholder="Year" />
                <button>Add</button>
            </form>
        );
    }
}