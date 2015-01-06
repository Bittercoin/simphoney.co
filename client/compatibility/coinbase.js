
coinbaseFunction = function(){
(function() {
    var e;
    (e = function(e, t, n, a) {
        var o, r, i, s, c, d, l, u, m, _;
        return _ = [null, null, !1], i = _[0], r = _[1], d = _[2], (i = e.jQuery) && (u = parseInt(n.split(".")[0]) || 0, m = parseInt(n.split(".")[1]) || 0, s = parseInt(i.fn.jquery.split(".")[0]) || 0, c = parseInt(i.fn.jquery.split(".")[1]) || 0, o = s > u || s === u && c >= m), i && o && !a(i, d) ? void 0 : (l = t.createElement("script"), l.type = "text/javascript", l.src = "https://ajax.googleapis.com/ajax/libs/jquery/1.8.3/jquery.min.js", l.onload = l.onreadystatechange = function() {
            return d || (r = this.readyState) && "loaded" !== r && "complete" !== r ? void 0 : (a((i = e.jQuery).noConflict(1), d = !0), i(l).remove())
        }, (t.getElementsByTagName("head")[0] || t.documentElement).appendChild(l))
    })(window, document, "1.7", function(e) {
        var t, n, a, o, r, i, s;
        return t = !1, n = !1, r = "https://www.coinbase.com", s = function(e) {
            return "development" === e || "test" === e ? r = document.location.protocol + "//" + document.location.host : void 0
        }, i = function(a) {
            var o, i, s;
            if (s = a.data.split("|"), i = s[0], o = s[1], o = escape(o), a.origin === r) {
                if ("show modal iframe" === i) return e("#coinbase_modal_iframe_" + o).show();
                if ("coinbase_payment_complete" === i) return e("#coinbase_button_iframe_" + o).attr("src", r + "/buttons/paid"), e(document).trigger("coinbase_payment_complete", o);
                if ("coinbase_payment_mispaid" === i) return e(document).trigger("coinbase_payment_mispaid", o);
                if ("coinbase_payment_expired" === i) return e(document).trigger("coinbase_payment_expired", o);
                if ("hide modal" === i) return e("#coinbase_modal_iframe_" + o).hide(), e(document).trigger("coinbase_modal_closed", o);
                if ("signup redirect" === i) return document.location = r + "/users/verify";
                if ("button frame loaded" === i) {
                    if (t = !0, n) return e(document).trigger("coinbase_button_loaded", o)
                } else if ("checkouts frame loaded" === i && (n = !0, t)) return e(document).trigger("coinbase_button_loaded", o)
            }
        }, o = function(e) {
            switch (e) {
                case "custom_large":
                    return 276;
                case "custom_small":
                    return 210;
                case "subscription_large":
                    return 263;
                case "subscription_small":
                    return 210;
                case "donation_large":
                    return 189;
                case "donation_small":
                    return 148;
                case "buy_now_large":
                    return 211;
                case "buy_now_small":
                    return 170;
                default:
                    return 211
            }
        }, a = function(e) {
            switch (e) {
                case "custom_large":
                    return 62;
                case "custom_small":
                    return 48;
                default:
                    return 46
            }
        }, window.addEventListener("message", i, !1), s(e("body").data("env")), e(".coinbase-button").each(function() {
            return function(n, i) {
                var c, d, l, u, m, _, p, b;
                return c = e(i), u = c.data(), u.referrer = document.domain, p = e.param(u), l = c.data("code"), b = c.data("width") || o(c.data("button-style")), m = c.data("height") || a(c.data("button-style")), s(c.data("env")), d = "<iframe src='" + r + "/buttons/" + l + "?" + p + "' id='coinbase_button_iframe_" + l + "' name='coinbase_button_iframe_" + l + "' style='width: " + b + "px; height: " + m + "px; border: none; overflow: hidden;' scrolling='no' allowtransparency='true' frameborder='0'></iframe>", _ = "<iframe src='" + r + "/checkouts/" + l + "/widget?" + p + "' id='coinbase_modal_iframe_" + l + "' name='coinbase_modal_iframe_" + l + "' style='background-color: transparent; border: 0px none transparent; display: none; position: fixed; visibility: visible; margin: 0px; padding: 0px; left: 0px; top: 0px; width: 100%; height: 100%; z-index: 9999;' scrolling='no' allowtransparency='true' frameborder='0'></iframe>", "none" === c.data("button-style") ? t = !0 : c.replaceWith(d), e("body").append(_)
            }
        }(this)), e(document).on("coinbase_show_modal", function(t, n) {
            return console.log("coinbase_show_modal"), e("#coinbase_modal_iframe_" + n).length > 0 ? (e("#coinbase_modal_iframe_" + n).show(), frames["coinbase_modal_iframe_" + n].postMessage("show modal|" + n, r), console.log("1")) : console.log("Could not find Coinbase modal with id 'coinbase_modal_iframe_" + n + "'. Does this match the data-code attribute in your embed HTML?")
        }), console.log("button.js", r), !1
    })
}).call(this);

}