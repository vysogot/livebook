"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[433],{43349:(e,t,n)=>{n.d(t,{a:()=>l});var r=n(96225);function l(e,t){var n=e.append("foreignObject").attr("width","100000"),l=n.append("xhtml:div");l.attr("xmlns","http://www.w3.org/1999/xhtml");var o=t.label;switch(typeof o){case"function":l.insert(o);break;case"object":l.insert((function(){return o}));break;default:l.html(o)}r.bg(l,t.labelStyle),l.style("display","inline-block"),l.style("white-space","nowrap");var a=l.node().getBoundingClientRect();return n.attr("width",a.width).attr("height",a.height),n}},96225:(e,t,n)=>{n.d(t,{$p:()=>d,O1:()=>a,WR:()=>p,bF:()=>o,bg:()=>c});var r=n(37514),l=n(73234);function o(e,t){return!!e.children(t).length}function a(e){return i(e.v)+":"+i(e.w)+":"+i(e.name)}var s=/:/g;function i(e){return e?String(e).replace(s,"\\:"):""}function c(e,t){t&&e.attr("style",t)}function d(e,t,n){t&&e.attr("class",t).attr("class",n+" "+e.attr("class"))}function p(e,t){var n=t.graph();if(r.Z(n)){var o=n.transition;if(l.Z(o))return o(e)}return e}},53433:(e,t,n)=>{n.r(t),n.d(t,{diagram:()=>s});var r=n(49863),l=(n(45625),n(74309));n(53110),n(43402),n(3688),n(70870),n(29451),n(96225),n(43349),n(66749),n(96446),n(73032),l.c_6,n(81188);var o=n(60755);n(27856),n(27484),n(17967),n(69368),n(31898);const a={},s={parser:r.p,db:r.f,renderer:o.f,styles:o.a,init:e=>{e.flowchart||(e.flowchart={}),e.flowchart.arrowMarkerAbsolute=e.arrowMarkerAbsolute,function(e){const t=Object.keys(e);for(const n of t)a[n]=e[n]}(e.flowchart),r.f.clear(),r.f.setGen("gen-1")}}},60755:(e,t,n)=>{n.d(t,{a:()=>w,f:()=>f});var r=n(45625),l=n(74309),o=n(49863),a=n(53110),s=n(81188),i=n(12566),c=n(43349);const d={},p=function(e,t,n,r,l,o){const i=r.select(`[id="${n}"]`);Object.keys(e).forEach((function(n){const r=e[n];let d="default";r.classes.length>0&&(d=r.classes.join(" ")),d+=" flowchart-label";const p=(0,s.n)(r.styles);let b,f=void 0!==r.text?r.text:r.id;if(a.l.info("vertex",r,r.labelType),"markdown"===r.labelType)a.l.info("vertex",r,r.labelType);else if((0,a.k)((0,a.g)().flowchart.htmlLabels)){const e={label:f.replace(/fa[blrs]?:fa-[\w-]+/g,(e=>`<i class='${e.replace(":"," ")}'></i>`))};b=(0,c.a)(i,e).node(),b.parentNode.removeChild(b)}else{const e=l.createElementNS("http://www.w3.org/2000/svg","text");e.setAttribute("style",p.labelStyle.replace("color:","fill:"));const t=f.split(a.e.lineBreakRegex);for(const n of t){const t=l.createElementNS("http://www.w3.org/2000/svg","tspan");t.setAttributeNS("http://www.w3.org/XML/1998/namespace","xml:space","preserve"),t.setAttribute("dy","1em"),t.setAttribute("x","1"),t.textContent=n,e.appendChild(t)}b=e}let w=0,h="";switch(r.type){case"round":w=5,h="rect";break;case"square":case"group":default:h="rect";break;case"diamond":h="question";break;case"hexagon":h="hexagon";break;case"odd":case"odd_right":h="rect_left_inv_arrow";break;case"lean_right":h="lean_right";break;case"lean_left":h="lean_left";break;case"trapezoid":h="trapezoid";break;case"inv_trapezoid":h="inv_trapezoid";break;case"circle":h="circle";break;case"ellipse":h="ellipse";break;case"stadium":h="stadium";break;case"subroutine":h="subroutine";break;case"cylinder":h="cylinder";break;case"doublecircle":h="doublecircle"}t.setNode(r.id,{labelStyle:p.labelStyle,shape:h,labelText:f,labelType:r.labelType,rx:w,ry:w,class:d,style:p.style,id:r.id,link:r.link,linkTarget:r.linkTarget,tooltip:o.db.getTooltip(r.id)||"",domId:o.db.lookUpDomId(r.id),haveCallback:r.haveCallback,width:"group"===r.type?500:void 0,dir:r.dir,type:r.type,props:r.props,padding:(0,a.g)().flowchart.padding}),a.l.info("setNode",{labelStyle:p.labelStyle,labelType:r.labelType,shape:h,labelText:f,rx:w,ry:w,class:d,style:p.style,id:r.id,domId:o.db.lookUpDomId(r.id),width:"group"===r.type?500:void 0,type:r.type,dir:r.dir,props:r.props,padding:(0,a.g)().flowchart.padding})}))},b=function(e,t,n){a.l.info("abc78 edges = ",e);let r,o,i=0,c={};if(void 0!==e.defaultStyle){const t=(0,s.n)(e.defaultStyle);r=t.style,o=t.labelStyle}e.forEach((function(n){i++;var p="L-"+n.start+"-"+n.end;void 0===c[p]?(c[p]=0,a.l.info("abc78 new entry",p,c[p])):(c[p]++,a.l.info("abc78 new entry",p,c[p]));let b=p+"-"+c[p];a.l.info("abc78 new link id to be used is",p,b,c[p]);var f="LS-"+n.start,w="LE-"+n.end;const h={style:"",labelStyle:""};switch(h.minlen=n.length||1,"arrow_open"===n.type?h.arrowhead="none":h.arrowhead="normal",h.arrowTypeStart="arrow_open",h.arrowTypeEnd="arrow_open",n.type){case"double_arrow_cross":h.arrowTypeStart="arrow_cross";case"arrow_cross":h.arrowTypeEnd="arrow_cross";break;case"double_arrow_point":h.arrowTypeStart="arrow_point";case"arrow_point":h.arrowTypeEnd="arrow_point";break;case"double_arrow_circle":h.arrowTypeStart="arrow_circle";case"arrow_circle":h.arrowTypeEnd="arrow_circle"}let u="",g="";switch(n.stroke){case"normal":u="fill:none;",void 0!==r&&(u=r),void 0!==o&&(g=o),h.thickness="normal",h.pattern="solid";break;case"dotted":h.thickness="normal",h.pattern="dotted",h.style="fill:none;stroke-width:2px;stroke-dasharray:3;";break;case"thick":h.thickness="thick",h.pattern="solid",h.style="stroke-width: 3.5px;fill:none;";break;case"invisible":h.thickness="invisible",h.pattern="solid",h.style="stroke-width: 0;fill:none;"}if(void 0!==n.style){const e=(0,s.n)(n.style);u=e.style,g=e.labelStyle}h.style=h.style+=u,h.labelStyle=h.labelStyle+=g,void 0!==n.interpolate?h.curve=(0,s.o)(n.interpolate,l.c_6):void 0!==e.defaultInterpolate?h.curve=(0,s.o)(e.defaultInterpolate,l.c_6):h.curve=(0,s.o)(d.curve,l.c_6),void 0===n.text?void 0!==n.style&&(h.arrowheadStyle="fill: #333"):(h.arrowheadStyle="fill: #333",h.labelpos="c"),h.labelType=n.labelType,h.label=n.text.replace(a.e.lineBreakRegex,"\n"),void 0===n.style&&(h.style=h.style||"stroke: #333; stroke-width: 1.5px;fill:none;"),h.labelStyle=h.labelStyle.replace("color:","fill:"),h.id=b,h.classes="flowchart-link "+f+" "+w,t.setEdge(n.start,n.end,h,i)}))},f={setConf:function(e){const t=Object.keys(e);for(const n of t)d[n]=e[n]},addVertices:p,addEdges:b,getClasses:function(e,t){a.l.info("Extracting classes"),t.db.clear();try{return t.parse(e),t.db.getClasses()}catch(e){return}},draw:function(e,t,n,c){a.l.info("Drawing flowchart"),c.db.clear(),o.f.setGen("gen-2"),c.parser.parse(e);let d=c.db.getDirection();void 0===d&&(d="TD");const{securityLevel:f,flowchart:w}=(0,a.g)(),h=w.nodeSpacing||50,u=w.rankSpacing||50;let g;"sandbox"===f&&(g=(0,l.Ys)("#i"+t));const y="sandbox"===f?(0,l.Ys)(g.nodes()[0].contentDocument.body):(0,l.Ys)("body"),k="sandbox"===f?g.nodes()[0].contentDocument:document,x=new r.k({multigraph:!0,compound:!0}).setGraph({rankdir:d,nodesep:h,ranksep:u,marginx:0,marginy:0}).setDefaultEdgeLabel((function(){return{}}));let v;const m=c.db.getSubGraphs();a.l.info("Subgraphs - ",m);for(let e=m.length-1;e>=0;e--)v=m[e],a.l.info("Subgraph - ",v),c.db.addVertex(v.id,{text:v.title,type:v.labelType},"group",void 0,v.classes,v.dir);const S=c.db.getVertices(),T=c.db.getEdges();a.l.info("Edges",T);let _=0;for(_=m.length-1;_>=0;_--){v=m[_],(0,l.td_)("cluster").append("text");for(let e=0;e<v.nodes.length;e++)a.l.info("Setting up subgraphs",v.nodes[e],v.id),x.setParent(v.nodes[e],v.id)}p(S,x,t,y,k,c),b(T,x);const C=y.select(`[id="${t}"]`),$=y.select("#"+t+" g");if((0,i.r)($,x,["point","circle","cross"],"flowchart",t),s.u.insertTitle(C,"flowchartTitleText",w.titleTopMargin,c.db.getDiagramTitle()),(0,s.s)(x,C,w.diagramPadding,w.useMaxWidth),c.db.indexNodes("subGraph"+_),!w.htmlLabels){const e=k.querySelectorAll('[id="'+t+'"] .edgeLabel .label');for(const t of e){const e=t.getBBox(),n=k.createElementNS("http://www.w3.org/2000/svg","rect");n.setAttribute("rx",0),n.setAttribute("ry",0),n.setAttribute("width",e.width),n.setAttribute("height",e.height),t.insertBefore(n,t.firstChild)}}Object.keys(S).forEach((function(e){const n=S[e];if(n.link){const r=(0,l.Ys)("#"+t+' [id="'+e+'"]');if(r){const e=k.createElementNS("http://www.w3.org/2000/svg","a");e.setAttributeNS("http://www.w3.org/2000/svg","class",n.classes.join(" ")),e.setAttributeNS("http://www.w3.org/2000/svg","href",n.link),e.setAttributeNS("http://www.w3.org/2000/svg","rel","noopener"),"sandbox"===f?e.setAttributeNS("http://www.w3.org/2000/svg","target","_top"):n.linkTarget&&e.setAttributeNS("http://www.w3.org/2000/svg","target",n.linkTarget);const t=r.insert((function(){return e}),":first-child"),l=r.select(".label-container");l&&t.append((function(){return l.node()}));const o=r.select(".label");o&&t.append((function(){return o.node()}))}}}))}},w=e=>`.label {\n    font-family: ${e.fontFamily};\n    color: ${e.nodeTextColor||e.textColor};\n  }\n  .cluster-label text {\n    fill: ${e.titleColor};\n  }\n  .cluster-label span,p {\n    color: ${e.titleColor};\n  }\n\n  .label text,span,p {\n    fill: ${e.nodeTextColor||e.textColor};\n    color: ${e.nodeTextColor||e.textColor};\n  }\n\n  .node rect,\n  .node circle,\n  .node ellipse,\n  .node polygon,\n  .node path {\n    fill: ${e.mainBkg};\n    stroke: ${e.nodeBorder};\n    stroke-width: 1px;\n  }\n  .flowchart-label text {\n    text-anchor: middle;\n  }\n  // .flowchart-label .text-outer-tspan {\n  //   text-anchor: middle;\n  // }\n  // .flowchart-label .text-inner-tspan {\n  //   text-anchor: start;\n  // }\n\n  .node .label {\n    text-align: center;\n  }\n  .node.clickable {\n    cursor: pointer;\n  }\n\n  .arrowheadPath {\n    fill: ${e.arrowheadColor};\n  }\n\n  .edgePath .path {\n    stroke: ${e.lineColor};\n    stroke-width: 2.0px;\n  }\n\n  .flowchart-link {\n    stroke: ${e.lineColor};\n    fill: none;\n  }\n\n  .edgeLabel {\n    background-color: ${e.edgeLabelBackground};\n    rect {\n      opacity: 0.5;\n      background-color: ${e.edgeLabelBackground};\n      fill: ${e.edgeLabelBackground};\n    }\n    text-align: center;\n  }\n\n  .cluster rect {\n    fill: ${e.clusterBkg};\n    stroke: ${e.clusterBorder};\n    stroke-width: 1px;\n  }\n\n  .cluster text {\n    fill: ${e.titleColor};\n  }\n\n  .cluster span,p {\n    color: ${e.titleColor};\n  }\n  /* .cluster div {\n    color: ${e.titleColor};\n  } */\n\n  div.mermaidTooltip {\n    position: absolute;\n    text-align: center;\n    max-width: 200px;\n    padding: 2px;\n    font-family: ${e.fontFamily};\n    font-size: 12px;\n    background: ${e.tertiaryColor};\n    border: 1px solid ${e.border2};\n    border-radius: 2px;\n    pointer-events: none;\n    z-index: 100;\n  }\n\n  .flowchartTitleText {\n    text-anchor: middle;\n    font-size: 18px;\n    fill: ${e.textColor};\n  }\n`}}]);