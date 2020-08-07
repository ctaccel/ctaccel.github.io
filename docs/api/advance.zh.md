---
title: 图片高级处理
order: 2
redirect_from:
  - /zh/docs/api
---

## imageMogr2

> 注意：  请忽略以下内容中的空格与换行符。

imageMogr2/auto-orient

/thumbnail/<imageSizeGeometry>

/gravity/<gravityType>

/crop/<imageSizeAndOffsetGeometry>

/rotate/<rotateDegree>

/format/<destinationImageFormat>

/blur/<radius>x<sigma>

/background/<ecodedBackgroundColor>

/quality/<quality>

/sharpen/<sharpen>

/roundpic/<radiusX>x<radiusY>

/iradius/<iradius>

## 参数说明

| Item         | Value                                                                                                                                                                              | Description                                                                                                | Optional |
| :----------- | :--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | :--------------------------------------------------------------------------------------------------------- | :------- |
| /auto-orient | 无                                                                                                                                                                                 | 建议放在首位，根据原图 EXIF 信息自动旋正，便于后续处理。                                                   | O        |
| /thumbnail/  | -                                                                                                                                                                                  | 参考 [thumbnail 说明](https://github.com/ctaccel/cip-docs/blob/master/image_advanced_process.md#Thumbnail) | O        |
| /gravity/    | -                                                                                                                                                                                  | 参考 [gravity 说明](https://github.com/ctaccel/cip-docs/blob/master/image_advanced_process.md#Gravity)     | O        |
| /crop/       | -                                                                                                                                                                                  | 参考 [crop 说明](https://github.com/ctaccel/cip-docs/blob/master/image_advanced_process.md#Crop)           | O        |
| /rotate/     | 取值范围为 1-360，默认为不旋转                                                                                                                                                     | 图片旋转角度                                                                                               | O        |
| /format/     | 支持 jpg、gif、png、webp 等，默认为原图格式                                                                                                                                        | 新图的输出格式                                                                                             | O        |
| /blur/x      | radius 是模糊半径，取值范围为 1-50。sigma 是正态分布的标准差，必须大于 0。                                                                                                         | 高斯模糊参数                                                                                               | O        |
| /background/ | -                                                                                                                                                                                  | 背景填充颜色,参考 color 说明                                                                               | O        |
| /quality/    | 取值范围 1-100， 默认值 75                                                                                                                                                         | 新图的输出质量                                                                                             | O        |
| /sharpen/    | 锐化参数值，取值范围为 10-300 间的整数。参数值越大，锐化效果越明显。                                                                                                               | 图片是否锐化                                                                                               | O        |
| /roundpic/x  | 水平和垂直的值相同， 则可以写成类似/roundpic/200 这样， 否则/roundpic/200x300。 支持/roundpic/!50p 和/roundpic/50p 这种形式， 意思是原图的宽和高的 50%作为 radiusX 和 radiusY 值。 | 圆角大小的参数                                                                                             | O        |
| /iradius/    | radius 是内切圆的半径，取值范围为大于 0、小于原图最小边一半的整数。内切圆的圆心为图片的中心。图片格式为 gif 时，不支持该参数。                                                     | 内切圆裁剪功能                                                                                             | O        |

**thumbnail 说明**

| Item                          | Description                                                                                   |
| :---------------------------- | :-------------------------------------------------------------------------------------------- |
| /thumbnail/!<Scale>p          | 指定图片的宽高为原图的 Scale%。                                                               |
| /thumbnail/!<Scale>px         | 指定图片的宽为原图的 Scale% ，高度不变。                                                      |
| /thumbnail/!x<Scale>p         | 指定图片的高为原图的 Scale% ，宽度不变。                                                      |
| /thumbnail/<Width>x           | 指定目标图片宽度为 Width ，高度等比压缩。                                                     |
| /thumbnail/x<Height>          | 指定目标图片高度为 Height ，宽度等比压缩。                                                    |
| /thumbnail/<Width>x<Height>   | 限定缩略图的宽度和高度的最大值分别为 Width 和 Height，进行等比缩放。                          |
| /thumbnail/!<Width>x<Height>r | 限定缩略图的宽度和高度的最小值分别为 Width 和 Height，进行等比缩放 。                         |
| /thumbnail/<Width>x<Height>!  | 忽略原图宽高比例，指定图片宽度为 Width ，高度为 Height ，强行缩放图片，可能导致目标图片变形。 |
| /thumbnail/<Area>@            | 等比缩放图片，缩放后的图像，总像素数量不超过 Area。                                           |

**gravity 说明**

图片处理重心参数表 在图片高级处理现有的功能中只影响其后的裁剪操作参数表，即裁剪操作以 gravity 为原点开始偏移后，进行裁剪操作。

![图片](https://uploader.shimo.im/f/4Dc9J4fdCKM2yJbM.png)**crop 说明**

裁剪操作参数表 (cropsize)

| 参数名称               | 必填 | 说明                                             |
| :--------------------- | :--- | :----------------------------------------------- |
| /crop/<Width>x         |      | 指定目标图片宽度，高度不变。取值范围为 0-10000。 |
| /crop/x<Height>        |      | 指定目标图片高度，宽度不变。取值范围为 0-10000。 |
| /crop/<Width>x<Height> |      | 同时指定目标图片宽高。取值范围为 0-10000。       |

裁剪偏移参数表 (cropoffset)

| 参数名称                    | 必填 | 说明                                                                                                         |
| :-------------------------- | :--- | :----------------------------------------------------------------------------------------------------------- |
| /crop/!{cropsize}a<dx>a<dy> |      | 相对于偏移锚点，向右偏移 dx 个像素，同时向下偏移 dy 个像素。取值范围不限，小于原图宽高即可。                 |
| /crop/!{cropsize}-<dx>a<dy> |      | 相对于偏移锚点，从指定宽度中减去 dx 个像素，同时向下偏移 dy 个像素。取值范围不限，小于原图宽高即可。         |
| /crop/!{cropsize}a<dx>-<dy> |      | 相对于偏移锚点，向右偏移 dx 个像素，同时从指定高度中减去 dy 个像素。取值范围不限，小于原图宽高即可。         |
| /crop/!{cropsize}-<dx>-<dy> |      | 相对于偏移锚点，从指定宽度中减去 dx 个像素，同时从指定高度中减去 dy 个像素。取值范围不限，小于原图宽高即可。 |

**color 说明**

可以是颜色名称（比如 red）或十六进制颜色（比如#FF0000）的 URL 安全的 Base64 编码。我们支持的颜色名称有 transparent（#00000000）、none（#00000000）、white（#FFFFFF）、black（#000000）、red（#FF0000）、orange（#FFA500）、yellow（#FFFF00）、green（#008000）、blue（#0000FF）、purple（#800080）、gray（#7E7E7E）、pink（#FFC0CB），其中 none 与 transparent 均为透明背景色，另外十六进制颜色不区分大小写，具体颜色请参考颜色编码表。缺省背景色为 white（#FFFFFF）。

###

## 示例

### 缩略图

- 等比缩小 75%

POST /api/v1?imageMogr2/thumbnail/!75p

![图片](https://uploader.shimo.im/f/4UYOOns6BDwAoIp1.png)

- 按原宽度 75%等比缩小， 高度不变。

POST /api/v1?imageMogr2/thumbnail/!75px

- 按原高度 75%等比缩小， 宽度不变。

POST /api/v1?imageMogr2/thumbnail/!x75p

- 指定新宽度 1536px， 等比缩放。

POST /api/v1?imageMogr2/thumbnail/1536x

![图片](https://uploader.shimo.im/f/EHlCvgRyw5UyqQnb.png)

- 指定新高度 1152px， 等比缩放。

POST /api/v1?imageMogr2/thumbnail/x1152

![图片](https://uploader.shimo.im/f/RO7L3FzpPMoqhc2S.png)

- 限定长边， 生成不超过 400x400 的缩略图

POST /api/v1?imageMogr2/thumbnail/400x400

![图片](https://uploader.shimo.im/f/5OHnA8ySQgwPLEH6.png)

- 限定短边， 生成不小于 400x400 的缩略图

POST /api/v1?imageMogr2/thumbnail/!400x400r

![图片](https://uploader.shimo.im/f/eW112Zg4NUogaw5e.png)

- 强制生成 400x600 的图

POST /api/v1?imageMogr2/thumbnail/400x600 !

![图片](https://uploader.shimo.im/f/Qz0KHPezIdE0Jv6L.png)

- 原图大于指定长宽矩形， 按宽缩放比和高缩放比的较大值进行缩放成 400x300。

POST /api/v1?imageMogr2/thumbnail/400x600>

![图片](https://uploader.shimo.im/f/RqzUddVtiRUjgXkn.png)

- 原图小于指定长宽矩形， 按宽缩放比和高缩放比的较小值缩放成 1467x1100。

POST /api/v1?imageMogr2/thumbnail/1500x1100<

![图片](https://uploader.shimo.im/f/7PFtbgMQo9QvWnKT.png)

- 按原图高宽比例等比缩放， 缩放后的像素数量不超过 900000。

POST /api/v1?imageMogr2/thumbnail/900000@

![图片](https://uploader.shimo.im/f/PLzHKtFDoVg7iRJg.png)

### 裁剪

- 生成 400x768 裁剪图

POST /api/v1?imageMogr2/crop/400x

![图片](https://uploader.shimo.im/f/mEQzdHyJkqU35x2u.png)

- 生成 1024x400 的裁剪图

POST /api/v1?imageMogr2/crop/x400

![图片](https://uploader.shimo.im/f/FO1LzLxkQekjWA07.png)

- 生成 400x400 的裁剪图

POST /api/v1?imageMogr2/crop/400x400

![图片](https://uploader.shimo.im/f/r4JmYWTFgqs7M2Ry.png)

- 生成 300x300 裁剪图， 偏移距离 30x100

POST /api/v1?imageMogr2/crop/!400x400a30a100

![图片](https://uploader.shimo.im/f/vhHEYTq0XiE7DWla.png)

- 生成 400x300 裁剪图， 偏移距离 30x0

POST /api/v1?imageMogr2/crop/!400x400a30-100

![图片](https://uploader.shimo.im/f/Es36Hw9X328kcMSJ.png)

- 生成 370\*400 裁剪图，偏移距离 0x100

POST /api/v1?imageMogr2/crop/!400x400-30a100

![图片](https://uploader.shimo.im/f/uLuWoJ8ERmI6R1Ha.png)

- 生成 370x300 裁剪图， 偏移距离 0x0

POST /api/v1?imageMogr2/crop/!400x400-30-100

![图片](https://uploader.shimo.im/f/yKFMTpeDwY83OgBc.png)

- 锚点在左上角（northwest）， 生成 300x300 裁剪图

POST /api/v1?imageMogr2/gravity/northwest/crop/400x400

![图片](https://uploader.shimo.im/f/SfLeMdITx4YdrzVv.png)

- 锚点在正上方（north）， 生成 400x400 裁剪图

POST /api/v1?imageMogr2/gravity/north/crop/400x400

![图片](https://uploader.shimo.im/f/MkmMxNqasJwtNPsd.png)

- 锚点在右上方（northeast）， 生成 400x400 裁剪图

POST /api/v1?imageMogr2/gravity/northeast/crop/400x400

![图片](https://uploader.shimo.im/f/qUedWlN6YZsPRmYc.png)

- 锚点在正左方（west），　生成 400x400 裁剪图

POST /api/v1?imageMogr2/gravity/west/crop/400x400

![图片](https://uploader.shimo.im/f/czJldRvn9dk6htc1.png)

- 锚点在正中（center），　生成 400x400 裁剪图

POST /api/v1?imageMogr2/gravity/center/crop/400x400

![图片](https://uploader.shimo.im/f/SbX70My0h5Mx1fgW.png)

- 锚点在正右方 （east）， 生成 400x400 裁剪图

POST /api/v1?imageMogr2/gravity/east/crop/400x400

![图片](https://uploader.shimo.im/f/GgjWH29V1gEKzNdT.png)

- 锚点在左下方 （southwest）， 生成 400x400 裁剪图

POST /api/v1?imageMogr2/gravity/southwest/crop/400x400

![图片](https://uploader.shimo.im/f/iMoEw6UzF0sQdqgE.png)

- 锚点在正下方 （south）， 生成 400x400 裁剪图

POST /api/v1?imageMogr2/gravity/south/crop/400x400

![图片](https://uploader.shimo.im/f/lCq2q6vcQT0ql9ZY.png)

- 锚点在右下方 （southeast）， 生成 400x400 裁剪图

POST /api/v1?imageMogr2/gravity/southeast/crop/400x400

![图片](https://uploader.shimo.im/f/LSXgrDlDsyw4AafQ.png)

### 旋转

- 顺时针旋转 45 度

POST /api/v1?imageMogr2/rotate/45

![图片](https://uploader.shimo.im/f/XIZiBesUipgSTmte.png)

- 旋转并添加背景色，裁剪以及高斯模糊，输出质量为 80%

POST /api/v1?imageMogr2/auto-orient/thumbnail/!256x256r/background/b3Jhbmdl/gravity/center/crop/256x256/blur/3x9/quality/80/rotate/45

![图片](https://uploader.shimo.im/f/hFJCEcuBQZU8ltfx.png)

### 高斯模糊

- 半径为 5， sigma 值为 9。

POST /api/v1?imageMogr2/blur/5x9

![图片](https://uploader.shimo.im/f/jZ7Q7nYQNysDJyaN.png)

### 椭圆圆角

- 水平方向和垂直方向都为 300 像素

POST /api/v1?imageMogr2/roundpic/300

![图片](https://uploader.shimo.im/f/oDpsmagiTDAxrrZL.png)

- 水平方向为 300px，　垂直方向为 400px

POST /api/v1?imageMogr2/roundpic/300x400

![图片](https://uploader.shimo.im/f/aN9LJ6AZ4VYhG91n.png)

- 水平方向和垂直方向都为原图片的 30%大小

POST /api/v1?imageMogr2/roundpic/!30p

![图片](https://uploader.shimo.im/f/lZnbt74Bb9IdAbE1.png)

### 中心原图

- 中心原图半径为 300px

POST /api/v1?imageMogr2/iradius/300

![图片](https://uploader.shimo.im/f/M3p8frOG9SIL5zvR.png)

- 中心原图直径为原宽高最小值的 60%

POST /api/v1?imageMogr2/iradius/!60p

![图片](https://uploader.shimo.im/f/NPqYfmB8sN8jhOoq.png)
