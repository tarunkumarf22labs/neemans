(function () {
	"use strict";
	try {
		if (typeof document < "u") {
			var t = document.createElement("style");
			t.appendChild(
				document.createTextNode(
					'.custom-slider-container{position:relative}.nav-icons{position:absolute;top:10px;right:18px;display:flex;justify-content:space-between;align-items:center;gap:.9rem}.nav-icons svg{width:20px;height:20px}#main__container{height:auto;width:100%;margin:0 auto;max-width:400px;background-color:#fff;overflow-x:hidden;position:relative}#main__slide{width:266px;height:16rem;max-height:23rem;display:flex;align-items:center;justify-content:flex-start;gap:2rem;padding:1rem;transition:transform .5s ease-in-out}.swipeable__component{width:266px;height:auto;overflow-x:hidden;margin:0 auto}.main__slide__img{width:100%;height:100%;flex-shrink:0;flex-basis:auto}.main__slide__img img{width:100%;height:100%;object-fit:contain}.all__slides__container{width:100%;height:80px;position:relative}.all_slides{width:100%;height:100px;margin:0 auto;position:relative;overflow-x:hidden}.all__slides__container svg{height:1.5rem;width:1.5rem;position:absolute;z-index:2;top:50%;transform:translate(-50%,-50%);cursor:pointer}.all__slides__container #left__arrow{left:20px}.all__slides__container #right__arrow{right:-5px}.slider__container{max-width:420px;width:100%;height:100px;padding-left:1rem;display:flex;justify-content:flex-start;align-items:center;border:0;position:absolute;overflow-x:auto}.slider__container::-webkit-scrollbar{height:0}.slide__container{flex-shrink:0;flex-basis:auto;width:125px;height:51px;display:flex;align-items:center;justify-content:center;transition:transform .5s ease-in-out;border:1px solid lightgrey;border-radius:25px;font-size:1.4rem;margin-right:.5rem}.slide__container img{width:100%;height:100%;object-fit:contain}.active{border:1px solid gray}.active__size{background:black;color:#fff}.selectedtag{background-color:#000;color:#fff}.prod-desc{display:flex;justify-content:space-between;padding:1rem;gap:.5rem;overflow-x:auto}.prod-info>a{text-decoration:none;color:#000}.prod-images{width:100%;height:16rem;display:flex;align-items:center;gap:1rem;overflow-x:auto;padding-left:1rem}.prod-images::-webkit-scrollbar{height:0}.prod-image{height:15.5rem;width:10.3rem}.prod-image img{width:10.3rem;height:15.5rem;object-fit:cover}.show-more{font-size:.9rem;text-decoration:none;color:#000;font-weight:600}.product-deatils{margin-top:1rem;font-size:.9rem;padding:0 1rem}.loader-container{display:flex;justify-content:center;align-items:center}.loader{width:20px;height:20px;border:5px solid #007bff;border-top:5px solid transparent;border-radius:50%;animation:spin 2s linear infinite;display:block!important}@keyframes spin{0%{transform:rotate(0)}to{transform:rotate(360deg)}}.product-cards-container{position:absolute;bottom:0;z-index:2147483647;max-height:fit-content;height:fit-content;overflow-x:hidden;display:flex;align-items:flex-end;justify-content:flex-start;width:100%;padding:.5rem 0}.product-cards{display:flex;justify-content:start;align-items:flex-end;gap:.5rem;overflow-x:auto;height:auto;padding-left:1rem}.product-cards::-webkit-scrollbar{height:0}.product-card{border-radius:10px;width:100%;min-width:18rem;max-width:18rem;height:auto;display:flex;justify-content:flex-end;flex-direction:column;overflow:hidden;margin-right:.5rem;-webkit-box-shadow:2px 7px 14px -5px rgba(0,0,0,.55);-moz-box-shadow:2px 7px 14px -5px rgba(0,0,0,.55);box-shadow:2px 7px 14px -5px #0000008c;z-index:2147483647}.product-card-content{display:grid;grid-template-columns:.5fr 1fr;padding:5px;background:#ffffffbd;border-top-left-radius:10px;border-top-right-radius:10px}.product-card-img{width:100%}.product-card-img img{border-radius:5px;aspect-ratio:1;width:100%;object-fit:cover;object-position:top}.product-card-info{display:flex;flex-direction:column;gap:1rem;padding:.8rem}.product-card-info-title{font-size:1rem;font-weight:600}.product-card-info-price{font-weight:600;font-size:.9rem}.product-card-variants{grid-column:span 2;display:flex;align-items:center;justify-content:center;flex-wrap:wrap;padding:0;gap:1rem;max-height:0;transition:all .3s}.product-variant-open{max-height:15vh;height:auto;padding:.5rem}.product-card-variant{padding:.5rem;background-color:#fff;border:1px solid lightgray;border-radius:5px;font-size:1rem;width:4rem;text-align:center;display:none}.product-variant-open>.product-card-variant{display:block}.product-card-variant-active{background-color:#000;color:#fff}.add-to-cart-product-card{text-align:center;padding:.8rem;background:#000;color:#fff;text-decoration:none;text-transform:uppercase;border:0;font-size:1rem}#powered_by_product_card{background:#333333bd;color:#fff;font-size:.6rem;padding:.2rem;display:flex;align-items:center;justify-content:center}#powered_by_product_card span{display:flex;align-items:center;gap:.3rem}:root{--f22stories-circlewidth: "";--f22stories-circlecolor: "";--circleanimationf22stories: }*{margin:0;padding:0;box-sizing:border-box;font-family:inherit;-webkit-tap-highlight-color:transparent}.f22__stories{border-radius:50%;margin-left:10px;text-align:center;cursor:pointer}.f22__stories img{border-radius:50%!important;border:var(--f22stories-circlewidth) solid var(--f22stories-circlecolor)!important;padding:1px!important;height:79px;width:79px;object-fit:cover}.f22_storiesitem{font-size:10px;text-overflow:ellipsis;width:80px;overflow:hidden;white-space:nowrap!important}.f22storiesstyles{border-bottom:1px solid rgba(0,0,0,.1)}#powered_by{height:22px;margin:.3rem 0;display:flex;align-items:center;justify-content:end;margin-bottom:.1rem!important;position:absolute;bottom:6px;z-index:999;left:50%;transform:translate(-50%)}#powered_by span{background:#333333;color:#fff;display:flex;align-items:center;justify-content:center;gap:5px;padding:.2rem .6rem!important;font-size:.5rem}#powered_by span svg{width:16px!important;height:16px!important}.stories_container{overflow-x:scroll;display:flex;padding:10px}.stories_container::-webkit-scrollbar{height:0}.plugin__header{position:absolute;z-index:2147483647;display:flex;width:100%;justify-content:space-between;top:10px;padding:10px;align-items:center}.plugin__header__img{width:34px;height:34px;border-radius:50%;margin-right:8px}.plugin_icon{z-index:10000000000000000000;background:yellowgreen;margin-bottom:10px;border-radius:50%;margin-right:3px}.StoryContainer{position:fixed;top:0;left:0;right:0;bottom:0;background:black;overflow:hidden;z-index:10;max-width:440px;width:100%;margin:0 auto}.StoryContainer video{width:100%;height:100%}.main_StoryContainer_header{z-index:100;position:absolute;width:100%}.StoryContainer_nav{display:flex;justify-content:space-between;align-items:center;padding:10px;margin-top:.7rem}.StoryContainer_nav img{border-radius:50%;height:34px;width:34px;object-fit:cover}.StoryContainer_title{color:#fff;padding-left:10px;margin-bottom:0}.StoryContainer_titlebar{display:flex;align-items:center}.data_img{height:100vh;width:100%;object-fit:cover}.dot{z-index:1000;top:300px;position:absolute;left:200px;height:36px;max-width:168px!important;display:flex;justify-content:center;align-items:center;height:100px;width:100px}.money{color:#fff;font-size:10px;padding-left:10px}.span_className,.span_className:before{height:var(--circleanimationf22stories)!important;width:var(--circleanimationf22stories)!important}.span_className{border-radius:100%;position:absolute;display:flex;align-items:center;justify-content:center;margin:0 4px!important;flex-shrink:0}.span_className:before{content:"";border-radius:inherit;position:absolute;background-color:#7d7d7dbf!important;animation:i-amphtml-animate-in-sequence-dot-before 2s forwards,i-amphtml-pulse-dot-before 2.5s 1.5s infinite}.span_className:after{content:"";height:calc(var(--circleanimationf22stories) * .5);width:calc(var(--circleanimationf22stories) * .5);box-shadow:0 2px 8px #f0f8ff;background-color:#fff!important;position:absolute;animation:i-amphtml-animate-in-sequence-dot-after 2s forwards,i-amphtml-pulse-dot-after 2.5s 3s infinite!important;border-radius:50%}.shopping-tag-pill{--i-amphtml-pill-transform-origin: calc(var(6px) + var(24px) * .5) !important;display:-ms-flexbox!important;display:flex!important;-ms-flex-align:center!important;align-items:center!important;border-radius:18px!important;height:100%!important;overflow:hidden!important;background-color:#7d7d7dbf!important;padding-inline-start:6px;padding-inline-end:12px!important;transform-origin:var(--i-amphtml-pill-transform-origin);animation:i-amphtml-animate-in-sequence-pill 2s forwards,i-amphtml-animate-out-sequence-pill 2s 5s forwards;--clip-path-start-circle-supports-rtl: circle(calc(var(24px) * .5) at calc(var(6px) + var(24px) * .5)) !important;--clip-path-start-circle-supports-rtl: aliceblue;--clip-path-inset-offset-supports-rtl: inset(0 calc(100% - 36px) 0 0 round 30px) !important}@keyframes i-amphtml-animate-in-sequence-pill{0%{animation-timing-function:cubic-bezier(.85,0,.15,1);-webkit-clip-path:var(--clip-path-start-circle-supports-rtl);clip-path:var(--clip-path-start-circle-supports-rtl);transform:scale(0)}20%{-webkit-clip-path:var(--clip-path-start-circle-supports-rtl);clip-path:var(--clip-path-start-circle-supports-rtl)}40%{transform:scale(1)}60%{-webkit-clip-path:var(--clip-path-end-circle-supports-rtl);clip-path:var(--clip-path-end-circle-supports-rtl)}60.001%{animation-timing-function:cubic-bezier(.85,0,.15,1);-webkit-clip-path:var(--clip-path-inset-offset-supports-rtl);clip-path:var(--clip-path-inset-offset-supports-rtl)}to{-webkit-clip-path:inset(0 0 0 0 round 30px);clip-path:inset(0 0 0 0 round 30px)}}@keyframes i-amphtml-animate-out-sequence-pill{0%{-webkit-clip-path:inset(0 0 0 0 round 30px);clip-path:inset(0 0 0 0 round 30px)}40%{animation-timing-function:cubic-bezier(.85,0,.15,1);-webkit-clip-path:var(--clip-path-inset-offset-supports-rtl);clip-path:var(--clip-path-inset-offset-supports-rtl)}60%{transform:scale(1)}to{transform:scale(0);-webkit-clip-path:var(--clip-path-inset-offset-supports-rtl);clip-path:var(--clip-path-inset-offset-supports-rtl)}}@keyframes i-amphtml-animate-in-sequence-dot-before{0%{animation-timing-function:cubic-bezier(.85,0,.15,1);transform:scale(0)}60%{transform:scale(1)}to{transform:scale(1)}}@keyframes i-amphtml-pulse-dot-before{0%{animation-timing-function:cubic-bezier(.83,0,.71,.99);transform:scale(1)}40%{transform:scale(.8)}90%{transform:scale(1)}to{transform:scale(1)}}@keyframes i-amphtml-animate-in-sequence-dot-after{0%{animation-timing-function:cubic-bezier(.85,0,.15,1);transform:scale(0)}40%{transform:scale(1)}to{transform:scale(1)}}@keyframes i-amphtml-pulse-dot-after{0%{animation-timing-function:cubic-bezier(.76,0,.24,1);transform:scale(1)}40%{transform:scale(.8)}90%{transform:scale(1)}to{transform:scale(1)}}.f22storiesdrawer{position:fixed;bottom:0;width:100%;height:0;transition:transform .3s ease-out,height .3s ease-out;overflow:hidden;transform:translateY(100%);will-change:transform,height;z-index:2147483647;max-width:440px}.f22open{height:797px;transform:translateY(0)}.slider{text-align:center;width:100%}.main_icon{width:266px;height:167px;object-fit:contain;margin-bottom:8px}.sm_product_icon{width:61.13px;height:38px;object-fit:contain;margin:0 2px}.container{margin-top:12px}.size_container{display:flex;justify-content:center;width:100%;margin-top:1rem}.atc_button{padding:.7rem 1rem;width:50%;background-color:#000;border:none;outline:none;margin:0 10px;cursor:pointer;color:#fff;text-decoration:none;text-align:center;font-size:15px;border-radius:5px}.atc_button:nth-child(1){background:#fff;color:#000;border:2px solid #000}.playbar{z-index:10000;position:absolute;top:1px;width:100%;overflow:hidden;padding:0 2px;margin-top:6px;display:grid;grid-gap:4px}.playbarinline{background-color:#fff;height:2px;width:100%;display:block!important;transform-origin:left;transition:transform .1s linear;position:absolute;top:0;left:0}.playbarinline__wrapper{position:relative;border-radius:25px;overflow:hidden}.playbarinline__background{background:rgba(0,0,0,.3);width:100%;height:2px;display:block!important;border-radius:25px}.playbar button{padding:10px}.contain{transform:scaleX(1)!important}.none{display:none}.stories_button{height:100vh;width:50%;opacity:0;outline:0;border:0}.plugin-inner_container{z-index:2147483647;height:fit-content;position:absolute;width:100%;bottom:0px;background:white;padding:1rem 0 2.5rem}@media screen and (min-width: 430px){.f22storiesstyles{display:flex!important;align-items:center;justify-content:center}}.prev-arrow{position:absolute;left:0;top:50%;transform:translateY(-50%)}.next-arrow{position:absolute;right:0;top:50%;transform:translateY(-50%)}.arrow-enabled{color:#000!important}.arrow-disabled{color:#d3d3d3!important}#story-overlay{position:fixed;top:0;left:0;width:100vw;height:100vh;background:rgba(0,0,0,.4);backdrop-filter:blur(10px);z-index:9}.story-container-nav-actions{display:flex;justify-content:space-between;align-items:center;gap:1rem}.mute-icon{width:1.2rem;height:1.2rem;color:#fff}.story-container-nav-actions-background{background:#333333bd;border-radius:50%;padding:3px;width:fit-content;display:flex;align-items:center;justify-content:center}'
				)
			),
				document.head.appendChild(t);
		}
	} catch (i) {
		console.error("vite-plugin-css-injected-by-js", i);
	}
})();
(function () {
	"use strict";
	const ie = new Set(),
		Q = new Map();
	new window.MutationObserver((e) => {
		for (const t of e)
			if (t.type === "attributes") {
				const { target: n, attributeName: o, oldValue: c } = t;
				if (Q.has(n)) {
					let [r, _] = Q.get(n);
					if (_.includes(o) || _.length == 0) {
						const u = n.getAttribute(o);
						r(o, c, u, n);
					}
				}
			}
		ie.forEach((t) => t());
	}).observe(document, {
		attributes: !0,
		childList: !0,
		subtree: !0,
		attributeOldValue: !0,
	});
	function cn(e, t) {
		setTimeout(n), ie.add(n);
		function n() {
			document.querySelectorAll(e).forEach((o) => {
				if (!Q.has(o)) {
					const {
						connected: c = () => {},
						disconnected: r = () => {},
						attributeChanged: _ = () => {},
						observedAttributes: u = [],
					} = t(o);
					Q.set(o, [_, u]), c(), _n(e, o, () => r());
				}
			});
		}
	}
	function _n(e, t, n) {
		setTimeout(o), ie.add(o);
		function o() {
			(t && document.contains(t) && t.matches(e)) ||
				(Q.delete(t), ie.delete(o), n());
		}
	}
	var ce,
		$,
		Ie,
		ee,
		Me,
		He,
		_e = {},
		Oe = [],
		sn = /acit|ex(?:s|g|n|p|$)|rph|grid|ows|mnc|ntw|ine[ch]|zoo|^ord|itera/i;
	function B(e, t) {
		for (var n in t) e[n] = t[n];
		return e;
	}
	function Ue(e) {
		var t = e.parentNode;
		t && t.removeChild(e);
	}
	function qe(e, t, n) {
		var o,
			c,
			r,
			_ = {};
		for (r in t)
			r == "key" ? (o = t[r]) : r == "ref" ? (c = t[r]) : (_[r] = t[r]);
		if (
			(arguments.length > 2 &&
				(_.children = arguments.length > 3 ? ce.call(arguments, 2) : n),
			typeof e == "function" && e.defaultProps != null)
		)
			for (r in e.defaultProps) _[r] === void 0 && (_[r] = e.defaultProps[r]);
		return se(e, _, o, c, null);
	}
	function se(e, t, n, o, c) {
		var r = {
			type: e,
			props: t,
			key: n,
			ref: o,
			__k: null,
			__: null,
			__b: 0,
			__e: null,
			__d: void 0,
			__c: null,
			__h: null,
			constructor: void 0,
			__v: c ?? ++Ie,
		};
		return c == null && $.vnode != null && $.vnode(r), r;
	}
	function le(e) {
		return e.children;
	}
	function ae(e, t) {
		(this.props = e), (this.context = t);
	}
	function J(e, t) {
		if (t == null) return e.__ ? J(e.__, e.__.__k.indexOf(e) + 1) : null;
		for (var n; t < e.__k.length; t++)
			if ((n = e.__k[t]) != null && n.__e != null) return n.__e;
		return typeof e.type == "function" ? J(e) : null;
	}
	function ze(e) {
		var t, n;
		if ((e = e.__) != null && e.__c != null) {
			for (e.__e = e.__c.base = null, t = 0; t < e.__k.length; t++)
				if ((n = e.__k[t]) != null && n.__e != null) {
					e.__e = e.__c.base = n.__e;
					break;
				}
			return ze(e);
		}
	}
	function Re(e) {
		((!e.__d && (e.__d = !0) && ee.push(e) && !ue.__r++) ||
			He !== $.debounceRendering) &&
			((He = $.debounceRendering) || Me)(ue);
	}
	function ue() {
		for (var e; (ue.__r = ee.length); )
			(e = ee.sort(function (t, n) {
				return t.__v.__b - n.__v.__b;
			})),
				(ee = []),
				e.some(function (t) {
					var n, o, c, r, _, u;
					t.__d &&
						((_ = (r = (n = t).__v).__e),
						(u = n.__P) &&
							((o = []),
							((c = B({}, r)).__v = r.__v + 1),
							we(
								u,
								r,
								c,
								n.__n,
								u.ownerSVGElement !== void 0,
								r.__h != null ? [_] : null,
								o,
								_ ?? J(r),
								r.__h
							),
							Xe(o, r),
							r.__e != _ && ze(r)));
				});
	}
	function Ve(e, t, n, o, c, r, _, u, d, p) {
		var i,
			h,
			f,
			a,
			s,
			L,
			v,
			w = (o && o.__k) || Oe,
			k = w.length;
		for (n.__k = [], i = 0; i < t.length; i++)
			if (
				(a = n.__k[i] =
					(a = t[i]) == null || typeof a == "boolean"
						? null
						: typeof a == "string" ||
						  typeof a == "number" ||
						  typeof a == "bigint"
						? se(null, a, null, null, a)
						: Array.isArray(a)
						? se(le, { children: a }, null, null, null)
						: a.__b > 0
						? se(a.type, a.props, a.key, null, a.__v)
						: a) != null
			) {
				if (
					((a.__ = n),
					(a.__b = n.__b + 1),
					(f = w[i]) === null || (f && a.key == f.key && a.type === f.type))
				)
					w[i] = void 0;
				else
					for (h = 0; h < k; h++) {
						if ((f = w[h]) && a.key == f.key && a.type === f.type) {
							w[h] = void 0;
							break;
						}
						f = null;
					}
				we(e, a, (f = f || _e), c, r, _, u, d, p),
					(s = a.__e),
					(h = a.ref) &&
						f.ref != h &&
						(v || (v = []),
						f.ref && v.push(f.ref, null, a),
						v.push(h, a.__c || s, a)),
					s != null
						? (L == null && (L = s),
						  typeof a.type == "function" && a.__k === f.__k
								? (a.__d = d = Be(a, d, e))
								: (d = Fe(e, a, f, w, s, d)),
						  typeof n.type == "function" && (n.__d = d))
						: d && f.__e == d && d.parentNode != e && (d = J(f));
			}
		for (n.__e = L, i = k; i--; )
			w[i] != null &&
				(typeof n.type == "function" &&
					w[i].__e != null &&
					w[i].__e == n.__d &&
					(n.__d = J(o, i + 1)),
				Je(w[i], w[i]));
		if (v) for (i = 0; i < v.length; i++) Ge(v[i], v[++i], v[++i]);
	}
	function Be(e, t, n) {
		for (var o, c = e.__k, r = 0; c && r < c.length; r++)
			(o = c[r]) &&
				((o.__ = e),
				(t =
					typeof o.type == "function"
						? Be(o, t, n)
						: Fe(n, o, o, c, o.__e, t)));
		return t;
	}
	function Fe(e, t, n, o, c, r) {
		var _, u, d;
		if (t.__d !== void 0) (_ = t.__d), (t.__d = void 0);
		else if (n == null || c != r || c.parentNode == null)
			e: if (r == null || r.parentNode !== e) e.appendChild(c), (_ = null);
			else {
				for (u = r, d = 0; (u = u.nextSibling) && d < o.length; d += 2)
					if (u == c) break e;
				e.insertBefore(c, r), (_ = r);
			}
		return _ !== void 0 ? _ : c.nextSibling;
	}
	function ln(e, t, n, o, c) {
		var r;
		for (r in n)
			r === "children" || r === "key" || r in t || fe(e, r, null, n[r], o);
		for (r in t)
			(c && typeof t[r] != "function") ||
				r === "children" ||
				r === "key" ||
				r === "value" ||
				r === "checked" ||
				n[r] === t[r] ||
				fe(e, r, t[r], n[r], o);
	}
	function We(e, t, n) {
		t[0] === "-"
			? e.setProperty(t, n)
			: (e[t] =
					n == null ? "" : typeof n != "number" || sn.test(t) ? n : n + "px");
	}
	function fe(e, t, n, o, c) {
		var r;
		e: if (t === "style")
			if (typeof n == "string") e.style.cssText = n;
			else {
				if ((typeof o == "string" && (e.style.cssText = o = ""), o))
					for (t in o) (n && t in n) || We(e.style, t, "");
				if (n) for (t in n) (o && n[t] === o[t]) || We(e.style, t, n[t]);
			}
		else if (t[0] === "o" && t[1] === "n")
			(r = t !== (t = t.replace(/Capture$/, ""))),
				(t = t.toLowerCase() in e ? t.toLowerCase().slice(2) : t.slice(2)),
				e.l || (e.l = {}),
				(e.l[t + r] = n),
				n
					? o || e.addEventListener(t, r ? je : Ze, r)
					: e.removeEventListener(t, r ? je : Ze, r);
		else if (t !== "dangerouslySetInnerHTML") {
			if (c) t = t.replace(/xlink(H|:h)/, "h").replace(/sName$/, "s");
			else if (
				t !== "href" &&
				t !== "list" &&
				t !== "form" &&
				t !== "tabIndex" &&
				t !== "download" &&
				t in e
			)
				try {
					e[t] = n ?? "";
					break e;
				} catch {}
			typeof n == "function" ||
				(n != null && (n !== !1 || (t[0] === "a" && t[1] === "r"))
					? e.setAttribute(t, n)
					: e.removeAttribute(t));
		}
	}
	function Ze(e) {
		this.l[e.type + !1]($.event ? $.event(e) : e);
	}
	function je(e) {
		this.l[e.type + !0]($.event ? $.event(e) : e);
	}
	function we(e, t, n, o, c, r, _, u, d) {
		var p,
			i,
			h,
			f,
			a,
			s,
			L,
			v,
			w,
			k,
			D,
			m = t.type;
		if (t.constructor !== void 0) return null;
		n.__h != null &&
			((d = n.__h), (u = t.__e = n.__e), (t.__h = null), (r = [u])),
			(p = $.__b) && p(t);
		try {
			e: if (typeof m == "function") {
				if (
					((v = t.props),
					(w = (p = m.contextType) && o[p.__c]),
					(k = p ? (w ? w.props.value : p.__) : o),
					n.__c
						? (L = (i = t.__c = n.__c).__ = i.__E)
						: ("prototype" in m && m.prototype.render
								? (t.__c = i = new m(v, k))
								: ((t.__c = i = new ae(v, k)),
								  (i.constructor = m),
								  (i.render = un)),
						  w && w.sub(i),
						  (i.props = v),
						  i.state || (i.state = {}),
						  (i.context = k),
						  (i.__n = o),
						  (h = i.__d = !0),
						  (i.__h = [])),
					i.__s == null && (i.__s = i.state),
					m.getDerivedStateFromProps != null &&
						(i.__s == i.state && (i.__s = B({}, i.__s)),
						B(i.__s, m.getDerivedStateFromProps(v, i.__s))),
					(f = i.props),
					(a = i.state),
					h)
				)
					m.getDerivedStateFromProps == null &&
						i.componentWillMount != null &&
						i.componentWillMount(),
						i.componentDidMount != null && i.__h.push(i.componentDidMount);
				else {
					if (
						(m.getDerivedStateFromProps == null &&
							v !== f &&
							i.componentWillReceiveProps != null &&
							i.componentWillReceiveProps(v, k),
						(!i.__e &&
							i.shouldComponentUpdate != null &&
							i.shouldComponentUpdate(v, i.__s, k) === !1) ||
							t.__v === n.__v)
					) {
						(i.props = v),
							(i.state = i.__s),
							t.__v !== n.__v && (i.__d = !1),
							(i.__v = t),
							(t.__e = n.__e),
							(t.__k = n.__k),
							t.__k.forEach(function (b) {
								b && (b.__ = t);
							}),
							i.__h.length && _.push(i);
						break e;
					}
					i.componentWillUpdate != null && i.componentWillUpdate(v, i.__s, k),
						i.componentDidUpdate != null &&
							i.__h.push(function () {
								i.componentDidUpdate(f, a, s);
							});
				}
				(i.context = k),
					(i.props = v),
					(i.state = i.__s),
					(p = $.__r) && p(t),
					(i.__d = !1),
					(i.__v = t),
					(i.__P = e),
					(p = i.render(i.props, i.state, i.context)),
					(i.state = i.__s),
					i.getChildContext != null && (o = B(B({}, o), i.getChildContext())),
					h ||
						i.getSnapshotBeforeUpdate == null ||
						(s = i.getSnapshotBeforeUpdate(f, a)),
					(D =
						p != null && p.type === le && p.key == null ? p.props.children : p),
					Ve(e, Array.isArray(D) ? D : [D], t, n, o, c, r, _, u, d),
					(i.base = t.__e),
					(t.__h = null),
					i.__h.length && _.push(i),
					L && (i.__E = i.__ = null),
					(i.__e = !1);
			} else
				r == null && t.__v === n.__v
					? ((t.__k = n.__k), (t.__e = n.__e))
					: (t.__e = an(n.__e, t, n, o, c, r, _, d));
			(p = $.diffed) && p(t);
		} catch (b) {
			(t.__v = null),
				(d || r != null) &&
					((t.__e = u), (t.__h = !!d), (r[r.indexOf(u)] = null)),
				$.__e(b, t, n);
		}
	}
	function Xe(e, t) {
		$.__c && $.__c(t, e),
			e.some(function (n) {
				try {
					(e = n.__h),
						(n.__h = []),
						e.some(function (o) {
							o.call(n);
						});
				} catch (o) {
					$.__e(o, n.__v);
				}
			});
	}
	function an(e, t, n, o, c, r, _, u) {
		var d,
			p,
			i,
			h = n.props,
			f = t.props,
			a = t.type,
			s = 0;
		if ((a === "svg" && (c = !0), r != null)) {
			for (; s < r.length; s++)
				if (
					(d = r[s]) &&
					"setAttribute" in d == !!a &&
					(a ? d.localName === a : d.nodeType === 3)
				) {
					(e = d), (r[s] = null);
					break;
				}
		}
		if (e == null) {
			if (a === null) return document.createTextNode(f);
			(e = c
				? document.createElementNS("http://www.w3.org/2000/svg", a)
				: document.createElement(a, f.is && f)),
				(r = null),
				(u = !1);
		}
		if (a === null) h === f || (u && e.data === f) || (e.data = f);
		else {
			if (
				((r = r && ce.call(e.childNodes)),
				(p = (h = n.props || _e).dangerouslySetInnerHTML),
				(i = f.dangerouslySetInnerHTML),
				!u)
			) {
				if (r != null)
					for (h = {}, s = 0; s < e.attributes.length; s++)
						h[e.attributes[s].name] = e.attributes[s].value;
				(i || p) &&
					((i && ((p && i.__html == p.__html) || i.__html === e.innerHTML)) ||
						(e.innerHTML = (i && i.__html) || ""));
			}
			if ((ln(e, f, h, c, u), i)) t.__k = [];
			else if (
				((s = t.props.children),
				Ve(
					e,
					Array.isArray(s) ? s : [s],
					t,
					n,
					o,
					c && a !== "foreignObject",
					r,
					_,
					r ? r[0] : n.__k && J(n, 0),
					u
				),
				r != null)
			)
				for (s = r.length; s--; ) r[s] != null && Ue(r[s]);
			u ||
				("value" in f &&
					(s = f.value) !== void 0 &&
					(s !== e.value ||
						(a === "progress" && !s) ||
						(a === "option" && s !== h.value)) &&
					fe(e, "value", s, h.value, !1),
				"checked" in f &&
					(s = f.checked) !== void 0 &&
					s !== e.checked &&
					fe(e, "checked", s, h.checked, !1));
		}
		return e;
	}
	function Ge(e, t, n) {
		try {
			typeof e == "function" ? e(t) : (e.current = t);
		} catch (o) {
			$.__e(o, n);
		}
	}
	function Je(e, t, n) {
		var o, c;
		if (
			($.unmount && $.unmount(e),
			(o = e.ref) && ((o.current && o.current !== e.__e) || Ge(o, null, t)),
			(o = e.__c) != null)
		) {
			if (o.componentWillUnmount)
				try {
					o.componentWillUnmount();
				} catch (r) {
					$.__e(r, t);
				}
			o.base = o.__P = null;
		}
		if ((o = e.__k))
			for (c = 0; c < o.length; c++)
				o[c] && Je(o[c], t, typeof e.type != "function");
		n || e.__e == null || Ue(e.__e), (e.__e = e.__d = void 0);
	}
	function un(e, t, n) {
		return this.constructor(e, n);
	}
	function fn(e, t, n) {
		var o, c, r;
		$.__ && $.__(e, t),
			(c = (o = typeof n == "function") ? null : (n && n.__k) || t.__k),
			(r = []),
			we(
				t,
				(e = ((!o && n) || t).__k = qe(le, null, [e])),
				c || _e,
				_e,
				t.ownerSVGElement !== void 0,
				!o && n ? [n] : c ? null : t.firstChild ? ce.call(t.childNodes) : null,
				r,
				!o && n ? n : c ? c.__e : t.firstChild,
				o
			),
			Xe(r, e);
	}
	(ce = Oe.slice),
		($ = {
			__e: function (e, t, n, o) {
				for (var c, r, _; (t = t.__); )
					if ((c = t.__c) && !c.__)
						try {
							if (
								((r = c.constructor) &&
									r.getDerivedStateFromError != null &&
									(c.setState(r.getDerivedStateFromError(e)), (_ = c.__d)),
								c.componentDidCatch != null &&
									(c.componentDidCatch(e, o || {}), (_ = c.__d)),
								_)
							)
								return (c.__E = c);
						} catch (u) {
							e = u;
						}
				throw e;
			},
		}),
		(Ie = 0),
		(ae.prototype.setState = function (e, t) {
			var n;
			(n =
				this.__s != null && this.__s !== this.state
					? this.__s
					: (this.__s = B({}, this.state))),
				typeof e == "function" && (e = e(B({}, n), this.props)),
				e && B(n, e),
				e != null && this.__v && (t && this.__h.push(t), Re(this));
		}),
		(ae.prototype.forceUpdate = function (e) {
			this.__v && ((this.__e = !0), e && this.__h.push(e), Re(this));
		}),
		(ae.prototype.render = le),
		(ee = []),
		(Me =
			typeof Promise == "function"
				? Promise.prototype.then.bind(Promise.resolve())
				: setTimeout),
		(ue.__r = 0);
	var de,
		H,
		Ke,
		te = 0,
		Ye = [],
		Qe = $.__b,
		et = $.__r,
		tt = $.diffed,
		nt = $.__c,
		rt = $.unmount;
	function ke(e, t) {
		$.__h && $.__h(H, e, te || t), (te = 0);
		var n = H.__H || (H.__H = { __: [], __h: [] });
		return e >= n.__.length && n.__.push({}), n.__[e];
	}
	function P(e) {
		return (te = 1), dn(st, e);
	}
	function dn(e, t, n) {
		var o = ke(de++, 2);
		return (
			(o.t = e),
			o.__c ||
				((o.__ = [
					n ? n(t) : st(void 0, t),
					function (c) {
						var r = o.t(o.__[0], c);
						o.__[0] !== r && ((o.__ = [r, o.__[1]]), o.__c.setState({}));
					},
				]),
				(o.__c = H)),
			o.__
		);
	}
	function K(e, t) {
		var n = ke(de++, 3);
		!$.__s && _t(n.__H, t) && ((n.__ = e), (n.__H = t), H.__H.__h.push(n));
	}
	function ot(e) {
		return (
			(te = 5),
			it(function () {
				return { current: e };
			}, [])
		);
	}
	function it(e, t) {
		var n = ke(de++, 7);
		return _t(n.__H, t) && ((n.__ = e()), (n.__H = t), (n.__h = e)), n.__;
	}
	function pn(e, t) {
		return (
			(te = 8),
			it(function () {
				return e;
			}, t)
		);
	}
	function hn() {
		for (var e; (e = Ye.shift()); )
			if (e.__P)
				try {
					e.__H.__h.forEach(pe), e.__H.__h.forEach(Se), (e.__H.__h = []);
				} catch (t) {
					(e.__H.__h = []), $.__e(t, e.__v);
				}
	}
	($.__b = function (e) {
		(H = null), Qe && Qe(e);
	}),
		($.__r = function (e) {
			et && et(e), (de = 0);
			var t = (H = e.__c).__H;
			t && (t.__h.forEach(pe), t.__h.forEach(Se), (t.__h = []));
		}),
		($.diffed = function (e) {
			tt && tt(e);
			var t = e.__c;
			t &&
				t.__H &&
				t.__H.__h.length &&
				((Ye.push(t) !== 1 && Ke === $.requestAnimationFrame) ||
					(
						(Ke = $.requestAnimationFrame) ||
						function (n) {
							var o,
								c = function () {
									clearTimeout(r), ct && cancelAnimationFrame(o), setTimeout(n);
								},
								r = setTimeout(c, 100);
							ct && (o = requestAnimationFrame(c));
						}
					)(hn)),
				(H = null);
		}),
		($.__c = function (e, t) {
			t.some(function (n) {
				try {
					n.__h.forEach(pe),
						(n.__h = n.__h.filter(function (o) {
							return !o.__ || Se(o);
						}));
				} catch (o) {
					t.some(function (c) {
						c.__h && (c.__h = []);
					}),
						(t = []),
						$.__e(o, n.__v);
				}
			}),
				nt && nt(e, t);
		}),
		($.unmount = function (e) {
			rt && rt(e);
			var t,
				n = e.__c;
			n &&
				n.__H &&
				(n.__H.__.forEach(function (o) {
					try {
						pe(o);
					} catch (c) {
						t = c;
					}
				}),
				t && $.__e(t, n.__v));
		});
	var ct = typeof requestAnimationFrame == "function";
	function pe(e) {
		var t = H,
			n = e.__c;
		typeof n == "function" && ((e.__c = void 0), n()), (H = t);
	}
	function Se(e) {
		var t = H;
		(e.__c = e.__()), (H = t);
	}
	function _t(e, t) {
		return (
			!e ||
			e.length !== t.length ||
			t.some(function (n, o) {
				return n !== e[o];
			})
		);
	}
	function st(e, t) {
		return typeof t == "function" ? t(e) : t;
	}
	const mn = (e, t, n = [], o) => {
		const c = (r) =>
			fn(
				qe(() => t(r)),
				r
			);
		cn(e, (r) => ({
			connected: () => c(r),
			disconnected: () => o && o(),
			attributeChanged: () => c(r),
			observedAttributes: n,
		}));
	};
	var $e,
		C,
		lt,
		Z,
		at,
		ut,
		Le,
		ft = {},
		dt = [],
		vn = /acit|ex(?:s|g|n|p|$)|rph|grid|ows|mnc|ntw|ine[ch]|zoo|^ord|itera/i;
	function F(e, t) {
		for (var n in t) e[n] = t[n];
		return e;
	}
	function pt(e) {
		var t = e.parentNode;
		t && t.removeChild(e);
	}
	function Ne(e, t, n) {
		var o,
			c,
			r,
			_ = {};
		for (r in t)
			r == "key" ? (o = t[r]) : r == "ref" ? (c = t[r]) : (_[r] = t[r]);
		if (
			(arguments.length > 2 &&
				(_.children = arguments.length > 3 ? $e.call(arguments, 2) : n),
			typeof e == "function" && e.defaultProps != null)
		)
			for (r in e.defaultProps) _[r] === void 0 && (_[r] = e.defaultProps[r]);
		return he(e, _, o, c, null);
	}
	function he(e, t, n, o, c) {
		var r = {
			type: e,
			props: t,
			key: n,
			ref: o,
			__k: null,
			__: null,
			__b: 0,
			__e: null,
			__d: void 0,
			__c: null,
			__h: null,
			constructor: void 0,
			__v: c ?? ++lt,
		};
		return c == null && C.vnode != null && C.vnode(r), r;
	}
	function W(e) {
		return e.children;
	}
	function q(e, t) {
		(this.props = e), (this.context = t);
	}
	function ne(e, t) {
		if (t == null) return e.__ ? ne(e.__, e.__.__k.indexOf(e) + 1) : null;
		for (var n; t < e.__k.length; t++)
			if ((n = e.__k[t]) != null && n.__e != null) return n.__e;
		return typeof e.type == "function" ? ne(e) : null;
	}
	function ht(e) {
		var t, n;
		if ((e = e.__) != null && e.__c != null) {
			for (e.__e = e.__c.base = null, t = 0; t < e.__k.length; t++)
				if ((n = e.__k[t]) != null && n.__e != null) {
					e.__e = e.__c.base = n.__e;
					break;
				}
			return ht(e);
		}
	}
	function mt(e) {
		((!e.__d && (e.__d = !0) && Z.push(e) && !me.__r++) ||
			at !== C.debounceRendering) &&
			((at = C.debounceRendering) || ut)(me);
	}
	function me() {
		var e, t, n, o, c, r, _, u;
		for (Z.sort(Le); (e = Z.shift()); )
			e.__d &&
				((t = Z.length),
				(o = void 0),
				(c = void 0),
				(_ = (r = (n = e).__v).__e),
				(u = n.__P) &&
					((o = []),
					((c = F({}, r)).__v = r.__v + 1),
					St(
						u,
						r,
						c,
						n.__n,
						u.ownerSVGElement !== void 0,
						r.__h != null ? [_] : null,
						o,
						_ ?? ne(r),
						r.__h
					),
					gn(o, r),
					r.__e != _ && ht(r)),
				Z.length > t && Z.sort(Le));
		me.__r = 0;
	}
	function vt(e, t, n, o, c, r, _, u, d, p) {
		var i,
			h,
			f,
			a,
			s,
			L,
			v,
			w = (o && o.__k) || dt,
			k = w.length;
		for (n.__k = [], i = 0; i < t.length; i++)
			if (
				(a = n.__k[i] =
					(a = t[i]) == null || typeof a == "boolean" || typeof a == "function"
						? null
						: typeof a == "string" ||
						  typeof a == "number" ||
						  typeof a == "bigint"
						? he(null, a, null, null, a)
						: Array.isArray(a)
						? he(W, { children: a }, null, null, null)
						: a.__b > 0
						? he(a.type, a.props, a.key, a.ref ? a.ref : null, a.__v)
						: a) != null
			) {
				if (
					((a.__ = n),
					(a.__b = n.__b + 1),
					(f = w[i]) === null || (f && a.key == f.key && a.type === f.type))
				)
					w[i] = void 0;
				else
					for (h = 0; h < k; h++) {
						if ((f = w[h]) && a.key == f.key && a.type === f.type) {
							w[h] = void 0;
							break;
						}
						f = null;
					}
				St(e, a, (f = f || ft), c, r, _, u, d, p),
					(s = a.__e),
					(h = a.ref) &&
						f.ref != h &&
						(v || (v = []),
						f.ref && v.push(f.ref, null, a),
						v.push(h, a.__c || s, a)),
					s != null
						? (L == null && (L = s),
						  typeof a.type == "function" && a.__k === f.__k
								? (a.__d = d = yt(a, d, e))
								: (d = gt(e, a, f, w, s, d)),
						  typeof n.type == "function" && (n.__d = d))
						: d && f.__e == d && d.parentNode != e && (d = ne(f));
			}
		for (n.__e = L, i = k; i--; )
			w[i] != null &&
				(typeof n.type == "function" &&
					w[i].__e != null &&
					w[i].__e == n.__d &&
					(n.__d = Ct(o).nextSibling),
				Lt(w[i], w[i]));
		if (v) for (i = 0; i < v.length; i++) $t(v[i], v[++i], v[++i]);
	}
	function yt(e, t, n) {
		for (var o, c = e.__k, r = 0; c && r < c.length; r++)
			(o = c[r]) &&
				((o.__ = e),
				(t =
					typeof o.type == "function"
						? yt(o, t, n)
						: gt(n, o, o, c, o.__e, t)));
		return t;
	}
	function ve(e, t) {
		return (
			(t = t || []),
			e == null ||
				typeof e == "boolean" ||
				(Array.isArray(e)
					? e.some(function (n) {
							ve(n, t);
					  })
					: t.push(e)),
			t
		);
	}
	function gt(e, t, n, o, c, r) {
		var _, u, d;
		if (t.__d !== void 0) (_ = t.__d), (t.__d = void 0);
		else if (n == null || c != r || c.parentNode == null)
			e: if (r == null || r.parentNode !== e) e.appendChild(c), (_ = null);
			else {
				for (u = r, d = 0; (u = u.nextSibling) && d < o.length; d += 1)
					if (u == c) break e;
				e.insertBefore(c, r), (_ = r);
			}
		return _ !== void 0 ? _ : c.nextSibling;
	}
	function Ct(e) {
		var t, n, o;
		if (e.type == null || typeof e.type == "string") return e.__e;
		if (e.__k) {
			for (t = e.__k.length - 1; t >= 0; t--)
				if ((n = e.__k[t]) && (o = Ct(n))) return o;
		}
		return null;
	}
	function yn(e, t, n, o, c) {
		var r;
		for (r in n)
			r === "children" || r === "key" || r in t || ye(e, r, null, n[r], o);
		for (r in t)
			(c && typeof t[r] != "function") ||
				r === "children" ||
				r === "key" ||
				r === "value" ||
				r === "checked" ||
				n[r] === t[r] ||
				ye(e, r, t[r], n[r], o);
	}
	function bt(e, t, n) {
		t[0] === "-"
			? e.setProperty(t, n ?? "")
			: (e[t] =
					n == null ? "" : typeof n != "number" || vn.test(t) ? n : n + "px");
	}
	function ye(e, t, n, o, c) {
		var r;
		e: if (t === "style")
			if (typeof n == "string") e.style.cssText = n;
			else {
				if ((typeof o == "string" && (e.style.cssText = o = ""), o))
					for (t in o) (n && t in n) || bt(e.style, t, "");
				if (n) for (t in n) (o && n[t] === o[t]) || bt(e.style, t, n[t]);
			}
		else if (t[0] === "o" && t[1] === "n")
			(r = t !== (t = t.replace(/Capture$/, ""))),
				(t = t.toLowerCase() in e ? t.toLowerCase().slice(2) : t.slice(2)),
				e.l || (e.l = {}),
				(e.l[t + r] = n),
				n
					? o || e.addEventListener(t, r ? kt : wt, r)
					: e.removeEventListener(t, r ? kt : wt, r);
		else if (t !== "dangerouslySetInnerHTML") {
			if (c) t = t.replace(/xlink(H|:h)/, "h").replace(/sName$/, "s");
			else if (
				t !== "width" &&
				t !== "height" &&
				t !== "href" &&
				t !== "list" &&
				t !== "form" &&
				t !== "tabIndex" &&
				t !== "download" &&
				t in e
			)
				try {
					e[t] = n ?? "";
					break e;
				} catch {}
			typeof n == "function" ||
				(n == null || (n === !1 && t[4] !== "-")
					? e.removeAttribute(t)
					: e.setAttribute(t, n));
		}
	}
	function wt(e) {
		return this.l[e.type + !1](C.event ? C.event(e) : e);
	}
	function kt(e) {
		return this.l[e.type + !0](C.event ? C.event(e) : e);
	}
	function St(e, t, n, o, c, r, _, u, d) {
		var p,
			i,
			h,
			f,
			a,
			s,
			L,
			v,
			w,
			k,
			D,
			m,
			b,
			N,
			y,
			S = t.type;
		if (t.constructor !== void 0) return null;
		n.__h != null &&
			((d = n.__h), (u = t.__e = n.__e), (t.__h = null), (r = [u])),
			(p = C.__b) && p(t);
		try {
			e: if (typeof S == "function") {
				if (
					((v = t.props),
					(w = (p = S.contextType) && o[p.__c]),
					(k = p ? (w ? w.props.value : p.__) : o),
					n.__c
						? (L = (i = t.__c = n.__c).__ = i.__E)
						: ("prototype" in S && S.prototype.render
								? (t.__c = i = new S(v, k))
								: ((t.__c = i = new q(v, k)),
								  (i.constructor = S),
								  (i.render = bn)),
						  w && w.sub(i),
						  (i.props = v),
						  i.state || (i.state = {}),
						  (i.context = k),
						  (i.__n = o),
						  (h = i.__d = !0),
						  (i.__h = []),
						  (i._sb = [])),
					i.__s == null && (i.__s = i.state),
					S.getDerivedStateFromProps != null &&
						(i.__s == i.state && (i.__s = F({}, i.__s)),
						F(i.__s, S.getDerivedStateFromProps(v, i.__s))),
					(f = i.props),
					(a = i.state),
					(i.__v = t),
					h)
				)
					S.getDerivedStateFromProps == null &&
						i.componentWillMount != null &&
						i.componentWillMount(),
						i.componentDidMount != null && i.__h.push(i.componentDidMount);
				else {
					if (
						(S.getDerivedStateFromProps == null &&
							v !== f &&
							i.componentWillReceiveProps != null &&
							i.componentWillReceiveProps(v, k),
						(!i.__e &&
							i.shouldComponentUpdate != null &&
							i.shouldComponentUpdate(v, i.__s, k) === !1) ||
							t.__v === n.__v)
					) {
						for (
							t.__v !== n.__v &&
								((i.props = v), (i.state = i.__s), (i.__d = !1)),
								i.__e = !1,
								t.__e = n.__e,
								t.__k = n.__k,
								t.__k.forEach(function (A) {
									A && (A.__ = t);
								}),
								D = 0;
							D < i._sb.length;
							D++
						)
							i.__h.push(i._sb[D]);
						(i._sb = []), i.__h.length && _.push(i);
						break e;
					}
					i.componentWillUpdate != null && i.componentWillUpdate(v, i.__s, k),
						i.componentDidUpdate != null &&
							i.__h.push(function () {
								i.componentDidUpdate(f, a, s);
							});
				}
				if (
					((i.context = k),
					(i.props = v),
					(i.__P = e),
					(m = C.__r),
					(b = 0),
					"prototype" in S && S.prototype.render)
				) {
					for (
						i.state = i.__s,
							i.__d = !1,
							m && m(t),
							p = i.render(i.props, i.state, i.context),
							N = 0;
						N < i._sb.length;
						N++
					)
						i.__h.push(i._sb[N]);
					i._sb = [];
				} else
					do
						(i.__d = !1),
							m && m(t),
							(p = i.render(i.props, i.state, i.context)),
							(i.state = i.__s);
					while (i.__d && ++b < 25);
				(i.state = i.__s),
					i.getChildContext != null && (o = F(F({}, o), i.getChildContext())),
					h ||
						i.getSnapshotBeforeUpdate == null ||
						(s = i.getSnapshotBeforeUpdate(f, a)),
					(y =
						p != null && p.type === W && p.key == null ? p.props.children : p),
					vt(e, Array.isArray(y) ? y : [y], t, n, o, c, r, _, u, d),
					(i.base = t.__e),
					(t.__h = null),
					i.__h.length && _.push(i),
					L && (i.__E = i.__ = null),
					(i.__e = !1);
			} else
				r == null && t.__v === n.__v
					? ((t.__k = n.__k), (t.__e = n.__e))
					: (t.__e = Cn(n.__e, t, n, o, c, r, _, d));
			(p = C.diffed) && p(t);
		} catch (A) {
			(t.__v = null),
				(d || r != null) &&
					((t.__e = u), (t.__h = !!d), (r[r.indexOf(u)] = null)),
				C.__e(A, t, n);
		}
	}
	function gn(e, t) {
		C.__c && C.__c(t, e),
			e.some(function (n) {
				try {
					(e = n.__h),
						(n.__h = []),
						e.some(function (o) {
							o.call(n);
						});
				} catch (o) {
					C.__e(o, n.__v);
				}
			});
	}
	function Cn(e, t, n, o, c, r, _, u) {
		var d,
			p,
			i,
			h = n.props,
			f = t.props,
			a = t.type,
			s = 0;
		if ((a === "svg" && (c = !0), r != null)) {
			for (; s < r.length; s++)
				if (
					(d = r[s]) &&
					"setAttribute" in d == !!a &&
					(a ? d.localName === a : d.nodeType === 3)
				) {
					(e = d), (r[s] = null);
					break;
				}
		}
		if (e == null) {
			if (a === null) return document.createTextNode(f);
			(e = c
				? document.createElementNS("http://www.w3.org/2000/svg", a)
				: document.createElement(a, f.is && f)),
				(r = null),
				(u = !1);
		}
		if (a === null) h === f || (u && e.data === f) || (e.data = f);
		else {
			if (
				((r = r && $e.call(e.childNodes)),
				(p = (h = n.props || ft).dangerouslySetInnerHTML),
				(i = f.dangerouslySetInnerHTML),
				!u)
			) {
				if (r != null)
					for (h = {}, s = 0; s < e.attributes.length; s++)
						h[e.attributes[s].name] = e.attributes[s].value;
				(i || p) &&
					((i && ((p && i.__html == p.__html) || i.__html === e.innerHTML)) ||
						(e.innerHTML = (i && i.__html) || ""));
			}
			if ((yn(e, f, h, c, u), i)) t.__k = [];
			else if (
				((s = t.props.children),
				vt(
					e,
					Array.isArray(s) ? s : [s],
					t,
					n,
					o,
					c && a !== "foreignObject",
					r,
					_,
					r ? r[0] : n.__k && ne(n, 0),
					u
				),
				r != null)
			)
				for (s = r.length; s--; ) r[s] != null && pt(r[s]);
			u ||
				("value" in f &&
					(s = f.value) !== void 0 &&
					(s !== e.value ||
						(a === "progress" && !s) ||
						(a === "option" && s !== h.value)) &&
					ye(e, "value", s, h.value, !1),
				"checked" in f &&
					(s = f.checked) !== void 0 &&
					s !== e.checked &&
					ye(e, "checked", s, h.checked, !1));
		}
		return e;
	}
	function $t(e, t, n) {
		try {
			typeof e == "function" ? e(t) : (e.current = t);
		} catch (o) {
			C.__e(o, n);
		}
	}
	function Lt(e, t, n) {
		var o, c;
		if (
			(C.unmount && C.unmount(e),
			(o = e.ref) && ((o.current && o.current !== e.__e) || $t(o, null, t)),
			(o = e.__c) != null)
		) {
			if (o.componentWillUnmount)
				try {
					o.componentWillUnmount();
				} catch (r) {
					C.__e(r, t);
				}
			(o.base = o.__P = null), (e.__c = void 0);
		}
		if ((o = e.__k))
			for (c = 0; c < o.length; c++)
				o[c] && Lt(o[c], t, n || typeof e.type != "function");
		n || e.__e == null || pt(e.__e), (e.__ = e.__e = e.__d = void 0);
	}
	function bn(e, t, n) {
		return this.constructor(e, n);
	}
	($e = dt.slice),
		(C = {
			__e: function (e, t, n, o) {
				for (var c, r, _; (t = t.__); )
					if ((c = t.__c) && !c.__)
						try {
							if (
								((r = c.constructor) &&
									r.getDerivedStateFromError != null &&
									(c.setState(r.getDerivedStateFromError(e)), (_ = c.__d)),
								c.componentDidCatch != null &&
									(c.componentDidCatch(e, o || {}), (_ = c.__d)),
								_)
							)
								return (c.__E = c);
						} catch (u) {
							e = u;
						}
				throw e;
			},
		}),
		(lt = 0),
		(q.prototype.setState = function (e, t) {
			var n;
			(n =
				this.__s != null && this.__s !== this.state
					? this.__s
					: (this.__s = F({}, this.state))),
				typeof e == "function" && (e = e(F({}, n), this.props)),
				e && F(n, e),
				e != null && this.__v && (t && this._sb.push(t), mt(this));
		}),
		(q.prototype.forceUpdate = function (e) {
			this.__v && ((this.__e = !0), e && this.__h.push(e), mt(this));
		}),
		(q.prototype.render = W),
		(Z = []),
		(ut =
			typeof Promise == "function"
				? Promise.prototype.then.bind(Promise.resolve())
				: setTimeout),
		(Le = function (e, t) {
			return e.__v.__b - t.__v.__b;
		}),
		(me.__r = 0);
	var wn = 0;
	function l(e, t, n, o, c, r) {
		var _,
			u,
			d = {};
		for (u in t) u == "ref" ? (_ = t[u]) : (d[u] = t[u]);
		var p = {
			type: e,
			props: d,
			key: n,
			ref: _,
			__k: null,
			__: null,
			__b: 0,
			__e: null,
			__d: void 0,
			__c: null,
			__h: null,
			constructor: void 0,
			__v: --wn,
			__source: c,
			__self: r,
		};
		if (typeof e == "function" && (_ = e.defaultProps))
			for (u in _) d[u] === void 0 && (d[u] = _[u]);
		return C.vnode && C.vnode(p), p;
	}
	function kn({ onclose: e, fetchUsers: t }) {
		return l("svg", {
			width: "20",
			height: "20",
			viewBox: "0 0 20 20",
			fill: "none",
			xmlns: "http://www.w3.org/2000/svg",
			onClick: () => {
				e(), t();
			},
			children: l("path", {
				d: "M13.5306 7.53063L11.0603 10L13.5306 12.4694C13.6003 12.5391 13.6556 12.6218 13.6933 12.7128C13.731 12.8039 13.7504 12.9015 13.7504 13C13.7504 13.0985 13.731 13.1961 13.6933 13.2872C13.6556 13.3782 13.6003 13.4609 13.5306 13.5306C13.4609 13.6003 13.3782 13.6556 13.2872 13.6933C13.1961 13.731 13.0986 13.7504 13 13.7504C12.9015 13.7504 12.8039 13.731 12.7128 13.6933C12.6218 13.6556 12.5391 13.6003 12.4694 13.5306L10 11.0603L7.53063 13.5306C7.46095 13.6003 7.37822 13.6556 7.28718 13.6933C7.19613 13.731 7.09855 13.7504 7 13.7504C6.90146 13.7504 6.80388 13.731 6.71283 13.6933C6.62179 13.6556 6.53906 13.6003 6.46938 13.5306C6.3997 13.4609 6.34442 13.3782 6.30671 13.2872C6.269 13.1961 6.24959 13.0985 6.24959 13C6.24959 12.9015 6.269 12.8039 6.30671 12.7128C6.34442 12.6218 6.3997 12.5391 6.46938 12.4694L8.93969 10L6.46938 7.53063C6.32865 7.38989 6.24959 7.19902 6.24959 7C6.24959 6.80098 6.32865 6.61011 6.46938 6.46937C6.61011 6.32864 6.80098 6.24958 7 6.24958C7.19903 6.24958 7.3899 6.32864 7.53063 6.46937L10 8.93969L12.4694 6.46937C12.5391 6.39969 12.6218 6.34442 12.7128 6.3067C12.8039 6.26899 12.9015 6.24958 13 6.24958C13.0986 6.24958 13.1961 6.26899 13.2872 6.3067C13.3782 6.34442 13.4609 6.39969 13.5306 6.46937C13.6003 6.53906 13.6556 6.62178 13.6933 6.71283C13.731 6.80387 13.7504 6.90145 13.7504 7C13.7504 7.09855 13.731 7.19613 13.6933 7.28717C13.6556 7.37822 13.6003 7.46094 13.5306 7.53063ZM19.75 10C19.75 11.9284 19.1782 13.8134 18.1068 15.4168C17.0355 17.0202 15.5127 18.2699 13.7312 19.0078C11.9496 19.7458 9.98919 19.9389 8.09787 19.5627C6.20656 19.1865 4.46928 18.2579 3.10571 16.8943C1.74215 15.5307 0.813554 13.7934 0.437348 11.9021C0.061142 10.0108 0.254225 8.05042 0.992179 6.26884C1.73013 4.48726 2.97982 2.96451 4.58319 1.89317C6.18657 0.821828 8.07164 0.25 10 0.25C12.585 0.25273 15.0634 1.28084 16.8913 3.10872C18.7192 4.93661 19.7473 7.41498 19.75 10ZM18.25 10C18.25 8.3683 17.7661 6.77325 16.8596 5.41655C15.9531 4.05984 14.6646 3.00242 13.1571 2.37799C11.6497 1.75357 9.99085 1.59019 8.39051 1.90852C6.79017 2.22685 5.32016 3.01259 4.16637 4.16637C3.01259 5.32015 2.22685 6.79016 1.90853 8.3905C1.5902 9.99085 1.75358 11.6496 2.378 13.1571C3.00242 14.6646 4.05984 15.9531 5.41655 16.8596C6.77326 17.7661 8.36831 18.25 10 18.25C12.1873 18.2475 14.2843 17.3775 15.8309 15.8309C17.3775 14.2843 18.2475 12.1873 18.25 10Z",
				fill: "white",
			}),
		});
	}
	const tr = "",
		Sn = {
			apiKey: "AIzaSyDDEN0_pR1eB7OO0X5Vqf7mLXhWvgcssSU",
			authDomain: "f22stories.firebaseapp.com",
			projectId: "f22stories",
			storageBucket: "f22stories.appspot.com",
			messagingSenderId: "624176465099",
			appId: "1:624176465099:web:904082c5adacf5c543474e",
			measurementId: "G-GMF2DSK271",
		},
		Nt = () =>
			new Promise((e, t) => {
				const n = document.createElement("script");
				(n.src = "https://www.gstatic.com/firebasejs/8.6.1/firebase-app.js"),
					(n.async = !0),
					(n.onload = () => {
						const o = document.createElement("script");
						(o.src =
							"https://www.gstatic.com/firebasejs/8.6.1/firebase-firestore.js"),
							(o.onload = () => {
								window.firebase.initializeApp(Sn),
									window.firebase.firestore(),
									e(window.firebase);
							}),
							document.body.appendChild(o);
					}),
					(n.onerror = (o) => {
						t(o);
					}),
					document.body.appendChild(n);
			});
	async function j(e) {
		const t = window.Shopify.shop.replace(".myshopify.com", ""),
			o = window.firebase.firestore().collection(t),
			c = "analytics",
			_ = o.doc(c).collection(e),
			d = { timestamp: new Date(), count: 1 };
		_.add(d);
	}
	function $n({
		productimages: e,
		productTitle: t,
		productName: n,
		productPrice: o,
		productVariants: c,
		setVariant: r,
		isSizeOpen: _,
		setIsSizeOpen: u,
		setIsOpen: d,
		videoRef: p,
		startProgress: i,
	}) {
		const [h, f] = P({
			currentImg: e[0].image,
			currentImgIndex: 0,
			imgData: e,
			currentSizeIndex: 0,
			currentSize: c[0].title,
			sizeData: c,
			totalSlides: e.length,
		});
		K(() => {
			f({
				currentImg: e[0].image,
				currentImgIndex: 0,
				imgData: e,
				currentSizeIndex: 0,
				currentSize: c[0].title,
				sizeData: c,
				totalSlides: e.length,
				totalSizeSlides: c.length,
			});
		}, [e[0].image]);
		const a = (s) => {
			const L = h.sizeData[s];
			r(L), f({ ...h, currentSize: L.title, currentSizeIndex: s }), u(!_);
		};
		return l("div", {
			className: "custom-slider-container",
			children: [
				l("div", {
					className: "nav-icons",
					children: [
						l("a", {
							href: `https://deciwood.com/products/${n}`,
							target: "__blank",
							onClick: () => j("VIEW_PRODUCT"),
							children: l("svg", {
								width: "20",
								height: "20",
								viewBox: "0 0 18 18",
								fill: "none",
								xmlns: "http://www.w3.org/2000/svg",
								children: l("path", {
									d: "M18 6.75C18 6.94891 17.921 7.13968 17.7803 7.28033C17.6397 7.42098 17.4489 7.5 17.25 7.5C17.0511 7.5 16.8603 7.42098 16.7197 7.28033C16.579 7.13968 16.5 6.94891 16.5 6.75V2.56125L10.2816 8.78063C10.1408 8.92136 9.94996 9.00042 9.75094 9.00042C9.55191 9.00042 9.36104 8.92136 9.22031 8.78063C9.07958 8.63989 9.00052 8.44902 9.00052 8.25C9.00052 8.05098 9.07958 7.86011 9.22031 7.71937L15.4387 1.5H11.25C11.0511 1.5 10.8603 1.42098 10.7197 1.28033C10.579 1.13968 10.5 0.948912 10.5 0.75C10.5 0.551088 10.579 0.360322 10.7197 0.21967C10.8603 0.0790178 11.0511 0 11.25 0H17.25C17.4489 0 17.6397 0.0790178 17.7803 0.21967C17.921 0.360322 18 0.551088 18 0.75V6.75ZM14.25 9C14.0511 9 13.8603 9.07902 13.7197 9.21967C13.579 9.36032 13.5 9.55109 13.5 9.75V16.5H1.5V4.5H8.25C8.44891 4.5 8.63968 4.42098 8.78033 4.28033C8.92098 4.13968 9 3.94891 9 3.75C9 3.55109 8.92098 3.36032 8.78033 3.21967C8.63968 3.07902 8.44891 3 8.25 3H1.5C1.10218 3 0.720644 3.15804 0.43934 3.43934C0.158035 3.72064 0 4.10218 0 4.5V16.5C0 16.8978 0.158035 17.2794 0.43934 17.5607C0.720644 17.842 1.10218 18 1.5 18H13.5C13.8978 18 14.2794 17.842 14.5607 17.5607C14.842 17.2794 15 16.8978 15 16.5V9.75C15 9.55109 14.921 9.36032 14.7803 9.21967C14.6397 9.07902 14.4489 9 14.25 9Z",
									fill: "black",
								}),
							}),
						}),
						l("svg", {
							width: "20",
							height: "20",
							viewBox: "0 0 20 20",
							fill: "none",
							xmlns: "http://www.w3.org/2000/svg",
							onClick: () => {
								d(!1), i(), p.current.play();
							},
							children: l("path", {
								d: "M10 0.25C8.07164 0.25 6.18657 0.821828 4.58319 1.89317C2.97982 2.96451 1.73013 4.48726 0.992179 6.26884C0.254225 8.05042 0.061142 10.0108 0.437348 11.9021C0.813554 13.7934 1.74215 15.5307 3.10571 16.8943C4.46928 18.2579 6.20656 19.1865 8.09787 19.5627C9.98919 19.9389 11.9496 19.7458 13.7312 19.0078C15.5127 18.2699 17.0355 17.0202 18.1068 15.4168C19.1782 13.8134 19.75 11.9284 19.75 10C19.7473 7.41498 18.7192 4.93661 16.8913 3.10872C15.0634 1.28084 12.585 0.25273 10 0.25ZM10 18.25C8.36831 18.25 6.77326 17.7661 5.41655 16.8596C4.05984 15.9531 3.00242 14.6646 2.378 13.1571C1.75358 11.6496 1.5902 9.99085 1.90853 8.3905C2.22685 6.79016 3.01259 5.32015 4.16637 4.16637C5.32016 3.01259 6.79017 2.22685 8.39051 1.90852C9.99085 1.59019 11.6497 1.75357 13.1571 2.37799C14.6646 3.00242 15.9531 4.05984 16.8596 5.41655C17.7661 6.77325 18.25 8.3683 18.25 10C18.2475 12.1873 17.3775 14.2843 15.8309 15.8309C14.2843 17.3775 12.1873 18.2475 10 18.25ZM14.2806 7.96937C14.3504 8.03903 14.4057 8.12175 14.4434 8.21279C14.4812 8.30384 14.5006 8.40144 14.5006 8.5C14.5006 8.59856 14.4812 8.69616 14.4434 8.7872C14.4057 8.87825 14.3504 8.96097 14.2806 9.03063L10.5306 12.7806C10.461 12.8504 10.3783 12.9057 10.2872 12.9434C10.1962 12.9812 10.0986 13.0006 10 13.0006C9.90144 13.0006 9.80385 12.9812 9.7128 12.9434C9.62175 12.9057 9.53903 12.8504 9.46938 12.7806L5.71938 9.03063C5.57865 8.88989 5.49959 8.69902 5.49959 8.5C5.49959 8.30098 5.57865 8.11011 5.71938 7.96937C5.86011 7.82864 6.05098 7.74958 6.25 7.74958C6.44903 7.74958 6.6399 7.82864 6.78063 7.96937L10 11.1897L13.2194 7.96937C13.289 7.89964 13.3718 7.84432 13.4628 7.80658C13.5538 7.76884 13.6514 7.74941 13.75 7.74941C13.8486 7.74941 13.9462 7.76884 14.0372 7.80658C14.1283 7.84432 14.211 7.89964 14.2806 7.96937Z",
								fill: "black",
							}),
						}),
					],
				}),
				l("div", {
					className: "prod-desc",
					children: l("div", {
						className: "prod-info",
						children: [
							l("a", {
								href: `https://deciwood.com/products/${n}`,
								onClick: () => j("VIEW_PRODUCT"),
								children: l("h5", {
									style: {
										fontSize: "14px",
										marginBottom: ".5rem",
										width: "80%",
									},
									children: t,
								}),
							}),
							l("h5", {
								style: { fontSize: "14px" },
								children: ["Rs. ", o, " "],
							}),
						],
					}),
				}),
				l("div", {
					id: "main__container",
					children: l("a", {
						href: `https://deciwood.com/products/${n}`,
						style: { textDecoration: "none" },
						onClick: () => j("VIEW_PRODUCT"),
						children: l("div", {
							className: "prod-images",
							children: h.imgData.map((s) =>
								l("div", {
									className: "prod-image",
									children: l("img", {
										src: s.image,
										alt: s.title,
										style: { maxWidth: "fit-content !important" },
										loading: "eager",
									}),
								})
							),
						}),
					}),
				}),
				h.sizeData.length > 1 &&
					l("div", {
						className: "all__slides__container",
						children: l("div", {
							className: "all_slides",
							children: l("div", {
								className: "slider__container",
								children:
									h.sizeData &&
									h.sizeData.map((s, L) =>
										l(
											"div",
											{
												className: `slide__container ${
													h.currentSizeIndex === L ? "active__size" : ""
												}`,
												onClick: () => a(L),
												style: {
													color: `${
														h.currentSizeIndex === L ? "#fff" : "#000"
													}`,
												},
												children: l("h6", {
													className: "size__text",
													children: s == null ? void 0 : s.title,
												}),
											},
											s.id
										)
									),
							}),
						}),
					}),
			],
		});
	}
	var U,
		xe,
		xt,
		Pt = [],
		Pe = [],
		At = C.__b,
		Tt = C.__r,
		Dt = C.diffed,
		Et = C.__c,
		It = C.unmount;
	function Ln() {
		for (var e; (e = Pt.shift()); )
			if (e.__P && e.__H)
				try {
					e.__H.__h.forEach(ge), e.__H.__h.forEach(Ae), (e.__H.__h = []);
				} catch (t) {
					(e.__H.__h = []), C.__e(t, e.__v);
				}
	}
	(C.__b = function (e) {
		(U = null), At && At(e);
	}),
		(C.__r = function (e) {
			Tt && Tt(e);
			var t = (U = e.__c).__H;
			t &&
				(xe === U
					? ((t.__h = []),
					  (U.__h = []),
					  t.__.forEach(function (n) {
							n.__N && (n.__ = n.__N), (n.__V = Pe), (n.__N = n.i = void 0);
					  }))
					: (t.__h.forEach(ge), t.__h.forEach(Ae), (t.__h = []))),
				(xe = U);
		}),
		(C.diffed = function (e) {
			Dt && Dt(e);
			var t = e.__c;
			t &&
				t.__H &&
				(t.__H.__h.length &&
					((Pt.push(t) !== 1 && xt === C.requestAnimationFrame) ||
						((xt = C.requestAnimationFrame) || Nn)(Ln)),
				t.__H.__.forEach(function (n) {
					n.i && (n.__H = n.i),
						n.__V !== Pe && (n.__ = n.__V),
						(n.i = void 0),
						(n.__V = Pe);
				})),
				(xe = U = null);
		}),
		(C.__c = function (e, t) {
			t.some(function (n) {
				try {
					n.__h.forEach(ge),
						(n.__h = n.__h.filter(function (o) {
							return !o.__ || Ae(o);
						}));
				} catch (o) {
					t.some(function (c) {
						c.__h && (c.__h = []);
					}),
						(t = []),
						C.__e(o, n.__v);
				}
			}),
				Et && Et(e, t);
		}),
		(C.unmount = function (e) {
			It && It(e);
			var t,
				n = e.__c;
			n &&
				n.__H &&
				(n.__H.__.forEach(function (o) {
					try {
						ge(o);
					} catch (c) {
						t = c;
					}
				}),
				(n.__H = void 0),
				t && C.__e(t, n.__v));
		});
	var Mt = typeof requestAnimationFrame == "function";
	function Nn(e) {
		var t,
			n = function () {
				clearTimeout(o), Mt && cancelAnimationFrame(t), setTimeout(e);
			},
			o = setTimeout(n, 100);
		Mt && (t = requestAnimationFrame(n));
	}
	function ge(e) {
		var t = U,
			n = e.__c;
		typeof n == "function" && ((e.__c = void 0), n()), (U = t);
	}
	function Ae(e) {
		var t = U;
		(e.__c = e.__()), (U = t);
	}
	function xn(e, t) {
		for (var n in t) e[n] = t[n];
		return e;
	}
	function Te(e, t) {
		for (var n in e) if (n !== "__source" && !(n in t)) return !0;
		for (var o in t) if (o !== "__source" && e[o] !== t[o]) return !0;
		return !1;
	}
	function Ht(e) {
		this.props = e;
	}
	function Pn(e, t) {
		function n(c) {
			var r = this.props.ref,
				_ = r == c.ref;
			return (
				!_ && r && (r.call ? r(null) : (r.current = null)),
				t ? !t(this.props, c) || !_ : Te(this.props, c)
			);
		}
		function o(c) {
			return (this.shouldComponentUpdate = n), Ne(e, c);
		}
		return (
			(o.displayName = "Memo(" + (e.displayName || e.name) + ")"),
			(o.prototype.isReactComponent = !0),
			(o.__f = !0),
			o
		);
	}
	((Ht.prototype = new q()).isPureReactComponent = !0),
		(Ht.prototype.shouldComponentUpdate = function (e, t) {
			return Te(this.props, e) || Te(this.state, t);
		});
	var Ot = C.__b;
	C.__b = function (e) {
		e.type && e.type.__f && e.ref && ((e.props.ref = e.ref), (e.ref = null)),
			Ot && Ot(e);
	};
	var An = C.__e;
	C.__e = function (e, t, n, o) {
		if (e.then) {
			for (var c, r = t; (r = r.__); )
				if ((c = r.__c) && c.__c)
					return (
						t.__e == null && ((t.__e = n.__e), (t.__k = n.__k)), c.__c(e, t)
					);
		}
		An(e, t, n, o);
	};
	var Ut = C.unmount;
	function qt(e, t, n) {
		return (
			e &&
				(e.__c &&
					e.__c.__H &&
					(e.__c.__H.__.forEach(function (o) {
						typeof o.__c == "function" && o.__c();
					}),
					(e.__c.__H = null)),
				(e = xn({}, e)).__c != null &&
					(e.__c.__P === n && (e.__c.__P = t), (e.__c = null)),
				(e.__k =
					e.__k &&
					e.__k.map(function (o) {
						return qt(o, t, n);
					}))),
			e
		);
	}
	function zt(e, t, n) {
		return (
			e &&
				((e.__v = null),
				(e.__k =
					e.__k &&
					e.__k.map(function (o) {
						return zt(o, t, n);
					})),
				e.__c &&
					e.__c.__P === t &&
					(e.__e && n.insertBefore(e.__e, e.__d),
					(e.__c.__e = !0),
					(e.__c.__P = n))),
			e
		);
	}
	function De() {
		(this.__u = 0), (this.t = null), (this.__b = null);
	}
	function Rt(e) {
		var t = e.__.__c;
		return t && t.__a && t.__a(e);
	}
	function Ce() {
		(this.u = null), (this.o = null);
	}
	(C.unmount = function (e) {
		var t = e.__c;
		t && t.__R && t.__R(), t && e.__h === !0 && (e.type = null), Ut && Ut(e);
	}),
		((De.prototype = new q()).__c = function (e, t) {
			var n = t.__c,
				o = this;
			o.t == null && (o.t = []), o.t.push(n);
			var c = Rt(o.__v),
				r = !1,
				_ = function () {
					r || ((r = !0), (n.__R = null), c ? c(u) : u());
				};
			n.__R = _;
			var u = function () {
					if (!--o.__u) {
						if (o.state.__a) {
							var p = o.state.__a;
							o.__v.__k[0] = zt(p, p.__c.__P, p.__c.__O);
						}
						var i;
						for (o.setState({ __a: (o.__b = null) }); (i = o.t.pop()); )
							i.forceUpdate();
					}
				},
				d = t.__h === !0;
			o.__u++ || d || o.setState({ __a: (o.__b = o.__v.__k[0]) }), e.then(_, _);
		}),
		(De.prototype.componentWillUnmount = function () {
			this.t = [];
		}),
		(De.prototype.render = function (e, t) {
			if (this.__b) {
				if (this.__v.__k) {
					var n = document.createElement("div"),
						o = this.__v.__k[0].__c;
					this.__v.__k[0] = qt(this.__b, n, (o.__O = o.__P));
				}
				this.__b = null;
			}
			var c = t.__a && Ne(W, null, e.fallback);
			return c && (c.__h = null), [Ne(W, null, t.__a ? null : e.children), c];
		});
	var Vt = function (e, t, n) {
		if (
			(++n[1] === n[0] && e.o.delete(t),
			e.props.revealOrder && (e.props.revealOrder[0] !== "t" || !e.o.size))
		)
			for (n = e.u; n; ) {
				for (; n.length > 3; ) n.pop()();
				if (n[1] < n[0]) break;
				e.u = n = n[2];
			}
	};
	((Ce.prototype = new q()).__a = function (e) {
		var t = this,
			n = Rt(t.__v),
			o = t.o.get(e);
		return (
			o[0]++,
			function (c) {
				var r = function () {
					t.props.revealOrder ? (o.push(c), Vt(t, e, o)) : c();
				};
				n ? n(r) : r();
			}
		);
	}),
		(Ce.prototype.render = function (e) {
			(this.u = null), (this.o = new Map());
			var t = ve(e.children);
			e.revealOrder && e.revealOrder[0] === "b" && t.reverse();
			for (var n = t.length; n--; ) this.o.set(t[n], (this.u = [1, 0, this.u]));
			return e.children;
		}),
		(Ce.prototype.componentDidUpdate = Ce.prototype.componentDidMount =
			function () {
				var e = this;
				this.o.forEach(function (t, n) {
					Vt(e, n, t);
				});
			});
	var Tn =
			(typeof Symbol < "u" && Symbol.for && Symbol.for("react.element")) ||
			60103,
		Dn =
			/^(?:accent|alignment|arabic|baseline|cap|clip(?!PathU)|color|dominant|fill|flood|font|glyph(?!R)|horiz|image|letter|lighting|marker(?!H|W|U)|overline|paint|pointer|shape|stop|strikethrough|stroke|text(?!L)|transform|underline|unicode|units|v|vector|vert|word|writing|x(?!C))[A-Z]/,
		En = /^on(Ani|Tra|Tou|BeforeInp|Compo)/,
		In = /[A-Z0-9]/g,
		Mn = typeof document < "u",
		Hn = function (e) {
			return (
				typeof Symbol < "u" && typeof Symbol() == "symbol"
					? /fil|che|rad/
					: /fil|che|ra/
			).test(e);
		};
	(q.prototype.isReactComponent = {}),
		[
			"componentWillMount",
			"componentWillReceiveProps",
			"componentWillUpdate",
		].forEach(function (e) {
			Object.defineProperty(q.prototype, e, {
				configurable: !0,
				get: function () {
					return this["UNSAFE_" + e];
				},
				set: function (t) {
					Object.defineProperty(this, e, {
						configurable: !0,
						writable: !0,
						value: t,
					});
				},
			});
		});
	var Bt = C.event;
	function On() {}
	function Un() {
		return this.cancelBubble;
	}
	function qn() {
		return this.defaultPrevented;
	}
	C.event = function (e) {
		return (
			Bt && (e = Bt(e)),
			(e.persist = On),
			(e.isPropagationStopped = Un),
			(e.isDefaultPrevented = qn),
			(e.nativeEvent = e)
		);
	};
	var zn = {
			enumerable: !1,
			configurable: !0,
			get: function () {
				return this.class;
			},
		},
		Ft = C.vnode;
	C.vnode = function (e) {
		typeof e.type == "string" &&
			(function (t) {
				var n = t.props,
					o = t.type,
					c = {};
				for (var r in n) {
					var _ = n[r];
					if (
						!(
							(r === "value" && "defaultValue" in n && _ == null) ||
							(Mn && r === "children" && o === "noscript") ||
							r === "class" ||
							r === "className"
						)
					) {
						var u = r.toLowerCase();
						r === "defaultValue" && "value" in n && n.value == null
							? (r = "value")
							: r === "download" && _ === !0
							? (_ = "")
							: u === "ondoubleclick"
							? (r = "ondblclick")
							: u !== "onchange" ||
							  (o !== "input" && o !== "textarea") ||
							  Hn(n.type)
							? u === "onfocus"
								? (r = "onfocusin")
								: u === "onblur"
								? (r = "onfocusout")
								: En.test(r)
								? (r = u)
								: o.indexOf("-") === -1 && Dn.test(r)
								? (r = r.replace(In, "-$&").toLowerCase())
								: _ === null && (_ = void 0)
							: (u = r = "oninput"),
							u === "oninput" && c[(r = u)] && (r = "oninputCapture"),
							(c[r] = _);
					}
				}
				o == "select" &&
					c.multiple &&
					Array.isArray(c.value) &&
					(c.value = ve(n.children).forEach(function (d) {
						d.props.selected = c.value.indexOf(d.props.value) != -1;
					})),
					o == "select" &&
						c.defaultValue != null &&
						(c.value = ve(n.children).forEach(function (d) {
							d.props.selected = c.multiple
								? c.defaultValue.indexOf(d.props.value) != -1
								: c.defaultValue == d.props.value;
						})),
					n.class && !n.className
						? ((c.class = n.class), Object.defineProperty(c, "className", zn))
						: ((n.className && !n.class) || (n.class && n.className)) &&
						  (c.class = c.className = n.className),
					(t.props = c);
			})(e),
			(e.$$typeof = Tn),
			Ft && Ft(e);
	};
	var Wt = C.__r;
	C.__r = function (e) {
		Wt && Wt(e), e.__c;
	};
	var Zt = C.diffed;
	C.diffed = function (e) {
		Zt && Zt(e);
		var t = e.props,
			n = e.__e;
		n != null &&
			e.type === "textarea" &&
			"value" in t &&
			t.value !== n.value &&
			(n.value = t.value == null ? "" : t.value);
	};
	const Rn = (e) =>
			l("div", {
				id: "powered_by",
				children: l("span", {
					children: [
						"Powered By ",
						l("svg", {
							width: "18",
							height: "18",
							viewBox: "0 0 15 14",
							fill: "none",
							xmlns: "http://www.w3.org/2000/svg",
							children: [
								l("circle", { cx: "7.95724", cy: "7", r: "7", fill: "white" }),
								l("path", {
									d: "M7.9293 2.5L12.7188 9.30263L11.8767 10.5L9.74509 8.97368L7.9293 10.0132L6.0872 8.97368L3.96877 10.5L3.15298 9.30263L7.9293 2.5Z",
									fill: "#272727",
								}),
								l("path", {
									d: "M7.92951 10.0132L6.0874 8.97368L6.10028 5.10526L7.92951 2.5L9.7453 5.07902V8.97368L7.92951 10.0132Z",
									fill: "#555555",
								}),
								l("path", {
									opacity: "0.2",
									d: "M3.15298 9.30263L7.9293 2.5L8.84065 3.79442L6.0872 8.97368L3.96877 10.5L3.15298 9.30263Z",
									fill: "white",
								}),
								l("path", {
									opacity: "0.3",
									d: "M7.92917 2.5L12.7186 9.30263L11.8765 10.5L9.74496 8.97368L7.0589 3.73948L7.92917 2.5Z",
									fill: "#272727",
								}),
							],
						}),
						" F22 LABS",
					],
				}),
			}),
		nr = "",
		jt = () =>
			l("div", {
				className: "loader-container",
				children: l("div", { className: "loader" }),
			});
	function Vn({
		setIsOpen: e,
		isSizeOpen: t,
		setIsSizeOpen: n,
		productname: o,
		startProgress: c,
		videoRef: r,
	}) {
		function _(s) {
			const L = s == null ? void 0 : s.querySelector("title").textContent,
				v = s == null ? void 0 : s.querySelectorAll("variants variant"),
				w = Array.from(v).map((m) => {
					var b, N;
					return {
						id: parseInt(
							(b = m == null ? void 0 : m.querySelector("id")) == null
								? void 0
								: b.textContent
						),
						title: m == null ? void 0 : m.querySelector("title").textContent,
						price:
							(N = m == null ? void 0 : m.querySelector("price")) == null
								? void 0
								: N.textContent,
					};
				}),
				k =
					Array == null
						? void 0
						: Array.from(
								s == null ? void 0 : s.querySelectorAll("images image")
						  ).map((m, b) => ({
								id: m == null ? void 0 : m.querySelector("id").textContent,
								image: m == null ? void 0 : m.querySelector("src").textContent,
						  }));
			return {
				title: L,
				variants: w.filter(
					(m, b, N) => b === N.findIndex((y) => y.title === m.title)
				),
				images: k.filter(
					(m, b, N) => b === N.findIndex((y) => y.image === m.image)
				),
			};
		}
		const [u, d] = P(),
			[p, i] = P(""),
			[h, f] = P("Add to cart");
		K(() => {
			const s = new AbortController();
			async function L() {
				try {
					const w = await (
							await fetch(`https://deciwood.com/products/${o}.xml`, {
								redirect: "follow",
								signal: s.signal,
							})
						).text(),
						D = new DOMParser().parseFromString(w, "application/xml"),
						m = _(D);
					d(m), i(m == null ? void 0 : m.variants[0]);
				} catch (v) {
					console.error("Error fetching data:", v);
				}
			}
			return (
				L(),
				f("Add to cart"),
				() => {
					s.abort();
				}
			);
		}, [o]);
		const a = () => {
			f(l(jt, {}));
			const s = "https://deciwood.com/cart/add",
				L = {
					Style: "Limited-2",
					quantity: 1,
					form_type: "product",
					utf8: "✓",
					id: p.id,
					sections:
						"cart-notification-product,cart-notification-button,cart-icon-bubble",
					sections_url: "/products/gadwal-limited",
				},
				v = JSON.stringify(L);
			fetch(s, {
				method: "POST",
				headers: { "Content-Type": "application/json" },
				body: v,
			})
				.then((k) => {
					if (!k.ok) throw new Error(`HTTP error! Status: ${k.status}`);
					return k.json();
				})
				.then((k) => {
					console.log(k), f("added to cart");
				})
				.catch((k) => {
					f("added to cart"), console.error(k);
				});
		};
		return l("div", {
			className: "plugin-inner_container",
			onClick: (s) => {
				s.stopPropagation();
			},
			children: [
				u
					? l(W, {
							children: [
								l($n, {
									productimages: u == null ? void 0 : u.images,
									productName: o,
									productTitle: u.title,
									productPrice: p.price,
									productVariants: u.variants,
									setVariant: i,
									isSizeOpen: t,
									setIsSizeOpen: n,
									setIsOpen: e,
									startProgress: c,
									videoRef: r,
								}),
								l("div", {
									className: "size_container",
									children: [
										l("button", {
											disabled: h !== "Add to cart",
											onClick: () => {
												a(), j("ADD_TO_CART");
											},
											className: "atc_button",
											style: { cursor: "pointer" },
											children: h,
										}),
										l("a", {
											href: `https://deciwood.com/cart/${p.id}:1?checkout`,
											className: "atc_button",
											onClick: () => {
												j("BUYNOW");
											},
											children: "BUY NOW",
										}),
									],
								}),
							],
					  })
					: "",
				l(Rn, {}),
			],
		});
	}
	const Bn = Pn(Vn);
	function Xt(e, t) {
		const [n, o] = P(() => JSON.parse(window.localStorage.getItem(e)) || t);
		return (
			K(() => {
				window.localStorage.setItem(e, JSON.stringify(n));
			}, [n, o]),
			[n, o]
		);
	}
	const rr = "",
		Fn = ({
			productname: e,
			stopProgress: t,
			isOpen: n,
			setIsOpen: o,
			videoRef: c,
			triggers: r,
		}) => {
			var m, b, N;
			const [_, u] = P(),
				[d, p] = P(""),
				[i, h] = P(!1),
				[f, a] = P(0),
				[s, L] = P("Add to cart");
			function v(y) {
				const S = y == null ? void 0 : y.querySelector("title").textContent,
					A = y == null ? void 0 : y.querySelectorAll("variants variant"),
					M = Array.from(A).map((x) => {
						var z, R;
						return {
							id: parseInt(
								(z = x == null ? void 0 : x.querySelector("id")) == null
									? void 0
									: z.textContent
							),
							title: x == null ? void 0 : x.querySelector("title").textContent,
							price:
								(R = x == null ? void 0 : x.querySelector("price")) == null
									? void 0
									: R.textContent,
						};
					}),
					E =
						Array == null
							? void 0
							: Array.from(
									y == null ? void 0 : y.querySelectorAll("images image")
							  ).map((x, z) => ({
									id: x == null ? void 0 : x.querySelector("id").textContent,
									image:
										x == null ? void 0 : x.querySelector("src").textContent,
							  }));
				return {
					title: S,
					variants: M.filter(
						(x, z, R) => z === R.findIndex((V) => V.title === x.title)
					),
					images: E.filter(
						(x, z, R) => z === R.findIndex((V) => V.image === x.image)
					),
				};
			}
			K(() => {
				const y = new AbortController();
				async function S() {
					try {
						const M = await (
								await fetch(`https://deciwood.com/products/${e}.xml`, {
									redirect: "follow",
									signal: y.signal,
								})
							).text(),
							Y = new DOMParser().parseFromString(M, "application/xml"),
							x = v(Y);
						u(x), p(x == null ? void 0 : x.variants[0].id);
					} catch (A) {
						console.error("Error fetching data:", A);
					}
				}
				return (
					S(),
					a(0),
					h(!1),
					L("Add to cart"),
					() => {
						y.abort();
					}
				);
			}, [e]);
			const w = (y, S) => {
					c.current && c.current.pause(), p(y), a(S), h(!0);
				},
				k = () => {
					var y, S, A, M, E;
					r.setProductId(e),
						r.dotclickedtoupdate(
							r.productid ||
								((M =
									(A =
										(S =
											(y = r.data) == null
												? void 0
												: y.childstories[r.actualTime]) == null
											? void 0
											: S.dots) == null
										? void 0
										: A[0]) == null
									? void 0
									: M.productname),
							(E = r.data) == null ? void 0 : E.childstories[r.actualTime],
							r.data
						),
						o((Y) => !Y),
						t(),
						c.current.pause(),
						n && startProgress();
				},
				D = () => {
					const y = "https://deciwood.com/cart/add";
					L(l(jt, {}));
					const S = {
						Style: "Limited-2",
						quantity: 1,
						form_type: "product",
						utf8: "✓",
						id: d,
						sections:
							"cart-notification-product,cart-notification-button,cart-icon-bubble",
						sections_url: "/products/gadwal-limited",
					};
					console.log(S, "requestBody", "variants");
					const A = JSON.stringify(S);
					fetch(y, {
						method: "POST",
						headers: { "Content-Type": "application/json" },
						body: A,
					})
						.then((E) => {
							if (!E.ok) throw new Error(`HTTP error! Status: ${E.status}`);
							return E.json();
						})
						.then((E) => {
							console.log(E), L("Added To Cart");
						})
						.catch((E) => {
							console.error(E), L("Added To Cart");
						});
				};
			return l("div", {
				className: "product-card",
				children: [
					l("div", {
						className: "product-card-content",
						children: [
							l("div", {
								className: "product-card-img",
								onMouseEnter: () => r.setProductId(e),
								onClick: () => {
									k(), c.current.pause();
								},
								children: l("img", {
									src: _ == null ? void 0 : _.images[0].image,
									alt: _ == null ? void 0 : _.title,
									loading: "eager",
								}),
							}),
							l("div", {
								className: "product-card-info",
								onMouseEnter: () => r.setProductId(e),
								onClick: () => {
									k(), c.current.pause();
								},
								children: [
									l("span", {
										className: "product-card-info-title",
										children: _ == null ? void 0 : _.title,
									}),
									l("span", {
										className: "product-card-info-price",
										children: ["Rs.", _ == null ? void 0 : _.variants[0].price],
									}),
								],
							}),
							((m = _ == null ? void 0 : _.variants) == null
								? void 0
								: m.length) > 1 &&
								l("div", {
									className: `product-card-variants ${
										i ? "product-variant-open" : ""
									}`,
									children:
										(b = _ == null ? void 0 : _.variants) == null
											? void 0
											: b.map((y, S) =>
													l("div", {
														className: `product-card-variant ${
															f == S ? "product-card-variant-active" : ""
														}`,
														onClick: () => w(y.id, S),
														children: y == null ? void 0 : y.title,
													})
											  ),
								}),
						],
					}),
					i ||
					((N = _ == null ? void 0 : _.variants) == null ? void 0 : N.length) <
						2
						? l("button", {
								onClick: () => {
									D(), j("ADD_TO_CART");
								},
								className: "add-to-cart-product-card sahibaba",
								children: s,
						  })
						: l("button", {
								className: "add-to-cart-product-card",
								onClick: () => {
									var y;
									p(
										(y = _ == null ? void 0 : _.variants[0]) == null
											? void 0
											: y.id
									),
										h(!0);
								},
								children: s,
						  }),
					l("div", {
						id: "powered_by_product_card",
						children: l("span", {
							children: [
								"Powered By",
								" ",
								l("svg", {
									width: "18",
									height: "18",
									viewBox: "0 0 15 14",
									fill: "none",
									xmlns: "http://www.w3.org/2000/svg",
									children: [
										l("circle", {
											cx: "7.95724",
											cy: "7",
											r: "7",
											fill: "white",
										}),
										l("path", {
											d: "M7.9293 2.5L12.7188 9.30263L11.8767 10.5L9.74509 8.97368L7.9293 10.0132L6.0872 8.97368L3.96877 10.5L3.15298 9.30263L7.9293 2.5Z",
											fill: "#272727",
										}),
										l("path", {
											d: "M7.92951 10.0132L6.0874 8.97368L6.10028 5.10526L7.92951 2.5L9.7453 5.07902V8.97368L7.92951 10.0132Z",
											fill: "#555555",
										}),
										l("path", {
											opacity: "0.2",
											d: "M3.15298 9.30263L7.9293 2.5L8.84065 3.79442L6.0872 8.97368L3.96877 10.5L3.15298 9.30263Z",
											fill: "white",
										}),
										l("path", {
											opacity: "0.3",
											d: "M7.92917 2.5L12.7186 9.30263L11.8765 10.5L9.74496 8.97368L7.0589 3.73948L7.92917 2.5Z",
											fill: "#272727",
										}),
									],
								}),
								" ",
								"F22 LABS",
							],
						}),
					}),
				],
			});
		},
		Wn = () =>
			l(W, {
				children: l("svg", {
					width: "44",
					height: "44",
					viewBox: "0 0 44 44",
					xmlns: "http://www.w3.org/2000/svg",
					stroke: "#fff",
					children: l("g", {
						fill: "none",
						"fill-rule": "evenodd",
						"stroke-width": "2",
						children: [
							l("circle", {
								cx: "22",
								cy: "22",
								r: "1",
								children: [
									l("animate", {
										attributeName: "r",
										begin: "0s",
										dur: "1.8s",
										values: "1; 20",
										calcMode: "spline",
										keyTimes: "0; 1",
										keySplines: "0.165, 0.84, 0.44, 1",
										repeatCount: "indefinite",
									}),
									l("animate", {
										attributeName: "stroke-opacity",
										begin: "0s",
										dur: "1.8s",
										values: "1; 0",
										calcMode: "spline",
										keyTimes: "0; 1",
										keySplines: "0.3, 0.61, 0.355, 1",
										repeatCount: "indefinite",
									}),
								],
							}),
							l("circle", {
								cx: "22",
								cy: "22",
								r: "1",
								children: [
									l("animate", {
										attributeName: "r",
										begin: "-0.9s",
										dur: "1.8s",
										values: "1; 20",
										calcMode: "spline",
										keyTimes: "0; 1",
										keySplines: "0.165, 0.84, 0.44, 1",
										repeatCount: "indefinite",
									}),
									l("animate", {
										attributeName: "stroke-opacity",
										begin: "-0.9s",
										dur: "1.8s",
										values: "1; 0",
										calcMode: "spline",
										keyTimes: "0; 1",
										keySplines: "0.3, 0.61, 0.355, 1",
										repeatCount: "indefinite",
									}),
								],
							}),
						],
					}),
				}),
			});
	function Zn({
		data: e,
		handleoverlay: t,
		handledata: n,
		setshow: o,
		setNext: c,
		jsondata: r,
		next: _,
		handler: u,
		dotclickedtoupdate: d,
		creationparentdata: p,
		fetchUsers: i,
	}) {
		var Yt, Qt, en, tn, nn, rn, on;
		function h(g, T) {
			let I;
			return (
				g.filter((O) => {
					if (O.id === T) return (I = O.count), O;
				}),
				I
			);
		}
		const [f, a] = P(!1),
			s = ot(null),
			[L, v] = P(() => 0),
			w = ot(null),
			[k, D] = Xt("whentostart", []),
			[m, b] = P(0),
			[N, y] = P(0),
			[S, A] = P(),
			[M, E] = P(!1),
			[Y, x] = P(!1),
			[z, R] = P(!1),
			[V, X] = P(!1);
		console.log(V, "loaded"),
			K(() => {
				var T, I, O, re;
				const g =
					(T = e == null ? void 0 : e.childstories) == null ? void 0 : T[m];
				return (
					console.log(g, "currentObjectbini"),
					(I = g == null ? void 0 : g.storiescontnet) != null &&
						I.includes("jpg") &&
						V &&
						(w.current = setInterval(Ee, 100)),
					(O = g == null ? void 0 : g.storiescontnet) != null &&
						O.includes("mp4") &&
						V &&
						((re = s.current) == null || re.addEventListener("timeupdate", Jt)),
					() => {
						var oe;
						clearInterval(w.current),
							(oe = s.current) == null ||
								oe.removeEventListener("timeupdate", Jt);
					}
				);
			}, [e == null ? void 0 : e.id, m, N, V]);
		const be = () => {
				w.current = setInterval(Ee, 100);
			},
			G = () => {
				D((g) => {
					let T = g.find((I) => I.id === e.id);
					return T
						? T
							? [...g.filter((O) => O.id !== e.id), { id: e.id, count: m }]
							: g
						: [...g, { id: e.id, count: m }];
				}),
					clearInterval(w.current);
			},
			Ee = () => {
				if (
					(p(e.name),
					m === (e == null ? void 0 : e.childstories.length) - 1 &&
						e != null &&
						e.stop)
				) {
					v((g) => {
						if (g <= 100) return g + 1;
						G();
					});
					return;
				}
				v((g) =>
					g >= 100
						? m === (e == null ? void 0 : e.childstories.length) - 1 &&
						  (G(), !e.stop)
							? (n("plus"),
							  c((T) => T + 1),
							  X(!0),
							  r.length === _ + 2,
							  b(h(k, e.id + 1) || 0),
							  0)
							: g >= 100 && m !== (e == null ? void 0 : e.childstories.length)
							? (G(), v(0), b((T) => T + 1), X(!1), 0)
							: (G(), b(m + 1), v(100), X(!1), 100)
						: g + 1
				);
			},
			Gt = () => {
				if (m >= (e == null ? void 0 : e.childstories.length) - 1) {
					if (r.length > _ + 1) {
						G(), v(0), b(0), n("plus"), c((g) => g + 1), y(0);
						return;
					}
					return;
				}
				b((g) => g + 1), X(!1), y(0), v(0);
			},
			Kn = () => {
				if (m <= 0) {
					if (_ > 0) {
						G(), v(0), b(h(k, _) || 0), n("minus"), y(0), c((g) => g - 1);
						return;
					}
					return;
				}
				b((g) => g - 1), X(!1), y(0), v(0);
			},
			Yn = () => {
				const g = s.current;
				g && y(g.duration);
			},
			Jt = (g) => {
				var I, O, re, oe;
				const T =
					(((I = s.current) == null ? void 0 : I.currentTime) /
						((O = s.current) == null ? void 0 : O.duration)) *
					100;
				T && v(T),
					((re = s.current) == null ? void 0 : re.currentTime) >=
						((oe = s.current) == null ? void 0 : oe.duration) &&
						((w.current = setInterval(Ee, 100)),
						Gt(),
						(e != null && e.stop) || X(!1),
						be());
			},
			Kt = () => {
				X(!0);
			},
			Qn = () => {
				var T, I;
				const g = e == null ? void 0 : e.childstories[m];
				if (
					(T = g == null ? void 0 : g.storiescontnet) != null &&
					T.includes("jpg")
				)
					return (
						R(!1),
						l("div", {
							className: "image-container",
							children: l("img", {
								src: g == null ? void 0 : g.storiescontnet,
								alt: "Story",
								style: { pointerEvents: "none" },
								loading: "eager",
								onLoad: Kt,
								className: " data_img ",
							}),
						})
					);
				if (
					(I = g == null ? void 0 : g.storiescontnet) != null &&
					I.includes("mp4")
				)
					return (
						R(!0),
						l("div", {
							className: "video-container",
							children: l("video", {
								ref: s,
								onLoadedMetadata: Yn,
								src: g == null ? void 0 : g.storiescontnet,
								alt: "Story",
								autoPlay: !0,
								playsInline: !0,
								onLoadedData: Kt,
								onEnded: () => {
									console.log("sahi");
								},
							}),
						})
					);
			};
		return l("div", {
			className: "StoryContainer",
			children: [
				l("div", {
					className: "playbar",
					style: {
						gridTemplateColumns: ` repeat(${
							e == null ? void 0 : e.childstories.length
						} ,1fr)  `,
					},
					children:
						e == null
							? void 0
							: e.childstories.map((g, T) =>
									l("div", {
										className: "playbarinline__wrapper",
										children: [
											l("div", {
												style: {
													display: "block !important",
													transform:
														T == m
															? `scaleX(${Math.floor(L) / 100})`
															: "scaleX(0)",
													WebkitTransform:
														T == m
															? `scaleX(${Math.floor(L) / 100})`
															: "scaleX(0)",
												},
												className: `playbarinline  ${T < m ? "contain" : ""} `,
											}),
											l("div", { className: "playbarinline__background" }),
										],
									})
							  ),
				}),
				l("header", {
					className: "main_StoryContainer_header",
					children: [
						l("nav", {
							className: "StoryContainer_nav",
							children: [
								l("div", {
									className: "StoryContainer_titlebar",
									children: [
										l("img", {
											src: e == null ? void 0 : e.image,
											alt: "",
											loading: "eager",
										}),
										l("h5", {
											className: "StoryContainer_title",
											children: e == null ? void 0 : e.name,
										}),
									],
								}),
								l("div", {
									className: "story-container-nav-actions",
									children: [
										z &&
											(Y
												? l("div", {
														class: "story-container-nav-actions-background",
														children: l("svg", {
															xmlns: "http://www.w3.org/2000/svg",
															viewBox: "0 0 24 24",
															fill: "currentColor",
															className: "mute-icon",
															onClick: () => {
																x(!1), s.current && (s.current.muted = !1);
															},
															children: l("path", {
																d: "M13.5 4.06c0-1.336-1.616-2.005-2.56-1.06l-4.5 4.5H4.508c-1.141 0-2.318.664-2.66 1.905A9.76 9.76 0 001.5 12c0 .898.121 1.768.35 2.595.341 1.24 1.518 1.905 2.659 1.905h1.93l4.5 4.5c.945.945 2.561.276 2.561-1.06V4.06zM17.78 9.22a.75.75 0 10-1.06 1.06L18.44 12l-1.72 1.72a.75.75 0 001.06 1.06l1.72-1.72 1.72 1.72a.75.75 0 101.06-1.06L20.56 12l1.72-1.72a.75.75 0 00-1.06-1.06l-1.72 1.72-1.72-1.72z",
															}),
														}),
												  })
												: l("div", {
														class: "story-container-nav-actions-background",
														children: l("svg", {
															xmlns: "http://www.w3.org/2000/svg",
															viewBox: "0 0 24 24",
															fill: "currentColor",
															className: "mute-icon",
															onClick: () => {
																x(!0), s.current && (s.current.muted = !0);
															},
															children: [
																l("path", {
																	d: "M13.5 4.06c0-1.336-1.616-2.005-2.56-1.06l-4.5 4.5H4.508c-1.141 0-2.318.664-2.66 1.905A9.76 9.76 0 001.5 12c0 .898.121 1.768.35 2.595.341 1.24 1.518 1.905 2.659 1.905h1.93l4.5 4.5c.945.945 2.561.276 2.561-1.06V4.06zM18.584 5.106a.75.75 0 011.06 0c3.808 3.807 3.808 9.98 0 13.788a.75.75 0 11-1.06-1.06 8.25 8.25 0 000-11.668.75.75 0 010-1.06z",
																}),
																l("path", {
																	d: "M15.932 7.757a.75.75 0 011.061 0 6 6 0 010 8.486.75.75 0 01-1.06-1.061 4.5 4.5 0 000-6.364.75.75 0 010-1.06z",
																}),
															],
														}),
												  })),
										l("div", {
											class: "story-container-nav-actions-background",
											children: l(kn, { onclose: t, fetchUsers: i }),
										}),
									],
								}),
							],
						}),
						l("button", {
							onClick: Kn,
							className: "stories_button",
							children: "-",
						}),
						l("button", {
							onClick: Gt,
							className: "stories_button",
							children: "+",
						}),
					],
				}),
				l("div", { id: "story-overlay" }),
				l("main", {
					className: "StoryContainer",
					children: [
						!V &&
							l("div", {
								style: {
									width: "100%",
									height: "100%",
									position: "absolute",
									left: 0,
									top: 0,
									background: "rgba(0, 0, 0, 0.9)",
									zIndex: 9,
									display: "flex",
									justifyContent: "center",
									alignItems: "center",
									color: "#ccc",
								},
								children: l(Wn, {}),
							}),
						Qn(),
					],
				}),
				l("div", {
					className: "product-cards-container",
					onClick: () => {},
					style: {
						justifyContent: `${
							((Qt =
								(Yt = e == null ? void 0 : e.childstories[m]) == null
									? void 0
									: Yt.dots) == null
								? void 0
								: Qt.length) > 1
								? "flex-end"
								: "center"
						}`,
					},
					children: l("div", {
						className: "product-cards",
						children:
							(tn =
								(en = e == null ? void 0 : e.childstories[m]) == null
									? void 0
									: en.dots) == null
								? void 0
								: tn.map((g) =>
										l(
											Fn,
											{
												productname: g.productname,
												stopProgress: G,
												startProgress: be,
												isOpen: f,
												setIsOpen: a,
												videoRef: s,
												triggers: {
													setProductId: A,
													dotclickedtoupdate: d,
													productid: S,
													data: e,
													actualTime: m,
												},
											},
											g.id
										)
								  ),
					}),
				}),
				l("div", {
					className: `f22storiesdrawer ${f ? "f22open" : ""}`,
					onClick: () => {
						a((g) => !g), be(), s.current.play(), E(!1);
					},
					children: l(Bn, {
						isOpen: f,
						setIsOpen: a,
						isSizeOpen: M,
						setIsSizeOpen: E,
						startProgress: be,
						videoRef: s,
						productname:
							S ||
							((on =
								(rn =
									(nn = e == null ? void 0 : e.childstories[m]) == null
										? void 0
										: nn.dots) == null
									? void 0
									: rn[0]) == null
								? void 0
								: on.productname),
					}),
				}),
			],
		});
	}
	function jn({
		items: e,
		memoizedhandleoverlay: t,
		onClick: n,
		fetchUsers: o,
		creationparentdata: c,
	}) {
		return l("div", {
			onClick: () => {
				t(e), n(), o(), c(e.name);
			},
			className: "f22__stories",
			children: [
				l("img", { src: e.image, loading: "eager" }),
				l("h6", { className: "f22_storiesitem", children: e.name }),
			],
		});
	}
	const or = "";
	let Xn = (e = 21) =>
		crypto
			.getRandomValues(new Uint8Array(e))
			.reduce(
				(t, n) => (
					(n &= 63),
					n < 36
						? (t += n.toString(36))
						: n < 62
						? (t += (n - 26).toString(36).toUpperCase())
						: n > 62
						? (t += "-")
						: (t += "_"),
					t
				),
				""
			);
	function Gn({ dataURL: e }) {
		var m;
		const [t, n] = P(!1),
			[o, c] = P(null),
			[r, _] = P([]),
			[u] = Xt("uniqueidanalytics", Xn()),
			[d, p] = P(0),
			[i, h] = P({});
		K(() => {
			async function b() {
				let y = await (await fetch(e)).json();
				_(y[window.location.pathname]);
			}
			b(), a();
		}, []),
			document.documentElement.style.setProperty(
				"--f22stories-circlewidth",
				"2px"
			),
			document.documentElement.style.setProperty(
				"--f22stories-circlecolor",
				"#46a5b4"
			),
			document.documentElement.style.setProperty(
				"--circleanimationf22stories",
				`${
					(m = r == null ? void 0 : r[0]) == null
						? void 0
						: m.circleanimationf22stories
				}px`
			);
		const f = async () => {
				const b = await Nt();
				b.firestore()
					.collection("neemans")
					.doc(u)
					.set({
						id: u,
						timestamp: b.firestore.FieldValue.serverTimestamp(),
						mainataindata: i,
					})
					.then(() => {})
					.catch((A) => {});
			},
			a = async () => {
				(await Nt())
					.firestore()
					.collection("neemans")
					.doc(u)
					.get()
					.then((S) => {
						S.exists && h(S.data().mainataindata);
					})
					.catch((S) => {});
			};
		function s() {
			n((b) => !b);
		}
		const L = pn((b) => {
				c(b), s();
			}, []),
			v = (b) => {
				let N = r.find((y, S) => {
					if (b === "plus") return S === d + 1;
					if (b === "minus") return d === 0 ? void 0 : S === d - 1;
				});
				c(N);
			};
		function w(b, N, y = "relive-knit-sneakers") {
			var A;
			((A = i[N.name]) == null
				? void 0
				: A.content.findIndex((M) => M.id === b.id)) === -1 &&
				h({
					...i,
					[N.name]: {
						...i[N.name],
						content: [...i[N.name].content, { id: b.id, dotclicked: {} }],
					},
				});
		}
		function k(b, N, y) {
			var S, A;
			try {
				h({
					...i,
					[y.name]: {
						content: [
							...((S = i[y.name]) == null ? void 0 : S.content),
							{
								id: N.id,
								dotclicked: {
									...((A = i[y.name]) == null ? void 0 : A.content.dotclicked),
									[b]: { clicked: !0, clickedoncta: "" },
								},
							},
						],
					},
				});
			} catch (M) {
				console.log(M);
			}
		}
		function D(b) {
			i.hasOwnProperty(b) || h({ ...i, [b]: { content: [] } });
		}
		return l(W, {
			children: [
				l("div", {
					className: "f22storiesstyles",
					style: { display: "flex", flexDirection: "column" },
					children: l("div", {
						className: "stories_container",
						children:
							r == null
								? void 0
								: r.map((b, N) =>
										l(
											jn,
											{
												items: b,
												memoizedhandleoverlay: L,
												onClick: () => {
													p(N), j("VIEWS");
												},
												fetchUsers: f,
												creationparentdata: D,
											},
											b.id
										)
								  ),
					}),
				}),
				t
					? l(Zn, {
							data: o,
							handleoverlay: s,
							handledata: v,
							setshow: n,
							setNext: p,
							next: d,
							jsondata: r,
							handler: w,
							creationparentdata: D,
							dotclickedtoupdate: k,
							fetchUsers: f,
					  })
					: "",
			],
		});
	}
	mn(
		"f22-stories",
		(e) => l(Gn, { dataURL: e.getAttribute("dataURL") || "" }),
		["dataURL"],
		() => console.log("F22 Plugin cleanup")
	);
	function Jn() {
		try {
			window.onload = async () => {
				var t, n;
				const e = document.querySelector("#f22-storiesplugin1");
				if (e) {
					let o = document.createElement("f22-stories"),
						c =
							((n = (t = window.Shopify) == null ? void 0 : t.shop) == null
								? void 0
								: n.split(".")[0]) || "fspworld";
					console.log(window.location),
						o.setAttribute(
							"dataUrl",
							`https://s3.f22labs.cloud/shopclips/${c}.json`
						),
						e.appendChild(o);
				}
			};
		} catch (e) {
			console.error(e);
		}
	}
	Jn();
})();
