

export default {
    name: 'product',
    type: 'document',
    title:'Products',
    fields:[
       {
        name:'name',
        type:'string',
        title:'name of the product',
       },{
        name:'image',
        type:'array',
        title:'Product image',
        of:[{type:'image'}],
       },
       {
        name:'Description',
        type:'text',
        title:'Description of product'
       },
       {
        name:'slug',
        type:'slug',
        title:'Product slug',
        options:{
            source:'name',
        }
       },
       {
        name:'price',
        type:'number',
        title:'Price pf product'
       },
       {
        name:'catagory',
        title:'choose catagory',
        type:'reference',
        to:[{
            type:'catagory'
        }],
       },
       ],
}


// name:'',
// type:'',
// title:''