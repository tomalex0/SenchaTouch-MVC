Ext.regModel("Contact",{
    fields : [
        {name : "id", type : "int"},
        {name : "firstName", type: "string"},
        {name : "lastName", type: "string"},
        {name : "email", type: "string"},
    ],
    proxy : {
        type : "localstorage",
        id : "contacts"
    },
    validations :[{
        type: "presence",
        field: "firstName",
        message : "Enter First Name"
    },{
        type: "presence",
        field: "lastName",
        message : "Enter Last Name"
    },{
        type: 'format',
        name: 'email',
        matcher: /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/, message:"Wrong Email Format"
    }]
});