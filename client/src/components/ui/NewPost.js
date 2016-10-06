import React, { Component } from 'react';
import Form from './Form';
import axios from 'axios';

class NewPost extends Component {
  getStyles() {
    return {
      content: {
        width: '100%',
        maxWidth: '600px',
        margin: '30px auto',
        backgroundColor: '#fff',
        borderRadius: '10px',
        boxShadow: 'rgba(0, 0, 0, 0.12) 0px 1px 6px, rgba(0, 0, 0, 0.12) 0px 1px 4px'
      },
      title: {
        fontSize: '1.2em',
        textAlign: 'center',
        paddingTop: '20px'
      }
    };
  }
  newPost(data){
    axios.post('http://localhost:3000/posts', data)
    //POST /posts according to REST api structrue
    //例如一篇博客当做 resource，资源
    //GET /posts 列出所有博客
    //GET /posts/:post_id 打开一篇博客
    //POST /posts/:post_id
    //PUT /posts/:post_id 更新一篇博客
    //DELETE /posts/:post_id 删除一篇博客
    .then( res => {
      console.log(res.data.message);
      this.context.router.push('/');
    })
  }
  render() {
    const styles = this.getStyles();
    return (
      <div style={styles.content}>
        <div style={styles.title}>写文章</div>
        <Form newPost={this.newPost.bind(this)} />
      </div>
    );
  }
}
NewPost.contextTypes = {
  router: React.PropTypes.object
};
export default NewPost;
