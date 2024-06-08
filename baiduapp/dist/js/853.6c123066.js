"use strict";(self.webpackChunkvue=self.webpackChunkvue||[]).push([[853],{7644:function(e,i,t){t.d(i,{Z:function(){return h}});t(7658);var s=t(4738),r=t(1579),l=t.n(r),a=t(5017);var o={name:"FolderList",mixins:[{props:{folderVisible:{type:Boolean,default:!1},isCheckBox:{type:Boolean,default:!1},folderLoading:{type:Boolean,default:!1},isNetDisk:{type:Boolean,default:!1},folderList:{type:Array,default:()=>[]},prohibitRoll:{type:Boolean,default:!1},title:{type:String,default:""}},data(){return{dialogVisible:!1,checkedRadioFiles:"",checkedFiles:[],checkedFilesData:[],isIndeterminate:!1,checkAll:!1,pageNum:1,pageSize:50,start:0,directoryHierarchy:[],pathList:[],netDiskFileIcon:a.aE}},computed:{},watch:{folderVisible(){this.dialogVisible=this.folderVisible},folderList:{handler(){this.initFilesFsId()},deep:!0}},filters:{},created(){},mounted(){this.initFilesFsId()},methods:{bottomingListOutLoad(e){if(!this.folderVisible)return;let i=e.target.scrollHeight,t=e.target.clientHeight;i-(e.target.scrollTop+t)==0&&this.bottomingOutLoad()},initFilesFsId(){if(0!==this.folderList.length){this.checkedFilesData=[];for(const e of this.folderList)this.checkedFilesData.push(e.fs_id)}},handleCheckedRadioChange(e){this.checkedRadioFiles=e},handleCheckAllChange(e){this.checkedFiles=e?this.checkedFilesData:[],this.isIndeterminate=!1},handleCheckedFilesChange(e){let i=e.length;this.checkAll=i===this.checkedFilesData.length,this.isIndeterminate=i>0&&i<this.checkedFilesData.length},enterSubFolder(e){if(0===e.isdir||0===e.is_dir)return;this.pageNum=1,this.start=0,this.pageSize=50;let i=e.path.split("/"),t=this.directoryHierarchy.concat(i[i.length-1]),s=this.pathList.concat(e.path);this.directoryHierarchy=t,this.pathList=s,this.$emit("enter-sub-folder",{path:e.path,isNetDisk:this.isNetDisk})},goBackDirectory(){0!==this.directoryHierarchy.length&&0!==this.pathList.length&&(this.pageNum=1,this.start=0,this.pageSize=50,1===this.directoryHierarchy.length?(this.directoryHierarchy=[],this.pathList=[],this.$emit("all-directory-files",{path:"/",isNetDisk:this.isNetDisk})):(this.directoryHierarchy.pop(),this.pathList.pop(),this.$emit("go-back-directory",{path:this.pathList[this.pathList.length-1],isNetDisk:this.isNetDisk})))},allDirectoryFiles(){this.pageNum=1,this.start=0,this.pageSize=50,this.directoryHierarchy=[],this.pathList=[],this.$emit("all-directory-files",{path:"/",isNetDisk:this.isNetDisk})},deleteIndex(e){this.pageNum=1,this.start=0,this.pageSize=50,e!==this.directoryHierarchy.length-1?(this.directoryHierarchy.splice(e+1,this.directoryHierarchy.length-1),this.$emit("delete-index",{path:this.pathList[e],isNetDisk:this.isNetDisk}),this.pathList.splice(e+1,this.pathList.length-1)):(0,s.y)({message:"当前已在该目录下",type:"warning"})},bottomingOutLoad:l().debounce((function(){this.prohibitRoll||(this.pageSize=50,this.isNetDisk?this.pageNum=this.pageNum+1:this.start=this.start+this.pageSize,this.$emit("bottoming-out-load",{params:{dir:0===this.pathList.length?"/":this.pathList[this.pathList.length-1],web:1,order:"time",desc:1,page:this.isNetDisk?this.pageNum:this.start,num:this.pageSize},isNetDisk:this.isNetDisk}))}),300),closeFolder(){this.close()},close(){this.$emit("close-modal"),this.common()},confirm(){this.isCheckBox?this.checkBoxFiles():this.radioFile(),this.common()},radioFile(){let e="",i="",t="",r=0;if(0!==this.folderList.length&&""!==this.checkedRadioFiles)for(const s of this.folderList)s.fs_id===this.checkedRadioFiles&&(e=s.path,i=s.size,t=s.fs_id,r=s.is_dir||s.isdir);else e=0===this.pathList.length?"/":this.pathList[this.pathList.length-1];"/"!==e?this.$emit("confirm-modal",{path:e,size:i,isNetDisk:this.isNetDisk,fs_id:t,isDir:r}):(0,s.y)({message:"请选择目标文件夹",type:"warning"})},checkBoxFiles(){if(0===this.checkedFiles.length&&0!==this.folderList.length)return void(0,s.y)({message:"请选择目标文件夹",type:"warning"});if(0===this.checkedFiles.length&&0===this.folderList.length)return void(0,s.y)({message:"请选择目标文件",type:"warning"});let e=[],i=0;for(const t of this.folderList)for(const s of this.checkedFiles)t.fs_id+""==s+""&&(i+=t.size,e.push({path:t.path,size:t.size,fsId:t.fs_id,isDir:void 0!==t.is_dir?t.is_dir:t.isdir}));this.$emit("confirm-modal",{isCheckBox:this.isCheckBox,size:i,list:e})},common(){this.$emit("update:folderVisible",!1),this.$emit("update:isNetDisk",!1),this.$emit("update:folderList",[]),this.checkedRadioFiles="",this.checkedFiles=[],this.pageNum=1,this.start=0,this.isIndeterminate=!1,this.checkAll=!1,this.pageSize=50,this.directoryHierarchy=[],this.pathList=[],this.checkedFilesData=[]}}}],components:{folderRouting:t(4429).Z}},h=(0,t(1001).Z)(o,(function(){var e=this,i=e._self._c;return i("div",{staticClass:"folder-list"},[i("el-dialog",{attrs:{title:e.title,visible:e.dialogVisible,"close-on-click-modal":!1,"close-on-press-escape":!1,"destroy-on-close":!0},on:{"update:visible":function(i){e.dialogVisible=i},close:e.closeFolder}},[i("div",{staticClass:"folder-list-dialog"},[i("div",{staticClass:"f-l-header"},[i("folder-routing",{attrs:{directoryHierarchy:e.directoryHierarchy},on:{"go-back-directory-change":e.goBackDirectory,"all-directory-files-change":e.allDirectoryFiles,"delete-directory-change":e.deleteIndex}})],1),i("div",{directives:[{name:"loading",rawName:"v-loading",value:e.folderLoading,expression:"folderLoading"}],staticClass:"f-l-body"},[i("div",{directives:[{name:"show",rawName:"v-show",value:!e.isCheckBox,expression:"!isCheckBox"}],staticClass:"single-choice"},[[i("el-radio-group",{on:{change:e.handleCheckedRadioChange},model:{value:e.checkedRadioFiles,callback:function(i){e.checkedRadioFiles=i},expression:"checkedRadioFiles"}},[i("ul",{directives:[{name:"show",rawName:"v-show",value:0!==e.folderList.length,expression:"folderList.length !== 0"}],staticClass:"folder-data-ul",on:{scroll:function(i){return e.bottomingListOutLoad(i)}}},e._l(e.folderList,(function(s,r){return i("li",{key:r,class:[0===r?"li-first-child":"","folder-data-li"]},[i("el-radio",{attrs:{label:s.fs_id}},[i("div")]),i("div",{staticClass:"folder-file-name",on:{click:function(i){return e.enterSubFolder(s)}}},[i("div",{staticClass:"folder-list-folder-img"},[i("el-image",{directives:[{name:"show",rawName:"v-show",value:1===s.isdir||1===s.is_dir,expression:"item.isdir === 1 || item.is_dir === 1"}],attrs:{src:t(9382)}}),i("el-image",{directives:[{name:"show",rawName:"v-show",value:1!==s.isdir&&1!==s.is_dir,expression:"item.isdir !== 1 && item.is_dir !== 1"}],attrs:{src:e.netDiskFileIcon[s.category]}})],1),i("div",{staticClass:"folder-file-name__text"},[e._v(" "+e._s(s.server_filename||s.file_name)+" ")])])],1)})),0),i("div",{directives:[{name:"show",rawName:"v-show",value:0===e.folderList.length,expression:"folderList.length === 0"}],staticClass:"folder-no-data"},[i("span",[e._v("暂无数据")])])])]],2),i("div",{directives:[{name:"show",rawName:"v-show",value:e.isCheckBox,expression:"isCheckBox"}],staticClass:"multiple-choice"},[i("div",{staticClass:"mc-btn"},[i("el-checkbox",{attrs:{indeterminate:e.isIndeterminate},on:{change:e.handleCheckAllChange},model:{value:e.checkAll,callback:function(i){e.checkAll=i},expression:"checkAll"}},[e._v("全选")])],1),[i("el-checkbox-group",{on:{change:e.handleCheckedFilesChange},model:{value:e.checkedFiles,callback:function(i){e.checkedFiles=i},expression:"checkedFiles"}},[i("ul",{staticClass:"folder-data-ul",on:{scroll:function(i){return e.bottomingListOutLoad(i)}}},e._l(e.folderList,(function(s,r){return i("li",{key:r,class:[0===r?"li-first-child":"","folder-data-li"]},[i("el-checkbox",{attrs:{label:s.fs_id}},[i("div")]),i("div",{staticClass:"folder-file-name",on:{click:function(i){return e.enterSubFolder(s)}}},[i("div",{staticClass:"folder-list-folder-img"},[i("el-image",{directives:[{name:"show",rawName:"v-show",value:1===s.isdir||1===s.is_dir,expression:"item.isdir === 1 || item.is_dir === 1"}],attrs:{src:t(9382)}}),i("el-image",{directives:[{name:"show",rawName:"v-show",value:1!==s.isdir&&1!==s.is_dir,expression:"item.isdir !== 1 && item.is_dir !== 1"}],attrs:{src:e.netDiskFileIcon[s.category]}})],1),i("div",{staticClass:"folder-file-name__text"},[e._v(" "+e._s(s.server_filename||s.file_name)+" ")])])],1)})),0),i("div",{directives:[{name:"show",rawName:"v-show",value:0===e.folderList.length,expression:"folderList.length === 0"}],staticClass:"folder-no-data"},[i("span",[e._v("暂无数据")])])])]],2)]),i("div",{staticClass:"f-l-footer"},[i("div",{staticClass:"cancel common",on:{click:e.close}},[e._v("取消")]),i("div",{staticClass:"confirm common",on:{click:e.confirm}},[e._v("确认")])])])])],1)}),[],!1,null,"6c6fee13",null).exports},4429:function(e,i,t){t.d(i,{Z:function(){return r}});var s={name:"FolderRouting",mixins:[{props:{directoryHierarchy:{type:Array,default:()=>[]},maxWidth:{type:Number,default:80}},data(){return{}},computed:{},watch:{},filters:{},created(){},mounted(){},beforeDestroy(){},methods:{goBackDirectoryChange(){this.$emit("go-back-directory-change")},allDirectoryFilesChange(){this.$emit("all-directory-files-change")},deleteDirectoryChange(e){this.$emit("delete-directory-change",e)}}}],components:{}},r=(0,t(1001).Z)(s,(function(){var e=this,i=e._self._c;return i("div",{staticClass:"files-directory-content"},[i("div",{directives:[{name:"show",rawName:"v-show",value:0===e.directoryHierarchy.length,expression:"directoryHierarchy.length === 0"}],staticClass:"all-files"},[e._v("文件")]),i("div",{directives:[{name:"show",rawName:"v-show",value:e.directoryHierarchy.length>0,expression:"directoryHierarchy.length > 0"}],staticClass:"files-directory-title"},[i("div",{staticClass:"fixed-directory"},[i("div",{class:[e.directoryHierarchy.length>0?"back-color":"","fixed-directory__text"],on:{click:e.goBackDirectoryChange}},[e._v("返回上一级 ")]),i("img",{staticClass:"fixed-directory__img",attrs:{src:t(7987),alt:""}}),i("div",{class:[e.directoryHierarchy.length>0?"back-color":"","fixed-directory__text"],on:{click:e.allDirectoryFilesChange}},[e._v("文件 ")])]),i("img",{directives:[{name:"show",rawName:"v-show",value:e.directoryHierarchy.length>0,expression:"directoryHierarchy.length > 0"}],staticClass:"directory-img",attrs:{src:t(6498),alt:""}}),i("div",{directives:[{name:"show",rawName:"v-show",value:e.directoryHierarchy.length>3,expression:"directoryHierarchy.length > 3"}],staticClass:"directory-hide"},[e._v("...")]),i("img",{directives:[{name:"show",rawName:"v-show",value:e.directoryHierarchy.length>3,expression:"directoryHierarchy.length > 3"}],staticClass:"directory-img",attrs:{src:t(6498),alt:""}}),i("ul",{staticClass:"directory-ul"},e._l(e.directoryHierarchy,(function(s,r){return i("li",{directives:[{name:"show",rawName:"v-show",value:e.directoryHierarchy.length<4,expression:"directoryHierarchy.length < 4"}],key:r,staticClass:"directory-li",on:{click:function(i){return e.deleteDirectoryChange(r)}}},[i("img",{directives:[{name:"show",rawName:"v-show",value:e.directoryHierarchy.length>1&&0!==r,expression:"directoryHierarchy.length > 1 && index !== 0"}],staticClass:"directory-img",attrs:{src:t(6498),alt:""}}),i("div",{class:[e.directoryHierarchy.length-1===r&&e.directoryHierarchy.length>0?"last-item":"directory-li__text","text-default"],style:{maxWidth:e.maxWidth+"px"}},[e._v(" "+e._s(s)+" ")])])})),0),i("ul",{staticClass:"directory-ul"},e._l(e.directoryHierarchy,(function(s,r){return i("li",{directives:[{name:"show",rawName:"v-show",value:e.directoryHierarchy.length>3&&r>=e.directoryHierarchy.length-3,expression:"directoryHierarchy.length > 3\n                    && (index >= directoryHierarchy.length - 3)"}],key:r,staticClass:"directory-li",on:{click:function(i){return e.deleteDirectoryChange(r)}}},[i("img",{directives:[{name:"show",rawName:"v-show",value:r>e.directoryHierarchy.length-3,expression:"index > directoryHierarchy.length - 3"}],staticClass:"directory-img",attrs:{src:t(6498),alt:""}}),i("div",{class:[e.directoryHierarchy.length-1===r&&e.directoryHierarchy.length>1?"last-item":"directory-li__text","text-default"],style:{maxWidth:e.maxWidth+"px"}},[e._v(" "+e._s(s)+" ")])])})),0)])])}),[],!1,null,"7ffdfb0f",null).exports},3723:function(e,i,t){t.d(i,{Z:function(){return o}});t(7658);function s(){return(new Date).getTime().toString().substring(7)+r(9)}function r(e){e=e>16?16:e;let i=Math.random().toString();return"0"===i.substr(i.length-e,1)?r(e):i.substring(i.length-e)}var l=t(1579),a=t.n(l);var o={props:{},data(){return{isOpenFolder:!1,folderList:[],pollingFolderList:[],folderLoadingStatus:!1,isProhibitRoll:!1,folderModuleTitle:"",isNetDisk:!1,isSeparateFolder:!0,pollingNetDiskPageNum:1,pollingSynologyPageNum:0}},computed:{...(0,t(6923).Se)({getDeviceId:"userStore/getDeviceId"})},watch:{},filters:{},created(){},mounted(){},beforeDestroy(){},methods:{newSynologyFolder(e){this.folderLoadingStatus=!0,this.isSeparateFolder?this.pollingFolder(e,"queryNasFilesList"):this.queryFiles(e,"queryNasFilesList")},newNetDiskFolder(e){this.folderLoadingStatus=!0,this.isSeparateFolder?this.pollingFolder(e,"queryPersonalNetDiskFilesList"):this.queryFiles(e,"queryPersonalNetDiskFilesList")},queryFiles(e,i){this.$api.article[i](e).then((i=>{try{if(this.folderLoadingStatus=!0,200===i.status&&0===i.data.errno){if(this.isNetDisk)this.folderList=i.data.list;else{let e=[],t=a().cloneDeep(i.data.list);for(const i of t)i.fs_id=s(),e.push(i);this.folderList=e}let t=e.num||e.limit;i.data.list.length<=t&&(this.isProhibitRoll=!0)}this.folderLoadingStatus=!1,this.isProhibitRoll=!1}catch(e){this.isProhibitRoll=!1,this.folderLoadingStatus=!1}})).catch((e=>{this.isProhibitRoll=!1,this.folderLoadingStatus=!1}))},pollingFolder(e,i,t=!1){this.folderLoadingStatus=!0;let r=e.limit||e.num;this.$api.article[i](e).then((l=>{try{if(this.folderLoadingStatus=!0,200===l.status&&0===l.data.errno&&0!==l.data.list.length){let a=[],o=[];for(const e of l.data.list)l.data.list.length<=r-1&&o.push(e),this.isNetDisk?1===e.isdir&&a.length+this.pollingFolderList.length<r&&a.push(e):1===e.is_dir&&a.length+this.pollingFolderList.length<r&&(e.fs_id=s(),a.push(e));l.data.list.length<=r-1&&o.length+this.pollingFolderList.length<r&&(this.isProhibitRoll=!0);let h=this.pollingFolderList.concat(a),d=new Map;if(this.isNetDisk)for(let e of h)d.set(e.fs_id,e);else for(let e of h)d.set(e.path,e);if(this.pollingFolderList=[...d.values()],this.pollingFolderList.length<r&&l.data.list.length>r-1)return void(this.isNetDisk?(this.pollingNetDiskPageNum=this.pollingNetDiskPageNum+1,this.pollingFolder({dir:e.dir,web:1,order:"time",desc:1,page:this.pollingNetDiskPageNum,num:r},i,t)):(this.pollingSynologyPageNum=this.pollingSynologyPageNum+r,this.pollingFolder({device_id:e.device_id,path:e.path,fs_id:0,start:this.pollingSynologyPageNum,limit:r},i,t)));this.folderList=this.pollingFolderList}0===l.data.list.length&&(this.isProhibitRoll=!0),this.dataProcessing(t,l.data.list)}catch(e){this.dataProcessing(t,l.data.list)}})).catch((e=>{this.dataProcessing(t,[])}))},dataProcessing(e,i){e||0!==i.length||(this.folderList=[]),this.folderLoadingStatus=!1,this.pollingFolderList=[],this.isNetDisk?this.pollingNetDiskPageNum=this.pollingNetDiskPageNum>1?this.pollingNetDiskPageNum-1:1:this.pollingSynologyPageNum=this.pollingSynologyPageNum>0?this.pollingSynologyPageNum-1:0,this.isProhibitRoll&&(this.pollingNetDiskPageNum=1,this.pollingSynologyPageNum=0)},enterTargetFolder(e){this.pollingNetDiskPageNum=1,this.pollingSynologyPageNum=0,e.isNetDisk?this.newNetDiskFolder({dir:e.path,web:1,order:"time",desc:1,page:1,num:50}):this.newSynologyFolder({device_id:this.getDeviceId,path:e.path,fs_id:0,start:0,limit:50})},bottomingOutLoad(e){if(this.isSeparateFolder){if(e.isNetDisk)return void this.pollingFolder(e.params,"queryPersonalNetDiskFilesList",!0);this.pollingFolder({device_id:this.getDeviceId,path:e.params.dir,fs_id:0,start:2===e.params.page?1:e.params.page,limit:e.params.num},"queryNasFilesList",!0)}else{if(e.isNetDisk)return void this.filesOutLoad(e.params,"queryPersonalNetDiskFilesList");this.filesOutLoad({device_id:this.getDeviceId,path:e.params.dir,fs_id:0,start:2===e.params.page?1:e.params.page,limit:e.params.num},"queryNasFilesList")}},filesOutLoad(e,i){this.folderLoadingStatus=!0,this.$api.article[i](e).then((e=>{try{if(this.folderLoadingStatus=!0,200===e.status&&0===e.data.errno){let i=new Map;if(this.isNetDisk){let t=this.folderList.concat(e.data.list);for(let e of t)i.set(e.fs_id,e)}else{let t=a().cloneDeep(e.data.list),r=[];for(const e of t)e.fs_id=s(),r.push(e);let l=this.folderList.concat(r);for(let e of l)i.set(e.path,e)}this.folderList=[...i.values()],this.isProhibitRoll=0===e.data.list.length||e.data.list.length<=49}this.folderLoadingStatus=!1}catch(e){this.isProhibitRoll=!1,this.folderLoadingStatus=!1}})).catch((e=>{this.isProhibitRoll=!1,this.folderLoadingStatus=!1}))},clearFolderData(){this.isProhibitRoll=!1,this.folderLoadingStatus=!1,this.folderList=[],this.isNetDisk=!1,this.isSeparateFolder=!0,this.folderModuleTitle="",this.isOpenFolder=!1,this.pollingFolderList=[],this.pollingNetDiskPageNum=1,this.pollingSynologyPageNum=0}}}},4288:function(e,i,t){const s={props:{},data(){return{}},computed:{},watch:{},filters:{},created(){},mounted(){},beforeDestroy(){},methods:{...(0,t(6923).nv)({transferTimerPayment:"paymentStore/transferTimerPayment"}),openNasMember(e){this.transferTimerPayment(e)}}};i.Z=s},9382:function(e,i,t){e.exports=t.p+"img/folder.65a2fafc.svg"},6498:function(e,i,t){e.exports=t.p+"img/route.247f0d13.svg"},7987:function(e,i,t){e.exports=t.p+"img/vertical_bar.8d03c390.svg"}}]);