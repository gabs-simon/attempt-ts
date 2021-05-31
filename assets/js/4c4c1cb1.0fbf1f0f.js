(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[903],{2798:function(e,s,t){"use strict";t.r(s),t.d(s,{frontMatter:function(){return i},metadata:function(){return r},toc:function(){return p},default:function(){return l}});var c=t(2122),n=t(9756),u=(t(7294),t(3905)),a=["components"],i={id:"success",sidebar_position:3,sidebar_label:"Success"},r={unversionedId:"api/success",id:"api/success",isDocsHomePage:!1,title:"Success",description:"Success Type",source:"@site/docs/api/success.md",sourceDirName:"api",slug:"/api/success",permalink:"/attempt-ts/api/success",editUrl:"https://github.com/gabs-simon/attempt-ts/edit/master/website/docs/api/success.md",version:"current",sidebar_label:"Success",sidebarPosition:3,frontMatter:{id:"success",sidebar_position:3,sidebar_label:"Success"},sidebar:"tutorialSidebar",previous:{title:"AsyncAttempt",permalink:"/attempt-ts/api/async-attempt"},next:{title:"Failure",permalink:"/attempt-ts/api/failure"}},p=[{value:"Success Type",id:"success-type",children:[]},{value:"Success Function",id:"success-function",children:[]},{value:"OK Function",id:"ok-function",children:[]}],o={toc:p};function l(e){var s=e.components,t=(0,n.Z)(e,a);return(0,u.kt)("wrapper",(0,c.Z)({},o,t,{components:s,mdxType:"MDXLayout"}),(0,u.kt)("h2",{id:"success-type"},"Success Type"),(0,u.kt)("pre",null,(0,u.kt)("code",{parentName:"pre",className:"language-typescript"},"// Success<S>\ntype Success<S> = {\n  type: typeof AttemptType.SUCCESS\n  value: T\n}\n")),(0,u.kt)("p",null,"Defines a Success result."),(0,u.kt)("h2",{id:"success-function"},"Success Function"),(0,u.kt)("pre",null,(0,u.kt)("code",{parentName:"pre",className:"language-typescript"},"// Success()\nconst Success = (value: S): Success<S>\n")),(0,u.kt)("p",null,"Wraps a result in a Success wrapper."),(0,u.kt)("h2",{id:"ok-function"},"OK Function"),(0,u.kt)("pre",null,(0,u.kt)("code",{parentName:"pre",className:"language-typescript"},"// OK()\nconst OK = (success: Success<S>): S\n")),(0,u.kt)("p",null,"Unwraps a Success wrapper and returns its result."))}l.isMDXComponent=!0}}]);