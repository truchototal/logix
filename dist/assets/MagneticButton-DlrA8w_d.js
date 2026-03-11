import{c as v}from"./index-B23Rq2RY.js";import{r,j as k}from"./ui-vendor-CahsZUOH.js";import{u as i,a as u,m as B}from"./animation-BJS9E2mD.js";/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const R=v("Bot",[["path",{d:"M12 8V4H8",key:"hb8ula"}],["rect",{width:"16",height:"12",x:"4",y:"8",rx:"2",key:"enze0r"}],["path",{d:"M2 14h2",key:"vft8re"}],["path",{d:"M20 14h2",key:"4cs60a"}],["path",{d:"M15 13v2",key:"1xurst"}],["path",{d:"M9 13v2",key:"rq6x2g"}]]),X=({children:p,className:l="",style:d={},strength:n=.3,as:C="div",...h})=>{const o=r.useRef(null),e=i(0),t=i(0),a={damping:20,stiffness:300,mass:.5},M=u(e,a),m=u(t,a),f=r.useCallback(c=>{if(!o.current)return;const s=o.current.getBoundingClientRect(),g=s.left+s.width/2,y=s.top+s.height/2;e.set((c.clientX-g)*n),t.set((c.clientY-y)*n)},[n,e,t]),x=r.useCallback(()=>{e.set(0),t.set(0)},[e,t]);return k.jsx(B.div,{ref:o,className:l,style:{...d,x:M,y:m},onMouseMove:f,onMouseLeave:x,...h,children:p})};export{R as B,X as M};
