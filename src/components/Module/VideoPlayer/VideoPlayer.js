import React, { Component, PropTypes } from 'react';
import ReactDOM from 'react-dom';
import cx from 'classnames';
import vjs from 'video.js';
import Helmet from 'react-helmet';
import './VideoPlayer.less';

export default class VideoPlayer extends Component {
	static propTypes = {
		id: PropTypes.string.isRequired,
		playlist: PropTypes.object.isRequired,
		onPlay: PropTypes.func,
		onPause: PropTypes.func,
		onEnded: PropTypes.func,
		onPlaying: PropTypes.func,
		onSeeking: PropTypes.func,
		onFirstPlay: PropTypes.func,
		onExit: PropTypes.func,
		onRef: PropTypes.func,
		currentTime: PropTypes.number
	}

	constructor(props) {
		super(props);
		this.state = {
			isMounted: false,
			isLoaded: false
		};
	}

	componentDidMount() {
		this.mountVideoPlayer();
	}

	componentWillReceiveProps(nextProps) {
		const { playlist } = nextProps;
		const { isMounted } = this.state;

		if ( isMounted && playlist !== this.props.playlist ) {
			// reset tracks
			this.clearVideoTracks();
			this.updateSources(playlist);
		}
	}

	componentWillUpdate(nextProps, nextState) {
		const { playlist } = nextProps;
		const { isMounted, isLoaded } = nextState;

		if ( isMounted && !isLoaded ) {
			this.updateSources(playlist);
		}
	}

	componentWillUnmount() {
		vjs(this.refs.videoPlayer.id).dispose();
		if ( typeof this.props.onExit === 'function' ) {
			this.props.onExit();
		}
	}

	onReady = () => {
		this.getVideoPlayerEl().parentElement.removeAttribute('data-reactid');
	}

	onPlay = () => {
		if ( typeof this.props.onPlay === 'function' ) {
			this.props.onPlay();
		}
	}

	onPause = () => {
		if ( typeof this.props.onPause === 'function' ) {
			this.props.onPause();
		}
	}

	onEnded = () => {
		if ( typeof this.props.onEnded === 'function' ) {
			this.props.onEnded();
		}
	}

	onPlaying = () => {
		if ( typeof this.props.onPlaying === 'function' ) {
			this.props.onPlaying();
		}
	}

	onSeeking = () => {
		if ( typeof this.props.onSeeking === 'function' ) {
			this.props.onSeeking();
		}
	}

	onFirstPlay = () => {
		if ( typeof this.props.onFirstPlay === 'function' ) {
			this.props.onFirstPlay();
		}
	}

	onLoaded = () => {
		const { playlist } = this.props;
		const player = this.getVideoPlayer();

		player.currentTime(playlist.currentTime || 0);
	}

	getDefaultOptions = () => {
		return {
			preload: 'auto',
			autoplay: false,
			controls: true,
			playbackRates: [0.5, 1, 2, 4]
		};
	}

	getVideoPlayer = () => {
		return this._player;
	}

	getVideoPlayerEl = () => {
		return ReactDOM.findDOMNode(this.refs.videoPlayer);
	}

	setVideoPlayerSrc = (src) => {
		this._player.src(src);
	}

	addVideoTrack = (track) => {
		this._player.addRemoteTextTrack(track);
	}

	clearVideoTracks = () => {
		const player = this.getVideoPlayer();
		const _tracks = player.remoteTextTracks().tracks_;
		_tracks.map( (track) => {
			player.removeRemoteTextTrack(track);
		});
	}

	mountVideoPlayer = () => {
		this._player = vjs(this.getVideoPlayerEl(), this.getDefaultOptions());
		const player = this._player;

		// bind event
		player.on('play', this.onPlay);
		player.on('pause', this.onPause);
		player.on('playing', this.onPlaying);
		player.on('ended', this.onEnded);
		player.on('seeking', this.onSeeking);
		player.on('firstplay', this.onFirstPlay);
		player.on('loadedmetadata', this.onLoaded);

		player.ready(this.onReady);

		this.props.onRef(player);

		this.setState({
			isMounted: true
		});
	}

	updateSources = (playlist) => {
		if ( !playlist ) {
			return;
		}

		playlist.video && this.setVideoPlayerSrc(playlist.video);
		playlist.subtitle && this.addVideoTrack(playlist.subtitle);

		this.setState({
			isLoaded: true
		});
	}

	render() {
		const videoPlayerClasses = cx('video-js', 'vjs-default-skin', 'vjs-big-play-centered');

		return (
			<div className="videoPlayerContainer">
				<Helmet
					link={[
						{'rel': 'stylesheet', 'href': '//vjs.zencdn.net/5.8/video-js.min.css'},
					]}
					style={[
						{'cssText': require('./VideoPlayer.css')._style}
					]}
				/>
				<video crossOrigin="anonymous" ref="videoPlayer" className={ videoPlayerClasses } />
			</div>
		);
	}
}
