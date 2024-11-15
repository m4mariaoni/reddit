import React, { useState } from 'react';
import Card from "../../components/Card/Card";
import SquaredImage from "../../components/Image/SquaredImage";
import Skeleton from 'react-loading-skeleton';
import {
  TiArrowUpOutline,
  TiArrowUpThick,
  TiArrowDownOutline,
  TiArrowDownThick,
  TiMessage,
} from 'react-icons/ti';
import "./Post.css";

const Post = (props) => {
  const [voteValue, setVoteValue] = useState(0);
  const { post, onToggleComments } = props;

  console.log("post", post);


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


  return (
    <article key={post.id}>
      <Card>
        <div className="post-wrapper">
          <div className="post-votes-container">
            <p className="post-title">{post.title}</p>
            <div className="post-image-wrapper">
              <SquaredImage src={post.url} alt={post.title} />
            </div>
            <button type="button" className={`icon-action-button up-vote ${voteValue === 1 && 'active'}`}>
              {renderUpVote()}
            </button>
          </div>
        </div>
      </Card>
    </article>
  )
}

export default Post;