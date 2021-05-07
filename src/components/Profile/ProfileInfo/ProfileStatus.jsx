import React from 'react'

class ProfileStatus extends React.Component {

    state = {
        editMode: false,
        title: 'bla-bla',
        status: this.props.status
    }

    activateEditMode = () => {
        this.setState({
            editMode: true
        })
    }

    deactivateEditMode = () => {
        this.setState({
            editMode: false
        })
        this.props.updateStatus(this.state.status)        
    }

    changeTextInput = (e) => {
        let body = e.currentTarget.value   // e.target.value
        this.setState({
            status: body
        })
    }

    handleFocus = (event) => {
        event.target.select()
    }    

    render = () => {        
        return <>
            {
                !this.state.editMode
                    ? <div>
                        <span onDoubleClick={this.activateEditMode} >{this.props.status || 'Set your status'}</span>
                    </div>
                    : <div>
                        <input onBlur={this.deactivateEditMode} onChange={this.changeTextInput} autoFocus={true}
                        onFocus={this.handleFocus} value={this.state.status} />
                    </div>
            }
        </>
    }
}

export default ProfileStatus