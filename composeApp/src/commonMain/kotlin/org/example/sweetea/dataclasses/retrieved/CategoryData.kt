package org.example.sweetea.dataclasses.retrieved

import kotlinx.serialization.Serializable

/*
Describes the json response to the querying of categories
The class contains the a representation for the full response data,
with some potential inaccuracy due to null values in the available
responses; many values have also been commented out to to their lack of
relevance to the product, and in favor of a decreased memory footprint
 */
@Serializable
data class CategoryData(
    val id: String,
    val site_category_id: String,
    val name: String,
    val root_parent_category_id: Int,
    val seo_page_description: String,
    val seo_page_title: String,
    val site_link: String,
    val permalink: String,
    //val og_title: String,
    //val og_description: String,
    val published: Boolean,
    //val unpublished_ancestor: String,
    val parent: String,
    val is_custom_times: Boolean,
    val depth: Int,
    //val product_counts: ProductCountsData,
    val updated_date: String,
    val hide_from_parent: Boolean,
    val page_layout: String,
    val show_sub_categories: Boolean,
    val product_count: ProductCountData,
    //val children: List<String>,
    //val preferred_order_product_ids: List<String>
    val images: Data<List<CategoryImages>>,
    val availability: AvailabilityData
)

@Serializable
data class ProductCountsData(
    val direct: Int,
    val visisble: Int,
    val full_category_subtree: Int
)

@Serializable
data class ProductCountData(
    val total: Int,
    val visible: Int,
)

@Serializable
data class CategoryImages(
    val id: String,
    val path: String,
    val width: Int,
    val height: Int,
    val url: String,
    val absolute_url: String,
    val urls: Map<String, String>,
)

@Serializable
data class AvailabilityData(
    val delivery: Availability,
    val pickup: Availability,
    val dine_in: Availability,
    val shipping: Boolean,
)

@Serializable
data class Availability(
    val hours: List<Int>,
    val root_hours: List<Int>,
    val should_display_now: Boolean,
    val is_custom_times: Boolean,
    //val next_availability_period: Nothing

)