import React from 'react';
import Photo from './Photo';
import Comments from './Comments';

const Single = (props) => {
    const {postId} = props.params;

    const index = props.posts.findIndex((post) => {
      return post.code === postId;
    });

    const post = props.posts[index];
    const postComments = props.comments[postId] || [];

    return (
      <div className="single-photo">
        <Photo index={index} post={post} {...props}></Photo>
        <Comments postComments={postComments} {...props} />
      </div>
    );
}


export default Single;
