---
title: 图片信息
order: 4
redirect_from:
  - /zh/docs/api
---

图片基本信息包括图片格式、图片大小、色彩模型。

## imageInfo

## 参数说明

| Item | Value | Description | Optional |
| :--- | :---- | :---------- | :------- |
| -    | -     | -           | -        |

## JSON 返回值说明

| name   | description                      |
| :----- | :------------------------------- |
| size   | 文件大小，单位：Bytes            |
| format | 图片类型，如 png、jpeg、bmp 等。 |
| width  | 图片宽度，单位：像素(px)。       |
| height | 图片高度，单位：像素(px)。       |

## 示例

POST /api/v1?imageInfo

| { <br>"format": "jpeg", <br>"height": 768, <br>"size": 135455, <br>"width": 1024 <br>} |
| :------------------------------------------------------------------------------------- |


6. 图片主色调

imageAve 接口用于计算一幅图片的平均色调，并以 0xRRGGBB 形式返回。

## imageAve

## 参数说明

| Item | Value | Description | Optional |
| :--- | :---- | :---------- | :------- |
| -    | -     | -           | -        |

## JSON 返回值说明

| name | description   |
| :--- | :------------ |
| RGB  | 16 进制颜色值 |

## 示例

POST /api/v1?imageAve

| { <br>"RGB": "0x767b7f" <br>} |
| :---------------------------- |

