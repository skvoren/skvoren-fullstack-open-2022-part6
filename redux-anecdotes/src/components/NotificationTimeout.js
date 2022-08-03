const NotificationTimeout = () => ({
  notificationTimeout: 0
})

const setNotificationTimeOut = (value) => {
    NotificationTimeout.notificationTimeout = value
}

const getNotificationTimeOut = () => {
    return NotificationTimeout.notificationTimeout
}

export {setNotificationTimeOut, getNotificationTimeOut}
