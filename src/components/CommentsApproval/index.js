import React, { useState, useEffect } from 'react';

import Container from '../Container';
import CommentItem from '../CommentItem';
import {
    deleteCommentById,
    getComments,
    patchCommentById
} from '../../api/comments';


import {
    CommentsApprovalStyled,
    CommentsApprovalTitle,
    CommentsApprovalBtn,
    BtnWrapper
} from './index.style';

function CommentsApproval() {
    const [comments, setComments] = useState([]);

    useEffect(() => {
        getComments().then(setComments);
    }, []);

    return (
    <Container>
        <CommentsApprovalStyled>
            <CommentsApprovalTitle>Comments approval list
            </CommentsApprovalTitle>
                {comments.map(({ _id, sentBy, text }) => (
                    <React.Fragment key={_id}>
                        <CommentItem
                            sentBy={sentBy}
                            text={text}
                        />
                        <BtnWrapper>
                        <CommentsApprovalBtn onClick={() => patchCommentById(_id, { approved: true })
                            .then(setComments)} text='Approve' />
                        <CommentsApprovalBtn onClick={() => deleteCommentById(_id)
                                .then(setComments)} text='Delete' />
                        </BtnWrapper>
                    </React.Fragment>
                ))}
            </CommentsApprovalStyled>
            </Container>
    );
}

export default CommentsApproval;
