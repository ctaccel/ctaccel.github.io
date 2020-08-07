---
title: 使用说明
order: 0
redirect_from:
  - /zh/docs/api
---

对服务接口调用 HTTP API 接口，图片路径支持 HTTP POST 方法发送请求，其他处理请求参数需要包含在请求的 URL 中，某些请求工具不支持接口参数中的特殊字符，可以使用浏览器进行调用测试。根据请求的处理情况，系统响应数据格式统一为 JSON 数据格式或者图片数据。

**公用请求 Header 信息**

| 字段 | 值  | 说明                                                    |
| :--- | :-- | :------------------------------------------------------ |
|      |     | Content-Type application/x-www-form-urlencoded 内容类型 |

**POST 请求参数信息**

| 字段                                           |        | 类型 必选   | 说明                   |
| :--------------------------------------------- | :----- | :---------- | :--------------------- |
|                                                |        | dtype int Y |                        |
| 0:图片 url, 1:图片 base64 编码字符串 image_url | string | N           | 图片 url               |
| content                                        | string | N           | 图片 base64 编码字符串 |

测试原图如下，大小为 1024x768 的 JPEG 文件：

![图片](https://github.com/ctaccel/ctaccel.github.io/raw/master/images/api/image.png)
