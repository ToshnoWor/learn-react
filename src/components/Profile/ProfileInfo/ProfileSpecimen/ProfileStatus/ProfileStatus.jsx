import React from 'react';
import s from '../ProfileSpecimen.module.css'


class ProfileStatus extends React.Component{
    state = {
        editMode: false,
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
        });
    }

    updateStatus = (e) => {
        this.setState({status: e.currentTarget.value});
    }

    saveStatus(){
        this.props.saveStatus(this.props.auth, this.state.status);
        this.deactivateEditMode();
    }

    render() {
        return (
            < >
                {!this.state.editMode &&
                    <div
                        onDoubleClick={
                        this.props.isAuth ?
                        this.activateEditMode :
                            () => {alert("It's not your page!")}
                    }>
                        <span className={s.spanStatus}>
                            {
                                !this.state.status
                                ? "Not status"
                                :this.state.status
                            }
                        </span>
                    </div>
                }
                {this.state.editMode &&
                    <div>
                        <input className={s.inputStatus}
                            autoFocus
                            //onBlur={this.deactivateEditMode.bind(this)}
                            onChange={this.updateStatus}
                            value={this.state.status}
                        />
                        <button className={s.button}
                            onClick={this.saveStatus.bind(this)}>Save</button>
                    </div>
                }
            </>
        )
    }
}

export default ProfileStatus;