// @flow

import { connect } from 'react-redux';
import ModalProvider from '../component/ModalProvider';
import type { State } from '../../reducers';

function mapStateToProps(state: State, ownProps: Object) {
  return {
    topics: state.timetable.topics.topics,
    ...ownProps,
  };
}

export default connect(mapStateToProps)(ModalProvider);
