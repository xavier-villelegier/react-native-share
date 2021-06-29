(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[667],{3905:function(t,e,a){"use strict";a.d(e,{Zo:function(){return m},kt:function(){return k}});var n=a(7294);function r(t,e,a){return e in t?Object.defineProperty(t,e,{value:a,enumerable:!0,configurable:!0,writable:!0}):t[e]=a,t}function i(t,e){var a=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),a.push.apply(a,n)}return a}function l(t){for(var e=1;e<arguments.length;e++){var a=null!=arguments[e]?arguments[e]:{};e%2?i(Object(a),!0).forEach((function(e){r(t,e,a[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(a,e))}))}return t}function o(t,e){if(null==t)return{};var a,n,r=function(t,e){if(null==t)return{};var a,n,r={},i=Object.keys(t);for(n=0;n<i.length;n++)a=i[n],e.indexOf(a)>=0||(r[a]=t[a]);return r}(t,e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(t);for(n=0;n<i.length;n++)a=i[n],e.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(t,a)&&(r[a]=t[a])}return r}var p=n.createContext({}),s=function(t){var e=n.useContext(p),a=e;return t&&(a="function"==typeof t?t(e):l(l({},e),t)),a},m=function(t){var e=s(t.components);return n.createElement(p.Provider,{value:e},t.children)},d={inlineCode:"code",wrapper:function(t){var e=t.children;return n.createElement(n.Fragment,{},e)}},c=n.forwardRef((function(t,e){var a=t.components,r=t.mdxType,i=t.originalType,p=t.parentName,m=o(t,["components","mdxType","originalType","parentName"]),c=s(a),k=r,g=c["".concat(p,".").concat(k)]||c[k]||d[k]||i;return a?n.createElement(g,l(l({ref:e},m),{},{components:a})):n.createElement(g,l({ref:e},m))}));function k(t,e){var a=arguments,r=e&&e.mdxType;if("string"==typeof t||r){var i=a.length,l=new Array(i);l[0]=c;var o={};for(var p in e)hasOwnProperty.call(e,p)&&(o[p]=e[p]);o.originalType=t,o.mdxType="string"==typeof t?t:r,l[1]=o;for(var s=2;s<i;s++)l[s]=a[s];return n.createElement.apply(null,l)}return n.createElement.apply(null,a)}c.displayName="MDXCreateElement"},6313:function(t,e,a){"use strict";a.r(e),a.d(e,{frontMatter:function(){return o},metadata:function(){return p},toc:function(){return s},default:function(){return d}});var n=a(2122),r=a(9756),i=(a(7294),a(3905)),l=["components"],o={id:"share-open",title:"Share.open"},p={unversionedId:"share-open",id:"share-open",isDocsHomePage:!1,title:"Share.open",description:"The open() method allows a user to share a premade message via a social medium they choose. In other words, code specifies the message that will be sent and the user chooses to whom and the social medium through which the message will be sent. This shared message may contain text, one or more files, or both.",source:"@site/docs/share-open.mdx",sourceDirName:".",slug:"/share-open",permalink:"/react-native-share/docs/share-open",editUrl:"https://github.com/react-native-community/react-native-share/edit/master/website/docs/share-open.mdx",version:"current",frontMatter:{id:"share-open",title:"Share.open"},sidebar:"someSidebar",previous:{title:"Installing",permalink:"/react-native-share/docs/install"},next:{title:"Share.shareSingle",permalink:"/react-native-share/docs/share-single"}},s=[{value:"Supported Options",id:"supported-options",children:[]},{value:"Sharing a base64 file format",id:"sharing-a-base64-file-format",children:[]},{value:"Sharing a file directly",id:"sharing-a-file-directly",children:[]},{value:"ActivityItemSources (iOS only)",id:"activityitemsources-ios-only",children:[{value:"ActivityItemSource",id:"activityitemsource",children:[]},{value:"ActivityItem",id:"activityitem",children:[]},{value:"LinkMetadata",id:"linkmetadata",children:[]}]},{value:"LSApplicationQueriesSchemes (iOS only)",id:"lsapplicationqueriesschemes-ios-only",children:[]}],m={toc:s};function d(t){var e=t.components,a=(0,r.Z)(t,l);return(0,i.kt)("wrapper",(0,n.Z)({},m,a,{components:e,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"The open() method allows a user to share a premade message via a social medium they choose. In other words, code specifies the message that will be sent and the user chooses to whom and the social medium through which the message will be sent. This shared message may contain text, one or more files, or both."),(0,i.kt)("p",null,"Calling this method will return a promise that will fulfill or be rejected as soon as ther user successfully open the share action sheet or cancel/fail. Because of that, you will need to handle the rejection while necessary."),(0,i.kt)("p",null,"Using a promise implementation:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-js"},"Share.open(options)\n  .then((res) => {\n    console.log(res);\n  })\n  .catch((err) => {\n    err && console.log(err);\n  });\n")),(0,i.kt)("p",null,"Or with ",(0,i.kt)("inlineCode",{parentName:"p"},"async/await"),":"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-js"},"const fun = async () => {\n  const shareResponse = await Share.open(options);\n};\n")),(0,i.kt)("p",null,"*","Keep in mind that using a ",(0,i.kt)("inlineCode",{parentName:"p"},"async/await")," approach you will still need to handle the error response."),(0,i.kt)("h2",{id:"supported-options"},"Supported Options"),(0,i.kt)("p",null,"You can customize the call to ",(0,i.kt)("inlineCode",{parentName:"p"},"Share.open")," passing the following parameters:"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,i.kt)("th",{parentName:"tr",align:"center"},"Type"),(0,i.kt)("th",{parentName:"tr",align:"left"},"Description"),(0,i.kt)("th",{parentName:"tr",align:"left"},"Optional"),(0,i.kt)("th",{parentName:"tr",align:"left"},"Android"),(0,i.kt)("th",{parentName:"tr",align:"left"},"iOS"),(0,i.kt)("th",{parentName:"tr",align:"left"},"Windows"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},"message"),(0,i.kt)("td",{parentName:"tr",align:"center"},"string"),(0,i.kt)("td",{parentName:"tr",align:"left"},"Message sent to the share activity"),(0,i.kt)("td",{parentName:"tr",align:"left"},"\u2705"),(0,i.kt)("td",{parentName:"tr",align:"left"},"\u2705"),(0,i.kt)("td",{parentName:"tr",align:"left"},"\u2705"),(0,i.kt)("td",{parentName:"tr",align:"left"},"\u2753")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},"title"),(0,i.kt)("td",{parentName:"tr",align:"center"},"string"),(0,i.kt)("td",{parentName:"tr",align:"left"},"Title sent to the share activity"),(0,i.kt)("td",{parentName:"tr",align:"left"},"\ud83d\udeab"),(0,i.kt)("td",{parentName:"tr",align:"left"},"\u2705"),(0,i.kt)("td",{parentName:"tr",align:"left"},"\u2705"),(0,i.kt)("td",{parentName:"tr",align:"left"},"\u2753")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},"url"),(0,i.kt)("td",{parentName:"tr",align:"center"},"string"),(0,i.kt)("td",{parentName:"tr",align:"left"},"URL you want to share (only support base64 string in iOS & Android)."),(0,i.kt)("td",{parentName:"tr",align:"left"},"\u2705"),(0,i.kt)("td",{parentName:"tr",align:"left"},"\u2705"),(0,i.kt)("td",{parentName:"tr",align:"left"},"\u2705"),(0,i.kt)("td",{parentName:"tr",align:"left"},"\u2753")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},"urls"),(0,i.kt)("td",{parentName:"tr",align:"center"},"Array","[string]"),(0,i.kt)("td",{parentName:"tr",align:"left"},"Array of base64 string you want to share."),(0,i.kt)("td",{parentName:"tr",align:"left"},"\u2705"),(0,i.kt)("td",{parentName:"tr",align:"left"},"\u2705"),(0,i.kt)("td",{parentName:"tr",align:"left"},"\u2705"),(0,i.kt)("td",{parentName:"tr",align:"left"},"\u2753")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},"type"),(0,i.kt)("td",{parentName:"tr",align:"center"},"string"),(0,i.kt)("td",{parentName:"tr",align:"left"},"File mime type"),(0,i.kt)("td",{parentName:"tr",align:"left"},"\u2705"),(0,i.kt)("td",{parentName:"tr",align:"left"},"\u2705"),(0,i.kt)("td",{parentName:"tr",align:"left"},"\u2705"),(0,i.kt)("td",{parentName:"tr",align:"left"},"\u2753")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},"subject"),(0,i.kt)("td",{parentName:"tr",align:"center"},"string"),(0,i.kt)("td",{parentName:"tr",align:"left"},"Subject sent when sharing to email"),(0,i.kt)("td",{parentName:"tr",align:"left"},"\u2705"),(0,i.kt)("td",{parentName:"tr",align:"left"},"\u2705"),(0,i.kt)("td",{parentName:"tr",align:"left"},"\u2705"),(0,i.kt)("td",{parentName:"tr",align:"left"},"\u2753")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},"email"),(0,i.kt)("td",{parentName:"tr",align:"center"},"string"),(0,i.kt)("td",{parentName:"tr",align:"left"},"Email of addressee"),(0,i.kt)("td",{parentName:"tr",align:"left"},"\u2705"),(0,i.kt)("td",{parentName:"tr",align:"left"},"\u2705"),(0,i.kt)("td",{parentName:"tr",align:"left"},"\u2705"),(0,i.kt)("td",{parentName:"tr",align:"left"},"\u2753")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},"recipient"),(0,i.kt)("td",{parentName:"tr",align:"center"},"string"),(0,i.kt)("td",{parentName:"tr",align:"left"},"Phone number of SMS recipient"),(0,i.kt)("td",{parentName:"tr",align:"left"},"\u2705"),(0,i.kt)("td",{parentName:"tr",align:"left"},"\u2705"),(0,i.kt)("td",{parentName:"tr",align:"left"},"\ud83d\udeab"),(0,i.kt)("td",{parentName:"tr",align:"left"},"\ud83d\udeab")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},"excludedActivityTypes"),(0,i.kt)("td",{parentName:"tr",align:"center"},"Array","[string]"),(0,i.kt)("td",{parentName:"tr",align:"left"},"Activity types that won't show in the Share dialog"),(0,i.kt)("td",{parentName:"tr",align:"left"},"\u2705"),(0,i.kt)("td",{parentName:"tr",align:"left"},"\u2705"),(0,i.kt)("td",{parentName:"tr",align:"left"},"\u2705"),(0,i.kt)("td",{parentName:"tr",align:"left"},"\u2753")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},"failOnCancel"),(0,i.kt)("td",{parentName:"tr",align:"center"},"boolean"),(0,i.kt)("td",{parentName:"tr",align:"left"},"(defaults to true) Specifies whether promise should reject if user cancels share dialog"),(0,i.kt)("td",{parentName:"tr",align:"left"},"\u2705"),(0,i.kt)("td",{parentName:"tr",align:"left"},"\u2705"),(0,i.kt)("td",{parentName:"tr",align:"left"},"\u2705"),(0,i.kt)("td",{parentName:"tr",align:"left"},"\u2753")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},"showAppsToView"),(0,i.kt)("td",{parentName:"tr",align:"center"},"boolean"),(0,i.kt)("td",{parentName:"tr",align:"left"},"only android"),(0,i.kt)("td",{parentName:"tr",align:"left"},"\u2705"),(0,i.kt)("td",{parentName:"tr",align:"left"},"\u2705"),(0,i.kt)("td",{parentName:"tr",align:"left"},"\ud83d\udeab"),(0,i.kt)("td",{parentName:"tr",align:"left"},"\u2753")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},"filename"),(0,i.kt)("td",{parentName:"tr",align:"center"},"string"),(0,i.kt)("td",{parentName:"tr",align:"left"},"Only support base64 string in Android"),(0,i.kt)("td",{parentName:"tr",align:"left"},"\u2705"),(0,i.kt)("td",{parentName:"tr",align:"left"},"\u2705"),(0,i.kt)("td",{parentName:"tr",align:"left"},"\ud83d\udeab"),(0,i.kt)("td",{parentName:"tr",align:"left"},"\u2753")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},"saveToFiles"),(0,i.kt)("td",{parentName:"tr",align:"center"},"boolean"),(0,i.kt)("td",{parentName:"tr",align:"left"},"Open only ",(0,i.kt)("inlineCode",{parentName:"td"},"Files")," app (supports only urls (base64 string or path), requires iOS 11 or later)"),(0,i.kt)("td",{parentName:"tr",align:"left"},"\u2705"),(0,i.kt)("td",{parentName:"tr",align:"left"},"\ud83d\udeab"),(0,i.kt)("td",{parentName:"tr",align:"left"},"\u2705"),(0,i.kt)("td",{parentName:"tr",align:"left"},"\u2753")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},"filenames"),(0,i.kt)("td",{parentName:"tr",align:"center"},"Array","[string]"),(0,i.kt)("td",{parentName:"tr",align:"left"},"Array of filename for base64 urls array in Android"),(0,i.kt)("td",{parentName:"tr",align:"left"},"\u2705"),(0,i.kt)("td",{parentName:"tr",align:"left"},"\u2705"),(0,i.kt)("td",{parentName:"tr",align:"left"},"\ud83d\udeab"),(0,i.kt)("td",{parentName:"tr",align:"left"},"\u2753")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},"activityItemSources"),(0,i.kt)("td",{parentName:"tr",align:"center"},"Array","[Object]"),(0,i.kt)("td",{parentName:"tr",align:"left"},"Array of activity item sources. Each items should conform to ",(0,i.kt)("a",{parentName:"td",href:"#activityitemsource"},"ActivityItemSource")," specification. ",(0,i.kt)("a",{parentName:"td",href:"#example-activityitemsources"},"Example"),"."),(0,i.kt)("td",{parentName:"tr",align:"left"},"\u2705"),(0,i.kt)("td",{parentName:"tr",align:"left"},"\ud83d\udeab"),(0,i.kt)("td",{parentName:"tr",align:"left"},"\u2705"),(0,i.kt)("td",{parentName:"tr",align:"left"},"\u2753")))),(0,i.kt)("h2",{id:"sharing-a-base64-file-format"},"Sharing a base64 file format"),(0,i.kt)("p",null,"When sharing a ",(0,i.kt)("inlineCode",{parentName:"p"},"base64")," file, you will need to follow the format below:"),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},'url: "data:<data_type>/<file_extension>;base64,<base64_data>"')),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Note:")," If your application requires the ability to share ",(0,i.kt)("inlineCode",{parentName:"p"},"base64")," files on Android, you need to add"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-xml"},'\x3c!-- required for react-native-share base64 sharing --\x3e\n<uses-permission android:name="android.permission.WRITE_EXTERNAL_STORAGE" />\n')),(0,i.kt)("p",null,"to your application's ",(0,i.kt)("inlineCode",{parentName:"p"},"AndroidManifest.xml")," file as per the example project."),(0,i.kt)("h2",{id:"sharing-a-file-directly"},"Sharing a file directly"),(0,i.kt)("p",null,"When sharing a local file directly, you can use the following format:"),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},'url: "file://<file_path>"')),(0,i.kt)("h2",{id:"activityitemsources-ios-only"},"ActivityItemSources (iOS only)"),(0,i.kt)("p",null,"In order to share different data according to activities or to customize the share sheet, you can provide the data by using ",(0,i.kt)("inlineCode",{parentName:"p"},"activityItemSources")," ."),(0,i.kt)("p",null,"See ",(0,i.kt)("a",{parentName:"p",href:"https://developer.apple.com/documentation/uikit/uiactivityitemsource"},"here")," for more information about UIActivityItemSource."),(0,i.kt)("h4",{id:"example-activityitemsources"},"Example ActivityItemSources"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-jsx"},"import { Platform } from 'react-native';\nimport Share from 'react-native-share';\n\nconst url = 'https://awesome.contents.com/';\nconst title = 'Awesome Contents';\nconst message = 'Please check this out.';\nconst icon = 'data:<data_type>/<file_extension>;base64,<base64_data>';\nconst options = Platform.select({\n  ios: {\n    activityItemSources: [\n      {\n        // For sharing url with custom title.\n        placeholderItem: { type: 'url', content: url },\n        item: {\n          default: { type: 'url', content: url },\n        },\n        subject: {\n          default: title,\n        },\n        linkMetadata: { originalUrl: url, url, title },\n      },\n      {\n        // For sharing text.\n        placeholderItem: { type: 'text', content: message },\n        item: {\n          default: { type: 'text', content: message },\n          message: null, // Specify no text to share via Messages app.\n        },\n        linkMetadata: {\n          // For showing app icon on share preview.\n          title: message,\n        },\n      },\n      {\n        // For using custom icon instead of default text icon at share preview when sharing with message.\n        placeholderItem: {\n          type: 'url',\n          content: icon,\n        },\n        item: {\n          default: {\n            type: 'text',\n            content: `${message} ${url}`,\n          },\n        },\n        linkMetadata: {\n          title: message,\n          icon: icon,\n        },\n      },\n    ],\n  },\n  default: {\n    title,\n    subject: title,\n    message: `${message} ${url}`,\n  },\n});\n\nShare.open(options);\n")),(0,i.kt)("h3",{id:"activityitemsource"},"ActivityItemSource"),(0,i.kt)("p",null,"Structure used when the option ",(0,i.kt)("inlineCode",{parentName:"p"},"activityItemSources")," is being used:"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,i.kt)("th",{parentName:"tr",align:"center"},"Type"),(0,i.kt)("th",{parentName:"tr",align:"left"},"Description"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},"placeholderItem"),(0,i.kt)("td",{parentName:"tr",align:"center"},"Object"),(0,i.kt)("td",{parentName:"tr",align:"left"},"An object to use as a placeholder for the actual data. This should comform to ",(0,i.kt)("a",{parentName:"td",href:"#activityitem"},"ActivityItem")," type.")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},"item"),(0,i.kt)("td",{parentName:"tr",align:"center"},"Object"),(0,i.kt)("td",{parentName:"tr",align:"left"},"An object that contains the final data object to be acted on for each ",(0,i.kt)("a",{parentName:"td",href:"#activitytype"},"activity types"),". This should be ",(0,i.kt)("inlineCode",{parentName:"td"},"{ [ActivityType]: ?ActivityItem }")," .")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},"subject"),(0,i.kt)("td",{parentName:"tr",align:"center"},"Object"),(0,i.kt)("td",{parentName:"tr",align:"left"},"(optional) An object that contains a string to use as the contents of the subject field for each ",(0,i.kt)("a",{parentName:"td",href:"#activitytype"},"activity types"),". This should be ",(0,i.kt)("inlineCode",{parentName:"td"},"{ [ActivityType]: string }")," .")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},"dataTypeIdentifier"),(0,i.kt)("td",{parentName:"tr",align:"center"},"Object"),(0,i.kt)("td",{parentName:"tr",align:"left"},"(optional) An object that contains the UTI for the item for each ",(0,i.kt)("a",{parentName:"td",href:"#activitytype"},"activity types"),". This should be ",(0,i.kt)("inlineCode",{parentName:"td"},"{ [ActivityType]: string }")," . See ",(0,i.kt)("a",{parentName:"td",href:"https://developer.apple.com/library/archive/documentation/FileManagement/Conceptual/understanding_utis/understand_utis_intro/understand_utis_intro.html"},"here")," for more information.")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},"thumbnailImage"),(0,i.kt)("td",{parentName:"tr",align:"center"},"Object"),(0,i.kt)("td",{parentName:"tr",align:"left"},"(optional) An object that contains the URL to the image to use as a preview for the item for each ",(0,i.kt)("a",{parentName:"td",href:"#activitytype"},"activity types"),". This should be ",(0,i.kt)("inlineCode",{parentName:"td"},"{ [ActivityType]: string }")," . The URL should begin with ",(0,i.kt)("inlineCode",{parentName:"td"},"data:")," and contain the data as base 64 encoded string.")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},"linkMetadata"),(0,i.kt)("td",{parentName:"tr",align:"center"},"Object"),(0,i.kt)("td",{parentName:"tr",align:"left"},"(optional) An object that contains the metadata about a URL, including its title, icon, images, and video. See ",(0,i.kt)("a",{parentName:"td",href:"#linkmetadata"},"LinkMetadata"),".")))),(0,i.kt)("h4",{id:"activitytype"},"ActivityType"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"addToReadingList")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"airDrop")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"assignToContact")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"copyToPasteBoard")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"mail")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"message")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"openInIBooks")," (iOS 9+)"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"postToFacebook")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"postToFlickr")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"postToTencentWeibo")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"postToTwitter")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"postToVimeo")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"postToWeibo")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"print")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"saveToCameraRoll")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"markupAsPDF")," (iOS 11+)")),(0,i.kt)("p",null,"Also you can use ",(0,i.kt)("inlineCode",{parentName:"p"},"default")," in order to specify default behavior."),(0,i.kt)("h3",{id:"activityitem"},"ActivityItem"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,i.kt)("th",{parentName:"tr",align:"center"},"Type"),(0,i.kt)("th",{parentName:"tr",align:"left"},"Description"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},"type"),(0,i.kt)("td",{parentName:"tr",align:"center"},(0,i.kt)("inlineCode",{parentName:"td"},"text")," ","|"," ",(0,i.kt)("inlineCode",{parentName:"td"},"url")),(0,i.kt)("td",{parentName:"tr",align:"left"},"Type of the content.")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},"content"),(0,i.kt)("td",{parentName:"tr",align:"center"},"string"),(0,i.kt)("td",{parentName:"tr",align:"left"},"Text or URL to share. You can specify image with URL that begins with ",(0,i.kt)("inlineCode",{parentName:"td"},"data")," and contains the data as base 64 encoded string.")))),(0,i.kt)("h3",{id:"linkmetadata"},"LinkMetadata"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,i.kt)("th",{parentName:"tr",align:"center"},"Type"),(0,i.kt)("th",{parentName:"tr",align:"left"},"Description"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},"originalUrl"),(0,i.kt)("td",{parentName:"tr",align:"center"},"string"),(0,i.kt)("td",{parentName:"tr",align:"left"},"(optional) The original URL of the metadata request.")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},"url"),(0,i.kt)("td",{parentName:"tr",align:"center"},"string"),(0,i.kt)("td",{parentName:"tr",align:"left"},"(optional) The URL that returns the metadata, taking server-side redirects into account.")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},"title"),(0,i.kt)("td",{parentName:"tr",align:"center"},"string"),(0,i.kt)("td",{parentName:"tr",align:"left"},"(optional) A representative title for the URL.")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},"icon"),(0,i.kt)("td",{parentName:"tr",align:"center"},"string"),(0,i.kt)("td",{parentName:"tr",align:"left"},"(optional) A URL of the file corresponding to a representative icon for the URL.")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},"image"),(0,i.kt)("td",{parentName:"tr",align:"center"},"string"),(0,i.kt)("td",{parentName:"tr",align:"left"},"(optional) A URL of the file corresponding to a representative image for the URL.")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},"remoteVideoUrl"),(0,i.kt)("td",{parentName:"tr",align:"center"},"string"),(0,i.kt)("td",{parentName:"tr",align:"left"},"(optional) A remote URL corresponding to a representative video for the URL.")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},"video"),(0,i.kt)("td",{parentName:"tr",align:"center"},"string"),(0,i.kt)("td",{parentName:"tr",align:"left"},"(optional) A URL of the file corresponding to a representative video for the URL.")))),(0,i.kt)("h2",{id:"lsapplicationqueriesschemes-ios-only"},"LSApplicationQueriesSchemes (iOS only)"),(0,i.kt)("p",null,"If you want to share Whatsapp, Mailto or some applications on iOS, you should write ",(0,i.kt)("a",{parentName:"p",href:"https://developer.apple.com/library/archive/documentation/General/Reference/InfoPlistKeyReference/Articles/LaunchServicesKeys.html#//apple_ref/doc/plist/info/LSApplicationQueriesSchemes"},(0,i.kt)("inlineCode",{parentName:"a"},"LSApplicationQueriesSchemes"))," in info.plist:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-xml"},"  <key>LSApplicationQueriesSchemes</key>\n  <array>\n    <string>whatsapp</string>\n    <string>mailto</string>\n  </array>\n")),(0,i.kt)("p",null,"Also, to save photos your gallery you will need setting the following permission on your ",(0,i.kt)("inlineCode",{parentName:"p"},"Info.plist"),":"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-xml"},"  <key>NSPhotoLibraryAddUsageDescription</key>\n  <string>$(PRODUCT_NAME) wants to save photos</string>\n")))}d.isMDXComponent=!0}}]);