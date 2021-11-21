import React, { Component } from 'react';
import DiscoverBlock from './DiscoverBlock/components/DiscoverBlock';
import '../styles/_discover.scss';
import { Loading } from '../../../common/layouts/SkeletonLoading';
import { connect } from 'react-redux';
import { getCategories, getFeaturedPlaylist, getNewRelease } from '../redux/action';
import CoreLayout from '../../../common/layouts/CoreLayout';

// action

const mapStateToProps = (state) => ({
  newReleases: state.Discover.newReleases,
  playlists: state.Discover.playlists,
  categories: state.Discover.categories,
  newReleaseLoading: state.Discover.newReleaseLoading,
  playlistsLoading: state.Discover.playlistsLoading,
  categoriesLoading: state.Discover.categoriesLoading,
});

const mapDispatchToProps = { getCategories, getFeaturedPlaylist, getNewRelease };

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(
  class Discover extends Component {
    componentDidMount() {
      this.props.getNewRelease();
      this.props.getFeaturedPlaylist();
      this.props.getCategories();
    }

    render() {
      const {
        newReleases = { albums: { items: [] } },
        playlists = { playlists: { items: [] } },
        categories = { categories: { items: [] } },
        newReleaseLoading,
        playlistsLoading,
        categoriesLoading,
      } = this.props;

      return (
        <CoreLayout>
          <div className='discover'>
            {newReleaseLoading || playlistsLoading || categoriesLoading ? (
              <>
                <Loading.BaseLoading />
                <Loading.BaseLoading />
                <Loading.BaseLoading />
              </>
            ) : (
              <>
                <DiscoverBlock type='albums' text='RELEASED THIS WEEK' id='released' data={newReleases.albums.items} />
                <DiscoverBlock
                  type='playlists'
                  text='FEATURED PLAYLISTS'
                  id='featured'
                  data={playlists.playlists.items}
                />
                <DiscoverBlock
                  type='categories'
                  text='BROWSE'
                  id='browse'
                  data={categories.categories.items}
                  imagesKey='icons'
                />
              </>
            )}
          </div>
        </CoreLayout>
      );
    }
  }
);
