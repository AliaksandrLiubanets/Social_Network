import React from 'react'

class ProfileStatus extends React.Component {

    state = {
        editMode: false,
        title: 'bla-bla'
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
    }

    render = () => {
        return <>
            {
                !this.state.editMode
                    ? <div>
                        <span onDoubleClick={this.activateEditMode} >{this.props.status}</span>
                    </div>
                    : <div>
                        <input onBlur={this.deactivateEditMode} autoFocus={true} value={this.props.status} />
                    </div>
            }

        </>
    }
}

export default ProfileStatus