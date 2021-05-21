import React, { Component } from "react";
import DiscoverBlock from "./DiscoverBlock/components/DiscoverBlock";
import makeRequest from "../api/makeRequest";
import Loading from "../../../common/components/Loading/Loading";
import "../styles/_discover.scss";

export default class Discover extends Component {
    constructor() {
        super();

        this.state = {
            newReleases: [],
            playlists: [],
            categories: [],
            loading: true,
        };
    }
    // While makeRequest.js was cleaner taking in resourceType and returning the resource itself, I
    // removed promise handling logic to resolve initial data as a single promise here.
    // Ideally it also wouldn't live in the component iself but abstracted into an additional data-fetching layer or Middleware such as Redux Thunk.
    fetchInitialData(args) {
        return Promise.all([
            makeRequest("browse/new-releases"),
            makeRequest("browse/featured-playlists"),
            makeRequest("browse/categories"),
        ]);
    }

    componentDidMount() {
        this.fetchInitialData().then((res) => {
            this.setState({
                newReleases: res[0].data.albums.items,
                playlists: res[1].data.playlists.items,
                categories: res[2].data.categories.items,
                loading: false,
            });
        });
    }

    render() {
        const { newReleases, playlists, categories, loading } = this.state;
        return loading ? (
            <Loading />
        ) : (
            <div className="discover">
                <DiscoverBlock
                    text="RELEASED THIS WEEK"
                    id="released"
                    data={newReleases}
                />
                <DiscoverBlock
                    text="FEATURED PLAYLISTS"
                    id="featured"
                    data={playlists}
                />
                <DiscoverBlock
                    text="BROWSE"
                    id="browse"
                    data={categories}
                    imagesKey="icons"
                />
            </div>
        );
    }
}
