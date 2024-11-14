import React, { useState } from 'react';
import Card from "../../components/Card/Card";
import Skeleton from 'react-loading-skeleton';
import {
    TiArrowUpOutline,
    TiArrowUpThick,
    TiArrowDownOutline,
    TiArrowDownThick,
    TiMessage,
  } from 'react-icons/ti';

const Post = (props) => {
    const [voteValue, setVoteValue] = useState(0);
    const {post, onToggleComments} = props;
    

    const renderUpVote = () => {
        if (voteValue === 1) {
          return <TiArrowUpThick className="icon-action" />;
        }
        return <TiArrowUpOutline className="icon-action" />;
      };
    
      if (post.loadingComments) {
        return (
          <div>
            <Skeleton />
            <Skeleton />
            <Skeleton />
            <Skeleton />
          </div>
        );
      }
  

    return(
        <article key={post.id}>
            <Card>
                <div className="post-wrapper">
                    <div className="post-votes-container">
                        <button type="button" className={`icon-action-button up-vote ${
                voteValue === 1 && 'active'}`}>
                            {renderUpVote()}
                        </button>
                    </div>
                </div>
            </Card>
        </article>
    )
}

export default Post;