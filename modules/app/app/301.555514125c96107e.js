"use strict";(self.webpackChunkwordlift_plugin_app=self.webpackChunkwordlift_plugin_app||[]).push([[301],{7301:(it,h,o)=>{o.r(h),o.d(h,{TermsModule:()=>nt});var c=o(6895),u=o(8176),P=o(7579),f=o(8505),w=o(4351),b=o(9635),A=o(5698),O=o(6150),t=o(4650),J=o(7548),T=o(8800),l=o(13),z=o(545),S=o(5087),N=o(1354),F=o(1723),x=o(5635),C=o(7423),Q=o(5505),I=o(3304),U=o(36),v=o(7570),y=o(4788),m=o(433),_=o(9562),M=o(6616),E=o(7044),R=o(1664);function D(e,s){1&e&&t.GkF(0)}function Y(e,s){if(1&e){const n=t.EpF();t.TgZ(0,"div",22)(1,"p",23),t._uU(2),t.qZA(),t.TgZ(3,"wlx-filters",24),t.NdJ("filterChange",function(r){t.CHM(n);const a=t.oxw();return t.KtG(a.filter=r)})("filterChange",function(){t.CHM(n);const r=t.oxw();return t.KtG(r.cursor.next(""))}),t.qZA()()}if(2&e){const n=t.oxw();t.xp6(2),t.AsE("",n.stats.total," ",n.stats.label,""),t.xp6(1),t.Q6J("filter",n.filter)("stats",n.stats)}}function H(e,s){1&e&&(t._UZ(0,"nz-empty",25),t.TgZ(1,"div",26),t._uU(2,"There are no Terms here yet"),t.qZA()),2&e&&t.Q6J("nzNotFoundContent",null)}function $(e,s){if(1&e){const n=t.EpF();t.TgZ(0,"tr",28)(1,"td"),t._uU(2),t.qZA(),t.TgZ(3,"td",29)(4,"wlx-main-ingredient",30),t.NdJ("onMainIngredientChange",function(r){const g=t.CHM(n).$implicit,d=t.oxw(2);return t.KtG(d.ingredientChange(g,r))})("onStartEdit",function(){const a=t.CHM(n).$implicit,g=t.oxw(2);return t.KtG(g.startEdit(a.id))})("onStopEdit",function(){t.CHM(n);const r=t.oxw(2);return t.KtG(r.stopEdit())}),t.qZA()(),t.TgZ(5,"td"),t._uU(6),t.qZA()()}if(2&e){const n=s.$implicit,i=s.index,r=t.oxw(2);t.xp6(2),t.hij(" ",n.name," "),t.xp6(2),t.Q6J("wlxCyId","AutoCompleteField"+i)("data",n)("editMode",r.editId===n.id),t.xp6(2),t.hij(" ",n.occurrences," ")}}function j(e,s){if(1&e&&(t.TgZ(0,"tbody"),t.YNc(1,$,7,5,"tr",27),t.qZA()),2&e){t.oxw();const n=t.MAs(10);t.xp6(1),t.Q6J("ngForOf",n.data)}}const p=function(){return{rows:1}};function G(e,s){1&e&&(t.TgZ(0,"tr")(1,"td"),t._UZ(2,"nz-skeleton",33),t.qZA(),t.TgZ(3,"td"),t._UZ(4,"nz-skeleton",33),t.qZA(),t.TgZ(5,"td"),t._UZ(6,"nz-skeleton",33),t.qZA()()),2&e&&(t.xp6(2),t.Q6J("nzActive",!0)("nzParagraph",t.DdM(9,p))("nzTitle",!1),t.xp6(2),t.Q6J("nzActive",!0)("nzParagraph",t.DdM(10,p))("nzTitle",!1),t.xp6(2),t.Q6J("nzActive",!0)("nzParagraph",t.DdM(11,p))("nzTitle",!1))}function K(e,s){if(1&e&&(t.TgZ(0,"tbody",31),t.YNc(1,G,7,12,"tr",32),t.qZA()),2&e){const n=t.oxw();t.xp6(1),t.Q6J("ngForOf",n.skeletonRows)}}const V=function(){return[]},L=[{path:"",pathMatch:"full",redirectTo:"terms"},{path:"terms",data:{breadcrumb:"Terms"},component:(()=>{class e{constructor(n,i){this.appSettings=n,this.termMatchesService=i,this.cursor=new P.x,this.editId=null,this.perPage={value:10},this.cursor$=this.cursor.asObservable().pipe((0,f.b)(()=>{this.skeletonRows=Array(this.perPage.value),this.loading=!0}),(0,w.b)(r=>this.termMatchesService.listTermMatches({cursor:r,taxonomies:"category",has_match:this.filter,limit:this.perPage.value,sort:this.sort,term_contains:this.termContains.length>0?this.termContains:void 0})),(0,b.z)((0,f.b)(r=>{this.page=r,this.loading=!1}))),this.visible=!1,this.termContains="",this.loading=!0,this.skeletonRows=[],this.Number=Number,this.stats=n.stats.find(r=>"Terms"===r.label)}ngOnInit(){}reload(){this.skeletonRows=Array(this.perPage.value),this.loading=!0,this.termMatchesService.listTermMatches({taxonomies:"category",has_match:this.filter,limit:this.perPage.value,sort:this.sort}).subscribe(n=>{this.page=n,this.loading=!1})}ingredientChange(n,i){(Number.isInteger(n.match_id)?this.termMatchesService.updateTermMatch({term_id:n.id,match_id:n.match_id,body:i}):this.termMatchesService.createTermMatch({term_id:n.id,body:i})).pipe((0,A.q)(1)).subscribe()}startEdit(n){this.editId=n}stopEdit(){this.editId=null}search(){this.cursor.next("")}reset(){this.termContains="",this.cursor.next("")}onQueryParamsChange(n){const{sort:a}=n,d=a.find(ot=>null!==ot.value),Z=d&&d.key||null;Z&&(this.sort=("descend"===(d&&d.value||null)?"-":"+")+Z),this.reload()}}return e.\u0275fac=function(n){return new(n||e)(t.Y36(O.N),t.Y36(J.a0))},e.\u0275cmp=t.Xpm({type:e,selectors:[["wlx-terms"]],decls:35,vars:20,consts:[[4,"ngIf"],["nz-typography","","id","heading"],["nz-typography","","nzType","secondary","id","description"],["id","filters",4,"ngIf"],["noResult",""],[3,"nzData","nzNoResult","nzShowPagination","nzFrontPagination","nzTotal","nzQueryParams"],["basicTable",""],["nzCustomFilter","","nzColumnKey","term_name",1,"table-header",3,"nzSortFn"],[3,"nzVisible","nzActive","nzDropdownMenu","nzVisibleChange"],["nz-icon","","nzType","search"],["nzColumnKey","entity_name",1,"fixed-size"],["nz-icon","","nzType","question-circle","nzTheme","outline","nz-tooltip","","nzTooltipTitle","The entity matching the taxonomy term.",1,"tooltip"],[1,"small-size"],["nz-icon","","nzType","question-circle","nzTheme","outline","nz-tooltip","","nzTooltipTitle","The number of posts where a term is used.",1,"tooltip"],["wlxHideTablePlaceholder","",4,"ngIf"],["menu","nzDropdownMenu"],[1,"ant-table-filter-dropdown"],[1,"search-box"],["type","text","nz-input","","placeholder","Search name",3,"ngModel","ngModelChange"],["nz-button","","nzSize","small","nzType","primary",1,"search-button",3,"click"],["nz-button","","nzSize","small",3,"click"],["wlxCy","","wlxCyId","TermsPagination",3,"page","cursor","perPage"],["id","filters"],["id","count"],["wlxCy","","wlxCyId","TermsFilters",3,"filter","stats","filterChange"],["nzNotFoundImage","simple",3,"nzNotFoundContent"],[1,"empty-description"],["class","editable-row",4,"ngFor","ngForOf"],[1,"editable-row"],[1,"autocomplete-input-column"],["wlxCy","","searchText","search entity","datasetUri","https://knowledge.cafemedia.com/gardening/",3,"wlxCyId","data","editMode","onMainIngredientChange","onStartEdit","onStopEdit"],["wlxHideTablePlaceholder",""],[4,"ngFor","ngForOf"],["wlxSkeletonWidth","",3,"nzActive","nzParagraph","nzTitle"]],template:function(n,i){if(1&n&&(t.YNc(0,D,1,0,"ng-container",0),t.ALo(1,"async"),t.TgZ(2,"h1",1),t._uU(3,"Terms"),t.qZA(),t.TgZ(4,"p",2),t._uU(5,' For each Term, WordLift matched the entity which appears in the Structured Data "mentions" property. To assign a new entity, click on the name (or on the dash) and start typing to select it from the list. Then click anywhere to confirm the change.\n'),t.qZA(),t.YNc(6,Y,4,4,"div",3),t.YNc(7,H,3,1,"ng-template",null,4,t.W1O),t.TgZ(9,"nz-table",5,6),t.NdJ("nzQueryParams",function(a){return i.onQueryParamsChange(a)}),t.TgZ(11,"thead")(12,"tr")(13,"th",7),t._uU(14," Term "),t.TgZ(15,"nz-filter-trigger",8),t.NdJ("nzVisibleChange",function(a){return i.visible=a}),t._UZ(16,"span",9),t.qZA()(),t.TgZ(17,"th",10),t._uU(18," Matched Entity "),t._UZ(19,"span",11),t.qZA(),t.TgZ(20,"th",12),t._uU(21," Occurrences "),t._UZ(22,"span",13),t.qZA()()(),t.YNc(23,j,2,1,"tbody",0),t.YNc(24,K,2,1,"tbody",14),t.qZA(),t.TgZ(25,"nz-dropdown-menu",null,15)(27,"div",16)(28,"div",17)(29,"input",18),t.NdJ("ngModelChange",function(a){return i.termContains=a}),t.qZA(),t.TgZ(30,"button",19),t.NdJ("click",function(){return i.search()}),t._uU(31," Search "),t.qZA(),t.TgZ(32,"button",20),t.NdJ("click",function(){return i.reset()}),t._uU(33,"Reset"),t.qZA()()()(),t._UZ(34,"wlx-pagination",21)),2&n){const r=t.MAs(8),a=t.MAs(26);t.Q6J("ngIf",t.lcZ(1,17,i.cursor$)),t.xp6(6),t.Q6J("ngIf",i.page),t.xp6(3),t.Q6J("nzData",i.page&&i.page.items?i.page.items:t.DdM(19,V))("nzNoResult",r)("nzShowPagination",!1)("nzFrontPagination",!1)("nzTotal",i.Number.MAX_SAFE_INTEGER),t.xp6(4),t.Q6J("nzSortFn",!0),t.xp6(2),t.Q6J("nzVisible",i.visible)("nzActive",i.termContains.length>0)("nzDropdownMenu",a),t.xp6(8),t.Q6J("ngIf",!i.loading),t.xp6(1),t.Q6J("ngIf",i.loading),t.xp6(5),t.Q6J("ngModel",i.termContains),t.xp6(5),t.Q6J("page",i.page)("cursor",i.cursor)("perPage",i.perPage)}},dependencies:[c.sg,c.O5,T.ZU,l.N8,l.qD,l.Uo,l._C,l.Om,l.p0,l.$Z,l.Ql,z.ng,S.Q,N.l,F.b,x.Zp,C.Ls,Q.N,I.r,U.p,v.SY,y.p9,m.Fj,m.JJ,m.On,_.RR,M.ix,E.w,R.dQ,c.Ov],styles:["wlx-pagination[_ngcontent-%COMP%], #filters[_ngcontent-%COMP%]{width:100%;flex-direction:row;display:flex;align-items:center;margin-bottom:16px}#count[_ngcontent-%COMP%]{font-weight:400;font-size:14px;line-height:24px;color:#00000073;margin:0}.table-header[_ngcontent-%COMP%], .fixed-size[_ngcontent-%COMP%]{font-weight:600;font-size:14px;line-height:22px;color:#000000e0;min-width:464px;width:464px}.small-size[_ngcontent-%COMP%]{font-weight:600;font-size:14px;line-height:22px;color:#000000e0;width:180px;min-width:180px}.tooltip[_ngcontent-%COMP%]{cursor:pointer;margin:4px 3px;color:#00000073}.autocomplete-input-column[_ngcontent-%COMP%]{padding:16px}nz-button-group[_ngcontent-%COMP%]{margin-left:auto}#heading[_ngcontent-%COMP%]{color:#000000e0;font-weight:600;font-size:20px;line-height:32px;font-style:normal;margin-bottom:8px}#description[_ngcontent-%COMP%]{text-align:justify;font-weight:400;font-size:16px;line-height:24px;color:#000000a6;max-width:800px;font-style:normal;margin-bottom:24px}wlx-filters[_ngcontent-%COMP%]{margin-left:auto}.search-box[_ngcontent-%COMP%]{padding:8px}.search-box[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]{width:188px;margin-bottom:8px;display:block}.search-box[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]{width:90px}.search-button[_ngcontent-%COMP%]{margin-right:8px}.ant-btn-sm[_ngcontent-%COMP%]{height:30px}@media only screen and (max-width: 1368px){.table-header[_ngcontent-%COMP%]{min-width:auto;width:auto}}.empty-description[_ngcontent-%COMP%]{color:#00000073;font-size:14px;font-style:normal;font-weight:400;line-height:24px;margin-top:-28px;margin-bottom:24px}td[_ngcontent-%COMP%]{height:66px}"]}),e})()}];let B=(()=>{class e{}return e.\u0275fac=function(n){return new(n||e)},e.\u0275mod=t.oAB({type:e}),e.\u0275inj=t.cJS({imports:[u.Bz.forChild(L),u.Bz]}),e})();var W=o(2271),X=o(8231),k=o(4586),q=o(2383),tt=o(5540);let nt=(()=>{class e{}return e.\u0275fac=function(n){return new(n||e)},e.\u0275mod=t.oAB({type:e}),e.\u0275inj=t.cJS({imports:[c.ez,B,T.ZJ,l.HQ,z.H0,W.m,X.LV,x.o7,k.D,q.ic,C.PV,tt.o,v.cg,y.Xo,m.u5,_.b1,M.sL]}),e})()}}]);