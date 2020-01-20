import React, { Component, Fragment } from 'react';
import Modal from 'react-awesome-modal';
import PropTypes from 'prop-types';

export default class ContactPop extends Component {
        constructor(...props) {
            super(...props);
            this.state = {
                visible : false
            }
            console.log("movie:", this.props.movie);
        }

        openModal() {
            this.setState({
                visible : true
            });
        }

        closeModal() {
            this.setState({
                visible : false
            });
        }
    render() {
        return (
            <Fragment>
                <input type="button" value="Read more" onClick={() => this.openModal()} className="openModal" />
            <Modal 
                visible={this.state.visible}
                width="600"
                effect="fadeInUp"
                onClickAway={() => this.closeModal()}
            >
                <div className="popModal">
                    <div className="popModal_heading">
                        <span onClick={() => this.closeModal()} className="closeModal "><i class="far fa-window-close"></i></span>
                        <h1>{this.props.movie.movie_title}</h1>
                        <p>{this.props.movie.desc}</p>
                    </div>
                    <img src={this.props.movie.img_url} />
                </div>
            </Modal>
            </Fragment>
        )
    }
}
// export default ContactPop;