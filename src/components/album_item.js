import React from 'react';

export default class AlbumItem extends React.Component {

    handleRemoveAlbum(e) {
        let id = this.props.id;
        this.props.handleRemoveAlbum(id);
    }

    render() {
        return (
            <tr>
                <td>{this.props.title}</td>
                <td>{this.props.year}</td>
                <td>
                    <button onClick={this.handleRemoveAlbum.bind(this)}>Remove</button>
                </td>
            </tr>
        );
    }
}