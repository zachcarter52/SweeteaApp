package org.example.sweetea.test;

import android.content.Context;

import androidx.test.InstrumentationRegistry;

public class getID {
    public static int getId(String id)
    {
        Context targetContext = InstrumentationRegistry.getTargetContext();
        String packageName = targetContext.getPackageName();
        return targetContext.getResources().getIdentifier(id, "id", packageName);
    }
}
