import {useState} from "react";
import {timestamp} from "../../firebase/config";
import {useAuthContext} from "../../hooks/useAuthContext";
import {useFirestore} from "../../hooks/useFirestore";
import Avatar from "../../components/Avatar";
import {formatDistanceToNow} from "date-fns";

const ProjectComments = ({project}) => {
    const {updateDocument,response} = useFirestore('projects')
    const {user} = useAuthContext()

    const [newComment, setNewComment] = useState('')

    const handleSubmit = async (e) =>{
        e.preventDefault();
        const commentToAdd = {
            displayName : user.displayName,
            photoURL: user.photoURL,
            content : newComment,
            createdAt : timestamp.fromDate(new Date()) ,
            id: Math.random()
        }
        await updateDocument(project.id,{
            //update the comments arr but b4 we keep the old ones and then add the new one to the array
            comments:[...project.comments,commentToAdd]
        })
        if (!response.err){
            //that will set the text area to be empty
            setNewComment('')
        }
    }

    return (
        <div className={'project-comments'}>

            <ul>
                {project.comments.length > 0 && project.comments.map(comment => (
                    <li key={comment.id}>
                        <div className="comment-author">
                            <Avatar src={comment.photoURL} />
                            <p>{comment.displayName}</p>
                        </div>
                        <div className="comment-date">
                            {/*first arguemnt is when comment was created ,*/}
                            {/*second argument is object that place a string word */}
                            <p>{formatDistanceToNow(comment.createdAt.toDate(),{addSuffix:true})}</p>
                        </div>
                        <div className="comment-content">
                            <p>{comment.content}</p>
                        </div>
                    </li>
                ))}
            </ul>



            <h4>Project Comments</h4>
            <form className={'add-comment'} onSubmit={handleSubmit}>
                <label>
                    <span>Add new comment</span>
                    <textarea required
                              onChange={(e) => setNewComment(e.target.value)}
                              value={newComment}>
                    </textarea>
                </label>
                <button className={'btn'}>Add comment</button>
            </form>
        </div>
    );
};

export default ProjectComments;
