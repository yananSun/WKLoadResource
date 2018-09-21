( function () {

 "use strict";
var $hxClasses = {},$estr = function() { return js.Boot.__string_rec(this,''); };
function $extend(from, fields) {
	function inherit() {}; inherit.prototype = from; var proto = new inherit();
	for (var name in fields) proto[name] = fields[name];
	if( fields.toString !== Object.prototype.toString ) proto.toString = fields.toString;
	return proto;
}
var ApplicationMain = function() { }

$hxClasses["ApplicationMain"] = ApplicationMain;
ApplicationMain.__name__ = ["ApplicationMain"];
ApplicationMain.main = function() {
	ApplicationMain.completed = 0;
	ApplicationMain.loaders = new haxe.ds.StringMap();
	ApplicationMain.urlLoaders = new haxe.ds.StringMap();
	ApplicationMain.total = 0;
	flash.Lib.get_current().loaderInfo = flash.display.LoaderInfo.create(null);
	try {
		if(Reflect.hasField(js.Browser.window,"winParameters")) flash.Lib.get_current().loaderInfo.parameters = (Reflect.field(js.Browser.window,"winParameters"))();
		flash.Lib.get_current().get_stage().loaderInfo = flash.Lib.get_current().loaderInfo;
	} catch( e ) {
	}
	ApplicationMain.preloader = new Preloader();
	flash.Lib.get_current().addChild(ApplicationMain.preloader);
	ApplicationMain.preloader.onInit();
	var loader = new flash.display.Loader();
	ApplicationMain.loaders.set("img/1.png",loader);
	ApplicationMain.total++;
	var loader1 = new flash.display.Loader();
	ApplicationMain.loaders.set("img/2.png",loader1);
	ApplicationMain.total++;
	var loader2 = new flash.display.Loader();
	ApplicationMain.loaders.set("img/3.png",loader2);
	ApplicationMain.total++;
	var loader3 = new flash.display.Loader();
	ApplicationMain.loaders.set("img/4.png",loader3);
	ApplicationMain.total++;
	var loader4 = new flash.display.Loader();
	ApplicationMain.loaders.set("img/5.png",loader4);
	ApplicationMain.total++;
	var loader5 = new flash.display.Loader();
	ApplicationMain.loaders.set("img/6.png",loader5);
	ApplicationMain.total++;
	var loader6 = new flash.display.Loader();
	ApplicationMain.loaders.set("img/7.png",loader6);
	ApplicationMain.total++;
	var loader7 = new flash.display.Loader();
	ApplicationMain.loaders.set("img/8.png",loader7);
	ApplicationMain.total++;
	var loader8 = new flash.display.Loader();
	ApplicationMain.loaders.set("img/9.png",loader8);
	ApplicationMain.total++;
	var loader9 = new flash.display.Loader();
	ApplicationMain.loaders.set("img/bake0.png",loader9);
	ApplicationMain.total++;
	var loader10 = new flash.display.Loader();
	ApplicationMain.loaders.set("img/bake1.png",loader10);
	ApplicationMain.total++;
	var loader11 = new flash.display.Loader();
	ApplicationMain.loaders.set("img/bake1Left.png",loader11);
	ApplicationMain.total++;
	var loader12 = new flash.display.Loader();
	ApplicationMain.loaders.set("img/bake1Right.png",loader12);
	ApplicationMain.total++;
	var loader13 = new flash.display.Loader();
	ApplicationMain.loaders.set("img/bake2.png",loader13);
	ApplicationMain.total++;
	var loader14 = new flash.display.Loader();
	ApplicationMain.loaders.set("img/bake2Left.png",loader14);
	ApplicationMain.total++;
	var loader15 = new flash.display.Loader();
	ApplicationMain.loaders.set("img/bake2Right.png",loader15);
	ApplicationMain.total++;
	var loader16 = new flash.display.Loader();
	ApplicationMain.loaders.set("img/bake3.png",loader16);
	ApplicationMain.total++;
	var loader17 = new flash.display.Loader();
	ApplicationMain.loaders.set("img/bake3Left.png",loader17);
	ApplicationMain.total++;
	var loader18 = new flash.display.Loader();
	ApplicationMain.loaders.set("img/bake3Right.png",loader18);
	ApplicationMain.total++;
	var loader19 = new flash.display.Loader();
	ApplicationMain.loaders.set("img/bake4.png",loader19);
	ApplicationMain.total++;
	var loader20 = new flash.display.Loader();
	ApplicationMain.loaders.set("img/bake4Left.png",loader20);
	ApplicationMain.total++;
	var loader21 = new flash.display.Loader();
	ApplicationMain.loaders.set("img/bake4Right.png",loader21);
	ApplicationMain.total++;
	var loader22 = new flash.display.Loader();
	ApplicationMain.loaders.set("img/bake5.png",loader22);
	ApplicationMain.total++;
	var loader23 = new flash.display.Loader();
	ApplicationMain.loaders.set("img/bake5Left.png",loader23);
	ApplicationMain.total++;
	var loader24 = new flash.display.Loader();
	ApplicationMain.loaders.set("img/bake5Right.png",loader24);
	ApplicationMain.total++;
	var loader25 = new flash.display.Loader();
	ApplicationMain.loaders.set("img/bake6.png",loader25);
	ApplicationMain.total++;
	var loader26 = new flash.display.Loader();
	ApplicationMain.loaders.set("img/bake6Left.png",loader26);
	ApplicationMain.total++;
	var loader27 = new flash.display.Loader();
	ApplicationMain.loaders.set("img/bake6Right.png",loader27);
	ApplicationMain.total++;
	var loader28 = new flash.display.Loader();
	ApplicationMain.loaders.set("img/bake7.png",loader28);
	ApplicationMain.total++;
	var loader29 = new flash.display.Loader();
	ApplicationMain.loaders.set("img/bake7Left.png",loader29);
	ApplicationMain.total++;
	var loader30 = new flash.display.Loader();
	ApplicationMain.loaders.set("img/bake7Right.png",loader30);
	ApplicationMain.total++;
	var loader31 = new flash.display.Loader();
	ApplicationMain.loaders.set("img/brokoliEffect.png",loader31);
	ApplicationMain.total++;
	var loader32 = new flash.display.Loader();
	ApplicationMain.loaders.set("img/button_credits.png",loader32);
	ApplicationMain.total++;
	var loader33 = new flash.display.Loader();
	ApplicationMain.loaders.set("img/button_help.png",loader33);
	ApplicationMain.total++;
	var loader34 = new flash.display.Loader();
	ApplicationMain.loaders.set("img/button_menu.png",loader34);
	ApplicationMain.total++;
	var loader35 = new flash.display.Loader();
	ApplicationMain.loaders.set("img/button_more_games.png",loader35);
	ApplicationMain.total++;
	var loader36 = new flash.display.Loader();
	ApplicationMain.loaders.set("img/button_play.png",loader36);
	ApplicationMain.total++;
	var loader37 = new flash.display.Loader();
	ApplicationMain.loaders.set("img/button_play1.png",loader37);
	ApplicationMain.total++;
	var loader38 = new flash.display.Loader();
	ApplicationMain.loaders.set("img/button_play2.png",loader38);
	ApplicationMain.total++;
	var loader39 = new flash.display.Loader();
	ApplicationMain.loaders.set("img/button_replay.png",loader39);
	ApplicationMain.total++;
	var loader40 = new flash.display.Loader();
	ApplicationMain.loaders.set("img/button_score.png",loader40);
	ApplicationMain.total++;
	var loader41 = new flash.display.Loader();
	ApplicationMain.loaders.set("img/button_sound.png",loader41);
	ApplicationMain.total++;
	var loader42 = new flash.display.Loader();
	ApplicationMain.loaders.set("img/button_soundX.png",loader42);
	ApplicationMain.total++;
	var loader43 = new flash.display.Loader();
	ApplicationMain.loaders.set("img/combo3.png",loader43);
	ApplicationMain.total++;
	var loader44 = new flash.display.Loader();
	ApplicationMain.loaders.set("img/combo4.png",loader44);
	ApplicationMain.total++;
	var loader45 = new flash.display.Loader();
	ApplicationMain.loaders.set("img/combo5.png",loader45);
	ApplicationMain.total++;
	var loader46 = new flash.display.Loader();
	ApplicationMain.loaders.set("img/combo6.png",loader46);
	ApplicationMain.total++;
	var loader47 = new flash.display.Loader();
	ApplicationMain.loaders.set("img/combo7.png",loader47);
	ApplicationMain.total++;
	var loader48 = new flash.display.Loader();
	ApplicationMain.loaders.set("img/creditsWindow.jpg",loader48);
	ApplicationMain.total++;
	var loader49 = new flash.display.Loader();
	ApplicationMain.loaders.set("img/creditsWindow.png",loader49);
	ApplicationMain.total++;
	var loader50 = new flash.display.Loader();
	ApplicationMain.loaders.set("img/criticalHit.png",loader50);
	ApplicationMain.total++;
	var loader51 = new flash.display.Loader();
	ApplicationMain.loaders.set("img/failCont.png",loader51);
	ApplicationMain.total++;
	var loader52 = new flash.display.Loader();
	ApplicationMain.loaders.set("img/failFill.png",loader52);
	ApplicationMain.total++;
	var loader53 = new flash.display.Loader();
	ApplicationMain.loaders.set("img/help_screen.jpg",loader53);
	ApplicationMain.total++;
	var loader54 = new flash.display.Loader();
	ApplicationMain.loaders.set("img/help_screen.png",loader54);
	ApplicationMain.total++;
	var loader55 = new flash.display.Loader();
	ApplicationMain.loaders.set("img/MainBg.jpg",loader55);
	ApplicationMain.total++;
	var loader56 = new flash.display.Loader();
	ApplicationMain.loaders.set("img/MainFontNumeric.png",loader56);
	ApplicationMain.total++;
	var loader57 = new flash.display.Loader();
	ApplicationMain.loaders.set("img/mrg_logo.png",loader57);
	ApplicationMain.total++;
	var loader58 = new flash.display.Loader();
	ApplicationMain.loaders.set("img/Num.png",loader58);
	ApplicationMain.total++;
	var loader59 = new flash.display.Loader();
	ApplicationMain.loaders.set("img/pause.png",loader59);
	ApplicationMain.total++;
	var loader60 = new flash.display.Loader();
	ApplicationMain.loaders.set("img/Rotate_to_play.png",loader60);
	ApplicationMain.total++;
	var loader61 = new flash.display.Loader();
	ApplicationMain.loaders.set("img/SliceEffect.png",loader61);
	ApplicationMain.total++;
	var loader62 = new flash.display.Loader();
	ApplicationMain.loaders.set("img/startSlice.png",loader62);
	ApplicationMain.total++;
	var loader63 = new flash.display.Loader();
	ApplicationMain.loaders.set("img/SweetSlice_Logo.png",loader63);
	ApplicationMain.total++;
	var loader64 = new flash.display.Loader();
	ApplicationMain.loaders.set("img/SwordSample (1).png",loader64);
	ApplicationMain.total++;
	var loader65 = new flash.display.Loader();
	ApplicationMain.loaders.set("img/SwordSample.png",loader65);
	ApplicationMain.total++;
	var loader66 = new flash.display.Loader();
	ApplicationMain.loaders.set("img/SwordSampleEnd.png",loader66);
	ApplicationMain.total++;
	var loader67 = new flash.display.Loader();
	ApplicationMain.loaders.set("img/tapToStart.png",loader67);
	ApplicationMain.total++;
	var loader68 = new flash.display.Loader();
	ApplicationMain.loaders.set("img/tort.png",loader68);
	ApplicationMain.total++;
	var loader69 = new flash.display.Loader();
	ApplicationMain.loaders.set("img/trail1.png",loader69);
	ApplicationMain.total++;
	var loader70 = new flash.display.Loader();
	ApplicationMain.loaders.set("img/trail2.png",loader70);
	ApplicationMain.total++;
	var loader71 = new flash.display.Loader();
	ApplicationMain.loaders.set("img/trail3.png",loader71);
	ApplicationMain.total++;
	var loader72 = new flash.display.Loader();
	ApplicationMain.loaders.set("img/trail4.png",loader72);
	ApplicationMain.total++;
	var loader73 = new flash.display.Loader();
	ApplicationMain.loaders.set("img/trail5.png",loader73);
	ApplicationMain.total++;
	var loader74 = new flash.display.Loader();
	ApplicationMain.loaders.set("img/trail6.png",loader74);
	ApplicationMain.total++;
	var resourcePrefix = "__ASSET__:bitmap_";
	var _g = 0, _g1 = haxe.Resource.listNames();
	while(_g < _g1.length) {
		var resourceName = _g1[_g];
		++_g;
		if(StringTools.startsWith(resourceName,resourcePrefix)) {
			var type = Type.resolveClass(StringTools.replace(resourceName.substring(resourcePrefix.length),"_","."));
			if(type != null) {
				ApplicationMain.total++;
				var instance = Type.createInstance(type,[0,0,true,16777215,ApplicationMain.bitmapClass_onComplete]);
			}
		}
	}
	if(ApplicationMain.total == 0) ApplicationMain.begin(); else {
		var $it0 = ApplicationMain.loaders.keys();
		while( $it0.hasNext() ) {
			var path = $it0.next();
			var loader75 = ApplicationMain.loaders.get(path);
			loader75.contentLoaderInfo.addEventListener("complete",ApplicationMain.loader_onComplete);
			loader75.load(new flash.net.URLRequest(path));
		}
		var $it1 = ApplicationMain.urlLoaders.keys();
		while( $it1.hasNext() ) {
			var path = $it1.next();
			var urlLoader = ApplicationMain.urlLoaders.get(path);
			urlLoader.addEventListener("complete",ApplicationMain.loader_onComplete);
			urlLoader.load(new flash.net.URLRequest(path));
		}
	}
}
ApplicationMain.begin = function() {
 
	ApplicationMain.preloader.addEventListener(flash.events.Event.COMPLETE,ApplicationMain.preloader_onComplete);
	ApplicationMain.preloader.onLoaded();
}
ApplicationMain.bitmapClass_onComplete = function(instance) {
	ApplicationMain.completed++;
	var classType = Type.getClass(instance);
	classType.preload = instance;
	if(ApplicationMain.completed == ApplicationMain.total) ApplicationMain.begin();
}
ApplicationMain.loader_onComplete = function(event) {
	ApplicationMain.completed++;
	ApplicationMain.preloader.onUpdate(ApplicationMain.completed,ApplicationMain.total);
	if(ApplicationMain.completed == ApplicationMain.total) ApplicationMain.begin();
}
ApplicationMain.preloader_onComplete = function(event) {
	ApplicationMain.preloader.removeEventListener(flash.events.Event.COMPLETE,ApplicationMain.preloader_onComplete);
	flash.Lib.get_current().removeChild(ApplicationMain.preloader);
	ApplicationMain.preloader = null;
	if(Reflect.field(Main,"main") == null) {
		var mainDisplayObj = Type.createInstance(DocumentClass,[]);
		if(js.Boot.__instanceof(mainDisplayObj,flash.display.DisplayObject)) flash.Lib.get_current().addChild(mainDisplayObj);
	} else Reflect.field(Main,"main").apply(Main,[]);
}
var flash = {}
flash.events = {}
flash.events.IEventDispatcher = function() { }
$hxClasses["flash.events.IEventDispatcher"] = flash.events.IEventDispatcher;
flash.events.IEventDispatcher.__name__ = ["flash","events","IEventDispatcher"];
flash.events.IEventDispatcher.prototype = {
	willTrigger: null
	,removeEventListener: null
	,hasEventListener: null
	,dispatchEvent: null
	,addEventListener: null
	,__class__: flash.events.IEventDispatcher
}
flash.events.EventDispatcher = function(target) {
	if(target != null) this.__target = target; else this.__target = this;
	this.__eventMap = [];
};
$hxClasses["flash.events.EventDispatcher"] = flash.events.EventDispatcher;
flash.events.EventDispatcher.__name__ = ["flash","events","EventDispatcher"];
flash.events.EventDispatcher.__interfaces__ = [flash.events.IEventDispatcher];
flash.events.EventDispatcher.compareListeners = function(l1,l2) {
	return l1.mPriority == l2.mPriority?0:l1.mPriority > l2.mPriority?-1:1;
}
flash.events.EventDispatcher.prototype = {
	willTrigger: function(type) {
		return this.hasEventListener(type);
	}
	,toString: function() {
		return "[ " + this.__name__ + " ]";
	}
	,setList: function(type,list) {
		this.__eventMap[type] = list;
	}
	,removeEventListener: function(type,listener,inCapture) {
		if(inCapture == null) inCapture = false;
		if(!this.existList(type)) return;
		var list = this.getList(type);
		var capture = inCapture == null?false:inCapture;
		var _g1 = 0, _g = list.length;
		while(_g1 < _g) {
			var i = _g1++;
			if(list[i].Is(listener,capture)) {
				list.splice(i,1);
				return;
			}
		}
	}
	,hasEventListener: function(type) {
		return this.existList(type);
	}
	,getList: function(type) {
		return this.__eventMap[type];
	}
	,existList: function(type) {
		return this.__eventMap != null && this.__eventMap[type] != undefined;
	}
	,dispatchEvent: function(event) {
		if(event.target == null) event.target = this.__target;
		var capture = event.eventPhase == flash.events.EventPhase.CAPTURING_PHASE;
		if(this.existList(event.type)) {
			var list = this.getList(event.type);
			var idx = 0;
			while(idx < list.length) {
				var listener = list[idx];
				if(listener.mUseCapture == capture) {
					listener.dispatchEvent(event);
					if(event.__getIsCancelledNow()) return true;
				}
				if(idx < list.length && listener != list[idx]) {
				} else idx++;
			}
			return true;
		}
		return false;
	}
	,addEventListener: function(type,inListener,useCapture,inPriority,useWeakReference) {
		if(useWeakReference == null) useWeakReference = false;
		if(inPriority == null) inPriority = 0;
		if(useCapture == null) useCapture = false;
		var capture = useCapture == null?false:useCapture;
		var priority = inPriority == null?0:inPriority;
		var list = this.getList(type);
		if(!this.existList(type)) {
			list = [];
			this.setList(type,list);
		}
		list.push(new flash.events.Listener(inListener,capture,priority));
		list.sort(flash.events.EventDispatcher.compareListeners);
	}
	,__eventMap: null
	,__target: null
	,__class__: flash.events.EventDispatcher
}
flash.display = {}
flash.display.IBitmapDrawable = function() { }
$hxClasses["flash.display.IBitmapDrawable"] = flash.display.IBitmapDrawable;
flash.display.IBitmapDrawable.__name__ = ["flash","display","IBitmapDrawable"];
flash.display.IBitmapDrawable.prototype = {
	drawToSurface: null
	,__class__: flash.display.IBitmapDrawable
}
flash.display.DisplayObject = function() {
	flash.events.EventDispatcher.call(this,null);
	this.___id = flash.utils.Uuid.uuid();
	this.set_parent(null);
	this.set_transform(new flash.geom.Transform(this));
	this.__x = 0.0;
	this.__y = 0.0;
	this.__scaleX = 1.0;
	this.__scaleY = 1.0;
	this.__rotation = 0.0;
	this.__width = 0.0;
	this.__height = 0.0;
	this.set_visible(true);
	this.alpha = 1.0;
	this.__filters = new Array();
	this.__boundsRect = new flash.geom.Rectangle();
	this.__scrollRect = null;
	this.__mask = null;
	this.__maskingObj = null;
	this.set___combinedVisible(this.get_visible());
};
$hxClasses["flash.display.DisplayObject"] = flash.display.DisplayObject;
flash.display.DisplayObject.__name__ = ["flash","display","DisplayObject"];
flash.display.DisplayObject.__interfaces__ = [flash.display.IBitmapDrawable];
flash.display.DisplayObject.__super__ = flash.events.EventDispatcher;
flash.display.DisplayObject.prototype = $extend(flash.events.EventDispatcher.prototype,{
	__srUpdateDivs: function() {
		var gfx = this.__getGraphics();
		if(gfx == null || this.parent == null) return;
		if(this.__scrollRect == null) {
			if(this._srAxes != null && gfx.__surface.parentNode == this._srAxes && this._srWindow.parentNode != null) this._srWindow.parentNode.replaceChild(gfx.__surface,this._srWindow);
			return;
		}
		if(this._srWindow == null) {
			this._srWindow = js.Browser.document.createElement("div");
			this._srAxes = js.Browser.document.createElement("div");
			this._srWindow.style.setProperty("position","absolute","");
			this._srWindow.style.setProperty("left","0px","");
			this._srWindow.style.setProperty("top","0px","");
			this._srWindow.style.setProperty("width","0px","");
			this._srWindow.style.setProperty("height","0px","");
			this._srWindow.style.setProperty("overflow","hidden","");
			this._srAxes.style.setProperty("position","absolute","");
			this._srAxes.style.setProperty("left","0px","");
			this._srAxes.style.setProperty("top","0px","");
			this._srWindow.appendChild(this._srAxes);
		}
		var pnt = this.parent.localToGlobal(new flash.geom.Point(this.get_x(),this.get_y()));
		this._srWindow.style.left = pnt.x + "px";
		this._srWindow.style.top = pnt.y + "px";
		this._srWindow.style.width = this.__scrollRect.width + "px";
		this._srWindow.style.height = this.__scrollRect.height + "px";
		this._srAxes.style.left = -pnt.x - this.__scrollRect.x + "px";
		this._srAxes.style.top = -pnt.y - this.__scrollRect.y + "px";
		if(gfx.__surface.parentNode != this._srAxes && gfx.__surface.parentNode != null) {
			gfx.__surface.parentNode.insertBefore(this._srWindow,gfx.__surface);
			flash.Lib.__removeSurface(gfx.__surface);
			this._srAxes.appendChild(gfx.__surface);
		}
	}
	,__getSrWindow: function() {
		return this._srWindow;
	}
	,set_width: function(inValue) {
		if(this.get__boundsInvalid()) this.validateBounds();
		var w = this.__boundsRect.width;
		if(this.__scaleX * w != inValue) {
			if(w == 0) {
				this.__scaleX = 1;
				this.__invalidateMatrix(true);
				this.___renderFlags |= 64;
				if(this.parent != null) this.parent.___renderFlags |= 64;
				w = this.__boundsRect.width;
			}
			if(w <= 0) return 0;
			this.__scaleX = inValue / w;
			this.__invalidateMatrix(true);
			this.___renderFlags |= 64;
			if(this.parent != null) this.parent.___renderFlags |= 64;
		}
		return inValue;
	}
	,get_width: function() {
		if(this.get__boundsInvalid()) this.validateBounds();
		return this.__width;
	}
	,set_y: function(inValue) {
		if(this.__y != inValue) {
			this.__y = inValue;
			this.__invalidateMatrix(true);
			if(this.parent != null) this.parent.__invalidateBounds();
		}
		return inValue;
	}
	,get_y: function() {
		return this.__y;
	}
	,set_x: function(inValue) {
		if(this.__x != inValue) {
			this.__x = inValue;
			this.__invalidateMatrix(true);
			if(this.parent != null) this.parent.__invalidateBounds();
		}
		return inValue;
	}
	,get_x: function() {
		return this.__x;
	}
	,set_visible: function(inValue) {
		if(this.__visible != inValue) {
			this.__visible = inValue;
			this.setSurfaceVisible(inValue);
		}
		return this.__visible;
	}
	,get_visible: function() {
		return this.__visible;
	}
	,set_transform: function(inValue) {
		this.transform = inValue;
		this.__x = this.transform.get_matrix().tx;
		this.__y = this.transform.get_matrix().ty;
		this.__invalidateMatrix(true);
		return inValue;
	}
	,get__topmostSurface: function() {
		var gfx = this.__getGraphics();
		if(gfx != null) return gfx.__surface;
		return null;
	}
	,get_stage: function() {
		var gfx = this.__getGraphics();
		if(gfx != null) return flash.Lib.__getStage();
		return null;
	}
	,set_scrollRect: function(inValue) {
		this.__scrollRect = inValue;
		this.__srUpdateDivs();
		return inValue;
	}
	,get_scrollRect: function() {
		if(this.__scrollRect == null) return null;
		return this.__scrollRect.clone();
	}
	,set_scaleY: function(inValue) {
		if(this.__scaleY != inValue) {
			this.__scaleY = inValue;
			this.__invalidateMatrix(true);
			this.___renderFlags |= 64;
			if(this.parent != null) this.parent.___renderFlags |= 64;
		}
		return inValue;
	}
	,get_scaleY: function() {
		return this.__scaleY;
	}
	,set_scaleX: function(inValue) {
		if(this.__scaleX != inValue) {
			this.__scaleX = inValue;
			this.__invalidateMatrix(true);
			this.___renderFlags |= 64;
			if(this.parent != null) this.parent.___renderFlags |= 64;
		}
		return inValue;
	}
	,get_scaleX: function() {
		return this.__scaleX;
	}
	,set_rotation: function(inValue) {
		if(this.__rotation != inValue) {
			this.__rotation = inValue;
			this.__invalidateMatrix(true);
			this.___renderFlags |= 64;
			if(this.parent != null) this.parent.___renderFlags |= 64;
		}
		return inValue;
	}
	,get_rotation: function() {
		return this.__rotation;
	}
	,set_parent: function(inValue) {
		if(inValue == this.parent) return inValue;
		this.__invalidateMatrix();
		if(this.parent != null) {
			HxOverrides.remove(this.parent.__children,this);
			this.parent.__invalidateBounds();
		}
		if(inValue != null) {
			inValue.___renderFlags |= 64;
			if(inValue.parent != null) inValue.parent.___renderFlags |= 64;
		}
		if(this.parent == null && inValue != null) {
			this.parent = inValue;
			var evt = new flash.events.Event(flash.events.Event.ADDED,true,false);
			this.dispatchEvent(evt);
		} else if(this.parent != null && inValue == null) {
			this.parent = inValue;
			var evt = new flash.events.Event(flash.events.Event.REMOVED,true,false);
			this.dispatchEvent(evt);
		} else this.parent = inValue;
		return inValue;
	}
	,set___combinedVisible: function(inValue) {
		if(this.__combinedVisible != inValue) {
			this.__combinedVisible = inValue;
			this.setSurfaceVisible(inValue);
		}
		return this.__combinedVisible;
	}
	,get_mouseY: function() {
		return this.globalToLocal(new flash.geom.Point(0,this.get_stage().get_mouseY())).y;
	}
	,get_mouseX: function() {
		return this.globalToLocal(new flash.geom.Point(this.get_stage().get_mouseX(),0)).x;
	}
	,get__matrixInvalid: function() {
		return (this.___renderFlags & 4) != 0;
	}
	,get__matrixChainInvalid: function() {
		return (this.___renderFlags & 8) != 0;
	}
	,set_mask: function(inValue) {
		if(this.__mask != null) this.__mask.__maskingObj = null;
		this.__mask = inValue;
		if(this.__mask != null) this.__mask.__maskingObj = this;
		return this.__mask;
	}
	,get_mask: function() {
		return this.__mask;
	}
	,set_height: function(inValue) {
		if(this.get__boundsInvalid()) this.validateBounds();
		var h = this.__boundsRect.height;
		if(this.__scaleY * h != inValue) {
			if(h == 0) {
				this.__scaleY = 1;
				this.__invalidateMatrix(true);
				this.___renderFlags |= 64;
				if(this.parent != null) this.parent.___renderFlags |= 64;
				h = this.__boundsRect.height;
			}
			if(h <= 0) return 0;
			this.__scaleY = inValue / h;
			this.__invalidateMatrix(true);
			this.___renderFlags |= 64;
			if(this.parent != null) this.parent.___renderFlags |= 64;
		}
		return inValue;
	}
	,get_height: function() {
		if(this.get__boundsInvalid()) this.validateBounds();
		return this.__height;
	}
	,set_filters: function(filters) {
		var oldFilterCount = this.__filters == null?0:this.__filters.length;
		if(filters == null) {
			this.__filters = null;
			if(oldFilterCount > 0) this.invalidateGraphics();
		} else {
			this.__filters = new Array();
			var _g = 0;
			while(_g < filters.length) {
				var filter = filters[_g];
				++_g;
				this.__filters.push(filter.clone());
			}
			this.invalidateGraphics();
		}
		return filters;
	}
	,get__boundsInvalid: function() {
		var gfx = this.__getGraphics();
		if(gfx == null) return (this.___renderFlags & 64) != 0; else return (this.___renderFlags & 64) != 0 || gfx.boundsDirty;
	}
	,get_filters: function() {
		if(this.__filters == null) return [];
		var result = new Array();
		var _g = 0, _g1 = this.__filters;
		while(_g < _g1.length) {
			var filter = _g1[_g];
			++_g;
			result.push(filter.clone());
		}
		return result;
	}
	,get__bottommostSurface: function() {
		var gfx = this.__getGraphics();
		if(gfx != null) return gfx.__surface;
		return null;
	}
	,__validateMatrix: function() {
		var parentMatrixInvalid = (this.___renderFlags & 8) != 0 && this.parent != null;
		if((this.___renderFlags & 4) != 0 || parentMatrixInvalid) {
			if(parentMatrixInvalid) this.parent.__validateMatrix();
			var m = this.transform.get_matrix();
			if((this.___renderFlags & 16) != 0) this.___renderFlags &= -5;
			if((this.___renderFlags & 4) != 0) {
				m.identity();
				m.scale(this.__scaleX,this.__scaleY);
				var rad = this.__rotation * flash.geom.Transform.DEG_TO_RAD;
				if(rad != 0.0) m.rotate(rad);
				m.translate(this.__x,this.__y);
				this.transform._matrix.copy(m);
				m;
			}
			var cm = this.transform.__getFullMatrix(null);
			var fm = this.parent == null?m:this.parent.transform.__getFullMatrix(m);
			this._fullScaleX = fm._sx;
			this._fullScaleY = fm._sy;
			if(cm.a != fm.a || cm.b != fm.b || cm.c != fm.c || cm.d != fm.d || cm.tx != fm.tx || cm.ty != fm.ty) {
				this.transform.__setFullMatrix(fm);
				this.___renderFlags |= 32;
			}
			this.___renderFlags &= -29;
		}
	}
	,__unifyChildrenWithDOM: function(lastMoveObj) {
		var gfx = this.__getGraphics();
		if(gfx != null && lastMoveObj != null && this != lastMoveObj) {
			var ogfx = lastMoveObj.__getGraphics();
			if(ogfx != null) flash.Lib.__setSurfaceZIndexAfter(this.__scrollRect == null?gfx.__surface:this._srWindow,lastMoveObj.__scrollRect == null?ogfx.__surface:lastMoveObj == this.parent?ogfx.__surface:lastMoveObj._srWindow);
		}
		if(gfx == null) return lastMoveObj; else return this;
	}
	,__testFlag: function(mask) {
		return (this.___renderFlags & mask) != 0;
	}
	,__setMatrix: function(inValue) {
		this.transform._matrix.copy(inValue);
		return inValue;
	}
	,__setFullMatrix: function(inValue) {
		return this.transform.__setFullMatrix(inValue);
	}
	,__setFlagToValue: function(mask,value) {
		if(value) this.___renderFlags |= mask; else this.___renderFlags &= ~mask;
	}
	,__setFlag: function(mask) {
		this.___renderFlags |= mask;
	}
	,__setDimensions: function() {
		if(this.scale9Grid != null) {
			this.__boundsRect.width *= this.__scaleX;
			this.__boundsRect.height *= this.__scaleY;
			this.__width = this.__boundsRect.width;
			this.__height = this.__boundsRect.height;
		} else {
			this.__width = this.__boundsRect.width * this.__scaleX;
			this.__height = this.__boundsRect.height * this.__scaleY;
		}
	}
	,__render: function(inMask,clipRect) {
		if(!this.__combinedVisible) return;
		var gfx = this.__getGraphics();
		if(gfx == null) return;
		if((this.___renderFlags & 4) != 0 || (this.___renderFlags & 8) != 0) this.__validateMatrix();
		if(gfx.__render(inMask,this.__filters,1,1)) {
			this.___renderFlags |= 64;
			if(this.parent != null) this.parent.___renderFlags |= 64;
			this.__applyFilters(gfx.__surface);
			this.___renderFlags |= 32;
		}
		var fullAlpha = (this.parent != null?this.parent.__combinedAlpha:1) * this.alpha;
		if(inMask != null) {
			var m = this.getSurfaceTransform(gfx);
			flash.Lib.__drawToSurface(gfx.__surface,inMask,m,fullAlpha,clipRect);
		} else {
			if((this.___renderFlags & 32) != 0) {
				var m = this.getSurfaceTransform(gfx);
				flash.Lib.__setSurfaceTransform(gfx.__surface,m);
				this.___renderFlags &= -33;
				this.__srUpdateDivs();
			}
			flash.Lib.__setSurfaceOpacity(gfx.__surface,fullAlpha);
		}
	}
	,__removeFromStage: function() {
		var gfx = this.__getGraphics();
		if(gfx != null && flash.Lib.__isOnStage(gfx.__surface)) {
			flash.Lib.__removeSurface(gfx.__surface);
			var evt = new flash.events.Event(flash.events.Event.REMOVED_FROM_STAGE,false,false);
			this.dispatchEvent(evt);
		}
	}
	,__matrixOverridden: function() {
		this.__x = this.transform.get_matrix().tx;
		this.__y = this.transform.get_matrix().ty;
		this.___renderFlags |= 16;
		this.___renderFlags |= 4;
		this.___renderFlags |= 64;
		if(this.parent != null) this.parent.___renderFlags |= 64;
	}
	,__isOnStage: function() {
		var gfx = this.__getGraphics();
		if(gfx != null && flash.Lib.__isOnStage(gfx.__surface)) return true;
		return false;
	}
	,__invalidateMatrix: function(local) {
		if(local == null) local = false;
		if(local) this.___renderFlags |= 4; else this.___renderFlags |= 8;
	}
	,__invalidateBounds: function() {
		this.___renderFlags |= 64;
		if(this.parent != null) this.parent.___renderFlags |= 64;
	}
	,__getSurface: function() {
		var gfx = this.__getGraphics();
		var surface = null;
		if(gfx != null) surface = gfx.__surface;
		return surface;
	}
	,__getObjectUnderPoint: function(point) {
		if(!this.get_visible()) return null;
		var gfx = this.__getGraphics();
		if(gfx != null) {
			gfx.__render();
			var extX = gfx.__extent.x;
			var extY = gfx.__extent.y;
			var local = this.globalToLocal(point);
			if(local.x - extX <= 0 || local.y - extY <= 0 || (local.x - extX) * this.get_scaleX() > this.get_width() || (local.y - extY) * this.get_scaleY() > this.get_height()) return null;
			if(gfx.__hitTest(local.x,local.y)) return this;
		}
		return null;
	}
	,__getMatrix: function() {
		return this.transform.get_matrix();
	}
	,__getInteractiveObjectStack: function(outStack) {
		var io = this;
		if(io != null) outStack.push(io);
		if(this.parent != null) this.parent.__getInteractiveObjectStack(outStack);
	}
	,__getGraphics: function() {
		return null;
	}
	,__getFullMatrix: function(localMatrix) {
		return this.transform.__getFullMatrix(localMatrix);
	}
	,__fireEvent: function(event) {
		var stack = [];
		if(this.parent != null) this.parent.__getInteractiveObjectStack(stack);
		var l = stack.length;
		if(l > 0) {
			event.__setPhase(flash.events.EventPhase.CAPTURING_PHASE);
			stack.reverse();
			var _g = 0;
			while(_g < stack.length) {
				var obj = stack[_g];
				++_g;
				event.currentTarget = obj;
				obj.__dispatchEvent(event);
				if(event.__getIsCancelled()) return;
			}
		}
		event.__setPhase(flash.events.EventPhase.AT_TARGET);
		event.currentTarget = this;
		this.__dispatchEvent(event);
		if(event.__getIsCancelled()) return;
		if(event.bubbles) {
			event.__setPhase(flash.events.EventPhase.BUBBLING_PHASE);
			stack.reverse();
			var _g = 0;
			while(_g < stack.length) {
				var obj = stack[_g];
				++_g;
				event.currentTarget = obj;
				obj.__dispatchEvent(event);
				if(event.__getIsCancelled()) return;
			}
		}
	}
	,__dispatchEvent: function(event) {
		if(event.target == null) event.target = this;
		event.currentTarget = this;
		return flash.events.EventDispatcher.prototype.dispatchEvent.call(this,event);
	}
	,__contains: function(child) {
		return false;
	}
	,__clearFlag: function(mask) {
		this.___renderFlags &= ~mask;
	}
	,__broadcast: function(event) {
		this.__dispatchEvent(event);
	}
	,__applyFilters: function(surface) {
		if(this.__filters != null) {
			var _g = 0, _g1 = this.__filters;
			while(_g < _g1.length) {
				var filter = _g1[_g];
				++_g;
				filter.__applyFilter(surface);
			}
		}
	}
	,__addToStage: function(newParent,beforeSibling) {
		var gfx = this.__getGraphics();
		if(gfx == null) return;
		if(newParent.__getGraphics() != null) {
			flash.Lib.__setSurfaceId(gfx.__surface,this.___id);
			if(beforeSibling != null && beforeSibling.__getGraphics() != null) flash.Lib.__appendSurface(gfx.__surface,beforeSibling.get__bottommostSurface()); else {
				var stageChildren = [];
				var _g = 0, _g1 = newParent.__children;
				while(_g < _g1.length) {
					var child = _g1[_g];
					++_g;
					if(child.get_stage() != null) stageChildren.push(child);
				}
				if(stageChildren.length < 1) flash.Lib.__appendSurface(gfx.__surface,null,newParent.get__topmostSurface()); else {
					var nextSibling = stageChildren[stageChildren.length - 1];
					var container;
					while(js.Boot.__instanceof(nextSibling,flash.display.DisplayObjectContainer)) {
						container = js.Boot.__cast(nextSibling , flash.display.DisplayObjectContainer);
						if(container.__children.length > 0) nextSibling = container.__children[container.__children.length - 1]; else break;
					}
					if(nextSibling.__getGraphics() != gfx) flash.Lib.__appendSurface(gfx.__surface,null,nextSibling.get__topmostSurface()); else flash.Lib.__appendSurface(gfx.__surface);
				}
			}
			flash.Lib.__setSurfaceTransform(gfx.__surface,this.getSurfaceTransform(gfx));
		} else if(newParent.name == "Stage") flash.Lib.__appendSurface(gfx.__surface);
		if(this.__isOnStage()) {
			this.__srUpdateDivs();
			var evt = new flash.events.Event(flash.events.Event.ADDED_TO_STAGE,false,false);
			this.dispatchEvent(evt);
		}
	}
	,validateBounds: function() {
		if(this.get__boundsInvalid()) {
			var gfx = this.__getGraphics();
			if(gfx == null) {
				this.__boundsRect.x = this.get_x();
				this.__boundsRect.y = this.get_y();
				this.__boundsRect.width = 0;
				this.__boundsRect.height = 0;
			} else {
				this.__boundsRect = gfx.__extent.clone();
				if(this.scale9Grid != null) {
					this.__boundsRect.width *= this.__scaleX;
					this.__boundsRect.height *= this.__scaleY;
					this.__width = this.__boundsRect.width;
					this.__height = this.__boundsRect.height;
				} else {
					this.__width = this.__boundsRect.width * this.__scaleX;
					this.__height = this.__boundsRect.height * this.__scaleY;
				}
				gfx.boundsDirty = false;
			}
			this.___renderFlags &= -65;
		}
	}
	,toString: function() {
		return "[DisplayObject name=" + this.name + " id=" + this.___id + "]";
	}
	,setSurfaceVisible: function(inValue) {
		var gfx = this.__getGraphics();
		if(gfx != null && gfx.__surface != null) flash.Lib.__setSurfaceVisible(gfx.__surface,inValue);
	}
	,localToGlobal: function(point) {
		if((this.___renderFlags & 4) != 0 || (this.___renderFlags & 8) != 0) this.__validateMatrix();
		return this.transform.__getFullMatrix(null).transformPoint(point);
	}
	,invalidateGraphics: function() {
		var gfx = this.__getGraphics();
		if(gfx != null) {
			gfx.__changed = true;
			gfx.__clearNextCycle = true;
		}
	}
	,hitTestPoint: function(x,y,shapeFlag) {
		if(shapeFlag == null) shapeFlag = false;
		var boundingBox = shapeFlag == null?true:!shapeFlag;
		if(!boundingBox) return this.__getObjectUnderPoint(new flash.geom.Point(x,y)) != null; else {
			var gfx = this.__getGraphics();
			if(gfx != null) {
				var extX = gfx.__extent.x;
				var extY = gfx.__extent.y;
				var local = this.globalToLocal(new flash.geom.Point(x,y));
				if(local.x - extX < 0 || local.y - extY < 0 || (local.x - extX) * this.get_scaleX() > this.get_width() || (local.y - extY) * this.get_scaleY() > this.get_height()) return false; else return true;
			}
			return false;
		}
	}
	,hitTestObject: function(obj) {
		if(obj != null && obj.parent != null && this.parent != null) {
			var currentBounds = this.getBounds(this);
			var targetBounds = obj.getBounds(this);
			return currentBounds.intersects(targetBounds);
		}
		return false;
	}
	,handleGraphicsUpdated: function(gfx) {
		this.___renderFlags |= 64;
		if(this.parent != null) this.parent.___renderFlags |= 64;
		this.__applyFilters(gfx.__surface);
		this.___renderFlags |= 32;
	}
	,globalToLocal: function(inPos) {
		if((this.___renderFlags & 4) != 0 || (this.___renderFlags & 8) != 0) this.__validateMatrix();
		return this.transform.__getFullMatrix(null).invert().transformPoint(inPos);
	}
	,getSurfaceTransform: function(gfx) {
		var extent = gfx.__extentWithFilters;
		var fm = this.transform.__getFullMatrix(null);
		fm.__translateTransformed(extent.get_topLeft());
		return fm;
	}
	,getScreenBounds: function() {
		if(this.get__boundsInvalid()) this.validateBounds();
		return this.__boundsRect.clone();
	}
	,getRect: function(targetCoordinateSpace) {
		return this.getBounds(targetCoordinateSpace);
	}
	,getBounds: function(targetCoordinateSpace) {
		if((this.___renderFlags & 4) != 0 || (this.___renderFlags & 8) != 0) this.__validateMatrix();
		if(this.get__boundsInvalid()) this.validateBounds();
		var m = this.transform.__getFullMatrix(null);
		if(targetCoordinateSpace != null) m.concat(targetCoordinateSpace.transform.__getFullMatrix(null).invert());
		var rect = this.__boundsRect.transform(m);
		return rect;
	}
	,drawToSurface: function(inSurface,matrix,inColorTransform,blendMode,clipRect,smoothing) {
		var oldAlpha = this.alpha;
		this.alpha = 1;
		this.__render(inSurface,clipRect);
		this.alpha = oldAlpha;
	}
	,dispatchEvent: function(event) {
		var result = this.__dispatchEvent(event);
		if(event.__getIsCancelled()) return true;
		if(event.bubbles && this.parent != null) this.parent.dispatchEvent(event);
		return result;
	}
	,_srAxes: null
	,_srWindow: null
	,_topmostSurface: null
	,___renderFlags: null
	,___id: null
	,_fullScaleY: null
	,_fullScaleX: null
	,_bottommostSurface: null
	,__y: null
	,__x: null
	,__width: null
	,__visible: null
	,__scrollRect: null
	,__scaleY: null
	,__scaleX: null
	,__rotation: null
	,__maskingObj: null
	,__mask: null
	,__height: null
	,__filters: null
	,__boundsRect: null
	,__combinedVisible: null
	,transform: null
	,scale9Grid: null
	,parent: null
	,name: null
	,loaderInfo: null
	,cacheAsBitmap: null
	,blendMode: null
	,alpha: null
	,accessibilityProperties: null
	,__class__: flash.display.DisplayObject
	,__properties__: {set_filters:"set_filters",get_filters:"get_filters",set_height:"set_height",get_height:"get_height",set_mask:"set_mask",get_mask:"get_mask",get_mouseX:"get_mouseX",get_mouseY:"get_mouseY",set_parent:"set_parent",set_rotation:"set_rotation",get_rotation:"get_rotation",set_scaleX:"set_scaleX",get_scaleX:"get_scaleX",set_scaleY:"set_scaleY",get_scaleY:"get_scaleY",set_scrollRect:"set_scrollRect",get_scrollRect:"get_scrollRect",get_stage:"get_stage",set_transform:"set_transform",set_visible:"set_visible",get_visible:"get_visible",set_width:"set_width",get_width:"get_width",set_x:"set_x",get_x:"get_x",set_y:"set_y",get_y:"get_y",set___combinedVisible:"set___combinedVisible",get__bottommostSurface:"get__bottommostSurface",get__boundsInvalid:"get__boundsInvalid",get__matrixChainInvalid:"get__matrixChainInvalid",get__matrixInvalid:"get__matrixInvalid",get__topmostSurface:"get__topmostSurface"}
});
flash.display.InteractiveObject = function() {
	flash.display.DisplayObject.call(this);
	this.tabEnabled = false;
	this.mouseEnabled = true;
	this.doubleClickEnabled = true;
	this.set_tabIndex(0);
};
$hxClasses["flash.display.InteractiveObject"] = flash.display.InteractiveObject;
flash.display.InteractiveObject.__name__ = ["flash","display","InteractiveObject"];
flash.display.InteractiveObject.__super__ = flash.display.DisplayObject;
flash.display.InteractiveObject.prototype = $extend(flash.display.DisplayObject.prototype,{
	set_tabIndex: function(inIndex) {
		return this.__tabIndex = inIndex;
	}
	,get_tabIndex: function() {
		return this.__tabIndex;
	}
	,__getObjectUnderPoint: function(point) {
		if(!this.mouseEnabled) return null; else return flash.display.DisplayObject.prototype.__getObjectUnderPoint.call(this,point);
	}
	,toString: function() {
		return "[InteractiveObject name=" + this.name + " id=" + this.___id + "]";
	}
	,__tabIndex: null
	,__doubleClickEnabled: null
	,tabEnabled: null
	,mouseEnabled: null
	,focusRect: null
	,doubleClickEnabled: null
	,__class__: flash.display.InteractiveObject
	,__properties__: $extend(flash.display.DisplayObject.prototype.__properties__,{set_tabIndex:"set_tabIndex",get_tabIndex:"get_tabIndex"})
});
flash.display.DisplayObjectContainer = function() {
	this.__children = new Array();
	this.mouseChildren = true;
	this.tabChildren = true;
	flash.display.InteractiveObject.call(this);
	this.__combinedAlpha = this.alpha;
};
$hxClasses["flash.display.DisplayObjectContainer"] = flash.display.DisplayObjectContainer;
flash.display.DisplayObjectContainer.__name__ = ["flash","display","DisplayObjectContainer"];
flash.display.DisplayObjectContainer.__super__ = flash.display.InteractiveObject;
flash.display.DisplayObjectContainer.prototype = $extend(flash.display.InteractiveObject.prototype,{
	set_scrollRect: function(inValue) {
		inValue = flash.display.InteractiveObject.prototype.set_scrollRect.call(this,inValue);
		this.__unifyChildrenWithDOM();
		return inValue;
	}
	,set_visible: function(inVal) {
		this.set___combinedVisible(this.parent != null?this.parent.__combinedVisible && inVal:inVal);
		return flash.display.InteractiveObject.prototype.set_visible.call(this,inVal);
	}
	,get_numChildren: function() {
		return this.__children.length;
	}
	,set___combinedVisible: function(inVal) {
		if(inVal != this.__combinedVisible) {
			var _g = 0, _g1 = this.__children;
			while(_g < _g1.length) {
				var child = _g1[_g];
				++_g;
				child.set___combinedVisible(child.get_visible() && inVal);
			}
		}
		return flash.display.InteractiveObject.prototype.set___combinedVisible.call(this,inVal);
	}
	,set_filters: function(filters) {
		flash.display.InteractiveObject.prototype.set_filters.call(this,filters);
		var _g = 0, _g1 = this.__children;
		while(_g < _g1.length) {
			var child = _g1[_g];
			++_g;
			child.set_filters(filters);
		}
		return filters;
	}
	,__unifyChildrenWithDOM: function(lastMoveObj) {
		var obj = flash.display.InteractiveObject.prototype.__unifyChildrenWithDOM.call(this,lastMoveObj);
		var _g = 0, _g1 = this.__children;
		while(_g < _g1.length) {
			var child = _g1[_g];
			++_g;
			obj = child.__unifyChildrenWithDOM(obj);
			if(child.get_scrollRect() != null) obj = child;
		}
		return obj;
	}
	,__swapSurface: function(c1,c2) {
		if(this.__children[c1] == null) throw "Null element at index " + c1 + " length " + this.__children.length;
		if(this.__children[c2] == null) throw "Null element at index " + c2 + " length " + this.__children.length;
		var gfx1 = this.__children[c1].__getGraphics();
		var gfx2 = this.__children[c2].__getGraphics();
		if(gfx1 != null && gfx2 != null) {
			var surface1 = this.__children[c1].__scrollRect == null?gfx1.__surface:this.__children[c1].__getSrWindow();
			var surface2 = this.__children[c2].__scrollRect == null?gfx2.__surface:this.__children[c2].__getSrWindow();
			if(surface1 != null && surface2 != null) flash.Lib.__swapSurface(surface1,surface2);
		}
	}
	,__render: function(inMask,clipRect) {
		if(!this.__visible) return;
		if(clipRect == null && this.__scrollRect != null) clipRect = this.__scrollRect;
		flash.display.InteractiveObject.prototype.__render.call(this,inMask,clipRect);
		this.__combinedAlpha = this.parent != null?this.parent.__combinedAlpha * this.alpha:this.alpha;
		var _g = 0, _g1 = this.__children;
		while(_g < _g1.length) {
			var child = _g1[_g];
			++_g;
			if(child.__visible) {
				if(clipRect != null) {
					if((child.___renderFlags & 4) != 0 || (child.___renderFlags & 8) != 0) child.__validateMatrix();
				}
				child.__render(inMask,clipRect);
			}
		}
		if(this.__addedChildren) {
			this.__unifyChildrenWithDOM();
			this.__addedChildren = false;
		}
	}
	,__removeFromStage: function() {
		flash.display.InteractiveObject.prototype.__removeFromStage.call(this);
		var _g = 0, _g1 = this.__children;
		while(_g < _g1.length) {
			var child = _g1[_g];
			++_g;
			child.__removeFromStage();
		}
	}
	,__removeChild: function(child) {
		HxOverrides.remove(this.__children,child);
		child.__removeFromStage();
		child.set_parent(null);
		return child;
	}
	,__invalidateMatrix: function(local) {
		if(local == null) local = false;
		if(!((this.___renderFlags & 8) != 0) && !((this.___renderFlags & 4) != 0)) {
			var _g = 0, _g1 = this.__children;
			while(_g < _g1.length) {
				var child = _g1[_g];
				++_g;
				child.__invalidateMatrix();
			}
		}
		flash.display.InteractiveObject.prototype.__invalidateMatrix.call(this,local);
	}
	,__getObjectsUnderPoint: function(point,stack) {
		var l = this.__children.length - 1;
		var _g1 = 0, _g = this.__children.length;
		while(_g1 < _g) {
			var i = _g1++;
			var result = this.__children[l - i].__getObjectUnderPoint(point);
			if(result != null) stack.push(result);
		}
	}
	,__getObjectUnderPoint: function(point) {
		if(!this.get_visible()) return null;
		var l = this.__children.length - 1;
		var _g1 = 0, _g = this.__children.length;
		while(_g1 < _g) {
			var i = _g1++;
			var result = null;
			if(this.mouseEnabled) result = this.__children[l - i].__getObjectUnderPoint(point);
			if(result != null) return this.mouseChildren?result:this;
		}
		return flash.display.InteractiveObject.prototype.__getObjectUnderPoint.call(this,point);
	}
	,__contains: function(child) {
		if(child == null) return false;
		if(this == child) return true;
		var _g = 0, _g1 = this.__children;
		while(_g < _g1.length) {
			var c = _g1[_g];
			++_g;
			if(c == child || c.__contains(child)) return true;
		}
		return false;
	}
	,__broadcast: function(event) {
		var _g = 0, _g1 = this.__children;
		while(_g < _g1.length) {
			var child = _g1[_g];
			++_g;
			child.__broadcast(event);
		}
		this.dispatchEvent(event);
	}
	,__addToStage: function(newParent,beforeSibling) {
		flash.display.InteractiveObject.prototype.__addToStage.call(this,newParent,beforeSibling);
		var _g = 0, _g1 = this.__children;
		while(_g < _g1.length) {
			var child = _g1[_g];
			++_g;
			if(child.__getGraphics() == null || !child.__isOnStage()) child.__addToStage(this);
		}
	}
	,validateBounds: function() {
		if(this.get__boundsInvalid()) {
			flash.display.InteractiveObject.prototype.validateBounds.call(this);
			var _g = 0, _g1 = this.__children;
			while(_g < _g1.length) {
				var obj = _g1[_g];
				++_g;
				if(obj.get_visible()) {
					var r = obj.getBounds(this);
					if(r.width != 0 || r.height != 0) {
						if(this.__boundsRect.width == 0 && this.__boundsRect.height == 0) this.__boundsRect = r.clone(); else this.__boundsRect.extendBounds(r);
					}
				}
			}
			if(this.scale9Grid != null) {
				this.__boundsRect.width *= this.__scaleX;
				this.__boundsRect.height *= this.__scaleY;
				this.__width = this.__boundsRect.width;
				this.__height = this.__boundsRect.height;
			} else {
				this.__width = this.__boundsRect.width * this.__scaleX;
				this.__height = this.__boundsRect.height * this.__scaleY;
			}
		}
	}
	,toString: function() {
		return "[DisplayObjectContainer name=" + this.name + " id=" + this.___id + "]";
	}
	,swapChildrenAt: function(child1,child2) {
		var swap = this.__children[child1];
		this.__children[child1] = this.__children[child2];
		this.__children[child2] = swap;
		swap = null;
	}
	,swapChildren: function(child1,child2) {
		var c1 = -1;
		var c2 = -1;
		var swap;
		var _g1 = 0, _g = this.__children.length;
		while(_g1 < _g) {
			var i = _g1++;
			if(this.__children[i] == child1) c1 = i; else if(this.__children[i] == child2) c2 = i;
		}
		if(c1 != -1 && c2 != -1) {
			swap = this.__children[c1];
			this.__children[c1] = this.__children[c2];
			this.__children[c2] = swap;
			swap = null;
			this.__swapSurface(c1,c2);
			child1.__unifyChildrenWithDOM();
			child2.__unifyChildrenWithDOM();
		}
	}
	,setChildIndex: function(child,index) {
		if(index > this.__children.length) throw "Invalid index position " + index;
		var oldIndex = this.getChildIndex(child);
		if(oldIndex < 0) {
			var msg = "setChildIndex : object " + child.name + " not found.";
			if(child.parent == this) {
				var realindex = -1;
				var _g1 = 0, _g = this.__children.length;
				while(_g1 < _g) {
					var i = _g1++;
					if(this.__children[i] == child) {
						realindex = i;
						break;
					}
				}
				if(realindex != -1) msg += "Internal error: Real child index was " + Std.string(realindex); else msg += "Internal error: Child was not in __children array!";
			}
			throw msg;
		}
		if(index < oldIndex) {
			var i = oldIndex;
			while(i > index) {
				this.swapChildren(this.__children[i],this.__children[i - 1]);
				i--;
			}
		} else if(oldIndex < index) {
			var i = oldIndex;
			while(i < index) {
				this.swapChildren(this.__children[i],this.__children[i + 1]);
				i++;
			}
		}
	}
	,removeChildAt: function(index) {
		if(index >= 0 && index < this.__children.length) return this.__removeChild(this.__children[index]);
		throw "removeChildAt(" + index + ") : none found?";
	}
	,removeChild: function(inChild) {
		var _g = 0, _g1 = this.__children;
		while(_g < _g1.length) {
			var child = _g1[_g];
			++_g;
			if(child == inChild) return (function($this) {
				var $r;
				HxOverrides.remove($this.__children,child);
				child.__removeFromStage();
				child.set_parent(null);
				$r = child;
				return $r;
			}(this));
		}
		throw "removeChild : none found?";
	}
	,getObjectsUnderPoint: function(point) {
		var result = new Array();
		this.__getObjectsUnderPoint(point,result);
		return result;
	}
	,getChildIndex: function(inChild) {
		var _g1 = 0, _g = this.__children.length;
		while(_g1 < _g) {
			var i = _g1++;
			if(this.__children[i] == inChild) return i;
		}
		return -1;
	}
	,getChildByName: function(inName) {
		var _g = 0, _g1 = this.__children;
		while(_g < _g1.length) {
			var child = _g1[_g];
			++_g;
			if(child.name == inName) return child;
		}
		return null;
	}
	,getChildAt: function(index) {
		if(index >= 0 && index < this.__children.length) return this.__children[index];
		throw "getChildAt : index out of bounds " + index + "/" + this.__children.length;
		return null;
	}
	,contains: function(child) {
		return this.__contains(child);
	}
	,addChildAt: function(object,index) {
		if(index > this.__children.length || index < 0) throw "Invalid index position " + index;
		this.__addedChildren = true;
		if(object.parent == this) {
			this.setChildIndex(object,index);
			return object;
		}
		if(index == this.__children.length) return this.addChild(object); else {
			if(this.__isOnStage()) object.__addToStage(this,this.__children[index]);
			this.__children.splice(index,0,object);
			object.set_parent(this);
		}
		return object;
	}
	,addChild: function(object) {
		if(object == null) throw "DisplayObjectContainer asked to add null child object";
		if(object == this) throw "Adding to self";
		this.__addedChildren = true;
		if(object.parent == this) {
			this.setChildIndex(object,this.__children.length - 1);
			return object;
		}
		object.set_parent(this);
		if(this.__isOnStage()) object.__addToStage(this);
		if(this.__children == null) this.__children = new Array();
		this.__children.push(object);
		return object;
	}
	,__addedChildren: null
	,__combinedAlpha: null
	,__children: null
	,tabChildren: null
	,mouseChildren: null
	,__class__: flash.display.DisplayObjectContainer
	,__properties__: $extend(flash.display.InteractiveObject.prototype.__properties__,{get_numChildren:"get_numChildren"})
});
flash.display.Sprite = function() {
	flash.display.DisplayObjectContainer.call(this);
	this.__graphics = new flash.display.Graphics();
	this.buttonMode = false;
};
$hxClasses["flash.display.Sprite"] = flash.display.Sprite;
flash.display.Sprite.__name__ = ["flash","display","Sprite"];
flash.display.Sprite.__super__ = flash.display.DisplayObjectContainer;
flash.display.Sprite.prototype = $extend(flash.display.DisplayObjectContainer.prototype,{
	set_useHandCursor: function(cursor) {
		if(cursor == this.useHandCursor) return cursor;
		if(this.__cursorCallbackOver != null) this.removeEventListener(flash.events.MouseEvent.ROLL_OVER,this.__cursorCallbackOver);
		if(this.__cursorCallbackOut != null) this.removeEventListener(flash.events.MouseEvent.ROLL_OUT,this.__cursorCallbackOut);
		if(!cursor) flash.Lib.__setCursor(flash._Lib.CursorType.Default); else {
			this.__cursorCallbackOver = function(_) {
				flash.Lib.__setCursor(flash._Lib.CursorType.Pointer);
			};
			this.__cursorCallbackOut = function(_) {
				flash.Lib.__setCursor(flash._Lib.CursorType.Default);
			};
			this.addEventListener(flash.events.MouseEvent.ROLL_OVER,this.__cursorCallbackOver);
			this.addEventListener(flash.events.MouseEvent.ROLL_OUT,this.__cursorCallbackOut);
		}
		this.useHandCursor = cursor;
		return cursor;
	}
	,get_graphics: function() {
		return this.__graphics;
	}
	,get_dropTarget: function() {
		return this.__dropTarget;
	}
	,__getGraphics: function() {
		return this.__graphics;
	}
	,toString: function() {
		return "[Sprite name=" + this.name + " id=" + this.___id + "]";
	}
	,stopDrag: function() {
		if(this.__isOnStage()) {
			this.get_stage().__stopDrag(this);
			var l = this.parent.__children.length - 1;
			var obj = this.get_stage();
			var _g1 = 0, _g = this.parent.__children.length;
			while(_g1 < _g) {
				var i = _g1++;
				var result = this.parent.__children[l - i].__getObjectUnderPoint(new flash.geom.Point(this.get_stage().get_mouseX(),this.get_stage().get_mouseY()));
				if(result != null) obj = result;
			}
			if(obj != this) this.__dropTarget = obj; else this.__dropTarget = this.get_stage();
		}
	}
	,startDrag: function(lockCenter,bounds) {
		if(lockCenter == null) lockCenter = false;
		if(this.__isOnStage()) this.get_stage().__startDrag(this,lockCenter,bounds);
	}
	,__graphics: null
	,__dropTarget: null
	,__cursorCallbackOver: null
	,__cursorCallbackOut: null
	,useHandCursor: null
	,buttonMode: null
	,__class__: flash.display.Sprite
	,__properties__: $extend(flash.display.DisplayObjectContainer.prototype.__properties__,{get_dropTarget:"get_dropTarget",get_graphics:"get_graphics",set_useHandCursor:"set_useHandCursor"})
});
var Main = function() {
	this.soundsAvailable = true;
	this.muted = false;
	this.ambientAttemps = 0;
	this.playSoundsByAction = false;
	this.isPausedByPortrait = false;
	this.isPaused = true;
	this.wavePauseFrames = 20;
	this.waveFrames = 0;
	this.elapsedFrames = 1;
	this.bakesPerWave = 0;
	this.currentMaxBakesPerWave = 0;
	this.maxBakesPerWave = 7;
	this.wavePauseFramesMax = 150;
	this.wavePauseFramesMin = 70;
	this.waveFramesMax = 40;
	this.waveFramesMin = 20;
	this.gamePlay = 1;
	this.wasShownTutorial = false;
	this.isDown = false;
	this.elapsedTime = 0;
	this.totalTimeGamePlay3 = 60;
	this.isBliting = true;
	flash.display.Sprite.call(this);
	this.debugTF = new flash.text.TextField();
	Main.current = this;
	this.hp = new flash.geom.Point();
	this.radToGrad = 180 / Math.PI;
	this.touches = new haxe.ds.IntMap();
	this.addEventListener(flash.events.Event.ADDED_TO_STAGE,$bind(this,this.added));
	this.soundAssets = new haxe.ds.StringMap();
	this.soundsToPlay = new Array();
	eval("getOS();");
	var os = eval("userOS");
	var osVer = eval("userOSver");
	if(os == "iOS" && Std.parseFloat(osVer.charAt(0)) < 6) {
		this.soundsAvailable = true;
		this.ambientAttemps = 2;
	}
	if(os == "iOS") this.playSoundsByAction = true;
	this.ambientAttemps = 2;
	eval("new Howl({ " + " urls: ['" + "snd/ambient" + ".mp3', '" + "snd/ambient" + ".ogg'], " + " loop : true " + " }); ");
	js.Browser.document.addEventListener("touchstart",$bind(this,this.bodyClick));
	js.Browser.document.addEventListener("touchend",$bind(this,this.bodyClick));
	js.Browser.document.addEventListener("click",$bind(this,this.bodyClick));
	this.tracker = new googleAnalytics.Tracker("UA-49887304-1","cawogames.com");
	this.visitor = new googleAnalytics.Visitor();
	this.visitor.setUserAgent("haXe-ga");
	this.visitor.setScreenResolution("1024x768");
	this.visitor.setLocale("es_AR");
	this.session = new googleAnalytics.Session();
	this.trackPageview();
};
$hxClasses["Main"] = Main;
Main.__name__ = ["Main"];
Main.openMoreGames = function() {
	//js.Browser.window.open("http://www.myrealgames.com/mobile-games/?utm_source=SweetSlice&utm_medium=html5_moregames","_blank").focus();
	try{parent.moregame();}catch(e){}
}
Main.main = function() {
	flash.Lib.get_current().get_stage().align = flash.display.StageAlign.TOP_LEFT;
	flash.Lib.get_current().get_stage().scaleMode = flash.display.StageScaleMode.NO_SCALE;
	flash.Lib.get_current().addChild(new Main());
}
Main.__super__ = flash.display.Sprite;
Main.prototype = $extend(flash.display.Sprite.prototype,{
	addBake: function() {
	}
	,stopGame: function(showFinishScreen) {
		if(showFinishScreen == null) showFinishScreen = false;
		if(this.isBliting) this.blitCanvas.paused = true; else {
			var sliceShape;
			sliceShape = this.sliceShapeContainer.getChildAt(0);
			sliceShape.pause(true);
		}
		this.isPaused = true;
		if(showFinishScreen) {
			this.pauseMenu.disable();
			this.pauseBtn.alpha = 0;
		} else {
			this.pauseBtn.alpha = 0;
			this.pauseMenu.enable();
		}
		if(showFinishScreen) {
			if(!this.isBliting) {
				var bake;
				while(this.bakersContainer.__children.length > 0) {
					bake = this.bakersContainer.removeChildAt(0);
					bake.sendToPool();
				}
				var slcieEffect;
				while(this.sliceEffectContainer.__children.length > 0) {
					slcieEffect = this.sliceEffectContainer.removeChildAt(0);
					slcieEffect.sendToPool();
				}
				var slicePart;
				while(this.slicePartsContainer.__children.length > 0) {
					slicePart = this.slicePartsContainer.removeChildAt(0);
					slicePart.sendToPool();
				}
			} else {
			}
			this.finishScreen.enable();
		}
	}
	,startGame: function() {
		haxe.Timer.delay($bind(this,this.onTimer),1000);
		if(this.gamePlay == 2) this.blitCanvas.timerVisible = true; else this.blitCanvas.timerVisible = false;
		if(this.isBliting) this.blitCanvas.paused = false; else {
			var sliceShape;
			sliceShape = this.sliceShapeContainer.getChildAt(0);
			sliceShape.pause(false);
		}
		this.isPaused = false;
		this.pauseBtn.alpha = 1;
		this.pauseMenu.disable();
		this.currentMaxBakesPerWave = 0;
	}
	,newGame: function(_gamePlay) {
		if(!this.wasShownTutorial || true) {
			this.gamePlay = _gamePlay;
			if(this.tutorialBm == null) this.tutorialBm = new flash.display.Bitmap(openfl.Assets.getBitmapData("img/startSlice.png"));
			this.tutorialBm.alpha = 1;
			this.tutorialBm.set_x(this.blitCanvas.bitmapData.get_width() / 2 - this.tutorialBm.get_width() / 2);
			this.tutorialBm.set_y(this.blitCanvas.bitmapData.get_height() / 2 - this.tutorialBm.get_height() / 2);
			this.wasShownTutorial = true;
		}
		this.elapsedTime = 0;
		this.blitCanvas.timerText = Std.string(this.totalTimeGamePlay3);
		this.gamePlay = _gamePlay;
		if(this.gamePlay == 1) {
			this.failsCont.setWithFails(0);
			this.failsCont.alpha = 1;
			this.failsCont.setWithFails(0);
		} else this.failsCont.alpha = 0;
		this.scores.reset();
		if(this.isBliting) this.blitCanvas.reset();
		this.startGame();
	}
	,tutorialClicked: function(e) {
		this.tutorialBm.removeEventListener(flash.events.MouseEvent.CLICK,$bind(this,this.tutorialClicked));
		this.tutorialBm.removeEventListener("touchEnd",$bind(this,this.tutorialClicked));
		if(this.tutorialBm.parent != null) {
		}
		this.newGame(this.gamePlay);
	}
	,tutorialClickedTimer: function() {
		this.tutorialClicked(null);
	}
	,clearCanvasScores: function() {
		this.blitCanvas.clearScores();
		this.failsCont.alpha = 0;
	}
	,setFails: function(num) {
		if(this.gamePlay != 1) return;
		this.failsCont.setWithFails(num);
	}
	,subtractElapsedTime: function(num) {
		this.elapsedTime -= num;
		this.blitCanvas.timerText = Std.string(this.totalTimeGamePlay3 - this.elapsedTime);
	}
	,onTimer: function() {
		if(this.gamePlay == 2 && !this.isPaused) {
			this.elapsedTime++;
			this.blitCanvas.timerText = Std.string(this.totalTimeGamePlay3 - this.elapsedTime);
			if(this.totalTimeGamePlay3 <= this.elapsedTime) this.stopGame(true);
			haxe.Timer.delay($bind(this,this.onTimer),1000);
		}
	}
	,update: function(e) {
		if(this.isPaused) return;
		if(this.elapsedFrames == 0) {
			this.elapsedFrames++;
			this.waveFrames = this.waveFramesMin + Math.round(Math.random() * (this.waveFramesMax - this.waveFramesMin));
			this.wavePauseFrames = this.wavePauseFramesMin + Math.round(Math.random() * (this.wavePauseFramesMax - this.wavePauseFramesMin));
		} else if(this.elapsedFrames > this.waveFrames) {
			if(this.elapsedFrames >= this.waveFrames + this.wavePauseFrames) {
				this.elapsedFrames = 0;
				this.bakesPerWave = 0;
				if(this.currentMaxBakesPerWave < this.maxBakesPerWave) this.currentMaxBakesPerWave += 0.5;
				return;
			}
			this.elapsedFrames++;
			return;
		} else this.elapsedFrames++;
		if(this.gamePlay == 1 && this.bakesPerWave > this.currentMaxBakesPerWave) return;
		var curMaxBakes = this.gamePlay == 2 && this.totalTimeGamePlay3 - this.elapsedTime <= 5?this.maxBakesPerWave * 3:this.maxBakesPerWave;
		var curRandLim = curMaxBakes > this.maxBakesPerWave?0.4:0.11;
		if(this.bakesPerWave > this.maxBakesPerWave || Math.random() > curRandLim) return;
		this.bakesPerWave++;
		var rand = Math.ceil(Math.random() * 7);
		if(this.gamePlay == 1 && Math.random() <= 0.08) rand = 0;
		if(this.isBliting) this.blitCanvas.addBake(rand); else {
			var bake = Bake.getBake(rand);
			bake.calcParameters();
			this.bakersContainer.addChild(bake);
		}
	}
	,onTouchEnd: function(e) {
		if(this.isPaused) return;
		var p = this.touches.get(e.touchPointID);
		var ang = Math.atan2(e.stageX - p.y,e.stageY - p.x) * (180 / Math.PI) + 90;
		var bake;
		var removeArr = [];
		var _g1 = 0, _g = this.bakersContainer.__children.length;
		while(_g1 < _g) {
			var i = _g1++;
			bake = this.bakersContainer.getChildAt(i);
		}
		var effect;
		var slicePartL;
		var slicePartR;
		while(removeArr.length > 0) {
			bake = removeArr.pop();
			if(bake.type != 0) {
				this.scores.addSlice();
				effect = SliceEffect.getFromPool();
				effect.init();
				effect.setTransfByCenter(bake._x,bake._y,ang);
				this.sliceEffectContainer.addChild(effect);
				slicePartL = SlicePart.getFromPool(bake.type,"Left");
				slicePartR = SlicePart.getFromPool(bake.type,"Right");
				slicePartL.calcParameters(bake.get_x(),bake.get_y(),ang);
				slicePartR.calcParameters(bake.get_x(),bake.get_y(),ang);
				this.slicePartsContainer.addChild(slicePartL);
				this.slicePartsContainer.addChild(slicePartR);
				bake.sendToPool();
			} else {
				bake.sendToPool();
				this.stopGame(true);
				break;
			}
		}
	}
	,onTouchMove: function(e) {
		var p = this.touches.get(e.touchPointID);
		p.x = e.stageX;
		p.y = e.stageY;
	}
	,onTouchBegin: function(e) {
		var p = new flash.geom.Point(e.stageX,e.stageY);
		this.touches.set(e.touchPointID,p);
	}
	,mMove: function(e) {
		if(this.isPaused) return;
		var bake;
		var removeArr = [];
		var _g1 = 0, _g = this.bakersContainer.__children.length;
		while(_g1 < _g) {
			var i = _g1++;
			bake = this.bakersContainer.getChildAt(i);
			if(bake.hitTestPoint(e.stageX,e.stageY,true)) removeArr.push(bake);
		}
		if(removeArr.length > 0) {
			var ang = Math.atan2(this.get_mouseY() - this.hp.y,this.get_mouseX() - this.hp.x) * this.radToGrad + 90;
			var effect;
			var slicePartL;
			var slicePartR;
			while(removeArr.length > 0) {
				bake = removeArr.pop();
				if(bake.type != 0) {
					this.scores.addSlice();
					effect = SliceEffect.getFromPool();
					effect.init();
					effect.setTransfByCenter(bake._x,bake._y,ang);
					this.sliceEffectContainer.addChild(effect);
					slicePartL = SlicePart.getFromPool(bake.type,"Left");
					slicePartR = SlicePart.getFromPool(bake.type,"Right");
					slicePartL.calcParameters(bake._x,bake._y,ang);
					slicePartR.calcParameters(bake._x,bake._y,ang);
					this.slicePartsContainer.addChild(slicePartL);
					this.slicePartsContainer.addChild(slicePartR);
					bake.sendToPool();
				} else {
					bake.sendToPool();
					this.stopGame(true);
					break;
				}
			}
		}
		this.hp.x = this.get_mouseX();
		this.hp.y = this.get_mouseY();
	}
	,mUp: function(e) {
		this.isDown = false;
		flash.Lib.get_current().get_stage().removeEventListener(flash.events.MouseEvent.MOUSE_MOVE,$bind(this,this.mMove));
	}
	,mDown: function(e) {
		this.hp.x = this.get_mouseX();
		this.hp.y = this.get_mouseY();
		this.isDown = true;
		flash.Lib.get_current().get_stage().addEventListener(flash.events.MouseEvent.MOUSE_MOVE,$bind(this,this.mMove));
	}
	,clickPause: function(e) {
		if(this.isPaused) return;
		this.pauseBtn.alpha = 0;
		this.pauseMenu.enable();
		this.stopGame();
	}
	,tapToStartClick: function(e) {
		this.tapToStartBtn.removeEventListener(flash.events.MouseEvent.CLICK,$bind(this,this.tapToStartClick));
		this.tapToStartBtn.removeEventListener("touchEnd",$bind(this,this.tapToStartClick));
		this.tapToStartBtn.parent.removeChild(this.tapToStartBtn);
		this.tapToStartBtn = null;
		if(this.logo != null && this.logo.parent != null) this.logo.parent.removeChild(this.logo);
		this.startBtns.enable();
	}
	,init: function() {
		if(this.inited) return;
		if(flash.Lib.get_current().get_stage().get_stageWidth() < flash.Lib.get_current().get_stage().get_stageHeight()) {
			if(this.rotateScreenWindow == null) {
				this.rotateScreenWindow = new flash.display.Bitmap(openfl.Assets.getBitmapData("img/Rotate_to_play.png"));
				this.rotateScreenWindow.set_width(flash.Lib.get_current().get_stage().get_stageWidth());
				this.rotateScreenWindow.set_scaleY(this.rotateScreenWindow.get_scaleX());
				this.rotateScreenWindow.set_y(flash.Lib.get_current().get_stage().get_stageHeight() / 2 - this.rotateScreenWindow.get_height() / 2);
			}
			flash.Lib.get_current().get_stage().addChild(this.rotateScreenWindow);
			return;
		} else {
		}
		if(this.rotateScreenWindow != null && this.rotateScreenWindow.parent != null) this.rotateScreenWindow.parent.removeChild(this.rotateScreenWindow);
		this.inited = true;
		this.sliceSound = this.soundAssets.get("snd/slSound");
		this.ambientSound = this.soundAssets.get("snd/ambient");
		var bgRatio = 1.77;
		this.sHeight = 480;
		this.set_scaleY(flash.Lib.get_current().get_stage().get_stageHeight() / this.sHeight);
		this.set_scaleX(this.get_scaleY());
		if(flash.Lib.get_current().get_stage().get_stageWidth() / flash.Lib.get_current().get_stage().get_stageHeight() > bgRatio) {
			this.sWidth = this.sHeight * bgRatio;
			this.set_x((flash.Lib.get_current().get_stage().get_stageWidth() - this.sWidth * this.get_scaleX()) / 2);
		} else this.sWidth = this.sHeight * flash.Lib.get_current().get_stage().get_stageWidth() / flash.Lib.get_current().get_stage().get_stageHeight();
		this.scores = new Scores();
		if(!this.isBliting) {
			this.bakersContainer = new flash.display.Sprite();
			this.lastPoint = new flash.geom.Point();
			this.addChild(new BackGround());
			this.addChild(this.bakersContainer);
			this.slicePartsContainer = new flash.display.Sprite();
			this.addChild(this.slicePartsContainer);
			this.sliceEffectContainer = new flash.display.Sprite();
			this.addChild(this.sliceEffectContainer);
			this.sliceShapeContainer = new flash.display.Sprite();
			this.addChild(this.sliceShapeContainer);
			this.sliceShapeContainer.addChild(new SliceShape());
			this.multiTouchSupported = flash.ui.Multitouch.get_supportsTouchEvents();
			this.multiTouchSupported = false;
			if(this.multiTouchSupported) {
				flash.ui.Multitouch.set_inputMode(flash.ui.MultitouchInputMode.TOUCH_POINT);
				flash.Lib.get_current().get_stage().addEventListener("touchBegin",$bind(this,this.onTouchBegin));
				flash.Lib.get_current().get_stage().addEventListener("touchMove",$bind(this,this.onTouchMove));
				flash.Lib.get_current().get_stage().addEventListener("touchEnd",$bind(this,this.onTouchEnd));
			} else {
				flash.Lib.get_current().get_stage().addEventListener(flash.events.MouseEvent.MOUSE_DOWN,$bind(this,this.mDown));
				flash.Lib.get_current().get_stage().addEventListener(flash.events.MouseEvent.MOUSE_UP,$bind(this,this.mUp));
			}
		} else {
			this.blitCanvas = new Canvas(this.sWidth,this.sHeight);
			this.blitCanvas.prerender();
			this.bakesLayer = this.blitCanvas.bakesLayer;
			this.addChild(this.blitCanvas);
		}
		js.Browser.document.addEventListener("touchstart",function(e) {
			e.preventDefault();
		},false);
		js.Browser.document.addEventListener("touchmove",function(e) {
			e.preventDefault();
		},false);
		this.failsCont = new FailsCont();
		this.addChild(this.failsCont);
		this.failsCont.set_x(this.sWidth - this.failsCont.get_width() - 10);
		this.failsCont.set_y(35);
		this.failsCont.alpha = 0;
		this.startBtns = new PlayButton();
		this.startBtns.disable();
		this.addChild(this.startBtns);
		this.creditsWindow = new flash.display.Bitmap(openfl.Assets.getBitmapData("img/creditsWindow.jpg"));
		this.creditsWindow.set_height(this.sHeight);
		this.creditsWindow.set_scaleX(this.creditsWindow.get_scaleY());
		this.creditsWindow.set_x(this.sWidth / 2 - this.creditsWindow.get_width() / 2);
		this.creditsWindow.set_y(this.sHeight / 2 - this.creditsWindow.get_height() / 2);
		this.tutorWindow = new flash.display.Bitmap(openfl.Assets.getBitmapData("img/help_screen.jpg"));
		this.tutorWindow.set_height(this.sHeight);
		this.tutorWindow.set_scaleX(this.tutorWindow.get_scaleY());
		this.tutorWindow.set_x(this.sWidth / 2 - this.tutorWindow.get_width() / 2);
		this.tutorWindow.set_y(this.sHeight / 2 - this.tutorWindow.get_height() / 2);
		this.logo = new flash.display.Bitmap(openfl.Assets.getBitmapData("img/SweetSlice_Logo.png"));
		this.logo.set_x(this.startBtns.logo.get_x() + this.startBtns.get_x());
		this.logo.set_y(this.startBtns.logo.get_y() + this.startBtns.get_y());
		this.addChild(this.logo);
		this.tapToStartBtn = new flash.display.Bitmap(openfl.Assets.getBitmapData("img/tapToStart.png"));
		this.tapToStartBtn.set_x(this.sWidth / 2 - this.tapToStartBtn.get_width() / 2);
		this.tapToStartBtn.set_y(this.logo.get_y() + this.logo.get_height() + 20);
		this.addChild(this.tapToStartBtn);
		this.tapToStartBtn.addEventListener(flash.events.MouseEvent.CLICK,$bind(this,this.tapToStartClick));
		this.tapToStartBtn.addEventListener("touchEnd",$bind(this,this.tapToStartClick));
		this.finishScreen = new FinishScreen();
		this.finishScreen.disable();
		this.addChild(this.finishScreen);
		this.pauseBtn = new flash.display.Bitmap(openfl.Assets.getBitmapData("img/pause.png"));
		this.pauseMenu = new PauseMenu();
		this.pauseBtn.set_x(35);
		this.pauseBtn.set_y(35);
		this.addChild(this.pauseBtn);
		this.addChild(this.pauseMenu);
		this.pauseBtn.alpha = 0;
		this.pauseMenu.disable();
		this.pauseBtn.addEventListener(flash.events.MouseEvent.CLICK,$bind(this,this.clickPause));
		this.pauseBtn.addEventListener("touchEnd",$bind(this,this.clickPause));
		var mrLogoCont = new flash.display.Sprite();
		mrLogoCont.mouseEnabled = false;
		mrLogoCont.mouseChildren = false;
		this.mr_logo = new flash.display.Bitmap(openfl.Assets.getBitmapData("img/mrg_logo.png"));
		mrLogoCont.addChild(this.mr_logo);
		mrLogoCont.set_x(10);
		mrLogoCont.set_y(10);
		this.addChild(mrLogoCont);
		this.addEventListener(flash.events.Event.ENTER_FRAME,$bind(this,this.update));
	}
	,added: function(e) {
		this.removeEventListener(flash.events.Event.ADDED_TO_STAGE,$bind(this,this.added));
		this.get_stage().addEventListener(flash.events.Event.RESIZE,$bind(this,this.resize));
		haxe.Timer.delay($bind(this,this.init),300);
	}
	,unMute: function() {
		if(!this.soundsAvailable) return;
		this.muted = false;
		this.playAmbient(true);
	}
	,mute: function() {
		if(!this.soundsAvailable) return;
		this.muted = true;
		this.pauseAmbient();
	}
	,stopAmbient: function() {
		if(this.ambientSound == null) this.ambientSound = this.soundAssets.get("snd/ambient");
		if(this.ambientSound != null) this.ambientSound.stop();
	}
	,pauseAmbient: function() {
		if(this.ambientSound == null) this.ambientSound = this.soundAssets.get("snd/ambient");
		if(this.ambientSound != null) this.ambientSound.pause();
	}
	,playAmbient: function(startImed) {
		if(startImed == null) startImed = false;
		if(!this.soundsAvailable) return;
		if(this.ambientSound == null) {
			this.ambientSound = this.soundAssets.get("snd/ambient");
			this.ambientSound.loop(true);
			if(this.ambientSound != null) this.ambientSound.play();
		} else {
			this.ambientSound.loop(true);
			if(!this.playSoundsByAction || startImed) this.ambientSound.play(); else this.soundsToPlay.push(this.ambientSound);
		}
	}
	,playSliceSound: function() {
		if(!this.soundsAvailable || this.muted) return;
		if(this.sliceSound == null) {
			this.sliceSound = this.soundAssets.get("snd/slSound");
			if(this.sliceSound != null) this.sliceSound.play();
		} else if(!this.playSoundsByAction) this.sliceSound.play(); else this.soundsToPlay.push(this.sliceSound);
	}
	,getSound: function(stream,buffer,loop,autoplay) {
		if(autoplay == null) autoplay = false;
		if(loop == null) loop = false;
		if(buffer == null) buffer = false;
		var snd = eval("new Howl({ " + " urls: ['" + stream + ".ogg', '" + stream + ".mp3'], " + " autoplay : " + (autoplay?"true":"false") + "," + " loop : " + (loop?"true":"false") + " }); ");
		return snd;
	}
	,sMUp: function() {
		this.soundsToPlay = new Array();
	}
	,sMMove: function() {
		var snd;
		var _g1 = 0, _g = this.soundsToPlay.length;
		while(_g1 < _g) {
			var i = _g1++;
			snd = this.soundsToPlay[i];
			if(snd != null) snd.play();
		}
		this.soundsToPlay = new Array();
	}
	,bodyClick: function(event) {
		js.Browser.document.removeEventListener("touchstart",$bind(this,this.bodyClick));
		js.Browser.document.removeEventListener("touchend",$bind(this,this.bodyClick));
		js.Browser.document.removeEventListener("click",$bind(this,this.bodyClick));
		if(!this.soundsAvailable) return;
		if(this.playSoundsByAction) {
			if(event.type == "touchend" || event.type == "touchstart") {
				js.Browser.document.addEventListener("touchstart",$bind(this,this.sMMove));
				js.Browser.document.addEventListener("touchmove",$bind(this,this.sMMove));
				js.Browser.document.addEventListener("touchend",$bind(this,this.sMUp));
			} else {
				js.Browser.document.addEventListener("mousedown",$bind(this,this.sMMove));
				js.Browser.document.addEventListener("mousemove",$bind(this,this.sMMove));
				js.Browser.document.addEventListener("mouseup",$bind(this,this.sMUp));
			}
		}
		var sounds = ["snd/ambient","snd/slSound"];
		var s;
		var sn;
		var _g1 = 0, _g = sounds.length;
		while(_g1 < _g) {
			var i = _g1++;
			sn = sounds[i];
			s = this.getSound(sn,sn == "snd/ambient",sn == "snd/ambient",sn == "snd/ambient");
			var value = s;
			this.soundAssets.set(sn,value);
		}
	}
	,trackPageview: function() {
		this.tracker.trackEvent(new googleAnalytics.Event("SweetSlice_HTML5",js.Browser.window.location.href),this.session,this.visitor);
	}
	,resize: function(e) {
		if(this.inited) {
			if(flash.Lib.get_current().get_stage().get_stageWidth() < flash.Lib.get_current().get_stage().get_stageHeight()) {
				this.set_visible(false);
				this.___renderFlags |= 64;
				if(this.parent != null) this.parent.___renderFlags |= 64;
				if(!this.isPaused) {
					this.pauseMenu.disable();
					this.stopGame();
				}
				this.isPausedByPortrait = true;
				eval("document.getElementById('haxe:openfl').style.overflow = 'hidden'");
				if(this.rotateScreenWindow == null) {
					this.rotateScreenWindow = new flash.display.Bitmap(openfl.Assets.getBitmapData("img/Rotate_to_play.png"));
					this.rotateScreenWindow.set_width(flash.Lib.get_current().get_stage().get_stageWidth());
					this.rotateScreenWindow.set_scaleY(this.rotateScreenWindow.get_scaleX());
					this.rotateScreenWindow.set_y(flash.Lib.get_current().get_stage().get_stageHeight() / 2 - this.rotateScreenWindow.get_height() / 2);
				}
				flash.Lib.get_current().get_stage().addChild(this.rotateScreenWindow);
			} else {
				this.set_visible(true);
				eval("document.getElementById('haxe:openfl').style.overflow = 'visible'");
				if(this.rotateScreenWindow != null && this.rotateScreenWindow.parent != null) this.rotateScreenWindow.parent.removeChild(this.rotateScreenWindow);
			}
			return;
		}
		if(!this.inited) this.init();
	}
	,session: null
	,visitor: null
	,tracker: null
	,debugTF: null
	,soundsAvailable: null
	,muted: null
	,ambientAttemps: null
	,playSoundsByAction: null
	,soundsToPlay: null
	,ambientSound: null
	,sliceSound: null
	,soundAssets: null
	,isPausedByPortrait: null
	,isPaused: null
	,wavePauseFrames: null
	,waveFrames: null
	,elapsedFrames: null
	,bakesPerWave: null
	,currentMaxBakesPerWave: null
	,maxBakesPerWave: null
	,wavePauseFramesMax: null
	,wavePauseFramesMin: null
	,waveFramesMax: null
	,waveFramesMin: null
	,gamePlay: null
	,logo: null
	,tapToStartBtn: null
	,tutorialBm: null
	,tutorWindow: null
	,creditsWindow: null
	,rotateScreenWindow: null
	,wasShownTutorial: null
	,mr_logo: null
	,pauseMenu: null
	,pauseBtn: null
	,finishScreen: null
	,startBtns: null
	,blitCanvas: null
	,radToGrad: null
	,hp: null
	,isDown: null
	,swordSample: null
	,lastPoint: null
	,multiTouchSupported: null
	,touches: null
	,failsCont: null
	,sliceShapeContainer: null
	,slicePartsContainer: null
	,sliceEffectContainer: null
	,bakesLayer: null
	,bakersContainer: null
	,timer: null
	,inited: null
	,sHeight: null
	,sWidth: null
	,elapsedTime: null
	,totalTimeGamePlay3: null
	,scores: null
	,isBliting: null
	,__class__: Main
});
var DocumentClass = function() {
	Main.call(this);
};
$hxClasses["DocumentClass"] = DocumentClass;
DocumentClass.__name__ = ["DocumentClass"];
DocumentClass.__super__ = Main;
DocumentClass.prototype = $extend(Main.prototype,{
	get_stage: function() {
		return flash.Lib.get_current().get_stage();
	}
	,__class__: DocumentClass
});
flash.display.Bitmap = function(inBitmapData,inPixelSnapping,inSmoothing) {
	if(inSmoothing == null) inSmoothing = false;
	flash.display.DisplayObject.call(this);
	this.pixelSnapping = inPixelSnapping;
	this.smoothing = inSmoothing;
	if(inBitmapData != null) {
		this.set_bitmapData(inBitmapData);
		if(this.bitmapData.__referenceCount == 1) this.__graphics = new flash.display.Graphics(this.bitmapData.___textureBuffer);
	}
	if(this.pixelSnapping == null) this.pixelSnapping = flash.display.PixelSnapping.AUTO;
	if(this.__graphics == null) this.__graphics = new flash.display.Graphics();
	if(this.bitmapData != null) this.__render();
};
$hxClasses["flash.display.Bitmap"] = flash.display.Bitmap;
flash.display.Bitmap.__name__ = ["flash","display","Bitmap"];
flash.display.Bitmap.__super__ = flash.display.DisplayObject;
flash.display.Bitmap.prototype = $extend(flash.display.DisplayObject.prototype,{
	set_bitmapData: function(inBitmapData) {
		if(inBitmapData != this.bitmapData) {
			if(this.bitmapData != null) {
				this.bitmapData.__referenceCount--;
				if(this.__graphics.__surface == this.bitmapData.___textureBuffer) flash.Lib.__setSurfaceOpacity(this.bitmapData.___textureBuffer,0);
			}
			if(inBitmapData != null) inBitmapData.__referenceCount++;
		}
		this.___renderFlags |= 64;
		if(this.parent != null) this.parent.___renderFlags |= 64;
		this.bitmapData = inBitmapData;
		return inBitmapData;
	}
	,__render: function(inMask,clipRect) {
		if(!this.__combinedVisible) return;
		if(this.bitmapData == null) return;
		if((this.___renderFlags & 4) != 0 || (this.___renderFlags & 8) != 0) this.__validateMatrix();
		if(this.bitmapData.___textureBuffer != this.__graphics.__surface) {
			var imageDataLease = this.bitmapData.__lease;
			if(imageDataLease != null && (this.__currentLease == null || imageDataLease.seed != this.__currentLease.seed || imageDataLease.time != this.__currentLease.time)) {
				var srcCanvas = this.bitmapData.___textureBuffer;
				this.__graphics.__surface.width = srcCanvas.width;
				this.__graphics.__surface.height = srcCanvas.height;
				this.__graphics.clear();
				flash.Lib.__drawToSurface(srcCanvas,this.__graphics.__surface);
				this.__currentLease = imageDataLease.clone();
				this.___renderFlags |= 64;
				if(this.parent != null) this.parent.___renderFlags |= 64;
				this.__applyFilters(this.__graphics.__surface);
				this.___renderFlags |= 32;
			}
		}
		if(inMask != null) {
			this.__applyFilters(this.__graphics.__surface);
			var m = this.getBitmapSurfaceTransform(this.__graphics);
			flash.Lib.__drawToSurface(this.__graphics.__surface,inMask,m,(this.parent != null?this.parent.__combinedAlpha:1) * this.alpha,clipRect,this.smoothing);
		} else {
			if((this.___renderFlags & 32) != 0) {
				var m = this.getBitmapSurfaceTransform(this.__graphics);
				flash.Lib.__setSurfaceTransform(this.__graphics.__surface,m);
				this.___renderFlags &= -33;
			}
			if(!this.__init) {
				flash.Lib.__setSurfaceOpacity(this.__graphics.__surface,0);
				this.__init = true;
			} else flash.Lib.__setSurfaceOpacity(this.__graphics.__surface,(this.parent != null?this.parent.__combinedAlpha:1) * this.alpha);
		}
	}
	,__getObjectUnderPoint: function(point) {
		if(!this.get_visible()) return null; else if(this.bitmapData != null) {
			var local = this.globalToLocal(point);
			if(local.x < 0 || local.y < 0 || local.x > this.get_width() / this.get_scaleX() || local.y > this.get_height() / this.get_scaleY()) return null; else return this;
		} else return flash.display.DisplayObject.prototype.__getObjectUnderPoint.call(this,point);
	}
	,__getGraphics: function() {
		return this.__graphics;
	}
	,validateBounds: function() {
		if(this.get__boundsInvalid()) {
			flash.display.DisplayObject.prototype.validateBounds.call(this);
			if(this.bitmapData != null) {
				var r = new flash.geom.Rectangle(0,0,this.bitmapData.get_width(),this.bitmapData.get_height());
				if(r.width != 0 || r.height != 0) {
					if(this.__boundsRect.width == 0 && this.__boundsRect.height == 0) this.__boundsRect = r.clone(); else this.__boundsRect.extendBounds(r);
				}
			}
			if(this.scale9Grid != null) {
				this.__boundsRect.width *= this.__scaleX;
				this.__boundsRect.height *= this.__scaleY;
				this.__width = this.__boundsRect.width;
				this.__height = this.__boundsRect.height;
			} else {
				this.__width = this.__boundsRect.width * this.__scaleX;
				this.__height = this.__boundsRect.height * this.__scaleY;
			}
		}
	}
	,toString: function() {
		return "[Bitmap name=" + this.name + " id=" + this.___id + "]";
	}
	,getBitmapSurfaceTransform: function(gfx) {
		var extent = gfx.__extentWithFilters;
		var fm = this.transform.__getFullMatrix(null);
		fm.__translateTransformed(extent.get_topLeft());
		return fm;
	}
	,__init: null
	,__currentLease: null
	,__graphics: null
	,smoothing: null
	,pixelSnapping: null
	,bitmapData: null
	,__class__: flash.display.Bitmap
	,__properties__: $extend(flash.display.DisplayObject.prototype.__properties__,{set_bitmapData:"set_bitmapData"})
});
var BGEye = function(_type,_initX,_initY) {
	this.curDist = 300;
	this.curRad = 5;
	this.distanceToWatch = 300;
	this.raduis = 3;
	this.isBliting = true;
	this.type = _type;
	this.initX = _initX;
	this.initY = _initY;
	flash.display.Bitmap.call(this,openfl.Assets.getBitmapData("img/" + this.type + ".png"));
	this.set_x(this.initX);
	this.set_y(this.initY);
	this.cX = _initX + this.get_width() / 2;
	this.cY = _initY + this.get_height() / 2;
	this.addEventListener(flash.events.Event.ENTER_FRAME,$bind(this,this.update));
	this.isBliting = Main.current.isBliting;
	if(!this.isBliting) this.bakersContainer = Main.current.bakersContainer; else this.bakeLayer = Main.current.bakesLayer;
	this.hp = new flash.geom.Point();
};
$hxClasses["BGEye"] = BGEye;
BGEye.__name__ = ["BGEye"];
BGEye.__super__ = flash.display.Bitmap;
BGEye.prototype = $extend(flash.display.Bitmap.prototype,{
	updateBlit: function() {
		var bake;
		var found = false;
		var minDist = 1000;
		var dist;
		var _g1 = 0, _g = this.bakeLayer.length;
		while(_g1 < _g) {
			var i = _g1++;
			bake = this.bakeLayer[i];
			dist = Math.sqrt((bake._x - this.cX) * (bake._x - this.cX) + (bake._y - this.cY) * (bake._y - this.cY));
			if(dist <= this.curDist) {
				found = true;
				if(dist < minDist) {
					minDist = dist;
					this.hp.x = bake._x;
					this.hp.y = bake._y;
				}
			}
		}
		if(found) {
			var ang = Math.atan2(this.hp.y - this.initY,this.hp.x - this.initX);
			this.set_x(this.initX + Math.cos(ang) * this.curRad);
			this.set_y(this.initY + Math.sin(ang) * this.curRad);
		} else {
			this.set_x(this.initX);
			this.set_y(this.initY);
		}
	}
	,update: function(e) {
		if(this.isBliting) {
			this.updateBlit();
			return;
		}
		var bake;
		var found = false;
		var minDist = 1000;
		var dist;
		var _g1 = 0, _g = this.bakersContainer.__children.length;
		while(_g1 < _g) {
			var i = _g1++;
			bake = this.bakersContainer.getChildAt(i);
			dist = Math.sqrt((bake._x - this.cX) * (bake._x - this.cX) + (bake._y - this.cY) * (bake._y - this.cY));
			if(dist <= this.curDist) {
				found = true;
				if(dist < minDist) {
					minDist = dist;
					this.hp.x = bake._x;
					this.hp.y = bake._y;
				}
			}
		}
		if(found) {
			var ang = Math.atan2(this.hp.y - this.initY,this.hp.x - this.initX);
			this.set_x(this.initX + Math.cos(ang) * this.curRad);
			this.set_y(this.initY + Math.sin(ang) * this.curRad);
		} else {
			this.set_x(this.initX);
			this.set_y(this.initY);
		}
	}
	,scale: function(_x,_y) {
		this.set_scaleX(_x);
		this.set_scaleY(_y);
		this.curRad = this.raduis * _x;
		this.cX = this.initX + this.get_width() / 2;
		this.cY = this.initY + this.get_height() / 2;
		this.curDist = this.distanceToWatch * _x;
	}
	,hp: null
	,bakeLayer: null
	,bakersContainer: null
	,curDist: null
	,curRad: null
	,distanceToWatch: null
	,raduis: null
	,cY: null
	,cX: null
	,initY: null
	,initX: null
	,type: null
	,isBliting: null
	,__class__: BGEye
});
var BGEyeBl = function(_type,_initX,_initY,_bakesLayer) {
	this.scaleY = 1;
	this.scaleX = 1;
	this.curDist = 300;
	this.curRad = 5;
	this.distanceToWatch = 300;
	this.raduis = 3;
	this.type = _type;
	this.initX = _initX;
	this.initY = _initY;
	this.bmd = openfl.Assets.getBitmapData("img/" + this.type + ".png");
	this.matrix = new flash.geom.Matrix();
	this.cX = _initX + this.bmd.get_width() / 2;
	this.cY = _initY + this.bmd.get_height() / 2;
	this.bakeLayer = _bakesLayer;
	this.hp = new flash.geom.Point();
};
$hxClasses["BGEyeBl"] = BGEyeBl;
BGEyeBl.__name__ = ["BGEyeBl"];
BGEyeBl.prototype = {
	updateBlit: function() {
		var bake;
		var found = false;
		var minDist = 1000;
		var dist;
		var _g1 = 0, _g = this.bakeLayer.length;
		while(_g1 < _g) {
			var i = _g1++;
			bake = this.bakeLayer[i];
			dist = Math.sqrt((bake._x - this.cX) * (bake._x - this.cX) + (bake._y - this.cY) * (bake._y - this.cY));
			if(dist <= this.curDist) {
				found = true;
				if(dist < minDist) {
					minDist = dist;
					this.hp.x = bake._x;
					this.hp.y = bake._y;
				}
			}
		}
		this.matrix.identity();
		this.matrix.scale(this.scaleX,this.scaleY);
		if(found) {
			var ang = Math.atan2(this.hp.y - this.initY,this.hp.x - this.initX);
			this.matrix.set_tx(this.initX + Math.cos(ang) * this.curRad);
			this.matrix.set_ty(this.initY + Math.sin(ang) * this.curRad);
		} else {
			this.matrix.set_tx(this.initX);
			this.matrix.set_ty(this.initY);
		}
	}
	,scale: function(_x,_y) {
		this.scaleX = _x;
		this.scaleY = _y;
		this.curRad = this.raduis * _x;
		this.cX = this.initX + this.bmd.get_width() * this.scaleX / 2;
		this.cY = this.initY + this.bmd.get_height() * this.scaleY / 2;
		this.curDist = this.distanceToWatch * _x;
	}
	,hp: null
	,bakeLayer: null
	,scaleY: null
	,scaleX: null
	,curDist: null
	,curRad: null
	,matrix: null
	,bmd: null
	,distanceToWatch: null
	,raduis: null
	,cY: null
	,cX: null
	,initY: null
	,initX: null
	,type: null
	,__class__: BGEyeBl
}
var BackGround = function() {
	flash.display.Sprite.call(this);
	this.sWidth = Main.current.sWidth;
	this.sHeight = Main.current.sHeight;
	this.mainBm = new flash.display.Bitmap(openfl.Assets.getBitmapData("img/MainBg.jpg"));
	this.mainBm.set_height(this.sHeight);
	this.mainBm.set_scaleX(this.mainBm.get_scaleY());
	this.mainBm.set_x(this.sWidth / 2 - this.mainBm.get_width() / 2);
	this.addChild(this.mainBm);
	this.mouseChildren = false;
	this.mouseEnabled = false;
	if(Main.current.isBliting) return;
	var sx = this.mainBm.get_scaleX();
	var mx = this.mainBm.get_x();
	this.eye1 = new BGEye(1,mx + 227 * sx,514 * sx);
	this.eye1.scale(sx,sx);
	this.addChild(this.eye1);
	this.eye2 = new BGEye(2,mx + 292 * sx,527 * sx);
	this.eye2.scale(sx,sx);
	this.addChild(this.eye2);
	this.eye3 = new BGEye(3,mx + 432 * sx,672 * sx);
	this.eye3.scale(sx,sx);
	this.addChild(this.eye3);
	this.eye4 = new BGEye(4,mx + 478 * sx,706 * sx);
	this.eye4.scale(sx,sx);
	this.addChild(this.eye4);
	this.eye5 = new BGEye(5,mx + 734 * sx,460 * sx);
	this.eye5.scale(sx,sx);
	this.addChild(this.eye5);
	this.eye6 = new BGEye(6,mx + 707 * sx,337 * sx);
	this.eye6.scale(sx,sx);
	this.addChild(this.eye6);
	this.eye7 = new BGEye(7,mx + 763 * sx,331 * sx);
	this.eye7.scale(sx,sx);
	this.addChild(this.eye7);
	this.eye8 = new BGEye(8,mx + 877 * sx,647 * sx);
	this.eye8.scale(sx,sx);
	this.addChild(this.eye8);
	this.eye9 = new BGEye(8,mx + 933 * sx,625 * sx);
	this.eye9.scale(sx,sx);
	this.addChild(this.eye9);
};
$hxClasses["BackGround"] = BackGround;
BackGround.__name__ = ["BackGround"];
BackGround.__super__ = flash.display.Sprite;
BackGround.prototype = $extend(flash.display.Sprite.prototype,{
	eye9: null
	,eye8: null
	,eye7: null
	,eye6: null
	,eye5: null
	,eye4: null
	,eye3: null
	,eye2: null
	,eye1: null
	,sHeight: null
	,sWidth: null
	,mainBm: null
	,__class__: BackGround
});
var BackGroundBl = function(bakesLayer) {
	this.sWidth = Main.current.sWidth;
	this.sHeight = Main.current.sHeight;
	this.bgBmd = openfl.Assets.getBitmapData("img/MainBg.jpg");
	var scale = this.sHeight / this.bgBmd.get_height();
	this.bgMatrix = new flash.geom.Matrix();
	this.bgMatrix.scale(scale,scale);
	this.bgMatrix.translate(this.sWidth / 2 - this.bgBmd.get_width() * scale / 2,0);
	var tbmd = new flash.display.BitmapData(this.bgBmd.get_height() * (this.sWidth / this.sHeight) | 0,this.bgBmd.get_height(),true,0);
	var rect = this.bgBmd.rect;
	rect.x = (this.bgBmd.get_width() - this.bgBmd.get_height() * (this.sWidth / this.sHeight)) / 2;
	rect.width = this.bgBmd.get_height() * (this.sWidth / this.sHeight);
	tbmd.copyPixels(this.bgBmd,rect,new flash.geom.Point(0,0));
	var bgBm = new flash.display.Bitmap(tbmd);
	bgBm.set_scaleX(bgBm.set_scaleY(scale));
	bgBm.set_x(this.sWidth / 2 - (tbmd.___textureBuffer != null?tbmd.___textureBuffer.width:0) * scale / 2);
	Main.current.addChildAt(bgBm,0);
	this.eyeArr = new Array();
	var sx = scale * 0.625;
	var mx = this.sWidth / 2 - this.bgBmd.get_width() * scale / 2;
	this.eye1 = new BGEyeBl(1,mx + 394 * sx,514 * sx,bakesLayer);
	this.eye1.scale(sx,sx);
	this.eyeArr.push(this.eye1);
	this.eye2 = new BGEyeBl(2,mx + 459 * sx,527 * sx,bakesLayer);
	this.eye2.scale(sx,sx);
	this.eyeArr.push(this.eye2);
	this.eye3 = new BGEyeBl(3,mx + 599 * sx,672 * sx,bakesLayer);
	this.eye3.scale(sx,sx);
	this.eyeArr.push(this.eye3);
	this.eye4 = new BGEyeBl(4,mx + 645 * sx,706 * sx,bakesLayer);
	this.eye4.scale(sx,sx);
	this.eyeArr.push(this.eye4);
	this.eye5 = new BGEyeBl(5,mx + 901 * sx,460 * sx,bakesLayer);
	this.eye5.scale(sx,sx);
	this.eyeArr.push(this.eye5);
	this.eye6 = new BGEyeBl(6,mx + 874 * sx,337 * sx,bakesLayer);
	this.eye6.scale(sx,sx);
	this.eyeArr.push(this.eye6);
	this.eye7 = new BGEyeBl(7,mx + 930 * sx,331 * sx,bakesLayer);
	this.eye7.scale(sx,sx);
	this.eyeArr.push(this.eye7);
	this.eye8 = new BGEyeBl(8,mx + 1044 * sx,647 * sx,bakesLayer);
	this.eye8.scale(sx,sx);
	this.eyeArr.push(this.eye8);
	this.eye9 = new BGEyeBl(8,mx + 1100 * sx,625 * sx,bakesLayer);
	this.eye9.scale(sx,sx);
	this.eyeArr.push(this.eye9);
};
$hxClasses["BackGroundBl"] = BackGroundBl;
BackGroundBl.__name__ = ["BackGroundBl"];
BackGroundBl.prototype = {
	render: function(drawTo) {
		var eye;
		var _g1 = 0, _g = this.eyeArr.length;
		while(_g1 < _g) {
			var i = _g1++;
			eye = this.eyeArr[i];
			eye.updateBlit();
			drawTo.drawBMDTransform(eye.bmd,eye.matrix);
		}
	}
	,eyeArr: null
	,eye9: null
	,eye8: null
	,eye7: null
	,eye6: null
	,eye5: null
	,eye4: null
	,eye3: null
	,eye2: null
	,eye1: null
	,bgMatrix: null
	,bgBmd: null
	,sHeight: null
	,sWidth: null
	,__class__: BackGroundBl
}
var Bake = function(_type) {
	this.rotDump = 0.99;
	this.rotSpeed = 0;
	this.speedX = 0;
	this.speedY = 0;
	this.xDump = 0.99;
	this.gravity = 0.8;
	flash.display.Bitmap.call(this,openfl.Assets.getBitmapData("img/bake" + _type + ".png"));
	this.type = _type;
	this.scores = Main.current.scores;
	this.sWidth = Main.current.sWidth;
	this.sHeight = Main.current.sHeight;
	this._x = 0;
	this._y = 0;
	this.bmW = this.get_width();
	this.bmH = this.get_height();
	this.centAng = Math.atan2(this.bmH / 2,this.bmW / 2);
	this.dist = Math.sqrt(this.bmW / 2 * (this.bmW / 2) + this.bmH / 2 * (this.bmH / 2));
	this.gradToRad = Math.PI / 180;
};
$hxClasses["Bake"] = Bake;
Bake.__name__ = ["Bake"];
Bake.getBake = function(_type) {
	if(!Bake.bakePool.exists(_type)) {
		Bake.bakePool.set(_type,new Array());
		return new Bake(_type);
	}
	var hArr = Bake.bakePool.get(_type);
	if(hArr.length > 0) return hArr.pop(); else return new Bake(_type);
}
Bake.__super__ = flash.display.Bitmap;
Bake.prototype = $extend(flash.display.Bitmap.prototype,{
	destroy: function() {
		if(this.parent != null) this.parent.removeChild(this);
		this.removeEventListener(flash.events.Event.ENTER_FRAME,$bind(this,this.update));
	}
	,sendToPool: function() {
		if(this.parent != null) this.parent.removeChild(this);
		this.removeEventListener(flash.events.Event.ENTER_FRAME,$bind(this,this.update));
		Bake.bakePool.get(this.type).push(this);
	}
	,update: function(e) {
		var _g = this;
		_g.set_rotation(_g.get_rotation() + this.rotSpeed);
		var rot = this.get_rotation() * this.gradToRad + this.centAng;
		this._x += this.speedX;
		this._y += this.speedY;
		this.set_x(this._x - Math.cos(rot) * this.dist);
		this.set_y(this._y - Math.sin(rot) * this.dist);
		this.speedX *= this.xDump;
		this.speedY += this.gravity;
		this.rotSpeed *= this.rotDump;
		if(this.speedY > 0 && this._y - this.get_height() > this.sHeight) {
			this.sendToPool();
			if(this.type != 0) this.scores.addFail();
		}
	}
	,calcParameters: function() {
		this.set_y(this.sHeight);
		this.set_x(50 + Math.random() * (this.sWidth - 100));
		this._x = this.get_x();
		this._y = this.get_y();
		var maxY = Math.sqrt(this.sHeight * 2 * this.gravity);
		this.speedY = (maxY / 1.5 + Math.random() * (maxY - maxY / 1.5)) * -1;
		var xPol = Math.random() > 0.5?1:-1;
		var md;
		var n = -this.speedY / this.gravity * 2;
		var maxX;
		if(xPol > 0) md = this.sWidth - this._x; else md = this._x;
		md -= 30;
		maxX = (md * this.xDump - md) / (Math.pow(this.xDump,n) - 1);
		this.speedX = Math.random() * maxX * xPol;
		this.rotSpeed = this.speedY * Math.random() * xPol;
		this.addEventListener(flash.events.Event.ENTER_FRAME,$bind(this,this.update));
	}
	,scores: null
	,type: null
	,gradToRad: null
	,dist: null
	,centAng: null
	,bmH: null
	,bmW: null
	,_y: null
	,_x: null
	,sHeight: null
	,sWidth: null
	,rotDump: null
	,rotSpeed: null
	,speedX: null
	,speedY: null
	,xDump: null
	,gravity: null
	,__class__: Bake
});
var BakeBl = function(_type) {
	this.rotation = 0;
	this.rotDump = 0.99;
	this.rotSpeed = 0;
	this.speedX = 0;
	this.speedY = 0;
	this.xDump = 0.99;
	this.gravity = 0.8;
	this.bmd = openfl.Assets.getBitmapData("img/bake" + _type + ".png");
	this.type = _type;
	this.matrix = new flash.geom.Matrix();
	this.sWidth = Main.current.sWidth;
	this.sHeight = Main.current.sHeight;
	this._x = 0;
	this._y = 0;
	this.bmW = this.bmd.get_width();
	this.bmH = this.bmd.get_height();
	this.dist = Math.sqrt(this.bmW / 2 * (this.bmW / 2) + this.bmH / 2 * (this.bmH / 2));
	this.gradToRad = Math.PI / 180;
	this.inrad90 = 90 * this.gradToRad;
};
$hxClasses["BakeBl"] = BakeBl;
BakeBl.__name__ = ["BakeBl"];
BakeBl.getBake = function(_type) {
	if(!BakeBl.bakePool.exists(_type)) {
		BakeBl.bakePool.set(_type,new Array());
		return new BakeBl(_type);
	}
	var hArr = BakeBl.bakePool.get(_type);
	if(hArr.length > 0) return hArr.pop(); else return new BakeBl(_type);
}
BakeBl.prototype = {
	sendToPool: function() {
		BakeBl.bakePool.get(this.type).push(this);
	}
	,hitTestPoint1: function(hitX,hitY,hitX1,hitY1) {
		var dx = hitX - hitX1;
		var dy = hitY - hitY1;
		var dist = Math.round(Math.sqrt(dx * dx + dy * dy));
		var ang = Math.atan2(dy,dx);
		var s = Math.sin(ang);
		var c = Math.cos(ang);
		var _g = 0;
		while(_g < dist) {
			var i = _g++;
			var tX = hitX + i * c - this.matrix.tx;
			var tY = hitY + i * s - this.matrix.ty;
			var len = Math.sqrt(tX * tX + tY * tY);
			var ang1 = Math.atan2(tY,tX) - this.inrad90;
			ang1 = this.rotation - ang1;
			if(this.bmd.getPixel32(len * Math.cos(ang1) | 0,len * Math.sin(ang1) | 0) >>> 24 == 255) return true;
		}
		return false;
	}
	,hitTestPoint: function(hitX,hitY) {
		var tX = hitX - this.matrix.tx;
		var tY = hitY - this.matrix.ty;
		var len = Math.sqrt(tX * tX + tY * tY);
		var ang = Math.atan2(tY,tX) - this.inrad90;
		ang = this.rotation - ang;
		if(this.bmd.getPixel32(len * Math.cos(ang) | 0,len * Math.sin(ang) | 0) >>> 24 == 255) return true; else return false;
	}
	,update: function() {
		this.rotation += this.rotSpeed;
		this._x += this.speedX;
		this._y += this.speedY;
		this.matrix.identity();
		this.matrix.set_tx(-this.bmW / 2);
		this.matrix.set_ty(-this.bmH / 2);
		this.matrix.rotate(this.rotation);
		var _g = this.matrix;
		_g.set_tx(_g.tx + this._x);
		var _g = this.matrix;
		_g.set_ty(_g.ty + this._y);
		this.speedX *= this.xDump;
		this.speedY += this.gravity;
		this.rotSpeed *= this.rotDump;
		if(this.speedY > 0 && this._y - this.bmH > this.sHeight) {
			this.sendToPool();
			return true;
		}
		return false;
	}
	,calcParameters: function() {
		this._x = 100 + Math.random() * (this.sWidth - 200);
		this._y = this.sHeight;
		this.matrix.identity();
		this.matrix.translate(this._x,this._y);
		var maxY = Math.sqrt(this.sHeight * 2 * this.gravity);
		this.speedY = (maxY / 1.5 + Math.random() * (maxY - maxY / 1.5)) * -1;
		var xPol = Math.random() > 0.5?1:-1;
		var md;
		var n = -this.speedY / this.gravity * 2;
		var maxX;
		if(xPol > 0) md = this.sWidth - this._x; else md = this._x;
		md -= 30;
		maxX = (md * this.xDump - md) / (Math.pow(this.xDump,n) - 1);
		this.speedX = Math.random() * maxX * xPol;
		this.rotSpeed = this.speedY * Math.random() * xPol * this.gradToRad;
	}
	,bmd: null
	,matrix: null
	,type: null
	,inrad90: null
	,gradToRad: null
	,dist: null
	,bmH: null
	,bmW: null
	,_y: null
	,_x: null
	,rotation: null
	,sHeight: null
	,sWidth: null
	,rotDump: null
	,rotSpeed: null
	,speedX: null
	,speedY: null
	,xDump: null
	,gravity: null
	,__class__: BakeBl
}
var BonusWindow = function() {
	this.liveTime = 1.5;
	this.images = new haxe.ds.StringMap();
	var bmd;
	var _g = 2;
	while(_g < 7) {
		var i = _g++;
		bmd = openfl.Assets.getBitmapData("img/combo" + (i + 1) + ".png");
		this.images.set("combo" + (i + 1),bmd);
	}
	bmd = openfl.Assets.getBitmapData("img/criticalHit.png");
	this.images.set("criticalHit",bmd);
	this.liveArr = new Array();
	this.hp = new flash.geom.Point();
	this.sWidth = Main.current.sWidth;
	this.sHeight = Main.current.sHeight;
};
$hxClasses["BonusWindow"] = BonusWindow;
BonusWindow.__name__ = ["BonusWindow"];
BonusWindow.prototype = {
	update: function(dest) {
		var time = haxe.Timer.stamp();
		var obj;
		var delArr = new Array();
		var _g1 = 0, _g = this.liveArr.length;
		while(_g1 < _g) {
			var i = _g1++;
			obj = this.liveArr[i];
			if(time >= obj.time) {
				delArr.push(obj);
				continue;
			} else {
				this.hp.x = obj.x;
				this.hp.y = obj.y;
				dest.copyPixels(obj.bmd,obj.bmd.rect,this.hp,null,null,true);
			}
		}
		while(delArr.length > 0) {
			var x = delArr.pop();
			HxOverrides.remove(this.liveArr,x);
		}
	}
	,add: function(type,x,y) {
		var obj = { };
		obj.bmd = this.images.get(type);
		obj.x = x;
		obj.y = y;
		obj.time = haxe.Timer.stamp() + this.liveTime;
		this.liveArr.push(obj);
		if(x < 0) obj.x = 0;
		if(x + obj.bmd.width > this.sWidth) obj.x = this.sWidth - obj.bmd.width;
		if(y < 0) obj.y = 0;
		if(y + obj.bmd.height > this.sHeight) obj.y = this.sHeight - obj.bmd.width;
	}
	,hp: null
	,sHeight: null
	,sWidth: null
	,liveTime: null
	,liveArr: null
	,images: null
	,__class__: BonusWindow
}
var Canvas = function(__width,__height) {
	this.paused = true;
	this.timerText = "0";
	this.timerVisible = false;
	this.isMouseDown = false;
	this.skipedFirstClick = false;
	this.isBrokoliEffect = false;
	this.brokoliAcceleration = 4;
	this.freezeBrokoliFrames = 0;
	this.freezeBrokoliEffectFrames = 15;
	this.maxBrokoliEffectFrames = 10;
	this.brokoliEffectFrames = 0;
	this.tortY = 0;
	this.tortX = 0;
	this._width = __width;
	this._height = __height;
	flash.display.Bitmap.call(this,new flash.display.BitmapData(this._width | 0,this._height | 0,true,0));
	this.bakesLayer = new Array();
	this.sliceEffectLayer = new Array();
	this.sliceTrailLayer = new Array();
	this.slicePartLayer = new Array();
	this.bonusWindow = new BonusWindow();
	this.numericFont = new NumericFont("MainFontNumeric",22);
	this.backGround = new BackGroundBl(this.bakesLayer);
	this.sliceShape = new SliceShapeBl();
	this.main = Main.current;
	this.sWidth = this.main.sWidth;
	this.sHeight = this.main.sHeight;
	this.gradToRad = Math.PI / 180;
	this.inrad90 = 90 * this.gradToRad;
	this.hp = new flash.geom.Point();
	this.hp1 = new flash.geom.Point();
	this.hct = new flash.geom.ColorTransform();
	this.tortBmd = openfl.Assets.getBitmapData("img/tort.png");
	this.tortX = this.sWidth / 2 - this.tortBmd.get_width() / 2;
	this.tortY = 0;
	this.tortPoint = new flash.geom.Point(this.tortX,this.tortY);
	this.brokoliEffectBmd = openfl.Assets.getBitmapData("img/brokoliEffect.png");
	this.brokoliPoint = new flash.geom.Point();
	this.brokoliMatrix = new flash.geom.Matrix();
	this.scores = Main.current.scores;
	this.scores.bonusWindow = this.bonusWindow;
	this.framesToCountBonus = this.scores.framesToCountBonus;
	this.framesSlices = this.scores.framesSlices;
	this.addEventListener(flash.events.Event.ENTER_FRAME,$bind(this,this.update));
	this.addEventListener(flash.events.Event.ADDED_TO_STAGE,$bind(this,this.added));
	this.isMouseDown = false;
};
$hxClasses["Canvas"] = Canvas;
Canvas.__name__ = ["Canvas"];
Canvas.__super__ = flash.display.Bitmap;
Canvas.prototype = $extend(flash.display.Bitmap.prototype,{
	lineIntersectLine: function(A,B,E,F,as_seg) {
		if(as_seg == null) as_seg = true;
		var ip;
		var a1;
		var a2;
		var b1;
		var b2;
		var c1;
		var c2;
		a1 = B.y - A.y;
		b1 = A.x - B.x;
		c1 = B.x * A.y - A.x * B.y;
		a2 = F.y - E.y;
		b2 = E.x - F.x;
		c2 = F.x * E.y - E.x * F.y;
		var denom = a1 * b2 - a2 * b1;
		if(denom == 0) return false;
		ip = new flash.geom.Point();
		ip.x = (b1 * c2 - b2 * c1) / denom;
		ip.y = (a2 * c1 - a1 * c2) / denom;
		if(as_seg) {
			if(Math.pow(ip.x - B.x,2) + Math.pow(ip.y - B.y,2) > Math.pow(A.x - B.x,2) + Math.pow(A.y - B.y,2)) return false;
			if(Math.pow(ip.x - A.x,2) + Math.pow(ip.y - A.y,2) > Math.pow(A.x - B.x,2) + Math.pow(A.y - B.y,2)) return false;
			if(Math.pow(ip.x - F.x,2) + Math.pow(ip.y - F.y,2) > Math.pow(E.x - F.x,2) + Math.pow(E.y - F.y,2)) return false;
			if(Math.pow(ip.x - E.x,2) + Math.pow(ip.y - E.y,2) > Math.pow(E.x - F.x,2) + Math.pow(E.y - F.y,2)) return false;
		}
		return true;
	}
	,mUp: function(e) {
		this.isMouseDown = false;
	}
	,mDown: function(e) {
		if(this.paused) return;
		this.hp.x = this.get_mouseX();
		this.hp.y = this.get_mouseY();
		this.isMouseDown = true;
	}
	,clearScores: function() {
		this.bitmapData.fillRect(this.bitmapData.rect,0);
		this.backGround.render(this.bitmapData);
	}
	,reset: function() {
		while(this.bakesLayer.length > 0) this.bakesLayer.pop().sendToPool();
		while(this.sliceEffectLayer.length > 0) this.sliceEffectLayer.pop().sendToPool();
		while(this.slicePartLayer.length > 0) this.slicePartLayer.pop().sendToPool();
	}
	,updateBrokoliEffect: function() {
		this.brokoliEffectFrames++;
		if(this.brokoliEffectFrames >= this.maxBrokoliEffectFrames && this.freezeBrokoliFrames <= 0) {
			this.brokoliEffectFrames = 0;
			this.isBrokoliEffect = false;
			this.main.stopGame(true);
		}
		if(this.brokoliEffectFrames < this.maxBrokoliEffectFrames) {
			var scale = 0.05 * this.brokoliEffectFrames * this.brokoliAcceleration;
			this.brokoliMatrix.identity();
			this.brokoliMatrix.scale(scale,scale);
			this.brokoliMatrix.translate(this.brokoliPoint.x - this.brokoliEffectBmd.get_width() / 2 * scale,this.brokoliPoint.y - this.brokoliEffectBmd.get_height() / 2 * scale);
		} else this.freezeBrokoliFrames--;
		this.bitmapData.drawBMDTransform(this.brokoliEffectBmd,this.brokoliMatrix);
	}
	,stratBrokoliEffect: function() {
		this.isBrokoliEffect = true;
		this.freezeBrokoliFrames = this.freezeBrokoliEffectFrames;
		this.brokoliPoint.x = this.get_mouseX();
		this.brokoliPoint.y = this.get_mouseY();
	}
	,update: function(e) {
		if(this.paused) return;
		this.bitmapData.fillRect(this.bitmapData.rect,0);
		this.backGround.render(this.bitmapData);
		this.bitmapData.copyPixels(this.tortBmd,this.tortBmd.rect,this.tortPoint);
		if(this.main.tutorialBm != null && this.main.tutorialBm.alpha > 0.05) {
			this.main.tutorialBm.alpha -= 0.03;
			if(this.main.tutorialBm.alpha <= 0.05) this.main.wasShownTutorial = false;
			this.bitmapData.drawBMDAlpha(this.main.tutorialBm.bitmapData,this.main.tutorialBm.get_x(),this.main.tutorialBm.get_y(),this.main.tutorialBm.alpha);
		}
		var ang = Math.atan2(this.get_mouseY() - this.hp.y,this.get_mouseX() - this.hp.x) + this.inrad90;
		this.hp1.x = this.hp.x;
		this.hp1.y = this.hp.y;
		this.hp.x = this.get_mouseX();
		this.hp.y = this.get_mouseY();
		var remArrBake = new Array();
		var remArrSliceEffect = new Array();
		var remArrSliceTrail = new Array();
		var remArrSlicePart = new Array();
		var bake;
		var sliceEffect;
		var trail;
		var slicePartL;
		var slicePartR;
		var numSlices = 0;
		var _g1 = 0, _g = this.bakesLayer.length;
		while(_g1 < _g) {
			var i = _g1++;
			bake = this.bakesLayer[i];
			if(!this.isBrokoliEffect && this.isMouseDown && bake.hitTestPoint1(this.hp1.x,this.hp1.y,this.hp.x,this.hp.y)) {
				bake.sendToPool();
				remArrBake.push(bake);
				if(bake.type != 0) {
					this.scores.addSlice();
					numSlices++;
					var p1 = new flash.geom.Point(this.hp.x,this.hp.y);
					var p2 = new flash.geom.Point(this.hp.x + 100 * Math.cos(ang),this.hp.y + 100 * Math.sin(ang));
					if(this.lineIntersectLine(p1,p2,new flash.geom.Point(bake._x - 1,bake._y - 1),new flash.geom.Point(bake._x + 1,bake._y - 1)) || this.lineIntersectLine(p1,p2,new flash.geom.Point(bake._x + 1,bake._y - 1),new flash.geom.Point(bake._x + 1,bake._y + 1)) || this.lineIntersectLine(p1,p2,new flash.geom.Point(bake._x - 1,bake._y + 1),new flash.geom.Point(bake._x + 1,bake._y + 1)) || this.lineIntersectLine(p1,p2,new flash.geom.Point(bake._x - 1,bake._y + 1),new flash.geom.Point(bake._x - 1,bake._y - 1))) this.scores.addCriticalHit();
					if(Math.random() > .5) {
						trail = SliceTrailBl.getFromPool(Math.ceil(Math.random() * 6));
						trail.setTransfByCenter(bake._x,bake._y);
						this.sliceTrailLayer.push(trail);
					}
					sliceEffect = SliceEffectBl.getFromPool();
					sliceEffect.setTransfByCenter(bake._x,bake._y,ang);
					this.sliceEffectLayer.push(sliceEffect);
					slicePartL = SlicePartBl.getFromPool(bake.type,"Left");
					slicePartR = SlicePartBl.getFromPool(bake.type,"Right");
					slicePartL.calcParameters(bake._x,bake._y,ang);
					slicePartR.calcParameters(bake._x,bake._y,ang);
					this.slicePartLayer.push(slicePartL);
					this.slicePartLayer.push(slicePartR);
				} else {
					this.stratBrokoliEffect();
					break;
				}
			}
			if(bake.update()) {
				remArrBake.push(bake);
				if(bake.type != 0) this.scores.addFail();
			} else this.bitmapData.drawBMDTransform(bake.bmd,bake.matrix);
		}
		var sumSlices = 0;
		var _g1 = 1, _g = this.framesToCountBonus;
		while(_g1 < _g) {
			var i = _g1++;
			this.framesSlices[i - 1] = this.framesSlices[i];
			sumSlices += this.framesSlices[i - 1];
		}
		this.framesSlices[this.framesToCountBonus - 1] = numSlices;
		sumSlices += numSlices;
		if(this.scores.checkBonusByNumSlices(sumSlices)) {
			var _g1 = 0, _g = this.framesToCountBonus;
			while(_g1 < _g) {
				var i = _g1++;
				this.framesSlices[i] = 0;
			}
		}
		var _g1 = 0, _g = this.sliceTrailLayer.length;
		while(_g1 < _g) {
			var i = _g1++;
			trail = this.sliceTrailLayer[i];
			this.bitmapData.drawBMDTransformAlpha(trail.bmd,trail.matrix,trail.alpha);
			if(trail.update()) {
				remArrSliceTrail.push(trail);
				continue;
			}
		}
		var _g1 = 0, _g = this.slicePartLayer.length;
		while(_g1 < _g) {
			var i = _g1++;
			slicePartL = this.slicePartLayer[i];
			if(slicePartL.update()) remArrSlicePart.push(slicePartL);
			this.bitmapData.drawBMDTransform(slicePartL.bmd,slicePartL.matrix);
		}
		var _g1 = 0, _g = this.sliceEffectLayer.length;
		while(_g1 < _g) {
			var i = _g1++;
			sliceEffect = this.sliceEffectLayer[i];
			this.bitmapData.drawBMDTransformAlpha(sliceEffect.bmd,sliceEffect.matrix,sliceEffect.alpha);
			if(sliceEffect.update()) {
				remArrSliceEffect.push(sliceEffect);
				continue;
			}
		}
		while(remArrBake.length > 0) HxOverrides.remove(this.bakesLayer,remArrBake.pop());
		while(remArrSliceEffect.length > 0) HxOverrides.remove(this.sliceEffectLayer,remArrSliceEffect.pop());
		while(remArrSliceTrail.length > 0) HxOverrides.remove(this.sliceTrailLayer,remArrSliceTrail.pop());
		while(remArrSlicePart.length > 0) HxOverrides.remove(this.slicePartLayer,remArrSlicePart.pop());
		this.sliceShape.update(this.bitmapData);
		this.bonusWindow.update(this.bitmapData);
		this.numericFont.drawTo(this.bitmapData,Std.string(this.scores.score),this.sWidth / 2,15,true);
		if(this.timerVisible) this.numericFont.drawTo(this.bitmapData,this.timerText,this.sWidth - 70,35,false,false,16771680);
		if(this.isBrokoliEffect) this.updateBrokoliEffect();
	}
	,prerender: function() {
		this.backGround.render(this.bitmapData);
	}
	,addBake: function(_type) {
		var bake = BakeBl.getBake(_type);
		bake.calcParameters();
		this.bakesLayer.push(bake);
	}
	,added: function(e) {
		this.removeEventListener(flash.events.Event.ADDED_TO_STAGE,$bind(this,this.added));
		flash.Lib.get_current().get_stage().addEventListener(flash.events.MouseEvent.MOUSE_DOWN,$bind(this,this.mDown));
		flash.Lib.get_current().get_stage().addEventListener(flash.events.MouseEvent.MOUSE_UP,$bind(this,this.mUp));
	}
	,paused: null
	,framesSlices: null
	,framesToCountBonus: null
	,timerText: null
	,timerVisible: null
	,scores: null
	,hct: null
	,hp1: null
	,hp: null
	,inrad90: null
	,gradToRad: null
	,sHeight: null
	,sWidth: null
	,main: null
	,isMouseDown: null
	,skipedFirstClick: null
	,sliceShape: null
	,isBrokoliEffect: null
	,brokoliAcceleration: null
	,freezeBrokoliFrames: null
	,freezeBrokoliEffectFrames: null
	,maxBrokoliEffectFrames: null
	,brokoliEffectFrames: null
	,brokoliMatrix: null
	,brokoliPoint: null
	,brokoliEffectBmd: null
	,tortPoint: null
	,tortY: null
	,tortX: null
	,tortBmd: null
	,numericFont: null
	,bonusWindow: null
	,slicePartLayer: null
	,sliceEffectLayer: null
	,sliceTrailLayer: null
	,bakesLayer: null
	,backGround: null
	,_height: null
	,_width: null
	,__class__: Canvas
});
var openfl = {}
openfl.AssetLibrary = function() {
};
$hxClasses["openfl.AssetLibrary"] = openfl.AssetLibrary;
openfl.AssetLibrary.__name__ = ["openfl","AssetLibrary"];
openfl.AssetLibrary.prototype = {
	loadText: function(id,handler) {
		var callback = function(bytes) {
			if(bytes == null) handler(null); else handler(bytes.readUTFBytes(bytes.length));
		};
		this.loadBytes(id,callback);
	}
	,loadSound: function(id,handler) {
		handler(this.getSound(id));
	}
	,loadMusic: function(id,handler) {
		handler(this.getMusic(id));
	}
	,loadMovieClip: function(id,handler) {
		handler(this.getMovieClip(id));
	}
	,loadFont: function(id,handler) {
		handler(this.getFont(id));
	}
	,loadBytes: function(id,handler) {
		handler(this.getBytes(id));
	}
	,loadBitmapData: function(id,handler) {
		handler(this.getBitmapData(id));
	}
	,load: function(handler) {
		handler(this);
	}
	,isLocal: function(id,type) {
		return true;
	}
	,getText: function(id) {
		var bytes = this.getBytes(id);
		if(bytes == null) return null; else return bytes.readUTFBytes(bytes.length);
	}
	,getSound: function(id) {
		return null;
	}
	,getPath: function(id) {
		return null;
	}
	,getMusic: function(id) {
		return this.getSound(id);
	}
	,getMovieClip: function(id) {
		return null;
	}
	,getFont: function(id) {
		return null;
	}
	,getBytes: function(id) {
		return null;
	}
	,getBitmapData: function(id) {
		return null;
	}
	,exists: function(id,type) {
		return false;
	}
	,__class__: openfl.AssetLibrary
}
var DefaultAssetLibrary = function() {
	openfl.AssetLibrary.call(this);
	DefaultAssetLibrary.path.set("img/1.png","img/1.png");
	var value = Reflect.field(openfl.AssetType,"image".toUpperCase());
	DefaultAssetLibrary.type.set("img/1.png",value);
	DefaultAssetLibrary.path.set("img/2.png","img/2.png");
	var value = Reflect.field(openfl.AssetType,"image".toUpperCase());
	DefaultAssetLibrary.type.set("img/2.png",value);
	DefaultAssetLibrary.path.set("img/3.png","img/3.png");
	var value = Reflect.field(openfl.AssetType,"image".toUpperCase());
	DefaultAssetLibrary.type.set("img/3.png",value);
	DefaultAssetLibrary.path.set("img/4.png","img/4.png");
	var value = Reflect.field(openfl.AssetType,"image".toUpperCase());
	DefaultAssetLibrary.type.set("img/4.png",value);
	DefaultAssetLibrary.path.set("img/5.png","img/5.png");
	var value = Reflect.field(openfl.AssetType,"image".toUpperCase());
	DefaultAssetLibrary.type.set("img/5.png",value);
	DefaultAssetLibrary.path.set("img/6.png","img/6.png");
	var value = Reflect.field(openfl.AssetType,"image".toUpperCase());
	DefaultAssetLibrary.type.set("img/6.png",value);
	DefaultAssetLibrary.path.set("img/7.png","img/7.png");
	var value = Reflect.field(openfl.AssetType,"image".toUpperCase());
	DefaultAssetLibrary.type.set("img/7.png",value);
	DefaultAssetLibrary.path.set("img/8.png","img/8.png");
	var value = Reflect.field(openfl.AssetType,"image".toUpperCase());
	DefaultAssetLibrary.type.set("img/8.png",value);
	DefaultAssetLibrary.path.set("img/9.png","img/9.png");
	var value = Reflect.field(openfl.AssetType,"image".toUpperCase());
	DefaultAssetLibrary.type.set("img/9.png",value);
	DefaultAssetLibrary.path.set("img/bake0.png","img/bake0.png");
	var value = Reflect.field(openfl.AssetType,"image".toUpperCase());
	DefaultAssetLibrary.type.set("img/bake0.png",value);
	DefaultAssetLibrary.path.set("img/bake1.png","img/bake1.png");
	var value = Reflect.field(openfl.AssetType,"image".toUpperCase());
	DefaultAssetLibrary.type.set("img/bake1.png",value);
	DefaultAssetLibrary.path.set("img/bake1Left.png","img/bake1Left.png");
	var value = Reflect.field(openfl.AssetType,"image".toUpperCase());
	DefaultAssetLibrary.type.set("img/bake1Left.png",value);
	DefaultAssetLibrary.path.set("img/bake1Right.png","img/bake1Right.png");
	var value = Reflect.field(openfl.AssetType,"image".toUpperCase());
	DefaultAssetLibrary.type.set("img/bake1Right.png",value);
	DefaultAssetLibrary.path.set("img/bake2.png","img/bake2.png");
	var value = Reflect.field(openfl.AssetType,"image".toUpperCase());
	DefaultAssetLibrary.type.set("img/bake2.png",value);
	DefaultAssetLibrary.path.set("img/bake2Left.png","img/bake2Left.png");
	var value = Reflect.field(openfl.AssetType,"image".toUpperCase());
	DefaultAssetLibrary.type.set("img/bake2Left.png",value);
	DefaultAssetLibrary.path.set("img/bake2Right.png","img/bake2Right.png");
	var value = Reflect.field(openfl.AssetType,"image".toUpperCase());
	DefaultAssetLibrary.type.set("img/bake2Right.png",value);
	DefaultAssetLibrary.path.set("img/bake3.png","img/bake3.png");
	var value = Reflect.field(openfl.AssetType,"image".toUpperCase());
	DefaultAssetLibrary.type.set("img/bake3.png",value);
	DefaultAssetLibrary.path.set("img/bake3Left.png","img/bake3Left.png");
	var value = Reflect.field(openfl.AssetType,"image".toUpperCase());
	DefaultAssetLibrary.type.set("img/bake3Left.png",value);
	DefaultAssetLibrary.path.set("img/bake3Right.png","img/bake3Right.png");
	var value = Reflect.field(openfl.AssetType,"image".toUpperCase());
	DefaultAssetLibrary.type.set("img/bake3Right.png",value);
	DefaultAssetLibrary.path.set("img/bake4.png","img/bake4.png");
	var value = Reflect.field(openfl.AssetType,"image".toUpperCase());
	DefaultAssetLibrary.type.set("img/bake4.png",value);
	DefaultAssetLibrary.path.set("img/bake4Left.png","img/bake4Left.png");
	var value = Reflect.field(openfl.AssetType,"image".toUpperCase());
	DefaultAssetLibrary.type.set("img/bake4Left.png",value);
	DefaultAssetLibrary.path.set("img/bake4Right.png","img/bake4Right.png");
	var value = Reflect.field(openfl.AssetType,"image".toUpperCase());
	DefaultAssetLibrary.type.set("img/bake4Right.png",value);
	DefaultAssetLibrary.path.set("img/bake5.png","img/bake5.png");
	var value = Reflect.field(openfl.AssetType,"image".toUpperCase());
	DefaultAssetLibrary.type.set("img/bake5.png",value);
	DefaultAssetLibrary.path.set("img/bake5Left.png","img/bake5Left.png");
	var value = Reflect.field(openfl.AssetType,"image".toUpperCase());
	DefaultAssetLibrary.type.set("img/bake5Left.png",value);
	DefaultAssetLibrary.path.set("img/bake5Right.png","img/bake5Right.png");
	var value = Reflect.field(openfl.AssetType,"image".toUpperCase());
	DefaultAssetLibrary.type.set("img/bake5Right.png",value);
	DefaultAssetLibrary.path.set("img/bake6.png","img/bake6.png");
	var value = Reflect.field(openfl.AssetType,"image".toUpperCase());
	DefaultAssetLibrary.type.set("img/bake6.png",value);
	DefaultAssetLibrary.path.set("img/bake6Left.png","img/bake6Left.png");
	var value = Reflect.field(openfl.AssetType,"image".toUpperCase());
	DefaultAssetLibrary.type.set("img/bake6Left.png",value);
	DefaultAssetLibrary.path.set("img/bake6Right.png","img/bake6Right.png");
	var value = Reflect.field(openfl.AssetType,"image".toUpperCase());
	DefaultAssetLibrary.type.set("img/bake6Right.png",value);
	DefaultAssetLibrary.path.set("img/bake7.png","img/bake7.png");
	var value = Reflect.field(openfl.AssetType,"image".toUpperCase());
	DefaultAssetLibrary.type.set("img/bake7.png",value);
	DefaultAssetLibrary.path.set("img/bake7Left.png","img/bake7Left.png");
	var value = Reflect.field(openfl.AssetType,"image".toUpperCase());
	DefaultAssetLibrary.type.set("img/bake7Left.png",value);
	DefaultAssetLibrary.path.set("img/bake7Right.png","img/bake7Right.png");
	var value = Reflect.field(openfl.AssetType,"image".toUpperCase());
	DefaultAssetLibrary.type.set("img/bake7Right.png",value);
	DefaultAssetLibrary.path.set("img/brokoliEffect.png","img/brokoliEffect.png");
	var value = Reflect.field(openfl.AssetType,"image".toUpperCase());
	DefaultAssetLibrary.type.set("img/brokoliEffect.png",value);
	DefaultAssetLibrary.path.set("img/button_credits.png","img/button_credits.png");
	var value = Reflect.field(openfl.AssetType,"image".toUpperCase());
	DefaultAssetLibrary.type.set("img/button_credits.png",value);
	DefaultAssetLibrary.path.set("img/button_help.png","img/button_help.png");
	var value = Reflect.field(openfl.AssetType,"image".toUpperCase());
	DefaultAssetLibrary.type.set("img/button_help.png",value);
	DefaultAssetLibrary.path.set("img/button_menu.png","img/button_menu.png");
	var value = Reflect.field(openfl.AssetType,"image".toUpperCase());
	DefaultAssetLibrary.type.set("img/button_menu.png",value);
	DefaultAssetLibrary.path.set("img/button_more_games.png","img/button_more_games.png");
	var value = Reflect.field(openfl.AssetType,"image".toUpperCase());
	DefaultAssetLibrary.type.set("img/button_more_games.png",value);
	DefaultAssetLibrary.path.set("img/button_play.png","img/button_play.png");
	var value = Reflect.field(openfl.AssetType,"image".toUpperCase());
	DefaultAssetLibrary.type.set("img/button_play.png",value);
	DefaultAssetLibrary.path.set("img/button_play1.png","img/button_play1.png");
	var value = Reflect.field(openfl.AssetType,"image".toUpperCase());
	DefaultAssetLibrary.type.set("img/button_play1.png",value);
	DefaultAssetLibrary.path.set("img/button_play2.png","img/button_play2.png");
	var value = Reflect.field(openfl.AssetType,"image".toUpperCase());
	DefaultAssetLibrary.type.set("img/button_play2.png",value);
	DefaultAssetLibrary.path.set("img/button_replay.png","img/button_replay.png");
	var value = Reflect.field(openfl.AssetType,"image".toUpperCase());
	DefaultAssetLibrary.type.set("img/button_replay.png",value);
	DefaultAssetLibrary.path.set("img/button_score.png","img/button_score.png");
	var value = Reflect.field(openfl.AssetType,"image".toUpperCase());
	DefaultAssetLibrary.type.set("img/button_score.png",value);
	DefaultAssetLibrary.path.set("img/button_sound.png","img/button_sound.png");
	var value = Reflect.field(openfl.AssetType,"image".toUpperCase());
	DefaultAssetLibrary.type.set("img/button_sound.png",value);
	DefaultAssetLibrary.path.set("img/button_soundX.png","img/button_soundX.png");
	var value = Reflect.field(openfl.AssetType,"image".toUpperCase());
	DefaultAssetLibrary.type.set("img/button_soundX.png",value);
	DefaultAssetLibrary.path.set("img/combo3.png","img/combo3.png");
	var value = Reflect.field(openfl.AssetType,"image".toUpperCase());
	DefaultAssetLibrary.type.set("img/combo3.png",value);
	DefaultAssetLibrary.path.set("img/combo4.png","img/combo4.png");
	var value = Reflect.field(openfl.AssetType,"image".toUpperCase());
	DefaultAssetLibrary.type.set("img/combo4.png",value);
	DefaultAssetLibrary.path.set("img/combo5.png","img/combo5.png");
	var value = Reflect.field(openfl.AssetType,"image".toUpperCase());
	DefaultAssetLibrary.type.set("img/combo5.png",value);
	DefaultAssetLibrary.path.set("img/combo6.png","img/combo6.png");
	var value = Reflect.field(openfl.AssetType,"image".toUpperCase());
	DefaultAssetLibrary.type.set("img/combo6.png",value);
	DefaultAssetLibrary.path.set("img/combo7.png","img/combo7.png");
	var value = Reflect.field(openfl.AssetType,"image".toUpperCase());
	DefaultAssetLibrary.type.set("img/combo7.png",value);
	DefaultAssetLibrary.path.set("img/creditsWindow.jpg","img/creditsWindow.jpg");
	var value = Reflect.field(openfl.AssetType,"image".toUpperCase());
	DefaultAssetLibrary.type.set("img/creditsWindow.jpg",value);
	DefaultAssetLibrary.path.set("img/creditsWindow.png","img/creditsWindow.png");
	var value = Reflect.field(openfl.AssetType,"image".toUpperCase());
	DefaultAssetLibrary.type.set("img/creditsWindow.png",value);
	DefaultAssetLibrary.path.set("img/criticalHit.png","img/criticalHit.png");
	var value = Reflect.field(openfl.AssetType,"image".toUpperCase());
	DefaultAssetLibrary.type.set("img/criticalHit.png",value);
	DefaultAssetLibrary.path.set("img/failCont.png","img/failCont.png");
	var value = Reflect.field(openfl.AssetType,"image".toUpperCase());
	DefaultAssetLibrary.type.set("img/failCont.png",value);
	DefaultAssetLibrary.path.set("img/failFill.png","img/failFill.png");
	var value = Reflect.field(openfl.AssetType,"image".toUpperCase());
	DefaultAssetLibrary.type.set("img/failFill.png",value);
	DefaultAssetLibrary.path.set("img/help_screen.jpg","img/help_screen.jpg");
	var value = Reflect.field(openfl.AssetType,"image".toUpperCase());
	DefaultAssetLibrary.type.set("img/help_screen.jpg",value);
	DefaultAssetLibrary.path.set("img/help_screen.png","img/help_screen.png");
	var value = Reflect.field(openfl.AssetType,"image".toUpperCase());
	DefaultAssetLibrary.type.set("img/help_screen.png",value);
	DefaultAssetLibrary.path.set("img/MainBg.jpg","img/MainBg.jpg");
	var value = Reflect.field(openfl.AssetType,"image".toUpperCase());
	DefaultAssetLibrary.type.set("img/MainBg.jpg",value);
	DefaultAssetLibrary.path.set("img/MainFontNumeric.png","img/MainFontNumeric.png");
	var value = Reflect.field(openfl.AssetType,"image".toUpperCase());
	DefaultAssetLibrary.type.set("img/MainFontNumeric.png",value);
	DefaultAssetLibrary.path.set("img/mrg_logo.png","img/mrg_logo.png");
	var value = Reflect.field(openfl.AssetType,"image".toUpperCase());
	DefaultAssetLibrary.type.set("img/mrg_logo.png",value);
	DefaultAssetLibrary.path.set("img/Num.png","img/Num.png");
	var value = Reflect.field(openfl.AssetType,"image".toUpperCase());
	DefaultAssetLibrary.type.set("img/Num.png",value);
	DefaultAssetLibrary.path.set("img/pause.png","img/pause.png");
	var value = Reflect.field(openfl.AssetType,"image".toUpperCase());
	DefaultAssetLibrary.type.set("img/pause.png",value);
	DefaultAssetLibrary.path.set("img/Rotate_to_play.png","img/Rotate_to_play.png");
	var value = Reflect.field(openfl.AssetType,"image".toUpperCase());
	DefaultAssetLibrary.type.set("img/Rotate_to_play.png",value);
	DefaultAssetLibrary.path.set("img/SliceEffect.png","img/SliceEffect.png");
	var value = Reflect.field(openfl.AssetType,"image".toUpperCase());
	DefaultAssetLibrary.type.set("img/SliceEffect.png",value);
	DefaultAssetLibrary.path.set("img/startSlice.png","img/startSlice.png");
	var value = Reflect.field(openfl.AssetType,"image".toUpperCase());
	DefaultAssetLibrary.type.set("img/startSlice.png",value);
	DefaultAssetLibrary.path.set("img/SweetSlice_Logo.png","img/SweetSlice_Logo.png");
	var value = Reflect.field(openfl.AssetType,"image".toUpperCase());
	DefaultAssetLibrary.type.set("img/SweetSlice_Logo.png",value);
	DefaultAssetLibrary.path.set("img/SwordSample (1).png","img/SwordSample (1).png");
	var value = Reflect.field(openfl.AssetType,"image".toUpperCase());
	DefaultAssetLibrary.type.set("img/SwordSample (1).png",value);
	DefaultAssetLibrary.path.set("img/SwordSample.png","img/SwordSample.png");
	var value = Reflect.field(openfl.AssetType,"image".toUpperCase());
	DefaultAssetLibrary.type.set("img/SwordSample.png",value);
	DefaultAssetLibrary.path.set("img/SwordSampleEnd.png","img/SwordSampleEnd.png");
	var value = Reflect.field(openfl.AssetType,"image".toUpperCase());
	DefaultAssetLibrary.type.set("img/SwordSampleEnd.png",value);
	DefaultAssetLibrary.path.set("img/tapToStart.png","img/tapToStart.png");
	var value = Reflect.field(openfl.AssetType,"image".toUpperCase());
	DefaultAssetLibrary.type.set("img/tapToStart.png",value);
	DefaultAssetLibrary.path.set("img/tort.png","img/tort.png");
	var value = Reflect.field(openfl.AssetType,"image".toUpperCase());
	DefaultAssetLibrary.type.set("img/tort.png",value);
	DefaultAssetLibrary.path.set("img/trail1.png","img/trail1.png");
	var value = Reflect.field(openfl.AssetType,"image".toUpperCase());
	DefaultAssetLibrary.type.set("img/trail1.png",value);
	DefaultAssetLibrary.path.set("img/trail2.png","img/trail2.png");
	var value = Reflect.field(openfl.AssetType,"image".toUpperCase());
	DefaultAssetLibrary.type.set("img/trail2.png",value);
	DefaultAssetLibrary.path.set("img/trail3.png","img/trail3.png");
	var value = Reflect.field(openfl.AssetType,"image".toUpperCase());
	DefaultAssetLibrary.type.set("img/trail3.png",value);
	DefaultAssetLibrary.path.set("img/trail4.png","img/trail4.png");
	var value = Reflect.field(openfl.AssetType,"image".toUpperCase());
	DefaultAssetLibrary.type.set("img/trail4.png",value);
	DefaultAssetLibrary.path.set("img/trail5.png","img/trail5.png");
	var value = Reflect.field(openfl.AssetType,"image".toUpperCase());
	DefaultAssetLibrary.type.set("img/trail5.png",value);
	DefaultAssetLibrary.path.set("img/trail6.png","img/trail6.png");
	var value = Reflect.field(openfl.AssetType,"image".toUpperCase());
	DefaultAssetLibrary.type.set("img/trail6.png",value);
	DefaultAssetLibrary.path.set("snd/ambient.mp3","snd/ambient.mp3");
	var value = Reflect.field(openfl.AssetType,"sound".toUpperCase());
	DefaultAssetLibrary.type.set("snd/ambient.mp3",value);
	DefaultAssetLibrary.path.set("snd/ambient.ogg","snd/ambient.ogg");
	var value = Reflect.field(openfl.AssetType,"sound".toUpperCase());
	DefaultAssetLibrary.type.set("snd/ambient.ogg",value);
	DefaultAssetLibrary.path.set("snd/slSound.mp3","snd/slSound.mp3");
	var value = Reflect.field(openfl.AssetType,"sound".toUpperCase());
	DefaultAssetLibrary.type.set("snd/slSound.mp3",value);
	DefaultAssetLibrary.path.set("snd/slSound.ogg","snd/slSound.ogg");
	var value = Reflect.field(openfl.AssetType,"sound".toUpperCase());
	DefaultAssetLibrary.type.set("snd/slSound.ogg",value);
};
$hxClasses["DefaultAssetLibrary"] = DefaultAssetLibrary;
DefaultAssetLibrary.__name__ = ["DefaultAssetLibrary"];
DefaultAssetLibrary.__super__ = openfl.AssetLibrary;
DefaultAssetLibrary.prototype = $extend(openfl.AssetLibrary.prototype,{
	loadSound: function(id,handler) {
		handler(this.getSound(id));
	}
	,loadMusic: function(id,handler) {
		handler(this.getMusic(id));
	}
	,loadFont: function(id,handler) {
		handler(this.getFont(id));
	}
	,loadBytes: function(id,handler) {
		if(DefaultAssetLibrary.path.exists(id)) {
			var loader = new flash.net.URLLoader();
			loader.addEventListener(flash.events.Event.COMPLETE,function(event) {
				var bytes = new flash.utils.ByteArray();
				bytes.writeUTFBytes(event.currentTarget.data);
				bytes.position = 0;
				handler(bytes);
			});
			loader.load(new flash.net.URLRequest(DefaultAssetLibrary.path.get(id)));
		} else handler(this.getBytes(id));
	}
	,loadBitmapData: function(id,handler) {
		if(DefaultAssetLibrary.path.exists(id)) {
			var loader = new flash.display.Loader();
			loader.contentLoaderInfo.addEventListener(flash.events.Event.COMPLETE,function(event) {
				handler((js.Boot.__cast(event.currentTarget.content , flash.display.Bitmap)).bitmapData);
			});
			loader.load(new flash.net.URLRequest(DefaultAssetLibrary.path.get(id)));
		} else handler(this.getBitmapData(id));
	}
	,isLocal: function(id,type) {
		return true;
	}
	,getSound: function(id) {
		return new flash.media.Sound(new flash.net.URLRequest(DefaultAssetLibrary.path.get(id)));
	}
	,getPath: function(id) {
		return DefaultAssetLibrary.path.get(id);
	}
	,getMusic: function(id) {
		return new flash.media.Sound(new flash.net.URLRequest(DefaultAssetLibrary.path.get(id)));
	}
	,getFont: function(id) {
		return js.Boot.__cast(Type.createInstance(DefaultAssetLibrary.className.get(id),[]) , flash.text.Font);
	}
	,getBytes: function(id) {
		var bytes = null;
		var data = ApplicationMain.urlLoaders.get(DefaultAssetLibrary.path.get(id)).data;
		if(js.Boot.__instanceof(data,String)) {
			bytes = new flash.utils.ByteArray();
			bytes.writeUTFBytes(data);
		} else if(js.Boot.__instanceof(data,flash.utils.ByteArray)) bytes = data; else bytes = null;
		if(bytes != null) {
			bytes.position = 0;
			return bytes;
		} else return null;
	}
	,getBitmapData: function(id) {
		return (js.Boot.__cast(ApplicationMain.loaders.get(DefaultAssetLibrary.path.get(id)).contentLoaderInfo.content , flash.display.Bitmap)).bitmapData;
	}
	,exists: function(id,type) {
		var assetType = DefaultAssetLibrary.type.get(id);
		if(assetType != null) {
			if(assetType == type || (type == openfl.AssetType.SOUND || type == openfl.AssetType.MUSIC) && (assetType == openfl.AssetType.MUSIC || assetType == openfl.AssetType.SOUND)) return true;
			if(type == openfl.AssetType.BINARY || type == null) return true;
		}
		return false;
	}
	,__class__: DefaultAssetLibrary
});
var EReg = function(r,opt) {
	opt = opt.split("u").join("");
	this.r = new RegExp(r,opt);
};
$hxClasses["EReg"] = EReg;
EReg.__name__ = ["EReg"];
EReg.prototype = {
	replace: function(s,by) {
		return s.replace(this.r,by);
	}
	,matchedPos: function() {
		if(this.r.m == null) throw "No string matched";
		return { pos : this.r.m.index, len : this.r.m[0].length};
	}
	,matchedRight: function() {
		if(this.r.m == null) throw "No string matched";
		var sz = this.r.m.index + this.r.m[0].length;
		return this.r.s.substr(sz,this.r.s.length - sz);
	}
	,matched: function(n) {
		return this.r.m != null && n >= 0 && n < this.r.m.length?this.r.m[n]:(function($this) {
			var $r;
			throw "EReg::matched";
			return $r;
		}(this));
	}
	,match: function(s) {
		if(this.r.global) this.r.lastIndex = 0;
		this.r.m = this.r.exec(s);
		this.r.s = s;
		return this.r.m != null;
	}
	,r: null
	,__class__: EReg
}
var FailsCont = function() {
	this.GAP = 3;
	flash.display.Bitmap.call(this);
	this.contBmd = openfl.Assets.getBitmapData("img/failCont.png");
    this.fillBmd = openfl.Assets.getBitmapData("img/failFill.png");
	this.hp = new flash.geom.Point();
	this.set_bitmapData(new flash.display.BitmapData((this.contBmd.get_width() + this.GAP) * 3,this.contBmd.get_height()));
};
$hxClasses["FailsCont"] = FailsCont;
FailsCont.__name__ = ["FailsCont"];
FailsCont.__super__ = flash.display.Bitmap;
FailsCont.prototype = $extend(flash.display.Bitmap.prototype,{
	setWithFails: function(numFails) {
		this.bitmapData.fillRect(this.bitmapData.rect,0);
		var _g = 0;
		while(_g < 3) {
			var i = _g++;
			this.hp.x = i * (this.contBmd.get_width() + this.GAP);
			this.bitmapData.copyPixels(this.contBmd,this.contBmd.rect,this.hp);
			if(i + 1 <= numFails) this.bitmapData.copyPixels(this.fillBmd,this.fillBmd.rect,this.hp);
		}
	}
	,hp: null
	,GAP: null
	,fillBmd: null
	,contBmd: null
	,__class__: FailsCont
});
var FinishScreen = function() {
	flash.display.Sprite.call(this);
	this.main = Main.current;
	this.numericFont = this.main.blitCanvas.numericFont;
	this.scoreTable = new flash.display.Bitmap(openfl.Assets.getBitmapData("img/button_score.png"));
	this.retryBtn = new flash.display.Bitmap(openfl.Assets.getBitmapData("img/button_replay.png"));
	this.mainMenuBtn = new flash.display.Bitmap(openfl.Assets.getBitmapData("img/button_menu.png"));
	this.moreGamesBtn = new flash.display.Bitmap(openfl.Assets.getBitmapData("img/button_more_games.png"));
	this.scoreTable.set_x(this.retryBtn.get_width() + 5);
	this.addChild(this.scoreTable);
	this.labelField = new flash.display.Bitmap(new flash.display.BitmapData(this.scoreTable.get_width() | 0,100,true,0));
	this.labelField.set_y(55);
	this.labelField.set_x(this.scoreTable.get_x());
	this.addChild(this.labelField);
	this.retryBtn.set_x(0);
	this.retryBtn.set_y(this.scoreTable.get_height() / 2 - this.retryBtn.get_height() / 2);
	this.addChild(this.retryBtn);
	this.mainMenuBtn.set_x(this.scoreTable.get_x() + this.mainMenuBtn.get_width() + 5);
	this.mainMenuBtn.set_y(this.scoreTable.get_height() / 2 - this.mainMenuBtn.get_height() / 2);
	this.addChild(this.mainMenuBtn);
	this.moreGamesBtn.set_x(this.scoreTable.get_x() + this.scoreTable.get_width() / 2 - this.moreGamesBtn.get_width() / 2);
	this.moreGamesBtn.set_y(this.scoreTable.get_y() + this.scoreTable.get_height() + 5);
	this.addChild(this.moreGamesBtn);
	this.set_x(this.main.sWidth / 2 - this.get_width() / 2);
	this.set_y(this.main.sHeight / 2 - this.scoreTable.get_height() / 2);
	this.retryBtn.addEventListener(flash.events.MouseEvent.CLICK,$bind(this,this.clickRetry));
	this.retryBtn.addEventListener("touchEnd",$bind(this,this.touchRetry));
	this.moreGamesBtn.__graphics.__surface.addEventListener("touchend",Main.openMoreGames);
	this.moreGamesBtn.__graphics.__surface.addEventListener("click",Main.openMoreGames);
	this.mainMenuBtn.addEventListener(flash.events.MouseEvent.CLICK,$bind(this,this.clickMainMenu));
	this.mainMenuBtn.addEventListener("touchEnd",$bind(this,this.touchMainMenu));
};
$hxClasses["FinishScreen"] = FinishScreen;
FinishScreen.__name__ = ["FinishScreen"];
FinishScreen.__super__ = flash.display.Sprite;
FinishScreen.prototype = $extend(flash.display.Sprite.prototype,{
	touchMainMenu: function(e) {
		if(!this.get_visible()) return;
		this.disable();
		this.main.startBtns.enable();
	}
	,clickMainMenu: function(e) {
		if(!this.get_visible()) return;
		this.disable();
		this.main.startBtns.enable();
	}
	,touchRetry: function(e) {
		if(!this.get_visible()) return;
		this.disable();
		this.main.newGame(this.main.gamePlay);
	}
	,clickRetry: function(e) {
		if(!this.get_visible()) return;
		this.disable();
		this.main.newGame(this.main.gamePlay);
	}
	,enable: function() {
		this.set_visible(true);
		this.labelField.bitmapData.fillRect(this.labelField.bitmapData.rect,0);
		this.numericFont.drawTo(this.labelField.bitmapData,Std.string(this.main.scores.score),this.labelField.bitmapData.get_width() / 2,0,true);
	}
	,disable: function() {
		this.set_visible(false);
	}
	,moreBtnClick: function() {
		//js.Browser.window.open("http://www.myrealgames.com/mobile-games/?utm_source=SweetSlice&utm_medium=html5_moregames","_blank").focus();
		try{parent.moregame();}catch(e){}
	}
	,moreGamesBtn: null
	,mainMenuBtn: null
	,retryBtn: null
	,labelField: null
	,scoreTable: null
	,numericFont: null
	,main: null
	,__class__: FinishScreen
});
var HxOverrides = function() { }
$hxClasses["HxOverrides"] = HxOverrides;
HxOverrides.__name__ = ["HxOverrides"];
HxOverrides.strDate = function(s) {
	switch(s.length) {
	case 8:
		var k = s.split(":");
		var d = new Date();
		d.setTime(0);
		d.setUTCHours(k[0]);
		d.setUTCMinutes(k[1]);
		d.setUTCSeconds(k[2]);
		return d;
	case 10:
		var k = s.split("-");
		return new Date(k[0],k[1] - 1,k[2],0,0,0);
	case 19:
		var k = s.split(" ");
		var y = k[0].split("-");
		var t = k[1].split(":");
		return new Date(y[0],y[1] - 1,y[2],t[0],t[1],t[2]);
	default:
		throw "Invalid date format : " + s;
	}
}
HxOverrides.cca = function(s,index) {
	var x = s.charCodeAt(index);
	if(x != x) return undefined;
	return x;
}
HxOverrides.substr = function(s,pos,len) {
	if(pos != null && pos != 0 && len != null && len < 0) return "";
	if(len == null) len = s.length;
	if(pos < 0) {
		pos = s.length + pos;
		if(pos < 0) pos = 0;
	} else if(len < 0) len = s.length + len - pos;
	return s.substr(pos,len);
}
HxOverrides.remove = function(a,obj) {
	var i = 0;
	var l = a.length;
	while(i < l) {
		if(a[i] == obj) {
			a.splice(i,1);
			return true;
		}
		i++;
	}
	return false;
}
HxOverrides.iter = function(a) {
	return { cur : 0, arr : a, hasNext : function() {
		return this.cur < this.arr.length;
	}, next : function() {
		return this.arr[this.cur++];
	}};
}
var List = function() {
	this.length = 0;
};
$hxClasses["List"] = List;
List.__name__ = ["List"];
List.prototype = {
	iterator: function() {
		return { h : this.h, hasNext : function() {
			return this.h != null;
		}, next : function() {
			if(this.h == null) return null;
			var x = this.h[0];
			this.h = this.h[1];
			return x;
		}};
	}
	,isEmpty: function() {
		return this.h == null;
	}
	,pop: function() {
		if(this.h == null) return null;
		var x = this.h[0];
		this.h = this.h[1];
		if(this.h == null) this.q = null;
		this.length--;
		return x;
	}
	,first: function() {
		return this.h == null?null:this.h[0];
	}
	,push: function(item) {
		var x = [item,this.h];
		this.h = x;
		if(this.q == null) this.q = x;
		this.length++;
	}
	,add: function(item) {
		var x = [item];
		if(this.h == null) this.h = x; else this.q[1] = x;
		this.q = x;
		this.length++;
	}
	,length: null
	,q: null
	,h: null
	,__class__: List
}
var IMap = function() { }
$hxClasses["IMap"] = IMap;
IMap.__name__ = ["IMap"];
var NMEPreloader = function() {
	flash.display.Sprite.call(this);
	var backgroundColor = this.getBackgroundColor();
	var r = backgroundColor >> 16 & 255;
	var g = backgroundColor >> 8 & 255;
	var b = backgroundColor & 255;
	var perceivedLuminosity = 0.299 * r + 0.587 * g + 0.114 * b;
	var color = 0;
	if(perceivedLuminosity < 70) color = 16777215;
	var x = 30;
	var height = 9;
	var y = this.getHeight() / 2 - height / 2;
	var width = this.getWidth() - x * 2;
	var padding = 3;
	this.outline = new flash.display.Sprite();
	this.outline.get_graphics().lineStyle(1,color,0.15,true);
	this.outline.get_graphics().drawRoundRect(0,0,width,height,padding * 2,padding * 2);
	this.outline.set_x(x);
	this.outline.set_y(y);
	this.addChild(this.outline);
	this.progress = new flash.display.Sprite();
	this.progress.get_graphics().beginFill(color,0.35);
	this.progress.get_graphics().drawRect(0,0,width - padding * 2,height - padding * 2);
	this.progress.set_x(x + padding);
	this.progress.set_y(y + padding);
	this.progress.set_scaleX(0);
	this.addChild(this.progress);
};
$hxClasses["NMEPreloader"] = NMEPreloader;
NMEPreloader.__name__ = ["NMEPreloader"];
NMEPreloader.__super__ = flash.display.Sprite;
NMEPreloader.prototype = $extend(flash.display.Sprite.prototype,{
	onUpdate: function(bytesLoaded,bytesTotal) {
		var percentLoaded = bytesLoaded / bytesTotal;
		if(percentLoaded > 1) percentLoaded == 1;
		this.progress.set_scaleX(percentLoaded);
	}
	,onLoaded: function() {
		this.dispatchEvent(new flash.events.Event(flash.events.Event.COMPLETE));
	}
	,onInit: function() {
	}
	,getWidth: function() {
		var width = 0;
		if(width > 0) return width; else return flash.Lib.get_current().get_stage().get_stageWidth();
	}
	,getHeight: function() {
		var height = 0;
		if(height > 0) return height; else return flash.Lib.get_current().get_stage().get_stageHeight();
	}
	,getBackgroundColor: function() {
		return 0;
	}
	,progress: null
	,outline: null
	,__class__: NMEPreloader
});
var NumericFont = function(fontImgName,symbolWidth) {
	this.img = openfl.Assets.getBitmapData("img/" + fontImgName + ".png");
	this.symWidth = symbolWidth;
	this.hp = new flash.geom.Point();
	this.hct = new flash.geom.ColorTransform();
	this.hm = new flash.geom.Matrix();
	this.hr = new flash.geom.Rectangle(0,0,this.symWidth,this.img.get_height());
	this.colorArray = new haxe.ds.IntMap();
};
$hxClasses["NumericFont"] = NumericFont;
NumericFont.__name__ = ["NumericFont"];
NumericFont.prototype = {
	getBmdColor: function(color) {
		if(this.colorArray.exists(color)) return this.colorArray.get(color);
		var tbmd = new flash.display.BitmapData(this.img.get_width(),this.img.get_height(),true,0);
		tbmd.copyPixels(this.img,this.img.rect,new flash.geom.Point(),null,null,true);
		this.hct.set_color(color);
		tbmd.colorTransform(tbmd.rect,this.hct);
		this.colorArray.set(color,tbmd);
		return tbmd;
	}
	,drawTo: function(dest,text,x,y,centerX,centerY,color) {
		if(color == null) color = 0;
		if(centerY == null) centerY = false;
		if(centerX == null) centerX = false;
		if(y == null) y = 0;
		if(x == null) x = 0;
		var symArr = text.split("");
		var sourceBmd;
		if(centerX) this.hp.x = x - symArr.length * this.symWidth / 2; else this.hp.x = x;
		if(centerY) this.hp.y = y - this.img.get_height() / 2; else this.hp.y = y;
		if(color != 0) sourceBmd = this.getBmdColor(color); else sourceBmd = this.img;
		var drawIndex;
		var _g1 = 0, _g = symArr.length;
		while(_g1 < _g) {
			var i = _g1++;
			drawIndex = Std.parseInt(symArr[i]);
			this.hr.x = drawIndex * this.symWidth;
			dest.copyPixels(sourceBmd,this.hr,this.hp,null,null,true);
			this.hp.x += this.symWidth;
		}
	}
	,hr: null
	,hm: null
	,hct: null
	,hp: null
	,symWidth: null
	,colorArray: null
	,img: null
	,__class__: NumericFont
}
var PauseMenu = function() {
	flash.display.Sprite.call(this);
	this.main = Main.current;
	this.unpauseBtn = new flash.display.Bitmap(openfl.Assets.getBitmapData("img/button_play.png"));
	this.restartBtn = new flash.display.Bitmap(openfl.Assets.getBitmapData("img/button_replay.png"));
	this.mainMenuBtn = new flash.display.Bitmap(openfl.Assets.getBitmapData("img/button_menu.png"));
	this.moreGamesBtn = new flash.display.Bitmap(openfl.Assets.getBitmapData("img/button_more_games.png"));
	this.addChild(this.unpauseBtn);
	this.restartBtn.set_x(this.unpauseBtn.get_width() + 5);
	this.restartBtn.set_y(this.unpauseBtn.get_y());
	this.addChild(this.restartBtn);
	this.mainMenuBtn.set_y(this.restartBtn.get_y() + this.restartBtn.get_height() + 5);
	this.addChild(this.mainMenuBtn);
	this.mutedBmd = openfl.Assets.getBitmapData("img/button_soundX.png");
	this.unmutedBmd = openfl.Assets.getBitmapData("img/button_sound.png");
	this.muteBtn = new flash.display.Bitmap(this.mutedBmd);
	this.muteBtn.set_x(this.mainMenuBtn.get_width() + 5);
	this.muteBtn.set_y(this.mainMenuBtn.get_y());
	this.addChild(this.muteBtn);
	this.refreshMuteBtn();
	this.moreGamesBtn.set_x(this.restartBtn.get_width() + 5 - this.moreGamesBtn.get_width() / 2);
	this.moreGamesBtn.set_y(this.muteBtn.get_y() + this.muteBtn.get_height() + 5);
	this.addChild(this.moreGamesBtn);
	this.set_x(this.main.sWidth / 2 - this.get_width() / 2);
	this.set_y(this.main.sHeight / 2 - this.get_height() / 2);
	this.unpauseBtn.addEventListener(flash.events.MouseEvent.CLICK,$bind(this,this.unpauseClick));
	this.unpauseBtn.addEventListener("touchEnd",$bind(this,this.unpauseClick));
	this.restartBtn.addEventListener(flash.events.MouseEvent.CLICK,$bind(this,this.clickRetry));
	this.restartBtn.addEventListener("touchEnd",$bind(this,this.touchRetry));
	this.mainMenuBtn.addEventListener(flash.events.MouseEvent.CLICK,$bind(this,this.clickMainMenu));
	this.mainMenuBtn.addEventListener("touchEnd",$bind(this,this.touchMainMenu));
	this.moreGamesBtn.__graphics.__surface.addEventListener("touchend",Main.openMoreGames);
	this.moreGamesBtn.__graphics.__surface.addEventListener("click",Main.openMoreGames);
	this.muteBtn.addEventListener(flash.events.MouseEvent.CLICK,$bind(this,this.muteClick));
	this.muteBtn.addEventListener("touchEnd",$bind(this,this.muteClick));
};
$hxClasses["PauseMenu"] = PauseMenu;
PauseMenu.__name__ = ["PauseMenu"];
PauseMenu.__super__ = flash.display.Sprite;
PauseMenu.prototype = $extend(flash.display.Sprite.prototype,{
	touchMainMenu: function(e) {
		if(!this.get_visible()) return;
		this.disable();
		this.main.startBtns.enable();
	}
	,clickMainMenu: function(e) {
		if(!this.get_visible()) return;
		this.disable();
		this.main.startBtns.enable();
	}
	,touchRetry: function(e) {
		if(!this.get_visible()) return;
		this.disable();
		this.main.newGame(this.main.gamePlay);
	}
	,clickRetry: function(e) {
		if(!this.get_visible()) return;
		this.disable();
		this.main.newGame(this.main.gamePlay);
	}
	,unpauseClick: function(e) {
		if(!this.get_visible()) return;
		this.disable();
		this.main.startGame();
	}
	,refreshMuteBtn: function() {
		if(this.main.muted || !this.main.soundsAvailable) this.muteBtn.set_bitmapData(this.mutedBmd); else this.muteBtn.set_bitmapData(this.unmutedBmd);
	}
	,muteClick: function(e) {
		if(e.type != flash.events.MouseEvent.CLICK) this.muteBtn.removeEventListener(flash.events.MouseEvent.CLICK,$bind(this,this.muteClick)); else this.muteBtn.removeEventListener("touchEnd",$bind(this,this.muteClick));
		if(this.main.muted) this.main.unMute(); else this.main.mute();
		this.refreshMuteBtn();
	}
	,enable: function() {
		this.set_visible(true);
		this.refreshMuteBtn();
	}
	,disable: function() {
		this.set_visible(false);
	}
	,moreBtnClick: function() {
		//js.Browser.window.open("http://www.myrealgames.com/mobile-games/?utm_source=SweetSlice&utm_medium=html5_moregames","_blank").focus();
		try{parent.moregame();}catch(e){}
	}
	,unmutedBmd: null
	,mutedBmd: null
	,muteBtn: null
	,moreGamesBtn: null
	,mainMenuBtn: null
	,restartBtn: null
	,unpauseBtn: null
	,main: null
	,__class__: PauseMenu
});
var PlayButton = function() {
    alert("")
	flash.display.Sprite.call(this);
	this.main = Main.current;
	this.logo = new flash.display.Bitmap(openfl.Assets.getBitmapData("img/SweetSlice_Logo.png"));
	this.play1 = new flash.display.Bitmap(openfl.Assets.getBitmapData("img/button_play1.png"));
	this.play2 = new flash.display.Bitmap(openfl.Assets.getBitmapData("img/button_play2.png"));
	this.credits = new flash.display.Bitmap(openfl.Assets.getBitmapData("img/button_credits.png"));
	this.moreGamesBtn = new flash.display.Bitmap(openfl.Assets.getBitmapData("img/button_more_games.png"));
	this.tutorialBtn = new flash.display.Bitmap(openfl.Assets.getBitmapData("img/button_help.png"));
	this.mutedBmd = openfl.Assets.getBitmapData("img/button_soundX.png");
	this.unmutedBmd = openfl.Assets.getBitmapData("img/button_sound.png");
	this.logo.set_x(this.main.sWidth / 2 - this.logo.get_width() / 2);
	this.logo.set_y(this.main.sHeight / 2 - (this.logo.get_height() + 30 + this.play1.get_height() + 5 + this.mutedBmd.get_height()) / 2);
	this.addChild(this.logo);
	this.play1.set_x(this.main.sWidth / 2 - this.play1.get_width() - 2.5);
	this.play1.set_y(this.logo.get_y() + this.logo.get_height() + 30);
	this.addChild(this.play1);
	this.play2.set_y(this.play1.get_y());
	this.play2.set_x(this.play1.get_x() + this.play1.get_width() + 5);
	this.addChild(this.play2);
	this.muteBtn = new flash.display.Bitmap(this.mutedBmd);
	this.muteBtn.set_y(this.play2.get_y() + this.play2.get_height() + 5);
	this.muteBtn.set_x(this.main.sWidth / 2 - (this.muteBtn.get_width() + 5) * 3 / 2);
	this.addChild(this.muteBtn);
	this.refreshMuteBtn();
	this.moreGamesBtn.set_x(this.muteBtn.get_x() + this.muteBtn.get_width() + 5);
	this.moreGamesBtn.set_y(this.muteBtn.get_y());
	this.addChild(this.moreGamesBtn);
	this.tutorialBtn.set_x(this.moreGamesBtn.get_x() + this.moreGamesBtn.get_width() + 5);
	this.tutorialBtn.set_y(this.muteBtn.get_y());
	this.addChild(this.tutorialBtn);
	this.credits.set_y(this.main.sHeight - this.credits.get_height() - 20);
	this.credits.set_x(this.main.sWidth - this.credits.get_width() - 20);
	this.addChild(this.credits);
	this.play1.addEventListener(flash.events.MouseEvent.CLICK,$bind(this,this.click));
	this.play1.addEventListener("touchEnd",$bind(this,this.touch));
	this.play2.addEventListener(flash.events.MouseEvent.CLICK,$bind(this,this.click));
	this.play2.addEventListener("touchEnd",$bind(this,this.touch));
	this.credits.addEventListener(flash.events.MouseEvent.CLICK,$bind(this,this.creditsClick));
	this.credits.addEventListener("touchEnd",$bind(this,this.creditsClick));
	this.tutorialBtn.addEventListener(flash.events.MouseEvent.CLICK,$bind(this,this.tutorClick));
	this.tutorialBtn.addEventListener("touchEnd",$bind(this,this.tutorClick));
	this.moreGamesBtn.__graphics.__surface.addEventListener("touchend",Main.openMoreGames);
	this.moreGamesBtn.__graphics.__surface.addEventListener("click",Main.openMoreGames);
	this.muteBtn.addEventListener(flash.events.MouseEvent.CLICK,$bind(this,this.muteClick));
	this.muteBtn.addEventListener("touchEnd",$bind(this,this.muteClick));
};
$hxClasses["PlayButton"] = PlayButton;
PlayButton.__name__ = ["PlayButton"];
PlayButton.__super__ = flash.display.Sprite;
PlayButton.prototype = $extend(flash.display.Sprite.prototype,{
	destroy: function(gamePlay) {
		if(!this.get_visible()) return;
		this.main.newGame(gamePlay);
		this.disable();
	}
	,enable: function() {
		this.set_visible(true);
		if(this.main.mr_logo != null) this.main.mr_logo.alpha = 1;
		this.main.clearCanvasScores();
		this.refreshMuteBtn();
	}
	,disable: function() {
		if(this.main.mr_logo != null) this.main.mr_logo.alpha = 0;
		this.set_visible(false);
	}
	,touch: function(e) {
		if(e.currentTarget == this.play1) this.destroy(1); else this.destroy(2);
	}
	,click: function(e) {
		if(e.currentTarget == this.play1) this.destroy(1); else this.destroy(2);
	}
	,refreshMuteBtn: function() {
		if(this.main.muted || !this.main.soundsAvailable) this.muteBtn.set_bitmapData(this.mutedBmd); else this.muteBtn.set_bitmapData(this.unmutedBmd);
	}
	,muteClick: function(e) {
		if(e.type != flash.events.MouseEvent.CLICK) this.muteBtn.removeEventListener(flash.events.MouseEvent.CLICK,$bind(this,this.muteClick)); else this.muteBtn.removeEventListener("touchEnd",$bind(this,this.muteClick));
		if(this.main.muted) this.main.unMute(); else this.main.mute();
		this.refreshMuteBtn();
	}
	,closeTutor: function(e) {
		flash.Lib.get_current().get_stage().removeEventListener("touchEnd",$bind(this,this.closeTutor));
		flash.Lib.get_current().get_stage().removeEventListener(flash.events.MouseEvent.CLICK,$bind(this,this.closeTutor));
		this.main.tutorWindow.alpha = 0;
		this.main.removeChild(this.main.tutorWindow);
	}
	,tutorClick: function(e) {
		if(e.type == flash.events.MouseEvent.CLICK) this.tutorialBtn.removeEventListener("touchEnd",$bind(this,this.tutorClick)); else this.tutorialBtn.removeEventListener(flash.events.MouseEvent.CLICK,$bind(this,this.tutorClick));
		this.main.tutorWindow.alpha = 1;
		this.main.addChild(this.main.tutorWindow);
		flash.Lib.get_current().get_stage().addEventListener("touchEnd",$bind(this,this.closeTutor));
		flash.Lib.get_current().get_stage().addEventListener(flash.events.MouseEvent.CLICK,$bind(this,this.closeTutor));
		e.stopImmediatePropagation();
	}
	,closeCredits: function(e) {
		flash.Lib.get_current().get_stage().removeEventListener("touchEnd",$bind(this,this.closeCredits));
		flash.Lib.get_current().get_stage().removeEventListener(flash.events.MouseEvent.CLICK,$bind(this,this.closeCredits));
		this.main.creditsWindow.alpha = 0;
		this.main.removeChild(this.main.creditsWindow);
	}
	,creditsClick: function(e) {
		if(e.type == flash.events.MouseEvent.CLICK) this.credits.removeEventListener("touchEnd",$bind(this,this.creditsClick)); else this.credits.removeEventListener(flash.events.MouseEvent.CLICK,$bind(this,this.creditsClick));
		this.main.creditsWindow.alpha = 1;
		this.main.addChild(this.main.creditsWindow);
		flash.Lib.get_current().get_stage().addEventListener("touchEnd",$bind(this,this.closeCredits));
		flash.Lib.get_current().get_stage().addEventListener(flash.events.MouseEvent.CLICK,$bind(this,this.closeCredits));
		e.stopImmediatePropagation();
	}
	,moreBtnClick: function() {
		//js.Browser.window.open("http://www.myrealgames.com/mobile-games/?utm_source=SweetSlice&utm_medium=html5_moregames","_blank").focus();
		try{parent.moregame();}catch(e){}
	}
	,unmutedBmd: null
	,mutedBmd: null
	,muteBtn: null
	,main: null
	,tutorialBtn: null
	,moreGamesBtn: null
	,credits: null
	,play2: null
	,play1: null
	,logo: null
	,__class__: PlayButton
});
flash.display.BitmapData = function(width,height,transparent,inFillColor) {
	if(inFillColor == null) inFillColor = -1;
	if(transparent == null) transparent = true;
	this.__locked = false;
	this.__referenceCount = 0;
	this.__leaseNum = 0;
	this.__lease = new flash.display.ImageDataLease();
	this.__lease.set(this.__leaseNum++,new Date().getTime());
	this.___textureBuffer = js.Browser.document.createElement("canvas");
	this.___textureBuffer.width = width;
	this.___textureBuffer.height = height;
	this.___id = flash.utils.Uuid.uuid();
	flash.Lib.__setSurfaceId(this.___textureBuffer,this.___id);
	this.__transparent = transparent;
	this.rect = new flash.geom.Rectangle(0,0,width,height);
	if(this.__transparent) {
		this.__transparentFiller = js.Browser.document.createElement("canvas");
		this.__transparentFiller.width = width;
		this.__transparentFiller.height = height;
		var ctx = this.__transparentFiller.getContext("2d");
		ctx.fillStyle = "rgba(0,0,0,0);";
		ctx.fill();
	}
	if(inFillColor != null && width > 0 && height > 0) {
		if(!this.__transparent) inFillColor |= -16777216;
		this.__initColor = inFillColor;
		this.__fillRect(this.rect,inFillColor);
	}
};
$hxClasses["flash.display.BitmapData"] = flash.display.BitmapData;
flash.display.BitmapData.__name__ = ["flash","display","BitmapData"];
flash.display.BitmapData.__interfaces__ = [flash.display.IBitmapDrawable];
flash.display.BitmapData.getRGBAPixels = function(bitmapData) {
	var p = bitmapData.getPixels(new flash.geom.Rectangle(0,0,bitmapData.___textureBuffer != null?bitmapData.___textureBuffer.width:0,bitmapData.___textureBuffer != null?bitmapData.___textureBuffer.height:0));
	var num = (bitmapData.___textureBuffer != null?bitmapData.___textureBuffer.width:0) * (bitmapData.___textureBuffer != null?bitmapData.___textureBuffer.height:0);
	p.position = 0;
	var _g = 0;
	while(_g < num) {
		var i = _g++;
		var pos = p.position;
		var alpha = p.readByte();
		var red = p.readByte();
		var green = p.readByte();
		var blue = p.readByte();
		p.position = pos;
		p.writeByte(red);
		p.writeByte(green);
		p.writeByte(blue);
		p.writeByte(alpha);
	}
	return p;
}
flash.display.BitmapData.loadFromBase64 = function(base64,type,onload) {
	var bitmapData = new flash.display.BitmapData(0,0);
	bitmapData.__loadFromBase64(base64,type,onload);
	return bitmapData;
}
flash.display.BitmapData.loadFromBytes = function(bytes,inRawAlpha,onload) {
	var bitmapData = new flash.display.BitmapData(0,0);
	bitmapData.__loadFromBytes(bytes,inRawAlpha,onload);
	return bitmapData;
}
flash.display.BitmapData.__base64Encode = function(bytes) {
	var blob = "";
	var codex = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=";
	bytes.position = 0;
	while(bytes.position < bytes.length) {
		var by1 = 0, by2 = 0, by3 = 0;
		by1 = bytes.readByte();
		if(bytes.position < bytes.length) by2 = bytes.readByte();
		if(bytes.position < bytes.length) by3 = bytes.readByte();
		var by4 = 0, by5 = 0, by6 = 0, by7 = 0;
		by4 = by1 >> 2;
		by5 = (by1 & 3) << 4 | by2 >> 4;
		by6 = (by2 & 15) << 2 | by3 >> 6;
		by7 = by3 & 63;
		blob += codex.charAt(by4);
		blob += codex.charAt(by5);
		if(bytes.position < bytes.length) blob += codex.charAt(by6); else blob += "=";
		if(bytes.position < bytes.length) blob += codex.charAt(by7); else blob += "=";
	}
	return blob;
}
flash.display.BitmapData.__createFromHandle = function(inHandle) {
	var result = new flash.display.BitmapData(0,0);
	result.___textureBuffer = inHandle;
	return result;
}
flash.display.BitmapData.__isJPG = function(bytes) {
	bytes.position = 0;
	return bytes.readByte() == 255 && bytes.readByte() == 216;
}
flash.display.BitmapData.__isPNG = function(bytes) {
	bytes.position = 0;
	return bytes.readByte() == 137 && bytes.readByte() == 80 && bytes.readByte() == 78 && bytes.readByte() == 71 && bytes.readByte() == 13 && bytes.readByte() == 10 && bytes.readByte() == 26 && bytes.readByte() == 10;
}
flash.display.BitmapData.prototype = {
	get_width: function() {
		if(this.___textureBuffer != null) return this.___textureBuffer.width; else return 0;
	}
	,get_transparent: function() {
		return this.__transparent;
	}
	,get_height: function() {
		if(this.___textureBuffer != null) return this.___textureBuffer.height; else return 0;
	}
	,__onLoad: function(data,e) {
		var canvas = data.texture;
		var width = data.image.width;
		var height = data.image.height;
		canvas.width = width;
		canvas.height = height;
		var ctx = canvas.getContext("2d");
		ctx.drawImage(data.image,0,0,width,height);
		data.bitmapData.width = width;
		data.bitmapData.height = height;
		data.bitmapData.rect = new flash.geom.Rectangle(0,0,width,height);
		data.bitmapData.__buildLease();
		if(data.inLoader != null) {
			var e1 = new flash.events.Event(flash.events.Event.COMPLETE);
			e1.target = data.inLoader;
			data.inLoader.dispatchEvent(e1);
		}
	}
	,__loadFromFile: function(inFilename,inLoader) {
		var _g = this;
		var image = js.Browser.document.createElement("img");
		if(inLoader != null) {
			var data = { image : image, texture : this.___textureBuffer, inLoader : inLoader, bitmapData : this};
			image.addEventListener("load",(function(f,a1) {
				return function(e) {
					return f(a1,e);
				};
			})($bind(this,this.__onLoad),data),false);
			image.addEventListener("error",function(e) {
				if(!image.complete) _g.__onLoad(data,e);
			},false);
		}
		image.src = inFilename;
		if(image.complete) {
		}
	}
	,__incrNumRefBitmaps: function() {
		this.__assignedBitmaps++;
	}
	,__getNumRefBitmaps: function() {
		return this.__assignedBitmaps;
	}
	,__loadFromBytes: function(bytes,inRawAlpha,onload) {
		var _g = this;
		var type = "";
		if(flash.display.BitmapData.__isPNG(bytes)) type = "image/png"; else if(flash.display.BitmapData.__isJPG(bytes)) type = "image/jpeg"; else throw new flash.errors.IOError("BitmapData tried to read a PNG/JPG ByteArray, but found an invalid header.");
		if(inRawAlpha != null) this.__loadFromBase64(flash.display.BitmapData.__base64Encode(bytes),type,function(_) {
			var ctx = _g.___textureBuffer.getContext("2d");
			var pixels = ctx.getImageData(0,0,_g.___textureBuffer.width,_g.___textureBuffer.height);
			var _g2 = 0, _g1 = inRawAlpha.length;
			while(_g2 < _g1) {
				var i = _g2++;
				pixels.data[i * 4 + 3] = inRawAlpha.readUnsignedByte();
			}
			ctx.putImageData(pixels,0,0);
			if(onload != null) onload(_g);
		}); else this.__loadFromBase64(flash.display.BitmapData.__base64Encode(bytes),type,onload);
	}
	,__loadFromBase64: function(base64,type,onload) {
		var _g = this;
		var img = js.Browser.document.createElement("img");
		var canvas = this.___textureBuffer;
		var drawImage = function(_) {
			canvas.width = img.width;
			canvas.height = img.height;
			var ctx = canvas.getContext("2d");
			ctx.drawImage(img,0,0);
			_g.rect = new flash.geom.Rectangle(0,0,canvas.width,canvas.height);
			if(onload != null) onload(_g);
		};
		img.addEventListener("load",drawImage,false);
		img.src = "data:" + type + ";base64," + base64;
	}
	,__getLease: function() {
		return this.__lease;
	}
	,__fillRect: function(rect,color) {
		this.__lease.set(this.__leaseNum++,new Date().getTime());
		var ctx = this.___textureBuffer.getContext("2d");
		var r = (color & 16711680) >>> 16;
		var g = (color & 65280) >>> 8;
		var b = color & 255;
		var a = this.__transparent?color >>> 24:255;
		if(!this.__locked) {
			var style = "rgba(" + r + ", " + g + ", " + b + ", " + a / 255 + ")";
			ctx.fillStyle = style;
			ctx.fillRect(rect.x,rect.y,rect.width,rect.height);
		} else {
			var s = 4 * (Math.round(rect.x) + Math.round(rect.y) * this.__imageData.width);
			var offsetY;
			var offsetX;
			var _g1 = 0, _g = Math.round(rect.height);
			while(_g1 < _g) {
				var i = _g1++;
				offsetY = i * this.__imageData.width;
				var _g3 = 0, _g2 = Math.round(rect.width);
				while(_g3 < _g2) {
					var j = _g3++;
					offsetX = 4 * (j + offsetY);
					this.__imageData.data[s + offsetX] = r;
					this.__imageData.data[s + offsetX + 1] = g;
					this.__imageData.data[s + offsetX + 2] = b;
					this.__imageData.data[s + offsetX + 3] = a;
				}
			}
			this.__imageDataChanged = true;
		}
	}
	,__decrNumRefBitmaps: function() {
		this.__assignedBitmaps--;
	}
	,__clearCanvas: function() {
		var ctx = this.___textureBuffer.getContext("2d");
		ctx.clearRect(0,0,this.___textureBuffer.width,this.___textureBuffer.height);
	}
	,__buildLease: function() {
		this.__lease.set(this.__leaseNum++,new Date().getTime());
	}
	,unlock: function(changeRect) {
		this.__locked = false;
		var ctx = this.___textureBuffer.getContext("2d");
		if(this.__imageDataChanged) {
			if(changeRect != null) ctx.putImageData(this.__imageData,0,0,changeRect.x,changeRect.y,changeRect.width,changeRect.height); else ctx.putImageData(this.__imageData,0,0);
		}
		var _g = 0, _g1 = this.__copyPixelList;
		while(_g < _g1.length) {
			var copyCache = _g1[_g];
			++_g;
			if(this.__transparent && copyCache.transparentFiller != null) {
				var trpCtx = copyCache.transparentFiller.getContext("2d");
				var trpData = trpCtx.getImageData(copyCache.sourceX,copyCache.sourceY,copyCache.sourceWidth,copyCache.sourceHeight);
				ctx.putImageData(trpData,copyCache.destX,copyCache.destY);
			}
			ctx.drawImage(copyCache.handle,copyCache.sourceX,copyCache.sourceY,copyCache.sourceWidth,copyCache.sourceHeight,copyCache.destX,copyCache.destY,copyCache.sourceWidth,copyCache.sourceHeight);
		}
		this.__lease.set(this.__leaseNum++,new Date().getTime());
	}
	,threshold: function(sourceBitmapData,sourceRect,destPoint,operation,threshold,color,mask,copySource) {
		if(copySource == null) copySource = false;
		if(mask == null) mask = -1;
		if(color == null) color = 0;
		haxe.Log.trace("BitmapData.threshold not implemented",{ fileName : "BitmapData.hx", lineNumber : 1211, className : "flash.display.BitmapData", methodName : "threshold"});
		return 0;
	}
	,setPixels: function(rect,byteArray) {
		rect = this.clipRect(rect);
		if(rect == null) return;
		var len = Math.round(4 * rect.width * rect.height);
		if(!this.__locked) {
			var ctx = this.___textureBuffer.getContext("2d");
			var imageData = ctx.createImageData(rect.width,rect.height);
			var _g = 0;
			while(_g < len) {
				var i = _g++;
				imageData.data[i] = byteArray.readByte();
			}
			ctx.putImageData(imageData,rect.x,rect.y);
		} else {
			var offset = Math.round(4 * this.__imageData.width * rect.y + rect.x * 4);
			var pos = offset;
			var boundR = Math.round(4 * (rect.x + rect.width));
			var _g = 0;
			while(_g < len) {
				var i = _g++;
				if(pos % (this.__imageData.width * 4) > boundR - 1) pos += this.__imageData.width * 4 - boundR;
				this.__imageData.data[pos] = byteArray.readByte();
				pos++;
			}
			this.__imageDataChanged = true;
		}
	}
	,setPixel32: function(x,y,color) {
		if(x < 0 || y < 0 || x >= (this.___textureBuffer != null?this.___textureBuffer.width:0) || y >= (this.___textureBuffer != null?this.___textureBuffer.height:0)) return;
		if(!this.__locked) {
			this.__lease.set(this.__leaseNum++,new Date().getTime());
			var ctx = this.___textureBuffer.getContext("2d");
			var imageData = ctx.createImageData(1,1);
			imageData.data[0] = (color & 16711680) >>> 16;
			imageData.data[1] = (color & 65280) >>> 8;
			imageData.data[2] = color & 255;
			if(this.__transparent) imageData.data[3] = (color & -16777216) >>> 24; else imageData.data[3] = 255;
			ctx.putImageData(imageData,x,y);
		} else {
			var offset = 4 * y * this.__imageData.width + x * 4;
			this.__imageData.data[offset] = (color & 16711680) >>> 16;
			this.__imageData.data[offset + 1] = (color & 65280) >>> 8;
			this.__imageData.data[offset + 2] = color & 255;
			if(this.__transparent) this.__imageData.data[offset + 3] = (color & -16777216) >>> 24; else this.__imageData.data[offset + 3] = 255;
			this.__imageDataChanged = true;
		}
	}
	,setPixel: function(x,y,color) {
		if(x < 0 || y < 0 || x >= (this.___textureBuffer != null?this.___textureBuffer.width:0) || y >= (this.___textureBuffer != null?this.___textureBuffer.height:0)) return;
		if(!this.__locked) {
			this.__lease.set(this.__leaseNum++,new Date().getTime());
			var ctx = this.___textureBuffer.getContext("2d");
			var imageData = ctx.createImageData(1,1);
			imageData.data[0] = (color & 16711680) >>> 16;
			imageData.data[1] = (color & 65280) >>> 8;
			imageData.data[2] = color & 255;
			if(this.__transparent) imageData.data[3] = 255;
			ctx.putImageData(imageData,x,y);
		} else {
			var offset = 4 * y * this.__imageData.width + x * 4;
			this.__imageData.data[offset] = (color & 16711680) >>> 16;
			this.__imageData.data[offset + 1] = (color & 65280) >>> 8;
			this.__imageData.data[offset + 2] = color & 255;
			if(this.__transparent) this.__imageData.data[offset + 3] = 255;
			this.__imageDataChanged = true;
		}
	}
	,putData1: function(bmd,x,y) {
		this.__lease.set(this.__leaseNum++,new Date().getTime());
		var ctx1 = bmd.___textureBuffer.getContext("2d");
		var imgdata = ctx1.getImageData(x * -1,y,this.___textureBuffer.width,this.___textureBuffer.height);
		var ctx = this.___textureBuffer.getContext("2d");
		ctx.clearRect(0,0,this.___textureBuffer.width,this.___textureBuffer.height);
		haxe.Log.trace(this.___textureBuffer.width,{ fileName : "BitmapData.hx", lineNumber : 1072, className : "flash.display.BitmapData", methodName : "putData1", customParams : [this.___textureBuffer.height]});
		ctx.putImageData(imgdata,0,0,0,0,this.___textureBuffer.width,this.___textureBuffer.height);
	}
	,putData: function(bmd,x,y) {
		this.__lease.set(this.__leaseNum++,new Date().getTime());
		var ctx = this.___textureBuffer.getContext("2d");
		ctx.clearRect(0,0,this.___textureBuffer.width,this.___textureBuffer.height);
		ctx.putImageData(bmd,x,y);
	}
	,scroll: function(x,y) {
		this.__lease.set(this.__leaseNum++,new Date().getTime());
		var ctx = this.___textureBuffer.getContext("2d");
		ctx.drawImage(this.___textureBuffer,x,y);
	}
	,noise: function(randomSeed,low,high,channelOptions,grayScale) {
		if(grayScale == null) grayScale = false;
		if(channelOptions == null) channelOptions = 7;
		if(high == null) high = 255;
		if(low == null) low = 0;
		var generator = new flash.display._BitmapData.MinstdGenerator(randomSeed);
		var ctx = this.___textureBuffer.getContext("2d");
		var imageData = null;
		if(this.__locked) imageData = this.__imageData; else imageData = ctx.createImageData(this.___textureBuffer.width,this.___textureBuffer.height);
		var _g1 = 0, _g = this.___textureBuffer.width * this.___textureBuffer.height;
		while(_g1 < _g) {
			var i = _g1++;
			if(grayScale) imageData.data[i * 4] = imageData.data[i * 4 + 1] = imageData.data[i * 4 + 2] = low + generator.nextValue() % (high - low + 1); else {
				imageData.data[i * 4] = (channelOptions & 1) == 0?0:low + generator.nextValue() % (high - low + 1);
				imageData.data[i * 4 + 1] = (channelOptions & 2) == 0?0:low + generator.nextValue() % (high - low + 1);
				imageData.data[i * 4 + 2] = (channelOptions & 4) == 0?0:low + generator.nextValue() % (high - low + 1);
			}
			imageData.data[i * 4 + 3] = (channelOptions & 8) == 0?255:low + generator.nextValue() % (high - low + 1);
		}
		if(this.__locked) this.__imageDataChanged = true; else ctx.putImageData(imageData,0,0);
	}
	,lock: function() {
		this.__locked = true;
		var ctx = this.___textureBuffer.getContext("2d");
		this.__imageData = ctx.getImageData(0,0,this.___textureBuffer != null?this.___textureBuffer.width:0,this.___textureBuffer != null?this.___textureBuffer.height:0);
		this.__imageDataChanged = false;
		this.__copyPixelList = [];
	}
	,hitTest: function(firstPoint,firstAlphaThreshold,secondObject,secondBitmapDataPoint,secondAlphaThreshold) {
		if(secondAlphaThreshold == null) secondAlphaThreshold = 1;
		var type = Type.getClassName(Type.getClass(secondObject));
		firstAlphaThreshold = firstAlphaThreshold & -1;
		var me = this;
		var doHitTest = function(imageData) {
			if(secondObject.__proto__ == null || secondObject.__proto__.__class__ == null || secondObject.__proto__.__class__.__name__ == null) return false;
			var _g = secondObject.__proto__.__class__.__name__[2];
			switch(_g) {
			case "Rectangle":
				var rect = secondObject;
				rect.x -= firstPoint.x;
				rect.y -= firstPoint.y;
				rect = me.clipRect(me.rect);
				if(me.rect == null) return false;
				var boundingBox = new flash.geom.Rectangle(0,0,me.___textureBuffer != null?me.___textureBuffer.width:0,me.___textureBuffer != null?me.___textureBuffer.height:0);
				if(!rect.intersects(boundingBox)) return false;
				var diff = rect.intersection(boundingBox);
				var offset = 4 * (Math.round(diff.x) + Math.round(diff.y) * imageData.width) + 3;
				var pos = offset;
				var boundR = Math.round(4 * (diff.x + diff.width));
				while(pos < offset + Math.round(4 * (diff.width + imageData.width * diff.height))) {
					if(pos % (imageData.width * 4) > boundR - 1) pos += imageData.width * 4 - boundR;
					if(imageData.data[pos] - firstAlphaThreshold >= 0) return true;
					pos += 4;
				}
				return false;
			case "Point":
				var point = secondObject;
				var x = point.x - firstPoint.x;
				var y = point.y - firstPoint.y;
				if(x < 0 || y < 0 || x >= (me.___textureBuffer != null?me.___textureBuffer.width:0) || y >= (me.___textureBuffer != null?me.___textureBuffer.height:0)) return false;
				if(imageData.data[Math.round(4 * (y * (me.___textureBuffer != null?me.___textureBuffer.width:0) + x)) + 3] - firstAlphaThreshold > 0) return true;
				return false;
			case "Bitmap":
				throw "bitmapData.hitTest with a second object of type Bitmap is currently not supported for HTML5";
				return false;
			case "BitmapData":
				throw "bitmapData.hitTest with a second object of type BitmapData is currently not supported for HTML5";
				return false;
			default:
				throw "BitmapData::hitTest secondObject argument must be either a Rectangle, a Point, a Bitmap or a BitmapData object.";
				return false;
			}
		};
		if(!this.__locked) {
			this.__lease.set(this.__leaseNum++,new Date().getTime());
			var ctx = this.___textureBuffer.getContext("2d");
			var imageData = ctx.getImageData(0,0,this.___textureBuffer != null?this.___textureBuffer.width:0,this.___textureBuffer != null?this.___textureBuffer.height:0);
			return doHitTest(imageData);
		} else return doHitTest(this.__imageData);
	}
	,handle: function() {
		return this.___textureBuffer;
	}
	,getPixels: function(rect) {
		var len = Math.round(4 * rect.width * rect.height);
		var byteArray = new flash.utils.ByteArray();
		if(byteArray.allocated < len) byteArray.___resizeBuffer(byteArray.allocated = Math.max(len,byteArray.allocated * 2) | 0); else if(byteArray.allocated > len) byteArray.___resizeBuffer(byteArray.allocated = len);
		byteArray.length = len;
		len;
		rect = this.clipRect(rect);
		if(rect == null) return byteArray;
		if(!this.__locked) {
			var ctx = this.___textureBuffer.getContext("2d");
			var imagedata = ctx.getImageData(rect.x,rect.y,rect.width,rect.height);
			var _g = 0;
			while(_g < len) {
				var i = _g++;
				byteArray.writeByte(imagedata.data[i]);
			}
		} else {
			var offset = Math.round(4 * this.__imageData.width * rect.y + rect.x * 4);
			var pos = offset;
			var boundR = Math.round(4 * (rect.x + rect.width));
			var _g = 0;
			while(_g < len) {
				var i = _g++;
				if(pos % (this.__imageData.width * 4) > boundR - 1) pos += this.__imageData.width * 4 - boundR;
				byteArray.writeByte(this.__imageData.data[pos]);
				pos++;
			}
		}
		byteArray.position = 0;
		return byteArray;
	}
	,getPixel32: function(x,y) {
		if(x < 0 || y < 0 || x >= (this.___textureBuffer != null?this.___textureBuffer.width:0) || y >= (this.___textureBuffer != null?this.___textureBuffer.height:0)) return 0;
		if(!this.__locked) {
			var ctx = this.___textureBuffer.getContext("2d");
			return this.getInt32(0,ctx.getImageData(x,y,1,1).data);
		} else return this.getInt32(4 * y * this.___textureBuffer.width + x * 4,this.__imageData.data);
	}
	,getPixel: function(x,y) {
		if(x < 0 || y < 0 || x >= (this.___textureBuffer != null?this.___textureBuffer.width:0) || y >= (this.___textureBuffer != null?this.___textureBuffer.height:0)) return 0;
		if(!this.__locked) {
			var ctx = this.___textureBuffer.getContext("2d");
			var imagedata = ctx.getImageData(x,y,1,1);
			return imagedata.data[0] << 16 | imagedata.data[1] << 8 | imagedata.data[2];
		} else {
			var offset = 4 * y * (this.___textureBuffer != null?this.___textureBuffer.width:0) + x * 4;
			return this.__imageData.data[offset] << 16 | this.__imageData.data[offset + 1] << 8 | this.__imageData.data[offset + 2];
		}
	}
	,getInt32: function(offset,data) {
		return (this.__transparent?data[offset + 3]:255) << 24 | data[offset] << 16 | data[offset + 1] << 8 | data[offset + 2];
	}
	,getColorBoundsRect: function(mask,color,findColor) {
		if(findColor == null) findColor = true;
		var me = this;
		var doGetColorBoundsRect = function(data) {
			var minX = me.___textureBuffer != null?me.___textureBuffer.width:0, maxX = 0, minY = me.___textureBuffer != null?me.___textureBuffer.height:0, maxY = 0, i = 0;
			while(i < data.length) {
				var value = me.getInt32(i,data);
				if(findColor) {
					if((value & mask) == color) {
						var x = Math.round(i % ((me.___textureBuffer != null?me.___textureBuffer.width:0) * 4) / 4);
						var y = Math.round(i / ((me.___textureBuffer != null?me.___textureBuffer.width:0) * 4));
						if(x < minX) minX = x;
						if(x > maxX) maxX = x;
						if(y < minY) minY = y;
						if(y > maxY) maxY = y;
					}
				} else if((value & mask) != color) {
					var x = Math.round(i % ((me.___textureBuffer != null?me.___textureBuffer.width:0) * 4) / 4);
					var y = Math.round(i / ((me.___textureBuffer != null?me.___textureBuffer.width:0) * 4));
					if(x < minX) minX = x;
					if(x > maxX) maxX = x;
					if(y < minY) minY = y;
					if(y > maxY) maxY = y;
				}
				i += 4;
			}
			if(minX < maxX && minY < maxY) return new flash.geom.Rectangle(minX,minY,maxX - minX + 1,maxY - minY); else return new flash.geom.Rectangle(0,0,me.___textureBuffer != null?me.___textureBuffer.width:0,me.___textureBuffer != null?me.___textureBuffer.height:0);
		};
		if(!this.__locked) {
			var ctx = this.___textureBuffer.getContext("2d");
			var imageData = ctx.getImageData(0,0,this.___textureBuffer != null?this.___textureBuffer.width:0,this.___textureBuffer != null?this.___textureBuffer.height:0);
			return doGetColorBoundsRect(imageData.data);
		} else return doGetColorBoundsRect(this.__imageData.data);
	}
	,floodFill: function(x,y,color) {
		var wasLocked = this.__locked;
		if(!this.__locked) this.lock();
		var queue = new Array();
		queue.push(new flash.geom.Point(x,y));
		var old = this.getPixel32(x,y);
		var iterations = 0;
		var search = new Array();
		var _g1 = 0, _g = (this.___textureBuffer != null?this.___textureBuffer.width:0) + 1;
		while(_g1 < _g) {
			var i = _g1++;
			var column = new Array();
			var _g3 = 0, _g2 = (this.___textureBuffer != null?this.___textureBuffer.height:0) + 1;
			while(_g3 < _g2) {
				var i1 = _g3++;
				column.push(false);
			}
			search.push(column);
		}
		var currPoint, newPoint;
		while(queue.length > 0) {
			currPoint = queue.shift();
			++iterations;
			var x1 = currPoint.x | 0;
			var y1 = currPoint.y | 0;
			if(x1 < 0 || x1 >= (this.___textureBuffer != null?this.___textureBuffer.width:0)) continue;
			if(y1 < 0 || y1 >= (this.___textureBuffer != null?this.___textureBuffer.height:0)) continue;
			search[x1][y1] = true;
			if(this.getPixel32(x1,y1) == old) {
				this.setPixel32(x1,y1,color);
				if(!search[x1 + 1][y1]) queue.push(new flash.geom.Point(x1 + 1,y1));
				if(!search[x1][y1 + 1]) queue.push(new flash.geom.Point(x1,y1 + 1));
				if(x1 > 0 && !search[x1 - 1][y1]) queue.push(new flash.geom.Point(x1 - 1,y1));
				if(y1 > 0 && !search[x1][y1 - 1]) queue.push(new flash.geom.Point(x1,y1 - 1));
			}
		}
		if(!wasLocked) this.unlock();
	}
	,fillRect: function(rect,color) {
		if(rect == null) return;
		if(rect.width <= 0 || rect.height <= 0) return;
		if(rect.x == 0 && rect.y == 0 && rect.width == this.___textureBuffer.width && rect.height == this.___textureBuffer.height) {
			return this.__clearCanvas();
			if(this.__transparent) {
				if(color >>> 24 == 0 || color == this.__initColor) return this.__clearCanvas();
			} else if((color | -16777216) == (this.__initColor | -16777216)) return this.__clearCanvas();
		}
		return this.__fillRect(rect,color);
	}
	,drawToSurface: function(inSurface,matrix,inColorTransform,blendMode,clipRect,smoothing) {
		this.__lease.set(this.__leaseNum++,new Date().getTime());
		var ctx = inSurface.getContext("2d");
		if(matrix != null) {
			ctx.save();
			if(matrix.a == 1 && matrix.b == 0 && matrix.c == 0 && matrix.d == 1) ctx.translate(matrix.tx,matrix.ty); else {
				flash.Lib.__setImageSmoothing(ctx,smoothing);
				ctx.setTransform(matrix.a,matrix.b,matrix.c,matrix.d,matrix.tx,matrix.ty);
			}
			ctx.drawImage(this.___textureBuffer,0,0);
			ctx.restore();
		} else ctx.drawImage(this.___textureBuffer,0,0);
		if(inColorTransform != null) this.colorTransform(new flash.geom.Rectangle(0,0,this.___textureBuffer.width,this.___textureBuffer.height),inColorTransform);
	}
	,drawBMDAlpha: function(source,tx,ty,____alpha) {
		this.__lease.set(this.__leaseNum++,new Date().getTime());
		var ctx = this.___textureBuffer.getContext("2d");
		ctx.save();
		ctx.globalAlpha = ____alpha;
		ctx.translate(tx,ty);
		ctx.drawImage(source.___textureBuffer,0,0);
		ctx.restore();
	}
	,drawBMDTransformAlpha: function(source,matrix,____alpha) {
		this.__lease.set(this.__leaseNum++,new Date().getTime());
		var ctx = this.___textureBuffer.getContext("2d");
		ctx.save();
		ctx.globalAlpha = ____alpha;
		ctx.setTransform(matrix.a,matrix.b,matrix.c,matrix.d,matrix.tx,matrix.ty);
		ctx.drawImage(source.___textureBuffer,0,0);
		ctx.restore();
	}
	,drawBMDTransform: function(source,matrix) {
		this.__lease.set(this.__leaseNum++,new Date().getTime());
		var ctx = this.___textureBuffer.getContext("2d");
		ctx.save();
		ctx.setTransform(matrix.a,matrix.b,matrix.c,matrix.d,matrix.tx,matrix.ty);
		ctx.drawImage(source.___textureBuffer,0,0);
		ctx.restore();
	}
	,draw: function(source,matrix,inColorTransform,blendMode,clipRect,smoothing) {
		if(smoothing == null) smoothing = false;
		this.__lease.set(this.__leaseNum++,new Date().getTime());
		source.drawToSurface(this.___textureBuffer,matrix,inColorTransform,blendMode,clipRect,smoothing);
		if(inColorTransform != null) {
			var rect = new flash.geom.Rectangle();
			var object = source;
			rect.x = matrix != null?matrix.tx:0;
			rect.y = matrix != null?matrix.ty:0;
			try {
				rect.width = Reflect.getProperty(source,"width");
				rect.height = Reflect.getProperty(source,"height");
			} catch( e ) {
				rect.width = this.___textureBuffer.width;
				rect.height = this.___textureBuffer.height;
			}
			this.colorTransform(rect,inColorTransform);
		}
	}
	,dispose: function() {
		this.__clearCanvas();
		this.___textureBuffer = null;
		this.__leaseNum = 0;
		this.__lease = null;
		this.__imageData = null;
	}
	,destroy: function() {
		this.___textureBuffer = null;
	}
	,copyPixels: function(sourceBitmapData,sourceRect,destPoint,alphaBitmapData,alphaPoint,mergeAlpha) {
		if(mergeAlpha == null) mergeAlpha = false;
		if(sourceBitmapData.___textureBuffer == null || this.___textureBuffer == null || sourceBitmapData.___textureBuffer.width == 0 || sourceBitmapData.___textureBuffer.height == 0 || sourceRect.width <= 0 || sourceRect.height <= 0) return;
		if(sourceRect.x + sourceRect.width > sourceBitmapData.___textureBuffer.width) sourceRect.width = sourceBitmapData.___textureBuffer.width - sourceRect.x;
		if(sourceRect.y + sourceRect.height > sourceBitmapData.___textureBuffer.height) sourceRect.height = sourceBitmapData.___textureBuffer.height - sourceRect.y;
		if(alphaBitmapData != null && alphaBitmapData.__transparent) {
			if(alphaPoint == null) alphaPoint = new flash.geom.Point();
			var bitmapData = new flash.display.BitmapData(sourceBitmapData.___textureBuffer != null?sourceBitmapData.___textureBuffer.width:0,sourceBitmapData.___textureBuffer != null?sourceBitmapData.___textureBuffer.height:0,true);
			bitmapData.copyPixels(sourceBitmapData,sourceRect,new flash.geom.Point(sourceRect.x,sourceRect.y));
			bitmapData.copyChannel(alphaBitmapData,new flash.geom.Rectangle(alphaPoint.x,alphaPoint.y,sourceRect.width,sourceRect.height),new flash.geom.Point(sourceRect.x,sourceRect.y),8,8);
			sourceBitmapData = bitmapData;
		}
		if(!this.__locked) {
			this.__lease.set(this.__leaseNum++,new Date().getTime());
			var ctx = this.___textureBuffer.getContext("2d");
			if(!mergeAlpha) {
				if(this.__transparent && sourceBitmapData.__transparent) {
					var trpCtx = sourceBitmapData.__transparentFiller.getContext("2d");
					var trpData = trpCtx.getImageData(sourceRect.x,sourceRect.y,sourceRect.width,sourceRect.height);
					ctx.putImageData(trpData,destPoint.x,destPoint.y);
				}
			}
			ctx.drawImage(sourceBitmapData.___textureBuffer,sourceRect.x,sourceRect.y,sourceRect.width,sourceRect.height,destPoint.x,destPoint.y,sourceRect.width,sourceRect.height);
		} else this.__copyPixelList[this.__copyPixelList.length] = { handle : sourceBitmapData.___textureBuffer, transparentFiller : mergeAlpha?null:sourceBitmapData.__transparentFiller, sourceX : sourceRect.x, sourceY : sourceRect.y, sourceWidth : sourceRect.width, sourceHeight : sourceRect.height, destX : destPoint.x, destY : destPoint.y};
	}
	,copyChannel: function(sourceBitmapData,sourceRect,destPoint,sourceChannel,destChannel) {
		this.rect = this.clipRect(this.rect);
		if(this.rect == null) return;
		if(destChannel == 8 && !this.__transparent) return;
		if(sourceBitmapData.___textureBuffer == null || this.___textureBuffer == null || sourceRect.width <= 0 || sourceRect.height <= 0) return;
		if(sourceRect.x + sourceRect.width > sourceBitmapData.___textureBuffer.width) sourceRect.width = sourceBitmapData.___textureBuffer.width - sourceRect.x;
		if(sourceRect.y + sourceRect.height > sourceBitmapData.___textureBuffer.height) sourceRect.height = sourceBitmapData.___textureBuffer.height - sourceRect.y;
		var doChannelCopy = function(imageData) {
			var srcCtx = sourceBitmapData.___textureBuffer.getContext("2d");
			var srcImageData = srcCtx.getImageData(sourceRect.x,sourceRect.y,sourceRect.width,sourceRect.height);
			var destIdx = -1;
			if(destChannel == 8) destIdx = 3; else if(destChannel == 4) destIdx = 2; else if(destChannel == 2) destIdx = 1; else if(destChannel == 1) destIdx = 0; else throw "Invalid destination BitmapDataChannel passed to BitmapData::copyChannel.";
			var pos = 4 * (Math.round(destPoint.x) + Math.round(destPoint.y) * imageData.width) + destIdx;
			var boundR = Math.round(4 * (destPoint.x + sourceRect.width));
			var setPos = function(val) {
				if(pos % (imageData.width * 4) > boundR - 1) pos += imageData.width * 4 - boundR;
				imageData.data[pos] = val;
				pos += 4;
			};
			var srcIdx = -1;
			if(sourceChannel == 8) srcIdx = 3; else if(sourceChannel == 4) srcIdx = 2; else if(sourceChannel == 2) srcIdx = 1; else if(sourceChannel == 1) srcIdx = 0; else throw "Invalid source BitmapDataChannel passed to BitmapData::copyChannel.";
			while(srcIdx < srcImageData.data.length) {
				setPos(srcImageData.data[srcIdx]);
				srcIdx += 4;
			}
		};
		if(!this.__locked) {
			this.__lease.set(this.__leaseNum++,new Date().getTime());
			var ctx = this.___textureBuffer.getContext("2d");
			var imageData = ctx.getImageData(0,0,this.___textureBuffer != null?this.___textureBuffer.width:0,this.___textureBuffer != null?this.___textureBuffer.height:0);
			doChannelCopy(imageData);
			ctx.putImageData(imageData,0,0);
		} else {
			doChannelCopy(this.__imageData);
			this.__imageDataChanged = true;
		}
	}
	,compare: function(inBitmapTexture) {
		throw "bitmapData.compare is currently not supported for HTML5";
		return 0;
	}
	,colorTransform: function(rect,colorTransform) {
		if(rect == null) return;
		rect = this.clipRect(rect);
		if(!this.__locked) {
			this.__lease.set(this.__leaseNum++,new Date().getTime());
			var ctx = this.___textureBuffer.getContext("2d");
			var imagedata = ctx.getImageData(rect.x,rect.y,rect.width,rect.height);
			var offsetX;
			var _g1 = 0, _g = imagedata.data.length >> 2;
			while(_g1 < _g) {
				var i = _g1++;
				offsetX = i * 4;
				imagedata.data[offsetX] = imagedata.data[offsetX] * colorTransform.redMultiplier + colorTransform.redOffset | 0;
				imagedata.data[offsetX + 1] = imagedata.data[offsetX + 1] * colorTransform.greenMultiplier + colorTransform.greenOffset | 0;
				imagedata.data[offsetX + 2] = imagedata.data[offsetX + 2] * colorTransform.blueMultiplier + colorTransform.blueOffset | 0;
				imagedata.data[offsetX + 3] = imagedata.data[offsetX + 3] * colorTransform.alphaMultiplier + colorTransform.alphaOffset | 0;
			}
			ctx.putImageData(imagedata,rect.x,rect.y);
		} else {
			var s = 4 * (Math.round(rect.x) + Math.round(rect.y) * this.__imageData.width);
			var offsetY;
			var offsetX;
			var _g1 = 0, _g = Math.round(rect.height);
			while(_g1 < _g) {
				var i = _g1++;
				offsetY = i * this.__imageData.width;
				var _g3 = 0, _g2 = Math.round(rect.width);
				while(_g3 < _g2) {
					var j = _g3++;
					offsetX = 4 * (j + offsetY);
					this.__imageData.data[s + offsetX] = this.__imageData.data[s + offsetX] * colorTransform.redMultiplier + colorTransform.redOffset | 0;
					this.__imageData.data[s + offsetX + 1] = this.__imageData.data[s + offsetX + 1] * colorTransform.greenMultiplier + colorTransform.greenOffset | 0;
					this.__imageData.data[s + offsetX + 2] = this.__imageData.data[s + offsetX + 2] * colorTransform.blueMultiplier + colorTransform.blueOffset | 0;
					this.__imageData.data[s + offsetX + 3] = this.__imageData.data[s + offsetX + 3] * colorTransform.alphaMultiplier + colorTransform.alphaOffset | 0;
				}
			}
			this.__imageDataChanged = true;
		}
	}
	,clone: function() {
		var bitmapData = new flash.display.BitmapData(this.___textureBuffer != null?this.___textureBuffer.width:0,this.___textureBuffer != null?this.___textureBuffer.height:0,this.__transparent);
		var rect = new flash.geom.Rectangle(0,0,this.___textureBuffer != null?this.___textureBuffer.width:0,this.___textureBuffer != null?this.___textureBuffer.height:0);
		bitmapData.setPixels(rect,this.getPixels(rect));
		bitmapData.__lease.set(bitmapData.__leaseNum++,new Date().getTime());
		return bitmapData;
	}
	,clipRect: function(r) {
		if(r.x < 0) {
			r.width -= -r.x;
			r.x = 0;
			if(r.x + r.width <= 0) return null;
		}
		if(r.y < 0) {
			r.height -= -r.y;
			r.y = 0;
			if(r.y + r.height <= 0) return null;
		}
		if(r.x + r.width >= (this.___textureBuffer != null?this.___textureBuffer.width:0)) {
			r.width -= r.x + r.width - (this.___textureBuffer != null?this.___textureBuffer.width:0);
			if(r.width <= 0) return null;
		}
		if(r.y + r.height >= (this.___textureBuffer != null?this.___textureBuffer.height:0)) {
			r.height -= r.y + r.height - (this.___textureBuffer != null?this.___textureBuffer.height:0);
			if(r.height <= 0) return null;
		}
		return r;
	}
	,clear: function(color) {
		this.fillRect(this.rect,color);
	}
	,applyFilter: function(sourceBitmapData,sourceRect,destPoint,filter) {
		if(sourceBitmapData == this && sourceRect.x == destPoint.x && sourceRect.y == destPoint.y) filter.__applyFilter(this.___textureBuffer,sourceRect); else {
			var bitmapData = new flash.display.BitmapData(sourceRect.width | 0,sourceRect.height | 0);
			bitmapData.copyPixels(sourceBitmapData,sourceRect,new flash.geom.Point());
			filter.__applyFilter(bitmapData.___textureBuffer);
			this.copyPixels(bitmapData,bitmapData.rect,destPoint);
		}
	}
	,___textureBuffer: null
	,___id: null
	,__transparentFiller: null
	,__transparent: null
	,__locked: null
	,__leaseNum: null
	,__lease: null
	,__initColor: null
	,__imageDataChanged: null
	,__copyPixelList: null
	,__assignedBitmaps: null
	,__referenceCount: null
	,__glTexture: null
	,__imageData: null
	,width: null
	,transparent: null
	,rect: null
	,height: null
	,__class__: flash.display.BitmapData
	,__properties__: {get_height:"get_height",get_transparent:"get_transparent",get_width:"get_width"}
}
var SponsorLogo = function(width,height,transparent,fillRGBA,onload) {
	if(fillRGBA == null) fillRGBA = -1;
	if(transparent == null) transparent = true;
	flash.display.BitmapData.call(this,width,height,transparent,fillRGBA);
	var currentType = Type.getClass(this);
	if(SponsorLogo.preload != null) {
		this.___textureBuffer.width = SponsorLogo.preload.get_width() | 0;
		this.___textureBuffer.height = SponsorLogo.preload.get_height() | 0;
		this.rect = new flash.geom.Rectangle(0,0,SponsorLogo.preload.get_width(),SponsorLogo.preload.get_height());
		this.setPixels(this.rect,SponsorLogo.preload.getPixels(this.rect));
		this.__lease.set(this.__leaseNum++,new Date().getTime());
	} else {
		var byteArray = flash.utils.ByteArray.fromBytes(haxe.Resource.getBytes(SponsorLogo.resourceName));
		if(onload != null && !js.Boot.__instanceof(onload,Bool)) this.__loadFromBytes(byteArray,null,onload); else this.__loadFromBytes(byteArray,null,null);
	}
};
$hxClasses["SponsorLogo"] = SponsorLogo;
SponsorLogo.__name__ = ["SponsorLogo"];
SponsorLogo.__super__ = flash.display.BitmapData;
SponsorLogo.prototype = $extend(flash.display.BitmapData.prototype,{
	__class__: SponsorLogo
});
var GameLogo = function(width,height,transparent,fillRGBA,onload) {
	if(fillRGBA == null) fillRGBA = -1;
	if(transparent == null) transparent = true;
	flash.display.BitmapData.call(this,width,height,transparent,fillRGBA);
	var currentType = Type.getClass(this);
	if(GameLogo.preload != null) {
		this.___textureBuffer.width = GameLogo.preload.get_width() | 0;
		this.___textureBuffer.height = GameLogo.preload.get_height() | 0;
		this.rect = new flash.geom.Rectangle(0,0,GameLogo.preload.get_width(),GameLogo.preload.get_height());
		this.setPixels(this.rect,GameLogo.preload.getPixels(this.rect));
		this.__lease.set(this.__leaseNum++,new Date().getTime());
	} else {
		var byteArray = flash.utils.ByteArray.fromBytes(haxe.Resource.getBytes(GameLogo.resourceName));
		if(onload != null && !js.Boot.__instanceof(onload,Bool)) this.__loadFromBytes(byteArray,null,onload); else this.__loadFromBytes(byteArray,null,null);
	}
};
$hxClasses["GameLogo"] = GameLogo;
GameLogo.__name__ = ["GameLogo"];
GameLogo.__super__ = flash.display.BitmapData;
GameLogo.prototype = $extend(flash.display.BitmapData.prototype,{
	__class__: GameLogo
});
var LoadMeter = function(width,height,transparent,fillRGBA,onload) {
	if(fillRGBA == null) fillRGBA = -1;
	if(transparent == null) transparent = true;
	flash.display.BitmapData.call(this,width,height,transparent,fillRGBA);
	var currentType = Type.getClass(this);
	if(LoadMeter.preload != null) {
		this.___textureBuffer.width = LoadMeter.preload.get_width() | 0;
		this.___textureBuffer.height = LoadMeter.preload.get_height() | 0;
		this.rect = new flash.geom.Rectangle(0,0,LoadMeter.preload.get_width(),LoadMeter.preload.get_height());
		this.setPixels(this.rect,LoadMeter.preload.getPixels(this.rect));
		this.__lease.set(this.__leaseNum++,new Date().getTime());
	} else {
		var byteArray = flash.utils.ByteArray.fromBytes(haxe.Resource.getBytes(LoadMeter.resourceName));
		if(onload != null && !js.Boot.__instanceof(onload,Bool)) this.__loadFromBytes(byteArray,null,onload); else this.__loadFromBytes(byteArray,null,null);
	}
};
$hxClasses["LoadMeter"] = LoadMeter;
LoadMeter.__name__ = ["LoadMeter"];
LoadMeter.__super__ = flash.display.BitmapData;
LoadMeter.prototype = $extend(flash.display.BitmapData.prototype,{
	__class__: LoadMeter
});
var LoadBarContur = function(width,height,transparent,fillRGBA,onload) {
	if(fillRGBA == null) fillRGBA = -1;
	if(transparent == null) transparent = true;
	flash.display.BitmapData.call(this,width,height,transparent,fillRGBA);
	var currentType = Type.getClass(this);
	if(LoadBarContur.preload != null) {
		this.___textureBuffer.width = LoadBarContur.preload.get_width() | 0;
		this.___textureBuffer.height = LoadBarContur.preload.get_height() | 0;
		this.rect = new flash.geom.Rectangle(0,0,LoadBarContur.preload.get_width(),LoadBarContur.preload.get_height());
		this.setPixels(this.rect,LoadBarContur.preload.getPixels(this.rect));
		this.__lease.set(this.__leaseNum++,new Date().getTime());
	} else {
		var byteArray = flash.utils.ByteArray.fromBytes(haxe.Resource.getBytes(LoadBarContur.resourceName));
		if(onload != null && !js.Boot.__instanceof(onload,Bool)) this.__loadFromBytes(byteArray,null,onload); else this.__loadFromBytes(byteArray,null,null);
	}
};
$hxClasses["LoadBarContur"] = LoadBarContur;
LoadBarContur.__name__ = ["LoadBarContur"];
LoadBarContur.__super__ = flash.display.BitmapData;
LoadBarContur.prototype = $extend(flash.display.BitmapData.prototype,{
	__class__: LoadBarContur
});
var LoadBarFill = function(width,height,transparent,fillRGBA,onload) {
	if(fillRGBA == null) fillRGBA = -1;
	if(transparent == null) transparent = true;
	flash.display.BitmapData.call(this,width,height,transparent,fillRGBA);
	var currentType = Type.getClass(this);
	if(LoadBarFill.preload != null) {
		this.___textureBuffer.width = LoadBarFill.preload.get_width() | 0;
		this.___textureBuffer.height = LoadBarFill.preload.get_height() | 0;
		this.rect = new flash.geom.Rectangle(0,0,LoadBarFill.preload.get_width(),LoadBarFill.preload.get_height());
		this.setPixels(this.rect,LoadBarFill.preload.getPixels(this.rect));
		this.__lease.set(this.__leaseNum++,new Date().getTime());
	} else {
		var byteArray = flash.utils.ByteArray.fromBytes(haxe.Resource.getBytes(LoadBarFill.resourceName));
		if(onload != null && !js.Boot.__instanceof(onload,Bool)) this.__loadFromBytes(byteArray,null,onload); else this.__loadFromBytes(byteArray,null,null);
	}
};
$hxClasses["LoadBarFill"] = LoadBarFill;
LoadBarFill.__name__ = ["LoadBarFill"];
LoadBarFill.__super__ = flash.display.BitmapData;
LoadBarFill.prototype = $extend(flash.display.BitmapData.prototype,{
	__class__: LoadBarFill
});
var OurLogo = function(width,height,transparent,fillRGBA,onload) {
	if(fillRGBA == null) fillRGBA = -1;
	if(transparent == null) transparent = true;
	flash.display.BitmapData.call(this,width,height,transparent,fillRGBA);
	var currentType = Type.getClass(this);
	if(OurLogo.preload != null) {
		this.___textureBuffer.width = OurLogo.preload.get_width() | 0;
		this.___textureBuffer.height = OurLogo.preload.get_height() | 0;
		this.rect = new flash.geom.Rectangle(0,0,OurLogo.preload.get_width(),OurLogo.preload.get_height());
		this.setPixels(this.rect,OurLogo.preload.getPixels(this.rect));
		this.__lease.set(this.__leaseNum++,new Date().getTime());
	} else {
		var byteArray = flash.utils.ByteArray.fromBytes(haxe.Resource.getBytes(OurLogo.resourceName));
		if(onload != null && !js.Boot.__instanceof(onload,Bool)) this.__loadFromBytes(byteArray,null,onload); else this.__loadFromBytes(byteArray,null,null);
	}
};
$hxClasses["OurLogo"] = OurLogo;
OurLogo.__name__ = ["OurLogo"];
OurLogo.__super__ = flash.display.BitmapData;
OurLogo.prototype = $extend(flash.display.BitmapData.prototype,{
	__class__: OurLogo
});
var Preloader = function() {
	this.horseAng = 0;
	this._painted = false;
	this.inited = false;
	NMEPreloader.call(this);
	this.mainCont = new flash.display.Sprite();
	this.addChild(this.mainCont);
	this.sponsorLogo = new flash.display.Sprite();
	this.sponsorBm = new flash.display.Bitmap(new SponsorLogo(0,0));
	this.sponsorLogo.addChild(this.sponsorBm);
	this.gameLogo = new flash.display.Bitmap(new GameLogo(0,0));
	this.barContur = new flash.display.Bitmap(new LoadBarContur(0,0));
	this.bar = new flash.display.Bitmap(new LoadBarFill(0,0));
	this.loadMetrCont = new flash.display.Sprite();
	this.loadMetr = new flash.display.Bitmap(new LoadMeter(0,0));
	this.ourLogo = new flash.display.Sprite();
	this.ourLogo.addChild(new flash.display.Bitmap(new OurLogo(0,0)));
	this.getChildAt(0).set_visible(false);
	this.getChildAt(1).set_visible(false);
};
$hxClasses["Preloader"] = Preloader;
Preloader.__name__ = ["Preloader"];
Preloader.openMoreGames = function() {
	//js.Browser.window.open("http://www.myrealgames.com/mobile-games/?utm_source=SweetSlice&utm_medium=html5_moregames","_blank").focus();
	try{parent.moregame();}catch(e){}
}
Preloader.__super__ = NMEPreloader;
Preloader.prototype = $extend(NMEPreloader.prototype,{
	onUpdate: function(filesLoaded,filesTotal) {
		if(!this.inited) this.init();
		NMEPreloader.prototype.onUpdate.call(this,filesLoaded,filesTotal);
		this.bar.set_width(218 * filesLoaded / filesTotal);
		this.loadMetrCont.set_x(this.bar.get_x() + this.bar.get_width());
		this.horseAng += 0.6;
		this.loadMetrCont.set_rotation(15 * Math.sin(this.horseAng));
	}
	,init: function() {
		if(this.inited) return;
		this.inited = true;
		this.sponsorLogo.set_x(-this.sponsorLogo.get_width() / 2);
		this.mainCont.addChild(this.sponsorLogo);
		this.sponsorBm.__graphics.__surface.addEventListener("touchend",Preloader.openMoreGames);
		this.sponsorBm.__graphics.__surface.addEventListener("click",Preloader.openMoreGames);
		this.gameLogo.set_x(-this.gameLogo.get_width() / 2);
		this.gameLogo.set_y(this.sponsorLogo.get_y() + this.sponsorLogo.get_height() + 60);
		this.mainCont.addChild(this.gameLogo);
		this.loadMetr.set_x(-this.loadMetr.get_width() / 2);
		this.loadMetr.set_y(-this.loadMetr.get_height());
		this.loadMetrCont.addChild(this.loadMetr);
		this.loadMetrCont.set_x(-this.bar.get_width() / 2);
		this.loadMetrCont.set_y(this.gameLogo.get_y() + this.gameLogo.get_height() + this.loadMetrCont.get_height() + 30);
		this.mainCont.addChild(this.loadMetrCont);
		this.bar.set_x(-this.bar.get_width() / 2);
		this.bar.set_y(this.loadMetrCont.get_y() + 5);
		this.barContur.set_x(this.bar.get_x());
		this.barContur.set_y(this.bar.get_y());
		this.mainCont.addChild(this.barContur);
		this.mainCont.addChild(this.bar);
		this.bar.set_width(1);
		this.ourLogo.set_x(-this.ourLogo.get_width() / 2);
		this.ourLogo.set_y(this.barContur.get_y() + this.barContur.get_height() + 50);
		this.mainCont.addChild(this.ourLogo);
		this.set_x(this.getWidth() / 2);
		if(this.mainCont.get_height() > flash.Lib.get_current().get_stage().get_stageHeight()) {
			var s = flash.Lib.get_current().get_stage().get_stageHeight() / (this.mainCont.get_height() + 50);
			this.mainCont.set_scaleX(this.mainCont.set_scaleY(s));
		}
		this.set_y(this.getHeight() / 2 - this.mainCont.get_height() / 2);
	}
	,horseAng: null
	,_painted: null
	,inited: null
	,ourLogo: null
	,bar: null
	,barContur: null
	,loadMetrCont: null
	,loadMetr: null
	,gameLogo: null
	,sponsorLogo: null
	,sponsorBm: null
	,mainCont: null
	,__class__: Preloader
});
var Reflect = function() { }
$hxClasses["Reflect"] = Reflect;
Reflect.__name__ = ["Reflect"];
Reflect.hasField = function(o,field) {
	return Object.prototype.hasOwnProperty.call(o,field);
}
Reflect.field = function(o,field) {
	var v = null;
	try {
		v = o[field];
	} catch( e ) {
	}
	return v;
}
Reflect.getProperty = function(o,field) {
	var tmp;
	return o == null?null:o.__properties__ && (tmp = o.__properties__["get_" + field])?o[tmp]():o[field];
}
Reflect.fields = function(o) {
	var a = [];
	if(o != null) {
		var hasOwnProperty = Object.prototype.hasOwnProperty;
		for( var f in o ) {
		if(f != "__id__" && f != "hx__closures__" && hasOwnProperty.call(o,f)) a.push(f);
		}
	}
	return a;
}
Reflect.isFunction = function(f) {
	return typeof(f) == "function" && !(f.__name__ || f.__ename__);
}
Reflect.compareMethods = function(f1,f2) {
	if(f1 == f2) return true;
	if(!Reflect.isFunction(f1) || !Reflect.isFunction(f2)) return false;
	return f1.scope == f2.scope && f1.method == f2.method && f1.method != null;
}
Reflect.deleteField = function(o,field) {
	if(!Reflect.hasField(o,field)) return false;
	delete(o[field]);
	return true;
}
var Scores = function() {
	this.score = 0;
	this.numFails = 0;
	this.scorePerSlice = 1;
	this.bonusPointsCriticalHit = 5;
	this.criticalHitsCount = 0;
	this.collectedSlices = 0;
	this.bonusPointsForSlice = 2;
	this.numSlicesForBonus = 3;
	this.framesToCountBonus = 12;
	this.framesSlices = new Array();
	var _g1 = 0, _g = this.framesToCountBonus;
	while(_g1 < _g) {
		var i = _g1++;
		this.framesSlices.push(0);
	}
	this.main = Main.current;
};
$hxClasses["Scores"] = Scores;
Scores.__name__ = ["Scores"];
Scores.prototype = {
	reset: function() {
		var _g1 = 0, _g = this.framesToCountBonus;
		while(_g1 < _g) {
			var i = _g1++;
			this.framesSlices.push(0);
		}
		this.numFails = 0;
		this.score = 0;
		this.criticalHitsCount = 0;
	}
	,numOfCriticalHits: function() {
		return this.criticalHitsCount;
	}
	,addCriticalHit: function() {
		this.score += this.bonusPointsCriticalHit;
		if(this.main.gamePlay == 2) this.main.subtractElapsedTime(5);
		this.bonusWindow.add("criticalHit",this.main.get_mouseX() | 0,this.main.get_mouseY() | 0);
		this.criticalHitsCount++;
	}
	,checkBonusByNumSlices: function(numSlices) {
		if(numSlices >= this.numSlicesForBonus && this.collectedSlices <= numSlices) {
			this.collectedSlices = numSlices;
			return false;
		} else if(this.collectedSlices >= this.numSlicesForBonus) {
			this.score += this.collectedSlices * this.bonusPointsForSlice;
			if(this.main.gamePlay == 2) this.main.subtractElapsedTime(this.collectedSlices - 2);
			this.bonusWindow.add("combo" + this.collectedSlices,this.main.get_mouseX() | 0,this.main.get_mouseY() | 0);
			this.collectedSlices = 0;
			numSlices = 0;
			return true;
		}
		return false;
	}
	,addFail: function() {
		this.numFails++;
		this.main.setFails(this.numFails);
		if(this.main.gamePlay == 1 && this.numFails >= 3) this.main.stopGame(true);
	}
	,addSlice: function() {
		this.score += this.scorePerSlice;
		if(Math.floor((this.score - this.scorePerSlice) / 50) < Math.floor(this.score / 50)) {
			if(this.numFails > 0) this.numFails--;
			this.main.setFails(this.numFails);
		}
		this.main.playSliceSound();
	}
	,score: null
	,numFails: null
	,scorePerSlice: null
	,bonusWindow: null
	,main: null
	,bonusPointsCriticalHit: null
	,criticalHitsCount: null
	,collectedSlices: null
	,bonusPointsForSlice: null
	,numSlicesForBonus: null
	,framesSlices: null
	,framesToCountBonus: null
	,__class__: Scores
}
var SliceEffect = function() {
	this.alphaMinus = 0.1;
	flash.display.Bitmap.call(this,openfl.Assets.getBitmapData("img/SliceEffect.png"));
	this.centAng = Math.atan2(this.get_height() / 2,this.get_width() / 2);
	this.dist = Math.sqrt(this.get_width() / 2 * (this.get_width() / 2) + this.get_height() / 2 * (this.get_height() / 2));
	this.gradToRad = Math.PI / 180;
};
$hxClasses["SliceEffect"] = SliceEffect;
SliceEffect.__name__ = ["SliceEffect"];
SliceEffect.getFromPool = function() {
	if(SliceEffect.pool.length > 0) return SliceEffect.pool.pop(); else return new SliceEffect();
}
SliceEffect.__super__ = flash.display.Bitmap;
SliceEffect.prototype = $extend(flash.display.Bitmap.prototype,{
	destroy: function() {
		this.removeEventListener(flash.events.Event.ENTER_FRAME,$bind(this,this.update));
		if(this.parent != null) this.parent.removeChild(this);
	}
	,sendToPool: function() {
		this.alpha = 1;
		if(this.parent != null) this.parent.removeChild(this);
		this.removeEventListener(flash.events.Event.ENTER_FRAME,$bind(this,this.update));
		SliceEffect.pool.push(this);
	}
	,setTransfByCenter: function(_x,_y,_rotation) {
		this.set_rotation(_rotation);
		var rot = _rotation * this.gradToRad + this.centAng;
		this.set_x(_x - Math.cos(rot) * this.dist);
		this.set_y(_y - Math.sin(rot) * this.dist);
	}
	,update: function(e) {
		this.alpha -= this.alphaMinus;
		if(this.alpha <= 0) this.sendToPool();
	}
	,init: function() {
		this.addEventListener(flash.events.Event.ENTER_FRAME,$bind(this,this.update));
	}
	,gradToRad: null
	,dist: null
	,centAng: null
	,alphaMinus: null
	,__class__: SliceEffect
});
var SliceEffectBl = function() {
	this.rotation = 0;
	this.alpha = 1;
	this.alphaMinus = 0.08;
	this.bmd = openfl.Assets.getBitmapData("img/SliceEffect.png");
	this.matrix = new flash.geom.Matrix();
	this.gradToRad = Math.PI / 180;
	this.colorMatrix = new flash.geom.ColorTransform();
};
$hxClasses["SliceEffectBl"] = SliceEffectBl;
SliceEffectBl.__name__ = ["SliceEffectBl"];
SliceEffectBl.getFromPool = function() {
	if(SliceEffectBl.pool.length > 0) return SliceEffectBl.pool.pop(); else return new SliceEffectBl();
}
SliceEffectBl.prototype = {
	sendToPool: function() {
		SliceEffectBl.pool.push(this);
	}
	,setTransfByCenter: function(_x,_y,_rotation) {
		this.matrix.identity();
		this.rotation = _rotation;
		this.alpha = 1;
		this.matrix.translate(-this.bmd.get_width() / 2,-this.bmd.get_height() / 2);
		this.matrix.rotate(this.rotation);
		this.matrix.translate(_x,_y);
		this.colorMatrix.alphaMultiplier = this.alpha;
	}
	,update: function() {
		this.alpha -= this.alphaMinus;
		this.colorMatrix.alphaMultiplier = this.alpha;
		if(this.alpha < this.alphaMinus) {
			this.sendToPool();
			return true;
		}
		return false;
	}
	,colorMatrix: null
	,rotation: null
	,alpha: null
	,matrix: null
	,bmd: null
	,gradToRad: null
	,alphaMinus: null
	,__class__: SliceEffectBl
}
var SlicePart = function(type,position) {
	this.rotDump = 0.99;
	this.rotSpeed = 0;
	this.speedX = 0;
	this.speedY = 0;
	this.xDump = 0.99;
	this.gravity = 0.8;
	this._type = type;
	this._position = position;
	flash.display.Bitmap.call(this,openfl.Assets.getBitmapData("img/bake" + type + position + ".png"));
	this.sWidth = Main.current.sWidth;
	this.sHeight = Main.current.sHeight;
	this._x = 0;
	this._y = 0;
	this.bmW = this.get_width();
	this.bmH = this.get_height();
	this.centAng = Math.atan2(this.bmH / 2,this.bmW / 2);
	this.dist = Math.sqrt(this.bmW / 2 * (this.bmW / 2) + this.bmH / 2 * (this.bmH / 2));
	this.gradToRad = Math.PI / 180;
};
$hxClasses["SlicePart"] = SlicePart;
SlicePart.__name__ = ["SlicePart"];
SlicePart.getFromPool = function(type,position) {
	var map;
	if(position == "Left") map = SlicePart.leftPool; else map = SlicePart.rightPool;
	if(!map.exists(type)) {
		map.set(type,new Array());
		return new SlicePart(type,position);
	}
	var hArr = map.get(type);
	if(hArr.length > 0) return hArr.pop(); else return new SlicePart(type,position);
}
SlicePart.__super__ = flash.display.Bitmap;
SlicePart.prototype = $extend(flash.display.Bitmap.prototype,{
	destroy: function() {
		if(this.parent != null) this.parent.removeChild(this);
		this.removeEventListener(flash.events.Event.ENTER_FRAME,$bind(this,this.update));
	}
	,sendToPool: function() {
		if(this.parent != null) this.parent.removeChild(this);
		this.removeEventListener(flash.events.Event.ENTER_FRAME,$bind(this,this.update));
		var map;
		if(this._position == "Left") map = SlicePart.leftPool; else map = SlicePart.rightPool;
		map.get(this._type).push(this);
	}
	,update: function(e) {
		var _g = this;
		_g.set_rotation(_g.get_rotation() + this.rotSpeed);
		var rot = this.get_rotation() * this.gradToRad + this.centAng;
		this._x += this.speedX;
		this._y += this.speedY;
		this.set_x(this._x - Math.cos(rot) * this.dist);
		this.set_y(this._y - Math.sin(rot) * this.dist);
		this.speedX *= this.xDump;
		this.speedY += this.gravity;
		this.rotSpeed *= this.rotDump;
		if(this.speedY > 0 && this._y - this.get_height() > this.sHeight) this.sendToPool();
	}
	,calcParameters: function(xCoord,yCoord,curRot) {
		this._x = xCoord;
		this._y = yCoord;
		this.set_rotation(0);
		if(curRot >= 180) curRot = curRot - 180; else if(curRot <= -180) curRot = -180;
		this._x = this._position == "Right"?this._x + this.bmW / 2:this._x - this.bmH / 2;
		var sign = Math.random() > 0.5?1:-1;
		this.set_rotation(curRot);
		var rot = this.get_rotation() * this.gradToRad + this.centAng;
		this.set_x(this._x - Math.cos(rot) * this.dist);
		this.set_y(this._y - Math.sin(rot) * this.dist);
		var xPol = this._position == "Right"?1:-1;
		var maxX = 6;
		this.speedX = 1 + Math.random() * maxX * xPol;
		this.speedY = -4;
		this.rotSpeed = this.speedY * Math.random() * xPol;
		this.addEventListener(flash.events.Event.ENTER_FRAME,$bind(this,this.update));
	}
	,gradToRad: null
	,dist: null
	,centAng: null
	,bmH: null
	,bmW: null
	,_y: null
	,_x: null
	,_type: null
	,_position: null
	,sHeight: null
	,sWidth: null
	,rotDump: null
	,rotSpeed: null
	,speedX: null
	,speedY: null
	,xDump: null
	,gravity: null
	,__class__: SlicePart
});
var SlicePartBl = function(type,position) {
	this.rotation = 0;
	this.rotDump = 0.99;
	this.rotSpeed = 0;
	this.speedX = 0;
	this.speedY = 0;
	this.xDump = 0.99;
	this.gravity = 1.1;
	this._type = type;
	this._position = position;
	this.bmd = openfl.Assets.getBitmapData("img/bake" + type + position + ".png");
	this.sWidth = Main.current.sWidth;
	this.sHeight = Main.current.sHeight;
	this._x = 0;
	this._y = 0;
	this.bmW = this.bmd.get_width();
	this.bmH = this.bmd.get_height();
	this.dist = Math.sqrt(this.bmW / 2 * (this.bmW / 2) + this.bmH / 2 * (this.bmH / 2));
	this.gradToRad = Math.PI / 180;
	this.matrix = new flash.geom.Matrix();
	this.inrad90 = 90 * this.gradToRad;
	this.pi = Math.PI;
};
$hxClasses["SlicePartBl"] = SlicePartBl;
SlicePartBl.__name__ = ["SlicePartBl"];
SlicePartBl.getFromPool = function(type,position) {
	var map;
	if(position == "Left") map = SlicePartBl.leftPool; else map = SlicePartBl.rightPool;
	if(!map.exists(type)) {
		map.set(type,new Array());
		return new SlicePartBl(type,position);
	}
	var hArr = map.get(type);
	if(hArr.length > 0) return hArr.pop(); else return new SlicePartBl(type,position);
}
SlicePartBl.prototype = {
	sendToPool: function() {
		var map;
		if(this._position == "Left") map = SlicePartBl.leftPool; else map = SlicePartBl.rightPool;
		map.get(this._type).push(this);
	}
	,update: function() {
		this.rotation += this.rotSpeed;
		this._x += this.speedX;
		this._y += this.speedY;
		this.matrix.identity();
		this.matrix.set_tx(-this.bmW / 2);
		this.matrix.set_ty(-this.bmH / 2);
		this.matrix.rotate(this.rotation);
		var _g = this.matrix;
		_g.set_tx(_g.tx + this._x);
		var _g = this.matrix;
		_g.set_ty(_g.ty + this._y);
		this.speedX *= this.xDump;
		this.speedY += this.gravity;
		this.rotSpeed *= this.rotDump;
		if(this.speedY > 0 && this._y - this.bmH > this.sHeight) {
			this.sendToPool();
			return true;
		}
		return false;
	}
	,calcParameters: function(xCoord,yCoord,curRot) {
		this._x = xCoord;
		this._y = yCoord;
		this.rotation = 0;
		if(curRot >= this.pi) curRot = curRot - this.pi; else if(curRot <= -this.pi) curRot = -this.pi * 2 - -this.pi;
		this._x = this._position == "Right"?this._x + this.bmW / 2:this._x - this.bmH / 2;
		var sign = Math.random() > 0.5?1:-1;
		this.rotation = curRot;
		var xPol = this._position == "Right"?1:-1;
		var maxX = 6;
		this.speedX = 1 + Math.random() * maxX * xPol;
		this.speedY = -1;
		this.rotSpeed = this.speedY * Math.random() * xPol * this.gradToRad;
	}
	,pi: null
	,inrad90: null
	,gradToRad: null
	,bmd: null
	,matrix: null
	,dist: null
	,bmH: null
	,bmW: null
	,_y: null
	,_x: null
	,rotation: null
	,_type: null
	,_position: null
	,sHeight: null
	,sWidth: null
	,rotDump: null
	,rotSpeed: null
	,speedX: null
	,speedY: null
	,xDump: null
	,gravity: null
	,__class__: SlicePartBl
}
var SliceShape = function() {
	this.isPaused = true;
	this.id = 0;
	this.isClick = false;
	this.N = 20;
	flash.display.Sprite.call(this);
	this.radToGrad = 180 / Math.PI;
	this.dotarr = new Array();
	var _g1 = 0, _g = this.N;
	while(_g1 < _g) {
		var i = _g1++;
		this.dotarr[i] = new flash.geom.Point(this.get_mouseX(),this.get_mouseY());
	}
	this.bmd = openfl.Assets.getBitmapData("img/SwordSample.png");
	this.bmArr = new Array();
	var spr;
	var bm;
	var _g1 = 0, _g = this.N;
	while(_g1 < _g) {
		var i = _g1++;
		bm = new flash.display.Bitmap(this.bmd);
		this.bmWidth = bm.get_width();
		bm.set_scaleX(bm.set_scaleY(0));
		this.addChild(bm);
		this.bmArr.push(bm);
	}
	this.addEventListener(flash.events.Event.ENTER_FRAME,$bind(this,this.onEventEnterFrame));
	this.multitouch = flash.ui.Multitouch.get_supportsTouchEvents();
	this.multitouch = false;
	if(this.multitouch) {
		this.endedTouches = new haxe.ds.IntMap();
		this.dotArrArr = new haxe.ds.IntMap();
		flash.ui.Multitouch.set_inputMode(flash.ui.MultitouchInputMode.TOUCH_POINT);
		flash.Lib.get_current().get_stage().addEventListener("touchBegin",$bind(this,this.onTouchBegin));
		flash.Lib.get_current().get_stage().addEventListener("touchMove",$bind(this,this.onTouchMove));
		flash.Lib.get_current().get_stage().addEventListener("touchEnd",$bind(this,this.onTouchEnd));
	} else {
		flash.Lib.get_current().get_stage().addEventListener(flash.events.MouseEvent.MOUSE_DOWN,$bind(this,this.mDown));
		flash.Lib.get_current().get_stage().addEventListener(flash.events.MouseEvent.MOUSE_UP,$bind(this,this.mUp));
	}
	this.debug = new flash.text.TextField();
	this.debug.set_textColor(16777215);
	this.addChild(this.debug);
	this.debug.set_text("multitouch = " + Std.string(this.multitouch));
	this.debug.set_text(Std.string(flash.Lib.get_current().get_stage().get_stageWidth()));
};
$hxClasses["SliceShape"] = SliceShape;
SliceShape.__name__ = ["SliceShape"];
SliceShape.__super__ = flash.display.Sprite;
SliceShape.prototype = $extend(flash.display.Sprite.prototype,{
	destroy: function() {
		this.get_graphics().clear();
		if(this.parent != null) this.parent.removeChild(this);
	}
	,pause: function(val) {
		this.isPaused = val;
		if(!val) {
			var _g1 = 0, _g = this.N;
			while(_g1 < _g) {
				var i = _g1++;
				this.dotarr[i] = new flash.geom.Point(this.get_mouseX(),this.get_mouseY());
			}
		}
	}
	,multitouchUpdate: function() {
		this.debug.set_text("");
		var arr;
		var _g = this.get_graphics();
		_g.clear();
		var $it0 = this.dotArrArr.keys();
		while( $it0.hasNext() ) {
			var touchID = $it0.next();
			if(this.endedTouches.exists(touchID)) {
				arr = this.dotArrArr.get(touchID);
				if(arr[0].x == arr[this.N - 1].x && arr[0].y == arr[this.N - 1].y) {
					this.dotArrArr.remove(touchID);
					this.endedTouches.remove(touchID);
					continue;
				}
			}
			var _g1 = this.debug;
			_g1.set_text(_g1.get_text() + (touchID + ","));
			arr = this.dotArrArr.get(touchID);
			var _prevPoint = arr[0];
			var _g1 = 1, _g2 = this.N;
			while(_g1 < _g2) {
				var i = _g1++;
				var _prev = arr[i - 1];
				var _current = arr[i];
				_g.lineStyle(i,16711680,1,true);
				var _point = new flash.geom.Point(_prev.x + (_current.x - _prev.x) / 2,_prev.y + (_current.y - _prev.y) / 2);
				_g.moveTo(_prevPoint.x,_prevPoint.y);
				_g.curveTo(_prev.x,_prev.y,_point.x,_point.y);
				_prevPoint = _point;
				_prev.x = _current.x;
				_prev.y = _current.y;
			}
		}
	}
	,onEventEnterFrame: function(e) {
		if(this.isPaused) return;
		if(this.isClick) {
			this.dotarr[this.N - 1].x = this.get_mouseX();
			this.dotarr[this.N - 1].y = this.get_mouseY();
		}
		var len;
		var ang;
		var spr;
		var dx;
		var dy;
		var _g1 = 1, _g = this.N;
		while(_g1 < _g) {
			var i = _g1++;
			var _prev = this.dotarr[i - 1];
			var _current = this.dotarr[i];
			spr = this.bmArr[i - 1];
			dx = _current.x - _prev.x;
			dy = _current.y - _prev.y;
			len = Math.sqrt(dx * dx + dy * dy);
			spr.set_x(_prev.x);
			spr.set_y(_prev.y);
			spr.set_width(len);
			spr.set_scaleY(i / this.N);
			ang = Math.atan2(dy,dx) * this.radToGrad;
			spr.set_rotation(ang);
			_prev.x = _current.x;
			_prev.y = _current.y;
		}
	}
	,onTouchEnd: function(e) {
		this.endedTouches.set(e.touchPointID,false);
	}
	,onTouchMove: function(e) {
		var arr;
		if(this.dotArrArr.exists(e.touchPointID)) {
			arr = this.dotArrArr.get(e.touchPointID);
			arr[this.N - 1].x = e.stageX;
			arr[this.N - 1].y = e.stageY;
		}
	}
	,onTouchBegin: function(e) {
		var arr;
		if(this.dotArrArr.exists(e.touchPointID)) this.dotArrArr.remove(e.touchPointID);
		arr = new Array();
		var _g1 = 0, _g = this.N;
		while(_g1 < _g) {
			var i = _g1++;
			arr[i] = new flash.geom.Point(e.stageX,e.stageY);
		}
		this.dotArrArr.set(e.touchPointID,arr);
	}
	,mUp: function(e) {
		this.isClick = false;
	}
	,mDown: function(e) {
		this.isClick = true;
		var _g1 = 0, _g = this.N;
		while(_g1 < _g) {
			var i = _g1++;
			this.dotarr[i].x = this.get_mouseX();
			this.dotarr[i].y = this.get_mouseY();
		}
		this.get_graphics().clear();
	}
	,isPaused: null
	,bmWidth: null
	,bmArr: null
	,bmd: null
	,debug: null
	,id: null
	,radToGrad: null
	,isClick: null
	,multitouch: null
	,endedTouches: null
	,dotArrArr: null
	,dotarr: null
	,N: null
	,__class__: SliceShape
});
var SliceShapeBl = function() {
	this.GAP = 2;
	this.maxHeight = 18;
	this.id = 0;
	this.isClick = false;
	this.N = 8;
	this.stage = Main.current;
	this.radToGrad = 180 / Math.PI;
	this.dotarr = new Array();
	var _g1 = 0, _g = this.N;
	while(_g1 < _g) {
		var i = _g1++;
		this.dotarr[i] = new flash.geom.Point(this.stage.get_mouseX(),this.stage.get_mouseY());
	}
	var m = new flash.geom.Matrix();
	m.scale(0,0);
	this.matrixes = new Array();
	var _g1 = 0, _g = this.N;
	while(_g1 < _g) {
		var i = _g1++;
		this.matrixes[i] = m.clone();
	}
	this.bmd = openfl.Assets.getBitmapData("img/SwordSample.png");
	this.bmdEnd = openfl.Assets.getBitmapData("img/SwordSampleEnd.png");
	this.bmW = this.bmd.get_width();
	this.bmH = this.bmd.get_height();
	flash.Lib.get_current().get_stage().addEventListener(flash.events.MouseEvent.MOUSE_DOWN,$bind(this,this.mDown));
	flash.Lib.get_current().get_stage().addEventListener(flash.events.MouseEvent.MOUSE_UP,$bind(this,this.mUp));
};
$hxClasses["SliceShapeBl"] = SliceShapeBl;
SliceShapeBl.__name__ = ["SliceShapeBl"];
SliceShapeBl.prototype = {
	update: function(drawTo) {
		if(this.isClick) {
			this.dotarr[this.N - 1].x = this.stage.get_mouseX();
			this.dotarr[this.N - 1].y = this.stage.get_mouseY();
		}
		var len;
		var ang;
		var dx;
		var dy;
		var sx;
		var sy;
		var m;
		var _g1 = 1, _g = this.N;
		while(_g1 < _g) {
			var i = _g1++;
			var _prev = this.dotarr[i - 1];
			var _current = this.dotarr[i];
			m = this.matrixes[i];
			dx = _current.x - _prev.x;
			dy = _current.y - _prev.y;
			len = Math.sqrt(dx * dx + dy * dy);
			ang = Math.atan2(dy,dx);
			sy = i / this.N * (this.maxHeight / this.N);
			sx = (len + (len > 0?this.GAP:0)) / this.bmW;
			m.identity();
			m.set_ty(-this.bmH / 2);
			m.scale(sx,sy);
			m.rotate(ang);
			var _g2 = m;
			_g2.set_tx(_g2.tx + _prev.x);
			var _g2 = m;
			_g2.set_ty(_g2.ty + _prev.y);
			_prev.x = _current.x;
			_prev.y = _current.y;
		}
		if(drawTo != null) {
			var m1;
			var dBmd = this.bmd;
			var _g1 = 0, _g = this.N;
			while(_g1 < _g) {
				var i = _g1++;
				if(i == this.N - 1) dBmd = this.bmdEnd;
				m1 = this.matrixes[i];
				drawTo.drawBMDTransform(dBmd,m1);
			}
		}
	}
	,mUp: function(e) {
		this.isClick = false;
	}
	,mDown: function(e) {
		this.isClick = true;
		var _g1 = 0, _g = this.N;
		while(_g1 < _g) {
			var i = _g1++;
			this.dotarr[i].x = this.stage.get_mouseX();
			this.dotarr[i].y = this.stage.get_mouseY();
		}
	}
	,matrixes: null
	,GAP: null
	,maxHeight: null
	,bmH: null
	,bmW: null
	,bmdEnd: null
	,bmd: null
	,stage: null
	,id: null
	,radToGrad: null
	,isClick: null
	,multitouch: null
	,endedTouches: null
	,dotArrArr: null
	,dotarr: null
	,N: null
	,__class__: SliceShapeBl
}
var SliceTrailBl = function(_type) {
	this.type = 0;
	this.rotation = 0;
	this.alpha = 1;
	this.alphaMinus = 0.01;
	this.type = _type;
	this.bmd = openfl.Assets.getBitmapData("img/trail" + this.type + ".png");
	this.matrix = new flash.geom.Matrix();
	this.gradToRad = Math.PI / 180;
	this.ang360InRad = this.gradToRad * 360;
	this.colorMatrix = new flash.geom.ColorTransform();
};
$hxClasses["SliceTrailBl"] = SliceTrailBl;
SliceTrailBl.__name__ = ["SliceTrailBl"];
SliceTrailBl.getFromPool = function(_type) {
	if(!SliceTrailBl.pool.exists(_type)) {
		SliceTrailBl.pool.set(_type,new Array());
		return new SliceTrailBl(_type);
	}
	var hArr = SliceTrailBl.pool.get(_type);
	if(hArr.length > 0) return hArr.pop(); else return new SliceTrailBl(_type);
}
SliceTrailBl.prototype = {
	sendToPool: function() {
		SliceTrailBl.pool.get(this.type).push(this);
	}
	,setTransfByCenter: function(_x,_y) {
		this.matrix.identity();
		this.rotation = Math.random() * this.ang360InRad;
		this.alpha = 1;
		this.matrix.translate(-this.bmd.get_width() / 2,-this.bmd.get_height() / 2);
		this.matrix.rotate(this.rotation);
		this.matrix.translate(_x,_y);
		this.colorMatrix.alphaMultiplier = this.alpha;
	}
	,update: function() {
		this.alpha -= this.alphaMinus;
		this.colorMatrix.alphaMultiplier = this.alpha;
		if(this.alpha < this.alphaMinus) {
			this.sendToPool();
			return true;
		}
		return false;
	}
	,type: null
	,colorMatrix: null
	,rotation: null
	,alpha: null
	,matrix: null
	,bmd: null
	,ang360InRad: null
	,gradToRad: null
	,alphaMinus: null
	,__class__: SliceTrailBl
}
var Std = function() { }
$hxClasses["Std"] = Std;
Std.__name__ = ["Std"];
Std.string = function(s) {
	return js.Boot.__string_rec(s,"");
}
Std.parseInt = function(x) {
	var v = parseInt(x,10);
	if(v == 0 && (HxOverrides.cca(x,1) == 120 || HxOverrides.cca(x,1) == 88)) v = parseInt(x);
	if(isNaN(v)) return null;
	return v;
}
Std.parseFloat = function(x) {
	return parseFloat(x);
}
var StringBuf = function() {
	this.b = "";
};
$hxClasses["StringBuf"] = StringBuf;
StringBuf.__name__ = ["StringBuf"];
StringBuf.prototype = {
	b: null
	,__class__: StringBuf
}
var StringTools = function() { }
$hxClasses["StringTools"] = StringTools;
StringTools.__name__ = ["StringTools"];
StringTools.urlEncode = function(s) {
	return encodeURIComponent(s);
}
StringTools.urlDecode = function(s) {
	return decodeURIComponent(s.split("+").join(" "));
}
StringTools.startsWith = function(s,start) {
	return s.length >= start.length && HxOverrides.substr(s,0,start.length) == start;
}
StringTools.isSpace = function(s,pos) {
	var c = HxOverrides.cca(s,pos);
	return c > 8 && c < 14 || c == 32;
}
StringTools.ltrim = function(s) {
	var l = s.length;
	var r = 0;
	while(r < l && StringTools.isSpace(s,r)) r++;
	if(r > 0) return HxOverrides.substr(s,r,l - r); else return s;
}
StringTools.rtrim = function(s) {
	var l = s.length;
	var r = 0;
	while(r < l && StringTools.isSpace(s,l - r - 1)) r++;
	if(r > 0) return HxOverrides.substr(s,0,l - r); else return s;
}
StringTools.trim = function(s) {
	return StringTools.ltrim(StringTools.rtrim(s));
}
StringTools.replace = function(s,sub,by) {
	return s.split(sub).join(by);
}
StringTools.hex = function(n,digits) {
	var s = "";
	var hexChars = "0123456789ABCDEF";
	do {
		s = hexChars.charAt(n & 15) + s;
		n >>>= 4;
	} while(n > 0);
	if(digits != null) while(s.length < digits) s = "0" + s;
	return s;
}
var Type = function() { }
$hxClasses["Type"] = Type;
Type.__name__ = ["Type"];
Type.getClass = function(o) {
	if(o == null) return null;
	return o.__class__;
}
Type.getClassName = function(c) {
	var a = c.__name__;
	return a.join(".");
}
Type.resolveClass = function(name) {
	var cl = $hxClasses[name];
	if(cl == null || !cl.__name__) return null;
	return cl;
}
Type.resolveEnum = function(name) {
	var e = $hxClasses[name];
	if(e == null || !e.__ename__) return null;
	return e;
}
Type.createInstance = function(cl,args) {
	switch(args.length) {
	case 0:
		return new cl();
	case 1:
		return new cl(args[0]);
	case 2:
		return new cl(args[0],args[1]);
	case 3:
		return new cl(args[0],args[1],args[2]);
	case 4:
		return new cl(args[0],args[1],args[2],args[3]);
	case 5:
		return new cl(args[0],args[1],args[2],args[3],args[4]);
	case 6:
		return new cl(args[0],args[1],args[2],args[3],args[4],args[5]);
	case 7:
		return new cl(args[0],args[1],args[2],args[3],args[4],args[5],args[6]);
	case 8:
		return new cl(args[0],args[1],args[2],args[3],args[4],args[5],args[6],args[7]);
	default:
		throw "Too many arguments";
	}
	return null;
}
Type.createEmptyInstance = function(cl) {
	function empty() {}; empty.prototype = cl.prototype;
	return new empty();
}
Type.createEnum = function(e,constr,params) {
	var f = Reflect.field(e,constr);
	if(f == null) throw "No such constructor " + constr;
	if(Reflect.isFunction(f)) {
		if(params == null) throw "Constructor " + constr + " need parameters";
		return f.apply(e,params);
	}
	if(params != null && params.length != 0) throw "Constructor " + constr + " does not need parameters";
	return f;
}
Type.getInstanceFields = function(c) {
	var a = [];
	for(var i in c.prototype) a.push(i);
	HxOverrides.remove(a,"__class__");
	HxOverrides.remove(a,"__properties__");
	return a;
}
Type.getEnumConstructs = function(e) {
	var a = e.__constructs__;
	return a.slice();
}
var haxe = {}
haxe.Timer = function(time_ms) {
	var me = this;
	this.id = setInterval(function() {
		me.run();
	},time_ms);
};
$hxClasses["haxe.Timer"] = haxe.Timer;
haxe.Timer.__name__ = ["haxe","Timer"];
haxe.Timer.delay = function(f,time_ms) {
	var t = new haxe.Timer(time_ms);
	t.run = function() {
		t.stop();
		f();
	};
	return t;
}
haxe.Timer.stamp = function() {
	return new Date().getTime() / 1000;
}
haxe.Timer.prototype = {
	run: function() {
		haxe.Log.trace("run",{ fileName : "Timer.hx", lineNumber : 98, className : "haxe.Timer", methodName : "run"});
	}
	,stop: function() {
		if(this.id == null) return;
		clearInterval(this.id);
		this.id = null;
	}
	,id: null
	,__class__: haxe.Timer
}
flash.Lib = function(rootElement,width,height) {
	this.mKilled = false;
	this.__scr = rootElement;
	if(this.__scr == null) throw "Root element not found";
	this.__scr.style.setProperty("overflow","visible","");
	this.__scr.style.setProperty("position","absolute","");
	if(this.__scr.style.getPropertyValue("width") != "100%") this.__scr.style.width = width + "px";
	if(this.__scr.style.getPropertyValue("height") != "100%") this.__scr.style.height = height + "px";
};
$hxClasses["flash.Lib"] = flash.Lib;
flash.Lib.__name__ = ["flash","Lib"];
flash.Lib.__properties__ = {get_current:"get_current"}
flash.Lib.addCallback = function(functionName,closure) {
	flash.Lib.mMe.__scr[functionName] = closure;
}
flash.Lib["as"] = function(v,c) {
	return js.Boot.__instanceof(v,c)?v:null;
}
flash.Lib.attach = function(name) {
	return new flash.display.MovieClip();
}
flash.Lib.getTimer = function() {
	return (haxe.Timer.stamp() - flash.Lib.starttime) * 1000 | 0;
}
flash.Lib.getURL = function(request,target) {
//	if(target == null) target = "_blank";
//	window.open(request.url,target);
try{parent.moregame();}catch(e){}
}
flash.Lib.preventDefaultTouchMove = function() {
	js.Browser.document.addEventListener("touchmove",function(evt) {
		evt.preventDefault();
	},false);
}
flash.Lib.Run = function(tgt,width,height) {
	flash.Lib.mMe = new flash.Lib(tgt,width,height);
	var _g1 = 0, _g = tgt.attributes.length;
	while(_g1 < _g) {
		var i = _g1++;
		var attr = tgt.attributes.item(i);
		if(StringTools.startsWith(attr.name,"data-")) {
			if(attr.name == "data-" + "framerate") flash.Lib.__getStage().set_frameRate(Std.parseFloat(attr.value));
		}
	}
	var _g = 0, _g1 = flash.Lib.HTML_TOUCH_EVENT_TYPES;
	while(_g < _g1.length) {
		var type = _g1[_g];
		++_g;
		tgt.addEventListener(type,($_=flash.Lib.__getStage(),$bind($_,$_.__queueStageEvent)),true);
	}
	var _g = 0, _g1 = flash.Lib.HTML_TOUCH_ALT_EVENT_TYPES;
	while(_g < _g1.length) {
		var type = _g1[_g];
		++_g;
		tgt.addEventListener(type,($_=flash.Lib.__getStage(),$bind($_,$_.__queueStageEvent)),true);
	}
	var _g = 0, _g1 = flash.Lib.HTML_DIV_EVENT_TYPES;
	while(_g < _g1.length) {
		var type = _g1[_g];
		++_g;
		tgt.addEventListener(type,($_=flash.Lib.__getStage(),$bind($_,$_.__queueStageEvent)),true);
	}
	if(Reflect.hasField(js.Browser.window,"on" + "devicemotion")) js.Browser.window.addEventListener("devicemotion",($_=flash.Lib.__getStage(),$bind($_,$_.__queueStageEvent)),true);
	if(Reflect.hasField(js.Browser.window,"on" + "orientationchange")) js.Browser.window.addEventListener("orientationchange",($_=flash.Lib.__getStage(),$bind($_,$_.__queueStageEvent)),true);
	var _g = 0, _g1 = flash.Lib.HTML_WINDOW_EVENT_TYPES;
	while(_g < _g1.length) {
		var type = _g1[_g];
		++_g;
		js.Browser.window.addEventListener(type,($_=flash.Lib.__getStage(),$bind($_,$_.__queueStageEvent)),false);
	}
	if(tgt.style.backgroundColor != null && tgt.style.backgroundColor != "") flash.Lib.__getStage().set_backgroundColor(flash.Lib.__parseColor(tgt.style.backgroundColor,function(res,pos,cur) {
		return pos == 0?res | cur << 16:pos == 1?res | cur << 8:pos == 2?res | cur:(function($this) {
			var $r;
			throw "pos should be 0-2";
			return $r;
		}(this));
	})); else flash.Lib.__getStage().set_backgroundColor(16777215);
	flash.Lib.get_current().get_graphics().beginFill(flash.Lib.__getStage().get_backgroundColor());
	flash.Lib.get_current().get_graphics().drawRect(0,0,width,height);
	flash.Lib.__setSurfaceId(flash.Lib.get_current().get_graphics().__surface,"Root MovieClip");
	flash.Lib.__getStage().__updateNextWake();
	return flash.Lib.mMe;
}
flash.Lib.setUserScalable = function(isScalable) {
	if(isScalable == null) isScalable = true;
	var meta = js.Browser.document.createElement("meta");
	meta.name = "viewport";
	meta.content = "user-scalable=" + (isScalable?"yes":"no");
}
flash.Lib.trace = function(arg) {
	if(window.console != null) window.console.log(arg);
}
flash.Lib.__appendSurface = function(surface,before,after) {
	if(flash.Lib.mMe.__scr != null) {
		surface.style.setProperty("position","absolute","");
		surface.style.setProperty("left","0px","");
		surface.style.setProperty("top","0px","");
		surface.style.setProperty("transform-origin","0 0","");
		surface.style.setProperty("-moz-transform-origin","0 0","");
		surface.style.setProperty("-webkit-transform-origin","0 0","");
		surface.style.setProperty("-o-transform-origin","0 0","");
		surface.style.setProperty("-ms-transform-origin","0 0","");
		try {
			if(surface.localName == "canvas") surface.onmouseover = surface.onselectstart = function() {
				return false;
			};
		} catch( e ) {
		}
		if(before != null) before.parentNode.insertBefore(surface,before); else if(after != null && after.nextSibling != null) after.parentNode.insertBefore(surface,after.nextSibling); else flash.Lib.mMe.__scr.appendChild(surface);
	}
}
flash.Lib.__appendText = function(surface,container,text,wrap,isHtml) {
	var _g1 = 0, _g = surface.childNodes.length;
	while(_g1 < _g) {
		var i = _g1++;
		surface.removeChild(surface.childNodes[i]);
	}
	if(isHtml) container.innerHTML = text; else container.appendChild(js.Browser.document.createTextNode(text));
	container.style.setProperty("position","relative","");
	container.style.setProperty("cursor","default","");
	if(!wrap) container.style.setProperty("white-space","nowrap","");
	surface.appendChild(container);
}
flash.Lib.__bootstrap = function() {
	if(flash.Lib.mMe == null) {
		var target = js.Browser.document.getElementById("haxe:openfl");
		if(target == null) target = js.Browser.document.createElement("div");
		var agent = navigator.userAgent;
		if(agent.indexOf("BlackBerry") > -1 && target.style.height == "100%") target.style.height = screen.height + "px";
		if(agent.indexOf("Android") > -1) {
			var version = Std.parseFloat(HxOverrides.substr(agent,agent.indexOf("Android") + 8,3));
			if(version <= 2.3) flash.Lib.mForce2DTransform = true;
		}
		flash.Lib.Run(target,flash.Lib.__getWidth(),flash.Lib.__getHeight());
	}
}
flash.Lib.__copyStyle = function(src,tgt) {
	tgt.id = src.id;
	var _g = 0, _g1 = ["left","top","transform","transform-origin","-moz-transform","-moz-transform-origin","-webkit-transform","-webkit-transform-origin","-o-transform","-o-transform-origin","opacity","display"];
	while(_g < _g1.length) {
		var prop = _g1[_g];
		++_g;
		tgt.style.setProperty(prop,src.style.getPropertyValue(prop),"");
	}
}
flash.Lib.__createSurfaceAnimationCSS = function(surface,data,template,templateFunc,fps,discrete,infinite) {
	if(infinite == null) infinite = false;
	if(discrete == null) discrete = false;
	if(fps == null) fps = 25;
	if(surface.id == null || surface.id == "") {
		flash.Lib.trace("Failed to create a CSS Style tag for a surface without an id attribute");
		return null;
	}
	var style = null;
	if(surface.getAttribute("data-openfl-anim") != null) style = js.Browser.document.getElementById(surface.getAttribute("data-openfl-anim")); else {
		style = flash.Lib.mMe.__scr.appendChild(js.Browser.document.createElement("style"));
		style.sheet.id = "__openfl_anim_" + surface.id + "__";
		surface.setAttribute("data-openfl-anim",style.sheet.id);
	}
	var keyframeStylesheetRule = "";
	var _g1 = 0, _g = data.length;
	while(_g1 < _g) {
		var i = _g1++;
		var perc = i / (data.length - 1) * 100;
		var frame = data[i];
		keyframeStylesheetRule += perc + "% { " + template.execute(templateFunc(frame)) + " } ";
	}
	var animationDiscreteRule = discrete?"steps(::steps::, end)":"";
	var animationInfiniteRule = infinite?"infinite":"";
	var animationTpl = "";
	var _g = 0, _g1 = ["animation","-moz-animation","-webkit-animation","-o-animation","-ms-animation"];
	while(_g < _g1.length) {
		var prefix = _g1[_g];
		++_g;
		animationTpl += prefix + ": ::id:: ::duration::s " + animationDiscreteRule + " " + animationInfiniteRule + "; ";
	}
	var animationStylesheetRule = new haxe.Template(animationTpl).execute({ id : surface.id, duration : data.length / fps, steps : 1});
	var rules = style.sheet.rules != null?style.sheet.rules:style.sheet.cssRules;
	var _g = 0, _g1 = ["","-moz-","-webkit-","-o-","-ms-"];
	while(_g < _g1.length) {
		var variant = _g1[_g];
		++_g;
		try {
			style.sheet.insertRule("@" + variant + "keyframes " + surface.id + " {" + keyframeStylesheetRule + "}",rules.length);
		} catch( e ) {
		}
	}
	style.sheet.insertRule("#" + surface.id + " { " + animationStylesheetRule + " } ",rules.length);
	return style;
}
flash.Lib.__designMode = function(mode) {
	js.Browser.document.designMode = mode?"on":"off";
}
flash.Lib.__disableFullScreen = function() {
}
flash.Lib.__disableRightClick = function() {
	if(flash.Lib.mMe != null) try {
		flash.Lib.mMe.__scr.oncontextmenu = function() {
			return false;
		};
	} catch( e ) {
		flash.Lib.trace("Disable right click not supported in this browser.");
	}
}
flash.Lib.__drawClippedImage = function(surface,tgtCtx,clipRect) {
	if(clipRect != null) {
		if(clipRect.x < 0) {
			clipRect.width += clipRect.x;
			clipRect.x = 0;
		}
		if(clipRect.y < 0) {
			clipRect.height += clipRect.y;
			clipRect.y = 0;
		}
		if(clipRect.width > surface.width - clipRect.x) clipRect.width = surface.width - clipRect.x;
		if(clipRect.height > surface.height - clipRect.y) clipRect.height = surface.height - clipRect.y;
		tgtCtx.drawImage(surface,clipRect.x,clipRect.y,clipRect.width,clipRect.height,clipRect.x,clipRect.y,clipRect.width,clipRect.height);
	} else tgtCtx.drawImage(surface,0,0);
}
flash.Lib.__drawSurfaceRect = function(surface,tgt,x,y,rect) {
	var tgtCtx = tgt.getContext("2d");
	tgt.width = rect.width;
	tgt.height = rect.height;
	tgtCtx.drawImage(surface,rect.x,rect.y,rect.width,rect.height,0,0,rect.width,rect.height);
	tgt.style.left = x + "px";
	tgt.style.top = y + "px";
}
flash.Lib.__drawToSurface = function(surface,tgt,matrix,alpha,clipRect,smoothing) {
	if(smoothing == null) smoothing = true;
	if(alpha == null) alpha = 1.0;
	var srcCtx = surface.getContext("2d");
	var tgtCtx = tgt.getContext("2d");
	tgtCtx.globalAlpha = alpha;
	flash.Lib.__setImageSmoothing(tgtCtx,smoothing);
	if(surface.width > 0 && surface.height > 0) {
		if(matrix != null) {
			tgtCtx.save();
			if(matrix.a == 1 && matrix.b == 0 && matrix.c == 0 && matrix.d == 1) tgtCtx.translate(matrix.tx,matrix.ty); else tgtCtx.setTransform(matrix.a,matrix.b,matrix.c,matrix.d,matrix.tx,matrix.ty);
			flash.Lib.__drawClippedImage(surface,tgtCtx,clipRect);
			tgtCtx.restore();
		} else flash.Lib.__drawClippedImage(surface,tgtCtx,clipRect);
	}
}
flash.Lib.__enableFullScreen = function() {
	if(flash.Lib.mMe != null) {
		var origWidth = flash.Lib.mMe.__scr.style.getPropertyValue("width");
		var origHeight = flash.Lib.mMe.__scr.style.getPropertyValue("height");
		flash.Lib.mMe.__scr.style.setProperty("width","100%","");
		flash.Lib.mMe.__scr.style.setProperty("height","100%","");
		flash.Lib.__disableFullScreen = function() {
			flash.Lib.mMe.__scr.style.setProperty("width",origWidth,"");
			flash.Lib.mMe.__scr.style.setProperty("height",origHeight,"");
		};
	}
}
flash.Lib.__enableRightClick = function() {
	if(flash.Lib.mMe != null) try {
		flash.Lib.mMe.__scr.oncontextmenu = null;
	} catch( e ) {
		flash.Lib.trace("Enable right click not supported in this browser.");
	}
}
flash.Lib.__fullScreenHeight = function() {
	return js.Browser.window.innerHeight;
}
flash.Lib.__fullScreenWidth = function() {
	return js.Browser.window.innerWidth;
}
flash.Lib.__getHeight = function() {
	var tgt = flash.Lib.mMe != null?flash.Lib.mMe.__scr:js.Browser.document.getElementById("haxe:openfl");
	return tgt != null && tgt.clientHeight > 0?tgt.clientHeight:500;
}
flash.Lib.__getStage = function() {
	if(flash.Lib.mStage == null) {
		var width = flash.Lib.__getWidth();
		var height = flash.Lib.__getHeight();
		flash.Lib.mStage = new flash.display.Stage(width,height);
	}
	return flash.Lib.mStage;
}
flash.Lib.__getWidth = function() {
	var tgt = flash.Lib.mMe != null?flash.Lib.mMe.__scr:js.Browser.document.getElementById("haxe:openfl");
	return tgt != null && tgt.clientWidth > 0?tgt.clientWidth:500;
}
flash.Lib.realStageWidth = function() {
	return eval("window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth;");
}
flash.Lib.realStageHeight = function() {
	return eval("window.innerHeight || document.documentElement.clientHeight || document.body.clientHeight;");
}
flash.Lib.__isOnStage = function(surface) {
	var p = surface;
	while(p != null && p != flash.Lib.mMe.__scr) p = p.parentNode;
	return p == flash.Lib.mMe.__scr;
}
flash.Lib.__parseColor = function(str,cb) {
	var re = new EReg("rgb\\(([0-9]*), ?([0-9]*), ?([0-9]*)\\)","");
	var hex = new EReg("#([0-9a-zA-Z][0-9a-zA-Z])([0-9a-zA-Z][0-9a-zA-Z])([0-9a-zA-Z][0-9a-zA-Z])","");
	if(re.match(str)) {
		var col = 0;
		var _g = 1;
		while(_g < 4) {
			var pos = _g++;
			var v = Std.parseInt(re.matched(pos));
			col = cb(col,pos - 1,v);
		}
		return col;
	} else if(hex.match(str)) {
		var col = 0;
		var _g = 1;
		while(_g < 4) {
			var pos = _g++;
			var v = "0x" + hex.matched(pos) & 255;
			v = cb(col,pos - 1,v);
		}
		return col;
	} else throw "Cannot parse color '" + str + "'.";
}
flash.Lib.__removeSurface = function(surface) {
	if(flash.Lib.mMe.__scr != null) {
		var anim = surface.getAttribute("data-openfl-anim");
		if(anim != null) {
			var style = js.Browser.document.getElementById(anim);
			if(style != null) flash.Lib.mMe.__scr.removeChild(style);
		}
		if(surface.parentNode != null) surface.parentNode.removeChild(surface);
	}
	return surface;
}
flash.Lib.__setSurfaceBorder = function(surface,color,size) {
	surface.style.setProperty("border-color","#" + StringTools.hex(color),"");
	surface.style.setProperty("border-style","solid","");
	surface.style.setProperty("border-width",size + "px","");
	surface.style.setProperty("border-collapse","collapse","");
}
flash.Lib.__setSurfaceClipping = function(surface,rect) {
}
flash.Lib.__setSurfaceFont = function(surface,font,bold,size,color,align,lineHeight) {
	surface.style.setProperty("font-family",font,"");
	surface.style.setProperty("font-weight",Std.string(bold),"");
	surface.style.setProperty("color","#" + StringTools.hex(color),"");
	surface.style.setProperty("font-size",size + "px","");
	surface.style.setProperty("text-align",align,"");
	surface.style.setProperty("line-height",lineHeight + "px","");
}
flash.Lib.__setSurfaceOpacity = function(surface,alpha) {
	surface.style.setProperty("opacity",Std.string(alpha),"");
}
flash.Lib.__setSurfacePadding = function(surface,padding,margin,display) {
	surface.style.setProperty("padding",padding + "px","");
	surface.style.setProperty("margin",margin + "px","");
	surface.style.setProperty("top",padding + 2 + "px","");
	surface.style.setProperty("right",padding + 1 + "px","");
	surface.style.setProperty("left",padding + 1 + "px","");
	surface.style.setProperty("bottom",padding + 1 + "px","");
	surface.style.setProperty("display",display?"inline":"block","");
}
flash.Lib.__setSurfaceTransform = function(surface,matrix) {
	if(matrix.a == 1 && matrix.b == 0 && matrix.c == 0 && matrix.d == 1 && surface.getAttribute("data-openfl-anim") == null) {
		surface.style.left = matrix.tx + "px";
		surface.style.top = matrix.ty + "px";
		surface.style.setProperty("transform","","");
		surface.style.setProperty("-moz-transform","","");
		surface.style.setProperty("-webkit-transform","","");
		surface.style.setProperty("-o-transform","","");
		surface.style.setProperty("-ms-transform","","");
	} else {
		surface.style.left = "0px";
		surface.style.top = "0px";
		surface.style.setProperty("transform","matrix(" + matrix.a + ", " + matrix.b + ", " + matrix.c + ", " + matrix.d + ", " + matrix.tx + ", " + matrix.ty + ")","");
		surface.style.setProperty("-moz-transform","matrix(" + matrix.a + ", " + matrix.b + ", " + matrix.c + ", " + matrix.d + ", " + matrix.tx + "px, " + matrix.ty + "px)","");
		if(!flash.Lib.mForce2DTransform) surface.style.setProperty("-webkit-transform","matrix3d(" + matrix.a + ", " + matrix.b + ", " + "0, 0, " + matrix.c + ", " + matrix.d + ", " + "0, 0, 0, 0, 1, 0, " + matrix.tx + ", " + matrix.ty + ", " + "0, 1" + ")",""); else surface.style.setProperty("-webkit-transform","matrix(" + matrix.a + ", " + matrix.b + ", " + matrix.c + ", " + matrix.d + ", " + matrix.tx + ", " + matrix.ty + ")","");
		surface.style.setProperty("-o-transform","matrix(" + matrix.a + ", " + matrix.b + ", " + matrix.c + ", " + matrix.d + ", " + matrix.tx + ", " + matrix.ty + ")","");
		surface.style.setProperty("-ms-transform","matrix(" + matrix.a + ", " + matrix.b + ", " + matrix.c + ", " + matrix.d + ", " + matrix.tx + ", " + matrix.ty + ")","");
	}
}
flash.Lib.__setSurfaceZIndexAfter = function(surface1,surface2) {
	if(surface1 != null && surface2 != null) {
		if(surface1.parentNode != surface2.parentNode && surface2.parentNode != null) surface2.parentNode.appendChild(surface1);
		if(surface2.parentNode != null) {
			var nextSibling = surface2.nextSibling;
			if(surface1.previousSibling != surface2) {
				var swap = flash.Lib.__removeSurface(surface1);
				if(nextSibling == null) surface2.parentNode.appendChild(swap); else surface2.parentNode.insertBefore(swap,nextSibling);
			}
		}
	}
}
flash.Lib.__swapSurface = function(surface1,surface2) {
	var parent1 = surface1.parentNode;
	var parent2 = surface2.parentNode;
	if(parent1 != null && parent2 != null) {
		if(parent1 == parent2) {
			var next1 = surface1.nextSibling;
			var next2 = surface2.nextSibling;
			if(next1 == surface2) parent1.insertBefore(surface2,surface1); else if(next2 == surface1) parent1.insertBefore(surface1,surface2); else {
				parent1.replaceChild(surface2,surface1);
				if(next2 != null) parent1.insertBefore(surface1,next2); else parent1.appendChild(surface1);
			}
		} else {
			var next2 = surface2.nextSibling;
			parent1.replaceChild(surface2,surface1);
			if(next2 != null) parent2.insertBefore(surface1,next2); else parent2.appendChild(surface1);
		}
	}
}
flash.Lib.__setContentEditable = function(surface,contentEditable) {
	if(contentEditable == null) contentEditable = true;
	surface.setAttribute("contentEditable",contentEditable?"true":"false");
}
flash.Lib.__setCursor = function(type) {
	if(flash.Lib.mMe != null) flash.Lib.mMe.__scr.style.cursor = (function($this) {
		var $r;
		switch( (type)[1] ) {
		case 0:
			$r = "pointer";
			break;
		case 1:
			$r = "text";
			break;
		default:
			$r = "default";
		}
		return $r;
	}(this));
}
flash.Lib.__setImageSmoothing = function(context,enabled) {
	var _g = 0, _g1 = ["imageSmoothingEnabled","mozImageSmoothingEnabled","webkitImageSmoothingEnabled"];
	while(_g < _g1.length) {
		var variant = _g1[_g];
		++_g;
		context[variant] = enabled;
	}
}
flash.Lib.__setSurfaceAlign = function(surface,align) {
	surface.style.setProperty("text-align",align,"");
}
flash.Lib.__setSurfaceId = function(surface,name) {
	var regex = new EReg("[^a-zA-Z0-9\\-]","g");
	surface.id = regex.replace(name,"_");
}
flash.Lib.__setSurfaceRotation = function(surface,rotate) {
	surface.style.setProperty("transform","rotate(" + rotate + "deg)","");
	surface.style.setProperty("-moz-transform","rotate(" + rotate + "deg)","");
	surface.style.setProperty("-webkit-transform","rotate(" + rotate + "deg)","");
	surface.style.setProperty("-o-transform","rotate(" + rotate + "deg)","");
	surface.style.setProperty("-ms-transform","rotate(" + rotate + "deg)","");
}
flash.Lib.__setSurfaceScale = function(surface,scale) {
	surface.style.setProperty("transform","scale(" + scale + ")","");
	surface.style.setProperty("-moz-transform","scale(" + scale + ")","");
	surface.style.setProperty("-webkit-transform","scale(" + scale + ")","");
	surface.style.setProperty("-o-transform","scale(" + scale + ")","");
	surface.style.setProperty("-ms-transform","scale(" + scale + ")","");
}
flash.Lib.__setSurfaceSpritesheetAnimation = function(surface,spec,fps) {
	if(spec.length == 0) return surface;
	var div = js.Browser.document.createElement("div");
	div.style.backgroundImage = "url(" + surface.toDataURL("image/png") + ")";
	div.id = surface.id;
	var keyframeTpl = new haxe.Template("background-position: ::left::px ::top::px; width: ::width::px; height: ::height::px; ");
	var templateFunc = function(frame) {
		return { left : -frame.x, top : -frame.y, width : frame.width, height : frame.height};
	};
	flash.Lib.__createSurfaceAnimationCSS(div,spec,keyframeTpl,templateFunc,fps,true,true);
	if(flash.Lib.__isOnStage(surface)) {
		flash.Lib.__appendSurface(div);
		flash.Lib.__copyStyle(surface,div);
		flash.Lib.__swapSurface(surface,div);
		flash.Lib.__removeSurface(surface);
	} else flash.Lib.__copyStyle(surface,div);
	return div;
}
flash.Lib.__setSurfaceVisible = function(surface,visible) {
	if(visible) surface.style.setProperty("display","block",""); else surface.style.setProperty("display","none","");
}
flash.Lib.__setTextDimensions = function(surface,width,height,align) {
	surface.style.setProperty("width",width + "px","");
	surface.style.setProperty("height",height + "px","");
	surface.style.setProperty("overflow","visible","");
	surface.style.setProperty("text-align",align,"");
}
flash.Lib.__surfaceHitTest = function(surface,x,y) {
	var _g1 = 0, _g = surface.childNodes.length;
	while(_g1 < _g) {
		var i = _g1++;
		var node = surface.childNodes[i];
		if(x >= node.offsetLeft && x <= node.offsetLeft + node.offsetWidth && y >= node.offsetTop && y <= node.offsetTop + node.offsetHeight) return true;
	}
	return false;
}
flash.Lib.get_current = function() {
	if(flash.Lib.mMainClassRoot == null) {
		flash.Lib.mMainClassRoot = new flash.display.MovieClip();
		flash.Lib.mCurrent = flash.Lib.mMainClassRoot;
		flash.Lib.__getStage().addChild(flash.Lib.mCurrent);
	}
	return flash.Lib.mMainClassRoot;
}
flash.Lib.prototype = {
	__scr: null
	,mKilled: null
	,mArgs: null
	,__class__: flash.Lib
}
flash._Lib = {}
flash._Lib.CursorType = $hxClasses["flash._Lib.CursorType"] = { __ename__ : true, __constructs__ : ["Pointer","Text","Default"] }
flash._Lib.CursorType.Pointer = ["Pointer",0];
flash._Lib.CursorType.Pointer.toString = $estr;
flash._Lib.CursorType.Pointer.__enum__ = flash._Lib.CursorType;
flash._Lib.CursorType.Text = ["Text",1];
flash._Lib.CursorType.Text.toString = $estr;
flash._Lib.CursorType.Text.__enum__ = flash._Lib.CursorType;
flash._Lib.CursorType.Default = ["Default",2];
flash._Lib.CursorType.Default.toString = $estr;
flash._Lib.CursorType.Default.__enum__ = flash._Lib.CursorType;
flash._Vector = {}
flash._Vector.Vector_Impl_ = function() { }
$hxClasses["flash._Vector.Vector_Impl_"] = flash._Vector.Vector_Impl_;
flash._Vector.Vector_Impl_.__name__ = ["flash","_Vector","Vector_Impl_"];
flash._Vector.Vector_Impl_.__properties__ = {set_fixed:"set_fixed",get_fixed:"get_fixed",set_length:"set_length",get_length:"get_length"}
flash._Vector.Vector_Impl_._new = function(length,fixed) {
	return new Array();
}
flash._Vector.Vector_Impl_.concat = function(this1,a) {
	return this1.concat(a);
}
flash._Vector.Vector_Impl_.copy = function(this1) {
	return this1.slice();
}
flash._Vector.Vector_Impl_.iterator = function(this1) {
	return HxOverrides.iter(this1);
}
flash._Vector.Vector_Impl_.join = function(this1,sep) {
	return this1.join(sep);
}
flash._Vector.Vector_Impl_.pop = function(this1) {
	return this1.pop();
}
flash._Vector.Vector_Impl_.push = function(this1,x) {
	return this1.push(x);
}
flash._Vector.Vector_Impl_.reverse = function(this1) {
	this1.reverse();
}
flash._Vector.Vector_Impl_.shift = function(this1) {
	return this1.shift();
}
flash._Vector.Vector_Impl_.unshift = function(this1,x) {
	this1.unshift(x);
}
flash._Vector.Vector_Impl_.slice = function(this1,pos,end) {
	return this1.slice(pos,end);
}
flash._Vector.Vector_Impl_.sort = function(this1,f) {
	this1.sort(f);
}
flash._Vector.Vector_Impl_.splice = function(this1,pos,len) {
	return this1.splice(pos,len);
}
flash._Vector.Vector_Impl_.toString = function(this1) {
	return this1.toString();
}
flash._Vector.Vector_Impl_.indexOf = function(this1,x,from) {
	if(from == null) from = 0;
	var _g1 = from, _g = this1.length;
	while(_g1 < _g) {
		var i = _g1++;
		if(this1[i] == x) return i;
	}
	return -1;
}
flash._Vector.Vector_Impl_.lastIndexOf = function(this1,x,from) {
	if(from == null) from = 0;
	var i = this1.length - 1;
	while(i >= from) {
		if(this1[i] == x) return i;
		i--;
	}
	return -1;
}
flash._Vector.Vector_Impl_.ofArray = function(a) {
	return flash._Vector.Vector_Impl_.concat(flash._Vector.Vector_Impl_._new(),a);
}
flash._Vector.Vector_Impl_.convert = function(v) {
	return v;
}
flash._Vector.Vector_Impl_.fromArray = function(a) {
	return a;
}
flash._Vector.Vector_Impl_.toArray = function(this1) {
	return this1;
}
flash._Vector.Vector_Impl_.get_length = function(this1) {
	return this1.length;
}
flash._Vector.Vector_Impl_.set_length = function(this1,value) {
	if(value < this1.length) this1 = this1.slice(0,value);
	while(value > this1.length) this1.push(null);
	return value;
}
flash._Vector.Vector_Impl_.get_fixed = function(this1) {
	return false;
}
flash._Vector.Vector_Impl_.set_fixed = function(this1,value) {
	return value;
}
flash.accessibility = {}
flash.accessibility.AccessibilityProperties = function() {
	this.description = "";
	this.forceSimple = false;
	this.name = "";
	this.noAutoLabeling = false;
	this.shortcut = "";
	this.silent = false;
};
$hxClasses["flash.accessibility.AccessibilityProperties"] = flash.accessibility.AccessibilityProperties;
flash.accessibility.AccessibilityProperties.__name__ = ["flash","accessibility","AccessibilityProperties"];
flash.accessibility.AccessibilityProperties.prototype = {
	silent: null
	,shortcut: null
	,noAutoLabeling: null
	,name: null
	,forceSimple: null
	,description: null
	,__class__: flash.accessibility.AccessibilityProperties
}
flash.display.ImageDataLease = function() {
};
$hxClasses["flash.display.ImageDataLease"] = flash.display.ImageDataLease;
flash.display.ImageDataLease.__name__ = ["flash","display","ImageDataLease"];
flash.display.ImageDataLease.prototype = {
	set: function(s,t) {
		this.seed = s;
		this.time = t;
	}
	,clone: function() {
		var leaseClone = new flash.display.ImageDataLease();
		leaseClone.seed = this.seed;
		leaseClone.time = this.time;
		return leaseClone;
	}
	,time: null
	,seed: null
	,__class__: flash.display.ImageDataLease
}
flash.display._BitmapData = {}
flash.display._BitmapData.MinstdGenerator = function(seed) {
	if(seed == 0) this.value = 1; else this.value = seed;
};
$hxClasses["flash.display._BitmapData.MinstdGenerator"] = flash.display._BitmapData.MinstdGenerator;
flash.display._BitmapData.MinstdGenerator.__name__ = ["flash","display","_BitmapData","MinstdGenerator"];
flash.display._BitmapData.MinstdGenerator.prototype = {
	nextValue: function() {
		var lo = 16807 * (this.value & 65535);
		var hi = 16807 * (this.value >>> 16);
		lo += (hi & 32767) << 16;
		if(lo < 0 || lo > -2147483648 - 1) {
			lo &= -2147483648 - 1;
			++lo;
		}
		lo += hi >>> 15;
		if(lo < 0 || lo > -2147483648 - 1) {
			lo &= -2147483648 - 1;
			++lo;
		}
		return this.value = lo;
	}
	,value: null
	,__class__: flash.display._BitmapData.MinstdGenerator
}
flash.display.BitmapDataChannel = function() { }
$hxClasses["flash.display.BitmapDataChannel"] = flash.display.BitmapDataChannel;
flash.display.BitmapDataChannel.__name__ = ["flash","display","BitmapDataChannel"];
flash.display.BlendMode = $hxClasses["flash.display.BlendMode"] = { __ename__ : true, __constructs__ : ["ADD","ALPHA","DARKEN","DIFFERENCE","ERASE","HARDLIGHT","INVERT","LAYER","LIGHTEN","MULTIPLY","NORMAL","OVERLAY","SCREEN","SUBTRACT"] }
flash.display.BlendMode.ADD = ["ADD",0];
flash.display.BlendMode.ADD.toString = $estr;
flash.display.BlendMode.ADD.__enum__ = flash.display.BlendMode;
flash.display.BlendMode.ALPHA = ["ALPHA",1];
flash.display.BlendMode.ALPHA.toString = $estr;
flash.display.BlendMode.ALPHA.__enum__ = flash.display.BlendMode;
flash.display.BlendMode.DARKEN = ["DARKEN",2];
flash.display.BlendMode.DARKEN.toString = $estr;
flash.display.BlendMode.DARKEN.__enum__ = flash.display.BlendMode;
flash.display.BlendMode.DIFFERENCE = ["DIFFERENCE",3];
flash.display.BlendMode.DIFFERENCE.toString = $estr;
flash.display.BlendMode.DIFFERENCE.__enum__ = flash.display.BlendMode;
flash.display.BlendMode.ERASE = ["ERASE",4];
flash.display.BlendMode.ERASE.toString = $estr;
flash.display.BlendMode.ERASE.__enum__ = flash.display.BlendMode;
flash.display.BlendMode.HARDLIGHT = ["HARDLIGHT",5];
flash.display.BlendMode.HARDLIGHT.toString = $estr;
flash.display.BlendMode.HARDLIGHT.__enum__ = flash.display.BlendMode;
flash.display.BlendMode.INVERT = ["INVERT",6];
flash.display.BlendMode.INVERT.toString = $estr;
flash.display.BlendMode.INVERT.__enum__ = flash.display.BlendMode;
flash.display.BlendMode.LAYER = ["LAYER",7];
flash.display.BlendMode.LAYER.toString = $estr;
flash.display.BlendMode.LAYER.__enum__ = flash.display.BlendMode;
flash.display.BlendMode.LIGHTEN = ["LIGHTEN",8];
flash.display.BlendMode.LIGHTEN.toString = $estr;
flash.display.BlendMode.LIGHTEN.__enum__ = flash.display.BlendMode;
flash.display.BlendMode.MULTIPLY = ["MULTIPLY",9];
flash.display.BlendMode.MULTIPLY.toString = $estr;
flash.display.BlendMode.MULTIPLY.__enum__ = flash.display.BlendMode;
flash.display.BlendMode.NORMAL = ["NORMAL",10];
flash.display.BlendMode.NORMAL.toString = $estr;
flash.display.BlendMode.NORMAL.__enum__ = flash.display.BlendMode;
flash.display.BlendMode.OVERLAY = ["OVERLAY",11];
flash.display.BlendMode.OVERLAY.toString = $estr;
flash.display.BlendMode.OVERLAY.__enum__ = flash.display.BlendMode;
flash.display.BlendMode.SCREEN = ["SCREEN",12];
flash.display.BlendMode.SCREEN.toString = $estr;
flash.display.BlendMode.SCREEN.__enum__ = flash.display.BlendMode;
flash.display.BlendMode.SUBTRACT = ["SUBTRACT",13];
flash.display.BlendMode.SUBTRACT.toString = $estr;
flash.display.BlendMode.SUBTRACT.__enum__ = flash.display.BlendMode;
flash.display.CapsStyle = $hxClasses["flash.display.CapsStyle"] = { __ename__ : true, __constructs__ : ["NONE","ROUND","SQUARE"] }
flash.display.CapsStyle.NONE = ["NONE",0];
flash.display.CapsStyle.NONE.toString = $estr;
flash.display.CapsStyle.NONE.__enum__ = flash.display.CapsStyle;
flash.display.CapsStyle.ROUND = ["ROUND",1];
flash.display.CapsStyle.ROUND.toString = $estr;
flash.display.CapsStyle.ROUND.__enum__ = flash.display.CapsStyle;
flash.display.CapsStyle.SQUARE = ["SQUARE",2];
flash.display.CapsStyle.SQUARE.toString = $estr;
flash.display.CapsStyle.SQUARE.__enum__ = flash.display.CapsStyle;
flash.display.GradientType = $hxClasses["flash.display.GradientType"] = { __ename__ : true, __constructs__ : ["RADIAL","LINEAR"] }
flash.display.GradientType.RADIAL = ["RADIAL",0];
flash.display.GradientType.RADIAL.toString = $estr;
flash.display.GradientType.RADIAL.__enum__ = flash.display.GradientType;
flash.display.GradientType.LINEAR = ["LINEAR",1];
flash.display.GradientType.LINEAR.toString = $estr;
flash.display.GradientType.LINEAR.__enum__ = flash.display.GradientType;
flash.display.Graphics = function(inSurface) {
	this.fixedHeight = 0;
	this.fixedWidth = 0;
	flash.Lib.__bootstrap();
	if(inSurface == null) {
		this.__surface = js.Browser.document.createElement("canvas");
		this.__surface.width = 0;
		this.__surface.height = 0;
	} else this.__surface = inSurface;
	this.mLastMoveID = 0;
	this.mPenX = 0.0;
	this.mPenY = 0.0;
	this.mDrawList = new Array();
	this.mPoints = [];
	this.mSolidGradient = null;
	this.mBitmap = null;
	this.mFilling = false;
	this.mFillColour = 0;
	this.mFillAlpha = 0.0;
	this.mLastMoveID = 0;
	this.boundsDirty = true;
	this.__clearLine();
	this.mLineJobs = [];
	this.__changed = true;
	this.nextDrawIndex = 0;
	this.__extent = new flash.geom.Rectangle();
	this.__extentWithFilters = new flash.geom.Rectangle();
	this._padding = 0.0;
	this.__clearNextCycle = true;
};
$hxClasses["flash.display.Graphics"] = flash.display.Graphics;
flash.display.Graphics.__name__ = ["flash","display","Graphics"];
flash.display.Graphics.__detectIsPointInPathMode = function() {
	var canvas = js.Browser.document.createElement("canvas");
	var ctx = canvas.getContext("2d");
	if(ctx.isPointInPath == null) return flash.display.PointInPathMode.USER_SPACE;
	ctx.save();
	ctx.translate(1,0);
	ctx.beginPath();
	ctx.rect(0,0,1,1);
	var rv = ctx.isPointInPath(0.3,0.3)?flash.display.PointInPathMode.USER_SPACE:flash.display.PointInPathMode.DEVICE_SPACE;
	ctx.restore();
	return rv;
}
flash.display.Graphics.prototype = {
	__render: function(maskHandle,filters,sx,sy,clip0,clip1,clip2,clip3) {
		if(sy == null) sy = 1.0;
		if(sx == null) sx = 1.0;
		if(!this.__changed) return false;
		this.closePolygon(true);
		var padding = this._padding;
		if(filters != null) {
			var _g = 0;
			while(_g < filters.length) {
				var filter = filters[_g];
				++_g;
				if(Reflect.hasField(filter,"blurX")) padding += Math.max(Reflect.field(filter,"blurX"),Reflect.field(filter,"blurY")) * 4;
			}
		}
		this.__expandFilteredExtent(-(padding * sx) / 2,-(padding * sy) / 2);
		if(this.__clearNextCycle) {
			this.nextDrawIndex = 0;
			this.__clearCanvas();
			this.__clearNextCycle = false;
		}
		if(this.__extentWithFilters.width - this.__extentWithFilters.x > this.__surface.width || this.__extentWithFilters.height - this.__extentWithFilters.y > this.__surface.height) this.__adjustSurface(sx,sy);
		var ctx = (function($this) {
			var $r;
			try {
				$r = $this.__surface.getContext("2d");
			} catch( e ) {
				$r = null;
			}
			return $r;
		}(this));
		if(ctx == null) return false;
		if(clip0 != null) {
			ctx.beginPath();
			ctx.moveTo(clip0.x * sx,clip0.y * sy);
			ctx.lineTo(clip1.x * sx,clip1.y * sy);
			ctx.lineTo(clip2.x * sx,clip2.y * sy);
			ctx.lineTo(clip3.x * sx,clip3.y * sy);
			ctx.closePath();
			ctx.clip();
		}
		if(filters != null) {
			var _g = 0;
			while(_g < filters.length) {
				var filter = filters[_g];
				++_g;
				if(js.Boot.__instanceof(filter,flash.filters.DropShadowFilter)) filter.__applyFilter(this.__surface,null,true);
			}
		}
		var len = this.mDrawList.length;
		ctx.save();
		if(this.__extentWithFilters.x != 0 || this.__extentWithFilters.y != 0) ctx.translate(-this.__extentWithFilters.x * sx,-this.__extentWithFilters.y * sy);
		if(sx != 1 || sy != 0) ctx.scale(sx,sy);
		var doStroke = false;
		var _g = this.nextDrawIndex;
		while(_g < len) {
			var i = _g++;
			var d = this.mDrawList[len - 1 - i];
			if(d.tileJob != null) this.__drawTiles(d.tileJob.sheet,d.tileJob.drawList,d.tileJob.flags); else {
				if(d.lineJobs.length > 0) {
					var _g1 = 0, _g2 = d.lineJobs;
					while(_g1 < _g2.length) {
						var lj = _g2[_g1];
						++_g1;
						ctx.lineWidth = lj.thickness;
						switch(lj.joints) {
						case 0:
							ctx.lineJoin = "round";
							break;
						case 4096:
							ctx.lineJoin = "miter";
							break;
						case 8192:
							ctx.lineJoin = "bevel";
							break;
						}
						switch(lj.caps) {
						case 256:
							ctx.lineCap = "round";
							break;
						case 512:
							ctx.lineCap = "square";
							break;
						case 0:
							ctx.lineCap = "butt";
							break;
						}
						ctx.miterLimit = lj.miter_limit;
						if(lj.grad != null) ctx.strokeStyle = this.createCanvasGradient(ctx,lj.grad); else ctx.strokeStyle = this.createCanvasColor(lj.colour,lj.alpha);
						ctx.beginPath();
						var _g4 = lj.point_idx0, _g3 = lj.point_idx1 + 1;
						while(_g4 < _g3) {
							var i1 = _g4++;
							var p = d.points[i1];
							switch(p.type) {
							case 0:
								ctx.moveTo(p.x,p.y);
								break;
							case 2:
								ctx.quadraticCurveTo(p.cx,p.cy,p.x,p.y);
								break;
							default:
								ctx.lineTo(p.x,p.y);
							}
						}
						ctx.closePath();
						doStroke = true;
					}
				} else {
					ctx.beginPath();
					var _g1 = 0, _g2 = d.points;
					while(_g1 < _g2.length) {
						var p = _g2[_g1];
						++_g1;
						switch(p.type) {
						case 0:
							ctx.moveTo(p.x,p.y);
							break;
						case 2:
							ctx.quadraticCurveTo(p.cx,p.cy,p.x,p.y);
							break;
						default:
							ctx.lineTo(p.x,p.y);
						}
					}
					ctx.closePath();
				}
				var fillColour = d.fillColour;
				var fillAlpha = d.fillAlpha;
				var g = d.solidGradient;
				var bitmap = d.bitmap;
				if(g != null) ctx.fillStyle = this.createCanvasGradient(ctx,g); else if(bitmap != null && (bitmap.flags & 16) > 0) {
					var m = bitmap.matrix;
					if(m != null) ctx.transform(m.a,m.b,m.c,m.d,m.tx,m.ty);
					if((bitmap.flags & 65536) == 0) {
						ctx.mozImageSmoothingEnabled = false;
						ctx.webkitImageSmoothingEnabled = false;
					}
					ctx.fillStyle = ctx.createPattern(bitmap.texture_buffer,"repeat");
				} else ctx.fillStyle = this.createCanvasColor(fillColour,Math.min(1.0,Math.max(0.0,fillAlpha)));
				ctx.fill();
				if(doStroke) ctx.stroke();
				ctx.save();
				if(bitmap != null && (bitmap.flags & 16) == 0) {
					ctx.clip();
					var img = bitmap.texture_buffer;
					var m = bitmap.matrix;
					if(m != null) ctx.transform(m.a,m.b,m.c,m.d,m.tx,m.ty);
					ctx.drawImage(img,0,0);
				}
				ctx.restore();
			}
		}
		ctx.restore();
		this.__changed = false;
		this.nextDrawIndex = len > 0?len - 1:0;
		this.mDrawList = [];
		return true;
	}
	,__mediaSurface: function(surface) {
		this.__surface = surface;
	}
	,__invalidate: function() {
		this.__changed = true;
		this.__clearNextCycle = true;
	}
	,__hitTest: function(inX,inY) {
		var ctx = (function($this) {
			var $r;
			try {
				$r = $this.__surface.getContext("2d");
			} catch( e ) {
				$r = null;
			}
			return $r;
		}(this));
		if(ctx == null) return false;
		if(ctx.isPointInPath(inX,inY)) return true; else if(this.mDrawList.length == 0 && this.__extent.width > 0 && this.__extent.height > 0) return true;
		return false;
	}
	,__expandStandardExtent: function(x,y,thickness) {
		if(thickness == null) thickness = 0;
		if(this._padding > 0) {
			this.__extent.width -= this._padding;
			this.__extent.height -= this._padding;
		}
		if(thickness != null && thickness > this._padding) this._padding = thickness;
		var maxX, minX, maxY, minY;
		minX = this.__extent.x;
		minY = this.__extent.y;
		maxX = this.__extent.width + minX;
		maxY = this.__extent.height + minY;
		maxX = x > maxX?x:maxX;
		minX = x < minX?x:minX;
		maxY = y > maxY?y:maxY;
		minY = y < minY?y:minY;
		this.__extent.x = minX;
		this.__extent.y = minY;
		this.__extent.width = maxX - minX + this._padding;
		this.__extent.height = maxY - minY + this._padding;
		this.boundsDirty = true;
	}
	,__expandFilteredExtent: function(x,y) {
		var maxX, minX, maxY, minY;
		minX = this.__extent.x;
		minY = this.__extent.y;
		maxX = this.__extent.width + minX;
		maxY = this.__extent.height + minY;
		maxX = x > maxX?x:maxX;
		minX = x < minX?x:minX;
		maxY = y > maxY?y:maxY;
		minY = y < minY?y:minY;
		this.__extentWithFilters.x = minX;
		this.__extentWithFilters.y = minY;
		this.__extentWithFilters.width = maxX - minX;
		this.__extentWithFilters.height = maxY - minY;
	}
	,__drawTiles: function(sheet,tileData,flags) {
		if(flags == null) flags = 0;
		var useScale = (flags & 1) > 0;
		var useRotation = (flags & 2) > 0;
		var useTransform = (flags & 16) > 0;
		var useRGB = (flags & 4) > 0;
		var useAlpha = (flags & 8) > 0;
		if(useTransform) {
			useScale = false;
			useRotation = false;
		}
		var scaleIndex = 0;
		var rotationIndex = 0;
		var rgbIndex = 0;
		var alphaIndex = 0;
		var transformIndex = 0;
		var numValues = 3;
		if(useScale) {
			scaleIndex = numValues;
			numValues++;
		}
		if(useRotation) {
			rotationIndex = numValues;
			numValues++;
		}
		if(useTransform) {
			transformIndex = numValues;
			numValues += 4;
		}
		if(useRGB) {
			rgbIndex = numValues;
			numValues += 3;
		}
		if(useAlpha) {
			alphaIndex = numValues;
			numValues++;
		}
		var totalCount = tileData.length;
		var itemCount = totalCount / numValues | 0;
		var index = 0;
		var rect = null;
		var center = null;
		var previousTileID = -1;
		var surface = sheet.__bitmap.___textureBuffer;
		var ctx = (function($this) {
			var $r;
			try {
				$r = $this.__surface.getContext("2d");
			} catch( e ) {
				$r = null;
			}
			return $r;
		}(this));
		if(ctx != null) while(index < totalCount) {
			var tileID = tileData[index + 2] | 0;
			if(tileID != previousTileID) {
				rect = sheet.__tileRects[tileID];
				center = sheet.__centerPoints[tileID];
				previousTileID = tileID;
			}
			if(rect != null && center != null) {
				ctx.save();
				ctx.translate(tileData[index],tileData[index + 1]);
				if(useRotation) ctx.rotate(tileData[index + rotationIndex]);
				var scale = 1.0;
				if(useScale) scale = tileData[index + scaleIndex];
				if(useTransform) ctx.transform(tileData[index + transformIndex],tileData[index + transformIndex + 1],tileData[index + transformIndex + 2],tileData[index + transformIndex + 3],0,0);
				if(useAlpha) ctx.globalAlpha = tileData[index + alphaIndex];
				ctx.drawImage(surface,rect.x,rect.y,rect.width,rect.height,-center.x * scale,-center.y * scale,rect.width * scale,rect.height * scale);
				ctx.restore();
			}
			index += numValues;
		}
	}
	,__drawEllipse: function(x,y,rx,ry) {
		this.moveTo(x + rx,y);
		this.curveTo(rx + x,-0.4142 * ry + y,0.7071 * rx + x,-0.7071 * ry + y);
		this.curveTo(0.4142 * rx + x,-ry + y,x,-ry + y);
		this.curveTo(-0.4142 * rx + x,-ry + y,-0.7071 * rx + x,-0.7071 * ry + y);
		this.curveTo(-rx + x,-0.4142 * ry + y,-rx + x,y);
		this.curveTo(-rx + x,0.4142 * ry + y,-0.7071 * rx + x,0.7071 * ry + y);
		this.curveTo(-0.4142 * rx + x,ry + y,x,ry + y);
		this.curveTo(0.4142 * rx + x,ry + y,0.7071 * rx + x,0.7071 * ry + y);
		this.curveTo(rx + x,0.4142 * ry + y,rx + x,y);
	}
	,__clearLine: function() {
		this.mCurrentLine = new flash.display.LineJob(null,-1,-1,0.0,0.0,0,1,0,256,3,3.0);
	}
	,__clearCanvas: function() {
		if(this.__surface != null) {
			var ctx = (function($this) {
				var $r;
				try {
					$r = $this.__surface.getContext("2d");
				} catch( e ) {
					$r = null;
				}
				return $r;
			}(this));
			if(ctx != null) ctx.clearRect(0,0,this.__surface.width,this.__surface.height);
		}
	}
	,__adjustSurface: function(sx,sy) {
		if(sy == null) sy = 1.0;
		if(sx == null) sx = 1.0;
		if(Reflect.field(this.__surface,"getContext") != null) {
			var width = Math.ceil((this.__extentWithFilters.width - this.__extentWithFilters.x) * sx);
			var height = Math.ceil((this.__extentWithFilters.height - this.__extentWithFilters.y) * sy);
			if(this.fixedWidth != 0 && this.fixedHeight != 0) {
				width = this.fixedWidth;
				height = this.fixedHeight;
			}
			if(this.__surface.width == width && this.__surface.height == height) return;
			if(width <= 5000 && height <= 5000) {
				var dstCanvas = js.Browser.document.createElement("canvas");
				dstCanvas.width = width;
				dstCanvas.height = height;
				flash.Lib.__drawToSurface(this.__surface,dstCanvas);
				if(flash.Lib.__isOnStage(this.__surface)) {
					flash.Lib.__appendSurface(dstCanvas);
					flash.Lib.__copyStyle(this.__surface,dstCanvas);
					flash.Lib.__swapSurface(this.__surface,dstCanvas);
					flash.Lib.__removeSurface(this.__surface);
					if(this.__surface.id != null) flash.Lib.__setSurfaceId(dstCanvas,this.__surface.id);
				}
				this.__surface = dstCanvas;
			}
		}
	}
	,moveTo: function(inX,inY) {
		this.mPenX = inX;
		this.mPenY = inY;
		this.__expandStandardExtent(inX,inY);
		if(!this.mFilling) this.closePolygon(false); else {
			this.addLineSegment();
			this.mLastMoveID = this.mPoints.length;
			this.mPoints.push(new flash.display.GfxPoint(this.mPenX,this.mPenY,0.0,0.0,0));
		}
	}
	,lineTo: function(inX,inY) {
		var pid = this.mPoints.length;
		if(pid == 0) {
			this.mPoints.push(new flash.display.GfxPoint(this.mPenX,this.mPenY,0.0,0.0,0));
			pid++;
		}
		this.mPenX = inX;
		this.mPenY = inY;
		this.__expandStandardExtent(inX,inY,this.mCurrentLine.thickness);
		this.mPoints.push(new flash.display.GfxPoint(this.mPenX,this.mPenY,0.0,0.0,1));
		if(this.mCurrentLine.grad != null || this.mCurrentLine.alpha > 0) {
			if(this.mCurrentLine.point_idx0 < 0) this.mCurrentLine.point_idx0 = pid - 1;
			this.mCurrentLine.point_idx1 = pid;
		}
		if(!this.mFilling) this.closePolygon(false);
	}
	,lineStyle: function(thickness,color,alpha,pixelHinting,scaleMode,caps,joints,miterLimit) {
		this.addLineSegment();
		if(thickness == null) {
			this.__clearLine();
			return;
		} else {
			this.mCurrentLine.grad = null;
			this.mCurrentLine.thickness = thickness;
			this.mCurrentLine.colour = color == null?0:color;
			this.mCurrentLine.alpha = alpha == null?1.0:alpha;
			this.mCurrentLine.miter_limit = miterLimit == null?3.0:miterLimit;
			this.mCurrentLine.pixel_hinting = pixelHinting == null || !pixelHinting?0:16384;
		}
		if(caps != null) {
			switch( (caps)[1] ) {
			case 1:
				this.mCurrentLine.caps = 256;
				break;
			case 2:
				this.mCurrentLine.caps = 512;
				break;
			case 0:
				this.mCurrentLine.caps = 0;
				break;
			}
		}
		this.mCurrentLine.scale_mode = 3;
		if(scaleMode != null) {
			switch( (scaleMode)[1] ) {
			case 2:
				this.mCurrentLine.scale_mode = 3;
				break;
			case 3:
				this.mCurrentLine.scale_mode = 1;
				break;
			case 0:
				this.mCurrentLine.scale_mode = 2;
				break;
			case 1:
				this.mCurrentLine.scale_mode = 0;
				break;
			}
		}
		this.mCurrentLine.joints = 0;
		if(joints != null) {
			switch( (joints)[1] ) {
			case 1:
				this.mCurrentLine.joints = 0;
				break;
			case 0:
				this.mCurrentLine.joints = 4096;
				break;
			case 2:
				this.mCurrentLine.joints = 8192;
				break;
			}
		}
	}
	,lineGradientStyle: function(type,colors,alphas,ratios,matrix,spreadMethod,interpolationMethod,focalPointRatio) {
		this.mCurrentLine.grad = this.createGradient(type,colors,alphas,ratios,matrix,spreadMethod,interpolationMethod,focalPointRatio);
	}
	,getContext: function() {
		try {
			return this.__surface.getContext("2d");
		} catch( e ) {
			return null;
		}
	}
	,flush: function() {
		this.closePolygon(true);
	}
	,endFill: function() {
		this.closePolygon(true);
	}
	,drawTiles: function(sheet,tileData,smooth,flags) {
		if(flags == null) flags = 0;
		if(smooth == null) smooth = false;
		this.__expandStandardExtent(flash.Lib.get_current().get_stage().get_stageWidth(),flash.Lib.get_current().get_stage().get_stageHeight());
		this.addDrawable(new flash.display.Drawable(null,null,null,null,null,null,new flash.display.TileJob(sheet,tileData,flags)));
		this.__changed = true;
	}
	,drawRoundRect: function(x,y,width,height,rx,ry) {
		if(ry == null) ry = -1;
		if(ry == -1) ry = rx;
		rx *= 0.5;
		ry *= 0.5;
		var w = width * 0.5;
		x += w;
		if(rx > w) rx = w;
		var lw = w - rx;
		var w_ = lw + rx * Math.sin(Math.PI / 4);
		var cw_ = lw + rx * Math.tan(Math.PI / 8);
		var h = height * 0.5;
		y += h;
		if(ry > h) ry = h;
		var lh = h - ry;
		var h_ = lh + ry * Math.sin(Math.PI / 4);
		var ch_ = lh + ry * Math.tan(Math.PI / 8);
		this.closePolygon(false);
		this.moveTo(x + w,y + lh);
		this.curveTo(x + w,y + ch_,x + w_,y + h_);
		this.curveTo(x + cw_,y + h,x + lw,y + h);
		this.lineTo(x - lw,y + h);
		this.curveTo(x - cw_,y + h,x - w_,y + h_);
		this.curveTo(x - w,y + ch_,x - w,y + lh);
		this.lineTo(x - w,y - lh);
		this.curveTo(x - w,y - ch_,x - w_,y - h_);
		this.curveTo(x - cw_,y - h,x - lw,y - h);
		this.lineTo(x + lw,y - h);
		this.curveTo(x + cw_,y - h,x + w_,y - h_);
		this.curveTo(x + w,y - ch_,x + w,y - lh);
		this.lineTo(x + w,y + lh);
		this.closePolygon(false);
	}
	,drawRect: function(x,y,width,height) {
		this.closePolygon(false);
		this.moveTo(x,y);
		this.lineTo(x + width,y);
		this.lineTo(x + width,y + height);
		this.lineTo(x,y + height);
		this.lineTo(x,y);
		this.closePolygon(false);
	}
	,drawGraphicsData: function(points) {
		var $it0 = ((function(_e) {
			return function() {
				return $iterator(flash._Vector.Vector_Impl_)(_e);
			};
		})(points))();
		while( $it0.hasNext() ) {
			var data = $it0.next();
			if(data == null) this.mFilling = true; else switch(data.__graphicsDataType) {
			case flash.display.GraphicsDataType.STROKE:
				var stroke = data;
				if(stroke.fill == null) this.lineStyle(stroke.thickness,0,1.,stroke.pixelHinting,stroke.scaleMode,stroke.caps,stroke.joints,stroke.miterLimit); else switch(stroke.fill.__graphicsFillType) {
				case flash.display.GraphicsFillType.SOLID_FILL:
					var fill = stroke.fill;
					this.lineStyle(stroke.thickness,fill.color,fill.alpha,stroke.pixelHinting,stroke.scaleMode,stroke.caps,stroke.joints,stroke.miterLimit);
					break;
				case flash.display.GraphicsFillType.GRADIENT_FILL:
					var fill = stroke.fill;
					this.lineGradientStyle(fill.type,fill.colors,fill.alphas,fill.ratios,fill.matrix,fill.spreadMethod,fill.interpolationMethod,fill.focalPointRatio);
					break;
				}
				break;
			case flash.display.GraphicsDataType.PATH:
				var path = data;
				var j = 0;
				var _g1 = 0, _g = flash._Vector.Vector_Impl_.get_length(path.commands);
				while(_g1 < _g) {
					var i = _g1++;
					var command = path.commands[i];
					switch(command) {
					case 1:
						this.moveTo(path.data[j],path.data[j + 1]);
						j = j + 2;
						break;
					case 2:
						this.lineTo(path.data[j],path.data[j + 1]);
						j = j + 2;
						break;
					case 3:
						this.curveTo(path.data[j],path.data[j + 1],path.data[j + 2],path.data[j + 3]);
						j = j + 4;
						break;
					}
				}
				break;
			case flash.display.GraphicsDataType.SOLID:
				var fill = data;
				this.beginFill(fill.color,fill.alpha);
				break;
			case flash.display.GraphicsDataType.GRADIENT:
				var fill = data;
				this.beginGradientFill(fill.type,fill.colors,fill.alphas,fill.ratios,fill.matrix,fill.spreadMethod,fill.interpolationMethod,fill.focalPointRatio);
				break;
			}
		}
	}
	,drawEllipse: function(x,y,rx,ry) {
		this.closePolygon(false);
		rx /= 2;
		ry /= 2;
		this.__drawEllipse(x + rx,y + ry,rx,ry);
		this.closePolygon(false);
	}
	,drawCircle: function(x,y,rad) {
		this.closePolygon(false);
		this.__drawEllipse(x,y,rad,rad);
		this.closePolygon(false);
	}
	,curveTo: function(inCX,inCY,inX,inY) {
		var pid = this.mPoints.length;
		if(pid == 0) {
			this.mPoints.push(new flash.display.GfxPoint(this.mPenX,this.mPenY,0.0,0.0,0));
			pid++;
		}
		this.mPenX = inX;
		this.mPenY = inY;
		this.__expandStandardExtent(inX,inY,this.mCurrentLine.thickness);
		this.mPoints.push(new flash.display.GfxPoint(inX,inY,inCX,inCY,2));
		if(this.mCurrentLine.grad != null || this.mCurrentLine.alpha > 0) {
			if(this.mCurrentLine.point_idx0 < 0) this.mCurrentLine.point_idx0 = pid - 1;
			this.mCurrentLine.point_idx1 = pid;
		}
	}
	,createGradient: function(type,colors,alphas,ratios,matrix,spreadMethod,interpolationMethod,focalPointRatio) {
		var points = new Array();
		var _g1 = 0, _g = colors.length;
		while(_g1 < _g) {
			var i = _g1++;
			points.push(new flash.display.GradPoint(colors[i],alphas[i],ratios[i]));
		}
		var flags = 0;
		if(type == flash.display.GradientType.RADIAL) flags |= 1;
		if(spreadMethod == flash.display.SpreadMethod.REPEAT) flags |= 2; else if(spreadMethod == flash.display.SpreadMethod.REFLECT) flags |= 4;
		if(matrix == null) {
			matrix = new flash.geom.Matrix();
			matrix.createGradientBox(25,25);
		} else matrix = matrix.clone();
		var focal = focalPointRatio == null?0:focalPointRatio;
		return new flash.display.Grad(points,matrix,flags,focal);
	}
	,createCanvasGradient: function(ctx,g) {
		var gradient;
		var matrix = g.matrix;
		if((g.flags & 1) == 0) {
			var p1 = matrix.transformPoint(new flash.geom.Point(-819.2,0));
			var p2 = matrix.transformPoint(new flash.geom.Point(819.2,0));
			gradient = ctx.createLinearGradient(p1.x,p1.y,p2.x,p2.y);
		} else {
			var p1 = matrix.transformPoint(new flash.geom.Point(g.focal * 819.2,0));
			var p2 = matrix.transformPoint(new flash.geom.Point(0,819.2));
			gradient = ctx.createRadialGradient(p1.x,p1.y,0,p2.x,p1.y,p2.y);
		}
		var _g = 0, _g1 = g.points;
		while(_g < _g1.length) {
			var point = _g1[_g];
			++_g;
			var color = this.createCanvasColor(point.col,point.alpha);
			var pos = point.ratio / 255;
			gradient.addColorStop(pos,color);
		}
		return gradient;
	}
	,createCanvasColor: function(color,alpha) {
		var r = (16711680 & color) >> 16;
		var g = (65280 & color) >> 8;
		var b = 255 & color;
		return "rgba" + "(" + r + "," + g + "," + b + "," + alpha + ")";
	}
	,closePolygon: function(inCancelFill) {
		var l = this.mPoints.length;
		if(l > 0) {
			if(l > 1) {
				if(this.mFilling && l > 2) {
					if(this.mPoints[this.mLastMoveID].x != this.mPoints[l - 1].x || this.mPoints[this.mLastMoveID].y != this.mPoints[l - 1].y) this.lineTo(this.mPoints[this.mLastMoveID].x,this.mPoints[this.mLastMoveID].y);
				}
				this.addLineSegment();
				var drawable = new flash.display.Drawable(this.mPoints,this.mFillColour,this.mFillAlpha,this.mSolidGradient,this.mBitmap,this.mLineJobs,null);
				this.addDrawable(drawable);
			}
			this.mLineJobs = [];
			this.mPoints = [];
		}
		if(inCancelFill) {
			this.mFillAlpha = 0;
			this.mSolidGradient = null;
			this.mBitmap = null;
			this.mFilling = false;
		}
		this.__changed = true;
	}
	,clear: function() {
		this.__clearLine();
		this.mPenX = 0.0;
		this.mPenY = 0.0;
		this.mDrawList = new Array();
		this.nextDrawIndex = 0;
		this.mPoints = [];
		this.mSolidGradient = null;
		this.mFilling = false;
		this.mFillColour = 0;
		this.mFillAlpha = 0.0;
		this.mLastMoveID = 0;
		this.__clearNextCycle = true;
		this.boundsDirty = true;
		this.__extent.x = 0.0;
		this.__extent.y = 0.0;
		this.__extent.width = 0.0;
		this.__extent.height = 0.0;
		this._padding = 0.0;
		this.mLineJobs = [];
	}
	,blit: function(inTexture) {
		this.closePolygon(true);
		var ctx = (function($this) {
			var $r;
			try {
				$r = $this.__surface.getContext("2d");
			} catch( e ) {
				$r = null;
			}
			return $r;
		}(this));
		if(ctx != null) ctx.drawImage(inTexture.___textureBuffer,this.mPenX,this.mPenY);
	}
	,beginGradientFill: function(type,colors,alphas,ratios,matrix,spreadMethod,interpolationMethod,focalPointRatio) {
		this.closePolygon(true);
		this.mFilling = true;
		this.mBitmap = null;
		this.mSolidGradient = this.createGradient(type,colors,alphas,ratios,matrix,spreadMethod,interpolationMethod,focalPointRatio);
	}
	,beginFill: function(color,alpha) {
		this.closePolygon(true);
		this.mFillColour = color;
		this.mFillAlpha = alpha == null?1.0:alpha;
		this.mFilling = true;
		this.mSolidGradient = null;
		this.mBitmap = null;
	}
	,beginBitmapFill: function(bitmap,matrix,in_repeat,in_smooth) {
		if(in_smooth == null) in_smooth = false;
		if(in_repeat == null) in_repeat = true;
		this.closePolygon(true);
		var repeat = in_repeat == null?true:in_repeat;
		var smooth = in_smooth == null?false:in_smooth;
		this.mFilling = true;
		this.mSolidGradient = null;
		this.__expandStandardExtent(bitmap.___textureBuffer != null?bitmap.___textureBuffer.width:0,bitmap.___textureBuffer != null?bitmap.___textureBuffer.height:0);
		this.mBitmap = { texture_buffer : bitmap.___textureBuffer, matrix : matrix == null?matrix:matrix.clone(), flags : (repeat?16:0) | (smooth?65536:0)};
	}
	,addLineSegment: function() {
		if(this.mCurrentLine.point_idx1 > 0) this.mLineJobs.push(new flash.display.LineJob(this.mCurrentLine.grad,this.mCurrentLine.point_idx0,this.mCurrentLine.point_idx1,this.mCurrentLine.thickness,this.mCurrentLine.alpha,this.mCurrentLine.colour,this.mCurrentLine.pixel_hinting,this.mCurrentLine.joints,this.mCurrentLine.caps,this.mCurrentLine.scale_mode,this.mCurrentLine.miter_limit));
		this.mCurrentLine.point_idx0 = this.mCurrentLine.point_idx1 = -1;
	}
	,addDrawable: function(inDrawable) {
		if(inDrawable == null) return;
		this.mDrawList.unshift(inDrawable);
	}
	,fixedHeight: null
	,fixedWidth: null
	,_padding: null
	,__clearNextCycle: null
	,__changed: null
	,nextDrawIndex: null
	,mSolidGradient: null
	,mPoints: null
	,mPenY: null
	,mPenX: null
	,mLineJobs: null
	,mLineDraws: null
	,mLastMoveID: null
	,mFilling: null
	,mFillAlpha: null
	,mFillColour: null
	,mDrawList: null
	,mCurrentLine: null
	,mBitmap: null
	,__surface: null
	,__extentWithFilters: null
	,__extent: null
	,boundsDirty: null
	,__class__: flash.display.Graphics
}
flash.display.Drawable = function(inPoints,inFillColour,inFillAlpha,inSolidGradient,inBitmap,inLineJobs,inTileJob) {
	this.points = inPoints;
	this.fillColour = inFillColour;
	this.fillAlpha = inFillAlpha;
	this.solidGradient = inSolidGradient;
	this.bitmap = inBitmap;
	this.lineJobs = inLineJobs;
	this.tileJob = inTileJob;
};
$hxClasses["flash.display.Drawable"] = flash.display.Drawable;
flash.display.Drawable.__name__ = ["flash","display","Drawable"];
flash.display.Drawable.prototype = {
	tileJob: null
	,solidGradient: null
	,points: null
	,lineJobs: null
	,fillColour: null
	,fillAlpha: null
	,bitmap: null
	,__class__: flash.display.Drawable
}
flash.display.GfxPoint = function(inX,inY,inCX,inCY,inType) {
	this.x = inX;
	this.y = inY;
	this.cx = inCX;
	this.cy = inCY;
	this.type = inType;
};
$hxClasses["flash.display.GfxPoint"] = flash.display.GfxPoint;
flash.display.GfxPoint.__name__ = ["flash","display","GfxPoint"];
flash.display.GfxPoint.prototype = {
	y: null
	,x: null
	,type: null
	,cy: null
	,cx: null
	,__class__: flash.display.GfxPoint
}
flash.display.Grad = function(inPoints,inMatrix,inFlags,inFocal) {
	this.points = inPoints;
	this.matrix = inMatrix;
	this.flags = inFlags;
	this.focal = inFocal;
};
$hxClasses["flash.display.Grad"] = flash.display.Grad;
flash.display.Grad.__name__ = ["flash","display","Grad"];
flash.display.Grad.prototype = {
	points: null
	,matrix: null
	,focal: null
	,flags: null
	,__class__: flash.display.Grad
}
flash.display.GradPoint = function(inCol,inAlpha,inRatio) {
	this.col = inCol;
	this.alpha = inAlpha;
	this.ratio = inRatio;
};
$hxClasses["flash.display.GradPoint"] = flash.display.GradPoint;
flash.display.GradPoint.__name__ = ["flash","display","GradPoint"];
flash.display.GradPoint.prototype = {
	ratio: null
	,col: null
	,alpha: null
	,__class__: flash.display.GradPoint
}
flash.display.LineJob = function(inGrad,inPoint_idx0,inPoint_idx1,inThickness,inAlpha,inColour,inPixel_hinting,inJoints,inCaps,inScale_mode,inMiter_limit) {
	this.grad = inGrad;
	this.point_idx0 = inPoint_idx0;
	this.point_idx1 = inPoint_idx1;
	this.thickness = inThickness;
	this.alpha = inAlpha;
	this.colour = inColour;
	this.pixel_hinting = inPixel_hinting;
	this.joints = inJoints;
	this.caps = inCaps;
	this.scale_mode = inScale_mode;
	this.miter_limit = inMiter_limit;
};
$hxClasses["flash.display.LineJob"] = flash.display.LineJob;
flash.display.LineJob.__name__ = ["flash","display","LineJob"];
flash.display.LineJob.prototype = {
	thickness: null
	,scale_mode: null
	,point_idx1: null
	,point_idx0: null
	,pixel_hinting: null
	,miter_limit: null
	,joints: null
	,grad: null
	,colour: null
	,caps: null
	,alpha: null
	,__class__: flash.display.LineJob
}
flash.display.PointInPathMode = $hxClasses["flash.display.PointInPathMode"] = { __ename__ : true, __constructs__ : ["USER_SPACE","DEVICE_SPACE"] }
flash.display.PointInPathMode.USER_SPACE = ["USER_SPACE",0];
flash.display.PointInPathMode.USER_SPACE.toString = $estr;
flash.display.PointInPathMode.USER_SPACE.__enum__ = flash.display.PointInPathMode;
flash.display.PointInPathMode.DEVICE_SPACE = ["DEVICE_SPACE",1];
flash.display.PointInPathMode.DEVICE_SPACE.toString = $estr;
flash.display.PointInPathMode.DEVICE_SPACE.__enum__ = flash.display.PointInPathMode;
flash.display.TileJob = function(sheet,drawList,flags) {
	this.sheet = sheet;
	this.drawList = drawList;
	this.flags = flags;
};
$hxClasses["flash.display.TileJob"] = flash.display.TileJob;
flash.display.TileJob.__name__ = ["flash","display","TileJob"];
flash.display.TileJob.prototype = {
	sheet: null
	,flags: null
	,drawList: null
	,__class__: flash.display.TileJob
}
flash.display.IGraphicsFill = function() { }
$hxClasses["flash.display.IGraphicsFill"] = flash.display.IGraphicsFill;
flash.display.IGraphicsFill.__name__ = ["flash","display","IGraphicsFill"];
flash.display.IGraphicsFill.prototype = {
	__graphicsFillType: null
	,__class__: flash.display.IGraphicsFill
}
flash.display.IGraphicsData = function() { }
$hxClasses["flash.display.IGraphicsData"] = flash.display.IGraphicsData;
flash.display.IGraphicsData.__name__ = ["flash","display","IGraphicsData"];
flash.display.IGraphicsData.prototype = {
	__graphicsDataType: null
	,__class__: flash.display.IGraphicsData
}
flash.display.GraphicsGradientFill = function(type,colors,alphas,ratios,matrix,spreadMethod,interpolationMethod,focalPointRatio) {
	if(focalPointRatio == null) focalPointRatio = 0;
	this.type = type;
	this.colors = colors;
	this.alphas = alphas;
	this.ratios = ratios;
	this.matrix = matrix;
	this.spreadMethod = spreadMethod;
	this.interpolationMethod = interpolationMethod;
	this.focalPointRatio = focalPointRatio;
	this.__graphicsDataType = flash.display.GraphicsDataType.GRADIENT;
	this.__graphicsFillType = flash.display.GraphicsFillType.GRADIENT_FILL;
};
$hxClasses["flash.display.GraphicsGradientFill"] = flash.display.GraphicsGradientFill;
flash.display.GraphicsGradientFill.__name__ = ["flash","display","GraphicsGradientFill"];
flash.display.GraphicsGradientFill.__interfaces__ = [flash.display.IGraphicsFill,flash.display.IGraphicsData];
flash.display.GraphicsGradientFill.prototype = {
	__graphicsFillType: null
	,__graphicsDataType: null
	,type: null
	,spreadMethod: null
	,ratios: null
	,matrix: null
	,interpolationMethod: null
	,focalPointRatio: null
	,colors: null
	,alphas: null
	,__class__: flash.display.GraphicsGradientFill
}
flash.display.IGraphicsPath = function() { }
$hxClasses["flash.display.IGraphicsPath"] = flash.display.IGraphicsPath;
flash.display.IGraphicsPath.__name__ = ["flash","display","IGraphicsPath"];
flash.display.GraphicsPath = function(commands,data,winding) {
	this.commands = commands;
	this.data = data;
	this.winding = winding;
	this.__graphicsDataType = flash.display.GraphicsDataType.PATH;
};
$hxClasses["flash.display.GraphicsPath"] = flash.display.GraphicsPath;
flash.display.GraphicsPath.__name__ = ["flash","display","GraphicsPath"];
flash.display.GraphicsPath.__interfaces__ = [flash.display.IGraphicsPath,flash.display.IGraphicsData];
flash.display.GraphicsPath.prototype = {
	moveTo: function(x,y) {
		if(this.commands != null && this.data != null) {
			flash._Vector.Vector_Impl_.push(this.commands,1);
			flash._Vector.Vector_Impl_.push(this.data,x);
			flash._Vector.Vector_Impl_.push(this.data,y);
		}
	}
	,lineTo: function(x,y) {
		if(this.commands != null && this.data != null) {
			flash._Vector.Vector_Impl_.push(this.commands,2);
			flash._Vector.Vector_Impl_.push(this.data,x);
			flash._Vector.Vector_Impl_.push(this.data,y);
		}
	}
	,curveTo: function(controlX,controlY,anchorX,anchorY) {
		if(this.commands != null && this.data != null) {
			flash._Vector.Vector_Impl_.push(this.commands,3);
			flash._Vector.Vector_Impl_.push(this.data,anchorX);
			flash._Vector.Vector_Impl_.push(this.data,anchorY);
			flash._Vector.Vector_Impl_.push(this.data,controlX);
			flash._Vector.Vector_Impl_.push(this.data,controlY);
		}
	}
	,__graphicsDataType: null
	,winding: null
	,data: null
	,commands: null
	,__class__: flash.display.GraphicsPath
}
flash.display.GraphicsPathCommand = function() { }
$hxClasses["flash.display.GraphicsPathCommand"] = flash.display.GraphicsPathCommand;
flash.display.GraphicsPathCommand.__name__ = ["flash","display","GraphicsPathCommand"];
flash.display.GraphicsPathWinding = $hxClasses["flash.display.GraphicsPathWinding"] = { __ename__ : true, __constructs__ : ["EVEN_ODD","NON_ZERO"] }
flash.display.GraphicsPathWinding.EVEN_ODD = ["EVEN_ODD",0];
flash.display.GraphicsPathWinding.EVEN_ODD.toString = $estr;
flash.display.GraphicsPathWinding.EVEN_ODD.__enum__ = flash.display.GraphicsPathWinding;
flash.display.GraphicsPathWinding.NON_ZERO = ["NON_ZERO",1];
flash.display.GraphicsPathWinding.NON_ZERO.toString = $estr;
flash.display.GraphicsPathWinding.NON_ZERO.__enum__ = flash.display.GraphicsPathWinding;
flash.display.GraphicsSolidFill = function(color,alpha) {
	if(alpha == null) alpha = 1;
	if(color == null) color = 0;
	this.alpha = alpha;
	this.color = color;
	this.__graphicsDataType = flash.display.GraphicsDataType.SOLID;
	this.__graphicsFillType = flash.display.GraphicsFillType.SOLID_FILL;
};
$hxClasses["flash.display.GraphicsSolidFill"] = flash.display.GraphicsSolidFill;
flash.display.GraphicsSolidFill.__name__ = ["flash","display","GraphicsSolidFill"];
flash.display.GraphicsSolidFill.__interfaces__ = [flash.display.IGraphicsFill,flash.display.IGraphicsData];
flash.display.GraphicsSolidFill.prototype = {
	__graphicsFillType: null
	,__graphicsDataType: null
	,color: null
	,alpha: null
	,__class__: flash.display.GraphicsSolidFill
}
flash.display.IGraphicsStroke = function() { }
$hxClasses["flash.display.IGraphicsStroke"] = flash.display.IGraphicsStroke;
flash.display.IGraphicsStroke.__name__ = ["flash","display","IGraphicsStroke"];
flash.display.GraphicsStroke = function(thickness,pixelHinting,scaleMode,caps,joints,miterLimit,fill) {
	if(miterLimit == null) miterLimit = 3;
	if(pixelHinting == null) pixelHinting = false;
	if(thickness == null) thickness = 0.0;
	this.caps = caps != null?caps:null;
	this.fill = fill;
	this.joints = joints != null?joints:null;
	this.miterLimit = miterLimit;
	this.pixelHinting = pixelHinting;
	this.scaleMode = scaleMode != null?scaleMode:null;
	this.thickness = thickness;
	this.__graphicsDataType = flash.display.GraphicsDataType.STROKE;
};
$hxClasses["flash.display.GraphicsStroke"] = flash.display.GraphicsStroke;
flash.display.GraphicsStroke.__name__ = ["flash","display","GraphicsStroke"];
flash.display.GraphicsStroke.__interfaces__ = [flash.display.IGraphicsStroke,flash.display.IGraphicsData];
flash.display.GraphicsStroke.prototype = {
	__graphicsDataType: null
	,thickness: null
	,scaleMode: null
	,pixelHinting: null
	,miterLimit: null
	,joints: null
	,fill: null
	,caps: null
	,__class__: flash.display.GraphicsStroke
}
flash.display.GraphicsDataType = $hxClasses["flash.display.GraphicsDataType"] = { __ename__ : true, __constructs__ : ["STROKE","SOLID","GRADIENT","PATH"] }
flash.display.GraphicsDataType.STROKE = ["STROKE",0];
flash.display.GraphicsDataType.STROKE.toString = $estr;
flash.display.GraphicsDataType.STROKE.__enum__ = flash.display.GraphicsDataType;
flash.display.GraphicsDataType.SOLID = ["SOLID",1];
flash.display.GraphicsDataType.SOLID.toString = $estr;
flash.display.GraphicsDataType.SOLID.__enum__ = flash.display.GraphicsDataType;
flash.display.GraphicsDataType.GRADIENT = ["GRADIENT",2];
flash.display.GraphicsDataType.GRADIENT.toString = $estr;
flash.display.GraphicsDataType.GRADIENT.__enum__ = flash.display.GraphicsDataType;
flash.display.GraphicsDataType.PATH = ["PATH",3];
flash.display.GraphicsDataType.PATH.toString = $estr;
flash.display.GraphicsDataType.PATH.__enum__ = flash.display.GraphicsDataType;
flash.display.GraphicsFillType = $hxClasses["flash.display.GraphicsFillType"] = { __ename__ : true, __constructs__ : ["SOLID_FILL","GRADIENT_FILL"] }
flash.display.GraphicsFillType.SOLID_FILL = ["SOLID_FILL",0];
flash.display.GraphicsFillType.SOLID_FILL.toString = $estr;
flash.display.GraphicsFillType.SOLID_FILL.__enum__ = flash.display.GraphicsFillType;
flash.display.GraphicsFillType.GRADIENT_FILL = ["GRADIENT_FILL",1];
flash.display.GraphicsFillType.GRADIENT_FILL.toString = $estr;
flash.display.GraphicsFillType.GRADIENT_FILL.__enum__ = flash.display.GraphicsFillType;
flash.display.InterpolationMethod = $hxClasses["flash.display.InterpolationMethod"] = { __ename__ : true, __constructs__ : ["RGB","LINEAR_RGB"] }
flash.display.InterpolationMethod.RGB = ["RGB",0];
flash.display.InterpolationMethod.RGB.toString = $estr;
flash.display.InterpolationMethod.RGB.__enum__ = flash.display.InterpolationMethod;
flash.display.InterpolationMethod.LINEAR_RGB = ["LINEAR_RGB",1];
flash.display.InterpolationMethod.LINEAR_RGB.toString = $estr;
flash.display.InterpolationMethod.LINEAR_RGB.__enum__ = flash.display.InterpolationMethod;
flash.display.JointStyle = $hxClasses["flash.display.JointStyle"] = { __ename__ : true, __constructs__ : ["MITER","ROUND","BEVEL"] }
flash.display.JointStyle.MITER = ["MITER",0];
flash.display.JointStyle.MITER.toString = $estr;
flash.display.JointStyle.MITER.__enum__ = flash.display.JointStyle;
flash.display.JointStyle.ROUND = ["ROUND",1];
flash.display.JointStyle.ROUND.toString = $estr;
flash.display.JointStyle.ROUND.__enum__ = flash.display.JointStyle;
flash.display.JointStyle.BEVEL = ["BEVEL",2];
flash.display.JointStyle.BEVEL.toString = $estr;
flash.display.JointStyle.BEVEL.__enum__ = flash.display.JointStyle;
flash.display.LineScaleMode = $hxClasses["flash.display.LineScaleMode"] = { __ename__ : true, __constructs__ : ["HORIZONTAL","NONE","NORMAL","VERTICAL"] }
flash.display.LineScaleMode.HORIZONTAL = ["HORIZONTAL",0];
flash.display.LineScaleMode.HORIZONTAL.toString = $estr;
flash.display.LineScaleMode.HORIZONTAL.__enum__ = flash.display.LineScaleMode;
flash.display.LineScaleMode.NONE = ["NONE",1];
flash.display.LineScaleMode.NONE.toString = $estr;
flash.display.LineScaleMode.NONE.__enum__ = flash.display.LineScaleMode;
flash.display.LineScaleMode.NORMAL = ["NORMAL",2];
flash.display.LineScaleMode.NORMAL.toString = $estr;
flash.display.LineScaleMode.NORMAL.__enum__ = flash.display.LineScaleMode;
flash.display.LineScaleMode.VERTICAL = ["VERTICAL",3];
flash.display.LineScaleMode.VERTICAL.toString = $estr;
flash.display.LineScaleMode.VERTICAL.__enum__ = flash.display.LineScaleMode;
flash.display.Loader = function() {
	flash.display.Sprite.call(this);
	this.contentLoaderInfo = flash.display.LoaderInfo.create(this);
};
$hxClasses["flash.display.Loader"] = flash.display.Loader;
flash.display.Loader.__name__ = ["flash","display","Loader"];
flash.display.Loader.__super__ = flash.display.Sprite;
flash.display.Loader.prototype = $extend(flash.display.Sprite.prototype,{
	handleLoad: function(e) {
		e.currentTarget = this;
		this.content.__invalidateBounds();
		this.content.__render(null,null);
		this.contentLoaderInfo.removeEventListener(flash.events.Event.COMPLETE,$bind(this,this.handleLoad));
	}
	,validateBounds: function() {
		if(this.get__boundsInvalid()) {
			flash.display.Sprite.prototype.validateBounds.call(this);
			if(this.mImage != null) {
				var r = new flash.geom.Rectangle(0,0,this.mImage.get_width(),this.mImage.get_height());
				if(r.width != 0 || r.height != 0) {
					if(this.__boundsRect.width == 0 && this.__boundsRect.height == 0) this.__boundsRect = r.clone(); else this.__boundsRect.extendBounds(r);
				}
			}
			if(this.scale9Grid != null) {
				this.__boundsRect.width *= this.__scaleX;
				this.__boundsRect.height *= this.__scaleY;
				this.__width = this.__boundsRect.width;
				this.__height = this.__boundsRect.height;
			} else {
				this.__width = this.__boundsRect.width * this.__scaleX;
				this.__height = this.__boundsRect.height * this.__scaleY;
			}
		}
	}
	,toString: function() {
		return "[Loader name=" + this.name + " id=" + this.___id + "]";
	}
	,loadBytes: function(buffer) {
		var _g = this;
		try {
			this.contentLoaderInfo.addEventListener(flash.events.Event.COMPLETE,$bind(this,this.handleLoad),false,2147483647);
			flash.display.BitmapData.loadFromBytes(buffer,null,function(bmd) {
				_g.content = new flash.display.Bitmap(bmd);
				_g.contentLoaderInfo.content = _g.content;
				_g.addChild(_g.content);
				var evt = new flash.events.Event(flash.events.Event.COMPLETE);
				evt.currentTarget = _g;
				_g.contentLoaderInfo.dispatchEvent(evt);
			});
		} catch( e ) {
			haxe.Log.trace("Error " + Std.string(e),{ fileName : "Loader.hx", lineNumber : 123, className : "flash.display.Loader", methodName : "loadBytes"});
			var evt = new flash.events.IOErrorEvent(flash.events.IOErrorEvent.IO_ERROR);
			evt.currentTarget = this;
			this.contentLoaderInfo.dispatchEvent(evt);
		}
	}
	,load: function(request,context) {
		var extension = "";
		var parts = request.url.split(".");
		if(parts.length > 0) extension = parts[parts.length - 1].toLowerCase();
		var transparent = true;
		this.contentLoaderInfo.url = request.url;
		if(request.contentType == null && request.contentType != "") this.contentLoaderInfo.contentType = (function($this) {
			var $r;
			switch(extension) {
			case "swf":
				$r = "application/x-shockwave-flash";
				break;
			case "jpg":case "jpeg":
				$r = (function($this) {
					var $r;
					transparent = false;
					$r = "image/jpeg";
					return $r;
				}($this));
				break;
			case "png":
				$r = "image/png";
				break;
			case "gif":
				$r = "image/gif";
				break;
			default:
				$r = "application/x-www-form-urlencoded";
			}
			return $r;
		}(this)); else this.contentLoaderInfo.contentType = request.contentType;
		this.mImage = new flash.display.BitmapData(0,0,transparent);
		try {
			this.contentLoaderInfo.addEventListener(flash.events.Event.COMPLETE,$bind(this,this.handleLoad),false,2147483647);
			this.mImage.__loadFromFile(request.url,this.contentLoaderInfo);
			this.content = new flash.display.Bitmap(this.mImage);
			this.contentLoaderInfo.content = this.content;
			this.addChild(this.content);
		} catch( e ) {
			haxe.Log.trace("Error " + Std.string(e),{ fileName : "Loader.hx", lineNumber : 86, className : "flash.display.Loader", methodName : "load"});
			var evt = new flash.events.IOErrorEvent(flash.events.IOErrorEvent.IO_ERROR);
			evt.currentTarget = this;
			this.contentLoaderInfo.dispatchEvent(evt);
			return;
		}
		if(this.mShape == null) {
			this.mShape = new flash.display.Shape();
			this.addChild(this.mShape);
		}
	}
	,mShape: null
	,mImage: null
	,contentLoaderInfo: null
	,content: null
	,__class__: flash.display.Loader
});
flash.display.LoaderInfo = function() {
	flash.events.EventDispatcher.call(this);
	this.applicationDomain = flash.system.ApplicationDomain.currentDomain;
	this.bytesLoaded = 0;
	this.bytesTotal = 0;
	this.childAllowsParent = true;
	this.parameters = { };
};
$hxClasses["flash.display.LoaderInfo"] = flash.display.LoaderInfo;
flash.display.LoaderInfo.__name__ = ["flash","display","LoaderInfo"];
flash.display.LoaderInfo.create = function(ldr) {
	var li = new flash.display.LoaderInfo();
	if(ldr != null) li.loader = ldr; else li.url = "";
	return li;
}
flash.display.LoaderInfo.__super__ = flash.events.EventDispatcher;
flash.display.LoaderInfo.prototype = $extend(flash.events.EventDispatcher.prototype,{
	width: null
	,url: null
	,sharedEvents: null
	,sameDomain: null
	,parentAllowsChild: null
	,parameters: null
	,loaderURL: null
	,loader: null
	,height: null
	,frameRate: null
	,contentType: null
	,content: null
	,childAllowsParent: null
	,bytesTotal: null
	,bytesLoaded: null
	,bytes: null
	,applicationDomain: null
	,__class__: flash.display.LoaderInfo
});
flash.display.MovieClip = function() {
	flash.display.Sprite.call(this);
	this.enabled = true;
	this.__currentFrame = 0;
	this.__totalFrames = 0;
	this.loaderInfo = flash.display.LoaderInfo.create(null);
};
$hxClasses["flash.display.MovieClip"] = flash.display.MovieClip;
flash.display.MovieClip.__name__ = ["flash","display","MovieClip"];
flash.display.MovieClip.__super__ = flash.display.Sprite;
flash.display.MovieClip.prototype = $extend(flash.display.Sprite.prototype,{
	get_totalFrames: function() {
		return this.__totalFrames;
	}
	,get_framesLoaded: function() {
		return this.__totalFrames;
	}
	,get_currentFrame: function() {
		return this.__currentFrame;
	}
	,toString: function() {
		return "[MovieClip name=" + this.name + " id=" + this.___id + "]";
	}
	,stop: function() {
	}
	,prevFrame: function() {
	}
	,play: function() {
	}
	,nextFrame: function() {
	}
	,gotoAndStop: function(frame,scene) {
		if(scene == null) scene = "";
	}
	,gotoAndPlay: function(frame,scene) {
		if(scene == null) scene = "";
	}
	,__totalFrames: null
	,__currentFrame: null
	,totalFrames: null
	,framesLoaded: null
	,enabled: null
	,currentFrame: null
	,__class__: flash.display.MovieClip
	,__properties__: $extend(flash.display.Sprite.prototype.__properties__,{get_currentFrame:"get_currentFrame",get_framesLoaded:"get_framesLoaded",get_totalFrames:"get_totalFrames"})
});
flash.display.PixelSnapping = $hxClasses["flash.display.PixelSnapping"] = { __ename__ : true, __constructs__ : ["NEVER","AUTO","ALWAYS"] }
flash.display.PixelSnapping.NEVER = ["NEVER",0];
flash.display.PixelSnapping.NEVER.toString = $estr;
flash.display.PixelSnapping.NEVER.__enum__ = flash.display.PixelSnapping;
flash.display.PixelSnapping.AUTO = ["AUTO",1];
flash.display.PixelSnapping.AUTO.toString = $estr;
flash.display.PixelSnapping.AUTO.__enum__ = flash.display.PixelSnapping;
flash.display.PixelSnapping.ALWAYS = ["ALWAYS",2];
flash.display.PixelSnapping.ALWAYS.toString = $estr;
flash.display.PixelSnapping.ALWAYS.__enum__ = flash.display.PixelSnapping;
flash.display.Shape = function() {
	flash.display.DisplayObject.call(this);
	this.__graphics = new flash.display.Graphics();
};
$hxClasses["flash.display.Shape"] = flash.display.Shape;
flash.display.Shape.__name__ = ["flash","display","Shape"];
flash.display.Shape.__super__ = flash.display.DisplayObject;
flash.display.Shape.prototype = $extend(flash.display.DisplayObject.prototype,{
	get_graphics: function() {
		return this.__graphics;
	}
	,__getObjectUnderPoint: function(point) {
		if(this.parent == null) return null;
		if(this.parent.mouseEnabled && flash.display.DisplayObject.prototype.__getObjectUnderPoint.call(this,point) == this) return this.parent; else return null;
	}
	,__getGraphics: function() {
		return this.__graphics;
	}
	,toString: function() {
		return "[Shape name=" + this.name + " id=" + this.___id + "]";
	}
	,__graphics: null
	,__class__: flash.display.Shape
	,__properties__: $extend(flash.display.DisplayObject.prototype.__properties__,{get_graphics:"get_graphics"})
});
flash.display.SpreadMethod = $hxClasses["flash.display.SpreadMethod"] = { __ename__ : true, __constructs__ : ["REPEAT","REFLECT","PAD"] }
flash.display.SpreadMethod.REPEAT = ["REPEAT",0];
flash.display.SpreadMethod.REPEAT.toString = $estr;
flash.display.SpreadMethod.REPEAT.__enum__ = flash.display.SpreadMethod;
flash.display.SpreadMethod.REFLECT = ["REFLECT",1];
flash.display.SpreadMethod.REFLECT.toString = $estr;
flash.display.SpreadMethod.REFLECT.__enum__ = flash.display.SpreadMethod;
flash.display.SpreadMethod.PAD = ["PAD",2];
flash.display.SpreadMethod.PAD.toString = $estr;
flash.display.SpreadMethod.PAD.__enum__ = flash.display.SpreadMethod;
flash.events.Event = function(inType,inBubbles,inCancelable) {
	if(inCancelable == null) inCancelable = false;
	if(inBubbles == null) inBubbles = false;
	this.type = inType;
	this.bubbles = inBubbles;
	this.cancelable = inCancelable;
	this.__isCancelled = false;
	this.__isCancelledNow = false;
	this.target = null;
	this.currentTarget = null;
	this.eventPhase = flash.events.EventPhase.AT_TARGET;
};
$hxClasses["flash.events.Event"] = flash.events.Event;
flash.events.Event.__name__ = ["flash","events","Event"];
flash.events.Event.prototype = {
	__setPhase: function(phase) {
		this.eventPhase = phase;
	}
	,__getIsCancelledNow: function() {
		return this.__isCancelledNow;
	}
	,__getIsCancelled: function() {
		return this.__isCancelled;
	}
	,__createSimilar: function(type,related,targ) {
		var result = new flash.events.Event(type,this.bubbles,this.cancelable);
		if(targ != null) result.target = targ;
		return result;
	}
	,toString: function() {
		return "[Event type=" + this.type + " bubbles=" + Std.string(this.bubbles) + " cancelable=" + Std.string(this.cancelable) + "]";
	}
	,stopPropagation: function() {
		this.__isCancelled = true;
	}
	,stopImmediatePropagation: function() {
		this.__isCancelled = true;
		this.__isCancelledNow = true;
	}
	,clone: function() {
		return new flash.events.Event(this.type,this.bubbles,this.cancelable);
	}
	,__isCancelledNow: null
	,__isCancelled: null
	,type: null
	,target: null
	,eventPhase: null
	,currentTarget: null
	,cancelable: null
	,bubbles: null
	,__class__: flash.events.Event
}
flash.events.MouseEvent = function(type,bubbles,cancelable,localX,localY,relatedObject,ctrlKey,altKey,shiftKey,buttonDown,delta,commandKey,clickCount) {
	if(clickCount == null) clickCount = 0;
	if(commandKey == null) commandKey = false;
	if(delta == null) delta = 0;
	if(buttonDown == null) buttonDown = false;
	if(shiftKey == null) shiftKey = false;
	if(altKey == null) altKey = false;
	if(ctrlKey == null) ctrlKey = false;
	if(localY == null) localY = 0;
	if(localX == null) localX = 0;
	if(cancelable == null) cancelable = false;
	if(bubbles == null) bubbles = true;
	flash.events.Event.call(this,type,bubbles,cancelable);
	this.shiftKey = shiftKey;
	this.altKey = altKey;
	this.ctrlKey = ctrlKey;
	this.bubbles = bubbles;
	this.relatedObject = relatedObject;
	this.delta = delta;
	this.localX = localX;
	this.localY = localY;
	this.buttonDown = buttonDown;
	this.commandKey = commandKey;
	this.clickCount = clickCount;
};
$hxClasses["flash.events.MouseEvent"] = flash.events.MouseEvent;
flash.events.MouseEvent.__name__ = ["flash","events","MouseEvent"];
flash.events.MouseEvent.__create = function(type,event,local,target) {
	var __mouseDown = false;
	var delta = 2;
	if(type == flash.events.MouseEvent.MOUSE_WHEEL) {
		var mouseEvent = event;
		if(mouseEvent.wheelDelta) delta = mouseEvent.wheelDelta / 120 | 0; else if(mouseEvent.detail) -mouseEvent.detail | 0;
	}
	if(type == flash.events.MouseEvent.MOUSE_DOWN) __mouseDown = event.which != null?event.which == 1:event.button != null?event.button == 0:false; else if(type == flash.events.MouseEvent.MOUSE_UP) {
		if(event.which != null) {
			if(event.which == 1) __mouseDown = false; else if(event.button != null) {
				if(event.button == 0) __mouseDown = false; else __mouseDown = false;
			}
		}
	}
	var pseudoEvent = new flash.events.MouseEvent(type,true,false,local.x,local.y,null,event.ctrlKey,event.altKey,event.shiftKey,__mouseDown,delta);
	pseudoEvent.stageX = flash.Lib.get_current().get_stage().get_mouseX();
	pseudoEvent.stageY = flash.Lib.get_current().get_stage().get_mouseY();
	pseudoEvent.target = target;
	return pseudoEvent;
}
flash.events.MouseEvent.__super__ = flash.events.Event;
flash.events.MouseEvent.prototype = $extend(flash.events.Event.prototype,{
	updateAfterEvent: function() {
	}
	,__createSimilar: function(type,related,targ) {
		var result = new flash.events.MouseEvent(type,this.bubbles,this.cancelable,this.localX,this.localY,related == null?this.relatedObject:related,this.ctrlKey,this.altKey,this.shiftKey,this.buttonDown,this.delta,this.commandKey,this.clickCount);
		if(targ != null) result.target = targ;
		return result;
	}
	,stageY: null
	,stageX: null
	,shiftKey: null
	,relatedObject: null
	,localY: null
	,localX: null
	,delta: null
	,ctrlKey: null
	,clickCount: null
	,commandKey: null
	,buttonDown: null
	,altKey: null
	,__class__: flash.events.MouseEvent
});
flash.display.Stage = function(width,height) {
	flash.display.DisplayObjectContainer.call(this);
	this.__focusObject = null;
	this.__focusObjectActivated = false;
	this.__windowWidth = width;
	this.__windowHeight = height;
	this.stageFocusRect = false;
	this.scaleMode = flash.display.StageScaleMode.SHOW_ALL;
	this.__stageMatrix = new flash.geom.Matrix();
	this.tabEnabled = true;
	this.set_frameRate(0.0);
	this.set_backgroundColor(16777215);
	this.name = "Stage";
	this.loaderInfo = flash.display.LoaderInfo.create(null);
	this.loaderInfo.parameters.width = Std.string(this.__windowWidth);
	this.loaderInfo.parameters.height = Std.string(this.__windowHeight);
	this.__pointInPathMode = flash.display.Graphics.__detectIsPointInPathMode();
	this.__mouseOverObjects = [];
	this.set_showDefaultContextMenu(true);
	this.__touchInfo = [];
	this.__uIEventsQueue = new Array(1000);
	this.__uIEventsQueueIndex = 0;
};
$hxClasses["flash.display.Stage"] = flash.display.Stage;
flash.display.Stage.__name__ = ["flash","display","Stage"];
flash.display.Stage.getOrientation = function() {
	var rotation = window.orientation;
	var orientation = flash.display.Stage.OrientationPortrait;
	switch(rotation) {
	case -90:
		orientation = flash.display.Stage.OrientationLandscapeLeft;
		break;
	case 180:
		orientation = flash.display.Stage.OrientationPortraitUpsideDown;
		break;
	case 90:
		orientation = flash.display.Stage.OrientationLandscapeRight;
		break;
	default:
		orientation = flash.display.Stage.OrientationPortrait;
	}
	return orientation;
}
flash.display.Stage.__super__ = flash.display.DisplayObjectContainer;
flash.display.Stage.prototype = $extend(flash.display.DisplayObjectContainer.prototype,{
	get_stageWidth: function() {
		return this.__windowWidth;
	}
	,get_stageHeight: function() {
		return this.__windowHeight;
	}
	,get_stage: function() {
		return flash.Lib.__getStage();
	}
	,set_showDefaultContextMenu: function(showDefaultContextMenu) {
		if(showDefaultContextMenu != this.__showDefaultContextMenu && this.__showDefaultContextMenu != null) {
			if(!showDefaultContextMenu) flash.Lib.__disableRightClick(); else flash.Lib.__enableRightClick();
		}
		this.__showDefaultContextMenu = showDefaultContextMenu;
		return showDefaultContextMenu;
	}
	,get_showDefaultContextMenu: function() {
		return this.__showDefaultContextMenu;
	}
	,set_quality: function(inQuality) {
		return this.quality = inQuality;
	}
	,get_quality: function() {
		return this.quality != null?this.quality:flash.display.StageQuality.BEST;
	}
	,get_mouseY: function() {
		return this._mouseY;
	}
	,get_mouseX: function() {
		return this._mouseX;
	}
	,get_fullScreenHeight: function() {
		return js.Browser.window.innerHeight;
	}
	,get_fullScreenWidth: function() {
		return js.Browser.window.innerWidth;
	}
	,set_frameRate: function(speed) {
		if(speed == 0) {
			var window = js.Browser.window;
			var __requestAnimationFrame = window.requestAnimationFrame || window.webkitRequestAnimationFrame || window.mozRequestAnimationFrame || window.oRequestAnimationFrame || window.msRequestAnimationFrame;
			if(__requestAnimationFrame == null) speed = 60;
		}
		if(speed != 0) this.__interval = 1000.0 / speed | 0;
		this.__frameRate = speed;
		this.__updateNextWake();
		return speed;
	}
	,get_frameRate: function() {
		return this.__frameRate;
	}
	,set_focus: function(inObj) {
		this.__onFocus(inObj);
		return this.__focusObject;
	}
	,get_focus: function() {
		return this.__focusObject;
	}
	,set_displayState: function(displayState) {
		if(displayState != this.displayState && this.displayState != null) {
			switch( (displayState)[1] ) {
			case 0:
				flash.Lib.__disableFullScreen();
				break;
			case 1:
			case 2:
				flash.Lib.__enableFullScreen();
				break;
			}
		}
		this.displayState = displayState;
		return displayState;
	}
	,get_displayState: function() {
		return this.displayState;
	}
	,set_color: function(col) {
		return this.__backgroundColour = col;
	}
	,get_color: function() {
		return this.__backgroundColour;
	}
	,set_backgroundColor: function(col) {
		return this.__backgroundColour = col;
	}
	,get_backgroundColor: function() {
		return this.__backgroundColour;
	}
	,__onTouch: function(event,touch,type,touchInfo,isPrimaryTouchPoint) {
		var rect = flash.Lib.mMe.__scr.getBoundingClientRect();
		var point = new flash.geom.Point(touch.pageX,touch.pageY);
		var obj = this.__getObjectUnderPoint(point);
		this._mouseX = point.x;
		this._mouseY = point.y;
		var stack = new Array();
		if(obj != null) obj.__getInteractiveObjectStack(stack);
		if(stack.length > 0) {
			stack.reverse();
			var local = obj.globalToLocal(point);
			var evt = flash.events.TouchEvent.__create(type,event,touch,local,obj);
			evt.touchPointID = touch.identifier;
			evt.isPrimaryTouchPoint = isPrimaryTouchPoint;
			this.__checkInOuts(evt,stack,touchInfo);
			obj.__fireEvent(evt);
			var mouseType = (function($this) {
				var $r;
				switch(type) {
				case "touchBegin":
					$r = flash.events.MouseEvent.MOUSE_DOWN;
					break;
				case "touchEnd":
					$r = flash.events.MouseEvent.MOUSE_UP;
					break;
				default:
					$r = (function($this) {
						var $r;
						if($this.__dragObject != null) $this.__drag(point);
						$r = flash.events.MouseEvent.MOUSE_MOVE;
						return $r;
					}($this));
				}
				return $r;
			}(this));
			obj.__fireEvent(flash.events.MouseEvent.__create(mouseType,evt,local,obj));
		} else {
			var evt = flash.events.TouchEvent.__create(type,event,touch,point,null);
			evt.touchPointID = touch.identifier;
			evt.isPrimaryTouchPoint = isPrimaryTouchPoint;
			this.__checkInOuts(evt,stack,touchInfo);
		}
	}
	,__onResize: function(inW,inH) {
		this.__windowWidth = inW;
		this.__windowHeight = inH;
		var event = new flash.events.Event(flash.events.Event.RESIZE);
		event.target = this;
		this.__broadcast(event);
	}
	,__onMouse: function(event,type) {
		var rect = flash.Lib.mMe.__scr.getBoundingClientRect();
		var point = new flash.geom.Point(event.clientX - rect.left,event.clientY - rect.top);
		if(this.__dragObject != null) this.__drag(point);
		var obj = this.__getObjectUnderPoint(point);
		this._mouseX = point.x;
		this._mouseY = point.y;
		var stack = new Array();
		if(obj != null) obj.__getInteractiveObjectStack(stack);
		if(stack.length > 0) {
			stack.reverse();
			var local = obj.globalToLocal(point);
			var evt = flash.events.MouseEvent.__create(type,event,local,obj);
			this.__checkInOuts(evt,stack);
			if(type == flash.events.MouseEvent.MOUSE_DOWN) this.__onFocus(stack[stack.length - 1]);
			obj.__fireEvent(evt);
		} else {
			var evt = flash.events.MouseEvent.__create(type,event,point,null);
			this.__checkInOuts(evt,stack);
		}
	}
	,__onFocus: function(target) {
		if(target != this.__focusObject) {
			if(this.__focusObject != null) this.__focusObject.__fireEvent(new flash.events.FocusEvent(flash.events.FocusEvent.FOCUS_OUT,true,false,this.__focusObject,false,0));
			target.__fireEvent(new flash.events.FocusEvent(flash.events.FocusEvent.FOCUS_IN,true,false,target,false,0));
			this.__focusObject = target;
		}
	}
	,__onKey: function(code,pressed,inChar,ctrl,alt,shift,keyLocation) {
		var stack = new Array();
		if(this.__focusObject == null) this.__getInteractiveObjectStack(stack); else this.__focusObject.__getInteractiveObjectStack(stack);
		if(stack.length > 0) {
			var obj = stack[0];
			var evt = new flash.events.KeyboardEvent(pressed?flash.events.KeyboardEvent.KEY_DOWN:flash.events.KeyboardEvent.KEY_UP,true,false,inChar,code,keyLocation,ctrl,alt,shift);
			obj.__fireEvent(evt);
		}
	}
	,__handleOrientationChange: function() {
	}
	,__handleAccelerometer: function(evt) {
		flash.display.Stage.__acceleration.x = evt.accelerationIncludingGravity.x;
		flash.display.Stage.__acceleration.y = evt.accelerationIncludingGravity.y;
		flash.display.Stage.__acceleration.z = evt.accelerationIncludingGravity.z;
	}
	,__updateNextWake: function() {
		if(this.__frameRate == 0) {
			var __requestAnimationFrame = window.requestAnimationFrame || window.webkitRequestAnimationFrame || window.mozRequestAnimationFrame || window.oRequestAnimationFrame || window.msRequestAnimationFrame;
			__requestAnimationFrame($bind(this,this.__updateNextWake));
			this.__stageRender();
		} else {
			js.Browser.window.clearInterval(this.__timer);
			this.__timer = js.Browser.window.setInterval($bind(this,this.__stageRender),this.__interval);
		}
	}
	,__stopDrag: function(sprite) {
		this.__dragBounds = null;
		this.__dragObject = null;
	}
	,__startDrag: function(sprite,lockCenter,bounds) {
		if(lockCenter == null) lockCenter = false;
		this.__dragBounds = bounds == null?null:bounds.clone();
		this.__dragObject = sprite;
		if(this.__dragObject != null) {
			var mouse = new flash.geom.Point(this._mouseX,this._mouseY);
			var p = this.__dragObject.parent;
			if(p != null) mouse = p.globalToLocal(mouse);
			if(lockCenter) {
				var bounds1 = sprite.getBounds(this);
				this.__dragOffsetX = this.__dragObject.get_x() - (bounds1.width / 2 + bounds1.x);
				this.__dragOffsetY = this.__dragObject.get_y() - (bounds1.height / 2 + bounds1.y);
			} else {
				this.__dragOffsetX = this.__dragObject.get_x() - mouse.x;
				this.__dragOffsetY = this.__dragObject.get_y() - mouse.y;
			}
		}
	}
	,__stageRender: function(_) {
		if(!this.__stageActive) {
			this.__onResize(this.__windowWidth,this.__windowHeight);
			var event = new flash.events.Event(flash.events.Event.ACTIVATE);
			event.target = this;
			this.__broadcast(event);
			this.__stageActive = true;
		}
		var _g1 = 0, _g = this.__uIEventsQueueIndex;
		while(_g1 < _g) {
			var i = _g1++;
			if(this.__uIEventsQueue[i] != null) this.__processStageEvent(this.__uIEventsQueue[i]);
		}
		this.__uIEventsQueueIndex = 0;
		var event = new flash.events.Event(flash.events.Event.ENTER_FRAME);
		this.__broadcast(event);
		if(this.__invalid) {
			var event1 = new flash.events.Event(flash.events.Event.RENDER);
			this.__broadcast(event1);
		}
		this.__renderAll();
	}
	,__renderToCanvas: function(canvas) {
		canvas.width = canvas.width;
		this.__render(canvas);
	}
	,__renderAll: function() {
		this.__render(null,null);
	}
	,__queueStageEvent: function(evt) {
		this.__uIEventsQueue[this.__uIEventsQueueIndex++] = evt;
	}
	,__processStageEvent: function(evt) {
		evt.stopPropagation();
		switch(evt.type) {
		case "resize":
			this.__onResize(flash.Lib.__getWidth(),flash.Lib.__getHeight());
			break;
		case "focus":
			this.__onFocus(this);
			if(!this.__focusObjectActivated) {
				this.__focusObjectActivated = true;
				this.dispatchEvent(new flash.events.Event(flash.events.Event.ACTIVATE));
			}
			break;
		case "blur":
			if(this.__focusObjectActivated) {
				this.__focusObjectActivated = false;
				this.dispatchEvent(new flash.events.Event(flash.events.Event.DEACTIVATE));
			}
			break;
		case "mousemove":
			this.__onMouse(evt,flash.events.MouseEvent.MOUSE_MOVE);
			break;
		case "mousedown":
			this.__onMouse(evt,flash.events.MouseEvent.MOUSE_DOWN);
			break;
		case "mouseup":
			this.__onMouse(evt,flash.events.MouseEvent.MOUSE_UP);
			break;
		case "click":
			this.__onMouse(evt,flash.events.MouseEvent.CLICK);
			break;
		case "mousewheel":
			this.__onMouse(evt,flash.events.MouseEvent.MOUSE_WHEEL);
			break;
		case "dblclick":
			this.__onMouse(evt,flash.events.MouseEvent.DOUBLE_CLICK);
			break;
		case "keydown":
			var evt1 = evt;
			var keyCode = evt1.keyCode != null?evt1.keyCode:evt1.which;
			keyCode = flash.ui.Keyboard.__convertMozillaCode(keyCode);
			this.__onKey(keyCode,true,evt1.charCode,evt1.ctrlKey,evt1.altKey,evt1.shiftKey,evt1.keyLocation);
			break;
		case "keyup":
			var evt1 = evt;
			var keyCode = evt1.keyCode != null?evt1.keyCode:evt1.which;
			keyCode = flash.ui.Keyboard.__convertMozillaCode(keyCode);
			this.__onKey(keyCode,false,evt1.charCode,evt1.ctrlKey,evt1.altKey,evt1.shiftKey,evt1.keyLocation);
			break;
		case "touchstart":
			var evt1 = evt;
			evt1.preventDefault();
			var touchInfo = new flash.display._Stage.TouchInfo();
			this.__touchInfo[evt1.changedTouches[0].identifier] = touchInfo;
			this.__onTouch(evt1,evt1.changedTouches[0],"touchBegin",touchInfo,false);
			break;
		case "touchmove":
			var evt1 = evt;
			evt1.preventDefault();
			var touchInfo = this.__touchInfo[evt1.changedTouches[0].identifier];
			this.__onTouch(evt1,evt1.changedTouches[0],"touchMove",touchInfo,true);
			break;
		case "touchend":
			var evt1 = evt;
			evt1.preventDefault();
			var touchInfo = this.__touchInfo[evt1.changedTouches[0].identifier];
			this.__onTouch(evt1,evt1.changedTouches[0],"touchEnd",touchInfo,true);
			this.__touchInfo[evt1.changedTouches[0].identifier] = null;
			break;
		case "devicemotion":
			var evt1 = evt;
			this.__handleAccelerometer(evt1);
			break;
		case "orientationchange":
			this.__handleOrientationChange();
			break;
		default:
		}
	}
	,__isOnStage: function() {
		return true;
	}
	,__drag: function(point) {
		var p = this.__dragObject.parent;
		if(p != null) point = p.globalToLocal(point);
		var x = point.x + this.__dragOffsetX;
		var y = point.y + this.__dragOffsetY;
		if(this.__dragBounds != null) {
			if(x < this.__dragBounds.x) x = this.__dragBounds.x; else if(x > this.__dragBounds.get_right()) x = this.__dragBounds.get_right();
			if(y < this.__dragBounds.y) y = this.__dragBounds.y; else if(y > this.__dragBounds.get_bottom()) y = this.__dragBounds.get_bottom();
		}
		this.__dragObject.set_x(x);
		this.__dragObject.set_y(y);
	}
	,__checkInOuts: function(event,stack,touchInfo) {
		var prev = touchInfo == null?this.__mouseOverObjects:touchInfo.touchOverObjects;
		var changeEvents = touchInfo == null?flash.display.Stage.__mouseChanges:flash.display.Stage.__touchChanges;
		var new_n = stack.length;
		var new_obj = new_n > 0?stack[new_n - 1]:null;
		var old_n = prev.length;
		var old_obj = old_n > 0?prev[old_n - 1]:null;
		if(new_obj != old_obj) {
			if(old_obj != null) old_obj.__fireEvent(event.__createSimilar(changeEvents[0],new_obj,old_obj));
			if(new_obj != null) new_obj.__fireEvent(event.__createSimilar(changeEvents[1],old_obj,new_obj));
			var common = 0;
			while(common < new_n && common < old_n && stack[common] == prev[common]) common++;
			var rollOut = event.__createSimilar(changeEvents[2],new_obj,old_obj);
			var i = old_n - 1;
			while(i >= common) {
				prev[i].dispatchEvent(rollOut);
				i--;
			}
			var rollOver = event.__createSimilar(changeEvents[3],old_obj);
			var i1 = new_n - 1;
			while(i1 >= common) {
				stack[i1].dispatchEvent(rollOver);
				i1--;
			}
			if(touchInfo == null) this.__mouseOverObjects = stack; else touchInfo.touchOverObjects = stack;
		}
	}
	,toString: function() {
		return "[Stage id=" + this.___id + "]";
	}
	,invalidate: function() {
		this.__invalid = true;
	}
	,_mouseY: null
	,_mouseX: null
	,__windowHeight: null
	,__windowWidth: null
	,__uIEventsQueueIndex: null
	,__uIEventsQueue: null
	,__touchInfo: null
	,__timer: null
	,__stageMatrix: null
	,__stageActive: null
	,__showDefaultContextMenu: null
	,__mouseOverObjects: null
	,__invalid: null
	,__interval: null
	,__frameRate: null
	,__focusObjectActivated: null
	,__focusObject: null
	,__dragOffsetY: null
	,__dragOffsetX: null
	,__dragObject: null
	,__dragBounds: null
	,__backgroundColour: null
	,stageWidth: null
	,stageHeight: null
	,stageFocusRect: null
	,scaleMode: null
	,quality: null
	,__pointInPathMode: null
	,fullScreenWidth: null
	,fullScreenHeight: null
	,displayState: null
	,align: null
	,__class__: flash.display.Stage
	,__properties__: $extend(flash.display.DisplayObjectContainer.prototype.__properties__,{set_backgroundColor:"set_backgroundColor",get_backgroundColor:"get_backgroundColor",set_color:"set_color",get_color:"get_color",set_displayState:"set_displayState",get_displayState:"get_displayState",set_focus:"set_focus",get_focus:"get_focus",set_frameRate:"set_frameRate",get_frameRate:"get_frameRate",get_fullScreenHeight:"get_fullScreenHeight",get_fullScreenWidth:"get_fullScreenWidth",set_quality:"set_quality",get_quality:"get_quality",set_showDefaultContextMenu:"set_showDefaultContextMenu",get_showDefaultContextMenu:"get_showDefaultContextMenu",get_stageHeight:"get_stageHeight",get_stageWidth:"get_stageWidth"})
});
flash.display._Stage = {}
flash.display._Stage.TouchInfo = function() {
	this.touchOverObjects = [];
};
$hxClasses["flash.display._Stage.TouchInfo"] = flash.display._Stage.TouchInfo;
flash.display._Stage.TouchInfo.__name__ = ["flash","display","_Stage","TouchInfo"];
flash.display._Stage.TouchInfo.prototype = {
	touchOverObjects: null
	,__class__: flash.display._Stage.TouchInfo
}
flash.display.StageAlign = $hxClasses["flash.display.StageAlign"] = { __ename__ : true, __constructs__ : ["TOP_RIGHT","TOP_LEFT","TOP","RIGHT","LEFT","BOTTOM_RIGHT","BOTTOM_LEFT","BOTTOM"] }
flash.display.StageAlign.TOP_RIGHT = ["TOP_RIGHT",0];
flash.display.StageAlign.TOP_RIGHT.toString = $estr;
flash.display.StageAlign.TOP_RIGHT.__enum__ = flash.display.StageAlign;
flash.display.StageAlign.TOP_LEFT = ["TOP_LEFT",1];
flash.display.StageAlign.TOP_LEFT.toString = $estr;
flash.display.StageAlign.TOP_LEFT.__enum__ = flash.display.StageAlign;
flash.display.StageAlign.TOP = ["TOP",2];
flash.display.StageAlign.TOP.toString = $estr;
flash.display.StageAlign.TOP.__enum__ = flash.display.StageAlign;
flash.display.StageAlign.RIGHT = ["RIGHT",3];
flash.display.StageAlign.RIGHT.toString = $estr;
flash.display.StageAlign.RIGHT.__enum__ = flash.display.StageAlign;
flash.display.StageAlign.LEFT = ["LEFT",4];
flash.display.StageAlign.LEFT.toString = $estr;
flash.display.StageAlign.LEFT.__enum__ = flash.display.StageAlign;
flash.display.StageAlign.BOTTOM_RIGHT = ["BOTTOM_RIGHT",5];
flash.display.StageAlign.BOTTOM_RIGHT.toString = $estr;
flash.display.StageAlign.BOTTOM_RIGHT.__enum__ = flash.display.StageAlign;
flash.display.StageAlign.BOTTOM_LEFT = ["BOTTOM_LEFT",6];
flash.display.StageAlign.BOTTOM_LEFT.toString = $estr;
flash.display.StageAlign.BOTTOM_LEFT.__enum__ = flash.display.StageAlign;
flash.display.StageAlign.BOTTOM = ["BOTTOM",7];
flash.display.StageAlign.BOTTOM.toString = $estr;
flash.display.StageAlign.BOTTOM.__enum__ = flash.display.StageAlign;
flash.display.StageDisplayState = $hxClasses["flash.display.StageDisplayState"] = { __ename__ : true, __constructs__ : ["NORMAL","FULL_SCREEN","FULL_SCREEN_INTERACTIVE"] }
flash.display.StageDisplayState.NORMAL = ["NORMAL",0];
flash.display.StageDisplayState.NORMAL.toString = $estr;
flash.display.StageDisplayState.NORMAL.__enum__ = flash.display.StageDisplayState;
flash.display.StageDisplayState.FULL_SCREEN = ["FULL_SCREEN",1];
flash.display.StageDisplayState.FULL_SCREEN.toString = $estr;
flash.display.StageDisplayState.FULL_SCREEN.__enum__ = flash.display.StageDisplayState;
flash.display.StageDisplayState.FULL_SCREEN_INTERACTIVE = ["FULL_SCREEN_INTERACTIVE",2];
flash.display.StageDisplayState.FULL_SCREEN_INTERACTIVE.toString = $estr;
flash.display.StageDisplayState.FULL_SCREEN_INTERACTIVE.__enum__ = flash.display.StageDisplayState;
flash.display.StageQuality = function() { }
$hxClasses["flash.display.StageQuality"] = flash.display.StageQuality;
flash.display.StageQuality.__name__ = ["flash","display","StageQuality"];
flash.display.StageScaleMode = $hxClasses["flash.display.StageScaleMode"] = { __ename__ : true, __constructs__ : ["SHOW_ALL","NO_SCALE","NO_BORDER","EXACT_FIT"] }
flash.display.StageScaleMode.SHOW_ALL = ["SHOW_ALL",0];
flash.display.StageScaleMode.SHOW_ALL.toString = $estr;
flash.display.StageScaleMode.SHOW_ALL.__enum__ = flash.display.StageScaleMode;
flash.display.StageScaleMode.NO_SCALE = ["NO_SCALE",1];
flash.display.StageScaleMode.NO_SCALE.toString = $estr;
flash.display.StageScaleMode.NO_SCALE.__enum__ = flash.display.StageScaleMode;
flash.display.StageScaleMode.NO_BORDER = ["NO_BORDER",2];
flash.display.StageScaleMode.NO_BORDER.toString = $estr;
flash.display.StageScaleMode.NO_BORDER.__enum__ = flash.display.StageScaleMode;
flash.display.StageScaleMode.EXACT_FIT = ["EXACT_FIT",3];
flash.display.StageScaleMode.EXACT_FIT.toString = $estr;
flash.display.StageScaleMode.EXACT_FIT.__enum__ = flash.display.StageScaleMode;
flash.errors = {}
flash.errors.Error = function(message,id) {
	if(id == null) id = 0;
	if(message == null) message = "";
	this.message = message;
	this.errorID = id;
};
$hxClasses["flash.errors.Error"] = flash.errors.Error;
flash.errors.Error.__name__ = ["flash","errors","Error"];
flash.errors.Error.prototype = {
	toString: function() {
		if(this.message != null) return this.message; else return "Error";
	}
	,getStackTrace: function() {
		return haxe.CallStack.toString(haxe.CallStack.exceptionStack());
	}
	,name: null
	,message: null
	,errorID: null
	,__class__: flash.errors.Error
}
flash.errors.IOError = function(message) {
	if(message == null) message = "";
	flash.errors.Error.call(this,message);
};
$hxClasses["flash.errors.IOError"] = flash.errors.IOError;
flash.errors.IOError.__name__ = ["flash","errors","IOError"];
flash.errors.IOError.__super__ = flash.errors.Error;
flash.errors.IOError.prototype = $extend(flash.errors.Error.prototype,{
	__class__: flash.errors.IOError
});
flash.errors.SecurityError = function(inMessage) {
	if(inMessage == null) inMessage = "";
	flash.errors.Error.call(this,inMessage,0);
};
$hxClasses["flash.errors.SecurityError"] = flash.errors.SecurityError;
flash.errors.SecurityError.__name__ = ["flash","errors","SecurityError"];
flash.errors.SecurityError.__super__ = flash.errors.Error;
flash.errors.SecurityError.prototype = $extend(flash.errors.Error.prototype,{
	__class__: flash.errors.SecurityError
});
flash.events.TextEvent = function(type,bubbles,cancelable,text) {
	if(text == null) text = "";
	if(cancelable == null) cancelable = false;
	if(bubbles == null) bubbles = false;
	flash.events.Event.call(this,type,bubbles,cancelable);
	this.text = text;
};
$hxClasses["flash.events.TextEvent"] = flash.events.TextEvent;
flash.events.TextEvent.__name__ = ["flash","events","TextEvent"];
flash.events.TextEvent.__super__ = flash.events.Event;
flash.events.TextEvent.prototype = $extend(flash.events.Event.prototype,{
	text: null
	,__class__: flash.events.TextEvent
});
flash.events.ErrorEvent = function(type,bubbles,cancelable,text,id) {
	if(id == null) id = 0;
	flash.events.TextEvent.call(this,type,bubbles,cancelable);
	this.text = text;
	this.errorID = id;
};
$hxClasses["flash.events.ErrorEvent"] = flash.events.ErrorEvent;
flash.events.ErrorEvent.__name__ = ["flash","events","ErrorEvent"];
flash.events.ErrorEvent.__super__ = flash.events.TextEvent;
flash.events.ErrorEvent.prototype = $extend(flash.events.TextEvent.prototype,{
	errorID: null
	,__class__: flash.events.ErrorEvent
});
flash.events.Listener = function(inListener,inUseCapture,inPriority) {
	this.mListner = inListener;
	this.mUseCapture = inUseCapture;
	this.mPriority = inPriority;
	this.mID = flash.events.Listener.sIDs++;
};
$hxClasses["flash.events.Listener"] = flash.events.Listener;
flash.events.Listener.__name__ = ["flash","events","Listener"];
flash.events.Listener.prototype = {
	Is: function(inListener,inCapture) {
		return Reflect.compareMethods(this.mListner,inListener) && this.mUseCapture == inCapture;
	}
	,dispatchEvent: function(event) {
		this.mListner(event);
	}
	,mUseCapture: null
	,mPriority: null
	,mListner: null
	,mID: null
	,__class__: flash.events.Listener
}
flash.events.EventPhase = function() { }
$hxClasses["flash.events.EventPhase"] = flash.events.EventPhase;
flash.events.EventPhase.__name__ = ["flash","events","EventPhase"];
flash.events.FocusEvent = function(type,bubbles,cancelable,inObject,inShiftKey,inKeyCode) {
	if(inKeyCode == null) inKeyCode = 0;
	if(inShiftKey == null) inShiftKey = false;
	if(cancelable == null) cancelable = false;
	if(bubbles == null) bubbles = false;
	flash.events.Event.call(this,type,bubbles,cancelable);
	this.keyCode = inKeyCode;
	this.shiftKey = inShiftKey == null?false:inShiftKey;
	this.target = inObject;
};
$hxClasses["flash.events.FocusEvent"] = flash.events.FocusEvent;
flash.events.FocusEvent.__name__ = ["flash","events","FocusEvent"];
flash.events.FocusEvent.__super__ = flash.events.Event;
flash.events.FocusEvent.prototype = $extend(flash.events.Event.prototype,{
	shiftKey: null
	,relatedObject: null
	,keyCode: null
	,__class__: flash.events.FocusEvent
});
flash.events.HTTPStatusEvent = function(type,bubbles,cancelable,status) {
	if(status == null) status = 0;
	if(cancelable == null) cancelable = false;
	if(bubbles == null) bubbles = false;
	this.status = status;
	flash.events.Event.call(this,type,bubbles,cancelable);
};
$hxClasses["flash.events.HTTPStatusEvent"] = flash.events.HTTPStatusEvent;
flash.events.HTTPStatusEvent.__name__ = ["flash","events","HTTPStatusEvent"];
flash.events.HTTPStatusEvent.__super__ = flash.events.Event;
flash.events.HTTPStatusEvent.prototype = $extend(flash.events.Event.prototype,{
	status: null
	,responseURL: null
	,responseHeaders: null
	,__class__: flash.events.HTTPStatusEvent
});
flash.events.IOErrorEvent = function(type,bubbles,cancelable,inText) {
	if(inText == null) inText = "";
	if(cancelable == null) cancelable = false;
	if(bubbles == null) bubbles = false;
	flash.events.Event.call(this,type,bubbles,cancelable);
	this.text = inText;
};
$hxClasses["flash.events.IOErrorEvent"] = flash.events.IOErrorEvent;
flash.events.IOErrorEvent.__name__ = ["flash","events","IOErrorEvent"];
flash.events.IOErrorEvent.__super__ = flash.events.Event;
flash.events.IOErrorEvent.prototype = $extend(flash.events.Event.prototype,{
	text: null
	,__class__: flash.events.IOErrorEvent
});
flash.events.KeyboardEvent = function(type,bubbles,cancelable,inCharCode,inKeyCode,inKeyLocation,inCtrlKey,inAltKey,inShiftKey,controlKeyValue,commandKeyValue) {
	if(commandKeyValue == null) commandKeyValue = false;
	if(controlKeyValue == null) controlKeyValue = false;
	if(inShiftKey == null) inShiftKey = false;
	if(inAltKey == null) inAltKey = false;
	if(inCtrlKey == null) inCtrlKey = false;
	if(inKeyLocation == null) inKeyLocation = 0;
	if(inKeyCode == null) inKeyCode = 0;
	if(inCharCode == null) inCharCode = 0;
	if(cancelable == null) cancelable = false;
	if(bubbles == null) bubbles = false;
	flash.events.Event.call(this,type,bubbles,cancelable);
	this.altKey = inAltKey == null?false:inAltKey;
	this.charCode = inCharCode == null?0:inCharCode;
	this.ctrlKey = inCtrlKey == null?false:inCtrlKey;
	this.commandKey = commandKeyValue;
	this.controlKey = controlKeyValue;
	this.keyCode = inKeyCode;
	this.keyLocation = inKeyLocation == null?0:inKeyLocation;
	this.shiftKey = inShiftKey == null?false:inShiftKey;
};
$hxClasses["flash.events.KeyboardEvent"] = flash.events.KeyboardEvent;
flash.events.KeyboardEvent.__name__ = ["flash","events","KeyboardEvent"];
flash.events.KeyboardEvent.__super__ = flash.events.Event;
flash.events.KeyboardEvent.prototype = $extend(flash.events.Event.prototype,{
	shiftKey: null
	,keyLocation: null
	,keyCode: null
	,controlKey: null
	,commandKey: null
	,ctrlKey: null
	,charCode: null
	,altKey: null
	,__class__: flash.events.KeyboardEvent
});
flash.events.ProgressEvent = function(type,bubbles,cancelable,bytesLoaded,bytesTotal) {
	if(bytesTotal == null) bytesTotal = 0;
	if(bytesLoaded == null) bytesLoaded = 0;
	if(cancelable == null) cancelable = false;
	if(bubbles == null) bubbles = false;
	flash.events.Event.call(this,type,bubbles,cancelable);
	this.bytesLoaded = bytesLoaded;
	this.bytesTotal = bytesTotal;
};
$hxClasses["flash.events.ProgressEvent"] = flash.events.ProgressEvent;
flash.events.ProgressEvent.__name__ = ["flash","events","ProgressEvent"];
flash.events.ProgressEvent.__super__ = flash.events.Event;
flash.events.ProgressEvent.prototype = $extend(flash.events.Event.prototype,{
	bytesTotal: null
	,bytesLoaded: null
	,__class__: flash.events.ProgressEvent
});
flash.events.SecurityErrorEvent = function(type,bubbles,cancelable,text) {
	if(text == null) text = "";
	if(cancelable == null) cancelable = false;
	if(bubbles == null) bubbles = false;
	flash.events.ErrorEvent.call(this,type,bubbles,cancelable);
	this.text = text;
};
$hxClasses["flash.events.SecurityErrorEvent"] = flash.events.SecurityErrorEvent;
flash.events.SecurityErrorEvent.__name__ = ["flash","events","SecurityErrorEvent"];
flash.events.SecurityErrorEvent.__super__ = flash.events.ErrorEvent;
flash.events.SecurityErrorEvent.prototype = $extend(flash.events.ErrorEvent.prototype,{
	__class__: flash.events.SecurityErrorEvent
});
flash.events.TouchEvent = function(type,bubbles,cancelable,localX,localY,relatedObject,ctrlKey,altKey,shiftKey,buttonDown,delta,commandKey,clickCount) {
	if(clickCount == null) clickCount = 0;
	if(commandKey == null) commandKey = false;
	if(delta == null) delta = 0;
	if(buttonDown == null) buttonDown = false;
	if(shiftKey == null) shiftKey = false;
	if(altKey == null) altKey = false;
	if(ctrlKey == null) ctrlKey = false;
	if(localY == null) localY = 0;
	if(localX == null) localX = 0;
	if(cancelable == null) cancelable = false;
	if(bubbles == null) bubbles = true;
	flash.events.Event.call(this,type,bubbles,cancelable);
	this.shiftKey = shiftKey;
	this.altKey = altKey;
	this.ctrlKey = ctrlKey;
	this.bubbles = bubbles;
	this.relatedObject = relatedObject;
	this.delta = delta;
	this.localX = localX;
	this.localY = localY;
	this.buttonDown = buttonDown;
	this.commandKey = commandKey;
	this.touchPointID = 0;
	this.isPrimaryTouchPoint = true;
};
$hxClasses["flash.events.TouchEvent"] = flash.events.TouchEvent;
flash.events.TouchEvent.__name__ = ["flash","events","TouchEvent"];
flash.events.TouchEvent.__create = function(type,event,touch,local,target) {
	var evt = new flash.events.TouchEvent(type,true,false,local.x,local.y,null,event.ctrlKey,event.altKey,event.shiftKey,false,0,null,0);
	evt.stageX = flash.Lib.get_current().get_stage().get_mouseX();
	evt.stageY = flash.Lib.get_current().get_stage().get_mouseY();
	evt.target = target;
	return evt;
}
flash.events.TouchEvent.__super__ = flash.events.Event;
flash.events.TouchEvent.prototype = $extend(flash.events.Event.prototype,{
	__createSimilar: function(type,related,targ) {
		var result = new flash.events.TouchEvent(type,this.bubbles,this.cancelable,this.localX,this.localY,related == null?this.relatedObject:related,this.ctrlKey,this.altKey,this.shiftKey,this.buttonDown,this.delta,this.commandKey);
		result.touchPointID = this.touchPointID;
		result.isPrimaryTouchPoint = this.isPrimaryTouchPoint;
		if(targ != null) result.target = targ;
		return result;
	}
	,touchPointID: null
	,stageY: null
	,stageX: null
	,shiftKey: null
	,relatedObject: null
	,localY: null
	,localX: null
	,isPrimaryTouchPoint: null
	,delta: null
	,ctrlKey: null
	,commandKey: null
	,buttonDown: null
	,altKey: null
	,__class__: flash.events.TouchEvent
});
flash.filters = {}
flash.filters.BitmapFilter = function(inType) {
	this._mType = inType;
};
$hxClasses["flash.filters.BitmapFilter"] = flash.filters.BitmapFilter;
flash.filters.BitmapFilter.__name__ = ["flash","filters","BitmapFilter"];
flash.filters.BitmapFilter.prototype = {
	__applyFilter: function(surface,rect,refreshCache) {
		if(refreshCache == null) refreshCache = false;
	}
	,__preFilter: function(surface) {
	}
	,clone: function() {
		return new flash.filters.BitmapFilter(this._mType);
	}
	,___cached: null
	,_mType: null
	,__class__: flash.filters.BitmapFilter
}
flash.filters.DropShadowFilter = function(in_distance,in_angle,in_color,in_alpha,in_blurX,in_blurY,in_strength,in_quality,in_inner,in_knockout,in_hideObject) {
	if(in_hideObject == null) in_hideObject = false;
	if(in_knockout == null) in_knockout = false;
	if(in_inner == null) in_inner = false;
	if(in_quality == null) in_quality = 1;
	if(in_strength == null) in_strength = 1.0;
	if(in_blurY == null) in_blurY = 4.0;
	if(in_blurX == null) in_blurX = 4.0;
	if(in_alpha == null) in_alpha = 1.0;
	if(in_color == null) in_color = 0;
	if(in_angle == null) in_angle = 45.0;
	if(in_distance == null) in_distance = 4.0;
	flash.filters.BitmapFilter.call(this,"DropShadowFilter");
	this.distance = in_distance;
	this.angle = in_angle;
	this.color = in_color;
	this.alpha = in_alpha;
	this.blurX = in_blurX;
	this.blurY = in_blurX;
	this.strength = in_strength;
	this.quality = in_quality;
	this.inner = in_inner;
	this.knockout = in_knockout;
	this.hideObject = in_hideObject;
	this.___cached = false;
};
$hxClasses["flash.filters.DropShadowFilter"] = flash.filters.DropShadowFilter;
flash.filters.DropShadowFilter.__name__ = ["flash","filters","DropShadowFilter"];
flash.filters.DropShadowFilter.__super__ = flash.filters.BitmapFilter;
flash.filters.DropShadowFilter.prototype = $extend(flash.filters.BitmapFilter.prototype,{
	__applyFilter: function(surface,rect,refreshCache) {
		if(refreshCache == null) refreshCache = false;
		if(!this.___cached || refreshCache) {
			var distanceX = this.distance * Math.sin(2 * Math.PI * this.angle / 360.0);
			var distanceY = this.distance * Math.cos(2 * Math.PI * this.angle / 360.0);
			var blurRadius = Math.max(this.blurX,this.blurY);
			var context = surface.getContext("2d");
			context.shadowOffsetX = distanceX;
			context.shadowOffsetY = distanceY;
			context.shadowBlur = blurRadius;
			context.shadowColor = "rgba(" + (this.color >> 16 & 255) + "," + (this.color >> 8 & 255) + "," + (this.color & 255) + "," + this.alpha + ")";
			this.___cached = true;
		}
	}
	,clone: function() {
		return new flash.filters.DropShadowFilter(this.distance,this.angle,this.color,this.alpha,this.blurX,this.blurY,this.strength,this.quality,this.inner,this.knockout,this.hideObject);
	}
	,strength: null
	,quality: null
	,knockout: null
	,inner: null
	,hideObject: null
	,distance: null
	,color: null
	,blurY: null
	,blurX: null
	,angle: null
	,alpha: null
	,__class__: flash.filters.DropShadowFilter
});
flash.geom = {}
flash.geom.ColorTransform = function(inRedMultiplier,inGreenMultiplier,inBlueMultiplier,inAlphaMultiplier,inRedOffset,inGreenOffset,inBlueOffset,inAlphaOffset) {
	if(inAlphaOffset == null) inAlphaOffset = 0;
	if(inBlueOffset == null) inBlueOffset = 0;
	if(inGreenOffset == null) inGreenOffset = 0;
	if(inRedOffset == null) inRedOffset = 0;
	if(inAlphaMultiplier == null) inAlphaMultiplier = 1;
	if(inBlueMultiplier == null) inBlueMultiplier = 1;
	if(inGreenMultiplier == null) inGreenMultiplier = 1;
	if(inRedMultiplier == null) inRedMultiplier = 1;
	this.redMultiplier = inRedMultiplier == null?1.0:inRedMultiplier;
	this.greenMultiplier = inGreenMultiplier == null?1.0:inGreenMultiplier;
	this.blueMultiplier = inBlueMultiplier == null?1.0:inBlueMultiplier;
	this.alphaMultiplier = inAlphaMultiplier == null?1.0:inAlphaMultiplier;
	this.redOffset = inRedOffset == null?0.0:inRedOffset;
	this.greenOffset = inGreenOffset == null?0.0:inGreenOffset;
	this.blueOffset = inBlueOffset == null?0.0:inBlueOffset;
	this.alphaOffset = inAlphaOffset == null?0.0:inAlphaOffset;
};
$hxClasses["flash.geom.ColorTransform"] = flash.geom.ColorTransform;
flash.geom.ColorTransform.__name__ = ["flash","geom","ColorTransform"];
flash.geom.ColorTransform.prototype = {
	set_color: function(value) {
		this.redOffset = value >> 16 & 255;
		this.greenOffset = value >> 8 & 255;
		this.blueOffset = value & 255;
		this.redMultiplier = 0;
		this.greenMultiplier = 0;
		this.blueMultiplier = 0;
		return this.get_color();
	}
	,get_color: function() {
		return (this.redOffset | 0) << 16 | (this.greenOffset | 0) << 8 | (this.blueOffset | 0);
	}
	,concat: function(second) {
		this.redMultiplier += second.redMultiplier;
		this.greenMultiplier += second.greenMultiplier;
		this.blueMultiplier += second.blueMultiplier;
		this.alphaMultiplier += second.alphaMultiplier;
	}
	,redOffset: null
	,redMultiplier: null
	,greenOffset: null
	,greenMultiplier: null
	,blueOffset: null
	,blueMultiplier: null
	,alphaOffset: null
	,alphaMultiplier: null
	,__class__: flash.geom.ColorTransform
	,__properties__: {set_color:"set_color",get_color:"get_color"}
}
flash.geom.Matrix = function(in_a,in_b,in_c,in_d,in_tx,in_ty) {
	if(in_ty == null) in_ty = 0;
	if(in_tx == null) in_tx = 0;
	if(in_d == null) in_d = 1;
	if(in_c == null) in_c = 0;
	if(in_b == null) in_b = 0;
	if(in_a == null) in_a = 1;
	this.a = in_a;
	this.b = in_b;
	this.c = in_c;
	this.d = in_d;
	this.set_tx(in_tx);
	this.set_ty(in_ty);
	this._sx = 1.0;
	this._sy = 1.0;
};
$hxClasses["flash.geom.Matrix"] = flash.geom.Matrix;
flash.geom.Matrix.__name__ = ["flash","geom","Matrix"];
flash.geom.Matrix.prototype = {
	set_ty: function(inValue) {
		this.ty = inValue;
		return this.ty;
	}
	,set_tx: function(inValue) {
		this.tx = inValue;
		return this.tx;
	}
	,__translateTransformed: function(inPos) {
		this.set_tx(inPos.x * this.a + inPos.y * this.c + this.tx);
		this.set_ty(inPos.x * this.b + inPos.y * this.d + this.ty);
		this.a = Math.round(this.a * 1000) / 1000;
		this.b = Math.round(this.b * 1000) / 1000;
		this.c = Math.round(this.c * 1000) / 1000;
		this.d = Math.round(this.d * 1000) / 1000;
		this.set_tx(Math.round(this.tx * 10) / 10);
		this.set_ty(Math.round(this.ty * 10) / 10);
	}
	,__transformY: function(inPos) {
		return inPos.x * this.b + inPos.y * this.d + this.ty;
	}
	,__transformX: function(inPos) {
		return inPos.x * this.a + inPos.y * this.c + this.tx;
	}
	,translate: function(inDX,inDY) {
		var m = new flash.geom.Matrix();
		m.set_tx(inDX);
		m.set_ty(inDY);
		this.concat(m);
	}
	,transformPoint: function(inPos) {
		return new flash.geom.Point(inPos.x * this.a + inPos.y * this.c + this.tx,inPos.x * this.b + inPos.y * this.d + this.ty);
	}
	,toString: function() {
		return "matrix(" + this.a + ", " + this.b + ", " + this.c + ", " + this.d + ", " + this.tx + ", " + this.ty + ")";
	}
	,toMozString: function() {
		return "matrix(" + this.a + ", " + this.b + ", " + this.c + ", " + this.d + ", " + this.tx + "px, " + this.ty + "px)";
	}
	,to3DString: function() {
		return "matrix3d(" + this.a + ", " + this.b + ", " + "0, 0, " + this.c + ", " + this.d + ", " + "0, 0, 0, 0, 1, 0, " + this.tx + ", " + this.ty + ", " + "0, 1" + ")";
	}
	,setRotation: function(inTheta,inScale) {
		if(inScale == null) inScale = 1;
		var scale = inScale;
		this.a = Math.cos(inTheta) * scale;
		this.c = Math.sin(inTheta) * scale;
		this.b = -this.c;
		this.d = this.a;
		this.a = Math.round(this.a * 1000) / 1000;
		this.b = Math.round(this.b * 1000) / 1000;
		this.c = Math.round(this.c * 1000) / 1000;
		this.d = Math.round(this.d * 1000) / 1000;
		this.set_tx(Math.round(this.tx * 10) / 10);
		this.set_ty(Math.round(this.ty * 10) / 10);
	}
	,scale: function(inSX,inSY) {
		this._sx = inSX;
		this._sy = inSY;
		this.a *= inSX;
		this.b *= inSY;
		this.c *= inSX;
		this.d *= inSY;
		var _g = this;
		_g.set_tx(_g.tx * inSX);
		var _g = this;
		_g.set_ty(_g.ty * inSY);
		this.a = Math.round(this.a * 1000) / 1000;
		this.b = Math.round(this.b * 1000) / 1000;
		this.c = Math.round(this.c * 1000) / 1000;
		this.d = Math.round(this.d * 1000) / 1000;
		this.set_tx(Math.round(this.tx * 10) / 10);
		this.set_ty(Math.round(this.ty * 10) / 10);
	}
	,rotate: function(inTheta) {
		var cos = Math.cos(inTheta);
		var sin = Math.sin(inTheta);
		var a1 = this.a * cos - this.b * sin;
		this.b = this.a * sin + this.b * cos;
		this.a = a1;
		var c1 = this.c * cos - this.d * sin;
		this.d = this.c * sin + this.d * cos;
		this.c = c1;
		var tx1 = this.tx * cos - this.ty * sin;
		this.set_ty(this.tx * sin + this.ty * cos);
		this.set_tx(tx1);
		this.a = Math.round(this.a * 1000) / 1000;
		this.b = Math.round(this.b * 1000) / 1000;
		this.c = Math.round(this.c * 1000) / 1000;
		this.d = Math.round(this.d * 1000) / 1000;
		this.set_tx(Math.round(this.tx * 10) / 10);
		this.set_ty(Math.round(this.ty * 10) / 10);
	}
	,mult: function(m) {
		var result = this.clone();
		result.concat(m);
		return result;
	}
	,invert: function() {
		var norm = this.a * this.d - this.b * this.c;
		if(norm == 0) {
			this.a = this.b = this.c = this.d = 0;
			this.set_tx(-this.tx);
			this.set_ty(-this.ty);
		} else {
			norm = 1.0 / norm;
			var a1 = this.d * norm;
			this.d = this.a * norm;
			this.a = a1;
			this.b *= -norm;
			this.c *= -norm;
			var tx1 = -this.a * this.tx - this.c * this.ty;
			this.set_ty(-this.b * this.tx - this.d * this.ty);
			this.set_tx(tx1);
		}
		this._sx /= this._sx;
		this._sy /= this._sy;
		this.a = Math.round(this.a * 1000) / 1000;
		this.b = Math.round(this.b * 1000) / 1000;
		this.c = Math.round(this.c * 1000) / 1000;
		this.d = Math.round(this.d * 1000) / 1000;
		this.set_tx(Math.round(this.tx * 10) / 10);
		this.set_ty(Math.round(this.ty * 10) / 10);
		return this;
	}
	,identity: function() {
		this.a = 1;
		this.b = 0;
		this.c = 0;
		this.d = 1;
		this.set_tx(0);
		this.set_ty(0);
		this._sx = 1.0;
		this._sy = 1.0;
	}
	,createGradientBox: function(in_width,in_height,rotation,in_tx,in_ty) {
		if(in_ty == null) in_ty = 0;
		if(in_tx == null) in_tx = 0;
		if(rotation == null) rotation = 0;
		this.a = in_width / 1638.4;
		this.d = in_height / 1638.4;
		if(rotation != null && rotation != 0.0) {
			var cos = Math.cos(rotation);
			var sin = Math.sin(rotation);
			this.b = sin * this.d;
			this.c = -sin * this.a;
			this.a *= cos;
			this.d *= cos;
		} else {
			this.b = 0;
			this.c = 0;
		}
		this.set_tx(in_tx != null?in_tx + in_width / 2:in_width / 2);
		this.set_ty(in_ty != null?in_ty + in_height / 2:in_height / 2);
	}
	,copy: function(m) {
		this.a = m.a;
		this.b = m.b;
		this.c = m.c;
		this.d = m.d;
		this.set_tx(m.tx);
		this.set_ty(m.ty);
		this._sx = m._sx;
		this._sy = m._sy;
	}
	,concat: function(m) {
		var a1 = this.a * m.a + this.b * m.c;
		this.b = this.a * m.b + this.b * m.d;
		this.a = a1;
		var c1 = this.c * m.a + this.d * m.c;
		this.d = this.c * m.b + this.d * m.d;
		this.c = c1;
		var tx1 = this.tx * m.a + this.ty * m.c + m.tx;
		this.set_ty(this.tx * m.b + this.ty * m.d + m.ty);
		this.set_tx(tx1);
		this._sx *= m._sx;
		this._sy *= m._sy;
		this.a = Math.round(this.a * 1000) / 1000;
		this.b = Math.round(this.b * 1000) / 1000;
		this.c = Math.round(this.c * 1000) / 1000;
		this.d = Math.round(this.d * 1000) / 1000;
		this.set_tx(Math.round(this.tx * 10) / 10);
		this.set_ty(Math.round(this.ty * 10) / 10);
	}
	,clone: function() {
		var m = new flash.geom.Matrix(this.a,this.b,this.c,this.d,this.tx,this.ty);
		m._sx = this._sx;
		m._sy = this._sy;
		return m;
	}
	,cleanValues: function() {
		this.a = Math.round(this.a * 1000) / 1000;
		this.b = Math.round(this.b * 1000) / 1000;
		this.c = Math.round(this.c * 1000) / 1000;
		this.d = Math.round(this.d * 1000) / 1000;
		this.set_tx(Math.round(this.tx * 10) / 10);
		this.set_ty(Math.round(this.ty * 10) / 10);
	}
	,_sy: null
	,_sx: null
	,ty: null
	,tx: null
	,d: null
	,c: null
	,b: null
	,a: null
	,__class__: flash.geom.Matrix
	,__properties__: {set_tx:"set_tx",set_ty:"set_ty"}
}
flash.geom.Point = function(inX,inY) {
	if(inY == null) inY = 0;
	if(inX == null) inX = 0;
	this.x = inX;
	this.y = inY;
};
$hxClasses["flash.geom.Point"] = flash.geom.Point;
flash.geom.Point.__name__ = ["flash","geom","Point"];
flash.geom.Point.distance = function(pt1,pt2) {
	var dx = pt1.x - pt2.x;
	var dy = pt1.y - pt2.y;
	return Math.sqrt(dx * dx + dy * dy);
}
flash.geom.Point.interpolate = function(pt1,pt2,f) {
	return new flash.geom.Point(pt2.x + f * (pt1.x - pt2.x),pt2.y + f * (pt1.y - pt2.y));
}
flash.geom.Point.polar = function(len,angle) {
	return new flash.geom.Point(len * Math.cos(angle),len * Math.sin(angle));
}
flash.geom.Point.prototype = {
	get_length: function() {
		return Math.sqrt(this.x * this.x + this.y * this.y);
	}
	,subtract: function(v) {
		return new flash.geom.Point(this.x - v.x,this.y - v.y);
	}
	,setTo: function(xa,ya) {
		this.x = xa;
		this.y = ya;
	}
	,offset: function(dx,dy) {
		this.x += dx;
		this.y += dy;
	}
	,normalize: function(thickness) {
		if(this.x == 0 && this.y == 0) return; else {
			var norm = thickness / Math.sqrt(this.x * this.x + this.y * this.y);
			this.x *= norm;
			this.y *= norm;
		}
	}
	,equals: function(toCompare) {
		return toCompare.x == this.x && toCompare.y == this.y;
	}
	,clone: function() {
		return new flash.geom.Point(this.x,this.y);
	}
	,add: function(v) {
		return new flash.geom.Point(v.x + this.x,v.y + this.y);
	}
	,y: null
	,x: null
	,length: null
	,__class__: flash.geom.Point
	,__properties__: {get_length:"get_length"}
}
flash.geom.Rectangle = function(inX,inY,inWidth,inHeight) {
	if(inHeight == null) inHeight = 0;
	if(inWidth == null) inWidth = 0;
	if(inY == null) inY = 0;
	if(inX == null) inX = 0;
	this.x = inX;
	this.y = inY;
	this.width = inWidth;
	this.height = inHeight;
};
$hxClasses["flash.geom.Rectangle"] = flash.geom.Rectangle;
flash.geom.Rectangle.__name__ = ["flash","geom","Rectangle"];
flash.geom.Rectangle.prototype = {
	set_topLeft: function(p) {
		this.x = p.x;
		this.y = p.y;
		return p.clone();
	}
	,get_topLeft: function() {
		return new flash.geom.Point(this.x,this.y);
	}
	,set_top: function(t) {
		this.height -= t - this.y;
		this.y = t;
		return t;
	}
	,get_top: function() {
		return this.y;
	}
	,set_size: function(p) {
		this.width = p.x;
		this.height = p.y;
		return p.clone();
	}
	,get_size: function() {
		return new flash.geom.Point(this.width,this.height);
	}
	,set_right: function(r) {
		this.width = r - this.x;
		return r;
	}
	,get_right: function() {
		return this.x + this.width;
	}
	,set_left: function(l) {
		this.width -= l - this.x;
		this.x = l;
		return l;
	}
	,get_left: function() {
		return this.x;
	}
	,set_bottomRight: function(p) {
		this.width = p.x - this.x;
		this.height = p.y - this.y;
		return p.clone();
	}
	,get_bottomRight: function() {
		return new flash.geom.Point(this.x + this.width,this.y + this.height);
	}
	,set_bottom: function(b) {
		this.height = b - this.y;
		return b;
	}
	,get_bottom: function() {
		return this.y + this.height;
	}
	,union: function(toUnion) {
		var x0 = this.x > toUnion.x?toUnion.x:this.x;
		var x1 = this.get_right() < toUnion.get_right()?toUnion.get_right():this.get_right();
		var y0 = this.y > toUnion.y?toUnion.y:this.y;
		var y1 = this.get_bottom() < toUnion.get_bottom()?toUnion.get_bottom():this.get_bottom();
		return new flash.geom.Rectangle(x0,y0,x1 - x0,y1 - y0);
	}
	,transform: function(m) {
		var tx0 = m.a * this.x + m.c * this.y;
		var tx1 = tx0;
		var ty0 = m.b * this.x + m.d * this.y;
		var ty1 = tx0;
		var tx = m.a * (this.x + this.width) + m.c * this.y;
		var ty = m.b * (this.x + this.width) + m.d * this.y;
		if(tx < tx0) tx0 = tx;
		if(ty < ty0) ty0 = ty;
		if(tx > tx1) tx1 = tx;
		if(ty > ty1) ty1 = ty;
		tx = m.a * (this.x + this.width) + m.c * (this.y + this.height);
		ty = m.b * (this.x + this.width) + m.d * (this.y + this.height);
		if(tx < tx0) tx0 = tx;
		if(ty < ty0) ty0 = ty;
		if(tx > tx1) tx1 = tx;
		if(ty > ty1) ty1 = ty;
		tx = m.a * this.x + m.c * (this.y + this.height);
		ty = m.b * this.x + m.d * (this.y + this.height);
		if(tx < tx0) tx0 = tx;
		if(ty < ty0) ty0 = ty;
		if(tx > tx1) tx1 = tx;
		if(ty > ty1) ty1 = ty;
		return new flash.geom.Rectangle(tx0 + m.tx,ty0 + m.ty,tx1 - tx0,ty1 - ty0);
	}
	,setEmpty: function() {
		this.x = this.y = this.width = this.height = 0;
	}
	,offsetPoint: function(point) {
		this.x += point.x;
		this.y += point.y;
	}
	,offset: function(dx,dy) {
		this.x += dx;
		this.y += dy;
	}
	,isEmpty: function() {
		return this.width <= 0 || this.height <= 0;
	}
	,intersects: function(toIntersect) {
		var x0 = this.x < toIntersect.x?toIntersect.x:this.x;
		var x1 = this.get_right() > toIntersect.get_right()?toIntersect.get_right():this.get_right();
		if(x1 <= x0) return false;
		var y0 = this.y < toIntersect.y?toIntersect.y:this.y;
		var y1 = this.get_bottom() > toIntersect.get_bottom()?toIntersect.get_bottom():this.get_bottom();
		return y1 > y0;
	}
	,intersection: function(toIntersect) {
		var x0 = this.x < toIntersect.x?toIntersect.x:this.x;
		var x1 = this.get_right() > toIntersect.get_right()?toIntersect.get_right():this.get_right();
		if(x1 <= x0) return new flash.geom.Rectangle();
		var y0 = this.y < toIntersect.y?toIntersect.y:this.y;
		var y1 = this.get_bottom() > toIntersect.get_bottom()?toIntersect.get_bottom():this.get_bottom();
		if(y1 <= y0) return new flash.geom.Rectangle();
		return new flash.geom.Rectangle(x0,y0,x1 - x0,y1 - y0);
	}
	,inflatePoint: function(point) {
		this.inflate(point.x,point.y);
	}
	,inflate: function(dx,dy) {
		this.x -= dx;
		this.width += dx * 2;
		this.y -= dy;
		this.height += dy * 2;
	}
	,extendBounds: function(r) {
		var dx = this.x - r.x;
		if(dx > 0) {
			this.x -= dx;
			this.width += dx;
		}
		var dy = this.y - r.y;
		if(dy > 0) {
			this.y -= dy;
			this.height += dy;
		}
		if(r.get_right() > this.get_right()) this.set_right(r.get_right());
		if(r.get_bottom() > this.get_bottom()) this.set_bottom(r.get_bottom());
	}
	,equals: function(toCompare) {
		return this.x == toCompare.x && this.y == toCompare.y && this.width == toCompare.width && this.height == toCompare.height;
	}
	,containsRect: function(rect) {
		if(rect.width <= 0 || rect.height <= 0) return rect.x > this.x && rect.y > this.y && rect.get_right() < this.get_right() && rect.get_bottom() < this.get_bottom(); else return rect.x >= this.x && rect.y >= this.y && rect.get_right() <= this.get_right() && rect.get_bottom() <= this.get_bottom();
	}
	,containsPoint: function(point) {
		return this.contains(point.x,point.y);
	}
	,contains: function(inX,inY) {
		return inX >= this.x && inY >= this.y && inX < this.get_right() && inY < this.get_bottom();
	}
	,clone: function() {
		return new flash.geom.Rectangle(this.x,this.y,this.width,this.height);
	}
	,y: null
	,x: null
	,width: null
	,height: null
	,__class__: flash.geom.Rectangle
	,__properties__: {set_bottom:"set_bottom",get_bottom:"get_bottom",set_bottomRight:"set_bottomRight",get_bottomRight:"get_bottomRight",set_left:"set_left",get_left:"get_left",set_right:"set_right",get_right:"get_right",set_size:"set_size",get_size:"get_size",set_top:"set_top",get_top:"get_top",set_topLeft:"set_topLeft",get_topLeft:"get_topLeft"}
}
flash.geom.Transform = function(displayObject) {
	if(displayObject == null) throw "Cannot create Transform with no DisplayObject.";
	this._displayObject = displayObject;
	this._matrix = new flash.geom.Matrix();
	this._fullMatrix = new flash.geom.Matrix();
	this.set_colorTransform(new flash.geom.ColorTransform());
};
$hxClasses["flash.geom.Transform"] = flash.geom.Transform;
flash.geom.Transform.__name__ = ["flash","geom","Transform"];
flash.geom.Transform.prototype = {
	get_pixelBounds: function() {
		return this._displayObject.getBounds(null);
	}
	,set_matrix: function(inValue) {
		this._matrix.copy(inValue);
		this._displayObject.__matrixOverridden();
		return this._matrix;
	}
	,get_matrix: function() {
		return this._matrix.clone();
	}
	,get_concatenatedMatrix: function() {
		return this.__getFullMatrix(this._matrix);
	}
	,set_colorTransform: function(inValue) {
		this.colorTransform = inValue;
		return inValue;
	}
	,__setMatrix: function(inValue) {
		this._matrix.copy(inValue);
	}
	,__setFullMatrix: function(inValue) {
		this._fullMatrix.copy(inValue);
		return this._fullMatrix;
	}
	,__getFullMatrix: function(localMatrix) {
		var m;
		if(localMatrix != null) m = localMatrix.mult(this._fullMatrix); else m = this._fullMatrix.clone();
		return m;
	}
	,_matrix: null
	,_fullMatrix: null
	,_displayObject: null
	,concatenatedMatrix: null
	,colorTransform: null
	,__class__: flash.geom.Transform
	,__properties__: {set_colorTransform:"set_colorTransform",get_concatenatedMatrix:"get_concatenatedMatrix",set_matrix:"set_matrix",get_matrix:"get_matrix",get_pixelBounds:"get_pixelBounds"}
}
flash.media = {}
flash.media.Sound = function(stream,ctx) {
	flash.events.EventDispatcher.call(this);
	if(stream != null) this.load(stream,ctx);
};
$hxClasses["flash.media.Sound"] = flash.media.Sound;
flash.media.Sound.__name__ = ["flash","media","Sound"];
flash.media.Sound.canPlayType = function(o) {
	var f, v;
	o = o.toLowerCase();
	if(flash.media.Sound.canPlayMap != null) {
		if(flash.media.Sound.canPlayMap.exists(o)) return flash.media.Sound.canPlayMap.get(o);
	} else flash.media.Sound.canPlayMap = new haxe.ds.StringMap();
	f = flash.media.Sound.getFormatType(o);
	v = new Audio().canPlayType(f) != "no";
	flash.media.Sound.canPlayMap.set(o,v);
	return v;
}
flash.media.Sound.getFormatType = function(o) {
	return o == "mp3"?"audio/mpeg;":o == "ogg"?"audio/ogg; codecs=\"vorbis\"":null;
}
flash.media.Sound.__super__ = flash.events.EventDispatcher;
flash.media.Sound.prototype = $extend(flash.events.EventDispatcher.prototype,{
	get_length: function() {
		return this.component != null?this.component.duration * 1000:0;
	}
	,play: function(ofs,loops,stf) {
		if(loops == null) loops = 0;
		if(ofs == null) ofs = 0;
		var o, i;
		if(this.qCache.length == 0) {
			(o = new flash.media.SoundChannel()).init(this,this.component,loops);
			this.component = this.component.cloneNode(true);
		} else {
			o = this.qCache[0];
			var _g = 0, _g1 = this.qCache;
			while(_g < _g1.length) {
				var v = _g1[_g];
				++_g;
				if(v.component.currentTime * 1000 == ofs) {
					o = v;
					break;
				}
			}
			HxOverrides.remove(this.qCache,o);
		}
		o.set_soundTransform(stf);
		try {
			o._loops = loops;
			o.play(ofs);
		} catch( e ) {
			flash.Lib.trace(e);
		}
		return o;
	}
	,load: function(stream,ctx) {
		var s = stream.url, m = flash.media.Sound.library;
		if(m != null && m.exists(s)) {
			this.component = m.get(s);
			flash.media.Sound.library.set(s,this.component.cloneNode(true));
		} else this.component = new Audio(s);
		this.qCache = [];
	}
	,close: function() {
		if(this.component != null) this.component = null; else throw new flash.errors.IOError("Attempt to close unexisting stream.");
	}
	,length: null
	,qCache: null
	,component: null
	,id3: null
	,__class__: flash.media.Sound
	,__properties__: {get_length:"get_length"}
});
flash.media.SoundChannel = function() {
	this._loops = 1;
	this.active = false;
	this.rightPeak = 1;
	this.leftPeak = 1;
	flash.events.EventDispatcher.call(this);
};
$hxClasses["flash.media.SoundChannel"] = flash.media.SoundChannel;
flash.media.SoundChannel.__name__ = ["flash","media","SoundChannel"];
flash.media.SoundChannel.__super__ = flash.events.EventDispatcher;
flash.media.SoundChannel.prototype = $extend(flash.events.EventDispatcher.prototype,{
	onEnded: function(e) {
		if(this.active) {
			if(--this._loops > 0) {
				this.set_position(this._position);
				if(this.component.paused) this.component.play();
			} else {
				this.stop();
				this.component.currentTime = 0;
				this.dispatchEvent(new flash.events.Event(flash.events.Event.SOUND_COMPLETE));
			}
		}
	}
	,set_position: function(v) {
		if(this.component.currentTime != v / 1000) {
			var p = !this.component.paused;
			if(p) this.component.pause();
			this.component.currentTime = v / 1000;
			if(p) this.component.play();
		}
		return v;
	}
	,get_position: function() {
		return this.component.currentTime * 1000;
	}
	,get_duration: function() {
		var o = this.component, f;
		try {
			f = o.buffered != null?o.buffered.end(0):o.duration;
		} catch( _ ) {
			f = o.duration;
			if(Math.isNaN(f)) f = 0;
		}
		return f;
	}
	,set_soundTransform: function(v) {
		this.soundTransform = v;
		this.component.volume = v != null?v.volume:1;
		return v;
	}
	,stop: function() {
		if(this.active) {
			this.active = false;
			this.component.pause();
			this.qSound.qCache.push(this);
		}
	}
	,play: function(p) {
		var o = this.component, l;
		if(!this.active) {
			l = this.get_duration();
			if(p == 0 || p / 1000 <= l) {
				this._position = this.set_position(p);
				o.load();
				o.play();
				this.active = true;
			} else {
				this.set_position(0);
				o.load();
				o.play();
				o.pause();
				this.qSound.qCache.push(this);
			}
		}
	}
	,init: function(q,v,loops) {
		if(loops == null) loops = 1;
		this.qSound = q;
		this.component = v;
		this._loops = loops;
		this.component.addEventListener("ended",$bind(this,this.onEnded));
	}
	,_loops: null
	,_position: null
	,active: null
	,qSound: null
	,component: null
	,soundTransform: null
	,rightPeak: null
	,leftPeak: null
	,__class__: flash.media.SoundChannel
	,__properties__: {set_soundTransform:"set_soundTransform",set_position:"set_position",get_position:"get_position"}
});
flash.media.SoundHTML5 = function(stream) {
	if(stream != null) this.load(stream);
};
$hxClasses["flash.media.SoundHTML5"] = flash.media.SoundHTML5;
flash.media.SoundHTML5.__name__ = ["flash","media","SoundHTML5"];
flash.media.SoundHTML5.prototype = {
	get_length: function() {
		return 0;
	}
	,play: function() {
		this.s.play();
	}
	,load: function(stream) {
		this.s = eval(" function getSound () { " + " var sound = new Howl({ " + " urls: ['" + stream + ".mp3', '" + stream + ".ogg'] " + " }); " + " return sound; " + " } " + " getSound(); ");
	}
	,close: function() {
	}
	,s: null
	,__class__: flash.media.SoundHTML5
}
flash.media.SoundLoaderContext = function(bufferTime,checkPolicyFile) {
	if(checkPolicyFile == null) checkPolicyFile = false;
	if(bufferTime == null) bufferTime = 0;
	this.bufferTime = bufferTime;
	this.checkPolicyFile = checkPolicyFile;
};
$hxClasses["flash.media.SoundLoaderContext"] = flash.media.SoundLoaderContext;
flash.media.SoundLoaderContext.__name__ = ["flash","media","SoundLoaderContext"];
flash.media.SoundLoaderContext.prototype = {
	checkPolicyFile: null
	,bufferTime: null
	,__class__: flash.media.SoundLoaderContext
}
flash.media.SoundTransform = function(vol,panning) {
	if(panning == null) panning = 0;
	if(vol == null) vol = 1;
	this.volume = vol;
	this.pan = panning;
};
$hxClasses["flash.media.SoundTransform"] = flash.media.SoundTransform;
flash.media.SoundTransform.__name__ = ["flash","media","SoundTransform"];
flash.media.SoundTransform.prototype = {
	volume: null
	,rightToRight: null
	,rightToLeft: null
	,pan: null
	,leftToRight: null
	,leftToLeft: null
	,__class__: flash.media.SoundTransform
}
flash.net = {}
flash.net.URLLoader = function(request) {
	flash.events.EventDispatcher.call(this);
	this.bytesLoaded = 0;
	this.bytesTotal = 0;
	this.set_dataFormat(flash.net.URLLoaderDataFormat.TEXT);
	if(request != null) this.load(request);
};
$hxClasses["flash.net.URLLoader"] = flash.net.URLLoader;
flash.net.URLLoader.__name__ = ["flash","net","URLLoader"];
flash.net.URLLoader.__super__ = flash.events.EventDispatcher;
flash.net.URLLoader.prototype = $extend(flash.events.EventDispatcher.prototype,{
	set_dataFormat: function(inputVal) {
		if(inputVal == flash.net.URLLoaderDataFormat.BINARY && !Reflect.hasField(js.Browser.window,"ArrayBuffer")) this.dataFormat = flash.net.URLLoaderDataFormat.TEXT; else this.dataFormat = inputVal;
		return this.dataFormat;
	}
	,onStatus: function(status) {
		var evt = new flash.events.HTTPStatusEvent(flash.events.HTTPStatusEvent.HTTP_STATUS,false,false,status);
		evt.currentTarget = this;
		this.dispatchEvent(evt);
	}
	,onSecurityError: function(msg) {
		var evt = new flash.events.SecurityErrorEvent(flash.events.SecurityErrorEvent.SECURITY_ERROR);
		evt.text = msg;
		evt.currentTarget = this;
		this.dispatchEvent(evt);
	}
	,onProgress: function(event) {
		var evt = new flash.events.ProgressEvent(flash.events.ProgressEvent.PROGRESS);
		evt.currentTarget = this;
		evt.bytesLoaded = event.loaded;
		evt.bytesTotal = event.total;
		this.dispatchEvent(evt);
	}
	,onOpen: function() {
		var evt = new flash.events.Event(flash.events.Event.OPEN);
		evt.currentTarget = this;
		this.dispatchEvent(evt);
	}
	,onError: function(msg) {
		var evt = new flash.events.IOErrorEvent(flash.events.IOErrorEvent.IO_ERROR);
		evt.text = msg;
		evt.currentTarget = this;
		this.dispatchEvent(evt);
	}
	,onData: function(_) {
		var content = this.getData();
		var _g = this;
		switch( (_g.dataFormat)[1] ) {
		case 0:
			this.data = flash.utils.ByteArray.__ofBuffer(content);
			break;
		default:
			this.data = Std.string(content);
		}
		var evt = new flash.events.Event(flash.events.Event.COMPLETE);
		evt.currentTarget = this;
		this.dispatchEvent(evt);
	}
	,requestUrl: function(url,method,data,requestHeaders) {
		var xmlHttpRequest = new XMLHttpRequest();
		this.registerEvents(xmlHttpRequest);
		var uri = "";
		if(js.Boot.__instanceof(data,flash.utils.ByteArray)) {
			var data1 = data;
			var _g = this;
			switch( (_g.dataFormat)[1] ) {
			case 0:
				uri = data1.data.buffer;
				break;
			default:
				uri = data1.readUTFBytes(data1.length);
			}
		} else if(js.Boot.__instanceof(data,flash.net.URLVariables)) {
			var data1 = data;
			var _g = 0, _g1 = Reflect.fields(data1);
			while(_g < _g1.length) {
				var p = _g1[_g];
				++_g;
				if(uri.length != 0) uri += "&";
				uri += StringTools.urlEncode(p) + "=" + StringTools.urlEncode(Reflect.field(data1,p));
			}
		} else if(data != null) uri = data.toString();
		try {
			if(method == "GET" && uri != null && uri != "") {
				var question = url.split("?").length <= 1;
				xmlHttpRequest.open(method,url + (question?"?":"&") + Std.string(uri),true);
				uri = "";
			} else xmlHttpRequest.open(method,url,true);
		} catch( e ) {
			this.onError(e.toString());
			return;
		}
		var _g = this;
		switch( (_g.dataFormat)[1] ) {
		case 0:
			xmlHttpRequest.responseType = "arraybuffer";
			break;
		default:
		}
		var _g1 = 0;
		while(_g1 < requestHeaders.length) {
			var header = requestHeaders[_g1];
			++_g1;
			xmlHttpRequest.setRequestHeader(header.name,header.value);
		}
		xmlHttpRequest.send(uri);
		this.onOpen();
		this.getData = function() {
			if(xmlHttpRequest.response != null) return xmlHttpRequest.response; else return xmlHttpRequest.responseText;
		};
	}
	,registerEvents: function(subject) {
		var self = this;
		if(typeof XMLHttpRequestProgressEvent != "undefined") subject.addEventListener("progress",$bind(this,this.onProgress),false);
		subject.onreadystatechange = function() {
			if(subject.readyState != 4) return;
			var s = (function($this) {
				var $r;
				try {
					$r = subject.status;
				} catch( e ) {
					$r = null;
				}
				return $r;
			}(this));
			if(s == undefined) s = null;
			if(s != null) self.onStatus(s);
			if(s != null && s >= 200 && s < 400) self.onData(subject.response); else if(s == null) self.onError("Failed to connect or resolve host"); else if(s == 12029) self.onError("Failed to connect to host"); else if(s == 12007) self.onError("Unknown host"); else if(s == 0) {
				self.onError("Unable to make request (may be blocked due to cross-domain permissions)");
				self.onSecurityError("Unable to make request (may be blocked due to cross-domain permissions)");
			} else self.onError("Http Error #" + subject.status);
		};
	}
	,load: function(request) {
		this.requestUrl(request.url,request.method,request.data,request.formatRequestHeaders());
	}
	,getData: function() {
		return null;
	}
	,close: function() {
	}
	,dataFormat: null
	,data: null
	,bytesTotal: null
	,bytesLoaded: null
	,__class__: flash.net.URLLoader
	,__properties__: {set_dataFormat:"set_dataFormat"}
});
flash.net.URLLoaderDataFormat = $hxClasses["flash.net.URLLoaderDataFormat"] = { __ename__ : true, __constructs__ : ["BINARY","TEXT","VARIABLES"] }
flash.net.URLLoaderDataFormat.BINARY = ["BINARY",0];
flash.net.URLLoaderDataFormat.BINARY.toString = $estr;
flash.net.URLLoaderDataFormat.BINARY.__enum__ = flash.net.URLLoaderDataFormat;
flash.net.URLLoaderDataFormat.TEXT = ["TEXT",1];
flash.net.URLLoaderDataFormat.TEXT.toString = $estr;
flash.net.URLLoaderDataFormat.TEXT.__enum__ = flash.net.URLLoaderDataFormat;
flash.net.URLLoaderDataFormat.VARIABLES = ["VARIABLES",2];
flash.net.URLLoaderDataFormat.VARIABLES.toString = $estr;
flash.net.URLLoaderDataFormat.VARIABLES.__enum__ = flash.net.URLLoaderDataFormat;
flash.net.URLRequest = function(inURL) {
	if(inURL != null) this.url = inURL;
	this.requestHeaders = [];
	this.method = flash.net.URLRequestMethod.GET;
	this.contentType = null;
};
$hxClasses["flash.net.URLRequest"] = flash.net.URLRequest;
flash.net.URLRequest.__name__ = ["flash","net","URLRequest"];
flash.net.URLRequest.prototype = {
	formatRequestHeaders: function() {
		var res = this.requestHeaders;
		if(res == null) res = [];
		if(this.method == flash.net.URLRequestMethod.GET || this.data == null) return res;
		if(js.Boot.__instanceof(this.data,String) || js.Boot.__instanceof(this.data,flash.utils.ByteArray)) {
			res = res.slice();
			res.push(new flash.net.URLRequestHeader("Content-Type",this.contentType != null?this.contentType:"application/x-www-form-urlencoded"));
		}
		return res;
	}
	,url: null
	,requestHeaders: null
	,method: null
	,data: null
	,contentType: null
	,__class__: flash.net.URLRequest
}
flash.net.URLRequestHeader = function(name,value) {
	if(value == null) value = "";
	if(name == null) name = "";
	this.name = name;
	this.value = value;
};
$hxClasses["flash.net.URLRequestHeader"] = flash.net.URLRequestHeader;
flash.net.URLRequestHeader.__name__ = ["flash","net","URLRequestHeader"];
flash.net.URLRequestHeader.prototype = {
	value: null
	,name: null
	,__class__: flash.net.URLRequestHeader
}
flash.net.URLRequestMethod = function() { }
$hxClasses["flash.net.URLRequestMethod"] = flash.net.URLRequestMethod;
flash.net.URLRequestMethod.__name__ = ["flash","net","URLRequestMethod"];
flash.net.URLVariables = function(inEncoded) {
	if(inEncoded != null) this.decode(inEncoded);
};
$hxClasses["flash.net.URLVariables"] = flash.net.URLVariables;
flash.net.URLVariables.__name__ = ["flash","net","URLVariables"];
flash.net.URLVariables.prototype = {
	toString: function() {
		var result = new Array();
		var fields = Reflect.fields(this);
		var _g = 0;
		while(_g < fields.length) {
			var f = fields[_g];
			++_g;
			result.push(StringTools.urlEncode(f) + "=" + StringTools.urlEncode(Reflect.field(this,f)));
		}
		return result.join("&");
	}
	,decode: function(inVars) {
		var fields = Reflect.fields(this);
		var _g = 0;
		while(_g < fields.length) {
			var f = fields[_g];
			++_g;
			Reflect.deleteField(this,f);
		}
		var fields1 = inVars.split(";").join("&").split("&");
		var _g = 0;
		while(_g < fields1.length) {
			var f = fields1[_g];
			++_g;
			var eq = f.indexOf("=");
			if(eq > 0) this[StringTools.urlDecode(HxOverrides.substr(f,0,eq))] = StringTools.urlDecode(HxOverrides.substr(f,eq + 1,null)); else if(eq != 0) this[StringTools.urlDecode(f)] = "";
		}
	}
	,__class__: flash.net.URLVariables
}
flash.system = {}
flash.system.ApplicationDomain = function(parentDomain) {
	if(parentDomain != null) this.parentDomain = parentDomain; else this.parentDomain = flash.system.ApplicationDomain.currentDomain;
};
$hxClasses["flash.system.ApplicationDomain"] = flash.system.ApplicationDomain;
flash.system.ApplicationDomain.__name__ = ["flash","system","ApplicationDomain"];
flash.system.ApplicationDomain.prototype = {
	hasDefinition: function(name) {
		return Type.resolveClass(name) != null;
	}
	,getDefinition: function(name) {
		return Type.resolveClass(name);
	}
	,parentDomain: null
	,__class__: flash.system.ApplicationDomain
}
flash.system.LoaderContext = function(checkPolicyFile,applicationDomain,securityDomain) {
	if(checkPolicyFile == null) checkPolicyFile = false;
	this.checkPolicyFile = checkPolicyFile;
	this.securityDomain = securityDomain;
	if(applicationDomain != null) this.applicationDomain = applicationDomain; else this.applicationDomain = flash.system.ApplicationDomain.currentDomain;
};
$hxClasses["flash.system.LoaderContext"] = flash.system.LoaderContext;
flash.system.LoaderContext.__name__ = ["flash","system","LoaderContext"];
flash.system.LoaderContext.prototype = {
	securityDomain: null
	,checkPolicyFile: null
	,applicationDomain: null
	,allowLoadBytesCodeExecution: null
	,allowCodeImport: null
	,__class__: flash.system.LoaderContext
}
flash.system.SecurityDomain = function() {
};
$hxClasses["flash.system.SecurityDomain"] = flash.system.SecurityDomain;
flash.system.SecurityDomain.__name__ = ["flash","system","SecurityDomain"];
flash.system.SecurityDomain.prototype = {
	__class__: flash.system.SecurityDomain
}
flash.text = {}
flash.text.AntiAliasType = $hxClasses["flash.text.AntiAliasType"] = { __ename__ : true, __constructs__ : ["ADVANCED","NORMAL"] }
flash.text.AntiAliasType.ADVANCED = ["ADVANCED",0];
flash.text.AntiAliasType.ADVANCED.toString = $estr;
flash.text.AntiAliasType.ADVANCED.__enum__ = flash.text.AntiAliasType;
flash.text.AntiAliasType.NORMAL = ["NORMAL",1];
flash.text.AntiAliasType.NORMAL.toString = $estr;
flash.text.AntiAliasType.NORMAL.__enum__ = flash.text.AntiAliasType;
flash.text.Font = function() {
	this.__metrics = [];
	this.__fontScale = 9.0;
	var className = Type.getClassName(Type.getClass(this));
	if(flash.text.Font.__fontData == null) {
		flash.text.Font.__fontData = [];
		flash.text.Font.__fontData["Bitstream_Vera_Sans"] = haxe.Unserializer.run(flash.text.Font.DEFAULT_FONT_DATA);
	}
	if(className == "flash.text.Font") this.set_fontName("Bitstream_Vera_Sans"); else this.set_fontName(className.split(".").pop());
};
$hxClasses["flash.text.Font"] = flash.text.Font;
flash.text.Font.__name__ = ["flash","text","Font"];
flash.text.Font.enumerateFonts = function(enumerateDeviceFonts) {
	if(enumerateDeviceFonts == null) enumerateDeviceFonts = false;
	return flash.text.Font.__registeredFonts.slice();
}
flash.text.Font.__ofResource = function(resourceName,fontName) {
	if(fontName == null) fontName = "";
	var data = haxe.Unserializer.run(haxe.Resource.getString(resourceName));
	if(data == null) {
	} else {
		if(fontName == "") {
			flash.text.Font.__fontData[resourceName] = data.hash;
			fontName = data.fontName;
		}
		flash.text.Font.__fontData[data.fontName] = data.hash;
	}
	return fontName;
}
flash.text.Font.registerFont = function(font) {
	var instance = js.Boot.__cast(Type.createInstance(font,[]) , flash.text.Font);
	if(instance != null) {
		if(Reflect.hasField(font,"resourceName")) instance.set_fontName(flash.text.Font.__ofResource(Reflect.field(font,"resourceName")));
		flash.text.Font.__registeredFonts.push(instance);
	}
}
flash.text.Font.prototype = {
	set_fontName: function(name) {
		if(name == "_sans" || name == "_serif" || name == "_typewriter") name = "Bitstream_Vera_Sans";
		this.fontName = name;
		if(flash.text.Font.__fontData[this.fontName] == null) try {
			flash.text.Font.__ofResource(name);
		} catch( e ) {
			this.fontName = "Bitstream_Vera_Sans";
		}
		if(flash.text.Font.__fontData[this.fontName] != null) try {
			this.__glyphData = flash.text.Font.__fontData[this.fontName];
		} catch( e ) {
			this.fontName = "Bitstream_Vera_Sans";
		}
		return name;
	}
	,__setScale: function(scale) {
		this.__fontScale = scale / 1024;
	}
	,__render: function(graphics,inChar,inX,inY,inOutline) {
		var index = 0;
		var glyph = this.__glyphData.get(inChar);
		if(glyph == null) return;
		var commands = glyph.commands;
		var data = glyph.data;
		var _g = 0;
		while(_g < commands.length) {
			var c = commands[_g];
			++_g;
			switch(c) {
			case 1:
				graphics.moveTo(inX + data[index++] * this.__fontScale,inY + data[index++] * this.__fontScale);
				break;
			case 2:
				graphics.lineTo(inX + data[index++] * this.__fontScale,inY + data[index++] * this.__fontScale);
				break;
			case 3:
				graphics.curveTo(inX + data[index++] * this.__fontScale,inY + data[index++] * this.__fontScale,inX + data[index++] * this.__fontScale,inY + data[index++] * this.__fontScale);
				break;
			}
		}
	}
	,__getAdvance: function(inGlyph,height) {
		var m = this.__metrics[inGlyph];
		if(m == null) {
			var glyph = this.__glyphData.get(inGlyph);
			if(glyph == null) return 0;
			this.__metrics[inGlyph] = m = glyph._width * this.__fontScale | 0;
		}
		if(m == null) return 0;
		return m;
	}
	,hasGlyph: function(str) {
		return this.__glyphData.exists(HxOverrides.cca(str,0));
	}
	,__metrics: null
	,__glyphData: null
	,__fontScale: null
	,fontType: null
	,fontStyle: null
	,fontName: null
	,__class__: flash.text.Font
	,__properties__: {set_fontName:"set_fontName"}
}
flash.text.FontStyle = $hxClasses["flash.text.FontStyle"] = { __ename__ : true, __constructs__ : ["REGULAR","ITALIC","BOLD_ITALIC","BOLD"] }
flash.text.FontStyle.REGULAR = ["REGULAR",0];
flash.text.FontStyle.REGULAR.toString = $estr;
flash.text.FontStyle.REGULAR.__enum__ = flash.text.FontStyle;
flash.text.FontStyle.ITALIC = ["ITALIC",1];
flash.text.FontStyle.ITALIC.toString = $estr;
flash.text.FontStyle.ITALIC.__enum__ = flash.text.FontStyle;
flash.text.FontStyle.BOLD_ITALIC = ["BOLD_ITALIC",2];
flash.text.FontStyle.BOLD_ITALIC.toString = $estr;
flash.text.FontStyle.BOLD_ITALIC.__enum__ = flash.text.FontStyle;
flash.text.FontStyle.BOLD = ["BOLD",3];
flash.text.FontStyle.BOLD.toString = $estr;
flash.text.FontStyle.BOLD.__enum__ = flash.text.FontStyle;
flash.text.FontType = $hxClasses["flash.text.FontType"] = { __ename__ : true, __constructs__ : ["EMBEDDED","DEVICE"] }
flash.text.FontType.EMBEDDED = ["EMBEDDED",0];
flash.text.FontType.EMBEDDED.toString = $estr;
flash.text.FontType.EMBEDDED.__enum__ = flash.text.FontType;
flash.text.FontType.DEVICE = ["DEVICE",1];
flash.text.FontType.DEVICE.toString = $estr;
flash.text.FontType.DEVICE.__enum__ = flash.text.FontType;
flash.text.GridFitType = $hxClasses["flash.text.GridFitType"] = { __ename__ : true, __constructs__ : ["NONE","PIXEL","SUBPIXEL"] }
flash.text.GridFitType.NONE = ["NONE",0];
flash.text.GridFitType.NONE.toString = $estr;
flash.text.GridFitType.NONE.__enum__ = flash.text.GridFitType;
flash.text.GridFitType.PIXEL = ["PIXEL",1];
flash.text.GridFitType.PIXEL.toString = $estr;
flash.text.GridFitType.PIXEL.__enum__ = flash.text.GridFitType;
flash.text.GridFitType.SUBPIXEL = ["SUBPIXEL",2];
flash.text.GridFitType.SUBPIXEL.toString = $estr;
flash.text.GridFitType.SUBPIXEL.__enum__ = flash.text.GridFitType;
flash.text.TextField = function() {
	flash.display.InteractiveObject.call(this);
	this.mWidth = 100;
	this.mHeight = 20;
	this.mHTMLMode = false;
	this.multiline = false;
	this.__graphics = new flash.display.Graphics();
	this.mFace = flash.text.TextField.mDefaultFont;
	this.mAlign = flash.text.TextFormatAlign.LEFT;
	this.mParagraphs = new Array();
	this.mSelStart = -1;
	this.mSelEnd = -1;
	this.scrollH = 0;
	this.scrollV = 1;
	this.mType = flash.text.TextFieldType.DYNAMIC;
	this.set_autoSize(flash.text.TextFieldAutoSize.NONE);
	this.mTextHeight = 12;
	this.mMaxHeight = this.mTextHeight;
	this.mHTMLText = " ";
	this.mText = " ";
	this.mTextColour = 0;
	this.tabEnabled = false;
	this.mTryFreeType = true;
	this.selectable = true;
	this.mInsertPos = 0;
	this.__inputEnabled = false;
	this.mDownChar = 0;
	this.mSelectDrag = -1;
	this.mLineInfo = [];
	this.set_defaultTextFormat(new flash.text.TextFormat());
	this.set_borderColor(0);
	this.set_border(false);
	this.set_backgroundColor(16777215);
	this.set_background(false);
	this.gridFitType = flash.text.GridFitType.PIXEL;
	this.sharpness = 0;
};
$hxClasses["flash.text.TextField"] = flash.text.TextField;
flash.text.TextField.__name__ = ["flash","text","TextField"];
flash.text.TextField.__super__ = flash.display.InteractiveObject;
flash.text.TextField.prototype = $extend(flash.display.InteractiveObject.prototype,{
	set_wordWrap: function(inWordWrap) {
		this.wordWrap = inWordWrap;
		this.Rebuild();
		return this.get_wordWrap();
	}
	,get_wordWrap: function() {
		return this.wordWrap;
	}
	,set_width: function(inValue) {
		if(this.parent != null) this.parent.__invalidateBounds();
		if(this.get__boundsInvalid()) this.validateBounds();
		if(inValue != this.mWidth) {
			this.mWidth = inValue;
			this.Rebuild();
		}
		return this.mWidth;
	}
	,get_width: function() {
		return Math.max(this.mWidth,this.getBounds(this.get_stage()).width);
	}
	,set_type: function(inType) {
		this.mType = inType;
		this.__inputEnabled = this.mType == flash.text.TextFieldType.INPUT;
		if(this.mHTMLMode) {
			if(this.__inputEnabled) flash.Lib.__setContentEditable(this.__graphics.__surface,true); else flash.Lib.__setContentEditable(this.__graphics.__surface,false);
		} else if(this.__inputEnabled) {
			this.set_htmlText(StringTools.replace(this.mText,"\n","<BR />"));
			flash.Lib.__setContentEditable(this.__graphics.__surface,true);
		}
		this.tabEnabled = this.get_type() == flash.text.TextFieldType.INPUT;
		this.Rebuild();
		return inType;
	}
	,get_type: function() {
		return this.mType;
	}
	,get_textHeight: function() {
		return this.mMaxHeight;
	}
	,get_textWidth: function() {
		return this.mMaxWidth;
	}
	,set_textColor: function(inCol) {
		this.mTextColour = inCol;
		this.RebuildText();
		return inCol;
	}
	,get_textColor: function() {
		return this.mTextColour;
	}
	,set_text: function(inText) {
		this.mText = Std.string(inText);
		this.mHTMLMode = false;
		this.RebuildText();
		this.___renderFlags |= 64;
		if(this.parent != null) this.parent.___renderFlags |= 64;
		return this.mText;
	}
	,get_text: function() {
		if(this.mHTMLMode) this.ConvertHTMLToText(false);
		return this.mText;
	}
	,set_scrollV: function(value) {
		return this.scrollV = value;
	}
	,get_scrollV: function() {
		return this.scrollV;
	}
	,set_scrollH: function(value) {
		return this.scrollH = value;
	}
	,get_scrollH: function() {
		return this.scrollH;
	}
	,get_numLines: function() {
		return 0;
	}
	,set_multiline: function(value) {
		return this.multiline = value;
	}
	,get_multiline: function() {
		return this.multiline;
	}
	,get_maxScrollV: function() {
		return 0;
	}
	,get_maxScrollH: function() {
		return 0;
	}
	,getLineText: function(lineIndex) {
		return "";
	}
	,getLineOffset: function(lineIndex) {
		return 0;
	}
	,set_htmlText: function(inHTMLText) {
		this.mParagraphs = new Array();
		this.mHTMLText = inHTMLText;
		if(!this.mHTMLMode) {
			var domElement = js.Browser.document.createElement("div");
			if(this.background || this.border) {
				domElement.style.width = this.mWidth + "px";
				domElement.style.height = this.mHeight + "px";
			}
			if(this.background) domElement.style.backgroundColor = "#" + StringTools.hex(this.backgroundColor,6);
			if(this.border) domElement.style.border = "1px solid #" + StringTools.hex(this.borderColor,6);
			domElement.style.color = "#" + StringTools.hex(this.mTextColour,6);
			domElement.style.fontFamily = this.mFace;
			domElement.style.fontSize = this.mTextHeight + "px";
			domElement.style.textAlign = Std.string(this.mAlign);
			var wrapper = domElement;
			wrapper.innerHTML = inHTMLText;
			var destination = new flash.display.Graphics(wrapper);
			var __surface = this.__graphics.__surface;
			if(flash.Lib.__isOnStage(__surface)) {
				flash.Lib.__appendSurface(wrapper);
				flash.Lib.__copyStyle(__surface,wrapper);
				flash.Lib.__swapSurface(__surface,wrapper);
				flash.Lib.__removeSurface(__surface);
			}
			this.__graphics = destination;
			this.__graphics.__extent.width = wrapper.width;
			this.__graphics.__extent.height = wrapper.height;
		} else this.__graphics.__surface.innerHTML = inHTMLText;
		this.mHTMLMode = true;
		this.RebuildText();
		this.___renderFlags |= 64;
		if(this.parent != null) this.parent.___renderFlags |= 64;
		return this.mHTMLText;
	}
	,get_htmlText: function() {
		return this.mHTMLText;
	}
	,set_height: function(inValue) {
		if(this.parent != null) this.parent.__invalidateBounds();
		if(this.get__boundsInvalid()) this.validateBounds();
		if(inValue != this.mHeight) {
			this.mHeight = inValue;
			this.Rebuild();
		}
		return this.mHeight;
	}
	,get_height: function() {
		return Math.max(this.mHeight,this.getBounds(this.get_stage()).height);
	}
	,set_defaultTextFormat: function(inFmt) {
		this.setTextFormat(inFmt);
		this._defaultTextFormat = inFmt;
		return inFmt;
	}
	,get_defaultTextFormat: function() {
		return this._defaultTextFormat;
	}
	,get_caretPos: function() {
		return this.mInsertPos;
	}
	,get_bottomScrollV: function() {
		return 0;
	}
	,set_borderColor: function(inBorderCol) {
		this.borderColor = inBorderCol;
		this.Rebuild();
		return inBorderCol;
	}
	,set_border: function(inBorder) {
		this.border = inBorder;
		this.Rebuild();
		return inBorder;
	}
	,set_backgroundColor: function(inCol) {
		this.backgroundColor = inCol;
		this.Rebuild();
		return inCol;
	}
	,set_background: function(inBack) {
		this.background = inBack;
		this.Rebuild();
		return inBack;
	}
	,set_autoSize: function(inAutoSize) {
		this.autoSize = inAutoSize;
		this.Rebuild();
		return inAutoSize;
	}
	,get_autoSize: function() {
		return this.autoSize;
	}
	,__render: function(inMask,clipRect) {
		if(!this.__combinedVisible) return;
		if((this.___renderFlags & 4) != 0 || (this.___renderFlags & 8) != 0) this.__validateMatrix();
		if(this.__graphics.__render(inMask,this.__filters,1,1)) {
			this.___renderFlags |= 64;
			if(this.parent != null) this.parent.___renderFlags |= 64;
			this.__applyFilters(this.__graphics.__surface);
			this.___renderFlags |= 32;
		}
		if(!this.mHTMLMode && inMask != null) {
			var m = this.getSurfaceTransform(this.__graphics);
			flash.Lib.__drawToSurface(this.__graphics.__surface,inMask,m,(this.parent != null?this.parent.__combinedAlpha:1) * this.alpha,clipRect,this.gridFitType != flash.text.GridFitType.PIXEL);
		} else {
			if((this.___renderFlags & 32) != 0) {
				var m = this.getSurfaceTransform(this.__graphics);
				flash.Lib.__setSurfaceTransform(this.__graphics.__surface,m);
				this.___renderFlags &= -33;
			}
			flash.Lib.__setSurfaceOpacity(this.__graphics.__surface,(this.parent != null?this.parent.__combinedAlpha:1) * this.alpha);
		}
	}
	,__getObjectUnderPoint: function(point) {
		if(!this.get_visible()) return null; else if(this.mText.length > 1) {
			var local = this.globalToLocal(point);
			if(local.x < 0 || local.y < 0 || local.x > this.mMaxWidth || local.y > this.mMaxHeight) return null; else return this;
		} else return flash.display.InteractiveObject.prototype.__getObjectUnderPoint.call(this,point);
	}
	,__getGraphics: function() {
		return this.__graphics;
	}
	,toString: function() {
		return "[TextField name=" + this.name + " id=" + this.___id + "]";
	}
	,setTextFormat: function(inFmt,beginIndex,endIndex) {
		if(endIndex == null) endIndex = -1;
		if(beginIndex == null) beginIndex = -1;
		if(inFmt.font != null) this.mFace = inFmt.font;
		if(inFmt.size != null) this.mTextHeight = inFmt.size | 0;
		if(inFmt.align != null) this.mAlign = inFmt.align;
		if(inFmt.color != null) this.mTextColour = inFmt.color;
		this.RebuildText();
		this.___renderFlags |= 64;
		if(this.parent != null) this.parent.___renderFlags |= 64;
		return;
	}
	,setSelection: function(beginIndex,endIndex) {
	}
	,RenderRow: function(inRow,inY,inCharIdx,inAlign,inInsert) {
		if(inInsert == null) inInsert = 0;
		var h = 0;
		var w = 0;
		var _g = 0;
		while(_g < inRow.length) {
			var chr = inRow[_g];
			++_g;
			if(chr.fh > h) h = chr.fh;
			w += chr.adv;
		}
		if(w > this.mMaxWidth) this.mMaxWidth = w;
		var full_height = h * 1.2 | 0;
		var align_x = 0;
		var insert_x = 0;
		if(inInsert != null) {
			if(this.autoSize != flash.text.TextFieldAutoSize.NONE) {
				this.scrollH = 0;
				insert_x = inInsert;
			} else {
				insert_x = inInsert - this.scrollH;
				if(insert_x < 0) this.scrollH -= (this.mLimitRenderX * 3 >> 2) - insert_x; else if(insert_x > this.mLimitRenderX) this.scrollH += insert_x - (this.mLimitRenderX * 3 >> 2);
				if(this.scrollH < 0) this.scrollH = 0;
			}
		}
		if(this.autoSize == flash.text.TextFieldAutoSize.NONE && w <= this.mLimitRenderX) {
			if(inAlign == flash.text.TextFormatAlign.CENTER) align_x = Math.round(this.mWidth) - w >> 1; else if(inAlign == flash.text.TextFormatAlign.RIGHT) align_x = Math.round(this.mWidth) - w;
		}
		var x_list = new Array();
		this.mLineInfo.push({ mY0 : inY, mIndex : inCharIdx - 1, mX : x_list});
		var cache_sel_font = null;
		var cache_normal_font = null;
		var x = align_x - this.scrollH;
		var x0 = x;
		var _g = 0;
		while(_g < inRow.length) {
			var chr = inRow[_g];
			++_g;
			var adv = chr.adv;
			if(x + adv > this.mLimitRenderX) break;
			x_list.push(x);
			if(x >= 0) {
				var font = chr.font;
				if(chr.sel) {
					this.__graphics.lineStyle();
					this.__graphics.beginFill(2105440);
					this.__graphics.drawRect(x,inY,adv,full_height);
					this.__graphics.endFill();
					if(cache_normal_font == chr.font) font = cache_sel_font; else {
						font = flash.text.FontInstance.CreateSolid(chr.font.GetFace(),chr.fh,16777215,1.0);
						cache_sel_font = font;
						cache_normal_font = chr.font;
					}
				}
				font.RenderChar(this.__graphics,chr.chr,x,inY + (h - chr.fh) | 0);
			}
			x += adv;
		}
		x += this.scrollH;
		return full_height;
	}
	,RebuildText: function() {
		this.mParagraphs = [];
		if(!this.mHTMLMode) {
			var font = flash.text.FontInstance.CreateSolid(this.mFace,this.mTextHeight,this.mTextColour,1.0);
			var paras = this.mText.split("\n");
			var _g = 0;
			while(_g < paras.length) {
				var paragraph = paras[_g];
				++_g;
				this.mParagraphs.push({ align : this.mAlign, spans : [{ font : font, text : paragraph + "\n"}]});
			}
		}
		this.Rebuild();
	}
	,Rebuild: function() {
		if(this.mHTMLMode) {
			this.mMaxWidth = this.__graphics.__surface.clientWidth;
			this.__graphics.__surface.style.setProperty("white-space","nowrap","");
			return;
		}
		this.mLineInfo = [];
		this.__graphics.clear();
		if(this.background) {
			this.__graphics.beginFill(this.backgroundColor);
			this.__graphics.drawRect(0,0,this.get_width(),this.get_height());
			this.__graphics.endFill();
		}
		this.__graphics.lineStyle(this.mTextColour);
		var insert_x = null;
		this.mMaxWidth = 0;
		var wrap = this.mLimitRenderX = this.get_wordWrap() && !this.__inputEnabled?this.mWidth | 0:999999;
		var char_idx = 0;
		var h = 0;
		var s0 = this.mSelStart;
		var s1 = this.mSelEnd;
		var _g = 0, _g1 = this.mParagraphs;
		while(_g < _g1.length) {
			var paragraph = _g1[_g];
			++_g;
			var row = [];
			var row_width = 0;
			var last_word_break = 0;
			var last_word_break_width = 0;
			var last_word_char_idx = 0;
			var start_idx = char_idx;
			var tx = 0;
			var _g2 = 0, _g3 = paragraph.spans;
			while(_g2 < _g3.length) {
				var span = _g3[_g2];
				++_g2;
				var text = span.text;
				var font = span.font;
				var fh = font.get_height();
				last_word_break = row.length;
				last_word_break_width = row_width;
				last_word_char_idx = char_idx;
				var _g5 = 0, _g4 = text.length;
				while(_g5 < _g4) {
					var ch = _g5++;
					var g = HxOverrides.cca(text,ch);
					var adv = font.__getAdvance(g);
					if(g == 32) {
						last_word_break = row.length;
						last_word_break_width = tx;
						last_word_char_idx = char_idx;
					}
					if(tx + adv > wrap) {
						if(last_word_break > 0) {
							var row_end = row.splice(last_word_break,row.length - last_word_break);
							h += this.RenderRow(row,h,start_idx,paragraph.align);
							row = row_end;
							tx -= last_word_break_width;
							start_idx = last_word_char_idx;
							last_word_break = 0;
							last_word_break_width = 0;
							last_word_char_idx = 0;
							if(row_end.length > 0 && row_end[0].chr == 32) {
								row_end.shift();
								start_idx++;
							}
						} else {
							h += this.RenderRow(row,h,char_idx,paragraph.align);
							row = [];
							tx = 0;
							start_idx = char_idx;
						}
					}
					row.push({ font : font, chr : g, x : tx, fh : fh, sel : char_idx >= s0 && char_idx < s1, adv : adv});
					tx += adv;
					char_idx++;
				}
			}
			if(row.length > 0) {
				h += this.RenderRow(row,h,start_idx,paragraph.align,insert_x);
				insert_x = null;
			}
		}
		var w = this.mMaxWidth;
		if(h < this.mTextHeight) h = this.mTextHeight;
		this.mMaxHeight = h;
		var _g = this;
		switch( (_g.autoSize)[1] ) {
		case 1:
			break;
		case 3:
			var x0 = this.get_x() + this.get_width();
			this.set_x(this.mWidth - x0);
			break;
		case 0:
			var x0 = this.get_x() + this.get_width() / 2;
			this.set_x(this.mWidth / 2 - x0);
			break;
		default:
			if(this.get_wordWrap()) this.set_height(h);
		}
		if(this.border) {
			this.__graphics.endFill();
			this.__graphics.lineStyle(1,this.borderColor,1,true);
			this.__graphics.drawRect(.5,.5,this.get_width() - .5,this.get_height() - .5);
		}
	}
	,getTextFormat: function(beginIndex,endIndex) {
		if(endIndex == null) endIndex = 0;
		if(beginIndex == null) beginIndex = 0;
		return new flash.text.TextFormat(this.mFace,this.mTextHeight,this.mTextColour);
	}
	,getLineIndexAtPoint: function(inX,inY) {
		if(this.mLineInfo.length < 1) return -1;
		if(inY <= 0) return 0;
		var _g1 = 0, _g = this.mLineInfo.length;
		while(_g1 < _g) {
			var l = _g1++;
			if(this.mLineInfo[l].mY0 > inY) return l == 0?0:l - 1;
		}
		return this.mLineInfo.length - 1;
	}
	,getCharIndexAtPoint: function(inX,inY) {
		var li = this.getLineIndexAtPoint(inX,inY);
		if(li < 0) return -1;
		var line = this.mLineInfo[li];
		var idx = line.mIndex;
		var _g = 0, _g1 = line.mX;
		while(_g < _g1.length) {
			var x = _g1[_g];
			++_g;
			if(x > inX) return idx;
			idx++;
		}
		return idx;
	}
	,getCharBoundaries: function(a) {
		return null;
	}
	,DecodeColour: function(col) {
		return Std.parseInt("0x" + HxOverrides.substr(col,1,null));
	}
	,ConvertHTMLToText: function(inUnSetHTML) {
		this.mText = "";
		var _g = 0, _g1 = this.mParagraphs;
		while(_g < _g1.length) {
			var paragraph = _g1[_g];
			++_g;
			var _g2 = 0, _g3 = paragraph.spans;
			while(_g2 < _g3.length) {
				var span = _g3[_g2];
				++_g2;
				this.mText += span.text;
			}
		}
		if(inUnSetHTML) {
			this.mHTMLMode = false;
			this.RebuildText();
		}
	}
	,appendText: function(newText) {
		var _g = this;
		_g.set_text(_g.get_text() + newText);
	}
	,_defaultTextFormat: null
	,__inputEnabled: null
	,__graphics: null
	,mWidth: null
	,mType: null
	,mTextColour: null
	,mText: null
	,mSelectDrag: null
	,mSelStart: null
	,mSelEnd: null
	,mSelectionAnchored: null
	,mSelectionAnchor: null
	,mMaxWidth: null
	,mMaxHeight: null
	,mLineInfo: null
	,mLimitRenderX: null
	,mInsertPos: null
	,mHTMLMode: null
	,mHTMLText: null
	,mHeight: null
	,mAlign: null
	,wordWrap: null
	,textWidth: null
	,textHeight: null
	,sharpness: null
	,selectionEndIndex: null
	,selectionBeginIndex: null
	,selectable: null
	,scrollV: null
	,scrollH: null
	,restrict: null
	,numLines: null
	,multiline: null
	,mTryFreeType: null
	,mTextHeight: null
	,mParagraphs: null
	,mFace: null
	,mDownChar: null
	,maxScrollV: null
	,maxScrollH: null
	,maxChars: null
	,length: null
	,gridFitType: null
	,embedFonts: null
	,displayAsPassword: null
	,caretPos: null
	,caretIndex: null
	,bottomScrollV: null
	,borderColor: null
	,border: null
	,backgroundColor: null
	,background: null
	,autoSize: null
	,antiAliasType: null
	,__class__: flash.text.TextField
	,__properties__: $extend(flash.display.InteractiveObject.prototype.__properties__,{set_autoSize:"set_autoSize",set_background:"set_background",set_backgroundColor:"set_backgroundColor",set_border:"set_border",set_borderColor:"set_borderColor",get_bottomScrollV:"get_bottomScrollV",get_caretPos:"get_caretPos",set_defaultTextFormat:"set_defaultTextFormat",get_defaultTextFormat:"get_defaultTextFormat",set_htmlText:"set_htmlText",get_htmlText:"get_htmlText",get_maxScrollH:"get_maxScrollH",get_maxScrollV:"get_maxScrollV",get_numLines:"get_numLines",set_text:"set_text",get_text:"get_text",set_textColor:"set_textColor",get_textColor:"get_textColor",get_textHeight:"get_textHeight",get_textWidth:"get_textWidth",set_type:"set_type",get_type:"get_type",set_wordWrap:"set_wordWrap",get_wordWrap:"get_wordWrap"})
});
flash.text.FontInstanceMode = $hxClasses["flash.text.FontInstanceMode"] = { __ename__ : true, __constructs__ : ["fimSolid"] }
flash.text.FontInstanceMode.fimSolid = ["fimSolid",0];
flash.text.FontInstanceMode.fimSolid.toString = $estr;
flash.text.FontInstanceMode.fimSolid.__enum__ = flash.text.FontInstanceMode;
flash.text.FontInstance = function(inFont,inHeight) {
	this.mFont = inFont;
	this.mHeight = inHeight;
	this.mTryFreeType = true;
	this.mGlyphs = [];
	this.mCacheAsBitmap = false;
};
$hxClasses["flash.text.FontInstance"] = flash.text.FontInstance;
flash.text.FontInstance.__name__ = ["flash","text","FontInstance"];
flash.text.FontInstance.CreateSolid = function(inFace,inHeight,inColour,inAlpha) {
	var id = "SOLID:" + inFace + ":" + inHeight + ":" + inColour + ":" + inAlpha;
	var f = flash.text.FontInstance.mSolidFonts.get(id);
	if(f != null) return f;
	var font = new flash.text.Font();
	font.__setScale(inHeight);
	font.set_fontName(inFace);
	if(font == null) return null;
	f = new flash.text.FontInstance(font,inHeight);
	f.SetSolid(inColour,inAlpha);
	flash.text.FontInstance.mSolidFonts.set(id,f);
	return f;
}
flash.text.FontInstance.prototype = {
	get_height: function() {
		return this.mHeight;
	}
	,__getAdvance: function(inChar) {
		if(this.mFont == null) return 0;
		return this.mFont.__getAdvance(inChar,this.mHeight);
	}
	,toString: function() {
		return "FontInstance:" + Std.string(this.mFont) + ":" + this.mColour + "(" + this.mGlyphs.length + ")";
	}
	,RenderChar: function(inGraphics,inGlyph,inX,inY) {
		inGraphics.__clearLine();
		inGraphics.beginFill(this.mColour,this.mAlpha);
		this.mFont.__render(inGraphics,inGlyph,inX,inY,this.mTryFreeType);
		inGraphics.endFill();
	}
	,SetSolid: function(inCol,inAlpha) {
		this.mColour = inCol;
		this.mAlpha = inAlpha;
		this.mMode = flash.text.FontInstanceMode.fimSolid;
	}
	,GetFace: function() {
		return this.mFont.fontName;
	}
	,mCacheAsBitmap: null
	,mGlyphs: null
	,mHeight: null
	,mFont: null
	,mAlpha: null
	,mColour: null
	,mMode: null
	,mTryFreeType: null
	,height: null
	,__class__: flash.text.FontInstance
	,__properties__: {get_height:"get_height"}
}
flash.text.TextFieldAutoSize = $hxClasses["flash.text.TextFieldAutoSize"] = { __ename__ : true, __constructs__ : ["CENTER","LEFT","NONE","RIGHT"] }
flash.text.TextFieldAutoSize.CENTER = ["CENTER",0];
flash.text.TextFieldAutoSize.CENTER.toString = $estr;
flash.text.TextFieldAutoSize.CENTER.__enum__ = flash.text.TextFieldAutoSize;
flash.text.TextFieldAutoSize.LEFT = ["LEFT",1];
flash.text.TextFieldAutoSize.LEFT.toString = $estr;
flash.text.TextFieldAutoSize.LEFT.__enum__ = flash.text.TextFieldAutoSize;
flash.text.TextFieldAutoSize.NONE = ["NONE",2];
flash.text.TextFieldAutoSize.NONE.toString = $estr;
flash.text.TextFieldAutoSize.NONE.__enum__ = flash.text.TextFieldAutoSize;
flash.text.TextFieldAutoSize.RIGHT = ["RIGHT",3];
flash.text.TextFieldAutoSize.RIGHT.toString = $estr;
flash.text.TextFieldAutoSize.RIGHT.__enum__ = flash.text.TextFieldAutoSize;
flash.text.TextFieldType = function() { }
$hxClasses["flash.text.TextFieldType"] = flash.text.TextFieldType;
flash.text.TextFieldType.__name__ = ["flash","text","TextFieldType"];
flash.text.TextFormat = function(in_font,in_size,in_color,in_bold,in_italic,in_underline,in_url,in_target,in_align,in_leftMargin,in_rightMargin,in_indent,in_leading) {
	this.font = in_font;
	this.size = in_size;
	this.color = in_color;
	this.bold = in_bold;
	this.italic = in_italic;
	this.underline = in_underline;
	this.url = in_url;
	this.target = in_target;
	this.align = in_align;
	this.leftMargin = in_leftMargin;
	this.rightMargin = in_rightMargin;
	this.indent = in_indent;
	this.leading = in_leading;
};
$hxClasses["flash.text.TextFormat"] = flash.text.TextFormat;
flash.text.TextFormat.__name__ = ["flash","text","TextFormat"];
flash.text.TextFormat.prototype = {
	clone: function() {
		var newFormat = new flash.text.TextFormat(this.font,this.size,this.color,this.bold,this.italic,this.underline,this.url,this.target);
		newFormat.align = this.align;
		newFormat.leftMargin = this.leftMargin;
		newFormat.rightMargin = this.rightMargin;
		newFormat.indent = this.indent;
		newFormat.leading = this.leading;
		newFormat.blockIndent = this.blockIndent;
		newFormat.bullet = this.bullet;
		newFormat.display = this.display;
		newFormat.kerning = this.kerning;
		newFormat.letterSpacing = this.letterSpacing;
		newFormat.tabStops = this.tabStops;
		return newFormat;
	}
	,url: null
	,underline: null
	,target: null
	,tabStops: null
	,size: null
	,rightMargin: null
	,letterSpacing: null
	,leftMargin: null
	,leading: null
	,kerning: null
	,italic: null
	,indent: null
	,font: null
	,display: null
	,color: null
	,bullet: null
	,bold: null
	,blockIndent: null
	,align: null
	,__class__: flash.text.TextFormat
}
flash.text.TextFormatAlign = $hxClasses["flash.text.TextFormatAlign"] = { __ename__ : true, __constructs__ : ["LEFT","RIGHT","JUSTIFY","CENTER"] }
flash.text.TextFormatAlign.LEFT = ["LEFT",0];
flash.text.TextFormatAlign.LEFT.toString = $estr;
flash.text.TextFormatAlign.LEFT.__enum__ = flash.text.TextFormatAlign;
flash.text.TextFormatAlign.RIGHT = ["RIGHT",1];
flash.text.TextFormatAlign.RIGHT.toString = $estr;
flash.text.TextFormatAlign.RIGHT.__enum__ = flash.text.TextFormatAlign;
flash.text.TextFormatAlign.JUSTIFY = ["JUSTIFY",2];
flash.text.TextFormatAlign.JUSTIFY.toString = $estr;
flash.text.TextFormatAlign.JUSTIFY.__enum__ = flash.text.TextFormatAlign;
flash.text.TextFormatAlign.CENTER = ["CENTER",3];
flash.text.TextFormatAlign.CENTER.toString = $estr;
flash.text.TextFormatAlign.CENTER.__enum__ = flash.text.TextFormatAlign;
flash.ui = {}
flash.ui.Keyboard = function() { }
$hxClasses["flash.ui.Keyboard"] = flash.ui.Keyboard;
flash.ui.Keyboard.__name__ = ["flash","ui","Keyboard"];
flash.ui.Keyboard.isAccessible = function() {
	return false;
}
flash.ui.Keyboard.__convertMozillaCode = function(code) {
	switch(code) {
	case 8:
		return 8;
	case 9:
		return 9;
	case 13:
		return 13;
	case 14:
		return 13;
	case 16:
		return 16;
	case 17:
		return 17;
	case 20:
		return 18;
	case 27:
		return 27;
	case 32:
		return 32;
	case 33:
		return 33;
	case 34:
		return 34;
	case 35:
		return 35;
	case 36:
		return 36;
	case 37:
		return 37;
	case 39:
		return 39;
	case 38:
		return 38;
	case 40:
		return 40;
	case 45:
		return 45;
	case 46:
		return 46;
	case 144:
		return 144;
	default:
		return code;
	}
}
flash.ui.Keyboard.__convertWebkitCode = function(code) {
	var _g = code.toLowerCase();
	switch(_g) {
	case "backspace":
		return 8;
	case "tab":
		return 9;
	case "enter":
		return 13;
	case "shift":
		return 16;
	case "control":
		return 17;
	case "capslock":
		return 18;
	case "escape":
		return 27;
	case "space":
		return 32;
	case "pageup":
		return 33;
	case "pagedown":
		return 34;
	case "end":
		return 35;
	case "home":
		return 36;
	case "left":
		return 37;
	case "right":
		return 39;
	case "up":
		return 38;
	case "down":
		return 40;
	case "insert":
		return 45;
	case "delete":
		return 46;
	case "numlock":
		return 144;
	case "break":
		return 19;
	}
	if(code.indexOf("U+") == 0) return Std.parseInt("0x" + HxOverrides.substr(code,3,null));
	throw "Unrecognized key code: " + code;
	return 0;
}
flash.ui.Multitouch = function() { }
$hxClasses["flash.ui.Multitouch"] = flash.ui.Multitouch;
flash.ui.Multitouch.__name__ = ["flash","ui","Multitouch"];
flash.ui.Multitouch.__properties__ = {get_supportsTouchEvents:"get_supportsTouchEvents",set_inputMode:"set_inputMode",get_inputMode:"get_inputMode"}
flash.ui.Multitouch.get_inputMode = function() {
	return flash.ui.MultitouchInputMode.TOUCH_POINT;
}
flash.ui.Multitouch.set_inputMode = function(inMode) {
	if(inMode == flash.ui.MultitouchInputMode.GESTURE) return flash.ui.Multitouch.get_inputMode();
	return inMode;
}
flash.ui.Multitouch.get_supportsTouchEvents = function() {
	var supported = Reflect.hasField(js.Browser.window,"ontouchstart");
	return supported;
}
flash.ui.MultitouchInputMode = $hxClasses["flash.ui.MultitouchInputMode"] = { __ename__ : true, __constructs__ : ["NONE","TOUCH_POINT","GESTURE"] }
flash.ui.MultitouchInputMode.NONE = ["NONE",0];
flash.ui.MultitouchInputMode.NONE.toString = $estr;
flash.ui.MultitouchInputMode.NONE.__enum__ = flash.ui.MultitouchInputMode;
flash.ui.MultitouchInputMode.TOUCH_POINT = ["TOUCH_POINT",1];
flash.ui.MultitouchInputMode.TOUCH_POINT.toString = $estr;
flash.ui.MultitouchInputMode.TOUCH_POINT.__enum__ = flash.ui.MultitouchInputMode;
flash.ui.MultitouchInputMode.GESTURE = ["GESTURE",2];
flash.ui.MultitouchInputMode.GESTURE.toString = $estr;
flash.ui.MultitouchInputMode.GESTURE.__enum__ = flash.ui.MultitouchInputMode;
flash.utils = {}
flash.utils.ByteArray = function() {
	this.littleEndian = false;
	this.allocated = 0;
	this.position = 0;
	this.length = 0;
	this.___resizeBuffer(this.allocated);
};
$hxClasses["flash.utils.ByteArray"] = flash.utils.ByteArray;
flash.utils.ByteArray.__name__ = ["flash","utils","ByteArray"];
flash.utils.ByteArray.fromBytes = function(inBytes) {
	var result = new flash.utils.ByteArray();
	result.byteView = new Uint8Array(inBytes.b);
	result.set_length(result.byteView.length);
	result.allocated = result.length;
	return result;
}
flash.utils.ByteArray.__ofBuffer = function(buffer) {
	var bytes = new flash.utils.ByteArray();
	bytes.set_length(bytes.allocated = buffer.byteLength);
	bytes.data = new DataView(buffer);
	bytes.byteView = new Uint8Array(buffer);
	return bytes;
}
flash.utils.ByteArray.prototype = {
	set_length: function(value) {
		if(this.allocated < value) this.___resizeBuffer(this.allocated = Math.max(value,this.allocated * 2) | 0); else if(this.allocated > value) this.___resizeBuffer(this.allocated = value);
		this.length = value;
		return value;
	}
	,set_endian: function(endian) {
		this.littleEndian = endian == "littleEndian";
		return endian;
	}
	,get_endian: function() {
		return this.littleEndian?"littleEndian":"bigEndian";
	}
	,get_bytesAvailable: function() {
		return this.length - this.position;
	}
	,__set: function(pos,v) {
		this.data.setUint8(pos,v);
	}
	,__getBuffer: function() {
		return this.data.buffer;
	}
	,___resizeBuffer: function(len) {
		var oldByteView = this.byteView;
		var newByteView = new Uint8Array(len);
		if(oldByteView != null) {
			if(oldByteView.length <= len) newByteView.set(oldByteView); else newByteView.set(oldByteView.subarray(0,len));
		}
		this.byteView = newByteView;
		this.data = new DataView(newByteView.buffer);
	}
	,_getUTFBytesCount: function(value) {
		var count = 0;
		var _g1 = 0, _g = value.length;
		while(_g1 < _g) {
			var i = _g1++;
			var c = value.charCodeAt(i);
			if(c <= 127) count += 1; else if(c <= 2047) count += 2; else if(c <= 65535) count += 3; else count += 4;
		}
		return count;
	}
	,__get: function(pos) {
		return this.data.getUint8(pos);
	}
	,__fromBytes: function(inBytes) {
		this.byteView = new Uint8Array(inBytes.b);
		this.set_length(this.byteView.length);
		this.allocated = this.length;
	}
	,writeUTFBytes: function(value) {
		var _g1 = 0, _g = value.length;
		while(_g1 < _g) {
			var i = _g1++;
			var c = value.charCodeAt(i);
			if(c <= 127) this.writeByte(c); else if(c <= 2047) {
				this.writeByte(192 | c >> 6);
				this.writeByte(128 | c & 63);
			} else if(c <= 65535) {
				this.writeByte(224 | c >> 12);
				this.writeByte(128 | c >> 6 & 63);
				this.writeByte(128 | c & 63);
			} else {
				this.writeByte(240 | c >> 18);
				this.writeByte(128 | c >> 12 & 63);
				this.writeByte(128 | c >> 6 & 63);
				this.writeByte(128 | c & 63);
			}
		}
	}
	,writeUTF: function(value) {
		this.writeUnsignedShort(this._getUTFBytesCount(value));
		this.writeUTFBytes(value);
	}
	,writeUnsignedShort: function(value) {
		var lengthToEnsure = this.position + 2;
		if(this.length < lengthToEnsure) {
			if(this.allocated < lengthToEnsure) this.___resizeBuffer(this.allocated = Math.max(lengthToEnsure,this.allocated * 2) | 0); else if(this.allocated > lengthToEnsure) this.___resizeBuffer(this.allocated = lengthToEnsure);
			this.length = lengthToEnsure;
			lengthToEnsure;
		}
		this.data.setUint16(this.position,value,this.littleEndian);
		this.position += 2;
	}
	,writeUnsignedInt: function(value) {
		var lengthToEnsure = this.position + 4;
		if(this.length < lengthToEnsure) {
			if(this.allocated < lengthToEnsure) this.___resizeBuffer(this.allocated = Math.max(lengthToEnsure,this.allocated * 2) | 0); else if(this.allocated > lengthToEnsure) this.___resizeBuffer(this.allocated = lengthToEnsure);
			this.length = lengthToEnsure;
			lengthToEnsure;
		}
		this.data.setUint32(this.position,value,this.littleEndian);
		this.position += 4;
	}
	,writeShort: function(value) {
		var lengthToEnsure = this.position + 2;
		if(this.length < lengthToEnsure) {
			if(this.allocated < lengthToEnsure) this.___resizeBuffer(this.allocated = Math.max(lengthToEnsure,this.allocated * 2) | 0); else if(this.allocated > lengthToEnsure) this.___resizeBuffer(this.allocated = lengthToEnsure);
			this.length = lengthToEnsure;
			lengthToEnsure;
		}
		this.data.setInt16(this.position,value,this.littleEndian);
		this.position += 2;
	}
	,writeInt: function(value) {
		var lengthToEnsure = this.position + 4;
		if(this.length < lengthToEnsure) {
			if(this.allocated < lengthToEnsure) this.___resizeBuffer(this.allocated = Math.max(lengthToEnsure,this.allocated * 2) | 0); else if(this.allocated > lengthToEnsure) this.___resizeBuffer(this.allocated = lengthToEnsure);
			this.length = lengthToEnsure;
			lengthToEnsure;
		}
		this.data.setInt32(this.position,value,this.littleEndian);
		this.position += 4;
	}
	,writeFloat: function(x) {
		var lengthToEnsure = this.position + 4;
		if(this.length < lengthToEnsure) {
			if(this.allocated < lengthToEnsure) this.___resizeBuffer(this.allocated = Math.max(lengthToEnsure,this.allocated * 2) | 0); else if(this.allocated > lengthToEnsure) this.___resizeBuffer(this.allocated = lengthToEnsure);
			this.length = lengthToEnsure;
			lengthToEnsure;
		}
		this.data.setFloat32(this.position,x,this.littleEndian);
		this.position += 4;
	}
	,writeDouble: function(x) {
		var lengthToEnsure = this.position + 8;
		if(this.length < lengthToEnsure) {
			if(this.allocated < lengthToEnsure) this.___resizeBuffer(this.allocated = Math.max(lengthToEnsure,this.allocated * 2) | 0); else if(this.allocated > lengthToEnsure) this.___resizeBuffer(this.allocated = lengthToEnsure);
			this.length = lengthToEnsure;
			lengthToEnsure;
		}
		this.data.setFloat64(this.position,x,this.littleEndian);
		this.position += 8;
	}
	,writeBytes: function(bytes,offset,length) {
		if(offset < 0 || length < 0) throw new flash.errors.IOError("Write error - Out of bounds");
		var lengthToEnsure = this.position + length;
		if(this.length < lengthToEnsure) {
			if(this.allocated < lengthToEnsure) this.___resizeBuffer(this.allocated = Math.max(lengthToEnsure,this.allocated * 2) | 0); else if(this.allocated > lengthToEnsure) this.___resizeBuffer(this.allocated = lengthToEnsure);
			this.length = lengthToEnsure;
			lengthToEnsure;
		}
		this.byteView.set(bytes.byteView.subarray(offset,offset + length),this.position);
		this.position += length;
	}
	,writeByte: function(value) {
		var lengthToEnsure = this.position + 1;
		if(this.length < lengthToEnsure) {
			if(this.allocated < lengthToEnsure) this.___resizeBuffer(this.allocated = Math.max(lengthToEnsure,this.allocated * 2) | 0); else if(this.allocated > lengthToEnsure) this.___resizeBuffer(this.allocated = lengthToEnsure);
			this.length = lengthToEnsure;
			lengthToEnsure;
		}
		var data = this.data;
		data.setInt8(this.position,value);
		this.position += 1;
	}
	,writeBoolean: function(value) {
		this.writeByte(value?1:0);
	}
	,toString: function() {
		var cachePosition = this.position;
		this.position = 0;
		var value = this.readUTFBytes(this.length);
		this.position = cachePosition;
		return value;
	}
	,readUTFBytes: function(len) {
		var value = "";
		var max = this.position + len;
		while(this.position < max) {
			var data = this.data;
			var c = data.getUint8(this.position++);
			if(c < 128) {
				if(c == 0) break;
				value += String.fromCharCode(c);
			} else if(c < 224) value += String.fromCharCode((c & 63) << 6 | data.getUint8(this.position++) & 127); else if(c < 240) {
				var c2 = data.getUint8(this.position++);
				value += String.fromCharCode((c & 31) << 12 | (c2 & 127) << 6 | data.getUint8(this.position++) & 127);
			} else {
				var c2 = data.getUint8(this.position++);
				var c3 = data.getUint8(this.position++);
				value += String.fromCharCode((c & 15) << 18 | (c2 & 127) << 12 | c3 << 6 & 127 | data.getUint8(this.position++) & 127);
			}
		}
		return value;
	}
	,readUTF: function() {
		var bytesCount = this.readUnsignedShort();
		return this.readUTFBytes(bytesCount);
	}
	,readUnsignedShort: function() {
		var uShort = this.data.getUint16(this.position,this.littleEndian);
		this.position += 2;
		return uShort;
	}
	,readUnsignedInt: function() {
		var uInt = this.data.getUint32(this.position,this.littleEndian);
		this.position += 4;
		return uInt;
	}
	,readUnsignedByte: function() {
		var data = this.data;
		return data.getUint8(this.position++);
	}
	,readShort: function() {
		var $short = this.data.getInt16(this.position,this.littleEndian);
		this.position += 2;
		return $short;
	}
	,readInt: function() {
		var $int = this.data.getInt32(this.position,this.littleEndian);
		this.position += 4;
		return $int;
	}
	,readFullBytes: function(bytes,pos,len) {
		if(this.length < len) {
			if(this.allocated < len) this.___resizeBuffer(this.allocated = Math.max(len,this.allocated * 2) | 0); else if(this.allocated > len) this.___resizeBuffer(this.allocated = len);
			this.length = len;
			len;
		}
		var _g1 = pos, _g = pos + len;
		while(_g1 < _g) {
			var i = _g1++;
			var data = this.data;
			data.setInt8(this.position++,bytes.b[i]);
		}
	}
	,readFloat: function() {
		var $float = this.data.getFloat32(this.position,this.littleEndian);
		this.position += 4;
		return $float;
	}
	,readDouble: function() {
		var $double = this.data.getFloat64(this.position,this.littleEndian);
		this.position += 8;
		return $double;
	}
	,readBytes: function(bytes,offset,length) {
		if(offset < 0 || length < 0) throw new flash.errors.IOError("Read error - Out of bounds");
		if(offset == null) offset = 0;
		if(length == null) length = this.length;
		var lengthToEnsure = offset + length;
		if(bytes.length < lengthToEnsure) {
			if(bytes.allocated < lengthToEnsure) bytes.___resizeBuffer(bytes.allocated = Math.max(lengthToEnsure,bytes.allocated * 2) | 0); else if(bytes.allocated > lengthToEnsure) bytes.___resizeBuffer(bytes.allocated = lengthToEnsure);
			bytes.length = lengthToEnsure;
			lengthToEnsure;
		}
		bytes.byteView.set(this.byteView.subarray(this.position,this.position + length),offset);
		bytes.position = offset;
		this.position += length;
		if(bytes.position + length > bytes.length) bytes.set_length(bytes.position + length);
	}
	,readByte: function() {
		var data = this.data;
		return data.getUint8(this.position++);
	}
	,readBoolean: function() {
		return this.readByte() != 0;
	}
	,clear: function() {
		if(this.allocated < 0) this.___resizeBuffer(this.allocated = Math.max(0,this.allocated * 2) | 0); else if(this.allocated > 0) this.___resizeBuffer(this.allocated = 0);
		this.length = 0;
		0;
	}
	,littleEndian: null
	,data: null
	,byteView: null
	,allocated: null
	,position: null
	,objectEncoding: null
	,length: null
	,bytesAvailable: null
	,__class__: flash.utils.ByteArray
	,__properties__: {get_bytesAvailable:"get_bytesAvailable",set_endian:"set_endian",get_endian:"get_endian",set_length:"set_length"}
}
flash.utils.Endian = function() { }
$hxClasses["flash.utils.Endian"] = flash.utils.Endian;
flash.utils.Endian.__name__ = ["flash","utils","Endian"];
flash.utils.Uuid = function() { }
$hxClasses["flash.utils.Uuid"] = flash.utils.Uuid;
flash.utils.Uuid.__name__ = ["flash","utils","Uuid"];
flash.utils.Uuid.random = function(size) {
	if(size == null) size = 32;
	var nchars = "0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ".length;
	var uid = new StringBuf();
	var _g = 0;
	while(_g < size) {
		var i = _g++;
		uid.b += Std.string("0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ".charAt(Math.random() * nchars | 0));
	}
	return uid.b;
}
flash.utils.Uuid.uuid = function() {
	return flash.utils.Uuid.random(8) + "-" + flash.utils.Uuid.random(4) + "-" + flash.utils.Uuid.random(4) + "-" + flash.utils.Uuid.random(4) + "-" + flash.utils.Uuid.random(12);
}
var googleAnalytics = {}
googleAnalytics.Campaign = function(type) {
	this.responseCount = 0;
	if(type != "direct" && type != "organic" && type != "referral") googleAnalytics.Tracker._raiseError("Campaign type has to be one of the Campaign::TYPE_* constant values.","Campaign.new");
	this.type = type;
	switch(type) {
	case "direct":
		this.name = "(direct)";
		this.source = "(direct)";
		this.medium = "(none)";
		break;
	case "referral":
		this.name = "(referral)";
		this.medium = "referral";
		break;
	case "organic":
		this.name = "(organic)";
		this.medium = "organic";
		break;
	}
	this.creationTime = new googleAnalytics.DateTime();
};
$hxClasses["googleAnalytics.Campaign"] = googleAnalytics.Campaign;
googleAnalytics.Campaign.__name__ = ["googleAnalytics","Campaign"];
googleAnalytics.Campaign.createFromReferrer = function(url) {
	var instance = new googleAnalytics.Campaign("referral");
	var urlInfo = new googleAnalytics.URLParser(url);
	instance.source = urlInfo.host;
	instance.content = urlInfo.path;
	return instance;
}
googleAnalytics.Campaign.prototype = {
	getContent: function() {
		return this.content;
	}
	,setContent: function(content) {
		this.content = content;
	}
	,getTerm: function() {
		return this.term;
	}
	,setTerm: function(term) {
		this.term = term;
	}
	,getMedium: function() {
		return this.medium;
	}
	,setMedium: function(medium) {
		this.medium = medium;
	}
	,getName: function() {
		return this.name;
	}
	,setName: function(name) {
		this.name = name;
	}
	,getDClickId: function() {
		return this.dClickId;
	}
	,setDClickId: function(dClickId) {
		this.dClickId = dClickId;
	}
	,getGClickId: function() {
		return this.gClickId;
	}
	,setGClickId: function(gClickId) {
		this.gClickId = gClickId;
	}
	,getSource: function() {
		return this.source;
	}
	,setSource: function(source) {
		this.source = source;
	}
	,getId: function() {
		return this.id;
	}
	,setId: function(id) {
		this.id = id;
	}
	,increaseResponseCount: function(byAmount) {
		if(byAmount == null) byAmount = 1;
		this.responseCount += byAmount;
	}
	,getResponseCount: function() {
		return this.responseCount;
	}
	,setResponseCount: function(responseCount) {
		this.responseCount = responseCount;
	}
	,getCreationTime: function() {
		return this.creationTime;
	}
	,setCreationTime: function(creationTime) {
		this.creationTime = creationTime;
	}
	,getType: function() {
		return this.type;
	}
	,setType: function(type) {
		this.type = type;
	}
	,validate: function() {
		if(this.source == null) googleAnalytics.Tracker._raiseError("Campaigns need to have at least the \"source\" attribute defined.","Campaign.validate");
	}
	,content: null
	,term: null
	,medium: null
	,name: null
	,dClickId: null
	,gClickId: null
	,source: null
	,id: null
	,responseCount: null
	,creationTime: null
	,type: null
	,__class__: googleAnalytics.Campaign
}
googleAnalytics.Config = function() {
	this.sitespeedSampleRate = 1;
	this.endPointPath = "/__utm.gif";
	this.endPointHost = "www.google-analytics.com";
	this.requestTimeout = 1;
	this.fireAndForget = false;
	this.sendOnShutdown = false;
	this.errorSeverity = 2;
};
$hxClasses["googleAnalytics.Config"] = googleAnalytics.Config;
googleAnalytics.Config.__name__ = ["googleAnalytics","Config"];
googleAnalytics.Config.prototype = {
	setSitespeedSampleRate: function(sitespeedSampleRate) {
		if(sitespeedSampleRate < 0 || sitespeedSampleRate > 100) {
			googleAnalytics.Tracker._raiseError("For consistency with ga.js, sample rates must be specified as a number between 0 and 100.","config.setSitespeedSampleRate");
			return;
		}
		this.sitespeedSampleRate = sitespeedSampleRate;
	}
	,getSitespeedSampleRate: function() {
		return this.sitespeedSampleRate;
	}
	,setEndPointPath: function(endPointPath) {
		this.endPointPath = endPointPath;
	}
	,getEndPointPath: function() {
		return this.endPointPath;
	}
	,setEndPointHost: function(endPointHost) {
		this.endPointHost = endPointHost;
	}
	,getEndPointHost: function() {
		return this.endPointHost;
	}
	,setRequestTimeout: function(requestTimeout) {
		this.requestTimeout = requestTimeout;
	}
	,getRequestTimeout: function() {
		return this.requestTimeout;
	}
	,setLoggingCallback: function(cb) {
		this.loggingCallback = cb;
	}
	,getLoggingCallback: function() {
		return this.loggingCallback;
	}
	,setFireAndForget: function(fireAndForget) {
		this.fireAndForget = fireAndForget;
	}
	,getFireAndForget: function() {
		return this.fireAndForget;
	}
	,setSendOnShutdown: function(sendOnShutdown) {
		this.sendOnShutdown = sendOnShutdown;
	}
	,getSendOnShutdown: function() {
		return this.sendOnShutdown;
	}
	,setErrorSeverity: function(errorSeverity) {
		this.errorSeverity = errorSeverity;
	}
	,getErrorSeverity: function() {
		return this.errorSeverity;
	}
	,sitespeedSampleRate: null
	,endPointPath: null
	,endPointHost: null
	,requestTimeout: null
	,loggingCallback: null
	,fireAndForget: null
	,sendOnShutdown: null
	,errorSeverity: null
	,__class__: googleAnalytics.Config
}
googleAnalytics.CustomVariable = function(index,name,value,scope) {
	if(scope == null) scope = 0;
	if(index == null) index = 0;
	this.scope = 3;
	if(index != 0) this.setIndex(index);
	if(name != null) this.setName(name);
	if(value != null) this.setValue(value);
	if(scope != 0) this.setScope(scope);
};
$hxClasses["googleAnalytics.CustomVariable"] = googleAnalytics.CustomVariable;
googleAnalytics.CustomVariable.__name__ = ["googleAnalytics","CustomVariable"];
googleAnalytics.CustomVariable.prototype = {
	setScope: function(scope) {
		if(scope != 3 && scope != 2 && scope != 1) googleAnalytics.Tracker._raiseError("Custom Variable scope has to be one of the CustomVariable::SCOPE_* constant values.","CustomVariable.setScope");
		this.scope = scope;
	}
	,getScope: function() {
		return this.scope;
	}
	,setValue: function(value) {
		this.value = value;
	}
	,getValue: function() {
		return this.value;
	}
	,setName: function(name) {
		this.name = name;
	}
	,getName: function() {
		return this.name;
	}
	,setIndex: function(index) {
		if(index < 1 || index > 5) googleAnalytics.Tracker._raiseError("Custom Variable index has to be between 1 and 5.","CustomVariable.setIndex");
		this.index = index;
	}
	,getIndex: function() {
		return this.index;
	}
	,validate: function() {
		if((this.name + Std.string(this.value)).length > 128) googleAnalytics.Tracker._raiseError("Custom Variable combined name and value length must not be larger than 128 bytes.","CustomVariable.validate");
	}
	,scope: null
	,value: null
	,name: null
	,index: null
	,__class__: googleAnalytics.CustomVariable
}
googleAnalytics.DateTime = function(current) {
	if(current == null) this.date = Math.round(new Date().getTime()) + ""; else this.date = current;
};
$hxClasses["googleAnalytics.DateTime"] = googleAnalytics.DateTime;
googleAnalytics.DateTime.__name__ = ["googleAnalytics","DateTime"];
googleAnalytics.DateTime.prototype = {
	toString: function() {
		return this.date;
	}
	,date: null
	,__class__: googleAnalytics.DateTime
}
googleAnalytics.Event = function(category,action,label,value,noninteraction) {
	if(noninteraction == null) noninteraction = false;
	if(value == null) value = 0;
	this.noninteraction = false;
	if(category != null) this.setCategory(category);
	if(action != null) this.setAction(action);
	if(label != null) this.setLabel(label);
	this.setValue(value);
	this.setNoninteraction(noninteraction);
};
$hxClasses["googleAnalytics.Event"] = googleAnalytics.Event;
googleAnalytics.Event.__name__ = ["googleAnalytics","Event"];
googleAnalytics.Event.prototype = {
	setNoninteraction: function(value) {
		this.noninteraction = value;
	}
	,getNoninteraction: function() {
		return this.noninteraction;
	}
	,setValue: function(value) {
		this.value = value;
	}
	,getValue: function() {
		return this.value;
	}
	,setLabel: function(label) {
		this.label = label;
	}
	,getLabel: function() {
		return this.label;
	}
	,setAction: function(action) {
		this.action = action;
	}
	,getAction: function() {
		return this.action;
	}
	,setCategory: function(category) {
		this.category = category;
	}
	,getCategory: function() {
		return this.category;
	}
	,validate: function() {
		if(this.category == null || this.action == null) googleAnalytics.Tracker._raiseError("Events need at least to have a category and action defined.","Event.validate");
	}
	,noninteraction: null
	,value: null
	,label: null
	,action: null
	,category: null
	,__class__: googleAnalytics.Event
}
googleAnalytics.Item = function() {
	this.quantity = 1;
};
$hxClasses["googleAnalytics.Item"] = googleAnalytics.Item;
googleAnalytics.Item.__name__ = ["googleAnalytics","Item"];
googleAnalytics.Item.prototype = {
	setQuantity: function(quantity) {
		this.quantity = quantity;
	}
	,getQuantity: function() {
		return this.quantity;
	}
	,setPrice: function(price) {
		this.price = price;
	}
	,getPrice: function() {
		return this.price;
	}
	,setVariation: function(variation) {
		this.variation = variation;
	}
	,getVariation: function() {
		return this.variation;
	}
	,setName: function(name) {
		this.name = name;
	}
	,getName: function() {
		return this.name;
	}
	,setSku: function(sku) {
		this.sku = sku;
	}
	,getSku: function() {
		return this.sku;
	}
	,setOrderId: function(orderId) {
		this.orderId = orderId;
	}
	,getOrderId: function() {
		return this.orderId;
	}
	,validate: function() {
		if(this.sku == null) googleAnalytics.Tracker._raiseError("Items need to have a sku/product code defined.","Item.validate");
	}
	,quantity: null
	,price: null
	,variation: null
	,name: null
	,sku: null
	,orderId: null
	,__class__: googleAnalytics.Item
}
googleAnalytics.Page = function(path) {
	this.setPath(path);
};
$hxClasses["googleAnalytics.Page"] = googleAnalytics.Page;
googleAnalytics.Page.__name__ = ["googleAnalytics","Page"];
googleAnalytics.Page.prototype = {
	getLoadTime: function() {
		return this.loadTime;
	}
	,setLoadTime: function(loadTime) {
		this.loadTime = loadTime;
	}
	,getReferrer: function() {
		return this.referrer;
	}
	,setReferrer: function(referrer) {
		this.referrer = referrer;
	}
	,getCharset: function() {
		return this.charset;
	}
	,setCharset: function(encoding) {
		this.charset = encoding;
	}
	,getTitle: function() {
		return this.title;
	}
	,setTitle: function(title) {
		this.title = title;
	}
	,getPath: function() {
		return this.path;
	}
	,setPath: function(path) {
		if(path != null && path.charAt(0) != "/") googleAnalytics.Tracker._raiseError("The page path should always start with a slash (\"/\").","Page.setPath");
		this.path = path;
	}
	,loadTime: null
	,referrer: null
	,charset: null
	,title: null
	,path: null
	,__class__: googleAnalytics.Page
}
googleAnalytics.Session = function() {
	this.setSessionId(this.generateSessionId());
	this.setTrackCount(0);
	this.setStartTime(new googleAnalytics.DateTime());
};
$hxClasses["googleAnalytics.Session"] = googleAnalytics.Session;
googleAnalytics.Session.__name__ = ["googleAnalytics","Session"];
googleAnalytics.Session.prototype = {
	setStartTime: function(startTime) {
		this.startTime = startTime;
	}
	,getStartTime: function() {
		return this.startTime;
	}
	,increaseTrackCount: function(byAmount) {
		if(byAmount == null) byAmount = 1;
		this.trackCount += byAmount;
	}
	,setTrackCount: function(trackCount) {
		this.trackCount = trackCount;
	}
	,getTrackCount: function() {
		return this.trackCount;
	}
	,setSessionId: function(sessionId) {
		this.sessionId = sessionId;
	}
	,getSessionId: function() {
		return this.sessionId;
	}
	,generateSessionId: function() {
		return googleAnalytics.internals.Util.generate32bitRandom();
	}
	,fromUtmb: function(value) {
		var parts = value.split(".");
		if(parts.length != 4) {
			googleAnalytics.Tracker._raiseError("The given \"__utmb\" cookie value is invalid.","Session.fromUtmb");
			return this;
		}
		this.setTrackCount(googleAnalytics.internals.Util.parseInt(parts[1],0));
		this.setStartTime(new googleAnalytics.DateTime(parts[3]));
		return this;
	}
	,startTime: null
	,trackCount: null
	,sessionId: null
	,__class__: googleAnalytics.Session
}
googleAnalytics.SocialInteraction = function(network,action,target) {
	if(network != null) this.setNetwork(network);
	if(action != null) this.setAction(action);
	if(target != null) this.setTarget(target);
};
$hxClasses["googleAnalytics.SocialInteraction"] = googleAnalytics.SocialInteraction;
googleAnalytics.SocialInteraction.__name__ = ["googleAnalytics","SocialInteraction"];
googleAnalytics.SocialInteraction.prototype = {
	getTarget: function() {
		return this.target;
	}
	,setTarget: function(target) {
		this.target = target;
	}
	,getAction: function() {
		return this.action;
	}
	,setAction: function(action) {
		this.action = action;
	}
	,getNetwork: function() {
		return this.network;
	}
	,setNetwork: function(network) {
		this.network = network;
	}
	,validate: function() {
		if(this.network == null || this.action == null) googleAnalytics.Tracker._raiseError("Social interactions need to have at least the \"network\" and \"action\" attributes defined.","SocialInteraction.validate");
	}
	,target: null
	,action: null
	,network: null
	,__class__: googleAnalytics.SocialInteraction
}
googleAnalytics.Tracker = function(accountId,domainName,config) {
	this.allowHash = true;
	this.customVariables = new Array();
	googleAnalytics.Tracker.setConfig(config != null?config:new googleAnalytics.Config());
	this.setAccountId(accountId);
	this.setDomainName(domainName);
};
$hxClasses["googleAnalytics.Tracker"] = googleAnalytics.Tracker;
googleAnalytics.Tracker.__name__ = ["googleAnalytics","Tracker"];
googleAnalytics.Tracker.getConfig = function() {
	return googleAnalytics.Tracker.config;
}
googleAnalytics.Tracker.setConfig = function(config) {
	googleAnalytics.Tracker.config = config;
}
googleAnalytics.Tracker._raiseError = function(message,method) {
	message = method + "(): " + message;
	var errorSeverity = googleAnalytics.Tracker.config != null?googleAnalytics.Tracker.config.getErrorSeverity():0;
	switch(errorSeverity) {
	case 1:
		haxe.Log.trace(message,{ fileName : "Tracker.hx", lineNumber : 253, className : "googleAnalytics.Tracker", methodName : "_raiseError"});
		break;
	case 2:
		throw message;
		break;
	case 0:
		break;
	default:
	}
}
googleAnalytics.Tracker.prototype = {
	trackSocial: function(socialInteraction,page,session,visitor) {
		var request = new googleAnalytics.internals.request.SocialInteractionRequest(googleAnalytics.Tracker.config);
		request.setSocialInteraction(socialInteraction);
		request.setPage(page);
		request.setSession(session);
		request.setVisitor(visitor);
		request.setTracker(this);
		request.send();
	}
	,trackTransaction: function(transaction,session,visitor) {
		transaction.validate();
		var transactionRequest = new googleAnalytics.internals.request.TransactionRequest(googleAnalytics.Tracker.config);
		transactionRequest.setTransaction(transaction);
		transactionRequest.setSession(session);
		transactionRequest.setVisitor(visitor);
		transactionRequest.setTracker(this);
		transactionRequest.send();
		var item;
		var $it0 = ((function(_e) {
			return function() {
				return _e.iterator();
			};
		})(transaction.getItems()))();
		while( $it0.hasNext() ) {
			var item1 = $it0.next();
			item1.validate();
			var itemRequest = new googleAnalytics.internals.request.ItemRequest(googleAnalytics.Tracker.config);
			itemRequest.setItem(item1);
			itemRequest.setSession(session);
			itemRequest.setVisitor(visitor);
			itemRequest.setTracker(this);
			itemRequest.send();
		}
	}
	,trackEvent: function(event,session,visitor) {
		event.validate();
		var request = new googleAnalytics.internals.request.EventRequest(googleAnalytics.Tracker.config);
		request.setEvent(event);
		request.setSession(session);
		request.setVisitor(visitor);
		request.setTracker(this);
		request.send();
	}
	,trackPageview: function(page,session,visitor) {
		var request = new googleAnalytics.internals.request.PageviewRequest(googleAnalytics.Tracker.config);
		request.setPage(page);
		request.setSession(session);
		request.setVisitor(visitor);
		request.setTracker(this);
		request.send();
	}
	,getCampaign: function() {
		return this.campaign;
	}
	,setCampaign: function(campaign) {
		if(campaign != null) campaign.validate();
		this.campaign = campaign;
	}
	,removeCustomVariable: function(index) {
		HxOverrides.remove(this.customVariables,this.customVariables[index]);
	}
	,getCustomVariables: function() {
		return this.customVariables;
	}
	,addCustomVariable: function(customVariable) {
		customVariable.validate();
		this.customVariables[customVariable.getIndex()] = customVariable;
	}
	,getAllowHash: function() {
		return this.allowHash;
	}
	,setAllowHash: function(value) {
		this.allowHash = value;
	}
	,getDomainName: function() {
		return this.domainName;
	}
	,setDomainName: function(value) {
		this.domainName = value;
	}
	,getAccountId: function() {
		return this.accountId;
	}
	,setAccountId: function(value) {
		var r = new EReg("^(UA|MO)-[0-9]*-[0-9]*$","");
		if(!r.match(value)) googleAnalytics.Tracker._raiseError("\"" + value + "\" is not a valid Google Analytics account ID.","Tracker.setAccountId");
		this.accountId = value;
	}
	,campaign: null
	,customVariables: null
	,allowHash: null
	,domainName: null
	,accountId: null
	,__class__: googleAnalytics.Tracker
}
googleAnalytics.Transaction = function() {
	this.items = new haxe.ds.StringMap();
};
$hxClasses["googleAnalytics.Transaction"] = googleAnalytics.Transaction;
googleAnalytics.Transaction.__name__ = ["googleAnalytics","Transaction"];
googleAnalytics.Transaction.prototype = {
	setCountry: function(country) {
		this.country = country;
	}
	,getCountry: function() {
		return this.country;
	}
	,setRegion: function(region) {
		this.region = region;
	}
	,getRegion: function() {
		return this.region;
	}
	,setCity: function(city) {
		this.city = city;
	}
	,getCity: function() {
		return this.city;
	}
	,setShipping: function(shipping) {
		this.shipping = shipping;
	}
	,getShipping: function() {
		return this.shipping;
	}
	,setTax: function(tax) {
		this.tax = tax;
	}
	,getTax: function() {
		return this.tax;
	}
	,setTotal: function(total) {
		this.total = total;
	}
	,getTotal: function() {
		return this.total;
	}
	,setAffiliation: function(affiliation) {
		this.affiliation = affiliation;
	}
	,getAffiliation: function() {
		return this.affiliation;
	}
	,setOrderId: function(orderId) {
		this.orderId = orderId;
		var $it0 = ((function(_e) {
			return function() {
				return _e.iterator();
			};
		})(this.items))();
		while( $it0.hasNext() ) {
			var item = $it0.next();
			item.setOrderId(orderId);
		}
	}
	,getOrderId: function() {
		return this.orderId;
	}
	,getItems: function() {
		return this.items;
	}
	,addItem: function(item) {
		item.setOrderId(this.orderId);
		this.items.set(item.getSku(),item);
	}
	,validate: function() {
		if(this.items == null) googleAnalytics.Tracker._raiseError("Transactions need to consist of at least one item.","Transaction.validate");
	}
	,items: null
	,country: null
	,region: null
	,city: null
	,shipping: null
	,tax: null
	,total: null
	,affiliation: null
	,orderId: null
	,__class__: googleAnalytics.Transaction
}
googleAnalytics.URLParser = function(url) {
	this.url = url;
	var r = new EReg("^(?:(?![^:@]+:[^:@/]*@)([^:/?#.]+):)?(?://)?((?:(([^:@]*)(?::([^:@]*))?)?@)?([^:/?#]*)(?::(\\d*))?)(((/(?:[^?#](?![^?#/]*\\.[^?#/.]+(?:[?#]|$)))*/?)?([^?#/]*))(?:\\?([^#]*))?(?:#(.*))?)","");
	r.match(url);
	var _g1 = 0, _g = googleAnalytics.URLParser.parts.length;
	while(_g1 < _g) {
		var i = _g1++;
		this[googleAnalytics.URLParser.parts[i]] = r.matched(i);
	}
};
$hxClasses["googleAnalytics.URLParser"] = googleAnalytics.URLParser;
googleAnalytics.URLParser.__name__ = ["googleAnalytics","URLParser"];
googleAnalytics.URLParser.parse = function(url) {
	return new googleAnalytics.URLParser(url);
}
googleAnalytics.URLParser.prototype = {
	toString: function() {
		var s = "For Url -> " + this.url + "\n";
		var _g1 = 0, _g = googleAnalytics.URLParser.parts.length;
		while(_g1 < _g) {
			var i = _g1++;
			s += googleAnalytics.URLParser.parts[i] + ": " + Std.string(Reflect.field(this,googleAnalytics.URLParser.parts[i])) + (i == googleAnalytics.URLParser.parts.length - 1?"":"\n");
		}
		return s;
	}
	,anchor: null
	,query: null
	,file: null
	,directory: null
	,path: null
	,relative: null
	,port: null
	,host: null
	,password: null
	,user: null
	,userInfo: null
	,authority: null
	,protocol: null
	,source: null
	,url: null
	,__class__: googleAnalytics.URLParser
}
googleAnalytics.Visitor = function() {
	var now = new googleAnalytics.DateTime();
	this.uniqueId = 0;
	this.setFirstVisitTime(now);
	this.setPreviousVisitTime(now);
	this.setCurrentVisitTime(now);
	this.setVisitCount(1);
};
$hxClasses["googleAnalytics.Visitor"] = googleAnalytics.Visitor;
googleAnalytics.Visitor.__name__ = ["googleAnalytics","Visitor"];
googleAnalytics.Visitor.prototype = {
	getScreenResolution: function() {
		return this.screenResolution;
	}
	,setScreenResolution: function(value) {
		this.screenResolution = value;
	}
	,getScreenColorDepth: function() {
		return this.screenColorDepth;
	}
	,setScreenColorDepth: function(value) {
		this.screenColorDepth = value;
	}
	,getJavaEnabled: function() {
		return this.javaEnabled;
	}
	,setJavaEnabled: function(value) {
		this.javaEnabled = value;
	}
	,getFlashVersion: function() {
		return this.flashVersion;
	}
	,setFlashVersion: function(value) {
		this.flashVersion = value;
	}
	,getLocale: function() {
		return this.locale;
	}
	,setLocale: function(value) {
		this.locale = value;
	}
	,getUserAgent: function() {
		return this.userAgent;
	}
	,setUserAgent: function(value) {
		this.userAgent = value;
	}
	,getIpAddress: function() {
		return this.ipAddress;
	}
	,setIpAddress: function(value) {
		this.ipAddress = value;
	}
	,getVisitCount: function() {
		return this.visitCount;
	}
	,setVisitCount: function(value) {
		this.visitCount = value;
	}
	,getCurrentVisitTime: function() {
		return this.currentVisitTime;
	}
	,setCurrentVisitTime: function(value) {
		this.currentVisitTime = value;
	}
	,getPreviousVisitTime: function() {
		return this.previousVisitTime;
	}
	,setPreviousVisitTime: function(value) {
		this.previousVisitTime = value;
	}
	,getFirstVisitTime: function() {
		return this.firstVisitTime;
	}
	,setFirstVisitTime: function(value) {
		this.firstVisitTime = value;
	}
	,addSession: function(session) {
		var startTime = session.getStartTime();
		if(startTime != this.currentVisitTime) {
			this.previousVisitTime = this.currentVisitTime;
			this.currentVisitTime = startTime;
			++this.visitCount;
		}
	}
	,getUniqueId: function() {
		if(this.uniqueId == 0) this.uniqueId = this.generateUniqueId();
		return this.uniqueId;
	}
	,setUniqueId: function(value) {
		if(value < 0 || value > 2147483647) googleAnalytics.Tracker._raiseError("Visitor unique ID has to be a 32-bit integer between 0 and " + 2147483647 + ".","Visitor.setUniqueId");
		this.uniqueId = value;
	}
	,generateUniqueId: function() {
		return (googleAnalytics.internals.Util.generate32bitRandom() ^ this.generateHash()) & 2147483647;
	}
	,generateHash: function() {
		return googleAnalytics.internals.Util.generateHash(this.userAgent + this.screenResolution + this.screenColorDepth);
	}
	,fromUtma: function(value) {
		var parts = value.split(".");
		if(parts.length != 6) {
			googleAnalytics.Tracker._raiseError("The given \"__utma\" cookie value is invalid.","Visitor.fromUtma");
			return this;
		}
		this.setUniqueId(googleAnalytics.internals.Util.parseInt(parts[1],0));
		this.setFirstVisitTime(new googleAnalytics.DateTime(parts[2]));
		this.setPreviousVisitTime(new googleAnalytics.DateTime(parts[3]));
		this.setCurrentVisitTime(new googleAnalytics.DateTime(parts[4]));
		this.setVisitCount(googleAnalytics.internals.Util.parseInt(parts[5],0));
		return this;
	}
	,screenResolution: null
	,screenColorDepth: null
	,javaEnabled: null
	,flashVersion: null
	,locale: null
	,userAgent: null
	,ipAddress: null
	,visitCount: null
	,currentVisitTime: null
	,previousVisitTime: null
	,firstVisitTime: null
	,uniqueId: null
	,__class__: googleAnalytics.Visitor
}
googleAnalytics.internals = {}
googleAnalytics.internals.ParameterHolder = function() {
	this.utmwv = "5.2.5";
	this.utmr = this.utmcs = this.utmfl = this.utmje = "0";
};
$hxClasses["googleAnalytics.internals.ParameterHolder"] = googleAnalytics.internals.ParameterHolder;
googleAnalytics.internals.ParameterHolder.__name__ = ["googleAnalytics","internals","ParameterHolder"];
googleAnalytics.internals.ParameterHolder.prototype = {
	toQueryString: function() {
		var qs = "";
		var property = "utmac";
		qs += property + "=" + StringTools.replace(Std.string(Reflect.field(this,property)) + "","&","%26") + "&";
		var _g = 0, _g1 = Type.getInstanceFields(googleAnalytics.internals.ParameterHolder);
		while(_g < _g1.length) {
			var property1 = _g1[_g];
			++_g;
			if(property1 != "utmac" && property1.charAt(0) != "_" && !Reflect.isFunction(Reflect.field(this,property1)) && Reflect.field(this,property1) != null && Reflect.field(this,property1) != "null") qs += property1 + "=" + StringTools.replace(Std.string(Reflect.field(this,property1)) + "","&","%26") + "&";
		}
		return qs;
	}
	,toHashTable: function() {
		var hash = new haxe.ds.StringMap();
		var property;
		var _g = 0, _g1 = Type.getInstanceFields(googleAnalytics.internals.ParameterHolder);
		while(_g < _g1.length) {
			var property1 = _g1[_g];
			++_g;
			if(property1.charAt(0) != "_" && !Reflect.isFunction(Reflect.field(this,property1))) {
				var value = Reflect.field(this,property1);
				hash.set(property1,value);
			}
		}
		return hash;
	}
	,__utmv: null
	,__utmx: null
	,utmsid: null
	,utmsa: null
	,utmsn: null
	,__utmz: null
	,utmcvr: null
	,utmcct: null
	,utmctr: null
	,utmcmd: null
	,utmccn: null
	,utmdclid: null
	,utmgclid: null
	,utmcsr: null
	,utmcid: null
	,utmcr: null
	,utmcn: null
	,utmtco: null
	,utmtrg: null
	,utmtci: null
	,utmtsp: null
	,utmttx: null
	,utmtto: null
	,utmtst: null
	,utmtid: null
	,utmiva: null
	,utmiqt: null
	,utmipr: null
	,utmipn: null
	,utmipc: null
	,__utmc: null
	,__utmb: null
	,utmhid: null
	,__utma: null
	,utmsr: null
	,utmsc: null
	,utmje: null
	,utmfl: null
	,utmul: null
	,utmip: null
	,utmr: null
	,utmcs: null
	,utmdt: null
	,utmp: null
	,utmu: null
	,utmni: null
	,utme: null
	,utmcc: null
	,utmn: null
	,utms: null
	,utmt: null
	,utmvid: null
	,utmhn: null
	,utmac: null
	,utmwv: null
	,__class__: googleAnalytics.internals.ParameterHolder
}
googleAnalytics.internals.Util = function() { }
$hxClasses["googleAnalytics.internals.Util"] = googleAnalytics.internals.Util;
googleAnalytics.internals.Util.__name__ = ["googleAnalytics","internals","Util"];
googleAnalytics.internals.Util.encodeUriComponent = function(value) {
	return googleAnalytics.internals.Util.convertToUriComponentEncoding(StringTools.urlEncode(value));
}
googleAnalytics.internals.Util.stringReplaceArray = function(s,sub,by) {
	var _g1 = 0, _g = sub.length;
	while(_g1 < _g) {
		var i = _g1++;
		if(sub[i] == null) continue;
		s = StringTools.replace(s + " ",sub[i],by[i]);
	}
	return StringTools.trim(s);
}
googleAnalytics.internals.Util.parseInt = function(s,defaultVal) {
	return s == null?defaultVal:Std.parseInt(s);
}
googleAnalytics.internals.Util.convertToUriComponentEncoding = function(encodedValue) {
	return googleAnalytics.internals.Util.stringReplaceArray(encodedValue,["!","*","'","(",")"," ","+"],["%21","%2A","%27","%28","%29","%20","%20"]);
}
googleAnalytics.internals.Util.generate32bitRandom = function() {
	return Math.round(Math.random() * 2147483647);
}
googleAnalytics.internals.Util.generateHash = function(string) {
	var hash = 1;
	var current;
	var leftMost7;
	if(string != null && string != "") {
		hash = 0;
		var pos = string.length - 1;
		while(pos >= 0) {
			current = HxOverrides.cca(string,pos);
			hash = (hash << 6 & 268435455) + current + (current << 14);
			leftMost7 = hash & 266338304;
			if(leftMost7 != 0) hash ^= leftMost7 >> 21;
			pos--;
		}
	}
	return hash;
}
googleAnalytics.internals.X10 = function() {
	this.projectData = new haxe.ds.StringMap();
	this.KEY = "k";
	this.VALUE = "v";
	this.SET = ["k","v"];
	this.DELIM_BEGIN = "(";
	this.DELIM_END = ")";
	this.DELIM_SET = "*";
	this.DELIM_NUM_VALUE = "!";
	this.MINIMUM = 1;
	this.ESCAPE_CHAR_MAP = new haxe.ds.StringMap();
	this.ESCAPE_CHAR_MAP.set("'","'0");
	this.ESCAPE_CHAR_MAP.set(")","'1");
	this.ESCAPE_CHAR_MAP.set("*","'2");
	this.ESCAPE_CHAR_MAP.set("!","'3");
};
$hxClasses["googleAnalytics.internals.X10"] = googleAnalytics.internals.X10;
googleAnalytics.internals.X10.__name__ = ["googleAnalytics","internals","X10"];
googleAnalytics.internals.X10.prototype = {
	renderUrlString: function() {
		var result = "";
		var $it0 = this.projectData.keys();
		while( $it0.hasNext() ) {
			var projectId = $it0.next();
			result += projectId + this.renderProject(this.projectData.get(projectId));
		}
		return result;
	}
	,renderProject: function(project) {
		var result = "";
		var needTypeQualifier = false;
		var _g1 = 0, _g = this.SET.length;
		while(_g1 < _g) {
			var i = _g1++;
			if(project.exists(this.SET[i])) {
				if(needTypeQualifier) result += this.SET[i];
				result += this.renderDataType(project.get(this.SET[i]));
				needTypeQualifier = false;
			} else needTypeQualifier = true;
		}
		return result;
	}
	,renderDataType: function(data) {
		var result = new Array();
		var lastI = 0;
		var _g1 = 0, _g = data.length;
		while(_g1 < _g) {
			var i = _g1++;
			var entry = data[i];
			if(entry != null) {
				var str = "";
				if(i != this.MINIMUM && i - 1 != lastI) {
					str += i;
					str += this.DELIM_NUM_VALUE;
				}
				str += this.escapeExtensibleValue(entry);
				result.push(str);
			}
			lastI = i;
		}
		return this.DELIM_BEGIN + result.join(this.DELIM_SET) + this.DELIM_END;
	}
	,SORT_NUMERIC: function(v1,v2) {
		if(v1 == v2) return 0;
		if(v1 > v2) return 1;
		return -1;
	}
	,escapeExtensibleValue: function(value) {
		var result = "";
		var _g1 = 0, _g = value.length;
		while(_g1 < _g) {
			var i = _g1++;
			var $char = value.charAt(i);
			if(this.ESCAPE_CHAR_MAP.exists($char)) result += this.ESCAPE_CHAR_MAP.get($char); else result += $char;
		}
		return result;
	}
	,clearInternal: function(projectId,type) {
		if(this.projectData.exists(projectId) && this.projectData.get(projectId).exists(type)) this.projectData.get(projectId).remove(type);
	}
	,getInternal: function(projectId,type,num) {
		if(!this.projectData.exists(projectId)) return null;
		var p = this.projectData.get(projectId);
		if(!p.exists(type)) return null;
		var a = p.get(type);
		if(a[num] == null) return null;
		return a[num];
	}
	,setInternal: function(projectId,type,num,value) {
		if(!this.projectData.exists(projectId)) this.projectData.set(projectId,new haxe.ds.StringMap());
		var p = this.projectData.get(projectId);
		if(!p.exists(type)) p.set(type,new Array());
		p.get(type)[num] = value;
	}
	,clearValue: function(projectId) {
		this.clearInternal(projectId,this.VALUE);
	}
	,getValue: function(projectId,num) {
		return this.getInternal(projectId,this.VALUE,num);
	}
	,setValue: function(projectId,num,value) {
		this.setInternal(projectId,this.VALUE,num,value);
	}
	,clearKey: function(projectId) {
		this.clearInternal(projectId,this.KEY);
	}
	,getKey: function(projectId,num) {
		return this.getInternal(projectId,this.KEY,num);
	}
	,setKey: function(projectId,num,value) {
		this.setInternal(projectId,this.KEY,num,value);
	}
	,hasProject: function(projectId) {
		return this.projectData.exists(projectId);
	}
	,MINIMUM: null
	,ESCAPE_CHAR_MAP: null
	,DELIM_NUM_VALUE: null
	,DELIM_SET: null
	,DELIM_END: null
	,DELIM_BEGIN: null
	,SET: null
	,VALUE: null
	,KEY: null
	,projectData: null
	,__class__: googleAnalytics.internals.X10
}
googleAnalytics.internals.request = {}
googleAnalytics.internals.request.Request = function(config) {
	this.setConfig(config != null?config:new googleAnalytics.Config());
};
$hxClasses["googleAnalytics.internals.request.Request"] = googleAnalytics.internals.request.Request;
googleAnalytics.internals.request.Request.__name__ = ["googleAnalytics","internals","request","Request"];
googleAnalytics.internals.request.Request.prototype = {
	generateDomainHash: function() {
		var hash = 1;
		if(this.tracker.getAllowHash()) hash = googleAnalytics.internals.Util.generateHash(this.tracker.getDomainName());
		return hash;
	}
	,buildCampaignParameters: function(p) {
		var campaign = this.tracker.getCampaign();
		if(campaign == null) return p;
		p.__utmz = this.generateDomainHash() + ".";
		p.__utmz += campaign.getCreationTime().toString() + ".";
		p.__utmz += this.visitor.getVisitCount() + ".";
		p.__utmz += campaign.getResponseCount() + ".";
		var data = "utmcid=" + campaign.getId() + "|" + "utmcsr=" + campaign.getSource() + "|" + "utmgclid=" + campaign.getGClickId() + "|" + "utmdclid=" + campaign.getDClickId() + "|" + "utmccn=" + campaign.getName() + "|" + "utmcmd=" + campaign.getMedium() + "|" + "utmctr=" + campaign.getTerm() + "|" + "utmcct=" + campaign.getContent();
		p.__utmz += StringTools.replace(StringTools.replace(data,"+","%20")," ","%20");
		return p;
	}
	,buildCookieParameters: function(p) {
		var domainHash = this.generateDomainHash();
		p.__utma = domainHash + ".";
		p.__utma += this.visitor.getUniqueId() + ".";
		p.__utma += this.visitor.getFirstVisitTime().toString() + ".";
		p.__utma += this.visitor.getPreviousVisitTime().toString() + ".";
		p.__utma += this.visitor.getCurrentVisitTime().toString() + ".";
		p.__utma += this.visitor.getVisitCount();
		p.__utmb = domainHash + ".";
		p.__utmb += this.session.getTrackCount() + ".";
		p.__utmb += 10 + ".";
		p.__utmb += this.session.getStartTime().toString();
		p.__utmc = domainHash;
		var cookies = "__utma=" + p.__utma + ";";
		if(p.__utmz != null) cookies += "+__utmz=" + p.__utmz + ";";
		if(p.__utmv != null) cookies += "+__utmv=" + p.__utmv + ";";
		p.utmcc = cookies;
		return p;
	}
	,buildCustomVariablesParameter: function(p) {
		var customVars = this.tracker.getCustomVariables();
		if(customVars == null) return p;
		if(customVars.length > 5) googleAnalytics.Tracker._raiseError("The sum of all custom variables cannot exceed 5 in any given request.","Request.buildCustomVariablesParameter");
		var x10 = new googleAnalytics.internals.X10();
		var name;
		var value;
		x10.clearKey("8");
		x10.clearKey("9");
		x10.clearKey("11");
		var _g = 0;
		while(_g < customVars.length) {
			var customVar = customVars[_g];
			++_g;
			name = googleAnalytics.internals.Util.encodeUriComponent(customVar.getName());
			value = googleAnalytics.internals.Util.encodeUriComponent(customVar.getValue());
			x10.setKey("8",customVar.getIndex(),name);
			x10.setKey("9",customVar.getIndex(),value);
			if(customVar.getScope() != 3) x10.setKey("11",customVar.getIndex(),customVar.getScope());
		}
		var eventFragment = x10.renderUrlString();
		if(eventFragment != null) {
			if(p.utme == null) p.utme = eventFragment; else p.utme += eventFragment;
		}
		return p;
	}
	,buildVisitorParameters: function(p) {
		if(this.visitor.getLocale() != null) p.utmul = StringTools.replace(this.visitor.getLocale(),"_","-").toLowerCase();
		if(this.visitor.getFlashVersion() != null) p.utmfl = this.visitor.getFlashVersion();
		p.utmje = this.visitor.getJavaEnabled()?"1":"0";
		if(this.visitor.getScreenColorDepth() != null) p.utmsc = this.visitor.getScreenColorDepth() + "-bit";
		p.utmsr = this.visitor.getScreenResolution();
		return p;
	}
	,buildParameters: function() {
		var p = new googleAnalytics.internals.ParameterHolder();
		p.utmac = this.tracker.getAccountId();
		p.utmhn = this.tracker.getDomainName();
		p.utmt = "" + this.getType();
		p.utmn = googleAnalytics.internals.Util.generate32bitRandom();
		p.utmip = this.visitor.getIpAddress();
		p.utmhid = this.session.getSessionId();
		p.utms = this.session.getTrackCount();
		p = this.buildVisitorParameters(p);
		p = this.buildCustomVariablesParameter(p);
		p = this.buildCampaignParameters(p);
		p = this.buildCookieParameters(p);
		return p;
	}
	,getType: function() {
		return null;
	}
	,send: function() {
		if(this.config.getEndPointHost() == null) return;
		var parameters = this.buildParameters();
		if(this.visitor != null) {
			this.setUserAgent(this.visitor.getUserAgent());
			parameters.utmvid = this.visitor.getUniqueId();
		}
		var queryString = googleAnalytics.internals.Util.convertToUriComponentEncoding(parameters.toQueryString());
		var url = "http://" + this.config.getEndPointHost() + this.config.getEndPointPath() + "?" + queryString;
		this.increaseTrackCount();
		var img = new Image();
		img.src = url;
	}
	,increaseTrackCount: function() {
		this.session.increaseTrackCount();
		if(this.session.getTrackCount() > 500) googleAnalytics.Tracker._raiseError("Google Analytics does not guarantee to process more than 500 requests per session.","Request.buildHttpRequest");
		if(this.tracker.getCampaign() != null) this.tracker.getCampaign().increaseResponseCount();
	}
	,onError: function(e) {
		haxe.Log.trace("ERROR: " + e,{ fileName : "Request.hx", lineNumber : 121, className : "googleAnalytics.internals.request.Request", methodName : "onError"});
	}
	,setSession: function(session) {
		this.session = session;
	}
	,getSession: function() {
		return this.session;
	}
	,setVisitor: function(visitor) {
		this.visitor = visitor;
	}
	,getVisitor: function() {
		return this.visitor;
	}
	,setTracker: function(tracker) {
		this.tracker = tracker;
	}
	,getTracker: function() {
		return this.tracker;
	}
	,setUserAgent: function(value) {
		this.userAgent = value;
	}
	,setConfig: function(config) {
		this.config = config;
	}
	,getConfig: function() {
		return this.config;
	}
	,session: null
	,visitor: null
	,tracker: null
	,userAgent: null
	,config: null
	,type: null
	,__class__: googleAnalytics.internals.request.Request
}
googleAnalytics.internals.request.EventRequest = function(config) {
	googleAnalytics.internals.request.Request.call(this,config);
};
$hxClasses["googleAnalytics.internals.request.EventRequest"] = googleAnalytics.internals.request.EventRequest;
googleAnalytics.internals.request.EventRequest.__name__ = ["googleAnalytics","internals","request","EventRequest"];
googleAnalytics.internals.request.EventRequest.__super__ = googleAnalytics.internals.request.Request;
googleAnalytics.internals.request.EventRequest.prototype = $extend(googleAnalytics.internals.request.Request.prototype,{
	setEvent: function(event) {
		this.event = event;
	}
	,getEvent: function() {
		return this.event;
	}
	,buildParameters: function() {
		var p = googleAnalytics.internals.request.Request.prototype.buildParameters.call(this);
		var x10 = new googleAnalytics.internals.X10();
		x10.clearKey("5");
		x10.clearValue("5");
		x10.setKey("5",1,this.event.getCategory());
		x10.setKey("5",2,this.event.getAction());
		if(this.event.getLabel() != null) x10.setKey("5",3,this.event.getLabel());
		if(this.event.getValue() != 0) x10.setValue("5",1,this.event.getValue());
		var eventFragment = x10.renderUrlString();
		if(eventFragment != null) {
			if(p.utme == null) p.utme = eventFragment; else p.utme += eventFragment;
		}
		if(this.event.getNoninteraction()) p.utmni = 1;
		return p;
	}
	,getType: function() {
		return "event";
	}
	,event: null
	,__class__: googleAnalytics.internals.request.EventRequest
});
googleAnalytics.internals.request.ItemRequest = function(config) {
	googleAnalytics.internals.request.Request.call(this,config);
};
$hxClasses["googleAnalytics.internals.request.ItemRequest"] = googleAnalytics.internals.request.ItemRequest;
googleAnalytics.internals.request.ItemRequest.__name__ = ["googleAnalytics","internals","request","ItemRequest"];
googleAnalytics.internals.request.ItemRequest.__super__ = googleAnalytics.internals.request.Request;
googleAnalytics.internals.request.ItemRequest.prototype = $extend(googleAnalytics.internals.request.Request.prototype,{
	setItem: function(item) {
		this.item = item;
	}
	,getItem: function() {
		return this.item;
	}
	,buildCustomVariablesParameter: function(p) {
		return p;
	}
	,buildVisitorParameters: function(p) {
		return p;
	}
	,buildParameters: function() {
		var p = googleAnalytics.internals.request.Request.prototype.buildParameters.call(this);
		p.utmtid = this.item.getOrderId();
		p.utmipc = this.item.getSku();
		p.utmipn = this.item.getName();
		p.utmiva = this.item.getVariation();
		p.utmipr = this.item.getPrice();
		p.utmiqt = this.item.getQuantity();
		return p;
	}
	,getType: function() {
		return "item";
	}
	,item: null
	,__class__: googleAnalytics.internals.request.ItemRequest
});
googleAnalytics.internals.request.PageviewRequest = function(config) {
	googleAnalytics.internals.request.Request.call(this,config);
};
$hxClasses["googleAnalytics.internals.request.PageviewRequest"] = googleAnalytics.internals.request.PageviewRequest;
googleAnalytics.internals.request.PageviewRequest.__name__ = ["googleAnalytics","internals","request","PageviewRequest"];
googleAnalytics.internals.request.PageviewRequest.__super__ = googleAnalytics.internals.request.Request;
googleAnalytics.internals.request.PageviewRequest.prototype = $extend(googleAnalytics.internals.request.Request.prototype,{
	setPage: function(page) {
		this.page = page;
	}
	,getPage: function() {
		return this.page;
	}
	,buildParameters: function() {
		var p = googleAnalytics.internals.request.Request.prototype.buildParameters.call(this);
		p.utmp = this.page.getPath();
		p.utmdt = this.page.getTitle();
		if(this.page.getCharset() != null) p.utmcs = this.page.getCharset();
		if(this.page.getReferrer() != null) p.utmr = this.page.getReferrer();
		if(this.page.getLoadTime() != 0) {
			if(p.utmn % 100 < this.config.getSitespeedSampleRate()) {
				if(p.utme == null) p.utme = "" + 0; else p.utme += 0;
			}
		}
		return p;
	}
	,getType: function() {
		return null;
	}
	,page: null
	,__class__: googleAnalytics.internals.request.PageviewRequest
});
googleAnalytics.internals.request.SocialInteractionRequest = function(config) {
	googleAnalytics.internals.request.PageviewRequest.call(this,config);
};
$hxClasses["googleAnalytics.internals.request.SocialInteractionRequest"] = googleAnalytics.internals.request.SocialInteractionRequest;
googleAnalytics.internals.request.SocialInteractionRequest.__name__ = ["googleAnalytics","internals","request","SocialInteractionRequest"];
googleAnalytics.internals.request.SocialInteractionRequest.__super__ = googleAnalytics.internals.request.PageviewRequest;
googleAnalytics.internals.request.SocialInteractionRequest.prototype = $extend(googleAnalytics.internals.request.PageviewRequest.prototype,{
	setSocialInteraction: function(socialInteraction) {
		this.socialInteraction = socialInteraction;
	}
	,getSocialInteraction: function() {
		return this.socialInteraction;
	}
	,buildParameters: function() {
		var p = googleAnalytics.internals.request.PageviewRequest.prototype.buildParameters.call(this);
		p.utmsn = this.socialInteraction.getNetwork();
		p.utmsa = this.socialInteraction.getAction();
		p.utmsid = this.socialInteraction.getTarget();
		if(p.utmsid == null) p.utmsid = this.page.getPath();
		return p;
	}
	,getType: function() {
		return "social";
	}
	,socialInteraction: null
	,__class__: googleAnalytics.internals.request.SocialInteractionRequest
});
googleAnalytics.internals.request.TransactionRequest = function(config) {
	googleAnalytics.internals.request.Request.call(this,config);
};
$hxClasses["googleAnalytics.internals.request.TransactionRequest"] = googleAnalytics.internals.request.TransactionRequest;
googleAnalytics.internals.request.TransactionRequest.__name__ = ["googleAnalytics","internals","request","TransactionRequest"];
googleAnalytics.internals.request.TransactionRequest.__super__ = googleAnalytics.internals.request.Request;
googleAnalytics.internals.request.TransactionRequest.prototype = $extend(googleAnalytics.internals.request.Request.prototype,{
	setTransaction: function(transaction) {
		this.transaction = transaction;
	}
	,getTransaction: function() {
		return this.transaction;
	}
	,buildCustomVariablesParameter: function(p) {
		return p;
	}
	,buildVisitorParameters: function(p) {
		return p;
	}
	,buildParameters: function() {
		var p = googleAnalytics.internals.request.Request.prototype.buildParameters.call(this);
		p.utmtid = this.transaction.getOrderId();
		p.utmtst = this.transaction.getAffiliation();
		p.utmtto = this.transaction.getTotal();
		p.utmttx = this.transaction.getTax();
		p.utmtsp = this.transaction.getShipping();
		p.utmtci = this.transaction.getCity();
		p.utmtrg = this.transaction.getRegion();
		p.utmtco = this.transaction.getCountry();
		return p;
	}
	,getType: function() {
		return "tran";
	}
	,transaction: null
	,__class__: googleAnalytics.internals.request.TransactionRequest
});
haxe.StackItem = $hxClasses["haxe.StackItem"] = { __ename__ : true, __constructs__ : ["CFunction","Module","FilePos","Method","Lambda"] }
haxe.StackItem.CFunction = ["CFunction",0];
haxe.StackItem.CFunction.toString = $estr;
haxe.StackItem.CFunction.__enum__ = haxe.StackItem;
haxe.StackItem.Module = function(m) { var $x = ["Module",1,m]; $x.__enum__ = haxe.StackItem; $x.toString = $estr; return $x; }
haxe.StackItem.FilePos = function(s,file,line) { var $x = ["FilePos",2,s,file,line]; $x.__enum__ = haxe.StackItem; $x.toString = $estr; return $x; }
haxe.StackItem.Method = function(classname,method) { var $x = ["Method",3,classname,method]; $x.__enum__ = haxe.StackItem; $x.toString = $estr; return $x; }
haxe.StackItem.Lambda = function(v) { var $x = ["Lambda",4,v]; $x.__enum__ = haxe.StackItem; $x.toString = $estr; return $x; }
haxe.CallStack = function() { }
$hxClasses["haxe.CallStack"] = haxe.CallStack;
haxe.CallStack.__name__ = ["haxe","CallStack"];
haxe.CallStack.exceptionStack = function() {
	return [];
}
haxe.CallStack.toString = function(stack) {
	var b = new StringBuf();
	var _g = 0;
	while(_g < stack.length) {
		var s = stack[_g];
		++_g;
		b.b += "\nCalled from ";
		haxe.CallStack.itemToString(b,s);
	}
	return b.b;
}
haxe.CallStack.itemToString = function(b,s) {
	var $e = (s);
	switch( $e[1] ) {
	case 0:
		b.b += "a C function";
		break;
	case 1:
		var m = $e[2];
		b.b += "module ";
		b.b += Std.string(m);
		break;
	case 2:
		var line = $e[4], file = $e[3], s1 = $e[2];
		if(s1 != null) {
			haxe.CallStack.itemToString(b,s1);
			b.b += " (";
		}
		b.b += Std.string(file);
		b.b += " line ";
		b.b += Std.string(line);
		if(s1 != null) b.b += ")";
		break;
	case 3:
		var meth = $e[3], cname = $e[2];
		b.b += Std.string(cname);
		b.b += ".";
		b.b += Std.string(meth);
		break;
	case 4:
		var n = $e[2];
		b.b += "local function #";
		b.b += Std.string(n);
		break;
	}
}
haxe.Log = function() { }
$hxClasses["haxe.Log"] = haxe.Log;
haxe.Log.__name__ = ["haxe","Log"];
haxe.Log.trace = function(v,infos) {
	js.Boot.__trace(v,infos);
}
haxe.Resource = function() { }
$hxClasses["haxe.Resource"] = haxe.Resource;
haxe.Resource.__name__ = ["haxe","Resource"];
haxe.Resource.listNames = function() {
	var names = new Array();
	var _g = 0, _g1 = haxe.Resource.content;
	while(_g < _g1.length) {
		var x = _g1[_g];
		++_g;
		names.push(x.name);
	}
	return names;
}
haxe.Resource.getString = function(name) {
	var _g = 0, _g1 = haxe.Resource.content;
	while(_g < _g1.length) {
		var x = _g1[_g];
		++_g;
		if(x.name == name) {
			if(x.str != null) return x.str;
			var b = haxe.Unserializer.run(x.data);
			return b.toString();
		}
	}
	return null;
}
haxe.Resource.getBytes = function(name) {
	var _g = 0, _g1 = haxe.Resource.content;
	while(_g < _g1.length) {
		var x = _g1[_g];
		++_g;
		if(x.name == name) {
			if(x.str != null) return haxe.io.Bytes.ofString(x.str);
			return haxe.Unserializer.run(x.data);
		}
	}
	return null;
}
haxe._Template = {}
haxe._Template.TemplateExpr = $hxClasses["haxe._Template.TemplateExpr"] = { __ename__ : true, __constructs__ : ["OpVar","OpExpr","OpIf","OpStr","OpBlock","OpForeach","OpMacro"] }
haxe._Template.TemplateExpr.OpVar = function(v) { var $x = ["OpVar",0,v]; $x.__enum__ = haxe._Template.TemplateExpr; $x.toString = $estr; return $x; }
haxe._Template.TemplateExpr.OpExpr = function(expr) { var $x = ["OpExpr",1,expr]; $x.__enum__ = haxe._Template.TemplateExpr; $x.toString = $estr; return $x; }
haxe._Template.TemplateExpr.OpIf = function(expr,eif,eelse) { var $x = ["OpIf",2,expr,eif,eelse]; $x.__enum__ = haxe._Template.TemplateExpr; $x.toString = $estr; return $x; }
haxe._Template.TemplateExpr.OpStr = function(str) { var $x = ["OpStr",3,str]; $x.__enum__ = haxe._Template.TemplateExpr; $x.toString = $estr; return $x; }
haxe._Template.TemplateExpr.OpBlock = function(l) { var $x = ["OpBlock",4,l]; $x.__enum__ = haxe._Template.TemplateExpr; $x.toString = $estr; return $x; }
haxe._Template.TemplateExpr.OpForeach = function(expr,loop) { var $x = ["OpForeach",5,expr,loop]; $x.__enum__ = haxe._Template.TemplateExpr; $x.toString = $estr; return $x; }
haxe._Template.TemplateExpr.OpMacro = function(name,params) { var $x = ["OpMacro",6,name,params]; $x.__enum__ = haxe._Template.TemplateExpr; $x.toString = $estr; return $x; }
haxe.Template = function(str) {
	var tokens = this.parseTokens(str);
	this.expr = this.parseBlock(tokens);
	if(!tokens.isEmpty()) throw "Unexpected '" + Std.string(tokens.first().s) + "'";
};
$hxClasses["haxe.Template"] = haxe.Template;
haxe.Template.__name__ = ["haxe","Template"];
haxe.Template.prototype = {
	run: function(e) {
		var $e = (e);
		switch( $e[1] ) {
		case 0:
			var v = $e[2];
			this.buf.b += Std.string(Std.string(this.resolve(v)));
			break;
		case 1:
			var e1 = $e[2];
			this.buf.b += Std.string(Std.string(e1()));
			break;
		case 2:
			var eelse = $e[4], eif = $e[3], e1 = $e[2];
			var v = e1();
			if(v == null || v == false) {
				if(eelse != null) this.run(eelse);
			} else this.run(eif);
			break;
		case 3:
			var str = $e[2];
			this.buf.b += Std.string(str);
			break;
		case 4:
			var l = $e[2];
			var $it0 = l.iterator();
			while( $it0.hasNext() ) {
				var e1 = $it0.next();
				this.run(e1);
			}
			break;
		case 5:
			var loop = $e[3], e1 = $e[2];
			var v = e1();
			try {
				var x = $iterator(v)();
				if(x.hasNext == null) throw null;
				v = x;
			} catch( e2 ) {
				try {
					if(v.hasNext == null) throw null;
				} catch( e3 ) {
					throw "Cannot iter on " + Std.string(v);
				}
			}
			this.stack.push(this.context);
			var v1 = v;
			while( v1.hasNext() ) {
				var ctx = v1.next();
				this.context = ctx;
				this.run(loop);
			}
			this.context = this.stack.pop();
			break;
		case 6:
			var params = $e[3], m = $e[2];
			var v = Reflect.field(this.macros,m);
			var pl = new Array();
			var old = this.buf;
			pl.push($bind(this,this.resolve));
			var $it1 = params.iterator();
			while( $it1.hasNext() ) {
				var p = $it1.next();
				var $e = (p);
				switch( $e[1] ) {
				case 0:
					var v1 = $e[2];
					pl.push(this.resolve(v1));
					break;
				default:
					this.buf = new StringBuf();
					this.run(p);
					pl.push(this.buf.b);
				}
			}
			this.buf = old;
			try {
				this.buf.b += Std.string(Std.string(v.apply(this.macros,pl)));
			} catch( e1 ) {
				var plstr = (function($this) {
					var $r;
					try {
						$r = pl.join(",");
					} catch( e2 ) {
						$r = "???";
					}
					return $r;
				}(this));
				var msg = "Macro call " + m + "(" + plstr + ") failed (" + Std.string(e1) + ")";
				throw msg;
			}
			break;
		}
	}
	,makeExpr2: function(l) {
		var p = l.pop();
		if(p == null) throw "<eof>";
		if(p.s) return this.makeConst(p.p);
		switch(p.p) {
		case "(":
			var e1 = this.makeExpr(l);
			var p1 = l.pop();
			if(p1 == null || p1.s) throw p1.p;
			if(p1.p == ")") return e1;
			var e2 = this.makeExpr(l);
			var p2 = l.pop();
			if(p2 == null || p2.p != ")") throw p2.p;
			return (function($this) {
				var $r;
				switch(p1.p) {
				case "+":
					$r = function() {
						return e1() + e2();
					};
					break;
				case "-":
					$r = function() {
						return e1() - e2();
					};
					break;
				case "*":
					$r = function() {
						return e1() * e2();
					};
					break;
				case "/":
					$r = function() {
						return e1() / e2();
					};
					break;
				case ">":
					$r = function() {
						return e1() > e2();
					};
					break;
				case "<":
					$r = function() {
						return e1() < e2();
					};
					break;
				case ">=":
					$r = function() {
						return e1() >= e2();
					};
					break;
				case "<=":
					$r = function() {
						return e1() <= e2();
					};
					break;
				case "==":
					$r = function() {
						return e1() == e2();
					};
					break;
				case "!=":
					$r = function() {
						return e1() != e2();
					};
					break;
				case "&&":
					$r = function() {
						return e1() && e2();
					};
					break;
				case "||":
					$r = function() {
						return e1() || e2();
					};
					break;
				default:
					$r = (function($this) {
						var $r;
						throw "Unknown operation " + p1.p;
						return $r;
					}($this));
				}
				return $r;
			}(this));
		case "!":
			var e = this.makeExpr(l);
			return function() {
				var v = e();
				return v == null || v == false;
			};
		case "-":
			var e3 = this.makeExpr(l);
			return function() {
				return -e3();
			};
		}
		throw p.p;
	}
	,makeExpr: function(l) {
		return this.makePath(this.makeExpr2(l),l);
	}
	,makePath: function(e,l) {
		var p = l.first();
		if(p == null || p.p != ".") return e;
		l.pop();
		var field = l.pop();
		if(field == null || !field.s) throw field.p;
		var f = field.p;
		haxe.Template.expr_trim.match(f);
		f = haxe.Template.expr_trim.matched(1);
		return this.makePath(function() {
			return Reflect.field(e(),f);
		},l);
	}
	,makeConst: function(v) {
		haxe.Template.expr_trim.match(v);
		v = haxe.Template.expr_trim.matched(1);
		if(HxOverrides.cca(v,0) == 34) {
			var str = HxOverrides.substr(v,1,v.length - 2);
			return function() {
				return str;
			};
		}
		if(haxe.Template.expr_int.match(v)) {
			var i = Std.parseInt(v);
			return function() {
				return i;
			};
		}
		if(haxe.Template.expr_float.match(v)) {
			var f = Std.parseFloat(v);
			return function() {
				return f;
			};
		}
		var me = this;
		return function() {
			return me.resolve(v);
		};
	}
	,parseExpr: function(data) {
		var l = new List();
		var expr = data;
		while(haxe.Template.expr_splitter.match(data)) {
			var p = haxe.Template.expr_splitter.matchedPos();
			var k = p.pos + p.len;
			if(p.pos != 0) l.add({ p : HxOverrides.substr(data,0,p.pos), s : true});
			var p1 = haxe.Template.expr_splitter.matched(0);
			l.add({ p : p1, s : p1.indexOf("\"") >= 0});
			data = haxe.Template.expr_splitter.matchedRight();
		}
		if(data.length != 0) l.add({ p : data, s : true});
		var e;
		try {
			e = this.makeExpr(l);
			if(!l.isEmpty()) throw l.first().p;
		} catch( s ) {
			if( js.Boot.__instanceof(s,String) ) {
				throw "Unexpected '" + s + "' in " + expr;
			} else throw(s);
		}
		return function() {
			try {
				return e();
			} catch( exc ) {
				throw "Error : " + Std.string(exc) + " in " + expr;
			}
		};
	}
	,parse: function(tokens) {
		var t = tokens.pop();
		var p = t.p;
		if(t.s) return haxe._Template.TemplateExpr.OpStr(p);
		if(t.l != null) {
			var pe = new List();
			var _g = 0, _g1 = t.l;
			while(_g < _g1.length) {
				var p1 = _g1[_g];
				++_g;
				pe.add(this.parseBlock(this.parseTokens(p1)));
			}
			return haxe._Template.TemplateExpr.OpMacro(p,pe);
		}
		if(HxOverrides.substr(p,0,3) == "if ") {
			p = HxOverrides.substr(p,3,p.length - 3);
			var e = this.parseExpr(p);
			var eif = this.parseBlock(tokens);
			var t1 = tokens.first();
			var eelse;
			if(t1 == null) throw "Unclosed 'if'";
			if(t1.p == "end") {
				tokens.pop();
				eelse = null;
			} else if(t1.p == "else") {
				tokens.pop();
				eelse = this.parseBlock(tokens);
				t1 = tokens.pop();
				if(t1 == null || t1.p != "end") throw "Unclosed 'else'";
			} else {
				t1.p = HxOverrides.substr(t1.p,4,t1.p.length - 4);
				eelse = this.parse(tokens);
			}
			return haxe._Template.TemplateExpr.OpIf(e,eif,eelse);
		}
		if(HxOverrides.substr(p,0,8) == "foreach ") {
			p = HxOverrides.substr(p,8,p.length - 8);
			var e = this.parseExpr(p);
			var efor = this.parseBlock(tokens);
			var t1 = tokens.pop();
			if(t1 == null || t1.p != "end") throw "Unclosed 'foreach'";
			return haxe._Template.TemplateExpr.OpForeach(e,efor);
		}
		if(haxe.Template.expr_splitter.match(p)) return haxe._Template.TemplateExpr.OpExpr(this.parseExpr(p));
		return haxe._Template.TemplateExpr.OpVar(p);
	}
	,parseBlock: function(tokens) {
		var l = new List();
		while(true) {
			var t = tokens.first();
			if(t == null) break;
			if(!t.s && (t.p == "end" || t.p == "else" || HxOverrides.substr(t.p,0,7) == "elseif ")) break;
			l.add(this.parse(tokens));
		}
		if(l.length == 1) return l.first();
		return haxe._Template.TemplateExpr.OpBlock(l);
	}
	,parseTokens: function(data) {
		var tokens = new List();
		while(haxe.Template.splitter.match(data)) {
			var p = haxe.Template.splitter.matchedPos();
			if(p.pos > 0) tokens.add({ p : HxOverrides.substr(data,0,p.pos), s : true, l : null});
			if(HxOverrides.cca(data,p.pos) == 58) {
				tokens.add({ p : HxOverrides.substr(data,p.pos + 2,p.len - 4), s : false, l : null});
				data = haxe.Template.splitter.matchedRight();
				continue;
			}
			var parp = p.pos + p.len;
			var npar = 1;
			while(npar > 0) {
				var c = HxOverrides.cca(data,parp);
				if(c == 40) npar++; else if(c == 41) npar--; else if(c == null) throw "Unclosed macro parenthesis";
				parp++;
			}
			var params = HxOverrides.substr(data,p.pos + p.len,parp - (p.pos + p.len) - 1).split(",");
			tokens.add({ p : haxe.Template.splitter.matched(2), s : false, l : params});
			data = HxOverrides.substr(data,parp,data.length - parp);
		}
		if(data.length > 0) tokens.add({ p : data, s : true, l : null});
		return tokens;
	}
	,resolve: function(v) {
		if(Reflect.hasField(this.context,v)) return Reflect.field(this.context,v);
		var $it0 = this.stack.iterator();
		while( $it0.hasNext() ) {
			var ctx = $it0.next();
			if(Reflect.hasField(ctx,v)) return Reflect.field(ctx,v);
		}
		if(v == "__current__") return this.context;
		return Reflect.field(haxe.Template.globals,v);
	}
	,execute: function(context,macros) {
		this.macros = macros == null?{ }:macros;
		this.context = context;
		this.stack = new List();
		this.buf = new StringBuf();
		this.run(this.expr);
		return this.buf.b;
	}
	,buf: null
	,stack: null
	,macros: null
	,context: null
	,expr: null
	,__class__: haxe.Template
}
haxe.Unserializer = function(buf) {
	this.buf = buf;
	this.length = buf.length;
	this.pos = 0;
	this.scache = new Array();
	this.cache = new Array();
	var r = haxe.Unserializer.DEFAULT_RESOLVER;
	if(r == null) {
		r = Type;
		haxe.Unserializer.DEFAULT_RESOLVER = r;
	}
	this.setResolver(r);
};
$hxClasses["haxe.Unserializer"] = haxe.Unserializer;
haxe.Unserializer.__name__ = ["haxe","Unserializer"];
haxe.Unserializer.initCodes = function() {
	var codes = new Array();
	var _g1 = 0, _g = haxe.Unserializer.BASE64.length;
	while(_g1 < _g) {
		var i = _g1++;
		codes[haxe.Unserializer.BASE64.charCodeAt(i)] = i;
	}
	return codes;
}
haxe.Unserializer.run = function(v) {
	return new haxe.Unserializer(v).unserialize();
}
haxe.Unserializer.prototype = {
	unserialize: function() {
		var _g = this.buf.charCodeAt(this.pos++);
		switch(_g) {
		case 110:
			return null;
		case 116:
			return true;
		case 102:
			return false;
		case 122:
			return 0;
		case 105:
			return this.readDigits();
		case 100:
			var p1 = this.pos;
			while(true) {
				var c = this.buf.charCodeAt(this.pos);
				if(c >= 43 && c < 58 || c == 101 || c == 69) this.pos++; else break;
			}
			return Std.parseFloat(HxOverrides.substr(this.buf,p1,this.pos - p1));
		case 121:
			var len = this.readDigits();
			if(this.buf.charCodeAt(this.pos++) != 58 || this.length - this.pos < len) throw "Invalid string length";
			var s = HxOverrides.substr(this.buf,this.pos,len);
			this.pos += len;
			s = StringTools.urlDecode(s);
			this.scache.push(s);
			return s;
		case 107:
			return Math.NaN;
		case 109:
			return Math.NEGATIVE_INFINITY;
		case 112:
			return Math.POSITIVE_INFINITY;
		case 97:
			var buf = this.buf;
			var a = new Array();
			this.cache.push(a);
			while(true) {
				var c = this.buf.charCodeAt(this.pos);
				if(c == 104) {
					this.pos++;
					break;
				}
				if(c == 117) {
					this.pos++;
					var n = this.readDigits();
					a[a.length + n - 1] = null;
				} else a.push(this.unserialize());
			}
			return a;
		case 111:
			var o = { };
			this.cache.push(o);
			this.unserializeObject(o);
			return o;
		case 114:
			var n = this.readDigits();
			if(n < 0 || n >= this.cache.length) throw "Invalid reference";
			return this.cache[n];
		case 82:
			var n = this.readDigits();
			if(n < 0 || n >= this.scache.length) throw "Invalid string reference";
			return this.scache[n];
		case 120:
			throw this.unserialize();
			break;
		case 99:
			var name = this.unserialize();
			var cl = this.resolver.resolveClass(name);
			if(cl == null) throw "Class not found " + name;
			var o = Type.createEmptyInstance(cl);
			this.cache.push(o);
			this.unserializeObject(o);
			return o;
		case 119:
			var name = this.unserialize();
			var edecl = this.resolver.resolveEnum(name);
			if(edecl == null) throw "Enum not found " + name;
			var e = this.unserializeEnum(edecl,this.unserialize());
			this.cache.push(e);
			return e;
		case 106:
			var name = this.unserialize();
			var edecl = this.resolver.resolveEnum(name);
			if(edecl == null) throw "Enum not found " + name;
			this.pos++;
			var index = this.readDigits();
			var tag = Type.getEnumConstructs(edecl)[index];
			if(tag == null) throw "Unknown enum index " + name + "@" + index;
			var e = this.unserializeEnum(edecl,tag);
			this.cache.push(e);
			return e;
		case 108:
			var l = new List();
			this.cache.push(l);
			var buf = this.buf;
			while(this.buf.charCodeAt(this.pos) != 104) l.add(this.unserialize());
			this.pos++;
			return l;
		case 98:
			var h = new haxe.ds.StringMap();
			this.cache.push(h);
			var buf = this.buf;
			while(this.buf.charCodeAt(this.pos) != 104) {
				var s = this.unserialize();
				h.set(s,this.unserialize());
			}
			this.pos++;
			return h;
		case 113:
			var h = new haxe.ds.IntMap();
			this.cache.push(h);
			var buf = this.buf;
			var c = this.buf.charCodeAt(this.pos++);
			while(c == 58) {
				var i = this.readDigits();
				h.set(i,this.unserialize());
				c = this.buf.charCodeAt(this.pos++);
			}
			if(c != 104) throw "Invalid IntMap format";
			return h;
		case 77:
			var h = new haxe.ds.ObjectMap();
			this.cache.push(h);
			var buf = this.buf;
			while(this.buf.charCodeAt(this.pos) != 104) {
				var s = this.unserialize();
				h.set(s,this.unserialize());
			}
			this.pos++;
			return h;
		case 118:
			var d = HxOverrides.strDate(HxOverrides.substr(this.buf,this.pos,19));
			this.cache.push(d);
			this.pos += 19;
			return d;
		case 115:
			var len = this.readDigits();
			var buf = this.buf;
			if(this.buf.charCodeAt(this.pos++) != 58 || this.length - this.pos < len) throw "Invalid bytes length";
			var codes = haxe.Unserializer.CODES;
			if(codes == null) {
				codes = haxe.Unserializer.initCodes();
				haxe.Unserializer.CODES = codes;
			}
			var i = this.pos;
			var rest = len & 3;
			var size = (len >> 2) * 3 + (rest >= 2?rest - 1:0);
			var max = i + (len - rest);
			var bytes = haxe.io.Bytes.alloc(size);
			var bpos = 0;
			while(i < max) {
				var c1 = codes[buf.charCodeAt(i++)];
				var c2 = codes[buf.charCodeAt(i++)];
				bytes.b[bpos++] = (c1 << 2 | c2 >> 4) & 255;
				var c3 = codes[buf.charCodeAt(i++)];
				bytes.b[bpos++] = (c2 << 4 | c3 >> 2) & 255;
				var c4 = codes[buf.charCodeAt(i++)];
				bytes.b[bpos++] = (c3 << 6 | c4) & 255;
			}
			if(rest >= 2) {
				var c1 = codes[buf.charCodeAt(i++)];
				var c2 = codes[buf.charCodeAt(i++)];
				bytes.b[bpos++] = (c1 << 2 | c2 >> 4) & 255;
				if(rest == 3) {
					var c3 = codes[buf.charCodeAt(i++)];
					bytes.b[bpos++] = (c2 << 4 | c3 >> 2) & 255;
				}
			}
			this.pos += len;
			this.cache.push(bytes);
			return bytes;
		case 67:
			var name = this.unserialize();
			var cl = this.resolver.resolveClass(name);
			if(cl == null) throw "Class not found " + name;
			var o = Type.createEmptyInstance(cl);
			this.cache.push(o);
			o.hxUnserialize(this);
			if(this.buf.charCodeAt(this.pos++) != 103) throw "Invalid custom data";
			return o;
		default:
		}
		this.pos--;
		throw "Invalid char " + this.buf.charAt(this.pos) + " at position " + this.pos;
	}
	,unserializeEnum: function(edecl,tag) {
		if(this.buf.charCodeAt(this.pos++) != 58) throw "Invalid enum format";
		var nargs = this.readDigits();
		if(nargs == 0) return Type.createEnum(edecl,tag);
		var args = new Array();
		while(nargs-- > 0) args.push(this.unserialize());
		return Type.createEnum(edecl,tag,args);
	}
	,unserializeObject: function(o) {
		while(true) {
			if(this.pos >= this.length) throw "Invalid object";
			if(this.buf.charCodeAt(this.pos) == 103) break;
			var k = this.unserialize();
			if(!js.Boot.__instanceof(k,String)) throw "Invalid object key";
			var v = this.unserialize();
			o[k] = v;
		}
		this.pos++;
	}
	,readDigits: function() {
		var k = 0;
		var s = false;
		var fpos = this.pos;
		while(true) {
			var c = this.buf.charCodeAt(this.pos);
			if(c != c) break;
			if(c == 45) {
				if(this.pos != fpos) break;
				s = true;
				this.pos++;
				continue;
			}
			if(c < 48 || c > 57) break;
			k = k * 10 + (c - 48);
			this.pos++;
		}
		if(s) k *= -1;
		return k;
	}
	,setResolver: function(r) {
		if(r == null) this.resolver = { resolveClass : function(_) {
			return null;
		}, resolveEnum : function(_) {
			return null;
		}}; else this.resolver = r;
	}
	,resolver: null
	,scache: null
	,cache: null
	,length: null
	,pos: null
	,buf: null
	,__class__: haxe.Unserializer
}
haxe.ds = {}
haxe.ds.IntMap = function() {
	this.h = { };
};
$hxClasses["haxe.ds.IntMap"] = haxe.ds.IntMap;
haxe.ds.IntMap.__name__ = ["haxe","ds","IntMap"];
haxe.ds.IntMap.__interfaces__ = [IMap];
haxe.ds.IntMap.prototype = {
	keys: function() {
		var a = [];
		for( var key in this.h ) {
		if(this.h.hasOwnProperty(key)) a.push(key | 0);
		}
		return HxOverrides.iter(a);
	}
	,remove: function(key) {
		if(!this.h.hasOwnProperty(key)) return false;
		delete(this.h[key]);
		return true;
	}
	,exists: function(key) {
		return this.h.hasOwnProperty(key);
	}
	,get: function(key) {
		return this.h[key];
	}
	,set: function(key,value) {
		this.h[key] = value;
	}
	,h: null
	,__class__: haxe.ds.IntMap
}
haxe.ds.ObjectMap = function() {
	this.h = { };
	this.h.__keys__ = { };
};
$hxClasses["haxe.ds.ObjectMap"] = haxe.ds.ObjectMap;
haxe.ds.ObjectMap.__name__ = ["haxe","ds","ObjectMap"];
haxe.ds.ObjectMap.__interfaces__ = [IMap];
haxe.ds.ObjectMap.prototype = {
	set: function(key,value) {
		var id = key.__id__ != null?key.__id__:key.__id__ = ++haxe.ds.ObjectMap.count;
		this.h[id] = value;
		this.h.__keys__[id] = key;
	}
	,h: null
	,__class__: haxe.ds.ObjectMap
}
haxe.ds.StringMap = function() {
	this.h = { };
};
$hxClasses["haxe.ds.StringMap"] = haxe.ds.StringMap;
haxe.ds.StringMap.__name__ = ["haxe","ds","StringMap"];
haxe.ds.StringMap.__interfaces__ = [IMap];
haxe.ds.StringMap.prototype = {
	iterator: function() {
		return { ref : this.h, it : this.keys(), hasNext : function() {
			return this.it.hasNext();
		}, next : function() {
			var i = this.it.next();
			return this.ref["$" + i];
		}};
	}
	,keys: function() {
		var a = [];
		for( var key in this.h ) {
		if(this.h.hasOwnProperty(key)) a.push(key.substr(1));
		}
		return HxOverrides.iter(a);
	}
	,remove: function(key) {
		key = "$" + key;
		if(!this.h.hasOwnProperty(key)) return false;
		delete(this.h[key]);
		return true;
	}
	,exists: function(key) {
		return this.h.hasOwnProperty("$" + key);
	}
	,get: function(key) {
		return this.h["$" + key];
	}
	,set: function(key,value) {
		this.h["$" + key] = value;
	}
	,h: null
	,__class__: haxe.ds.StringMap
}
haxe.io = {}
haxe.io.Bytes = function(length,b) {
	this.length = length;
	this.b = b;
};
$hxClasses["haxe.io.Bytes"] = haxe.io.Bytes;
haxe.io.Bytes.__name__ = ["haxe","io","Bytes"];
haxe.io.Bytes.alloc = function(length) {
	var a = new Array();
	var _g = 0;
	while(_g < length) {
		var i = _g++;
		a.push(0);
	}
	return new haxe.io.Bytes(length,a);
}
haxe.io.Bytes.ofString = function(s) {
	var a = new Array();
	var _g1 = 0, _g = s.length;
	while(_g1 < _g) {
		var i = _g1++;
		var c = s.charCodeAt(i);
		if(c <= 127) a.push(c); else if(c <= 2047) {
			a.push(192 | c >> 6);
			a.push(128 | c & 63);
		} else if(c <= 65535) {
			a.push(224 | c >> 12);
			a.push(128 | c >> 6 & 63);
			a.push(128 | c & 63);
		} else {
			a.push(240 | c >> 18);
			a.push(128 | c >> 12 & 63);
			a.push(128 | c >> 6 & 63);
			a.push(128 | c & 63);
		}
	}
	return new haxe.io.Bytes(a.length,a);
}
haxe.io.Bytes.prototype = {
	toString: function() {
		return this.readString(0,this.length);
	}
	,readString: function(pos,len) {
		if(pos < 0 || len < 0 || pos + len > this.length) throw haxe.io.Error.OutsideBounds;
		var s = "";
		var b = this.b;
		var fcc = String.fromCharCode;
		var i = pos;
		var max = pos + len;
		while(i < max) {
			var c = b[i++];
			if(c < 128) {
				if(c == 0) break;
				s += fcc(c);
			} else if(c < 224) s += fcc((c & 63) << 6 | b[i++] & 127); else if(c < 240) {
				var c2 = b[i++];
				s += fcc((c & 31) << 12 | (c2 & 127) << 6 | b[i++] & 127);
			} else {
				var c2 = b[i++];
				var c3 = b[i++];
				s += fcc((c & 15) << 18 | (c2 & 127) << 12 | c3 << 6 & 127 | b[i++] & 127);
			}
		}
		return s;
	}
	,b: null
	,length: null
	,__class__: haxe.io.Bytes
}
haxe.io.Eof = function() { }
$hxClasses["haxe.io.Eof"] = haxe.io.Eof;
haxe.io.Eof.__name__ = ["haxe","io","Eof"];
haxe.io.Eof.prototype = {
	toString: function() {
		return "Eof";
	}
	,__class__: haxe.io.Eof
}
haxe.io.Error = $hxClasses["haxe.io.Error"] = { __ename__ : true, __constructs__ : ["Blocked","Overflow","OutsideBounds","Custom"] }
haxe.io.Error.Blocked = ["Blocked",0];
haxe.io.Error.Blocked.toString = $estr;
haxe.io.Error.Blocked.__enum__ = haxe.io.Error;
haxe.io.Error.Overflow = ["Overflow",1];
haxe.io.Error.Overflow.toString = $estr;
haxe.io.Error.Overflow.__enum__ = haxe.io.Error;
haxe.io.Error.OutsideBounds = ["OutsideBounds",2];
haxe.io.Error.OutsideBounds.toString = $estr;
haxe.io.Error.OutsideBounds.__enum__ = haxe.io.Error;
haxe.io.Error.Custom = function(e) { var $x = ["Custom",3,e]; $x.__enum__ = haxe.io.Error; $x.toString = $estr; return $x; }
var js = {}
js.Boot = function() { }
$hxClasses["js.Boot"] = js.Boot;
js.Boot.__name__ = ["js","Boot"];
js.Boot.__unhtml = function(s) {
	return s.split("&").join("&amp;").split("<").join("&lt;").split(">").join("&gt;");
}
js.Boot.__trace = function(v,i) {
	var msg = i != null?i.fileName + ":" + i.lineNumber + ": ":"";
	msg += js.Boot.__string_rec(v,"");
	if(i != null && i.customParams != null) {
		var _g = 0, _g1 = i.customParams;
		while(_g < _g1.length) {
			var v1 = _g1[_g];
			++_g;
			msg += "," + js.Boot.__string_rec(v1,"");
		}
	}
	var d;
	if(typeof(document) != "undefined" && (d = document.getElementById("haxe:trace")) != null) d.innerHTML += js.Boot.__unhtml(msg) + "<br/>"; else if(typeof(console) != "undefined" && console.log != null) console.log(msg);
}
js.Boot.__string_rec = function(o,s) {
	if(o == null) return "null";
	if(s.length >= 5) return "<...>";
	var t = typeof(o);
	if(t == "function" && (o.__name__ || o.__ename__)) t = "object";
	switch(t) {
	case "object":
		if(o instanceof Array) {
			if(o.__enum__) {
				if(o.length == 2) return o[0];
				var str = o[0] + "(";
				s += "\t";
				var _g1 = 2, _g = o.length;
				while(_g1 < _g) {
					var i = _g1++;
					if(i != 2) str += "," + js.Boot.__string_rec(o[i],s); else str += js.Boot.__string_rec(o[i],s);
				}
				return str + ")";
			}
			var l = o.length;
			var i;
			var str = "[";
			s += "\t";
			var _g = 0;
			while(_g < l) {
				var i1 = _g++;
				str += (i1 > 0?",":"") + js.Boot.__string_rec(o[i1],s);
			}
			str += "]";
			return str;
		}
		var tostr;
		try {
			tostr = o.toString;
		} catch( e ) {
			return "???";
		}
		if(tostr != null && tostr != Object.toString) {
			var s2 = o.toString();
			if(s2 != "[object Object]") return s2;
		}
		var k = null;
		var str = "{\n";
		s += "\t";
		var hasp = o.hasOwnProperty != null;
		for( var k in o ) { ;
		if(hasp && !o.hasOwnProperty(k)) {
			continue;
		}
		if(k == "prototype" || k == "__class__" || k == "__super__" || k == "__interfaces__" || k == "__properties__") {
			continue;
		}
		if(str.length != 2) str += ", \n";
		str += s + k + " : " + js.Boot.__string_rec(o[k],s);
		}
		s = s.substring(1);
		str += "\n" + s + "}";
		return str;
	case "function":
		return "<function>";
	case "string":
		return o;
	default:
		return String(o);
	}
}
js.Boot.__interfLoop = function(cc,cl) {
	if(cc == null) return false;
	if(cc == cl) return true;
	var intf = cc.__interfaces__;
	if(intf != null) {
		var _g1 = 0, _g = intf.length;
		while(_g1 < _g) {
			var i = _g1++;
			var i1 = intf[i];
			if(i1 == cl || js.Boot.__interfLoop(i1,cl)) return true;
		}
	}
	return js.Boot.__interfLoop(cc.__super__,cl);
}
js.Boot.__instanceof = function(o,cl) {
	if(cl == null) return false;
	switch(cl) {
	case Int:
		return (o|0) === o;
	case Float:
		return typeof(o) == "number";
	case Bool:
		return typeof(o) == "boolean";
	case String:
		return typeof(o) == "string";
	case Dynamic:
		return true;
	default:
		if(o != null) {
			if(typeof(cl) == "function") {
				if(o instanceof cl) {
					if(cl == Array) return o.__enum__ == null;
					return true;
				}
				if(js.Boot.__interfLoop(o.__class__,cl)) return true;
			}
		} else return false;
		if(cl == Class && o.__name__ != null) return true;
		if(cl == Enum && o.__ename__ != null) return true;
		return o.__enum__ == cl;
	}
}
js.Boot.__cast = function(o,t) {
	if(js.Boot.__instanceof(o,t)) return o; else throw "Cannot cast " + Std.string(o) + " to " + Std.string(t);
}
js.Browser = function() { }
$hxClasses["js.Browser"] = js.Browser;
js.Browser.__name__ = ["js","Browser"];
openfl.AssetCache = function() {
	this.enabled = true;
	this.bitmapData = new haxe.ds.StringMap();
	this.font = new haxe.ds.StringMap();
	this.sound = new haxe.ds.StringMap();
};
$hxClasses["openfl.AssetCache"] = openfl.AssetCache;
openfl.AssetCache.__name__ = ["openfl","AssetCache"];
openfl.AssetCache.prototype = {
	clear: function() {
		this.bitmapData = new haxe.ds.StringMap();
		this.font = new haxe.ds.StringMap();
		this.sound = new haxe.ds.StringMap();
	}
	,sound: null
	,font: null
	,enabled: null
	,bitmapData: null
	,__class__: openfl.AssetCache
}
openfl.Assets = function() { }
$hxClasses["openfl.Assets"] = openfl.Assets;
openfl.Assets.__name__ = ["openfl","Assets"];
openfl.Assets.exists = function(id,type) {
	openfl.Assets.initialize();
	if(type == null) type = openfl.AssetType.BINARY;
	var libraryName = id.substring(0,id.indexOf(":"));
	var symbolName = HxOverrides.substr(id,id.indexOf(":") + 1,null);
	var library = openfl.Assets.getLibrary(libraryName);
	if(library != null) return library.exists(symbolName,type);
	return false;
}
openfl.Assets.getBitmapData = function(id,useCache) {
	if(useCache == null) useCache = true;
	openfl.Assets.initialize();
	if(useCache && openfl.Assets.cache.enabled && openfl.Assets.cache.bitmapData.exists(id)) {
		var bitmapData = openfl.Assets.cache.bitmapData.get(id);
		if(openfl.Assets.isValidBitmapData(bitmapData)) return bitmapData;
	}
	var libraryName = id.substring(0,id.indexOf(":"));
	var symbolName = HxOverrides.substr(id,id.indexOf(":") + 1,null);
	var library = openfl.Assets.getLibrary(libraryName);
	if(library != null) {
		if(library.exists(symbolName,openfl.AssetType.IMAGE)) {
			if(library.isLocal(symbolName,openfl.AssetType.IMAGE)) {
				var bitmapData = library.getBitmapData(symbolName);
				if(useCache && openfl.Assets.cache.enabled) openfl.Assets.cache.bitmapData.set(id,bitmapData);
				return bitmapData;
			} else haxe.Log.trace("[openfl.Assets] BitmapData asset \"" + id + "\" exists, but only asynchronously",{ fileName : "Assets.hx", lineNumber : 118, className : "openfl.Assets", methodName : "getBitmapData"});
		} else haxe.Log.trace("[openfl.Assets] There is no BitmapData asset with an ID of \"" + id + "\"",{ fileName : "Assets.hx", lineNumber : 124, className : "openfl.Assets", methodName : "getBitmapData"});
	} else haxe.Log.trace("[openfl.Assets] There is no asset library named \"" + libraryName + "\"",{ fileName : "Assets.hx", lineNumber : 130, className : "openfl.Assets", methodName : "getBitmapData"});
	return null;
}
openfl.Assets.getBytes = function(id) {
	openfl.Assets.initialize();
	var libraryName = id.substring(0,id.indexOf(":"));
	var symbolName = HxOverrides.substr(id,id.indexOf(":") + 1,null);
	var library = openfl.Assets.getLibrary(libraryName);
	if(library != null) {
		if(library.exists(symbolName,openfl.AssetType.BINARY)) {
			if(library.isLocal(symbolName,openfl.AssetType.BINARY)) return library.getBytes(symbolName); else haxe.Log.trace("[openfl.Assets] String or ByteArray asset \"" + id + "\" exists, but only asynchronously",{ fileName : "Assets.hx", lineNumber : 167, className : "openfl.Assets", methodName : "getBytes"});
		} else haxe.Log.trace("[openfl.Assets] There is no String or ByteArray asset with an ID of \"" + id + "\"",{ fileName : "Assets.hx", lineNumber : 173, className : "openfl.Assets", methodName : "getBytes"});
	} else haxe.Log.trace("[openfl.Assets] There is no asset library named \"" + libraryName + "\"",{ fileName : "Assets.hx", lineNumber : 179, className : "openfl.Assets", methodName : "getBytes"});
	return null;
}
openfl.Assets.getFont = function(id,useCache) {
	if(useCache == null) useCache = true;
	openfl.Assets.initialize();
	if(useCache && openfl.Assets.cache.enabled && openfl.Assets.cache.font.exists(id)) return openfl.Assets.cache.font.get(id);
	var libraryName = id.substring(0,id.indexOf(":"));
	var symbolName = HxOverrides.substr(id,id.indexOf(":") + 1,null);
	var library = openfl.Assets.getLibrary(libraryName);
	if(library != null) {
		if(library.exists(symbolName,openfl.AssetType.FONT)) {
			if(library.isLocal(symbolName,openfl.AssetType.FONT)) {
				var font = library.getFont(symbolName);
				if(useCache && openfl.Assets.cache.enabled) openfl.Assets.cache.font.set(id,font);
				return font;
			} else haxe.Log.trace("[openfl.Assets] Font asset \"" + id + "\" exists, but only asynchronously",{ fileName : "Assets.hx", lineNumber : 230, className : "openfl.Assets", methodName : "getFont"});
		} else haxe.Log.trace("[openfl.Assets] There is no Font asset with an ID of \"" + id + "\"",{ fileName : "Assets.hx", lineNumber : 236, className : "openfl.Assets", methodName : "getFont"});
	} else haxe.Log.trace("[openfl.Assets] There is no asset library named \"" + libraryName + "\"",{ fileName : "Assets.hx", lineNumber : 242, className : "openfl.Assets", methodName : "getFont"});
	return null;
}
openfl.Assets.getLibrary = function(name) {
	if(name == null || name == "") name = "default";
	return openfl.Assets.libraries.get(name);
}
openfl.Assets.getMovieClip = function(id) {
	openfl.Assets.initialize();
	var libraryName = id.substring(0,id.indexOf(":"));
	var symbolName = HxOverrides.substr(id,id.indexOf(":") + 1,null);
	var library = openfl.Assets.getLibrary(libraryName);
	if(library != null) {
		if(library.exists(symbolName,openfl.AssetType.MOVIE_CLIP)) {
			if(library.isLocal(symbolName,openfl.AssetType.MOVIE_CLIP)) return library.getMovieClip(symbolName); else haxe.Log.trace("[openfl.Assets] MovieClip asset \"" + id + "\" exists, but only asynchronously",{ fileName : "Assets.hx", lineNumber : 292, className : "openfl.Assets", methodName : "getMovieClip"});
		} else haxe.Log.trace("[openfl.Assets] There is no MovieClip asset with an ID of \"" + id + "\"",{ fileName : "Assets.hx", lineNumber : 298, className : "openfl.Assets", methodName : "getMovieClip"});
	} else haxe.Log.trace("[openfl.Assets] There is no asset library named \"" + libraryName + "\"",{ fileName : "Assets.hx", lineNumber : 304, className : "openfl.Assets", methodName : "getMovieClip"});
	return null;
}
openfl.Assets.getMusic = function(id,useCache) {
	if(useCache == null) useCache = true;
	openfl.Assets.initialize();
	if(useCache && openfl.Assets.cache.enabled && openfl.Assets.cache.sound.exists(id)) {
		var sound = openfl.Assets.cache.sound.get(id);
		if(openfl.Assets.isValidSound(sound)) return sound;
	}
	var libraryName = id.substring(0,id.indexOf(":"));
	var symbolName = HxOverrides.substr(id,id.indexOf(":") + 1,null);
	var library = openfl.Assets.getLibrary(libraryName);
	if(library != null) {
		if(library.exists(symbolName,openfl.AssetType.MUSIC)) {
			if(library.isLocal(symbolName,openfl.AssetType.MUSIC)) {
				var sound = library.getMusic(symbolName);
				if(useCache && openfl.Assets.cache.enabled) openfl.Assets.cache.sound.set(id,sound);
				return sound;
			} else haxe.Log.trace("[openfl.Assets] Sound asset \"" + id + "\" exists, but only asynchronously",{ fileName : "Assets.hx", lineNumber : 361, className : "openfl.Assets", methodName : "getMusic"});
		} else haxe.Log.trace("[openfl.Assets] There is no Sound asset with an ID of \"" + id + "\"",{ fileName : "Assets.hx", lineNumber : 367, className : "openfl.Assets", methodName : "getMusic"});
	} else haxe.Log.trace("[openfl.Assets] There is no asset library named \"" + libraryName + "\"",{ fileName : "Assets.hx", lineNumber : 373, className : "openfl.Assets", methodName : "getMusic"});
	return null;
}
openfl.Assets.getPath = function(id) {
	openfl.Assets.initialize();
	var libraryName = id.substring(0,id.indexOf(":"));
	var symbolName = HxOverrides.substr(id,id.indexOf(":") + 1,null);
	var library = openfl.Assets.getLibrary(libraryName);
	if(library != null) {
		if(library.exists(symbolName,null)) return library.getPath(symbolName); else haxe.Log.trace("[openfl.Assets] There is no asset with an ID of \"" + id + "\"",{ fileName : "Assets.hx", lineNumber : 408, className : "openfl.Assets", methodName : "getPath"});
	} else haxe.Log.trace("[openfl.Assets] There is no asset library named \"" + libraryName + "\"",{ fileName : "Assets.hx", lineNumber : 414, className : "openfl.Assets", methodName : "getPath"});
	return null;
}
openfl.Assets.getSound = function(id,useCache) {
	if(useCache == null) useCache = true;
	openfl.Assets.initialize();
	if(useCache && openfl.Assets.cache.enabled && openfl.Assets.cache.sound.exists(id)) {
		var sound = openfl.Assets.cache.sound.get(id);
		if(openfl.Assets.isValidSound(sound)) return sound;
	}
	var libraryName = id.substring(0,id.indexOf(":"));
	var symbolName = HxOverrides.substr(id,id.indexOf(":") + 1,null);
	var library = openfl.Assets.getLibrary(libraryName);
	if(library != null) {
		if(library.exists(symbolName,openfl.AssetType.SOUND)) {
			if(library.isLocal(symbolName,openfl.AssetType.SOUND)) {
				var sound = library.getSound(symbolName);
				if(useCache && openfl.Assets.cache.enabled) openfl.Assets.cache.sound.set(id,sound);
				return sound;
			} else haxe.Log.trace("[openfl.Assets] Sound asset \"" + id + "\" exists, but only asynchronously",{ fileName : "Assets.hx", lineNumber : 471, className : "openfl.Assets", methodName : "getSound"});
		} else haxe.Log.trace("[openfl.Assets] There is no Sound asset with an ID of \"" + id + "\"",{ fileName : "Assets.hx", lineNumber : 477, className : "openfl.Assets", methodName : "getSound"});
	} else haxe.Log.trace("[openfl.Assets] There is no asset library named \"" + libraryName + "\"",{ fileName : "Assets.hx", lineNumber : 483, className : "openfl.Assets", methodName : "getSound"});
	return null;
}
openfl.Assets.getText = function(id) {
	openfl.Assets.initialize();
	var libraryName = id.substring(0,id.indexOf(":"));
	var symbolName = HxOverrides.substr(id,id.indexOf(":") + 1,null);
	var library = openfl.Assets.getLibrary(libraryName);
	if(library != null) {
		if(library.exists(symbolName,openfl.AssetType.TEXT)) {
			if(library.isLocal(symbolName,openfl.AssetType.TEXT)) return library.getText(symbolName); else haxe.Log.trace("[openfl.Assets] String asset \"" + id + "\" exists, but only asynchronously",{ fileName : "Assets.hx", lineNumber : 520, className : "openfl.Assets", methodName : "getText"});
		} else haxe.Log.trace("[openfl.Assets] There is no String asset with an ID of \"" + id + "\"",{ fileName : "Assets.hx", lineNumber : 526, className : "openfl.Assets", methodName : "getText"});
	} else haxe.Log.trace("[openfl.Assets] There is no asset library named \"" + libraryName + "\"",{ fileName : "Assets.hx", lineNumber : 532, className : "openfl.Assets", methodName : "getText"});
	return null;
}
openfl.Assets.initialize = function() {
	if(!openfl.Assets.initialized) {
		openfl.Assets.registerLibrary("default",new DefaultAssetLibrary());
		openfl.Assets.initialized = true;
	}
}
openfl.Assets.isLocal = function(id,type,useCache) {
	if(useCache == null) useCache = true;
	openfl.Assets.initialize();
	if(useCache && openfl.Assets.cache.enabled) {
		if(type == openfl.AssetType.IMAGE || type == null) {
			if(openfl.Assets.cache.bitmapData.exists(id)) return true;
		}
		if(type == openfl.AssetType.FONT || type == null) {
			if(openfl.Assets.cache.font.exists(id)) return true;
		}
		if(type == openfl.AssetType.SOUND || type == openfl.AssetType.MUSIC || type == null) {
			if(openfl.Assets.cache.sound.exists(id)) return true;
		}
	}
	var libraryName = id.substring(0,id.indexOf(":"));
	var symbolName = HxOverrides.substr(id,id.indexOf(":") + 1,null);
	var library = openfl.Assets.getLibrary(libraryName);
	if(library != null) return library.isLocal(symbolName,type);
	return false;
}
openfl.Assets.isValidBitmapData = function(bitmapData) {
	return true;
}
openfl.Assets.isValidSound = function(sound) {
	return true;
}
openfl.Assets.loadBitmapData = function(id,handler,useCache) {
	if(useCache == null) useCache = true;
	openfl.Assets.initialize();
	if(useCache && openfl.Assets.cache.enabled && openfl.Assets.cache.bitmapData.exists(id)) {
		var bitmapData = openfl.Assets.cache.bitmapData.get(id);
		if(openfl.Assets.isValidBitmapData(bitmapData)) {
			handler(bitmapData);
			return;
		}
	}
	var libraryName = id.substring(0,id.indexOf(":"));
	var symbolName = HxOverrides.substr(id,id.indexOf(":") + 1,null);
	var library = openfl.Assets.getLibrary(libraryName);
	if(library != null) {
		if(library.exists(symbolName,openfl.AssetType.IMAGE)) {
			if(useCache && openfl.Assets.cache.enabled) library.loadBitmapData(symbolName,function(bitmapData) {
				openfl.Assets.cache.bitmapData.set(id,bitmapData);
				handler(bitmapData);
			}); else library.loadBitmapData(symbolName,handler);
			return;
		} else haxe.Log.trace("[openfl.Assets] There is no BitmapData asset with an ID of \"" + id + "\"",{ fileName : "Assets.hx", lineNumber : 695, className : "openfl.Assets", methodName : "loadBitmapData"});
	} else haxe.Log.trace("[openfl.Assets] There is no asset library named \"" + libraryName + "\"",{ fileName : "Assets.hx", lineNumber : 701, className : "openfl.Assets", methodName : "loadBitmapData"});
	handler(null);
}
openfl.Assets.loadBytes = function(id,handler) {
	openfl.Assets.initialize();
	var libraryName = id.substring(0,id.indexOf(":"));
	var symbolName = HxOverrides.substr(id,id.indexOf(":") + 1,null);
	var library = openfl.Assets.getLibrary(libraryName);
	if(library != null) {
		if(library.exists(symbolName,openfl.AssetType.BINARY)) {
			library.loadBytes(symbolName,handler);
			return;
		} else haxe.Log.trace("[openfl.Assets] There is no String or ByteArray asset with an ID of \"" + id + "\"",{ fileName : "Assets.hx", lineNumber : 731, className : "openfl.Assets", methodName : "loadBytes"});
	} else haxe.Log.trace("[openfl.Assets] There is no asset library named \"" + libraryName + "\"",{ fileName : "Assets.hx", lineNumber : 737, className : "openfl.Assets", methodName : "loadBytes"});
	handler(null);
}
openfl.Assets.loadFont = function(id,handler,useCache) {
	if(useCache == null) useCache = true;
	openfl.Assets.initialize();
	if(useCache && openfl.Assets.cache.enabled && openfl.Assets.cache.font.exists(id)) {
		handler(openfl.Assets.cache.font.get(id));
		return;
	}
	var libraryName = id.substring(0,id.indexOf(":"));
	var symbolName = HxOverrides.substr(id,id.indexOf(":") + 1,null);
	var library = openfl.Assets.getLibrary(libraryName);
	if(library != null) {
		if(library.exists(symbolName,openfl.AssetType.FONT)) {
			if(useCache && openfl.Assets.cache.enabled) library.loadFont(symbolName,function(font) {
				openfl.Assets.cache.font.set(id,font);
				handler(font);
			}); else library.loadFont(symbolName,handler);
			return;
		} else haxe.Log.trace("[openfl.Assets] There is no Font asset with an ID of \"" + id + "\"",{ fileName : "Assets.hx", lineNumber : 788, className : "openfl.Assets", methodName : "loadFont"});
	} else haxe.Log.trace("[openfl.Assets] There is no asset library named \"" + libraryName + "\"",{ fileName : "Assets.hx", lineNumber : 794, className : "openfl.Assets", methodName : "loadFont"});
	handler(null);
}
openfl.Assets.loadLibrary = function(name,handler) {
	openfl.Assets.initialize();
	var data = openfl.Assets.getText("libraries/" + name + ".dat");
	if(data != null && data != "") {
		var unserializer = new haxe.Unserializer(data);
		unserializer.setResolver({ resolveEnum : openfl.Assets.resolveEnum, resolveClass : openfl.Assets.resolveClass});
		var library = unserializer.unserialize();
		openfl.Assets.libraries.set(name,library);
		library.load(handler);
	} else haxe.Log.trace("[openfl.Assets] There is no asset library named \"" + name + "\"",{ fileName : "Assets.hx", lineNumber : 824, className : "openfl.Assets", methodName : "loadLibrary"});
}
openfl.Assets.loadMusic = function(id,handler,useCache) {
	if(useCache == null) useCache = true;
	openfl.Assets.initialize();
	if(useCache && openfl.Assets.cache.enabled && openfl.Assets.cache.sound.exists(id)) {
		var sound = openfl.Assets.cache.sound.get(id);
		if(openfl.Assets.isValidSound(sound)) {
			handler(sound);
			return;
		}
	}
	var libraryName = id.substring(0,id.indexOf(":"));
	var symbolName = HxOverrides.substr(id,id.indexOf(":") + 1,null);
	var library = openfl.Assets.getLibrary(libraryName);
	if(library != null) {
		if(library.exists(symbolName,openfl.AssetType.MUSIC)) {
			if(useCache && openfl.Assets.cache.enabled) library.loadMusic(symbolName,function(sound) {
				openfl.Assets.cache.sound.set(id,sound);
				handler(sound);
			}); else library.loadMusic(symbolName,handler);
			return;
		} else haxe.Log.trace("[openfl.Assets] There is no Sound asset with an ID of \"" + id + "\"",{ fileName : "Assets.hx", lineNumber : 879, className : "openfl.Assets", methodName : "loadMusic"});
	} else haxe.Log.trace("[openfl.Assets] There is no asset library named \"" + libraryName + "\"",{ fileName : "Assets.hx", lineNumber : 885, className : "openfl.Assets", methodName : "loadMusic"});
	handler(null);
}
openfl.Assets.loadMovieClip = function(id,handler) {
	openfl.Assets.initialize();
	var libraryName = id.substring(0,id.indexOf(":"));
	var symbolName = HxOverrides.substr(id,id.indexOf(":") + 1,null);
	var library = openfl.Assets.getLibrary(libraryName);
	if(library != null) {
		if(library.exists(symbolName,openfl.AssetType.MOVIE_CLIP)) {
			library.loadMovieClip(symbolName,handler);
			return;
		} else haxe.Log.trace("[openfl.Assets] There is no MovieClip asset with an ID of \"" + id + "\"",{ fileName : "Assets.hx", lineNumber : 915, className : "openfl.Assets", methodName : "loadMovieClip"});
	} else haxe.Log.trace("[openfl.Assets] There is no asset library named \"" + libraryName + "\"",{ fileName : "Assets.hx", lineNumber : 921, className : "openfl.Assets", methodName : "loadMovieClip"});
	handler(null);
}
openfl.Assets.loadSound = function(id,handler,useCache) {
	if(useCache == null) useCache = true;
	openfl.Assets.initialize();
	if(useCache && openfl.Assets.cache.enabled && openfl.Assets.cache.sound.exists(id)) {
		var sound = openfl.Assets.cache.sound.get(id);
		if(openfl.Assets.isValidSound(sound)) {
			handler(sound);
			return;
		}
	}
	var libraryName = id.substring(0,id.indexOf(":"));
	var symbolName = HxOverrides.substr(id,id.indexOf(":") + 1,null);
	var library = openfl.Assets.getLibrary(libraryName);
	if(library != null) {
		if(library.exists(symbolName,openfl.AssetType.SOUND)) {
			if(useCache && openfl.Assets.cache.enabled) library.loadSound(symbolName,function(sound) {
				openfl.Assets.cache.sound.set(id,sound);
				handler(sound);
			}); else library.loadSound(symbolName,handler);
			return;
		} else haxe.Log.trace("[openfl.Assets] There is no Sound asset with an ID of \"" + id + "\"",{ fileName : "Assets.hx", lineNumber : 978, className : "openfl.Assets", methodName : "loadSound"});
	} else haxe.Log.trace("[openfl.Assets] There is no asset library named \"" + libraryName + "\"",{ fileName : "Assets.hx", lineNumber : 984, className : "openfl.Assets", methodName : "loadSound"});
	handler(null);
}
openfl.Assets.loadText = function(id,handler) {
	openfl.Assets.initialize();
	var libraryName = id.substring(0,id.indexOf(":"));
	var symbolName = HxOverrides.substr(id,id.indexOf(":") + 1,null);
	var library = openfl.Assets.getLibrary(libraryName);
	if(library != null) {
		if(library.exists(symbolName,openfl.AssetType.TEXT)) {
			library.loadText(symbolName,handler);
			return;
		} else haxe.Log.trace("[openfl.Assets] There is no String asset with an ID of \"" + id + "\"",{ fileName : "Assets.hx", lineNumber : 1014, className : "openfl.Assets", methodName : "loadText"});
	} else haxe.Log.trace("[openfl.Assets] There is no asset library named \"" + libraryName + "\"",{ fileName : "Assets.hx", lineNumber : 1020, className : "openfl.Assets", methodName : "loadText"});
	handler(null);
}
openfl.Assets.registerLibrary = function(name,library) {
	if(openfl.Assets.libraries.exists(name)) openfl.Assets.unloadLibrary(name);
	openfl.Assets.libraries.set(name,library);
}
openfl.Assets.resolveClass = function(name) {
	return Type.resolveClass(name);
}
openfl.Assets.resolveEnum = function(name) {
	var value = Type.resolveEnum(name);
	return value;
}
openfl.Assets.unloadLibrary = function(name) {
	openfl.Assets.initialize();
	var keys = openfl.Assets.cache.bitmapData.keys();
	while( keys.hasNext() ) {
		var key = keys.next();
		var libraryName = key.substring(0,key.indexOf(":"));
		var symbolName = HxOverrides.substr(key,key.indexOf(":") + 1,null);
		if(libraryName == name) openfl.Assets.cache.bitmapData.remove(key);
	}
	openfl.Assets.libraries.remove(name);
}
openfl.AssetData = function() {
};
$hxClasses["openfl.AssetData"] = openfl.AssetData;
openfl.AssetData.__name__ = ["openfl","AssetData"];
openfl.AssetData.prototype = {
	type: null
	,path: null
	,id: null
	,__class__: openfl.AssetData
}
openfl.AssetType = $hxClasses["openfl.AssetType"] = { __ename__ : true, __constructs__ : ["BINARY","FONT","IMAGE","MOVIE_CLIP","MUSIC","SOUND","TEMPLATE","TEXT"] }
openfl.AssetType.BINARY = ["BINARY",0];
openfl.AssetType.BINARY.toString = $estr;
openfl.AssetType.BINARY.__enum__ = openfl.AssetType;
openfl.AssetType.FONT = ["FONT",1];
openfl.AssetType.FONT.toString = $estr;
openfl.AssetType.FONT.__enum__ = openfl.AssetType;
openfl.AssetType.IMAGE = ["IMAGE",2];
openfl.AssetType.IMAGE.toString = $estr;
openfl.AssetType.IMAGE.__enum__ = openfl.AssetType;
openfl.AssetType.MOVIE_CLIP = ["MOVIE_CLIP",3];
openfl.AssetType.MOVIE_CLIP.toString = $estr;
openfl.AssetType.MOVIE_CLIP.__enum__ = openfl.AssetType;
openfl.AssetType.MUSIC = ["MUSIC",4];
openfl.AssetType.MUSIC.toString = $estr;
openfl.AssetType.MUSIC.__enum__ = openfl.AssetType;
openfl.AssetType.SOUND = ["SOUND",5];
openfl.AssetType.SOUND.toString = $estr;
openfl.AssetType.SOUND.__enum__ = openfl.AssetType;
openfl.AssetType.TEMPLATE = ["TEMPLATE",6];
openfl.AssetType.TEMPLATE.toString = $estr;
openfl.AssetType.TEMPLATE.__enum__ = openfl.AssetType;
openfl.AssetType.TEXT = ["TEXT",7];
openfl.AssetType.TEXT.toString = $estr;
openfl.AssetType.TEXT.__enum__ = openfl.AssetType;
openfl.display = {}
openfl.display.FPS = function(x,y,color) {
	if(color == null) color = 0;
	if(y == null) y = 10;
	if(x == null) x = 10;
	flash.text.TextField.call(this);
	this.set_x(x);
	this.set_y(y);
	this.currentFPS = 0;
	this.selectable = false;
	this.set_defaultTextFormat(new flash.text.TextFormat("_sans",12,color));
	this.set_text("FPS: ");
	this.cacheCount = 0;
	this.times = [];
	this.addEventListener(flash.events.Event.ENTER_FRAME,$bind(this,this.this_onEnterFrame));
};
$hxClasses["openfl.display.FPS"] = openfl.display.FPS;
openfl.display.FPS.__name__ = ["openfl","display","FPS"];
openfl.display.FPS.__super__ = flash.text.TextField;
openfl.display.FPS.prototype = $extend(flash.text.TextField.prototype,{
	this_onEnterFrame: function(event) {
		var currentTime = haxe.Timer.stamp();
		this.times.push(currentTime);
		while(this.times[0] < currentTime - 1) this.times.shift();
		var currentCount = this.times.length;
		this.currentFPS = Math.round((currentCount + this.cacheCount) / 2);
		if(currentCount != this.cacheCount && this.get_visible()) this.set_text("FPS: " + this.currentFPS);
		this.cacheCount = currentCount;
	}
	,times: null
	,cacheCount: null
	,currentFPS: null
	,__class__: openfl.display.FPS
});
openfl.display.Tilesheet = function(image) {
	this.__bitmap = image;
	this.__centerPoints = new Array();
	this.__tileRects = new Array();
	this.__tileUVs = new Array();
};
$hxClasses["openfl.display.Tilesheet"] = openfl.display.Tilesheet;
openfl.display.Tilesheet.__name__ = ["openfl","display","Tilesheet"];
openfl.display.Tilesheet.prototype = {
	getTileUVs: function(index) {
		return this.__tileUVs[index];
	}
	,getTileRect: function(index) {
		return this.__tileRects[index];
	}
	,getTileCenter: function(index) {
		return this.__centerPoints[index];
	}
	,drawTiles: function(graphics,tileData,smooth,flags) {
		if(flags == null) flags = 0;
		if(smooth == null) smooth = false;
		graphics.drawTiles(this,tileData,smooth,flags);
	}
	,addTileRect: function(rectangle,centerPoint) {
		this.__tileRects.push(rectangle);
		if(centerPoint == null) centerPoint = new flash.geom.Point();
		this.__centerPoints.push(centerPoint);
		this.__tileUVs.push(new flash.geom.Rectangle(rectangle.get_left() / this.__bitmap.get_width(),rectangle.get_top() / this.__bitmap.get_height(),rectangle.get_right() / this.__bitmap.get_width(),rectangle.get_bottom() / this.__bitmap.get_height()));
		return this.__tileRects.length - 1;
	}
	,__tileUVs: null
	,__tileRects: null
	,__centerPoints: null
	,__bitmap: null
	,__class__: openfl.display.Tilesheet
}
function $iterator(o) { if( o instanceof Array ) return function() { return HxOverrides.iter(o); }; return typeof(o.iterator) == 'function' ? $bind(o,o.iterator) : o.iterator; };
var $_, $fid = 0;
function $bind(o,m) { if( m == null ) return null; if( m.__id__ == null ) m.__id__ = $fid++; var f; if( o.hx__closures__ == null ) o.hx__closures__ = {}; else f = o.hx__closures__[m.__id__]; if( f == null ) { f = function(){ return f.method.apply(f.scope, arguments); }; f.scope = o; f.method = m; o.hx__closures__[m.__id__] = f; } return f; };
if(Array.prototype.indexOf) HxOverrides.remove = function(a,o) {
	var i = a.indexOf(o);
	if(i == -1) return false;
	a.splice(i,1);
	return true;
};
Math.__name__ = ["Math"];
Math.NaN = Number.NaN;
Math.NEGATIVE_INFINITY = Number.NEGATIVE_INFINITY;
Math.POSITIVE_INFINITY = Number.POSITIVE_INFINITY;
$hxClasses.Math = Math;
Math.isFinite = function(i) {
	return isFinite(i);
};
Math.isNaN = function(i) {
	return isNaN(i);
};
String.prototype.__class__ = $hxClasses.String = String;
String.__name__ = ["String"];
Array.prototype.__class__ = $hxClasses.Array = Array;
Array.__name__ = ["Array"];
Date.prototype.__class__ = $hxClasses.Date = Date;
Date.__name__ = ["Date"];
var Int = $hxClasses.Int = { __name__ : ["Int"]};
var Dynamic = $hxClasses.Dynamic = { __name__ : ["Dynamic"]};
var Float = $hxClasses.Float = Number;
Float.__name__ = ["Float"];
var Bool = $hxClasses.Bool = Boolean;
Bool.__ename__ = ["Bool"];
var Class = $hxClasses.Class = { __name__ : ["Class"]};
var Enum = { };
flash.ui.Multitouch.maxTouchPoints = 2;
flash.ui.Multitouch.supportedGestures = [];
flash.ui.Multitouch.supportsGestureEvents = false;
haxe.Resource.content = [{ name : "__ASSET__:bitmap_GameLogo", data : "s162107:iVBORw0KGgoAAAANSUhEUgAAAO0AAAB5CAYAAADVuqbaAAAACXBIWXMAAAsTAAALEwEAmpwYAAAKT2lDQ1BQaG90b3Nob3AgSUNDIHByb2ZpbGUAAHjanVNnVFPpFj333vRCS4iAlEtvUhUIIFJCi4AUkSYqIQkQSoghodkVUcERRUUEG8igiAOOjoCMFVEsDIoK2AfkIaKOg6OIisr74Xuja9a89%bN:rXXPues852zzwfACAyWSDNRNYAMqUIeEeCDx8TG4eQuQIEKJHAAEAizZCFz:SMBAPh%PDwrIsAHvgABeNMLCADATZvAMByH:w:qQplcAYCEAcB0kThLCIAUAEB6jkKmAEBGAYCdmCZTAKAEAGDLY2LjAFAtAGAnf%bTAICd%Jl7AQBblCEVAaCRACATZYhEAGg7AKzPVopFAFgwABRmS8Q5ANgtADBJV2ZIALC3AMDOEAuyAAgMADBRiIUpAAR7AGDIIyN4AISZABRG8lc88SuuEOcqAAB4mbI8uSQ5RYFbCC1xB1dXLh4ozkkXKxQ2YQJhmkAuwnmZGTKBNA:g88wAAKCRFRHgg:P9eM4Ors7ONo62Dl8t6r8G:yJiYuP%5c%rcEAAAOF0ftH%LC%zGoA7BoBt:qIl7gRoXgugdfeLZrIPQLUAoOnaV:Nw%H48PEWhkLnZ2eXk5NhKxEJbYcpXff5nwl:AV:1s%X48:Pf14L7iJIEyXYFHBPjgwsz0TKUcz5IJhGLc5o9H:LcL::wd0yLESWK5WCoU41EScY5EmozzMqUiiUKSKcUl0v9k4t8s%wM%3zUAsGo%AXuRLahdYwP2SycQWHTA4vcAAPK7b8HUKAgDgGiD4c93:%8::UegJQCAZkmScQAAXkQkLlTKsz:HCAAARKCBKrBBG:TBGCzABhzBBdzBC:xgNoRCJMTCQhBCCmSAHHJgKayCQiiGzbAdKmAv1EAdNMBRaIaTcA4uwlW4Dj1wD:phCJ7BKLyBCQRByAgTYSHaiAFiilgjjggXmYX4IcFIBBKLJCDJiBRRIkuRNUgxUopUIFVIHfI9cgI5h1xGupE7yAAygvyGvEcxlIGyUT3UDLVDuag3GoRGogvQZHQxmo8WoJvQcrQaPYw2oefQq2gP2o8%Q8cwwOgYBzPEbDAuxsNCsTgsCZNjy7EirAyrxhqwVqwDu4n1Y8%xdwQSgUXACTYEd0IgYR5BSFhMWE7YSKggHCQ0EdoJNwkDhFHCJyKTqEu0JroR%cQYYjIxh1hILCPWEo8TLxB7iEPENyQSiUMyJ7mQAkmxpFTSEtJG0m5SI%ksqZs0SBojk8naZGuyBzmULCAryIXkneTD5DPkG%Qh8lsKnWJAcaT4U%IoUspqShnlEOU05QZlmDJBVaOaUt2ooVQRNY9aQq2htlKvUYeoEzR1mjnNgxZJS6WtopXTGmgXaPdpr%h0uhHdlR5Ol9BX0svpR%iX6AP0dwwNhhWDx4hnKBmbGAcYZxl3GK%YTKYZ04sZx1QwNzHrmOeZD5lvVVgqtip8FZHKCpVKlSaVGyovVKmqpqreqgtV81XLVI%pXlN9rkZVM1PjqQnUlqtVqp1Q61MbU2epO6iHqmeob1Q:pH5Z:YkGWcNMw09DpFGgsV:jvMYgC2MZs3gsIWsNq4Z1gTXEJrHN2Xx2KruY:R27iz2qqaE5QzNKM1ezUvOUZj8H45hx%Jx0TgnnKKeX836K3hTvKeIpG6Y0TLkxZVxrqpaXllirSKtRq0frvTau7aedpr1Fu1n7gQ5Bx0onXCdHZ4:OBZ3nU9lT3acKpxZNPTr1ri6qa6UbobtEd79up%6Ynr5egJ5Mb6feeb3n%hx9L:1U:W36p:VHDFgGswwkBtsMzhg8xTVxbzwdL8fb8VFDXcNAQ6VhlWGX4YSRudE8o9VGjUYPjGnGXOMk423GbcajJgYmISZLTepN7ppSTbmmKaY7TDtMx83MzaLN1pk1mz0x1zLnm%eb15vft2BaeFostqi2uGVJsuRaplnutrxuhVo5WaVYVVpds0atna0l1rutu6cRp7lOk06rntZnw7Dxtsm2qbcZsOXYBtuutm22fWFnYhdnt8Wuw%6TvZN9un2N:T0HDYfZDqsdWh1%c7RyFDpWOt6azpzuP33F9JbpL2dYzxDP2DPjthPLKcRpnVOb00dnF2e5c4PziIuJS4LLLpc%Lpsbxt3IveRKdPVxXeF60vWdm7Obwu2o26:uNu5p7ofcn8w0nymeWTNz0MPIQ%BR5dE:C5%VMGvfrH5PQ0%BZ7XnIy9jL5FXrdewt6V3qvdh7xc%9j5yn%M%4zw33jLeWV:MN8C3yLfLT8Nvnl%F30N:I:9k:3r:0QCngCUBZwOJgUGBWwL7%Hp8Ib%OPzrbZfay2e1BjKC5QRVBj4KtguXBrSFoyOyQrSH355jOkc5pDoVQfujW0Adh5mGLw34MJ4WHhVeGP45wiFga0TGXNXfR3ENz30T6RJZE3ptnMU85ry1KNSo%qi5qPNo3ujS6P8YuZlnM1VidWElsSxw5LiquNm5svt:87fOH4p3iC%N7F5gvyF1weaHOwvSFpxapLhIsOpZATIhOOJTwQRAqqBaMJfITdyWOCnnCHcJnIi:RNtGI2ENcKh5O8kgqTXqS7JG8NXkkxTOlLOW5hCepkLxMDUzdmzqeFpp2IG0yPTq9MYOSkZBxQqohTZO2Z%pn5mZ2y6xlhbL%xW6Lty8elQfJa7OQrAVZLQq2QqboVFoo1yoHsmdlV2a:zYnKOZarnivN7cyzytuQN5zvn::tEsIS4ZK2pYZLVy0dWOa9rGo5sjxxedsK4xUFK4ZWBqw8uIq2Km3VT6vtV5eufr0mek1rgV7ByoLBtQFr6wtVCuWFfevc1%1dT1gvWd%1YfqGnRs%FYmKrhTbF5cVf9go3HjlG4dvyr%Z3JS0qavEuWTPZtJm6ebeLZ5bDpaql%aXDm4N2dq0Dd9WtO319kXbL5fNKNu7g7ZDuaO:PLi8ZafJzs07P1SkVPRU%lQ27tLdtWHX%G7R7ht7vPY07NXbW7z3:T7JvttVAVVN1WbVZftJ%7P3P66Jqun4lvttXa1ObXHtxwPSA:0HIw6217nU1R3SPVRSj9Yr60cOxx%%:p3vdy0NNg1VjZzG4iNwRHnk6fcJ3:ceDTradox7rOEH0x92HWcdL2pCmvKaRptTmvtbYlu6T8w%0dbq3nr8R9sfD5w0PFl5SvNUyWna6YLTk2fyz4ydlZ19fi753GDborZ752PO32oPb%%6EHTh0kX:i%c7vDvOXPK4dPKy2%UTV7hXmq86X23qdOo8:pPTT8e7nLuarrlca7nuer21e2b36RueN87d9L158Rb:1tWeOT3dvfN6b:fF9:XfFt1%cif9zsu72Xcn7q28T7xf9EDtQdlD3YfVP1v%3Njv3H9qwHeg89HcR:cGhYPP:pH1jw9DBY%Zj8uGDYbrnjg%OTniP3L96fynQ89kzyaeF:6i:suuFxYvfvjV69fO0ZjRoZfyl5O:bXyl:erA6xmv28bCxh6%yXgzMV70VvvtwXfcdx3vo98PT%R8IH8o:2j5sfVT0Kf7kxmTk:8EA5jz:GMzLdsAAXtraVRYdFhNTDpjb20uYWRvYmUueG1wAAAAAAA8P3hwYWNrZXQgYmVnaW49Iu%7vyIgaWQ9Ilc1TTBNcENlaGlIenJlU3pOVGN6a2M5ZCI:Pgo8eDp4bXBtZXRhIHhtbG5zOng9ImFkb2JlOm5zOm1ldGEvIiB4OnhtcHRrPSJBZG9iZSBYTVAgQ29yZSA1LjUtYzAxNCA3OS4xNTE0ODEsIDIwMTMvMDMvMTMtMTI6MDk6MTUgICAgICAgICI%CiAgIDxyZGY6UkRGIHhtbG5zOnJkZj0iaHR0cDovL3d3dy53My5vcmcvMTk5OS8wMi8yMi1yZGYtc3ludGF4LW5zIyI%CiAgICAgIDxyZGY6RGVzY3JpcHRpb24gcmRmOmFib3V0PSIiCiAgICAgICAgICAgIHhtbG5zOnhtcD0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wLyIKICAgICAgICAgICAgeG1sbnM6ZGM9Imh0dHA6Ly9wdXJsLm9yZy9kYy9lbGVtZW50cy8xLjEvIgogICAgICAgICAgICB4bWxuczpwaG90b3Nob3A9Imh0dHA6Ly9ucy5hZG9iZS5jb20vcGhvdG9zaG9wLzEuMC8iCiAgICAgICAgICAgIHhtbG5zOnhtcE1NPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvbW0vIgogICAgICAgICAgICB4bWxuczpzdEV2dD0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL3NUeXBlL1Jlc291cmNlRXZlbnQjIgogICAgICAgICAgICB4bWxuczpzdFJlZj0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL3NUeXBlL1Jlc291cmNlUmVmIyIKICAgICAgICAgICAgeG1sbnM6dGlmZj0iaHR0cDovL25zLmFkb2JlLmNvbS90aWZmLzEuMC8iCiAgICAgICAgICAgIHhtbG5zOmV4aWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20vZXhpZi8xLjAvIj4KICAgICAgICAgPHhtcDpDcmVhdG9yVG9vbD5BZG9iZSBQaG90b3Nob3AgQ0MgKFdpbmRvd3MpPC94bXA6Q3JlYXRvclRvb2w%CiAgICAgICAgIDx4bXA6Q3JlYXRlRGF0ZT4yMDExLTA0LTIwVDE4OjQ5OjQ4KzAzOjAwPC94bXA6Q3JlYXRlRGF0ZT4KICAgICAgICAgPHhtcDpNb2RpZnlEYXRlPjIwMTQtMDItMjdUMjA6MjY6MDYrMDI6MDA8L3htcDpNb2RpZnlEYXRlPgogICAgICAgICA8eG1wOk1ldGFkYXRhRGF0ZT4yMDE0LTAyLTI3VDIwOjI2OjA2KzAyOjAwPC94bXA6TWV0YWRhdGFEYXRlPgogICAgICAgICA8ZGM6Zm9ybWF0PmltYWdlL3BuZzwvZGM6Zm9ybWF0PgogICAgICAgICA8cGhvdG9zaG9wOkxlZ2FjeUlQVENEaWdlc3Q%NkQ1MUUwMzAxRTRFOEM3QjhCQjYzNjVCM0ZGRTE0RUE8L3Bob3Rvc2hvcDpMZWdhY3lJUFRDRGlnZXN0PgogICAgICAgICA8cGhvdG9zaG9wOkNvbG9yTW9kZT4zPC9waG90b3Nob3A6Q29sb3JNb2RlPgogICAgICAgICA8cGhvdG9zaG9wOklDQ1Byb2ZpbGU%c1JHQiBJRUM2MTk2Ni0yLjE8L3Bob3Rvc2hvcDpJQ0NQcm9maWxlPgogICAgICAgICA8cGhvdG9zaG9wOlRleHRMYXllcnM%CiAgICAgICAgICAgIDxyZGY6QmFnPgogICAgICAgICAgICAgICA8cmRmOmxpIHJkZjpwYXJzZVR5cGU9IlJlc291cmNlIj4KICAgICAgICAgICAgICAgICAgPHBob3Rvc2hvcDpMYXllck5hbWU%UkVQTEFZPC9waG90b3Nob3A6TGF5ZXJOYW1lPgogICAgICAgICAgICAgICAgICA8cGhvdG9zaG9wOkxheWVyVGV4dD5SRVBMQVk8L3Bob3Rvc2hvcDpMYXllclRleHQ%CiAgICAgICAgICAgICAgIDwvcmRmOmxpPgogICAgICAgICAgICAgICA8cmRmOmxpIHJkZjpwYXJzZVR5cGU9IlJlc291cmNlIj4KICAgICAgICAgICAgICAgICAgPHBob3Rvc2hvcDpMYXllck5hbWU%TUVOVTwvcGhvdG9zaG9wOkxheWVyTmFtZT4KICAgICAgICAgICAgICAgICAgPHBob3Rvc2hvcDpMYXllclRleHQ%TUVOVTwvcGhvdG9zaG9wOkxheWVyVGV4dD4KICAgICAgICAgICAgICAgPC9yZGY6bGk%CiAgICAgICAgICAgICAgIDxyZGY6bGkgcmRmOnBhcnNlVHlwZT0iUmVzb3VyY2UiPgogICAgICAgICAgICAgICAgICA8cGhvdG9zaG9wOkxheWVyTmFtZT5TY29yZTwvcGhvdG9zaG9wOkxheWVyTmFtZT4KICAgICAgICAgICAgICAgICAgPHBob3Rvc2hvcDpMYXllclRleHQ%U2NvcmU8L3Bob3Rvc2hvcDpMYXllclRleHQ%CiAgICAgICAgICAgICAgIDwvcmRmOmxpPgogICAgICAgICAgICAgICA8cmRmOmxpIHJkZjpwYXJzZVR5cGU9IlJlc291cmNlIj4KICAgICAgICAgICAgICAgICAgPHBob3Rvc2hvcDpMYXllck5hbWU%MDEyMzQ1Njc4OTwvcGhvdG9zaG9wOkxheWVyTmFtZT4KICAgICAgICAgICAgICAgICAgPHBob3Rvc2hvcDpMYXllclRleHQ%MDEyMzQ1Njc4OTwvcGhvdG9zaG9wOkxheWVyVGV4dD4KICAgICAgICAgICAgICAgPC9yZGY6bGk%CiAgICAgICAgICAgICAgIDxyZGY6bGkgcmRmOnBhcnNlVHlwZT0iUmVzb3VyY2UiPgogICAgICAgICAgICAgICAgICA8cGhvdG9zaG9wOkxheWVyTmFtZT4xNjwvcGhvdG9zaG9wOkxheWVyTmFtZT4KICAgICAgICAgICAgICAgICAgPHBob3Rvc2hvcDpMYXllclRleHQ%MTY8L3Bob3Rvc2hvcDpMYXllclRleHQ%CiAgICAgICAgICAgICAgIDwvcmRmOmxpPgogICAgICAgICAgICAgICA8cmRmOmxpIHJkZjpwYXJzZVR5cGU9IlJlc291cmNlIj4KICAgICAgICAgICAgICAgICAgPHBob3Rvc2hvcDpMYXllck5hbWU%U3dlZXQgc2xpY2U8L3Bob3Rvc2hvcDpMYXllck5hbWU%CiAgICAgICAgICAgICAgICAgIDxwaG90b3Nob3A6TGF5ZXJUZXh0PlN3ZWV0IHNsaWNlPC9waG90b3Nob3A6TGF5ZXJUZXh0PgogICAgICAgICAgICAgICA8L3JkZjpsaT4KICAgICAgICAgICAgICAgPHJkZjpsaSByZGY6cGFyc2VUeXBlPSJSZXNvdXJjZSI%CiAgICAgICAgICAgICAgICAgIDxwaG90b3Nob3A6TGF5ZXJOYW1lPlN3ZWV0PC9waG90b3Nob3A6TGF5ZXJOYW1lPgogICAgICAgICAgICAgICAgICA8cGhvdG9zaG9wOkxheWVyVGV4dD5Td2VldDwvcGhvdG9zaG9wOkxheWVyVGV4dD4KICAgICAgICAgICAgICAgPC9yZGY6bGk%CiAgICAgICAgICAgICAgIDxyZGY6bGkgcmRmOnBhcnNlVHlwZT0iUmVzb3VyY2UiPgogICAgICAgICAgICAgICAgICA8cGhvdG9zaG9wOkxheWVyTmFtZT5TbGljZTwvcGhvdG9zaG9wOkxheWVyTmFtZT4KICAgICAgICAgICAgICAgICAgPHBob3Rvc2hvcDpMYXllclRleHQ%U2xpY2U8L3Bob3Rvc2hvcDpMYXllclRleHQ%CiAgICAgICAgICAgICAgIDwvcmRmOmxpPgogICAgICAgICAgICAgICA8cmRmOmxpIHJkZjpwYXJzZVR5cGU9IlJlc291cmNlIj4KICAgICAgICAgICAgICAgICAgPHBob3Rvc2hvcDpMYXllck5hbWU%Q3JlZGl0czwvcGhvdG9zaG9wOkxheWVyTmFtZT4KICAgICAgICAgICAgICAgICAgPHBob3Rvc2hvcDpMYXllclRleHQ%Q3JlZGl0czwvcGhvdG9zaG9wOkxheWVyVGV4dD4KICAgICAgICAgICAgICAgPC9yZGY6bGk%CiAgICAgICAgICAgICAgIDxyZGY6bGkgcmRmOnBhcnNlVHlwZT0iUmVzb3VyY2UiPgogICAgICAgICAgICAgICAgICA8cGhvdG9zaG9wOkxheWVyTmFtZT5SZWxheDwvcGhvdG9zaG9wOkxheWVyTmFtZT4KICAgICAgICAgICAgICAgICAgPHBob3Rvc2hvcDpMYXllclRleHQ%UmVsYXg8L3Bob3Rvc2hvcDpMYXllclRleHQ%CiAgICAgICAgICAgICAgIDwvcmRmOmxpPgogICAgICAgICAgICAgICA8cmRmOmxpIHJkZjpwYXJzZVR5cGU9IlJlc291cmNlIj4KICAgICAgICAgICAgICAgICAgPHBob3Rvc2hvcDpMYXllck5hbWU%Q2xhc3NpYzwvcGhvdG9zaG9wOkxheWVyTmFtZT4KICAgICAgICAgICAgICAgICAgPHBob3Rvc2hvcDpMYXllclRleHQ%Q2xhc3NpYzwvcGhvdG9zaG9wOkxheWVyVGV4dD4KICAgICAgICAgICAgICAgPC9yZGY6bGk%CiAgICAgICAgICAgIDwvcmRmOkJhZz4KICAgICAgICAgPC9waG90b3Nob3A6VGV4dExheWVycz4KICAgICAgICAgPHBob3Rvc2hvcDpEb2N1bWVudEFuY2VzdG9ycz4KICAgICAgICAgICAgPHJkZjpCYWc%CiAgICAgICAgICAgICAgIDxyZGY6bGk%MEUyNTk4NkIwN0ZDRTdDNTJGQThGRDYwRDg4MUNEMTg8L3JkZjpsaT4KICAgICAgICAgICAgICAgPHJkZjpsaT4xMzgxQzBBRjVFODUyMDA5N0M5MzQ3NDNBQTVCQkQ5MDwvcmRmOmxpPgogICAgICAgICAgICAgICA8cmRmOmxpPjE2MzM1RjA3MDM1QUU5MjVDRTI2QTkxQjE0M0Q1RkZDPC9yZGY6bGk%CiAgICAgICAgICAgICAgIDxyZGY6bGk%MTZCMjM4MEUxRjVCNjQ2QUU3MjA2QTkwOEM4ODhBOEU8L3JkZjpsaT4KICAgICAgICAgICAgICAgPHJkZjpsaT4yMjc3OENBOTVERjE5ODlGMDhBQ0M3RjI5N0VDN0Q3RjwvcmRmOmxpPgogICAgICAgICAgICAgICA8cmRmOmxpPjMxRkRERjMzNEQzNDREOEI3N0JDRkEzOTM0OTIyQkMxPC9yZGY6bGk%CiAgICAgICAgICAgICAgIDxyZGY6bGk%MzQwQjlFNDVBRDdBOTU0NDc4RkY2QTA2Q0EwNzNCMkE8L3JkZjpsaT4KICAgICAgICAgICAgICAgPHJkZjpsaT4zNDU3QjkyNzY1NjBBRThDMTVDQjkwODhBQkNGQzZCNjwvcmRmOmxpPgogICAgICAgICAgICAgICA8cmRmOmxpPjM2RUVGQTc5N0Y4QzM3NzNFQUYwRDgzNTZCNTc2NkRFPC9yZGY6bGk%CiAgICAgICAgICAgICAgIDxyZGY6bGk%M0MxMUQ5QjQ0NUI3OTdCOEM5OEM0NTI4QzlDOERFNUU8L3JkZjpsaT4KICAgICAgICAgICAgICAgPHJkZjpsaT4zQ0U1QzU0NEJEOTFGNTBGQjU3QzYwNTE2NkZCNDRFRjwvcmRmOmxpPgogICAgICAgICAgICAgICA8cmRmOmxpPjNEODFENzkyMkY1ODExM0QzQTQ1QUIyRTVCMDNGMzk0PC9yZGY6bGk%CiAgICAgICAgICAgICAgIDxyZGY6bGk%NEZCRjlFQTlFREFCNzRDNjhBMjY1Qjc3NEVENjJFMzY8L3JkZjpsaT4KICAgICAgICAgICAgICAgPHJkZjpsaT41MkZGMzJGRjg2NkJCRUFEQTQzRDI1NDgyMjQ3OTNDMzwvcmRmOmxpPgogICAgICAgICAgICAgICA8cmRmOmxpPjUzQzYwRDA2OURGMTU2QUIzRkRFRUEzNzUxODFCQ0E1PC9yZGY6bGk%CiAgICAgICAgICAgICAgIDxyZGY6bGk%NjEzMjk2NzY2MkVEMjhFNDgwMEM4MDAxM0NFNjg0MTQ8L3JkZjpsaT4KICAgICAgICAgICAgICAgPHJkZjpsaT42QzhFMjE0NzZFMTIyNDU4MDkyMjM1MzY1RDVDNzIyQjwvcmRmOmxpPgogICAgICAgICAgICAgICA8cmRmOmxpPjZEMDE3QjIwQzMxQjNCQUI2MEQzRUYwMjU2RUJDNjkzPC9yZGY6bGk%CiAgICAgICAgICAgICAgIDxyZGY6bGk%NzE0RjhDMzhEMjI0OTIzRDFDMUVDRTFEQ0EzMzlCOEU8L3JkZjpsaT4KICAgICAgICAgICAgICAgPHJkZjpsaT43NkNFRTc2QkI2RjZERDdFMkNGMjc0ODg1QUZEMkNDODwvcmRmOmxpPgogICAgICAgICAgICAgICA8cmRmOmxpPjdFQjI4RjBENDRBMjk4MUNDMDhGMDA0QjhFOEQ4RThBPC9yZGY6bGk%CiAgICAgICAgICAgICAgIDxyZGY6bGk%ODJGNjdEMzA3MDkzMzFEN0UwOTk1ODc5OUZGNThENUY8L3JkZjpsaT4KICAgICAgICAgICAgICAgPHJkZjpsaT44NkYwMDQzQTlDNzkwMEY3NzI2MzRBRDgyMDRGNEM3RTwvcmRmOmxpPgogICAgICAgICAgICAgICA8cmRmOmxpPjg4NDdFREY4RDNDNzE5RjJDRkQ0REY2MjE1N0RENzNCPC9yZGY6bGk%CiAgICAgICAgICAgICAgIDxyZGY6bGk%ODhGNjM5NzUxMDVFODU2ODM4ODkzREM4MEIwQ0FBNUQ8L3JkZjpsaT4KICAgICAgICAgICAgICAgPHJkZjpsaT44RjM5NEVGNTM3NTEwQzI1RTQ5QzUyRjZCNzUyNjU3ODwvcmRmOmxpPgogICAgICAgICAgICAgICA8cmRmOmxpPjk4RjVDRTg0ODE2MTdFOTREOTA4MTM5NkNDNUE3NjQ0PC9yZGY6bGk%CiAgICAgICAgICAgICAgIDxyZGY6bGk%OTk1MzUwODA2NzczNkJEOENCRkI1REE5NjM5QTM1NjI8L3JkZjpsaT4KICAgICAgICAgICAgICAgPHJkZjpsaT5BMjFCMDBERjQ0MkE5MUUwNDM1OEI0RTIxMjI5NTI4QzwvcmRmOmxpPgogICAgICAgICAgICAgICA8cmRmOmxpPkE0NkNEQTBGMEM0M0Y4M0E2QkM1QkQzNzBFQTY2NDkzPC9yZGY6bGk%CiAgICAgICAgICAgICAgIDxyZGY6bGk%QTlFRDM5RDUzQTI4REM2NzQ2MjJDOTE1OUZDNTU4RkE8L3JkZjpsaT4KICAgICAgICAgICAgICAgPHJkZjpsaT5BRkRCNEIzRDdFQjAxMURCOUQzOUU3OTIyQjlBMjlBQTwvcmRmOmxpPgogICAgICAgICAgICAgICA8cmRmOmxpPkI5NTZBRjVEQzIwMEFCMTJFMTY5MkU0MThEQjhEMTIyPC9yZGY6bGk%CiAgICAgICAgICAgICAgIDxyZGY6bGk%QkNGMUY0MzE5OTE5OEY4OUJDRjBDQjM3NDA0ODU5NUQ8L3JkZjpsaT4KICAgICAgICAgICAgICAgPHJkZjpsaT5CRjc1RThERkM4MUM3NEI0RDdBOTM3RTExNjEzODFDRTwvcmRmOmxpPgogICAgICAgICAgICAgICA8cmRmOmxpPkMwQTBERDUxRTJGM0FCMDVGQTZDNEUwMTlGQzIwNUY3PC9yZGY6bGk%CiAgICAgICAgICAgICAgIDxyZGY6bGk%QzIyM0QwOENGNzk0NzZBOUI4Q0M4NTdBRTk0Q0I3NTA8L3JkZjpsaT4KICAgICAgICAgICAgICAgPHJkZjpsaT5DMzc5NDVDNjUwODQ0NzY4MkY3RDZDN0E0MEM2NEZBMTwvcmRmOmxpPgogICAgICAgICAgICAgICA8cmRmOmxpPkM4Mzk2NEQzREZDRkI2RkZFNTA0NDJGM0QyMDZCQTM3PC9yZGY6bGk%CiAgICAgICAgICAgICAgIDxyZGY6bGk%QzkzMjA3QkQ5Mzk1QUM2OTNGRjdBRTFFM0RFNUY3MDM8L3JkZjpsaT4KICAgICAgICAgICAgICAgPHJkZjpsaT5EODY4QjkyMkIwRkJEMzNERTlCREQxMzAyNzMzRjJGQzwvcmRmOmxpPgogICAgICAgICAgICAgICA8cmRmOmxpPkU0QjdEQ0NCOTJCRjE0MTNFREYzMDcxQjlDOTJFOTdDPC9yZGY6bGk%CiAgICAgICAgICAgICAgIDxyZGY6bGk%RUFEREYwM0JDMEJGOEMxMTU3RDBDNzhFQzQ4MjIzOEQ8L3JkZjpsaT4KICAgICAgICAgICAgICAgPHJkZjpsaT5GMUYyMzZCRkQwRkQ3QURFNjA0RjBBRkRGOTQ3MTJCMDwvcmRmOmxpPgogICAgICAgICAgICAgICA8cmRmOmxpPkY3QkU1RDUyQ0ZFOUVEQzcxNDVCN0IyRTdENjg1N0M5PC9yZGY6bGk%CiAgICAgICAgICAgICAgIDxyZGY6bGk%YWRvYmU6ZG9jaWQ6aW1hZ2VyZWFkeTphNmViYjc2My0wOWE4LTExZTAtYmVkMi1hNGM5Zjg3M2RjYjc8L3JkZjpsaT4KICAgICAgICAgICAgICAgPHJkZjpsaT5hZG9iZTpkb2NpZDpwaG90b3Nob3A6MDUxYjRmMTItN2NhNi0xMWUwLThjODItY2YwOWJkMDg3YTZkPC9yZGY6bGk%CiAgICAgICAgICAgICAgIDxyZGY6bGk%YWRvYmU6ZG9jaWQ6cGhvdG9zaG9wOjBmYzc5ZjIwLWQyMzItMTFkYi1iMWJiLWFlYmE2YWM1ZWY2NTwvcmRmOmxpPgogICAgICAgICAgICAgICA8cmRmOmxpPmFkb2JlOmRvY2lkOnBob3Rvc2hvcDoxMzFjZjZhZS02OWNlLTExZGItOTQ2NS05MjNlNWZmYjBkOWE8L3JkZjpsaT4KICAgICAgICAgICAgICAgPHJkZjpsaT5hZG9iZTpkb2NpZDpwaG90b3Nob3A6MTNkZTYzOGItYzRlOC0xMWRkLThhYjktZmZkNDBhMTQ5NzUxPC9yZGY6bGk%CiAgICAgICAgICAgICAgIDxyZGY6bGk%YWRvYmU6ZG9jaWQ6cGhvdG9zaG9wOjE1OTIzMjczLWZhNDMtMTFkYS05MTIxLTg3MmUzNmExM2ExMDwvcmRmOmxpPgogICAgICAgICAgICAgICA8cmRmOmxpPmFkb2JlOmRvY2lkOnBob3Rvc2hvcDoxODBiZmU5ZC1mYTQzLTExZGEtOTEyMS04NzJlMzZhMTNhMTA8L3JkZjpsaT4KICAgICAgICAgICAgICAgPHJkZjpsaT5hZG9iZTpkb2NpZDpwaG90b3Nob3A6MWIxZTcwNzQtNjljZS0xMWRiLTk0NjUtOTIzZTVmZmIwZDlhPC9yZGY6bGk%CiAgICAgICAgICAgICAgIDxyZGY6bGk%YWRvYmU6ZG9jaWQ6cGhvdG9zaG9wOjFkZWM3NGVkLTY5Y2UtMTFkYi05NDY1LTkyM2U1ZmZiMGQ5YTwvcmRmOmxpPgogICAgICAgICAgICAgICA8cmRmOmxpPmFkb2JlOmRvY2lkOnBob3Rvc2hvcDoyNWRmMDRjMi02OWNlLTExZGItOTQ2NS05MjNlNWZmYjBkOWE8L3JkZjpsaT4KICAgICAgICAgICAgICAgPHJkZjpsaT5hZG9iZTpkb2NpZDpwaG90b3Nob3A6MmExZDg0ZDctZmE0My0xMWRhLTkxMjEtODcyZTM2YTEzYTEwPC9yZGY6bGk%CiAgICAgICAgICAgICAgIDxyZGY6bGk%YWRvYmU6ZG9jaWQ6cGhvdG9zaG9wOjJiYWU3MTJjLWZhNDMtMTFkYS05MTIxLTg3MmUzNmExM2ExMDwvcmRmOmxpPgogICAgICAgICAgICAgICA8cmRmOmxpPmFkb2JlOmRvY2lkOnBob3Rvc2hvcDoyZmQ0ZGU2Zi1mYTQzLTExZGEtOTEyMS04NzJlMzZhMTNhMTA8L3JkZjpsaT4KICAgICAgICAgICAgICAgPHJkZjpsaT5hZG9iZTpkb2NpZDpwaG90b3Nob3A6MzBlM2E2NTMtZmE0My0xMWRhLTkxMjEtODcyZTM2YTEzYTEwPC9yZGY6bGk%CiAgICAgICAgICAgICAgIDxyZGY6bGk%YWRvYmU6ZG9jaWQ6cGhvdG9zaG9wOjMxOGNkM2VhLTY5Y2UtMTFkYi05NDY1LTkyM2U1ZmZiMGQ5YTwvcmRmOmxpPgogICAgICAgICAgICAgICA8cmRmOmxpPmFkb2JlOmRvY2lkOnBob3Rvc2hvcDozMmFmOTM1MS03OTlkLTExZGItYWEyZS1lODE3YjY1OGZkMzc8L3JkZjpsaT4KICAgICAgICAgICAgICAgPHJkZjpsaT5hZG9iZTpkb2NpZDpwaG90b3Nob3A6M2M3OGExMGMtZmE0My0xMWRhLTkxMjEtODcyZTM2YTEzYTEwPC9yZGY6bGk%CiAgICAgICAgICAgICAgIDxyZGY6bGk%YWRvYmU6ZG9jaWQ6cGhvdG9zaG9wOjRkZmRhNjYzLWI2MjgtMTFkYi1iYzMyLWFiMWM3NTk4ODU5NzwvcmRmOmxpPgogICAgICAgICAgICAgICA8cmRmOmxpPmFkb2JlOmRvY2lkOnBob3Rvc2hvcDo1NGVhODk2Yi00YmNhLTExZGItYjg4NS1jNmI4ZDdjODIwNDM8L3JkZjpsaT4KICAgICAgICAgICAgICAgPHJkZjpsaT5hZG9iZTpkb2NpZDpwaG90b3Nob3A6NWI3MzA4ZTYtNjljZS0xMWRiLTk0NjUtOTIzZTVmZmIwZDlhPC9yZGY6bGk%CiAgICAgICAgICAgICAgIDxyZGY6bGk%YWRvYmU6ZG9jaWQ6cGhvdG9zaG9wOjVmY2EwZDhlLTg2ZTEtMTFkZS1iMWRkLTlkMjYzNDg4ZTQwYjwvcmRmOmxpPgogICAgICAgICAgICAgICA8cmRmOmxpPmFkb2JlOmRvY2lkOnBob3Rvc2hvcDo2Y2M3MmRkNC1jMTIyLTExZGEtOWVhMC1iNDEwMjE3YmM2MDQ8L3JkZjpsaT4KICAgICAgICAgICAgICAgPHJkZjpsaT5hZG9iZTpkb2NpZDpwaG90b3Nob3A6NmQ5MjJhZDctZGM2Yi0xMWRiLTlmYjItYzEzZWU2MmFhNzlkPC9yZGY6bGk%CiAgICAgICAgICAgICAgIDxyZGY6bGk%YWRvYmU6ZG9jaWQ6cGhvdG9zaG9wOjgwYmY0MzhjLTI1NGItMTFlMS04MGViLWE1MDA1OGY2ZjhkNjwvcmRmOmxpPgogICAgICAgICAgICAgICA8cmRmOmxpPmFkb2JlOmRvY2lkOnBob3Rvc2hvcDo5MDBlNzkyYi1mNzM5LTExZTAtODFhNC1jNmRjZDQ1OTExZmI8L3JkZjpsaT4KICAgICAgICAgICAgICAgPHJkZjpsaT5hZG9iZTpkb2NpZDpwaG90b3Nob3A6YTY1YmY0NWItMGE1OC0xMWRjLTgyYTQtZmRhOTkwYWQ3MTQzPC9yZGY6bGk%CiAgICAgICAgICAgICAgIDxyZGY6bGk%YWRvYmU6ZG9jaWQ6cGhvdG9zaG9wOmI4ZDJhNjExLWI3MzItMTFkNi1iZTA1LThiYTE3YjAwOWUyMTwvcmRmOmxpPgogICAgICAgICAgICAgICA8cmRmOmxpPmFkb2JlOmRvY2lkOnBob3Rvc2hvcDpkNGU3MjE5OC1kNTNlLTExZGQtYmQ0Zi04NGMzM2I5MmZjYWM8L3JkZjpsaT4KICAgICAgICAgICAgICAgPHJkZjpsaT5hZG9iZTpkb2NpZDpwaG90b3Nob3A6ZGFkYjlkM2MtYjEwYy0xMWRiLTlmNTctODFlODdiMTVlYzgxPC9yZGY6bGk%CiAgICAgICAgICAgICAgIDxyZGY6bGk%YWRvYmU6ZG9jaWQ6cGhvdG9zaG9wOmRiNGMzNzM5LWQyOTEtMTFkZS05OTAyLTg4NzI1MDIyZThmOTwvcmRmOmxpPgogICAgICAgICAgICAgICA8cmRmOmxpPmFkb2JlOmRvY2lkOnBob3Rvc2hvcDplYTFmOTU3NC0xOGRmLTExZTAtYmY5OS05NGQwNmM1NWM1MzY8L3JkZjpsaT4KICAgICAgICAgICAgICAgPHJkZjpsaT51dWlkOjAwRjcyRTczQ0I0MkRGMTE5MjdFQzAzREYyRjQwNjBCPC9yZGY6bGk%CiAgICAgICAgICAgICAgIDxyZGY6bGk%dXVpZDowMTNCNEM5OTY5NUZFMDExODNGMEQyQjg3QTAxRUMzRDwvcmRmOmxpPgogICAgICAgICAgICAgICA8cmRmOmxpPnV1aWQ6MDIyOTk3RThDRDI1REUxMTkxNTI4REMxMEEyNDBGNUM8L3JkZjpsaT4KICAgICAgICAgICAgICAgPHJkZjpsaT51dWlkOjAyNDZBRkY0NTc2M0RGMTE5NzMzQTQ3RTU0MTdBNzdEPC9yZGY6bGk%CiAgICAgICAgICAgICAgIDxyZGY6bGk%dXVpZDowMjYxRjMyNDc4QjlERDExODZEMDlBQTc4MzEwQUYzQjwvcmRmOmxpPgogICAgICAgICAgICAgICA8cmRmOmxpPnV1aWQ6MDQ0NkM4OEE0QTU2REMxMThFQjM4NjExQjI2RkMzNUI8L3JkZjpsaT4KICAgICAgICAgICAgICAgPHJkZjpsaT51dWlkOjA2N0YwMTE0QzVGNERGMTE4MUZCRkExRkFGNThGMkRBPC9yZGY6bGk%CiAgICAgICAgICAgICAgIDxyZGY6bGk%dXVpZDowNzEzRDQzN0UyN0RERTExQTcxN0NGRUQyMzVFQkYxODwvcmRmOmxpPgogICAgICAgICAgICAgICA8cmRmOmxpPnV1aWQ6MEE3OEQ5ODhERDU4MTFEQzk2RDVFNzE2QTZGMkJDRjA8L3JkZjpsaT4KICAgICAgICAgICAgICAgPHJkZjpsaT51dWlkOjBCRERDQjBBMkYyN0UxMTFBM0JCQkQxQjQ4NTZFRTg4PC9yZGY6bGk%CiAgICAgICAgICAgICAgIDxyZGY6bGk%dXVpZDowQzNEOTJDNEQ0MjVERTExOTE1MjhEQzEwQTI0MEY1QzwvcmRmOmxpPgogICAgICAgICAgICAgICA8cmRmOmxpPnV1aWQ6MEM3QzcxQjgzOTQ2REUxMThFMDVFMDBBOTI0RDhDQzU8L3JkZjpsaT4KICAgICAgICAgICAgICAgPHJkZjpsaT51dWlkOjBDRUI3NUI0MDlGOUUwMTFCNjVCRjc2MURFQzEwRUNBPC9yZGY6bGk%CiAgICAgICAgICAgICAgIDxyZGY6bGk%dXVpZDowRTAxMTZDNzAyQkNERjExOTlGQ0I0RjQzOEU0MEZENDwvcmRmOmxpPgogICAgICAgICAgICAgICA8cmRmOmxpPnV1aWQ6MEYzNDYwNDdBRjIwREMxMUI3MjdEOURCRUQ2NURDNTA8L3JkZjpsaT4KICAgICAgICAgICAgICAgPHJkZjpsaT51dWlkOjEwMzVCOTNDMDFFQ0RGMTE5MjE5QjJDNjUwNkNDRTAwPC9yZGY6bGk%CiAgICAgICAgICAgICAgIDxyZGY6bGk%dXVpZDoxMEQ5REMzMDMzNDZERTExOEUwNUUwMEE5MjREOENDNTwvcmRmOmxpPgogICAgICAgICAgICAgICA8cmRmOmxpPnV1aWQ6MTYxQ0M0RDEzNTY4REYxMTg3MDBBMTkzODBCNERBMTk8L3JkZjpsaT4KICAgICAgICAgICAgICAgPHJkZjpsaT51dWlkOjE2MUZDNUQyRDY4N0UwMTE4RDM0QThFNThCNkRCQzFBPC9yZGY6bGk%CiAgICAgICAgICAgICAgIDxyZGY6bGk%dXVpZDoxNzI2RUY5MzJCODdERDExQkJBQUQzQzU5MDMzQzBDMjwvcmRmOmxpPgogICAgICAgICAgICAgICA8cmRmOmxpPnV1aWQ6MTczM0M2RjVGRjhEREYxMThDNDhCMUJERTZBQUJGMEU8L3JkZjpsaT4KICAgICAgICAgICAgICAgPHJkZjpsaT51dWlkOjE4QzBENENCRDg1M0RDMTFCRjE1OEE1NkVCQ0E5MDMzPC9yZGY6bGk%CiAgICAgICAgICAgICAgIDxyZGY6bGk%dXVpZDoxOTUwMTUwOEUyRUYxMUREOEJFQ0NCNkI0NTUyQkVBNzwvcmRmOmxpPgogICAgICAgICAgICAgICA8cmRmOmxpPnV1aWQ6MUFDNzhEMDUyRjQ2REUxMThFMDVFMDBBOTI0RDhDQzU8L3JkZjpsaT4KICAgICAgICAgICAgICAgPHJkZjpsaT51dWlkOjFCNkFGOTREMzBCNURGMTE4REZGQUFBN0UyQkQ2N0FDPC9yZGY6bGk%CiAgICAgICAgICAgICAgIDxyZGY6bGk%dXVpZDoxQkFBODlCN0Y5NTFERjExOUZCNEExQUE3OTk0NTJFNjwvcmRmOmxpPgogICAgICAgICAgICAgICA8cmRmOmxpPnV1aWQ6MUM2ODE4MkE0ODc1REUxMUE5OTJGRDJEQzZFOTgzMEQ8L3JkZjpsaT4KICAgICAgICAgICAgICAgPHJkZjpsaT51dWlkOjFDQjgwMzQ3Q0Q4Q0RFMTFCODlBRTk3ODI2RThERjI5PC9yZGY6bGk%CiAgICAgICAgICAgICAgIDxyZGY6bGk%dXVpZDoxRTExQzQyQTQ4RkFERTExQUMxMkQ0QUFGRTI4NkY1RjwvcmRmOmxpPgogICAgICAgICAgICAgICA8cmRmOmxpPnV1aWQ6MUY1QUYzQjY3MjI5REYxMTlGRkFCMjZFMjQwQzcxQkI8L3JkZjpsaT4KICAgICAgICAgICAgICAgPHJkZjpsaT51dWlkOjIwOEM0NDUwN0UxM0RGMTE4ODJGRDM1NTA0MDg1MzgzPC9yZGY6bGk%CiAgICAgICAgICAgICAgIDxyZGY6bGk%dXVpZDoyMUQ2NTBDQjJFNDZERTExOEUwNUUwMEE5MjREOENDNTwvcmRmOmxpPgogICAgICAgICAgICAgICA8cmRmOmxpPnV1aWQ6MjI2QjlBM0M0RjVBREMxMTk3NERDQjVDQjE3NDFEMjg8L3JkZjpsaT4KICAgICAgICAgICAgICAgPHJkZjpsaT51dWlkOjIzMTgxMzYwMzI0NkRFMTE4RTA1RTAwQTkyNEQ4Q0M1PC9yZGY6bGk%CiAgICAgICAgICAgICAgIDxyZGY6bGk%dXVpZDoyNDBGNzY5NkUwOUJERjExODk0M0VDN0QyRTg5QzBCQTwvcmRmOmxpPgogICAgICAgICAgICAgICA8cmRmOmxpPnV1aWQ6MjVBNkZERUJGRDEzREYxMThCRjhGOENDNkIxMEIxRjg8L3JkZjpsaT4KICAgICAgICAgICAgICAgPHJkZjpsaT51dWlkOjI2QjdBRjA3OTdDMkRFMTE4MzExQkMyNjQzMkVGNDNBPC9yZGY6bGk%CiAgICAgICAgICAgICAgIDxyZGY6bGk%dXVpZDoyNzIzNzYyREY3N0FEQzExQUI4NkQxQ0Y0RjhBQ0JEMDwvcmRmOmxpPgogICAgICAgICAgICAgICA8cmRmOmxpPnV1aWQ6Mjg0MDNGNEJDNEQyREUxMUExMUVENTUwRDM4RjQ0NUI8L3JkZjpsaT4KICAgICAgICAgICAgICAgPHJkZjpsaT51dWlkOjI4NEQzNDFDMzc0NkRFMTE4RTA1RTAwQTkyNEQ4Q0M1PC9yZGY6bGk%CiAgICAgICAgICAgICAgIDxyZGY6bGk%dXVpZDoyQUQ1NjQ3NTY1OTRERTExQjRERERGMTMyMEU0RjA3RDwvcmRmOmxpPgogICAgICAgICAgICAgICA8cmRmOmxpPnV1aWQ6MkQxRjA1QjAyOTQ2REUxMThFMDVFMDBBOTI0RDhDQzU8L3JkZjpsaT4KICAgICAgICAgICAgICAgPHJkZjpsaT51dWlkOjJEQkREMUJGQ0UxRERGMTE5QUJFQzE0OTMzMUQzMTREPC9yZGY6bGk%CiAgICAgICAgICAgICAgIDxyZGY6bGk%dXVpZDoyREJGNzQ1MDNDMDFERTExOUVEQkExNDc3OTA0MEUxQTwvcmRmOmxpPgogICAgICAgICAgICAgICA8cmRmOmxpPnV1aWQ6MkRFOEQyMTk1RDREREMxMUFEQkFERUZEOTZCN0YxNDA8L3JkZjpsaT4KICAgICAgICAgICAgICAgPHJkZjpsaT51dWlkOjJGNTk1MDkxMkYyRURFMTFBM0ZEQTlENkRGNDE0OUE2PC9yZGY6bGk%CiAgICAgICAgICAgICAgIDxyZGY6bGk%dXVpZDoyRjhCMTA0OEQyMTRERTExOUY3Q0Q3NDRBRkU1MzlGRTwvcmRmOmxpPgogICAgICAgICAgICAgICA8cmRmOmxpPnV1aWQ6MkZDMDgwOEJBRTFEREQxMTg1QzFCM0IyQTA3M0NDQjY8L3JkZjpsaT4KICAgICAgICAgICAgICAgPHJkZjpsaT51dWlkOjMwNzREQzQwQTdFNEREMTE4NTZGQzM1RUVFNzAxRjU3PC9yZGY6bGk%CiAgICAgICAgICAgICAgIDxyZGY6bGk%dXVpZDozMkFEOTAxQzE1NDBERjExQkEyMkVCODM5MEU0MjdGQTwvcmRmOmxpPgogICAgICAgICAgICAgICA8cmRmOmxpPnV1aWQ6MzY5RTcyN0ZCMDRGREUxMTk3NzdBMjQxRTExMzJCNDM8L3JkZjpsaT4KICAgICAgICAgICAgICAgPHJkZjpsaT51dWlkOjM2QUIwQTlDMjFCOERFMTFBMjc4QTNERjcxOUI2NzgwPC9yZGY6bGk%CiAgICAgICAgICAgICAgIDxyZGY6bGk%dXVpZDozN0REMDZBODc2NTNFMTExODQyMkQ5MDc1RkUyOUExMTwvcmRmOmxpPgogICAgICAgICAgICAgICA8cmRmOmxpPnV1aWQ6MzgyMjI3NDE5NjUwREUxMTgyOEVCNzlCN0ZGODdCNDY8L3JkZjpsaT4KICAgICAgICAgICAgICAgPHJkZjpsaT51dWlkOjM4MjlCNDVEMkY0NkRFMTE4RTA1RTAwQTkyNEQ4Q0M1PC9yZGY6bGk%CiAgICAgICAgICAgICAgIDxyZGY6bGk%dXVpZDozOEVGRUJEMzJDNDZERTExOEUwNUUwMEE5MjREOENDNTwvcmRmOmxpPgogICAgICAgICAgICAgICA8cmRmOmxpPnV1aWQ6M0E0Njc3ODE1RTI5REYxMUEwQjA4N0RGODk3RjVDNTY8L3JkZjpsaT4KICAgICAgICAgICAgICAgPHJkZjpsaT51dWlkOjNGQUFCMzFEQzdGM0RFMTFCRkIzQkI2MUFFMUExOThCPC9yZGY6bGk%CiAgICAgICAgICAgICAgIDxyZGY6bGk%dXVpZDozRkJFNjU2RjQ4NTNERjExOTVBOEM5QjdCMkU5MzMwNjwvcmRmOmxpPgogICAgICAgICAgICAgICA8cmRmOmxpPnV1aWQ6NDAwNEJBRDBFRDQ2REUxMTkxMUM5RDZCMjVEMjEzMzU8L3JkZjpsaT4KICAgICAgICAgICAgICAgPHJkZjpsaT51dWlkOjQyMDFDNTQxMTA5MERFMTFCMTIzRTFENDVDREJGNzkyPC9yZGY6bGk%CiAgICAgICAgICAgICAgIDxyZGY6bGk%dXVpZDo0NTdEMDI5NTUwNTVERjExOEI1OUQ5NTlEOUZDRDUwQjwvcmRmOmxpPgogICAgICAgICAgICAgICA8cmRmOmxpPnV1aWQ6NDVENjYzODBDODVEREUxMUE1ODVEOTY0NDVBQ0FFN0Q8L3JkZjpsaT4KICAgICAgICAgICAgICAgPHJkZjpsaT51dWlkOjQ2RTUwNDZCN0Q3OUREMTFCNkRBRDE0NzI5NTU5RDgzPC9yZGY6bGk%CiAgICAgICAgICAgICAgIDxyZGY6bGk%dXVpZDo0N0RFNTI3OEY1MkNERTExOUZCM0NBQUVENzQ2RkU5NDwvcmRmOmxpPgogICAgICAgICAgICAgICA8cmRmOmxpPnV1aWQ6NDg4RTdEMjE2NDE3REYxMUFCMzA5NkRCNTlCRTgyNzg8L3JkZjpsaT4KICAgICAgICAgICAgICAgPHJkZjpsaT51dWlkOjQ5QzhENUU5MjM3OERDMTFBQkI3RTdCMENGMzRENzhFPC9yZGY6bGk%CiAgICAgICAgICAgICAgIDxyZGY6bGk%dXVpZDo0QkQ2NEUzRDU5MUFERjExOUE0NDgxNkU0MjZEMTRDQzwvcmRmOmxpPgogICAgICAgICAgICAgICA8cmRmOmxpPnV1aWQ6NEQ0NzUzMERCRkIxREUxMTgzOENCNzlCQjAyOUM1MzM8L3JkZjpsaT4KICAgICAgICAgICAgICAgPHJkZjpsaT51dWlkOjREOUM5ODFCRkYzNkUwMTFCODI0RjRCQThFQzE5Mjc2PC9yZGY6bGk%CiAgICAgICAgICAgICAgIDxyZGY6bGk%dXVpZDo0RENBRDM3NDJGMjdFMTExQTNCQkJEMUI0ODU2RUU4ODwvcmRmOmxpPgogICAgICAgICAgICAgICA8cmRmOmxpPnV1aWQ6NEU2NkRBMDI2QjE1REUxMUFCRjlCQ0EyNjNBMEYxNDk8L3JkZjpsaT4KICAgICAgICAgICAgICAgPHJkZjpsaT51dWlkOjUwMDFGNzREMkE0NkRFMTE4RTA1RTAwQTkyNEQ4Q0M1PC9yZGY6bGk%CiAgICAgICAgICAgICAgIDxyZGY6bGk%dXVpZDo1MDg1RkUxQzVDRjFEQzExODQ5OTlCMkQ0NzNCNDBDNTwvcmRmOmxpPgogICAgICAgICAgICAgICA8cmRmOmxpPnV1aWQ6NTBDNDQ2RDkxRDQ2REUxMThFMDVFMDBBOTI0RDhDQzU8L3JkZjpsaT4KICAgICAgICAgICAgICAgPHJkZjpsaT51dWlkOjUxMTAyRDIzNDhFNkRDMTFCQTM3QTFGNDU5MzIwOTg0PC9yZGY6bGk%CiAgICAgICAgICAgICAgIDxyZGY6bGk%dXVpZDo1MTc3N0UzMEFDRDdERTExQTFBRThBMzg4QkYxMUZEQjwvcmRmOmxpPgogICAgICAgICAgICAgICA8cmRmOmxpPnV1aWQ6NTNGRjdDQkEyRERGMTFEQUFFOTRCRTczOEY3OEQzQjE8L3JkZjpsaT4KICAgICAgICAgICAgICAgPHJkZjpsaT51dWlkOjU2NUMzMEQ0M0EwOERGMTFBNjFEQjIyN0VEREY1OUY4PC9yZGY6bGk%CiAgICAgICAgICAgICAgIDxyZGY6bGk%dXVpZDo1ODQyNEVDQjJFMjdFMTExQTNCQkJEMUI0ODU2RUU4ODwvcmRmOmxpPgogICAgICAgICAgICAgICA8cmRmOmxpPnV1aWQ6NjM2N0ZENDYzNjQ2REUxMThFMDVFMDBBOTI0RDhDQzU8L3JkZjpsaT4KICAgICAgICAgICAgICAgPHJkZjpsaT51dWlkOjY1MTY5Q0NCMzQ1RURGMTE5NEM4RDlGNzg2NTQ0MjJFPC9yZGY6bGk%CiAgICAgICAgICAgICAgIDxyZGY6bGk%dXVpZDo2NUU4NTJGMjJFMjdFMTExQTNCQkJEMUI0ODU2RUU4ODwvcmRmOmxpPgogICAgICAgICAgICAgICA8cmRmOmxpPnV1aWQ6NjZFNUI4RTYxNjE1REYxMTg3OUFCNjdEQ0IzOUQ5RkE8L3JkZjpsaT4KICAgICAgICAgICAgICAgPHJkZjpsaT51dWlkOjY5MjJFMjlCNTk4NURGMTFCNDc3OUMxQTYwRTI1NDY2PC9yZGY6bGk%CiAgICAgICAgICAgICAgIDxyZGY6bGk%dXVpZDo2QTNCMDkzODExOEVFMDExOTlDNkI4RTg3NEIzQUEzNTwvcmRmOmxpPgogICAgICAgICAgICAgICA8cmRmOmxpPnV1aWQ6NkE2RDRCOUREM0JCREUxMTgzRjlGNTE4MEYyNzhFRjU8L3JkZjpsaT4KICAgICAgICAgICAgICAgPHJkZjpsaT51dWlkOjZCRDZDQUZEQzNFN0RDMTE4RDE3Q0NDODc0MkUyRTc4PC9yZGY6bGk%CiAgICAgICAgICAgICAgIDxyZGY6bGk%dXVpZDo2QzFDRUU5OUZGMENERTExOEI2MDgwODY4NkQxQ0RBNjwvcmRmOmxpPgogICAgICAgICAgICAgICA8cmRmOmxpPnV1aWQ6NkM3MDdFQjU0QzRFREYxMTlCRjY5RjVFN0NDMzg1RDQ8L3JkZjpsaT4KICAgICAgICAgICAgICAgPHJkZjpsaT51dWlkOjZFNDNCREU4RkFBMEREMTFBOEM3ODAwMTQ2RDlGMkZEPC9yZGY6bGk%CiAgICAgICAgICAgICAgIDxyZGY6bGk%dXVpZDo2RTc4RTE0NUJCNTREQzExQjA4QUM5NTkwRDNBMzQwRDwvcmRmOmxpPgogICAgICAgICAgICAgICA8cmRmOmxpPnV1aWQ6NzM3ODI2OEVFRjQ2REUxMTkxMUM5RDZCMjVEMjEzMzU8L3JkZjpsaT4KICAgICAgICAgICAgICAgPHJkZjpsaT51dWlkOjc0MEUwMTlFNTFFMkREMTFBMkRGODU5N0VFNEFDOUY1PC9yZGY6bGk%CiAgICAgICAgICAgICAgIDxyZGY6bGk%dXVpZDo3NDhGQkJDNTQ3NjFERTExOTlEQzk5ODIzNDRFMzkxQTwvcmRmOmxpPgogICAgICAgICAgICAgICA8cmRmOmxpPnV1aWQ6NzVhZDM3YjYtOGEzNy00ZmNkLWE0ZmUtMjZmMWFhMWYxMWFiPC9yZGY6bGk%CiAgICAgICAgICAgICAgIDxyZGY6bGk%dXVpZDo3OEUwNjIzMERFMzFERDExOUQ5MjkzRTgxRjBGNDZCMjwvcmRmOmxpPgogICAgICAgICAgICAgICA8cmRmOmxpPnV1aWQ6N0MxNEE1QUI2MkM3REMxMTkxRjNGQjJEQUYyMEU3Q0Y8L3JkZjpsaT4KICAgICAgICAgICAgICAgPHJkZjpsaT51dWlkOjdDM0ZGNTI0QjExMERGMTE5RjQzQ0Y2QUNBQjgyOTg1PC9yZGY6bGk%CiAgICAgICAgICAgICAgIDxyZGY6bGk%dXVpZDo3Qzg5MTQ5RjJEN0FEQzExOEFFRkYyNUI4NDUyNTc4NjwvcmRmOmxpPgogICAgICAgICAgICAgICA8cmRmOmxpPnV1aWQ6N0Q4MkE0RDlGNTM4REYxMTg5QUZDRDI3Mjk0NjY5ODU8L3JkZjpsaT4KICAgICAgICAgICAgICAgPHJkZjpsaT51dWlkOjdjMDRlYzBjLTljNDktMTFlMC1hODg2LTAwMWI2MzkxNDdlMzwvcmRmOmxpPgogICAgICAgICAgICAgICA8cmRmOmxpPnV1aWQ6ODIzMDAyMDM0QzY5REQxMTlDMUY4RTkxMjk2NUI0NzE8L3JkZjpsaT4KICAgICAgICAgICAgICAgPHJkZjpsaT51dWlkOjgzMzk1ODdBMUQzQ0RFMTE4NTM3QTAxQ0FBNzhCQzY0PC9yZGY6bGk%CiAgICAgICAgICAgICAgIDxyZGY6bGk%dXVpZDo4M0MzMjVBM0EzMjFERjExOTVGN0Q3NzVERTU1Qjg2QjwvcmRmOmxpPgogICAgICAgICAgICAgICA8cmRmOmxpPnV1aWQ6ODQxOEI5RjcxQjE5REUxMUFDRDFGRDBENzlEMUM0OEM8L3JkZjpsaT4KICAgICAgICAgICAgICAgPHJkZjpsaT51dWlkOjg3NTE0NkM3OTNFRERFMTE4M0NDQzA3NDc4Rjk0MzE5PC9yZGY6bGk%CiAgICAgICAgICAgICAgIDxyZGY6bGk%dXVpZDo4ODY4MkVDRjVGREZERTExQjM2NkQ5RUY3NERFNEIzRTwvcmRmOmxpPgogICAgICAgICAgICAgICA8cmRmOmxpPnV1aWQ6ODk2QzBGQ0JEQTMyREYxMUE0NzNCMjFDNDlEMTc1N0U8L3JkZjpsaT4KICAgICAgICAgICAgICAgPHJkZjpsaT51dWlkOjhBOEJBQzU4OTNEM0RGMTFCQjQ2QUVFOUZCRUE0MzkyPC9yZGY6bGk%CiAgICAgICAgICAgICAgIDxyZGY6bGk%dXVpZDo4QjMwNjZBQzFCMTZERTExQTM3REFGNDNDRDU5QkFCNjwvcmRmOmxpPgogICAgICAgICAgICAgICA8cmRmOmxpPnV1aWQ6OEI1OEYzQzU1OTAwREYxMUE3ODdGRTBBOEZGQjNERjY8L3JkZjpsaT4KICAgICAgICAgICAgICAgPHJkZjpsaT51dWlkOjhDOEI0RjMxN0UxQURGMTFCQUJDRDc0NDcyQ0VFMEFFPC9yZGY6bGk%CiAgICAgICAgICAgICAgIDxyZGY6bGk%dXVpZDo4RDYyRTVDNUY5NDZERjExQTFBQ0JDMkNENjYwQzIxMjwvcmRmOmxpPgogICAgICAgICAgICAgICA8cmRmOmxpPnV1aWQ6OEZFMUY5NUE5NTQxREUxMTg3QTNCNjNBRUM2NzBCN0Y8L3JkZjpsaT4KICAgICAgICAgICAgICAgPHJkZjpsaT51dWlkOjkwQURGN0Q1Mzk4QTExREY4NjExOTQzNkExN0NCMjI3PC9yZGY6bGk%CiAgICAgICAgICAgICAgIDxyZGY6bGk%dXVpZDo5MUM2QjlERDdEMUFERjExQkFCQ0Q3NDQ3MkNFRTBBRTwvcmRmOmxpPgogICAgICAgICAgICAgICA8cmRmOmxpPnV1aWQ6OTJBNzk5RjIzMjdEMTFERUFBMDhBOTJERUU4NjQxQkY8L3JkZjpsaT4KICAgICAgICAgICAgICAgPHJkZjpsaT51dWlkOjkzNjkwNDJDMkY0NkRFMTFCRDlFRTVBNjYzOUE2MjVGPC9yZGY6bGk%CiAgICAgICAgICAgICAgIDxyZGY6bGk%dXVpZDo5NDNFQkNCRjlGMDVFMDExQjgyMkE3QUU1QzQ0QjgxMTwvcmRmOmxpPgogICAgICAgICAgICAgICA8cmRmOmxpPnV1aWQ6OTQ3QUIzNjU3NkRCRTAxMThCNTk5NTYxMDJBNUU3MDU8L3JkZjpsaT4KICAgICAgICAgICAgICAgPHJkZjpsaT51dWlkOjk2QkJDQkI0NUY4NERGMTFBN0YzRUJFNDZFRDI5Nzk1PC9yZGY6bGk%CiAgICAgICAgICAgICAgIDxyZGY6bGk%dXVpZDo5NzlFODBGMTJDNDZERTExOEUwNUUwMEE5MjREOENDNTwvcmRmOmxpPgogICAgICAgICAgICAgICA8cmRmOmxpPnV1aWQ6OUFFMjFCNkI0Rjg1REUxMTlGRTVEMzk4RjIxQTQ0MTM8L3JkZjpsaT4KICAgICAgICAgICAgICAgPHJkZjpsaT51dWlkOjlDRDcwOEYxNjQxNURFMTFBQkY5QkNBMjYzQTBGMTQ5PC9yZGY6bGk%CiAgICAgICAgICAgICAgIDxyZGY6bGk%dXVpZDo5YTY0Yjk2Zi0wMjFkLTQ4MzItOWRkMC02ODE2NGRhZTVlYTk8L3JkZjpsaT4KICAgICAgICAgICAgICAgPHJkZjpsaT51dWlkOkEyMzVGRkE0MzYzM0REMTFCODREQjE1M0ZGQ0IyQjI1PC9yZGY6bGk%CiAgICAgICAgICAgICAgIDxyZGY6bGk%dXVpZDpBMkRBRUQ0NDQ0RjJEQjExQkZDOTkzNTc5ODZBMDIyMTwvcmRmOmxpPgogICAgICAgICAgICAgICA8cmRmOmxpPnV1aWQ6QTMyMzNENzYzOUEwREQxMThDNEVCMUQ3NkYyMEQ2MUY8L3JkZjpsaT4KICAgICAgICAgICAgICAgPHJkZjpsaT51dWlkOkE1MkIyQkUyRDUwNERFMTE4NTMyQTc1MzYyOEU5NTg3PC9yZGY6bGk%CiAgICAgICAgICAgICAgIDxyZGY6bGk%dXVpZDpBOTMyMUY0MTMyRjVERDExOUUyMTg0NjdCNDJGNTIyNDwvcmRmOmxpPgogICAgICAgICAgICAgICA8cmRmOmxpPnV1aWQ6QTk1RDk4MTJBNUIwREMxMTk0MDU4RkJDRUI5NjQ4RTQ8L3JkZjpsaT4KICAgICAgICAgICAgICAgPHJkZjpsaT51dWlkOkFCMkI2RkE1MTk1QUUwMTFBNUE1ODMyNTU2NUYwMDFDPC9yZGY6bGk%CiAgICAgICAgICAgICAgIDxyZGY6bGk%dXVpZDpBQzY5RTEwMTFEMTVERjExODc5QUI2N0RDQjM5RDlGQTwvcmRmOmxpPgogICAgICAgICAgICAgICA8cmRmOmxpPnV1aWQ6QUNDNUY1NTMyQ0NERTAxMTk5N0ZFNDA1N0RCMjEzQTI8L3JkZjpsaT4KICAgICAgICAgICAgICAgPHJkZjpsaT51dWlkOkFGRkVCMjUzQUZGRURFMTFBNTkyODYyQzBCQzNEOTU5PC9yZGY6bGk%CiAgICAgICAgICAgICAgIDxyZGY6bGk%dXVpZDpCMTE4RkQ5QzM0NDZERTExOEUwNUUwMEE5MjREOENDNTwvcmRmOmxpPgogICAgICAgICAgICAgICA8cmRmOmxpPnV1aWQ6QjQ4Q0MzNzRGNkUyREMxMTkzRDZFNTkzRjcwNEVGOTQ8L3JkZjpsaT4KICAgICAgICAgICAgICAgPHJkZjpsaT51dWlkOkI2NUE4NUUwMUVFMkREMTFBMkRGODU5N0VFNEFDOUY1PC9yZGY6bGk%CiAgICAgICAgICAgICAgIDxyZGY6bGk%dXVpZDpCNzZDRjMxMzIzNEVERTExOTBBNzg5NkQzNTc5NDBFQjwvcmRmOmxpPgogICAgICAgICAgICAgICA8cmRmOmxpPnV1aWQ6Qjg5OEI5MEI5RjM0REYxMUIwNUFENjRGQkUwOTFDQjg8L3JkZjpsaT4KICAgICAgICAgICAgICAgPHJkZjpsaT51dWlkOkJCOTc3Nzk2Q0E4NkRFMTFCN0Y1RTJGM0M3QjI2OEFDPC9yZGY6bGk%CiAgICAgICAgICAgICAgIDxyZGY6bGk%dXVpZDpCQjlGREEzQkFBODVEQzExODUyMjg4RjI3RTc3NjZGMDwvcmRmOmxpPgogICAgICAgICAgICAgICA8cmRmOmxpPnV1aWQ6QkQyMzc1QUQ2OUFDREMxMUIyQUFBOTE0NTAzMDM3RTE8L3JkZjpsaT4KICAgICAgICAgICAgICAgPHJkZjpsaT51dWlkOkJEOTg0NzM1MzU0NkRFMTE4RTA1RTAwQTkyNEQ4Q0M1PC9yZGY6bGk%CiAgICAgICAgICAgICAgIDxyZGY6bGk%dXVpZDpCREU3RDNBREE0NEFERDExQjk0MjgyNkI5MUI0NkQzMTwvcmRmOmxpPgogICAgICAgICAgICAgICA8cmRmOmxpPnV1aWQ6QkU1NTY2NTMyQ0Q1MTFEQUE3Qzc4NDVDRTE4ODJBNDU8L3JkZjpsaT4KICAgICAgICAgICAgICAgPHJkZjpsaT51dWlkOkM5NUY4RTkzRTFFQ0REMTFBRDgxQTFBQjg0RDQwNUI0PC9yZGY6bGk%CiAgICAgICAgICAgICAgIDxyZGY6bGk%dXVpZDpDOUI2RjJFN0U0NEVERjExQkFGREFDN0NEQzM3MzQyMTwvcmRmOmxpPgogICAgICAgICAgICAgICA8cmRmOmxpPnV1aWQ6Q0E0RTAzNEU3RTFBREYxMUJBQkNENzQ0NzJDRUUwQUU8L3JkZjpsaT4KICAgICAgICAgICAgICAgPHJkZjpsaT51dWlkOkNBQzNEQjUzRDNFMURGMTFCNjJFQ0I4QjA3MUYxNkUxPC9yZGY6bGk%CiAgICAgICAgICAgICAgIDxyZGY6bGk%dXVpZDpDQUNFMEQ0NUE0MUFERTExODYzOUI4NTU3Mjc2OEJEQTwvcmRmOmxpPgogICAgICAgICAgICAgICA8cmRmOmxpPnV1aWQ6Q0FEQjc4RkIwODlCREYxMTgzRTZEQzRBQzAxMkVFOTE8L3JkZjpsaT4KICAgICAgICAgICAgICAgPHJkZjpsaT51dWlkOkNCMENEOEY1ODE0MkUwMTE4RDU4QjIxNkIzOTNDRURBPC9yZGY6bGk%CiAgICAgICAgICAgICAgIDxyZGY6bGk%dXVpZDpDRjVGNEMwMkI0QjNERjExQkVFOUQyM0E3MzgyODIzMjwvcmRmOmxpPgogICAgICAgICAgICAgICA8cmRmOmxpPnV1aWQ6Q0Y4RTA2NDQyNzQ2REUxMThFMDVFMDBBOTI0RDhDQzU8L3JkZjpsaT4KICAgICAgICAgICAgICAgPHJkZjpsaT51dWlkOkNGRkJDOTA1MjNCNURGMTE4REZGQUFBN0UyQkQ2N0FDPC9yZGY6bGk%CiAgICAgICAgICAgICAgIDxyZGY6bGk%dXVpZDpENjIzRTJGQ0NCNDRERjExQTY1OTk5MDQ0Njc3OTY0MjwvcmRmOmxpPgogICAgICAgICAgICAgICA8cmRmOmxpPnV1aWQ6RDY1QkNGMDRFQkEzREYxMUFFQzhFQ0M0QjRERDRGMjY8L3JkZjpsaT4KICAgICAgICAgICAgICAgPHJkZjpsaT51dWlkOkQ4OUU5QzE1MkYyN0UxMTFBM0JCQkQxQjQ4NTZFRTg4PC9yZGY6bGk%CiAgICAgICAgICAgICAgIDxyZGY6bGk%dXVpZDpEQTkxNTZBQzY0Q0RFMDExOTk4Q0UzQzA2NkE5RENFRTwvcmRmOmxpPgogICAgICAgICAgICAgICA8cmRmOmxpPnV1aWQ6REFDQjQyQUMwRDU3REYxMTlFNjE4M0E5MjFCNjBGNkQ8L3JkZjpsaT4KICAgICAgICAgICAgICAgPHJkZjpsaT51dWlkOkRDNEY1ODgyQjBFOUUwMTFCMzI2OUFCMUMwMzU2RUI0PC9yZGY6bGk%CiAgICAgICAgICAgICAgIDxyZGY6bGk%dXVpZDpEREIwNjcxMzA2REVERTExODYxN0U5OEU1ODBBMTRFNTwvcmRmOmxpPgogICAgICAgICAgICAgICA8cmRmOmxpPnV1aWQ6RERFRDFFRjg1NzYzREYxMTk3MzNBNDdFNTQxN0E3N0Q8L3JkZjpsaT4KICAgICAgICAgICAgICAgPHJkZjpsaT51dWlkOkUwNkRERUU0M0FCNkRCMTFCQjY5RTYzNTYwQkIzMjJBPC9yZGY6bGk%CiAgICAgICAgICAgICAgIDxyZGY6bGk%dXVpZDpFMDc3NTgxNjM1NDZERTExOEUwNUUwMEE5MjREOENDNTwvcmRmOmxpPgogICAgICAgICAgICAgICA8cmRmOmxpPnV1aWQ6RTE4MDZGRjIxOEMzREUxMUI4RURFNURCNjIzMDAxOTg8L3JkZjpsaT4KICAgICAgICAgICAgICAgPHJkZjpsaT51dWlkOkUxRUZBODg5QjlCMkRFMTE5QURBRkZCRUQ2NDFEMDA3PC9yZGY6bGk%CiAgICAgICAgICAgICAgIDxyZGY6bGk%dXVpZDpFMzdGRTQ3NzY2NTFERTExQjBGRjkwNEFCRDdFOUM3ODwvcmRmOmxpPgogICAgICAgICAgICAgICA8cmRmOmxpPnV1aWQ6RTQ4N0VGNkMxQTE1REYxMTg3OUFCNjdEQ0IzOUQ5RkE8L3JkZjpsaT4KICAgICAgICAgICAgICAgPHJkZjpsaT51dWlkOkU2ODc4NUM1MjU0NkRFMTE4RTA1RTAwQTkyNEQ4Q0M1PC9yZGY6bGk%CiAgICAgICAgICAgICAgIDxyZGY6bGk%dXVpZDpFNzI2QUI2N0ExRDdERTExQTFBRThBMzg4QkYxMUZEQjwvcmRmOmxpPgogICAgICAgICAgICAgICA8cmRmOmxpPnV1aWQ6RUI2OUIxODg4NjA2REUxMUIzODBDOURGRkY1RURCNkI8L3JkZjpsaT4KICAgICAgICAgICAgICAgPHJkZjpsaT51dWlkOkVFOEU0QUM1NzRDREUwMTE5OThDRTNDMDY2QTlEQ0VFPC9yZGY6bGk%CiAgICAgICAgICAgICAgIDxyZGY6bGk%dXVpZDpFRUY3RjE2RkVGODlERTExQjFDNEQ2NUVGNDM2ODhBMzwvcmRmOmxpPgogICAgICAgICAgICAgICA8cmRmOmxpPnV1aWQ6RUZFODVGMTgwRTBERTAxMUFGN0U4QUJEMzlCOTk4NTk8L3JkZjpsaT4KICAgICAgICAgICAgICAgPHJkZjpsaT51dWlkOkYyNUI4RjkyMUM0NkRFMTE4RTA1RTAwQTkyNEQ4Q0M1PC9yZGY6bGk%CiAgICAgICAgICAgICAgIDxyZGY6bGk%dXVpZDpGMjlCOTg5Q0Y2QjhERTExODg5Q0MyMzAxMDkwNTE4NzwvcmRmOmxpPgogICAgICAgICAgICAgICA8cmRmOmxpPnV1aWQ6RjNFM0U0MDhDMzQ1REYxMUEwMjBDMzI5Q0JBNzk2N0Y8L3JkZjpsaT4KICAgICAgICAgICAgICAgPHJkZjpsaT51dWlkOkY0NDE0QTAzODg0MkRGMTE5REUyQkFGOERGQjczOUM4PC9yZGY6bGk%CiAgICAgICAgICAgICAgIDxyZGY6bGk%dXVpZDpGNkQzQTdEMDk5NTVERDExOUExMzg0QjU5Mzg0NjU3NjwvcmRmOmxpPgogICAgICAgICAgICAgICA8cmRmOmxpPnV1aWQ6RjcwOTJGREU1NjRBREUxMTkyQTFGQTA5RjlFMTRFRUI8L3JkZjpsaT4KICAgICAgICAgICAgICAgPHJkZjpsaT51dWlkOkY4Njk1MjFENTFFMkREMTFBMkRGODU5N0VFNEFDOUY1PC9yZGY6bGk%CiAgICAgICAgICAgICAgIDxyZGY6bGk%dXVpZDpGOTc0ODZDMUUyNEZERjExODNDNzk5NjcxMEQwOTlEQzwvcmRmOmxpPgogICAgICAgICAgICAgICA8cmRmOmxpPnV1aWQ6RkE0OTIxNTAzMTVGRTAxMUFBN0M4QkMxOUYxMEExMEI8L3JkZjpsaT4KICAgICAgICAgICAgICAgPHJkZjpsaT51dWlkOkZDNjI4NDM5NUNERkRFMTFCMzY2RDlFRjc0REU0QjNFPC9yZGY6bGk%CiAgICAgICAgICAgICAgIDxyZGY6bGk%dXVpZDpGQ0IxNzkwMzU0MEFERTExOEUyMThBQjc4QUFFOEM5NjwvcmRmOmxpPgogICAgICAgICAgICAgICA8cmRmOmxpPnV1aWQ6RkNCNEU4MzM0OTA4REYxMUE2MURCMjI3RURERjU5Rjg8L3JkZjpsaT4KICAgICAgICAgICAgICAgPHJkZjpsaT51dWlkOkZFRDc3NjhBMkE0NkRFMTE4RTA1RTAwQTkyNEQ4Q0M1PC9yZGY6bGk%CiAgICAgICAgICAgICAgIDxyZGY6bGk%dXVpZDpmYWY1YmRkNS1iYTNkLTExZGEtYWQzMS1kMzNkNzUxODJmMWI8L3JkZjpsaT4KICAgICAgICAgICAgICAgPHJkZjpsaT54bXAuZGlkOjAwNTRFOUM2REY3MUUxMTFBQzRFOEY0MDhGNjREOEIzPC9yZGY6bGk%CiAgICAgICAgICAgICAgIDxyZGY6bGk%eG1wLmRpZDowMDgwMTE3NDA3MjA2ODExODdFNkQzRjFGRUVFN0U2MTwvcmRmOmxpPgogICAgICAgICAgICAgICA8cmRmOmxpPnhtcC5kaWQ6MDA4MDExNzQwNzIwNjgxMThBNkRFNzUwMjAyOTk0MjM8L3JkZjpsaT4KICAgICAgICAgICAgICAgPHJkZjpsaT54bXAuZGlkOjAwODAxMTc0MDcyMDY4MTFBQzc1OTc5QTMyMzI1QTY5PC9yZGY6bGk%CiAgICAgICAgICAgICAgIDxyZGY6bGk%eG1wLmRpZDowMEMwNTU4OTJFMjM2ODExOTk0Q0YyNjZBRTg0MEQ3MTwvcmRmOmxpPgogICAgICAgICAgICAgICA8cmRmOmxpPnhtcC5kaWQ6MDE4MDExNzQwNzIwNjgxMTg2MThENUI0MEQzNzM4OUI8L3JkZjpsaT4KICAgICAgICAgICAgICAgPHJkZjpsaT54bXAuZGlkOjAxODAxMTc0MDcyMDY4MTE4NzFGODk0RUI1QjMyMjNCPC9yZGY6bGk%CiAgICAgICAgICAgICAgIDxyZGY6bGk%eG1wLmRpZDowMTgwMTE3NDA3MjA2ODExODcxRjhFQTNGMkEyQUUxRDwvcmRmOmxpPgogICAgICAgICAgICAgICA8cmRmOmxpPnhtcC5kaWQ6MDE4MDExNzQwNzIwNjgxMTg3MUZBQjJDNEUwNjNGNTY8L3JkZjpsaT4KICAgICAgICAgICAgICAgPHJkZjpsaT54bXAuZGlkOjAxODAxMTc0MDcyMDY4MTE4NzFGQjNDNjJCMEMyNTU0PC9yZGY6bGk%CiAgICAgICAgICAgICAgIDxyZGY6bGk%eG1wLmRpZDowMTgwMTE3NDA3MjA2ODExODcxRkU4MjhFMTIyRjQ3MjwvcmRmOmxpPgogICAgICAgICAgICAgICA8cmRmOmxpPnhtcC5kaWQ6MDE4MDExNzQwNzIwNjgxMTg3MUZFOEREMjM0MEMwQjA8L3JkZjpsaT4KICAgICAgICAgICAgICAgPHJkZjpsaT54bXAuZGlkOjAxODAxMTc0MDcyMDY4MTE4NzFGRUVCNTZEMUU3NDNCPC9yZGY6bGk%CiAgICAgICAgICAgICAgIDxyZGY6bGk%eG1wLmRpZDowMTgwMTE3NDA3MjA2ODExODhDNjg0RUFGNkVCM0VFRDwvcmRmOmxpPgogICAgICAgICAgICAgICA8cmRmOmxpPnhtcC5kaWQ6MDE4MDExNzQwNzIwNjgxMTg4QzY4NjMzNDg1NDEyNzU8L3JkZjpsaT4KICAgICAgICAgICAgICAgPHJkZjpsaT54bXAuZGlkOjAxODAxMTc0MDcyMDY4MTE4OEM2QURDOUVFQzEyODY3PC9yZGY6bGk%CiAgICAgICAgICAgICAgIDxyZGY6bGk%eG1wLmRpZDowMTgwMTE3NDA3MjA2ODExODhDNkM2MTI4MzdCMDI0NzwvcmRmOmxpPgogICAgICAgICAgICAgICA8cmRmOmxpPnhtcC5kaWQ6MDE4MDExNzQwNzIwNjgxMTg4QzZDOEZCNjRFMzA3N0Y8L3JkZjpsaT4KICAgICAgICAgICAgICAgPHJkZjpsaT54bXAuZGlkOjAxODAxMTc0MDcyMDY4MTE4OEM2RDM2QjhGRUYwODY3PC9yZGY6bGk%CiAgICAgICAgICAgICAgIDxyZGY6bGk%eG1wLmRpZDowMTgwMTE3NDA3MjA2ODExODhDNkRFQjZBNzM4MEUwMjwvcmRmOmxpPgogICAgICAgICAgICAgICA8cmRmOmxpPnhtcC5kaWQ6MDE4MDExNzQwNzIwNjgxMTg4QzZFNEQ2QzhEOTE4MDk8L3JkZjpsaT4KICAgICAgICAgICAgICAgPHJkZjpsaT54bXAuZGlkOjAxODAxMTc0MDcyMDY4MTE4OEM2RkQ4OEUzNzk3Mzc4PC9yZGY6bGk%CiAgICAgICAgICAgICAgIDxyZGY6bGk%eG1wLmRpZDowMTgwMTE3NDA3MjA2ODExOEE2RERCQTZCNDgzOUMzMzwvcmRmOmxpPgogICAgICAgICAgICAgICA8cmRmOmxpPnhtcC5kaWQ6MDE4MDExNzQwNzIwNjgxMThENDdGODcwMDVBMUZCMDU8L3JkZjpsaT4KICAgICAgICAgICAgICAgPHJkZjpsaT54bXAuZGlkOjAxODAxMTc0MDcyMDY4MTE4REJCQzE0RjBERDIxNjhEPC9yZGY6bGk%CiAgICAgICAgICAgICAgIDxyZGY6bGk%eG1wLmRpZDowMTgwMTE3NDA3MjA2ODExOEY0REQ3QjQ5ODYwMjFGMzwvcmRmOmxpPgogICAgICAgICAgICAgICA8cmRmOmxpPnhtcC5kaWQ6MDE4MDExNzQwNzIwNjgxMThGNjJCQkY4OTk4MTg3RDY8L3JkZjpsaT4KICAgICAgICAgICAgICAgPHJkZjpsaT54bXAuZGlkOjAxODAxMTc0MDcyMDY4MTE4RjYyQkVEMzMxQTRCOTQ2PC9yZGY6bGk%CiAgICAgICAgICAgICAgIDxyZGY6bGk%eG1wLmRpZDowMTgwMTE3NDA3MjA2ODExOEY2MkVCMkFERTQ2RDI3MzwvcmRmOmxpPgogICAgICAgICAgICAgICA8cmRmOmxpPnhtcC5kaWQ6MDE4MDExNzQwNzIwNjgxMThGODE5NTA0OEZCNjMxRTg8L3JkZjpsaT4KICAgICAgICAgICAgICAgPHJkZjpsaT54bXAuZGlkOjAxODAxMTc0MDcyMDY4MTE5MDJBRDNGQjc4RUZEREY5PC9yZGY6bGk%CiAgICAgICAgICAgICAgIDxyZGY6bGk%eG1wLmRpZDowMTgwMTE3NDA3MjA2ODExOTEwOUQ4QUFEQ0MzM0FFMjwvcmRmOmxpPgogICAgICAgICAgICAgICA8cmRmOmxpPnhtcC5kaWQ6MDE4MDExNzQwNzIwNjgxMTkxMDlFRDIwOEJDMTA3RkY8L3JkZjpsaT4KICAgICAgICAgICAgICAgPHJkZjpsaT54bXAuZGlkOjAxODAxMTc0MDcyMDY4MTE5MTA5RjMwNTY0NkVCNTdEPC9yZGY6bGk%CiAgICAgICAgICAgICAgIDxyZGY6bGk%eG1wLmRpZDowMTgwMTE3NDA3MjA2ODExOTEwOUY1NDE1ODZBMDIwRDwvcmRmOmxpPgogICAgICAgICAgICAgICA8cmRmOmxpPnhtcC5kaWQ6MDE4MDExNzQwNzIwNjgxMTkxMDlGQTI5N0E3QTU5MDQ8L3JkZjpsaT4KICAgICAgICAgICAgICAgPHJkZjpsaT54bXAuZGlkOjAxODAxMTc0MDcyMDY4MTE5MkIwOEFFMjZCRDgyN0Y3PC9yZGY6bGk%CiAgICAgICAgICAgICAgIDxyZGY6bGk%eG1wLmRpZDowMTgwMTE3NDA3MjA2ODExOTJCMDlDNDAzQ0ZGM0EzQjwvcmRmOmxpPgogICAgICAgICAgICAgICA8cmRmOmxpPnhtcC5kaWQ6MDE4MDExNzQwNzIwNjgxMTkyQjBCQUE5MDRERTBGOEQ8L3JkZjpsaT4KICAgICAgICAgICAgICAgPHJkZjpsaT54bXAuZGlkOjAxODAxMTc0MDcyMDY4MTE5MkIwQzZERDZFRTkzMDNCPC9yZGY6bGk%CiAgICAgICAgICAgICAgIDxyZGY6bGk%eG1wLmRpZDowMTgwMTE3NDA3MjA2ODExOTJCMEQ5M0E3RTFBMDEyRDwvcmRmOmxpPgogICAgICAgICAgICAgICA8cmRmOmxpPnhtcC5kaWQ6MDE4MDExNzQwNzIwNjgxMTkyQjBFOEE2MEFBQTcyOTY8L3JkZjpsaT4KICAgICAgICAgICAgICAgPHJkZjpsaT54bXAuZGlkOjAxODAxMTc0MDcyMDY4MTE5MkQ4RTdBNjQxMDkzMTdGPC9yZGY6bGk%CiAgICAgICAgICAgICAgIDxyZGY6bGk%eG1wLmRpZDowMTgwMTE3NDA3MjA2ODExOTdBNUQ2NzVGNzJCMUQ5MzwvcmRmOmxpPgogICAgICAgICAgICAgICA8cmRmOmxpPnhtcC5kaWQ6MDE4MDExNzQwNzIwNjgxMTk3QTVEQUYyNTgzQTBBNEI8L3JkZjpsaT4KICAgICAgICAgICAgICAgPHJkZjpsaT54bXAuZGlkOjAxODAxMTc0MDcyMDY4MTE5N0E1RUNDQTA4ODVBNTFEPC9yZGY6bGk%CiAgICAgICAgICAgICAgIDxyZGY6bGk%eG1wLmRpZDowMTgwMTE3NDA3MjA2ODExOTk0QzlBNjMwNjZBMjgwMjwvcmRmOmxpPgogICAgICAgICAgICAgICA8cmRmOmxpPnhtcC5kaWQ6MDE4MDExNzQwNzIwNjgxMTk5NENCRkVCM0UxOEZGMUQ8L3JkZjpsaT4KICAgICAgICAgICAgICAgPHJkZjpsaT54bXAuZGlkOjAxODAxMTc0MDcyMDY4MTE5QkVGOEE2MEE1NkRBREI2PC9yZGY6bGk%CiAgICAgICAgICAgICAgIDxyZGY6bGk%eG1wLmRpZDowMTgwMTE3NDA3MjA2ODExOURDQ0Q3MTdDNERDOTdDMTwvcmRmOmxpPgogICAgICAgICAgICAgICA8cmRmOmxpPnhtcC5kaWQ6MDE4MDExNzQwNzIwNjgxMUE0RTE4REFFM0Q4NTM0MTI8L3JkZjpsaT4KICAgICAgICAgICAgICAgPHJkZjpsaT54bXAuZGlkOjAxODAxMTc0MDcyMDY4MTFBQjA4ODhFQzlEOEI4NUE2PC9yZGY6bGk%CiAgICAgICAgICAgICAgIDxyZGY6bGk%eG1wLmRpZDowMTgwMTE3NDA3MjA2ODExQUIwODkxQjc5MTIyQjIyRDwvcmRmOmxpPgogICAgICAgICAgICAgICA8cmRmOmxpPnhtcC5kaWQ6MDE4MDExNzQwNzIwNjgxMUFCMDhFOEU4RUUzRjAyODk8L3JkZjpsaT4KICAgICAgICAgICAgICAgPHJkZjpsaT54bXAuZGlkOjAxODAxMTc0MDcyMDY4MTFBRkZEODRCNEE2RTNFNUM3PC9yZGY6bGk%CiAgICAgICAgICAgICAgIDxyZGY6bGk%eG1wLmRpZDowMTgwMTE3NDA3MjA2ODExQjE4RENGNzVGQzc3MTg0NDwvcmRmOmxpPgogICAgICAgICAgICAgICA8cmRmOmxpPnhtcC5kaWQ6MDE4MDExNzQwNzIwNjgxMUIxQTQ4MTE3M0YzQjIwOTE8L3JkZjpsaT4KICAgICAgICAgICAgICAgPHJkZjpsaT54bXAuZGlkOjAxODAxMTc0MDcyMDY4MTFCQTA2REUyRDIzOTAwQTFGPC9yZGY6bGk%CiAgICAgICAgICAgICAgIDxyZGY6bGk%eG1wLmRpZDowMTgwMTE3NDA3MjA2ODExQkMxNjkxN0NDQjI3Rjk3NjwvcmRmOmxpPgogICAgICAgICAgICAgICA8cmRmOmxpPnhtcC5kaWQ6MDE4MDExNzQwNzIwNjgxMUJFODdCODRGMjVBNUQ1MTc8L3JkZjpsaT4KICAgICAgICAgICAgICAgPHJkZjpsaT54bXAuZGlkOjAxQzY2OENCMkMzQTExRTBCMjRCRjcyRjE2NzE5QTE0PC9yZGY6bGk%CiAgICAgICAgICAgICAgIDxyZGY6bGk%eG1wLmRpZDowMUQzQkMwQTAzOThERjExOEUwREZCQ0MzOUYxRDcwQzwvcmRmOmxpPgogICAgICAgICAgICAgICA8cmRmOmxpPnhtcC5kaWQ6MDFFREEzNDAzNkVFREUxMUE4REU4RTlCMjRCMTJEQUY8L3JkZjpsaT4KICAgICAgICAgICAgICAgPHJkZjpsaT54bXAuZGlkOjAyNEY3MzNDNENEOURGMTE4MTg1OTE1NkREQjUyN0I3PC9yZGY6bGk%CiAgICAgICAgICAgICAgIDxyZGY6bGk%eG1wLmRpZDowMjY0OTI0NjE1MjE2ODExOEE2REM4NDI5OTk0REI4MDwvcmRmOmxpPgogICAgICAgICAgICAgICA8cmRmOmxpPnhtcC5kaWQ6MDI4MDExNzQwNzIwNjgxMTgwODNERkRGMzY2NDQ0ODM8L3JkZjpsaT4KICAgICAgICAgICAgICAgPHJkZjpsaT54bXAuZGlkOjAyODAxMTc0MDcyMDY4MTE4OEM2ODM5N0ZERUEzMzY0PC9yZGY6bGk%CiAgICAgICAgICAgICAgIDxyZGY6bGk%eG1wLmRpZDowMjgwMTE3NDA3MjA2ODExODhDNkM5NTg0QTBDRTRENjwvcmRmOmxpPgogICAgICAgICAgICAgICA8cmRmOmxpPnhtcC5kaWQ6MDI4MDExNzQwNzIwNjgxMThBNkQ5QTFFODIxOTA3ODY8L3JkZjpsaT4KICAgICAgICAgICAgICAgPHJkZjpsaT54bXAuZGlkOjAyODAxMTc0MDcyMDY4MTE4RjNCQTZCMDFFRkMzRjM2PC9yZGY6bGk%CiAgICAgICAgICAgICAgIDxyZGY6bGk%eG1wLmRpZDowMjgwMTE3NDA3MjA2ODExOEY0REQ3QjQ5ODYwMjFGMzwvcmRmOmxpPgogICAgICAgICAgICAgICA8cmRmOmxpPnhtcC5kaWQ6MDI4MDExNzQwNzIwNjgxMThGNjJBMkY2QzUxMTIxRjc8L3JkZjpsaT4KICAgICAgICAgICAgICAgPHJkZjpsaT54bXAuZGlkOjAyODAxMTc0MDcyMDY4MTE5MTA5QzY1QTcwNDAxMzQwPC9yZGY6bGk%CiAgICAgICAgICAgICAgIDxyZGY6bGk%eG1wLmRpZDowMjgwMTE3NDA3MjA2ODExOTEwOUM5NEJFM0ZCNjM5NTwvcmRmOmxpPgogICAgICAgICAgICAgICA8cmRmOmxpPnhtcC5kaWQ6MDI4MDExNzQwNzIwNjgxMTk3QTU5NzgwRUU1Q0ZDNDQ8L3JkZjpsaT4KICAgICAgICAgICAgICAgPHJkZjpsaT54bXAuZGlkOjAyODAxMTc0MDcyMDY4MTE5OUQzRUNGQ0FGMTM2MUFEPC9yZGY6bGk%CiAgICAgICAgICAgICAgIDxyZGY6bGk%eG1wLmRpZDowMjgwMTE3NDA3MjA2ODExOUUxRDg1NDY2NjYyQzlBQzwvcmRmOmxpPgogICAgICAgICAgICAgICA8cmRmOmxpPnhtcC5kaWQ6MDI4MDExNzQwNzIwNjgxMUE3QkE4MzcxMzA0RTcyNkY8L3JkZjpsaT4KICAgICAgICAgICAgICAgPHJkZjpsaT54bXAuZGlkOjAyODAxMTc0MDcyMDY4MTFBQzk4OEUxMENDMENDN0U3PC9yZGY6bGk%CiAgICAgICAgICAgICAgIDxyZGY6bGk%eG1wLmRpZDowMjgwMTE3NDA3MjA2ODExQjg0MEMxNDM3ODg4NTAyRTwvcmRmOmxpPgogICAgICAgICAgICAgICA8cmRmOmxpPnhtcC5kaWQ6MDMyRjQ2ODM5MDIxNjgxMTg3MUZFNDA1NTM3QTI4Mjg8L3JkZjpsaT4KICAgICAgICAgICAgICAgPHJkZjpsaT54bXAuZGlkOjAzODAxMTc0MDcyMDY4MTE4NzFGRkFDNjNDODE4NjQwPC9yZGY6bGk%CiAgICAgICAgICAgICAgIDxyZGY6bGk%eG1wLmRpZDowMzgwMTE3NDA3MjA2ODExODhDNjgyMzMyOUM4MkI5MTwvcmRmOmxpPgogICAgICAgICAgICAgICA8cmRmOmxpPnhtcC5kaWQ6MDM4MDExNzQwNzIwNjgxMTg4QzZCRjZGNUI3OUM2N0E8L3JkZjpsaT4KICAgICAgICAgICAgICAgPHJkZjpsaT54bXAuZGlkOjAzODAxMTc0MDcyMDY4MTE4QzE0QTQ5RDAyQUM5NzU1PC9yZGY6bGk%CiAgICAgICAgICAgICAgIDxyZGY6bGk%eG1wLmRpZDowMzgwMTE3NDA3MjA2ODExOEZFREY4NzQ3M0ZGMzZBMDwvcmRmOmxpPgogICAgICAgICAgICAgICA8cmRmOmxpPnhtcC5kaWQ6MDM4MDExNzQwNzIwNjgxMTkzNDZGMjc0QzA1OEQ1NUM8L3JkZjpsaT4KICAgICAgICAgICAgICAgPHJkZjpsaT54bXAuZGlkOjAzODAxMTc0MDcyMDY4MTFCMUE0REVFNjQ0MTMwODNEPC9yZGY6bGk%CiAgICAgICAgICAgICAgIDxyZGY6bGk%eG1wLmRpZDowMzgwMTE3NDA3MjA2ODExQkMxNjkxN0NDQjI3Rjk3NjwvcmRmOmxpPgogICAgICAgICAgICAgICA8cmRmOmxpPnhtcC5kaWQ6MDM4MDExNzQwNzIwNjgxMUJEMjA5QzNGNDQzN0IxMTY8L3JkZjpsaT4KICAgICAgICAgICAgICAgPHJkZjpsaT54bXAuZGlkOjAzRkQ1RjBBQzZGMERFMTE5QjZCOURBODdGMzEzRTk2PC9yZGY6bGk%CiAgICAgICAgICAgICAgIDxyZGY6bGk%eG1wLmRpZDowNDgwMTE3NDA3MjA2ODExODcxRkYwRUU2QUQ1NzkwQjwvcmRmOmxpPgogICAgICAgICAgICAgICA8cmRmOmxpPnhtcC5kaWQ6MDQ4MDExNzQwNzIwNjgxMThGNjJEMjVFRjlBRDZDMkY8L3JkZjpsaT4KICAgICAgICAgICAgICAgPHJkZjpsaT54bXAuZGlkOjA0ODAxMTc0MDcyMDY4MTE4RjYyREIzRjI2ODYyQTY4PC9yZGY6bGk%CiAgICAgICAgICAgICAgIDxyZGY6bGk%eG1wLmRpZDowNDgwMTE3NDA3MjA2ODExOEY2MkVFNEE1NzU3QkM2RDwvcmRmOmxpPgogICAgICAgICAgICAgICA8cmRmOmxpPnhtcC5kaWQ6MDQ4MDExNzQwNzIwNjgxMThGNjJFRUY4QkJBQjI5RDE8L3JkZjpsaT4KICAgICAgICAgICAgICAgPHJkZjpsaT54bXAuZGlkOjA0ODAxMTc0MDcyMDY4MTE4RkZCRjg1M0NGMjc0RTkzPC9yZGY6bGk%CiAgICAgICAgICAgICAgIDxyZGY6bGk%eG1wLmRpZDowNDgwMTE3NDA3MjA2ODExOTEwOTk5RTE3MkFDRUY0MTwvcmRmOmxpPgogICAgICAgICAgICAgICA8cmRmOmxpPnhtcC5kaWQ6MDQ4MDExNzQwNzIwNjgxMTk1RkVENUU5RDMxNzI5MUU8L3JkZjpsaT4KICAgICAgICAgICAgICAgPHJkZjpsaT54bXAuZGlkOjA0ODAxMTc0MDcyMDY4MTE5N0MxQTVDQ0U3MUUyODA4PC9yZGY6bGk%CiAgICAgICAgICAgICAgIDxyZGY6bGk%eG1wLmRpZDowNDgwMTE3NDA3MjA2ODExQjYxODgzODA5NjhENERDMzwvcmRmOmxpPgogICAgICAgICAgICAgICA8cmRmOmxpPnhtcC5kaWQ6MDRERTcxMkZCODhBRTAxMTlGNERCMEFCRDYxQ0UzMjc8L3JkZjpsaT4KICAgICAgICAgICAgICAgPHJkZjpsaT54bXAuZGlkOjA1ODAxMTc0MDcyMDY4MTE4NzFGOTYxN0E3NTlENEU2PC9yZGY6bGk%CiAgICAgICAgICAgICAgIDxyZGY6bGk%eG1wLmRpZDowNTgwMTE3NDA3MjA2ODExOEMxNEE1NkM4MTVFRUJFMjwvcmRmOmxpPgogICAgICAgICAgICAgICA8cmRmOmxpPnhtcC5kaWQ6MDU4MDExNzQwNzIwNjgxMThGNjI5ODRDMTIxN0Q0NjY8L3JkZjpsaT4KICAgICAgICAgICAgICAgPHJkZjpsaT54bXAuZGlkOjA1ODAxMTc0MDcyMDY4MTE5MkIwOTQ3MEY3NUJBRThGPC9yZGY6bGk%CiAgICAgICAgICAgICAgIDxyZGY6bGk%eG1wLmRpZDowNTgwMTE3NDA3MjA2ODExOTJCMEIwM0QyQjc4Q0ZERDwvcmRmOmxpPgogICAgICAgICAgICAgICA8cmRmOmxpPnhtcC5kaWQ6MDU4MDExNzQwNzIwNjgxMTkyQjBFMzVBNTdCREQ5MDk8L3JkZjpsaT4KICAgICAgICAgICAgICAgPHJkZjpsaT54bXAuZGlkOjA1ODAxMTc0MDcyMDY4MTFBN0JBQURCNDI1MURDQUY1PC9yZGY6bGk%CiAgICAgICAgICAgICAgIDxyZGY6bGk%eG1wLmRpZDowNjgwMTE3NDA3MjA2ODExODhDNkUwRTYwQzYxQUFCQzwvcmRmOmxpPgogICAgICAgICAgICAgICA8cmRmOmxpPnhtcC5kaWQ6MDY4MDExNzQwNzIwNjgxMTkyQjA5NDcwRjc1QkFFOEY8L3JkZjpsaT4KICAgICAgICAgICAgICAgPHJkZjpsaT54bXAuZGlkOjA2ODAxMTc0MDcyMDY4MTE5MzFEQjNGQkU5QkM1NkYyPC9yZGY6bGk%CiAgICAgICAgICAgICAgIDxyZGY6bGk%eG1wLmRpZDowNjgwMTE3NDA3MjA2ODExOTdBNUQ2NzVGNzJCMUQ5MzwvcmRmOmxpPgogICAgICAgICAgICAgICA8cmRmOmxpPnhtcC5kaWQ6MDY4MDExNzQwNzIwNjgxMUIxQTQ4QUNDQzY2QkExRTA8L3JkZjpsaT4KICAgICAgICAgICAgICAgPHJkZjpsaT54bXAuZGlkOjA2OUU2MUIyQ0NCMjExREZBQzJEOTVFQjM4NjBGMDYxPC9yZGY6bGk%CiAgICAgICAgICAgICAgIDxyZGY6bGk%eG1wLmRpZDowNzgwMTE3NDA3MjA2ODExOEE2REQ3RTkwQjg1ODJBOTwvcmRmOmxpPgogICAgICAgICAgICAgICA8cmRmOmxpPnhtcC5kaWQ6MDc4MDExNzQwNzIwNjgxMThGNjJERDJBOTI4OTMwOTE8L3JkZjpsaT4KICAgICAgICAgICAgICAgPHJkZjpsaT54bXAuZGlkOjA3ODAxMTc0MDcyMDY4MTFBNzJDRjMzOUVFQTBDQ0FEPC9yZGY6bGk%CiAgICAgICAgICAgICAgIDxyZGY6bGk%eG1wLmRpZDowODM0MUNDMjA3MDhFMjExOTE3Q0Y2QTBGRTdEMTZGRjwvcmRmOmxpPgogICAgICAgICAgICAgICA8cmRmOmxpPnhtcC5kaWQ6MDg4MDExNzQwNzIwNjgxMTg4QzY5NzZBNUU0QUY0NDM8L3JkZjpsaT4KICAgICAgICAgICAgICAgPHJkZjpsaT54bXAuZGlkOjA4ODAxMTc0MDcyMDY4MTE5MkIwODBCREYwOUQ3M0Q0PC9yZGY6bGk%CiAgICAgICAgICAgICAgIDxyZGY6bGk%eG1wLmRpZDowODgwMTE3NDA3MjA2ODExOTk0QzkwQjIxMUYyQUQ4NzwvcmRmOmxpPgogICAgICAgICAgICAgICA8cmRmOmxpPnhtcC5kaWQ6MDg4MDExNzQwNzIwNjgxMTlENjE4MUJENTUzRUQ3RkQ8L3JkZjpsaT4KICAgICAgICAgICAgICAgPHJkZjpsaT54bXAuZGlkOjA4OEY2RkE1NzEyMDY4MTE4MDgzODM3NThFNkFCOTJCPC9yZGY6bGk%CiAgICAgICAgICAgICAgIDxyZGY6bGk%eG1wLmRpZDowOTgwMTE3NDA3MjA2ODExODU5RUUzMUZGOEREQkU4RDwvcmRmOmxpPgogICAgICAgICAgICAgICA8cmRmOmxpPnhtcC5kaWQ6MDk4MDExNzQwNzIwNjgxMTkxMDlCQ0M2MjgzMjEyMkU8L3JkZjpsaT4KICAgICAgICAgICAgICAgPHJkZjpsaT54bXAuZGlkOjA5REREN0Q0RDYyMDY4MTFCQjM3RDgxRUE5RTlGNDAyPC9yZGY6bGk%CiAgICAgICAgICAgICAgIDxyZGY6bGk%eG1wLmRpZDowQTE3QzdGQ0EyMjA2ODExODAzREU3N0Y5NUYzOThFMjwvcmRmOmxpPgogICAgICAgICAgICAgICA8cmRmOmxpPnhtcC5kaWQ6MEE4MDExNzQwNzIwNjgxMTg3MUY5NEM1QzRGQ0MwNEQ8L3JkZjpsaT4KICAgICAgICAgICAgICAgPHJkZjpsaT54bXAuZGlkOjBBODAxMTc0MDcyMDY4MTE4NzFGRjQ3REM5MURFMTFGPC9yZGY6bGk%CiAgICAgICAgICAgICAgIDxyZGY6bGk%eG1wLmRpZDowQzFFRDNGN0QwMTBFMzExOTJDRkVEOEZENjFERDIzNzwvcmRmOmxpPgogICAgICAgICAgICAgICA8cmRmOmxpPnhtcC5kaWQ6MEM1OEJBOUZEM0VEREYxMUJEM0NBRjQ3NkI2RjE0MUM8L3JkZjpsaT4KICAgICAgICAgICAgICAgPHJkZjpsaT54bXAuZGlkOjBEODQ3QkM5QTIxMUUzMTE5QkFDRkQ3OUYxMjYxQ0REPC9yZGY6bGk%CiAgICAgICAgICAgICAgIDxyZGY6bGk%eG1wLmRpZDowRTIzODNDQzI3MjA2ODExOTEwOTgyN0IxMTE4NzYyRjwvcmRmOmxpPgogICAgICAgICAgICAgICA8cmRmOmxpPnhtcC5kaWQ6MEU2Mzg0REZFRDg1RTAxMUEwQzI4NEI2Njc3OEQ2QTY8L3JkZjpsaT4KICAgICAgICAgICAgICAgPHJkZjpsaT54bXAuZGlkOjBGNzNENzU4MTYyMDY4MTFCQzE2OTE3Q0NCMjdGOTc2PC9yZGY6bGk%CiAgICAgICAgICAgICAgIDxyZGY6bGk%eG1wLmRpZDoxMDU0NEUxNzU0MjA2ODExOTEwOTg3MTAzMTEwQjU0RTwvcmRmOmxpPgogICAgICAgICAgICAgICA8cmRmOmxpPnhtcC5kaWQ6MTFBNzcyMTJEMzQ4RTAxMUI2QkFCNTVENjRGNTk2MkQ8L3JkZjpsaT4KICAgICAgICAgICAgICAgPHJkZjpsaT54bXAuZGlkOjEyRUE5RkQwNDQyMDY4MTE4RjYyOEMxNTYzQUUxNjdFPC9yZGY6bGk%CiAgICAgICAgICAgICAgIDxyZGY6bGk%eG1wLmRpZDoxMkVDREZDQzY5MThFMDExODMxN0E1MTI2QjE4NEM5QzwvcmRmOmxpPgogICAgICAgICAgICAgICA8cmRmOmxpPnhtcC5kaWQ6MTNGMzYzQzhCMDIwNjgxMTkyQjA5RDQ2NDRCNjI0OTQ8L3JkZjpsaT4KICAgICAgICAgICAgICAgPHJkZjpsaT54bXAuZGlkOjE0MzdDQjJFMzRFOURFMTE4RUM0Qjc2REZCRjMxRjRCPC9yZGY6bGk%CiAgICAgICAgICAgICAgIDxyZGY6bGk%eG1wLmRpZDoxNTg4QUJBNjRCN0VERjExOEJCM0ZEM0ZGRkU1MEZCQzwvcmRmOmxpPgogICAgICAgICAgICAgICA8cmRmOmxpPnhtcC5kaWQ6MTVGQUZGRjUyQjIwNjgxMTk0NTdENUM4MjQ0N0EwQ0Q8L3JkZjpsaT4KICAgICAgICAgICAgICAgPHJkZjpsaT54bXAuZGlkOjE2M0RGNDFCNzI5RjExREY4NThDQjc2MTkxMUJFRDVGPC9yZGY6bGk%CiAgICAgICAgICAgICAgIDxyZGY6bGk%eG1wLmRpZDoxNkVENjgyOTBENzgxMUUxQkQ2REU4OTZFMzFGODAwQzwvcmRmOmxpPgogICAgICAgICAgICAgICA8cmRmOmxpPnhtcC5kaWQ6MTgyREEyNzcxNDIwNjgxMTkxMDlFODZCMjM4NTIyRjU8L3JkZjpsaT4KICAgICAgICAgICAgICAgPHJkZjpsaT54bXAuZGlkOjE4NDA3RUE0OUY3NERGMTFCOUFERjUwMUIxRkVFQzVCPC9yZGY6bGk%CiAgICAgICAgICAgICAgIDxyZGY6bGk%eG1wLmRpZDoxOEE2QTVGQUI5MTNFMDExODBEQUNFQjFFNEIwODBGQzwvcmRmOmxpPgogICAgICAgICAgICAgICA8cmRmOmxpPnhtcC5kaWQ6MThGMTEwM0U1NEMzREYxMUFBRTQ5Q0Q4OEFBNjQ0QUI8L3JkZjpsaT4KICAgICAgICAgICAgICAgPHJkZjpsaT54bXAuZGlkOjFBOTQ1MzZBMzIzQTExRTBBN0I4RDc2QkVCRERGQkU0PC9yZGY6bGk%CiAgICAgICAgICAgICAgIDxyZGY6bGk%eG1wLmRpZDoxQUI3NzcyMjc2MjlFMDExOUFEMUI5NDVDMTk2NEJBRTwvcmRmOmxpPgogICAgICAgICAgICAgICA8cmRmOmxpPnhtcC5kaWQ6MUIxRUZGRUM2MzEzREYxMUE3MTlGMUFGNTI2NjEwODI8L3JkZjpsaT4KICAgICAgICAgICAgICAgPHJkZjpsaT54bXAuZGlkOjFENTFEQUE3MjIyMjY4MTE5MTA5RjgyOEQ4REFGNDM2PC9yZGY6bGk%CiAgICAgICAgICAgICAgIDxyZGY6bGk%eG1wLmRpZDoxRDZFNDM3M0FDNUZERjExQTY4RUQyNTFGRjIzRUMzNDwvcmRmOmxpPgogICAgICAgICAgICAgICA8cmRmOmxpPnhtcC5kaWQ6MUQ5RjBFM0I5NjIxNjgxMTkyQjBDMDFCRTZCMEQ1NTA8L3JkZjpsaT4KICAgICAgICAgICAgICAgPHJkZjpsaT54bXAuZGlkOjFFMjEzQjE4NEY5NTExRTE4RDFBRkQ5MzI2MjFDREYxPC9yZGY6bGk%CiAgICAgICAgICAgICAgIDxyZGY6bGk%eG1wLmRpZDoxRTlCNEVFNURBMTBFMzExOTJDRkVEOEZENjFERDIzNzwvcmRmOmxpPgogICAgICAgICAgICAgICA8cmRmOmxpPnhtcC5kaWQ6MjEzRDAxNTQ2RDg5MTFERkJERDU4NEREQzhDOTVCRjg8L3JkZjpsaT4KICAgICAgICAgICAgICAgPHJkZjpsaT54bXAuZGlkOjIxNkVBMkM5NzFEMURGMTFBOUE5QUFGOTJBNDEzOENFPC9yZGY6bGk%CiAgICAgICAgICAgICAgIDxyZGY6bGk%eG1wLmRpZDoyMTg0N0Y5MUZDOEZERjExQkZCMzk4RDM1OUJGRkNFMjwvcmRmOmxpPgogICAgICAgICAgICAgICA8cmRmOmxpPnhtcC5kaWQ6MjJERUE1RkZFMTIwNjgxMThGNjJDODhGMDBGRTUxQjU8L3JkZjpsaT4KICAgICAgICAgICAgICAgPHJkZjpsaT54bXAuZGlkOjIzM0NEQkZDNjJCRkRFMTE4RDZGQjY3RTQ4MjgxNzU4PC9yZGY6bGk%CiAgICAgICAgICAgICAgIDxyZGY6bGk%eG1wLmRpZDoyNDNDQTBDRTdFRDFFMDExQURCMDhDMUE3QzQzRjU2ODwvcmRmOmxpPgogICAgICAgICAgICAgICA8cmRmOmxpPnhtcC5kaWQ6MjRCNkZERjI1MDIwNjgxMTg3MUZBRkNDRjQ4QTNBRkU8L3JkZjpsaT4KICAgICAgICAgICAgICAgPHJkZjpsaT54bXAuZGlkOjI1MEYzN0ZEQkU2NURGMTE5NkEyRTUzODZFQjdFRkJGPC9yZGY6bGk%CiAgICAgICAgICAgICAgIDxyZGY6bGk%eG1wLmRpZDoyNTRCRDJBMEEzMjA2ODExODhDNkM3RDVBNUQ3MkY1RjwvcmRmOmxpPgogICAgICAgICAgICAgICA8cmRmOmxpPnhtcC5kaWQ6MjVEOEY1Q0ZBRjIwNjgxMThBNkRFM0FDOUE0RTA4MkU8L3JkZjpsaT4KICAgICAgICAgICAgICAgPHJkZjpsaT54bXAuZGlkOjI3NDlEQUMxNjlFMERGMTFCQUUyQTlGNEZBMUM3MzBFPC9yZGY6bGk%CiAgICAgICAgICAgICAgIDxyZGY6bGk%eG1wLmRpZDoyODc3REZGMTI1MjA2ODExODcxRjkyQzkxRDA3NTJCMDwvcmRmOmxpPgogICAgICAgICAgICAgICA8cmRmOmxpPnhtcC5kaWQ6MjhFRUE5Qjc5QUQ1REYxMTk2NDhGODUxMUI3NDE3RDM8L3JkZjpsaT4KICAgICAgICAgICAgICAgPHJkZjpsaT54bXAuZGlkOjI5OUUzRURGMDgyMDY4MTE5MkIwOEVBQkVCRTYyNzgyPC9yZGY6bGk%CiAgICAgICAgICAgICAgIDxyZGY6bGk%eG1wLmRpZDoyQUJCNzUwMzdEMUExMURGQkY2NkQxOUFFMEFCNUIxQjwvcmRmOmxpPgogICAgICAgICAgICAgICA8cmRmOmxpPnhtcC5kaWQ6MkI0OURBQzE2OUUwREYxMUJBRTJBOUY0RkExQzczMEU8L3JkZjpsaT4KICAgICAgICAgICAgICAgPHJkZjpsaT54bXAuZGlkOjJDNUVEMEYxNUIyODExRTE4NkMzREMxNjQ3MTJBNEY1PC9yZGY6bGk%CiAgICAgICAgICAgICAgIDxyZGY6bGk%eG1wLmRpZDoyQ0M5NzFENkRDRTFERjExOTNCOEExMUE4MEY0NjIzNjwvcmRmOmxpPgogICAgICAgICAgICAgICA8cmRmOmxpPnhtcC5kaWQ6MkQyRjgzRDJBQTIwNjgxMThGNjJDMDcxREI5NkYzMDg8L3JkZjpsaT4KICAgICAgICAgICAgICAgPHJkZjpsaT54bXAuZGlkOjJFMDIyQkJBNDAyMDY4MTFBRkVEQjREQzVBNUVEQkM5PC9yZGY6bGk%CiAgICAgICAgICAgICAgIDxyZGY6bGk%eG1wLmRpZDoyRUNGMjU4RTMyNURFMDExQTFBNUNCRDE1RjFDNUQ4QTwvcmRmOmxpPgogICAgICAgICAgICAgICA8cmRmOmxpPnhtcC5kaWQ6MkZGRUZGQzc0NDIwNjgxMTg3MUZDNEFGQTdDRTI5Q0E8L3JkZjpsaT4KICAgICAgICAgICAgICAgPHJkZjpsaT54bXAuZGlkOjMxNTkzMzU1MUEyMDY4MTE5ODUwODFCNzlCMUZCRjM2PC9yZGY6bGk%CiAgICAgICAgICAgICAgIDxyZGY6bGk%eG1wLmRpZDozMTVFQzdCMjQyNzdERjExQTI4Q0RCMkU2RThERUQ4RjwvcmRmOmxpPgogICAgICAgICAgICAgICA8cmRmOmxpPnhtcC5kaWQ6MzI0ODc2RUJGMTZCRTAxMTlFNjlFODU0QkJBMUY1MTQ8L3JkZjpsaT4KICAgICAgICAgICAgICAgPHJkZjpsaT54bXAuZGlkOjMyRDUyRTBEMEUyMDY4MTE4RjYyREEwMzEyNUQ0Mjg1PC9yZGY6bGk%CiAgICAgICAgICAgICAgIDxyZGY6bGk%eG1wLmRpZDozMkRBQUM1MTI1MjA2ODExOTJCMEJFOERENjI4RDIzODwvcmRmOmxpPgogICAgICAgICAgICAgICA8cmRmOmxpPnhtcC5kaWQ6MzJGMDE4QjMxMzIwNjgxMTkyQjBDMDlBOUY4RjZENzQ8L3JkZjpsaT4KICAgICAgICAgICAgICAgPHJkZjpsaT54bXAuZGlkOjMzM0I1OTczMkQyMjY4MTE4QTZEOUYzQ0JGRUZDNDEzPC9yZGY6bGk%CiAgICAgICAgICAgICAgIDxyZGY6bGk%eG1wLmRpZDozNDBFRjFFMTdBMjA2ODExODhDQ0MwMzAxODk2QzYxOTwvcmRmOmxpPgogICAgICAgICAgICAgICA8cmRmOmxpPnhtcC5kaWQ6MzQyNEYxOTQyMTIwNjgxMTk0NTdBNzQ4RTI4NkVCQTE8L3JkZjpsaT4KICAgICAgICAgICAgICAgPHJkZjpsaT54bXAuZGlkOjM1NEZCNDQxMzEyMDY4MTE4REJCRTM4REQ4NTcxMDM4PC9yZGY6bGk%CiAgICAgICAgICAgICAgIDxyZGY6bGk%eG1wLmRpZDozNjVGRTBEN0I5MjA2ODExOEY2MkMwNzFEQjk2RjMwODwvcmRmOmxpPgogICAgICAgICAgICAgICA8cmRmOmxpPnhtcC5kaWQ6Mzc0RkI0NDEzMTIwNjgxMThEQkJFMzhERDg1NzEwMzg8L3JkZjpsaT4KICAgICAgICAgICAgICAgPHJkZjpsaT54bXAuZGlkOjM3NzdBRDIzQzE0M0RGMTFBRjBDRTcyN0M5RUZGODYyPC9yZGY6bGk%CiAgICAgICAgICAgICAgIDxyZGY6bGk%eG1wLmRpZDozOEEwMTI5QThGMjE2ODExOTJCMDg0OTlCNzNGRUEzMTwvcmRmOmxpPgogICAgICAgICAgICAgICA8cmRmOmxpPnhtcC5kaWQ6MzkxNzlGNkY1ODIxNjgxMThBNkQ5RjNDQkZFRkM0MTM8L3JkZjpsaT4KICAgICAgICAgICAgICAgPHJkZjpsaT54bXAuZGlkOjNBMTc5RjZGNTgyMTY4MTE4QTZEOUYzQ0JGRUZDNDEzPC9yZGY6bGk%CiAgICAgICAgICAgICAgIDxyZGY6bGk%eG1wLmRpZDozQTZDQUYyNzJCMTlFMDExODRERDhGQkQxMTAzNDAwODwvcmRmOmxpPgogICAgICAgICAgICAgICA8cmRmOmxpPnhtcC5kaWQ6M0E3Njc4M0NEMEE4REYxMUIyQTE5RDUwRkYyMUI4RDk8L3JkZjpsaT4KICAgICAgICAgICAgICAgPHJkZjpsaT54bXAuZGlkOjNCNDRDMTAzMEMyMDY4MTE5MTA5RDhBQURDQzMzQUUyPC9yZGY6bGk%CiAgICAgICAgICAgICAgIDxyZGY6bGk%eG1wLmRpZDozQjREOEEwODFBMjA2ODExQjY5OUVDNEE5QTg3OTYzRDwvcmRmOmxpPgogICAgICAgICAgICAgICA8cmRmOmxpPnhtcC5kaWQ6M0I4Q0RDRjEwNzIwNjgxMUJEN0JCNUU4NzY2NzQ5NzI8L3JkZjpsaT4KICAgICAgICAgICAgICAgPHJkZjpsaT54bXAuZGlkOjNCQzZDRTEyQzM3MERGMTE4NTBDQjcyREI5RDJDQjkyPC9yZGY6bGk%CiAgICAgICAgICAgICAgIDxyZGY6bGk%eG1wLmRpZDozRDAyRTYyQURGOENERjExODFEQ0NCOEU4Qjc3RjMxRjwvcmRmOmxpPgogICAgICAgICAgICAgICA8cmRmOmxpPnhtcC5kaWQ6M0U3MkE4RDYxNTIwNjgxMTkyQjA5QTIzMTgzRUY0NzY8L3JkZjpsaT4KICAgICAgICAgICAgICAgPHJkZjpsaT54bXAuZGlkOjNFQkE2NzI4RDcyMTY4MTE4MzE3QUJCNjE0REE0MzNFPC9yZGY6bGk%CiAgICAgICAgICAgICAgIDxyZGY6bGk%eG1wLmRpZDozRjI4NDBCQkRBRjRERjExOUI5RkVENjZCNjg3NUE3NzwvcmRmOmxpPgogICAgICAgICAgICAgICA8cmRmOmxpPnhtcC5kaWQ6M0Y1NUZFOUVFRjZFRTIxMThGODE4NkJERDlDNENDQUY8L3JkZjpsaT4KICAgICAgICAgICAgICAgPHJkZjpsaT54bXAuZGlkOjNGNkUwNDUxNzgyMDY4MTE4MjJFOTgwREIzNTM4NTlGPC9yZGY6bGk%CiAgICAgICAgICAgICAgIDxyZGY6bGk%eG1wLmRpZDo0MEJCMjE3Q0JEODRERjExQTQ3Q0VCRTYyODkxMkIwMjwvcmRmOmxpPgogICAgICAgICAgICAgICA8cmRmOmxpPnhtcC5kaWQ6NDIxNzlGNkY1ODIxNjgxMThBNkQ5RjNDQkZFRkM0MTM8L3JkZjpsaT4KICAgICAgICAgICAgICAgPHJkZjpsaT54bXAuZGlkOjQyNjExOTMzQzZFOURGMTE5MzY2RDIyMkY1OUI0OTJDPC9yZGY6bGk%CiAgICAgICAgICAgICAgIDxyZGY6bGk%eG1wLmRpZDo0MjY5NTZBNjNDN0VERjExQTVBNEU5MDY1RkFDNzA0QzwvcmRmOmxpPgogICAgICAgICAgICAgICA8cmRmOmxpPnhtcC5kaWQ6NDJCNzlDNEQxNzIwNjgxMTg4QzY5RTlDMERFODkwNkU8L3JkZjpsaT4KICAgICAgICAgICAgICAgPHJkZjpsaT54bXAuZGlkOjQ0QkE2MTBGRjcxNUUwMTE4NTBGQTkwMUI0QzFCNjc1PC9yZGY6bGk%CiAgICAgICAgICAgICAgIDxyZGY6bGk%eG1wLmRpZDo0NERENTlBRDI1MjA2ODExODhDNkFFMzJFQTM5ODI5NzwvcmRmOmxpPgogICAgICAgICAgICAgICA8cmRmOmxpPnhtcC5kaWQ6NDU1REY2MTI1RDU5REUxMTgyNDJEMUU4QUM3Njg4MUU8L3JkZjpsaT4KICAgICAgICAgICAgICAgPHJkZjpsaT54bXAuZGlkOjQ2NkREREY1RDAyMDY4MTE4OEM2Q0Q0M0FFNDVDRjc4PC9yZGY6bGk%CiAgICAgICAgICAgICAgIDxyZGY6bGk%eG1wLmRpZDo0NzZEQUJCRUJFMjA2ODExOEY2MkIzMTc2RUUyNTE4NzwvcmRmOmxpPgogICAgICAgICAgICAgICA8cmRmOmxpPnhtcC5kaWQ6NDdCNTVERUIzNzIwNjgxMUFGRkRDRThFM0I3QzgzMkI8L3JkZjpsaT4KICAgICAgICAgICAgICAgPHJkZjpsaT54bXAuZGlkOjQ4MEI3RTQ2QUY3OERGMTFBODI1Q0Y4REU1RDkxREY3PC9yZGY6bGk%CiAgICAgICAgICAgICAgIDxyZGY6bGk%eG1wLmRpZDo0ODI3QjFGQjJGMjA2ODExOEY2MkJFQjA2Q0I4NDAwMzwvcmRmOmxpPgogICAgICAgICAgICAgICA8cmRmOmxpPnhtcC5kaWQ6NDhCN0JEMEJEMUYxREYxMTkxMURBRTNGNzdBNzJDMTI8L3JkZjpsaT4KICAgICAgICAgICAgICAgPHJkZjpsaT54bXAuZGlkOjQ5NjgyMzgzMUUyMDY4MTE4RjFDRkVDQTc4MjkxNUM2PC9yZGY6bGk%CiAgICAgICAgICAgICAgIDxyZGY6bGk%eG1wLmRpZDo0OTc4REQyODAxMjM2ODExOTJCMENBQkIyODc0QUYwQzwvcmRmOmxpPgogICAgICAgICAgICAgICA8cmRmOmxpPnhtcC5kaWQ6NEEwQ0JFOEY5NDVDRTAxMTlCOTRFMzk4ODEzRTEzQUI8L3JkZjpsaT4KICAgICAgICAgICAgICAgPHJkZjpsaT54bXAuZGlkOjRCMUI0QzBBMTAwOURGMTFCRDUxRjMxOEU5RURBOUU4PC9yZGY6bGk%CiAgICAgICAgICAgICAgIDxyZGY6bGk%eG1wLmRpZDo0QzhENkYyQzg3MjE2ODExODhDNkM3RDVBNUQ3MkY1RjwvcmRmOmxpPgogICAgICAgICAgICAgICA8cmRmOmxpPnhtcC5kaWQ6NEQzNkQ3NENGNTBCMTFFMEE0QjRBODEzNTRCOEVDNEY8L3JkZjpsaT4KICAgICAgICAgICAgICAgPHJkZjpsaT54bXAuZGlkOjRFOTlBODZFRjU0MURGMTFCOTQ4OTM2QkZFQjk5QjI2PC9yZGY6bGk%CiAgICAgICAgICAgICAgIDxyZGY6bGk%eG1wLmRpZDo0RURERkM5MDIwMjA2ODExOEY2MkI1MjBBNUVFNDRDRDwvcmRmOmxpPgogICAgICAgICAgICAgICA8cmRmOmxpPnhtcC5kaWQ6NEVGODBGMkQzOTIwNjgxMThGNjJFRUY4QkJBQjI5RDE8L3JkZjpsaT4KICAgICAgICAgICAgICAgPHJkZjpsaT54bXAuZGlkOjUwN0JENjBBMEIyMDY4MTE4REJCQTYyMjUxMkNCOENBPC9yZGY6bGk%CiAgICAgICAgICAgICAgIDxyZGY6bGk%eG1wLmRpZDo1MTRGNjdDNUUzQTBERjExOThGOEE3QjkzMTY5NzM1OTwvcmRmOmxpPgogICAgICAgICAgICAgICA8cmRmOmxpPnhtcC5kaWQ6NTE1NDZGREQxMzIwNjgxMTkyQjBCQUE5MDRERTBGOEQ8L3JkZjpsaT4KICAgICAgICAgICAgICAgPHJkZjpsaT54bXAuZGlkOjUxQzE5NDhBOEVGNURGMTE4QzhCOUVEQjAyMUFDMTEyPC9yZGY6bGk%CiAgICAgICAgICAgICAgIDxyZGY6bGk%eG1wLmRpZDo1MkJBNEJFOEUyMjcxMUUwQUVCQjkwNzRGMDc2M0EzQjwvcmRmOmxpPgogICAgICAgICAgICAgICA8cmRmOmxpPnhtcC5kaWQ6NTM4MDhCNDczREE5RTExMUE3RTFERkIwNUE0QjNBODI8L3JkZjpsaT4KICAgICAgICAgICAgICAgPHJkZjpsaT54bXAuZGlkOjUzRDE2QUU4MkUyMDY4MTE4RjYyRDI1RUY5QUQ2QzJGPC9yZGY6bGk%CiAgICAgICAgICAgICAgIDxyZGY6bGk%eG1wLmRpZDo1NDNBNzk4RjEzMDdFMDExODQ2RkU4QzA0RDNDOERFQzwvcmRmOmxpPgogICAgICAgICAgICAgICA8cmRmOmxpPnhtcC5kaWQ6NTQ1NDZGREQxMzIwNjgxMTkyQjBCQUE5MDRERTBGOEQ8L3JkZjpsaT4KICAgICAgICAgICAgICAgPHJkZjpsaT54bXAuZGlkOjU0OTJBM0JDMjE3MjExRTA4QURBQjE2REI2N0U3QUY0PC9yZGY6bGk%CiAgICAgICAgICAgICAgIDxyZGY6bGk%eG1wLmRpZDo1NEMzRjlGOEJEQUVERjExQTVEQzk1OUM4MkFCQzlFMTwvcmRmOmxpPgogICAgICAgICAgICAgICA8cmRmOmxpPnhtcC5kaWQ6NTU3QzQyQUU5OTIwNjgxMThGNDJDRkUyQTlFQkVBODI8L3JkZjpsaT4KICAgICAgICAgICAgICAgPHJkZjpsaT54bXAuZGlkOjU1OUZDRDNCNTI3QURGMTE4OTE0REVCMTM1MTc2MUYxPC9yZGY6bGk%CiAgICAgICAgICAgICAgIDxyZGY6bGk%eG1wLmRpZDo1OTI2NDY4RDYyMTVFMTExQUJDRkVERkUyODk1NjZCODwvcmRmOmxpPgogICAgICAgICAgICAgICA8cmRmOmxpPnhtcC5kaWQ6NUE4QjkwNTgyNTIwNjgxMTg4QzZCRDNDMEU0MzI5RkU8L3JkZjpsaT4KICAgICAgICAgICAgICAgPHJkZjpsaT54bXAuZGlkOjVCNkREMkI3NDU4NERGMTFCNzI0OEI3RERGNzk0QTFBPC9yZGY6bGk%CiAgICAgICAgICAgICAgIDxyZGY6bGk%eG1wLmRpZDo1QjhCOTA1ODI1MjA2ODExODhDNkJEM0MwRTQzMjlGRTwvcmRmOmxpPgogICAgICAgICAgICAgICA8cmRmOmxpPnhtcC5kaWQ6NUMyNkNGM0UwMTIxNjgxMTg4QzZDRDQzQUU0NUNGNzg8L3JkZjpsaT4KICAgICAgICAgICAgICAgPHJkZjpsaT54bXAuZGlkOjVEREQ1RTA1NTQyNDY4MTE5ODIwQTRGNTc1QTg1NEZBPC9yZGY6bGk%CiAgICAgICAgICAgICAgIDxyZGY6bGk%eG1wLmRpZDo1RTNGRTUwNDNEM0QxMUUwOTlFMkUyM0FCQTNBQUNEODwvcmRmOmxpPgogICAgICAgICAgICAgICA8cmRmOmxpPnhtcC5kaWQ6NUUzRkU1MDgzRDNEMTFFMDk5RTJFMjNBQkEzQUFDRDg8L3JkZjpsaT4KICAgICAgICAgICAgICAgPHJkZjpsaT54bXAuZGlkOjVGMkNGNzU5NUQyMDY4MTE5OTRDRTY4QTdBOEE5MTM3PC9yZGY6bGk%CiAgICAgICAgICAgICAgIDxyZGY6bGk%eG1wLmRpZDo1RkIyNEI2QTY3RTgxMURGOThEMUJFQTdDNTE3QUY2NTwvcmRmOmxpPgogICAgICAgICAgICAgICA8cmRmOmxpPnhtcC5kaWQ6NjA2NDBBNUM1ODI2RTAxMTgyQ0FEMzhFQ0VEQ0UyNjg8L3JkZjpsaT4KICAgICAgICAgICAgICAgPHJkZjpsaT54bXAuZGlkOjYyNjBEQzI4MEYyMjY4MTE4NzFGRkVFRTVFMjJGMDBBPC9yZGY6bGk%CiAgICAgICAgICAgICAgIDxyZGY6bGk%eG1wLmRpZDo2MjhCOTA1ODI1MjA2ODExODhDNkJEM0MwRTQzMjlGRTwvcmRmOmxpPgogICAgICAgICAgICAgICA8cmRmOmxpPnhtcC5kaWQ6NjJERjI0NUQ4ODIwNjgxMTkyQjBFQUIxNjQ3RDA5Qzk8L3JkZjpsaT4KICAgICAgICAgICAgICAgPHJkZjpsaT54bXAuZGlkOjYzNEZFMTA2RkRBQURGMTE5NkJGQUIyQUVDRkUyRkExPC9yZGY6bGk%CiAgICAgICAgICAgICAgIDxyZGY6bGk%eG1wLmRpZDo2Mzg4ODBFODA5MjA2ODExOTJCMEJBQTkwNERFMEY4RDwvcmRmOmxpPgogICAgICAgICAgICAgICA8cmRmOmxpPnhtcC5kaWQ6NjM5QjFERDI5N0Q1REYxMTk2NDhGODUxMUI3NDE3RDM8L3JkZjpsaT4KICAgICAgICAgICAgICAgPHJkZjpsaT54bXAuZGlkOjYzQUVGOTEwNTMwNUUwMTE4NjdGODlCMDIxMUU0RjdBPC9yZGY6bGk%CiAgICAgICAgICAgICAgIDxyZGY6bGk%eG1wLmRpZDo2NDc0QzgzQzY4N0NERjExOEUxRjk5RDY5QjM1MjVDQzwvcmRmOmxpPgogICAgICAgICAgICAgICA8cmRmOmxpPnhtcC5kaWQ6NjQ4ODgwRTgwOTIwNjgxMTkyQjBCQUE5MDRERTBGOEQ8L3JkZjpsaT4KICAgICAgICAgICAgICAgPHJkZjpsaT54bXAuZGlkOjY0ODlCQUMxMjYyMDY4MTE4OEM2RjY3MDM0NkUzNUM4PC9yZGY6bGk%CiAgICAgICAgICAgICAgIDxyZGY6bGk%eG1wLmRpZDo2NDhCOTA1ODI1MjA2ODExODhDNkJEM0MwRTQzMjlGRTwvcmRmOmxpPgogICAgICAgICAgICAgICA8cmRmOmxpPnhtcC5kaWQ6NjRDNkM1QzgzOUNDREUxMTgwNDBDMjQ0QkNBRTBBQzA8L3JkZjpsaT4KICAgICAgICAgICAgICAgPHJkZjpsaT54bXAuZGlkOjY2ODg4MEU4MDkyMDY4MTE5MkIwQkFBOTA0REUwRjhEPC9yZGY6bGk%CiAgICAgICAgICAgICAgIDxyZGY6bGk%eG1wLmRpZDo2NkUxNDQyRjVGMjA2ODExOTEwOTg3MTAzMTEwQjU0RTwvcmRmOmxpPgogICAgICAgICAgICAgICA8cmRmOmxpPnhtcC5kaWQ6Njc2Mzk3OTg0ODUxMTFFMUJDRTdCOEJBMzMzMjAxMEI8L3JkZjpsaT4KICAgICAgICAgICAgICAgPHJkZjpsaT54bXAuZGlkOjY3ODg4MEU4MDkyMDY4MTE5MkIwQkFBOTA0REUwRjhEPC9yZGY6bGk%CiAgICAgICAgICAgICAgIDxyZGY6bGk%eG1wLmRpZDo2N0VGN0QwRjEzRTVERjExOTQzMUFEMkYxM0EwN0M2NjwvcmRmOmxpPgogICAgICAgICAgICAgICA8cmRmOmxpPnhtcC5kaWQ6Njg4RTA2NkM0QjIwNjgxMTk2M0NGMkY1MjNGOUE1MTE8L3JkZjpsaT4KICAgICAgICAgICAgICAgPHJkZjpsaT54bXAuZGlkOjY4OUIxREQyOTdENURGMTE5NjQ4Rjg1MTFCNzQxN0QzPC9yZGY6bGk%CiAgICAgICAgICAgICAgIDxyZGY6bGk%eG1wLmRpZDo2OUNDRTg1QjlGNkJFMDExQUQzOEE1NjNGOTQzNTY0MjwvcmRmOmxpPgogICAgICAgICAgICAgICA8cmRmOmxpPnhtcC5kaWQ6NjlEMzMwNEIxOTIwNjgxMTkxMDlCNUNCNjg4NjI4ODY8L3JkZjpsaT4KICAgICAgICAgICAgICAgPHJkZjpsaT54bXAuZGlkOjY5REMwREVFQTdFNkUwMTE5OTVFQzU3RDFCRDYwN0E5PC9yZGY6bGk%CiAgICAgICAgICAgICAgIDxyZGY6bGk%eG1wLmRpZDo2OUVCNDM0RjMwMjA2ODExOTEwOUIzQ0FFRTUxRTBCNjwvcmRmOmxpPgogICAgICAgICAgICAgICA8cmRmOmxpPnhtcC5kaWQ6NkEyODRFMDkxQTI5NjgxMTkyQjBENTNGRjc5MEY4NUI8L3JkZjpsaT4KICAgICAgICAgICAgICAgPHJkZjpsaT54bXAuZGlkOjZBRDJERDE0MjZDQkRGMTE5MjA3RkY2MzFFMzEzQzFFPC9yZGY6bGk%CiAgICAgICAgICAgICAgIDxyZGY6bGk%eG1wLmRpZDo2QUVGN0QwRjEzRTVERjExOTQzMUFEMkYxM0EwN0M2NjwvcmRmOmxpPgogICAgICAgICAgICAgICA8cmRmOmxpPnhtcC5kaWQ6NkI5QUZGNjUyMERBREYxMUFEMkJDQkYxOUMwMkY5OEM8L3JkZjpsaT4KICAgICAgICAgICAgICAgPHJkZjpsaT54bXAuZGlkOjZDMUQ0Q0ZCRDhDOERGMTE4ODQ5RTIxNzY0Nzk2QUU4PC9yZGY6bGk%CiAgICAgICAgICAgICAgIDxyZGY6bGk%eG1wLmRpZDo2Q0FBMjI1NUNGNTdFMDExOEY2MUFCQUExMjgxRTRFMDwvcmRmOmxpPgogICAgICAgICAgICAgICA8cmRmOmxpPnhtcC5kaWQ6NkUyODJEQ0E3RjE3RTAxMUIwNzM5ODY2RTlBRDBDODE8L3JkZjpsaT4KICAgICAgICAgICAgICAgPHJkZjpsaT54bXAuZGlkOjcwRjRGNTJBRDg3MUUxMTFBQzRFOEY0MDhGNjREOEIzPC9yZGY6bGk%CiAgICAgICAgICAgICAgIDxyZGY6bGk%eG1wLmRpZDo3MTBBNzQwMEE4RUJFMDExQjk3NkQ1OTNFNjQ2OTAxNTwvcmRmOmxpPgogICAgICAgICAgICAgICA8cmRmOmxpPnhtcC5kaWQ6NzEyNUM5OUUxMzIwNjgxMTgyRkU5OEVGN0YxOEJGMUQ8L3JkZjpsaT4KICAgICAgICAgICAgICAgPHJkZjpsaT54bXAuZGlkOjcxNjJBMTAxMTMyMDY4MTE4NzFGQ0QyMTk5QUQxNjdFPC9yZGY6bGk%CiAgICAgICAgICAgICAgIDxyZGY6bGk%eG1wLmRpZDo3MjE3QjY4MzQzMjA2ODExOEE2REU3NTAyMDI5OTQyMzwvcmRmOmxpPgogICAgICAgICAgICAgICA8cmRmOmxpPnhtcC5kaWQ6NzI2Mzc5OEMwQTIwNjgxMTkyQjBBRkEwQkQ2OEFGNkI8L3JkZjpsaT4KICAgICAgICAgICAgICAgPHJkZjpsaT54bXAuZGlkOjczMTY5ODU5N0YyMDY4MTE5MTA5OEEzNzAwOUNCQkFGPC9yZGY6bGk%CiAgICAgICAgICAgICAgIDxyZGY6bGk%eG1wLmRpZDo3MzlEN0U5RkVCQURERjExQUFERUFEQTM1NjIyMjA4MzwvcmRmOmxpPgogICAgICAgICAgICAgICA8cmRmOmxpPnhtcC5kaWQ6NzRGMzNFQ0VEQkJBREUxMTkxNjA5RkQ3NTg5NjZENjQ8L3JkZjpsaT4KICAgICAgICAgICAgICAgPHJkZjpsaT54bXAuZGlkOjc1OEE1NEVCRkFGNERGMTFBRDdCRDE2NDI4REQ0OEExPC9yZGY6bGk%CiAgICAgICAgICAgICAgIDxyZGY6bGk%eG1wLmRpZDo3NURFREMyNTMxMjQ2ODExOEI3MkRFMkM2QjEwNDI3NDwvcmRmOmxpPgogICAgICAgICAgICAgICA8cmRmOmxpPnhtcC5kaWQ6NzYxN0I2ODM0MzIwNjgxMThBNkRFNzUwMjAyOTk0MjM8L3JkZjpsaT4KICAgICAgICAgICAgICAgPHJkZjpsaT54bXAuZGlkOjc2RjRGNTJBRDg3MUUxMTFBQzRFOEY0MDhGNjREOEIzPC9yZGY6bGk%CiAgICAgICAgICAgICAgIDxyZGY6bGk%eG1wLmRpZDo3NzA1OEU4MTAyNzVERjExOTBBQUQ4NTYzQzUxMkMwQzwvcmRmOmxpPgogICAgICAgICAgICAgICA8cmRmOmxpPnhtcC5kaWQ6Nzc3MTQ0M0U2NjIwNjgxMThBNkRFNzUwMjAyOTk0MjM8L3JkZjpsaT4KICAgICAgICAgICAgICAgPHJkZjpsaT54bXAuZGlkOjc3OEZCRDY0QzQyMDY4MTE4OEM2QkVCNzA1NjIwMkREPC9yZGY6bGk%CiAgICAgICAgICAgICAgIDxyZGY6bGk%eG1wLmRpZDo3ODgyMDBCMzMyNjFERjExQjM4Rjk5ODg3NUNDODY1NDwvcmRmOmxpPgogICAgICAgICAgICAgICA8cmRmOmxpPnhtcC5kaWQ6Nzg4QUY1OENEQzlGREYxMThDMDBDM0M5NjhBQkRDMDY8L3JkZjpsaT4KICAgICAgICAgICAgICAgPHJkZjpsaT54bXAuZGlkOjc5MjUzMzZGNzkyMDY4MTE4RjYyRkIyRjg2NjE4QzI5PC9yZGY6bGk%CiAgICAgICAgICAgICAgIDxyZGY6bGk%eG1wLmRpZDo3OTc4M0RBOTI4MjA2ODExOTEwOURGQ0YwN0U4QkREMTwvcmRmOmxpPgogICAgICAgICAgICAgICA8cmRmOmxpPnhtcC5kaWQ6N0E1RDBFMUE1QjI4MTFFMTg2QzNEQzE2NDcxMkE0RjU8L3JkZjpsaT4KICAgICAgICAgICAgICAgPHJkZjpsaT54bXAuZGlkOjdBNUQwRTFFNUIyODExRTE4NkMzREMxNjQ3MTJBNEY1PC9yZGY6bGk%CiAgICAgICAgICAgICAgIDxyZGY6bGk%eG1wLmRpZDo3QTVEMEUyMjVCMjgxMUUxODZDM0RDMTY0NzEyQTRGNTwvcmRmOmxpPgogICAgICAgICAgICAgICA8cmRmOmxpPnhtcC5kaWQ6N0JEMkE3MTc2QzM0RTAxMTgzQzE4OEMwQjBEQTRDQUE8L3JkZjpsaT4KICAgICAgICAgICAgICAgPHJkZjpsaT54bXAuZGlkOjdENUUxQjhBRUFFRkRGMTE4QTlEQUY3NUFBRDM0RTg5PC9yZGY6bGk%CiAgICAgICAgICAgICAgIDxyZGY6bGk%eG1wLmRpZDo3REFBNTQwRjExMjA2ODExOTEwOTgyODYyQjQyRjdDNDwvcmRmOmxpPgogICAgICAgICAgICAgICA8cmRmOmxpPnhtcC5kaWQ6N0U5N0I4NzM2ODYxRTExMUEwMjdBQzY0NUYzQkJDQUE8L3JkZjpsaT4KICAgICAgICAgICAgICAgPHJkZjpsaT54bXAuZGlkOjdFRUEzRUZEQjcyMDY4MTE5OTRDQ0Q1RjAyMkUxREI2PC9yZGY6bGk%CiAgICAgICAgICAgICAgIDxyZGY6bGk%eG1wLmRpZDo3RjE1QzBDQTE1MjA2ODExOEE2REU3NTAyMDI5OTQyMzwvcmRmOmxpPgogICAgICAgICAgICAgICA8cmRmOmxpPnhtcC5kaWQ6N0Y5N0I4NzM2ODYxRTExMUEwMjdBQzY0NUYzQkJDQUE8L3JkZjpsaT4KICAgICAgICAgICAgICAgPHJkZjpsaT54bXAuZGlkOjdGOUM1M0EyMTEyMDY4MTFBQ0I2ODNBRTRERTI2MEQxPC9yZGY6bGk%CiAgICAgICAgICAgICAgIDxyZGY6bGk%eG1wLmRpZDo4MEU2Q0UwNkVENkFFMjExQTA0RDhDMDFERTE0NDU0MzwvcmRmOmxpPgogICAgICAgICAgICAgICA8cmRmOmxpPnhtcC5kaWQ6ODE2NkY5NEY4RTVBREYxMUIyQThENUM1NDIyNkI4RDA8L3JkZjpsaT4KICAgICAgICAgICAgICAgPHJkZjpsaT54bXAuZGlkOjgxOTdCODczNjg2MUUxMTFBMDI3QUM2NDVGM0JCQ0FBPC9yZGY6bGk%CiAgICAgICAgICAgICAgIDxyZGY6bGk%eG1wLmRpZDo4MzE1QzBDQTE1MjA2ODExOEE2REU3NTAyMDI5OTQyMzwvcmRmOmxpPgogICAgICAgICAgICAgICA8cmRmOmxpPnhtcC5kaWQ6ODM2NTkxMTY2M0NFMTFFMEJFOUU4NUY2QkI2N0NFRUM8L3JkZjpsaT4KICAgICAgICAgICAgICAgPHJkZjpsaT54bXAuZGlkOjg0QjQxMkU2MzgyMDY4MTE4MTkwOEREREM1Qzg3Q0ExPC9yZGY6bGk%CiAgICAgICAgICAgICAgIDxyZGY6bGk%eG1wLmRpZDo4NEM3NkU1Q0E2MUVFMDExOUI2MkMxQTcyQ0REQkIyRDwvcmRmOmxpPgogICAgICAgICAgICAgICA8cmRmOmxpPnhtcC5kaWQ6ODUyNjAwQjY4QjhCREYxMTk4OTY4RDhCRkE5QTBDMTE8L3JkZjpsaT4KICAgICAgICAgICAgICAgPHJkZjpsaT54bXAuZGlkOjg2MUNCMTI5MTE2Q0RGMTFBMDgxREFDNjU1NDlGRkY4PC9yZGY6bGk%CiAgICAgICAgICAgICAgIDxyZGY6bGk%eG1wLmRpZDo4NzAyMjVEMjBFOTRERjExOTVBNUZDNUMzMTZDQzQxODwvcmRmOmxpPgogICAgICAgICAgICAgICA8cmRmOmxpPnhtcC5kaWQ6ODdDMDIzMjU4QzczRTExMTg2NTc4QzMzMkU0RjVDMjI8L3JkZjpsaT4KICAgICAgICAgICAgICAgPHJkZjpsaT54bXAuZGlkOjg4QTEyMzExNjRENzExREZBNjk3ODUyMUQ2MERGNDYwPC9yZGY6bGk%CiAgICAgICAgICAgICAgIDxyZGY6bGk%eG1wLmRpZDo4OUUzNkZGQTdEMTRERjExOTdDODlDOEZGMTdCMkQ0NDwvcmRmOmxpPgogICAgICAgICAgICAgICA8cmRmOmxpPnhtcC5kaWQ6OEIwMUUzNDE3QTIwNjgxMTg4QzZEQzAyMTdBN0I1RDM8L3JkZjpsaT4KICAgICAgICAgICAgICAgPHJkZjpsaT54bXAuZGlkOjhCMDdGQ0ZDNTYyMDY4MTFCMUE0REVFNjQ0MTMwODNEPC9yZGY6bGk%CiAgICAgICAgICAgICAgIDxyZGY6bGk%eG1wLmRpZDo4QjkwODU4RkI1NzNERjExQkZCQkYwMDc1OUEzRDQ1MjwvcmRmOmxpPgogICAgICAgICAgICAgICA8cmRmOmxpPnhtcC5kaWQ6OEMxN0NBMjBERjJERTIxMUE5NTRDNkUzQkYwMTA3NUQ8L3JkZjpsaT4KICAgICAgICAgICAgICAgPHJkZjpsaT54bXAuZGlkOjhEQzMwN0I4MjkyMDY4MTE4RjYyQzA3MURCOTZGMzA4PC9yZGY6bGk%CiAgICAgICAgICAgICAgIDxyZGY6bGk%eG1wLmRpZDo4RTU4Njg3OTVBMTVFMTExQUJDRkVERkUyODk1NjZCODwvcmRmOmxpPgogICAgICAgICAgICAgICA8cmRmOmxpPnhtcC5kaWQ6OEVDRkQzNEQwMDI5NjgxMTkxMDlCMkIzQTYxRjQ4Rjc8L3JkZjpsaT4KICAgICAgICAgICAgICAgPHJkZjpsaT54bXAuZGlkOjhGOTFFOTA3MjQyMDY4MTE4RjYyRjUwQzcyRjRFMkZGPC9yZGY6bGk%CiAgICAgICAgICAgICAgIDxyZGY6bGk%eG1wLmRpZDo5MEM1RDUyNjY0NzlERjExODY1Q0VFRjA5ODUxRkQ3OTwvcmRmOmxpPgogICAgICAgICAgICAgICA8cmRmOmxpPnhtcC5kaWQ6OTBFNDdFNjk2MjcxREYxMTgzMTFCMEM4MEY1OUNBMTM8L3JkZjpsaT4KICAgICAgICAgICAgICAgPHJkZjpsaT54bXAuZGlkOjkxMUM3RjJBOEEyMTY4MTE4ODEwOUY5OTczRDQ2RjJBPC9yZGY6bGk%CiAgICAgICAgICAgICAgIDxyZGY6bGk%eG1wLmRpZDo5MUU1RUIxQTJDMjA2ODExOEY2MkEwMTA4MEFEMEQ4MTwvcmRmOmxpPgogICAgICAgICAgICAgICA8cmRmOmxpPnhtcC5kaWQ6OTFGRjA1MUUwRkQzREYxMUIyRDFDNTFGNTlCNUZCMjk8L3JkZjpsaT4KICAgICAgICAgICAgICAgPHJkZjpsaT54bXAuZGlkOjkyRTg2OEQxM0UyMDY4MTE4RjYyOTU5Nzg1MTY0QzUwPC9yZGY6bGk%CiAgICAgICAgICAgICAgIDxyZGY6bGk%eG1wLmRpZDo5NDhGNTU4QURDRDNERjExOEIyM0VDMjVGRjFBNDU3QzwvcmRmOmxpPgogICAgICAgICAgICAgICA8cmRmOmxpPnhtcC5kaWQ6OTRCNTEyMzA2ODIwNjgxMThBNkRFNzUwMjAyOTk0MjM8L3JkZjpsaT4KICAgICAgICAgICAgICAgPHJkZjpsaT54bXAuZGlkOjk2NzI0MjJEREJDRERFMTFBQkZBQTBEODYwM0E5QUExPC9yZGY6bGk%CiAgICAgICAgICAgICAgIDxyZGY6bGk%eG1wLmRpZDo5NzU3MDU1ODFDMjA2ODExODcxRkY3QjE4ODBGOUY1MjwvcmRmOmxpPgogICAgICAgICAgICAgICA8cmRmOmxpPnhtcC5kaWQ6OThFMzkwMzgzNTIxNjgxMTkxMDk5M0RGRkM2NjdGMjc8L3JkZjpsaT4KICAgICAgICAgICAgICAgPHJkZjpsaT54bXAuZGlkOjk5MzQzQTQ3MzIyMDY4MTE4NzFGRThERDIzNDBDMEIwPC9yZGY6bGk%CiAgICAgICAgICAgICAgIDxyZGY6bGk%eG1wLmRpZDo5QjBCQzkwRTc2QjRERjExQTM2NUVGNTI1Nzc2MjM4MTwvcmRmOmxpPgogICAgICAgICAgICAgICA8cmRmOmxpPnhtcC5kaWQ6OUI0M0ZGQTBBRTIwNjgxMTkxMDlENTBEMUY0NTg4N0Q8L3JkZjpsaT4KICAgICAgICAgICAgICAgPHJkZjpsaT54bXAuZGlkOjlCQTU5RjkzQUMyMDY4MTFCNENDRTk4ODBBMUI0RDgzPC9yZGY6bGk%CiAgICAgICAgICAgICAgIDxyZGY6bGk%eG1wLmRpZDo5RDlGQzkxNkYwMjA2ODExOTJCMEUzNUE1N0JERDkwOTwvcmRmOmxpPgogICAgICAgICAgICAgICA8cmRmOmxpPnhtcC5kaWQ6OURBNjE0Mzc0RTIwNjgxMTkxMDlBOTlBQTJCNjcwRjI8L3JkZjpsaT4KICAgICAgICAgICAgICAgPHJkZjpsaT54bXAuZGlkOjlFMEEyNEZDRDQyMDY4MTE4OEM2OTc2QTVFNEFGNDQzPC9yZGY6bGk%CiAgICAgICAgICAgICAgIDxyZGY6bGk%eG1wLmRpZDo5RUQ2RDcyQzMyMjA2ODExOEY2MjlFNjBCMDU5RTA5MzwvcmRmOmxpPgogICAgICAgICAgICAgICA8cmRmOmxpPnhtcC5kaWQ6OUVGN0Q5MkZDMzkyREYxMUFFRDZBNTlCMEVGNzExNDk8L3JkZjpsaT4KICAgICAgICAgICAgICAgPHJkZjpsaT54bXAuZGlkOjlGODIyQURDRjBENzExREZCRTk2QUEwRkZFNTQ2MkEyPC9yZGY6bGk%CiAgICAgICAgICAgICAgIDxyZGY6bGk%eG1wLmRpZDo5RjgyMkFFNEYwRDcxMURGQkU5NkFBMEZGRTU0NjJBMjwvcmRmOmxpPgogICAgICAgICAgICAgICA8cmRmOmxpPnhtcC5kaWQ6QTBBNkFFMjUyMDIwNjgxMThBNkRBQ0FBQTRERDYwMjA8L3JkZjpsaT4KICAgICAgICAgICAgICAgPHJkZjpsaT54bXAuZGlkOkEwRkJEQUY3NUIyODExRTE4NkMzREMxNjQ3MTJBNEY1PC9yZGY6bGk%CiAgICAgICAgICAgICAgIDxyZGY6bGk%eG1wLmRpZDpBMEZCREFGQjVCMjgxMUUxODZDM0RDMTY0NzEyQTRGNTwvcmRmOmxpPgogICAgICAgICAgICAgICA8cmRmOmxpPnhtcC5kaWQ6QTE0RjlBMjUyMTIwNjgxMUIxQTRERUU2NDQxMzA4M0Q8L3JkZjpsaT4KICAgICAgICAgICAgICAgPHJkZjpsaT54bXAuZGlkOkE2QjlEMjI0QzExQ0UwMTFCMDBDQjQ3OEZGQjY1NzBGPC9yZGY6bGk%CiAgICAgICAgICAgICAgIDxyZGY6bGk%eG1wLmRpZDpBNzQ3RjRBRjFEMjA2ODExOEY2MkREMkE5Mjg5MzA5MTwvcmRmOmxpPgogICAgICAgICAgICAgICA8cmRmOmxpPnhtcC5kaWQ6QTdCNzEyODkxRTIwNjgxMTkyQjA4RUFCRUJFNjI3ODI8L3JkZjpsaT4KICAgICAgICAgICAgICAgPHJkZjpsaT54bXAuZGlkOkE3RTg3QTJGOTU4QzExREZCNzdDRjNBRDRGMDBCMEVGPC9yZGY6bGk%CiAgICAgICAgICAgICAgIDxyZGY6bGk%eG1wLmRpZDpBODM3OEExMzM2QTNERjExOUVFNzhEMzhFMzBBQUY2MzwvcmRmOmxpPgogICAgICAgICAgICAgICA8cmRmOmxpPnhtcC5kaWQ6QTg3QzA3QkVBNjIwNjgxMThEQkJERDM1MTcyNTUzNUY8L3JkZjpsaT4KICAgICAgICAgICAgICAgPHJkZjpsaT54bXAuZGlkOkE5MTkzMjEzMTAyMDY4MTE4RjYyRUM2NUFBQTFDRUFGPC9yZGY6bGk%CiAgICAgICAgICAgICAgIDxyZGY6bGk%eG1wLmRpZDpBQUU3NjhGRjhENkFERjExODI5MENCQjk0QzVDRjRGMDwvcmRmOmxpPgogICAgICAgICAgICAgICA8cmRmOmxpPnhtcC5kaWQ6QUM1RjdDMkM1RDIwNjgxMUI0RjJCRDRENkFENUQwMzk8L3JkZjpsaT4KICAgICAgICAgICAgICAgPHJkZjpsaT54bXAuZGlkOkFEMzc3M0REOUQ1M0RGMTFCOEI0QjQ4Q0VCNzcwRjY4PC9yZGY6bGk%CiAgICAgICAgICAgICAgIDxyZGY6bGk%eG1wLmRpZDpBRDZBOEYzRDI5MjA2ODExOEY2MkQyNUVGOUFENkMyRjwvcmRmOmxpPgogICAgICAgICAgICAgICA8cmRmOmxpPnhtcC5kaWQ6QUUxOTMyMTMxMDIwNjgxMThGNjJFQzY1QUFBMUNFQUY8L3JkZjpsaT4KICAgICAgICAgICAgICAgPHJkZjpsaT54bXAuZGlkOkFGM0Y5NEZDOEE4MTExREZCNThFQTU5OTJCNTE1ODdDPC9yZGY6bGk%CiAgICAgICAgICAgICAgIDxyZGY6bGk%eG1wLmRpZDpCMDFFQURFQTFEQkJFMTExOEM2MUMzRkE3RTI5NjYyRDwvcmRmOmxpPgogICAgICAgICAgICAgICA8cmRmOmxpPnhtcC5kaWQ6QjA1RjdDMkM1RDIwNjgxMUI0RjJCRDRENkFENUQwMzk8L3JkZjpsaT4KICAgICAgICAgICAgICAgPHJkZjpsaT54bXAuZGlkOkIwODI0NzJCOEEyMDY4MTFBRkZEQ0U4RTNCN0M4MzJCPC9yZGY6bGk%CiAgICAgICAgICAgICAgIDxyZGY6bGk%eG1wLmRpZDpCMDlDODc0QTM3REIxMUUwOUExQUVDQjZGOEYzMzcwNzwvcmRmOmxpPgogICAgICAgICAgICAgICA8cmRmOmxpPnhtcC5kaWQ6QjExRDM2MEMyNUYxREYxMTk0NDVBNUZEODk1RDc4MUU8L3JkZjpsaT4KICAgICAgICAgICAgICAgPHJkZjpsaT54bXAuZGlkOkIxODU0REI2QUIzN0UwMTE4QjNEOUQ3NTk2NTZGOTQ4PC9yZGY6bGk%CiAgICAgICAgICAgICAgIDxyZGY6bGk%eG1wLmRpZDpCMjE4Q0I0RTVCMjgxMUUxODZDM0RDMTY0NzEyQTRGNTwvcmRmOmxpPgogICAgICAgICAgICAgICA8cmRmOmxpPnhtcC5kaWQ6QjIxOENCNTI1QjI4MTFFMTg2QzNEQzE2NDcxMkE0RjU8L3JkZjpsaT4KICAgICAgICAgICAgICAgPHJkZjpsaT54bXAuZGlkOkIyMThDQjU2NUIyODExRTE4NkMzREMxNjQ3MTJBNEY1PC9yZGY6bGk%CiAgICAgICAgICAgICAgIDxyZGY6bGk%eG1wLmRpZDpCMkUyNjg0QzQ5MjI2ODExQUIwOEE3RjMwRUU1MzJENzwvcmRmOmxpPgogICAgICAgICAgICAgICA8cmRmOmxpPnhtcC5kaWQ6QjUzNDM2REFFODIwNjgxMTg4Njk4M0RDOEM1QTMwQjM8L3JkZjpsaT4KICAgICAgICAgICAgICAgPHJkZjpsaT54bXAuZGlkOkI1QjBDMjQ2NTE5OERFMTE4NjI2ODYxOUFGN0Q2MTgwPC9yZGY6bGk%CiAgICAgICAgICAgICAgIDxyZGY6bGk%eG1wLmRpZDpCNjA5Rjg2NzNEMjA2ODExOERCQjlBMkJEODdENzkyMTwvcmRmOmxpPgogICAgICAgICAgICAgICA8cmRmOmxpPnhtcC5kaWQ6QjY0NDY4REQyMDIwNjgxMTkyQjBGQjM2ODA4MjVFMjg8L3JkZjpsaT4KICAgICAgICAgICAgICAgPHJkZjpsaT54bXAuZGlkOkI2REIwQjAwN0MyMDY4MTE5N0E1RkVDOTdFMjkzQjU0PC9yZGY6bGk%CiAgICAgICAgICAgICAgIDxyZGY6bGk%eG1wLmRpZDpCNkYyNzExQkJFQkJERjExOTZGNUI0NEQzQTlCRDZGNjwvcmRmOmxpPgogICAgICAgICAgICAgICA8cmRmOmxpPnhtcC5kaWQ6Qjc0QUNFRTNCODIwNjgxMUJGMzA5NDE4N0FGODQyMUM8L3JkZjpsaT4KICAgICAgICAgICAgICAgPHJkZjpsaT54bXAuZGlkOkI3RDA2NTQ5REYyMDY4MTE4NzFGRUM3Qzk2MjkyNkU0PC9yZGY6bGk%CiAgICAgICAgICAgICAgIDxyZGY6bGk%eG1wLmRpZDpCOEI5OTEyQjlBNkZFMTExODYwNUFDNEUzRjBFODE5MTwvcmRmOmxpPgogICAgICAgICAgICAgICA8cmRmOmxpPnhtcC5kaWQ6QjlDOTkyMzg2NTIwNjgxMThEQkJERDM1MTcyNTUzNUY8L3JkZjpsaT4KICAgICAgICAgICAgICAgPHJkZjpsaT54bXAuZGlkOkJBOTAzRTUzMUMyMjY4MTFCODQwRTAwRTZBNEY2RkRDPC9yZGY6bGk%CiAgICAgICAgICAgICAgIDxyZGY6bGk%eG1wLmRpZDpCQjM1NjVFODE1MjA2ODExOTJCMEJBQTkwNERFMEY4RDwvcmRmOmxpPgogICAgICAgICAgICAgICA8cmRmOmxpPnhtcC5kaWQ6QkJEREIzMTJBQjIwNjgxMUFBREFFNTQ5RDYzMzU0OTM8L3JkZjpsaT4KICAgICAgICAgICAgICAgPHJkZjpsaT54bXAuZGlkOkJDQzg5MjQ2MzIyMDY4MTFBMTc4QjQ4NjJBM0FDMkM3PC9yZGY6bGk%CiAgICAgICAgICAgICAgIDxyZGY6bGk%eG1wLmRpZDpCQ0NGRDYwNUU1NkNFMDExOUUzMjk0MjZDNEM1MUZGQzwvcmRmOmxpPgogICAgICAgICAgICAgICA8cmRmOmxpPnhtcC5kaWQ6QkRDMzhBNEEzMTIwNjgxMTkxMDk5Nzg5QjYzRjA0NUE8L3JkZjpsaT4KICAgICAgICAgICAgICAgPHJkZjpsaT54bXAuZGlkOkJERERCMzEyQUIyMDY4MTFBQURBRTU0OUQ2MzM1NDkzPC9yZGY6bGk%CiAgICAgICAgICAgICAgIDxyZGY6bGk%eG1wLmRpZDpCRTgwNUE4MTY0MjA2ODExOTJCMEUzNUE1N0JERDkwOTwvcmRmOmxpPgogICAgICAgICAgICAgICA8cmRmOmxpPnhtcC5kaWQ6QkYwRkYwRTU2MjE1MTFFMDg1QzFEMUY4MEYxNzNDMjM8L3JkZjpsaT4KICAgICAgICAgICAgICAgPHJkZjpsaT54bXAuZGlkOkMwMzA0MEJGREY5MERGMTFBRTgyQ0JBODgwRjEzOEY5PC9yZGY6bGk%CiAgICAgICAgICAgICAgIDxyZGY6bGk%eG1wLmRpZDpDMUE5REYxNERFOUNERjExODgxN0VCRTZFODYxNEQ0OTwvcmRmOmxpPgogICAgICAgICAgICAgICA8cmRmOmxpPnhtcC5kaWQ6QzIzNTY1RTgxNTIwNjgxMTkyQjBCQUE5MDRERTBGOEQ8L3JkZjpsaT4KICAgICAgICAgICAgICAgPHJkZjpsaT54bXAuZGlkOkMyNkMwRDQ5NTI2N0RGMTFCMkU1QzhDQTJBMjBCNTAxPC9yZGY6bGk%CiAgICAgICAgICAgICAgIDxyZGY6bGk%eG1wLmRpZDpDMzczQ0VDMDM2MjA2ODExOEY2MkQwRjcwMTBBQzAyRjwvcmRmOmxpPgogICAgICAgICAgICAgICA8cmRmOmxpPnhtcC5kaWQ6QzM4RjBFQUQ2NzIwNjgxMUEyNkVFRjBBODRCOTA0NEM8L3JkZjpsaT4KICAgICAgICAgICAgICAgPHJkZjpsaT54bXAuZGlkOkM0NzlGMjA0MzBBNkRGMTE5QzNBQjk2RTZCQzgwM0FEPC9yZGY6bGk%CiAgICAgICAgICAgICAgIDxyZGY6bGk%eG1wLmRpZDpDNTIzNTg0QTg1NDFFMDExOTFFOEU3ODA0Njk4MUI4OTwvcmRmOmxpPgogICAgICAgICAgICAgICA8cmRmOmxpPnhtcC5kaWQ6QzU3RjExNzQwNzIwNjgxMUFFNTZGOURGMTQ1REZCOTA8L3JkZjpsaT4KICAgICAgICAgICAgICAgPHJkZjpsaT54bXAuZGlkOkM1N0Y1ODc0Q0UyMDY4MTE4OEM2RkNFN0NDNjA5QzMxPC9yZGY6bGk%CiAgICAgICAgICAgICAgIDxyZGY6bGk%eG1wLmRpZDpDNUU1Mjc0RDBFMjA2ODExODcxRkUwNEU3RkQzQjREQzwvcmRmOmxpPgogICAgICAgICAgICAgICA8cmRmOmxpPnhtcC5kaWQ6QzY2QzBENDk1MjY3REYxMUIyRTVDOENBMkEyMEI1MDE8L3JkZjpsaT4KICAgICAgICAgICAgICAgPHJkZjpsaT54bXAuZGlkOkM3MTEwRTVGNTA3NkRGMTE4RTYxQUNEMTc5RDA2MjQ0PC9yZGY6bGk%CiAgICAgICAgICAgICAgIDxyZGY6bGk%eG1wLmRpZDpDNzdGNTg3NENFMjA2ODExODhDNkZDRTdDQzYwOUMzMTwvcmRmOmxpPgogICAgICAgICAgICAgICA8cmRmOmxpPnhtcC5kaWQ6QzhDM0FEMEY5ODEwRTAxMTlFM0VFRDZEQTUyQkIwMjA8L3JkZjpsaT4KICAgICAgICAgICAgICAgPHJkZjpsaT54bXAuZGlkOkM4RTU4NkRGMzQyMDY4MTFBN0JBRjMxMUNBMEZDM0NEPC9yZGY6bGk%CiAgICAgICAgICAgICAgIDxyZGY6bGk%eG1wLmRpZDpDOTBDOUI2MTVCMjA2ODExODcxRkZDRUIzMzI2NUJDRDwvcmRmOmxpPgogICAgICAgICAgICAgICA8cmRmOmxpPnhtcC5kaWQ6Qzk1MjgxNkQ4MzIwNjgxMUJDQ0RFMTg3QjQ5Q0ExOUM8L3JkZjpsaT4KICAgICAgICAgICAgICAgPHJkZjpsaT54bXAuZGlkOkNBMzE5QTk2Q0IyMDY4MTE4OEM2RkNFN0NDNjA5QzMxPC9yZGY6bGk%CiAgICAgICAgICAgICAgIDxyZGY6bGk%eG1wLmRpZDpDQThCMDM0MzkyMjE2ODExQUI2NUEyMEQ3MDM1NUI2QjwvcmRmOmxpPgogICAgICAgICAgICAgICA8cmRmOmxpPnhtcC5kaWQ6Q0FCMjZCMzM0N0JGREYxMUIyMjdGMjJBQ0REM0Y2OUU8L3JkZjpsaT4KICAgICAgICAgICAgICAgPHJkZjpsaT54bXAuZGlkOkNCN0Y1ODc0Q0UyMDY4MTE4OEM2RkNFN0NDNjA5QzMxPC9yZGY6bGk%CiAgICAgICAgICAgICAgIDxyZGY6bGk%eG1wLmRpZDpDQzQ5QThGQzYxOTVERTExQTk3RkZBQTgxMTQ1NDUyNjwvcmRmOmxpPgogICAgICAgICAgICAgICA8cmRmOmxpPnhtcC5kaWQ6Q0M0QUI1OTFBN0RDREYxMUJGNzlGQTYyQjUxREY2Qzc8L3JkZjpsaT4KICAgICAgICAgICAgICAgPHJkZjpsaT54bXAuZGlkOkNEN0Y1ODc0Q0UyMDY4MTE4OEM2RkNFN0NDNjA5QzMxPC9yZGY6bGk%CiAgICAgICAgICAgICAgIDxyZGY6bGk%eG1wLmRpZDpDREU4OEJDRTRCNkZERjExQjIxOEIwMEQ4NDdEQzI5NzwvcmRmOmxpPgogICAgICAgICAgICAgICA8cmRmOmxpPnhtcC5kaWQ6Q0Y4ODE0NTYwRDIwNjgxMTg3MUY4OTRFQjVCMzIyM0I8L3JkZjpsaT4KICAgICAgICAgICAgICAgPHJkZjpsaT54bXAuZGlkOkQwODM2NjhGNUIyODExRTE4NkMzREMxNjQ3MTJBNEY1PC9yZGY6bGk%CiAgICAgICAgICAgICAgIDxyZGY6bGk%eG1wLmRpZDpEMDgzNjY5MzVCMjgxMUUxODZDM0RDMTY0NzEyQTRGNTwvcmRmOmxpPgogICAgICAgICAgICAgICA8cmRmOmxpPnhtcC5kaWQ6RDA4MzY2OTc1QjI4MTFFMTg2QzNEQzE2NDcxMkE0RjU8L3JkZjpsaT4KICAgICAgICAgICAgICAgPHJkZjpsaT54bXAuZGlkOkQyM0U3NjFFQzQyMDY4MTE5MTA5QUNDQUY4MDg1OUY0PC9yZGY6bGk%CiAgICAgICAgICAgICAgIDxyZGY6bGk%eG1wLmRpZDpEMjk2ODgwNTA4MjA2ODExOTk0Q0VEMkVEMDY4RkE1NDwvcmRmOmxpPgogICAgICAgICAgICAgICA8cmRmOmxpPnhtcC5kaWQ6RDM0NTFCODAxRTI1REYxMUJBQjlDMThDQURCQjcxQjg8L3JkZjpsaT4KICAgICAgICAgICAgICAgPHJkZjpsaT54bXAuZGlkOkQ0MDU0RUMxMTkyMDY4MTE5MkIwQkFBOTA0REUwRjhEPC9yZGY6bGk%CiAgICAgICAgICAgICAgIDxyZGY6bGk%eG1wLmRpZDpENDkzRDUwMTQwMjA2ODExOTVGRUJCODc4RDk0MjI1RDwvcmRmOmxpPgogICAgICAgICAgICAgICA8cmRmOmxpPnhtcC5kaWQ6RDZGNjg3MUU0OTIwNjgxMThBNkRGQkUwNDVENDkzOUE8L3JkZjpsaT4KICAgICAgICAgICAgICAgPHJkZjpsaT54bXAuZGlkOkQ3OUQyNDQ3MTUyMDY4MTE4OEM2QURDOUVFQzEyODY3PC9yZGY6bGk%CiAgICAgICAgICAgICAgIDxyZGY6bGk%eG1wLmRpZDpEQTZFNjg5QzIwMjA2ODExODcxRkZCNkJCRTdGNkVERjwvcmRmOmxpPgogICAgICAgICAgICAgICA8cmRmOmxpPnhtcC5kaWQ6REFBMUQxOThBREI2REYxMUJDRkQ5M0U3NkEwREMyRjQ8L3JkZjpsaT4KICAgICAgICAgICAgICAgPHJkZjpsaT54bXAuZGlkOkRBQjJBMkY5RkI3NkRFMTFCQUY1RTE0M0IwQjg2RkYxPC9yZGY6bGk%CiAgICAgICAgICAgICAgIDxyZGY6bGk%eG1wLmRpZDpEQUM4NTA3ODU0RDVERjExQTA5NERGMDFFNkVERTMyMDwvcmRmOmxpPgogICAgICAgICAgICAgICA8cmRmOmxpPnhtcC5kaWQ6REIxRTRDMUNFODdBREYxMThDQjdGRUE3Q0Q3NEQzNUI8L3JkZjpsaT4KICAgICAgICAgICAgICAgPHJkZjpsaT54bXAuZGlkOkRCNkJDODYwMzkyMTY4MTE4RjYyRjYzOEVBMjZEREREPC9yZGY6bGk%CiAgICAgICAgICAgICAgIDxyZGY6bGk%eG1wLmRpZDpERTM4MkIzQjlENjhERjExQUVDMUM4MkIwNTBGODk1NTwvcmRmOmxpPgogICAgICAgICAgICAgICA8cmRmOmxpPnhtcC5kaWQ6RTAxRTlGNEY0RUExMTFFMDkyMjBEOUVEOTc2ODlBMjA8L3JkZjpsaT4KICAgICAgICAgICAgICAgPHJkZjpsaT54bXAuZGlkOkUwMkMxOTBFNDI2RURGMTFCMjRERTkwOEFDQ0FDMDk1PC9yZGY6bGk%CiAgICAgICAgICAgICAgIDxyZGY6bGk%eG1wLmRpZDpFMDZGNzg2REZDQjFERjExOThERkIyMEY5MEQzQUE2RTwvcmRmOmxpPgogICAgICAgICAgICAgICA8cmRmOmxpPnhtcC5kaWQ6RTA3OUQ2ODZFMUNFMTFERkJFQ0REMkRERTBCNzE4NTE8L3JkZjpsaT4KICAgICAgICAgICAgICAgPHJkZjpsaT54bXAuZGlkOkUwRTMyQTgzM0MyMDY4MTE4OEM2QkVCNzA1NjIwMkREPC9yZGY6bGk%CiAgICAgICAgICAgICAgIDxyZGY6bGk%eG1wLmRpZDpFMkYyNkZGNDVEQkZFMTExQjk5REY4RTc2RjlBQkY3NDwvcmRmOmxpPgogICAgICAgICAgICAgICA8cmRmOmxpPnhtcC5kaWQ6RTMwRTQ5MDJCQUNGREYxMUIxNEVFRDg4RDQ4QTEyQzI8L3JkZjpsaT4KICAgICAgICAgICAgICAgPHJkZjpsaT54bXAuZGlkOkU0Mjg4MkU4RjZGMjExREZBNDE4QUUwQjNBODcyNDlGPC9yZGY6bGk%CiAgICAgICAgICAgICAgIDxyZGY6bGk%eG1wLmRpZDpFNEY2Q0ZBMDJGMjA2ODExOEY2MkI1MjBBNUVFNDRDRDwvcmRmOmxpPgogICAgICAgICAgICAgICA8cmRmOmxpPnhtcC5kaWQ6RTUxMjBDOUMwRTZCREYxMUI0RjE4NzU4RUNCMzAyNkI8L3JkZjpsaT4KICAgICAgICAgICAgICAgPHJkZjpsaT54bXAuZGlkOkU1QTFFQzM3MjIyMDY4MTE5OEE3RThBOUZDNzU3NzNEPC9yZGY6bGk%CiAgICAgICAgICAgICAgIDxyZGY6bGk%eG1wLmRpZDpFNkFBOTE1QjI1MjA2ODExODhDNkJEM0MwRTQzMjlGRTwvcmRmOmxpPgogICAgICAgICAgICAgICA8cmRmOmxpPnhtcC5kaWQ6RTZFRUFDNjYzODIwNjgxMTkxMDlFNEE0M0NFNTMwRDA8L3JkZjpsaT4KICAgICAgICAgICAgICAgPHJkZjpsaT54bXAuZGlkOkU3NDdDMEY4MEY2NURGMTE5QTk0QzVEOEQxODg5NTVCPC9yZGY6bGk%CiAgICAgICAgICAgICAgIDxyZGY6bGk%eG1wLmRpZDpFNzk0MDc4RERFNjRERjExOEE1M0Q0RUZFMjBDMzUxODwvcmRmOmxpPgogICAgICAgICAgICAgICA8cmRmOmxpPnhtcC5kaWQ6RTdERDUyNjQxQTE5RTAxMTk1RjFCQTQ3NEYyQzBCQUU8L3JkZjpsaT4KICAgICAgICAgICAgICAgPHJkZjpsaT54bXAuZGlkOkU3RUVBQzY2MzgyMDY4MTE5MTA5RTRBNDNDRTUzMEQwPC9yZGY6bGk%CiAgICAgICAgICAgICAgIDxyZGY6bGk%eG1wLmRpZDpFN0Y5RkNGMTIwRUJERTExQTFCRUI5RjQ5NjI4NEFEODwvcmRmOmxpPgogICAgICAgICAgICAgICA8cmRmOmxpPnhtcC5kaWQ6RTgwMTdCRDU1QTM5MTFFMEE5RDQ5QTlFQkZFNzg0MjQ8L3JkZjpsaT4KICAgICAgICAgICAgICAgPHJkZjpsaT54bXAuZGlkOkU4QUE5MTVCMjUyMDY4MTE4OEM2QkQzQzBFNDMyOUZFPC9yZGY6bGk%CiAgICAgICAgICAgICAgIDxyZGY6bGk%eG1wLmRpZDpFOEMxNTYwRTkyMTdFMDExQUZGQkE2NTQxOUFGMTBDQjwvcmRmOmxpPgogICAgICAgICAgICAgICA8cmRmOmxpPnhtcC5kaWQ6RTk2QzNBREYyMjQ0RTAxMUEyQzJEMEIwQjkyQzc3Mjc8L3JkZjpsaT4KICAgICAgICAgICAgICAgPHJkZjpsaT54bXAuZGlkOkVBQUE5MTVCMjUyMDY4MTE4OEM2QkQzQzBFNDMyOUZFPC9yZGY6bGk%CiAgICAgICAgICAgICAgIDxyZGY6bGk%eG1wLmRpZDpFQUUwMkZBODhCMjA2ODExOEY2MkEwMTA4MEFEMEQ4MTwvcmRmOmxpPgogICAgICAgICAgICAgICA8cmRmOmxpPnhtcC5kaWQ6RUJBMEM1Q0QxQjIwNjgxMTg3MUZGQjZCQkU3RjZFREY8L3JkZjpsaT4KICAgICAgICAgICAgICAgPHJkZjpsaT54bXAuZGlkOkVDQUE5MTVCMjUyMDY4MTE4OEM2QkQzQzBFNDMyOUZFPC9yZGY6bGk%CiAgICAgICAgICAgICAgIDxyZGY6bGk%eG1wLmRpZDpFRDdGMTE3NDA3MjA2ODExQTIyOUE5QjJGNzU5M0QyRTwvcmRmOmxpPgogICAgICAgICAgICAgICA8cmRmOmxpPnhtcC5kaWQ6RUU5RkQyOTEzRDM4MTFFMDk5RTJFMjNBQkEzQUFDRDg8L3JkZjpsaT4KICAgICAgICAgICAgICAgPHJkZjpsaT54bXAuZGlkOkVFQzE1NjBFOTIxN0UwMTFBRkZCQTY1NDE5QUYxMENCPC9yZGY6bGk%CiAgICAgICAgICAgICAgIDxyZGY6bGk%eG1wLmRpZDpFRjE1Nzg1QzU4MjA2ODExODcxRkM5RjQwNTFDRUFFMTwvcmRmOmxpPgogICAgICAgICAgICAgICA8cmRmOmxpPnhtcC5kaWQ6RUY4NDQxQzA2NUU3REYxMUI4QUJCQkY3RkZBNkIwQzQ8L3JkZjpsaT4KICAgICAgICAgICAgICAgPHJkZjpsaT54bXAuZGlkOkVGQzlEMUQ0NzdCMERGMTE4QjQzQ0Y2N0JFM0M5RjdEPC9yZGY6bGk%CiAgICAgICAgICAgICAgIDxyZGY6bGk%eG1wLmRpZDpFRkZBM0M2RjU1MjA2ODExOEE2REUzQUM5QTRFMDgyRTwvcmRmOmxpPgogICAgICAgICAgICAgICA8cmRmOmxpPnhtcC5kaWQ6RjAyMDI1MkQ0MDIwNjgxMTg3MUZFOEREMjM0MEMwQjA8L3JkZjpsaT4KICAgICAgICAgICAgICAgPHJkZjpsaT54bXAuZGlkOkYwNEQzNUM2NDJCOERGMTE4Q0VBOUU1MkUxRDBGQUI4PC9yZGY6bGk%CiAgICAgICAgICAgICAgIDxyZGY6bGk%eG1wLmRpZDpGMDVFNTFEQzVCMjgxMUUxODZDM0RDMTY0NzEyQTRGNTwvcmRmOmxpPgogICAgICAgICAgICAgICA8cmRmOmxpPnhtcC5kaWQ6RjA1RTUxRTA1QjI4MTFFMTg2QzNEQzE2NDcxMkE0RjU8L3JkZjpsaT4KICAgICAgICAgICAgICAgPHJkZjpsaT54bXAuZGlkOkYwQ0FBOERDREU0NURGMTE4OEQ4QjUyRjM2RkIyNkZBPC9yZGY6bGk%CiAgICAgICAgICAgICAgIDxyZGY6bGk%eG1wLmRpZDpGNTQyMDVERjdFRjdERDExQjcyQkM1NkQ1OEE2Mzg3NjwvcmRmOmxpPgogICAgICAgICAgICAgICA8cmRmOmxpPnhtcC5kaWQ6RjU1NTNBODAwQzIwNjgxMThGNjJBNTg2N0MyNjI0QkQ8L3JkZjpsaT4KICAgICAgICAgICAgICAgPHJkZjpsaT54bXAuZGlkOkY1NzMzN0ZBMUQyMDY4MTE4MDgzODREMEYxRDY2OUUxPC9yZGY6bGk%CiAgICAgICAgICAgICAgIDxyZGY6bGk%eG1wLmRpZDpGNUM4QkMwQzE0NEZFMDExOTM2RUI5MDRBNjM5MEMxNTwvcmRmOmxpPgogICAgICAgICAgICAgICA8cmRmOmxpPnhtcC5kaWQ6RjVDOTQ5RDRGQjY4REYxMUJCMjc5Rjk4RjA2NzM2MEE8L3JkZjpsaT4KICAgICAgICAgICAgICAgPHJkZjpsaT54bXAuZGlkOkY2NTM5OEVFMEI2QUUwMTFBMTYxQTdGRTA3ODAwNjNBPC9yZGY6bGk%CiAgICAgICAgICAgICAgIDxyZGY6bGk%eG1wLmRpZDpGNzUzRTlDNkRGNzFFMTExQUM0RThGNDA4RjY0RDhCMzwvcmRmOmxpPgogICAgICAgICAgICAgICA8cmRmOmxpPnhtcC5kaWQ6Rjc1RDkxOEExMTIwNjgxMTkyQjA4QkVFMjlDNzVERDI8L3JkZjpsaT4KICAgICAgICAgICAgICAgPHJkZjpsaT54bXAuZGlkOkY3NzJEMkNFNjVBOURGMTFBREVCODI0RDNDNjI1RjU4PC9yZGY6bGk%CiAgICAgICAgICAgICAgIDxyZGY6bGk%eG1wLmRpZDpGNzc0RjlGRERBMjA2ODExODU3RUY1MUQ3ODg4Njk5NjwvcmRmOmxpPgogICAgICAgICAgICAgICA8cmRmOmxpPnhtcC5kaWQ6Rjc3RjExNzQwNzIwNjgxMTgwODM4RkJBRDEyOUYyMzk8L3JkZjpsaT4KICAgICAgICAgICAgICAgPHJkZjpsaT54bXAuZGlkOkY3N0YxMTc0MDcyMDY4MTE4MDgzRjVDMUY0QUU5NjIxPC9yZGY6bGk%CiAgICAgICAgICAgICAgIDxyZGY6bGk%eG1wLmRpZDpGNzdGMTE3NDA3MjA2ODExODcxRkQ2QzZCM0E1MUREMDwvcmRmOmxpPgogICAgICAgICAgICAgICA8cmRmOmxpPnhtcC5kaWQ6Rjc3RjExNzQwNzIwNjgxMTg4QzZCMDdDQzk1QzA1Mzg8L3JkZjpsaT4KICAgICAgICAgICAgICAgPHJkZjpsaT54bXAuZGlkOkY3N0YxMTc0MDcyMDY4MTE4OEM2QjMwQTI1OThCMjQ4PC9yZGY6bGk%CiAgICAgICAgICAgICAgIDxyZGY6bGk%eG1wLmRpZDpGNzdGMTE3NDA3MjA2ODExOEE2RDkwRTFGQ0VBQUM1NTwvcmRmOmxpPgogICAgICAgICAgICAgICA8cmRmOmxpPnhtcC5kaWQ6Rjc3RjExNzQwNzIwNjgxMThBNkRGNDMzODc1MDBDMjE8L3JkZjpsaT4KICAgICAgICAgICAgICAgPHJkZjpsaT54bXAuZGlkOkY3N0YxMTc0MDcyMDY4MTE4REJCODNFQzhGRTc2QTY5PC9yZGY6bGk%CiAgICAgICAgICAgICAgIDxyZGY6bGk%eG1wLmRpZDpGNzdGMTE3NDA3MjA2ODExOERCQkRBN0I4NjhCMTI0MDwvcmRmOmxpPgogICAgICAgICAgICAgICA8cmRmOmxpPnhtcC5kaWQ6Rjc3RjExNzQwNzIwNjgxMThEQkJGMDg2MEY3RURFRjA8L3JkZjpsaT4KICAgICAgICAgICAgICAgPHJkZjpsaT54bXAuZGlkOkY3N0YxMTc0MDcyMDY4MTE4RjQyRjFEODEwODAyNEYxPC9yZGY6bGk%CiAgICAgICAgICAgICAgIDxyZGY6bGk%eG1wLmRpZDpGNzdGMTE3NDA3MjA2ODExOTEwOUM3MUNGNkQ5RTJBNDwvcmRmOmxpPgogICAgICAgICAgICAgICA8cmRmOmxpPnhtcC5kaWQ6Rjc3RjExNzQwNzIwNjgxMTkxMDlFNjI2QjRFRDFDM0U8L3JkZjpsaT4KICAgICAgICAgICAgICAgPHJkZjpsaT54bXAuZGlkOkY3N0YxMTc0MDcyMDY4MTE5MTA5RjQyMjAwMDYwNTUxPC9yZGY6bGk%CiAgICAgICAgICAgICAgIDxyZGY6bGk%eG1wLmRpZDpGNzdGMTE3NDA3MjA2ODExOTEwOUY4RkUyNzcxOEQ1QTwvcmRmOmxpPgogICAgICAgICAgICAgICA8cmRmOmxpPnhtcC5kaWQ6Rjc3RjExNzQwNzIwNjgxMTkyQjBDMDRFQjkxNjk1MkU8L3JkZjpsaT4KICAgICAgICAgICAgICAgPHJkZjpsaT54bXAuZGlkOkY3N0YxMTc0MDcyMDY4MTE5NDU3QkM0NEMxRDg1NUNGPC9yZGY6bGk%CiAgICAgICAgICAgICAgIDxyZGY6bGk%eG1wLmRpZDpGNzdGMTE3NDA3MjA2ODExOTVGRUE0RDQ3NENFQzNBMjwvcmRmOmxpPgogICAgICAgICAgICAgICA8cmRmOmxpPnhtcC5kaWQ6Rjc3RjExNzQwNzIwNjgxMTlGQkI4NjNGRDVEMDY2MkI8L3JkZjpsaT4KICAgICAgICAgICAgICAgPHJkZjpsaT54bXAuZGlkOkY3N0YxMTc0MDcyMDY4MTFBMTc4QjQ4NjJBM0FDMkM3PC9yZGY6bGk%CiAgICAgICAgICAgICAgIDxyZGY6bGk%eG1wLmRpZDpGNzdGMTE3NDA3MjA2ODExQTFBRkI0MUU5RDBFRjZCOTwvcmRmOmxpPgogICAgICAgICAgICAgICA8cmRmOmxpPnhtcC5kaWQ6Rjc3RjExNzQwNzIwNjgxMUE2MTNGQzA3QzNENEVFQkE8L3JkZjpsaT4KICAgICAgICAgICAgICAgPHJkZjpsaT54bXAuZGlkOkY3N0YxMTc0MDcyMDY4MTFCQjhEOTEyQ0MxNEU1QzgwPC9yZGY6bGk%CiAgICAgICAgICAgICAgIDxyZGY6bGk%eG1wLmRpZDpGNzdGMTE3NDA3MjA2ODExQkRFQURFNjVBMzAzOUVDOTwvcmRmOmxpPgogICAgICAgICAgICAgICA8cmRmOmxpPnhtcC5kaWQ6Rjc3RjExNzQwNzIwNjgxMUJGOEVBQTZFMkNGNjI1NEE8L3JkZjpsaT4KICAgICAgICAgICAgICAgPHJkZjpsaT54bXAuZGlkOkY3QTI3MEMyQTdBM0RGMTE5RjEzOUI5NTIyNTFCOTkxPC9yZGY6bGk%CiAgICAgICAgICAgICAgIDxyZGY6bGk%eG1wLmRpZDpGODA2RkQxMzNGOEZERjExQTNCRUIyMzI2OTU3NDkyNDwvcmRmOmxpPgogICAgICAgICAgICAgICA8cmRmOmxpPnhtcC5kaWQ6Rjg1NTNBODAwQzIwNjgxMThGNjJBNTg2N0MyNjI0QkQ8L3JkZjpsaT4KICAgICAgICAgICAgICAgPHJkZjpsaT54bXAuZGlkOkY4N0YxMTc0MDcyMDY4MTE4MDgzODREMEYxRDY2OUUxPC9yZGY6bGk%CiAgICAgICAgICAgICAgIDxyZGY6bGk%eG1wLmRpZDpGODdGMTE3NDA3MjA2ODExODA4Mzg2Rjc3NEVEQTc1NzwvcmRmOmxpPgogICAgICAgICAgICAgICA8cmRmOmxpPnhtcC5kaWQ6Rjg3RjExNzQwNzIwNjgxMTgwODM5OTMzMTgxMEM3OTA8L3JkZjpsaT4KICAgICAgICAgICAgICAgPHJkZjpsaT54bXAuZGlkOkY4N0YxMTc0MDcyMDY4MTE4RjYyQTQ0Q0U0REY2OUE4PC9yZGY6bGk%CiAgICAgICAgICAgICAgIDxyZGY6bGk%eG1wLmRpZDpGODdGMTE3NDA3MjA2ODExQTEzOEQ4Mzc0OTBFNjQzNzwvcmRmOmxpPgogICAgICAgICAgICAgICA8cmRmOmxpPnhtcC5kaWQ6Rjg3RjExNzQwNzIwNjgxMUFDNThDNjlENDY3MTIzODM8L3JkZjpsaT4KICAgICAgICAgICAgICAgPHJkZjpsaT54bXAuZGlkOkY4N0YxMTc0MDcyMDY4MTFCOUIxREUzREY2OTM3MDhGPC9yZGY6bGk%CiAgICAgICAgICAgICAgIDxyZGY6bGk%eG1wLmRpZDpGOEIxMjAwRUM4MjA2ODExOEY2MkI1NUM5NEI1RjFDQTwvcmRmOmxpPgogICAgICAgICAgICAgICA8cmRmOmxpPnhtcC5kaWQ6Rjk3NEQ4QUQ1MEUzREUxMTlCOThBMEQxRkNCQTE0NDQ8L3JkZjpsaT4KICAgICAgICAgICAgICAgPHJkZjpsaT54bXAuZGlkOkY5N0YxMTc0MDcyMDY4MTE4MDgzRUI4M0M2MkJEN0MxPC9yZGY6bGk%CiAgICAgICAgICAgICAgIDxyZGY6bGk%eG1wLmRpZDpGOTdGMTE3NDA3MjA2ODExODcxRkMxNEI1MDQyNTY0NDwvcmRmOmxpPgogICAgICAgICAgICAgICA8cmRmOmxpPnhtcC5kaWQ6Rjk3RjExNzQwNzIwNjgxMTg3MUZFQjhEQjgyNEEyM0M8L3JkZjpsaT4KICAgICAgICAgICAgICAgPHJkZjpsaT54bXAuZGlkOkY5N0YxMTc0MDcyMDY4MTE4QTZERjFFQjI1OUM2QzI5PC9yZGY6bGk%CiAgICAgICAgICAgICAgIDxyZGY6bGk%eG1wLmRpZDpGOUQyQkMwQTAzOThERjExOEUwREZCQ0MzOUYxRDcwQzwvcmRmOmxpPgogICAgICAgICAgICAgICA8cmRmOmxpPnhtcC5kaWQ6RkExMzBERjgzMjIxNjgxMUI2RDA5MzQ5Q0NGNEJENDg8L3JkZjpsaT4KICAgICAgICAgICAgICAgPHJkZjpsaT54bXAuZGlkOkZBMjdBMkVBNTIyMTY4MTE4RjYyQkVCMDZDQjg0MDAzPC9yZGY6bGk%CiAgICAgICAgICAgICAgIDxyZGY6bGk%eG1wLmRpZDpGQTUzRTlDNkRGNzFFMTExQUM0RThGNDA4RjY0RDhCMzwvcmRmOmxpPgogICAgICAgICAgICAgICA8cmRmOmxpPnhtcC5kaWQ6RkE3RjExNzQwNzIwNjgxMThCNTVEODEyMkJENEJCREE8L3JkZjpsaT4KICAgICAgICAgICAgICAgPHJkZjpsaT54bXAuZGlkOkZBN0YxMTc0MDcyMDY4MTE5MTA5ODM2QjdBMzQ3QTc5PC9yZGY6bGk%CiAgICAgICAgICAgICAgIDxyZGY6bGk%eG1wLmRpZDpGQTdGMTE3NDA3MjA2ODExQTk2NEEzMURDNTZEREYyRjwvcmRmOmxpPgogICAgICAgICAgICAgICA8cmRmOmxpPnhtcC5kaWQ6RkIwQjQxOERGODc4RTExMUJDMjBGOUE0Mjc0OTJEQUM8L3JkZjpsaT4KICAgICAgICAgICAgICAgPHJkZjpsaT54bXAuZGlkOkZCN0YxMTc0MDcyMDY4MTE5N0E1OEM4N0I1OEY0RDY4PC9yZGY6bGk%CiAgICAgICAgICAgICAgIDxyZGY6bGk%eG1wLmRpZDpGQjdGMTE3NDA3MjA2ODExQUIwOEQ5NUVDRDI4NzA0NDwvcmRmOmxpPgogICAgICAgICAgICAgICA8cmRmOmxpPnhtcC5kaWQ6RkJDNEQyMDQwQTIwNjgxMTkxMDlDQzY0MkM0NEVDMEM8L3JkZjpsaT4KICAgICAgICAgICAgICAgPHJkZjpsaT54bXAuZGlkOkZCRjAwMzBCRDA5NERGMTFCOTI0RkZDOTY0RjJGMEFFPC9yZGY6bGk%CiAgICAgICAgICAgICAgIDxyZGY6bGk%eG1wLmRpZDpGQkY5OUVCNzU2N0RERjExQTc0RUU2Q0UwMzk5NDQyMjwvcmRmOmxpPgogICAgICAgICAgICAgICA8cmRmOmxpPnhtcC5kaWQ6RkM3RjExNzQwNzIwNjgxMThEQkJBQTY1MEYzRDkxOTg8L3JkZjpsaT4KICAgICAgICAgICAgICAgPHJkZjpsaT54bXAuZGlkOkZDN0YxMTc0MDcyMDY4MTE5RjM2OTRDMTMxMTJENThBPC9yZGY6bGk%CiAgICAgICAgICAgICAgIDxyZGY6bGk%eG1wLmRpZDpGRDUzRTlDNkRGNzFFMTExQUM0RThGNDA4RjY0RDhCMzwvcmRmOmxpPgogICAgICAgICAgICAgICA8cmRmOmxpPnhtcC5kaWQ6RkQ3RjExNzQwNzIwNjgxMTgyRkU5OEVGN0YxOEJGMUQ8L3JkZjpsaT4KICAgICAgICAgICAgICAgPHJkZjpsaT54bXAuZGlkOkZEN0YxMTc0MDcyMDY4MTE4REJCRTQ4RjY2N0MwNjlBPC9yZGY6bGk%CiAgICAgICAgICAgICAgIDxyZGY6bGk%eG1wLmRpZDpGRTY5RUQ1NTNEMjA2ODExQjZGOUQ3QTI4RTUzRDU3NzwvcmRmOmxpPgogICAgICAgICAgICAgICA8cmRmOmxpPnhtcC5kaWQ6RkU2QUEwOTgxODIwNjgxMTg3MUZDOUY0MDUxQ0VBRTE8L3JkZjpsaT4KICAgICAgICAgICAgICAgPHJkZjpsaT54bXAuZGlkOkZFN0YxMTc0MDcyMDY4MTE5MkIwRDcyMzc2OEQwQ0U2PC9yZGY6bGk%CiAgICAgICAgICAgICAgIDxyZGY6bGk%eG1wLmRpZDpGRUM1MkQzOTc2NjNERjExQjI2MTk0REQxMzQyN0Y4QjwvcmRmOmxpPgogICAgICAgICAgICAgICA8cmRmOmxpPnhtcC5kaWQ6RkYzODE5RjYxNzIwNjgxMThGNjJENjNCQzlBRUM3RDE8L3JkZjpsaT4KICAgICAgICAgICAgICAgPHJkZjpsaT54bXAuZGlkOkZGNTc2OTNBMDE4RURGMTFCRUJCODM1QTNBMUQzQ0FFPC9yZGY6bGk%CiAgICAgICAgICAgICAgIDxyZGY6bGk%eG1wLmRpZDpGRkEwN0IwMEFBNzlFMTExQjRERDk0QkMzMDExQzQwMjwvcmRmOmxpPgogICAgICAgICAgICAgICA8cmRmOmxpPnhtcC5kaWQ6YmE4YzM3YzctYjE3My05NDQwLWFkY2MtYjY0MTQ3Zjk1YTU4PC9yZGY6bGk%CiAgICAgICAgICAgICAgIDxyZGY6bGk%eG1wLmRpZDplNDMxZTZmNi1jZGM3LTM5NDYtYTMyYi03ZWE0N2JlNTljMjc8L3JkZjpsaT4KICAgICAgICAgICAgPC9yZGY6QmFnPgogICAgICAgICA8L3Bob3Rvc2hvcDpEb2N1bWVudEFuY2VzdG9ycz4KICAgICAgICAgPHhtcE1NOkluc3RhbmNlSUQ%eG1wLmlpZDphMjc4OTg2NC0xYWQwLTkxNDEtYmY1Yy0xZTYyODQ3MGVkZWM8L3htcE1NOkluc3RhbmNlSUQ%CiAgICAgICAgIDx4bXBNTTpEb2N1bWVudElEPnhtcC5kaWQ6QkNDRkQ2MDVFNTZDRTAxMTlFMzI5NDI2QzRDNTFGRkM8L3htcE1NOkRvY3VtZW50SUQ%CiAgICAgICAgIDx4bXBNTTpPcmlnaW5hbERvY3VtZW50SUQ%eG1wLmRpZDpCQ0NGRDYwNUU1NkNFMDExOUUzMjk0MjZDNEM1MUZGQzwveG1wTU06T3JpZ2luYWxEb2N1bWVudElEPgogICAgICAgICA8eG1wTU06SGlzdG9yeT4KICAgICAgICAgICAgPHJkZjpTZXE%CiAgICAgICAgICAgICAgIDxyZGY6bGkgcmRmOnBhcnNlVHlwZT0iUmVzb3VyY2UiPgogICAgICAgICAgICAgICAgICA8c3RFdnQ6YWN0aW9uPmNyZWF0ZWQ8L3N0RXZ0OmFjdGlvbj4KICAgICAgICAgICAgICAgICAgPHN0RXZ0Omluc3RhbmNlSUQ%eG1wLmlpZDpCQ0NGRDYwNUU1NkNFMDExOUUzMjk0MjZDNEM1MUZGQzwvc3RFdnQ6aW5zdGFuY2VJRD4KICAgICAgICAgICAgICAgICAgPHN0RXZ0OndoZW4%MjAxMS0wNC0yMFQxODo0OTo0OCswMzowMDwvc3RFdnQ6d2hlbj4KICAgICAgICAgICAgICAgICAgPHN0RXZ0OnNvZnR3YXJlQWdlbnQ%QWRvYmUgUGhvdG9zaG9wIENTNSBXaW5kb3dzPC9zdEV2dDpzb2Z0d2FyZUFnZW50PgogICAgICAgICAgICAgICA8L3JkZjpsaT4KICAgICAgICAgICAgICAgPHJkZjpsaSByZGY6cGFyc2VUeXBlPSJSZXNvdXJjZSI%CiAgICAgICAgICAgICAgICAgIDxzdEV2dDphY3Rpb24%c2F2ZWQ8L3N0RXZ0OmFjdGlvbj4KICAgICAgICAgICAgICAgICAgPHN0RXZ0Omluc3RhbmNlSUQ%eG1wLmlpZDpCRENGRDYwNUU1NkNFMDExOUUzMjk0MjZDNEM1MUZGQzwvc3RFdnQ6aW5zdGFuY2VJRD4KICAgICAgICAgICAgICAgICAgPHN0RXZ0OndoZW4%MjAxMS0wNC0yMlQxODozOTo0OCswMzowMDwvc3RFdnQ6d2hlbj4KICAgICAgICAgICAgICAgICAgPHN0RXZ0OnNvZnR3YXJlQWdlbnQ%QWRvYmUgUGhvdG9zaG9wIENTNSBXaW5kb3dzPC9zdEV2dDpzb2Z0d2FyZUFnZW50PgogICAgICAgICAgICAgICAgICA8c3RFdnQ6Y2hhbmdlZD4vPC9zdEV2dDpjaGFuZ2VkPgogICAgICAgICAgICAgICA8L3JkZjpsaT4KICAgICAgICAgICAgICAgPHJkZjpsaSByZGY6cGFyc2VUeXBlPSJSZXNvdXJjZSI%CiAgICAgICAgICAgICAgICAgIDxzdEV2dDphY3Rpb24%c2F2ZWQ8L3N0RXZ0OmFjdGlvbj4KICAgICAgICAgICAgICAgICAgPHN0RXZ0Omluc3RhbmNlSUQ%eG1wLmlpZDpCRUNGRDYwNUU1NkNFMDExOUUzMjk0MjZDNEM1MUZGQzwvc3RFdnQ6aW5zdGFuY2VJRD4KICAgICAgICAgICAgICAgICAgPHN0RXZ0OndoZW4%MjAxMS0wNC0yMlQxODo0MDoyMiswMzowMDwvc3RFdnQ6d2hlbj4KICAgICAgICAgICAgICAgICAgPHN0RXZ0OnNvZnR3YXJlQWdlbnQ%QWRvYmUgUGhvdG9zaG9wIENTNSBXaW5kb3dzPC9zdEV2dDpzb2Z0d2FyZUFnZW50PgogICAgICAgICAgICAgICAgICA8c3RFdnQ6Y2hhbmdlZD4vPC9zdEV2dDpjaGFuZ2VkPgogICAgICAgICAgICAgICA8L3JkZjpsaT4KICAgICAgICAgICAgICAgPHJkZjpsaSByZGY6cGFyc2VUeXBlPSJSZXNvdXJjZSI%CiAgICAgICAgICAgICAgICAgIDxzdEV2dDphY3Rpb24%c2F2ZWQ8L3N0RXZ0OmFjdGlvbj4KICAgICAgICAgICAgICAgICAgPHN0RXZ0Omluc3RhbmNlSUQ%eG1wLmlpZDpCRkNGRDYwNUU1NkNFMDExOUUzMjk0MjZDNEM1MUZGQzwvc3RFdnQ6aW5zdGFuY2VJRD4KICAgICAgICAgICAgICAgICAgPHN0RXZ0OndoZW4%MjAxMS0wNC0yMlQxODo0MjoxMyswMzowMDwvc3RFdnQ6d2hlbj4KICAgICAgICAgICAgICAgICAgPHN0RXZ0OnNvZnR3YXJlQWdlbnQ%QWRvYmUgUGhvdG9zaG9wIENTNSBXaW5kb3dzPC9zdEV2dDpzb2Z0d2FyZUFnZW50PgogICAgICAgICAgICAgICAgICA8c3RFdnQ6Y2hhbmdlZD4vPC9zdEV2dDpjaGFuZ2VkPgogICAgICAgICAgICAgICA8L3JkZjpsaT4KICAgICAgICAgICAgICAgPHJkZjpsaSByZGY6cGFyc2VUeXBlPSJSZXNvdXJjZSI%CiAgICAgICAgICAgICAgICAgIDxzdEV2dDphY3Rpb24%c2F2ZWQ8L3N0RXZ0OmFjdGlvbj4KICAgICAgICAgICAgICAgICAgPHN0RXZ0Omluc3RhbmNlSUQ%eG1wLmlpZDpDMENGRDYwNUU1NkNFMDExOUUzMjk0MjZDNEM1MUZGQzwvc3RFdnQ6aW5zdGFuY2VJRD4KICAgICAgICAgICAgICAgICAgPHN0RXZ0OndoZW4%MjAxMS0wNC0yMlQxODo0Mjo1NiswMzowMDwvc3RFdnQ6d2hlbj4KICAgICAgICAgICAgICAgICAgPHN0RXZ0OnNvZnR3YXJlQWdlbnQ%QWRvYmUgUGhvdG9zaG9wIENTNSBXaW5kb3dzPC9zdEV2dDpzb2Z0d2FyZUFnZW50PgogICAgICAgICAgICAgICAgICA8c3RFdnQ6Y2hhbmdlZD4vPC9zdEV2dDpjaGFuZ2VkPgogICAgICAgICAgICAgICA8L3JkZjpsaT4KICAgICAgICAgICAgICAgPHJkZjpsaSByZGY6cGFyc2VUeXBlPSJSZXNvdXJjZSI%CiAgICAgICAgICAgICAgICAgIDxzdEV2dDphY3Rpb24%c2F2ZWQ8L3N0RXZ0OmFjdGlvbj4KICAgICAgICAgICAgICAgICAgPHN0RXZ0Omluc3RhbmNlSUQ%eG1wLmlpZDpDMkNGRDYwNUU1NkNFMDExOUUzMjk0MjZDNEM1MUZGQzwvc3RFdnQ6aW5zdGFuY2VJRD4KICAgICAgICAgICAgICAgICAgPHN0RXZ0OndoZW4%MjAxMS0wNC0yMlQxOToxMzo1MSswMzowMDwvc3RFdnQ6d2hlbj4KICAgICAgICAgICAgICAgICAgPHN0RXZ0OnNvZnR3YXJlQWdlbnQ%QWRvYmUgUGhvdG9zaG9wIENTNSBXaW5kb3dzPC9zdEV2dDpzb2Z0d2FyZUFnZW50PgogICAgICAgICAgICAgICAgICA8c3RFdnQ6Y2hhbmdlZD4vPC9zdEV2dDpjaGFuZ2VkPgogICAgICAgICAgICAgICA8L3JkZjpsaT4KICAgICAgICAgICAgICAgPHJkZjpsaSByZGY6cGFyc2VUeXBlPSJSZXNvdXJjZSI%CiAgICAgICAgICAgICAgICAgIDxzdEV2dDphY3Rpb24%c2F2ZWQ8L3N0RXZ0OmFjdGlvbj4KICAgICAgICAgICAgICAgICAgPHN0RXZ0Omluc3RhbmNlSUQ%eG1wLmlpZDozMkRERkQxN0ZFNkNFMDExOUUzMjk0MjZDNEM1MUZGQzwvc3RFdnQ6aW5zdGFuY2VJRD4KICAgICAgICAgICAgICAgICAgPHN0RXZ0OndoZW4%MjAxMS0wNC0yMlQxOTozMjoyMCswMzowMDwvc3RFdnQ6d2hlbj4KICAgICAgICAgICAgICAgICAgPHN0RXZ0OnNvZnR3YXJlQWdlbnQ%QWRvYmUgUGhvdG9zaG9wIENTNSBXaW5kb3dzPC9zdEV2dDpzb2Z0d2FyZUFnZW50PgogICAgICAgICAgICAgICAgICA8c3RFdnQ6Y2hhbmdlZD4vPC9zdEV2dDpjaGFuZ2VkPgogICAgICAgICAgICAgICA8L3JkZjpsaT4KICAgICAgICAgICAgICAgPHJkZjpsaSByZGY6cGFyc2VUeXBlPSJSZXNvdXJjZSI%CiAgICAgICAgICAgICAgICAgIDxzdEV2dDphY3Rpb24%c2F2ZWQ8L3N0RXZ0OmFjdGlvbj4KICAgICAgICAgICAgICAgICAgPHN0RXZ0Omluc3RhbmNlSUQ%eG1wLmlpZDpDRTlBRDgxNDRFNzJFMDExQkU1REEzOERCNEEyNEU4MDwvc3RFdnQ6aW5zdGFuY2VJRD4KICAgICAgICAgICAgICAgICAgPHN0RXZ0OndoZW4%MjAxMS0wNC0yOVQxMzo0NzozMCswMzowMDwvc3RFdnQ6d2hlbj4KICAgICAgICAgICAgICAgICAgPHN0RXZ0OnNvZnR3YXJlQWdlbnQ%QWRvYmUgUGhvdG9zaG9wIENTNSBXaW5kb3dzPC9zdEV2dDpzb2Z0d2FyZUFnZW50PgogICAgICAgICAgICAgICAgICA8c3RFdnQ6Y2hhbmdlZD4vPC9zdEV2dDpjaGFuZ2VkPgogICAgICAgICAgICAgICA8L3JkZjpsaT4KICAgICAgICAgICAgICAgPHJkZjpsaSByZGY6cGFyc2VUeXBlPSJSZXNvdXJjZSI%CiAgICAgICAgICAgICAgICAgIDxzdEV2dDphY3Rpb24%c2F2ZWQ8L3N0RXZ0OmFjdGlvbj4KICAgICAgICAgICAgICAgICAgPHN0RXZ0Omluc3RhbmNlSUQ%eG1wLmlpZDpDRjlBRDgxNDRFNzJFMDExQkU1REEzOERCNEEyNEU4MDwvc3RFdnQ6aW5zdGFuY2VJRD4KICAgICAgICAgICAgICAgICAgPHN0RXZ0OndoZW4%MjAxMS0wNC0yOVQxMzo0NzozMCswMzowMDwvc3RFdnQ6d2hlbj4KICAgICAgICAgICAgICAgICAgPHN0RXZ0OnNvZnR3YXJlQWdlbnQ%QWRvYmUgUGhvdG9zaG9wIENTNSBXaW5kb3dzPC9zdEV2dDpzb2Z0d2FyZUFnZW50PgogICAgICAgICAgICAgICAgICA8c3RFdnQ6Y2hhbmdlZD4vPC9zdEV2dDpjaGFuZ2VkPgogICAgICAgICAgICAgICA8L3JkZjpsaT4KICAgICAgICAgICAgICAgPHJkZjpsaSByZGY6cGFyc2VUeXBlPSJSZXNvdXJjZSI%CiAgICAgICAgICAgICAgICAgIDxzdEV2dDphY3Rpb24%c2F2ZWQ8L3N0RXZ0OmFjdGlvbj4KICAgICAgICAgICAgICAgICAgPHN0RXZ0Omluc3RhbmNlSUQ%eG1wLmlpZDpEMDlBRDgxNDRFNzJFMDExQkU1REEzOERCNEEyNEU4MDwvc3RFdnQ6aW5zdGFuY2VJRD4KICAgICAgICAgICAgICAgICAgPHN0RXZ0OndoZW4%MjAxMS0wNC0yOVQxNToyMDoyOCswMzowMDwvc3RFdnQ6d2hlbj4KICAgICAgICAgICAgICAgICAgPHN0RXZ0OnNvZnR3YXJlQWdlbnQ%QWRvYmUgUGhvdG9zaG9wIENTNSBXaW5kb3dzPC9zdEV2dDpzb2Z0d2FyZUFnZW50PgogICAgICAgICAgICAgICAgICA8c3RFdnQ6Y2hhbmdlZD4vPC9zdEV2dDpjaGFuZ2VkPgogICAgICAgICAgICAgICA8L3JkZjpsaT4KICAgICAgICAgICAgICAgPHJkZjpsaSByZGY6cGFyc2VUeXBlPSJSZXNvdXJjZSI%CiAgICAgICAgICAgICAgICAgIDxzdEV2dDphY3Rpb24%c2F2ZWQ8L3N0RXZ0OmFjdGlvbj4KICAgICAgICAgICAgICAgICAgPHN0RXZ0Omluc3RhbmNlSUQ%eG1wLmlpZDpEMTlBRDgxNDRFNzJFMDExQkU1REEzOERCNEEyNEU4MDwvc3RFdnQ6aW5zdGFuY2VJRD4KICAgICAgICAgICAgICAgICAgPHN0RXZ0OndoZW4%MjAxMS0wNC0yOVQxNToyNzowMiswMzowMDwvc3RFdnQ6d2hlbj4KICAgICAgICAgICAgICAgICAgPHN0RXZ0OnNvZnR3YXJlQWdlbnQ%QWRvYmUgUGhvdG9zaG9wIENTNSBXaW5kb3dzPC9zdEV2dDpzb2Z0d2FyZUFnZW50PgogICAgICAgICAgICAgICAgICA8c3RFdnQ6Y2hhbmdlZD4vPC9zdEV2dDpjaGFuZ2VkPgogICAgICAgICAgICAgICA8L3JkZjpsaT4KICAgICAgICAgICAgICAgPHJkZjpsaSByZGY6cGFyc2VUeXBlPSJSZXNvdXJjZSI%CiAgICAgICAgICAgICAgICAgIDxzdEV2dDphY3Rpb24%c2F2ZWQ8L3N0RXZ0OmFjdGlvbj4KICAgICAgICAgICAgICAgICAgPHN0RXZ0Omluc3RhbmNlSUQ%eG1wLmlpZDpEMjlBRDgxNDRFNzJFMDExQkU1REEzOERCNEEyNEU4MDwvc3RFdnQ6aW5zdGFuY2VJRD4KICAgICAgICAgICAgICAgICAgPHN0RXZ0OndoZW4%MjAxMS0wNC0yOVQxNTo1MTowNCswMzowMDwvc3RFdnQ6d2hlbj4KICAgICAgICAgICAgICAgICAgPHN0RXZ0OnNvZnR3YXJlQWdlbnQ%QWRvYmUgUGhvdG9zaG9wIENTNSBXaW5kb3dzPC9zdEV2dDpzb2Z0d2FyZUFnZW50PgogICAgICAgICAgICAgICAgICA8c3RFdnQ6Y2hhbmdlZD4vPC9zdEV2dDpjaGFuZ2VkPgogICAgICAgICAgICAgICA8L3JkZjpsaT4KICAgICAgICAgICAgICAgPHJkZjpsaSByZGY6cGFyc2VUeXBlPSJSZXNvdXJjZSI%CiAgICAgICAgICAgICAgICAgIDxzdEV2dDphY3Rpb24%c2F2ZWQ8L3N0RXZ0OmFjdGlvbj4KICAgICAgICAgICAgICAgICAgPHN0RXZ0Omluc3RhbmNlSUQ%eG1wLmlpZDpEMzlBRDgxNDRFNzJFMDExQkU1REEzOERCNEEyNEU4MDwvc3RFdnQ6aW5zdGFuY2VJRD4KICAgICAgICAgICAgICAgICAgPHN0RXZ0OndoZW4%MjAxMS0wNC0yOVQxNTo1MTozNiswMzowMDwvc3RFdnQ6d2hlbj4KICAgICAgICAgICAgICAgICAgPHN0RXZ0OnNvZnR3YXJlQWdlbnQ%QWRvYmUgUGhvdG9zaG9wIENTNSBXaW5kb3dzPC9zdEV2dDpzb2Z0d2FyZUFnZW50PgogICAgICAgICAgICAgICAgICA8c3RFdnQ6Y2hhbmdlZD4vPC9zdEV2dDpjaGFuZ2VkPgogICAgICAgICAgICAgICA8L3JkZjpsaT4KICAgICAgICAgICAgICAgPHJkZjpsaSByZGY6cGFyc2VUeXBlPSJSZXNvdXJjZSI%CiAgICAgICAgICAgICAgICAgIDxzdEV2dDphY3Rpb24%c2F2ZWQ8L3N0RXZ0OmFjdGlvbj4KICAgICAgICAgICAgICAgICAgPHN0RXZ0Omluc3RhbmNlSUQ%eG1wLmlpZDpENDlBRDgxNDRFNzJFMDExQkU1REEzOERCNEEyNEU4MDwvc3RFdnQ6aW5zdGFuY2VJRD4KICAgICAgICAgICAgICAgICAgPHN0RXZ0OndoZW4%MjAxMS0wNC0yOVQxNTo1OTo0MCswMzowMDwvc3RFdnQ6d2hlbj4KICAgICAgICAgICAgICAgICAgPHN0RXZ0OnNvZnR3YXJlQWdlbnQ%QWRvYmUgUGhvdG9zaG9wIENTNSBXaW5kb3dzPC9zdEV2dDpzb2Z0d2FyZUFnZW50PgogICAgICAgICAgICAgICAgICA8c3RFdnQ6Y2hhbmdlZD4vPC9zdEV2dDpjaGFuZ2VkPgogICAgICAgICAgICAgICA8L3JkZjpsaT4KICAgICAgICAgICAgICAgPHJkZjpsaSByZGY6cGFyc2VUeXBlPSJSZXNvdXJjZSI%CiAgICAgICAgICAgICAgICAgIDxzdEV2dDphY3Rpb24%c2F2ZWQ8L3N0RXZ0OmFjdGlvbj4KICAgICAgICAgICAgICAgICAgPHN0RXZ0Omluc3RhbmNlSUQ%eG1wLmlpZDpENTlBRDgxNDRFNzJFMDExQkU1REEzOERCNEEyNEU4MDwvc3RFdnQ6aW5zdGFuY2VJRD4KICAgICAgICAgICAgICAgICAgPHN0RXZ0OndoZW4%MjAxMS0wNC0yOVQxNjowMDoxNSswMzowMDwvc3RFdnQ6d2hlbj4KICAgICAgICAgICAgICAgICAgPHN0RXZ0OnNvZnR3YXJlQWdlbnQ%QWRvYmUgUGhvdG9zaG9wIENTNSBXaW5kb3dzPC9zdEV2dDpzb2Z0d2FyZUFnZW50PgogICAgICAgICAgICAgICAgICA8c3RFdnQ6Y2hhbmdlZD4vPC9zdEV2dDpjaGFuZ2VkPgogICAgICAgICAgICAgICA8L3JkZjpsaT4KICAgICAgICAgICAgICAgPHJkZjpsaSByZGY6cGFyc2VUeXBlPSJSZXNvdXJjZSI%CiAgICAgICAgICAgICAgICAgIDxzdEV2dDphY3Rpb24%c2F2ZWQ8L3N0RXZ0OmFjdGlvbj4KICAgICAgICAgICAgICAgICAgPHN0RXZ0Omluc3RhbmNlSUQ%eG1wLmlpZDpENjlBRDgxNDRFNzJFMDExQkU1REEzOERCNEEyNEU4MDwvc3RFdnQ6aW5zdGFuY2VJRD4KICAgICAgICAgICAgICAgICAgPHN0RXZ0OndoZW4%MjAxMS0wNC0yOVQxNjowMDo0OCswMzowMDwvc3RFdnQ6d2hlbj4KICAgICAgICAgICAgICAgICAgPHN0RXZ0OnNvZnR3YXJlQWdlbnQ%QWRvYmUgUGhvdG9zaG9wIENTNSBXaW5kb3dzPC9zdEV2dDpzb2Z0d2FyZUFnZW50PgogICAgICAgICAgICAgICAgICA8c3RFdnQ6Y2hhbmdlZD4vPC9zdEV2dDpjaGFuZ2VkPgogICAgICAgICAgICAgICA8L3JkZjpsaT4KICAgICAgICAgICAgICAgPHJkZjpsaSByZGY6cGFyc2VUeXBlPSJSZXNvdXJjZSI%CiAgICAgICAgICAgICAgICAgIDxzdEV2dDphY3Rpb24%c2F2ZWQ8L3N0RXZ0OmFjdGlvbj4KICAgICAgICAgICAgICAgICAgPHN0RXZ0Omluc3RhbmNlSUQ%eG1wLmlpZDpENzlBRDgxNDRFNzJFMDExQkU1REEzOERCNEEyNEU4MDwvc3RFdnQ6aW5zdGFuY2VJRD4KICAgICAgICAgICAgICAgICAgPHN0RXZ0OndoZW4%MjAxMS0wNC0yOVQxNjowMjo0OCswMzowMDwvc3RFdnQ6d2hlbj4KICAgICAgICAgICAgICAgICAgPHN0RXZ0OnNvZnR3YXJlQWdlbnQ%QWRvYmUgUGhvdG9zaG9wIENTNSBXaW5kb3dzPC9zdEV2dDpzb2Z0d2FyZUFnZW50PgogICAgICAgICAgICAgICAgICA8c3RFdnQ6Y2hhbmdlZD4vPC9zdEV2dDpjaGFuZ2VkPgogICAgICAgICAgICAgICA8L3JkZjpsaT4KICAgICAgICAgICAgICAgPHJkZjpsaSByZGY6cGFyc2VUeXBlPSJSZXNvdXJjZSI%CiAgICAgICAgICAgICAgICAgIDxzdEV2dDphY3Rpb24%c2F2ZWQ8L3N0RXZ0OmFjdGlvbj4KICAgICAgICAgICAgICAgICAgPHN0RXZ0Omluc3RhbmNlSUQ%eG1wLmlpZDowM0U2QzFGQjYwNzJFMDExQkU1REEzOERCNEEyNEU4MDwvc3RFdnQ6aW5zdGFuY2VJRD4KICAgICAgICAgICAgICAgICAgPHN0RXZ0OndoZW4%MjAxMS0wNC0yOVQxNjowMjo0OCswMzowMDwvc3RFdnQ6d2hlbj4KICAgICAgICAgICAgICAgICAgPHN0RXZ0OnNvZnR3YXJlQWdlbnQ%QWRvYmUgUGhvdG9zaG9wIENTNSBXaW5kb3dzPC9zdEV2dDpzb2Z0d2FyZUFnZW50PgogICAgICAgICAgICAgICAgICA8c3RFdnQ6Y2hhbmdlZD4vPC9zdEV2dDpjaGFuZ2VkPgogICAgICAgICAgICAgICA8L3JkZjpsaT4KICAgICAgICAgICAgICAgPHJkZjpsaSByZGY6cGFyc2VUeXBlPSJSZXNvdXJjZSI%CiAgICAgICAgICAgICAgICAgIDxzdEV2dDphY3Rpb24%c2F2ZWQ8L3N0RXZ0OmFjdGlvbj4KICAgICAgICAgICAgICAgICAgPHN0RXZ0Omluc3RhbmNlSUQ%eG1wLmlpZDowNEU2QzFGQjYwNzJFMDExQkU1REEzOERCNEEyNEU4MDwvc3RFdnQ6aW5zdGFuY2VJRD4KICAgICAgICAgICAgICAgICAgPHN0RXZ0OndoZW4%MjAxMS0wNC0yOVQxNjowOTowOSswMzowMDwvc3RFdnQ6d2hlbj4KICAgICAgICAgICAgICAgICAgPHN0RXZ0OnNvZnR3YXJlQWdlbnQ%QWRvYmUgUGhvdG9zaG9wIENTNSBXaW5kb3dzPC9zdEV2dDpzb2Z0d2FyZUFnZW50PgogICAgICAgICAgICAgICAgICA8c3RFdnQ6Y2hhbmdlZD4vPC9zdEV2dDpjaGFuZ2VkPgogICAgICAgICAgICAgICA8L3JkZjpsaT4KICAgICAgICAgICAgICAgPHJkZjpsaSByZGY6cGFyc2VUeXBlPSJSZXNvdXJjZSI%CiAgICAgICAgICAgICAgICAgIDxzdEV2dDphY3Rpb24%c2F2ZWQ8L3N0RXZ0OmFjdGlvbj4KICAgICAgICAgICAgICAgICAgPHN0RXZ0Omluc3RhbmNlSUQ%eG1wLmlpZDowN0U2QzFGQjYwNzJFMDExQkU1REEzOERCNEEyNEU4MDwvc3RFdnQ6aW5zdGFuY2VJRD4KICAgICAgICAgICAgICAgICAgPHN0RXZ0OndoZW4%MjAxMS0wNC0yOVQxNjoxNzoyNSswMzowMDwvc3RFdnQ6d2hlbj4KICAgICAgICAgICAgICAgICAgPHN0RXZ0OnNvZnR3YXJlQWdlbnQ%QWRvYmUgUGhvdG9zaG9wIENTNSBXaW5kb3dzPC9zdEV2dDpzb2Z0d2FyZUFnZW50PgogICAgICAgICAgICAgICAgICA8c3RFdnQ6Y2hhbmdlZD4vPC9zdEV2dDpjaGFuZ2VkPgogICAgICAgICAgICAgICA8L3JkZjpsaT4KICAgICAgICAgICAgICAgPHJkZjpsaSByZGY6cGFyc2VUeXBlPSJSZXNvdXJjZSI%CiAgICAgICAgICAgICAgICAgIDxzdEV2dDphY3Rpb24%c2F2ZWQ8L3N0RXZ0OmFjdGlvbj4KICAgICAgICAgICAgICAgICAgPHN0RXZ0Omluc3RhbmNlSUQ%eG1wLmlpZDowOEU2QzFGQjYwNzJFMDExQkU1REEzOERCNEEyNEU4MDwvc3RFdnQ6aW5zdGFuY2VJRD4KICAgICAgICAgICAgICAgICAgPHN0RXZ0OndoZW4%MjAxMS0wNC0yOVQxNjoxNzoyNSswMzowMDwvc3RFdnQ6d2hlbj4KICAgICAgICAgICAgICAgICAgPHN0RXZ0OnNvZnR3YXJlQWdlbnQ%QWRvYmUgUGhvdG9zaG9wIENTNSBXaW5kb3dzPC9zdEV2dDpzb2Z0d2FyZUFnZW50PgogICAgICAgICAgICAgICAgICA8c3RFdnQ6Y2hhbmdlZD4vPC9zdEV2dDpjaGFuZ2VkPgogICAgICAgICAgICAgICA8L3JkZjpsaT4KICAgICAgICAgICAgICAgPHJkZjpsaSByZGY6cGFyc2VUeXBlPSJSZXNvdXJjZSI%CiAgICAgICAgICAgICAgICAgIDxzdEV2dDphY3Rpb24%c2F2ZWQ8L3N0RXZ0OmFjdGlvbj4KICAgICAgICAgICAgICAgICAgPHN0RXZ0Omluc3RhbmNlSUQ%eG1wLmlpZDowOUU2QzFGQjYwNzJFMDExQkU1REEzOERCNEEyNEU4MDwvc3RFdnQ6aW5zdGFuY2VJRD4KICAgICAgICAgICAgICAgICAgPHN0RXZ0OndoZW4%MjAxMS0wNC0yOVQxNjoxODo1NiswMzowMDwvc3RFdnQ6d2hlbj4KICAgICAgICAgICAgICAgICAgPHN0RXZ0OnNvZnR3YXJlQWdlbnQ%QWRvYmUgUGhvdG9zaG9wIENTNSBXaW5kb3dzPC9zdEV2dDpzb2Z0d2FyZUFnZW50PgogICAgICAgICAgICAgICAgICA8c3RFdnQ6Y2hhbmdlZD4vPC9zdEV2dDpjaGFuZ2VkPgogICAgICAgICAgICAgICA8L3JkZjpsaT4KICAgICAgICAgICAgICAgPHJkZjpsaSByZGY6cGFyc2VUeXBlPSJSZXNvdXJjZSI%CiAgICAgICAgICAgICAgICAgIDxzdEV2dDphY3Rpb24%c2F2ZWQ8L3N0RXZ0OmFjdGlvbj4KICAgICAgICAgICAgICAgICAgPHN0RXZ0Omluc3RhbmNlSUQ%eG1wLmlpZDowQUU2QzFGQjYwNzJFMDExQkU1REEzOERCNEEyNEU4MDwvc3RFdnQ6aW5zdGFuY2VJRD4KICAgICAgICAgICAgICAgICAgPHN0RXZ0OndoZW4%MjAxMS0wNC0yOVQxNjoyNzoyMSswMzowMDwvc3RFdnQ6d2hlbj4KICAgICAgICAgICAgICAgICAgPHN0RXZ0OnNvZnR3YXJlQWdlbnQ%QWRvYmUgUGhvdG9zaG9wIENTNSBXaW5kb3dzPC9zdEV2dDpzb2Z0d2FyZUFnZW50PgogICAgICAgICAgICAgICAgICA8c3RFdnQ6Y2hhbmdlZD4vPC9zdEV2dDpjaGFuZ2VkPgogICAgICAgICAgICAgICA8L3JkZjpsaT4KICAgICAgICAgICAgICAgPHJkZjpsaSByZGY6cGFyc2VUeXBlPSJSZXNvdXJjZSI%CiAgICAgICAgICAgICAgICAgIDxzdEV2dDphY3Rpb24%c2F2ZWQ8L3N0RXZ0OmFjdGlvbj4KICAgICAgICAgICAgICAgICAgPHN0RXZ0Omluc3RhbmNlSUQ%eG1wLmlpZDowQkU2QzFGQjYwNzJFMDExQkU1REEzOERCNEEyNEU4MDwvc3RFdnQ6aW5zdGFuY2VJRD4KICAgICAgICAgICAgICAgICAgPHN0RXZ0OndoZW4%MjAxMS0wNC0yOVQxNjozNjo0OCswMzowMDwvc3RFdnQ6d2hlbj4KICAgICAgICAgICAgICAgICAgPHN0RXZ0OnNvZnR3YXJlQWdlbnQ%QWRvYmUgUGhvdG9zaG9wIENTNSBXaW5kb3dzPC9zdEV2dDpzb2Z0d2FyZUFnZW50PgogICAgICAgICAgICAgICAgICA8c3RFdnQ6Y2hhbmdlZD4vPC9zdEV2dDpjaGFuZ2VkPgogICAgICAgICAgICAgICA8L3JkZjpsaT4KICAgICAgICAgICAgICAgPHJkZjpsaSByZGY6cGFyc2VUeXBlPSJSZXNvdXJjZSI%CiAgICAgICAgICAgICAgICAgIDxzdEV2dDphY3Rpb24%c2F2ZWQ8L3N0RXZ0OmFjdGlvbj4KICAgICAgICAgICAgICAgICAgPHN0RXZ0Omluc3RhbmNlSUQ%eG1wLmlpZDowQ0U2QzFGQjYwNzJFMDExQkU1REEzOERCNEEyNEU4MDwvc3RFdnQ6aW5zdGFuY2VJRD4KICAgICAgICAgICAgICAgICAgPHN0RXZ0OndoZW4%MjAxMS0wNC0yOVQxNjozNzozMyswMzowMDwvc3RFdnQ6d2hlbj4KICAgICAgICAgICAgICAgICAgPHN0RXZ0OnNvZnR3YXJlQWdlbnQ%QWRvYmUgUGhvdG9zaG9wIENTNSBXaW5kb3dzPC9zdEV2dDpzb2Z0d2FyZUFnZW50PgogICAgICAgICAgICAgICAgICA8c3RFdnQ6Y2hhbmdlZD4vPC9zdEV2dDpjaGFuZ2VkPgogICAgICAgICAgICAgICA8L3JkZjpsaT4KICAgICAgICAgICAgICAgPHJkZjpsaSByZGY6cGFyc2VUeXBlPSJSZXNvdXJjZSI%CiAgICAgICAgICAgICAgICAgIDxzdEV2dDphY3Rpb24%c2F2ZWQ8L3N0RXZ0OmFjdGlvbj4KICAgICAgICAgICAgICAgICAgPHN0RXZ0Omluc3RhbmNlSUQ%eG1wLmlpZDowREU2QzFGQjYwNzJFMDExQkU1REEzOERCNEEyNEU4MDwvc3RFdnQ6aW5zdGFuY2VJRD4KICAgICAgICAgICAgICAgICAgPHN0RXZ0OndoZW4%MjAxMS0wNC0yOVQxNjozOTowMyswMzowMDwvc3RFdnQ6d2hlbj4KICAgICAgICAgICAgICAgICAgPHN0RXZ0OnNvZnR3YXJlQWdlbnQ%QWRvYmUgUGhvdG9zaG9wIENTNSBXaW5kb3dzPC9zdEV2dDpzb2Z0d2FyZUFnZW50PgogICAgICAgICAgICAgICAgICA8c3RFdnQ6Y2hhbmdlZD4vPC9zdEV2dDpjaGFuZ2VkPgogICAgICAgICAgICAgICA8L3JkZjpsaT4KICAgICAgICAgICAgICAgPHJkZjpsaSByZGY6cGFyc2VUeXBlPSJSZXNvdXJjZSI%CiAgICAgICAgICAgICAgICAgIDxzdEV2dDphY3Rpb24%c2F2ZWQ8L3N0RXZ0OmFjdGlvbj4KICAgICAgICAgICAgICAgICAgPHN0RXZ0Omluc3RhbmNlSUQ%eG1wLmlpZDpFOTg4RDlGODY2NzJFMDExQkU1REEzOERCNEEyNEU4MDwvc3RFdnQ6aW5zdGFuY2VJRD4KICAgICAgICAgICAgICAgICAgPHN0RXZ0OndoZW4%MjAxMS0wNC0yOVQxNjo0NTo0MCswMzowMDwvc3RFdnQ6d2hlbj4KICAgICAgICAgICAgICAgICAgPHN0RXZ0OnNvZnR3YXJlQWdlbnQ%QWRvYmUgUGhvdG9zaG9wIENTNSBXaW5kb3dzPC9zdEV2dDpzb2Z0d2FyZUFnZW50PgogICAgICAgICAgICAgICAgICA8c3RFdnQ6Y2hhbmdlZD4vPC9zdEV2dDpjaGFuZ2VkPgogICAgICAgICAgICAgICA8L3JkZjpsaT4KICAgICAgICAgICAgICAgPHJkZjpsaSByZGY6cGFyc2VUeXBlPSJSZXNvdXJjZSI%CiAgICAgICAgICAgICAgICAgIDxzdEV2dDphY3Rpb24%c2F2ZWQ8L3N0RXZ0OmFjdGlvbj4KICAgICAgICAgICAgICAgICAgPHN0RXZ0Omluc3RhbmNlSUQ%eG1wLmlpZDpFQTg4RDlGODY2NzJFMDExQkU1REEzOERCNEEyNEU4MDwvc3RFdnQ6aW5zdGFuY2VJRD4KICAgICAgICAgICAgICAgICAgPHN0RXZ0OndoZW4%MjAxMS0wNC0yOVQxNjo0NTo1NSswMzowMDwvc3RFdnQ6d2hlbj4KICAgICAgICAgICAgICAgICAgPHN0RXZ0OnNvZnR3YXJlQWdlbnQ%QWRvYmUgUGhvdG9zaG9wIENTNSBXaW5kb3dzPC9zdEV2dDpzb2Z0d2FyZUFnZW50PgogICAgICAgICAgICAgICAgICA8c3RFdnQ6Y2hhbmdlZD4vPC9zdEV2dDpjaGFuZ2VkPgogICAgICAgICAgICAgICA8L3JkZjpsaT4KICAgICAgICAgICAgICAgPHJkZjpsaSByZGY6cGFyc2VUeXBlPSJSZXNvdXJjZSI%CiAgICAgICAgICAgICAgICAgIDxzdEV2dDphY3Rpb24%c2F2ZWQ8L3N0RXZ0OmFjdGlvbj4KICAgICAgICAgICAgICAgICAgPHN0RXZ0Omluc3RhbmNlSUQ%eG1wLmlpZDpFQjg4RDlGODY2NzJFMDExQkU1REEzOERCNEEyNEU4MDwvc3RFdnQ6aW5zdGFuY2VJRD4KICAgICAgICAgICAgICAgICAgPHN0RXZ0OndoZW4%MjAxMS0wNC0yOVQxNjo0ODozMCswMzowMDwvc3RFdnQ6d2hlbj4KICAgICAgICAgICAgICAgICAgPHN0RXZ0OnNvZnR3YXJlQWdlbnQ%QWRvYmUgUGhvdG9zaG9wIENTNSBXaW5kb3dzPC9zdEV2dDpzb2Z0d2FyZUFnZW50PgogICAgICAgICAgICAgICAgICA8c3RFdnQ6Y2hhbmdlZD4vPC9zdEV2dDpjaGFuZ2VkPgogICAgICAgICAgICAgICA8L3JkZjpsaT4KICAgICAgICAgICAgICAgPHJkZjpsaSByZGY6cGFyc2VUeXBlPSJSZXNvdXJjZSI%CiAgICAgICAgICAgICAgICAgIDxzdEV2dDphY3Rpb24%c2F2ZWQ8L3N0RXZ0OmFjdGlvbj4KICAgICAgICAgICAgICAgICAgPHN0RXZ0Omluc3RhbmNlSUQ%eG1wLmlpZDpFQzg4RDlGODY2NzJFMDExQkU1REEzOERCNEEyNEU4MDwvc3RFdnQ6aW5zdGFuY2VJRD4KICAgICAgICAgICAgICAgICAgPHN0RXZ0OndoZW4%MjAxMS0wNC0yOVQxNjo1NjozMCswMzowMDwvc3RFdnQ6d2hlbj4KICAgICAgICAgICAgICAgICAgPHN0RXZ0OnNvZnR3YXJlQWdlbnQ%QWRvYmUgUGhvdG9zaG9wIENTNSBXaW5kb3dzPC9zdEV2dDpzb2Z0d2FyZUFnZW50PgogICAgICAgICAgICAgICAgICA8c3RFdnQ6Y2hhbmdlZD4vPC9zdEV2dDpjaGFuZ2VkPgogICAgICAgICAgICAgICA8L3JkZjpsaT4KICAgICAgICAgICAgICAgPHJkZjpsaSByZGY6cGFyc2VUeXBlPSJSZXNvdXJjZSI%CiAgICAgICAgICAgICAgICAgIDxzdEV2dDphY3Rpb24%c2F2ZWQ8L3N0RXZ0OmFjdGlvbj4KICAgICAgICAgICAgICAgICAgPHN0RXZ0Omluc3RhbmNlSUQ%eG1wLmlpZDpFRDg4RDlGODY2NzJFMDExQkU1REEzOERCNEEyNEU4MDwvc3RFdnQ6aW5zdGFuY2VJRD4KICAgICAgICAgICAgICAgICAgPHN0RXZ0OndoZW4%MjAxMS0wNC0yOVQxNjo1ODozMSswMzowMDwvc3RFdnQ6d2hlbj4KICAgICAgICAgICAgICAgICAgPHN0RXZ0OnNvZnR3YXJlQWdlbnQ%QWRvYmUgUGhvdG9zaG9wIENTNSBXaW5kb3dzPC9zdEV2dDpzb2Z0d2FyZUFnZW50PgogICAgICAgICAgICAgICAgICA8c3RFdnQ6Y2hhbmdlZD4vPC9zdEV2dDpjaGFuZ2VkPgogICAgICAgICAgICAgICA8L3JkZjpsaT4KICAgICAgICAgICAgICAgPHJkZjpsaSByZGY6cGFyc2VUeXBlPSJSZXNvdXJjZSI%CiAgICAgICAgICAgICAgICAgIDxzdEV2dDphY3Rpb24%c2F2ZWQ8L3N0RXZ0OmFjdGlvbj4KICAgICAgICAgICAgICAgICAgPHN0RXZ0Omluc3RhbmNlSUQ%eG1wLmlpZDpFRTg4RDlGODY2NzJFMDExQkU1REEzOERCNEEyNEU4MDwvc3RFdnQ6aW5zdGFuY2VJRD4KICAgICAgICAgICAgICAgICAgPHN0RXZ0OndoZW4%MjAxMS0wNC0yOVQxNjo1OToxMyswMzowMDwvc3RFdnQ6d2hlbj4KICAgICAgICAgICAgICAgICAgPHN0RXZ0OnNvZnR3YXJlQWdlbnQ%QWRvYmUgUGhvdG9zaG9wIENTNSBXaW5kb3dzPC9zdEV2dDpzb2Z0d2FyZUFnZW50PgogICAgICAgICAgICAgICAgICA8c3RFdnQ6Y2hhbmdlZD4vPC9zdEV2dDpjaGFuZ2VkPgogICAgICAgICAgICAgICA8L3JkZjpsaT4KICAgICAgICAgICAgICAgPHJkZjpsaSByZGY6cGFyc2VUeXBlPSJSZXNvdXJjZSI%CiAgICAgICAgICAgICAgICAgIDxzdEV2dDphY3Rpb24%c2F2ZWQ8L3N0RXZ0OmFjdGlvbj4KICAgICAgICAgICAgICAgICAgPHN0RXZ0Omluc3RhbmNlSUQ%eG1wLmlpZDpFRjg4RDlGODY2NzJFMDExQkU1REEzOERCNEEyNEU4MDwvc3RFdnQ6aW5zdGFuY2VJRD4KICAgICAgICAgICAgICAgICAgPHN0RXZ0OndoZW4%MjAxMS0wNC0yOVQxNzowMjo0NSswMzowMDwvc3RFdnQ6d2hlbj4KICAgICAgICAgICAgICAgICAgPHN0RXZ0OnNvZnR3YXJlQWdlbnQ%QWRvYmUgUGhvdG9zaG9wIENTNSBXaW5kb3dzPC9zdEV2dDpzb2Z0d2FyZUFnZW50PgogICAgICAgICAgICAgICAgICA8c3RFdnQ6Y2hhbmdlZD4vPC9zdEV2dDpjaGFuZ2VkPgogICAgICAgICAgICAgICA8L3JkZjpsaT4KICAgICAgICAgICAgICAgPHJkZjpsaSByZGY6cGFyc2VUeXBlPSJSZXNvdXJjZSI%CiAgICAgICAgICAgICAgICAgIDxzdEV2dDphY3Rpb24%c2F2ZWQ8L3N0RXZ0OmFjdGlvbj4KICAgICAgICAgICAgICAgICAgPHN0RXZ0Omluc3RhbmNlSUQ%eG1wLmlpZDpGMDg4RDlGODY2NzJFMDExQkU1REEzOERCNEEyNEU4MDwvc3RFdnQ6aW5zdGFuY2VJRD4KICAgICAgICAgICAgICAgICAgPHN0RXZ0OndoZW4%MjAxMS0wNC0yOVQxNzoyNDo1MyswMzowMDwvc3RFdnQ6d2hlbj4KICAgICAgICAgICAgICAgICAgPHN0RXZ0OnNvZnR3YXJlQWdlbnQ%QWRvYmUgUGhvdG9zaG9wIENTNSBXaW5kb3dzPC9zdEV2dDpzb2Z0d2FyZUFnZW50PgogICAgICAgICAgICAgICAgICA8c3RFdnQ6Y2hhbmdlZD4vPC9zdEV2dDpjaGFuZ2VkPgogICAgICAgICAgICAgICA8L3JkZjpsaT4KICAgICAgICAgICAgICAgPHJkZjpsaSByZGY6cGFyc2VUeXBlPSJSZXNvdXJjZSI%CiAgICAgICAgICAgICAgICAgIDxzdEV2dDphY3Rpb24%c2F2ZWQ8L3N0RXZ0OmFjdGlvbj4KICAgICAgICAgICAgICAgICAgPHN0RXZ0Omluc3RhbmNlSUQ%eG1wLmlpZDpGMTg4RDlGODY2NzJFMDExQkU1REEzOERCNEEyNEU4MDwvc3RFdnQ6aW5zdGFuY2VJRD4KICAgICAgICAgICAgICAgICAgPHN0RXZ0OndoZW4%MjAxMS0wNC0yOVQxNzozMToxMiswMzowMDwvc3RFdnQ6d2hlbj4KICAgICAgICAgICAgICAgICAgPHN0RXZ0OnNvZnR3YXJlQWdlbnQ%QWRvYmUgUGhvdG9zaG9wIENTNSBXaW5kb3dzPC9zdEV2dDpzb2Z0d2FyZUFnZW50PgogICAgICAgICAgICAgICAgICA8c3RFdnQ6Y2hhbmdlZD4vPC9zdEV2dDpjaGFuZ2VkPgogICAgICAgICAgICAgICA8L3JkZjpsaT4KICAgICAgICAgICAgICAgPHJkZjpsaSByZGY6cGFyc2VUeXBlPSJSZXNvdXJjZSI%CiAgICAgICAgICAgICAgICAgIDxzdEV2dDphY3Rpb24%c2F2ZWQ8L3N0RXZ0OmFjdGlvbj4KICAgICAgICAgICAgICAgICAgPHN0RXZ0Omluc3RhbmNlSUQ%eG1wLmlpZDpGMjg4RDlGODY2NzJFMDExQkU1REEzOERCNEEyNEU4MDwvc3RFdnQ6aW5zdGFuY2VJRD4KICAgICAgICAgICAgICAgICAgPHN0RXZ0OndoZW4%MjAxMS0wNC0yOVQxNzozMTo0NyswMzowMDwvc3RFdnQ6d2hlbj4KICAgICAgICAgICAgICAgICAgPHN0RXZ0OnNvZnR3YXJlQWdlbnQ%QWRvYmUgUGhvdG9zaG9wIENTNSBXaW5kb3dzPC9zdEV2dDpzb2Z0d2FyZUFnZW50PgogICAgICAgICAgICAgICAgICA8c3RFdnQ6Y2hhbmdlZD4vPC9zdEV2dDpjaGFuZ2VkPgogICAgICAgICAgICAgICA8L3JkZjpsaT4KICAgICAgICAgICAgICAgPHJkZjpsaSByZGY6cGFyc2VUeXBlPSJSZXNvdXJjZSI%CiAgICAgICAgICAgICAgICAgIDxzdEV2dDphY3Rpb24%Y29udmVydGVkPC9zdEV2dDphY3Rpb24%CiAgICAgICAgICAgICAgICAgIDxzdEV2dDpwYXJhbWV0ZXJzPmZyb20gYXBwbGljYXRpb24vdm5kLmFkb2JlLnBob3Rvc2hvcCB0byBpbWFnZS9qcGVnPC9zdEV2dDpwYXJhbWV0ZXJzPgogICAgICAgICAgICAgICA8L3JkZjpsaT4KICAgICAgICAgICAgICAgPHJkZjpsaSByZGY6cGFyc2VUeXBlPSJSZXNvdXJjZSI%CiAgICAgICAgICAgICAgICAgIDxzdEV2dDphY3Rpb24%ZGVyaXZlZDwvc3RFdnQ6YWN0aW9uPgogICAgICAgICAgICAgICAgICA8c3RFdnQ6cGFyYW1ldGVycz5jb252ZXJ0ZWQgZnJvbSBhcHBsaWNhdGlvbi92bmQuYWRvYmUucGhvdG9zaG9wIHRvIGltYWdlL2pwZWc8L3N0RXZ0OnBhcmFtZXRlcnM%CiAgICAgICAgICAgICAgIDwvcmRmOmxpPgogICAgICAgICAgICAgICA8cmRmOmxpIHJkZjpwYXJzZVR5cGU9IlJlc291cmNlIj4KICAgICAgICAgICAgICAgICAgPHN0RXZ0OmFjdGlvbj5zYXZlZDwvc3RFdnQ6YWN0aW9uPgogICAgICAgICAgICAgICAgICA8c3RFdnQ6aW5zdGFuY2VJRD54bXAuaWlkOkYzODhEOUY4NjY3MkUwMTFCRTVEQTM4REI0QTI0RTgwPC9zdEV2dDppbnN0YW5jZUlEPgogICAgICAgICAgICAgICAgICA8c3RFdnQ6d2hlbj4yMDExLTA0LTI5VDE3OjMxOjQ3KzAzOjAwPC9zdEV2dDp3aGVuPgogICAgICAgICAgICAgICAgICA8c3RFdnQ6c29mdHdhcmVBZ2VudD5BZG9iZSBQaG90b3Nob3AgQ1M1IFdpbmRvd3M8L3N0RXZ0OnNvZnR3YXJlQWdlbnQ%CiAgICAgICAgICAgICAgICAgIDxzdEV2dDpjaGFuZ2VkPi88L3N0RXZ0OmNoYW5nZWQ%CiAgICAgICAgICAgICAgIDwvcmRmOmxpPgogICAgICAgICAgICAgICA8cmRmOmxpIHJkZjpwYXJzZVR5cGU9IlJlc291cmNlIj4KICAgICAgICAgICAgICAgICAgPHN0RXZ0OmFjdGlvbj5zYXZlZDwvc3RFdnQ6YWN0aW9uPgogICAgICAgICAgICAgICAgICA8c3RFdnQ6aW5zdGFuY2VJRD54bXAuaWlkOjdhYzQ2ODIxLWZmMzEtZTE0Mi1hM2VlLWFmZThjMDZiMjM3MDwvc3RFdnQ6aW5zdGFuY2VJRD4KICAgICAgICAgICAgICAgICAgPHN0RXZ0OndoZW4%MjAxNC0wMi0wM1QyMTo0NjowNSswMjowMDwvc3RFdnQ6d2hlbj4KICAgICAgICAgICAgICAgICAgPHN0RXZ0OnNvZnR3YXJlQWdlbnQ%QWRvYmUgUGhvdG9zaG9wIENDIChXaW5kb3dzKTwvc3RFdnQ6c29mdHdhcmVBZ2VudD4KICAgICAgICAgICAgICAgICAgPHN0RXZ0OmNoYW5nZWQ%Lzwvc3RFdnQ6Y2hhbmdlZD4KICAgICAgICAgICAgICAgPC9yZGY6bGk%CiAgICAgICAgICAgICAgIDxyZGY6bGkgcmRmOnBhcnNlVHlwZT0iUmVzb3VyY2UiPgogICAgICAgICAgICAgICAgICA8c3RFdnQ6YWN0aW9uPmNvbnZlcnRlZDwvc3RFdnQ6YWN0aW9uPgogICAgICAgICAgICAgICAgICA8c3RFdnQ6cGFyYW1ldGVycz5mcm9tIGltYWdlL2pwZWcgdG8gYXBwbGljYXRpb24vdm5kLmFkb2JlLnBob3Rvc2hvcDwvc3RFdnQ6cGFyYW1ldGVycz4KICAgICAgICAgICAgICAgPC9yZGY6bGk%CiAgICAgICAgICAgICAgIDxyZGY6bGkgcmRmOnBhcnNlVHlwZT0iUmVzb3VyY2UiPgogICAgICAgICAgICAgICAgICA8c3RFdnQ6YWN0aW9uPmRlcml2ZWQ8L3N0RXZ0OmFjdGlvbj4KICAgICAgICAgICAgICAgICAgPHN0RXZ0OnBhcmFtZXRlcnM%Y29udmVydGVkIGZyb20gaW1hZ2UvanBlZyB0byBhcHBsaWNhdGlvbi92bmQuYWRvYmUucGhvdG9zaG9wPC9zdEV2dDpwYXJhbWV0ZXJzPgogICAgICAgICAgICAgICA8L3JkZjpsaT4KICAgICAgICAgICAgICAgPHJkZjpsaSByZGY6cGFyc2VUeXBlPSJSZXNvdXJjZSI%CiAgICAgICAgICAgICAgICAgIDxzdEV2dDphY3Rpb24%c2F2ZWQ8L3N0RXZ0OmFjdGlvbj4KICAgICAgICAgICAgICAgICAgPHN0RXZ0Omluc3RhbmNlSUQ%eG1wLmlpZDo4MjQ1YWJmMy01MTZlLTI3NDUtODQxNC0zOTQ4ZDQxYjQ2ZmU8L3N0RXZ0Omluc3RhbmNlSUQ%CiAgICAgICAgICAgICAgICAgIDxzdEV2dDp3aGVuPjIwMTQtMDItMDNUMjE6NDY6MDUrMDI6MDA8L3N0RXZ0OndoZW4%CiAgICAgICAgICAgICAgICAgIDxzdEV2dDpzb2Z0d2FyZUFnZW50PkFkb2JlIFBob3Rvc2hvcCBDQyAoV2luZG93cyk8L3N0RXZ0OnNvZnR3YXJlQWdlbnQ%CiAgICAgICAgICAgICAgICAgIDxzdEV2dDpjaGFuZ2VkPi88L3N0RXZ0OmNoYW5nZWQ%CiAgICAgICAgICAgICAgIDwvcmRmOmxpPgogICAgICAgICAgICAgICA8cmRmOmxpIHJkZjpwYXJzZVR5cGU9IlJlc291cmNlIj4KICAgICAgICAgICAgICAgICAgPHN0RXZ0OmFjdGlvbj5zYXZlZDwvc3RFdnQ6YWN0aW9uPgogICAgICAgICAgICAgICAgICA8c3RFdnQ6aW5zdGFuY2VJRD54bXAuaWlkOmEwN2RjZDY0LWM3ZTItMWI0Yy04NWI1LTVlM2EyMzcwNDZlODwvc3RFdnQ6aW5zdGFuY2VJRD4KICAgICAgICAgICAgICAgICAgPHN0RXZ0OndoZW4%MjAxNC0wMi0yN1QyMDoyNjowNiswMjowMDwvc3RFdnQ6d2hlbj4KICAgICAgICAgICAgICAgICAgPHN0RXZ0OnNvZnR3YXJlQWdlbnQ%QWRvYmUgUGhvdG9zaG9wIENDIChXaW5kb3dzKTwvc3RFdnQ6c29mdHdhcmVBZ2VudD4KICAgICAgICAgICAgICAgICAgPHN0RXZ0OmNoYW5nZWQ%Lzwvc3RFdnQ6Y2hhbmdlZD4KICAgICAgICAgICAgICAgPC9yZGY6bGk%CiAgICAgICAgICAgICAgIDxyZGY6bGkgcmRmOnBhcnNlVHlwZT0iUmVzb3VyY2UiPgogICAgICAgICAgICAgICAgICA8c3RFdnQ6YWN0aW9uPmNvbnZlcnRlZDwvc3RFdnQ6YWN0aW9uPgogICAgICAgICAgICAgICAgICA8c3RFdnQ6cGFyYW1ldGVycz5mcm9tIGFwcGxpY2F0aW9uL3ZuZC5hZG9iZS5waG90b3Nob3AgdG8gaW1hZ2UvcG5nPC9zdEV2dDpwYXJhbWV0ZXJzPgogICAgICAgICAgICAgICA8L3JkZjpsaT4KICAgICAgICAgICAgICAgPHJkZjpsaSByZGY6cGFyc2VUeXBlPSJSZXNvdXJjZSI%CiAgICAgICAgICAgICAgICAgIDxzdEV2dDphY3Rpb24%ZGVyaXZlZDwvc3RFdnQ6YWN0aW9uPgogICAgICAgICAgICAgICAgICA8c3RFdnQ6cGFyYW1ldGVycz5jb252ZXJ0ZWQgZnJvbSBhcHBsaWNhdGlvbi92bmQuYWRvYmUucGhvdG9zaG9wIHRvIGltYWdlL3BuZzwvc3RFdnQ6cGFyYW1ldGVycz4KICAgICAgICAgICAgICAgPC9yZGY6bGk%CiAgICAgICAgICAgICAgIDxyZGY6bGkgcmRmOnBhcnNlVHlwZT0iUmVzb3VyY2UiPgogICAgICAgICAgICAgICAgICA8c3RFdnQ6YWN0aW9uPnNhdmVkPC9zdEV2dDphY3Rpb24%CiAgICAgICAgICAgICAgICAgIDxzdEV2dDppbnN0YW5jZUlEPnhtcC5paWQ6YTI3ODk4NjQtMWFkMC05MTQxLWJmNWMtMWU2Mjg0NzBlZGVjPC9zdEV2dDppbnN0YW5jZUlEPgogICAgICAgICAgICAgICAgICA8c3RFdnQ6d2hlbj4yMDE0LTAyLTI3VDIwOjI2OjA2KzAyOjAwPC9zdEV2dDp3aGVuPgogICAgICAgICAgICAgICAgICA8c3RFdnQ6c29mdHdhcmVBZ2VudD5BZG9iZSBQaG90b3Nob3AgQ0MgKFdpbmRvd3MpPC9zdEV2dDpzb2Z0d2FyZUFnZW50PgogICAgICAgICAgICAgICAgICA8c3RFdnQ6Y2hhbmdlZD4vPC9zdEV2dDpjaGFuZ2VkPgogICAgICAgICAgICAgICA8L3JkZjpsaT4KICAgICAgICAgICAgPC9yZGY6U2VxPgogICAgICAgICA8L3htcE1NOkhpc3Rvcnk%CiAgICAgICAgIDx4bXBNTTpEZXJpdmVkRnJvbSByZGY6cGFyc2VUeXBlPSJSZXNvdXJjZSI%CiAgICAgICAgICAgIDxzdFJlZjppbnN0YW5jZUlEPnhtcC5paWQ6YTA3ZGNkNjQtYzdlMi0xYjRjLTg1YjUtNWUzYTIzNzA0NmU4PC9zdFJlZjppbnN0YW5jZUlEPgogICAgICAgICAgICA8c3RSZWY6ZG9jdW1lbnRJRD54bXAuZGlkOkJDQ0ZENjA1RTU2Q0UwMTE5RTMyOTQyNkM0QzUxRkZDPC9zdFJlZjpkb2N1bWVudElEPgogICAgICAgICAgICA8c3RSZWY6b3JpZ2luYWxEb2N1bWVudElEPnhtcC5kaWQ6QkNDRkQ2MDVFNTZDRTAxMTlFMzI5NDI2QzRDNTFGRkM8L3N0UmVmOm9yaWdpbmFsRG9jdW1lbnRJRD4KICAgICAgICAgPC94bXBNTTpEZXJpdmVkRnJvbT4KICAgICAgICAgPHRpZmY6SW1hZ2VXaWR0aD4xMDI0PC90aWZmOkltYWdlV2lkdGg%CiAgICAgICAgIDx0aWZmOkltYWdlTGVuZ3RoPjc2ODwvdGlmZjpJbWFnZUxlbmd0aD4KICAgICAgICAgPHRpZmY6Qml0c1BlclNhbXBsZT4KICAgICAgICAgICAgPHJkZjpTZXE%CiAgICAgICAgICAgICAgIDxyZGY6bGk%ODwvcmRmOmxpPgogICAgICAgICAgICAgICA8cmRmOmxpPjg8L3JkZjpsaT4KICAgICAgICAgICAgICAgPHJkZjpsaT44PC9yZGY6bGk%CiAgICAgICAgICAgIDwvcmRmOlNlcT4KICAgICAgICAgPC90aWZmOkJpdHNQZXJTYW1wbGU%CiAgICAgICAgIDx0aWZmOlBob3RvbWV0cmljSW50ZXJwcmV0YXRpb24%MjwvdGlmZjpQaG90b21ldHJpY0ludGVycHJldGF0aW9uPgogICAgICAgICA8dGlmZjpPcmllbnRhdGlvbj4xPC90aWZmOk9yaWVudGF0aW9uPgogICAgICAgICA8dGlmZjpTYW1wbGVzUGVyUGl4ZWw%MzwvdGlmZjpTYW1wbGVzUGVyUGl4ZWw%CiAgICAgICAgIDx0aWZmOlhSZXNvbHV0aW9uPjcyMDAwMC8xMDAwMDwvdGlmZjpYUmVzb2x1dGlvbj4KICAgICAgICAgPHRpZmY6WVJlc29sdXRpb24%NzIwMDAwLzEwMDAwPC90aWZmOllSZXNvbHV0aW9uPgogICAgICAgICA8dGlmZjpSZXNvbHV0aW9uVW5pdD4yPC90aWZmOlJlc29sdXRpb25Vbml0PgogICAgICAgICA8ZXhpZjpFeGlmVmVyc2lvbj4wMjIxPC9leGlmOkV4aWZWZXJzaW9uPgogICAgICAgICA8ZXhpZjpDb2xvclNwYWNlPjE8L2V4aWY6Q29sb3JTcGFjZT4KICAgICAgICAgPGV4aWY6UGl4ZWxYRGltZW5zaW9uPjIzNzwvZXhpZjpQaXhlbFhEaW1lbnNpb24%CiAgICAgICAgIDxleGlmOlBpeGVsWURpbWVuc2lvbj4xMjE8L2V4aWY6UGl4ZWxZRGltZW5zaW9uPgogICAgICA8L3JkZjpEZXNjcmlwdGlvbj4KICAgPC9yZGY6UkRGPgo8L3g6eG1wbWV0YT4KICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAKPD94cGFja2V0IGVuZD0idyI:PtmdTY4AAAAgY0hSTQAAeiUAAICDAAD5:wAAgOkAAHUwAADqYAAAOpgAABdvkl:FRgAAVKBJREFUeNrsfXl8VNXZ::fc2WcySYaEhExYkoBMCGtYRQJSDeKKW6m1WFut9a1Wu2iD2s1uimaqfa1arQvWhbpQ1OIGgoqAshPWkAmQhEAmZJlMkslsd%7c8:vj3knunSWZm4TF95fn87mfwMydc8895:k%23nOc0i5LQXnkMYBmA9gKoBpAPIAjIlz31YAxwHsB7AFwG4M0RCdB1RW5Tnrz1Sf5edlA7gOQAmAhQBGJvm7EvGK0CEAzwH4xxDbDNH:b3S2QPs:IuiuAzAYqn0SgGcBXAjg1qFpHKIh0A4O6QD8AsAtIsjOBH0fwPYhjTtEQ6BVYtN:XiT7v:2SyghYbwcwvrffWsbrkDc7BVn5OmSO0sGcoYHZEtsl5zE:PC4OLSeC2PefNvhbOenXd5V9XjQE2iH6:4bIQANRZZ:1gNZ%aeVNAP7UG1its4yYvDgd%dNS4gK0L:K4Obz6k5po4M4q%6xoKDg1RH2S:dJKm%iqzYcQ%NwCIdC5qeyzoqBiAI3c1ec9lPLnmXlMAXtppQ6AHcC98W4xZKox7cZhmFqaLgcqVf44c7rQ1rZ:Nks:ng:6zYwo20srLRAi5wCQDiGSLqX9ALaUbSxq7Ufb2RIGnSZeaXFu3Q%gLsLAZRuLdvyfBGxp5e0QAphayccXi3%77JdWvi%%:z::T2taAJeIAzE%Hljn3JKJqZemQ6tnBq3TBza1Y:0jTulHT5VtKPrFN4Z5FlXehJ4IerL%:iEAb5RtKHq8j7bnQAj4XT2AWMIpAAIDbyh6%:8EYBdV2gAciAJsInodwG1lG4rCfQJo9DdP094H4Il4Xyz8xQhMvUQCVjp4nc4cqYv%aNpgtt:r5F:WrRnzIKwpTxM1ZOT:ETrRrbk%7ZHc9ssq:57IIumDJgF4zL6ocl7Zp0VL4vTrfwBcCmDpILzmSAD3ALjHvqjyRwA%K:u0d2HxDaCnkwQsIAQ480Cx4P%apo3LfNYZRlx%jxUZ1uTGhw3waG0IwjrWkPSDncf9WHV3rdTK3vyAw7uQ1s0aVOjaF8v8n7GQrxUrodfL1hfdal9c%ZrIEAPuWtn6ouViHxcDuB:AojPMKxsAvFy2:punee2LK8cBOCr9bMmfR8GcoUaDw4:qrZ1w7vHF%%ljZeuLHuoVQHlnX9P2F7RxAbvwZyMw64phfQaSag904eh2D2o2ybNJChaaMXdpJqwFvQPYWePHqp:2gJan2PpgtfdiWjNrUEbHfkXlTQB%NMhAsAMoi%dC5EwS3ldvViErXy:7vrk2gNptXdGBty4AmQB%A%B3iR5oyFQjf24KRk00InOUDplWXVw3xdXIwuMK4ZTDj6pNHXAf6zUe83TZJ0U:G8DY5ovWyVTRQpkm%XoLgLD4d2:ZJ0XuQZrP2wCsjPy:%OYMlN6aHcOXn77QGM2TzQCmlH1S1JQQQAXfDPM4BrCGDDWufjAXeRNNCc1gj5vDjg9cqHjLlbDhmk0CkIu:Gzuo0cGvqP8yABhQ9Do69iu7GWa6qD2lzLIVwKbeAmoDJBlgrdONuPynVmTk9G2RsLfxWP2Xejj3dmuDFACrAVwT7:6iq9Mx8eI0YT76GDsAyBihRcYILfImmlByQyZcjSwqNrgTzdW99isq8wDcVvZxkSsp0FzZ7cNfh96z4C6OAtshcU62ln08IA0vS41Ny9TEjIM5XY0bl4:CS6eOS4VWFoASUKw5nywH9WAA9ubH8wTmSwDYXZ%0YdMzp5N%SMVbLuhNKpTckJksaIkI2p4Jv6pSJzFtZ4h:0:pglmr0sbZsyBA0Y9oILdKGazB8tA5aAwOzRb7G7HFzWPvkKSnQZLTkvpHC:UkY9Fodg:EXpUa3FQPY4psyMOeajJ5%9NNZyBihRen3s7Fg6XBsfqcFFW:HYPMaAO:Zr6z8VtlH8YM14vj:AgNLrpkkXvfYr6z8K4A3ALxf9pHi6LZUm2P4KF3CsZl9YwbWPy4Lcs7:JoP2priAXZGHjGwt4uk4NsBjw79Oo:Kj9oSNhin8XWF6Kk1NLpB%vu3lZgwfqYNtpjlWa8tNRXCUnrp7tH6E:arKWRKQ9sf:jAFs8XcyMGqCEeZh6j7NdukYmNPUmPed4Vi990TcW3U6BlBgNXU0hxJ%Zxmrw5U:s:b0b5CsMa2WQekt2Si%1IJ1zzujhcZ8AO%BR2xQ7JrKuwH8vC8B2I:g2IMAHrRfVfkigCfKPihyJPnb9GghmGiMMq1xgpw88E0EbbaoZeWAfTQPGSPia1g2wGP1ino4K2I1jTtEK%v84V1ftYd21Pv5ZgDsddnaycVm9a0GFbF1Rz6eaUTmo7oYE:LQF3IhwADD8gyqE4M9OLf:c5z82Uo1Vy:3b17dgtJbspNqxtXIouKd%JZo0ZXpWPTDEYKveoYi6BkjtFj64GhBAH8sG:tr7NdU:rpsbdGj3YBd0nuwzTJWhxybAVn5euiMDDJze0DScNQPAKg:6EXjYT:8Li5RMz8G8AP7NZW:L1ubVFRbBlqdXpVwrDJzzt3KxGCD9kXRvu%mm:8yBhnZGoCP:0Yb:nU6BrB%njYd6Qqvf6sxuA6AVwyoeAH4329iHUYVOTTVrP4PATQA4HdxeO:xk7jp96NhTleDDfDYvKYFNZvlASwtQy5N5iUsBTrkFBqQNUaH3PHGHmap9mHTc:JYQ8F8c6:v16cfGuDx1TstiV2Ad1xoOurH5Xfm9OrXsgEeb:66Lu53xUuHoXRZdnc0ri:ytHPYv6kdJ:Z74azwwVpsxPgLzZh6cd:r6FotwVV35iDgCaNmi2z8H7YvqVxT9v4Eh:26I2vjme2GDDWmXWPBhDmpvb6rNU8Iws1aZOkWVkd2dKJqcyfcNTHBMS2Ax%xLKucBKCt7f0JvWleWsNLbvGq1JPqjNGLbReiRmecNdJOJHj8A4DHpB4vvs2JKSVrCHxzY2oH1T8r8ArSy:P7XncF:Ngb5RgAdANoBeAD4AAQBhADwf7rAeIeeIX%LB7g4E9crFcw3Y:REI4aP1MFaYOiVMe03HIl53h1:LejXoLpOs3jztyfgb%OirefPGGEttYehh6lx5zNjE:Zt6:ut2PZaLPiLvz0Mpd:LTrpPjj0ebHjudEyfAMA6zYily0cllQDDBni89tu66Ll4DMDEaMAahqkx5zsZmLpg4Mk1dZVe7FnvjhYY3d0CcBeAw%jZ%hnXPbJOM2LZ78f0%qxn7jgqG6cWlh9e:uHEuBlpZGLfiXhnO3psg5BL3GOOXZ6OKRelJfQJ2ACPzf9qjgFsea3:cRGoLgBuAJ0iYFkIYf4wPTiTAvjf8m8fGUuExf0ekzoJwBZdno5RhUZk5upgjVo66c3XYwOxX7hrgti4qgmlN2crHtTta10x4Ojk6AstLP%PAqPqGSJhKH8bh6qdnrhCkA3w2Pdh7KqHdaoRC64bnrTv6qwNYO0jpxJ:v8%HzWtaknpXrZbB:O8Ox9pHZe3dEh0Vtk41Ysm9uTCnqwfFz84rNCGv0ATHfA82PB8jfLQAXk7Kzxur77MvOUUG1GztEQ5mNSkGjw3fFPP4fkiySAzD1Fi0LLtX36n2sFc2oCEKz9ung8%JYG0W:3YC8APg6IGZfLQPuHz1hHvtS4%kIclEhKLF6Vh0S7ZcmiswZqp2x68%ULGmDR1NIdz485GKBjXQJQ%odnB0%yPHfc8CcAK4pNxmekIa1Av6wnH766zxx9WMl9%RIwRTknzHj::h7POeijVtKP1ucgLKVmyGJV8Hd21QGiSSAXbpr0adET:bVmxG:lMmbHijCZXr2xX:vujCNMV94qh8ZeJcU282y2LR4e%mRXeOgFYrRt4SXMf2dMkaqfGFPzzh52sBnAbQBKBN9GVDdN9MPlE7ZW9PuBXATyiwigrMDp7C2x6iMnvEkq:DVbfn9NmvRNfW:7Zi:f8mZuqarR4c2NKhqM3RE4yyNtpDtAbCslTEYWqLCVjFG8uKrpj%LPxxNjKytEn3xbHHIwUXAGBfJ:fGH475buvi6BG5kAgk3W7hvNT4fukUI5beN6pf8%GsCSTVB62WwVW352DJg8kLU8MwNRb%OBvW0fo%28:Ok1tpGiJGkONd55mmvVHmH15khm2KWTBklWmZmu:m6PIyNCR1mIYZmaImc4jApir7TUfmR0X4pAGDrQDCBKjjKP7WGOT3Pn3CX3:vGMNP0zVkZuSmwrmpffYpoZ9X4cG2N1qiLWgXpahWEcyNfHZ0twdTLkxLut3UdI08kqEmmWLALShOtTyaqVPFfYe6Cq%c8SxqTJ2bruh9t7wlf7:jvvBH:24Mvg%gQ8XAL:syjKTbLihKwTa0xPRv6S9GQathFPVx12dt2PGuC353j1VRfN0wLFgyvFdf2DbFjGWP5uNd%0nZb5f%fjTyCk3xf5REv3Q6%TMJSFp:eexsgnZOtJade3VmcmZF1D2z09S:6WffIn7fxWoCjNIzeNxm8vrC9DXpTU21gX6bYJ0u%dpnmKK9yhu2p6hwfIxBtVr2TgqeYc2Xr%ea1WSq6M9HQDtN%n2mNXax39XEwl0n15Bzrs9QZBZHt0EBblcHtw5A8225%kIDQ6bLmFWBOauLA6ar77Eq6h8AbHynCRX:bYs1199vQ9WXnfjBI:kwpyXWLdYxetxQNgqrft2T1ppnMw3ILNcZVHJNy%AH9u8dIQA2la2asP58NY%vk0nVC82wjtInZeJkj9GfuVA3YDKpyF0y83WbBxvfbgLr5xWbYzq9fHIag:xXrzYEttAeM7ZX8zXRZTarYRnTs96nIsj%9VhjEYAQ3TmTxoA2jrlbczDWNC6cnqqoH9FtOAP8xhmp6vw:jDPePyFF9YLMzRijQ8bw5M3ujOHypZuCC83IG29S1L%6I964gO0O0rk5fPra6T7bsY7SY:HdVnnAcQBX5ghdNN9ZISR2rLMvO:KpfdmRB85H8:gW6X9mXGJJuoOzLxmGE4e8cB7ynbWXqFjbhqCXx1W35ij6XfTkpGvIaABeDSFcspHnhNHOKSa4T:RoObOKlNDtMzfbv3:EBkk6pWWMTjAno9qv3iUPjlknGWE2qxX1o7lerqlz9czlAC6Pd2:psmxFbXs65EOkhEe6tezr8rVxP0%bWB6d0uy4mu0euG5ghay7XmjKnDQc3esR7m:s%:5eqff3WARgkf37Ry6FsMx0:HwA7WJpNNAyWoe8C0xJT4hWw2DpPaPgPOFHizOI5pNBBLw9DsHowp4gTW6BUWZuZWT1DLSzPiAwhzuEFmcQJw574TycWBBUftaOq25RCNos%cQaVWQcgLYUNbHG1bQKaNykFFR80KNFCME8sY2FMnBPjh1bTwcXI:TGFJkU96HxqD%p%xb%IFvRHAOAq7FHIBjS1Yp:76wPyIQaAGxoDT2:1R06%EC%4e4MLXNJN3APdyFj%LC%3%P6LNRs92D7Oheu%n5Ov0FhHaXH7Y%PxZE9naja3gl3fTAReL8ut5nuWu7wvnuuQStjqsI5qYqZRathkDfOhLxxpn5LOOtI0cweqYdtshklizPhrA9g2yetqNkZf4nGWRcQooMK%mktMsJZ6Yv4CoafjzHkGRgSGihoraMM0X7IlfbbjsxB1KL:qLHGmLadtf74wS2FfUjAbD0m7Wwz5l6R2RNRVUDHDvSY3vnFKYp:X3MoapXBH:5gqzu0G0BbR5h%nCFURAEA1B:xYdaCvkGbkalFwWwzKj9vR:tpFvOuyRRM9n5QRqYWJYszu:mucncHKj6KMeWzADxXbjN9tdzhbTqXoJUxVUFhCs6XhGnrSD1u:PFIHJjagfUvxi7TNBz39YA9ScrO03eDFgCGa8lULQNZ2DYtU9MvwVW0MB2Vm9qjYwWyeIF1tCGm7WP7Y:3ZzGzdoMyDtciIyfPSkV9ogjm1f4kPrmZWxsBZucr7duKwPDLeEOD3QFjHbzaryIn%Cs1Jc9JQs9MDZ6UPqyvrBUtxkglFM9IUCfRovrOO1GPBFcOx%eMWVHzcFg3cXwB46LwBrXWkHufbLocpM9Og0zFY%4w8y6e%yodZ84cpamtUgREVkmVTFSEXQdii1wNai6ZfYzBxZmo0aG%BpFi7dYIR5hS5n8oG%ejf9Fvbz71hOHQGBjq9Cpk5OiGYOAA:PdK:dW80yn3lPKPitqSCEgCytYzuN2ON30tRkXEqgqv6KzStow0x1oa7Poi6g17c8duCAfGdVsOg9NpsZOXosf5lZ:S8njPQFssGYIKx3wnzZ5psE1NQtCANlZs7JD6cT3F:oxlZRXANIN8:mZqm7tc45I01wjJKB:fJ%JlDk%emxbTrrEvgh:JUcR9KFmXEtjEAcp4M4N1nT8LfER5Q39hgLALHm1QJmb6oODXp9s0pqviuwsngoPHylJmp2PmpSzav5TbTzOUO71mpCBq95JMu:Y:eqBpw%PxMXguuGC6PPnaE4WpilS3PpKhhLZRlMKUgZklG1%8%Tp2XnnDw8y%IXSI5drgrsb9:ji5PO4eN7zdj1aN1sYDtR99aT7NJM2jx4mGw5uoVtV8ww3zGx7Aw9hnzz6V5LDfJzqNMkBipalKjqCQNlVt7tG1DrR8Zw5SF%8eMN8JZJTPX5Fu5hmn7PQ5TZ6Rh01uxMQqrzQizSR3TbtX2jsQMd5bnou6YD8eOdKFiQ1vfAUQlfUvC1LXajJi3OBN544zK3zuBQnWdZmPWlxORp5MDG%QT3q:Txmj0tPMHtDzOaxo3IUUG2pPHfJhSrGz8Ro4xJo6wFpsHNAZaDYPi0mGo2Chn:MmzY3dKuVrY%JoMQGtjEFbrmUtc8XRy8HRyaDjhR7MzgNqDXfB3hpMHoYIxMqeoUTQvDQFfz4:SMjRIs2gwfISQ5NHfIBkAuJvia:JgJAEnmfFo57Dqr3Wwjjdi8pw05F8gCdwB6GiLyaY7OQTaZBkgVZ7nW3uwKyprOgnfM98IQ6oqLpNeMHHg0fPi2ekxoM0fF7uueWR:Z8I2Ot2hfvfD1coiGOTh6Qihs11Iiqg:JlgW7hYW7obk9ym7Q7SSIWDS1KSwv3xiTlHjqhtzBqyN44LNwyV%HwX9jAhIZ7UPzmphrKzjjYLLCKBmn3zZsTXEb4eQSUfPNmjrZBPUzJ7:oE2Rv4K:M4y6Yz7kFRgVtVM4Mw0Vn8eagbkjDQMeg4xhWlgvMMJ5VJj8gqlmwTSOaveEI3HySNVeD0oWZip%9ktP1sLtDA54nN0hWmnRkCKLhhTFWAGng7Dm6M8Lfti:sz3hdw11:gH1MwLeGA3O06%eqPWfPFugjQ5E1UI4EkKYKGdQSFc7j4NRZlOssXCqzqe4naLJsVvNLFad4M9G3etqZhW3P7PE0t3upDg5xJ4OrhvUYkA2EKZoks5Ff547dU56v5nDF6YNx33hjziKznhgjVCzM3he8ILjsAfbPmrt24xP8rLEFnmLoa4wPfx5W%hRCCWSmLMhmOI9ZJNMwh:0nNegjVd1oqpCeZ%tOXpYoop6TZ2dHrvn81QAm9a1KG7fZjPDYFbBkqODzWaO%b72qDzZoJ2jX3nDdKP0s4qd7cpBW5wGg1nVJyMEeerq4GjVcV:4v1vdob:9:YT:jmaW:3qsUXWVmiC114BVlfec88DWz1ux9pWGaKFTLfdpw8pAm9l70KoxyH%%osa3:AtX6OTZtCbi%bRbIdkwsOn9JhSMNSEjQ4vzkVqbY4MO7sYgnKcCigM38xdlYu1rPRNfOCE2CFW5vxM1BzzwXMUJCfwKaM4lmQn9taNRSz1tIX6fUUVqU9VkWTdoN7Vhztxhip6rVTNYdP0I2Xt1m%N%:r1t7aHP9nZy9ZEY8IXp6pwZqeq5c9IMD2sYjIoJzE02Y8aFgtWwZ7sbNQc9cDcG4WphzzqPuFwsKna3o2pvB:yecLT7yu3p5F6ab9GURz5raggqc3WiDN29ndzdPAVYSnXrWkLVAZ6GIBR08AHgzoZpnAi0:4JwsFZ3zdo3XziBG24ZdUajl:0l1h9:Fir3d8Karay:%WNMMJhV8HvCKJhkhtkoX5JhWR5Ve4VI9Y6tbSi9LEuZ31xohk4bu0Hc08Wh5qA8sLG9nVt:wMMdeMxmul5aDO7TD5pw4025ip5ru8CM4vnDULFF7rOPMTDXjzHorv9uji6pdhZ:OwdTpvZE5vNGG7GGNqDmkAcVO9sVj8fGT5vR4e6JwmZbdUJBgN4sgmAYTc4gGk:4YoAqBey%Tu4lDSHBGBAqWD4anWeUzcs4o%qCvxz32QHoIJRhIhD2SHvEv%cMtEEAvwfwVndwxxPGqufqUFwyTJD0KeqkJWGQ5dFwyo9gIIwmcWdIwB%GuyWInNFCsOiCwhQUFpqFEiUKqaUpfpClal8HFizIVNSmVs1gwWVZWL%mEXNLMmKkclWlp5tR%tO%2Rh:GaPqsBywrhD:%QEP1wAgSCnWgPSAtuaQBwdsHZgyRdmyVmlpFvQ6Bts2Kj7mFpYROlx5XY4QxInq%4xZFtQc8vRrPPQ6BhWHet695pBnwAzt4WjdBhe7cns7t8tmUnVdmN7Dq40nfAPStFoGLIRSQWoAKhG0YQiVRDmcpbBtIvS9DWAeok4UqNjahoqtbbBk62DJ0CLNokFamrDk0tER6paabhcLd1PfEcsakVlrDnuwOaUZN982RnFiRH1N:Iie3xNGbY0XtvFmRe1NmZSGk3U%QUtHTcHOrW2y9vdXdGDWLMvAI5675BHPNpbug1D4LvRQtff5cptpLiRF7tavaYROyyh%t5J5mRg50oiNnzQlNT%GFBXmLMjE1KlpPTWfEjC23xPGzu1tKClJPsI9dWp6v4RIoqBZnZ:f1hAIV50K8FUAWhzecFM0TyiBVWqUG6ImZJQIUBbyQgkKa5ucGdACwM8glEiJOZXN3RRMatKVkL8rjE2fteDGG5M3:ViWR01lYum85fNW2MaZFfflqitzYia37oQv5p13bG7F1Mlp:bIQIuSo9sjaDfFwrW4KvgcgAICjb8yg9j9XlUHY59xtf2744DTMN2tgHaHMBcgbZcQdd%bDUe3BsaNdqK3ugl9S18uQokL%%BSMuyAF%XmmnndLwOzHqnt88W2ftWJCYWrSgtdsVGPuJZnY9nlrv4HaytIqDtSXo2WmFaWovl2UosKiTCBM4QhR%u%4EeRkLaMUeQ4AEQ:yom:M6AYpuWXPWXcJ%7Jzfw:gKwr8igClZ7ozNZUe4PrkBVZtrTzi2sXRr01qMityQoG7KQin06%YsePRnl1tcQXNzp1tKLkoo9:tbvlCXhytieU:bw:RdtFNCYOnKPuNrcn%iOMuAG%KvhT8XWGserEOS76TC9sFyo8rtY1LgW1cCnBFHzf2kmRfd8KHiq:l47Luo0YsXToyaUE2e4YFVYc6hZwACTmD:EdBnnZFl:5hefgaAnztAQ9XOyNNPfbCNPUdWoaJkfQqApuKkD%KgdXunWuK%CH23VUAGPD0nGYvJOOcrn:A4f300fGmuyhwsQpYwBCMSKZxb5ie5Ci8rSzvCPLwNAT5GgbgvWHqqfWFG6emqvMWDtM82l9JuHuHnGHaObqPEOw1qUh3ofNtX7lw4:W5Axok5%kAao7ET%Tf9kUrpk5KS9rPl9KBwx0yZqUAt7uD%wBC5UahiLs4HmUP2d61r3D8EsCz0jbWvtOA4gstWDAvc0AaXynV1fvw4X9j9zQ76:zYvKUVpd9KLiilVTO4:vpcvLmqXqbxrTrmqiBPKxuD:H%3uLlNBz1c92Rfm6WddKtVV5qhZW5NxiuI4a9ks6KyYnaAXQiAnOuEo6Q4rdxmossd3ucAvATAeE2WdqJZRSYYVGSsQUVGUgqmk%NbW1jaCgANQb7poIdrRE8qudRZZ8W:3GSKzv6aL86mAJwn:DKGP9jFfTbNrNZIQVtT1QVnY0BxJFkGzK9d0cLomEkoTSNEdD9two3XKRMMLMtj82dyLXvSz6:9uj10JOLP0pXTZSfulj1g%4f9cceIaJelYrsbdce9mL9guKA9zzDt2uvGpg3NCb%v2O7GqFxj0n3JSNfi5u%NFoArKU2kY0hRnkFVlGdQPRSmusMU6GQIRjEJzrg1mFTIGWlA4ym:rB3ZuAf4gYaLvhmglQA3BMD7QTO7D4ADgBFC%FsntsVIoBeWXJx4hSV:%YssalkBuYLxKUmH5D:%SL4R2xng::uFK%T4whVyPm4zvUSAO6Sgu3FJ:7Rt3UkfahxyLXsywH9caFJ1n4Ze4%jCrj1uzJqWfFDqg48aZYzFUXSua2XfgbDu5wfAxRuLsl:Zfm::q6MOwHOQnP7gbmGxdk0DLMO1mF8yHLaxgw9eZ1MA23a4UFMda3V0cHR:mlAqVrAA1jRgyfW5SfcjI1WLm787Gu%tbYC7JXbtXUUwsbffLyzN6h5:luWxeXsrKnbGHqnS0hJEXm7yKa6W4VpZf8ryDfkIw3EuQduXPaWDsEb4BwCXlttM2nKbKSQyVQeAFginBjRASH%MXA0QTgVwAmgU72kB0ArhHJ:2FeNN1%sZIjsdfVJRWk8crpdrV4U7ZmJPBvhd3Roq6hDgmuou1NX7kmpberEsj42fy7fVnQ7yG1eeCrzt56msmNemjc1wHOtKrs0vm2MYv9YXXnvMFz4BYc2PBcAnaqPsftvKMMVUCmyMCRK2sFj7XgOeee4Ytm53wdXGKn7v6P46jnVhzdoGrHr9RFzAHu4K:3tDK:s0FaypHtP9vYakxiRyZaRrcevNYzBXQQTaOtqAZbeMwayplu52tBoGCy7MhCXetjqF72%xyNswqEie7J7zSNPeJIL1x1Gfd0EoZPUyAMdyh5cTAyYE8mMvIto28lqUPj%9%xXtf3PcHu2bWTK1yB:Zd9kSl5vFps:kptkJP::eu03BTWLENfTAfbZ19r85XpT2f%PnTbj1u2OEcqVJ0uavW2OEwwEP9xGAzlXO4D0:GqmfTIDucp9r32:A3HmZmDoxLSYn2uVm0XDaj5272%BulbfpCvEVL54KvC4KQi%AEH1ebhpH04P32arIT:ZetmK86bcqgt9KtS4A%L1hbNvaim1bW2EwqZBfkIKs4Trk5gjlWDIt2pixYEM8Wt0sWJZHiyuI%pM%1BztShzx52nT5rbQvz5zhb4GcPriYZqHhmuZR6V9Wft%A4pnWlA6P0kfV8WgZFYGphalobbei4OHO%A86Y8xg:MLUjCxMBV5I41x3SqtikHh%FRsa5FHpjs6QgNaq6UUqvPRPP47otZnJZQCoAzCKd93ldtMK8t%bktO3ogvan:KcR%AJ6K:vnJRDrSq3k9HZ0M83vtQno4X4OnpV52BV0QN5ZcEb16WgtbdymLnXjdKZiUX6XXUdKFit9y8OuoLv7nRFdoNwFPtDXdSirsIwcdSJt32VSu2fZX8EkYHR6ufrPX:BcLyWkdP1DgJfvrHdEru3vuX3401vqtl8CMtQ%6JRM6jAVx5sAOVg8g4JwP8lpdPBVb6wrRVtKBa7LX%l1aMN3WoCJ6VjknFbjeaTgew5HJr3A0ecZdbDGpMsaVhik1IInG1C4k6ZpNa3gafPOAAoKNdGWhH5xplgkvPkHng8fH5BNq4hwLHE4iiT1UHHp8n8yD70445AH6KOCfhLbk6F9bMvgvIrV57KkZLHfCE3%ziqAs9qWRh8EDZvbYd9qcdvwHwSI9v24rhw3Sw5af0Khj2H%nApi:l2rw9RA%9eDLwugiuLgDsAz%zfWZ:2nFXtH%ZLLlDtPKD5uA:QxRtotvgBcCW20zU:lRybpMYa6gEsPwXeYbX0tXkdi1DLleTHgsAgwxWhze849NWdgeE0w9dImjbAfgeqva%XG4z8dFj4jzlx6v:rsOcWRmYNUV5QkpGqlZxsLLK0dmrAumXpgUIuXsvKbeZqDj%ffN%YeJcgbIqz4BA%0A8wBaMTcHoXCOqj3vgbPDHANf%tOPKsp:aElZZtz:rmAOhbOiD8b5fcmUubGP63mi%8etmOE:5oxno0:%cDq4TGb4LAEv:3mNWlv3U9qj9Wcd1AGZ1S6UPG1BcbEHRBfKNK54uDicbfahydMLvi00%X9fK:lOiDaUafSWA:SKTzkpm0EMUnmO%8IZXTgXeiWL6APoR2xQZiFvu8B4QLaHf35dnuNmoIvP0DOZqGTKgMoQult:fzNLqvZ3cjv0erg5Cgnyn2Ge3KDADADixLyshrO%:JDuL1xfGpi%bsf9QO0rnZysKCCmljV83w%2KDWg1Ov3KsqJMcsOFIRiDs7Rvti:Qxhwebc014PKLRyAjXZBwsyZZ4KjtwtpPZObpeAAf2591PAlgJ4CDEApcMeLfGQCujhueN6pw9SKrMHF9vP7Gbc2oqHBHM9K%p0:4n4WQC9oDpNi27gLwtcxcq3DHtNeLoOUqOrmVezu5IxIGZelT03nJs:YAmB2muAvAAgLMZwhk4WpfmNa7QtTREOAdezq5gyf84SaR8SPmZReAUESC94fKbSZ%ucPLAgg:Wef:F4RkDNP0VPXIqanqkjQ1mZKmJtMoBWNUkXEMgT7qXUP%MD3tD9MWN0fr6vz8ka:coUpvmPogBJn8ImA94uVFz8HgfFTfHQ84vAses5leZ4BlMgvDxWL1%ydhzTVg5pRhvVo%SokN8di8uzXh:PoTnAWc0EyPMucjWVHng3n8QylTG4wqLL18ZMwZM7YxKVhYkoVNW5ujgfu8kocWFKTgspJsIYG%Dx929Sen4HT6Y:zAx2v9j4iAjZjGIfq32OBN2U9se%zP98%E9fO0aUtbaOVGV2gLek6wDyTyOR%q9j4P4EUABgiFvoYBMAPQQ8imiRQ8YSXaqiNiJYhm5YBIonUja%OBvZ2cZ4SO6crUqLQA0k1qUkqAmIVrAmiMKjKK5VG7oZV9vdYfbkNPrm1AvPySf4cAhBP1WzTdv::oeNMOFcHPCDBOtoTU4MfahgYYjCpMm2TBhLFmZKT1f3ufo64LW3a2wN3GJhVfSYYyU7XRmnayqJTOWTiKlNtSAOAkJAvWSxaLJmsizbejGRX73YofZhmmRelF2ciz9m0WuTpYrNtyOh5gj77fFHz2cFf4oLik1CyClqNPTE8oQ%0vOGwAnoZwBkuv5AvThhN%:uu3Twc:EAMtLRAOxXYD8NMnpvOSdqMDY8MYkJkEuJgCBYQgDxREzaCICACOaLVOSnEABJQAtUSoGrIfwD4I:x4UosBPAJQQ4FpICqX3acLz2LWi1ndTF0eDENbWQ5IrLGrWpBh3ucNLvpujM05KUf9Jy%C%3u41GFTIH5OCrAwdcrMNMBvVPbuj4gh1Z0sAp5r8qDreGResHRytVhOETCrSvc677IYxQgwlSXrpP7WytnngWUbgpQGv1:bHpyXltpSZAHZ1A8uixR035vf5w12Vbmz6ujmphxTZ0jBxXCrycpLzYQ4c7cDmnS3w%8PxAPuPw13hSglgOwCw1D49KaNnxYuOK3iKhYRgAUeplqdQ8xQqH09bGwN8VaU3XLVP2BTOiuafW9Sy7QD81D5ddlyc:SUHICyRlUA4B2nSIGDtFIQKIlvFv0qZI9Kf65AgeygZClO88lC19y5I6jkkMN%LIdSKjpiOcYXPcodX9euxxnk6Bkv1DPmfeJHuXi20PEHmNDb5Y3ijt0Df1Vm6K4dpyOJupbSod6UUTVv3ubBtd9wVgRcBfAZhV9xZBe0vATwZ%WDujAyUTEtuWcTj41Dr9OHoiS4EgmE4G:3dAzs6x4jhFi2smfqk10Y9Pg6b97aiMk7Ur5Xl95fX%h8XQXQaQsJGO4AgLS9WZKqQ5RVqiQmbBsCEnk3NfMSsFEHbJf4NAAjT8mIKAPaXq22iW3HLQICRJB0C8AaA98te6UoIYPttKQ%I:elTcFgnhjFmIoeRY3lo9QIOK77UoPLzGByNKHulqynOsyKC4Ye9aPBTYr83lb3StR4AyEWEAaC%e7R%8nAt80MdQxYPdqSbAlyVN7z2lVOB1QDa7hltmDvawPyhW8JMtqB09nBFfvILq2t7ExSrATxR9krXDsWdnUv7Bdo:AHg48sHCC7Mwa0L6WbfTdx1px479rrgDc8LPf:Zsvf8l0YdtlmjYAH2sWHEJb:JgBRF9TK3ob%rQs6mZSsxBVrxC4ue03GbKhnDg0n3oxzLPINCLANaUreySnUhuvz2lz%U668QwJpeEkF8YhjktPrOseV6Pmp0yc:S7ZSu73pY8xwbgfsQm3iTT77vKVnaFyTxCRL9QA8DwSzHSbWBw4UAi3SxP3ScD:Lbt7dwX%z3ccZFHWr%bo0ubnqreLDXB77wxX1GijauTxbqvmuA83evxofeXrex6UhEvziODoGmnZ6BkSsZZ40BHfRe2VLTC7Y71R0IUnsNd3Pv:dgbXihq2WYy0dgII0BXFA6q5Tx6qYBDZbtWT0RVJUAujJ6srsiZ3tyjgEqb3GNIpcsaHMdoWRuowCnO6AI7MbB5aSVUXNgi0NglM42kn6GwjaD6lQuNxBu56JlkQ:K7sZW%T:UemcghLPbFxhNE8CudwmDqXSwhUmWuyQ4X1L8j8vWfKXvbeCwD2H5luRz:XpEXaAuC2spe9xwGAlCAiPDWi8DRGR7q1hIzQMPHHO0zh7%Coo4nlq496w4e3ukNHJG6NR%SZDgCex22mnQQ9%cvFkywonTm8X:x66Hgnak4kzBT7adnL3n8kzYMl:QtEyX3adC3uuDbvjAKVDfGoqu:CzkNtcLfHj:Q1s:zutxuDr54M8CfFwW8RNW0nAJY%WnxGD8kgv66IjoQmzBSLAGPCdA4ZWQNfvvN0EDhPMDh2QI3aChX87QmlcTOEJa1XpSaqIZ1i2qJQv:rjaiZY%ZAs9rC:7GXvNPuPTDdAsp9XpsGLwsjO55E2TPBS%hA%WwB8q%zlnt0SEvCqJdaPXmIF6Q0MMS7O1EwPA6qKTq7uVID3StyZyEaUoBjd9kouP4SltDIAj8kc8YkWLJiaoUjjSjXv9kNtqDwa48qxAKaUvex1nEnQxkSPF87KwqzCwTeRna4AKus8qKrphD8QH3N%njY5usIb:t0Y:BA9GTeRQJAXAEv:UnzGw%3ktxVSwMY1PS2jecy:loVtypmTH2wQqHWocGi7GjW71ImAmyUF0NK7AzKtrpTsP47J8hkB4EC0hVEwi8PC69iEgsFZz2DbOk28fr9Y9qL3zpgxX9Bt7UQArBGvyL8jn0csJCB2%ycrgjeyBTRMNwuWkv3Hpk%jVw8MehXmTM5A4ZgUmA3K90TXnfbhwy2N0fz8WNmL3qSOviQL%g:aFYjKWJo7LQOzbZZ%SaHolzrV6kdVnSehVo0ED477whvecAbf8YVpxKxpE69IXjFH:1x8VtbHyO8qEgLWkE6xYGkQU2af3ROxegFBNy28JYhZF3MDes4zZcZo7f5YNH8suTeQtLDa%J4WFR:HBLguLHvRu6MPhmZEgMa7SA:ryCoWRwBMI2CVCKOxAF5BghPuisalYlxuCvJHGBXxveNkF9Z%KSsIcKrsRe%oMw1anShJx8dIoUkZKBydvBRytgXQ0BJAszuAyuOdfd4fovDU%8NbtrVzmw4IwQMPetLjIrteWABh%qfis5Y6Rn5fgXKb6U%I2nBuLeJx%feCg2IG95cO7FRh:UvxVencG0MoWRwaUPtrXtShZpcqoTZffIdygRWnzcfKXvD16yBmcjGV7iij9EuS9GTY7zSOFf3yXtfri8amYtxIEcDqvgH80kd10UqpoOwFX20S76L4:SNIDIq%0XNS4PoDYWza3YxNu5thSdMiJ1OPLIt8UbrDG0JHVwjuThbujuTPHY1Uz:vcxX5RH%BPQ1haieSzdor:DwII0T%K2vUs4qTcZlocA9gJPJb%j2h6KtD3nk7BR%10y31TnYEicwSFdZQy42HKzDCO7gujZndsjeBtazRITecxZdYArIDYce4GrGUUxZSZYcX5QDMWhKJBW9LfnCL6BZHvZlXQTtnzvuMALiv:ifFBALdLt1ZKqfJ4JyqPd8KgV6EwPxXjrCbkZSfOM7CYtdGgzQM:eEky8UALAJ8D%B4SJL67OwRQVqKz3w%LhOTr:Pzh9a3sbvSshXokQO1CT4ocT:9QTM9Ravb9MqsjjQqA1SYvPJwnGVRsVaNyc%9WiiGNonAuhznf4mBOTa7xSbO5uKAFgPUv63B0fxiXLWWTbi9Zmr2I7ZfwzBsXg6ySc5dyDyx:zvfYPT:UP5WtI3cwIIu0TPzlMn8gjIojblQcccOSpkXhGDOmFqTFWp5R78JTkDP1ftHctAfAbCr4LwmlkBLq4OjRVpavPtwV3iWG5IMSsEqTF3wRzQogTB8WTeFzMLH2t6ofiDafbrg7CK2WJN2frRvU2PZecgk::g6CinUaVKzTYOHNIcya37dPah1New1I1exW4dWjetz5h34EpXp5x8xsClAyOAM9WO3013d:Jegnl:L:APDyrbn6qTk6cr2eIReaVCSuz%vuYLHtgAvbDrhgzTJgTLYROo0KwVAYNafkS0Db2kNfJfd%dMCgFexs4LEjXeG:5xmZOwhwsYaQeSqC7GRB6mJ5hzPIH9vbyR0%FeDb0JNw7kfPThGf%O%geHGQpMnZ36o%l:N5qfQ:xYs5WEdSZYB9X9OvB296U4P6agbXLGN7BZvZTOOZsDLg%jsINq:ToHSJMh83LZP2zmODJEjJpTxDNzLntA4E3ciESSkfeK0hsBfAYQCGa7O0k8cZVVdZNGRJomQPZ7Mfzub4iRZ%nq76bzNLyKUgdCMz6Gonod32SkPAD%AfECpAmBZnaotydMzMNDWZGAbUlFIVDzCdHG1xsbT5VJBvPtRTgTFSyC2I2J0hkXB8d0geQqYRxflBc6K17IJFHMAnpxU8nSQuYJtZfnd7iDYwBGEC8ISA1xJiytCSyQaGjJbeW7NHhdVdOiy7p:cYgdXGw%noCZKEeFypYfBzSAoNdLQwSfe9G7Tpvbg4fgbglePM1UKizcdDABjw5JyfgEw:VfHksnAk8y3432Z2O4AKAH9dZtVdOFLHXJmmYa5WE:RZM8cfpo59Hu71P44z3q5XkTn2n2IMhLzs6HNcTgCoK7dhC4Ctyx3e9QMGrWSLFw%AW9:K7gVwBD2L3lr0nGkSkcGRRW7pjhBW8m:uPAWqlK6TadlFYUV%bG21PNLo4Wjdjg5uzaet7C6JhRFxA3gAuHu0:oZcvep7GoJu8DodDLZuUKOkNLGprDfFKEELgNuloK3ZywjZwYNkHh%rVCFvrHKcHdkn978DPN0FQAUK7nyYdLpeFbEhgmRxuDv3fJUz%CmETRsP35dnuM2kInNManIJI%Suy4ij6NAwJHtuumZdEo8cI14Xi3jrztPuC8B9ruNINlZHXkSNnsXuyJpZZKp5iaaNLqNKB2O:6FkgWY7KuAnKNk0H:XKN0sTyFZ%2slvQU:WiS%oOAMA:6gNPjdIzL:zPKP0LWoZ0n%Swba0aI:P4hCDRG%Qd40GHlT0V5Ow:1w:UbUpIFRtUKJ7DIWN48o26Wgi2rZWzWjtH94igPe%IrlN18zG5PMyKlqL3yTr:UxCWRw3fGaGbPcbAXGlSkZlahuSqCYapCdIG8NiREGJJD5bbTC8CeHm5I:46dtLFysWpZ8Xax5F1suhFbtl1nmpSRaDNK1AYeIl6Yx1DwhB2JXXnTEsA2333yQBPfnvUd%1j401bGILpkc8::JcWP:hV:ChwlpXKirWpQKaCkndE06u7woKng1EWRaYxGmSTmmBh5P9v:l2Hm%9lkwJu3XEGH76qiTEh:7fO:wkg7iY%j4l%ouYB8OQKLixajf47R%mNI:XMPB1DblG6vTBJ%jGAH5fbTPcvd3if7BdoEwAYUHTa5zeCZBuJLblU8XpkblRUd5Se%XZZvuGAvdb:VASw9CN13FbJVRwJA:cwQnkcgcE7gbVvaLDsJ2yf4KIAIVdwpNymq5ODlsCc0n:Qsjzdq1aRhdI%rXxEi4Xf5lA4mY8XFIOzgcG2z1So2RebmHDMF36nW7j3w:ay36fLhJDVNF38G89n7I4LAjgOYY:vlrIng7v7Bd6P1BQAtd%nK4Owwyuhf2vJpcgr5DEqn4c5DcjM5GOCih4PgaeToMbBoKqCgbshrvB6otxmylvu8P5sQKD9P055ssEfrnx5w2qlsFgp3M6e3w3XMn963GaaQoCNZU%w:0xkEtIPNRRgt5Xfr:0VAf7aDYBqgq2fqVFyiVxGVu9XRfnP:HZEHVjVYwORfgseHUMuFKs1:FT6%ab:qLHpP4D1Agq9xKhqrGHgT7CcfyrAr3vdGVzf7dMn2S:7:VqbGG8oQYK6Y71YTiUSwJ8C8D6ArWVPsElvXrffr82GsLMq7nquIRWYNj%MCVN4ZMRE32OXCs0pgDmFwmoNo%RbYTgbCLZ9HlfI3VtuM3213OHt7mskjXGIBPoW0FMStmAqjxtvUR4nqathsPq5hPKwZ0O7nU28ob1M%xqiys3OvTKMgvGCaqrYoULlNkaKS9:LpwLjqr3h5nKb6bNIgAMAlv0iBGtu8prW2UCw6n81UvN426%rvQvLbaa:InFN7D6pxhf%8PmTgecgnEDRAKCDrtX0uh5lL9NGig2cif3LGwCsKbOz:%yjDzdASDqK0a4WK8X8xWHYigYnXFNXw%DDVepooVcNYMpyhzcIAIRSOgTVyOQUmuWgnUJx47L%BTcdRxhseFeVUONIAPyhGJ3cVPZ4SHYArv0BzU4kWZbVFeJffbzG:ysA7eU200sAfhD5bskPw7BN4JWB9u:qGNDS97Ws:QHNTRAqd47vz7j4ebrvkxb2h9vbueMAfPR9bdyO2R:Q6CAcR3M2ig28DuC2ssdD4Tj9iFtc35AKLLgyjClnYP%Kq5VgpT1G6D%43OF9fMg8jqUtMs1wgAA3968hm42H9R6KzZ8xqNyRMOF8kng9CKDL:oBmk%iDbSpbEdqBnnzwXoHbxdHKx2v8T0kChHXS7zvdZEAFurtJaKMOwEoKfF%6qTxZMjBk2pIs3R%2t3Pfoe9q%Xj9sj%kWQzhpIuEgqFoDo%sEUDuaB6ZmVRYlosngJyC79jSRFC1n8DdGNcc:z6APPsDmtvKVoSOS:oRdw910Rwei64UlwLPwHpIxjCKhdfy2PRfGd:cAuDxIU0bX9vuA9B9%tvt94eRkTGwMfJ4gB1fq1C1l8CffB2vbt8LQh50XOC2sPzOtxuDf6sP8IchFLvrKLeZfgtpCaFrecyao0DTOglWPaOSaVpKsUrD4GIAS5Npo2AyRbaVQqcH9u9k4G6Mwj:FFQ%s4GLWM%2:VsfsrOo2RXOA%Yt45BfwCUHapxZzEVTsZlDxZVzwbil7lFvQWz8Wf4fHlGm8oucFg0KsQwmxLPDCE%pofrlgucN7bEjTxte23aBtqCfIsAwMtGYTULoojAUXA7U1DI45CGqr%gTwSAD3iNcpCjweFrZOXMxRqm1hqaPWFz72YQu7G8I2Rh8kCRsxmpNX0l:5%zIEoxiCZ3r7jWUEUDiFR8E4GsOgs2bx%Oi:KlTuItI2LwYPGWjtv1XH%PGRtueX8rAV8tFaX7kWs1CULgpjzoXApx%pUHNIBt759l%rywFsjwaswQxc:Z0w8vL7XlFgWWDzJhWqKnrm2DICuP7m5BWAVg0UFlNUbJb3D8AQaOPQVhEoAICDewimTBmctUStBrDZKGw2CiwRNFrDKYLqw4CzptdnjCTAA2oChCne84ex:ekT:g8hVJHk0bNLKihCtEP642CAKIoem6NikwkPcTYDhdMoiiZFATXOs4pnUhloAZRI77P:ThW3OsjCayhmzeYTtttvQZoC3HgTj40WBhVbZO2WQcjhlr3nzT:ikZHRdx9cLoI3X2ZiBLL7NPDemyrc8dPkV0nTYhexxgz5tPFpE4SspRRAAJOzgcCaM:huhHUEhXUExayZgnR2OgmOHSWoO0bgPh3:NyqC6y0acv0j400XNbP8W0:V%b9AT453iL6lp:aHsU:6m6aGwfW9imZSTJwsALXbTOX7ftco6t5Pa39Y9fdowBrMwA3LeGHcz2AeXWkpj6YGJlpoyqLENyzjBWurr2NYXQRvvsIktKDcp4XssGS1baqZQrqCR8U8giHQRlFZlafJXmh%DpLqhl%sZ7Ds1jObgalVA3mjgbzRFLiUwtUGHKkkqDpE4G6KvV9DcG2ujrl2xXjTow9Vex8GwNN:G%IGdkCJ4k0DccE6g2LBQirRxMoCXNZ8wCnZFm5:WFUMYG50sMeaDyy5gReeo6DfzkbAbI61FPqieQuA1TXxv1t8A4U1O7l%rPsgFrDeMHWaVMTaHd:oJMhI8tBAnZZEezkWAGQItPHpMylonbXArp0MZs08e0G7jHSg5CKg5CIK52mgYg9B5d64mvfX5TbT5LLf0SW9AmgQQLuoFMKe4n7KL70hJhhlYQj%JtOwKcDS79Ckn%PpAnbsIKj4Wg76y6%kyBiWpDBJsOm0aDowZWJyY7drN5EJJECo152iRroUtEJ2fnJz0dIkv4:jcQgAYYbwGVfbrgdgl9nMnwiSPDbD%sxf1mzgqispfvILiqLpcbt8jf3PZG3Cva79eKYhJb5PPuD3kRLB7ZAe:JYC3HwrTfo5Lhfw6otywEaE7JuvErhcybWjjZM9bEgBFpXSpH7PBoEdW%S:r:fzG5%t9::TwBBZAmP3jrEkrmBQ3maIUi8AZgi0iel3EDJRuundtwhcraKpeQ4us5HgqsuBZbcDlqw4wP0LWStKcZlP23gSip%VE6eWoMMxsP5nZ8cEuGRHYC66AshIT64tNkDw5msE:gQ1w:1dwJuvCff11ZanM1bzLboC0KqT60ttrbwffp42vdIQWHnnKP1FRhWRHdFizUp%vE5EmeyNQX7XkKbthcSUsZ:FMMLrgoSXFe08y5c1C7j1FsA6Jg5wH8VrZQ:CHd1vxc%Jo7HXrga2fgWwgf71W9fL2mpBIWAbm3xb%w8gBrAdHD0W:d4ffNh3W06nvB1LlrK%7N4p::1JP::ZTTm64rFGlSxXu:jC5Nv0dALOOkitav8LJwMHhzRt38BdD%DPMkbwAiv:CTiOisso5%jSagiW3kDiAff79sdwd9xglKIr:phs%xJYvQZgg2TQ2gSAy0qTb4cNEuz4KtZ:fOS472FnkP9I%nlNFbB1G3pta8uX8rbmz0%%L54uAucJmSfCpapJSqFJVSbdtmcwAXNmJt:ujl1RvjtHv5RYKEPUB3B:D%EsUrnWWUPx0ScUrHD%:Dm5tCpg6bUE1tEx3X445hOl7fcCMOcJYPNXdNDaLJ4NmPXJt1NbJwjPCAV4evpfDYGVAJr:t87:Bz9Pv4gWNLv2xPbX0wmsXkPhbpH4sibAlq%gL1EmLMvT5hE6ZkmMuX0ZSfodnU6gImr7uzvE74vYQEOgTQ64P4sH3MoDwAsvU%yqAFj23GncJVcyMMhLz2RB2AgvibIqbBsxNZ1kseuKnehfn%OBdhKjqI2Tp2KCPp97w7QRQhpnwz:qA9%mQmXRnkDiRuClVyk2fgls3Q6sWQs8:xyFs17e1rRiMqC%6BhJpFikJdcR2AqStCJYgnfflUu3To7u%0d94O2I6BsCrQLg8sAdEKoXyMzlTZ9RvPAyj63bKTyes%:jmg3AgvkxgMiRgVZhv7KjDpQL8HQNhGyxHo17euB%snUUkJGmrJ2qSnlDBz3cZxCymFoAuJuCfDtP8ZPoQKK7BajYRbFtK0VNdXy1XzCGKOpLozOxSWLJBG7:IQNbfnJtskFg9Xu8zIoAgEMe7j:oqXgSHgKtAnrQ4X05TDGVBz6KiVZ6gW1fUTz:Ao81H1I4jp9d7TulkIElU75CE7vsk3x70Qv7DEFqTE4QxYA17eSJyrSsp4vImJrl0bKjgzsEIf%6C0CQPpfKP:hL1W4Iu6QU1eK1Dlf2Pu44B8QbTMDCbzG44xaVEA1PUsOu:i%F86S8rRp:eM37zexmCHWqWAB0KLkiSSq3mdQQEra3LHd4r1kx3vQQIbidAcZG31tzlKLmqCCBiyYSjMolyB9JYDad2T7Ov5DB2g8TZCREfKZkKaoZSuNUxBhgmwCQmaasDZdLrtn8PD0GIe9aOFHxmVQaaa:sXtXn9qfDUyjwRwC3ECC3t7YLxhFFffFEaURLBjB1EoOpE4iw9ptkW652ijfX8PD7oj4P8RXP1wdeEd8vsiFkCLRJgPUBRJU4KbeZtgLY6uHotRoGN2oI%Z6KwBbv95WHKSoPU3FSCfLGEIzKAazZDMzGwe1rfi5BojSibq2fNMU1%7YA6D7nreG0qJkG0KZ1OKOoWmRLFGh9YXpE1LAs4pSvKbtHHQTwILm34zf3jDFMNDAoZSmsJ3zhhlQ1GT3JrP5F5N60VGVj5PHS7jkdN4YgL5f0MXyxdMDBY:2G2DlrZfn95bX%v4gWRLsI2jAwlHvcG1h7O12tBECJWU3uC1Pc:1C1d8avxxrv0hKUGFXk2kRtul0UbhdFhah2rLkEkycQ5I8cHABrVUDBWIKa47Ec09JKkZejAGBxsE8peEKi7lGQ0qiLyjyy5ipPiWxukb9bB0cPQyxJS59KS1gojj6VFiY:76iEUOQtBUDK8nyD7LymNJOy97FmENxxk6rXMetNu27awcedq1aW37:fE16bqiaeTo62Qti1xUaeMATaxJTwHFMZTgieftxmsj3g8P4KwAvLrLrJuTrmOoOKzEl0Jkx3IKeBwtkgbHYtKCCYO12lUHPF0mgrg5rj8ewyZVok2qclBOkAmgbSZmY6I%NsvQ6Kt9sFAvL:cxQukaHDSbQVlgR0fGa1PLlIpyVn:Hwhj49ix34eFfsSIzxTy0y9NIOZemmGBkGevv5mY:AnlV3h7rpHQ6CNQ:ZC84p4gC3IZ1BTy8eDwz3lNhNd7vD%cpUzuBvAQQCGEotm9PRU9dVmNZltUpEZaoLhiZ5ZU0NRU8OhIJ:BwjkqZKT1j3mGp5PEmlPBpoHMNEbmlGkImRQDWoVtRmsiva4fu48okdmeWtJ9cgXtqy36pIUCCJP73DyAkJYhE2LemT8zoHXU8ThUzcfln16FJ0O%:8Ncfd5yh3fBEGh7p1uk:ymewmDBdHV3YrnjBI8NWzj45ecvRUpdviMGDAJb3SHvVnfoOIRjVAyXZWqLCozMPIuamZ6mISXxjpaoqeXReJrHovlq2MYoD%5r1SSxOzmAOlG0p:7UoLWZZSED3iurZoRlEPpXS9I1lOlfLUIN4xdZOqD36YPqnDyOneRRdZSP5hXFMcZym6l8ucO7fAi08bVsPiSVGiwWgtLZahnT2UYzyLxagzc:DEVPxt:LbaZNZXdomwCwpMzNoedYT82nrWw7gN0A9LPT1NbZaZorUjVkZrqaLJY24vcDaz:lcPtSjXKNmyAA0uyiyo4HoYN8X6J7le52jLpfQ4hwWsNg7Joc4ImAbAiodfI42ZQcUDs4ejRNTWTHyVosBFMnMKh3UtTUySTIXQCGQJuA8mSDmBbfhMswE9x8pRYr18hyLbIAvAieLAEA%viwnjNhHmiLnIWkAqDe2cG17ezgqgFo7xylX5SlZa5KVZNvSxvbtCuMGy9ReOoEH5:rAkGlpmxsOyFKt6okkah6J8Wswv63GVTaJwD6qE0HegbmZExjmWBeGdQBWAhhN1R3fejWNgrrMGXWjcdHUevkcbSejwZZQmoM8tuNKjIsTU1k1SaLJ6tQOkuA5KxCYNUnLJyN3WOWUm4zzVzu8O4eSq5IRvom2DqVYWaweH4MqK6xrwz%PfpeuiKDpysyOLoiIwghfO%BEMpvfeFk4D9:Oe670x2iv5aZynW8sBaoZAscJYrfI9l2eAo6mG02tVLF2:uyLHKWTVGRIgB8sr%3rwzeBOAAgHUAfh5XiCi4qmp5rN:M9QlYX5g2HPeFP17lDJalqEhaDGAnqVA6QyNre0yOKsZMHtK0CVwR6X:cHb3XBpqSr8LJ0zwqj8oitvfa:xVA2a36n8XFzyMZVOpBkd%4WADMihrfkyvGm%apCK6K3OtyU5h1A1uq6Y%:lpkiB4eKYBI:UJ%WH6CfDSDVSKJ8WpLX63tLNexrgbh1jLtdiDbl9aiGpzG9ArUxyO8:3BXeudUdOvLDXP0l37PqVpAo3BVPVKF0uibm2U2tMZ3ZNwTaOFRW5am1F5pPRfxadzuFs5XCmpF4chbN0KC9k8LZxMuB%1oAZd83:KxPZf6XzMjZvuHy1:17gB7Qtrgp8rKTB21Dc3zz2N2p7FwibRRnEMDMx8uKUnSioPzexuZ%nJWUoRLjfCJoCUpuy9XrQImvV8C%7r8bfRxp0tjCK%5PXrYKlnQCdzuV%qrVX7aFVm11h44ACC6z6mYvsBhvT9fIYxcAUFykFgAbNW0eP0VNvRy0BzzcV0OgTUxvQKj6DwDYdjCEGxfoEjO4iuDy2Rq8uYGFP0DlwH3dfyGAJ8qWGZI67IlITrvr1iwKpH9HVwLQtp%BqoYDjB77AxQeL4XZoKC8q47IQEIA63iT6gfg8VxCwK7y3w7Ia1EBwMKZGuQOZ9DQwmPT7hDc7RSudh4Zqcq8xvlTNVj7ZU9sI01Nxi:J0v5xSVbvFdWLJ6hRWqyJO4abK%RHHIV4rH7DGSQYqlyRkDbJfMuTPHY5uF4TvjPMKtxcqoNBH8OAswC8ZV:lf92%yv8:iX5vX%XX2Vf5:w7JGTwAkGlWllBf5wz3rukGuI0uRsQoaM%sj2U3ZyuvuF9Tx8l1DUNwey:jejuEzLaeWlR6gtuv1mPWeA2sFhVmjdegYJTgPx45obw:tlw1iickr:8MeoIlC7QoLdbGbc9xMozKqAQZN8fvF99hqBpjAhN5vb3Q:CKEw30FFO8OIdVAYBuZeMgyzAxuLtVh3U4WzuYY8XkLgFvs::Y9LvomW9CTvZAB4RhHWVHwgpEqZJiTz811tvGCD56kplNKYYp2eURa2TKSOVag4dipMGy5ytiwcKQam3aHpKJjpv3fvr%X3WzsdkXsb:qyIRzNGXO0x6JZmphxHZ3FoOZkGPuqOcy2qROvdyeg0mlagAIVVb0f2FYwUoXLZmoF6yLO2Lk8PDbslGvZ9hDd:Nda:7sQVh6GQNsL3QthOaA7yrd2C4slJeiVyTJMDJbO12FnNYdtB%Oe4pgmtntxX9J44RSNIvOzso6Ljvt0MWLRdQBgWaqIGQ16IjP3TwTC9RZNz7s7m:kBm9yVNWEsKlbWL7OOYO5kTfT43mt:01csEYQzIHn3CC0p0cJmVccPiokm%:7jHGZdoPyA99KpWozLUeHwCQ6VNT2a0pJGkDdCheKxakFYJAicsRzFmxuDsjGnALfRxb4GSZ3GIdAmoOUOb7DcZroLwCdS02rtVhZL5pFegatVEZRM0GLCSDU2HWBR0xBW9GyDnuDmb%mRkZK8lnV5eFQ45KAN8rTawJDuoqutHcrWIXMyGFnf8w2qqQMKRCWg:TVhxSCZfYEGVfVhuDtk3F:S22%WzNMJgI0zptUne95zRyWHwlyNIl%7OzA1XI284WpcNVOZtcNyFKu3BKNjIjjs4V4V1:P9ENM1h3za3oH7OYRMFFkGxdqvgthVHeqzEkGGicGNc:X4ydVGzJ2ogaWPAIcllcHCaVrcebkBGSZGUQWFTQdkXUQnR:dpCMmIGzhK9orlt9hoHD%wNgWQhMCyVFE7Wobg%gt1MCSxHGZJZbDsUj1sOer41RhdYThbeFmAbO32gOI%9fdydfB44SO:rA8AUB:gN7zmDK6BsJ7vxdAm%KSBu7LcZkJ0MGPTPhbN7TwWTdX1adqZdQQlhTqUFAoStdXDo8HVI9l1GoLcYaoe00mh:7nrWKw2T1WTadH3WdPVitpNM8o3DaSryXtnQtP6gxQ7j3IoKVR2fmVGigp3Xm7E5koWFUdjXRFrJoPJeRoU5oo%aoJ3:2I:GxsfaOGx%XAIpVN0Z5S:HE4OG:YG4Q:KO%di%X3PnPA:C6ANUftph86nTRQXjQqsl9tMMVFIADDoCK6erUPe8HMj:xxODmu3B:q8r8Cqwo0XGga1bUsqgztKlW0EXrXZJ0SM49Cybxlgtaj6PRZOd4%AyTQzSfnJGw8G4wI%QsUXaLBgglZxYKovYjmKDfuDqDwRG7iSbIBvglCsrlXUtNwQaBWAFgAeG2%6lBA8R4ALYkCRo8LCSTrBDz1LdKA%hPV75GdHBHh6Ws%QEdLPFk7RYuoYTb8Yb%PBICqOxWfquRO0irWjw8lh7Y74gsCgI7jzMuOgA0RJXzo5ui:aSrFmMri8WD8oc8tyFPtPhLDDEYrRroBQv:nZev8:IRSpaxT:dkEsNTMEWoWgBYA:X2DM1DDkX4wka0kOXjXm2rSwpqvOWN9YjmLDwUCMlKYA18XRY2Y1KezWXguNA%6Lsz2Md7f5ZUxWPE6D0kn6:oGlMYQN%4JxmdaaocLSuYYzDlxHYygeYB2ftLArrs:W3qtlyIwYrTtOgznjdHGXrvoiT4CiqiGEHdVs3PemALffw735b2dwrahZm8S:nRFftps3h0CrDLSRr1eMNz2kIngkoeloZjB7nBb5w9X9muReGf5ALMNTgKvo5F6Znqr%sfTzsiXmQXmusz2MVZuFTMGi0WpcNc0wcNDsiq9xrRkqLJlhGNRxkwq8zY4gKo6HYsbvrcbgfRWd3J7rs7XMnDTNHxmCS%K1UTRajXHZalgtvc%tsz2MhrYwqhs5OF2JVxBaWX7:J62hfx:0cNUAXBDKwbZB2FTCRofwhkDbP9ACAPnzBca5KkJ%rCb4YW83WjNUGJ%jRu4wVb%0nquLxxFnCFUNHNyeWH8wROHZ0R56ZW0z%2m5zfThmQAtANjXCoevLr3IgLxM9aC1l8hUvnqGflCeIwXRxxWBmDEUBd7KtxqDqwE0ADgNoOtxm%lJAtzTZ7xghLyPbi8fd55iAnA8bar18Vv%1RBYI2pUl6hd3aIPG0KcmPtQ9Lj:RH931LcNwI4:jDN%wRAs0jPklrjM4grLJK3FzMBiYjA6UwBwqoGRpfg1uAWzt741jEZ3OK45JZXSbzUGX6wP8CcAtIQodmkIZkn93imjtIP64p0%OuCoMcvFvFMHhMQTgaGDFKu:9qNolAYLCnVxUyCTN0157DjOoqKGjWuW7u3k:vV2Y3CtCBo3hDXR8PJrUu99bG3n1wS4I5HWBYCa05yi:kTA%s7p4Ie%MG0XAdsmXp3i80NIEO8e0rT917TCpN%fA:JEIwNAszzfcLWOIZeYVOS7DMGwMyoxAO5IV:h9UUq3ixK65c8XGH%uY8gvZZp%mKDpo4UDIKQW9gUIlqPYXB3sZnqLmcGt80wD8js3VgZkIKJCAXg3iSr10%1PFmgxLkutSPO6unhU1McHKwC4Q7Tywxb21YMe7ojoQzZGQEvvz%mWsuSJRtWfLjDezYAs0jK4pj:vG6YINrN8xekgX:XfZvZzX5h2igGmDnH%IrWbg%jjNKUh0A4UtPcJp2%QJxsJhNxQ7XVZ2tHjTKobjAyZa1STS%PVguq3huKp%2SA37a9nftiv4c7Lk54m6glOn6ZZ0jL0TF7IFTRGBAVZKsFTc:G8ohBS5DTz%UZt5eHu0tu9QV4%vDvj:oeedxm%gUB:prQbNYS5GepkZXKYLhZFSM4WrvCaO7kUdfCxTxDSke94Q9ePBV4UwRNi%hHugH46H05MaqTPNmoAqC5Y6R%SrqGlBoYcpFeRWZqCLITPaODo0ddLO%o9fOVW9yhg74w9UKoXuITARsBbgSscc3hIdAOMmjFxItuWu7wMhHwAtDn6hnLZRnab2VoybwUFZluVJHJSvviC9OGVpZWNQTDVe81sVskE98hMloHegp2h8ttpushrClnfRPG2h%m2x8%5rsWQEe5zRQMUcxVAb9iCG4Y7Ge5Q7RyTyf3yaet7HaJheISx9APgCu3meKCQjK3OgiCOCVFRVIvH66dx1GqDVNoeArmVIBv2e:hIpUrwxDWVyMVS:ySv37xcw4JTzsaAu0ZB22cCVaLk6wXJ9owz6IZO0LLjLXqmemUgjGokKNnSLZoJpLWEF9FKfg6P3:kgIc71hjkO0UpHJJMepcYXYxI71C5zSSV0tkA7oeQhplyvo5zJ0erNrrYP2xv574C4Cq3mfyR8fvLBca7GUJuVBMsHAyw1vnDu95sDK4Tx80tWijdZwCJAq9PQIhzqxYFs078q4VwHq1anHdxOhGWzB0ruXpKvyrcfzUE2jMEWskEEwjnAKslEy2dZOlka8QJZyCUduHFieXEiQ6KV0Dy7xAAvhdm0wV4upCnuJSnGE8I8iiFihfPJtYzyNIyJLMPf8zfwVFHM8s71ATB0XqmRMuQgoGa%acC:FfPnwy8LEZrT4qgDUSBQ:PzPMP8VBW5Xq8il2kIxil5xukg3StaKJFDrDpFDdsuCfqwUQIvKRL7FxHOKsncMRLQRrKMpafQds:XcodXOW8OgfbMgjYBgFW9XPEmnZOYWaF4k9:HcyMmnRlAqqh5dVECQto3Rs8Q1aJMzaSKTq7mVID3Skw9LwDXxcM0:IxUdZGHo8YOjqb7eWoKU2gA9BmdOhXgmw54uNNie12RIBqAznKbKRRnzCL9N85JV4%alKK%OFVNJhlVpFAFpFKAiHWZ0cHRE60sf%JQV:jIQQ93ShyzgAhOjwhUj9Q0TWYMFcxv5P2lVdVpLyb3EGjPZ9D2MskkCjxEHijuOeG1nxoh0r5GYs5pop4JicCQPl:aJ17im:nEvulFIWAU20w2pBwxHQPSYEyi94sySfUSd0MvvlPESiFxfMmAxIeMHBnJ9WcsB5uGQPsNA%05YBAiASYTR0DEExqIAm1YovkhAkXqyykBLS:1%ZIBUVSsQBP1bKnA4aOsEzbS7:MBrEOgHQLt2QB75H1pHxaDEurTfEzSp4xnpUTvHqaDZQafa9D%vwEAV29dVTCJJcYAAAAASUVORK5CYII"},{ name : "__ASSET__:bitmap_SponsorLogo", data : "s9735:iVBORw0KGgoAAAANSUhEUgAAAGkAAABuCAMAAAATWc2wAAADAFBMVEUAAACeo6cShqkVWpAMVpYKU5YPExYXVoMORnAMVYsIUpErkLEQTYU4aopoocCorK9XbXwZIibV3uDO0tMofJ8KVJUZIykScqzm6OhOXmsCRYQFSowWGx78iVoJDxECRYMUFxgDRoUETonNxsIdJCgRFhgkMBQRaKULU5ZeMzBEKSHRfmATYqrmVz309fcbhbE5hbAlQUsIXJK:ubr::::l5eVelDmXlJeHh4haYGlZhreBk1::::8BQ4U3Ojzu:mvk:i7n:j7:fQX:dgLp:kwWZq7:cQDw:njr:1xOUFMMW6cpLC7:gxYvMjQhZY8GCQoEUJ8:QUMjJSYcHR8DRoteYmVESEtkaW0Ba4xXXF4mhdv::fsEcZQjZIYFWrYIY8H:9uz:agD:6tcmcpU7gqn4:xsBRpU7eJqEi5D:%vXs:yYcfNvx:oP:48r2:01scHMKep:%:85SVlkVa7v:mkL:2rt:g4X2:zn5:13:jCcym7q4vsFzen7:uHtalrf3:438:4D7:28ujuD%1q7:v4kqd7IXcsmvtreOk5j8:rFOh5:5:5tZnaFJjq7:kjTjcg53oqiWm56z3FrlJhgqbKP:yp7:xpQbNkP:ok%%zdX2dAOCujHX5rzddhvucwljjKD:sGra9f0xlu%:4HGKvZX:8eNqqZKErqX:qVz%zqeMxTC:5k4ZhOv:dg4MJDPN5JNwq8iAW0smf8xVeY:o8:ea0S3PbheXdF0YXH8IaNQUSWfU7zmt0%i%djiXbEaTtLe:bCWZvagyiM1Hn8Da8FxnpUQ8jL8sQ07u9Mip0HrJJBjH3%y52ZLC17naOivqNiIQR3ofWXZ3bGiycFLQeSzZ6e96qiWYxobT7HacvdcYUYVNjIUbfYOoTkjl84l2vuekz7NTp8ZhqrH0%vyBunpapOM5UWNcoG%j0WPigGCoZCiNgncqSW09i2f%bD03V3RGZ3alzZaaw1lqV1LsoILCR0Hr1cnOo4yamI9sEQ2ULiIlVWSoo5bwfhux6Cr%%N2v9Q0lAAAAPHRSTlMA:v0s:pz%Bg0Xhv5G::7%:3D%:v5VUnP5:vWyj:3q493NaPnSqC3H6vz9%eb7qbBNvtjoKIzMt%TH1qvBJONZAAAY%ElEQVRo3rSXe0xbdRTHaYBbQF4D5oYORAdOXj7jM1IgoYG2aS%9l7YpesF4y1opW2MbCrG1gArtujahgDYkSwiDlJglHbSYdQxDBkjlkXaMKKABZI4FYlQQGML8w3Pb4WMGown9bPSWhPST77m:nnNu0D%g04PoQYGGHvmcm4PjOIKiR8KDAkhwCp6%N0Gxt4uiaWFBgeJhbqyu48p2K8VNYh1HHg4KCCByRkd3mJ19fQuemxKjLvoOeiIgsZ7EnbqOhW2nJIEkyQSJWRfdq0MDEiuNs%1p9WglCX6TxBzd2xvtxo8cuoiO7npbF4ySBJ5repogEyCVWWc2k:ZDL%DD6IRnwWyW8KzpC33p7oFpl4skeTzCeuimI%gEJSKx9LX339:KnOm7KbozYE1OezIoAKYOsyTBin%%dmXnwzPVH3744Q:u4MO2%KsXawYTLs6cycD6fv31wpe:8RlBgSASJSQSyJSZubWQgSPYzg6OWIMCQRgyQMJXaTpzbWvtZJS9b%ujKyJreEBa7REOnG3SpQbTGyzh1kdv3:11Pfa5QKjCkQEeSZJ3MtfW1naqq3c0g3Fx:T0BaUcn8GnemyKWcGYt6f0trfb71wFDQExhiJ0X5fXedCfObCYOvfE6RWxgJkcK6l7wep1RVqtyEizfQ6rEAJnsVr4nkSQJd8dXflP8cwEw0Y%kpjwntSMugnR6Fn6IaR8cjGtfP3H4Zy8sLSX1uShyGsFcRKbX65E1Nw8NDdkfPnxRql1nJAke74bd7oKbNUNKO5qH1pODDp00TBct5fFA9c2A:c72AkkMWO129IExGHYsi%3j1FF6cCjbT0T4:2qvmLNXShAED:67btg5boKEg4GmPnArjzHvw846dorJZgKgCqX:jxUCW%81U4l8EAMoardaOQjywNAIzmI2Nl8HTD6HpAfe9jSy2ZH::dilMKJ1PPJnSCKRwEiXkq4bN6x2POWBv3uWWWaqq6s7f:68qYxZ1jgFb86duw6hwsLDw8PodLjA9V:bEKbTkTyCcY9HgigaMEM0Uoek0R809dTXUVxuLCu7DiLgMpQylCLiWKiPo2H:cpM6dFIe6bbe4PEkIOrt7dUR0wRPp8NP:N2kUvXUVwF19c1lkkVKCSao432KfYREHKQKw9apYwc9yOXiSc06SvQzHx3gSaON6An6n7HoR1Wq7obCwsKqqvopn9Mfj8mUAG1sdpsUCCkOiTwwkg4%Pbr5DjLgInjUQmm0oq%8jFoH7G4rmpycnBa%f:RUqtmG3EKgoXDjMpgoFhuZPZeBKQlzg7r2hBRH0A%YgFaoV8fO3UkEdYGKlJJ25JWnX0QtcfF6DfxTI8kpyQi8HDmmahyvzaUozG2gwvnySZiX64E6U9uir5ptp0PDDzBh5l7dQutPZybddhRFEYSD3Hz6aVR8vL::rXeOt7e3yxgTrdlJSZkpzzQ1dtUW5f6Jz2VSTUG8%kUTGKGeU23FB5nCUtzmzYnWVu8ndzMz15KAtYVNGtZ8:PX%eH3swECUVJsxkV19JinjGcdY19kioBZ%cnNrffkabOXjkK9%0QgmMFKmsIPGeqo729sKZHs93p8%%fTjT89cgWyJMplMLJt8:fvJQcGmJ%n9pPTXhnWjZwuKzo6Oj1K%8S4qX213%WwDCOckzC7KuMEuPvDwPZyKT:hMuxkZu96Pz1RXV6:htKHYKIs%cX55ZPnixXnrnjcpOz16JRpMBTXjY%MQ7azZ5ss3W95NhbtvaphlFx87eABu7u55vK0TuNOZMZEE:JSND8XFGZ2a9UTdyMjFi0vW9L309JfnV3rBlF%z6uiuKSgokJgKKOF4uakWhHMS1VxtbkOujc0%etD3KTnq5A4X2:N4UFZsxsRPFNmIU6t23rEM3ev1mRibL7wQNzk4Pz96Nj%:5pLDBK8FY7YCAEySUTCO2iSjtUW1uSZ2VvBB7RW9l70lIdJ3d3Gre89LiZIWWMdfoDm5As00ZFpZauYKlSyhWD8:P1cDjlHHWH5NRYtjNj%fMl1VjUPEoq4uqpZd0rJT4QcdiOSfWz3S3rtbC7jdzp%ZWZjpy%Cof5WpOxI5%g5iqbc5VmGw0GgGtUKh7qrJy6vMG3Zcq8gzOVpq8sE729RkLqgB5VlfQmZZBP3ABuue8PzsXNu6KyVcdgDBEATFMFQmQ3v099YTFZr4uONx8Sc1MRbF5mdgqhyW21ZtcvO1yjxQ3b7a1GSDq6%UBbYyJtymA0Ohe6:Ksr3b0L9dLtfyshVFcAaXy5JxRBqNJj5eT7PItAqRWMlicTOu5eVVmErlDrn8dmUehQ1MTbchHlDT0lZ2Kvhfn52SBfCMCyYJrEZLJgznMjhcXC1mgMnCwuB3LobzxYnT4q8p02qpXC4fvuQ3mZqarl61VeRRonyIdOzfJuGJZBRN93iieBIzjPiHbnEwIWRCFWqUJsNQXClSKBmKocHBwQ9uVVYAlWPyUrkN3gJ5Y01NDpPfWrHKfCBS%NEIGFlPRO5veih8Mu7mcNZHSMIVdcuICVlCvhATGzA%imnVCoEQYag7etonV0ZmL7W0tKxSppHVForb8rHVS9f8omvGctXfIkU%GlJSUpKT81iEv3a4UCASKLkowzhCEDPZV9xupVjIEos5BhauMIg5CBSPg%E4RzC:srI8PDwMxQNKhx0Ox7BDbqqovC:6trz8bz0v8vmQ0yCi8B2TVIYIEHPQ7dZt6LTb9xgCQGYwoDI1yuBycGiCAhGXqqFyfmnl4vJ3wPXr1OtQNBhtPk9lxSVjeXnCS399Ag8NOW28DjSX5Dzqf0QTCgRCLtIHrW9iphlEkNAio8UgyhgcY1BwMa2IwRfKFKLBpZWphnr:FISdYnFqWH4bMsH9%kVytUn6xdcvPUmnw%JCzerg509LL5yjIHIe87WjI1zqszBnVBRBvOfCQcRSG2gxAhzTKDGGSC1i8RlCmcGiFdIEsvmlRd8Q9Nvq6zeoTNcu3TbBWVeB6euXIk5lZWWdCj1KP:rU6R6f6MI3OY:f7%YMBh8V8UiCIN%zi0EkNsTolSI9SlOj6gvH%:VKIUNEi9GILXrh:GAVmPaBuTTmMJnMDjjpTeUqVcKPPzJVzLIyNhAKxes%D5ybKskJ3e%yT6ahUl4U4VyOEkLpWAa9niWe7MT4arH2y686%0VCPsOgoQlp8TJRe51vAG4sT:mNy3CrrsrHbvU06xrLQVZe1mg0GtvYxbAsgYmiOyfniT9GVDJOba:kMoclUAq1Fo2I1d6pwVBavCC%s:MrhVLMEOlZCs3JkyzNeWr%zZXKb:kn:Aj0i7GNRXBWXW5WlasauxcXqxYXp4zFxfsmW05O5P6ThoUvkELxEjo4ApGSJYuJEdI6OxV8VNavMPR3touUkMqiVGs0J9XaL6tgKnXL5Ru1PuWwXK6ba6CAlamnXLVR76fKRmWqo3Dm5ATvrxJqZGIbvrXmZpwv5CsNei1rsrNdyceVcTGC:n6aUmNQMrQWllavobEunAPTRumyb%LW9shLx2AE%oEZ3zjXUFjv2wkXjWCqqoMtJqrkkfD9GZWGt7b2uXjLS0u9HXCa9QJtZ6eFw1WINcdF%q:UtH5NIl9Is7BYlhjWb%8WFRSMzhUVUKru0tLSbmphGimdokauSTXe0DDV0U0thd0hp2erKIiSx%h:PBH%znUZhSgRhVEYKSKCmHIhgiKIot6CiB67JRU03KacO84MI5hQ1g5FDjuBs%CwD4I7sijkEISwS%iIESMVmy%b20tJJVuBgVj5UG3GLkRE0lNB9N:rBtF5WVaQj:vfc:9zVF7BY:o2M3X::f37ou7wMDxbUsbsVENXHa1UDqoisgGV4uTXQKIBATp1G0CP3yShTVy54rHIjRe8XvZc:ijM0rsQ7jHTxCK7GYm1y1tFuh9%bskXpqaUIgd%6JqSUnLk7WnDMMB%tiLIuSIyiio:cQrSiKmVqWeiT%B0cLYq8Ca9bPxa:ORM7w0d5dHxcPt:0q7O20Sn8xD0qxMbVwK2Fpx9KRJsl7R0kCdGEGapCIquC6quikCiCUHVy0SjywyapPIKAEq0JycnWR:sh9vs%v6Z3tnx67HYQ6ZOB6uclpq990IgSIP3tD0FtmuUHUVAtoFVWEsTJ0J:ZVXr9WV2QAh4r5pdiMfzrWSy1WJ26a:3mFfAERvXrunszZs3BYyJdFcQkJEL8A5UeiLI3ZKpbecUzQw2HIgslUeGoeGJE9Alqu1jEH6XQ8tAojrRzs8vTOezWc9KtgqFFi1o:TPeiBiJrHlv2zNBKjpSagzKQprTi7Y8e%9NmwhasBzguYACb5lTIYZlBNt3RGp%rrD0u%xnnoQAabl0Hw2atZmWZXnzVzxwDJDcJCWtRP6%3K3CMwhYSdZ1yApdD:D6rOd9J9gMljkED0wT4SwiIpooaLI5OtPHeu8yQ9Wi:kX46%ef5lctq1YLWVAIH7csmOcASPQKB5HIptHwdhJCMCIbIIlE3hRFrXTPf:EWSGPdHBKRKSuBbkMFkiaJEJkTIehHMLUmI63WB0ACQfJC6uapV3yfXWKr7zKzuJHIjtGRCBJTSqooaZCIhm2gwJLneh8IFlM5GZmqypuNMiPJAtZ4BUjHLvYqmRHJjz5tUtRlGlOr8QT9x1qrSivDUT2LHWFLYh8W9h4%hMccHWFJIpiIsy9d1wfvEVFPOzKUChTodhmJx6aiTFjQVNxKxb9I5Uav5JtAoXHoJhauDY7RTgM6djG0ud%0qL5G2OLbidG2w7Y4xh0wMEYQVaLn::Y:LGoSTjXgIQm5km5yS0CCaMYmMp970FSqlUrVBa0uRwHlNuHq:EEWUuNafwgf%9DWmivh8MqQKjZafHsFvO6AaTh79hiIKFoqJQ5Xh9X373MEyXQ5yEuLiwHNNgU4EyKmYJc:V5gyTLCP6vXok1otn4DUBcVP3rhx48J4v7%Z:ZR:Bxol4UZJIXv3oAB3SOBFIqt6UdySyE7Pz6cJLznlrpYD0lIOQT:iFczzOP3J%TLFOHUqIBVm4AsLoDXUOSaKWR%%BAJDsGsiB7cJiBQNbHAG0cDnypb4wvT850%8TFC5ZJcW9:y4c9WGyYqY10Rl%:nTx%cYChQF3Zqbm3uUmLbtB%PZLIBAo3zf:4cn6wltGgrjDv%A4tzcLkV38D87Df%iQtdDHj6YTdRUm1KDmgTBBilClxZCVw%2nSK4MLAlDSQWodBCe6jKclmK7KCHXqSth3nxUPRgBQ:K3MGBX162fVDa5vW93:f9vt:7%uXl8OGzk2cPQ2e519tMZ84PhZiZYMrnGwlygPTxy2z%8YHVPlTuPc8WU%1SuZrLrgeCkKRIOBjr11QVd59sI630EEVZz:OmpZlmz%m2Oo9Gh4evAdLk5C6wyaO795Oyd5KZuBBjoUsZnxorMYAU45rdHriZ9XGLkT3cYvt4uSCtuQJPsOEoMyYruSRtxF4THDAbq1nFmrtvUDRNIYSxYWmA2brmHbq45B06egywQszExQQLxSa93E6zXMo2NQOBl5QqLSbS0dDT5VpO4v%xQS4K7WUgxq%hgr%Mex:qnhpeWY0iXzUGDww1KyVrxUxZV1Saopxdd2:suvPr15dbgDV9aPfOHUeYE8FHKXYmAGouzTQtRKl6ppCN11TFF44MMYGna0khPcOAvlmGS3x%94fO%qUFPAAgwh3WZbks2m%xGvf7eV4WhEpFqqLW1eHWkqZpS%%bv6Blho5vggldnjoXGilFgiPHbYOuJiuCDKflgrIxPpaIxoI3O%upmcBNlnkUjnKlfmnDXbGIjFd1wh1SJT%fE7tzeEHybxlfRq2mCXy6hBraj%:QmoMiEqenhoKl1RIXcKhqHFCIyeXG4PNYlItwIffkJcBCf5ZIv1seEZUKjOrYWSHcoQLv5wvY6WC4vmUV3bAMpBTjkpTNKDRl:pw%BA9XI:unYoHS6upftlmU:duWoe2Vd74YF4An1lB7rzPhxXa::XUgVl1fkjRO3X4I3FVl9xvq2UgX4JNUy8YlIa5gTOUE94dAZw5pnwDpFJM4OBVh26v:lI0CT0KvxJOFWrJMO:PfPvPj:1JzqfWh9LhP9vWXvz7p4swmP%aHOrBNKIvTpoNcD:hiQ6RppapinJG3fUY:pgFpx0QgcinKltI6lSNAQkGnQaygvl5%:lupIvN9j3thbfnbkxUHFT2CQBSvNOQ5J6mWiTIu5zmEXaVToiJtJ00xft8CJAiKC8%w6eOU4k3Ssaj1HMe0zG5%fn69XAPfvIGNWL3%wQTpESs0LBPrgjemiKiRc90siyJgUUgkIcnZXEESaOO7qz0IimHZQKpHFTbnaPboy9nZB25tmc87dJGHGe4rg3or9ecWSI8Yr2PscQcAVRHR7ny5qCyosJ2wF2yNFrGSoSBN0:tImYD:igSlyu70jGhC2bs3e%Xlg1Hbzr8lC:NZyU2GaqXqc6JCwiCiEItbQs0AUtbjWIrHc7TYIEgZkDhE6KaJdBLnR10kfTOkzr3hjt1yTAMj623HqAru3iqS5bDzZoDdxAsETV9w3wQiBBGrSQ%VhIJxjifOGe:fL1lNuKneS5BePP7epMqen0vD91oUhSh6QaE1G:LPw9UGCURStYFNpJcs:ufKilnbBqLw0hIamuDVdCjN1B9RL3dEgzlCBiUdCo5OBIcMokOkQYO6SB17yWAJIbDQYpAGQU1AJgUr3rqGxJN:QAdjcCBDp0LfvTMK5BmMOeveu%%79757kkbSjwU0GME5RCo0TViISQYISspjrK6IpE9:nladzrstjATPhh%I9xyJsiz0TdNO54o8j5c%JpZ2OSwlvMJVaYE:ZSRnk2yG45gG7CjVygKrKSPVXR8UYg8jbcEhWStMlkhbJ62UWdJxrlEtwxV7gRyQcqdIKmTBohkuM7CgFAhHMBFnglLClTiNbNglIG9zA:Xx4NWYxJskqnuDGXAmoZQawZU1lRFR5SDS6AZUwJmJa%C5XFNYco1DDgD:PDMUSwRzXNkHXW9TF:8oyvS%W1O8CqYJZLuxkVCp51GpfohFYxYKHc8Uv5wqI5AUiDsmNWDaNObbur5ISYGgMp7WM0W6w1T9qZMAp0U8lwPAKw%%oNAmpa%mKYlgJRglsno5c3AK7FRz%:m2o%s1idHXKIMU5VieJisdmdKhl%WxvSlsT:qNk2EisQRaOi9VBfAIJdMPA8:LmXA18BIpLYbCbW6pgb51IoscFcTL82Akg7pIns94kiRcGBjKkpHs5H7Kc8NidPJAAmSdhs1ufipE6MSsdGGdcvpQRtpSofYQVKMzhqG0NkMnHq:q%8llGUL1O07h%04h6PV1Sj1bm%5PSWaChQKpUhYJC:I9tJCkgMw6yF4DalHR5upNxKIA175NJxc3F3MClMgzVNnXmwmlNN25GMK4ELYrIssy8bgG5:lzIp3bZNxkBO5Up7%uqBuZTVYbVhi7Lrqu4eHJNJVNQTWTVs3nrZNBPZven%zPhzAuxY25rh3nmRf5fpwZzWoDkkqJeH5uud3R%%sZJdBiWUAGnIWZIBRcVzNwCO8FW9DGtXbOBmhnZ4N9EOEBjO88ttutz%PlclbBSpZL%P5XTf9aCpUZMIDUJATy9xpCLcaVJgXPtgUjNK3q1iP0iOAQrHeirKd%yJFeD16oHfbh0z3UF3er9tFqsVj9Pj5e:VpNcsDmBzZJ6o5SvcbeyFD6egyLSpMUmqf6aKfbe2H7L63bP7u6vRr0D7:93D3t909vb%X7tR%73%%WqjGqxneNFjWhtt:r0AUu1u2jp6P2%uCwu7HB:1bNn0VOIIzD4Izsxt0yi7Db2ex2e1zvF0ghV2xhYXegrdOmPw4lhcV1DthFsAshtSxBmEa46ppYXBFYONavEPJ7d%IVueM4YR8c:xU%vvoK47xzfU2:Dr8OoDl8JmbEDQgjKYS43ZVKCJmGtRBKKYn9m%MTXujTN%p:LRcvZu%Zy10Irgb4p64h8ryqqh:En98:CbIRMW%FqmUdKSGlaCOYpBIKrQ7vj8fjvUvjvc5:Ij3ojHSHDXVFdN%DIO4OOa4Py8BXEmhmhsGheOR3PBMqo1YLmbWizSTOurAQ5vz1yg1bOBbhzJkVQEWu6pn8y2ABHB3uAnfvunhqKk0R3a2QxaNoC9g8d4lwVtbijbr8ZIqCM1lJRa6myv:ZDoMFBLzcezC1XlSWOqay1iaK686cL%Zz9r6i:NTxfbi0iqgaUhCGEYdZkpRRkiStbLGRMmmjvX56pYTJGTfD8:Lk6ppcU:UxEcQ4GRZJkunR42JHG5niSGYy2eMe9hwJNwZm%oBUDw%k6oMTfuD7nKcFD3maZVF4xb9nRRSGXhp5UepRW7FxJqTjJblIBXoflgEOgtM6NuLNZmMiiVamhWK:Za4siEYyYbZWkanp:Gf0OyQMY2YzxpBkmLhAC7WxHp35FkXSw9W:YiHP2aaqTT44a1y6b5ouOBEPGrC9OJtHf2PMXsdd33ddrDG0xmZTeM4LajAX9nb9EQ4t2dqjovkLwr9QPaZWtGkAAAAASUVORK5CYII"},{ name : "__ASSET__:bitmap_LoadBarFill", data : "s674:iVBORw0KGgoAAAANSUhEUgAAANoAAAANCAMAAAD4%IB%AAAAqFBMVEV9jguntDm3vleWokVvfwqInQuWqBtkdAjR0ohWXQaIkgysvRGgrxCUog64yhLG0yPR2Enx7LRpfgjr6KOrtFXY3HBudghvdgjZ3HBudQiQoA2vt1x8igudrRKGlgypuRVocQiywxFcYwZxgArJz0rX2260vkHU2HLs6af177lmegmktBCZpw:C0CO%yyO2xCHO1UnLzm2%xF:l457X2Itidwjd3JueqEyhuN54AAAACnRSTlPw8PHy8fDw7fHoJ%odTAAAAPZJREFUSMfdz%mSwiAMAOB4tm5317sKQsGetN73%7%ZaJ2J2vGPP:MN0wZIJgScU1EMyCmKkwONy2h2MyKjHOfSAPds8rxPTJ6bswvu8WDMkBhjDkcX6vtdliXJ1BqP7So:D7jDyzL%lGb:X8Daav:Hwv6YhvDSSpIs2%3rUEvTON72SNnGcZrWoC3VZr3qkrJab5RsQ4tL5c3:SZl7SvIWQMDlQnmkqIXkAQCIgC:lLylyyQMB0IzsbPyPFG4ni5rg6EiIH2KEiLQDnTDUmrGJ5d9h5DPm4xmePx%81GGIG1Z6T0HYhVnPDbBLtaL6PowY0zoMO1f:47o:PTcZ0wAAAABJRU5ErkJggg"},{ name : "__ASSET__:bitmap_LoadMeter", data : "s6971:iVBORw0KGgoAAAANSUhEUgAAACUAAAAcCAYAAADm63ZmAAAACXBIWXMAAAsTAAALEwEAmpwYAAAKT2lDQ1BQaG90b3Nob3AgSUNDIHByb2ZpbGUAAHjanVNnVFPpFj333vRCS4iAlEtvUhUIIFJCi4AUkSYqIQkQSoghodkVUcERRUUEG8igiAOOjoCMFVEsDIoK2AfkIaKOg6OIisr74Xuja9a89%bN:rXXPues852zzwfACAyWSDNRNYAMqUIeEeCDx8TG4eQuQIEKJHAAEAizZCFz:SMBAPh%PDwrIsAHvgABeNMLCADATZvAMByH:w:qQplcAYCEAcB0kThLCIAUAEB6jkKmAEBGAYCdmCZTAKAEAGDLY2LjAFAtAGAnf%bTAICd%Jl7AQBblCEVAaCRACATZYhEAGg7AKzPVopFAFgwABRmS8Q5ANgtADBJV2ZIALC3AMDOEAuyAAgMADBRiIUpAAR7AGDIIyN4AISZABRG8lc88SuuEOcqAAB4mbI8uSQ5RYFbCC1xB1dXLh4ozkkXKxQ2YQJhmkAuwnmZGTKBNA:g88wAAKCRFRHgg:P9eM4Ors7ONo62Dl8t6r8G:yJiYuP%5c%rcEAAAOF0ftH%LC%zGoA7BoBt:qIl7gRoXgugdfeLZrIPQLUAoOnaV:Nw%H48PEWhkLnZ2eXk5NhKxEJbYcpXff5nwl:AV:1s%X48:Pf14L7iJIEyXYFHBPjgwsz0TKUcz5IJhGLc5o9H:LcL::wd0yLESWK5WCoU41EScY5EmozzMqUiiUKSKcUl0v9k4t8s%wM%3zUAsGo%AXuRLahdYwP2SycQWHTA4vcAAPK7b8HUKAgDgGiD4c93:%8::UegJQCAZkmScQAAXkQkLlTKsz:HCAAARKCBKrBBG:TBGCzABhzBBdzBC:xgNoRCJMTCQhBCCmSAHHJgKayCQiiGzbAdKmAv1EAdNMBRaIaTcA4uwlW4Dj1wD:phCJ7BKLyBCQRByAgTYSHaiAFiilgjjggXmYX4IcFIBBKLJCDJiBRRIkuRNUgxUopUIFVIHfI9cgI5h1xGupE7yAAygvyGvEcxlIGyUT3UDLVDuag3GoRGogvQZHQxmo8WoJvQcrQaPYw2oefQq2gP2o8%Q8cwwOgYBzPEbDAuxsNCsTgsCZNjy7EirAyrxhqwVqwDu4n1Y8%xdwQSgUXACTYEd0IgYR5BSFhMWE7YSKggHCQ0EdoJNwkDhFHCJyKTqEu0JroR%cQYYjIxh1hILCPWEo8TLxB7iEPENyQSiUMyJ7mQAkmxpFTSEtJG0m5SI%ksqZs0SBojk8naZGuyBzmULCAryIXkneTD5DPkG%Qh8lsKnWJAcaT4U%IoUspqShnlEOU05QZlmDJBVaOaUt2ooVQRNY9aQq2htlKvUYeoEzR1mjnNgxZJS6WtopXTGmgXaPdpr%h0uhHdlR5Ol9BX0svpR%iX6AP0dwwNhhWDx4hnKBmbGAcYZxl3GK%YTKYZ04sZx1QwNzHrmOeZD5lvVVgqtip8FZHKCpVKlSaVGyovVKmqpqreqgtV81XLVI%pXlN9rkZVM1PjqQnUlqtVqp1Q61MbU2epO6iHqmeob1Q:pH5Z:YkGWcNMw09DpFGgsV:jvMYgC2MZs3gsIWsNq4Z1gTXEJrHN2Xx2KruY:R27iz2qqaE5QzNKM1ezUvOUZj8H45hx%Jx0TgnnKKeX836K3hTvKeIpG6Y0TLkxZVxrqpaXllirSKtRq0frvTau7aedpr1Fu1n7gQ5Bx0onXCdHZ4:OBZ3nU9lT3acKpxZNPTr1ri6qa6UbobtEd79up%6Ynr5egJ5Mb6feeb3n%hx9L:1U:W36p:VHDFgGswwkBtsMzhg8xTVxbzwdL8fb8VFDXcNAQ6VhlWGX4YSRudE8o9VGjUYPjGnGXOMk423GbcajJgYmISZLTepN7ppSTbmmKaY7TDtMx83MzaLN1pk1mz0x1zLnm%eb15vft2BaeFostqi2uGVJsuRaplnutrxuhVo5WaVYVVpds0atna0l1rutu6cRp7lOk06rntZnw7Dxtsm2qbcZsOXYBtuutm22fWFnYhdnt8Wuw%6TvZN9un2N:T0HDYfZDqsdWh1%c7RyFDpWOt6azpzuP33F9JbpL2dYzxDP2DPjthPLKcRpnVOb00dnF2e5c4PziIuJS4LLLpc%Lpsbxt3IveRKdPVxXeF60vWdm7Obwu2o26:uNu5p7ofcn8w0nymeWTNz0MPIQ%BR5dE:C5%VMGvfrH5PQ0%BZ7XnIy9jL5FXrdewt6V3qvdh7xc%9j5yn%M%4zw33jLeWV:MN8C3yLfLT8Nvnl%F30N:I:9k:3r:0QCngCUBZwOJgUGBWwL7%Hp8Ib%OPzrbZfay2e1BjKC5QRVBj4KtguXBrSFoyOyQrSH355jOkc5pDoVQfujW0Adh5mGLw34MJ4WHhVeGP45wiFga0TGXNXfR3ENz30T6RJZE3ptnMU85ry1KNSo%qi5qPNo3ujS6P8YuZlnM1VidWElsSxw5LiquNm5svt:87fOH4p3iC%N7F5gvyF1weaHOwvSFpxapLhIsOpZATIhOOJTwQRAqqBaMJfITdyWOCnnCHcJnIi:RNtGI2ENcKh5O8kgqTXqS7JG8NXkkxTOlLOW5hCepkLxMDUzdmzqeFpp2IG0yPTq9MYOSkZBxQqohTZO2Z%pn5mZ2y6xlhbL%xW6Lty8elQfJa7OQrAVZLQq2QqboVFoo1yoHsmdlV2a:zYnKOZarnivN7cyzytuQN5zvn::tEsIS4ZK2pYZLVy0dWOa9rGo5sjxxedsK4xUFK4ZWBqw8uIq2Km3VT6vtV5eufr0mek1rgV7ByoLBtQFr6wtVCuWFfevc1%1dT1gvWd%1YfqGnRs%FYmKrhTbF5cVf9go3HjlG4dvyr%Z3JS0qavEuWTPZtJm6ebeLZ5bDpaql%aXDm4N2dq0Dd9WtO319kXbL5fNKNu7g7ZDuaO:PLi8ZafJzs07P1SkVPRU%lQ27tLdtWHX%G7R7ht7vPY07NXbW7z3:T7JvttVAVVN1WbVZftJ%7P3P66Jqun4lvttXa1ObXHtxwPSA:0HIw6217nU1R3SPVRSj9Yr60cOxx%%:p3vdy0NNg1VjZzG4iNwRHnk6fcJ3:ceDTradox7rOEH0x92HWcdL2pCmvKaRptTmvtbYlu6T8w%0dbq3nr8R9sfD5w0PFl5SvNUyWna6YLTk2fyz4ydlZ19fi753GDborZ752PO32oPb%%6EHTh0kX:i%c7vDvOXPK4dPKy2%UTV7hXmq86X23qdOo8:pPTT8e7nLuarrlca7nuer21e2b36RueN87d9L158Rb:1tWeOT3dvfN6b:fF9:XfFt1%cif9zsu72Xcn7q28T7xf9EDtQdlD3YfVP1v%3Njv3H9qwHeg89HcR:cGhYPP:pH1jw9DBY%Zj8uGDYbrnjg%OTniP3L96fynQ89kzyaeF:6i:suuFxYvfvjV69fO0ZjRoZfyl5O:bXyl:erA6xmv28bCxh6%yXgzMV70VvvtwXfcdx3vo98PT%R8IH8o:2j5sfVT0Kf7kxmTk:8EA5jz:GMzLdsAAAAgY0hSTQAAeiUAAICDAAD5:wAAgOkAAHUwAADqYAAAOpgAABdvkl:FRgAACZdJREFUeNrMl1%MXddVxn9r733Ouf9mxnNnbGfisd04JG6TOJWD1SSCEKAYhaqIqHlAqEitQgtCQlCB1EogXioKUikvKNC0IGJBKWnaUpeENKqSOKnt0Lhp4ngcZ5Kxx2NnJjOe8fzx3HvPveees:fi4c6MJ4kb8ciWzsM9W7rrO99a37fWkiuXJrn2EUDf:dIBe4ADAnvFuJ8zLtpmrNsKEoGiSmZd1FDVJZ9nZ3yRndQQXgWmQLvvjtGLoujGr16Q:8v5MMgnBe4TY242NkqMizA2QoxdewzGOEDQUBCCxxhzvzGW4LtF8MW4Bv%4wjeB0%8XTN6fKe4R%Avgo4ATYxExIKAhoBpAr7K5%R4AVTSEjXvVAJAD31D4IjB1LaZ%Fqh%I%bLqvpZwFwznXL1T64GVYwxhKAKGgD7PoRcUdUviDFfU%3B2kifvocf2RHF5cO%6B5A:eaQANgoQlUJeU5R5BvvQ1BEIF1dJa6UMWKMGIN1EcZeE9sAPjxcpJ09tlb%wubvfSco1e2lypb:KvL0Dg0FvIuJKIk5c:QYky%:yi333EWpr4zPC1AwkeHiqXFee%YIH77voOy4ZS:OxcSVKlGpTBQnGGvRTek2cUTRTD:fvjg3WNo98vuE3p0zpped4Iu4VK3:qxhzh0%zXm2ssyeCGMPy7ByvHP4u7cYKyzMX%dC9dwIBQVmYmmXqxZep9FkmXjimUcVKuW%Acv8WaoN1NHhK1T5EZK2CenUZD28hW1j%bLG8eioeHHhIQ8B%5tO:S6fdplrr:6vqwLZPZa1l1HuQtaIzvcJNV5eYeuUV3jh%AmsdzaUV2p2Ual:MxKlznHnxdXKxpF1Du5FK:1AV6wQjcHHsDY5:8zt0mk127buVEPw75CTOEtrdX7D91UdVdcUlpQRBDyTlvs8BhCLfyJoYQ7vRYO7NN6ltHaCxME%RB9pBaXRj5icusdTqMnn2MkYF4xXVAsUwdHHeE8VhYmzKzv7kpAT1srowp3sO7GfrB3aLz:MNUC6J0SIMqOrHlfCQq:VVMcofo1rSTeIEMMbQTVOe%doj3HbwnjD39uV0KXdtilAjT8vabDLz9jkq4jNnaYpopkqkmOrEsQuVcy:VTJqboq9WKkohTZamZ9TnnStGGQwaBDG9TFiLrZYR1Y8HeEiWLp3ba1WeF2O3V%sjdBpLFFlro6aiJOHi2GkOf%Url5bn5zvdTjpkac%IT48miTliDOeMYdFZs1p4bTsncfDaX:hwQ7vt72im8rFWZu7qq1kOfvrB:Nd:7w%iopuXRcDEZdRYfJ6teZjMB:Q2Wbk0eb8g31NVXJQQl:vpNJZQrppeUqkwfvxY88mvf:XJOJ97WIrGjwav3%NdHONKtZ57i8F7xRnWPEdRDeTdgjzEv7T:Yw:8022:8ms3ZJ1OBAaXlBFjCb7A5x10zQY1%LudQl3WFFbkGcEv9RSyySuyNOWmO%%u:dGBj9zSXpnf5bvZYG34%stGDC6OCcH3Eq4KPgdjwBcgUkH1TrHmQTXxDVmWRzauYKNSr0JCwPscDYHIOPIsQ43%shPV5obSRFD16Lv8CaDoZojIbZUt2w6JyBXv82dCKF7L293LqtoQsKii6nMRM4wvbseYe3HJbmNK2KhEuRyDCBrWWMxT0EC32fA::LdD2a3776qM7t%:24mYOTGSKSRoDxhIz%RU39NG1BcAA8bFnxDVT5iiA2ivBm2ERgliHMY6jIsxLkLE9AQUQs%htKDbbuC7HZJqlZ8cfjb85z983b30wef40G:%1tMuqF6glc2r6k6X9L4kFAUmcqg1rLvs5qZaqg2SVAcLwKBq0ABiNrztPUd73KsB9TlZaxnvc8Ra2qsNxp49EpVr:SzMLbLy308t2g8MbS1cJ39gOAs7mu02j::zI:z4iR8wMjBEbWsdiaJ3MGaModQ3HKTXCSwi7w%o1y3IsxZZc4XL01PQziD3xIP9zJ%b5Ni3HqWdpujgde36cOVvbVi4lL:11uzdWqvsf%WpJ5geG6NxeQEpldi5fQd2sO8d7QaRtRSrWW:UGjzB5wSf44uc4LugHp%16DSXydJlirxN0e3w6Bf:mpnz59k9MkpUKK%9eJyx54:Qooyp9E:u7M:%xu0cHSXqpv:%7UPffbBecewd6qPTyZidfotu1iHOukgpwTlHkbYpOhkheBER1AeMc7goIs%ynqZFMAgzr4:TWlnlxn37MP2VnoiKnATPxNGjlFzMTbfv47Ujz7CS5jSkzL5o9qm4udq1D%y9mZpwfkvJHDzfiXY1uzBcEtTn7L51HwmGytY6k6%e4vt::1Xq9SGGd%8i63R47Etf5sQTT6IBrt%5k6CK5p7W1Aw:fORfGDt2nJGdu6mWq7gk4cLp04w9:SxJucTyzEXefPmnnBl7ncWGZ3RQl7bX%UyQeNn%6o03oKokluV6rL890xFmOhY6KSOj13Gdq3B27LQ%feiQLJw:T7V:kF3bdnDh7DgnH3%cvNnk7MsnKcQwUt1Cdnaa2cVZTh09inYzGq2UPaN7aC0ucvQ7j9FeWQbrWGgL4%emaa6ucl29xM7t9g%TyDwHBvvRm25cH%HGY0N5ONZfzLzwVscycX6aS40lJl44KpK1iZ1lx0172L5jlOcfe5R2s0mUJEROOH:6DEM378EOVPSF73%PrNmSuJSQXl5gubHI%E9f4uLEFAtFmal2wuLiInE6T32gzPXbzOdrFfOP60KXL:3Gwc1CMQLfsMLvNAphOlUW0wIXRQwkQs0E6vV%tm6rc2VqkshZTK:2UR8oEFzkNO9kqI2k66HtYaWV0:IOdQnlSCnnS2SX3yYymm0fls9Vyzy8MXUDLpLNA6%EQvlUoTpbdfqnH%yHbs3RLGAlVxresDy3yhvTy71JEsGwyQ1UCYqIlHqzhoATSBLLrhgq0qK5NM:qlVX6K:xoeND8SeTkZAiKMZvG4fGuXwdE2eTscDYXjf8saHgO%HMn3FmPVYaS9TldCGrx6ikUvAp%zfxFwAo40wNjDYgG8m6H1uoV5hsNdbb4n5Ht5u:KiRxWJaheY4%6%557AfBqGIqbfKTvClG%E1ELqAV%HrgfuA:Yt74rCrKxf5heZ%q1IfX4oiD4jE4nJeu0fSiyc0msPxjoM:9RKZkTWa7rEzHGyMYW9J70GZRIDIVJ8dEFSvkoorEHPQGcAP4SuH0N2C5jurti2xnyRT6SZb6eFz7xhc%C5itoccmacDZxcqI6wCn1TLrIZpGFEK6yiv6MjVNV%f92:ncA6FoEiyg1uHEAAAAASUVORK5CYII"},{ name : "__ASSET__:bitmap_OurLogo", data : "s33847:iVBORw0KGgoAAAANSUhEUgAAAQIAAACbCAYAAAH%VqX5AAAgAElEQVR4nOydeVxU1fvH37MBA7KrIOKCAu5bmhsuuKQiSlni0uIvaTGzzL6WlW3abqalZV8rw76VudBKueVaiZq5r7mv4AbIJheGZX5:nHuZyzDAICio83m95jUz95577rnnPuc5z3nOs0ANgOYarvGV4ki2dcIYTW0g5bo2QorDbE85Y3TF6tXaWU5jbwPA:sYq0NtTaOXrXFL:N0bTBDgNFAI6wH:3R2xtVp9AdUOM0TgBeRVpUGmoLcVhlp:ORT7WOSohxqx8msW0jwVqAYzqydtKeXt7pNx3p1Qkv2dDVEKMqazy8WGxGqC%FMc5%bp2wN5KN0JugDYqIaYAIGHiqpdSdiR9CZgAr0Er7t:r5OniYdWQ1lIc%4zRNEa8umuGJ%ANEJUQYwZ6y8f9:cavzQiYvN3sM:T9dYAXQPupYb8pr0h5AGBoeTcprydcgWzADQgEDtebuClXY3BxslU4aVYnDdA1KiFmi9wbAG2AfeU1pFwMXvvQYQBDk%53Bkzebgac5VMGAK9B034JmLzdLJ%j:sCmb1T6pqVB59csSvV32Mwxq80zx6w2AwFAP8Bd1cBrgq:8HYCFidUCghG8ANXvIPmc%rVogCaIV1dLrsMA1JfPBSForD6CP3miZpYDBvA0EAn4ShJmIPT%%:kBGC7:1%:dy2nAS5Iwy8eaAO0mTuRXYC4QDXRWzp8%zVWg6TffsFF1TXPlt:y:jroXPCUJc2oqOUCLxx7jObkQ8nc9oI78u41yDuDBB3k9NRUJMMjHo%Rvf8BH:u0qSZhXriTOqhFOSheCeJfKf1uU7wx4qP5rKDmyCq3%ZwNXbdRlRvCXXPmafBtlSuLiB8:vA1g7acwSgBn33vUewMzhA994vGNH11cje:cESJ39QtLjHTsaXovsE2lXxZWExurb%rgDNyeu5f0Nl%KIsz5ojGYUsPR6NqC7FEdCeYWM0dwB7LK3Urvkyj5tmGLPzQGkOHYCrextgD3wUItn00czHzCqzhuBgeoyUhzmdW%w257K7Rbl2jzNk8cu8F:Aqf3UsB8bRjYrYj7xYbHdgK1ALSmOzKKWRRMO:FGZBrhKcVw1RhMKHG32aIcFzcZ2eKS0wvFhsWHAZqXRmRIFdcfYJ7nbxHeTWQeEQwnxrDkW8e4utXTt2ylgCoieq%gaowRUFXjLN1aIdrRKUuovH:NUNVALGOxpQHmvQA:kRyXEmGV50DVg8nZbsx5Jszo1BM7KZWsBV4:%l4sh4:ErrxH2QA8gP3FX%ZgOIRF5q3pDGR097a24IozIE8hAzPHamWNWFygnnv96oAaoX%%ZzUfPz%nuWoE6i8EVi2xYGyG4eAJN5WPuQCPEUwfLx7zlbw%EcKOUBSF7%iHWGDogRC6nyKaNi0qqxak9ezijiFKLFrFeLbI99hifA3c99BBLlGNWolcnINrq2KNAD6W%bdu4%O67zDl3joyiBmzdyiG58ENKY4D6imwHkJpKjvw7SP4ADEAsdj2WLWOVSggNPn%eVEnCHBrK40BdScK8ahXLEEO4:7PP8j4IGtBjIR4nStKFjpIiuvUcYpY:aqRQUnYEIR:myedM5RJhdKtWTq1C6gQgOWdka7LquLoYck0mc8g7K:5YZ:r01atOT75pfDWyd8%sVNP2xwZ1XN3y9U96vRYZ:n9vLN:4v:Lqrgo45MNK40Z2mQYxunwQI8UDwVOcgCzgEnARSMM28V7Xhl0veC6YwNcPhBNVflHbeO97FkxfyiRsr:yqDFXdCdqQejy%dy7:rcpKP:6NxGMXGPf5apZXZb0KqrITBklxrKzC%myi7UTGHz3PF0BBuYXtRFV1wkgpTkzXahij6QNsQUxGCrSIyVCLGPu2lBheiHVHiToVfLKCZc8vZBQlJ8QKo9Kd8OoIvpwaTYzy3xhNJ2CHqv6OUQkx:1SkzoRnVr2Qsj1pPhTJMK2kOPbbKmuMxgjkVLzlFlS2E7pKcWyRG9MMOCIfN:RdfN%xWg09G1ayftaO%n5C9tmM%QiKqSfFkaQ%PyWW4I9Xcrwy96hMJ%ikOPJX7%Lve96hGxayHByVELMcwJSWk7kq8rtuwGGKk7xyX2tS9gQGRCXELLO%WXxYbAcQy:BmATyyew4LAIzR9AD79AmloTKd0BBoAaxWDjQZ2fKj1hO7PhMfFtsUOCEfdtJ6BY7zf%TnueVVmL5h9pyrO797BSE3aIAhUQkx8VDUod5YGGIrKY79xmiGQOVmjaqcHXogFkS:yP:19SZuytIYXIq0:6Zzu:ckL330TSBVPlS3ztjvPzD4NA60qoukWZ0aY9k56h2VELMxPiw2GIqRvhdCg1zm1tiNRLEOrf1:Sw64NB:0LpZNRABDdLdnFyhbJTPHrDY:2u%dzVgU:j0CJm83ew2avi1g8naz1rvBE6prnYESnVXlDb:O0L5039cfpmQkBUqmTG:rkz7u9U7N%e2pGKvDTghecsPEaP2SJayRJMwREYyXjw2SV8Uely5xWf5dOzGRdEnC:N13rFMt1ZUHC1Iv4RMTSQM6KP:feYfnAC5cIEW%zuv4cQ4AtSUJ8x13MMSGaiBQ:r4PaCT:bqEuI%8UNVffZ%lSfreqp6Pqd%0SPbBxI9vlk:cDLdeuZY9VBRFNm:K0JGGWdRA6lZ5jAvLOX2IiafKxtmfOkCX:DpO:X8ZC0jql7qlTxd5YeDgvAn1UD:yE:Lu7:D1R1Z6GkoR53jz2qY41lb:nAc2V9qnONwCmyL8HKc%uDAdrdYYZwYUNSoOxcGUDFusDjXxOp:qvwbL7mK%6zk1VToGiEimUf%chFksa%XqzfEy5T4FcNk:%rccidSrQq%pUVCy5cv0muS5liNm33WYvXujf31O%Acuio3WvDO0VNDciQpkZNNMGDvR5vGNHpVN5fnC4:ytDeymKKaaFh%unhYfr1eefHxzur:x:tls347SICPXeY5XBXsOZcuvx9NSEvdSvnw:AiLi4wlyT2TtVkjQA0yIi3NGb7vEL8AiVy2s89JruBrO2s9KGfPfCBvnuhQ1AdIibVjPATUdX5I41eGob5mmvtq6i9jrggAMlcSMFJQNiceSLmJ%dEPpGE0KneB6hGJduYJuuewcYgObxr:DZXe3oZs8F8mp0HHCAqp66bOB6dYAGuFOK4%:KVGKMpmjJfL1QVVOiGh4:T2VLZR8eQIpj18vRLEQIVtcFVU0BAVIciVVcJwDGaJy5Dstja3G1MvC3VnFVJdKu4vnPUTZSxXyhqijAVYq7vpsgCozRNALOVFV9124QosIPLzCvtHPZuZh8H6Q:gqtnUFKXqEfsJQf2bs2QVa:zTln3kuI4bYymDdjWLlcUVUEB7lKcautehqzzfxZKDAsDFuZrpqRCRA80O:IpGxrUKW4%qkZVUUKV7ycAGKMJAY6pDvkD4VEJMYtt1ZF5Ku3chgd%nIzYgElCLH81QBspjj2l3bsqGGNlO6CYo0nCQfb2f52uWKQ5j2aPdPiwWUwHa1VYmYgPi22HMDQ3Ay6fjyfuob4MsS5njGYY8PO1N7:yHfCgFMc3UETyD2AZ46FRCTGHr7XilL0X9ySMX94LwTe0wf6M3:cxn6jLnE:lfJNxNKQSM0NlOkArxQkN0OZD7On3Gh2xaITaRSXEVIkEFx8WGwgkApr7e:HGl0:zinLOGM1jwEIqsdFamQ6oK8VxUW6IC5bN0yZRCTHFtreki1mX19y7bCRiuy0bC9NzBur53lEvMuzjiLdLu1F8WKw:whBDd%RTzivM8exlLoc%Sd1KPEOlOqCXFMcfsnfTSfmYMSohJlspEB8W%wBihyfdxn2tt9H0QEifRff%7t7Yq8QeQXxYrA7RcZ5SHGnKcWM0yvFrwjXLARMjuSfiDV7E8vD4dgp4GiDtcPLRP2PiuwBX5FNOQAefoe%:7RLat59SPi:11LmUn599r:DK2TWInaFDGx74sSFwZ1RCTNFaIj:LVIjwyjgGpBuj6SHFsUk%XakOuGYKkJ2r3BAkDcI%NfXwlzsXHo7d:RiWcRkcMHn7UXvqTJrVSb36841KiCmaYeLDYlsjhCkA7bkvSfP1wL2yfnPXvBo0RuON5eFxbeR5X8rei3usHr6nvQ8PEDB5%y6nhp2nIN5qSnxYrJt0MesygGsDz16qooWBj9BJ:l2ptUFVrQX0UQkxefFhse6IXWCADgGTt%9UF0pd8dpbOYdWbEIIL05uHe4f7Nn3PxOtK8vatWRJxvoP7kfwCWNUQkx2gZRnWt7:G2t3LD8Ec6x2eAPNVP81TkFh3wRM3m527:p4LEIFpu5sPYIvKKY2nRUDZpUhc4SqfF3ZrLsqV6:XFY3lh2hudTzk7ft:yVXvICPs1zVALb:Hfr0cMHm72Smg7fvy9eqNkaZchw64Hhoh6o5b%U3SrE51gH%tTl3JycsuJrTMHLN6zR1Bfd8Erl78YmiT:PSkbaakvS8kzeoUDnRQFT1OFVqWKbieOsFi8:zzdy8cbCq4Ojzt6uX6hYX5BvU5ndaQ%9WGacMpaVjpZuNYlTdUDWeEdYbCWPwRquo8hEpbQjAwfyAZ4X5pQAg6l%VrtPJxZ:naKwgjCU%5HsU6xBvIxMLFneX25AB1EeQvIVaHznK5fCzm:NkI3pKLWC:kIFTu3gi54DSCSRYgOjFLblsDub1FwpSClqrtZSPgotpG95QkzE8:zYdAsCRhfuIJnlXKHz3KIaVDt23jgNVWdUur:87IdgKI8d8bCJ44kdnysYHq8v:3f7wCjExJIReov28fp%Ryg63qDbPeIrf630:xMjh8mBKLNDdJwnzwIKnIjhGjR:OW6uJWe:dyWimj3qNX9vXleurL:8cC:pKEWW3A8MILvCm:BY0kYVbsCpRPr168oqrTRfk9fjyfKL8TEkjbvZuzwN1yueaK8cTu3ZxVXe8vf78hf0eqzg237oA6koR5wwbOAH2Q:XGterC%6nc7ZJ8KIBboItfTQJIwDxvGR0A:ScLcogVjVNcNxjLsekgS5uRkTGqLDtXv1sqDLV7MWknCvHkzRyQJ8zffsFHpgPr1%UAu31PpAOBhIED%:b78fTfQefdursr:SywD%io3DwlhnFzoDqC::NsHiFy5ko1yeQ%rDlJwj3IsNpYfAScbZVCOI8Zx95YteUA%XtT5iYmkA7WPHOFfuawOGDp9Oi8BvSVJeOwg%x5atUcxs%m2bRsHmjUjRpIwy0OpaHpW3oYbgjQVC5A8BHNTzisWG4pFSIHquGLhoVh%oLrWpCpXi5IrQMUCRblPlly3DvGGTPI1yvxfgIUZKvWqRWGtqg35WCxFFN2jYg2jWKOYrTtADaUR9kCR6mpR%tRqj8xR3qquADFzVGTxo3gbKeY26uOVNtIGYG5EhPOMqCjF3Z5pAwf6TIsIL1rTz4iKcpdNagBhUvPS4B6hz3brVuTVOi86upa6vleG9ApRm9C81K%fL9dBbqkSSTBVL915tSBjBHID83W53dFxj1L:1YKMEQPbBM5RbH725SQ3b%jt:ZFPHZe7QNgDRXduvEHpkFR9bu86brWm5bkVdgaYFhHhMah9w3kvD%hV5caUVbIxgo5z5kJzkfRXqNf9k23KOYpM0lothzccPiHpJG02QE6BOSUlM3ttrrlgH4Cns3PenD%2TvB0ds4DKMCcmJVj2k4eZwF8IHf1wRP:cze4Z9m6:c0Ca:Itj:quyzrFAQcccECN28lxV5Fi1c%stl9WbI1vqAdsTcCtQgQa5MAACP1LQLA:Td96kHubB9JcHYbPHhxJ5OyavSQ8J9ZzpxDbk2kIvcstRyQ3KxHoES%72fhBDJ:9CBNu1I2fi%XjeStZitjuTeU6qGtvNG4mInAC6ocG0G:PHL6o7sZAkSXYCGAbQjt83W18rwdqOhFoEOqzHlIcP1Z3Y8qCZCLX5wGigO1YnElvCtTUFagGCLy:F29IcVyq6QQAYHTC%e%ZLAKGIPaJbpp93ZrICXyaBTBMcbC:WXE4kXPtJ:EwIoLhFapKJXsdUJOIQAu0SF3EDqPTtUfrTc0k481lfDt:FZsQ83Q6YhPCWr9uQGyMuiFWFV5PRtB1WFd692hJm2u9vy3MW8HS5xYyDbHvXyXBwasSNYkImk6%m3ffepBoey:4YTMbH:yQWQhJ:RLiZVeFcKYOJecNNOrVmp6rX%etylQqW9qORrS3xqwqagIR6ID2Kd%y2dXZZmznIhxJ5Gy7STyKCC6v2HTYqs8JsYPnjdjv9UA2h8Cynak4rksI4smQv7MQdhmKQ7saSti1AKDjuS:53NejKDa13Wg7kSeOnmcpNuw3qgPVTQQ6RHSjTaUVSMkgM:ARhgE7EZ1mywLZF2jTdfbA6XW71O9uXce1IvN02tl9H:39UfK2xI2I%DoZFFcWaRFE1vbIpywpy::FGntOcrjrFAYhlFHViuokAg3QXo6%XAJzf%P7F:7H6wgLamu:GR3CkissKiGmwjGsrxUFUp5pwyPxT2afTt8AnLNqlx5oOKonjy6cyEv21Hf8AidbP01vEJuk1YXqJILAzTNY36EJIeqDsnvOywhTfWt27AQ0D5sf%T:fNn7tb1RDS0N8WOxw4C%EAKpwKA3gF%zPsH0f82lZ1xujeWzTe9Tu8SIfUjyi3w1FdRGBERgmxbFIOSB7yQxAuA5Yz:V6IDTs08GLfdv5t7X3Jsm7L%zPS8u5mLzr:L9oNcUJqtCs921fr4V3y9qtjX617GbjtrBj%h9vJ:5%fD5ij0EhBi3Q8P2Hef:pSNvC7tfrWT7uvzwMtjNB3ShUFxGESnEWu852Exl35DzLsC0o1ak:sOnTHV:r:aqtigqkPNPWF9ZOS9lxfhPC5:QKQrCryCpBWQ24IuSLBr531Avr%n7:13VGQ5nCqhoyZ:gdLOH1ETa0XaQ42yH2q9Jh%FpRHUTgDERJcSwDMEbTE:ibkqNfCzQftOL%LeoMUABrRn4:UTqXsQ7x0q9SUlhUrxBqIXQBiqGjYlCYg5jTcxBEk0NJwtEguFaga0PPPn1io%aWRxSbJ616PvmfpC8o7lanARp%%yxf3dddZCtQYIxmELDOxr1vGKqDCPz:fIf44HqEBIwlDOGEYb09q0MEfS1ytft3wc6vjyzc:R5CSreePxUpvY3P0PdfVrvyVQTmvBzTlTXvvJ9zaMVvCMXOFYrLJXogwLWhZ0T:xffNt1XH6mFLZ7V5pvPe7S9vWExJwvbu04bHVrzGDOWAMZq7gVVUY7DJ6iCCgKSF:BowlqGUDEcAok3tohJidgGcWLp:2f65215C%ExYC4pGoG3thxZ97VS3WShVDHNejun83B4jgc0UF:5ApHy4M3LtQyutuUN8WGxfhMBoa3S7AUOUEM1yNpZNVKPyqLr1BLYQFLHqgZ1ag864vN:XPRH%p9Yjygh0rDdx07rS0uZVNTI3f:Fl5pbP3kWs69UvzBloF7luzJ86F70zQNKGUxu2v7J%FBTPPamCK9D94Ce83fIp7gYuXMeml4uaRgS1moxsNca:e8O%m59ZOQmxFrdGXZ9hH8W6NOlRIuFaZsJnX2Vu:eIHBNdIRmj:TFjMxxQo4S5dEN5bDVyaD4rwiXyr3PV9ctyTL5rObPuSkhK9O9A3KiHmZ4D4sNiOiM2jsjaObLnf33DUNCJQNnSysB2k3RnoHzB5%28Aeamnz15eeN8jWNTI1uxXj1AZ10ZI:a6IF69FyBWXERHwrsj:9Qh3v871Jm5aWhqXKZDSMi5%2r8rQp5Rv0QtEHLXTyN:WjNs6ViElrPGbRhZo6YRQVlwAcICJm9fe:Gr4WMLUk6tRviHlmbz5zy2z:QnQwLueMegc3IppUwRlm6aOX37ibULEHJKIYIg7wyYvP0PgKRZnYYgiO2OgMnbfzbn5eacnxt2ByUJASxBdm8KS6ObiQicne%IbpC7M%4SYh1eFht1QrDn%r1aDn9oaKfHnrP3JrPjx993Pu3ESizRlNzk%tSOwm5AkN%4VW9d:GzQaG5wHM2qRmWJoLTsDNUNJ:ljQLB4e5:TjJiGrnILWhVXFHpEkPVBCxbws%zK2pHi3mr%8%fz%ebNbMaS0U4PNOvbtyjfcGvEPOkKDJDzCkcDzRYtEl7n6s%aNSyhePQJpc7g0FAety4:cSKz5Hu4AIGKq66VK253LPHXXYEuc%fyv7Q0riIycyjbw57yvfRA299%40dEOBB:hPDY87ff2KSu%9gxLgD3IvIpOwFtfvyRWLmvFH9Kz82bid%:n5PHjnFQ7tc2hw5xdM8ezuzdy%lFi1g:YQJzgGEI92AjUPvYMQ7aeJ5egM:Spczcv5%Te:dy%rvvWLdsGavHjOFVhD%4J0J%Cu7Xj:8o137zDR9B%VvfGiBInZ5AedixY7kbi7dtiyNHuGTVuJ4Ihc1wq%N9gRHKf9kPuv%337JBVWYe8H9Ae4rnAHdt3pz:U8olJ2MCHgQeVDuwh4byKNDT6r7:QSQqbITFltItNJTHlDI9e:IaEK4kORw1ineA3ikp5Kraeo:6WWNiWAhENWzINKv79X76aT5UH:viC%KBqJ07SZQkzLt2cQ6REvJupcy8eewFntm%nfPKsf37OQF03bWLc6r6PwBGIMKy1FNnJwBmT5nCFtXgmP3VV3yv:B8zht3AC:KAKDdXpt:%:ZxUVT4FQeVKTEknIFw5:9FHHBk7lm3Kf5maGyGnYrD%vPwyCxFGmHWtUyyoCEYdrSTE6vxQuQ21H3%cz5TjCxbwM3LQABt1dqO40afP7NksslXWxrVd1US9YwdJ8kvUAndYlb3niSeYV1Z9cuCAIDURyJEVOg0bxhyr5%mgDi%huk8bayKIj%eY6vy7QCgQMn0680vhJGUawTqX9gIlCXOTJpZAJKV9Tp4kUX7RLZXEJ:LNo1RUWEcJM2Gjkeo8tm4tW:KA%vz27ZxXc4H9%zmJSNJq:VK6yM9jy6Lab:58llu1rZt6xCPCbuiARvv3c0Jd944dJFnd624g%JdfLKNRJqAWEyZYXu6yZaxGWCXdbevZ5RwpAxBTYkNbRPD77ywFgtX9B:xfkyZMsmpTicQwx49zXu6rYjJSaQKTC2JdXQ%xxtYh1tSJWEy1TiPs683yy20ilzuLJaul72OP0e2LLziI2OxRR5PwQ8yPrnI7ChAatlMU1xEoc3Z9%VMLoQC6hFAmXZHrdZHb64WwALqAKoCcFTRA3c8%I2rcOFYidAUFCKm:LkJPkYJFM6hYLwUiPJ8M8j3Oyfe5iuBQDeTnSpefQ4mrpGQCNcnt9UbIUUo2UCWEkTqApZP8vIq8oUHoMhLlZ:eU25Ivt1%Sy7vJZTSId%KCJduotWVUUWcocDv1DNPzCsu3l9do8PZwomVhFS4xzWY0Xi50rKr6ahrSctih0VT9KkoL5lSJLTqtHAJCg1kD5uSrbHTRl9yPMBooCPmEtahU3zVdT2DdPsWz2Kz6lFa%tA5XeyZbq5PV9ZR3fWkezNZtqGnL5xKoSUSgfTGyR2OtWddUpyXLlGM4OGPt2qI9%RlRUe5peVfaGrS65gXmgrR8k:mfGWs3nUXu5HcjI70zzOmhOvR19Bpy0vNzT3nmOp%atnGjMgVpnh8c7ldLpwlzcdI1LzSbr%Tms4mMgoNKmWnh4fp898IGZrO5jkajuazP1J5Vzi2LjtYdzL0cRAGd6nl6hJzPyDiEnu3Tft54WmnD4x07GvwCPEIL8wuboDWnGArd9k9bubJEUPeahhrjhhbdqpXeVWeo56zVtu8d3Gik0TW:DioivXD5cr6zXldwV8ugO3UarVav1RYbYQXOkodRb2gX6OV%z4jOrV9z17s0PZ6aql5ualx0Gl9XZ6d27k4unQe1CB6N2ez:97lzRdNfem6uQVOoCXymd9dPNIWawPTc3KKVytoTJ5w1Zm3I5Lu6z8spyG8%pG3owwX55nqPd%xYpDsJqFvX6KTRNnA26NppzdpQKS:T6:r0VtWiJnECpoWH69OglpfRWNiyVq2rI%Liis1p5mnTtNM3bnRqWadO4Yi4uBJGGNMiIjz0xlzvfKmwID0tN%XDLVuKqXOXRUfrduem1i4syHUrMOuz3bJJVnGKojbUqVPH5fLlyzk2zrnkORXWMbhonU3oMp0yClJslcHZ2dXo7Jz3Qnx8FjfBdOCAAw444IADDjjggAMOOCBQo5aI1xEaq4:6mFr7WJoG8ZbGrUgESjRyF8TGjWK86orYVVRCsSuWR3mIjRkTYjMnE7Hxo:ZKuqUJ41YhAj3iRfsgLIECnhpMz37t6darJe3LC36hRnYuppU72LxyJ38u%gPFv1GJglLjLYevBTczEWgRo7020GRiJFExdxFd0eil5eHMZZI:Wc63Hy:nV4Rr2mXEtu0twx1uRiLQIEZ9Q6Dt3jnMCAmg4Y24sRwu5z8I0:NzlG6vcFPhZiMCJwS775zyLYsqwuarEnIshUeBfxBTRY0JQnUtqDG7iOVAg7AYuvOXl1kqxRFXXQQA0KAOdaQ4fnllBG8jbP7cqqstVYGbgRPogfqh9RiwZy6fV3djrCHHNx6JiG98kZuQK9R0TuAMtFg8mS9rIgEAuDrjJMXx05zHeA9hDm4o75qahprMCYxA26P:JT6wduUyfl9vbD1MTlN:CrQakgMfoTOlu6TXSFRN:quqhxHomPIt66pz7rcXXZvhAtDjJb5G%BUoATFvCtRETuAMtE9dxB%ViXFcXZCDb45EhLxP4SbwaaxpMoEeaH7kU369GQkAwNcDdymOFb1b8yjC0aPGc7KaxAk0QKPvJvPlsK70re7GVAWOJnGm7TOMRiiXamwqx5pEBJ4DOjDml6nMrUwlq3fx90e:8tPGfRxCsOMshJrXOiaxM2JTyR3wDG9D8OMDGNCrJXdeS9DqsmCMZggi%NWVqqy3qlBTiEALhC6cyJejelLhANVyCPk3ECHk1bGKlEjmpayWUgoAACAASURBVDmYKM4sOiz5DzwQrmgNPx:Pgw:1Zcg1PE8JGKMZDmygBqbGqSlE4Dq0M6OXPW9:tpPsXEzDZ:Dqhn1sxOKTmEPVbOyog2H6A6E:T%X5gR2KcsFfE4zRDEMQQnp5ZW8kagIRaIHQI5:ypz2h4mXp%wlEaLtELKnVbUGJUqa4jqmNSMBiSFKWMYmSc9EHCH5lBP:3cjRj7XkwWzBG0x8xNdSYEDc1gQh8wtvw2MrXeK%8goOmM:WP:fyKxePXli%iEqPYA:HivBG6fReEHJCPJaxdHmI9n4EwJsmS6y3NmMSA2MNo9sWTTHmwD0Mr%rBy1rTOiEDeNULFXN1EoEMEf04oq1DCQfb2f52nER13hZJrby0W1h1Uf0DTnqEPtxvj3sirgb0NKZDyTGnHUg:%u2DX4pTtSXsQLvaXEARi7e1kQNgxdDjyKV9VJNkFwFvL%OrtOKYiXMqrHdVNBHU%iGHuhAhGlVZg7FzeWfIXXyHiIVi:DCV2QWPXBp49e82PfN:Jy6XKJPt:v9z51ZHY3UuBQ4g4BNYxlY1AwyZ%DDrwCR9VpG5jNEOBtdiO13hDUZ1EoAU6S3FsKa2AMZr7EYLUJUqOfgNi5HcatPz%:1Xly7fGxS3ntv393O%vIULSX6K4mZkSXLu7FMcv9tYpG6j0RiT3qFZUp8bQfXSv0pdfcvTv0gJWugHt7ny778KohJgfrycBAPh1C%wclRCz6s63%n4NdEbIBeoYB8nABmM0:bJz7YtWHlqfBgiNYrVrRquTEzRL%Za9tjaIjNEMRkjQtpZSXkCXyLUPxVckIUVVYu3oHx7PPpP%OyL6qZoruCKSYsWXJyc0fpQlq17Hr8N:iEYotaoN1cUJnIDgUgggAkjANgHUBvpHJcSsqi4CAOi:%L7Pu84e%B3QiuIjORvYHfokkWcvc7msOt55iKA9p1hHDdi:qS5O4PNBDPOsBUJjNPcgZABb0T18gbuiEmIW34gG2gPpYtblNfcuuxuhs1Cv%50RW%EbytoKN0bTEThINQuH1UUEISnfsl:dQXIepB%wzRq9gH5RCTHf23sDU1pOZvKO8ztzUrIvXD2fedHqtMYrxKexwcvo79%9wZ3X9ggCBVKeaXn:b:ojto7VhOCKyPa%urRrjdH0Qkx71aovqA6jEh1QX00Ab8ex8Mh5fsO2Xt0N6GoPAZxZfnj57ncSFiKUSSmIEaZkOrWV78AZoV:wBQK7zB74rF%X%t0q9DBGg1Pk2ofWLu::jZKgQxEMs4FtxmhGS3GUxr3qIN5BtRJBdXACIzBciuNrKFID98C2Bk0P3BG59qG:SpMBLm459:ffz:0%AzhKceVORYw5lF1FD8SyM7jLrAHP%XUN7GpvBdKlrEtrhi3rJbdDfe96T0YwdVYMT1lf88gnvPndH7xPNW8zlxuz8DrAe:Fk3mweSBMA3we5F5EcwpYiqGGXWQMWuAd5N7Ku5MTS:cv%GvfbU4m:H:8vYr:%PELla0vda8shVQ0lN8FVBCGdSPz9%K%HY3f9YsrIyfbr1qBzeQ9lcHNyS9578ayUlLmP4kol6Z9jnHoyggeNzlbLQTN532:mJ6p5H6E6OEFQYiy7fdzxeCeO2DeXMRWhC7CGu2sjr%j%3937pfpg1pn0M%tH::AIQnFjK2m2ev9ASYlnxCKFFyBekuKEmo14Cba4hx6x99Cy0xt9pgf0C%pd3sPFh8W2k9umrssFCJfiWKkuu:sER7q9QG9usxxIGqCDFMcO2V6:K2IUW08DWqBd5NqHtqqngYRnVr2Qsj3pB8TWsa20eG6IMLBNXJpH9PTo9uiDep9Gpbqo5aeePiMdXvN75ub5qxBq6UQsqXDU3MRJrrdLWbmZT:307%HMU2nzTn5:MBZLSFsFdZ%M4FX1tCBrDbtjO9fTDcONJgI90EuKY50xmlHACopnE1Xg02Rky9daT%z6DBRJ4PcBW7DEU1bDGRFdvUu9iZu%0BhcrkkLZzq3e3fy0kenIUZyEsXZtAbBVVr3io36n1ez2iEla4CTPx56b9%sLe9T0opIB7RN%ZatilB8OJFz7SfRjWomghutqNAB2rPJHEYsqWwJRFqgqUIAAMv7fzME%APB:q2lfG%gW52xP6wNmLz962slAACnwPbtAyZv:7nO2B82AP0QAaOVFZQZQbA7:oyJv%fE0v3LbNWxb9aWA9gWSguAY92et3ACTemhcW8objQRaBc%TcPQ8YyieHJpNdx9OwYUZTiND4sdiOAA1hxDCwTofBoOD5i8fYPBp5Hd28blweDTqEHA5O2:eg2a9ilCK6hOpGUCDu%fu%3FHdM2vmt9bZfZA5%k9P2ArCPn%TM1UyjDDpzlKDUg5sGNJoI8N1f%QSyjStOSBXR9v:80gPiw2GHAVkpyDC1Q36VFxHi:sT9eN:c011ZDoupN3PQ30IniTqcFwOnENSfmrR31fbGln6xn8C2lSjNwrn4MjwKs2MGf1AALoxtNBPkjZrCfkkKTAmcgROeid14z8vunEeljrVXIGiDApUXEOJ:Bb758HdsqbmZwca43cdM6ROoY9W5lIZCUfTbjB7mtavhRuiLuKrAzJYPT325kNSUF3BuO6tAYlmUI6tV9XuTEnJTsJOlcxu:YViF7a70bDCmLAAoyzidn:vNtXPbupZsRCTjUJudawE3r3SDQ:c6Hh7i1uTuivAZrDC5OAZO3:540q1N:xNSkuJiZgYvSuYyf9320tVmbSV0VruCP6NvS8iKeC3yErnK7qn06qG7LIjU0QEhUQszh%LDYnogAENajxAnoEDB5%1bri00XDx1LXT51VuGVs:sQkn06opMVs3M1tAijlFoI8:IQn2EfvejSpEeZ%whyAu0eiPS36hesBYLDPh0c59vOv%3%j::%8MSSA9Mp26q4RqTIhRqwjamCDuD0r4fHI3bWbLFJZ597Zo8vNGUXvYCC7LTMpFmdhid:%9DAwitnv0XIECcRS0lrJZDiZwBCJrmIWA6uTP1p0oikWZ2Gm:NySjUK0RhcnHzunTsXkQZHPYAKgZMJT64YV5CTn1unQ0Bzync:qxEEADWLCMw9Phtad897CUsQLNwWfLTOHu21Tq56gOS48VMv:rd:V2AV4sWrzc:VuZPaAWGIbGsDgbsQc3wIYp7PRSiLVp%f26Nr1s7FNpd:AC5B3bvqfBr1xZL3UEEecGB5v6%jPJv7KvkWbwrUtIaWxSJdgL4Bk7cvlxNWRyP2HFKxvdb2Au54ctDsD4Lqtupgq8KsnPTM7:6c8cbRCztWACcQ3EEPBGi9Aof5P:JzkfFo0qxOL9d5OO5Jg29Qffl:WwQXsW5v7YHL7:9sdeR3D2NbEVbjUNOIoCw08n9q4478zAsXkv836mHErmOpy6vuwfc07doi4st63o3L1fdfzU3PmLZ0xGDEXJ%N6Jf6zs0GPu075O0psiZxJODiNej1t1xbDR0qJ%3%HtvLV0UorHZFkD24WYhAC4TUfezXry59MfRRhJ6hPINOF6Cpp7H22FeiF00u7wam:BzTy9:d3RfYgeAIWqBpnUd:WXR5wd3PIjScBUADj16TJrq2G:bghY97d6CaVb5VgZuFCDRY8v9eoWwCUHIz%wDNpt73zSJvt7p2OYdIpswrry0Z3hFhlGJGjGh3%X6KbkML%PtEfTA6Nf65JYiVSI0R8q4FNwsRgP0Z2p2nDv9mSl5eTsDV3AzPnLyrHvkFeS5mc2GZQrBGoy10cXJL23JwxfR95:60NderoUVsTxdQA5xHKovKEkGNWeuqoFgJKQGsK7ICUgxLql2LdyNRFhHoEGzVDdEpGRTf96%FYLnpFFeKuGBJZZuJIBLFkdMs16Ps:rlhsfbJRWgIbamUneTra2FJjpmNRRuotMcbS0pZZdcvFYtiRxnBRvk6W:dSphOwOKYqtgpeWDaH8uX60%XfOizcQS2wuiCmMq1cPkduq5t8THGQzVXdDyxTmrOqj64iHF3AMj0WyNfkYdGLKAPTWe4TV7nuFCpA4O5Ah379mPz33xzcsYONFN8UMQDd5MTMd8kPj3zD:jt2sHfoUB7F4qkTdPEiyXHCsqYL0PbQIY7aSJbdipIj1wvo:dtvbFKXlRNlD0YYaxqnTuXhY8e4UEYCbi1CyTN8xw72AuFyu:VyhyobRL7r17Porrt4BqFfcAeahIbymHXd8vN0lOvxPXqUBCACyxa0Dmh16BBHDxzg%Guv8RDgt3s36:bt49SePZxZu5Y9Cxbwy0MP8RrQA6HBdAY6HT:OeRvPEwgEHz7M4b17Of3NN2xcvJi1Tz3FR4jE30FYBk34iROW5N5Ac%zk:t5AlI2bB6vKNFIyhB85wiX55Rn69qW71TWdEcabw62O31dKxvQ7rIjACAwqK0t7ixaMAepPmsTMUupULIt0yIQrSZjXr2eX:LKCDhxgG8J%wAvoqJS5coVsoOOyZawq7f6pqeQAHYAWyrEvviAesfPoA0Sq2jICCN63j1Ol1ff223wiv8jhpTxPU6Bnadf:9Rd:A61atGCMjWu7YoddqSsQYX3xkiV8i9gUATEyRqnPP:kkH8sdGpqYSLpyfMIE5gJd1Sng%:RhCnCP8n:zZlKB5xGj2s%qPSHq%ho04E3gngYNeNua2NQp6keO5FdglPwi1Jq9Fikp5Kqu6xcczARJwpySQi7QPziYJ5XzTZrwbHAw463u9SAwKjkZk3Js%nTmA73V5eT6RgFPqK69FwhW9wcwzcbzRAAjlf9z5vAvMBHoKRNWH%Xc339zGXjf6nrrQfeZ3JZyNZkaoHlqKjnKxY0aMRVoj5gK9PLnTuX8H3%QpbpRNMIO7x6rBhSN0KNHuYjgGv1KoXJ15FIDMFg5d:YsmYhg0kbrDgciJkxgrvL:rbfY88QTzHvxRWKsiMAjPJwXVNfNUtfz228c%fZbDqnOD9q6lX%V:z16MA3hCucLTFSO793LaVQjXv25%27LNIZg19ZEMADo%M8:lqkMwTFGWNe1di2LrYlg%3bOA2%qnuEv9XnlM3MmSxEcq8w9DR3Q16pzeyIEGyXkS8DMmSxVnV9sVb4H0OSDD1iiHLt4kQLV%XDE3FuikfL5AFV7jFOm8JZybuFCEoAGcjvCrK4boCYC5XP4MIfll6Z%xi7K%Z07LQRv:QkP50WgvQ0uYAQ8e:bkNeX4okWsVxPsb7%RVsrzRQJNrYggEhhgVa4PcK:19StW8L38PEX9t3UrySpizJQJzR:or%aikoT54EGOQdmOsjqs5pqGDZmGYE1dEHPRsNI6TZIw::ILW%RyHdVsV5Iwh4QwDjHn6tUPkZBAGjAduM%KCJyAoUq55GRMcltaA88ox5U5WT0dDB:OauBhxHRgpDjqqolUkjC3a8fXNl5YByBgwwZ2qjhMPEIQ7HXoECnK8WbNeAQYqPx:6CGWNG7Mizbq7A80sSKCGeq6YmP5EWE0e7dy7MMPOQq8JF9fR91:::zDhddft8gssqzTSn4P9wL:U:WVhODWZaL%ggX8XAoVj1NPFaV9gN4IdjlaObZmDXuBJljcv3qXcm1PLIYuGiDEWuLfscMi7crXDAHqTZzIbOXYhAnMQUwttoxmihGhPIo7qqV:WW7xRHDBYjLSwYOknjljmQb37eMU0BLVaJbvHwQMVPcZYucySE0E6s:rr:M5YmfTFatpVVVHW3X7d%:mLBClHnQbN7Ly2DEOWl:bqhWjsCx:S4UOCH7wQV63rmDiRGbHxbFSRW19EKOyXe:eTJWkomVbW8QobrJtGwfkhvfFsr7WAq1LecA%FA8V7wS0W7aM1dZlExNJR7A%X8DtrbeYohqxUyjJAdQI:Ocf9sv3vFO%T70xY3j1wgVSgBZYVim1gbttDQB51LaRO7Zompk2jalYMrC1mz6d%fK9QoEA63oWLOBnxCj3w5LNrUcpfdQeaKv8P3uW00BjYIgkYf77bw4C4fHxlsG8dSuHEEt5H1udYUtS1CKWdX6IuUW9354jd0oGIrBTrlzeH8HKUxDuYDnyywzq1Qv:P:9kL8VtBGohJFVF4AShCDmNcANTayH1crmG8r118v3PIYxCrsrP4YtgdRr5eDKl7%K5IDiTHrGFnCXXW1s%dwmLCZlilxAgfzwQiplLch9cQShrfBCj34DIoHZBvr8Osew2IhRXBQh2X0euJ03uN%sAWT7yMyuKpkK57Gn5fv5yu1LlttRCrNAy5Wf3k:9flduiOOiWgDpRpDPFR6E6BiBYzLR0lFxrKnECreMBKjkIrb2ClWuUupV7IZez9hlURx5V7mPtc6jkOlQ0bGWps9X3U7dNuW8B4oWotW:K:RWNZQHFNajqOtWxEQtV91A%ynOUlZBTeWZ1P6jLK23Np7hGVGmXUkZpi3J9CXM75Qa6xP:wTk4%hkJz2etIsxmNt5FuBeaqtUrydKZTVdZXk5CVy5EC24E3KgUtmPPNpGflckCjEYSk1WA2FXIyx8QJnaY4cem0mE2FHOvwGUfVx8viBGXcuxiHqAooTqRKnXos2Uwriqpqlzry6bVen4dlP%B6peBVj3zlvoXY5r5lcoKaCOu2qV3Ly2KhCspiscr5ilr%qK8vrw2VJaIbhpqU:kYzIyqqVmp2tra%wZAzceXKYrtd08LDnTFSO19faNCbjOnTVq%%gqqTH%:Y0eDt7e1q1Ol0RmfnvBfi47OwegnTIiLcc7SZtTVm9Bq9c3p7Z5:kEXFxxeb1aeHhzgDTNm609kzWTAoP96jlXugNkCc5pc5Yu7aYSfmy6GjdjitXamnNZn09J6cs62eoqagx1sbvRkZ6ZRWmt9Y55XVONUgNlkVHq6cCDV74F2rN3bSF2r4Fhpxmz3brVuQfOC08XO:jb2ygMZi6YDB1zSi80uKlfv2KLYeiW7VywiCFuhmcIr2MLtFGCrsczE8v5i72bmSkV46xsEWOsbDFu5GRXupzL:Tv7%HmWtjWCV2E3qwdqHc2tZoRFaX2SNIczE:3NRoLOwYFuN2VpM2sTw3q37JQYxqZlZdZS2PWhOo1mjswaxtuOXdOrePWFBRo3HQ6TUCXpvXDdWi9Pb281PKLXlOoafCfvp3nuDjpw8KDg6JxzvWl%PTgpEcbNLZbh8keLsauTgZdm9zcbHVQSk2u4aqn1mxupjWbm%Uarnqqz2mcc3ydDbr2nq7Gro1qe:XUoQ05n3tFvS%h0VHo27950Ojz6ZlBLlp9QERw8E2RHq:GEIFBpzXrtNrCPi2CWgP6qyZTsfm9MLcgo6DAnORmMGSgMaciSUVr6gOXLxdqNRrzFSk3RavB82DipfM6rbbYVNCkXj1dodmsodBMCz:f2gUFXNXptMVcwPSqa:RW1%s1Wp3GrDWYzWh83VzdtBqN2aDTFSuTm2fKX::viV3jetzxgEajuykIAGqQTGA0eKRnFF45vO7gyct6g%5cgLu7WnFiNpi0l7O1eXuX7z9%3ODslPjOxnVF823cgQP5rzTpdXbJP:s:BHPtjMK84wU5hmLBLE6cPy%1alrnxMItu2dotOikvPydZ86mqRVTZl2uMaNQk38YQJdrzFCfK5AMqQWu5n2ZphzT7rPnc9GaD%an5KplAnOBZEjNc8nf98nGHc:p9ZxdeexYab6INQrVEbjKJtYePmwa0rx9RmEeF3wK9RdfWLu22CjdeOpU:jMdumamZ0jJb67eoH5BAObm7rWval2dkg0GTudl606:u25dsXB4By9fLghv0iLLbMhLTM:IPWzUuZ%Zm5BQzGdg3dGjuf0Dg67o8zXJr65ZU8z0bNPJkzndGjRJM2lNZ3R67TFMxnPvbdhQrMzETp1MKbnmVG2h7ryP2Sl55bFj1e5sejuitOhkFS1TFqy1eA444IADDjjggAMOOOCAAw444IADDjjggAMOOHALwaECvzmhbF%ov9Wmn%qPtdG2urwCa%No5VOg%hRalbspLOccsA8ORlAzoQxUPcL%2wmLR4USZ8VV:rjIH%OkobTOK8CpoBB9nzaEFBaiLVQ5BpjNaMxmtMH18Hd1tvhnZeciHTvPBa2WAo0Gs05LwcZ9HDHoMK3YwbFjF0jGEtclW:WdjbClNiHsqm%aoH0OFIeDEVQvlNlZjxjoSuYuD4T7tnefNgRH3kmH9o1o2aAOAQ3rFPOzrzakZJC5:TgHT17i2PwVrD%cxDmEn1s6wqdPQvgo5nH9HC4cqCI4GMGNhTLonREeyx4Ip9PaTf1p:NYD3NOxKW3Ly7Zek5GSQebOk%yf:QvxG:dxEOEYrDCIbARzsOUZ5UA1wsEIrj%0iNleScfsH1qP0On3M3LgHfQwOpWaL%uWQWomGYs3seI5EcpBiSZwBcEY1E7fDlQTHIzg%kDJxe6OCEMROKonPV%8jzHN6hNYvU2rfhxN4sy97zLj2AX2I5IipiL0Dnk4mEK1wMEIqg46xMzvgYiW1XDCYAa8dB9jfT2K5dBzQIXdJzjy0IfMkZlCEsWZgkPxeIPgYASVgwah1XdDDP7GTw0m4sX7iHEM:opj9wmOvPIdn6:bwz8ISSEFsXxwSArXGQ5GcG1QQjt5AoHNAmg7bxyTwlrStprbdcvg33Ps6fAs:8ESzTCb4kHiHKhCOBhBxaBF7Nn7AI36tCHss:E8dzNr%WsaElPIe3MZ%5NSOXZ:T3T1fTg:YDqzEMxAnenagSqEgxHYB0UC8AGC7u:FoI8fZ4qrc7lJkB2oJJZtYtNby1h09HwxxWI2JcPYOlAJOBhB%XBCLAEaBftz54rXmO6QAKoHv%9m65SFfH44if2I4OlpFM8a58A1wsEISocOoQQMAFruncOHIQFFydQcqEZk52L6cTOrH:uUhcBJRPT%dISxkmPpcA1wMALbcEIsA5pOGMyID8YysbobpMbO4xw7cZHEnFwydp3ktF5L3tzlHKB8W38toJs4hFYFhegLCtH3bkWz:EL0bRvRpNCMtnkg9W:MU1QNJBO5T85n9pK:WIdQLF5GbD86pIQKwMEISsIZkfcm5OTnLNJq8KrrVX62qKrEjuMc3:wvO6d8xWqE%JuOyGNzFSEKKzb8SpoTtXdgeSle1J6JOquPQf4ozk1Kcuxa4W0ICmtO8yGd6N6gNvVq4vbomj1siXqL94GjiKVDJqKfHCgHDkZQHAbAe9poBmigR3AAPe:tSsvrecNNB9n301b%%HQlWxAJq1IQgz8ToSVXe:XdKPdfdUIRhWEoXpDOWBiEJ%Dd1J8GLwxjYHgbutQE:cnmQ%zp9xpvAv8ijJQycUgIZcLBCCzQIzLVBY:qydB545hc1bsCKRlkrtjOHzN:5rej5zmOEGOvILz1chCDXp0orSZDSfamWFQaEf4UXkCdkHoEPTqAfg:0YmB1SQ%yhPA2giFcROw2OHQINuBgBALOCJ%A5osn8%I9XelXVRX:uIUN0xez5Mh5DiOIMQ0h4udScf999Qytt:oog1IdkETJ2KjOnmidI806AEm%6ti1BCJRe1i6IqSGOkDAKyOIeGIgw280Yxg7l3eW:MVy4Dhi%9GxXLCCgxGImSwAaLN3DnMquzOQkkHm:NV8:9YyfkXkzL2IWOMrM749A0otjiuBR9SxCjwBjyajW93hWrdWgEsdNz9nHxdfJy8Xb8xoMKNxD:IqUvqZ0nIyc6:kZKDOjKnBrNFozBlHUk9pdJp86fLVS9kXsi5kHL%SlLw96Rxi9sxCMC3lk4PtQCT2pJ5VXK99gHoh9Wg2cywPD%xAFzv6o9LYfYIj3V7geeAAYpchm5ovdd0w3O6MwBWRQLp9YiwLfNzxuJZKsnMxxa7j5%cX8h1Cc30RkQJXmfXLg5IN1ojwWPRGzKJ%zR7t0M8vrGEv9wYejXVGQ7UZMJnScjKzL109n7r7ws79c:5ehdBlpCIknAxKLm9Kg%KfYUQsI:yARu8:TPTTkURfz2fIzsU0YiZT1%1hLeI9ZeBYKgC3NyMwAoFUggmcS%ZSxHSmHbvAHsTsfwX7DVyUOAVuiIHvDzTq8dmQ:3g29W5dnYO%okjZc2HvhU1nfj:%3f4NCOVcCmKQSZS9:FGkBRcEU6gHNP3mWZ4Y3p3e16u9U77io4%Xsxg4hpDWbnsfhtuVETgjiK7dno:4OLQ%DSpy8ZZ:2d33Vd7Csk2VgX0BNtRBSuoAgfUHNO0V%nC7:3Nv5FWhNtRkJK0:ufFU:OHlyf8k7UL0TwpCc69EJ7IFRSpSPDmDXh3BiElRPHg9TLlf%IoP5y7nO4TeIJ3bXDK4HRmBHjEIW697g5ndW9DO3gs:WcGy5xfyPwTxXESIw:bM:nrEMsQXaBA4KLhvyJi2MbfS4C8NprSczJM:HVp2eMGun4EzFF82lTb4dAiJzQdodH9v7np9JOOrIl7jtqNc9XUnv6k:ns9%yX:mr2IFQorJ4jbWGdxujECHULSFfhDDMxMiGGXPRTIDWIgQJS8hFGf2iJMGxJq:HhDcfmrYYw0jm0VeW9NvfpjScjL3frh1XtLaExuxWAEqRj%2BqHi7OUNNAj2p%Mf7:DetepyFES9zTLJxMFfpjJ%%Lvct%EARxG6DlN5196quN0YgRvQMKQevffO5b:lFZ7zGz%8%D9iEUuAi1SMAXgiFJHNey28%w2vUN:QSrT7lkPWmfQzW19c%2b26fTdCK:CKwgpoTSG4ITQIzRq6k:nP97mnWvdhvz3HIkdnuUV4ODujwhrP4lYLAFQbkvcTozAgFgStF07nRllBRE5ksjZdpN4DrHVlIj9SwBFAqgPtOi7%L6ZtRp6OhyVyoApLSdz39y:P0pcffx34BRiJyIH28sGDUKx6As0fTKC4bNieOpa7vvcQubOW8G3iGVeBre55eHtwgg0iP33pk9H8tD7DzPJVqHsXEx3TmbKiYtsQRClveKi4qlYD2gWNj9yum8bv:ZV03QwpedkXPjzdMKl7ef3JK098S%Wrbpc7N:T4izq8AAAIABJREFUV961YoCkTpji5ntHvYYNBwd30Rn0Xu5NvZuq7RBuBAqkPNPu9ze:n:j78VUIj8IUSlfAahH97Q%0WPcGb1RE1wNFdgUTgb0I0%7bVhqA24cROCH2qzvs%YhPbO0SJBxkb::XhbiI0HRL2Kc8ckE4KQW3mdTl8aDoVqOvtZGZp9LOXdp6bsuJn:79UzqXcQ4xO6odjpSBr1j9WVsKqr9tQaP6tvYlUBiEYhGo2DP4%nasF9JgYJOwOp3qdzb61bquvgTSxazLCZNWv5J9Jv0fLHv9pc3WyhKsUVN:um37gFkV2WEwRvMQ8DcixLpUyabf1LgdGEGRNPDUYMbMHMsz1gWei%XjeStZilAG2muCqkgBDdwae3XuPnvAjIoMElNaTuaFhNN:Hvl2:6:ZZ9JPIhRnaVhme2XAV1cyEHXaNScEw6uFGHi1Ab:WEzsPDRwUPMjJ06VSyjtbuLQtKWHrs6teR:gJXKZ0yUyDkGr8gBa:vMyrA9rT1Z57yO:9a4QOKAPHrsEtDQNiX7rd5hl81KEJIcqJlAwy%77C5CPn2YrY2srCPmWgHrG1FRw0ouXINs90LTdeQYGUZ7q0NXHTP6%sj0UYH13i2v0Oykp%auudWic3NVt9KuJPYJ2iTWEMga0ndh7eKKrZPVVlDJWy9%KehPHLX0Toai5S9jLNgJBgmozswd1fPcOL5dX:w2Y2PvghbwL7EUuR29aw6HZgBK6IMGPh%z7mU%XgrhMc7S5sz5WwV:YuBZR4BS3ufKvvS:X6NO5bWsECKc90cP72BSe:P:Q7gtFcQsw8ivVhefdTjGzU63nF58Bd:nYFXN06jmmDuVAHhVrMqveqwQzawgLpSlbOoeUnEdJOHmJQ5WBJbnpV:i1R3J9AWYaU1UbrhC71m4xqNaDR0GbR7o29rimhi3Tpap6xrpvhysHL::z12K:PI2btZMpmBlpEnzQIDaDb%jeZXdbOgqwUHg:sQkgdt62e4FZnBFrEzN0sbgqvDLmTQQDx21gzcibvA4cQxJVrZ30uCAVV614L755V2pZg0oZTG7a:sv6:CI20EkYrh:JnHGXgK4PKGyHy%nv0fX6IU:32nQzejRprDC7Xxfy4QErLKEg5dUI6sv7Pq7u%24rom2Qs:gQSliVLaUxMcZaqhWCYDevf1SS8xfhOj7n61aqQQdCFzWfPZp24siswIrjJ71FLRiAMf8qLPqTsLNQDWm%Zwcz2TbD5ng4ncq79JCYAOxFM2mFHcIvCCbEsaPHvp8xrVIeQ2HXETpjPl4hBmoL920YKcbXt8929H9uyCjyx7MCS:XP%:kquWwmZZc8aXxn8XoC:zjeopWfYk2NcQvr0t7Nt1xV5qafP5hxeszpz83zFCk9Z1ih776VJDFrEc3kgG1V1mTVgsl:XQLvW8ACnfjq0fu8HW:7b6Z2%xtRT6X%c%HxHEva9M8W1vMV3k3lxWFdKSG6yRDABIRFcxCER3LIwAnU6B9Pij3dZNetnXnhlEasQtgFp2L8mdEbMzG1tSQJ7Z2:576kfDv2EYABK:H17Zn8lSYofEOTR97lRbq3vufd6zfhVBdOlw0cy:5yzIPf0tu0IjXsy5ecuNCCWMXWBoGaPdBgZPLr1g:boE3ZM2:hu4poTPwAnqJhfgAFhcxA6cywTnhrMCPVJeQvxaSxbiLetLcGtzgicgVo7P%T:4rexbdpiTiBE3IpEqlEMkVqFzR8yw7dN3Q7KiTO:HV6x%92EecARLBFwymMA6iQpjV1aRt7lGf7sJJ3Rq8o17zcCpkuHj1xZ:tIHBaln9iCYgmIhaJcfQf2BTe9qMa7j%LKWDdLFrMtr7l02DiHCX8D%pRxYFLuhH8QwQW1W:ulKFk%O5SOE:uG2djy61RmBoshSnlOJvGMvdMhE1ObZrk8GDW95P4B0KevSmmHLJiEUjeewLyaewgB8gcYuzSMGeQ94%bmaPvvbi4LstMz0DbM%zvl35VosBkFlMUZFIvICGro28OwYNmfg9NK2YA8v3PXl4QW75iO2eCsaR0AJQxfyyTgee6Q:D%fkIXnfz2hgH2K5k1OB%m453OqMoDLQIBR2QQ0iQ4Z0mNrzLYBzvx:7cef0Pz9BzCKXsW92UsKjB7m0GDzY%66pU6qKAeSlnExEoy0sSDt7wZwnZYPWxgAp1GI2a:V1Q4O0Ll6eOlev6xoqLGvXkiUZ6z9QO2mVJYEpfgQ%QFD9AU0Ht5:S:XnrJUPm6bSzG%7:UVnPX4tiT4%8q7F6OqM1GswDXuMbLMua21YaAAcjKAvOiB2CZhG:P:idwc3Jd:d7m1468%uRNQjz43TskwJc5Xpa%j2%:HOdu59fRRqRe3bH:oKM8ycyti5YW5h27jwWS8NsLNt8SkhztW2AGorNgR5L%DPFetBT6x0Y6NHlkQGGem06GHwaX9N2ny2kr5899%qu735AMIQUymaaisRUFwht9XTnR5uOal0sYtHmZ1ZNSd6etBxhcXj1Gpqk7Mpo5f%FOFKnAQ5GUBp0yO7Dvb6IetGtoXuPlQMXxSCUjIoXYnkziLKN5ec14LWHnYO6jss9u0NybRERVNoFBVJaxpX4KbNN53buRcx6V7CENVdyGaitDStDwGpjJMVy0B0xM:u7NI:oVqvT:SOc:FoEV%IeFEhpGclLHp1UkHpqG8KQqjwPTh1ilyHQtZFnl7CPBr5trFurLhRJYzMROpk0bvNZvCrhYAS2oQdcWzzdpWX9Xo3uXxu97EPEgFSi7NgDHWL9G6z1qh9WZ:RX03Wu3rXUBcx5Oabck5s3pf465UssQTuuIAaLCfsTlii%AgYsEY2toxkj16VEKlYMhqyNhhTGoARSCdB6N2jlfder45wb3NHGzmcvAVk6UJtxl2cL4IyQDkK6fjBgUt1ugUOyzqTvWj:6h2cQjKAiW78OlAMHI7AN9QDTUDy8tz3QIrYFg5wadu5fO:rTGcoJefD:lfrrlM8QS4wLFE:maY%1oTJQvRCD1beOe2Bgx%D%d:p5NQoqLCzQm82FOnejj3ctFy9v9cV5%blS6tULZy6nnz22ctdXGxF6jsuIwalIH0o7tAjm4ibfp6FL80H9PPs891RpeoaCrOSc7IO:HXVrP7K51sloUJ:LObJ%XeqvU97FYshV3jpfj%jHuiEPt%8S8kDrqSvu%nYYFiMtByOoIjgYQdVDiYIU5Hbn2Ps8e014CaAg8%LFy3FPTC%8cnYfQkRW:O4rukZ1BryeGDDzCT:vxmNrOXs0qopGH0ncufnnbZ8uuJx59gC2twEV4yAfoJFLi8ERtpSeyUvHvW46t%MfhKThV3vkguedAtsXuQibkvbtSF489gUEM7DHrFeJ8%gS9EgHz5Nf7lICxNobGt4BO%BgBFULDcK0NsDrrlfvd21792t5F::dnLrq9Y8Lko8r6bfSsS:QaWlQDHN8gYY%bvU63Ndt4hOhAXdUSQQkU36O6Yctc2buPLl%NWIb0DpQiFqpF%IV8cZ415aDhwGk:PD0s7mntmxELHOykQ26ENulvb0HvPIfjcHZJffU1l9SfnjqXYQB1hXs39LV4Bj81wW66m7ALQZFlDZ4Rb758uUfnx6V9de8b83ZV5RIR5XJwff:7Z17dFTV9cc:9zGvTJIhLwiEQCARgrzEiBBASygooMVWAREriiJaUCpWaaW2RutCrf6k8BO1Phc%%CE%ChQEqTyqAoINAkbQEFCBECBkyHsyr3t:f9x7nZvhThJ8VLs637XummTm3HP22eecffY%Z599jBVvs:0v%oIN0sHKPb7zehYNcthaquLfBJIoS:27j7i4qO:kqXVNp%qPnT5kBGcxr1kE9bpUNZdvfl8JNL4d8B5Z6dv92kYidw0G0QRIDXA8dKp8X8OOF94KNdfvdQ%4cqYtLfdw84GNZUQWQeP4ARHXCL57GNt0xnVj3zamgPkgUkK:rhdl9ssZfkEnT9eLUhIzR7odSTnfAc0xcbL2yMZHV82YReTAT3Q9DKEEkWPOVjBMCzfgTJ38:BDvips2ox39:q897PNjQVwQ:PhhFgRO06fd9Gmj5YD8Nu1qbEuG0BYOa4nczvxd2OXm6EhGLIQ4fmB8W0FgrK4bDWuojm01rrHdZcyaZoeYWLAqJ1Y8O9GUzrwFZw7mYRXEw:jfPJOfbUcVo55oWAUJaS2PaB6baWwrHwPmPKKDkrQGq3SCxXet0R%LBwaPY9FuFhbESGNOG11WdMAVcxohKp2ZpvbwJrp9zPmZ:zbqZ:Rtq7aMLj%alrZgDkxjbpvWeHsGzlYQGDawcUefB835w6kXWkNkK6rZgggjrFQ6kFlezuPFxSx85RUMB5p6IgPPfB%gB81X3D19Oh1ffJHP0bafjBuGQGNGIpBxww3027uX0K5dVKMtRhkr4Maqd0c9PxctzyKoQHDOHNKbm:nymWf4WK9LrDDbBmRaOuSk6zQn6L%ZZ79mvZ5etL1w83FeIyhnuk5jmv6:jZYdLqS:U4UWVKWKM914DS3CCC%WjKY9%HR%eGnp3BPtb2BuB%MocbLOs5D%boNerrHuYaRriwdB:f3TaO3opaWJ4NTzSdTfNXhmnHCMps24cTnVRF%tnrexGGnER0jTabKZ6DH8Kvz649PrZQRrMSJImaMod9SfRJ2v5sGt9OmDMHMmHebOZT0RV3RjkTddf89mKt%YeIImGoyAMU20vCXKuCbOiA6VofPLob9fg%aTYlzA%52ZXkYYqF7AT3:5S4o::JDPfD5U83PsGKeB8UA3nSgzRJ3Yfr16MaOighrjvdtvZyFQqFfI0BTcQM%BA:nFe%%x01zOzp18qpeTozPEpjOkcNEiXjKnraig5plneBooAsa89RZroum2ev7xD94FLkTrXFazGkS2CnsD41esYH11Nf725O:zoX74IfsvvZTZwHl63VOA:PnzKW5vHgMGMBHoHsVvCUiZNYuxJSVs8Xrxmd9ZsIDFwCC9PLveLt1Gj2bo6NEM1fnqIbJD0RO43JzHoUMcW7qUxaNGMQzI1nlwyRtv8LbXS3N76T9wgBPTpvEHYAhazIJkvf%MPn2aJp8PtbSUL0aO5LfAKL0Ppun1NY6HX7x:Pwei854wgRuBc:T6:MQqTazH66X5uedYlZ:PDTptXXV%dQfGtTeffv2YDOSh3bhdsGoVq9r7bkUFNUuX8jpwiV6PdL2%:YCf3XsvL8Tqb3r:HaLzqs1NAbmN341ZtjOQX1rKwtxccmIlTkmhw8svc8l117GfloNHRnN%yZ0yhStefJF7zO:9%c:cMXo0Q6%4gj8RcTaRgaR585g8eDCDzen79%fcPXt4euBAfo0Wz64Z6DprFtfMnMl15rSpqXh69eICYAMgNzbSwrsPoLIS:9q1HExIoN7ppMntpsHv53O02SSWXfz1ibb77mP6737HDCue7NzJlwcPUhkOIxcW0is3F4:x28CB5K9cyRM7dlAyciS:Q9u:99TV0cEqr7ff5mh1NSdcLhqdTpo8HuqGDKF57158tNQGVIAnn8Q7eDDV556L05zPtGncMH8%W4mEK%ty::1cO28etwAsX85b06fzJJpPvwDkrlzJveY8Onems8tFr02bSAU6TJnCiCVL%E1CQssowgcPUrt9O2WyTNDgQc%ekfp17UrHv:6VBx56iN9kZXE9WswBR1ER5zuduAByc8lZt46HAcrKOPLrX7NkyxY%QptpRaCT39%yjk1NBFavpoHIIPAEAmdMTlRW4j91irrEROQePfja%crlwnHttUy49lomAPzxjyx49FFWofWH5Opq6tPSWoZB27WL2t27Oexy0eB205CcTO2QIfhKS:HpdCa10v8OCQLK1VfTOzFRG5epqXgmT2bi5MlM1Mvf3KcPXdas4ZEuXciMzufECXxeL6cdDprz8sgkoq19q3UdG5r0GbFwIa9YSZ3Dh2lYsoR39E78M%ACtNkhkYggcOjfXbJsGRtbk4DV1fjz8pgFFKAJnyxg%B:%wPNW6Xfv5ggwE7ju5pt5xirN8uX8A02iDgLGvvoqm6LTbN1KDfAiUAzcAlwODECTplbCUtR:G:r88:zNqtwbb%QFPZ%%aDPSQGDyG29QYpX%L3:hZTStZdTs2SyySjNlCiuB24CfAxfpeWeiaUXRZp4NbRYa:corbI7Oa%lS3gdmADO3baMs%vejR6nLyWEecPPdd7M8%ve::Y0dwBTgyueeY6UVvS%%yFZgos7LHJ3eCQ8%yGqr9Js3swuYAFw6ezaL25oxd%:mSHY2fwIe2rmTkxZ94wq02TgPuGL3bo5E5:HCC2wDrgFGAj:r1o37T50iYFUeMAkYAUy2ymvhQg4AS4DfAtfqbZSDHnkKKLLqf::6F5XAvcA98%ezxarsvDxmA1e%:jrrrH7fupXTo0fzJjBPp3OIPu4SiK3Rtgkj1t:QWAVPn85S4DKdyR30zmjYguifbjSVZuKBA5wwv19VRTA9nXe:%KKl2urzoS5bxkZgrJ53V%CCoiLmWalB27bhLS5mv5VQ0dXJAjSB1iVWQ8Ro9EvQBJHV3rwDTV2%2urd9ev5FG2wdiNiP6YAQ269lSWtCKzxwCWzZvG:7aGxvJx9wPl6W1mpfw40VfZnVoM9P59NX36pqd%xnjlz2HfyJCHzd%%%yx60QTYcmFxW1nIQ%nyoR45QD1yPZjK4TP2hH3CLVVl79:IVWie%7Fe:4on28MB4TpwgbP5:zx4Oo01OufpjKQhefZVNaCZHHtpkMWPfPrwxaLsCGApMtMor%lmzhreImH2dY:W:nTs5CTyxdi2fW:SlfcBUvZ37AD9dv:5MwR79eL34xo:nFv2dJNpYD4xlGhj%7In5%fSxSlBaSg2R6LVu:TNEZDHHCWTn5VG4YwcLzSpjRQXBO%7gk%HDcc6ZQ%nChQzMyooMuF:8glFeL8OHDuX2sjJ2Asc3b2Z1WhoHtm3jkUGDIiHJBw0iZdAgWvjT795NWWEhdxO5rCQALdOYcewYgbVrOeRyUe92U%:xUEPrvuwCIPTujdvqR0VBIhJt2I22yJMKdCwstL5qbft29qAtiEmC0L6dCklqsSJtpf750RZhPxs2jHsrKng2NTVygejHH1NkTvz55zQlJyN17hxRoR95pGX7b93K3tGj%R1aPAYBSBWEM8tWtUjKZh7Y0CaMLgsWaEFko7FxI%%j8V3UedgCU6fyz8xMgn:6Ez9xu1sK6OTklrNeUxM%IgeqYs6IukmRA6T16EHOunX8tnv3M:vKXXfxP2imknHs%wyUlFC3Zw%HExKoS06mZv9%PiQSnCWmna6qCJmZJA8ZwhknU7dupUKnX0EzVavHjuUWtImt5513Mn7cOIaNGEFn83suF8433%Rpl4vL0HhqnCGxRCwGKXoFTqxZwyqrBO%9xxyfj1W7drFh6VKWL1vGsjff5KUNG3gWGAYUPvYY8z75hCXRdmNWFrbXX%f85csZvmIFF5iFgKkijj17eGbqVK5Cm9FrgF3DhjFr5Uo2xqrQnXeypLCQm4CdRM6tt2oj1dcT2ryZ45s3c:jddzm8fj2HH3iAIjT132XBpyBQ%:nnfLZ5M%9F51dURO99%3giO5trgCuBid26cW1JCX%dPJkR0emffppXFy1iJZrQaopF56xZLHW5uMLl4jyXi249ejCStiP2%NCcgfZkZXFrdTX1Voluv53nzjuP2T17MufjjzlglcYkBEr1PKuAo6%9xhvRaTMycJ86xaLLL%cWNPNgIjBx3ToWzZ3Lz6PT::3vvDN3Li%gHShSLr6Y3hZ5fv7UU:wlPZ1LXS4mv:QSa2PUmS%%4CiRsxwx0asXfTdsYIHPx4p9%:hz9%6kmX:fuJEPXC7GbdjAGjTX6Zj96dgxmjZv5timTRzesIHD9fUkXXcd:Yis6FvOyrJM8Phx9qSnc9euXZSbf5s:n9E%Hy8:9xzFaNpFd7TditQRI8iuqiJUUWHdZ9auZR2tXy7bLhgx4vOAsWvX8l571bTCQhbEMiluu423Z8zg2dmzWTR1Kg8ANwG3Ar9fs%ZM9dXnQ33pJe5BU60S0YTCsPvu49nodEVFzCOyGm6WwBLaoC6MRVcM82Assc0DIxbewN69mV5ezvGzUWV9PtSDB6ns04dpaOpyqk5337vuYoFV%rvuYgGanX3GglM7kAT0HzWKuyxU6Kv1fDPQZprBeXnMNq:%66bLaJ0fhmA3Tln27dOHaQcPUvlNeJCfz:VAf71ts4FRpaUcik575508jLbekKqXmwMMP%ccbt2%vaVa:eCDLEFTpzuhDZ7L2ttGW7ZQ0qsXM9BMnxy0gWzcL5EFXBa9ExPrWb2alcBgNBN5%Btv8HZ0mtJSvkBbG7kAGPPYY:xfdJrKSrz33MP9wFVWeUSZJB%gmaZGv2prU6BdfgTmvfx0oGOvXnQbM4b%Y8dyQffudFVVBEFAFUXCdjuBJUtYvGgRewBX795kP:wwVxYVMWraNG5fvfrrGPLmUN:GcdPsdeu44:zzKXrkEZ5::HHeRzupZxw7DRAJIZbVrx:9PviAFw4f5rMBA7gH7ZDMcc4MHGLsN6fdcAODu3RhYEEBFwaD2MPhliqbJBG22:F7PNT99Kc8rJdfh:XBGIFIDP80oHN%Pj2vvpph48czwuXCravIiCLKV19xdMMGdixezFadzpNovgTG:rgMeEaNoteoUYyoqaFDMIjdZiPQoQM1mzbxwaZNlOm8OFv:fGP7tusDD3D53Xfz0Kuv8tSMGbyCNtOZrxUz9soz16:nxsREEkaM4HE0jaUmquxoHmTm59NzzBjOu%oqLk5NJd3ggSCger2ceust:qnzoDKKB2H0iE4rVnCz00kvvx%HKKIkJdHw2mu88vzzfITmdxAwle1GE6LpgOeDD7h22zbWzpvHe3q%dqDzpk3Mr60lORDAoaoIFRVUffUVx9evZ39ZGZVEfE7MV8%Zd42MybHzQw9xuarSPS%P3qEQsmq6VEYQUGWZoNtNY1kZW%bOZQ2a2ee86SYGZWUxoKGBJFVFdDrxdezIqblzeVvngwR0GjCAPu%%y9ObNvHOlCksQ9PA6gDnnXdy0a23MjcYxPbJJxz67DMOLVvGR2VlX9%gdYqW5kCb2oCVIBCiHvP3hheTjYhra3ToJ8Mxw%gsRhqBlgExookzAmLY9b%NvKwu1DA6gOFiqxJxBolVcYGIR6OVW64ZhtOLQWt7PPcMByi76TEvnprzNN8iZLbvDR6bbyw2BJXhcGI4n3wTGG1nLOwaDk5Wdq:BK3P5VhGSzLQbPDD6h8GD6NBg5j4SzQORlv1LIuJ9Gqs:GOVLJnrNMSSM:mJud6NOBk9DpvStrdGYQ76Z%3%0t6JxOMsc:MXcB82xLsxpjInR4J05H4XImQ2jb0SXY:T:M7aTW0O0IDCHrTIK%q7ckM1uxd94O8MibzO%rR%8mU7DbdNcViw31e8DEiA9WMT5ioqoqgjqD3w2RABVFFB2n6TizX0co%1B833C7GIdLSTb7Vr7A8Oog0F7LH4qFunaUz:jPTNfLPGfLgi%a7QmCERAuns4%WlOko3B%X0RYgx6czk:BkEAIAoogoAq:ECDTRA0gVTdTN2jW9lPZEaPCwLr985aEBjfWZkG3xZC1OePFbHq:e:WCL5rmM9T:FDlf5dlRx%6Mr4zf:6noK0DRqrF32dTx2%0RhCHDrW4WHz9008FgEl9%6pCcXF71WCheORICZBdyck2AF9dXRAIFW:Z0q7YBEbZ%6qqBIBzMzLUs6SBFZMmSfuqqmyu5GSbLxgUAFw2m3qwoqL5mZKSszlZKajFxYJQXNzeE3EAFI8cKaPzwBcMCi6bTTXxob0BWoQVkyaJZj5Mfv31:9rry78vxAXBmRAWjxtn9yqKW3YHkxqbAw4At9PuDzXa6o%dOlX:TElJrBV7YfG4cfbKQCBRcgVT7ZKUqiiCGyBMuF4ShNP4HV78:roYA%Hrsn3hxkRVVl0Om10GaAg0%%1hKSCqjkZHONxYvGVLa3vD4iMTJri9Td4UV4LcUUBKEVFcgiCoIYXGsKpW1wdDJ4W6UM3C7dutTol%TUujKCacCNU53aogNwpqqJOc3OxWlKY569bFDLc2s6DA1iU9PSlk86UJgtBBUMVkRVFtsiQGEJS6kKpUu5WkGn9jY30rAkGYW1jolFMcHoeoJAmCZAdQCTfJAVdtG%0Qx1kiHqosCjMLCmxKB1uKJAdzQiEl:5qC:rMvPqfH1H99WfEVclgSExyhfslp:pLKSqvZVBySm5sckJoysjt4Bl4zuN8f%2dljDmva%booT2yxpQcqiz1i36:LLv9W8rLzzgaOrOgwOZPFFODaiBbEIXed48ZtuTjo5U1sijkjD:3nPE9O6bmHqw5WRNUFfXCTlmBD48etdzSnFlQ4BLcoU4O2dbbIcsFNw47r3hAdubYi3K7Xa2oSurJugbFIUmCM0kKukKyr9zrPaMui8eNcxwRfCkB1Z8tqGrub8cOe2rbwcP7AwRtNUI4NCWvT3BdeXl0%cKkvn3taZnJ6U67kotC324pHS6eVjjg9507JPSb0D9:9t4jJysD4bA9KISUxgDBS3NyAlu%:DK6fGFuYaHT08nRSQgrPUWVPreNHPxYr:TUgn2VVcdFuyLak1zBPompgRjtEMdZok1Hg:8yCEdqa8Vu3T1OVZETJZT0On:A1smT2FVE6CIgNjvEYC3afq71NqUohuySpFQ1NNc898Guly8%p8eIQCgU2PHl0R1IYsAhyMqxipOW2oDbbpcdkuISRTlFFsgKKmGnQ5J6C6CGFKVLvd8fsAm29GY5UGN3u%1Ye4wJCUlJdlVV3A6blOaQpUwV1fnOp%WfqaBcXdB3zN5jJ0qVYDipORCyZ3s8VpOBICUm2hzNjS4ZOcUfCGT4w2FJhgyHLAdChGokZ6IRP6DFtm6K0ym7JDV40zs7AAACzElEQVRJUYQ0m03sNq5:7pQVH336kSQJwvtlR9ZMHdpv%tP:LHkMlFN%W6jq8LEaq4Vjwe5221HVBKcsdFBQMxr9QQWRNAE6Scj1djFYfaS21hyMI45vgbggaAk12%NRQqrsQwl7QyGlMsuTmNQcDFcEw%FTihCuC:kVv9tuj9XxFHy%Jtnhqm6WGgVUIZDktPdAtan%UPgzBeW4I%z2dkmyjGKsNgYCIZeQ0BQKBb2SLJ1YV3pw%Yzh519:sr7pqCxK4Vd37l0ZJnzapkhNTY2NsVRztam%PmBzOZr8IalaEDguC2JgckHf80srTpQ8:f5Hj:sDoXJVpCKEXIe1T4cabmgIKjZbU3MweDoMdrssB0JQpYZCp0WbrSnc0GD53unm5lBKwNUsutRaJSycLDtZvf0Xg:IvrGturvG4nO7nt338pKJyQpBEb7qY2PzEp1uttBo10NgYkEVbfdguVPXpmNE90ekQy0969wcVpUoVgrUBJF%2x:Ofsjvwo0d8jcACxSNHyg63O%mU73SyZBecCQ6nFFKCPll2NnI6UNeGfQ66autMSEgIOcI2ANkvBZubmppascm:LhuHIzlk93lkQUwLh1WXoqqCTRIDiFJdQKXaXheube8agTvRlqGEBQ%a0A8ZNnrQZ:e6QqHG1mz0b7hGIBSPHOkIJEseSVXSFSXssYlyoqKoQlgN%1TEunAg5HXZkmrOTUxsjLXwt2LSJGn70aN20eFwu5KUJAEpAUCS1EZ8jrpUUWxsbZ0ijrNDXBC0ghWTJrVQm:%dq9UrJk2Sjjc0yF:UaKqzx%FQOYtdh%g8MjMy5ONVVaGjdXXhSeeeGz7LunyTXQNhZkGB7Lbb5cyMDBngeFVVqDEQCI3u2VM5i:LjuwZxxBFHHHHEEUccccQRRxxxxBFHHHHEEUccccQRRxxxxBFHHHHEEUccccQRRxz:Tvw:j2bD%s1KpsYAAAAASUVORK5CYII"},{ name : "__ASSET__:bitmap_LoadBarContur", data : "s672:iVBORw0KGgoAAAANSUhEUgAAANoAAAANCAMAAAD4%IB%AAAAilBMVEVpPg%WemGkkXd%WxR5VC2agGlxTRFZKguDYTSMa0qDZhVxRBFjMQ2ReSVhNhGJcRiWgECIZ0t3URKnlIGahFebhFenlYF2TxJ7WBNrPg9fLwyYgViIZUyCYhWHbB1vSBFlNw5YJgqTdz%fiXNfMQ6BW0NuQhCNcyWDYyKMbj17Wx%Ud1SlkX%HZkMsEckfAAAAJXRSTlPx8f::8fjw5:j4:::::::::::::::::::::::::::::::::::82eKcIAAAAPhJREFUSMfdj9dygzAQRa8DmJYehArFFOP%:9%XHUlR8PjNj3uQOBftSGiRmneWmBTxsrRt%8UKamhZYiTzra7rHxo06eUUcJnqLnp7Oaztmj3maWp7QDgvLK7%6V37SmB9c5rk25xgk8wvDJmTDfL82jRNVQkhqoqGSwGXBT0U:%1E2OBNabVV3AXx4FANifirC2cfhP:2DpX1ViufqKFrniPLztP0yYxpOmcZ4supP74x49ifLjG2UnVF:8GKvuiU3AI7qaKuYEUXKbkDoKk3FbFCUWcawKBLKeU3I6idUg:A3gxaH0pWHLQezB7pOBrzygxjxjH9BTyAlu1pXfd6AAAAAElFTkSuQmCC"}];
flash.display.DisplayObject.GRAPHICS_INVALID = 2;
flash.display.DisplayObject.MATRIX_INVALID = 4;
flash.display.DisplayObject.MATRIX_CHAIN_INVALID = 8;
flash.display.DisplayObject.MATRIX_OVERRIDDEN = 16;
flash.display.DisplayObject.TRANSFORM_INVALID = 32;
flash.display.DisplayObject.BOUNDS_INVALID = 64;
flash.display.DisplayObject.RENDER_VALIDATE_IN_PROGRESS = 1024;
flash.display.DisplayObject.ALL_RENDER_FLAGS = 98;
Bake.bakePool = new haxe.ds.IntMap();
BakeBl.bakePool = new haxe.ds.IntMap();
DefaultAssetLibrary.className = new haxe.ds.StringMap();
DefaultAssetLibrary.path = new haxe.ds.StringMap();
DefaultAssetLibrary.type = new haxe.ds.StringMap();
SponsorLogo.resourceName = "__ASSET__:bitmap_SponsorLogo";
GameLogo.resourceName = "__ASSET__:bitmap_GameLogo";
LoadMeter.resourceName = "__ASSET__:bitmap_LoadMeter";
LoadBarContur.resourceName = "__ASSET__:bitmap_LoadBarContur";
LoadBarFill.resourceName = "__ASSET__:bitmap_LoadBarFill";
OurLogo.resourceName = "__ASSET__:bitmap_OurLogo";
SliceEffect.pool = new Array();
SliceEffectBl.pool = new Array();
SlicePart.leftPool = new haxe.ds.IntMap();
SlicePart.rightPool = new haxe.ds.IntMap();
SlicePartBl.leftPool = new haxe.ds.IntMap();
SlicePartBl.rightPool = new haxe.ds.IntMap();
SliceTrailBl.pool = new haxe.ds.IntMap();
flash.Lib.HTML_ACCELEROMETER_EVENT_TYPE = "devicemotion";
flash.Lib.HTML_ORIENTATION_EVENT_TYPE = "orientationchange";
flash.Lib.DEFAULT_HEIGHT = 500;
flash.Lib.DEFAULT_WIDTH = 500;
flash.Lib.HTML_DIV_EVENT_TYPES = ["resize","mouseover","mouseout","mousewheel","dblclick","click"];
flash.Lib.HTML_TOUCH_EVENT_TYPES = ["touchstart","touchmove","touchend"];
flash.Lib.HTML_TOUCH_ALT_EVENT_TYPES = ["mousedown","mousemove","mouseup"];
flash.Lib.HTML_WINDOW_EVENT_TYPES = ["keyup","keypress","keydown","resize","blur","focus"];
flash.Lib.NME_IDENTIFIER = "haxe:openfl";
flash.Lib.VENDOR_HTML_TAG = "data-";
flash.Lib.starttime = haxe.Timer.stamp();
flash.display._BitmapData.MinstdGenerator.a = 16807;
flash.display._BitmapData.MinstdGenerator.m = -2147483648 - 1;
flash.display.BitmapDataChannel.ALPHA = 8;
flash.display.BitmapDataChannel.BLUE = 4;
flash.display.BitmapDataChannel.GREEN = 2;
flash.display.BitmapDataChannel.RED = 1;
flash.display.Graphics.TILE_SCALE = 1;
flash.display.Graphics.TILE_ROTATION = 2;
flash.display.Graphics.TILE_RGB = 4;
flash.display.Graphics.TILE_ALPHA = 8;
flash.display.Graphics.TILE_TRANS_2x2 = 16;
flash.display.Graphics.TILE_BLEND_NORMAL = 0;
flash.display.Graphics.TILE_BLEND_ADD = 65536;
flash.display.Graphics.BMP_REPEAT = 16;
flash.display.Graphics.BMP_SMOOTH = 65536;
flash.display.Graphics.CORNER_ROUND = 0;
flash.display.Graphics.CORNER_MITER = 4096;
flash.display.Graphics.CORNER_BEVEL = 8192;
flash.display.Graphics.CURVE = 2;
flash.display.Graphics.END_NONE = 0;
flash.display.Graphics.END_ROUND = 256;
flash.display.Graphics.END_SQUARE = 512;
flash.display.Graphics.LINE = 1;
flash.display.Graphics.MOVE = 0;
flash.display.Graphics.__MAX_DIM = 5000;
flash.display.Graphics.PIXEL_HINTING = 16384;
flash.display.Graphics.RADIAL = 1;
flash.display.Graphics.SCALE_HORIZONTAL = 2;
flash.display.Graphics.SCALE_NONE = 0;
flash.display.Graphics.SCALE_NORMAL = 3;
flash.display.Graphics.SCALE_VERTICAL = 1;
flash.display.Graphics.SPREAD_REPEAT = 2;
flash.display.Graphics.SPREAD_REFLECT = 4;
flash.display.GraphicsPathCommand.LINE_TO = 2;
flash.display.GraphicsPathCommand.MOVE_TO = 1;
flash.display.GraphicsPathCommand.CURVE_TO = 3;
flash.display.GraphicsPathCommand.WIDE_LINE_TO = 5;
flash.display.GraphicsPathCommand.WIDE_MOVE_TO = 4;
flash.display.GraphicsPathCommand.NO_OP = 0;
flash.display.GraphicsPathCommand.CUBIC_CURVE_TO = 6;
flash.events.Event.ACTIVATE = "activate";
flash.events.Event.ADDED = "added";
flash.events.Event.ADDED_TO_STAGE = "addedToStage";
flash.events.Event.CANCEL = "cancel";
flash.events.Event.CHANGE = "change";
flash.events.Event.CLOSE = "close";
flash.events.Event.COMPLETE = "complete";
flash.events.Event.CONNECT = "connect";
flash.events.Event.CONTEXT3D_CREATE = "context3DCreate";
flash.events.Event.DEACTIVATE = "deactivate";
flash.events.Event.ENTER_FRAME = "enterFrame";
flash.events.Event.ID3 = "id3";
flash.events.Event.INIT = "init";
flash.events.Event.MOUSE_LEAVE = "mouseLeave";
flash.events.Event.OPEN = "open";
flash.events.Event.REMOVED = "removed";
flash.events.Event.REMOVED_FROM_STAGE = "removedFromStage";
flash.events.Event.RENDER = "render";
flash.events.Event.RESIZE = "resize";
flash.events.Event.SCROLL = "scroll";
flash.events.Event.SELECT = "select";
flash.events.Event.TAB_CHILDREN_CHANGE = "tabChildrenChange";
flash.events.Event.TAB_ENABLED_CHANGE = "tabEnabledChange";
flash.events.Event.TAB_INDEX_CHANGE = "tabIndexChange";
flash.events.Event.UNLOAD = "unload";
flash.events.Event.SOUND_COMPLETE = "soundComplete";
flash.events.MouseEvent.CLICK = "click";
flash.events.MouseEvent.DOUBLE_CLICK = "doubleClick";
flash.events.MouseEvent.MOUSE_DOWN = "mouseDown";
flash.events.MouseEvent.MOUSE_MOVE = "mouseMove";
flash.events.MouseEvent.MOUSE_OUT = "mouseOut";
flash.events.MouseEvent.MOUSE_OVER = "mouseOver";
flash.events.MouseEvent.MOUSE_UP = "mouseUp";
flash.events.MouseEvent.MOUSE_WHEEL = "mouseWheel";
flash.events.MouseEvent.RIGHT_CLICK = "rightClick";
flash.events.MouseEvent.RIGHT_MOUSE_DOWN = "rightMouseDown";
flash.events.MouseEvent.RIGHT_MOUSE_UP = "rightMouseUp";
flash.events.MouseEvent.ROLL_OUT = "rollOut";
flash.events.MouseEvent.ROLL_OVER = "rollOver";
flash.display.Stage.NAME = "Stage";
flash.display.Stage.OrientationPortrait = 1;
flash.display.Stage.OrientationPortraitUpsideDown = 2;
flash.display.Stage.OrientationLandscapeRight = 3;
flash.display.Stage.OrientationLandscapeLeft = 4;
flash.display.Stage.__acceleration = { x : 0.0, y : 1.0, z : 0.0};
flash.display.Stage.DEFAULT_FRAMERATE = 0.0;
flash.display.Stage.UI_EVENTS_QUEUE_MAX = 1000;
flash.display.Stage.__mouseChanges = [flash.events.MouseEvent.MOUSE_OUT,flash.events.MouseEvent.MOUSE_OVER,flash.events.MouseEvent.ROLL_OUT,flash.events.MouseEvent.ROLL_OVER];
flash.display.Stage.__touchChanges = ["touchOut","touchOver","touchRollOut","touchRollOver"];
flash.display.StageQuality.BEST = "best";
flash.display.StageQuality.HIGH = "high";
flash.display.StageQuality.MEDIUM = "medium";
flash.display.StageQuality.LOW = "low";
flash.errors.Error.DEFAULT_TO_STRING = "Error";
flash.events.TextEvent.LINK = "link";
flash.events.TextEvent.TEXT_INPUT = "textInput";
flash.events.ErrorEvent.ERROR = "error";
flash.events.Listener.sIDs = 1;
flash.events.EventPhase.CAPTURING_PHASE = 0;
flash.events.EventPhase.AT_TARGET = 1;
flash.events.EventPhase.BUBBLING_PHASE = 2;
flash.events.FocusEvent.FOCUS_IN = "focusIn";
flash.events.FocusEvent.FOCUS_OUT = "focusOut";
flash.events.FocusEvent.KEY_FOCUS_CHANGE = "keyFocusChange";
flash.events.FocusEvent.MOUSE_FOCUS_CHANGE = "mouseFocusChange";
flash.events.HTTPStatusEvent.HTTP_RESPONSE_STATUS = "httpResponseStatus";
flash.events.HTTPStatusEvent.HTTP_STATUS = "httpStatus";
flash.events.IOErrorEvent.IO_ERROR = "ioError";
flash.events.KeyboardEvent.KEY_DOWN = "keyDown";
flash.events.KeyboardEvent.KEY_UP = "keyUp";
flash.events.ProgressEvent.PROGRESS = "progress";
flash.events.ProgressEvent.SOCKET_DATA = "socketData";
flash.events.SecurityErrorEvent.SECURITY_ERROR = "securityError";
flash.events.TouchEvent.TOUCH_BEGIN = "touchBegin";
flash.events.TouchEvent.TOUCH_END = "touchEnd";
flash.events.TouchEvent.TOUCH_MOVE = "touchMove";
flash.events.TouchEvent.TOUCH_OUT = "touchOut";
flash.events.TouchEvent.TOUCH_OVER = "touchOver";
flash.events.TouchEvent.TOUCH_ROLL_OUT = "touchRollOut";
flash.events.TouchEvent.TOUCH_ROLL_OVER = "touchRollOver";
flash.events.TouchEvent.TOUCH_TAP = "touchTap";
flash.filters.DropShadowFilter.DEGREES_FULL_RADIUS = 360.0;
flash.geom.Transform.DEG_TO_RAD = Math.PI / 180.0;
flash.media.Sound.library = new haxe.ds.StringMap();
flash.net.URLRequestMethod.DELETE = "DELETE";
flash.net.URLRequestMethod.GET = "GET";
flash.net.URLRequestMethod.HEAD = "HEAD";
flash.net.URLRequestMethod.OPTIONS = "OPTIONS";
flash.net.URLRequestMethod.POST = "POST";
flash.net.URLRequestMethod.PUT = "PUT";
flash.system.ApplicationDomain.currentDomain = new flash.system.ApplicationDomain(null);
flash.system.SecurityDomain.currentDomain = new flash.system.SecurityDomain();
flash.text.Font.DEFAULT_FONT_DATA = "q:55oy6:ascentd950.5y4:dataad84d277.5d564d277.5d564d320.5d293d1024d187.5d1024d442.5d362.5d84d362.5d84d277.5hy6:_widthd651.5y4:xMaxd564y4:xMind84y4:yMaxd746.5y4:yMind0y7:_heightd662.5y7:leadingd168y7:descentd241.5y8:charCodei55y15:leftsideBearingd84y12:advanceWidthd651.5y8:commandsai1i2i2i2i2i2i2i2hg:111oR0d950.5R1ad313.5d528.5d239.5d528.5d196.5d586.25d153.5d644d153.5d744.5d153.5d845d196.25d902.75d239d960.5d313.5d960.5d387d960.5d430d902.5d473d844.5d473d744.5d473d645d430d586.75d387d528.5d313.5d528.5d313.5d450.5d433.5d450.5d502d528.5d570.5d606.5d570.5d744.5d570.5d882d502d960.25d433.5d1038.5d313.5d1038.5d193d1038.5d124.75d960.25d56.5d882d56.5d744.5d56.5d606.5d124.75d528.5d193d450.5d313.5d450.5hR2d626.5R3d570.5R4d56.5R5d573.5R6d-14.5R7d517R8d168R9d241.5R10i111R11d56.5R12d626.5R13ai1i3i3i3i3i3i3i3i3i1i3i3i3i3i3i3i3i3hg:54oR0d950.5R1ad338d610.5d270d610.5d230.25d657d190.5d703.5d190.5d784.5d190.5d865d230.25d911.75d270d958.5d338d958.5d406d958.5d445.75d911.75d485.5d865d485.5d784.5d485.5d703.5d445.75d657d406d610.5d338d610.5d538.5d294d538.5d386d500.5d368d461.75d358.5d423d349d385d349d285d349d232.25d416.5d179.5d484d172d620.5d201.5d577d246d553.75d290.5d530.5d344d530.5d456.5d530.5d521.75d598.75d587d667d587d784.5d587d899.5d519d969d451d1038.5d338d1038.5d208.5d1038.5d140d939.25d71.5d840d71.5d651.5d71.5d474.5d155.5d369.25d239.5d264d381d264d419d264d457.75d271.5d496.5d279d538.5d294hR2d651.5R3d587R4d71.5R5d760R6d-14.5R7d688.5R8d168R9d241.5R10i54R11d71.5R12d651.5R13ai1i3i3i3i3i3i3i3i3i1i2i3i3i3i3i3i3i3i3i3i3i3i3i3i3i3i3hg:110oR0d950.5R1ad562d686d562d1024d470d1024d470d689d470d609.5d439d570d408d530.5d346d530.5d271.5d530.5d228.5d578d185.5d625.5d185.5d707.5d185.5d1024d93d1024d93d464d185.5d464d185.5d551d218.5d500.5d263.25d475.5d308d450.5d366.5d450.5d463d450.5d512.5d510.25d562d570d562d686hR2d649R3d562R4d93R5d573.5R6d0R7d480.5R8d168R9d241.5R10i110R11d93R12d649R13ai1i2i2i2i3i3i3i3i2i2i2i2i2i3i3i3i3hg:53oR0d950.5R1ad110.5d277.5d507d277.5d507d362.5d203d362.5d203d545.5d225d538d247d534.25d269d530.5d291d530.5d416d530.5d489d599d562d667.5d562d784.5d562d905d487d971.75d412d1038.5d275.5d1038.5d228.5d1038.5d179.75d1030.5d131d1022.5d79d1006.5d79d905d124d929.5d172d941.5d220d953.5d273.5d953.5d360d953.5d410.5d908d461d862.5d461d784.5d461d706.5d410.5d661d360d615.5d273.5d615.5d233d615.5d192.75d624.5d152.5d633.5d110.5d652.5d110.5d277.5hR2d651.5R3d562R4d79R5d746.5R6d-14.5R7d667.5R8d168R9d241.5R10i53R11d79R12d651.5R13ai1i2i2i2i2i3i3i3i3i3i3i3i3i2i3i3i3i3i3i3i3i3i2hg:109oR0d950.5R1ad532.5d571.5d567d509.5d615d480d663d450.5d728d450.5d815.5d450.5d863d511.75d910.5d573d910.5d686d910.5d1024d818d1024d818d689d818d608.5d789.5d569.5d761d530.5d702.5d530.5d631d530.5d589.5d578d548d625.5d548d707.5d548d1024d455.5d1024d455.5d689d455.5d608d427d569.25d398.5d530.5d339d530.5d268.5d530.5d227d578.25d185.5d626d185.5d707.5d185.5d1024d93d1024d93d464d185.5d464d185.5d551d217d499.5d261d475d305d450.5d365.5d450.5d426.5d450.5d469.25d481.5d512d512.5d532.5d571.5hR2d997.5R3d910.5R4d93R5d573.5R6d0R7d480.5R8d168R9d241.5R10i109R11d93R12d997.5R13ai1i3i3i3i3i2i2i2i3i3i3i3i2i2i2i3i3i3i3i2i2i2i2i2i3i3i3i3hg:52oR0d950.5R1ad387d365.5d132d764d387d764d387d365.5d360.5d277.5d487.5d277.5d487.5d764d594d764d594d848d487.5d848d487.5d1024d387d1024d387d848d50d848d50d750.5d360.5d277.5hR2d651.5R3d594R4d50R5d746.5R6d0R7d696.5R8d168R9d241.5R10i52R11d50R12d651.5R13ai1i2i2i2i1i2i2i2i2i2i2i2i2i2i2i2hg:108oR0d950.5R1ad96.5d246d188.5d246d188.5d1024d96.5d1024d96.5d246hR2d284.5R3d188.5R4d96.5R5d778R6d0R7d681.5R8d168R9d241.5R10i108R11d96.5R12d284.5R13ai1i2i2i2i2hg:51oR0d950.5R1ad415.5d621.5d488d637d528.75d686d569.5d735d569.5d807d569.5d917.5d493.5d978d417.5d1038.5d277.5d1038.5d230.5d1038.5d180.75d1029.25d131d1020d78d1001.5d78d904d120d928.5d170d941d220d953.5d274.5d953.5d369.5d953.5d419.25d916d469d878.5d469d807d469d741d422.75d703.75d376.5d666.5d294d666.5d207d666.5d207d583.5d298d583.5d372.5d583.5d412d553.75d451.5d524d451.5d468d451.5d410.5d410.75d379.75d370d349d294d349d252.5d349d205d358d157.5d367d100.5d386d100.5d296d158d280d208.25d272d258.5d264d303d264d418d264d485d316.25d552d368.5d552d457.5d552d519.5d516.5d562.25d481d605d415.5d621.5hR2d651.5R3d569.5R4d78R5d760R6d-14.5R7d682R8d168R9d241.5R10i51R11d78R12d651.5R13ai1i3i3i3i3i3i3i2i3i3i3i3i3i3i2i2i2i3i3i3i3i3i3i2i3i3i3i3i3i3hg:107oR0d950.5R1ad93d246d185.5d246d185.5d705.5d460d464d577.5d464d280.5d726d590d1024d470d1024d185.5d750.5d185.5d1024d93d1024d93d246hR2d593R3d590R4d93R5d778R6d0R7d685R8d168R9d241.5R10i107R11d93R12d593R13ai1i2i2i2i2i2i2i2i2i2i2i2hg:50oR0d950.5R1ad196.5d939d549d939d549d1024d75d1024d75d939d132.5d879.5d231.75d779.25d331d679d356.5d650d405d595.5d424.25d557.75d443.5d520d443.5d483.5d443.5d424d401.75d386.5d360d349d293d349d245.5d349d192.75d365.5d140d382d80d415.5d80d313.5d141d289d194d276.5d247d264d291d264d407d264d476d322d545d380d545d477d545d523d527.75d564.25d510.5d605.5d465d661.5d452.5d676d385.5d745.25d318.5d814.5d196.5d939hR2d651.5R3d549R4d75R5d760R6d0R7d685R8d168R9d241.5R10i50R11d75R12d651.5R13ai1i2i2i2i2i3i3i3i3i3i3i3i3i2i3i3i3i3i3i3i3i3hg:106oR0d950.5R1ad96.5d464d188.5d464d188.5d1034d188.5d1141d147.75d1189d107d1237d16.5d1237d-18.5d1237d-18.5d1159d6d1159d58.5d1159d77.5d1134.75d96.5d1110.5d96.5d1034d96.5d464d96.5d246d188.5d246d188.5d362.5d96.5d362.5d96.5d246hR2d284.5R3d188.5R4d-18.5R5d778R6d-213R7d796.5R8d168R9d241.5R10i106R11d-18.5R12d284.5R13ai1i2i2i3i3i2i2i2i3i3i2i1i2i2i2i2hg:49oR0d950.5R1ad127d939d292d939d292d369.5d112.5d405.5d112.5d313.5d291d277.5d392d277.5d392d939d557d939d557d1024d127d1024d127d939hR2d651.5R3d557R4d112.5R5d746.5R6d0R7d634R8d168R9d241.5R10i49R11d112.5R12d651.5R13ai1i2i2i2i2i2i2i2i2i2i2i2hg:105oR0d950.5R1ad96.5d464d188.5d464d188.5d1024d96.5d1024d96.5d464d96.5d246d188.5d246d188.5d362.5d96.5d362.5d96.5d246hR2d284.5R3d188.5R4d96.5R5d778R6d0R7d681.5R8d168R9d241.5R10i105R11d96.5R12d284.5R13ai1i2i2i2i2i1i2i2i2i2hg:48oR0d950.5R1ad325.5d344d247.5d344d208.25d420.75d169d497.5d169d651.5d169d805d208.25d881.75d247.5d958.5d325.5d958.5d404d958.5d443.25d881.75d482.5d805d482.5d651.5d482.5d497.5d443.25d420.75d404d344d325.5d344d325.5d264d451d264d517.25d363.25d583.5d462.5d583.5d651.5d583.5d840d517.25d939.25d451d1038.5d325.5d1038.5d200d1038.5d133.75d939.25d67.5d840d67.5d651.5d67.5d462.5d133.75d363.25d200d264d325.5d264hR2d651.5R3d583.5R4d67.5R5d760R6d-14.5R7d692.5R8d168R9d241.5R10i48R11d67.5R12d651.5R13ai1i3i3i3i3i3i3i3i3i1i3i3i3i3i3i3i3i3hg:104oR0d950.5R1ad562d686d562d1024d470d1024d470d689d470d609.5d439d570d408d530.5d346d530.5d271.5d530.5d228.5d578d185.5d625.5d185.5d707.5d185.5d1024d93d1024d93d246d185.5d246d185.5d551d218.5d500.5d263.25d475.5d308d450.5d366.5d450.5d463d450.5d512.5d510.25d562d570d562d686hR2d649R3d562R4d93R5d778R6d0R7d685R8d168R9d241.5R10i104R11d93R12d649R13ai1i2i2i2i3i3i3i3i2i2i2i2i2i3i3i3i3hg:47oR0d950.5R1ad260d277.5d345d277.5d85d1119d0d1119d260d277.5hR2d345R3d345R4d0R5d746.5R6d-95R7d746.5R8d168R9d241.5R10i47R11d0R12d345R13ai1i2i2i2i2hg:103oR0d950.5R1ad465d737.5d465d637.5d423.75d582.5d382.5d527.5d308d527.5d234d527.5d192.75d582.5d151.5d637.5d151.5d737.5d151.5d837d192.75d892d234d947d308d947d382.5d947d423.75d892d465d837d465d737.5d557d954.5d557d1097.5d493.5d1167.25d430d1237d299d1237d250.5d1237d207.5d1229.75d164.5d1222.5d124d1207.5d124d1118d164.5d1140d204d1150.5d243.5d1161d284.5d1161d375d1161d420d1113.75d465d1066.5d465d971d465d925.5d436.5d975d392d999.5d347.5d1024d285.5d1024d182.5d1024d119.5d945.5d56.5d867d56.5d737.5d56.5d607.5d119.5d529d182.5d450.5d285.5d450.5d347.5d450.5d392d475d436.5d499.5d465d549d465d464d557d464d557d954.5hR2d650R3d557R4d56.5R5d573.5R6d-213R7d517R8d168R9d241.5R10i103R11d56.5R12d650R13ai1i3i3i3i3i3i3i3i3i1i3i3i3i3i2i3i3i3i3i2i3i3i3i3i3i3i3i3i2i2i2hg:46oR0d950.5R1ad109.5d897d215d897d215d1024d109.5d1024d109.5d897hR2d325.5R3d215R4d109.5R5d127R6d0R7d17.5R8d168R9d241.5R10i46R11d109.5R12d325.5R13ai1i2i2i2i2hg:102oR0d950.5R1ad380d246d380d322.5d292d322.5d242.5d322.5d223.25d342.5d204d362.5d204d414.5d204d464d355.5d464d355.5d535.5d204d535.5d204d1024d111.5d1024d111.5d535.5d23.5d535.5d23.5d464d111.5d464d111.5d425d111.5d331.5d155d288.75d198.5d246d293d246d380d246hR2d360.5R3d380R4d23.5R5d778R6d0R7d754.5R8d168R9d241.5R10i102R11d23.5R12d360.5R13ai1i2i2i3i3i2i2i2i2i2i2i2i2i2i2i2i3i3i2hg:45oR0d950.5R1ad50d702.5d319.5d702.5d319.5d784.5d50d784.5d50d702.5hR2d369.5R3d319.5R4d50R5d321.5R6d239.5R7d271.5R8d168R9d241.5R10i45R11d50R12d369.5R13ai1i2i2i2i2hg:101oR0d950.5R1ad575.5d721d575.5d766d152.5d766d158.5d861d209.75d910.75d261d960.5d352.5d960.5d405.5d960.5d455.25d947.5d505d934.5d554d908.5d554d995.5d504.5d1016.5d452.5d1027.5d400.5d1038.5d347d1038.5d213d1038.5d134.75d960.5d56.5d882.5d56.5d749.5d56.5d612d130.75d531.25d205d450.5d331d450.5d444d450.5d509.75d523.25d575.5d596d575.5d721d483.5d694d482.5d618.5d441.25d573.5d400d528.5d332d528.5d255d528.5d208.75d572d162.5d615.5d155.5d694.5d483.5d694hR2d630R3d575.5R4d56.5R5d573.5R6d-14.5R7d517R8d168R9d241.5R10i101R11d56.5R12d630R13ai1i2i2i3i3i3i3i2i3i3i3i3i3i3i3i3i1i3i3i3i3i2hg:44oR0d950.5R1ad120d897d225.5d897d225.5d983d143.5d1143d79d1143d120d983d120d897hR2d325.5R3d225.5R4d79R5d127R6d-119R7d48R8d168R9d241.5R10i44R11d79R12d325.5R13ai1i2i2i2i2i2i2hg:100oR0d950.5R1ad465d549d465d246d557d246d557d1024d465d1024d465d940d436d990d391.75d1014.25d347.5d1038.5d285.5d1038.5d184d1038.5d120.25d957.5d56.5d876.5d56.5d744.5d56.5d612.5d120.25d531.5d184d450.5d285.5d450.5d347.5d450.5d391.75d474.75d436d499d465d549d151.5d744.5d151.5d846d193.25d903.75d235d961.5d308d961.5d381d961.5d423d903.75d465d846d465d744.5d465d643d423d585.25d381d527.5d308d527.5d235d527.5d193.25d585.25d151.5d643d151.5d744.5hR2d650R3d557R4d56.5R5d778R6d-14.5R7d721.5R8d168R9d241.5R10i100R11d56.5R12d650R13ai1i2i2i2i2i2i3i3i3i3i3i3i3i3i1i3i3i3i3i3i3i3i3hg:43oR0d950.5R1ad471d382d471d660.5d749.5d660.5d749.5d745.5d471d745.5d471d1024d387d1024d387d745.5d108.5d745.5d108.5d660.5d387d660.5d387d382d471d382hR2d858R3d749.5R4d108.5R5d642R6d0R7d533.5R8d168R9d241.5R10i43R11d108.5R12d858R13ai1i2i2i2i2i2i2i2i2i2i2i2i2hg:99oR0d950.5R1ad499.5d485.5d499.5d571.5d460.5d550d421.25d539.25d382d528.5d342d528.5d252.5d528.5d203d585.25d153.5d642d153.5d744.5d153.5d847d203d903.75d252.5d960.5d342d960.5d382d960.5d421.25d949.75d460.5d939d499.5d917.5d499.5d1002.5d461d1020.5d419.75d1029.5d378.5d1038.5d332d1038.5d205.5d1038.5d131d959d56.5d879.5d56.5d744.5d56.5d607.5d131.75d529d207d450.5d338d450.5d380.5d450.5d421d459.25d461.5d468d499.5d485.5hR2d563R3d499.5R4d56.5R5d573.5R6d-14.5R7d517R8d168R9d241.5R10i99R11d56.5R12d563R13ai1i2i3i3i3i3i3i3i3i3i2i3i3i3i3i3i3i3i3hg:42oR0d950.5R1ad481.5d400.5d302d497.5d481.5d595d452.5d644d284.5d542.5d284.5d731d227.5d731d227.5d542.5d59.5d644d30.5d595d210d497.5d30.5d400.5d59.5d351d227.5d452.5d227.5d264d284.5d264d284.5d452.5d452.5d351d481.5d400.5hR2d512R3d481.5R4d30.5R5d760R6d293R7d729.5R8d168R9d241.5R10i42R11d30.5R12d512R13ai1i2i2i2i2i2i2i2i2i2i2i2i2i2i2i2i2i2i2hg:98oR0d950.5R1ad498.5d744.5d498.5d643d456.75d585.25d415d527.5d342d527.5d269d527.5d227.25d585.25d185.5d643d185.5d744.5d185.5d846d227.25d903.75d269d961.5d342d961.5d415d961.5d456.75d903.75d498.5d846d498.5d744.5d185.5d549d214.5d499d258.75d474.75d303d450.5d364.5d450.5d466.5d450.5d530.25d531.5d594d612.5d594d744.5d594d876.5d530.25d957.5d466.5d1038.5d364.5d1038.5d303d1038.5d258.75d1014.25d214.5d990d185.5d940d185.5d1024d93d1024d93d246d185.5d246d185.5d549hR2d650R3d594R4d93R5d778R6d-14.5R7d685R8d168R9d241.5R10i98R11d93R12d650R13ai1i3i3i3i3i3i3i3i3i1i3i3i3i3i3i3i3i3i2i2i2i2i2hg:41oR0d950.5R1ad82d247d162d247d237d365d274.25d478d311.5d591d311.5d702.5d311.5d814.5d274.25d928d237d1041.5d162d1159d82d1159d148.5d1044.5d181.25d931.25d214d818d214d702.5d214d587d181.25d474.5d148.5d362d82d247hR2d399.5R3d311.5R4d82R5d777R6d-135R7d695R8d168R9d241.5R10i41R11d82R12d399.5R13ai1i2i3i3i3i3i2i3i3i3i3hg:97oR0d950.5R1ad351d742.5d239.5d742.5d196.5d768d153.5d793.5d153.5d855d153.5d904d185.75d932.75d218d961.5d273.5d961.5d350d961.5d396.25d907.25d442.5d853d442.5d763d442.5d742.5d351d742.5d534.5d704.5d534.5d1024d442.5d1024d442.5d939d411d990d364d1014.25d317d1038.5d249d1038.5d163d1038.5d112.25d990.25d61.5d942d61.5d861d61.5d766.5d124.75d718.5d188d670.5d313.5d670.5d442.5d670.5d442.5d661.5d442.5d598d400.75d563.25d359d528.5d283.5d528.5d235.5d528.5d190d540d144.5d551.5d102.5d574.5d102.5d489.5d153d470d200.5d460.25d248d450.5d293d450.5d414.5d450.5d474.5d513.5d534.5d576.5d534.5d704.5hR2d627.5R3d534.5R4d61.5R5d573.5R6d-14.5R7d512R8d168R9d241.5R10i97R11d61.5R12d627.5R13ai1i3i3i3i3i3i3i2i2i1i2i2i2i3i3i3i3i3i3i2i2i3i3i3i3i2i3i3i3i3hg:40oR0d950.5R1ad317.5d247d250.5d362d218d474.5d185.5d587d185.5d702.5d185.5d818d218.25d931.25d251d1044.5d317.5d1159d237.5d1159d162.5d1041.5d125.25d928d88d814.5d88d702.5d88d591d125d478d162d365d237.5d247d317.5d247hR2d399.5R3d317.5R4d88R5d777R6d-135R7d689R8d168R9d241.5R10i40R11d88R12d399.5R13ai1i3i3i3i3i2i3i3i3i3i2hg:96oR0d950.5R1ad183.5d205d324.5d392d248d392d85d205d183.5d205hR2d512R3d324.5R4d85R5d819R6d632R7d734R8d168R9d241.5R10i96R11d85R12d512R13ai1i2i2i2i2hg:39oR0d950.5R1ad183.5d277.5d183.5d555d98.5d555d98.5d277.5d183.5d277.5hR2d281.5R3d183.5R4d98.5R5d746.5R6d469R7d648R8d168R9d241.5R10i39R11d98.5R12d281.5R13ai1i2i2i2i2hg:95oR0d950.5R1ad522d1194d522d1265.5d-10d1265.5d-10d1194d522d1194hR2d512R3d522R4d-10R5d-170R6d-241.5R7d-160R8d168R9d241.5R10i95R11d-10R12d512R13ai1i2i2i2i2hg:38oR0d950.5R1ad249d622.5d203.5d663d182.25d703.25d161d743.5d161d787.5d161d860.5d214d909d267d957.5d347d957.5d394.5d957.5d436d941.75d477.5d926d514d894d249d622.5d319.5d566.5d573.5d826.5d603d782d619.5d731.25d636d680.5d639d623.5d732d623.5d726d689.5d700d754d674d818.5d627.5d881.5d767d1024d641d1024d569.5d950.5d517.5d995d460.5d1016.75d403.5d1038.5d338d1038.5d217.5d1038.5d141d969.75d64.5d901d64.5d793.5d64.5d729.5d98d673.25d131.5d617d198.5d567.5d174.5d536d162d504.75d149.5d473.5d149.5d443.5d149.5d362.5d205d313.25d260.5d264d352.5d264d394d264d435.25d273d476.5d282d519d300d519d391d475.5d367.5d436d355.25d396.5d343d362.5d343d310d343d277.25d370.75d244.5d398.5d244.5d442.5d244.5d468d259.25d493.75d274d519.5d319.5d566.5hR2d798.5R3d767R4d64.5R5d760R6d-14.5R7d695.5R8d168R9d241.5R10i38R11d64.5R12d798.5R13ai1i3i3i3i3i3i3i2i1i2i3i3i2i3i3i2i2i2i3i3i3i3i3i3i3i3i3i3i3i3i2i3i3i3i3i3i3hg:94oR0d950.5R1ad478d277.5d749.5d556d649d556d429d358.5d209d556d108.5d556d380d277.5d478d277.5hR2d858R3d749.5R4d108.5R5d746.5R6d468R7d638R8d168R9d241.5R10i94R11d108.5R12d858R13ai1i2i2i2i2i2i2i2hg:37oR0d950.5R1ad744.5d695.5d701d695.5d676.25d732.5d651.5d769.5d651.5d835.5d651.5d900.5d676.25d937.75d701d975d744.5d975d787d975d811.75d937.75d836.5d900.5d836.5d835.5d836.5d770d811.75d732.75d787d695.5d744.5d695.5d744.5d632d823.5d632d870d687d916.5d742d916.5d835.5d916.5d929d869.75d983.75d823d1038.5d744.5d1038.5d664.5d1038.5d618d983.75d571.5d929d571.5d835.5d571.5d741.5d618.25d686.75d665d632d744.5d632d228.5d327.5d185.5d327.5d160.75d364.75d136d402d136d467d136d533d160.5d570d185d607d228.5d607d272d607d296.75d570d321.5d533d321.5d467d321.5d402.5d296.5d365d271.5d327.5d228.5d327.5d680d264d760d264d293d1038.5d213d1038.5d680d264d228.5d264d307.5d264d354.5d318.75d401.5d373.5d401.5d467d401.5d561.5d354.75d616d308d670.5d228.5d670.5d149d670.5d102.75d615.75d56.5d561d56.5d467d56.5d374d103d319d149.5d264d228.5d264hR2d973R3d916.5R4d56.5R5d760R6d-14.5R7d703.5R8d168R9d241.5R10i37R11d56.5R12d973R13ai1i3i3i3i3i3i3i3i3i1i3i3i3i3i3i3i3i3i1i3i3i3i3i3i3i3i3i1i2i2i2i2i1i3i3i3i3i3i3i3i3hg:93oR0d950.5R1ad311.5d246d311.5d1159d99.5d1159d99.5d1087.5d219d1087.5d219d317.5d99.5d317.5d99.5d246d311.5d246hR2d399.5R3d311.5R4d99.5R5d778R6d-135R7d678.5R8d168R9d241.5R10i93R11d99.5R12d399.5R13ai1i2i2i2i2i2i2i2i2hg:36oR0d950.5R1ad346d1174.5d296d1174.5d295.5d1024d243d1023d190.5d1011.75d138d1000.5d85d978d85d888d136d920d188.25d936.25d240.5d952.5d296d953d296d725d185.5d707d135.25d664d85d621d85d546d85d464.5d139.5d417.5d194d370.5d296d363.5d296d246d346d246d346d362d392.5d364d436d371.75d479.5d379.5d521d393d521d480.5d479.5d459.5d435.75d448d392d436.5d346d434.5d346d648d459.5d665.5d513d710.5d566.5d755.5d566.5d833.5d566.5d918d509.75d966.75d453d1015.5d346d1023d346d1174.5d296d639d296d434d238d440.5d207.5d467d177d493.5d177d537.5d177d580.5d205.25d604.5d233.5d628.5d296d639d346d735d346d951.5d409.5d943d441.75d915.5d474d888d474d843d474d799d443.25d773d412.5d747d346d735hR2d651.5R3d566.5R4d85R5d778R6d-150.5R7d693R8d168R9d241.5R10i36R11d85R12d651.5R13ai1i2i2i3i3i2i3i3i2i3i3i3i3i2i2i2i3i3i2i3i3i2i3i3i3i3i2i1i2i3i3i3i3i1i2i3i3i3i3hg:92oR0d950.5R1ad85d277.5d345d1119d260d1119d0d277.5d85d277.5hR2d345R3d345R4d0R5d746.5R6d-95R7d746.5R8d168R9d241.5R10i92R11d0R12d345R13ai1i2i2i2i2hg:35oR0d950.5R1ad523.5d573.5d378d573.5d336d740.5d482.5d740.5d523.5d573.5d448.5d289d396.5d496.5d542.5d496.5d595d289d675d289d623.5d496.5d779.5d496.5d779.5d573.5d604d573.5d563d740.5d722d740.5d722d817d543.5d817d491.5d1024d411.5d1024d463d817d316.5d817d265d1024d184.5d1024d236.5d817d79d817d79d740.5d255d740.5d297d573.5d136d573.5d136d496.5d316.5d496.5d367.5d289d448.5d289hR2d858R3d779.5R4d79R5d735R6d0R7d656R8d168R9d241.5R10i35R11d79R12d858R13ai1i2i2i2i2i1i2i2i2i2i2i2i2i2i2i2i2i2i2i2i2i2i2i2i2i2i2i2i2i2i2i2i2i2hg:91oR0d950.5R1ad88d246d300d246d300d317.5d180d317.5d180d1087.5d300d1087.5d300d1159d88d1159d88d246hR2d399.5R3d300R4d88R5d778R6d-135R7d690R8d168R9d241.5R10i91R11d88R12d399.5R13ai1i2i2i2i2i2i2i2i2hg:34oR0d950.5R1ad183.5d277.5d183.5d555d98.5d555d98.5d277.5d183.5d277.5d372.5d277.5d372.5d555d287.5d555d287.5d277.5d372.5d277.5hR2d471R3d372.5R4d98.5R5d746.5R6d469R7d648R8d168R9d241.5R10i34R11d98.5R12d471R13ai1i2i2i2i2i1i2i2i2i2hg:90oR0d950.5R1ad57.5d277.5d644d277.5d644d354.5d172d939d655.5d939d655.5d1024d46d1024d46d947d518d362.5d57.5d362.5d57.5d277.5hR2d701.5R3d655.5R4d46R5d746.5R6d0R7d700.5R8d168R9d241.5R10i90R11d46R12d701.5R13ai1i2i2i2i2i2i2i2i2i2i2hg:33oR0d950.5R1ad154.5d897d256d897d256d1024d154.5d1024d154.5d897d154.5d277.5d256d277.5d256d605d246d783.5d165d783.5d154.5d605d154.5d277.5hR2d410.5R3d256R4d154.5R5d746.5R6d0R7d592R8d168R9d241.5R10i33R11d154.5R12d410.5R13ai1i2i2i2i2i1i2i2i2i2i2i2hg:89oR0d950.5R1ad-2d277.5d106.5d277.5d313.5d584.5d519d277.5d627.5d277.5d363.5d668.5d363.5d1024d262d1024d262d668.5d-2d277.5hR2d625.5R3d627.5R4d-2R5d746.5R6d0R7d748.5R8d168R9d241.5R10i89R11d-2R12d625.5R13ai1i2i2i2i2i2i2i2i2i2hg:32oR0d950.5R1ahR2d325.5R3d0R4d0R5d0R6d0R7d0R8d168R9d241.5R10i32R11d0R12d325.5R13ahg:88oR0d950.5R1ad64.5d277.5d173d277.5d358.5d555d545d277.5d653.5d277.5d413.5d636d669.5d1024d561d1024d351d706.5d139.5d1024d30.5d1024d297d625.5d64.5d277.5hR2d701.5R3d669.5R4d30.5R5d746.5R6d0R7d716R8d168R9d241.5R10i88R11d30.5R12d701.5R13ai1i2i2i2i2i2i2i2i2i2i2i2i2hg:87oR0d950.5R1ad34d277.5d136d277.5d293d908.5d449.5d277.5d563d277.5d720d908.5d876.5d277.5d979d277.5d791.5d1024d664.5d1024d507d376d348d1024d221d1024d34d277.5hR2d1012.5R3d979R4d34R5d746.5R6d0R7d712.5R8d168R9d241.5R10i87R11d34R12d1012.5R13ai1i2i2i2i2i2i2i2i2i2i2i2i2i2hg:86oR0d950.5R1ad293d1024d8d277.5d113.5d277.5d350d906d587d277.5d692d277.5d407.5d1024d293d1024hR2d700.5R3d692R4d8R5d746.5R6d0R7d738.5R8d168R9d241.5R10i86R11d8R12d700.5R13ai1i2i2i2i2i2i2i2hg:85oR0d950.5R1ad89d277.5d190.5d277.5d190.5d731d190.5d851d234d903.75d277.5d956.5d375d956.5d472d956.5d515.5d903.75d559d851d559d731d559d277.5d660.5d277.5d660.5d743.5d660.5d889.5d588.25d964d516d1038.5d375d1038.5d233.5d1038.5d161.25d964d89d889.5d89d743.5d89d277.5hR2d749.5R3d660.5R4d89R5d746.5R6d-14.5R7d657.5R8d168R9d241.5R10i85R11d89R12d749.5R13ai1i2i2i3i3i3i3i2i2i2i3i3i3i3i2hg:84oR0d950.5R1ad-3d277.5d628.5d277.5d628.5d362.5d363.5d362.5d363.5d1024d262d1024d262d362.5d-3d362.5d-3d277.5hR2d625.5R3d628.5R4d-3R5d746.5R6d0R7d749.5R8d168R9d241.5R10i84R11d-3R12d625.5R13ai1i2i2i2i2i2i2i2i2hg:83oR0d950.5R1ad548d302d548d400.5d490.5d373d439.5d359.5d388.5d346d341d346d258.5d346d213.75d378d169d410d169d469d169d518.5d198.75d543.75d228.5d569d311.5d584.5d372.5d597d485.5d618.5d539.25d672.75d593d727d593d818d593d926.5d520.25d982.5d447.5d1038.5d307d1038.5d254d1038.5d194.25d1026.5d134.5d1014.5d70.5d991d70.5d887d132d921.5d191d939d250d956.5d307d956.5d393.5d956.5d440.5d922.5d487.5d888.5d487.5d825.5d487.5d770.5d453.75d739.5d420d708.5d343d693d281.5d681d168.5d658.5d118d610.5d67.5d562.5d67.5d477d67.5d378d137.25d321d207d264d329.5d264d382d264d436.5d273.5d491d283d548d302hR2d650R3d593R4d67.5R5d760R6d-14.5R7d692.5R8d168R9d241.5R10i83R11d67.5R12d650R13ai1i2i3i3i3i3i3i3i2i3i3i3i3i3i3i2i3i3i3i3i3i3i2i3i3i3i3i3i3hg:82oR0d950.5R1ad454.5d674d487d685d517.75d721d548.5d757d579.5d820d682d1024d573.5d1024d478d832.5d441d757.5d406.25d733d371.5d708.5d311.5d708.5d201.5d708.5d201.5d1024d100.5d1024d100.5d277.5d328.5d277.5d456.5d277.5d519.5d331d582.5d384.5d582.5d492.5d582.5d563d549.75d609.5d517d656d454.5d674d201.5d360.5d201.5d625.5d328.5d625.5d401.5d625.5d438.75d591.75d476d558d476d492.5d476d427d438.75d393.75d401.5d360.5d328.5d360.5d201.5d360.5hR2d711.5R3d682R4d100.5R5d746.5R6d0R7d646R8d168R9d241.5R10i82R11d100.5R12d711.5R13ai1i3i3i2i2i2i3i3i2i2i2i2i2i3i3i3i3i1i2i2i3i3i3i3i2hg:81oR0d950.5R1ad403.5d346d293.5d346d228.75d428d164d510d164d651.5d164d792.5d228.75d874.5d293.5d956.5d403.5d956.5d513.5d956.5d577.75d874.5d642d792.5d642d651.5d642d510d577.75d428d513.5d346d403.5d346d545d1010.5d678d1156d556d1156d445.5d1036.5d429d1037.5d420.25d1038d411.5d1038.5d403.5d1038.5d246d1038.5d151.75d933.25d57.5d828d57.5d651.5d57.5d474.5d151.75d369.25d246d264d403.5d264d560.5d264d654.5d369.25d748.5d474.5d748.5d651.5d748.5d781.5d696.25d874d644d966.5d545d1010.5hR2d806R3d748.5R4d57.5R5d760R6d-132R7d702.5R8d168R9d241.5R10i81R11d57.5R12d806R13ai1i3i3i3i3i3i3i3i3i1i2i2i2i3i3i3i3i3i3i3i3i3i3hg:80oR0d950.5R1ad201.5d360.5d201.5d641d328.5d641d399d641d437.5d604.5d476d568d476d500.5d476d433.5d437.5d397d399d360.5d328.5d360.5d201.5d360.5d100.5d277.5d328.5d277.5d454d277.5d518.25d334.25d582.5d391d582.5d500.5d582.5d611d518.25d667.5d454d724d328.5d724d201.5d724d201.5d1024d100.5d1024d100.5d277.5hR2d617.5R3d582.5R4d100.5R5d746.5R6d0R7d646R8d168R9d241.5R10i80R11d100.5R12d617.5R13ai1i2i2i3i3i3i3i2i1i2i3i3i3i3i2i2i2i2hg:79oR0d950.5R1ad403.5d346d293.5d346d228.75d428d164d510d164d651.5d164d792.5d228.75d874.5d293.5d956.5d403.5d956.5d513.5d956.5d577.75d874.5d642d792.5d642d651.5d642d510d577.75d428d513.5d346d403.5d346d403.5d264d560.5d264d654.5d369.25d748.5d474.5d748.5d651.5d748.5d828d654.5d933.25d560.5d1038.5d403.5d1038.5d246d1038.5d151.75d933.5d57.5d828.5d57.5d651.5d57.5d474.5d151.75d369.25d246d264d403.5d264hR2d806R3d748.5R4d57.5R5d760R6d-14.5R7d702.5R8d168R9d241.5R10i79R11d57.5R12d806R13ai1i3i3i3i3i3i3i3i3i1i3i3i3i3i3i3i3i3hg:78oR0d950.5R1ad100.5d277.5d236.5d277.5d567.5d902d567.5d277.5d665.5d277.5d665.5d1024d529.5d1024d198.5d399.5d198.5d1024d100.5d1024d100.5d277.5hR2d766R3d665.5R4d100.5R5d746.5R6d0R7d646R8d168R9d241.5R10i78R11d100.5R12d766R13ai1i2i2i2i2i2i2i2i2i2i2hg:77oR0d950.5R1ad100.5d277.5d251d277.5d441.5d785.5d633d277.5d783.5d277.5d783.5d1024d685d1024d685d368.5d492.5d880.5d391d880.5d198.5d368.5d198.5d1024d100.5d1024d100.5d277.5hR2d883.5R3d783.5R4d100.5R5d746.5R6d0R7d646R8d168R9d241.5R10i77R11d100.5R12d883.5R13ai1i2i2i2i2i2i2i2i2i2i2i2i2i2hg:76oR0d950.5R1ad100.5d277.5d201.5d277.5d201.5d939d565d939d565d1024d100.5d1024d100.5d277.5hR2d570.5R3d565R4d100.5R5d746.5R6d0R7d646R8d168R9d241.5R10i76R11d100.5R12d570.5R13ai1i2i2i2i2i2i2hg:75oR0d950.5R1ad100.5d277.5d201.5d277.5d201.5d593d536.5d277.5d666.5d277.5d296d625.5d693d1024d560d1024d201.5d664.5d201.5d1024d100.5d1024d100.5d277.5hR2d671.5R3d693R4d100.5R5d746.5R6d0R7d646R8d168R9d241.5R10i75R11d100.5R12d671.5R13ai1i2i2i2i2i2i2i2i2i2i2i2hg:74oR0d950.5R1ad100.5d277.5d201.5d277.5d201.5d972d201.5d1107d150.25d1168d99d1229d-14.5d1229d-53d1229d-53d1144d-21.5d1144d45.5d1144d73d1106.5d100.5d1069d100.5d972d100.5d277.5hR2d302R3d201.5R4d-53R5d746.5R6d-205R7d799.5R8d168R9d241.5R10i74R11d-53R12d302R13ai1i2i2i3i3i2i2i2i3i3i2hg:73oR0d950.5R1ad100.5d277.5d201.5d277.5d201.5d1024d100.5d1024d100.5d277.5hR2d302R3d201.5R4d100.5R5d746.5R6d0R7d646R8d168R9d241.5R10i73R11d100.5R12d302R13ai1i2i2i2i2hg:72oR0d950.5R1ad100.5d277.5d201.5d277.5d201.5d583.5d568.5d583.5d568.5d277.5d669.5d277.5d669.5d1024d568.5d1024d568.5d668.5d201.5d668.5d201.5d1024d100.5d1024d100.5d277.5hR2d770R3d669.5R4d100.5R5d746.5R6d0R7d646R8d168R9d241.5R10i72R11d100.5R12d770R13ai1i2i2i2i2i2i2i2i2i2i2i2i2hg:71oR0d950.5R1ad609.5d917.5d609.5d717d444.5d717d444.5d634d709.5d634d709.5d954.5d651d996d580.5d1017.25d510d1038.5d430d1038.5d255d1038.5d156.25d936.25d57.5d834d57.5d651.5d57.5d468.5d156.25d366.25d255d264d430d264d503d264d568.75d282d634.5d300d690d335d690d442.5d634d395d571d371d508d347d438.5d347d301.5d347d232.75d423.5d164d500d164d651.5d164d802.5d232.75d879d301.5d955.5d438.5d955.5d492d955.5d534d946.25d576d937d609.5d917.5hR2d793.5R3d709.5R4d57.5R5d760R6d-14.5R7d702.5R8d168R9d241.5R10i71R11d57.5R12d793.5R13ai1i2i2i2i2i2i3i3i3i3i3i3i3i3i2i3i3i3i3i3i3i3i3hg:70oR0d950.5R1ad100.5d277.5d529.5d277.5d529.5d362.5d201.5d362.5d201.5d582.5d497.5d582.5d497.5d667.5d201.5d667.5d201.5d1024d100.5d1024d100.5d277.5hR2d589R3d529.5R4d100.5R5d746.5R6d0R7d646R8d168R9d241.5R10i70R11d100.5R12d589R13ai1i2i2i2i2i2i2i2i2i2i2hg:126oR0d950.5R1ad749.5d615.5d749.5d704.5d697d744d652.25d761d607.5d778d559d778d504d778d431d748.5d425.5d746.5d423d745.5d419.5d744d412d741.5d334.5d710.5d287.5d710.5d243.5d710.5d200.5d729.75d157.5d749d108.5d790.5d108.5d701.5d161d662d205.75d644.75d250.5d627.5d299d627.5d354d627.5d427.5d657.5d432.5d659.5d435d660.5d439d662d446d664.5d523.5d695.5d570.5d695.5d613.5d695.5d655.75d676.5d698d657.5d749.5d615.5hR2d858R3d749.5R4d108.5R5d408.5R6d233.5R7d300R8d168R9d241.5R10i126R11d108.5R12d858R13ai1i2i3i3i3i3i3i3i3i3i2i3i3i3i3i3i3i3i3hg:69oR0d950.5R1ad100.5d277.5d572.5d277.5d572.5d362.5d201.5d362.5d201.5d583.5d557d583.5d557d668.5d201.5d668.5d201.5d939d581.5d939d581.5d1024d100.5d1024d100.5d277.5hR2d647R3d581.5R4d100.5R5d746.5R6d0R7d646R8d168R9d241.5R10i69R11d100.5R12d647R13ai1i2i2i2i2i2i2i2i2i2i2i2i2hg:125oR0d950.5R1ad128d1119d163d1119d233d1119d254.25d1097.5d275.5d1076d275.5d1004.5d275.5d880.5d275.5d802.5d298d767d320.5d731.5d376d718d320.5d705.5d298d670d275.5d634.5d275.5d556d275.5d432d275.5d361d254.25d339.25d233d317.5d163d317.5d128d317.5d128d246d159.5d246d284d246d325.75d282.75d367.5d319.5d367.5d430d367.5d550d367.5d624.5d394.5d653.25d421.5d682d492.5d682d523.5d682d523.5d753.5d492.5d753.5d421.5d753.5d394.5d782.5d367.5d811.5d367.5d887d367.5d1006.5d367.5d1117d325.75d1154d284d1191d159.5d1191d128d1191d128d1119hR2d651.5R3d523.5R4d128R5d778R6d-167R7d650R8d168R9d241.5R10i125R11d128R12d651.5R13ai1i2i3i3i2i3i3i3i3i2i3i3i2i2i2i3i3i2i3i3i2i2i2i3i3i2i3i3i2i2hg:68oR0d950.5R1ad201.5d360.5d201.5d941d323.5d941d478d941d549.75d871d621.5d801d621.5d650d621.5d500d549.75d430.25d478d360.5d323.5d360.5d201.5d360.5d100.5d277.5d308d277.5d525d277.5d626.5d367.75d728d458d728d650d728d843d626d933.5d524d1024d308d1024d100.5d1024d100.5d277.5hR2d788.5R3d728R4d100.5R5d746.5R6d0R7d646R8d168R9d241.5R10i68R11d100.5R12d788.5R13ai1i2i2i3i3i3i3i2i1i2i3i3i3i3i2i2hg:124oR0d950.5R1ad215d241.5d215d1265.5d130d1265.5d130d241.5d215d241.5hR2d345R3d215R4d130R5d782.5R6d-241.5R7d652.5R8d168R9d241.5R10i124R11d130R12d345R13ai1i2i2i2i2hg:67oR0d950.5R1ad659.5d335d659.5d441.5d608.5d394d550.75d370.5d493d347d428d347d300d347d232d425.25d164d503.5d164d651.5d164d799d232d877.25d300d955.5d428d955.5d493d955.5d550.75d932d608.5d908.5d659.5d861d659.5d966.5d606.5d1002.5d547.25d1020.5d488d1038.5d422d1038.5d252.5d1038.5d155d934.75d57.5d831d57.5d651.5d57.5d471.5d155d367.75d252.5d264d422d264d489d264d548.25d281.75d607.5d299.5d659.5d335hR2d715R3d659.5R4d57.5R5d760R6d-14.5R7d702.5R8d168R9d241.5R10i67R11d57.5R12d715R13ai1i2i3i3i3i3i3i3i3i3i2i3i3i3i3i3i3i3i3hg:123oR0d950.5R1ad523.5d1119d523.5d1191d492.5d1191d368d1191d325.75d1154d283.5d1117d283.5d1006.5d283.5d887d283.5d811.5d256.5d782.5d229.5d753.5d158.5d753.5d128d753.5d128d682d158.5d682d230d682d256.75d653.25d283.5d624.5d283.5d550d283.5d430d283.5d319.5d325.75d282.75d368d246d492.5d246d523.5d246d523.5d317.5d489.5d317.5d419d317.5d397.5d339.5d376d361.5d376d432d376d556d376d634.5d353.25d670d330.5d705.5d275.5d718d331d731.5d353.5d767d376d802.5d376d880.5d376d1004.5d376d1075d397.5d1097d419d1119d489.5d1119d523.5d1119hR2d651.5R3d523.5R4d128R5d778R6d-167R7d650R8d168R9d241.5R10i123R11d128R12d651.5R13ai1i2i2i3i3i2i3i3i2i2i2i3i3i2i3i3i2i2i2i3i3i2i3i3i3i3i2i3i3i2hg:66oR0d950.5R1ad201.5d667.5d201.5d941d363.5d941d445d941d484.25d907.25d523.5d873.5d523.5d804d523.5d734d484.25d700.75d445d667.5d363.5d667.5d201.5d667.5d201.5d360.5d201.5d585.5d351d585.5d425d585.5d461.25d557.75d497.5d530d497.5d473d497.5d416.5d461.25d388.5d425d360.5d351d360.5d201.5d360.5d100.5d277.5d358.5d277.5d474d277.5d536.5d325.5d599d373.5d599d462d599d530.5d567d571d535d611.5d473d621.5d547.5d637.5d588.75d688.25d630d739d630d815d630d915d562d969.5d494d1024d368.5d1024d100.5d1024d100.5d277.5hR2d702.5R3d630R4d100.5R5d746.5R6d0R7d646R8d168R9d241.5R10i66R11d100.5R12d702.5R13ai1i2i2i3i3i3i3i2i1i2i2i3i3i3i3i2i1i2i3i3i3i3i3i3i3i3i2i2hg:122oR0d950.5R1ad56.5d464d493.5d464d493.5d548d147.5d950.5d493.5d950.5d493.5d1024d44d1024d44d940d390d537.5d56.5d537.5d56.5d464hR2d537.5R3d493.5R4d44R5d560R6d0R7d516R8d168R9d241.5R10i122R11d44R12d537.5R13ai1i2i2i2i2i2i2i2i2i2i2hg:65oR0d950.5R1ad350d377d213d748.5d487.5d748.5d350d377d293d277.5d407.5d277.5d692d1024d587d1024d519d832.5d182.5d832.5d114.5d1024d8d1024d293d277.5hR2d700.5R3d692R4d8R5d746.5R6d0R7d738.5R8d168R9d241.5R10i65R11d8R12d700.5R13ai1i2i2i2i1i2i2i2i2i2i2i2i2hg:121oR0d950.5R1ad329.5d1076d290.5d1176d253.5d1206.5d216.5d1237d154.5d1237d81d1237d81d1160d135d1160d173d1160d194d1142d215d1124d240.5d1057d257d1015d30.5d464d128d464d303d902d478d464d575.5d464d329.5d1076hR2d606R3d575.5R4d30.5R5d560R6d-213R7d529.5R8d168R9d241.5R10i121R11d30.5R12d606R13ai1i3i3i2i2i2i3i3i2i2i2i2i2i2i2hg:64oR0d950.5R1ad381d755.5d381d827d416.5d867.75d452d908.5d514d908.5d575.5d908.5d610.75d867.5d646d826.5d646d755.5d646d685.5d610d644.25d574d603d513d603d452.5d603d416.75d644d381d685d381d755.5d653.5d905d623.5d943.5d584.75d961.75d546d980d494.5d980d408.5d980d354.75d917.75d301d855.5d301d755.5d301d655.5d355d593d409d530.5d494.5d530.5d546d530.5d585d549.25d624d568d653.5d606d653.5d540.5d725d540.5d725d908.5d798d897.5d839.25d841.75d880.5d786d880.5d697.5d880.5d644d864.75d597d849d550d817d510d765d444.5d690.25d409.75d615.5d375d527.5d375d466d375d409.5d391.25d353d407.5d305d439.5d226.5d490.5d182.25d573.25d138d656d138d752.5d138d832d166.75d901.5d195.5d971d250d1024d302.5d1076d371.5d1103.25d440.5d1130.5d519d1130.5d583.5d1130.5d645.75d1108.75d708d1087d760d1046.5d805d1102d742.5d1150.5d668.75d1176.25d595d1202d519d1202d426.5d1202d344.5d1169.25d262.5d1136.5d198.5d1074d134.5d1011.5d101d929.25d67.5d847d67.5d752.5d67.5d661.5d101.5d579d135.5d496.5d198.5d434d263d370.5d347.5d336.75d432d303d526.5d303d632.5d303d723.25d346.5d814d390d875.5d470d913d519d932.75d576.5d952.5d634d952.5d695.5d952.5d827d873d903d793.5d979d653.5d982d653.5d905hR2d1024R3d952.5R4d67.5R5d721R6d-178R7d653.5R8d168R9d241.5R10i64R11d67.5R12d1024R13ai1i3i3i3i3i3i3i3i3i1i3i3i3i3i3i3i3i3i2i2i2i3i3i3i3i3i3i3i3i3i3i3i3i3i3i3i3i2i3i3i3i3i3i3i3i3i3i3i3i3i3i3i3i3i2hg:120oR0d950.5R1ad562d464d359.5d736.5d572.5d1024d464d1024d301d804d138d1024d29.5d1024d247d731d48d464d156.5d464d305d663.5d453.5d464d562d464hR2d606R3d572.5R4d29.5R5d560R6d0R7d530.5R8d168R9d241.5R10i120R11d29.5R12d606R13ai1i2i2i2i2i2i2i2i2i2i2i2i2hg:63oR0d950.5R1ad195.5d897d297d897d297d1024d195.5d1024d195.5d897d294d823.5d198.5d823.5d198.5d746.5d198.5d696d212.5d663.5d226.5d631d271.5d588d316.5d543.5d345d517d357.75d493.5d370.5d470d370.5d445.5d370.5d401d337.75d373.5d305d346d251d346d211.5d346d166.75d363.5d122d381d73.5d414.5d73.5d320.5d120.5d292d168.75d278d217d264d268.5d264d360.5d264d416.25d312.5d472d361d472d440.5d472d478.5d454d512.75d436d547d391d590d347d633d323.5d656.5d313.75d669.75d304d683d300d695.5d297d706d295.5d721d294d736d294d762d294d823.5hR2d543.5R3d472R4d73.5R5d760R6d0R7d686.5R8d168R9d241.5R10i63R11d73.5R12d543.5R13ai1i2i2i2i2i1i2i2i3i3i2i3i3i3i3i3i3i2i3i3i3i3i3i3i2i3i3i3i3i2hg:119oR0d950.5R1ad43d464d135d464d250d901d364.5d464d473d464d588d901d702.5d464d794.5d464d648d1024d539.5d1024d419d565d298d1024d189.5d1024d43d464hR2d837.5R3d794.5R4d43R5d560R6d0R7d517R8d168R9d241.5R10i119R11d43R12d837.5R13ai1i2i2i2i2i2i2i2i2i2i2i2i2i2hg:62oR0d950.5R1ad108.5d520d108.5d429d749.5d661.5d749.5d744.5d108.5d977d108.5d886d623.5d703.5d108.5d520hR2d858R3d749.5R4d108.5R5d595R6d47R7d486.5R8d168R9d241.5R10i62R11d108.5R12d858R13ai1i2i2i2i2i2i2i2hg:118oR0d950.5R1ad30.5d464d128d464d303d934d478d464d575.5d464d365.5d1024d240.5d1024d30.5d464hR2d606R3d575.5R4d30.5R5d560R6d0R7d529.5R8d168R9d241.5R10i118R11d30.5R12d606R13ai1i2i2i2i2i2i2i2hg:61oR0d950.5R1ad108.5d559d749.5d559d749.5d643d108.5d643d108.5d559d108.5d763d749.5d763d749.5d848d108.5d848d108.5d763hR2d858R3d749.5R4d108.5R5d465R6d176R7d356.5R8d168R9d241.5R10i61R11d108.5R12d858R13ai1i2i2i2i2i1i2i2i2i2hg:117oR0d950.5R1ad87d803d87d464d179d464d179d799.5d179d879d210d918.75d241d958.5d303d958.5d377.5d958.5d420.75d911d464d863.5d464d781.5d464d464d556d464d556d1024d464d1024d464d938d430.5d989d386.25d1013.75d342d1038.5d283.5d1038.5d187d1038.5d137d978.5d87d918.5d87d803hR2d649R3d556R4d87R5d560R6d-14.5R7d473R8d168R9d241.5R10i117R11d87R12d649R13ai1i2i2i2i3i3i3i3i2i2i2i2i2i3i3i3i3hg:60oR0d950.5R1ad749.5d520d233.5d703.5d749.5d886d749.5d977d108.5d744.5d108.5d661.5d749.5d429d749.5d520hR2d858R3d749.5R4d108.5R5d595R6d47R7d486.5R8d168R9d241.5R10i60R11d108.5R12d858R13ai1i2i2i2i2i2i2i2hg:116oR0d950.5R1ad187.5d305d187.5d464d377d464d377d535.5d187.5d535.5d187.5d839.5d187.5d908d206.25d927.5d225d947d282.5d947d377d947d377d1024d282.5d1024d176d1024d135.5d984.25d95d944.5d95d839.5d95d535.5d27.5d535.5d27.5d464d95d464d95d305d187.5d305hR2d401.5R3d377R4d27.5R5d719R6d0R7d691.5R8d168R9d241.5R10i116R11d27.5R12d401.5R13ai1i2i2i2i2i2i3i3i2i2i2i3i3i2i2i2i2i2i2hg:59oR0d950.5R1ad120d494.5d225.5d494.5d225.5d621.5d120d621.5d120d494.5d120d897d225.5d897d225.5d983d143.5d1143d79d1143d120d983d120d897hR2d345R3d225.5R4d79R5d529.5R6d-119R7d450.5R8d168R9d241.5R10i59R11d79R12d345R13ai1i2i2i2i2i1i2i2i2i2i2i2hg:115oR0d950.5R1ad453.5d480.5d453.5d567.5d414.5d547.5d372.5d537.5d330.5d527.5d285.5d527.5d217d527.5d182.75d548.5d148.5d569.5d148.5d611.5d148.5d643.5d173d661.75d197.5d680d271.5d696.5d303d703.5d401d724.5d442.25d762.75d483.5d801d483.5d869.5d483.5d947.5d421.75d993d360d1038.5d252d1038.5d207d1038.5d158.25d1029.75d109.5d1021d55.5d1003.5d55.5d908.5d106.5d935d156d948.25d205.5d961.5d254d961.5d319d961.5d354d939.25d389d917d389d876.5d389d839d363.75d819d338.5d799d253d780.5d221d773d135.5d755d97.5d717.75d59.5d680.5d59.5d615.5d59.5d536.5d115.5d493.5d171.5d450.5d274.5d450.5d325.5d450.5d370.5d458d415.5d465.5d453.5d480.5hR2d533.5R3d483.5R4d55.5R5d573.5R6d-14.5R7d518R8d168R9d241.5R10i115R11d55.5R12d533.5R13ai1i2i3i3i3i3i3i3i2i3i3i3i3i3i3i2i3i3i3i3i3i3i2i3i3i3i3i3i3hg:58oR0d950.5R1ad120d897d225.5d897d225.5d1024d120d1024d120d897d120d494.5d225.5d494.5d225.5d621.5d120d621.5d120d494.5hR2d345R3d225.5R4d120R5d529.5R6d0R7d409.5R8d168R9d241.5R10i58R11d120R12d345R13ai1i2i2i2i2i1i2i2i2i2hg:114oR0d950.5R1ad421d550d405.5d541d387.25d536.75d369d532.5d347d532.5d269d532.5d227.25d583.25d185.5d634d185.5d729d185.5d1024d93d1024d93d464d185.5d464d185.5d551d214.5d500d261d475.25d307.5d450.5d374d450.5d383.5d450.5d395d451.75d406.5d453d420.5d455.5d421d550hR2d421R3d421R4d93R5d573.5R6d0R7d480.5R8d168R9d241.5R10i114R11d93R12d421R13ai1i3i3i3i3i2i2i2i2i2i3i3i3i3i2hg:57oR0d950.5R1ad112.5d1008.5d112.5d916.5d150.5d934.5d189.5d944d228.5d953.5d266d953.5d366d953.5d418.75d886.25d471.5d819d479d682d450d725d405.5d748d361d771d307d771d195d771d129.75d703.25d64.5d635.5d64.5d518d64.5d403d132.5d333.5d200.5d264d313.5d264d443d264d511.25d363.25d579.5d462.5d579.5d651.5d579.5d828d495.75d933.25d412d1038.5d270.5d1038.5d232.5d1038.5d193.5d1031d154.5d1023.5d112.5d1008.5d313.5d692d381.5d692d421.25d645.5d461d599d461d518d461d437.5d421.25d390.75d381.5d344d313.5d344d245.5d344d205.75d390.75d166d437.5d166d518d166d599d205.75d645.5d245.5d692d313.5d692hR2d651.5R3d579.5R4d64.5R5d760R6d-14.5R7d695.5R8d168R9d241.5R10i57R11d64.5R12d651.5R13ai1i2i3i3i3i3i3i3i3i3i3i3i3i3i3i3i3i3i1i3i3i3i3i3i3i3i3hg:113oR0d950.5R1ad151.5d744.5d151.5d846d193.25d903.75d235d961.5d308d961.5d381d961.5d423d903.75d465d846d465d744.5d465d643d423d585.25d381d527.5d308d527.5d235d527.5d193.25d585.25d151.5d643d151.5d744.5d465d940d436d990d391.75d1014.25d347.5d1038.5d285.5d1038.5d184d1038.5d120.25d957.5d56.5d876.5d56.5d744.5d56.5d612.5d120.25d531.5d184d450.5d285.5d450.5d347.5d450.5d391.75d474.75d436d499d465d549d465d464d557d464d557d1237d465d1237d465d940hR2d650R3d557R4d56.5R5d573.5R6d-213R7d517R8d168R9d241.5R10i113R11d56.5R12d650R13ai1i3i3i3i3i3i3i3i3i1i3i3i3i3i3i3i3i3i2i2i2i2i2hg:56oR0d950.5R1ad325.5d669.5d253.5d669.5d212.25d708d171d746.5d171d814d171d881.5d212.25d920d253.5d958.5d325.5d958.5d397.5d958.5d439d919.75d480.5d881d480.5d814d480.5d746.5d439.25d708d398d669.5d325.5d669.5d224.5d626.5d159.5d610.5d123.25d566d87d521.5d87d457.5d87d368d150.75d316d214.5d264d325.5d264d437d264d500.5d316d564d368d564d457.5d564d521.5d527.75d566d491.5d610.5d427d626.5d500d643.5d540.75d693d581.5d742.5d581.5d814d581.5d922.5d515.25d980.5d449d1038.5d325.5d1038.5d202d1038.5d135.75d980.5d69.5d922.5d69.5d814d69.5d742.5d110.5d693d151.5d643.5d224.5d626.5d187.5d467d187.5d525d223.75d557.5d260d590d325.5d590d390.5d590d427.25d557.5d464d525d464d467d464d409d427.25d376.5d390.5d344d325.5d344d260d344d223.75d376.5d187.5d409d187.5d467hR2d651.5R3d581.5R4d69.5R5d760R6d-14.5R7d690.5R8d168R9d241.5R10i56R11d69.5R12d651.5R13ai1i3i3i3i3i3i3i3i3i1i3i3i3i3i3i3i3i3i3i3i3i3i3i3i3i3i1i3i3i3i3i3i3i3i3hg:112oR0d950.5R1ad185.5d940d185.5d1237d93d1237d93d464d185.5d464d185.5d549d214.5d499d258.75d474.75d303d450.5d364.5d450.5d466.5d450.5d530.25d531.5d594d612.5d594d744.5d594d876.5d530.25d957.5d466.5d1038.5d364.5d1038.5d303d1038.5d258.75d1014.25d214.5d990d185.5d940d498.5d744.5d498.5d643d456.75d585.25d415d527.5d342d527.5d269d527.5d227.25d585.25d185.5d643d185.5d744.5d185.5d846d227.25d903.75d269d961.5d342d961.5d415d961.5d456.75d903.75d498.5d846d498.5d744.5hR2d650R3d594R4d93R5d573.5R6d-213R7d480.5R8d168R9d241.5R10i112R11d93R12d650R13ai1i2i2i2i2i2i3i3i3i3i3i3i3i3i1i3i3i3i3i3i3i3i3hgh";
flash.text.Font.DEFAULT_FONT_SCALE = 9.0;
flash.text.Font.DEFAULT_FONT_NAME = "Bitstream_Vera_Sans";
flash.text.Font.DEFAULT_CLASS_NAME = "flash.text.Font";
flash.text.Font.__registeredFonts = new Array();
flash.text.TextField.mDefaultFont = "Bitstream_Vera_Sans";
flash.text.FontInstance.mSolidFonts = new haxe.ds.StringMap();
flash.text.TextFieldType.DYNAMIC = "DYNAMIC";
flash.text.TextFieldType.INPUT = "INPUT";
flash.ui.Keyboard.NUMBER_0 = 48;
flash.ui.Keyboard.NUMBER_1 = 49;
flash.ui.Keyboard.NUMBER_2 = 50;
flash.ui.Keyboard.NUMBER_3 = 51;
flash.ui.Keyboard.NUMBER_4 = 52;
flash.ui.Keyboard.NUMBER_5 = 53;
flash.ui.Keyboard.NUMBER_6 = 54;
flash.ui.Keyboard.NUMBER_7 = 55;
flash.ui.Keyboard.NUMBER_8 = 56;
flash.ui.Keyboard.NUMBER_9 = 57;
flash.ui.Keyboard.A = 65;
flash.ui.Keyboard.B = 66;
flash.ui.Keyboard.C = 67;
flash.ui.Keyboard.D = 68;
flash.ui.Keyboard.E = 69;
flash.ui.Keyboard.F = 70;
flash.ui.Keyboard.G = 71;
flash.ui.Keyboard.H = 72;
flash.ui.Keyboard.I = 73;
flash.ui.Keyboard.J = 74;
flash.ui.Keyboard.K = 75;
flash.ui.Keyboard.L = 76;
flash.ui.Keyboard.M = 77;
flash.ui.Keyboard.N = 78;
flash.ui.Keyboard.O = 79;
flash.ui.Keyboard.P = 80;
flash.ui.Keyboard.Q = 81;
flash.ui.Keyboard.R = 82;
flash.ui.Keyboard.S = 83;
flash.ui.Keyboard.T = 84;
flash.ui.Keyboard.U = 85;
flash.ui.Keyboard.V = 86;
flash.ui.Keyboard.W = 87;
flash.ui.Keyboard.X = 88;
flash.ui.Keyboard.Y = 89;
flash.ui.Keyboard.Z = 90;
flash.ui.Keyboard.NUMPAD_0 = 96;
flash.ui.Keyboard.NUMPAD_1 = 97;
flash.ui.Keyboard.NUMPAD_2 = 98;
flash.ui.Keyboard.NUMPAD_3 = 99;
flash.ui.Keyboard.NUMPAD_4 = 100;
flash.ui.Keyboard.NUMPAD_5 = 101;
flash.ui.Keyboard.NUMPAD_6 = 102;
flash.ui.Keyboard.NUMPAD_7 = 103;
flash.ui.Keyboard.NUMPAD_8 = 104;
flash.ui.Keyboard.NUMPAD_9 = 105;
flash.ui.Keyboard.NUMPAD_MULTIPLY = 106;
flash.ui.Keyboard.NUMPAD_ADD = 107;
flash.ui.Keyboard.NUMPAD_ENTER = 108;
flash.ui.Keyboard.NUMPAD_SUBTRACT = 109;
flash.ui.Keyboard.NUMPAD_DECIMAL = 110;
flash.ui.Keyboard.NUMPAD_DIVIDE = 111;
flash.ui.Keyboard.F1 = 112;
flash.ui.Keyboard.F2 = 113;
flash.ui.Keyboard.F3 = 114;
flash.ui.Keyboard.F4 = 115;
flash.ui.Keyboard.F5 = 116;
flash.ui.Keyboard.F6 = 117;
flash.ui.Keyboard.F7 = 118;
flash.ui.Keyboard.F8 = 119;
flash.ui.Keyboard.F9 = 120;
flash.ui.Keyboard.F10 = 121;
flash.ui.Keyboard.F11 = 122;
flash.ui.Keyboard.F12 = 123;
flash.ui.Keyboard.F13 = 124;
flash.ui.Keyboard.F14 = 125;
flash.ui.Keyboard.F15 = 126;
flash.ui.Keyboard.BACKSPACE = 8;
flash.ui.Keyboard.TAB = 9;
flash.ui.Keyboard.ENTER = 13;
flash.ui.Keyboard.SHIFT = 16;
flash.ui.Keyboard.CONTROL = 17;
flash.ui.Keyboard.CAPS_LOCK = 18;
flash.ui.Keyboard.ESCAPE = 27;
flash.ui.Keyboard.SPACE = 32;
flash.ui.Keyboard.PAGE_UP = 33;
flash.ui.Keyboard.PAGE_DOWN = 34;
flash.ui.Keyboard.END = 35;
flash.ui.Keyboard.HOME = 36;
flash.ui.Keyboard.LEFT = 37;
flash.ui.Keyboard.RIGHT = 39;
flash.ui.Keyboard.UP = 38;
flash.ui.Keyboard.DOWN = 40;
flash.ui.Keyboard.INSERT = 45;
flash.ui.Keyboard.DELETE = 46;
flash.ui.Keyboard.NUMLOCK = 144;
flash.ui.Keyboard.BREAK = 19;
flash.ui.Keyboard.SEMICOLON = 186;
flash.ui.Keyboard.EQUAL = 187;
flash.ui.Keyboard.COMMA = 188;
flash.ui.Keyboard.MINUS = 189;
flash.ui.Keyboard.PERIOD = 190;
flash.ui.Keyboard.SLASH = 191;
flash.ui.Keyboard.BACKQUOTE = 192;
flash.ui.Keyboard.LEFTBRACKET = 219;
flash.ui.Keyboard.BACKSLASH = 220;
flash.ui.Keyboard.RIGHTBRACKET = 221;
flash.ui.Keyboard.DOM_VK_CANCEL = 3;
flash.ui.Keyboard.DOM_VK_HELP = 6;
flash.ui.Keyboard.DOM_VK_BACK_SPACE = 8;
flash.ui.Keyboard.DOM_VK_TAB = 9;
flash.ui.Keyboard.DOM_VK_CLEAR = 12;
flash.ui.Keyboard.DOM_VK_RETURN = 13;
flash.ui.Keyboard.DOM_VK_ENTER = 14;
flash.ui.Keyboard.DOM_VK_SHIFT = 16;
flash.ui.Keyboard.DOM_VK_CONTROL = 17;
flash.ui.Keyboard.DOM_VK_ALT = 18;
flash.ui.Keyboard.DOM_VK_PAUSE = 19;
flash.ui.Keyboard.DOM_VK_CAPS_LOCK = 20;
flash.ui.Keyboard.DOM_VK_ESCAPE = 27;
flash.ui.Keyboard.DOM_VK_SPACE = 32;
flash.ui.Keyboard.DOM_VK_PAGE_UP = 33;
flash.ui.Keyboard.DOM_VK_PAGE_DOWN = 34;
flash.ui.Keyboard.DOM_VK_END = 35;
flash.ui.Keyboard.DOM_VK_HOME = 36;
flash.ui.Keyboard.DOM_VK_LEFT = 37;
flash.ui.Keyboard.DOM_VK_UP = 38;
flash.ui.Keyboard.DOM_VK_RIGHT = 39;
flash.ui.Keyboard.DOM_VK_DOWN = 40;
flash.ui.Keyboard.DOM_VK_PRINTSCREEN = 44;
flash.ui.Keyboard.DOM_VK_INSERT = 45;
flash.ui.Keyboard.DOM_VK_DELETE = 46;
flash.ui.Keyboard.DOM_VK_0 = 48;
flash.ui.Keyboard.DOM_VK_1 = 49;
flash.ui.Keyboard.DOM_VK_2 = 50;
flash.ui.Keyboard.DOM_VK_3 = 51;
flash.ui.Keyboard.DOM_VK_4 = 52;
flash.ui.Keyboard.DOM_VK_5 = 53;
flash.ui.Keyboard.DOM_VK_6 = 54;
flash.ui.Keyboard.DOM_VK_7 = 55;
flash.ui.Keyboard.DOM_VK_8 = 56;
flash.ui.Keyboard.DOM_VK_9 = 57;
flash.ui.Keyboard.DOM_VK_SEMICOLON = 59;
flash.ui.Keyboard.DOM_VK_EQUALS = 61;
flash.ui.Keyboard.DOM_VK_A = 65;
flash.ui.Keyboard.DOM_VK_B = 66;
flash.ui.Keyboard.DOM_VK_C = 67;
flash.ui.Keyboard.DOM_VK_D = 68;
flash.ui.Keyboard.DOM_VK_E = 69;
flash.ui.Keyboard.DOM_VK_F = 70;
flash.ui.Keyboard.DOM_VK_G = 71;
flash.ui.Keyboard.DOM_VK_H = 72;
flash.ui.Keyboard.DOM_VK_I = 73;
flash.ui.Keyboard.DOM_VK_J = 74;
flash.ui.Keyboard.DOM_VK_K = 75;
flash.ui.Keyboard.DOM_VK_L = 76;
flash.ui.Keyboard.DOM_VK_M = 77;
flash.ui.Keyboard.DOM_VK_N = 78;
flash.ui.Keyboard.DOM_VK_O = 79;
flash.ui.Keyboard.DOM_VK_P = 80;
flash.ui.Keyboard.DOM_VK_Q = 81;
flash.ui.Keyboard.DOM_VK_R = 82;
flash.ui.Keyboard.DOM_VK_S = 83;
flash.ui.Keyboard.DOM_VK_T = 84;
flash.ui.Keyboard.DOM_VK_U = 85;
flash.ui.Keyboard.DOM_VK_V = 86;
flash.ui.Keyboard.DOM_VK_W = 87;
flash.ui.Keyboard.DOM_VK_X = 88;
flash.ui.Keyboard.DOM_VK_Y = 89;
flash.ui.Keyboard.DOM_VK_Z = 90;
flash.ui.Keyboard.DOM_VK_CONTEXT_MENU = 93;
flash.ui.Keyboard.DOM_VK_NUMPAD0 = 96;
flash.ui.Keyboard.DOM_VK_NUMPAD1 = 97;
flash.ui.Keyboard.DOM_VK_NUMPAD2 = 98;
flash.ui.Keyboard.DOM_VK_NUMPAD3 = 99;
flash.ui.Keyboard.DOM_VK_NUMPAD4 = 100;
flash.ui.Keyboard.DOM_VK_NUMPAD5 = 101;
flash.ui.Keyboard.DOM_VK_NUMPAD6 = 102;
flash.ui.Keyboard.DOM_VK_NUMPAD7 = 103;
flash.ui.Keyboard.DOM_VK_NUMPAD8 = 104;
flash.ui.Keyboard.DOM_VK_NUMPAD9 = 105;
flash.ui.Keyboard.DOM_VK_MULTIPLY = 106;
flash.ui.Keyboard.DOM_VK_ADD = 107;
flash.ui.Keyboard.DOM_VK_SEPARATOR = 108;
flash.ui.Keyboard.DOM_VK_SUBTRACT = 109;
flash.ui.Keyboard.DOM_VK_DECIMAL = 110;
flash.ui.Keyboard.DOM_VK_DIVIDE = 111;
flash.ui.Keyboard.DOM_VK_F1 = 112;
flash.ui.Keyboard.DOM_VK_F2 = 113;
flash.ui.Keyboard.DOM_VK_F3 = 114;
flash.ui.Keyboard.DOM_VK_F4 = 115;
flash.ui.Keyboard.DOM_VK_F5 = 116;
flash.ui.Keyboard.DOM_VK_F6 = 117;
flash.ui.Keyboard.DOM_VK_F7 = 118;
flash.ui.Keyboard.DOM_VK_F8 = 119;
flash.ui.Keyboard.DOM_VK_F9 = 120;
flash.ui.Keyboard.DOM_VK_F10 = 121;
flash.ui.Keyboard.DOM_VK_F11 = 122;
flash.ui.Keyboard.DOM_VK_F12 = 123;
flash.ui.Keyboard.DOM_VK_F13 = 124;
flash.ui.Keyboard.DOM_VK_F14 = 125;
flash.ui.Keyboard.DOM_VK_F15 = 126;
flash.ui.Keyboard.DOM_VK_F16 = 127;
flash.ui.Keyboard.DOM_VK_F17 = 128;
flash.ui.Keyboard.DOM_VK_F18 = 129;
flash.ui.Keyboard.DOM_VK_F19 = 130;
flash.ui.Keyboard.DOM_VK_F20 = 131;
flash.ui.Keyboard.DOM_VK_F21 = 132;
flash.ui.Keyboard.DOM_VK_F22 = 133;
flash.ui.Keyboard.DOM_VK_F23 = 134;
flash.ui.Keyboard.DOM_VK_F24 = 135;
flash.ui.Keyboard.DOM_VK_NUM_LOCK = 144;
flash.ui.Keyboard.DOM_VK_SCROLL_LOCK = 145;
flash.ui.Keyboard.DOM_VK_COMMA = 188;
flash.ui.Keyboard.DOM_VK_PERIOD = 190;
flash.ui.Keyboard.DOM_VK_SLASH = 191;
flash.ui.Keyboard.DOM_VK_BACK_QUOTE = 192;
flash.ui.Keyboard.DOM_VK_OPEN_BRACKET = 219;
flash.ui.Keyboard.DOM_VK_BACK_SLASH = 220;
flash.ui.Keyboard.DOM_VK_CLOSE_BRACKET = 221;
flash.ui.Keyboard.DOM_VK_QUOTE = 222;
flash.ui.Keyboard.DOM_VK_META = 224;
flash.ui.Keyboard.DOM_VK_KANA = 21;
flash.ui.Keyboard.DOM_VK_HANGUL = 21;
flash.ui.Keyboard.DOM_VK_JUNJA = 23;
flash.ui.Keyboard.DOM_VK_FINAL = 24;
flash.ui.Keyboard.DOM_VK_HANJA = 25;
flash.ui.Keyboard.DOM_VK_KANJI = 25;
flash.ui.Keyboard.DOM_VK_CONVERT = 28;
flash.ui.Keyboard.DOM_VK_NONCONVERT = 29;
flash.ui.Keyboard.DOM_VK_ACEPT = 30;
flash.ui.Keyboard.DOM_VK_MODECHANGE = 31;
flash.ui.Keyboard.DOM_VK_SELECT = 41;
flash.ui.Keyboard.DOM_VK_PRINT = 42;
flash.ui.Keyboard.DOM_VK_EXECUTE = 43;
flash.ui.Keyboard.DOM_VK_SLEEP = 95;
flash.utils.Endian.BIG_ENDIAN = "bigEndian";
flash.utils.Endian.LITTLE_ENDIAN = "littleEndian";
flash.utils.Uuid.UID_CHARS = "0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ";
googleAnalytics.Campaign.TYPE_DIRECT = "direct";
googleAnalytics.Campaign.TYPE_ORGANIC = "organic";
googleAnalytics.Campaign.TYPE_REFERRAL = "referral";
googleAnalytics.Config.ERROR_SEVERITY_SILENCE = 0;
googleAnalytics.Config.ERROR_SEVERITY_TRACE = 1;
googleAnalytics.Config.ERROR_SEVERITY_EXCEPTIONS = 2;
googleAnalytics.CustomVariable.SCOPE_VISITOR = 1;
googleAnalytics.CustomVariable.SCOPE_SESSION = 2;
googleAnalytics.CustomVariable.SCOPE_PAGE = 3;
googleAnalytics.Page.REFERRER_INTERNAL = "0";
googleAnalytics.Tracker.VERSION = "5.2.5";
googleAnalytics.URLParser.parts = ["source","protocol","authority","userInfo","user","password","host","port","relative","path","directory","file","query","anchor"];
googleAnalytics.internals.X10.OBJECT_KEY_NUM = 1;
googleAnalytics.internals.X10.TYPE_KEY_NUM = 2;
googleAnalytics.internals.X10.LABEL_KEY_NUM = 3;
googleAnalytics.internals.X10.VALUE_VALUE_NUM = 1;
googleAnalytics.internals.request.Request.TYPE_EVENT = "event";
googleAnalytics.internals.request.Request.TYPE_TRANSACTION = "tran";
googleAnalytics.internals.request.Request.TYPE_ITEM = "item";
googleAnalytics.internals.request.Request.TYPE_SOCIAL = "social";
googleAnalytics.internals.request.Request.TYPE_CUSTOMVARIABLE = "var";
googleAnalytics.internals.request.Request.X10_CUSTOMVAR_NAME_PROJECT_ID = "8";
googleAnalytics.internals.request.Request.X10_CUSTOMVAR_VALUE_PROJECT_ID = "9";
googleAnalytics.internals.request.Request.X10_CUSTOMVAR_SCOPE_PROJECT_ID = "11";
googleAnalytics.internals.request.Request.CAMPAIGN_DELIMITER = "|";
googleAnalytics.internals.request.EventRequest.X10_EVENT_PROJECT_ID = "5";
haxe.Template.splitter = new EReg("(::[A-Za-z0-9_ ()&|!+=/><*.\"-]+::|\\$\\$([A-Za-z0-9_-]+)\\()","");
haxe.Template.expr_splitter = new EReg("(\\(|\\)|[ \r\n\t]*\"[^\"]*\"[ \r\n\t]*|[!+=/><*.&|-]+)","");
haxe.Template.expr_trim = new EReg("^[ ]*([^ ]+)[ ]*$","");
haxe.Template.expr_int = new EReg("^[0-9]+$","");
haxe.Template.expr_float = new EReg("^([+-]?)(?=\\d|,\\d)\\d*(,\\d*)?([Ee]([+-]?\\d+))?$","");
haxe.Template.globals = { };
haxe.Unserializer.DEFAULT_RESOLVER = Type;
haxe.Unserializer.BASE64 = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789%:";
haxe.ds.ObjectMap.count = 0;
js.Browser.window = typeof window != "undefined" ? window : null;
js.Browser.document = typeof window != "undefined" ? window.document : null;
openfl.Assets.cache = new openfl.AssetCache();
openfl.Assets.libraries = new haxe.ds.StringMap();
openfl.Assets.initialized = false;
openfl.display.Tilesheet.TILE_SCALE = 1;
openfl.display.Tilesheet.TILE_ROTATION = 2;
openfl.display.Tilesheet.TILE_RGB = 4;
openfl.display.Tilesheet.TILE_ALPHA = 8;
openfl.display.Tilesheet.TILE_TRANS_2x2 = 16;
openfl.display.Tilesheet.TILE_BLEND_NORMAL = 0;
openfl.display.Tilesheet.TILE_BLEND_ADD = 65536;
openfl.display.Tilesheet.TILE_BLEND_MULTIPLY = 131072;
openfl.display.Tilesheet.TILE_BLEND_SCREEN = 262144;
ApplicationMain.main();
})();
