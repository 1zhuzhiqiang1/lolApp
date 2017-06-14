package com.iqiang.plugin;

import android.content.Intent;

import org.apache.cordova.CallbackContext;
import org.apache.cordova.CordovaPlugin;
import org.json.JSONArray;
import org.json.JSONException;

/**
 * This class echoes a string called from JavaScript.
 */
public class IQWebview extends CordovaPlugin {

    @Override
    public boolean execute(String action, JSONArray args, CallbackContext callbackContext) throws
            JSONException {
        if (action.equals("coolMethod")) {
            String message = args.getString(0);
            this.coolMethod(message, callbackContext);
            return true;
        } else if (action.equals("openNewWindow")) {
            this.openNewWindow(args, callbackContext);
            return true;
        }
        return false;
    }

    private void coolMethod(String message, CallbackContext callbackContext) {
        if (message != null && message.length() > 0) {
            callbackContext.success(message);
        } else {
            callbackContext.error("Expected one non-empty string argument.");
        }
    }

    private void openNewWindow(JSONArray jsonArray, CallbackContext callbackContext) {
        String index_url = jsonArray.optString(0);
        String title = jsonArray.optString(1);
        if (null == index_url) {
            callbackContext.error("网页地址不能空");
        }
        Intent intent = new Intent(this.cordova.getActivity(), IQWebviewActivity.class);
        intent.putExtra("title", title);
        intent.putExtra("index_url", index_url);
        this.cordova.getActivity().startActivity(intent);
        callbackContext.success("成功");
    }
}
