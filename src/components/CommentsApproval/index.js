import React, { useState, useEffect } from 'react';

import CommentItem from '../CommentItem';
import { deleteCommentById, getComments, patchCommentById } from '../../api/comments';
import s from '../CommentList/CommentList.module.css';

function CommentsApproval() {
    const [comments, setComments] = useState([]);

    useEffect(() => {
        getComments().then(setComments);
    }, []);

    return (
        <ul className={s.list}>
            <div>
                <h2 className={s.title}>Comments approval list</h2>
                {comments.map(({ _id, sentBy, text }) => (
                    <React.Fragment key={_id}>
                        <CommentItem
                            sentBy={sentBy}
                            text={text}
                        />
                        <button onClick={() => patchCommentById(_id, { approved: true })
                            .then(setComments)}>Approve
                        </button>
                        <button onClick={() => deleteCommentById(_id).then(setComments)}>Delete</button>
                    </React.Fragment>
                ))}
            </div>
        </ul>
    );
}

export default CommentsApproval;
