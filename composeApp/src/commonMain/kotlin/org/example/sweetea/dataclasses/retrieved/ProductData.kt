package org.example.sweetea.dataclasses.retrieved

import kotlinx.serialization.Serializable

/*
Describes the json response to the products query
The class contains the a representation for the full response data,
with some potential inaccuracy due to null values in the available
responses; many values have also been commented out to to their lack of
relevance to the product, and in favor of a decreased memory footprint
*/

@Serializable
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
    val short_description: String?,
    //val variaton_type: String,
    val product_type: String,
    //Not used, also breaks the gson deserializer
    //val product_type_details: ProductTypeDetails,
    val taxable: Boolean?,
    //val required_feature_to_sell: String
    //val min_prep_time: String,
    //val min_prep_time_duration_iso8601: String,
    //val advanced_notice_duration: String,
    //val site_shipping_box_id: String,
    val site_link: String,
    //val permalink: String,
    //val seo_page_description: String,
    //val seo_page_title: String,
    //val seo_page_image_id: Int,
    //val og_title: String,
    //val og_description: String,
    //val avg_rating: String,
    //val avg_rating_all: String,
    val inventory: InventoryData,
    //val measurement_unit_abbreviation: String,
    val price: PriceData,
    //val on_sale: Boolean,
    //val is_alcoholic: Boolean,
    //val import_source: String,
    val per_order_max: Int?,
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
    val modifiers: Data<MutableList<ModifierData>>,
    val categories: Data<List<BasicCategoryData>>,
    //val discounts: Data<List<String>>,
){
    constructor(productData: ProductData) : this(
        id = productData.id,
        site_product_id = productData.site_product_id,
        visibility = productData.visibility,
        name = productData.name,
        short_description = productData.short_description,
        product_type = productData.product_type,
        taxable = productData.taxable,
        site_link = productData.site_link,
        inventory = InventoryData(productData.inventory),   // COPIER
        price = PriceData(productData.price),               // COPIER
        per_order_max = productData.per_order_max,
        badges = BadgeData(productData.badges),             //COPIER
        thumbnail = Data(ImageData(productData.thumbnail.data)), //COPIER
        images = Data(productData.images.data.map { ImageData(it.copy()) }),                              //COPIER
        modifiers = Data(productData.modifiers.data.map { ModifierData(it.copy()) }.toMutableList()),                  //COPIER
        categories = Data(productData.categories.data.map { BasicCategoryData( it.copy()) }),                //COPIER
    )
}

data class ProductTypeDetails(
    val calorie_count: String,
    val dietary_prefrences: List<String>,
    val dietary_prefrences_tl: List<String>,
    val ingredients: List<String>,
    val ingredients_tl: List<String>,
)

@Serializable
data class InventoryData(
    val total: Int,
    val lowest: Int?,
    val enabled: Boolean,
    val all_variations_sold_out: Boolean,
    val some_variations_sold_out: Boolean,
    //val mark_sold_out_all_existing_locations: Boolean,
    //val mark_sold_out_skus_count: Int,
    val all_inventory_total: Int,
){
    constructor(inventoryData: InventoryData) : this(
        total = inventoryData.total,
        lowest = inventoryData.lowest,
        enabled = inventoryData.enabled,
        all_variations_sold_out = inventoryData.all_variations_sold_out,
        some_variations_sold_out = inventoryData.some_variations_sold_out,
        all_inventory_total = inventoryData.all_inventory_total
    )
}

@Serializable
data class PriceData(
    val high: Float,
    var high_with_modifiers: Float,
    //val high_with_subscriptions: Float,
    val high_formatted: String,
    //val high_formmated_with_modifiers: String,
    //val high_formmated_with_subscriptions: String,
    val high_subunits: Int,
    //val high_with_subscriptions_subunits: Int,
    val low: Float,
    val low_with_modifiers: Float,
    val low_with_subscriptions: Float,
    val low_formatted: String,
    //val low_formmated_with_modifiers: String,
    //val low_formmated_with_subscriptions: String,
    val low_subunits: Int,
    //val low_with_subscriptions_subunits: Int,
    val regular_high: Float,
    val regular_high_with_modifiers: Float,
    //val regular_high_with_subscriptions: Float,
    val regular_high_formatted: String,
    //val regular_high_formated_with_modifiers: String,
    //val regular_high_formated_with_subscriptions: String,
    val regular_high_subunits: Int,
    //val regular_high_with_subscriptions_subunits: Int,
    val regular_low: Float,
    val regular_low_with_modifiers: Float,
    //val regular_low_with_subscriptions: Float,
    val regular_low_formatted: String,
    //val regular_low_formated_with_modifiers: String,
    //val regular_low_formated_with_subscriptions: String,
    val regular_low_subunits: Int,
    //val regular_low_with_subscriptions_subunits: Int,
){
    constructor(priceData: PriceData): this(
        high = priceData.high,
        high_with_modifiers = priceData.high_with_modifiers,
        high_formatted = priceData.high_formatted,
        high_subunits = priceData.high_subunits,
        low = priceData.low,
        low_with_modifiers = priceData.low_with_modifiers,
        low_with_subscriptions = priceData.low_with_subscriptions,
        low_formatted = priceData.low_formatted,
        low_subunits = priceData.low_subunits,
        regular_high = priceData.regular_high,
        regular_high_with_modifiers = priceData.regular_high_with_modifiers,
        regular_high_formatted = priceData.regular_high_formatted,
        regular_high_subunits = priceData.regular_high_subunits,
        regular_low = priceData.regular_low,
        regular_low_with_modifiers = priceData.regular_low_with_modifiers,
        regular_low_formatted = priceData.regular_low_formatted,
        regular_low_subunits = priceData.regular_low_subunits
    )
}

@Serializable
data class BadgeData(
    val low_stock: Boolean,
    val out_of_stock: Boolean,
    val on_sale: Boolean,
){
    constructor(badgeData: BadgeData) : this(
        low_stock = badgeData.low_stock,
        out_of_stock = badgeData.out_of_stock,
        on_sale = badgeData.on_sale
    )
}

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

@Serializable
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
){
    constructor(imageData: ImageData) : this(
        id = imageData.id,
        owner_id = imageData.owner_id,
        site_id = imageData.site_id,
        site_product_image_id = imageData.site_product_image_id,
        url = imageData.url,
        absolute_url = imageData.absolute_url,
        urls = imageData.urls.toMap(),
        width = imageData.width,
        height = imageData.height,
        format = imageData.format,
        created_at = imageData.created_at,
        updated_at = imageData.updated_at,
        absolute_urls = imageData.absolute_urls.toMap()
    )
}

data class PlaceholderImageData(
    val placeholder: Boolean,
    val url: String,
    val absolute_url: String,
)

@Serializable
data class BasicCategoryData(
    val site_category_id: String,
    val name: String,
    //val ancestor_site_category_ids: List<String>
){
    constructor(basicCategoryData: BasicCategoryData) : this(
        site_category_id = basicCategoryData.site_category_id,
        name = basicCategoryData.name
    )
}

@Serializable
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
    var choices: MutableList<ChoiceData>
){
    constructor(modifierData: ModifierData) : this(
        id = modifierData.id,
        site_product_id = modifierData.site_product_id,
        name = modifierData.name,
        min_selected = modifierData.min_selected,
        max_selected = modifierData.max_selected,
        type = modifierData.type,
        display_order = modifierData.display_order,
        visible_on_invoice = modifierData.visible_on_invoice,
        choices = modifierData.choices.map { ChoiceData(it.copy()) }.toMutableList()
    )
}

@Serializable
data class ChoiceData(
    val id: String,
    val name: String,
    val price: Float,
    val display_order: Int,
    val sold_out: Boolean,
){
    constructor(choiceData: ChoiceData) : this(
        id = choiceData.id,
        name = choiceData.name,
        price = choiceData.price,
        display_order = choiceData.display_order,
        sold_out = choiceData.sold_out
    )
}
