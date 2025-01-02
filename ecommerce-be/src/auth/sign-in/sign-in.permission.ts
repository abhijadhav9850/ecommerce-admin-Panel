export let sign_in_permissions = {
    roles : ['Public'],
    extra_permissions : ['if_new_role_super_admin_only_super_admin_can_set','if_existing_role_super_admin_only_super_admin_can_set'],
    extras : {
        if_new_role_super_admin_only_super_admin_can_change : (new_role:string,current_user_role:any) =>{
            if(new_role =='Super Admin'){
                if(current_user_role=='Super Admin'){
                    return true
                } else{
                    throw { code : 403, message : 'Unauthorized Access' }
                }
            } else{
                return true
            }
        },
        if_existing_role_super_admin_only_super_admin_can_change : (existing_role:string,current_user_role:string)=>{
            if(existing_role=='Super Admin'){
                if(current_user_role=='Super Admin'){
                    return true
                } else{
                    throw { code : 403, message : 'Unauthorized Access' }
                }
            } else{
                return true
            }
        }
    }
}