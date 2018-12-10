import { connect } from 'react-redux'
import Todo from '../components/Todo'
import { bindActionCreators } from '../../../../Library/Caches/typescript/3.1/node_modules/redux';
import { creator } from '../modules/todo'

function mapStateToProps(state) {
    console.log(state)
    return {...state.todo}
}

function mapDispatchToProps(dispatch){
    return bindActionCreators({
        onChangeText: creator.onChangeText,
        onClickButton: creator.onClickButton,
        onClickDelete: creator.onClickDelete
    },dispatch)
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Todo)