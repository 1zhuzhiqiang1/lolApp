package com.iqiang.plugin;

import android.annotation.TargetApi;
import android.app.Activity;
import android.graphics.Bitmap;
import android.os.Build;
import android.os.Bundle;
import android.util.Log;
import android.view.View;
import android.view.animation.AlphaAnimation;
import android.view.animation.Animation;
import android.webkit.WebSettings;
import android.webkit.WebView;
import android.webkit.WebViewClient;
import android.widget.LinearLayout;
import android.widget.TextView;

import com.iqiang.app.lol.R;

/**
 * Created by anyware on 17/6/2.
 */
public class IQWebviewActivity extends Activity {

    private TextView title;
    private WebView webView;
    private LinearLayout loading;

    @Override
    public void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_open_url);

        findViews();
        optWebview();

        String index_url = null;
        // enable Cordova apps to be started in the background
        Bundle extras = getIntent().getExtras();
        if (null == extras) {
            return;
        }
        String titleName = extras.getString("title");
        if (null != titleName) {
            this.title.setText(titleName);
        } else {
            this.title.setText("详情");
        }
        index_url = extras.getString("index_url", null);
        Log.e("LOL", index_url);
        if (null == index_url) {
            Log.e("LOL", "加载地址不能为空");
            return;
        }
        this.webView.loadUrl(index_url);
    }

    /**
     * 配置webview
     */
    @TargetApi(Build.VERSION_CODES.LOLLIPOP)
    private void optWebview() {
        if (Build.VERSION.SDK_INT >= Build.VERSION_CODES.KITKAT) {
            webView.getSettings().setMixedContentMode(WebSettings.MIXED_CONTENT_ALWAYS_ALLOW);
            webView.zoomBy(10.0f);
        }
        webView.getSettings().setSupportZoom(true);
        webView.getSettings().setDisplayZoomControls(true);
        webView.getSettings().setJavaScriptEnabled(true);
        this.webView.setWebViewClient(new WebViewClient() {
            @Override
            public void onPageStarted(WebView view, String url, Bitmap favicon) {
                super.onPageStarted(view, url, favicon);
                loading.setVisibility(View.VISIBLE);
            }

            @Override
            public void onPageFinished(WebView view, String url) {
                super.onPageFinished(view, url);
                Animation animation = new AlphaAnimation(1, 0);
                animation.setDuration(1000);
                loading.setAnimation(animation);
                loading.setVisibility(View.GONE);
            }
        });
    }

    private void findViews() {
        this.title = (TextView) this.findViewById(R.id.title);
        this.webView = (WebView) this.findViewById(R.id.webview);
        this.loading = (LinearLayout) this.findViewById(R.id.loading);
    }

    @Override
    protected void onDestroy() {
        super.onDestroy();
        if (null != this.webView) {
            this.webView.destroy();
        }
    }
}
