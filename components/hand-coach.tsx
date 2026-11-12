"use client";
import {useEffect,useId,useRef} from "react";

import {keyInfo} from "@/lib/curriculum";
import {FINGER_HOME,KEY_RECTS,positionOf} from "@/lib/keyboard-model";
type Point={x:number;y:number};
const keyLabel=(key:string)=>key===" "?"SPACE":key==="ShiftR"?"shift":key==="CmdR"?"⌘":key==="AltR"?"alt":key==="Left"?"←":key==="Down"?"↓":key==="Right"?"→":key==="Cmd"?"⌘":key.length===1?key.toUpperCase():key.toLowerCase();
export default function HandCoach({char="f",movement=0,feedback="idle",actual="",showHands=true,paused=false,demo=false,showRoute=true,quiet=false}:{char?:string;movement?:number;feedback?:"idle"|"correct"|"error";actual?:string;showHands?:boolean;paused?:boolean;demo?:boolean;showRoute?:boolean;quiet?:boolean}){
 const svg=useRef<SVGSVGElement>(null),arrowId=useId().replace(/:/g,"");
 useEffect(()=>{try{if(paused)svg.current?.pauseAnimations();else svg.current?.unpauseAnimations()}catch{}},[paused]);
 const info=keyInfo(char),activeId=info.finger?.id??-1;const target=positionOf(char);const secondary=info.shift&&activeId>=0?(activeId<4?7:0):-1;const shiftKey=activeId<4?"ShiftR":"Shift";
 const pressed=movement===2;const wrong=actual?positionOf(actual):null;
 function route(a:Point,b:Point){const middle={x:(a.x+b.x)/2,y:Math.min(a.y,b.y)-27};return `M ${a.x} ${a.y} Q ${middle.x} ${middle.y} ${b.x} ${b.y}`}
 const home=activeId>=0?FINGER_HOME[activeId]:target;
 const origin=home;
 const assetNames:Record<string,string>={' ':'space',';':'semicolon',"'":'single-quote',',':'comma','.':'dot','/':'slash','[':'left-center-bracket',']':'right-center-bracket','\\':'backslash','-':'minus','=':'equal','`':'tilda','Enter':'enter','Shift':'shift-left','ShiftR':'shift-right'};
 const gesture=(key:string)=>'/images/hands/hand-'+(assetNames[key]||key.toLowerCase())+'.svg';
 const posed=!demo||movement===1||movement===2;
 const poseKey=posed?info.base:(info.finger?.home==='Space'?' ':info.finger?.home.toLowerCase()||'f');
 const leftPose=activeId<=3&&activeId>=0||activeId===8?gesture(poseKey):secondary===0?gesture('Shift'):'/images/hands/hand-neutral-left.svg';
 const rightPose=activeId>=4&&activeId<=7?gesture(poseKey):secondary===7?gesture('ShiftR'):'/images/hands/hand-neutral-right.svg';
 const point=movement===1||movement===2?target:origin;
 return <div className={"hand-coach "+(showHands?"with-hands":"keys-only")} data-paused={paused} data-movement={movement} data-target={char}>
 <svg ref={svg} viewBox={showHands?"0 0 960 500":"0 0 960 240"} role="img" aria-label={info.finger?`${info.finger.name}：从 ${info.finger.home==='Space'?'空格':info.finger.home} 到 ${char===' '?'空格':char.toUpperCase()}，按下后回位`:'按原文输入字符'}>
 <defs><linearGradient id={`${arrowId}board`} x1="0" y1="0" x2="0" y2="1"><stop stopColor="#fff"/><stop offset="1" stopColor="#f4f5f1"/></linearGradient><marker id={`${arrowId}arrow`} viewBox="0 0 8 8" refX="6" refY="4" markerWidth="5" markerHeight="5" orient="auto"><path d="M1 1L6 4L1 7" fill="none" stroke="currentColor" strokeWidth="1.5"/></marker></defs>
 <rect className="keyboard-case-shadow" x="15" y="10" width="932" height="219" rx="15"/>
 <rect className="keyboard-case" x="10" y="7" width="936" height="218" rx="14" fill={`url(#${arrowId}board)`}/>
 <g className="model-keys">{KEY_RECTS.map((k,i)=>{const active=(char==='\n'&&k.key==='Enter')||k.key===info.base||(info.shift&&k.key===shiftKey);const missed=feedback==='error'&&actual&&k.key===keyInfo(actual).base;return <g className={`model-key ${active?'target-model-key':''} ${missed?'wrong-model-key':''}`} key={i} data-key={k.key} data-highlighted={active?'true':'false'}><rect className="key-depth" x={k.x} y={k.y+3} width={k.width} height={k.height} rx="5"/><rect className="key-face" x={k.x} y={k.y} width={k.width} height={k.height} rx="5"/><text x={k.x+k.width/2} y={k.y+22} textAnchor="middle" fontSize={k.key.length>1?10:12}>{keyLabel(k.key)}</text>{['f','j'].includes(k.key)&&<path d={`M ${k.x+k.width/2-4} ${k.y+29} h 8`} className="anchor-bump"/>}</g>})}</g>
 {showHands&&<g className="hands-drawing sourced-hands" aria-label="卡通指法示意"><image href={leftPose} x="-176" y="-185" width="1432.6" height="760"/><image href={rightPose} x="-176" y="-185" width="1432.6" height="760"/></g>}

 {showRoute&&activeId>=0&&Math.hypot(target.x-origin.x,target.y-origin.y)>10&&<g className="movement-route"><circle cx={origin.x} cy={origin.y} r="4"/><path d={route(origin,target)} markerEnd={`url(#${arrowId}arrow)`}/>{demo&&<circle className="travel-cue" cx={point.x} cy={point.y} r="5"/>}</g>}
 {feedback==='error'&&wrong&&<path className="correction-route" d={route(wrong,target)} markerEnd={`url(#${arrowId}arrow)`}/>}
 <g className={`target-halo ${pressed?'halo-pressed':''} ${feedback==='error'?'halo-error':''}`} transform={`translate(${target.x},${target.y})`}><circle r="20"/><circle r="12"/>{demo&&!quiet&&<circle className="halo-orbit" r="25"/>}</g>
 </svg>
 <div className="coach-caption"><span><i className="left-dot"/>左手</span><span><i className="right-dot"/>右手</span><span>{info.shift?'另一只手配合 Shift':movement===3?'按完回到基准键':info.finger?.name||'逐字符输入'}</span><span className="anatomy-note">手指分工示意</span></div>
 </div>;
}
