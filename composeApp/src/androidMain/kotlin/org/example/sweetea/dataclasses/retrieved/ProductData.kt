package org.example.sweetea.dataclasses.retrieved

/*
Describes the json response to the products query
The class contains the a representation for the full response data,
with some potential inaccuracy due to null values in the available
responses; many values have also been commented out to to their lack of
relevance to the product, and in favor of a decreased memory footprint
 */
data class ProductData (
    val id: String,
    //val owner_id: String,
    //val site_id: String,
    val site_product_id: String,
    //val square_id: String,
    val visibility: String,
    //val visibility_tl: String,
    //val visibility_locked: Boolean,
    val name: String,
    val short_description: String,
    val variaton_type: String,
    val product_type: String,
    //Not used, also breaks the gson deserializer
    //val product_type_details: ProductTypeDetails,
    val taxable: Boolean,
    //val required_feature_to_sell: String
    //val min_prep_time: String,
    //val min_prep_time_duration_iso8601: String,
    //val advanced_notice_duration: String,
    //val site_shipping_box_id: String,
    val site_link: String,
    //val permalink: String,
    //val seo_page_description: String,
    //val seo_page_title: String,
    val seo_page_image_id: Int,
    //val og_title: String,
    //val og_description: String,
    val avg_rating: String,
    //val avg_rating_all: String,
    val inventory: InventoryData,
    //val measurement_unit_abbreviation: String,
    val price: PriceData,
    //val on_sale: Boolean,
    //val is_alcoholic: Boolean,
    //val import_source: String,
    val per_order_max: Int,
    //val allow_order_item_quantities: Boolean,
    //val created_date: String,
    //val updated_date: String,
    val badges: BadgeData,
    //val only_subscribable: Boolean,
    //val preordering: PreorderingData,
    //val fulfillment_availability: FulfillmentAvailability,
    //val measurement_unit_precision: String,
    //val has_multiple_measurement_units: Boolean,
    //val fulfillable: Boolean,
    val thumbnail: Data<ImageData>,
    //val placeholder_image: Data<PlaceholderImageData>,
    val images: Data<List<ImageData>>,
    //val media_files: Data<List<String>>,
    val modifiers: Data<List<ModifierData>>,
    val categories: Data<List<BasicCategoryData>>,
    //val discounts: Data<List<String>>,
)

data class ProductTypeDetails(
    val calorie_count: String,
    val dietary_prefrences: List<String>,
    val dietary_prefrences_tl: List<String>,
    val ingredients: List<String>,
    val ingredients_tl: List<String>,
)

data class InventoryData(
    val total: Int,
    val lowest: String,
    val enabled: Boolean,
    val all_variations_sold_out: Boolean,
    val some_variations_sold_out: Boolean,
    val mark_sold_out_all_existing_locations: Boolean,
    val mark_sold_out_skus_count: Int,
    val all_inventory_total: Int,
)

data class PriceData(
    val high: Float,
    val high_with_modifiers: Float,
    //val high_with_subscriptions: Float,
    val high_formatted: String,
    val high_formmated_with_modifiers: String,
    //val high_formmated_with_subscriptions: String,
    val high_subunits: Int,
    //val high_with_subscriptions_subunits: Int,
    val low: Float,
    val low_with_modifiers: Float,
    val low_with_subscriptions: Float,
    val low_formatted: String,
    val low_formmated_with_modifiers: String,
    //val low_formmated_with_subscriptions: String,
    val low_subunits: Int,
    //val low_with_subscriptions_subunits: Int,
    val regular_high: Float,
    val regular_high_with_modifiers: Float,
    //val regular_high_with_subscriptions: Float,
    val regular_high_formatted: String,
    val regular_high_formated_with_modifiers: String,
    //val regular_high_formated_with_subscriptions: String,
    val regular_high_subunits: Int,
    //val regular_high_with_subscriptions_subunits: Int,
    val regular_low: Float,
    val regular_low_with_modifiers: Float,
    //val regular_low_with_subscriptions: Float,
    val regular_low_formatted: String,
    val regular_low_formated_with_modifiers: String,
    val regular_low_formated_with_subscriptions: String,
    val regular_low_subunits: Int,
    //val regular_low_with_subscriptions_subunits: Int,
)

data class BadgeData(
    val low_stock: Boolean,
    val out_of_stock: Boolean,
    val on_sale: Boolean,
)

data class PreorderingData(
    val pickup: Boolean,
    val delivery: Boolean,
    val shipping: Boolean,
    val manual: Boolean,
    val download: Boolean,
)

data class FulfillmentAvailability(
    //Type to be determined
    val pickup: Boolean,
    val delivery: Boolean,
    val shipping: Boolean,
    val manual: Boolean,
    val download: Boolean,
)

data class ImageData(
    val id: String,
    val owner_id: String,
    val site_id: String,
    val site_product_image_id: String,
    val url: String,
    val absolute_url: String,
    val urls: Map<String, String>,
    val width: Int,
    val height: Int,
    val format: String,
    val created_at: String,
    val updated_at: String,
    val absolute_urls: Map<String, String>,
)

data class PlaceholderImageData(
    val placeholder: Boolean,
    val url: String,
    val absolute_url: String,
)

data class BasicCategoryData(
    val site_category_id: String,
    val name: String,
    //val ancestor_site_category_ids: List<String>
)

data class ModifierData(
    val id: String,
//"square_id": "L7NF2TQKWYNBGLWLH777EGOP",
//"owner_id": "140236773",
//"site_id": "568173742194551081",
    val site_product_id: Int,
                        //val site_product_modifier_id: Int,               THIS ONE DOESNT WORK MAYBE WE DONT NEED ITTTTT
//"site_modifier_set_id": 4244388283,
//"modifier_set_id": "11ec613d01278714862f5226a7fc24fd",

    val name: String,
    val min_selected: Int,
    val max_selected: Int,
    val type: String,
    val display_order: Int,
    val visible_on_invoice: Int,
    val choices: List<ChoiceData>,

)

data class ChoiceData(
    val id: String,
    val name: String,
    val price: Float,
    val display_order: Int,
    val sold_out: Boolean,
)
