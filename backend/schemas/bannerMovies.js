export default {
    name: 'bannermovies',
    title: 'BannerMovies',
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
            options: {
                hotspot: true,
            }
        },
        {
            name: 'description',
            title: 'Description',
            type: 'string'
        }
    ]
}