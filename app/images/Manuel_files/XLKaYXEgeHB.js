/*!CK:2312918844!*//*1420430771,*/

if (self.CavalryLogger) { CavalryLogger.start_js(["F0cgP"]); }

__d("LeftNavDragNUX.react",["ContextualDialog","ContextualDialogArrow","LayerAutoFocus","LayerRefocusOnHide","ReactLayer","React","cx","fbt","LEGACY_getSiblingByRef"],function(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o){"use strict";var p=l.PropTypes,q=k.createClass({displayName:'LeftNavDragNUX',createLayer:function(s){var t=this.props.nuxType!=='remove'?"_53lz":"_53l-",u=this.getContextNode(),v={wrapperClassName:t,arrowDimensions:{offset:14,length:18}},w={alignment:this.props.alignment,arrowBehavior:h,context:u,offsetX:this.props.offsetX,offsetY:this.props.offsetY,position:this.props.position,theme:v},x=new g(w,s);x.disableBehavior(i);x.disableBehavior(j);x.conditionShow(this.props.shown);return x;},receiveProps:function(s){var t=this.getContextNode();this.layer.setContext(t);this.layer.setPosition(s.position).setAlignment(s.alignment).setOffsetX(s.offsetX).setOffsetY(s.offsetY).conditionShow(s.shown);},getContextNode:function(){var s=o(this.props.owner,this.props.contextRef);return s&&s.getDOMNode();}}),r=l.createClass({displayName:"LeftNavDragNUX",propTypes:{contextRef:p.string,nuxType:p.oneOf(['add','sort','remove',null,(void 0)]),alignment:p.oneOf(['left','center','right']),offsetX:p.number,offsetY:p.number},render:function(){var s=this.props,t=s.nuxType,u=(function(w,x){var y={},z=Object.prototype.hasOwnProperty;if(w==null)throw new TypeError();for(var aa in w)if(z.call(w,aa)&&!z.call(x,aa))y[aa]=w[aa];return y;})(s,{nuxType:1}),v=null;switch(t){case 'add':v="Add to Favourites";break;case 'sort':v="Rearrange";break;case 'remove':v="Remove from favourites";break;case null:return null;case undefined:return null;}return (l.createElement(q,l.__spread({},u,{className:"dragTooltip",shown:t!==null,owner:this,nuxType:t}),v));}});e.exports=r;},null);