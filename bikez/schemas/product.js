export default {
    name:"product",
    type:"document",
    title:"Product",
    fields:[
        {
            name:"name",
            title:"Name",
            type:"string"
        },
        {
            name:"description",
            title:"Description",
            type:"text"
        },
        {
            name:"price",
            title:"Price",
            type:"number"
        },
        {
            name:"image",
            title:"Image",
            type:"array",
            of:[{type:"image"}]
        },
        {
            name:"slug",
            type:"slug",
            title:"Product Slug",
            options:{
                source:"name"
            }
        },
        {
            name:'category',
            title:'Category of product',
            type:'reference',
            to:[
                {
                    type:'category'
                }
            ]
        },
        {
            name:'price_id',
            title:'Price ID',
            type:'string',
            description:'the price id of the product'
        },
        {
            name:'approved',
            title:'Approved',
            type:'boolean',
            description:'products will be shown in the featured product section if they are approved'
        },
    ]
}