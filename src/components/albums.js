import React from 'react';
import _ from 'lodash';
import AlbumItem from './album_item';
import AlbumHead from './album_head';
import AddAlbum from './add_album';


export default class Albums extends React.Component {

    renderAlbums(albums) {
        return _.map(albums, (album, ind) => <AlbumItem key={album.id}
                                                        {...album}
                                                        handleRemoveAlbum={this.props.handleRemoveAlbum} /> );
    }

    render() {
        return (
            <div>
                <AddAlbum handleAddAlbum={this.props.handleAddAlbum} />
                <table>
                    <thead>
                        <AlbumHead />
                    </thead>
                    <tbody>
                        {this.renderAlbums(this.props.albums)}
                    </tbody>
                </table>
            </div>
        );
    }
}