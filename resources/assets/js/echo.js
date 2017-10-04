import Bus from './bus'
Echo.join('chat')
    .here((users)=>{        
        Bus.$emit('users.online',users)
    })
    .joining((user)=>{
        Bus.$emit('users.join',user)
    })
    .leaving((user)=>{
        Bus.$emit('users.leave',user)
    })
    .listen('Chat.MessageCreated',(e)=>{
        Bus.$emit('messages.added',e.message);
    });