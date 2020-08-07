import React from 'react';

export const wrapPageElement = ({
    element,
    props
}) => {
    return React.cloneElement(element, {
        ...props,
        ...element.props,
        // https://github.com/react-component/footer#api
        footerProps: {
            columns: [{
                    title: '产品列表',
                    items: [{
                            title: '图像处理',
                            url: '',
                        },
                        {
                            title: '视频转码',
                            url: '',
                        },
                        {
                            title: 'AI识物',
                            url: '',
                        },
                    ],
                },
                {
                    title: '服务与支持',
                    items: [{
                            title: '开发文档',
                            url: '',
                        },
                        {
                            title: '常见问题',
                            url: '',
                        },
                        {
                            title: '工单系统',
                            url: '',
                        },
                    ],
                },
                {
                    title: '关于我们',
                    items: [{
                            title: '公司介绍',
                            url: '',
                        },
                        {
                            title: '新闻咨询',
                            url: '',
                        },
                        {
                            title: '联系我们',
                            url: '',
                        },
                    ],
                },
            ],
            bottom: 'Made with ❤ by CTAccel',
        },
    });
};