package com.coffe

import android.os.Bundle
import com.facebook.react.ReactActivity
import com.facebook.react.ReactActivityDelegate
import com.facebook.react.defaults.DefaultNewArchitectureEntryPoint.fabricEnabled
import com.facebook.react.defaults.DefaultReactActivityDelegate

class MainActivity : ReactActivity() {

    /**
     * Returns the name of the main component registered from JavaScript.
     * This is used to schedule rendering of the component.
     */
    override fun getMainComponentName(): String = "Coffe"

    // Corrected the onCreate method to follow Kotlin's syntax
    override fun onCreate(savedInstanceState: Bundle?) {
        super.onCreate(null)
    }

    /**
     * Returns the instance of the [ReactActivityDelegate].
     * We use [DefaultReactActivityDelegate] which allows you to enable New Architecture
     * with a single boolean flag [fabricEnabled].
     */
    override fun createReactActivityDelegate(): ReactActivityDelegate {
        return DefaultReactActivityDelegate(this, mainComponentName, fabricEnabled)
    }
}
