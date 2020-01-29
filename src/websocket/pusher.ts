
import Pusher from 'pusher-js'
// Enable pusher logging - don't include this in production
Pusher.logToConsole = true;

const app_id = "11a083decab4e140d659"
export const pusher = new Pusher(app_id, {
    cluster: 'ap4',
    forceTLS: true
});





// export const updateDataSupplier = (data: Array<any>) => {
//     const newData = data.concat()
//     channel.bind('supplier', () => {

//     })
//     return newData
// } 

// channel.bind('my-event', callback)

