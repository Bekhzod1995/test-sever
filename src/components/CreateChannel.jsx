import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Modal } from 'antd';
import ChannelForm from './forms/ChannelNameToPost';
import * as actionCreators from '../actions/channels';

const mapStateToProps = state => ({
  createModalVisibility: state.channelHandler.createModalVisibility,
});

@connect(mapStateToProps, actionCreators)
class CreateChannel extends Component {
  // close = async () => {
  //   const { closeModal } = this.props;

  // }

  render() {
    const { createModalVisibility, closeModal } = this.props;
    return (
      <Modal
        title="Create Channel: "
        visible={createModalVisibility}
        footer={null}
        onCancel={() => closeModal()}
        maskClosable
        closable
      >
        <ChannelForm />
      </Modal>
    );
  }
}

export default CreateChannel;
