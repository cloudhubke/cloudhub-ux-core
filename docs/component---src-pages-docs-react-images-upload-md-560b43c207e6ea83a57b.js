(window.webpackJsonp=window.webpackJsonp||[]).push([[43],{"8ypT":function(e,t,a){},"90rW":function(e,t,a){"use strict";a.r(t),a.d(t,"_frontmatter",(function(){return d})),a.d(t,"default",(function(){return b}));var n,l=a("zLVn"),r=(a("q1tI"),a("7ljp")),c=a("DakN"),o=a("hUHX"),i=["components"],d={},m=(n="Block",function(e){return console.warn("Component "+n+" was not imported, exported, or provided by MDXProvider as global scope"),Object(r.b)("div",e)}),s={_frontmatter:d},u=c.a;function b(e){var t=e.components,a=Object(l.a)(e,i);return Object(r.b)(u,Object.assign({},s,a,{components:t,mdxType:"MDXLayout"}),Object(r.b)("h2",null,"ImagesUpload"),Object(r.b)("p",null,"This component is used to upload images to the server or cloud."),Object(r.b)("p",null,"Its a custom component powered by antd ",Object(r.b)("a",{parentName:"p",href:"https://ant.design/components/upload/"},"Upload component")),Object(r.b)("h2",null,"Usage"),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-js"},"import ImagesUpload from '@cloudhub-ux/core/uploaders/ImagesUpload';\n")),Object(r.b)("playground",{scope:{ImagesUpload:o.a}},"<ImagesUpload />"),Object(r.b)("h2",null,"Props"),Object(r.b)(m,{mdxType:"Block"},Object(r.b)("table",null,Object(r.b)("thead",null,Object(r.b)("tr",null,Object(r.b)("th",null,"prop"),Object(r.b)("th",null,"Desc/Equivalent"),Object(r.b)("th",null,"Default"))),Object(r.b)("tbody",null,Object(r.b)("tr",null,Object(r.b)("td",null,"limit"),Object(r.b)("td",null,"limit of files to upload"),Object(r.b)("td",null,"1")),Object(r.b)("tr",null,Object(r.b)("td",null,"url"),Object(r.b)("td",null,"end point"),Object(r.b)("td",null,"/fileapi/upload/image"))))),Object(r.b)("h2",null,"Usage in a from Field"),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-js"},'<Field\n  label="Profile Picture"\n  limit={1}\n  name="ProfilePicture"\n  component={ImagesUpload}\n/>\n')),Object(r.b)("h2",null,"Whats expected from the server?"),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-js"},'\n    {\n    "fd": "/uploads/images/b0c49c28-9bc6-46f8-878f-f9f9b4928d3e.png",\n    "size": 23232,\n    "filename": "tvnlogo.png",\n    "status": "finished",\n    "field": "file",\n    "name": "tvnlogo.png",\n    "url": "/fileapi/uploads/images/b0c49c28-9bc6-46f8-878f-f9f9b4928d3e.png",\n    "Location": "/fileapi/uploads/images/b0c49c28-9bc6-46f8-878f-f9f9b4928d3e.png",\n    "uploaddate": 1573542177314,\n    "downloads": 0,\n    "uploaded": true\n    }\n\n')))}b.isMDXComponent=!0},DakN:function(e,t,a){"use strict";var n=a("KQm4"),l=a("zLVn"),r=a("q1tI"),c=a.n(r),o=a("N6Cj"),i=a("r8TL"),d=a("Wbzz"),m=a("fYKE"),s=a("KYEM"),u=a("C+fU"),b=["path"];t.a=function(e){var t=e.path,a=Object(l.a)(e,b),r=Object(d.useStaticQuery)("3443436196").allMdx.nodes,g=Object(m.c)().maxWidth;return c.a.createElement(s.a,null,c.a.createElement(o.d,{row:!0},"lg"===g&&c.a.createElement(o.d,{style:{width:250,paddingTop:i.a.padding},flex:!1,color:u.b.gray3},c.a.createElement(o.v,null,c.a.createElement(o.x,{expanded:!0,header:"Getting Started",headerIcon:null,showHeaderIcon:!1},c.a.createElement(d.Link,{to:"/docs/getting-started/react"},c.a.createElement(o.w,{selected:(""+t).includes("getting-started/react")},c.a.createElement(o.D,null,"React"))),c.a.createElement(d.Link,{to:"/docs/getting-started/react-native"},c.a.createElement(o.w,{selected:(""+t).includes("getting-started/react-native")},c.a.createElement(o.D,null,"React-Native"))),c.a.createElement(d.Link,{to:"/docs/getting-started/colors"},c.a.createElement(o.w,{selected:(""+t).includes("getting-started/colors")},c.a.createElement(o.D,null,"Colors Oject"))),c.a.createElement(d.Link,{to:"/docs/getting-started/colors-tool"},c.a.createElement(o.w,{selected:(""+t).includes("getting-started/colors-tool")},c.a.createElement(o.D,null,"Colors Tool"))),c.a.createElement(d.Link,{to:"/docs/getting-started/sizes"},c.a.createElement(o.w,{selected:(""+t).includes("getting-started/sizes")},c.a.createElement(o.D,null,"Sizes Oject"))),c.a.createElement(d.Link,{to:"/docs/getting-started/fonts"},c.a.createElement(o.w,{selected:(""+t).includes("getting-started/fonts")},c.a.createElement(o.D,null,"Fonts Oject")))),c.a.createElement(o.x,{expanded:!0,header:"ux/core",headerIcon:null,showHeaderIcon:!1},Object(n.a)(r).filter((function(e){return e.fileAbsolutePath.includes("docs/react")})).map((function(e){return e.frontmatter.sidebar_label})).map((function(e){return c.a.createElement(d.Link,{key:e,to:"/docs/react/"+e+"/"},c.a.createElement(o.w,{selected:(""+t).includes("react/"+e)},c.a.createElement(o.D,null,e)))}))))),c.a.createElement(o.d,{padding:i.a.padding},a.children)))}},KYEM:function(e,t,a){"use strict";var n=a("q1tI"),l=a.n(n),r=a("Wbzz"),c=a("N6Cj"),o=a("fYKE"),i=a("C+fU"),d=a("qoR1"),m=a.n(d),s=a("r8TL"),u=l.a.forwardRef((function(e,t){var a=Object(o.c)().maxWidth;return l.a.createElement(c.d,{flex:!1,style:{position:"fixed",width:"100%",top:0,zIndex:1},center:!0,color:i.b.mistyWhite,shadow:!0},l.a.createElement(c.i,{flex:!1,style:{margin:0,padding:0}},l.a.createElement(c.d,{row:"lg"===a,wrap:!0,middle:!0,ref:t},"lg"===a&&l.a.createElement(r.Link,{to:"/",style:{margin:0,padding:0}},l.a.createElement(c.d,{flex:!1,style:{minWidth:200}},l.a.createElement("img",{src:i.a.logo,alt:"Cloud Hub Limited",style:{height:s.a.navBarHeight-15}}))),l.a.createElement(c.d,{flex:!1,row:!0,middle:!0,margin:[0,s.a.margin],style:{minWidth:380}},l.a.createElement(r.Link,{to:"/"},l.a.createElement(c.D,{h3:!0,primary:!0},e.siteTitle))),l.a.createElement(c.d,{right:"lg"===!a},l.a.createElement(c.d,{flex:!1,row:!0,style:{minWidth:350}},"lg"!==a&&l.a.createElement(c.d,{flex:!1,middle:!0},l.a.createElement(c.r,null,l.a.createElement(m.a,{size:24}))),l.a.createElement(r.Link,{to:"/docs/getting-started"},l.a.createElement(c.e,{style:{height:s.a.navBarHeight,borderRadius:0}},l.a.createElement(c.D,{h6:!0},"Docs"))),l.a.createElement("a",{href:"https://github.com/cloudhubke/@cloudhub-ux/core",target:"_blank",rel:"noopener noreferrer"},l.a.createElement(c.e,{style:{height:s.a.navBarHeight,borderRadius:0}},l.a.createElement(c.D,{h6:!0},"Github"))))))))}));u.defaultProps={siteTitle:""};var b=u,g=(a("8ypT"),function(e){return l.a.createElement(c.d,{color:i.b.dark,flex:!1,padding:i.d.padding,center:!0},l.a.createElement(c.d,{row:!0,flex:!1,center:!0,wrap:!0},l.a.createElement(c.d,{flex:!1,style:{minWidth:300}},l.a.createElement(c.D,{h5:!0,style:{marginBottom:20,color:i.b.gray4,fontWeight:500}},"DOCS"),l.a.createElement(r.Link,{to:"/docs",style:{marginBottom:10}},l.a.createElement(c.D,{milkyWhite:!0},"Getting started")),l.a.createElement(r.Link,{to:"/api",style:{marginBottom:10}},l.a.createElement(c.D,{milkyWhite:!0},"Components and APIs")),l.a.createElement(r.Link,{to:"/docs",style:{marginBottom:10}},l.a.createElement(c.D,{milkyWhite:!0},"React Native"))),l.a.createElement(c.d,{flex:!1,style:{minWidth:300}},l.a.createElement(c.D,{h5:!0,style:{marginBottom:20,color:i.b.gray4,fontWeight:500}},"More Resources"),l.a.createElement(r.Link,{to:"/blog",style:{marginBottom:10}},l.a.createElement(c.D,{milkyWhite:!0},"Blog")),l.a.createElement("a",{href:"https://twitter.com/cloudhubke",rel:"noopener noreferrer",target:"_blank",style:{marginBottom:10}},l.a.createElement(c.D,{milkyWhite:!0},"Twitter")),l.a.createElement("a",{href:"https://github.com/cloudhubke",rel:"noopener noreferrer",target:"_blank",style:{marginBottom:10}},l.a.createElement(c.D,{milkyWhite:!0},"Github")),l.a.createElement("a",{href:"http://reactjs.org",target:"_blank",rel:"noopener noreferrer",style:{marginBottom:10}},l.a.createElement(c.D,{milkyWhite:!0},"React")))),l.a.createElement(c.d,{flex:!1,margin:[i.d.margin,0]},l.a.createElement("a",{href:"https://www.cloudhub.co.ke",rel:"noopener noreferrer"},l.a.createElement(c.D,{h5:!0,tertiary:!0},"©",(new Date).getFullYear(),","," Cloud Hub Limited "))))});t.a=function(e){var t=e.children,a=l.a.useRef(),n=Object(o.c)(),d=n.height,m=n.maxWidth,s=Object(o.d)(a),u=Number((s||{}).height||0),p=Object(r.useStaticQuery)("3649515864");return l.a.createElement(c.d,{color:i.b.gray4},l.a.createElement(b,{siteTitle:p.site.siteMetadata.title,maxWidth:m,ref:a}),l.a.createElement(c.d,{flex:!1,style:{marginTop:u||i.d.navBarHeight,minHeight:"calc("+(d-(u||i.d.navBarHeight))+"px)"}},l.a.createElement(c.i,{column:!0,color:i.b.milkyWhite,padding:0,style:{flex:1,paddingLeft:0,paddingRight:0}},l.a.createElement(c.d,{style:{width:"100%"}},t))),l.a.createElement(c.d,{flex:!1},l.a.createElement(g,null)))}}}]);
//# sourceMappingURL=component---src-pages-docs-react-images-upload-md-560b43c207e6ea83a57b.js.map