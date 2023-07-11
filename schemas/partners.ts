import { defineType, defineField } from 'sanity'


export default defineType({
   name:'partners',
   title:"partners",
   type:"document",
    fields:[
        defineField({
            name:"title",
            title:"Title",
            type:"string",
            validation: (Rule) => Rule.required(),
        }), 
        defineField({
            name:"image",
            title:"Image",
            type:"image",
        })
    ],
}) 