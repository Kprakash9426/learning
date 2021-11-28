(()=>{"use strict";var e={800:(e,t,n)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.config=t.loadMessageBundle=t.localize=t.format=t.setPseudo=t.isPseudo=t.isDefined=t.BundleFormat=t.MessageFormat=void 0;var r,o,i,a=n(926);function s(e){return void 0!==e}function c(e,n){return t.isPseudo&&(e="［"+e.replace(/[aouei]/g,"$&$&")+"］"),0===n.length?e:e.replace(/\{(\d+)\}/g,(function(e,t){var r=t[0],o=n[r],i=e;return"string"==typeof o?i=o:"number"!=typeof o&&"boolean"!=typeof o&&null!=o||(i=String(o)),i}))}(i=t.MessageFormat||(t.MessageFormat={})).file="file",i.bundle="bundle",i.both="both",(o=t.BundleFormat||(t.BundleFormat={})).standalone="standalone",o.languagePack="languagePack",function(e){e.is=function(e){var t=e;return t&&s(t.key)&&s(t.comment)}}(r||(r={})),t.isDefined=s,t.isPseudo=!1,t.setPseudo=function(e){t.isPseudo=e},t.format=c,t.localize=function(e,t){for(var n=[],r=2;r<arguments.length;r++)n[r-2]=arguments[r];return c(t,n)},t.loadMessageBundle=function(e){return a.default().loadMessageBundle(e)},t.config=function(e){return a.default().config(e)}},926:(e,t)=>{var n;function r(){if(void 0===n)throw new Error("No runtime abstraction layer installed");return n}Object.defineProperty(t,"__esModule",{value:!0}),function(e){e.install=function(e){if(void 0===e)throw new Error("No runtime abstraction layer provided");n=e}}(r||(r={})),t.default=r},472:(e,t,n)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.config=t.loadMessageBundle=void 0;var r=n(622),o=n(747),i=n(926),a=n(800),s=n(800);Object.defineProperty(t,"MessageFormat",{enumerable:!0,get:function(){return s.MessageFormat}}),Object.defineProperty(t,"BundleFormat",{enumerable:!0,get:function(){return s.BundleFormat}});var c,l,u=Object.prototype.toString;function d(e){return"[object Number]"===u.call(e)}function g(e){return"[object String]"===u.call(e)}function h(e){return JSON.parse(o.readFileSync(e,"utf8"))}function f(e){return function(t,n){for(var r=[],o=2;o<arguments.length;o++)r[o-2]=arguments[o];return d(t)?t>=e.length?void console.error("Broken localize call found. Index out of bounds. Stacktrace is\n: "+new Error("").stack):a.format(e[t],r):g(n)?(console.warn("Message "+n+" didn't get externalized correctly."),a.format(n,r)):void console.error("Broken localize call found. Stacktrace is\n: "+new Error("").stack)}}function m(e,t){return c[e]=t,t}function p(e){try{return function(e){var t=h(r.join(e,"nls.metadata.json")),n=Object.create(null);for(var o in t){var i=t[o];n[o]=i.messages}return n}(e)}catch(e){return void console.log("Generating default bundle from meta data failed.",e)}}function w(e,t){var n;if(!0===l.languagePackSupport&&void 0!==l.cacheRoot&&void 0!==l.languagePackId&&void 0!==l.translationsConfigFile&&void 0!==l.translationsConfig)try{n=function(e,t){var n,i,a,s=r.join(l.cacheRoot,e.id+"-"+e.hash+".json"),c=!1,u=!1;try{return n=JSON.parse(o.readFileSync(s,{encoding:"utf8",flag:"r"})),i=s,a=new Date,o.utimes(i,a,a,(function(){})),n}catch(e){if("ENOENT"===e.code)u=!0;else{if(!(e instanceof SyntaxError))throw e;console.log("Syntax error parsing message bundle: "+e.message+"."),o.unlink(s,(function(e){e&&console.error("Deleting corrupted bundle "+s+" failed.")})),c=!0}}if(!(n=function(e,t){var n=l.translationsConfig[e.id];if(n){var o=h(n).contents,i=h(r.join(t,"nls.metadata.json")),a=Object.create(null);for(var s in i){var c=i[s],u=o[e.outDir+"/"+s];if(u){for(var d=[],f=0;f<c.keys.length;f++){var m=c.keys[f],p=u[g(m)?m:m.key];void 0===p&&(p=c.messages[f]),d.push(p)}a[s]=d}else a[s]=c.messages}return a}}(e,t))||c)return n;if(u)try{o.writeFileSync(s,JSON.stringify(n),{encoding:"utf8",flag:"wx"})}catch(e){if("EEXIST"===e.code)return n;throw e}return n}(e,t)}catch(e){console.log("Load or create bundle failed ",e)}if(!n){if(l.languagePackSupport)return p(t);var i=function(e){for(var t=l.language;t;){var n=r.join(e,"nls.bundle."+t+".json");if(o.existsSync(n))return n;var i=t.lastIndexOf("-");t=i>0?t.substring(0,i):void 0}if(void 0===t&&(n=r.join(e,"nls.bundle.json"),o.existsSync(n)))return n}(t);if(i)try{return h(i)}catch(e){console.log("Loading in the box message bundle failed.",e)}n=p(t)}return n}function v(e){if(!e)return a.localize;var t=r.extname(e);if(t&&(e=e.substr(0,e.length-t.length)),l.messageFormat===a.MessageFormat.both||l.messageFormat===a.MessageFormat.bundle){var n=function(e){for(var t,n=r.dirname(e);t=r.join(n,"nls.metadata.header.json"),!o.existsSync(t);){var i=r.dirname(n);if(i===n){t=void 0;break}n=i}return t}(e);if(n){var i=r.dirname(n),s=c[i];if(void 0===s)try{var u=JSON.parse(o.readFileSync(n,"utf8"));try{var d=w(u,i);s=m(i,d?{header:u,nlsBundle:d}:null)}catch(e){console.error("Failed to load nls bundle",e),s=m(i,null)}}catch(e){console.error("Failed to read header file",e),s=m(i,null)}if(s){var g=e.substr(i.length+1).replace(/\\/g,"/"),p=s.nlsBundle[g];return void 0===p?(console.error("Messages for file "+e+" not found. See console for details."),function(){return"Messages not found."}):f(p)}}}if(l.messageFormat===a.MessageFormat.both||l.messageFormat===a.MessageFormat.file)try{var v=h(function(e){var t;if(l.cacheLanguageResolution&&t)t=t;else{if(a.isPseudo||!l.language)t=".nls.json";else for(var n=l.language;n;){var r=".nls."+n+".json";if(o.existsSync(e+r)){t=r;break}var i=n.lastIndexOf("-");i>0?n=n.substring(0,i):(t=".nls.json",n=null)}l.cacheLanguageResolution&&(t=t)}return e+t}(e));return Array.isArray(v)?f(v):a.isDefined(v.messages)&&a.isDefined(v.keys)?f(v.messages):(console.error("String bundle '"+e+"' uses an unsupported format."),function(){return"File bundle has unsupported format. See console for details"})}catch(e){"ENOENT"!==e.code&&console.error("Failed to load single file bundle",e)}return console.error("Failed to load message bundle for file "+e),function(){return"Failed to load message bundle. See console for details."}}function C(e){return e&&(g(e.locale)&&(l.locale=e.locale.toLowerCase(),l.language=l.locale,c=Object.create(null)),void 0!==e.messageFormat&&(l.messageFormat=e.messageFormat),e.bundleFormat===a.BundleFormat.standalone&&!0===l.languagePackSupport&&(l.languagePackSupport=!1)),a.setPseudo("pseudo"===l.locale),v}!function(){if(l={locale:void 0,language:void 0,languagePackSupport:!1,cacheLanguageResolution:!0,messageFormat:a.MessageFormat.bundle},g(process.env.VSCODE_NLS_CONFIG))try{var e=JSON.parse(process.env.VSCODE_NLS_CONFIG),t=void 0;if(e.availableLanguages){var n=e.availableLanguages["*"];g(n)&&(t=n)}if(g(e.locale)&&(l.locale=e.locale.toLowerCase()),void 0===t?l.language=l.locale:"en"!==t&&(l.language=t),function(e){return!0===e||!1===e}(e._languagePackSupport)&&(l.languagePackSupport=e._languagePackSupport),g(e._cacheRoot)&&(l.cacheRoot=e._cacheRoot),g(e._languagePackId)&&(l.languagePackId=e._languagePackId),g(e._translationsConfigFile)){l.translationsConfigFile=e._translationsConfigFile;try{l.translationsConfig=h(l.translationsConfigFile)}catch(t){if(e._corruptedFile){var i=r.dirname(e._corruptedFile);o.exists(i,(function(t){t&&o.writeFile(e._corruptedFile,"corrupted","utf8",(function(e){console.error(e)}))}))}}}}catch(e){}a.setPseudo("pseudo"===l.locale),c=Object.create(null)}(),t.loadMessageBundle=v,t.config=C,i.default.install(Object.freeze({loadMessageBundle:v,config:C}))},78:(e,t,n)=>{Object.defineProperty(t,"__esModule",{value:!0});const r=n(549),o=(0,n(472).loadMessageBundle)();t.default=class{constructor(e){this.tracker=e.createTracker("codelens")}begin(e){this.config=e,this.config.enableCodeLens&&this.registerCodeLensProvider()}configurationUpdated(e){!1===e.enableCodeLens&&this.codeLensRegistrationHandle?(this.codeLensRegistrationHandle.dispose(),this.codeLensRegistrationHandle=null):!0!==e.enableCodeLens||this.codeLensRegistrationHandle||this.registerCodeLensProvider(),this.config=e}dispose(){this.codeLensRegistrationHandle&&(this.codeLensRegistrationHandle.dispose(),this.codeLensRegistrationHandle=null)}async provideCodeLenses(e,t){if(!this.config||!this.config.enableCodeLens)return null;let n=await this.tracker.getConflicts(e);const i=n?.length??0;if(r.commands.executeCommand("setContext","mergeConflictsCount",i),!i)return null;let a=[];return n.forEach((e=>{let t={command:"merge-conflict.accept.current",title:o("acceptCurrentChange","Accept Current Change"),arguments:["known-conflict",e]},n={command:"merge-conflict.accept.incoming",title:o("acceptIncomingChange","Accept Incoming Change"),arguments:["known-conflict",e]},i={command:"merge-conflict.accept.both",title:o("acceptBothChanges","Accept Both Changes"),arguments:["known-conflict",e]},s={command:"merge-conflict.compare",title:o("compareChanges","Compare Changes"),arguments:[e]};a.push(new r.CodeLens(e.range,t),new r.CodeLens(e.range.with(e.range.start.with({character:e.range.start.character+1})),n),new r.CodeLens(e.range.with(e.range.start.with({character:e.range.start.character+2})),i),new r.CodeLens(e.range.with(e.range.start.with({character:e.range.start.character+3})),s))})),a}registerCodeLensProvider(){this.codeLensRegistrationHandle=r.languages.registerCodeLensProvider([{scheme:"file"},{scheme:"vscode-vfs"},{scheme:"untitled"},{scheme:"vscode-userdata"}],this)}}},30:(e,t,n)=>{Object.defineProperty(t,"__esModule",{value:!0});const r=n(549),o=n(986),i=(0,n(472).loadMessageBundle)();var a;!function(e){e[e.Forwards=0]="Forwards",e[e.Backwards=1]="Backwards"}(a||(a={})),t.default=class{constructor(e){this.disposables=[],this.tracker=e.createTracker("commands")}begin(){this.disposables.push(this.registerTextEditorCommand("merge-conflict.accept.current",this.acceptCurrent),this.registerTextEditorCommand("merge-conflict.accept.incoming",this.acceptIncoming),this.registerTextEditorCommand("merge-conflict.accept.selection",this.acceptSelection),this.registerTextEditorCommand("merge-conflict.accept.both",this.acceptBoth),this.registerTextEditorCommand("merge-conflict.accept.all-current",this.acceptAllCurrent,this.acceptAllCurrentResources),this.registerTextEditorCommand("merge-conflict.accept.all-incoming",this.acceptAllIncoming,this.acceptAllIncomingResources),this.registerTextEditorCommand("merge-conflict.accept.all-both",this.acceptAllBoth),this.registerTextEditorCommand("merge-conflict.next",this.navigateNext),this.registerTextEditorCommand("merge-conflict.previous",this.navigatePrevious),this.registerTextEditorCommand("merge-conflict.compare",this.compare))}registerTextEditorCommand(e,t,n){return r.commands.registerCommand(e,((...e)=>{if(n&&e.length&&e.every((e=>e&&e.resourceUri)))return n.call(this,e.map((e=>e.resourceUri)));const o=r.window.activeTextEditor;return o&&t.call(this,o,...e)}))}acceptCurrent(e,...t){return this.accept(0,e,...t)}acceptIncoming(e,...t){return this.accept(1,e,...t)}acceptBoth(e,...t){return this.accept(2,e,...t)}acceptAllCurrent(e){return this.acceptAll(0,e)}acceptAllIncoming(e){return this.acceptAll(1,e)}acceptAllCurrentResources(e){return this.acceptAllResources(0,e)}acceptAllIncomingResources(e){return this.acceptAllResources(1,e)}acceptAllBoth(e){return this.acceptAll(2,e)}async compare(e,t){if(!t&&!(t=await this.findConflictContainingSelection(e)))return void r.window.showWarningMessage(i("cursorNotInConflict","Editor cursor is not within a merge conflict"));const n=await this.tracker.getConflicts(e.document);if(!n)return void r.window.showWarningMessage(i("cursorNotInConflict","Editor cursor is not within a merge conflict"));const a=e.document.uri.scheme;let s=t.current.content,c=n.map((e=>[e.current.content,e.range])),l=n.map((e=>[e.incoming.content,e.range]));const u=e.document.uri.with({scheme:o.default.scheme,query:JSON.stringify({scheme:a,range:s,ranges:c})});s=t.incoming.content;const d=u.with({query:JSON.stringify({scheme:a,ranges:l})});let g=0;for(let e of n){if(e.range.isEqual(t.range))break;g+=e.range.end.line-e.range.start.line-(e.incoming.content.end.line-e.incoming.content.start.line)}const h=new r.Range(t.range.start.line-g,t.range.start.character,t.range.start.line-g,t.range.start.character),f=e.document.uri.path,m=f.substring(f.lastIndexOf("/")+1),p=i("compareChangesTitle","{0}: Current Changes ⟷ Incoming Changes",m),w=r.workspace.getConfiguration("merge-conflict").get("diffViewPosition"),v={viewColumn:"Beside"===w?r.ViewColumn.Beside:r.ViewColumn.Active,selection:h};"Below"===w&&await r.commands.executeCommand("workbench.action.newGroupBelow"),await r.commands.executeCommand("vscode.diff",u,d,p,v)}navigateNext(e){return this.navigate(e,a.Forwards)}navigatePrevious(e){return this.navigate(e,a.Backwards)}async acceptSelection(e){let t,n=await this.findConflictContainingSelection(e);if(!n)return void r.window.showWarningMessage(i("cursorNotInConflict","Editor cursor is not within a merge conflict"));let o=n.splitter;if(n.commonAncestors.length>0&&(o=n.commonAncestors[0].header),e.selection.active.isBefore(o.start))t=0;else{if(!e.selection.active.isAfter(n.splitter.end))return e.selection.active.isBefore(n.splitter.start)?void r.window.showWarningMessage(i("cursorOnCommonAncestorsRange",'Editor cursor is within the common ancestors block, please move it to either the "current" or "incoming" block')):void r.window.showWarningMessage(i("cursorOnSplitterRange",'Editor cursor is within the merge conflict splitter, please move it to either the "current" or "incoming" block'));t=1}this.tracker.forget(e.document),n.commitEdit(t,e)}dispose(){this.disposables.forEach((e=>e.dispose())),this.disposables=[]}async navigate(e,t){let n=await this.findConflictForNavigation(e,t);if(n)n.canNavigate?n.conflict&&(e.selection=new r.Selection(n.conflict.range.start,n.conflict.range.start),e.revealRange(n.conflict.range,r.TextEditorRevealType.Default)):r.window.showWarningMessage(i("noOtherConflictsInThisFile","No other merge conflicts within this file"));else{if(r.workspace.getConfiguration("merge-conflict").get("autoNavigateNextConflict.enabled"))return;r.window.showWarningMessage(i("noConflicts","No merge conflicts found in this file"))}}async accept(e,t,...n){let o;o="known-conflict"===n[0]?n[1]:await this.findConflictContainingSelection(t),o?(this.tracker.forget(t.document),o.commitEdit(e,t),r.workspace.getConfiguration("merge-conflict").get("autoNavigateNextConflict.enabled")&&this.navigateNext(t)):r.window.showWarningMessage(i("cursorNotInConflict","Editor cursor is not within a merge conflict"))}async acceptAll(e,t){let n=await this.tracker.getConflicts(t.document);n&&0!==n.length?(this.tracker.forget(t.document),await t.edit((r=>n.forEach((n=>{n.applyEdit(e,t.document,r)}))))):r.window.showWarningMessage(i("noConflicts","No merge conflicts found in this file"))}async acceptAllResources(e,t){const n=await Promise.all(t.map((e=>r.workspace.openTextDocument(e)))),o=new r.WorkspaceEdit;for(const t of n){const n=await this.tracker.getConflicts(t);n&&0!==n.length&&(this.tracker.forget(t),n.forEach((n=>{n.applyEdit(e,t,{replace:(e,n)=>o.replace(t.uri,e,n)})})))}r.workspace.applyEdit(o)}async findConflictContainingSelection(e,t){if(t||(t=await this.tracker.getConflicts(e.document)),!t||0===t.length)return null;for(const n of t)if(n.range.contains(e.selection.active))return n;return null}async findConflictForNavigation(e,t,n){if(n||(n=await this.tracker.getConflicts(e.document)),!n||0===n.length)return null;let r,o,i,s=e.selection.active;if(1===n.length)return n[0].range.contains(s)?{canNavigate:!1}:{canNavigate:!0,conflict:n[0]};if(t===a.Forwards)r=e=>s.isBefore(e.range.start),o=()=>n[0],i=n;else{if(t!==a.Backwards)throw new Error(`Unsupported direction ${t}`);r=e=>s.isAfter(e.range.start),o=()=>n[n.length-1],i=n.slice().reverse()}for(const e of i)if(r(e)&&!e.range.contains(s))return{canNavigate:!0,conflict:e};return{canNavigate:!0,conflict:o()}}}},986:(e,t,n)=>{Object.defineProperty(t,"__esModule",{value:!0});const r=n(549);class o{constructor(e){this.context=e}begin(){this.context.subscriptions.push(r.workspace.registerTextDocumentContentProvider(o.scheme,this))}dispose(){}async provideTextDocumentContent(e){try{const{scheme:t,ranges:n}=JSON.parse(e.query),o=await r.workspace.openTextDocument(e.with({scheme:t,query:""}));let i="",a=new r.Position(0,0);n.forEach((e=>{let[t,n]=e;const[s,c]=t,[l,u]=n;i+=o.getText(new r.Range(a.line,a.character,l.line,l.character)),i+=o.getText(new r.Range(s.line,s.character,c.line,c.character)),a=new r.Position(u.line,u.character)}));let s=o.lineAt(o.lineCount-1).range.end;return i+=o.getText(new r.Range(a.line,a.character,s.line,s.character)),i}catch(e){return await r.window.showErrorMessage("Unable to show comparison"),null}}}t.default=o,o.scheme="merge-conflict.conflict-diff"},286:(e,t)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.Delayer=void 0,t.Delayer=class{constructor(e){this.defaultDelay=e,this.timeout=null,this.completionPromise=null,this.onSuccess=null,this.task=null}trigger(e,t=this.defaultDelay){return this.task=e,t>=0&&this.cancelTimeout(),this.completionPromise||(this.completionPromise=new Promise((e=>{this.onSuccess=e})).then((()=>{this.completionPromise=null,this.onSuccess=null;let e=this.task();return this.task=null,e}))),(t>=0||null===this.timeout)&&(this.timeout=setTimeout((()=>{this.timeout=null,this.onSuccess(void 0)}),t>=0?t:this.defaultDelay)),this.completionPromise}forceDelivery(){if(!this.completionPromise)return null;this.cancelTimeout();let e=this.completionPromise;return this.onSuccess(void 0),e}isTriggered(){return null!==this.timeout}cancel(){this.cancelTimeout(),this.completionPromise=null}cancelTimeout(){null!==this.timeout&&(clearTimeout(this.timeout),this.timeout=null)}}},807:(e,t)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.DocumentMergeConflict=void 0,t.DocumentMergeConflict=class{constructor(e){this.range=e.range,this.current=e.current,this.incoming=e.incoming,this.commonAncestors=e.commonAncestors,this.splitter=e.splitter}commitEdit(e,t,n){return n?(this.applyEdit(e,t.document,n),Promise.resolve(!0)):t.edit((n=>this.applyEdit(e,t.document,n)))}applyEdit(e,t,n){if(0===e){let e=t.getText(this.current.content);this.replaceRangeWithContent(e,n)}else if(1===e){let e=t.getText(this.incoming.content);this.replaceRangeWithContent(e,n)}else if(2===e){const e=t.getText(this.current.content),r=t.getText(this.incoming.content);n.replace(this.range,e.concat(r))}}replaceRangeWithContent(e,t){this.isNewlineOnly(e)?t.replace(this.range,""):t.replace(this.range,e)}isNewlineOnly(e){return"\n"===e||"\r\n"===e}}},387:(e,t,n)=>{Object.defineProperty(t,"__esModule",{value:!0});const r=n(53),o=n(286);class i{constructor(e,t){this.origins=new Set,this.origins.add(t),this.delayTask=new o.Delayer(e)}addOrigin(e){return this.origins.has(e),!1}hasOrigin(e){return this.origins.has(e)}}class a{constructor(e,t){this.parent=e,this.origin=t}getConflicts(e){return this.parent.getConflicts(e,this.origin)}isPending(e){return this.parent.isPending(e,this.origin)}forget(e){this.parent.forget(e)}}t.default=class{constructor(){this.cache=new Map,this.delayExpireTime=0}getConflicts(e,t){let n=this.getCacheKey(e);if(!n)return Promise.resolve(this.getConflictsOrEmpty(e,[t]));let r=this.cache.get(n);return r?r.addOrigin(t):(r=new i(this.delayExpireTime,t),this.cache.set(n,r)),r.delayTask.trigger((()=>{let t=this.getConflictsOrEmpty(e,Array.from(r.origins));return this.cache&&this.cache.delete(n),t}))}isPending(e,t){if(!e)return!1;let n=this.getCacheKey(e);if(!n)return!1;const r=this.cache.get(n);return!!r&&r.hasOrigin(t)}createTracker(e){return new a(this,e)}forget(e){let t=this.getCacheKey(e);t&&this.cache.delete(t)}dispose(){this.cache.clear()}getConflictsOrEmpty(e,t){return r.MergeConflictParser.containsConflict(e)?r.MergeConflictParser.scanDocument(e):[]}getCacheKey(e){return e.uri?e.uri.toString():null}}},53:(e,t,n)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.MergeConflictParser=void 0;const r=n(549),o=n(807),i="<<<<<<<",a="|||||||",s=">>>>>>>";class c{static scanDocument(e){let t=null;const n=[];for(let r=0;r<e.lineCount;r++){const o=e.lineAt(r);if(o&&!o.isEmptyOrWhitespace)if(o.text.startsWith(i)){if(null!==t){t=null;break}t={startHeader:o,commonAncestors:[]}}else if(t&&!t.splitter&&o.text.startsWith(a))t.commonAncestors.push(o);else if(t&&!t.splitter&&"======="===o.text)t.splitter=o;else if(t&&o.text.startsWith(s)){t.endFooter=o;let r=c.scanItemTolMergeConflictDescriptor(e,t);null!==r&&n.push(r),t=null}}return n.filter(Boolean).map((e=>new o.DocumentMergeConflict(e)))}static scanItemTolMergeConflictDescriptor(e,t){if(!t.startHeader||!t.splitter||!t.endFooter)return null;let n=t.commonAncestors[0]||t.splitter;return{current:{header:t.startHeader.range,decoratorContent:new r.Range(t.startHeader.rangeIncludingLineBreak.end,c.shiftBackOneCharacter(e,n.range.start,t.startHeader.rangeIncludingLineBreak.end)),content:new r.Range(t.startHeader.rangeIncludingLineBreak.end,n.range.start),name:t.startHeader.text.substring(i.length+1)},commonAncestors:t.commonAncestors.map(((n,o,i)=>{let s=i[o+1]||t.splitter;return{header:n.range,decoratorContent:new r.Range(n.rangeIncludingLineBreak.end,c.shiftBackOneCharacter(e,s.range.start,n.rangeIncludingLineBreak.end)),content:new r.Range(n.rangeIncludingLineBreak.end,s.range.start),name:n.text.substring(a.length+1)}})),splitter:t.splitter.range,incoming:{header:t.endFooter.range,decoratorContent:new r.Range(t.splitter.rangeIncludingLineBreak.end,c.shiftBackOneCharacter(e,t.endFooter.range.start,t.splitter.rangeIncludingLineBreak.end)),content:new r.Range(t.splitter.rangeIncludingLineBreak.end,t.endFooter.range.start),name:t.endFooter.text.substring(s.length+1)},range:new r.Range(t.startHeader.range.start,t.endFooter.rangeIncludingLineBreak.end)}}static containsConflict(e){if(!e)return!1;let t=e.getText();return t.includes(i)&&t.includes(s)}static shiftBackOneCharacter(e,t,n){if(t.isEqual(n))return t;let o=t.line,i=t.character-1;return i<0&&(o--,i=e.lineAt(o).range.end.character),new r.Position(o,i)}}t.MergeConflictParser=c},330:(e,t,n)=>{Object.defineProperty(t,"__esModule",{value:!0});const r=n(549),o=(0,n(472).loadMessageBundle)();t.default=class{constructor(e,t){this.context=e,this.decorations={},this.decorationUsesWholeLine=!0,this.updating=new Map,this.tracker=t.createTracker("decorator")}begin(e){this.config=e,this.registerDecorationTypes(e),r.window.visibleTextEditors.forEach((e=>this.applyDecorations(e))),r.workspace.onDidOpenTextDocument((e=>{this.applyDecorationsFromEvent(e)}),null,this.context.subscriptions),r.workspace.onDidChangeTextDocument((e=>{this.applyDecorationsFromEvent(e.document)}),null,this.context.subscriptions),r.window.onDidChangeVisibleTextEditors((e=>{e.forEach((e=>this.applyDecorations(e)))}),null,this.context.subscriptions)}configurationUpdated(e){this.config=e,this.registerDecorationTypes(e),r.window.visibleTextEditors.forEach((e=>{this.removeDecorations(e),this.applyDecorations(e)}))}registerDecorationTypes(e){Object.keys(this.decorations).forEach((e=>this.decorations[e].dispose())),this.decorations={},e.enableDecorations&&e.enableEditorOverview&&((e.enableDecorations||e.enableEditorOverview)&&(this.decorations["current.content"]=r.window.createTextEditorDecorationType(this.generateBlockRenderOptions("merge.currentContentBackground","editorOverviewRuler.currentContentForeground",e)),this.decorations["incoming.content"]=r.window.createTextEditorDecorationType(this.generateBlockRenderOptions("merge.incomingContentBackground","editorOverviewRuler.incomingContentForeground",e)),this.decorations["commonAncestors.content"]=r.window.createTextEditorDecorationType(this.generateBlockRenderOptions("merge.commonContentBackground","editorOverviewRuler.commonContentForeground",e))),e.enableDecorations&&(this.decorations["current.header"]=r.window.createTextEditorDecorationType({isWholeLine:this.decorationUsesWholeLine,backgroundColor:new r.ThemeColor("merge.currentHeaderBackground"),color:new r.ThemeColor("editor.foreground"),outlineStyle:"solid",outlineWidth:"1pt",outlineColor:new r.ThemeColor("merge.border"),after:{contentText:" "+o("currentChange","(Current Change)"),color:new r.ThemeColor("descriptionForeground")}}),this.decorations["commonAncestors.header"]=r.window.createTextEditorDecorationType({isWholeLine:this.decorationUsesWholeLine,backgroundColor:new r.ThemeColor("merge.commonHeaderBackground"),color:new r.ThemeColor("editor.foreground"),outlineStyle:"solid",outlineWidth:"1pt",outlineColor:new r.ThemeColor("merge.border")}),this.decorations.splitter=r.window.createTextEditorDecorationType({color:new r.ThemeColor("editor.foreground"),outlineStyle:"solid",outlineWidth:"1pt",outlineColor:new r.ThemeColor("merge.border"),isWholeLine:this.decorationUsesWholeLine}),this.decorations["incoming.header"]=r.window.createTextEditorDecorationType({backgroundColor:new r.ThemeColor("merge.incomingHeaderBackground"),color:new r.ThemeColor("editor.foreground"),outlineStyle:"solid",outlineWidth:"1pt",outlineColor:new r.ThemeColor("merge.border"),isWholeLine:this.decorationUsesWholeLine,after:{contentText:" "+o("incomingChange","(Incoming Change)"),color:new r.ThemeColor("descriptionForeground")}})))}dispose(){Object.keys(this.decorations).forEach((e=>{this.decorations[e].dispose()})),this.decorations={}}generateBlockRenderOptions(e,t,n){let o={};return n.enableDecorations&&(o.backgroundColor=new r.ThemeColor(e),o.isWholeLine=this.decorationUsesWholeLine),n.enableEditorOverview&&(o.overviewRulerColor=new r.ThemeColor(t),o.overviewRulerLane=r.OverviewRulerLane.Full),o}applyDecorationsFromEvent(e){for(const t of r.window.visibleTextEditors)t.document===e&&this.applyDecorations(t)}async applyDecorations(e){if(e&&e.document&&this.config&&(this.config.enableDecorations||this.config.enableEditorOverview)&&!this.updating.get(e))try{this.updating.set(e,!0);let t=await this.tracker.getConflicts(e.document);if(-1===r.window.visibleTextEditors.indexOf(e))return;if(0===t.length)return void this.removeDecorations(e);let n={},o=(e,t)=>{n[e]=n[e]||[],n[e].push(t)};t.forEach((e=>{e.current.decoratorContent.isEmpty||o("current.content",e.current.decoratorContent),e.incoming.decoratorContent.isEmpty||o("incoming.content",e.incoming.decoratorContent),e.commonAncestors.forEach((e=>{e.decoratorContent.isEmpty||o("commonAncestors.content",e.decoratorContent)})),this.config.enableDecorations&&(o("current.header",e.current.header),o("splitter",e.splitter),o("incoming.header",e.incoming.header),e.commonAncestors.forEach((e=>{o("commonAncestors.header",e.header)})))})),Object.keys(n).forEach((t=>{let r=this.decorations[t];r&&e.setDecorations(r,n[t])}))}finally{this.updating.delete(e)}}removeDecorations(e){Object.keys(this.decorations).forEach((t=>{let n=this.decorations[t];n&&e.setDecorations(n,[])}))}}},574:(e,t,n)=>{Object.defineProperty(t,"__esModule",{value:!0});const r=n(549),o=n(387),i=n(78),a=n(30),s=n(986),c=n(330);t.default=class{constructor(e){this.context=e,this.services=[]}begin(){let e=this.createExtensionConfiguration();const t=new o.default;this.services.push(t,new a.default(t),new i.default(t),new s.default(this.context),new c.default(this.context,t)),this.services.forEach((t=>{t.begin&&t.begin instanceof Function&&t.begin(e)})),r.workspace.onDidChangeConfiguration((()=>{this.services.forEach((e=>{e.configurationUpdated&&e.configurationUpdated instanceof Function&&e.configurationUpdated(this.createExtensionConfiguration())}))}))}createExtensionConfiguration(){const e=r.workspace.getConfiguration("merge-conflict"),t=e.get("codeLens.enabled",!0),n=e.get("decorators.enabled",!0);return{enableCodeLens:t,enableDecorations:n,enableEditorOverview:n}}dispose(){this.services.forEach((e=>e.dispose())),this.services=[]}}},747:e=>{e.exports=require("fs")},622:e=>{e.exports=require("path")},549:e=>{e.exports=require("vscode")}},t={};function n(r){var o=t[r];if(void 0!==o)return o.exports;var i=t[r]={exports:{}};return e[r](i,i.exports,n),i.exports}var r={};(()=>{var e=r;Object.defineProperty(e,"__esModule",{value:!0}),e.deactivate=e.activate=void 0;const t=n(574);e.activate=function(e){const n=new t.default(e);n.begin(),e.subscriptions.push(n)},e.deactivate=function(){}})();var o=exports;for(var i in r)o[i]=r[i];r.__esModule&&Object.defineProperty(o,"__esModule",{value:!0})})();
//# sourceMappingURL=https://ticino.blob.core.windows.net/sourcemaps/ccbaa2d27e38e5afa3e5c21c1c7bef4657064247/extensions/merge-conflict/dist/mergeConflictMain.js.map