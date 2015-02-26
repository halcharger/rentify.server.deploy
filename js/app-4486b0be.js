/**
 * rentifyClientApp - rentifyClientApp Project Generated from HotTowel Angular
 * @authors 
 * @version v0.0.0
 * @link 
 * @license 
 */
!function(){"use strict";angular.module("app",["app.core","app.widgets","app.layout","app.services","app.sites","app.login","app.configuresite","app.reservations"])}(),function(){"use strict";angular.module("blocks.exception",["blocks.logger"])}(),function(){"use strict";angular.module("blocks.logger",[])}(),function(){"use strict";angular.module("blocks.router",["ui.router","blocks.logger"])}(),function(){"use strict";angular.module("app.core",["ngAnimate","ngCookies","ngResource","ngRoute","ngSanitize","ngTouch","blocks.exception","blocks.logger","blocks.router","ui.router","ngplus","LocalStorageModule","angular-data.DSCacheFactory","ui.bootstrap","flow","angular-images-loaded"])}(),function(){"use strict";angular.module("app.configuresite",["app.core"])}(),function(){"use strict";angular.module("app.login",["app.core"])}(),function(){"use strict";angular.module("app.reservations",["app.core"])}(),function(){"use strict";angular.module("app.sites",["app.core","app.widgets"])}(),function(){"use strict";angular.module("app.layout",["app.core"])}(),function(){"use strict";angular.module("app.services",["app.core"])}(),function(){"use strict";angular.module("app.widgets",[])}(),function(){"use strict";angular.module("app").run(["authService",function(e){e.fillAuthData()}]),angular.module("app").run(["$rootScope","$state",function(e,t){e.$on("$stateChangeStart",function(e,n,r){n.redirectTo&&(e.preventDefault(),t.go(n.redirectTo,r))})}])}(),function(){"use strict";function e(){this.config={appErrorPrefix:void 0},this.configure=function(e){this.config.appErrorPrefix=e},this.$get=function(){return{config:this.config}}}function t(e){e.decorator("$exceptionHandler",n)}function n(e,t,n){return function(r,i){var o=t.config.appErrorPrefix||"",a={exception:r,cause:i};r.message=o+r.message,e(r,i),n.error(r.message,a)}}angular.module("blocks.exception").provider("exceptionHandler",e).config(t),t.$inject=["$provide"],n.$inject=["$delegate","exceptionHandler","logger"]}(),function(){"use strict";function e(e){function t(t){return function(n){e.error(t,n)}}var n={catcher:t};return n}angular.module("blocks.exception").factory("exception",e),e.$inject=["logger"]}(),function(){"use strict";function e(e,t){function n(n,r,i){t.error(n,i),e.error("Error: "+n,r)}function r(n,r,i){t.info(n,i),e.info("Info: "+n,r)}function i(n,r,i){t.success(n,i),e.info("Success: "+n,r)}function o(n,r,i){t.warning(n,i),e.warn("Warning: "+n,r)}var a={showToasts:!0,error:n,info:r,success:i,warning:o,log:e.log};return a}angular.module("blocks.logger").factory("logger",e),e.$inject=["$log","toastr"]}(),function(){"use strict";function e(e,t,n){function r(e,r,o,a){function s(e,r){e.forEach(function(e){e.config.resolve=angular.extend(e.config.resolve||{},i.resolveAlways),t.state(e.state,e.config)}),r&&!f&&(f=!0,n.otherwise(r))}function c(){r.$on("$stateChangeError",function(t,n,r,i,o,s){if(!g){d.errors++,g=!0;var c=n&&(n.title||n.name||n.loadedTemplateUrl)||"unknown target",u="Error routing to "+c+". "+(s.data||"")+". <br/>"+(s.statusText||"")+": "+(s.status||"");a.warning(u,[n]),e.path("/")}})}function u(){c(),p()}function l(){return o.get()}function p(){r.$on("$stateChangeSuccess",function(e,t){d.changes++,g=!1;var n=i.docTitle+" "+(t.title||"");r.title=n})}var g=!1,f=!1,d={errors:0,changes:0},v={configureStates:s,getStates:l,stateCounts:d};return u(),v}var i={docTitle:void 0,resolveAlways:{}};e.html5Mode(!0),this.configure=function(e){angular.extend(i,e)},this.$get=r,r.$inject=["$location","$rootScope","$state","logger"]}angular.module("blocks.router").provider("routerHelper",e),e.$inject=["$locationProvider","$stateProvider","$urlRouterProvider"]}(),angular.module("app").constant("environment",{serverBaseUri:"/",clientId:"rentifyAngularMainApp",environment:"DEV"}),function(){"use strict";function e(e){e.options.timeOut=4e3,e.options.positionClass="toast-bottom-right"}function t(e,t,n){e.debugEnabled&&e.debugEnabled(!0),n.configure(r.appErrorPrefix),t.configure({docTitle:r.appTitle+": "})}var n=angular.module("app.core");n.config(e),e.$inject=["toastr"];var r={appErrorPrefix:"[rentifyClientApp Error] ",appTitle:"Rentify"};n.value("config",r),n.config(t),t.$inject=["$logProvider","routerHelperProvider","exceptionHandlerProvider"],n.config(["$httpProvider",function(e){e.interceptors.push("authInterceptorService")}]),n.config(["flowFactoryProvider",function(e){e.defaults={permanentErrors:[500,501],maxChunkRetries:2,chunkRetryInterval:5e3}}])}(),function(){"use strict";angular.module("app.core").constant("toastr",toastr).constant("moment",moment)}(),function(){"use strict";function e(e){var n="/404";e.configureStates(t(),n)}function t(){return[{state:"404",config:{url:"/404",templateUrl:"app/core/404.html",title:"404"}},{state:"root",config:{url:"/",redirectTo:"sites"}}]}angular.module("app.core").run(e),e.$inject=["routerHelper"]}(),function(){"use strict";function e(e){function t(){return e.when(72)}function n(){var t=[{firstName:"John",lastName:"Papa",age:25,location:"Florida"},{firstName:"Ward",lastName:"Bell",age:31,location:"California"},{firstName:"Colleen",lastName:"Jones",age:21,location:"New York"},{firstName:"Madelyn",lastName:"Green",age:18,location:"North Dakota"},{firstName:"Ella",lastName:"Jobs",age:18,location:"South Dakota"},{firstName:"Landon",lastName:"Gates",age:11,location:"South Carolina"},{firstName:"Haley",lastName:"Guthrie",age:35,location:"Wyoming"}];return e.when(t)}var r={getPeople:n,getMessageCount:t};return r}angular.module("app.core").factory("dataservice",e),e.$inject=["$q"]}(),function(){"use strict";function e(e,t){function n(){r()}function r(){o.navRoutes=a.filter(function(e){return e.settings&&e.settings.configurePropertyNav}).sort(function(e,t){return e.settings.configurePropertyNav-t.settings.configurePropertyNav})}function i(t){if(!t.title||!e.current||!e.current.title)return"";var n=t.name;return e.current.name.substr(0,n.length)===n?"active":""}var o=this,a=t.getStates();o.isCurrent=i,n()}angular.module("app.configuresite").controller("ConfigurePropertyController",e),e.$inject=["$state","routerHelper"]}(),function(){"use strict";function e(e){e.configureStates(t())}function t(){return[{state:"configuresite.configureproperty",config:{url:"/configureproperty",templateUrl:"app/features/configuresite/configureproperty/configureproperty.html",controller:"ConfigurePropertyController",controllerAs:"vm",redirectTo:"configuresite.configureproperty.overview",title:"Property Details",settings:{configureSiteNav:2}}}]}angular.module("app.configuresite").run(e),e.$inject=["routerHelper"]}(),function(){"use strict";function e(e){e.configureStates(t())}function t(){return[{state:"configuresite.configureproperty.contact",config:{url:"/contact",templateUrl:"app/features/configuresite/configureproperty/contact/contact.html",title:"Contact",settings:{configurePropertyNav:5}}}]}angular.module("app.configuresite").run(e),e.$inject=["routerHelper"]}(),function(){"use strict";function e(e){e.configureStates(t())}function t(){return[{state:"configuresite.configureproperty.gallery",config:{url:"/gallery",templateUrl:"app/features/configuresite/configureproperty/gallery/gallery.html",title:"Gallery",settings:{configurePropertyNav:3}}}]}angular.module("app.configuresite").run(e),e.$inject=["routerHelper"]}(),function(){"use strict";function e(e){e.configureStates(t())}function t(){return[{state:"configuresite.configureproperty.location",config:{url:"/location",templateUrl:"app/features/configuresite/configureproperty/location/location.html",title:"Location",settings:{configurePropertyNav:2}}}]}angular.module("app.configuresite").run(e),e.$inject=["routerHelper"]}(),function(){"use strict";function e(e){e.configureStates(t())}function t(){return[{state:"configuresite.configureproperty.overview",config:{url:"/overview",templateUrl:"app/features/configuresite/configureproperty/overview/overview.html",title:"Overview",settings:{configurePropertyNav:1}}}]}angular.module("app.configuresite").run(e),e.$inject=["routerHelper"]}(),function(){"use strict";function e(e){e.configureStates(t())}function t(){return[{state:"configuresite.configureproperty.rates",config:{url:"/rates",templateUrl:"app/features/configuresite/configureproperty/rates/rates.html",title:"Rates",settings:{configurePropertyNav:4}}}]}angular.module("app.configuresite").run(e),e.$inject=["routerHelper"]}(),function(){"use strict";function e(e){e.configureStates(t())}function t(){return[{state:"configuresite.configureproperty.reviews",config:{url:"/reviews",templateUrl:"app/features/configuresite/configureproperty/reviews/reviews.html",title:"Reviews",settings:{configurePropertyNav:6}}}]}angular.module("app.configuresite").run(e),e.$inject=["routerHelper"]}(),function(){"use strict";function e(e,t,n,r){function i(){o(),r.getSite(c).then(function(e){u.site=e})}function o(){u.navRoutes=s.filter(function(e){return e.settings&&e.settings.configureSiteNav}).sort(function(e,t){return e.settings.configureSiteNav-t.settings.configureSiteNav})}function a(t){if(!t.title||!e.current||!e.current.title)return"";var n=t.name;return e.current.name.substr(0,n.length)===n?"active":""}var s=n.getStates(),c=t.siteUniqueId,u=this;u.isCurrent=a,u.site={},i()}angular.module("app.configuresite").controller("ConfigureSiteController",e),e.$inject=["$state","$stateParams","routerHelper","sitesService"]}(),function(){"use strict";function e(e){e.configureStates(t())}function t(){return[{state:"configuresite",config:{url:"/configuresite/{siteUniqueId}",templateUrl:"app/features/configuresite/configuresite.html",controller:"ConfigureSiteController",controllerAs:"vm",redirectTo:"configuresite.theme"}}]}angular.module("app.configuresite").run(e),e.$inject=["routerHelper"]}(),function(){"use strict";function e(e){e.configureStates(t())}function t(){return[{state:"configuresite.pages",config:{url:"/configuresite.pages",templateUrl:"app/features/configuresite/pages/pages.html",title:"Pages",settings:{configureSiteNav:3}}}]}angular.module("app.configuresite").run(e),e.$inject=["routerHelper"]}(),function(){"use strict";function e(e){e.configureStates(t())}function t(){return[{state:"configuresite.settings",config:{url:"/configuresite.settings",templateUrl:"app/features/configuresite/settings/settings.html",title:"Settings",settings:{configureSiteNav:4}}}]}angular.module("app.configuresite").run(e),e.$inject=["routerHelper"]}(),function(){"use strict";function e(e){e.configureStates(t())}function t(){return[{state:"configuresite.theme",config:{url:"/theme",templateUrl:"app/features/configuresite/theme/theme.html",title:"Theme & Styling",settings:{configureSiteNav:1}}}]}angular.module("app.configuresite").run(e),e.$inject=["routerHelper"]}(),function(){"use strict";function e(e,t,n){function r(){n.info("Activated Login View")}var i=this;i.loginData={userName:"",password:"",useRefreshTokens:!1},i.login=function(){return t.login(i.loginData).success(function(){e.path("/sites")})},r()}angular.module("app.login").controller("LoginController",e),e.$inject=["$location","authService","logger"]}(),function(){"use strict";function e(e){e.configureStates(t())}function t(){return[{state:"login",config:{url:"/login",templateUrl:"app/features/login/login.html",controller:"LoginController",controllerAs:"vm",title:"Login"}}]}angular.module("app.login").run(e),e.$inject=["routerHelper"]}(),function(){"use strict";function e(e){e.configureStates(t())}function t(){return[{state:"reservations",config:{url:"/reservations",templateUrl:"app/features/reservations/reservations.html",title:"Reservations",settings:{nav:2,content:'<i class="fa fa-calendar"></i> Reservations'}}}]}angular.module("app.reservations").run(e),e.$inject=["routerHelper"]}(),function(){"use strict";function e(e,t,n){function r(){i.getSites()}var i=this;i.sites=[],i.getSites=function(){i.loadingSites=!0,n.getMySites().then(function(e){i.sites=e})},i.refreshSites=function(){return i.loadingSites=!0,n.refreshMySites().success(function(e){i.sites=e})},i.deleteSite=function(t){n.setSelectedSite(t),e.goToDeleteSite(t)},i.editSite=function(t){n.setSelectedSite(t),e.goToConfigureSite(t)},r()}angular.module("app.sites").controller("SitesController",e),e.$inject=["locationService","authService","sitesService"]}(),function(){"use strict";function e(e){e.configureStates(t())}function t(){return[{state:"sites",config:{url:"/sites",templateUrl:"app/features/sites/sites.html",controller:"SitesController",controllerAs:"vm",settings:{nav:1,content:'<i class="fa fa-globe"></i> Sites'}}}]}angular.module("app.sites").run(e),e.$inject=["routerHelper"]}(),function(){"use strict";angular.module("app.layout").directive("defaultPanel",function(){return{restrict:"E",transclude:!0,replace:!0,scope:{panelHeading:"@"},template:'<div class="panel panel-default"><div class="panel-heading"><h4 class="panel-title">{{panelHeading}}</h4></div><div class="panel-collapse collapse in" aria-expanded="true"><div class="panel-body"><ng-transclude></ng-transclude></div></div></div>'}})}(),function(){"use strict";angular.module("app.layout").directive("globalErrorFeedback",function(){return{restrict:"E",scope:{},controller:["$rootScope","$scope",function(e,t){t.hideMessage=!0,t.message="",e.$on("globalErrorEvent",function(e,n){t.message=n,t.hideMessage=!1}),e.$on("globalClearErrorEvent",function(){t.hideMessage=!0,t.message=""})}],template:'<div data-ng-hide="hideMessage" class="note note-danger note-bordered clearfix" ng-bind-html="message"></div>'}})}(),function(){"use strict";angular.module("app.layout").directive("pageContentContainer",function(){return{restrict:"E",transclude:!0,replace:!0,scope:{pageHeading:"@",faIcon:"@"},template:'<div class="page-container"><div class="page-head"><div class="container"><div class="page-title"><i class="pull-left fa {{faIcon}} fa-2x"></i><h1 class="pull-left">{{pageHeading}}</h1></div></div></div><div class="page-content"><div class="container"><ng-transclude></ng-transclude></div></div></div>'}})}(),function(){"use strict";angular.module("app.layout").directive("portletForm",function(){return{restrict:"E",transclude:!0,replace:!0,scope:{portletHeading:"@",colour:"@",faIcon:"@"},template:'<div class="portlet box {{colour}}"><div class="portlet-title"><div class="caption"><i class="fa {{faIcon}}"></i> {{portletHeading}}</div></div><div class="portlet-body form"><ng-transclude></ng-transclude></div></div>'}})}(),function(){"use strict";function e(e,t,n,r,i,o){function a(){s()}function s(){u.navRoutes=l.filter(function(e){return e.settings&&e.settings.nav}).sort(function(e,t){return e.settings.nav-t.settings.nav})}function c(t){if(!t.title||!e.current||!e.current.title)return"";var n=t.name,r=e.current.name.substr(0,n.length)===n?"current":"";return r}var u=this,l=n.getStates();u.isCurrent=c,u.loggedInUser=i.authentication.userName,u.environment=o,a(),u.logOut=function(){i.logOut(),t.path("/login")}}angular.module("app.layout").controller("ShellController",e),e.$inject=["$state","$location","routerHelper","logger","authService","environment"]}(),function(){"use strict";angular.module("app.layout").directive("spinnerButton",function(){return{restrict:"E",scope:{buttonclass:"@",text:"@",spinnertext:"@",isdisabled:"=",click:"&"},controller:["$scope",function(e){e.isClicked=!1,e.buttonClick=function(){e.isClicked=!0,e.click()["finally"](function(){e.isClicked=!1})}}],template:'<button class="btn {{buttonclass}} " data-ng-show="isdisabled && !isClicked" data-ng-disabled="true" >{{text}}</button><button class="btn {{buttonclass}} " data-ng-click="buttonClick()" data-ng-hide="(isdisabled && !isClicked) || isClicked" >{{text}}</button><button class="btn {{buttonclass}} " data-ng-show="isClicked" data-ng-disabled="true" ><i class="fa fa-circle-o-notch fa-spin"></i> {{spinnertext}}</button>'}})}(),function(){"use strict";function e(e,t,n,r,i){function o(t){console.log("global generic error handler: rejection:",t);var n="<p>We are sorry but you experienced an unexpected error. We have done all we can to notify the right people so all you can do right now is try again.</p>";if(t.data||0!==t.status||""!==t.statusText)if(400===t.status)if(t.data&&t.data.error_description)n=t.data.error_description;else if(t.data&&"The request is invalid."===t.data.message&&t.data.modelState){var r=[];for(var i in t.data.modelState)if(t.data.modelState.hasOwnProperty(i))for(var o=0;o<t.data.modelState[i].length;o++)r.push(t.data.modelState[i][o]);n="<strong>Failed to save changes due to:</strong><BR/>"+r.join("<br/>")}else t.data&&t.data.message&&(n=t.data.message);else 500===t.status&&t.data.exceptionMessage&&(n=n+"<p><strong>Exception Type:</strong></p><p>"+t.data.exceptionType+"</p>");else n="Unable to connect to the server, please try again in a couple of seconds.";e.$broadcast("globalErrorEvent",n)}var a,s={},c=function(t){t=t||{},t.headers=t.headers||{};var n=i.get("authorizationData");return n&&(t.headers.Authorization="Bearer "+n.token),e.$broadcast("globalClearErrorEvent"),t},u=function(e){var i=t.defer();if(401===e.status){var a=r.get("authService");a.refreshToken().then(function(){l(e.config,i)},function(t){console.log("failed to refresh token: ",t),a.logOut(),n.path("/login"),i.reject(e)})}else o(e),i.reject(e);return i.promise},l=function(e,t){a=a||r.get("$http"),a(e).then(function(e){t.resolve(e)},function(e){t.reject(e)})};return s.request=c,s.responseError=u,s}angular.module("app.services").factory("authInterceptorService",e),e.$inject=["$rootScope","$q","$location","$injector","localStorageService"]}(),function(){"use strict";function e(e,t,n,r,i){var o,a=i.serverBaseUri,s=i.clientId,c={},u={isAuth:!1,userName:"",useRefreshTokens:!1},l={provider:"",userName:"",email:"",externalAccessToken:""},p=function(e){return d(),o=o||t.get("$http"),o.post(a+"api/account/register",e).then(function(e){return e})},g=function(){u.isAuth||n.path("login")},f=function(e){var n="grant_type=password&username="+e.userName+"&password="+e.password;return e.useRefreshTokens&&(n=n+"&client_id="+s),o=o||t.get("$http"),console.log("about to post to:"+a+"token"),o.post(a+"token",n,{headers:{"Content-Type":"application/x-www-form-urlencoded"}}).success(function(t){e.useRefreshTokens?r.set("authorizationData",{token:t.access_token,userName:e.userName,refreshToken:t.refresh_token,useRefreshTokens:!0}):r.set("authorizationData",{token:t.access_token,userName:e.userName,refreshToken:"",useRefreshTokens:!1}),u.isAuth=!0,u.userName=e.userName,u.useRefreshTokens=e.useRefreshTokens}).error(function(){d()})},d=function(){r.remove("authorizationData"),u.isAuth=!1,u.userName="",u.useRefreshTokens=!1},v=function(){var e=r.get("authorizationData");e&&(u.isAuth=!0,u.userName=e.userName,u.useRefreshTokens=e.useRefreshTokens)},m=function(){console.log("refreshing token...");var n=e.defer(),i=r.get("authorizationData");if(i&&i.useRefreshTokens){var c="grant_type=refresh_token&refresh_token="+i.refreshToken+"&client_id="+s;r.remove("authorizationData"),o=o||t.get("$http"),o.post(a+"token",c,{headers:{"Content-Type":"application/x-www-form-urlencoded"}}).success(function(e){r.set("authorizationData",{token:e.access_token,userName:e.userName,refreshToken:e.refresh_token,useRefreshTokens:!0}),n.resolve(e)}).error(function(){n.reject()})}else n.reject();return n.promise},h=function(e){return o=o||t.get("$http"),o.get(a+"api/account/ObtainLocalAccessToken",{params:{provider:e.provider,externalAccessToken:e.externalAccessToken}}).success(function(e){r.set("authorizationData",{token:e.access_token,userName:e.userName,refreshToken:"",useRefreshTokens:!1}),u.isAuth=!0,u.userName=e.userName,u.useRefreshTokens=!1}).error(function(){d()})},b=function(e){return o=o||t.get("$http"),o.post(a+"api/account/registerexternal",e).success(function(e){r.set("authorizationData",{token:e.access_token,userName:e.userName,refreshToken:"",useRefreshTokens:!1}),u.isAuth=!0,u.userName=e.userName,u.useRefreshTokens=!1}).error(function(){d()})};return c.saveRegistration=p,c.login=f,c.logOut=d,c.fillAuthData=v,c.authentication=u,c.refreshToken=m,c.obtainAccessToken=h,c.externalAuthData=l,c.registerExternal=b,c.redirectToLoginIfNotAuthenticated=g,c}angular.module("app.services").factory("authService",e),e.$inject=["$q","$injector","$location","localStorageService","environment"]}(),function(){"use strict";function e(e){var t={goToConfigureSite:function(t){e.path("/configuresite/"+t.uniqueId)},goToDeleteSite:function(){e.path("/configuresite.delete")}};return t}angular.module("app").factory("locationService",e),e.$inject=["$location"]}(),function(){"use strict";function e(e,t,n,r,i){n.redirectToLoginIfNotAuthenticated();var o,a="mysites",s=r.serverBaseUri,c=(new i(a,{maxAge:9e4,cacheFlushInterval:6e5,deleteOnExpire:"aggressive"}),{});return c.getMySites=function(){var n=t.defer(),r=(new Date).getTime(),o=i.get(a);return o.get(a)?n.resolve(o.get(a)):e.get(s+"api/mysites").success(function(e){console.log("time taken for mysites request: "+((new Date).getTime()-r)+"ms"),console.log("sites: ",e),o.put(a,e),n.resolve(e)}),n.promise},c.getSite=function(e){return c.getMySites().then(function(t){for(var n=0;n<t.length;n++)if(t[n].uniqueId===e)return t[n]})},c.refreshMySites=function(){return e.get(s+"api/mysites").success(function(e){var t=i.get(a);return t.put(a,e),e})},c.addSite=function(t){return e.post(s+"api/mysites/add",t).success(function(){var e=i.get(a),n=e.get(a);n.push(t),e.put(a,n)})},c.updateTheme=function(t,n){return e.post(s+"api/site/updatetheme",{uniqueId:t,themeId:n}).success(function(){c.refreshMySites()})},c.deleteSite=function(t){return e["delete"](s+"api/mysites/delete?uniqueId="+t).success(function(){for(var e=i.get(a),n=e.get(a),r=n.length-1;r>=0;r--)n[r].uniqueId===t&&n.splice(r,1);e.put(a,n)})},c.removeGalleryImage=function(t,n,r){return e.post(s+"api/site/removegalleryimage",{siteUniqueId:t,galleryId:n,imageUrl:r})},c.getPropertyOverview=function(t){return e.get(s+"api/site/propertyoverview?siteUniqueId="+t)},c.updatePropertyOverview=function(t){return e.post(s+"api/site/updatepropertyoverview",t)},c.getLocation=function(t){return e.get(s+"api/site/location?siteUniqueId="+t)},c.updateLocation=function(t){return e.post(s+"api/site/updatelocation",t)},c.getGallery=function(t){return e.get(s+"api/site/gallery?siteUniqueId="+t)},c.updateGallery=function(t){return e.post(s+"api/site/updategallery",t)},c.getCustomMapImageUploadUrl=function(e){return s+"api/site/mapimage/upload?siteUniqueId="+e},c.getGalleryImageUploadUrl=function(e,t){return s+"api/site/gallery/upload?siteUniqueId="+e+"&galleryId="+t},c.setSelectedSite=function(e){o=e},c.getSelectedSite=function(){return o},c.clearSelectedSite=function(){o={}},c}angular.module("app.services").factory("sitesService",e),e.$inject=["$http","$q","authService","environment","DSCacheFactory"]}(),function(){"use strict";function e(e){function t(e,t,i){i.$observe("htImgPerson",function(e){e=n+(e||r),i.$set("src",e)})}var n=e.imageBasePath,r=e.unknownPersonImageSource,i={link:t,restrict:"A"};return i}angular.module("app.widgets").directive("htImgPerson",e),e.$inject=["config"]}(),function(){"use strict";function e(){var e={scope:{title:"@",subtitle:"@",rightText:"@",allowCollapse:"@"},templateUrl:"app/widgets/widget-header.html",restrict:"EA"};return e}angular.module("app.widgets").directive("htWidgetHeader",e)}(),angular.module("app.core").run(["$templateCache",function(e){e.put("app/core/404.html",'<page-content-container page-heading="404 : Page Not Found"><div class="note note-danger note-bordered clearfix"><h4 class=block>ATTENTION</h4><p>We\'re sorry to say but the route or page you\'re trying to navigate to does not exist or could not be found. Try a different route or page.</p></div></page-content-container>'),e.put("app/layout/shell.html",'<div data-ng-controller="ShellController as vm"><div class=page-header><div class=page-header-top><div class=container><div class=page-logo><a href="/"><h1>RENTIFY</h1></a></div><div class=top-menu><ul class="nav navbar-nav pull-right"><li class="dropdown dropdown-user dropdown-dark"><a href class=dropdown-toggle><span class="username username-hide-mobile">{{vm.loggedInUser}}</span></a></li></ul></div></div></div><div class=page-header-menu><div class=container><div class=hor-menu><ul class="nav navbar-nav"><li class="menu-dropdown mega-menu-dropdown" ng-class=vm.isCurrent(r) ng-repeat="r in vm.navRoutes"><a ui-sref={{r.name}} ng-bind-html=r.settings.content></a></li><li class="menu-dropdown mega-menu-dropdown"><a ng-click=vm.logOut(); class=dropdown-toggle><i class="fa fa-power-off"></i> Logout</a></li></ul></div></div></div></div><div ui-view=""></div><div class="page-footer footer"><div class=container>2014 &copy; Metronic. All Rights Reserved. [{{vm.environment.environment}}]</div></div><div class=scroll-to-top><i class=icon-arrow-up></i></div></div>'),e.put("app/widgets/widget-header.html",'<div class=widget-head><div class="page-title pull-left">{{title}}</div><small class=page-title-subtle ng-show=subtitle>({{subtitle}})</small><div class="widget-icons pull-right"></div><small class="pull-right page-title-subtle" ng-show=rightText>{{rightText}}</small><div class=clearfix></div></div>'),e.put("app/features/configuresite/configuresite.html",'<page-content-container page-heading="EDIT SITE: {{vm.site.name}}"><div class="tabbable tabbable-custom tabbable-noborder"><ul class="nav nav-tabs"><li ng-class=vm.isCurrent(r) ng-repeat="r in vm.navRoutes"><a ui-sref={{r.name}} aria-expanded=false>{{r.title}}</a></li></ul><div class=tab-content><div class="tab-pane active"><div ui-view=""></div></div></div></div></page-content-container>'),e.put("app/features/login/login.html",'<page-content-container page-heading=LOGIN><portlet-form portlet-heading="Login with your email and password below" colour=blue-hoki fa-icon=fa-cogs><form class=form-horizontal name=loginForm novalidate><div class=form-body><div class=form-group><label class="col-md-3 control-label">email</label><div class="col-md-4 ng-class:{\'has-error has-feedback\': loginForm.userName.$invalid && !loginForm.userName.$pristine};"><input type=text class=form-control name=userName placeholder=email data-ng-model=vm.loginData.userName required autofocus><p data-ng-show="loginForm.userName.$invalid && !loginForm.userName.$pristine" class=help-block>Please provide a value for email</p></div></div><div class=form-group><label class="col-md-3 control-label">password</label><div class="col-md-4 ng-class:{\'has-error has-feedback\': loginForm.password.$invalid && !loginForm.password.$pristine};"><input type=password class=form-control name=password placeholder=Password data-ng-model=vm.loginData.password required><p data-ng-show="loginForm.password.$invalid && !loginForm.password.$pristine" class=help-block>Please provide a value for password</p></div></div><div class=form-group><label class="col-md-3 control-label"></label><div class=col-md-4><label><input type=checkbox data-ng-model=vm.loginData.useRefreshTokens><strong>Remember me</strong></label></div></div><div class=form-group><div class=col-md-3></div><div class=col-md-4><spinner-button text=Login spinnertext="Logging in...." isdisabled=loginForm.$invalid buttonclass="btn-md btn-info" click=vm.login()></spinner-button></div></div><div class=form-group><div class=col-md-3></div><div class=col-md-4><global-error-feedback></global-error-feedback></div></div></div></form></portlet-form></page-content-container>'),e.put("app/features/reservations/reservations.html",'<page-content-container page-heading="Reservations & Availability"></page-content-container>'),e.put("app/features/sites/sites.html",'<page-content-container page-heading="MY SITES" fa-icon=fa-globe><global-error-feedback></global-error-feedback><div class="row margin-top-5"><div class=col-md-6><div class=input-group><span class=input-group-addon>Search:</span> <input type=text class=form-control> <span class=input-group-btn><button class="btn btn-default" type=submit><i class="fa fa-search"></i></button></span></div></div><div class=col-md-4><div class=input-group><span class=input-group-addon>Filter by Owner:</span><select class=form-control><option>Arnold</option><option>Tony Blair</option><option>Ken Livingston</option><option>David Cameron</option><option>Ed Milliband</option></select></div></div><div class=pull-right><a data-ng-click=vm.refreshSites() class="btn btn-info btn"><i class="fa fa-refresh"></i> Refresh</a> <a href=/addsite class="btn btn-success btn"><i class="fa fa-plus"></i> Add</a></div></div><div class="row margin-top-20"><span class=col-md-4 data-ng-repeat="site in vm.sites"><div class="portlet box blue-hoki"><div class=portlet-title><div class=caption><i class="fa fa-globe"></i>{{site.uniqueId}}</div><div class=actions><a data-ng-click=vm.editSite(site) class="btn btn-default btn-sm"><i class="fa fa-cog"></i> Configure</a></div></div><div class=portlet-body><div class=slimScrollDiv style="position: relative; overflow: hidden; width: auto; height: 50px;"><div class=scroller style="height: 50px; overflow: hidden; width: auto;" data-rail-visible=1 data-rail-color=yellow data-handle-color=#a1b2bd data-initialized=1><p><strong>Name:</strong> {{site.name}}</p><p><strong>Theme:</strong> {{site.themeId}}</p></div></div></div></div></span></div></page-content-container>'),e.put("app/features/configuresite/configureproperty/configureproperty.html",'<div class="navbar navbar-default" role=navigation><div class=navbar-header><span class=navbar-brand>Configure Property: {{propertyName}}</span></div><div class="collapse navbar-collapse navbar-ex1-collapse"><ul class="nav navbar-nav"><li ng-class=vm.isCurrent(r) ng-repeat="r in vm.navRoutes"><a ui-sref={{r.name}} aria-expanded=false>{{r.title}}</a></li></ul></div></div><div ui-view=""></div>'),e.put("app/features/configuresite/pages/pages.html","pages"),e.put("app/features/configuresite/settings/settings.html","settings"),e.put("app/features/configuresite/theme/theme.html",'<h4>Select the theme and styling details for your website</h4><p>&nbsp;</p><global-error-feedback></global-error-feedback><default-panel panel-heading=Theme><div class=form-group><label for=theme>Theme</label><select id=theme name=theme ng-model=vm.selectedTheme ng-options="theme as theme for theme in vm.themes" class=form-control></select></div></default-panel><div class=clearfix><spinner-button text=Save spinnertext=Saving.... isdisabled=themeForm.$invalid buttonclass="btn-md btn-info pull-right" click=vm.save()></spinner-button></div>'),e.put("app/features/configuresite/configureproperty/contact/contact.html","contact"),e.put("app/features/configuresite/configureproperty/location/location.html","location"),e.put("app/features/configuresite/configureproperty/gallery/gallery.html","gallery"),e.put("app/features/configuresite/configureproperty/overview/overview.html","overview"),e.put("app/features/configuresite/configureproperty/rates/rates.html","rates"),e.put("app/features/configuresite/configureproperty/reviews/reviews.html","reviews")}]);