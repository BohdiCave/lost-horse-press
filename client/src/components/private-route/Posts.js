import React, { Component } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { getPosts, deletePost } from "../../actions/postActions";

class Posts extends Component {

    componentDidMount() {
        this.props.getPosts()
    };

    delPost = (e, id) => {
        id = e.target.getAttribute("id");
        this.props.deletePost(id);
    };

    render() {
        return(
            <table>
                <tbody>
                {this.props.posts.map(post => {
                    return(
                    <tr className="post" id={post.id} key={post.id}>
                      <th>
                        {post.post_date.slice(0,10)} 
                        <br></br>
                        {post.post_date.slice(11,19)}
                      </th>
                      <td>
                        <strong>{post.post_title}</strong>
                        <br></br>
                        {post.post_excerpt}
                      </td>
                      <td>
                        <span id={post.id} onClick={this.delPost} role="img" aria-label="delete-button" tabIndex="0">
                        ❌
                        </span>
                      </td>
                    </tr>
                    );
                })}
                </tbody>
            </table>
        );
    };
    
}

Posts.propTypes = {
  getPosts: PropTypes.func.isRequired,
  posts: PropTypes.array.isRequired
}

const mapStateToProps = state => ({
    posts: state.posts.items,
    errors: state.errors
});

export default connect(mapStateToProps, { getPosts, deletePost })(Posts);