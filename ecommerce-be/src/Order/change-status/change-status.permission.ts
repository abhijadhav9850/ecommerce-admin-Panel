export let change_status_permissions = {
    roles: ['Cook', 'Packer', 'Delivery Boy','User'],
    extra_permissions: ['change_status_as_per_user', 'check_status_to_be_changed'],
    extras: {
        change_status_as_per_user(role: string, order_status: string) {
            let status: any = {
                "Admin": [''],
                "Super Admin": [''],
                "Cook": ['Started', 'Cooked', 'Cancelled'],
                "Packer": ['Packed'],
                "Delivery Boy": ['Dispatched', 'Delivered'],
                "User": ['Cancelled'],
            }
            if (status.hasOwnProperty(role)) {
                let user_status_array = status[role];
                if (user_status_array.includes(order_status)) {
                    return true
                } else {
                    throw { code: 403, message: 'You are not allowed to change status to ' + order_status }
                }
            }
        },
        check_status_to_be_changed(role: string, current_status: string, new_status: string) {
            let allowed_status:any = {
                'Pending' : ['Started','Cooked','Cancelled'],
                'Started' : ['Cancelled','Cooked'],
                'Cooked' : ['Packed'],
                'Packed' : ['Dispatched'],
                'Dispatched' : ['Delivered'],
            }

            let statuses = allowed_status[current_status];
            if(!statuses.includes(new_status)){
                throw { code : 400, message : 'You cannot change status from '+current_status+' to '+new_status}
            }
            return true;
        }
    }
}