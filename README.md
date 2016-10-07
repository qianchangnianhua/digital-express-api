#  mongobdb

基本命令行操作 mongo shell

-  启动

### 1.创建文件夹
```
mkdir -p data/db

```
（在创建的文件夹下同时创建子文件夹-p）

### 2.启动 mongod --dbpath=./data/db

- 启动操作界面
- 方式：
```
 - 1.用户图形接口 GUI
 - 2.命令行接口 CLI
 - 对于mongodb我们使用 mongo shell
 - 启动Mongo Shell的形式是 $ mongo
```

### 3.创建一个数据库
```
 $ use digital-express-api

```

 数据库是mongodb 中的顶级储存单位，之下一级是××集合××

### 4.创建一个集合
```
 $ db.createCollection('posts')

```

### 5.插入数据记录

 一个集合 （例如，posts），里面可以插入多个数据记录

```
  $db.posts.insert({})

```

### 6.查看集合中的所有记录

```
  $ db.posts.find()

```

### 7.修改一条记录（了解内容）

```
db.posts.update({_id: ObjectId('xxx')}, {$set: {title: 'mongodb'}})

```

### 8.删除一条记录

```
db.posts.remove({_id: ObjectId('xxx')})
```

### 9.删除 posts 集合中的所有记录

```
db.posts.remove({})

```

### 10.删除数据库

假设我们的数据库叫做 digicity-express-api
```
use digicity-express-api
db.dropDatabase()
```

#  为什么要记录电子版的笔记

1. 第一个原因：使用 markdown 格式美观

  Beauty is your ablity to tame complexity
2. 第二个原因：便于更新

```
atom查找用ctrl+shift+f 英文格式查找

```

 3.第三个原因，有 git/github 控制，永远不会丢失


 4.第四个原因，便于搜索。

 # 用JS代码操作mongodb

 我们主要基于一个 JS 库的帮助，Mongoose ，它可以 作为一个 npm 的包來安装。

解释一下，一个 JS 库 就是一组 ××JS 接口 ××的集合。库，英文对 library 。

![](https://raw.githubusercontent.com/happypeter/digicity-express-api/master/doc/img/002-mongoose.png)
```
Mongodb 数据库操作

开启 Mongo Shell

$ mongo
创建一个数据库

$ use digicity-express-api
数据库是 mongodb 中的顶级存储单位，之下一级就是 集合 。

创建一个集合

$ db.createCollection(‘posts’)
插入数据记录

一个集合（例如，posts ），里面可以插入多个数据记录。

$ db.posts.insert({title: 'myTitle', content: 'myContent'})
查看集合中的所有记录

$ db.posts.find()
```

### 下面我们来动手做一个 express+mongoose 的小 demo 。

## 先写一个最简单的 express 程序

- index.js 如下：

```
var express = require('express');
var app = express();

app.post('/posts', function(req, res){
  console.log('hello');
});

app.listen(3000, function(){
  console.log('running on port 3000.....');
});
```
- 相应的 curl 测试命令是

```
curl --request POST localhost:3000/posts

```
如果可以在运行 node index.js 的位置看到 hello 表示我们这一步胜利完成。



















hello Ada Lovelace 世界上第一位程序员

![](https://github.com/happypeter/digicity-express-api/blob/master/doc/img/001-ada.png?raw=true)

护眼图片

![](https://timgsa.baidu.com/timg?image&quality=80&size=b10000_10000&sec=1475819981432&di=84193e75e903c01633b6aa2a395bdcfa&imgtype=jpg&src=http%3A%2F%2Fp15.qhimg.com%2Fbdm%2F1366_768_85%2Fd%2F_open360%2Ffresh1228%2F18.jpg)
