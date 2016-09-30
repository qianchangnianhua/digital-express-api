# 通过不同的request来实现

## request

- verb

  - get
  - posts
  - put
  - delete

- path

 - /about
 - /posts


- GET/posts 读取所有文章

- POST/posts新建一篇文章

- PUT/posts/posts_id 更新特定一篇文章

- DELET/posts/posts_id 删除特定一篇文章

---

## express 路由
. 跑在服务器上，响应客户端发出的request,决定哪部分后台代码要被执行

---

####    curl -H "Content-Type: application/json" -X POST -d
'{"title":"myTitle","content":"myContent"}' http://localhost:3000/posts

#####  https://coding.net/u/happypeter/p/react-express-api-demo/git
