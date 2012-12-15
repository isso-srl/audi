

/*
 * @Autor: Pablo Garcia guaman
 * @Email: garcia_guaman_pablo@hotmail.com
 */

Ext.define('Audi.model.ModelUser', {
    extend: 'Ext.data.Model',
    fields: [
                { name: 'id_user', type: 'int'},
                { name: 'login', type: 'string'},
                { name: 'password', type: 'string'},
                { name: 'active', type: 'boolean'}
           ]
});
