export default {
    // 正常模式的tab title配置
    tabTitles: [
        {
            title: '消息',
            icon: 'bmlocal://assets/tabbar_message.png',
            activeIcon: 'bmlocal://assets/tabbar_message_active.png'
        },
        {
            title: '工作',
            icon: 'bmlocal://assets/tabbar_work.png',
            activeIcon: 'bmlocal://assets/tabbar_work_active.png'
        },
        {
            title: '联系人',
            icon: 'bmlocal://assets/tabbar_contacts.png',
            activeIcon: 'bmlocal://assets/tabbar_contacts_active.png'
            // badge: 5
        },
        {
            title: '我',
            icon: 'bmlocal://assets/tabbar_me.png',
            activeIcon: 'bmlocal://assets/tabbar_me_active.png'
            // dot: true
        }
    ],
    tabStyles: {
        bgColor: '#fff',
        titleColor: '#666666',
        activeTitleColor: '#3D3D3D',
        activeBgColor: '#FFFFFF',
        iconWidth: 44,
        iconHeight: 44,
        width: 160,
        height: 120
    }
}
