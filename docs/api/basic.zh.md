---
title: 图片基本处理
order: 1
redirect_from:
  - /zh/docs/api
---

imageView2 是图片基本处理的接口，简单，功能强大的图像处理接口，包括裁剪、压缩、格式转换等。

## imageView2

> 注意：  请忽略以下内容中的空格与换行符。

imageView2/<mode>/w/<LongEdge>

/h/<ShortEdge>

/format/<Format>

/q/<Quality>

/fpga/<Fpga>

## 参数说明

| Item        | Value                                  | Description                                         | Optional |
| :---------- | :------------------------------------- | :-------------------------------------------------- | :------- |
| imageView2/ | 0, 1, 2, 3, 4, 5                       | 参考 mode 参数详细说明， 包括一下 w 和 h 参数说明。 | M        |
| /format/    | jpg，png，webp 等， 默认为原图输出格式 | 新图的输出格式                                      | O        |
| /q/         | 取值范围 1-100， 默认值 75             | 新图的输出质量                                      | O        |
| /fpga/      | 是否使用 cip 加速， 默认为 true        | 使用 fpga 加速卡                                    | O        |

关于 mode 说明：

| mode                          | description                                                                                                                                                                                                                                                                                           |
| :---------------------------- | :---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| /0/w/<LongEdge>/h/<ShortEdge> | 限定缩略图的长边最多为<LongEdge>，短边最多为<ShortEdge>，进行等比缩放，不裁剪。如果只指定  w  参数则表示限定长边（短边自适应），只指定  h 参数则表示限定短边（长边自适应）。                                                                                                                          |
| /1/w/<Width>/h/<Height>       | 限定缩略图的宽最少为<Width>，高最少为<Height>，进行等比缩放，居中裁剪。转后的缩略图通常恰好是  <Width>x<Height>  的大小（有一个边缩放的时候会因为超出矩形框而被裁剪掉多余部分）。如果只指定  w  参数或只指定  h 参数，代表限定为长宽相等的正方图。                                                    |
| /2/w/<Width>/h/<Height>       | 限定缩略图的宽最多为<Width>，高最多为<Height>，进行等比缩放，不裁剪。如果只指定  w  参数则表示限定宽（长自适应），只指定  h  参数则表示限定长（宽自适应）。它和模式 0 类似，区别只是限定宽和高，不是限定长边和短边。从应用场景来说，模式 0 适合移动设备上做缩略图，模式 2 适合 PC 上做缩略图。        |
| /3/w/<Width>/h/<Height>       | 限定缩略图的宽最少为<Width>，高最少为<Height>，进行等比缩放，不裁剪。如果只指定  w  参数或只指定  h 参数，代表长宽限定为同样的值。你可以理解为模式 1 是模式 3 的结果再做居中裁剪得到的。                                                                                                              |
| /4/w/<LongEdge>/h/<ShortEdge> | 限定缩略图的长边最少为<LongEdge>，短边最少为<ShortEdge>，进行等比缩放，不裁剪。如果只指定  w  参数或只指定  h  参数，表示长边短边限定为同样的值。这个模式很适合在手持设备做图片的全屏查看（把这里的长边短边分别设为手机屏幕的分辨率即可），生成的图片尺寸刚好充满整个屏幕（某一个边可能会超出屏幕）。 |
| /5/w/<LongEdge>/h/<ShortEdge> | 限定缩略图的长边最少为<LongEdge>，短边最少为<ShortEdge>，进行等比缩放，居中裁剪。如果只指定  w  参数或只指定  h  参数，表示长边短边限定为同样的值。同上模式 4，但超出限定的矩形部分会被裁剪。                                                                                                         |

## 示例

### mode=0, w/400/h400 变换成 400x300

POST /api/v1?imageView2/0/w/400/h/400

![图片](https://uploader.shimo.im/f/pYvEkIvRy2sgOZOm.png)

### mode=1, w/400/h/400 变换成 400x400

POST /api/v1?imageView2/1/w/400/h/400

![图片](https://uploader.shimo.im/f/r5XxIU3vp6UV0B3g.png)

### mode=2, w/400/h/400 变换成 400x300

POST /api/v1?imageView2/2/w/400/h/400

![图片](https://uploader.shimo.im/f/oUxbUZxIOF80fhsb.png)

### mode=3, w/400/h/400 变换成 533x400

POST /api/v1?imageView2/3/w/400/h/400

![图片](https://uploader.shimo.im/f/laVkEK89L6ERENK5.png)

### mode=4, w/400/h/400 变换成 533x400

POST /api/v1?imageView2/4/w/400/h/400

![图片](https://uploader.shimo.im/f/AiEmJhtppioRqJLc.png)

### mode=5, w/400/h/400 变换成 400x400

POST /api/v1?imageView2/5/w/400/h/400

![图片](https://uploader.shimo.im/f/T6ZhvfhYFrgHhuXu.png)

### mode=0, w/400, 表示限定长边为 400， 短边自适应。变换成 400x300 的图。

POST /api/v1?imageView2/0/w/400

![图片](https://uploader.shimo.im/f/vW5KA7DtEkslARIy.png)

### mode=1, w/400，只指定 w 或 h， 按比例缩放， 然后按中心裁剪为长宽相等的正方图， 变换成 400x400 的图。

POST /api/v1?imageView2/1/w/400

![图片](https://uploader.shimo.im/f/vnnJAGbj9tcUNjla.png)

### mode=2, w/400， 宽最多为 400， 高度自适应， 变换成 400x300 的图。

POST /api/v1?imageView2/2/w/400

![图片](https://uploader.shimo.im/f/wqaocTsCas0u4bYz.png)

### mode=3, w/400， 宽至少为 400， 高也至少为 400， 变换成 533x400 的图。

POST /api/v1?imageView2/3/w/400

![图片](https://uploader.shimo.im/f/BjoGpYKDbBAhQqRv.png)

### mode=4, w/400， 长边至少为 400， 短边至少为 400， 进行等比缩放。变换成 533x400 的图。

POST /api/v1?imageView2/4/w/400

![图片](https://uploader.shimo.im/f/mGpvKJK3qdI0Yff7.png)

### mode=5, w/400， 长边至少为 400， 短边至少为 400， 进行等比缩放。居中裁剪为 400x400 的图。

POST /api/v1?imageView2/5/w/400

![图片](https://uploader.shimo.im/f/7dhSbrDijY42AB8R.png)

### mode=1, w/400/h/400/format/png/q/70/fpga/false, 居中裁剪为 400x400 的图。输出格式为 png。

POST /api/v1?imageView2/1/w/400/h/400/format/png/q/70/fpga/false

![图片](https://uploader.shimo.im/f/k3kl14xLDHgN5BwL.png)
