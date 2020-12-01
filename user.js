/*** MaterialFox ***/
/**  Mandatory	  **/
user_pref("toolkit.legacyUserProfileCustomizations.stylesheets", true); // default is false
user_pref("svg.context-properties.content.enabled", true); 				// default is false

/**  Recommended  (uncomment to apply) **/
/* Replicate Chrome behaviour for clipped tabs */
//user_pref("browser.tabs.tabClipWidth", 83); 							// default is 140

/* Replicate Chrome's "Not Secure" text on HTTP */
// user_pref("security.insecure_connection_text.enabled", true);

// These settings make scrolling like edge
/*
user_pref("general.smoothScroll.msdPhysics.continuousMotionMaxDeltaMS", 250); // 120 default, 250
user_pref("general.smoothScroll.msdPhysics.enabled", true);
user_pref("general.smoothScroll.msdPhysics.motionBeginSpringConstant", 450); //1250 default, 450
user_pref("general.smoothScroll.msdPhysics.regularSpringConstant", 450); // 1000 default, 450
user_pref("general.smoothScroll.msdPhysics.slowdownMinDeltaMS", 50); // 12 default, 50
user_pref("general.smoothScroll.msdPhysics.slowdownMinDeltaRatio;0", 4);
user_pref("general.smoothScroll.msdPhysics.slowdownSpringConstant", 5000);
user_pref("mousewheel.min_line_scroll_amount", 22);
user_pref("toolkit.scrollbox.horizontalScrollDistance", 4);
user_pref("toolkit.scrollbox.verticalScrollDistance", 5);
*/
user_pref("privacy.resistFingerprinting.block_mozAddonManager", true);
user_pref("browser.send_pings", false);
user_pref("gfx.webrender.all", true);
user_pref("beacon.enabled", false);
user_pref("alerts.useSystemBackend", true);
user_pref("extensions.pocket.enabled", false);
user_pref("ui.key.menuAccessKeyFocuses", false);