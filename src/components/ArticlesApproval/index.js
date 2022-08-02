import React, { useEffect, useState } from 'react';

import { getArticles, patchArticleById, deleteArticleById } from '../../api/articles';
import Preview from '../Preview';

function ArticlesApproval() {
    const [articles, setArticles] = useState([]);
    const isApproved = false;

    useEffect(() => {
        getArticles(isApproved).then(setArticles);
    }, []);

return (
        <ul>
            <div>
                <h2>Articles approval list</h2>
                {articles.map(({ _id, title, category, content, image }) => (
                <React.Fragment key={_id}>
                    <Preview
                        title={title}
                        image={image}
                        category={category}
                        spoiler={content}
                        />
                    <button onClick={() => patchArticleById(_id, { approved: true })
                        .then(setArticles)}>Approve</button>
                    <button onClick={() => deleteArticleById(_id).then(setArticles)}>Delete</button>
                </React.Fragment>
                ))}
            </div>
        </ul>
    );
};

export default ArticlesApproval;
