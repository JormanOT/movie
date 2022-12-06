export default {
    name: 'movies',
    title: 'Movies',
    type: 'document',
    fields: [
        {
            name: 'title',
            title: 'Title',
            type: 'string'
        },
        {
            name: 'banner',
            title: 'Banner',
            type: 'image',
            options: { hotspot: true }
        },
        {
            name: 'cover',
            title: 'Cover',
            type: 'image',
            options: { hotspot: true }
        },
        {
            name: 'genre',
            title: 'Genre',
            type: 'array',
            of: [{ type: 'string' }]
        },
        {
            name: 'stars',
            title: 'Stars',
            type: 'array',
            of: [{ type: 'number' }]
        },
        {
            name : 'description',
            title : 'Description',
            type : 'string'
        },
        {
            name: 'trailer',
            title: 'Trailer',
            type: 'string'
        },
    ]
}