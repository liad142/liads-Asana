import React from 'react';
import Avatar from "../../components/Avatar";
import {useFirestore} from "../../hooks/useFirestore";
import {useAuthContext} from "../../hooks/useAuthContext";
import {useHistory} from "react-router-dom";

const ProjectSummary = ({project}) => {
    const {deleteDocument} = useFirestore('projects')
    const {user} = useAuthContext()
    const history = useHistory()

    const handleClick = (e) => {
        deleteDocument(project.id)
        history.push('/')
    }

    return (
        <div>
            <div className="project-summary">
                <h2 className={'page-title'}>{project.name}</h2>
                <p>created By {project.createdBy.displayName}</p>
                <p className="due-date">
                    Project created in {project.dueDate.toDate().toDateString()}
                </p>
                <p className="details">{project.details}</p>
                <h4>project is assigned to :</h4>
                {project.assignedUsersList.map(user => (
                    <div key={user.id}>
                        <Avatar src={user.photoURL}/>
                    </div>
                ))}
            </div>
            {/*showing the button only to the user who created this project and here im checking if is this user*/}
            {/*{user.uid === project.createdBy.id && (*/}
                <button className="btn" onClick={handleClick}>Delete this project</button>
            {/*)}*/}

        </div>
    );
};

export default ProjectSummary;
