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

---
## 将数据保存到数据库的步骤

1.确保有数据，req.body.title

2.建立代码和数据库的连接。
  mongoose.connect('mongo:xxx');

3.创建Schema,在models/post.js

4.创建model module.exports = mongoose.model('Post', PostSchema);

5.导入 Post model

6.实例化 Post model 得到post这个对象

7.保存 post 到数据库

---

### strikingly.com
### wordpress
---
重定向，redirect

## 前后台分离

. 后台只负责json数据，不负责html/css,前后台沟通的数据格式是json,前台请求数据的方式:发ajax

第一步：搭建React-webpack环境

### 违背了同源策略
. 客户端和服务器端域名相同，端口号也要相同

. HTTP 报头（header)
. Access-Control-Allow-Origin
访问权限允许源头
. Access-Control-Allow-Origin :*
报头设置为开源

. curl -i https://api.github.com/qianting/orgs
查看头部及内容
 -I只查看头部
