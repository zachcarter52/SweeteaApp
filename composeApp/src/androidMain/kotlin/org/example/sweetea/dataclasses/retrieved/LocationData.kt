package org.example.sweetea.dataclasses.retrieved

import kotlinx.serialization.Serializable

/*
Describes the json response to the store-locations query
The class contains the a representation for the full response data,
with some potential inaccuracy due to null values in the available
responses; many values have also been commented out to to their lack of
relevance to the product, and in favor of a decreased memory footprint
 */
@Serializable
data class LocationData (
    val id: String,
    //val owner_id: String,
    //val site_id: String,
    //val store_address_id: String,
    val nickname: String,
    //val display_name: String
    //val description: String,
    //val alcohol_delivery_enabled: Boolean,
    //val prepared_status_enabled: Boolean,
    //val pickup_timezone: String,
    //val pickup_timezone_info: TimezoneInfo,
    val pickup_hours: WeeklyHours,
    //val delivery_hours: WeeklyHours,
    //val batch_order_settings: BatchOrderSettings,
    val order_prep_time: Int,
    //val max_orders_per_window: Int,
    val schedule_pickup_enabled: Boolean,
    //val schedule_pickup_max_days: Int,
    val pickup_instructions: String,
    //val is_shipping_location: Boolean,
    val square_business_hours: String,
    //val delivery_fee_maximum: DeliveryFee,
    //val delivery_fee_maximum_formatted: String,
    //val delivery_order_subtotal_minimum: Int,
    //val delivery_order_subtotal_minimum_formatted: String,
    val pickup_order_subtotal_minimum: Int,
    //val delivery_areas: List<String>,
    //val curbside_pickup_enabled: Boolean,
    //val no_contant_delivery_enabled: Boolean,
    //val automatically_assign_pickup_times: Boolean,
    //val automatically_assign_delivery_times: Boolean,
    //val no_eta_fulfillment_instructions: String,
    //val no_eta_short_fulfillment_instructions: String,
    //val couriers: List<String>,
    //val courier_delivery_previously_enabled: Boolean,
    //val allowedDeliveryTypes: DeliveryTypes,
    //val service_fee_type: Int,
    val service_fee: Float,
    val service_fee_formatted: String,
    //val dine_in_enabled: Boolean,
    //val dine_in_settings: String,
    //val created_at: String,
    //val updated_at: String,
    //val google_food_ordering_id: String,
    //val google_food_ordering_site_id: String,
    //val is_open_tabs_feature_group: Boolean,
    //val has_besi_enabled: Boolean,
    //val delivery_has_been_enabled: Boolean,
    //val pickup_has_been_enabled: Boolean,
    //val can_use_sso_business_hours: Boolean,
    //val can_use_ssosms_pickup_alerts: Boolean,
    //val pickup_settings: OrderMethodSettings,
    //val delivery_settings: OrderMethodSettings,
    val pickup_enabled: Boolean,
    //val delivery_enabled: Boolean,
    //val print_order_tickets_immediately_enabled: Boolean,
    //val pickup_delivery_shared_order_limits: Boolean,
    //val delivery_estimated_max_duration_minutes: Int,
    //val delivery_estimated_min_duration_minutes: Int,
    //val delivery_fee: Int,
    //val delivery_fee_formatted: String,
    val address: Data<LocationAddressData>,
    //val free_fulfillment_conditions: FulfillmentConditions,
    //val delivery_conditions: DeliveryConditions,
    //val square_id: String,
)

@Serializable
data class WeeklyHours(
    val SUN: List<OpenClose>,
    val MON: List<OpenClose>,
    val TUE: List<OpenClose>,
    val WED: List<OpenClose>,
    val THU: List<OpenClose>,
    val FRI: List<OpenClose>,
    val SAT: List<OpenClose>,
)

@Serializable
data class OpenClose(
    val open: String,
    val close: String,
)

data class BatchOrderSettings(
    val pickup: OrderSettings,
    val delivery: OrderSettings
)
data class OrderSettings(
    val cutoff_time: String,
    val minimum_days_required: Int,
    val time_slot_type: String
)

data class OrderMethodSettings(
    val batch_order_settings: BatchOrderSettings,
    val print_order_tickets_immediately_enabled: Boolean,
    val fulfillment_prefrences_id: String,
    val order_limit_settings: String,
    val order_prep_time: String,
    val enablement_status: String,
    val enablement_scheduled_at: String,
    val fulfillment_prefrences_object_version: Int
)

@Serializable
data class LocationAddressData(
    val id: String,
    val deleted: Boolean,
    //val owner_id: String,
    //val site_id: String,
    val store_address_id: Int,
    val is_shippable: Boolean,
    val is_primary: Boolean,
    val is_valid: Boolean,
    val business_name: String,
    val street: String,
    val street2: String,
    //val postal_code: String,
    val city: String,
    //val region_code: String,
    //val region_code_cca2: String,
    //val region_code_full_name: String,
    //val country_code: String,
    //val country_code_cca2: String,
    //val country_code_full_name: String,
    val phone: String,
    val email: String,
    val latitude: Float,
    val longitude: Float,
    //val created_date: String,
    //val updated_date: String,
)
