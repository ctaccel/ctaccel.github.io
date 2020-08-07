---
title: 图片水印
order: 3
redirect_from:
  - /zh/docs/api
---

image watermark 是将 logo 图片或者文字叠加到源图片上的功能。提供四种水印接口：图片水印、文字水印，文字平铺水印、混合水印。

## 图片水印

> 注意：  请忽略以下内容中的空格与换行符。

watermark/1

/image/<encodedImageURL>

/dissolve/<dissolve>

/gravity/<gravity>

/dx/<distanceX>

/dy/<distanceY>

/ws/<watermarkScale>

/wst/<watermarkScaleType>

### 参数说明

| 参数名称                  | 说明                                                                                                      |
| :------------------------ | :-------------------------------------------------------------------------------------------------------- |
| /image/<encodedImageURL>  | 水印源图片网址（经过 URL 安全的 Base64 编码），必须有效且返回一张图片。                                   |
| /dissolve/<dissolve>      | 透明度，取值范围 1-100，默认值为 100（完全不透明）。                                                      |
| /gravity/<gravity>        | 水印位置，默认值为 SouthEast（右下角）。                                                                  |
| /dx/<distanceX>           | 横轴边距，单位:像素(px)，默认值为 10。                                                                    |
| /dy/<distanceY>           | 纵轴边距，单位:像素(px)，默认值为 10。                                                                    |
| /ws/<watermarkScale>      | 水印图片自适应原图的短边比例，ws 的取值范围为 0-1。具体是指水印图片保持原比例，并短边缩放到原图短边＊ws。 |
| /wst/<watermarkScaleType> | 水印图片自适应原图的类型，取值 0、1、2、3 分别表示为自适应原图的短边、长边、宽、高，默认值为 0            |

例如：原图大小为 250x250，水印图片大小为 91x61，如果 ws=1，那么最终水印图片的大小为：372x250。

### 示例

POST /api/v1?watermark/1/image/aHR0cDovL3d3dy5wbmdhbGwuY29tL3dwLWNvbnRlbnQvdXBsb2Fkcy8yMDE2LzA1L1B5dGhvbi1Mb2dvLUZyZWUtRG93bmxvYWQtUE5HLnBuZw==/dissolve/80/gravity/center/dx/200/dy/100/ws/1/wst/0

![图片](https://github.com/ctaccel/ctaccel.github.io/raw/master/images/api/wm_001.png)

## 文字水印

> 注意：  请忽略以下内容中的空格与换行符。

watermark/2

/text/<encodedText>

/font/<encodedFontName>

/fontsize/<fontSize>

/fill/<encodedTextColor>

/dissolve/<dissolve>

/gravity/<gravity>

/dx/<distanceX>

/dy/<distanceY>

### 参数说明

| 参数名称   | 说明                                                                                                                    |
| :--------- | :---------------------------------------------------------------------------------------------------------------------- |
| /text/     | 水印文字内容（经过[URL 安全的 Base64 编码）                                                                             |
| /font/     | 水印文字字体（经过 URL 安全的 Base64 编码），默认为黑体                                                                 |
| /fontsize/ | 水印文字大小，单位: 缇 ，等于 1/20 磅，默认值是 240 缇，参考 DPI 为 72。                                                |
| /fill/     | 水印文字颜色，RGB 格式，可以是颜色名称（例如 red）或十六进制（例如 #FF0000）。默认为黑色。经过 URL 安全的 Base64 编码。 |
| /dissolve/ | 透明度，取值范围 1-100，默认值为 100（完全不透明）。                                                                    |
| /gravity/  | 水印位置，默认值为 SouthEast（右下角）。                                                                                |
| /dx/       | 横轴边距，单位:像素(px)，默认值为 10。                                                                                  |
| /dy/       | 纵轴边距，单位:像素(px)，默认值为 10。                                                                                  |

### 示例

POST /api/v1?watermark/2/text/5rWLQ1RBYWFhVHh0/dy/50/dx/50/fill/UmVk/dissolve/50/fontsize/900/gravity/center

![图片](https://github.com/ctaccel/ctaccel.github.io/raw/master/images/api/wm_002.jpeg)

## 文字平铺水印

> 注意：  请忽略以下内容中的空格与换行符。

watermark/4

/text/<encodedText>

/font/<encodedFontName>

/fontsize/<fontSize>

/fill/<encodedTextColor>

/dissolve/<dissolve>

/rotate/<rotate>

/uw/<unitW>

/uh/<unitH>

/resize/<resize>

### 参数说明

| 参数名称   | 说明                                                                                                                    |
| :--------- | :---------------------------------------------------------------------------------------------------------------------- |
| /text/     | 水印文字内容（经过[URL 安全的 Base64 编码）                                                                             |
| /font/     | 水印文字字体（经过 URL 安全的 Base64 编码），默认为黑体                                                                 |
| /fontsize/ | 水印文字大小，单位: 缇 ，等于 1/20 磅，默认值是 240 缇，参考 DPI 为 72。                                                |
| /fill/     | 水印文字颜色，RGB 格式，可以是颜色名称（例如 red）或十六进制（例如 #FF0000）。默认为黑色。经过 URL 安全的 Base64 编码。 |
| /dissolve/ | 透明度，取值范围 1-100，默认值为 100（完全不透明）。                                                                    |
| /rotate/   | 水印文字旋转角度，[-180, 180]，默认为０。                                                                               |
| /uw/       | 水印文字填充单元宽度，默认值为 100。                                                                                    |
| /uh/       | 水印文字填充单元高度，默认值为 100。                                                                                    |
| /resize/   | 水印文字填充单元缩放比例，[0.1, 10]，　默认为１ （不缩放）。                                                            |

### 示例

POST /api/v1?watermark/4/text/5rWLQ1RBYWFhVHh0/uw/160/resize/1/uh/50/fill/UmVk/rotate/180/fontsize/500/font/5b6u6L2v6ZuF6buR/dissolve/100

![图片](https://github.com/ctaccel/ctaccel.github.io/raw/master/images/api/wm_003.jpeg)

## 混合水印

混合水印用于同时在一个原图上打多个不同类型的水印。

> 注意：  请忽略以下内容中的空格与换行符。

watermark/３

/text/<textWaterMarkParams1>

/image/<imageWaterMarkParams1>

/image/<imageWaterMarkParams2>

/text/<textWaterMarkParams2>

### 参数说明

| 参数名称                      | 说明             |
| :---------------------------- | :--------------- |
| /image/<imageWaterMarkParams> | 参考图片水印参数 |
| /text/<textWaterMarkParams>   | 参考文字水印参数 |

### 示例

POST /api/v1?imageMogr2/auto-orient/format/png|watermark/3/image/aHR0cDovLzd4bHY0Ny5jb20wLnowLmdsYi5jbG91ZGRuLmNvbS94aWFvamkucG5n/gravity/North/dy/-10/dx/0/text/5ZCD6L-H54yr5bGx546L77yM5YW25LuW5qa06I6y55qG6Lev5Lq6/gravity/SouthWest/dx/10/dy/180/fontsize/500/text/5LuF6ZmQN-WkqSAgMjAxOS4wNC4wMS0yMDE5LjA0LjA3/gravity/SouthWest/dx/30/dy/130/fontsize/300/image/aHR0cDovLzd4bHY0Ny5jb20wLnowLmdsYi5jbG91ZGRuLmNvbS9xdWFuLnBuZw==/gravity/SouthWest/dx/80/dy/30/image/aHR0cDovLzd4bHY0Ny5jb20wLnowLmdsYi5jbG91ZGRuLmNvbS_kuoznu7TnoIEucG5n/gravity/SouthEast/dx/10/dy/30/text/5omr56CB6aKG5Y-W5LyY5oOg5Yi4/gravity/SouthEast/dx/20/dy/10/fontsize/300/fill/UmVk

注意：　 image_url = http://7xlv47.com0.z0.glb.clouddn.com/baidi.png

![图片](https://github.com/ctaccel/ctaccel.github.io/raw/master/images/api/wm_004.png)
