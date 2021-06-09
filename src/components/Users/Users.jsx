import React from 'react';
import Paginator from "../common/Paginator/Paginator";
import User from "./User";

const Users = ({currentPage, totalUserCount, pageSize, onPageChanged, users, ...props}) => {
    return <div>
        <Paginator
            currentPage={currentPage}
            onPageChanged={onPageChanged}
            totalItemsCount={totalUserCount}
            pageSize={pageSize}
            portionSize={2}
        />
        {
            users.map(u => <User
                    key={u._id}
                    user={u}
                    followingInProgress={props.followingInProgress}
                    auth={props.auth}
                    unfollow={props.unfollow}
                    follow={props.follow}
                />
            )
        }
    </div>
}

export default Users;