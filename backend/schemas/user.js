export default {
    name : 'users',
    title : 'Users',
    type : 'document',
    fields : [
        {
            name : 'name',
            title : 'Name',
            type : 'string'
        },
        {
            name : 'userpic',
            title : 'UserPic',
            type : 'image',
            options : {
                hotspot : true
            }
        }
    ]
}