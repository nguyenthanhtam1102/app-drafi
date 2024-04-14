const listMessage = [
    {
        id:'1',
        image: require('../image/chatHome/doraemon.png'),
        userName:"Doraemon",
        displayName:'Doraemon',
        content:{
            type: "text",
            message:"Hello how are you",
        }
    },
    {
        id:'2',
        image: require('../image/chatHome/nobita.png'),
        userName: "Nobita",
        displayName:'Nobita',
        content:{
            type: "text",
            message:"Hello how are you"
        }
    }
]

const dataFriends = [
    {
        id:'1',
        image: require('../image/chatHome/doraemon.png'),
        displayName:'Doraemon',
        userName:"Doraemon",
    },
    {
        id:'2',
        image: require('../image/chatHome/nobita.png'),
        displayName:'Nobita',
        userName: "Nobita",
    },

]
const dataMembers = [
    {
        id:'1',
        image: require('../image/chatHome/doraemon.png'),
        displayName:'Doraemon',
        userName:"Doraemon",
        permission: "leader"
    },
    {
        id:'2',
        image: require('../image/chatHome/nobita.png'),
        displayName:'Nobita',
        userName: "Nobita",
        permission:'member'
    },

]




const chatWithDoraemon =  [
    {
        _id: "dc123",
        rid: "abc123",
        msg:"Hello how are youddddddddddddddddddddd",
        u:{username:'Doraemon'},
        ts:"2023-11-16T07:54:28.000Z"
    },
    {
        _id: "dc124",
        rid: "abc123",
        msg:"I'm fine",
        u:{username:'Tai'},
        ts:"2023-11-16T07:55:28.000Z"
    },
    {
        _id: "dc123",
        rid: "abc123",
        msg:"Hello how are you",
        u:{username:'Doraemon'},
        ts:"2023-11-16T07:54:28.000Z"
    },
]


const receivedFriend = [
    {
        _id:"1",
        u:{
            username:"NguyenA",
            displayName:"Nguyen A",
            id:'1',
            image:require('../image/chatHome/doraemon.png'),
        }
    },
    {
        _id:"2",
        u:{
            username:"NguyenB",
            displayName:"Nguyen B",
            id:'2',
            image:require('../image/chatHome/doraemon.png'),
        }
    },

]
const sentFriend = [
    {
        _id:"1",
        u:{
            username:"NguyenA",
            displayName:"Nguyen A",
            id:'1',
            image:require('../image/chatHome/doraemon.png'),
        }
    },
    {
        _id:"2",
        u:{
            username:"NguyenB",
            displayName:"Nguyen B",
            id:'2',
            image:require('../image/chatHome/doraemon.png'),
        }
    },

]

const personData = {
    id: "1",
    displayName:"Doraemon",
    userName:"Doraemon",
    image: require("../image/chatHome/doraemon.png"),
}


export {listMessage, chatWithDoraemon, dataFriends, receivedFriend, sentFriend, personData, dataMembers};