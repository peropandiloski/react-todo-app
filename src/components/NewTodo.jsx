import React, { Component } from 'react'

class NewTodo extends Component {
    state = {
        msg: "",
        done: false
    }
    setNewMessage = (event) => {
        this.setState({
            msg: event.target.value
        })
    }
    addTodo = () => {
        this.props.addIntoTodos(this.state)
        this.setState({ msg: "" })
    }

    render() {
        return (
            <div className="container">
                <div className="row m-5">
                    <div className="col-12">
                        <input type="text" className="form-control msg-input" placeholder="new message" onChange={this.setNewMessage} value={this.state.msg} />
                        <button onClick={this.addTodo} className="btn btn-primary add-button">Add</button>
                    </div>
                </div>
            </div>
            /** 
             * <div class="container">
                <div class="row m-5">
                    <div class="col-12">
                        <input type="text" class="form-control" placeholder="new message" value="" style="width: 100%;">
                        <button class="btn btn-primary add-button" style="
            width: 100%;">Add</button>
                    </div>
                </div>
            </div>
             */
        )
    }
}

export default NewTodo