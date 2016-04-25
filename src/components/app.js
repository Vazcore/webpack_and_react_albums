import React from 'react';
import Albums from './albums';

const albums = [
    {
        title: "New Rock", year: 1995, id:1
    },
    {
        title: "New Cristmas", year: 2001, id:2
    }
];

export default class App extends React.Component {

    constructor(props) {
        super(props);
        this.state = {albums};
    }

    handleAddAlbum(album) {
        let albums = this.state.albums;
        albums.push(album);
        this.setState({albums});
    }

    handleRemoveAlbum(id) {
        let albums = this.state.albums;
        for(let it=0; it < albums.length; it++) {
            if (albums[it].id == id) {
                delete albums[it];
                albums.splice(it, 1);
            }
        }
        this.setState({albums});
    }

    render() {
        return (
            <div>
                <h4>Albums:</h4>
                <Albums albums={this.state.albums}
                        handleRemoveAlbum={this.handleRemoveAlbum.bind(this)}
                        handleAddAlbum={this.handleAddAlbum.bind(this)} />
            </div>
        );
    }
}