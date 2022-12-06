export default {
    name : 'services',
    title : 'Services',
    type : 'document',
    fields : [
        {
            name : 'image',
            title : 'Image',
            type : 'image',
            options : {
                hotspot : true
            }
        },
        {
            name : 'service',
            title : 'Service',
            type : 'string'
        },
        {
            name : 'info',
            title : 'Info',
            type : 'string'
        },
        {
            name : 'link',
            title : 'Link',
            type : 'string'
        }
    ]
}