export let config = {
    api: {
        url: 'http://3.93.194.101:3003/api/',
        user: {
            login: 'user/login',
        },
        shopOwner:{
            createOwner:'shopOwner/createOwner',
            ownerList:'shopOwner/ownerList',
            deleteOwner:'shopOwner/deleteOwner',
            ownerDetailById:'shopOwner/ownerDetail',
        },
        customer:{
            createCustomer:'customers/createCustomer',
            customerList:'customers/customerList',
            customerListByOwnerId:'shopOwner/customerList',
            deleteCustomer:'customers/deleteCustomer',
            customerListById:'customers/customerDetail',
            editCustomer:'customers/updateCustomer',
        }
    }
}