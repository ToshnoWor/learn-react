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
        });
    }

    newStatus = React.createRef();

    updateStatus(){
        this.props.updateNewStatus(this.newStatus.current.value);
    }

    saveStatus(){
        this.props.saveStatus(this.props.auth, this.props.newStatus);
        this.deactivateEditMode();
    }

    render() {
        return (
            < >
                {!this.state.editMode &&
                    <div onDoubleClick={
                        this.props.auth.isAuth ?
                        this.activateEditMode.bind(this) :
                            () => {alert("It's not your page!")}
                    }><span>{this.props.status}</span></div>
                }
                {this.state.editMode &&
                    <div>
                        <input
                            autoFocus
                            ref={this.newStatus}
                            //onBlur={this.deactivateEditMode.bind(this)}
                            onChange={this.updateStatus.bind(this)}
                            defaultValue={this.props.newStatus}
                        />
                        <button
                            onClick={this.saveStatus.bind(this)}>Save</button>
                    </div>
                }
            </>
        )
    }
}

export default ProfileStatus;