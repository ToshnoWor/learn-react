import React from 'react';


class ProfileStatus extends React.Component{
    state = {
        editMode: false
    }

    activateEditMode(){
        this.setState({
            editMode: true
        })
    }
    deactivateEditMode(){
        this.setState({
            editMode: false
        })
    }

    render() {
        return (
            < >
                {!this.state.editMode &&
                    <div onDoubleClick={this.activateEditMode.bind(this)}><span>{this.props.status}</span></div>
                }
                {this.state.editMode &&
                    <div>
                        <input autoFocus onBlur={ this.deactivateEditMode.bind(this)} defaultValue={this.props.status}/>
                    </div>
                }
            </>
        )
    }
}

export default ProfileStatus;