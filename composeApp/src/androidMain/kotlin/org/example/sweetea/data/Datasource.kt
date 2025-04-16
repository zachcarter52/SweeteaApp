package org.example.sweetea.data

import org.example.sweetea.R
import org.example.sweetea.model.Items

class Datasource(){
    fun loadItems(): List<Items>{
        return listOf<Items>(
            Items(R.string.item1, R.drawable.test1),

        )
    }
}