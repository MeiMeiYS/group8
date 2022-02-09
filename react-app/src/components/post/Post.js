import React from "react";
import { useState } from "react";
import MenuItem from "@material-ui/core/MenuItem";
import Button from "@material-ui/core/Button";
import Menu from "@material-ui/core/Menu";
import { useDispatch, useSelector } from "react-redux";
import { deletePostById, likePostById } from "../../store/posts";
import CreateComment from "./comments/CreateComment";
import Comment from "./comments/Comment";
import { useEffect } from "react";
import { Avatar } from "@material-ui/core";

export default function Post({ post }) {
  const posts = useSelector((state) => state.posts.posts);
  const [anchorEl, setAnchorEl] = useState(false);
  const [displayedPost, updateDisplayedPost] = useState(post);
  const dispatch = useDispatch();

  const timestamp = new Date(displayedPost?.updated_at);
  const handleClose = () => {
    setAnchorEl(false);
  };

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleEdit = (event) => {
    handleClose();
  };
  const handleDelete = (event) => {
    dispatch(deletePostById(post.id));
    handleClose();
  };
  const handleLike = (e) => {
    dispatch(likePostById(post.id));
  };
  useEffect(() => {
    const updatedPost = posts[post.id];
    if (updatedPost != post) {
      updateDisplayedPost(updatedPost);
    }
  }, [posts]);
  if (!displayedPost) return <></>;
  else
    return (
      <div className="post-container">
        <div className="post-topbar">
          <div className="post-user">
            <Avatar src={displayedPost.user.avatar_url} />
            <span className="post-username">{displayedPost.user.username}</span>
          </div>
          {/* <div>Post id: {displayedPost.id}</div> */}
          <Button
            aria-controls="simple-menu"
            aria-haspopup="true"
            onClick={handleClick}
          >
            ...
          </Button>
          <Menu
            // keepMounted
            anchorEl={anchorEl}
            onClose={handleClose}
            open={Boolean(anchorEl)}
          >
            <MenuItem onClick={handleEdit}>Edit</MenuItem>
            <MenuItem onClick={handleDelete}>Delete</MenuItem>
          </Menu>
        </div>
        <img className="post-img" src={displayedPost.image_url} />

        <div className="post-bottom">
          <div className="like-div">
            <button className="btn-text" onClick={handleLike}>
              <svg
                aria-label="Activity Feed"
                color="none"
                fill="#262626"
                height="24"
                role="img"
                viewBox="0 0 24 24"
                width="24"
              >
                <path d="M16.792 3.904A4.989 4.989 0 0121.5 9.122c0 3.072-2.652 4.959-5.197 7.222-2.512 2.243-3.865 3.469-4.303 3.752-.477-.309-2.143-1.823-4.303-3.752C5.141 14.072 2.5 12.167 2.5 9.122a4.989 4.989 0 014.708-5.218 4.21 4.21 0 013.675 1.941c.84 1.175.98 1.763 1.12 1.763s.278-.588 1.11-1.766a4.17 4.17 0 013.679-1.938m0-2a6.04 6.04 0 00-4.797 2.127 6.052 6.052 0 00-4.787-2.127A6.985 6.985 0 00.5 9.122c0 3.61 2.55 5.827 5.015 7.97.283.246.569.494.853.747l1.027.918a44.998 44.998 0 003.518 3.018 2 2 0 002.174 0 45.263 45.263 0 003.626-3.115l.922-.824c.293-.26.59-.519.885-.774 2.334-2.025 4.98-4.32 4.98-7.94a6.985 6.985 0 00-6.708-7.218z"></path>
              </svg>
            </button>
            <span>{displayedPost.likes}</span>
          </div>
          <div className="desc">
            <span className="comment-name">{displayedPost.user.username} </span>
            {displayedPost.description}
          </div>
          <div>
            <div className="post-comments">
              {displayedPost.comments.map((c) => {
                return <Comment key={c.id} comment={c} />;
              })}
            </div>
            <div className="date-txt">{timestamp.toDateString()}</div>
          </div>
        </div>
        <CreateComment postid={displayedPost.id} />
      </div>
    );
}
