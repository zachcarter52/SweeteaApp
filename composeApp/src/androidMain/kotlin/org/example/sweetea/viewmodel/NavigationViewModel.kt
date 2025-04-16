package org.example.sweetea.viewmodel

import androidx.compose.runtime.mutableStateMapOf

class NavigationViewModel {
    private val _breadcrumbs = mutableStateMapOf<String, String>()
    val breadCrumbs: MutableMap<String,String>
        get() = _breadcrumbs
    private var currentFullRoute: String = ""
    fun navigateToHead(route: String){
        if(route.contains("/")) return
        _breadcrumbs.clear()
        _breadcrumbs[route] = route;
        currentFullRoute = route
    }

    fun navigateUp(){
        navigateUp(1)
    }
    fun navigateUp(count:Int){
        val splitRoute = currentFullRoute.split("/")
        val newSplitRoute = splitRoute.subList(0, count)
        _breadcrumbs.clear()
        currentFullRoute = ""
        for(i in 0..newSplitRoute.size){
            _breadcrumbs[newSplitRoute[i]] = currentFullRoute + newSplitRoute[i]
            if(i == 0){
                currentFullRoute = newSplitRoute[i]
            } else {
                currentFullRoute += "/${newSplitRoute[i]}"
            }
        }
    }

    fun navigateSubPage(route: String){
        if(route.contains("/")) return
        currentFullRoute += "/$route"
        _breadcrumbs[route] = currentFullRoute
    }
}