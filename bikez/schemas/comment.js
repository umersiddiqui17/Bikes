export default {
    name: "comment",
    title:"Comment",
    type: "document",
    fields: [
        {
            name: "name",
            title: "Name",
            type: "string"
        },
        {
            name: "email",
            title: "Email",
            type: "string"
        },
        {
            name: "comment",
            title: "Comment",
            type: "text"
        },
        {
            name:'product',
            type:'reference',
            to:{type: 'product'},
        },
        {
            name:'approved',
            title:'Approved',
            type:'boolean',
        }
    ]
}