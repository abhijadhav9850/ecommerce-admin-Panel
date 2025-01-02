import { all_apis } from "../admin/all-apis/all-apis.api";
import { sign_in } from "../auth/sign-in/sign-in.api";
import { verify_otp } from "../auth/verify-otp/verify-otp.api";
import { create_account } from "../account/create-account/create-account.api";
import { society_list } from "../society/society-list/society-list.api";
import { create_society } from "../society/create-society/create-society.api";
import { update_society } from "../society/update-society/update-society.api";
import { delete_society } from "../society/delete-society/delete-society.api";
import { create_building } from "../building/create-building/create-building.api";
import { update_building } from "../building/update-building/update-building.api";
import { delete_building } from "../building/delete-building/delete-building.api";
import { list_account } from "../account/list-account/list-account.api";
import { home_list } from "../home/home-list/home-list.api";
import { create_home } from "../home/create-home/create-home.api";
import { delete_user_from_home } from "../home/delete-user-from-home/delete-user-from-home.api";
import { remove_home } from "../home/remove-home/remove-home.api";
import { update_home } from "../home/update-home/update-home.api";
import { transaction_list } from "../transaction/transaction-list/transaction-list.api";
import { update_transaction } from "../transaction/update-transaction/update-transaction.api";
import { delete_transaction } from "../transaction/delete-transaction/delete-transaction.api";
import { create_transaction } from "../transaction/create-transaction/create-transaction.api";
import { update_account } from "../account/update-account/update-account.api";
import { building_list } from "../building/building-list/building-list.api";
import { delete_account } from "../account/delete-account/delete-account.api";
import { create_wing } from "../wing/create-wing/create-wing.api";
import { delete_wing } from "../wing/delete-wing/delete-wing.api";
import { wing_list } from "../wing/wing-list/wing-list.api";
import { update_wing } from "../wing/update-wing/update-wing.api";
import { review } from "../review/review/review.api";
import { resend_otp } from "../auth/resend-otp/resend-otp.api";
import { update_user } from "../user/update-user/update-user.api";
import { change_status } from "../Order/change-status/change-status.api";
import { order_list } from "../Order/order-list/order-list.api";
import { latest_order } from "../Order/latest-order/latest-order.api";
import { create_order } from "../Order/create-order/create-order.api";
import { order } from "../Order/order/order.api";
import { get_logged_in_user } from "../user/get-logged-in-user/get-logged-in-user.api";
import { add_user_to_home } from "../home/add-user-to-home/add-user-to-home.api";
import { add_user } from "../user/add-user/add-user.api";
import { product_list } from "../product/product-list/product-list.api";

import { create_employee } from "../employee/create-employee/create-employee.api";
import { update_employee } from "../employee/update-employee/update-employee.api";
import { delete_employee } from "../employee/delete-employee/delete-employee.api";
import { employee_list } from "../employee/employee-list/employee-list.api";
import { get_employee } from "../employee/get-employee/get-employee.api";
// Import Statement here

export let apis: any = {
	all_apis,
	sign_in,
	verify_otp,
	order,
	create_order,
	latest_order,
	order_list,
	get_logged_in_user,
	change_status,
	update_user,
	product_list,
	add_user,
	create_account,
	society_list,
	create_society,
	update_society,
	delete_society,
	list_account,
	update_account,
	delete_account,
	home_list,
	create_home,
	add_user_to_home,
	delete_user_from_home,
	remove_home,
	update_home,
	transaction_list,
	create_transaction,
	update_transaction,
	delete_transaction,
	building_list,
	create_building,
	update_building,
	delete_building,
	create_wing,
	update_wing,
	delete_wing,
	wing_list,
	review,
	resend_otp,
	create_employee,
	update_employee,
	delete_employee,
	employee_list,
	get_employee,
	// Import Api here
};
