
/*
 * @Autor: Pablo Garcia guaman
 * @Email: garcia_guaman_pablo@hotmail.com
 */


Ext.define('Audi.store.StoreUser', {
    extend: 'Ext.data.Store',
    model:'Audi.model.ModelUser',
    autoLoad:false,
    proxy:{
        type:'ajax',
        url:'data/classes/sis_audi_user.php',
        actionMethods: {
           read: 'POST'
       },
        extraParams:{
            xaction:'isLoged'
        },
        reader:{
            type:'json',
            root:'results',
            totalProperty:'total'
        }
    }
});

