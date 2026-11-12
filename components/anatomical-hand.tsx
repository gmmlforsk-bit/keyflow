"use client";

import {useEffect, useId, useRef, useState} from "react";
import {FINGER_HOME} from "@/lib/keyboard-model";

type Point = {x:number; y:number};
type Props = {side:number; tips:Point[]; active:number[]; error:boolean; reduced:boolean; paused:boolean};

/** A continuous dorsal hand. Stable knuckles keep a reaching finger from dragging the palm. */
export default function AnatomicalHand({side,tips,active,error,reduced,paused}:Props) {
  const id = useId().replace(/:/g, "");
  const normalize = (p:Point) => ({x:side ? 960-p.x : p.x, y:p.y});
  const target = tips.map(normalize);
  const targetKey = target.map(p=>`${p.x},${p.y}`).join(";");
  const [points,setPoints] = useState<Point[]>(target);
  const current = useRef(points);

  // Every detail uses the same interpolated points: nails never jump ahead of the outline.
  useEffect(()=>{
    if (paused) return;
    const next = target.map(p=>({...p}));
    if (reduced) {current.current=next;setPoints(next);return;}
    const from = current.current.map(p=>({...p}));
    const started = performance.now();
    let frame=0;
    const move=(now:number)=>{
      const progress=Math.min(1,(now-started)/360);
      const eased=1-Math.pow(1-progress,3);
      const value=next.map((p,n)=>({x:from[n].x+(p.x-from[n].x)*eased,y:from[n].y+(p.y-from[n].y)*eased}));
      current.current=value;setPoints(value);
      if(progress<1)frame=requestAnimationFrame(move);
    };
    frame=requestAnimationFrame(move);
    return()=>cancelAnimationFrame(frame);
    // Coordinates are the effect identity; the parent recreates the array each render.
    // eslint-disable-next-line react-hooks/exhaustive-deps
  },[targetKey,reduced,paused]);

  const homes=(side?[7,6,5,4]:[0,1,2,3]).map(n=>normalize(FINGER_HOME[n]));
  const center=(homes[0].x+homes[3].x)/2;
  const roots=homes.map((p,n)=>({x:p.x+[11,4,-3,-9][n],y:[213,229,236,228][n]}));
  const widths=[15,18,19,18];
  const thumb=points[4];
  const outer=roots[0].x-widths[0]-4;
  const wristY=340;

  // Four subtly tapered, flexed fingers with shallow interdigital webs.
  const fingerEdges=(n:number)=>{
    const p=points[n],r=roots[n],w=widths[n];
    const bend=(r.x-p.x)*.55;
    return `C ${r.x-w-3} ${r.y-21} ${p.x-w+bend*.15} ${p.y+37} ${p.x-w} ${p.y+13}
      C ${p.x-w-1} ${p.y-3} ${p.x-w*.55} ${p.y-12} ${p.x} ${p.y-12}
      C ${p.x+w*.6} ${p.y-12} ${p.x+w+1} ${p.y-3} ${p.x+w} ${p.y+13}
      C ${p.x+w} ${p.y+38} ${r.x+w+3} ${r.y-24} ${r.x+w+2} ${r.y}`;
  };
  let outline=`M ${center-61} ${wristY}
    C ${center-63} 325 ${outer-8} 280 ${outer-8} 244
    C ${outer-8} 223 ${outer-4} 208 ${roots[0].x-widths[0]-2} ${roots[0].y}`;
  roots.forEach((r,n)=>{
    outline+=fingerEdges(n);
    if(n<3){const next=roots[n+1],mid=(r.x+next.x)/2;outline+=` Q ${mid} ${Math.max(r.y,next.y)+8} ${next.x-widths[n+1]-2} ${next.y}`;}
  });
  const indexRoot=roots[3];
  // Thenar web and thumb follow a curved diagonal rather than a fifth upright finger.
  outline+=` C ${indexRoot.x+24} 229 ${indexRoot.x+37} 245 ${thumb.x-14} ${thumb.y+15}
    C ${thumb.x-5} ${thumb.y-6} ${thumb.x+2} ${thumb.y-13} ${thumb.x+12} ${thumb.y-8}
    C ${thumb.x+24} ${thumb.y-2} ${thumb.x+19} ${thumb.y+11} ${thumb.x+13} ${thumb.y+23}
    C ${thumb.x+2} ${thumb.y+47} ${indexRoot.x+39} 286 ${indexRoot.x+23} 307
    C ${center+63} 326 ${center+61} 336 ${center+61} ${wristY} Z`;

  return <g className="anatomical-hand natural-hand" transform={side?"translate(960 0) scale(-1 1)":undefined} data-hand-side={side===0?"left":"right"}>
    <defs>
      <linearGradient id={`${id}skin`} x1="0" y1="0" x2="1" y2=".85">
        <stop offset="0" stopColor="#fffaf3"/><stop offset=".47" stopColor="#f4e7d9"/><stop offset="1" stopColor="#e6cdb7"/>
      </linearGradient>
      <radialGradient id={`${id}light`} cx=".42" cy=".38" r=".7">
        <stop stopColor="#fffdf8" stopOpacity=".9"/><stop offset="1" stopColor="#fffdf8" stopOpacity="0"/>
      </radialGradient>
      <linearGradient id={`${id}active`} x1="0" y1="0" x2="0" y2="1">
        <stop stopColor={error?"#e9ab8d":"#9cbce8"} stopOpacity=".78"/><stop offset="1" stopColor={error?"#e9ab8d":"#9cbce8"} stopOpacity=".06"/>
      </linearGradient>
      <linearGradient id={`${id}nail`} x1="0" y1="0" x2="0" y2="1"><stop stopColor="#fffcf8"/><stop offset="1" stopColor="#eddbca"/></linearGradient>
      <clipPath id={`${id}clip`}><path d={outline}/></clipPath>
      <filter id={`${id}shadow`} x="-20%" y="-15%" width="140%" height="140%"><feGaussianBlur stdDeviation="2.1"/></filter>
    </defs>
    <path d={outline} transform="translate(1 4)" fill="#455874" opacity=".1" filter={`url(#${id}shadow)`}/>
    <path className="hand-silhouette" d={outline} style={{fill:`url(#${id}skin)`,stroke:"#bba28c",strokeWidth:1.05,strokeLinejoin:"round"}}/>
    <g clipPath={`url(#${id}clip)`}>
      <ellipse cx={center-10} cy="242" rx="102" ry="96" fill={`url(#${id}light)`}/>
      {roots.map((r,n)=>{
        const p=points[n],w=widths[n];
        const digit=`M ${r.x-w-2} ${r.y} ${fingerEdges(n)} Q ${r.x} ${r.y+29} ${r.x-w-2} ${r.y} Z`;
        return <g key={n} data-digit={n} data-active={active.includes(n)?"true":"false"}>
          {active.includes(n)&&<path d={digit} fill={`url(#${id}active)`}/>}
          <path d={`M ${p.x-w+5} ${p.y+23} Q ${r.x-w+5} ${r.y-16} ${r.x-w+12} ${r.y+3}`} fill="none" stroke="#fffdf8" strokeWidth="3" opacity=".57" strokeLinecap="round"/>
          <path d={`M ${p.x+w-4} ${p.y+26} Q ${r.x+w+2} ${r.y-12} ${r.x+w-5} ${r.y+4}`} fill="none" stroke="#b89b82" strokeWidth="1.4" opacity=".18" strokeLinecap="round"/>
        </g>;
      })}
      {active.includes(4)&&<path d={`M ${thumb.x+2} ${thumb.y+3} Q ${thumb.x-3} ${thumb.y+40} ${indexRoot.x+12} 292`} fill="none" stroke={error?"#dda07d":"#91b4e4"} strokeWidth="29" opacity=".5" strokeLinecap="round"/>}
      {roots.map((r,n)=><path key={`knuckle-${n}`} d={`M ${r.x-12} ${r.y+23} Q ${r.x} ${r.y+18} ${r.x+12} ${r.y+24}`} fill="none" stroke="#bda28b" strokeWidth=".8" opacity=".27" strokeLinecap="round"/>)}
      <path d={`M ${indexRoot.x+7} 259 Q ${indexRoot.x-9} 282 ${indexRoot.x+2} 305`} fill="none" stroke="#bda28b" strokeWidth="1" opacity=".27" strokeLinecap="round"/>
      {roots.slice(1).map((r,n)=><path key={n} d={`M ${r.x-3} ${r.y+31} Q ${r.x-4} 271 ${center+(n-1)*22} 305`} fill="none" stroke="#cfb9a5" strokeWidth=".8" opacity=".27" strokeLinecap="round"/>)}
      <path d={`M ${center-45} 330 Q ${center-5} 323 ${center+42} 330`} fill="none" stroke="#b99a81" strokeWidth=".85" opacity=".38" strokeLinecap="round"/>
    </g>
    {points.map((p,n)=>{
      const root=n===4?{x:indexRoot.x+8,y:290}:roots[n];
      const angle=n===4?32:Number((-Math.atan2(root.x-p.x,root.y-p.y)*180/Math.PI).toFixed(3));
      const nailWidth=n===0?17:n===4?19:21,nailHeight=n===4?20:23;
      return <g key={n} transform={`translate(${p.x} ${p.y}) rotate(${angle})`}>
        <path d={`M ${-nailWidth/2} 4 Q ${-nailWidth/2} -5 0 -5 Q ${nailWidth/2} -5 ${nailWidth/2} 4 L ${nailWidth/2-1} ${nailHeight-8} Q 0 ${nailHeight-3} ${-nailWidth/2+1} ${nailHeight-8} Z`} fill={`url(#${id}nail)`} stroke={active.includes(n)?error?"#b77756":"#6e91bf":"#c6ae98"} strokeWidth=".8" opacity=".95"/>
        <path d={`M ${-nailWidth/2+4} 1 Q 0 -2 ${nailWidth/2-4} 1`} fill="none" stroke="#fffdf9" strokeWidth="1.7" opacity=".85" strokeLinecap="round"/>
        {n<4&&<><path d="M -8 35 Q 0 32 8 35 M -6 39 Q 0 37 6 39" fill="none" stroke="#ba9f88" strokeWidth=".75" opacity=".48" strokeLinecap="round"/><path d="M -11 58 Q 0 54 11 58" fill="none" stroke="#c8b09b" strokeWidth=".7" opacity=".35" strokeLinecap="round"/></>}
      </g>;
    })}
  </g>;
}
