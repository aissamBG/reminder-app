import moment from 'moment';
import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Add_reminder, Remove_reminder, Clear_reminders } from '../actions'
import logo from './reminder2.png'
import DatePicker from 'react-datepicker'
import 'react-datepicker/dist/react-datepicker.css';
class App extends Component {

    state = {
        text: '',
        date: new Date()
    }
    render() {
        const { reminders } = this.props,
            render_Reminders = () => {
                return (<ul className="list-group">
                    {
                        reminders.map(reminder => {
                            return <li key={reminder.id} className="list-group-item">
                                <div>{reminder.text}</div>
                                <div>{moment(new Date(reminder.date)).fromNow()}</div>
                                <div className="closeIcon btn-danger" onClick={_ => this.props.Remove_reminder(reminder.id)}>X</div>
                            </li>
                        })
                    }
                </ul>)
            };
        console.log(this.props.reminders)
        return <div className="App">
            <img src={logo} alt="" />
            <div className="reminder-title">
                <h1>What should you do ?</h1>
            </div>
            <input
                onChange={(e) => this.setState({ text: e.target.value })}
                className="form-control input"
                type="text"
                placeholder="Enter what you think..?"
                value={this.state.text}
            />
            <DatePicker
                className="form-control input"
                value={this.state.date}
                placeholderText="Enter Date"
                selected={this.state.date}
                onChange={(date) => this.setState({ date })}
                showTimeSelect
                timeFormat="HH-mm"
                dateFormat="MMMM d, yyyy h:mm aa"
                timeCaption="time"
            />
            <button
                onClick={() => {
                    this.props.Add_reminder(this.state.text, this.state.date)
                    this.setState({
                        text: '',
                        date: ''
                    }
                    )
                }}
                className="btn1 btn btn-primary btn-block">
                Add reminder
                </button>
            {render_Reminders()}
            <button
                onClick={this.props.Clear_reminders}
                className="btn1 btn btn-danger btn-block clearReminder"
            >
                Clear reminders
                </button>
        </div>
    }
}

/*function mapStateToProps(state) {
    return {
        reminders: state
    }
}*/
/*function mapDispatchToProps(dispatch) {
    return {
        add_reminder: () => dispatch(Add_reminder())
    }
}
*/
export default connect(state => {
    return {
        reminders: state
    }
}, { Add_reminder, Remove_reminder, Clear_reminders })(App);