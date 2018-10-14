import React from 'react';
import ReactDOM from 'react-dom';
import "./gallery.global.scss";
import ImageGallery from 'react-image-gallery';
 const PREFIX_URL = 'https://farm1.staticflickr.com/';

class Gallery extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            showIndex: false,
            showBullets: false,
            infinite: true,
            showThumbnails: false,
            showFullscreenButton: true,
            showGalleryFullscreenButton: true,
            showPlayButton: false,
            showGalleryPlayButton: false,
            showNav: true,
            isRTL: false,
            slideDuration: 450,
            slideInterval: 2000,
            thumbnailPosition: 'bottom',
            showVideo: {},
        };

        this.images = [
            {
                thumbnail: `${PREFIX_URL}670/32356940031_ff39d0a3e0_m_d.jpg`,
                original: `${PREFIX_URL}670/32356940031_e8e7ce0cdd_o_d.jpg`,

            },
            {
                original: `${PREFIX_URL}7738/26911629844_5502eafd27_o_d.jpg`,
                thumbnail: `${PREFIX_URL}7738/26911629844_c48b237b4d_m_d.jpg`,

            },
            {
                original: `${PREFIX_URL}8645/28164363913_8a4e3fe5c3_o_d.jpg`,
                thumbnail: `${PREFIX_URL}8645/28164363913_a61d7b273c_m_d.jpg`,
            },
            {
                original: `${PREFIX_URL}8306/28445676513_79f0f3a073_o_d.jpg`,
                thumbnail: `${PREFIX_URL}8306/28445676513_fc2cd984c3_m_d.jpg`,
            },
            {
                original: `${PREFIX_URL}7349/27109425921_f39e94968f_o_d.jpg`,
                thumbnail: `${PREFIX_URL}7349/27109425921_a9f97babea_m_d.jpg`,
            },
            {
                original: `${PREFIX_URL}8092/29457947531_fea847c9b7_k_d.jpg`,
                thumbnail: `${PREFIX_URL}8092/29457947531_56b6bba2b0_m_d.jpg`,
            },
            {
                original: `${PREFIX_URL}399/31725179054_e56dc6df79_o_d.jpg`,
                thumbnail: `${PREFIX_URL}399/31725179054_a9bd62b368_m_d.jpg`,
            },
            {
                original: `${PREFIX_URL}7510/27644596184_c1852f402b_o_d.jpg`,
                thumbnail: `${PREFIX_URL}7510/27644596184_a9a0bb6dbd_m_d.jpg`,
            }

        ];
    }

    componentDidUpdate(prevProps, prevState) {
        if (this.state.slideInterval !== prevState.slideInterval ||
            this.state.slideDuration !== prevState.slideDuration) {
            // refresh setInterval
            this._imageGallery.pause();
            this._imageGallery.play();
        }
    }

    _onImageClick(event) {
        console.debug('clicked on image', event.target, 'at index', this._imageGallery.getCurrentIndex());
    }

    _onImageLoad(event) {
        console.debug('loaded image', event.target.src);
    }

    _onSlide(index) {
        this._resetVideo();
        console.debug('slid to index', index);
    }

    _onPause(index) {
        console.debug('paused on index', index);
    }

    _onScreenChange(fullScreenElement) {
        console.debug('isFullScreen?', !!fullScreenElement);
    }

    _onPlay(index) {
        console.debug('playing from index', index);
    }



    _resetVideo() {
        this.setState({showVideo: {}});

        if (this.state.showPlayButton) {
            this.setState({showGalleryPlayButton: true});
        }

        if (this.state.showFullscreenButton) {
            this.setState({showGalleryFullscreenButton: true});
        }
    }



    render() {
        return (
    <div className="galleryWrapper">
            <section className='gallery'>
                <ImageGallery
                    ref={i => this._imageGallery = i}
                    items={this.images}
                    lazyLoad={false}
                    onClick={this._onImageClick.bind(this)}
                    onImageLoad={this._onImageLoad}
                    onSlide={this._onSlide.bind(this)}
                    onPause={this._onPause.bind(this)}
                    onScreenChange={this._onScreenChange.bind(this)}
                    onPlay={this._onPlay.bind(this)}
                    infinite={this.state.infinite}
                    showBullets={this.state.showBullets}
                    showFullscreenButton={this.state.showFullscreenButton && this.state.showGalleryFullscreenButton}
                    showPlayButton={this.state.showPlayButton && this.state.showGalleryPlayButton}
                    showThumbnails={this.state.showThumbnails}
                    showIndex={this.state.showIndex}
                    showNav={this.state.showNav}
                    isRTL={this.state.isRTL}
                    thumbnailPosition={this.state.thumbnailPosition}
                    slideDuration={parseInt(this.state.slideDuration)}
                    slideInterval={parseInt(this.state.slideInterval)}
                    additionalClass="gallery-image-gallery"
                />

            </section>
    </div>
        );
    }
}

export default Gallery;